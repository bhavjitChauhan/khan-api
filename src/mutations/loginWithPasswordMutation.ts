import { FKEY, KHAN_GRAPHQL_URL } from '../lib/constants'
import { StandardResponse } from '../types/responses'
import { UserSchema } from '../types/schema'
import { graphql } from '../utils/fetch'

export namespace LoginWithPasswordMutation {
  export const query = `mutation loginWithPasswordMutation($identifier: String!, $password: String!) {
  loginWithPassword(identifier: $identifier, password: $password) {
    user {
      id
      kaid
      canAccessDistrictsHomepage
      isTeacher
      hasUnresolvedInvitations
      preferredKaLocale {
        id
        kaLocale
        status
        __typename
      }
      __typename
    }
    isFirstLogin
    error {
      code
      __typename
    }
    __typename
  }
}`

  export interface Variables {
    /** Email or username */
    identifier: string
    password: string
  }

  export type Response = StandardResponse<{
    loginWithPassword: {
      __typename: 'LoginWithPasswordMutation'
      error: {
        __typename: 'LoginWithPasswordMutationError'
        code: ErrorCode
      } | null
      isFirstLogin: boolean | null
      user: Pick<
        UserSchema,
        | '__typename'
        | 'canAccessDistrictsHomepage'
        | 'hasUnresolvedInvitations'
        | 'id'
        | 'isTeacher'
        | 'kaid'
        | 'preferredKaLocale'
      > | null
    } | null
  }>

  export enum ErrorCode {
    INVALID_CREDENTIALS = 'INVALID_CREDENTIALS',
    TOO_MANY_ATTEMPTS = 'TOO_MANY_ATTEMPTS',
  }
}

/**
 * Low-level function for making a `loginWithPasswordMutation` request.
 *
 * @remarks
 * There are many things that can go wrong with this request and Khan Academy
 * doesn't provide a great way to handle them. It's recommended to use
 * {@link Client.login | Client.login} instead.
 *
 * @link {@link https://khan-api.bhavjit.com/reference/view/19553924/2s8YzQUiXU#77a4642b-3580-4409-b837-1ac82a487c35 | Reference}
 *
 * @see {@link Client.login}
 *
 * @example
 * Simple usage without error handling:
 * ```js
 * const response = await mutations.loginWithPasswordMutation({
 *   identifier: 'username', // or email
 *   password: 'password',
 * })
 *
 * const cookies = response.headers.get('set-cookie')
 * ```
 */
export default function loginWithPasswordMutation(
  variables: LoginWithPasswordMutation.Variables,
  init?: RequestInit
) {
  return graphql<
    LoginWithPasswordMutation.Variables,
    LoginWithPasswordMutation.Response
  >(
    `${KHAN_GRAPHQL_URL}/loginWithPasswordMutation`,
    LoginWithPasswordMutation.query,
    variables,
    {
      // This is required for the request to work, see reference
      headers: {
        'x-ka-fkey': FKEY,
        Cookie: `fkey=${FKEY}`,
      },
      ...init,
    }
  )
}
