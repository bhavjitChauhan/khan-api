import loginWithPasswordMutation, {
  LoginWithPasswordMutation,
} from './mutations/loginWithPasswordMutation'
import { Program } from './Program'
import getFullUserProfile from './queries/getFullUserProfile'
import programQuery from './queries/programQuery'
import {
  isServiceErrorsResponse,
  isInputErrorResponse,
  StandardResponse,
  isDataResponse,
  DataResponse,
} from './types/responses'
import { KAID } from './types/strings'
import User from './User'
import { stripCookies } from './utils/cookies'
import { TypedResponse } from './utils/fetch'
import { truncate } from './utils/format'
import { KaidRegex, ProgramIDRegex, ProgramURLRegex } from './utils/regexes'

export default class Client {
  #identifier?: string
  #password?: string
  #cookies?: string

  authenticated = false
  kaid: KAID | null = null
  user?: User

  constructor() {
    return this
  }

  static #isValidResponse<T>(
    response: TypedResponse<StandardResponse>,
    json: StandardResponse<T>
  ): json is DataResponse<T> {
    if (!response.ok)
      throw new Error(
        `Invalid response: ${response.status} ${response.statusText}${
          isInputErrorResponse(json) ? `: ${json.errors[0].message}` : ''
        }`
      )
    if (isInputErrorResponse(json))
      throw new Error('Invalid Input error: ' + json.errors[0].message)
    if (isServiceErrorsResponse(json))
      throw new Error('Service error: ' + json.errors[0].message)
    if (!isDataResponse(json)) throw new Error('Malformed response')
    return true
  }

  /**
   * @param identifier Username or email
   * @param password
   */
  async login(identifier?: string, password?: string) {
    // Credentials may already be stored from previous login
    if (identifier) this.#identifier = identifier
    if (password) this.#password = password

    // Check for missing credentials
    if (!this.#identifier || !this.#password) {
      if (!this.#identifier) throw new Error('Missing username or email')
      if (!this.#password) throw new Error('Missing password')
      throw new Error('Missing username/email and password')
    }

    // Make the login request
    const response = await loginWithPasswordMutation(
      {
        identifier: this.#identifier,
        password: this.#password,
      },
      { credentials: 'include' }
    )

    // @TODO: Handle invalid JSON response
    const json = await response.json()

    // @TODO: Find a better way to throw errors inside validator while still acting as a user-defined type guard
    if (!Client.#isValidResponse(response, json)) return

    if (!json.data.loginWithPassword) throw new Error('Malformed response')

    // Check for other mutation-specific errors
    if (json.data.loginWithPassword.error)
      switch (json.data.loginWithPassword.error.code) {
        case LoginWithPasswordMutation.ErrorCode.INVALID_CREDENTIALS:
          throw new Error(
            'Invalid Credentials error: Check your username/email and password'
          )
        case LoginWithPasswordMutation.ErrorCode.TOO_MANY_ATTEMPTS:
          throw new Error(
            'Too Many Attempts error: Rate-limited by Khan Academy'
          )
        default: {
          throw new Error(
            'Unknown error code: ' +
              (json.data.loginWithPassword.error.code as unknown as string)
          )
        }
      }

    // Get the cookies from the response
    const cookies = response.headers.get('set-cookie')
    if (!cookies)
      throw new Error(
        "No cookies returned: Something went wrong on Khan Academy's end"
      )
    this.#cookies = stripCookies(cookies)

    // Store the user's KAID for future use
    this.kaid =
      typeof json.data.loginWithPassword.user?.kaid === 'string' &&
      KaidRegex.test(json.data.loginWithPassword.user.kaid)
        ? (json.data.loginWithPassword.user.kaid as KAID)
        : null

    this.authenticated = true

    return json.data.loginWithPassword
  }

  /**
   * @param identifier KAID or username
   */
  async getUser(identifier?: string) {
    if (!identifier && !this.authenticated)
      throw new Error(
        'Not authenticated: Login to get client user or provide a kaid/username'
      )

    const response = await getFullUserProfile(
      identifier
        ? { [KaidRegex.test(identifier) ? 'kaid' : 'username']: identifier }
        : undefined,
      !identifier
        ? { credentials: 'include', headers: { cookie: this.#cookies! } }
        : undefined
    )
    const json = await response.json()

    if (!Client.#isValidResponse(response, json))
      throw new Error('Invalid response')
    if (!json.data.user) throw new Error('User not found')

    const user = User.fromUserSchema(json.data.user)
    user.client = this
    if (user.self) this.user = user

    return user
  }

  /**
   * @param id Program ID or URL
   */
  async getProgram(id: number | string) {
    if (typeof id === 'number') {
      id = id.toString()
      if (!ProgramIDRegex.test(id)) throw new Error('Invalid program ID')
    } else {
      if (ProgramURLRegex.test(id)) id = id.match(ProgramURLRegex)![1]
      if (!ProgramIDRegex.test(id)) throw new Error('Invalid program ID or URL')
    }

    const response = await programQuery({
      programId: id,
    })
    const json = await response.json()

    if (!Client.#isValidResponse(response, json))
      throw new Error('Invalid response')
    if (!json.data.programById) throw new Error('Program not found')

    const program = Program.fromProgramSchema(json.data.programById)
    program.client = this
    if (this.user && program.author?.kaid === this.kaid) {
      program.copy({
        author: this.user,
      })
      console.log(
        `[getProgram] Copied the client's user data to program ${
          program.title
            ? `"${truncate(program.title, 32)}"`
            : program.id ?? 'unknown'
        } because the program's author matches the client user`
      )
    }

    return program
  }
}
