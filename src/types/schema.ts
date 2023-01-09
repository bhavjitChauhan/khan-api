import { ProgramEditorType, UserAccessLevel } from './enums'
import { KAID, Locale, QualarooID, GoogleID } from './strings'

/**
 * @file GraphQL Schema
 *
 * @summary
 * This file contains the GraphQL schema types for the KA API.
 *
 * @description
 * This file exists to reduce code duplication and because GraphQL operates using schemas.
 *
 * Khan Academy's safelisted GraphQL queries will usually not request any schema entirely so TypeScript's `Pick` and `Omit` utility types may come in handy.
 */

export interface UserSchema<
  PendingEmailVerificationData = PendingEmailVerificationSchema,
  LocaleData = LocaleSchema,
  ProfileData = ProfileSchema
> {
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
  hasUnresolvedInvitations: boolean | null
  hideVisual: boolean | null
  homepageUrl: string | null
  /**
   * Same as KAID unless the user is anonymous
   */
  id: KAID | null
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
  /**
   * Will always be a string if requested in the GraphQL query. Defaults to empty string (`''`) for anonymous users.
   */
  kaid: KAID | ''
  key: string | null
  muteVideos: boolean | null
  newNotificationCount: number | null
  nickname: string | null
  noColorInVideos: boolean | null
  pendingEmailVerifications: PendingEmailVerificationData[] | null
  points: number
  preferredKaLocale: LocaleData | null
  prefersReducedMotion: boolean | null
  profile: ProfileData
  /**
   * Defaults to `null` for anonymous users.
   */
  profileRoot: `/profile/${string}/` | null
  /**
   * Either Qualaroo ID or KAID
   *
   * @link https://github.com/kamens/gae_bingo
   */
  qualarooId: QualarooID | KAID | null
  shouldShowAgeCheck: boolean | null
  showCaptions: boolean | null
  signupDataIfUnverified: unknown | null
  soundOn: boolean | null
  tosAccepted: boolean | null
  transferAuthToken: string
  underAgeGate: unknown | null
  /**
   * Either Google ID or KAID
   */
  userId: GoogleID | KAID
  username: string
}

export interface PendingEmailVerificationSchema {
  __typename: 'PendingEmailVerification'
  email: string
}

export interface LocaleSchema {
  __typename: 'Locale'
  id: string
  kaLocale: Locale
  status: unknown | null
}

export interface ProfileSchema {
  __typename: 'Profile'
  accessLevel: UserAccessLevel
}

export interface ProgramSchema<
  UserData = UserSchema,
  OriginProgramData = OriginProgramSchema,
  ProgramRevisionData = ProgramRevisionSchema,
  TopicData = TopicSchema
> {
  __typename: 'Program'
  byChild: boolean
  category: unknown | null
  created: string
  creatorProfile: UserData
  deleted: boolean | null
  description: string
  docsUrlPath: string
  flaggedBy: unknown | null
  flaggedByUser: boolean
  /**
   * Required special permissions.
   */
  flags: unknown | null
  height: number
  hideFromHotlist: boolean
  id: string
  imagePath: string
  isOwner: boolean
  isProjectOrFork: boolean
  kaid: UserSchema['kaid']
  key: string
  newUrlPath: string
  originScratchpad: OriginProgramData | null
  restrictPosting: boolean
  revision: ProgramRevisionData
  slug: string
  spinoffCount: number
  sumVotesIncremented: number
  title: string
  topic: TopicData
  translatedTitle: string
  upVoted: boolean
  url: string
  /**
   * Besides `PJS`, `WEBPAGE` and `SQL` it can also be an arbitrary string
   */
  userAuthoredContentType: string
  width: number
}

export interface OriginProgramSchema {
  __typename: 'OriginProgram'
  deleted: boolean
  translatedTitle: string
  url: string
}

export interface ProgramRevisionSchema {
  __typename: 'ProgramRevision'
  code: string
  configVersion: number
  created: string
  editorType: ProgramEditorType
  folds: Array<[number, number]>
  id: string
}

export interface TopicSchema {
  __typename: 'Topic'
  id: string
  nodeSlug: string
  relativeUrl: string
  slug: string
  translatedTitle: string
}
