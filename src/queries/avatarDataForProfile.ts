import { KHAN_GRAPHQL_URL } from '../lib/constants'
import { StandardResponse } from '../types/responses'
import { AvatarSchema, UserSchema } from '../types/schema'
import { Kaid } from '../types/strings'
import { graphql, TypedResponse } from '../utils/fetch'

export namespace AvatarDataForProfile {
  export const query = `query avatarDataForProfile($kaid: String!) {
  user(kaid: $kaid) {
    id
    avatar {
      name
      imageSrc
      __typename
    }
    __typename
  }
}`

  export interface Variables {
    kaid: Kaid
  }

  export type Response = StandardResponse<Data>

  export type Data = {
    user: Pick<
      UserSchema<Pick<AvatarSchema, '__typename' | 'imageSrc' | 'name'>>,
      '__typename' | 'avatar' | 'id' | 'kaid'
    > | null
  }
}

/**
 * Low-level function for making a `avatarDataForProfile` request.
 *
 * @link {@link https://khan-api.bhavjit.com/reference/view/19553924/2s8YzQUiXU#256c194a-f6d5-4c7a-aaa5-97792cdba1b3 | Reference}
 *
 * @example
 * Simple usage without error handling:
 * ```js
 * const response = await queries.avatarDataForProfile({
 *   kaid: 'kaid_326465577260382527912172'
 * })
 * const json = await response.json()
 * const profile = json.data.user
 * const avatar = profile.avatar
 * ```
 */
export default function avatarDataForProfile(
  variables: AvatarDataForProfile.Variables,
  init?: RequestInit
): Promise<TypedResponse<AvatarDataForProfile.Response>>
/**
 * @example
 * Alternative usage:
 * ```js
 * const response = await queries.avatarDataForProfile('kaid_326465577260382527912172')
 * const json = await response.json()
 * const profile = json.data.user
 * const avatar = profile.avatar
 * ```
 */
export default function avatarDataForProfile(
  kaid: Kaid,
  init?: RequestInit
): Promise<TypedResponse<AvatarDataForProfile.Response>>
export default function avatarDataForProfile(
  variablesOrKaid: AvatarDataForProfile.Variables | Kaid,
  init?: RequestInit
) {
  return graphql<AvatarDataForProfile.Variables, AvatarDataForProfile.Response>(
    `${KHAN_GRAPHQL_URL}/avatarDataForProfile`,
    AvatarDataForProfile.query,
    typeof variablesOrKaid === 'string'
      ? { kaid: variablesOrKaid }
      : variablesOrKaid,
    init
  )
}
