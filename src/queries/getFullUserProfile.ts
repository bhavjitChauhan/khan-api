import { graphql, TypedResponse } from '../utils/fetch'
import { KHAN_GRAPHQL_URL } from '../lib/constants'
import { StandardResponse } from '../types/responses'
import { Kaid } from '../types/strings'
import { ProfileSchema, UserSchema } from '../types/schema'
import { isKaid } from '../utils/regexes'

export namespace GetFullUserProfile {
  export const query = `query getFullUserProfile($kaid: String, $username: String) {
  user(kaid: $kaid, username: $username) {
    id
    kaid
    key
    userId
    email
    username
    profileRoot
    gaUserId
    isPhantom
    isDeveloper: hasPermission(name: "can_do_what_only_admins_can_do")
    isPublisher: hasPermission(name: "can_publish", scope: ANY_ON_CURRENT_LOCALE)
    isModerator: hasPermission(name: "can_moderate_users", scope: GLOBAL)
    isParent
    isTeacher
    isFormalTeacher
    isK4dStudent
    isKmapStudent
    isDataCollectible
    isChild
    isOrphan
    isCoachingLoggedInUser
    canModifyCoaches
    nickname
    hideVisual
    joined
    points
    countVideosCompleted
    bio
    profile {
      accessLevel
      __typename
    }
    soundOn
    muteVideos
    showCaptions
    prefersReducedMotion
    noColorInVideos
    newNotificationCount
    canHellban: hasPermission(name: "can_ban_users", scope: GLOBAL)
    canMessageUsers: hasPermission(
      name: "can_send_moderator_messages"
      scope: GLOBAL
    )
    isSelf: isActor
    hasStudents: hasCoachees
    hasClasses
    hasChildren
    hasCoach
    badgeCounts
    homepageUrl
    isMidsignupPhantom
    includesDistrictOwnedData
    includesKmapDistrictOwnedData
    includesK4dDistrictOwnedData
    canAccessDistrictsHomepage
    underAgeGate {
      parentEmail
      daysUntilCutoff
      approvalGivenAt
      __typename
    }
    authEmails
    signupDataIfUnverified {
      email
      emailBounced
      __typename
    }
    pendingEmailVerifications {
      email
      __typename
    }
    hasAccessToAIGuideCompanionMode
    hasAccessToAIGuideLearner
    hasAccessToAIGuideDistrictAdmin
    hasAccessToAIGuideParent
    hasAccessToAIGuideTeacher
    tosAccepted
    shouldShowAgeCheck
    birthMonthYear
    lastLoginCountry
    region
    userDistrictInfos {
      id
      isKAD
      district {
        id
        region
        __typename
      }
      __typename
    }
    schoolAffiliation {
      id
      location
      __typename
    }
    __typename
  }
  actorIsImpersonatingUser
  isAIGuideEnabled
  hasAccessToAIGuideDev
}`

  export interface Variables {
    kaid?: Kaid | null
    username?: string | null
  }

  export type Response = StandardResponse<Data>

