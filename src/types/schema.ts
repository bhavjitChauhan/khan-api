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
  ProfileData = ProfileSchema,
  ListProgramsData = ListProgramsSchema,
> {
  __typename: 'User'
  actorHasUserScopedPermission: boolean
  authEmails: Array<string> | null
  autocontinueOn: boolean | null
  avatar: AvatarData
  badgeCounts: string
  bio: string
  birthMonthYear: null | unknown
  canAccessDistrictsHomepage: boolean
  canHellban: boolean | null
  canMessageUsers: boolean | null
  canModifyCoaches: boolean | null
  countVideosCompleted: number
  email: string | null
  gaUserId: string | null
  hasAccessToAIGuideDev: boolean | null
  hasAccessToAIGuideCompanionMode: boolean | null
  hasAccessToAIGuideDistrictAdmin: boolean | null
  hasAccessToAIGuideLearner: boolean | null
  hasAccessToAIGuideParent: boolean | null
  hasAccessToAIGuideTeacher: boolean | null
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
  includesK4dDistrictOwnedData: boolean
  includesKmapDistrictOwnedData: boolean
  isAIGuideEnabled: boolean
  isActor: boolean
  isChild: boolean | null
  isCoachedByActor: boolean
  isCoachingLoggedInUser: boolean
  isCreator: boolean | null
  isCurator: boolean | null
  isDataCollectible: boolean | null
  isDeveloper: boolean | null
  isFormalTeacher: boolean | null
  isK4dStudent: boolean | null
  isKmapStudent: boolean | null
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
  lastLoginCountry: string | null
  muteVideos: boolean | null
  newNotificationCount: number | null
  nickname: string | null
  noColorInVideos: boolean | null
  pendingEmailVerifications: PendingEmailVerificationSchema[] | null
  points: number
  preferredKaLocale: LocaleSchema | null
  prefersReducedMotion: boolean | null
  profile: ProfileData
  /**
   * Defaults to `null` for anonymous users.
   */
  profileRoot: `/profile/${string}/` | null
  programs: ListProgramsData
  /**
   * Either Qualaroo ID or KAID
   *
   * @link https://github.com/kamens/gae_bingo
   *
   * @deprecated Since 2023-04-24
   */
  qualarooId: QualarooID | Kaid | null
  region: null | unknown
  shouldShowAgeCheck: boolean | null
  showCaptions: boolean | null
  signupDataIfUnverified: null | unknown
  soundOn: boolean | null
  tosAccepted: boolean | null
  transferAuthToken: string
  underAgeGate: null | unknown
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
  status: null | unknown
}

export interface ProfileSchema {
  __typename: 'Profile'
  accessLevel: UserAccessLevel
  programs: Pick<
    ProgramSchema,
    | '__typename'
    | 'authorKaid'
    | 'authorNickname'
    | 'deleted'
    | 'displayableSpinoffCount'
    | 'id'
    | 'imagePath'
    | 'key'
    | 'sumVotesIncremented'
    | 'translatedTitle'
    | 'url'
  >[]
}

export interface ListProgramsSchema<ProgramData = unknown> {
  __typename: 'ListPrograms'
  complete: boolean
  cursor: string
  programs: ProgramData[]
}

export interface UserSummarySchema {
  __typename: 'UserSummary'
  statistics: UserStatisticsSchema
}

export interface UserStatisticsSchema {
  __typename: 'UserStatistics'
  answers: number
  comments: number
  flags: number
  projectanswers: number
  projectquestions: number
  questions: number
  replies: number
  votes: number
}

export interface ProgramSchema<
  // TypeScript doesn't like circular references, so default can't be `UserSchema`
  UserData = unknown,
> {
  __typename: 'Program'
  authorKaid: UserSchema['kaid']
  authorNickname: UserSchema['nickname']
  byChild: boolean
  category: null | unknown
  created: string
  creatorProfile: UserData
  deleted: boolean | null
  description: string
  displayableSpinoffCount: number
  docsUrlPath: string
  flaggedBy: null | unknown
  flaggedByUser: boolean
  /**
   * Required special permissions.
   */
  flags: null | unknown
  height: number
  hideFromHotlist: boolean
  id: `${number}`
  imagePath: string
  isOwner: boolean
  isProjectOrFork: boolean
  kaid: UserSchema['kaid']
  key: ProgramKey
  newUrlPath: string
  originScratchpad: OriginProgramSchema | null
  restrictPosting: boolean
  revision: ProgramRevisionSchema
  slug: string
  spinoffCount: number
  sumVotesIncremented: number
  title: string
  topic: TopicSchema
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
  isLocked: boolean
  isPinned: boolean
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
        | 'isLocked'
        | 'isPinned'
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
  feedbackType: FeedbackType.QUESTION | FeedbackType.PROJECT_HELP_QUESTION
  /**
   * Always `null`
   */
  hasAnswered: null | unknown
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
    | 'isLocked'
    | 'isPinned'
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

export interface RepliesSchema {
  __typename: 'Replies'
  cursor: string | null
  feedback: BasicFeedbackSchema[] | null
  isComplete: boolean
}
