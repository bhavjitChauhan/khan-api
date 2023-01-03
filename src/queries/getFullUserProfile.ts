import { graphql } from '../utils/fetch'
import { KHAN_GRAPHQL_URL } from '../lib/constants'
import { StandardResponse } from '../types/responses'
import { KAID } from '../types/strings'
import { UserSchema } from '../types/schema'

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
    qualarooId
    isPhantom
    isDeveloper: hasPermission(name: "can_do_what_only_admins_can_do")
    isCurator: hasPermission(name: "can_curate_tags", scope: ANY_ON_CURRENT_LOCALE)
    isCreator: hasPermission(name: "has_creator_role", scope: ANY_ON_CURRENT_LOCALE)
    isPublisher: hasPermission(name: "can_publish", scope: ANY_ON_CURRENT_LOCALE)
    isModerator: hasPermission(name: "can_moderate_users", scope: GLOBAL)
    isParent
    isSatStudent
    isTeacher
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
    autocontinueOn
    newNotificationCount
    canHellban: hasPermission(name: "can_ban_users", scope: GLOBAL)
    canMessageUsers: hasPermission(name: "can_send_moderator_messages", scope: GLOBAL)
    isSelf: isActor
    hasStudents: hasCoachees
    hasClasses
    hasChildren
    hasCoach
    badgeCounts
    homepageUrl
    isMidsignupPhantom
    includesDistrictOwnedData
    canAccessDistrictsHomepage
    preferredKaLocale {
      id
      kaLocale
      status
      __typename
    }
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
    tosAccepted
    shouldShowAgeCheck
    __typename
  }
  actorIsImpersonatingUser
}
`

  export interface Variables {
    kaid?: KAID | null
    username?: string | null
  }

  export type Response = StandardResponse<Data>

  export type Data = {
    actorIsImpersonatingUser: boolean
    user: Pick<
      UserSchema,
      | '__typename'
      | 'authEmails'
      | 'autocontinueOn'
      | 'badgeCounts'
      | 'bio'
      | 'canAccessDistrictsHomepage'
      | 'canHellban'
      | 'canMessageUsers'
      | 'canModifyCoaches'
      | 'countVideosCompleted'
      | 'email'
      | 'gaUserId'
      | 'hasChildren'
      | 'hasClasses'
      | 'hasCoach'
      | 'hasStudents'
      | 'hideVisual'
      | 'homepageUrl'
      | 'id'
      | 'includesDistrictOwnedData'
      | 'isChild'
      | 'isCoachingLoggedInUser'
      | 'isCreator'
      | 'isCurator'
      | 'isDataCollectible'
      | 'isDeveloper'
      | 'isMidsignupPhantom'
      | 'isModerator'
      | 'isOrphan'
      | 'isParent'
      | 'isPhantom'
      | 'isPublisher'
      | 'isSatStudent'
      | 'isSelf'
      | 'isTeacher'
      | 'joined'
      | 'kaid'
      | 'key'
      | 'muteVideos'
      | 'newNotificationCount'
      | 'nickname'
      | 'noColorInVideos'
      | 'pendingEmailVerifications'
      | 'points'
      | 'preferredKaLocale'
      | 'prefersReducedMotion'
      | 'profile'
      | 'profileRoot'
      | 'qualarooId'
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

export default function getFullUserProfile(
  variables?: GetFullUserProfile.Variables,
  init?: RequestInit
) {
  return graphql<GetFullUserProfile.Variables, GetFullUserProfile.Response>(
    `${KHAN_GRAPHQL_URL}/getFullUserProfile`,
    GetFullUserProfile.query,
    variables,
    init
  )
}
