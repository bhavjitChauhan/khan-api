import { graphql } from '../utils/fetch'
import { KHAN_GRAPHQL_URL } from '../lib/constants'
import { StandardResponse } from '../types/responses'

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
    kaid?: string | null
    username?: string | null
  }

  export type Response = StandardResponse<Data>

  export type Data = {
    actorIsImpersonatingUser: boolean
    user: {
      __typename: 'User'
      authEmails: Array<string> | null
      autocontinueOn: boolean | null
      badgeCounts: string
      bio: string
      canAccessDistrictsHomepage: boolean
      canHellban: boolean | null
      canMessageUsers: boolean | null
      canModifyCoaches: boolean | null
      countVideosCompleted: number
      email: string | null
      gaUserId: string | null
      hasChildren: boolean | null
      hasClasses: boolean | null
      hasCoach: boolean | null
      hasStudents: boolean | null
      hideVisual: boolean | null
      homepageUrl: string | null
      /**
       * Same as KAID
       */
      id: string
      includesDistrictOwnedData: boolean
      isChild: boolean | null
      isCoachingLoggedInUser: boolean
      isCreator: boolean | null
      isCurator: boolean | null
      isDataCollectible: boolean | null
      isDeveloper: boolean | null
      isMidsignupPhantom: boolean
      isModerator: boolean | null
      isOrphan: boolean | null
      isParent: boolean | null
      isPhantom: boolean
      isPublisher: boolean | null
      isSatStudent: boolean | null
      isSelf: boolean
      isTeacher: boolean | null
      joined: string
      kaid: string
      key: string | null
      muteVideos: boolean | null
      newNotificationCount: number | null
      nickname: string | null
      noColorInVideos: boolean | null
      pendingEmailVerifications: Array<{
        __typename: 'PendingEmailVerification'
        email: string
      }> | null
      points: number
      preferredKaLocale: {
        __typename: 'Locale'
        id: string
        kaLocale: string
        status: unknown | null
      } | null
      prefersReducedMotion: boolean | null
      profile: {
        __typename: 'Profile'
        accessLevel: AccessLevel
      }
      profileRoot: string
      /**
       * Either KAID or Qualaroo ID
       */
      qualarooId: string | null
      shouldShowAgeCheck: boolean | null
      showCaptions: boolean | null
      signupDataIfUnverified: unknown | null
      soundOn: boolean | null
      tosAccepted: boolean | null
      underAgeGate: unknown | null
      /**
       * Either KAID or Google ID
       */
      userId: string
      username: string
    } | null
  }

  export enum AccessLevel {
    COACH = 'COACH',
    PUBLIC = 'PUBLIC',
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
