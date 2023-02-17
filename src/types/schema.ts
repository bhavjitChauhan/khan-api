import {
  FeedbackFocusKind,
  FeedbackType,
  FeedbackTypename,
  ProgramEditorType,
  UserAccessLevel,
} from './enums'
import {
  Kaid,
  Locale,
  QualarooID,
  GoogleID,
  AvatarPath,
  AvatarName,
  ProgramKey,
  FeedbackKey,
} from './strings'

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
  AvatarData = AvatarSchema,
  PendingEmailVerificationData = PendingEmailVerificationSchema,
  LocaleData = LocaleSchema,
  ProfileData = ProfileSchema
> {
  __typename: 'User'
  actorHasUserScopedPermission: boolean
  authEmails: Array<string> | null
  autocontinueOn: boolean | null
  avatar: AvatarData
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
  id: Kaid | null
  includesDistrictOwnedData: boolean
  isActor: boolean
  isChild: boolean | null
  isCoachedByActor: boolean
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
  kaid: Kaid | ''
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
  qualarooId: QualarooID | Kaid | null
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
  userId: GoogleID | Kaid
  userSummaryIsVisibleToActor: boolean
  username: string
}

export interface AvatarSchema {
  __typename: 'Avatar'
  category: string
  /**
   * For example:
   * `"/images/avatars/svg/blobby-green.svg"`
   */
  imageSrc: AvatarPath
  isDefaultForCategory: boolean
  name: AvatarName
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
  id: `${number}`
  imagePath: string
  isOwner: boolean
  isProjectOrFork: boolean
  kaid: UserSchema['kaid']
  key: ProgramKey
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

export interface FeedbackForFocusSchema {
  __typename: 'FeedbackForFocus'
  cursor: string | null
  feedback:
    | BasicFeedbackSchema[]
    | QuestionFeedbackSchema[]
    | AnswerFeedbackSchema[]
    | null
  isComplete: boolean
  sortedByDate: boolean
}

export interface FeedbackSchemaBase {
  __typename: FeedbackTypename
  appearsAsDeleted: boolean
  author: Pick<
    UserSchema<Pick<AvatarSchema, '__typename' | 'imageSrc' | 'name'>>,
    '__typename' | 'avatar' | 'id' | 'kaid' | 'nickname'
  >
  /**
   * Always `null`
   */
  badges: null | unknown
  content: string
  date: string
  definitelyNotSpam: boolean
  deleted: boolean
  downVoted: boolean
  expandKey: string
  feedbackType: FeedbackType
  /**
   * Always `null`
   */
  flaggedBy: null | unknown
  flaggedByUser: boolean
  /**
   * Always `null`
   */
  flags: null | unknown
  focus: FeedbackFocusSchema
  focusUrl: string
  fromVideoAuthor: boolean
  /**
   * Encrypted ID
   */
  key: string
  lowQualityScore: number
  notifyOnAnswer: boolean
  permalink: string
  qualityKind: string
  replyCount: number
  /**
   * Expand keys for parent feedback. Always 1-2 elements
   */
  replyExpandKeys: Array<FeedbackKey> | FeedbackKey
  /**
   * Always `false`? May depend on the user
   */
  showLowQualityNotice: boolean
  sumVotesIncremented: number
  upVoted: boolean
}

export interface FeedbackFocusSchema {
  __typename: 'FeedbackFocus'
  id: string
  kind: FeedbackFocusKind
  relativeUrl: string
  translatedTitle: string
}

export interface BasicFeedbackSchema extends FeedbackSchemaBase {
  // `FeedbackTypename` instead of `FeedbackTypename.BasicFeedback` `Question` to extend `Comment`
  __typename: FeedbackTypename
  feedbackType: FeedbackType.COMMENT | FeedbackType.REPLY
}

export interface QuestionFeedbackSchema extends FeedbackSchemaBase {
  __typename: FeedbackTypename.QuestionFeedback
  answerCount: number
  answers:
    | Pick<
        AnswerFeedbackSchema,
        | '__typename'
        | 'appearsAsDeleted'
        | 'author'
        | 'content'
        | 'date'
        | 'definitelyNotSpam'
        | 'deleted'
        | 'downVoted'
        | 'expandKey'
        | 'feedbackType'
        | 'flaggedBy'
        | 'flags'
        | 'focus'
        | 'focusUrl'
        | 'fromVideoAuthor'
        | 'key'
        | 'lowQualityScore'
        | 'notifyOnAnswer'
        | 'permalink'
        | 'qualityKind'
        | 'replyCount'
        | 'replyExpandKeys'
        | 'showLowQualityNotice'
        | 'sumVotesIncremented'
        | 'upVoted'
      >[]
    | null
  feedbackType: FeedbackType.QUESTION
  /**
   * Always `null`
   */
  hasAnswered: unknown | null
  isOld: boolean
}

export interface AnswerFeedbackSchema extends FeedbackSchemaBase {
  __typename: FeedbackTypename.AnswerFeedback
  feedbackType: FeedbackType.ANSWER
  question: Pick<
    QuestionFeedbackSchema,
    | '__typename'
    | 'appearsAsDeleted'
    | 'author'
    | 'content'
    | 'date'
    | 'definitelyNotSpam'
    | 'deleted'
    | 'downVoted'
    | 'expandKey'
    | 'feedbackType'
    | 'flaggedBy'
    | 'flags'
    | 'focusUrl'
    | 'fromVideoAuthor'
    | 'key'
    | 'lowQualityScore'
    | 'notifyOnAnswer'
    | 'permalink'
    | 'qualityKind'
    | 'replyCount'
    | 'replyExpandKeys'
    | 'showLowQualityNotice'
    | 'sumVotesIncremented'
    | 'upVoted'
  >
}

export interface QaExpandKeyInfoSchema {
  __typename: 'QaExpandKeyInfo'
  feedbackType: FeedbackType
  unencryptedKey: FeedbackKey
}
