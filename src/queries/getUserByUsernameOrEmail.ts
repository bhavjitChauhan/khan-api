import { KHAN_GRAPHQL_URL } from '../lib/constants'
import { StandardResponse } from '../types/responses'
import { UserSchema } from '../types/schema'
import { Email } from '../types/strings'
import { graphql, TypedResponse } from '../utils/fetch'
import { isEmail } from '../utils/regexes'

export namespace GetUserByUsernameOrEmail {
  export const query = `query getUserByUsernameOrEmail($username: String, $email: String) {
  user(username: $username, email: $email) {
    id
    kaid
    __typename
  }
}`

  export interface Variables {
    username?: string
    email?: string
  }

  export type Response = StandardResponse<Data>

  export type Data = {
    user: Pick<UserSchema, '__typename' | 'id' | 'kaid'> | null
  }
}

/**
 * Get KAID by username or email.
 *
 * @link {@link https://khan-api.bhavjit.com/reference/view/19553924/2s8YzQUiXU#46e24c10-e98e-4900-bd53-b02d93f8e3c9 | Reference}
 *
 * @example
 * Simple usage without error handling:
 * ```js
 * const response = await queries.getUserByUsernameOrEmail({
 *   username: 'sal'
 * })
 * const json = await response.json()
 * const kaid = json.data.user?.kaid
 * ```
 *
 * @example
 * Similarly, get KAID by email:
 * ```js
 * const response = await queries.getUserByUsernameOrEmail({
 *  email: 'sal@khanacademy.org'
 * })
 * const json = await response.json()
 * const kaid = json.data.user?.kaid
 * ```
 */
export default function getUserByUsernameOrEmail(
  variables: GetUserByUsernameOrEmail.Variables,
  init?: RequestInit
): Promise<TypedResponse<GetUserByUsernameOrEmail.Response>>
/**
 * @example
 * Alternative usage by username:
 * ```js
 * const response = await queries.getUserByUsernameOrEmail('sal')
 * const json = await response.json()
 * const kaid = json.data.user?.kaid
 * ```
 */
export default function getUserByUsernameOrEmail(
  username: string,
  init?: RequestInit
): Promise<TypedResponse<GetUserByUsernameOrEmail.Response>>
/**
 * @example
 * Similarly, by email:
 * ```js
 * const response = await queries.getUserByUsernameOrEmail('sal@khanacademy.org')
 * const json = await response.json()
 * const kaid = json.data.user?.kaid
 * ```
 */
export default function getUserByUsernameOrEmail(
  email: Email,
  init?: RequestInit
): Promise<TypedResponse<GetUserByUsernameOrEmail.Response>>
export default function getUserByUsernameOrEmail(
  variablesOrIdentifier: GetUserByUsernameOrEmail.Variables | string | Email,
  init?: RequestInit
) {
  return graphql<
    GetUserByUsernameOrEmail.Variables,
    GetUserByUsernameOrEmail.Response
  >(
    `${KHAN_GRAPHQL_URL}/getUserByUsernameOrEmail`,
    GetUserByUsernameOrEmail.query,
    typeof variablesOrIdentifier === 'string'
      ? isEmail(variablesOrIdentifier)
        ? { email: variablesOrIdentifier }
        : { username: variablesOrIdentifier }
      : variablesOrIdentifier,
    init
  )
}
