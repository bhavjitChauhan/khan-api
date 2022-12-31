import loginWithPasswordMutation, {
  LoginWithPasswordMutation,
} from './mutations/loginWithPasswordMutation'

export default class KhanClient {
  #identifier: string | null = null
  #password: string | null = null
  #cookies: string | null = null
  
  kaid: string | null = null
  authenticated = false

  constructor() {
    return this
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
    const response = await loginWithPasswordMutation({
      identifier: this.#identifier,
      password: this.#password,
    })

    // Check for invalid response
    if (!response.ok) throw new Error('Invalid response')

    const json = await response.json()
    // Check for invalid input error
    if ('errors' in json)
      throw new Error('Invalid Input error: ' + json.errors[0].message)

    // Check for other errors
    if (json.data.loginWithPassword.error)
      switch (json.data.loginWithPassword.error.code) {
        case LoginWithPasswordMutation.ErrorCode.INVALID_CREDENTIALS:
          throw new Error(
            'Invalid Credentials error: Check your username/email and password'
          )
        default:
          throw new Error('Unknown error')
      }

    // Get the cookies from the response
    const cookies = response.headers.get('set-cookie')
    if (!cookies)
      throw new Error(
        "No cookies returned: Something went wrong on Khan Academy's end"
      )
    this.#cookies = cookies

    // Store the user's KAID for future use
    this.kaid =
      json.data.loginWithPassword.user?.kaid ??
      response.headers.get('x-ka-kaid')

    this.authenticated = true

    return this
  }
}