  export type Data = {
    actorIsImpersonatingUser: boolean
    user: Pick<
      UserSchema<unknown, Pick<ProfileSchema, '__typename' | 'accessLevel'>>,
      | '__typename'
      | 'authEmails'
      | 'badgeCounts'
      | 'birthMonthYear'
      | 'bio'
      | 'canAccessDistrictsHomepage'
      | 'canHellban'
      | 'canMessageUsers'
      | 'canModifyCoaches'
      | 'countVideosCompleted'
      | 'email'
      | 'gaUserId'
      | 'hasAccessToAIGuideDev'
      | 'hasAccessToAIGuideCompanionMode'
      | 'hasAccessToAIGuideDistrictAdmin'
      | 'hasAccessToAIGuideLearner'
      | 'hasAccessToAIGuideParent'
      | 'hasAccessToAIGuideTeacher'
      | 'hasChildren'
      | 'hasClasses'
      | 'hasCoach'
      | 'hasStudents'
      | 'hideVisual'
      | 'homepageUrl'
      | 'id'
      | 'includesDistrictOwnedData'
      | 'includesK4dDistrictOwnedData'
      | 'includesKmapDistrictOwnedData'
      | 'isAIGuideEnabled'
      | 'isChild'
      | 'isCoachingLoggedInUser'
      | 'isCreator'
      | 'isCurator'
      | 'isDataCollectible'
      | 'isDeveloper'
      | 'isFormalTeacher'
      | 'isK4dStudent'
      | 'isKmapStudent'
      | 'isMidsignupPhantom'
      | 'isModerator'
      | 'isOrphan'
      | 'isParent'
      | 'isPhantom'
      | 'isPublisher'
      | 'isSelf'
      | 'isTeacher'
      | 'joined'
      | 'kaid'
      | 'key'
      | 'lastLoginCountry'
      | 'muteVideos'
      | 'newNotificationCount'
      | 'nickname'
      | 'noColorInVideos'
      | 'pendingEmailVerifications'
      | 'points'
      | 'prefersReducedMotion'
      | 'profile'
      | 'profileRoot'
      | 'region'
      | 'shouldShowAgeCheck'
      | 'showCaptions'
      | 'signupDataIfUnverified'
      | 'soundOn'
      | 'tosAccepted'
      | 'underAgeGate'
      | 'userId'
      | 'username'
    > | null
  }
}

/**
 * Low-level function for making a `getFullUserProfile` request.
 *
 * @remarks
 * This request does not require authentication but some fields will be returned
 * as `null`.
 *
 * If, for some reason, both `kaid` and `username` are provided, Khan Academy
 * will use `kaid` and ignore `username`.
 *
 * @param variables Fetches profile associated with any cookies if not provided
 *
 * @link {@link https://khan-api.bhavjit.com/reference/view/19553924/2s8YzQUiXU#9ae4c690-be8a-4b57-acfc-07a4870a5ee3 | Reference}
 *
 * @see {@link Client.getUser}
 *
 * @example
 * Get profile by KAID, without error handling:
 * ```js
 * const response = await queries.getFullUserProfile({ kaid: 'kaid_326465577260382527912172' })
 * const json = await response.json()
 * const profile = json.data.user
 * ```
 *
 * @example
 * Similarly, get profile by username:
 * ```js
 * const response = await queries.getFullUserProfile({ username: 'sal' })
 * const json = await response.json()
 * const profile = json.data.user
 * ```
 *
 * @example
 * If no variables are provided or an empty object is passed in, Khan Academy
 * will use any cookies included with the request to fetch the profile
 * associated with them:
 * ```js
 * const response = await queries.getFullUserProfile(null, {
 *  headers: { cookie: 'KAAS=...' }
 * })
 * const json = await response.json()
 * const profile = json.data.user
 * ```
 */
export default function getFullUserProfile(
  variables?: GetFullUserProfile.Variables,
  init?: RequestInit
): Promise<TypedResponse<GetFullUserProfile.Response>>
/**
 * @example
 * Alternative usage by KAID:
 * ```js
 * const response = await queries.getFullUserProfile('kaid_326465577260382527912172')
 * const json = await response.json()
 * const profile = json.data.user
 * ```
 */
export default function getFullUserProfile(
  kaid?: Kaid,
  init?: RequestInit
): Promise<TypedResponse<GetFullUserProfile.Response>>
/**
 * @example
 * Similarly, by username:
 * ```js
 * const response = await queries.getFullUserProfile('sal')
 * const json = await response.json()
 * const profile = json.data.user
 * ```
 */
export default function getFullUserProfile(
  username?: string,
  init?: RequestInit
): Promise<TypedResponse<GetFullUserProfile.Response>>
export default function getFullUserProfile(
  variablesOrIdentifier?: GetFullUserProfile.Variables | Kaid | string,
  init?: RequestInit
) {
  return graphql<GetFullUserProfile.Variables, GetFullUserProfile.Response>(
    `${KHAN_GRAPHQL_URL}/getFullUserProfile`,
    GetFullUserProfile.query,
    typeof variablesOrIdentifier === 'string'
      ? isKaid(variablesOrIdentifier)
        ? { kaid: variablesOrIdentifier }
        : { username: variablesOrIdentifier }
      : variablesOrIdentifier,
    init
  )
}
