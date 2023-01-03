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
        | 'transferAuthToken'
      > | null
    } | null
  }>

  export enum ErrorCode {
    INVALID_CREDENTIALS = 'INVALID_CREDENTIALS',
    TOO_MANY_ATTEMPTS = 'TOO_MANY_ATTEMPTS',
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
