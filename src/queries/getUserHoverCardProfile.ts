import { KHAN_GRAPHQL_URL } from '../lib/constants'
import { StandardResponse } from '../types/responses'
import { AvatarSchema, UserSchema } from '../types/schema'
import { Kaid } from '../types/strings'
import { graphql, TypedResponse } from '../utils/fetch'

export namespace GetUserHoverCardProfile {
  export const query = `query getUserHoverCardProfile($kaid: String!) {
  user(kaid: $kaid) {
    id
    nickname
    username
    bio
    avatar {
      name
      imageSrc
      __typename
    }
    points
    isPhantom
    isActor
    isCoachedByActor
    userSummaryIsVisibleToActor
    actorHasUserScopedPermission(capability: CAN_VIEW_USER_IDENTITY)
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
      | '__typename'
      | 'actorHasUserScopedPermission'
      | 'avatar'
      | 'bio'
      | 'id'
      | 'isActor'
      | 'isCoachedByActor'
      | 'isPhantom'
      | 'kaid'
      | 'nickname'
      | 'points'
      | 'userSummaryIsVisibleToActor'
      | 'username'
    > | null
  }
}

/**
 * Low-level function for making a `getUserHoverCardProfile` request.
 *
 * @link {@link https://khan-api.bhavjit.com/reference/view/19553924/2s8YzQUiXU#6de1d62b-d8b4-425e-b0f2-305be6279718 | Reference}
 *
 * @example
 * Simple usage without error handling:
 * ```js
 * const response = await queries.getUserHoverCardProfile({
 *   kaid: 'kaid_326465577260382527912172'
 * })
 * const json = await response.json()
 * const profile = json.data.user
 * ```
 */
export default function getUserHoverCardProfile(
  variables: GetUserHoverCardProfile.Variables,
  init?: RequestInit
): Promise<TypedResponse<GetUserHoverCardProfile.Response>>
/**
 * @example
 * Alternative usage:
 * ```js
 * const response = await queries.getUserHoverCardProfile('kaid_326465577260382527912172')
 * const json = await response.json()
 * const profile = json.data.user
 * ```
 */
export default function getUserHoverCardProfile(
  kaid: Kaid,
  init?: RequestInit
): Promise<TypedResponse<GetUserHoverCardProfile.Response>>
export default function getUserHoverCardProfile(
  variablesOrKaid: GetUserHoverCardProfile.Variables | Kaid,
  init?: RequestInit
) {
  return graphql<
    GetUserHoverCardProfile.Variables,
    GetUserHoverCardProfile.Response
  >(
    `${KHAN_GRAPHQL_URL}/getUserHoverCardProfile`,
    GetUserHoverCardProfile.query,
    typeof variablesOrKaid === 'string'
      ? { kaid: variablesOrKaid }
      : variablesOrKaid,
    init
  )
}
