import loginWithPasswordMutation, {
  LoginWithPasswordMutation,
} from './mutations/loginWithPasswordMutation'
import { Program } from './Program'
import avatarDataForProfile from './queries/avatarDataForProfile'
import getFullUserProfile from './queries/getFullUserProfile'
import getUserByUsernameOrEmail from './queries/getUserByUsernameOrEmail'
import programQuery from './queries/programQuery'
import {
  isServiceErrorsResponse,
  isInputErrorResponse,
  StandardResponse,
  isDataResponse,
  DataResponse,
} from './types/responses'
import { Kaid } from './types/strings'
import User from './User'
import {
  extractAvatarSlug,
  generateAvatarPNG,
  generateAvatarSVG,
} from './utils/avatars'
import { stripCookies } from './utils/cookies'
import { TypedResponse } from './utils/fetch'
import { truncate } from './utils/format'
import {
  EmailRegex,
  isKaid,
  KaidRegex,
  ProgramIDRegex,
  ProgramURLRegex,
} from './utils/regexes'

export default class Client {
  #identifier?: string
  #password?: string
  #cookies?: string

  #identifierMap = new Map<string, Kaid>()

  authenticated = false
  kaid: Kaid | null = null
  user?: User

  constructor() {
    return this
  }

  /**
   * @throws Error if the response is not valid
   */
  static #assertValidResponse<T>(
    response: TypedResponse<StandardResponse<T>>,
    json: StandardResponse<T>
  ): asserts json is DataResponse<T> {
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
  }

  /**
   * Resolves a username or email to a KAID and caches the result
   *
   * @remarks
   * If the identifier is cached, it will be returned immediately. Otherwise a
   * `getUserByUsernameOrEmail` request will be made to resolve the identifier.
   *
   * @param identifier Username or email
   * @returns KAID
   */
  async #resolveKaid(identifier: string) {
    if (KaidRegex.test(identifier)) return identifier as Kaid

    if (this.#identifierMap.has(identifier))
      return this.#identifierMap.get(identifier)!

    const isEmail = EmailRegex.test(identifier)
    const response = await getUserByUsernameOrEmail({
      [isEmail ? 'email' : 'username']: identifier,
    })
    const json = await response.json()

    Client.#assertValidResponse(response, json)
    if (!json.data.user) throw new Error('User not found')

    const kaid = json.data.user.kaid
    if (kaid === '') throw new Error('User does not have a valid KAID')

    if (!this.#identifierMap.has(identifier))
      this.#identifierMap.set(identifier, kaid)

    return kaid
  }

  /**
   * Gets the KAAS cookie from the current session
   *
   * @remarks
   * The KAAS cookie is used by Khan Academy to authenticate requests.
   *
   * @returns KAAS cookie or null if not authenticated
   */
  get kaas() {
    if (!this.authenticated || !this.#cookies) return null

    return this.#cookies.match(/KAAS=([^;]+)/)?.[1] ?? null
  }

  /**
   * @param identifier Username or email
   * @param password
   */
  // @TODO: Add support for KAID login
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

    Client.#assertValidResponse(response, json)
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

    // Can this be a getter for `this.#cookies` instead?
    this.authenticated = true

    // Store the user's KAID for future use
    this.kaid =
      typeof json.data.loginWithPassword.user?.kaid === 'string' &&
      KaidRegex.test(json.data.loginWithPassword.user.kaid)
        ? (json.data.loginWithPassword.user.kaid as Kaid)
        : null
    if (this.kaid === null)
      console.warn(
        `User ${
          identifier ?? this.kaas ?? 'unknown'
        } does not have a valid KAID`
      )

    return json.data.loginWithPassword
  }

  /**
   * @param identifier KAID, username or email
   */
  async getUser(identifier?: string) {
    // Theoretically possible to also allow email identifiers using `getUserByUsernameOrEmail` query
    if (!identifier && !this.authenticated)
      throw new Error(
        'Not authenticated: Login to get client user or provide a kaid/username'
      )

    let email: string | null = null
    if (identifier && EmailRegex.test(identifier)) {
      email = identifier
      identifier = await this.#resolveKaid(identifier)
    }

    const response = await getFullUserProfile(
      identifier
        ? { [KaidRegex.test(identifier) ? 'kaid' : 'username']: identifier }
        : undefined,
      !identifier
        ? { credentials: 'include', headers: { cookie: this.#cookies! } }
        : undefined
    )
    const json = await response.json()

    Client.#assertValidResponse(response, json)
    if (!json.data.user) throw new Error('User not found')

    const user = User.fromUserSchema(json.data.user)
    user.client = this
    if (!user.email && email && EmailRegex.test(email)) user.copy({ email })
    if (user.self) this.user = user

    if (user.kaid) {
      if (user.username && !this.#identifierMap.has(user.username))
        this.#identifierMap.set(user.username, user.kaid)
      if (user.email && !this.#identifierMap.has(user.email))
        this.#identifierMap.set(user.email, user.kaid)
    }

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

    Client.#assertValidResponse(response, json)
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

  async getAvatar(
    identifier: string | undefined = this.kaid ?? this.#identifier,
    type: 'svg' | 'png' = 'svg'
  ) {
    if (!identifier) throw new Error('No identifier provided')

    if (!isKaid(identifier)) identifier = await this.#resolveKaid(identifier)

    const response = await avatarDataForProfile({
      // Why do I have to cast this to `Kaid`? It should already be `Kaid`...
      kaid: identifier as Kaid,
    })
    const json = await response.json()

    Client.#assertValidResponse(response, json)
    if (!json.data.user) throw new Error('User not found')

    const slug = extractAvatarSlug(json.data.user.avatar.imageSrc)
    if (!slug) throw new Error('User has no avatar')

    return type === 'svg' ? generateAvatarSVG(slug) : generateAvatarPNG(slug)
  }
}
