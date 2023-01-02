import loginWithPasswordMutation, {
  LoginWithPasswordMutation,
} from './mutations/loginWithPasswordMutation'
import getFullUserProfile from './queries/getFullUserProfile'
import {
  isServiceErrorsResponse,
  isInputErrorResponse,
  StandardResponse,
  isDataResponse,
  DataResponse,
} from './types/responses'
import { stripCookies } from './utils/cookies'
import { TypedResponse } from './utils/fetch'
import { KaidRegex } from './utils/regexes'

export default class KhanClient {
  #identifier: string | null = null
  #password: string | null = null
  #cookies: string | null = null

  kaid: string | null = null
  authenticated = false

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
    if (!KhanClient.#isValidResponse(response, json)) return

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
      json.data.loginWithPassword.user?.kaid ??
      response.headers.get('x-ka-kaid')

    this.authenticated = true

    return json.data.loginWithPassword
  }

  /**
   * @param user KAID or username
   */
  async getProfile(user?: string) {
    if (!user && !this.authenticated)
      throw new Error('Not authenticated: Login or provide a kaid/username')

    const response = await getFullUserProfile(
      user ? { [KaidRegex.test(user) ? 'kaid' : 'username']: user } : undefined,
      !user
        ? { credentials: 'include', headers: { Cookie: this.#cookies! } }
        : undefined
    )
    const json = await response.json()

    if (!KhanClient.#isValidResponse(response, json)) return

    if (!json.data.user) throw new Error('User not found')

    return json.data.user
  }
}
