import { FKEY, KHAN_GRAPHQL_URL } from '../lib/constants'
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
      transferAuthToken
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
}
`

  export interface Variables {
    /**
     * Email or username
     */
    identifier: string
    password: string
  }

  export type Response = DataResponse | InvalidInputErrorResponse

  interface DataResponse {
    data: Data
  }

  interface Data {
    loginWithPassword: LoginWithPassword
  }

  interface LoginWithPassword {
    __typename: 'LoginWithPasswordMutation'
    error: Error | null
    isFirstLogin: boolean | null
    user: User | null
  }

  interface User {
    __typename: 'User'
    canAccessDistrictsHomepage: boolean
    hasUnresolvedInvitations: boolean
    id: unknown | null
    isTeacher: boolean
    kaid: string
    preferredKaLocale: unknown | null
    transferAuthToken: string
  }

  export enum ErrorCode {
    INVALID_CREDENTIALS = 'INVALID_CREDENTIALS',
  }

  interface Error {
    __typename: 'LoginWithPasswordMutationError'
    code: ErrorCode
  }

  interface InvalidInputErrorResponse {
    errors: InvalidInputError[]
  }

  interface InvalidInputError {
    message: string
  }
}

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
      headers: {
        'x-ka-fkey': FKEY,
        Cookie: `fkey=${FKEY}`,
      },
      ...init,
    }
  )
}
