export default {
  abortMasteryTowerSession: `mutation abortMasteryTowerSession($classDescriptor: String!) {
  abortMasteryTowerSession(classDescriptor: $classDescriptor) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  acceptCoachRequestFromNotifMutation: `mutation acceptCoachRequestFromNotifMutation($coachKaid: String!) {
  acceptCoachRequest(coachKaid: $coachKaid) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  acceptCoachRequestMutation: `mutation acceptCoachRequestMutation($coachKaid: String!, $studentKaid: String) {
  acceptCoachRequest(coachKaid: $coachKaid, studentKaid: $studentKaid) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  AcceptTOS: `mutation AcceptTOS {
  acceptTos {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  accountTransitionMutation: `mutation accountTransitionMutation($targetKaid: String!, $childOrAdult: String!) {
  accountTransition(targetKaid: $targetKaid, childOrAdult: $childOrAdult) {
    user {
      id
      isChild
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  addCoach: `mutation addCoach($studentKaid: String!, $coachEmail: String!) {
  addCoach(studentKaid: $studentKaid, coachEmail: $coachEmail) {
    coach {
      id
      kaid
      username
      nickname
      email
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  addCoachAsAdminMutation: `mutation addCoachAsAdminMutation($studentKaid: String!, $coachKaid: String!) {
  addCoachAsAdmin(studentKaid: $studentKaid, coachKaid: $coachKaid) {
    coach {
      id
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  addContentPermissionMutation: `mutation addContentPermissionMutation($userEmail: String!, $contentPermissions: [AddContentPermissionInput!]!) {
  addContentPermissions(
    kaid: ""
    userEmail: $userEmail
    contentPermissions: $contentPermissions
  ) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  AddFeedbackToDiscussion: `mutation AddFeedbackToDiscussion($focusKind: String, $focusId: String, $parentKey: String, $textContent: String!, $feedbackType: FeedbackType!, $fromVideoAuthor: Boolean, $shownLowQualityNotice: Boolean) {
  addFeedbackToDiscussion(
    focusKind: $focusKind
    focusId: $focusId
    parentKey: $parentKey
    textContent: $textContent
    feedbackType: $feedbackType
    fromVideoAuthor: $fromVideoAuthor
    shownLowQualityNotice: $shownLowQualityNotice
  ) {
    feedback {
      appearsAsDeleted
      author {
        id
        kaid
        nickname
        avatar {
          name
          imageSrc
          __typename
        }
        __typename
      }
      content
      date
      definitelyNotSpam
      deleted
      downVoted
      expandKey
      feedbackType
      flaggedBy
      flags
      focusUrl
      focus {
        kind
        id
        translatedTitle
        relativeUrl
        __typename
      }
      fromVideoAuthor
      key
      notifyOnAnswer
      permalink
      qualityKind
      replyCount
      replyExpandKeys
      sumVotesIncremented
      upVoted
      __typename
    }
    lowQualityResponse {
      feedbackCode
      feedbackChar
      feedbackType
      showLowQualityNotice
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  AddFlagMutation: `mutation AddFlagMutation($flagName: String!, $description: String!, $team: String!, $rules: [RuleInput!]!) {
  addFlag(name: $flagName, description: $description, team: $team, rules: $rules) {
    flag {
      id
      name
      description
      team
      created
      expires
      rules {
        name
        isAllowRule
        context {
          name
          value
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  AddMappersSuggestions: `mutation AddMappersSuggestions($kaid: String!, $categories: [AddMappersCategoryInput]!) {
  addMappersCategories(studentKaid: $kaid, categories: $categories) {
    mappersSuggestions {
      unit {
        id
        title: translatedTitle
        relativeUrl
        __typename
      }
      progress {
        completed
        total
        __typename
      }
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  addParent: `mutation addParent($childKaid: String!, $parentKaid: String!) {
  setParentAsAdmin(childKaid: $childKaid, parentKaid: $parentKaid) {
    user {
      id
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  addParents: `mutation addParents($parentEmail: String!) {
  addParents(parentEmail: $parentEmail) {
    parent {
      id
      kaid
      nickname
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  addStudentsToClassrooms: `mutation addStudentsToClassrooms($kaids: [ID!]!, $classroomIds: [ID!]!) {
  addStudentsToClassrooms(kaids: $kaids, classroomIds: $classroomIds) {
    coach {
      id
      kaid
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  AddUserNote: `mutation AddUserNote($kaid: String!, $text: String!) {
  addUserNote(kaid: $kaid, text: $text) {
    error
    note {
      text
      date
      author {
        id
        email
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  aiGuideEnrollViaInvitation: `mutation aiGuideEnrollViaInvitation($input: AIGuideEnrollViaInvitationInput!) {
  aiGuideEnrollViaInvitation(input: $input) {
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  archiveContentAssignments: `mutation archiveContentAssignments($assignmentIds: [ID]!) {
  archiveAssignments(ids: $assignmentIds) {
    assignments {
      ...AssignmentInfoFragment
      __typename
    }
    __typename
  }
}

fragment AssignmentInfoFragment on Assignment {
  id
  contents {
    id
    title: translatedTitle
    kind
    __typename
  }
  studentList {
    id
    cacheId
    name
    isK4dClassroom
    __typename
  }
  students {
    id
    kaid
    __typename
  }
  startDate
  dueDate
  isDraft
  subjectSlug
  title
  instructions
  __typename
}`,
  archiveSubjectMasteryAssignment: `mutation archiveSubjectMasteryAssignment($assignmentId: ID!) {
  archiveSubjectMasteryAssignments(ids: [$assignmentId]) {
    assignments {
      id
      __typename
    }
    __typename
  }
}`,
  attemptProblem: `mutation attemptProblem($input: AttemptProblemInput!, $ancestorIds: [String!]!) {
  attemptProblem(attempt: $input) {
    result {
      userExercise {
        ...userExerciseFields
        __typename
      }
      updatedTask {
        ... on PracticeTask {
          ...practiceTaskFields
          __typename
        }
        ... on MasteryChallengeTask {
          ...masteryChallengeTaskFields
          __typename
        }
        ... on SubjectChallengeTask {
          ...courseChallengeTaskFields
          __typename
        }
        ... on TopicQuizTask {
          ...quizTaskFields
          __typename
        }
        ... on TopicUnitTestTask {
          ...unitTestTaskFields
          __typename
        }
        __typename
      }
      newTask {
        cards {
          ...problemCardFields
          __typename
        }
        task {
          ... on PracticeTask {
            ...practiceTaskFields
            __typename
          }
          __typename
        }
        userExercises {
          ...userExerciseFields
          __typename
        }
        __typename
      }
      actionResults {
        attemptCorrect
        notificationsAdded {
          avatarParts
          badges
          readable
          toast
          urgent
          continueUrl
          __typename
        }
        pointsEarned {
          points
          __typename
        }
        updatedStpStreakLength
        updatedCourseProficiencyLevel
        __typename
      }
      attemptPromotions {
        fpmPromotions {
          progressKey
          level
          __typename
        }
        __typename
      }
      updatedRecommendations {
        contentId
        kind
        sourceId
        __typename
      }
      error {
        code
        debugMessage
        uuid
        __typename
      }
      __typename
    }
    __typename
  }
}

fragment courseChallengeTaskFields on SubjectChallengeTask {
  id
  key
  completionCriteria {
    name
    __typename
  }
  contentKey
  isCompleted
  pointBounty
  pointsEarned
  promotionCriteria {
    ...promotionCriteriaFields
    __typename
  }
  reservedItems
  reservedItemsCompleted
  taskAttemptHistory {
    ...taskAttemptHistoryFields
    __typename
  }
  taskType
  __typename
}

fragment masteryChallengeTaskFields on MasteryChallengeTask {
  id
  key
  completionCriteria {
    name
    __typename
  }
  expirationTime
  isCompleted
  pointBounty
  pointsEarned
  promotionCriteria {
    ...promotionCriteriaFields
    __typename
  }
  reservedItems
  reservedItemsCompleted
  taskAttemptHistory {
    ...taskAttemptHistoryFields
    __typename
  }
  taskType
  __typename
}

fragment practiceTaskFields on PracticeTask {
  id
  key
  bonusReservedItems
  bonusReservedItemsCompleted
  bonusTaskAttemptHistory {
    ...taskAttemptHistoryFields
    __typename
  }
  canRestart
  completionCriteria {
    name
    __typename
  }
  contentKey
  exerciseLength
  isCompleted
  pointBounty
  pointsEarned
  promotionCriteria {
    ...promotionCriteriaFields
    __typename
  }
  reservedItems
  reservedItemsCompleted
  slug
  taskAttemptHistory {
    ...taskAttemptHistoryFields
    __typename
  }
  taskType
  timeEstimate {
    lowerBound
    upperBound
    __typename
  }
  __typename
}

fragment problemCardFields on ProblemCard {
  cardType
  done
  exerciseName
  problemType
  __typename
}

fragment problemTypeFields on ProblemType {
  items {
    id
    live
    sha
    __typename
  }
  name
  relatedVideos
  __typename
}

fragment promotionCriteriaFields on PromotionCriteria {
  name
  value
  __typename
}

fragment quizTaskFields on TopicQuizTask {
  id
  key
  canRestart
  completionCriteria {
    name
    __typename
  }
  contentKey
  isCompleted
  pointBounty
  pointsEarned
  promotionCriteria {
    ...promotionCriteriaFields
    __typename
  }
  reservedItems
  reservedItemsCompleted
  taskAttemptHistory {
    ...taskAttemptHistoryFields
    __typename
  }
  taskType
  __typename
}

fragment taskAttemptHistoryFields on TaskProblemAttempt {
  correct
  timeDone
  seenHint
  itemId
  __typename
}

fragment unitTestTaskFields on TopicUnitTestTask {
  id
  key
  canRestart
  completionCriteria {
    name
    __typename
  }
  contentKey
  isCompleted
  pointBounty
  pointsEarned
  promotionCriteria {
    ...promotionCriteriaFields
    __typename
  }
  reservedItems
  reservedItemsCompleted
  taskAttemptHistory {
    ...taskAttemptHistoryFields
    __typename
  }
  taskType
  __typename
}

fragment userExerciseFields on UserExercise {
  exerciseModel: exercise {
    id
    assessmentItemCount: numAssessmentItems
    displayName
    isQuiz
    isSkillCheck
    name
    nodeSlug
    progressKey
    translatedDisplayName
    relatedContent {
      id
      contentKind
      kind
      thumbnailUrl
      translatedTitle
      urlWithinCurationNode
      urlWithinClosestAncestor(ancestorIds: $ancestorIds)
      topicPaths {
        path {
          id
          kind
          slug
          __typename
        }
        __typename
      }
      ... on Article {
        kaUrl
        nodeSlug
        relativeUrl
        slug
        __typename
      }
      ... on Video {
        duration
        imageUrl
        kaUrl
        nodeSlug
        relativeUrl
        slug
        translatedYoutubeId
        __typename
      }
      __typename
    }
    relatedVideos {
      contentKind
      duration
      id
      imageUrl
      kaUrl
      kind
      nodeSlug
      progressKey
      relativeUrl
      slug
      thumbnailUrl
      translatedDescription
      translatedTitle
      translatedYoutubeId
      __typename
    }
    problemTypes {
      ...problemTypeFields
      __typename
    }
    translatedProblemTypes {
      ...problemTypeFields
      __typename
    }
    __typename
  }
  exercise: exerciseName
  fpmMasteryLevel
  lastAttemptNumber
  lastCountHints
  lastDone
  lastMasteryUpdate
  longestStreak
  maximumExerciseProgressDt: maximumExerciseProgressDate
  streak
  totalCorrect
  totalDone
  __typename
}`,
  AuthCookieMutation: `mutation AuthCookieMutation {
  refreshAuthCookies {
    error
    __typename
  }
}`,
  awardBadgesToUser: `mutation awardBadgesToUser($kaid: String!, $badges: [String]!, $fromDevAdmin: Boolean) {
  forceAwardBadges(
    awardeeKaid: $kaid
    badgeNames: $badges
    fromDevAdmin: $fromDevAdmin
  ) {
    errors {
      code
      badgeName
      __typename
    }
    __typename
  }
}`,
  BanUserMutation: `mutation BanUserMutation($targetKaid: String!, $banReason: String!) {
  hellbanUser(targetKaid: $targetKaid, hellbanReason: $banReason) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  BulkInsertOrUpdateDub: `mutation BulkInsertOrUpdateDub($input: [DubInsertOrUpdateInputEntry!]!) {
  bulkInsertOrUpdateDub(dubInputEntryList: $input) {
    errors {
      code
      debugMessage
      dubInsertOrUpdateEntry {
        sourceYouTubeId
        dubYouTubeId
        contentId
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  BulkPerformModAction: `mutation BulkPerformModAction($bulkModAction: BulkModAction!, $entityKeys: [String!]) {
  bulkPerformModAction(modAction: $bulkModAction, entityKeys: $entityKeys) {
    error {
      code
      erroredKeys
      __typename
    }
    __typename
  }
}`,
  cancelPayPalRecurringDonation: `mutation cancelPayPalRecurringDonation($paypalProfileID: String!) {
  cancelPayPalRecurringDonation(paypalProfileID: $paypalProfileID) {
    success
    error {
      code
      __typename
    }
    __typename
  }
}`,
  cancelStripeSubscription: `mutation cancelStripeSubscription($customerId: String!, $subscriptionId: String!) {
  cancelStripeSubscription(customerId: $customerId, subscriptionId: $subscriptionId) {
    error {
      code
      __typename
    }
    __typename
  }
}
`,
  changeBio: `mutation changeBio($bio: String!, $kaid: String!) {
  setSettings(bio: $bio, kaid: $kaid) {
    user {
      id
      bio
      __typename
    }
    errors {
      code
      __typename
    }
    __typename
  }
}`,
  changeNickname: `mutation changeNickname($nickname: String!, $kaid: String!) {
  setSettings(nickname: $nickname, kaid: $kaid) {
    user {
      id
      nickname
      __typename
    }
    errors {
      code
      __typename
    }
    __typename
  }
}`,
  changeUsername: `mutation changeUsername($username: String!, $kaid: String!) {
  setSettings(username: $username, kaid: $kaid) {
    user {
      id
      username
      __typename
    }
    errors {
      code
      usernameOwnedBy {
        id
        email
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  changeVerificationEmailMutation: `mutation changeVerificationEmailMutation($email: String!) {
  changeVerificationEmail(email: $email) {
    email
    error {
      code
      __typename
    }
    __typename
  }
}`,
  classroomProgressReset: `mutation classroomProgressReset($classroomDescriptor: String!) {
  classroomProgressReset(classroomDescriptor: $classroomDescriptor) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  classroomProgressUpdate: `mutation classroomProgressUpdate($classroomDescriptor: String!) {
  classroomProgressUpdate(classroomDescriptor: $classroomDescriptor) {
    error {
      code
      __typename
    }
    classroomProgress {
      id
      earnedLevel
      currentLevelProgress
      __typename
    }
    __typename
  }
}`,
  clearBrandNewNotifications: `mutation clearBrandNewNotifications {
  clearBrandNewNotifications {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  clearRecommendationFor321ContentItem: `mutation clearRecommendationFor321ContentItem($contentDescriptor: String!, $unitId: String!) {
  clearRecommendation(contentDescriptor: $contentDescriptor, unitId: $unitId) {
    wasSuccessful
    __typename
  }
}`,
  clearRecommendationForContentItemWeb: `mutation clearRecommendationForContentItemWeb($contentDescriptor: String!, $unitId: String!) {
  clearRecommendation(contentDescriptor: $contentDescriptor, unitId: $unitId) {
    wasSuccessful
    __typename
  }
}`,
  cleverCreateAccountWithEmailV2Mutation: `mutation cleverCreateAccountWithEmailV2Mutation($transferToken: String!, $email: String!, $birthdate: Date) {
  cleverCreateAccountWithEmailV2(
    transferToken: $transferToken
    email: $email
    birthdate: $birthdate
  ) {
    error {
      code
      __typename
    }
    user {
      id
      kaid
      canAccessDistrictsHomepage
      isTeacher
      hasUnresolvedInvitations
      preferredKaLocale {
        id
        kaLocale
        status
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  cleverDistrictsSignupV2Mutation: `mutation cleverDistrictsSignupV2Mutation($udiUuid: String!, $cleverId: String!) {
  cleverDistrictsSignupV2(udiUuid: $udiUuid, cleverId: $cleverId) {
    error {
      code
      __typename
    }
    user {
      id
      kaid
      canAccessDistrictsHomepage
      isTeacher
      hasUnresolvedInvitations
      preferredKaLocale {
        id
        kaLocale
        status
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  completeInfoStep: `mutation completeInfoStep($stepId: ID!) {
  teacherCampaignInfoStepMarkComplete(stepId: $stepId) {
    progress {
      id
      completedSteps
      __typename
    }
    __typename
  }
}`,
  completeSignupMutation: `mutation completeSignupMutation($nickname: String!, $password: String!, $username: String!, $birthdate: Date, $inviteId: String, $isParent: Boolean, $isTeacher: Boolean, $token: String, $continueUrl: String) {
  completeSignup(
    nickname: $nickname
    password: $password
    username: $username
    birthdate: $birthdate
    inviteId: $inviteId
    isParent: $isParent
    isTeacher: $isTeacher
    token: $token
    continueUrl: $continueUrl
  ) {
    user {
      id
      kaid
      canAccessDistrictsHomepage
      isTeacher
      hasUnresolvedInvitations
      preferredKaLocale {
        id
        kaLocale
        status
        __typename
      }
      __typename
    }
    continueUrl
    error {
      code
      __typename
    }
    __typename
  }
}`,
  contentEditorCreateArticle: `mutation contentEditorCreateArticle($input: NewArticleInput!) {
  createArticle(input: $input) {
    article {
      ...ArticleRevision
      __typename
    }
    error {
      code
      conflictSha
      debugMessage
      __typename
    }
    __typename
  }
}

fragment ArticleRevision on ArticleRevision {
  id
  contentId
  contentKind
  creationDate
  sha
  authorKey
  customDescriptionTag
  customTitleTag
  description
  descriptionHtml: description
  doNotPublish
  sourceKaLocale
  sourceLanguage: sourceKaLocale
  slug
  readableId: slug
  title
  sponsored
  thumbnailData
  thumbnailCache
  alternateSlugs
  assessmentItemTags
  authorNames
  clarificationsEnabled
  perseusContent
  listed
  __typename
}`,
  contentEditorCreateExercise: `mutation contentEditorCreateExercise($input: NewExerciseInput!) {
  createExercise(input: $input) {
    exercise {
      ...ExerciseRevision
      __typename
    }
    error {
      code
      conflictSha
      debugMessage
      __typename
    }
    __typename
  }
}

fragment AssessmentItemRevision on AssessmentItemRevision {
  id
  contentKind
  contentId
  sha
  creationDate
  name
  authorNames
  itemData
  itemShapeType
  perseusApiMajorVersion
  requiresScreenOrMouse
  aiGenerated
  tags
  __typename
}

fragment ExerciseRevision on ExerciseRevision {
  id
  contentKind
  contentId
  sha
  creationDate
  authorKey
  doNotPublish
  sourceKaLocale
  sourceLanguage: sourceKaLocale
  slug
  name: slug
  title
  displayName: title
  prettyDisplayName: title
  description
  descriptionHtml: description
  customTitleTag
  customDescriptionTag
  thumbnailData
  thumbnailCache
  sponsored
  alternateSlugs
  authorName
  covers
  prerequisites
  relatedContent
  assessmentItemTags
  difficultyLevel
  suggestedCompletionCriteria
  trackingDocumentUrl
  problemTypeKind
  interimAssessmentType
  numQuestionsPerProblemType
  problemTypes {
    contentId
    name
    relatedVideos
    items {
      id
      sha
      perseusApiMajorVersion
      requiresScreenOrMouse
      aiGenerated
      __typename
    }
    __typename
  }
  assessmentItems {
    ...AssessmentItemRevision
    __typename
  }
  listed
  hasLintErrors
  __typename
}`,
  contentEditorCreateVideo: `mutation contentEditorCreateVideo($input: NewVideoInput!) {
  createVideo(input: $input) {
    video {
      ...VideoRevision
      __typename
    }
    error {
      code
      conflictSha
      debugMessage
      __typename
    }
    __typename
  }
}

fragment VideoRevision on VideoRevision {
  id
  contentId
  contentKind
  creationDate
  sha
  authorKey
  customDescriptionTag
  customTitleTag
  description
  descriptionHtml: description
  doNotPublish
  sourceKaLocale
  sourceLanguage: sourceKaLocale
  slug
  readableId: slug
  title
  sponsored
  thumbnailCache
  thumbnailData
  alternateSlugs
  assessmentItemTags
  augmentedTranscript
  authorNames
  clarificationsEnabled
  duration
  kaUserLicense
  keywords
  youtubeId
  listed
  __typename
}`,
  contentEditorEditArticle: `mutation contentEditorEditArticle($sha: String!, $input: EditArticleInput!) {
  editArticle(sha: $sha, input: $input) {
    article {
      ...ArticleRevision
      __typename
    }
    error {
      code
      conflictSha
      debugMessage
      __typename
    }
    __typename
  }
}

fragment ArticleRevision on ArticleRevision {
  id
  contentId
  contentKind
  creationDate
  sha
  authorKey
  customDescriptionTag
  customTitleTag
  description
  descriptionHtml: description
  doNotPublish
  sourceKaLocale
  sourceLanguage: sourceKaLocale
  slug
  readableId: slug
  title
  sponsored
  thumbnailData
  thumbnailCache
  alternateSlugs
  assessmentItemTags
  authorNames
  clarificationsEnabled
  perseusContent
  listed
  __typename
}`,
  contentEditorEditExerciseProblems: `mutation contentEditorEditExerciseProblems($sha: String!, $input: EditExerciseProblemsInput!, $exerciseHasLintErrors: Boolean!) {
  editExerciseProblems(
    sha: $sha
    input: $input
    exerciseHasLintErrors: $exerciseHasLintErrors
  ) {
    exercise {
      ...ExerciseRevision
      __typename
    }
    createdItems {
      ...AssessmentItemRevision
      __typename
    }
    updatedItems {
      ...AssessmentItemRevision
      __typename
    }
    error {
      code
      conflictSha
      debugMessage
      __typename
    }
    __typename
  }
}

fragment AssessmentItemRevision on AssessmentItemRevision {
  id
  contentKind
  contentId
  sha
  creationDate
  name
  authorNames
  itemData
  itemShapeType
  perseusApiMajorVersion
  requiresScreenOrMouse
  aiGenerated
  tags
  __typename
}

fragment ExerciseRevision on ExerciseRevision {
  id
  contentKind
  contentId
  sha
  creationDate
  authorKey
  doNotPublish
  sourceKaLocale
  sourceLanguage: sourceKaLocale
  slug
  name: slug
  title
  displayName: title
  prettyDisplayName: title
  description
  descriptionHtml: description
  customTitleTag
  customDescriptionTag
  thumbnailData
  thumbnailCache
  sponsored
  alternateSlugs
  authorName
  covers
  prerequisites
  relatedContent
  assessmentItemTags
  difficultyLevel
  suggestedCompletionCriteria
  trackingDocumentUrl
  problemTypeKind
  interimAssessmentType
  numQuestionsPerProblemType
  problemTypes {
    contentId
    name
    relatedVideos
    items {
      id
      sha
      perseusApiMajorVersion
      requiresScreenOrMouse
      aiGenerated
      __typename
    }
    __typename
  }
  assessmentItems {
    ...AssessmentItemRevision
    __typename
  }
  listed
  hasLintErrors
  __typename
}`,
  contentEditorEditExerciseProperties: `mutation contentEditorEditExerciseProperties($sha: String!, $input: EditExercisePropertiesInput!) {
  editExerciseProperties(sha: $sha, input: $input) {
    exercise {
      ...ExerciseRevision
      __typename
    }
    error {
      code
      conflictSha
      debugMessage
      __typename
    }
    __typename
  }
}

fragment AssessmentItemRevision on AssessmentItemRevision {
  id
  contentKind
  contentId
  sha
  creationDate
  name
  authorNames
  itemData
  itemShapeType
  perseusApiMajorVersion
  requiresScreenOrMouse
  aiGenerated
  tags
  __typename
}

fragment ExerciseRevision on ExerciseRevision {
  id
  contentKind
  contentId
  sha
  creationDate
  authorKey
  doNotPublish
  sourceKaLocale
  sourceLanguage: sourceKaLocale
  slug
  name: slug
  title
  displayName: title
  prettyDisplayName: title
  description
  descriptionHtml: description
  customTitleTag
  customDescriptionTag
  thumbnailData
  thumbnailCache
  sponsored
  alternateSlugs
  authorName
  covers
  prerequisites
  relatedContent
  assessmentItemTags
  difficultyLevel
  suggestedCompletionCriteria
  trackingDocumentUrl
  problemTypeKind
  interimAssessmentType
  numQuestionsPerProblemType
  problemTypes {
    contentId
    name
    relatedVideos
    items {
      id
      sha
      perseusApiMajorVersion
      requiresScreenOrMouse
      aiGenerated
      __typename
    }
    __typename
  }
  assessmentItems {
    ...AssessmentItemRevision
    __typename
  }
  listed
  hasLintErrors
  __typename
}`,
  contentEditorEditProject: `mutation contentEditorEditProject($sha: String!, $input: EditProjectInput!) {
  editProject(sha: $sha, input: $input) {
    project {
      ...ProjectRevision
      __typename
    }
    error {
      code
      conflictSha
      debugMessage
      __typename
    }
    __typename
  }
}

fragment ProjectRevision on ProjectRevision {
  id
  contentId
  contentKind
  sha
  doNotPublish
  slug
  listed
  title
  description
  projectEval
  authorName
  code
  codeFormat
  customTitleTag
  customDescriptionTag
  sourceKaLocale
  __typename
}`,
  contentEditorEditTalkthrough: `mutation contentEditorEditTalkthrough($sha: String!, $input: EditTalkthroughInput!) {
  editTalkthrough(sha: $sha, input: $input) {
    talkthrough {
      ...TalkthroughRevision
      __typename
    }
    error {
      code
      conflictSha
      debugMessage
      __typename
    }
    __typename
  }
}

fragment TalkthroughRevision on TalkthroughRevision {
  id
  contentId
  contentKind
  slug
  sha
  listed
  __typename
}`,
  contentEditorEditVideo: `mutation contentEditorEditVideo($sha: String!, $input: EditVideoInput!) {
  editVideo(sha: $sha, input: $input) {
    video {
      ...VideoRevision
      __typename
    }
    error {
      code
      conflictSha
      debugMessage
      __typename
    }
    __typename
  }
}

fragment VideoRevision on VideoRevision {
  id
  contentId
  contentKind
  creationDate
  sha
  authorKey
  customDescriptionTag
  customTitleTag
  description
  descriptionHtml: description
  doNotPublish
  sourceKaLocale
  sourceLanguage: sourceKaLocale
  slug
  readableId: slug
  title
  sponsored
  thumbnailCache
  thumbnailData
  alternateSlugs
  assessmentItemTags
  augmentedTranscript
  authorNames
  clarificationsEnabled
  duration
  kaUserLicense
  keywords
  youtubeId
  listed
  __typename
}`,
  contentEditorMoveExerciseProblemType: `mutation contentEditorMoveExerciseProblemType($sourceContentId: String!, $targetContentId: String!, $problemTypeName: String!) {
  moveExerciseProblemType(
    sourceContentId: $sourceContentId
    targetContentId: $targetContentId
    problemTypeName: $problemTypeName
  ) {
    exercise {
      ...ExerciseRevision
      __typename
    }
    other {
      ...ExerciseRevision
      __typename
    }
    error {
      code
      conflictSha
      debugMessage
      __typename
    }
    __typename
  }
}

fragment AssessmentItemRevision on AssessmentItemRevision {
  id
  contentKind
  contentId
  sha
  creationDate
  name
  authorNames
  itemData
  itemShapeType
  perseusApiMajorVersion
  requiresScreenOrMouse
  aiGenerated
  tags
  __typename
}

fragment ExerciseRevision on ExerciseRevision {
  id
  contentKind
  contentId
  sha
  creationDate
  authorKey
  doNotPublish
  sourceKaLocale
  sourceLanguage: sourceKaLocale
  slug
  name: slug
  title
  displayName: title
  prettyDisplayName: title
  description
  descriptionHtml: description
  customTitleTag
  customDescriptionTag
  thumbnailData
  thumbnailCache
  sponsored
  alternateSlugs
  authorName
  covers
  prerequisites
  relatedContent
  assessmentItemTags
  difficultyLevel
  suggestedCompletionCriteria
  trackingDocumentUrl
  problemTypeKind
  interimAssessmentType
  numQuestionsPerProblemType
  problemTypes {
    contentId
    name
    relatedVideos
    items {
      id
      sha
      perseusApiMajorVersion
      requiresScreenOrMouse
      aiGenerated
      __typename
    }
    __typename
  }
  assessmentItems {
    ...AssessmentItemRevision
    __typename
  }
  listed
  hasLintErrors
  __typename
}`,
  contentEditorPreviewYouTubeThumbnail: `mutation contentEditorPreviewYouTubeThumbnail($objectName: String!, $titleText: String!) {
  previewYouTubeThumbnail(
    objectName: $objectName
    titleText: $titleText
    width: 160
    height: 90
  ) {
    src
    error {
      code
      __typename
    }
    __typename
  }
}`,
  contentEditorProcessThumbnailUpload: `mutation contentEditorProcessThumbnailUpload($objectName: String!) {
  processThumbnailUpload(objectName: $objectName) {
    gcsName
    publicURL
    error {
      code
      __typename
    }
    __typename
  }
}`,
  contentEditorSignURLForThumbnailUpload: `mutation contentEditorSignURLForThumbnailUpload($contentType: ThumbnailContentType!) {
  signURLForThumbnailUpload(contentType: $contentType) {
    result {
      gcsName
      objectName
      publicURL
      uploadURL
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  contentEditorStartPublish: `mutation contentEditorStartPublish($title: String, $contentDescriptors: [String!]!) {
  startPublishForContentDescriptors(
    title: $title
    contentDescriptors: $contentDescriptors
  ) {
    publishStatus {
      id
      queued
      __typename
    }
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  contentEditorUploadContentImage: `mutation contentEditorUploadContentImage($imageBase64: String!) {
  uploadContentImage(imageBase64: $imageBase64) {
    url
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  contentEditorUploadContentImageFromURL: `mutation contentEditorUploadContentImageFromURL($imageURL: String!) {
  uploadContentImageFromURL(imageURL: $imageURL) {
    url
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  CourseEditorAddContent: `mutation CourseEditorAddContent($input: AddContent!) {
  mutated: addContent(inputData: $input) {
    course {
      ...CourseStructure
      __typename
    }
    __typename
  }
}

fragment CourseStructure on CourseRevision {
  id
  contentId
  translationFingerprint
  title
  description
  customTitleTag
  customDescriptionTag
  slugRedirects {
    redirectType
    oldSlug
    contentId
    __typename
  }
  legacySlugRedirects {
    redirectType
    oldSlug
    contentId
    __typename
  }
  slugsEverPublished
  locale
  slug
  importedCurationData
  linkedCourseStructure
  curriculumKey
  footerHtml
  allowedExerciseTypes
  hideCommunityQuestions
  listed
  importable
  masteryEnabled
  introSetting {
    title
    description
    buttonText
    internalContent
    externalUrl
    hideButton
    __typename
  }
  sponsorSetting {
    sponsorImageSetting {
      imageUrl
      imageCaption
      imageBaselineAligned
      __typename
    }
    taglineHtml
    __typename
  }
  operationId
  lastPublishedOperationId
  snapshotCount
  intent
  resources
  changeLog
  items {
    ... on CourseRevisionUnit {
      type
      id
      cacheId
      contentId
      slugSuffix
      translationFingerprint
      title
      description
      listed
      customTitleTag
      customDescriptionTag
      masteryEnabled
      unitTestContentId
      unitTestSlug
      intent
      resources
      changeLog
      items {
        ... on CourseRevisionLesson {
          type
          id
          cacheId
          contentId
          slugSuffix
          translationFingerprint
          title
          description
          listed
          intent
          resources
          changeLog
          items {
            ... on CourseRevisionContent {
              type
              id
              cacheId
              contentId
              contentKind
              __typename
            }
            __typename
          }
          __typename
        }
        ... on CourseRevisionQuiz {
          type
          id
          slug
          cacheId
          contentId
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}`,
  CourseEditorAddLesson: `mutation CourseEditorAddLesson($input: AddLesson!) {
  mutated: addLesson(inputData: $input) {
    course {
      ...CourseStructure
      __typename
    }
    __typename
  }
}

fragment CourseStructure on CourseRevision {
  id
  contentId
  translationFingerprint
  title
  description
  customTitleTag
  customDescriptionTag
  slugRedirects {
    redirectType
    oldSlug
    contentId
    __typename
  }
  legacySlugRedirects {
    redirectType
    oldSlug
    contentId
    __typename
  }
  slugsEverPublished
  locale
  slug
  importedCurationData
  linkedCourseStructure
  curriculumKey
  footerHtml
  allowedExerciseTypes
  hideCommunityQuestions
  listed
  importable
  masteryEnabled
  introSetting {
    title
    description
    buttonText
    internalContent
    externalUrl
    hideButton
    __typename
  }
  sponsorSetting {
    sponsorImageSetting {
      imageUrl
      imageCaption
      imageBaselineAligned
      __typename
    }
    taglineHtml
    __typename
  }
  operationId
  lastPublishedOperationId
  snapshotCount
  intent
  resources
  changeLog
  items {
    ... on CourseRevisionUnit {
      type
      id
      cacheId
      contentId
      slugSuffix
      translationFingerprint
      title
      description
      listed
      customTitleTag
      customDescriptionTag
      masteryEnabled
      unitTestContentId
      unitTestSlug
      intent
      resources
      changeLog
      items {
        ... on CourseRevisionLesson {
          type
          id
          cacheId
          contentId
          slugSuffix
          translationFingerprint
          title
          description
          listed
          intent
          resources
          changeLog
          items {
            ... on CourseRevisionContent {
              type
              id
              cacheId
              contentId
              contentKind
              __typename
            }
            __typename
          }
          __typename
        }
        ... on CourseRevisionQuiz {
          type
          id
          slug
          cacheId
          contentId
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}`,
  CourseEditorAddQuiz: `mutation CourseEditorAddQuiz($input: AddQuiz!) {
  mutated: addQuiz(inputData: $input) {
    course {
      ...CourseStructure
      __typename
    }
    __typename
  }
}

fragment CourseStructure on CourseRevision {
  id
  contentId
  translationFingerprint
  title
  description
  customTitleTag
  customDescriptionTag
  slugRedirects {
    redirectType
    oldSlug
    contentId
    __typename
  }
  legacySlugRedirects {
    redirectType
    oldSlug
    contentId
    __typename
  }
  slugsEverPublished
  locale
  slug
  importedCurationData
  linkedCourseStructure
  curriculumKey
  footerHtml
  allowedExerciseTypes
  hideCommunityQuestions
  listed
  importable
  masteryEnabled
  introSetting {
    title
    description
    buttonText
    internalContent
    externalUrl
    hideButton
    __typename
  }
  sponsorSetting {
    sponsorImageSetting {
      imageUrl
      imageCaption
      imageBaselineAligned
      __typename
    }
    taglineHtml
    __typename
  }
  operationId
  lastPublishedOperationId
  snapshotCount
  intent
  resources
  changeLog
  items {
    ... on CourseRevisionUnit {
      type
      id
      cacheId
      contentId
      slugSuffix
      translationFingerprint
      title
      description
      listed
      customTitleTag
      customDescriptionTag
      masteryEnabled
      unitTestContentId
      unitTestSlug
      intent
      resources
      changeLog
      items {
        ... on CourseRevisionLesson {
          type
          id
          cacheId
          contentId
          slugSuffix
          translationFingerprint
          title
          description
          listed
          intent
          resources
          changeLog
          items {
            ... on CourseRevisionContent {
              type
              id
              cacheId
              contentId
              contentKind
              __typename
            }
            __typename
          }
          __typename
        }
        ... on CourseRevisionQuiz {
          type
          id
          slug
          cacheId
          contentId
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}`,
  CourseEditorAddUnit: `mutation CourseEditorAddUnit($input: AddUnit!) {
  mutated: addUnit(inputData: $input) {
    course {
      ...CourseStructure
      __typename
    }
    __typename
  }
}

fragment CourseStructure on CourseRevision {
  id
  contentId
  translationFingerprint
  title
  description
  customTitleTag
  customDescriptionTag
  slugRedirects {
    redirectType
    oldSlug
    contentId
    __typename
  }
  legacySlugRedirects {
    redirectType
    oldSlug
    contentId
    __typename
  }
  slugsEverPublished
  locale
  slug
  importedCurationData
  linkedCourseStructure
  curriculumKey
  footerHtml
  allowedExerciseTypes
  hideCommunityQuestions
  listed
  importable
  masteryEnabled
  introSetting {
    title
    description
    buttonText
    internalContent
    externalUrl
    hideButton
    __typename
  }
  sponsorSetting {
    sponsorImageSetting {
      imageUrl
      imageCaption
      imageBaselineAligned
      __typename
    }
    taglineHtml
    __typename
  }
  operationId
  lastPublishedOperationId
  snapshotCount
  intent
  resources
  changeLog
  items {
    ... on CourseRevisionUnit {
      type
      id
      cacheId
      contentId
      slugSuffix
      translationFingerprint
      title
      description
      listed
      customTitleTag
      customDescriptionTag
      masteryEnabled
      unitTestContentId
      unitTestSlug
      intent
      resources
      changeLog
      items {
        ... on CourseRevisionLesson {
          type
          id
          cacheId
          contentId
          slugSuffix
          translationFingerprint
          title
          description
          listed
          intent
          resources
          changeLog
          items {
            ... on CourseRevisionContent {
              type
              id
              cacheId
              contentId
              contentKind
              __typename
            }
            __typename
          }
          __typename
        }
        ... on CourseRevisionQuiz {
          type
          id
          slug
          cacheId
          contentId
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}`,
  CourseEditorAddUnitTest: `mutation CourseEditorAddUnitTest($input: AddUnitTest!) {
  mutated: addUnitTest(inputData: $input) {
    course {
      ...CourseStructure
      __typename
    }
    __typename
  }
}

fragment CourseStructure on CourseRevision {
  id
  contentId
  translationFingerprint
  title
  description
  customTitleTag
  customDescriptionTag
  slugRedirects {
    redirectType
    oldSlug
    contentId
    __typename
  }
  legacySlugRedirects {
    redirectType
    oldSlug
    contentId
    __typename
  }
  slugsEverPublished
  locale
  slug
  importedCurationData
  linkedCourseStructure
  curriculumKey
  footerHtml
  allowedExerciseTypes
  hideCommunityQuestions
  listed
  importable
  masteryEnabled
  introSetting {
    title
    description
    buttonText
    internalContent
    externalUrl
    hideButton
    __typename
  }
  sponsorSetting {
    sponsorImageSetting {
      imageUrl
      imageCaption
      imageBaselineAligned
      __typename
    }
    taglineHtml
    __typename
  }
  operationId
  lastPublishedOperationId
  snapshotCount
  intent
  resources
  changeLog
  items {
    ... on CourseRevisionUnit {
      type
      id
      cacheId
      contentId
      slugSuffix
      translationFingerprint
      title
      description
      listed
      customTitleTag
      customDescriptionTag
      masteryEnabled
      unitTestContentId
      unitTestSlug
      intent
      resources
      changeLog
      items {
        ... on CourseRevisionLesson {
          type
          id
          cacheId
          contentId
          slugSuffix
          translationFingerprint
          title
          description
          listed
          intent
          resources
          changeLog
          items {
            ... on CourseRevisionContent {
              type
              id
              cacheId
              contentId
              contentKind
              __typename
            }
            __typename
          }
          __typename
        }
        ... on CourseRevisionQuiz {
          type
          id
          slug
          cacheId
          contentId
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}`,
  CourseEditorDeleteItem: `mutation CourseEditorDeleteItem($input: DeleteItem!) {
  mutated: deleteItem(inputData: $input) {
    course {
      ...CourseStructure
      __typename
    }
    __typename
  }
}

fragment CourseStructure on CourseRevision {
  id
  contentId
  translationFingerprint
  title
  description
  customTitleTag
  customDescriptionTag
  slugRedirects {
    redirectType
    oldSlug
    contentId
    __typename
  }
  legacySlugRedirects {
    redirectType
    oldSlug
    contentId
    __typename
  }
  slugsEverPublished
  locale
  slug
  importedCurationData
  linkedCourseStructure
  curriculumKey
  footerHtml
  allowedExerciseTypes
  hideCommunityQuestions
  listed
  importable
  masteryEnabled
  introSetting {
    title
    description
    buttonText
    internalContent
    externalUrl
    hideButton
    __typename
  }
  sponsorSetting {
    sponsorImageSetting {
      imageUrl
      imageCaption
      imageBaselineAligned
      __typename
    }
    taglineHtml
    __typename
  }
  operationId
  lastPublishedOperationId
  snapshotCount
  intent
  resources
  changeLog
  items {
    ... on CourseRevisionUnit {
      type
      id
      cacheId
      contentId
      slugSuffix
      translationFingerprint
      title
      description
      listed
      customTitleTag
      customDescriptionTag
      masteryEnabled
      unitTestContentId
      unitTestSlug
      intent
      resources
      changeLog
      items {
        ... on CourseRevisionLesson {
          type
          id
          cacheId
          contentId
          slugSuffix
          translationFingerprint
          title
          description
          listed
          intent
          resources
          changeLog
          items {
            ... on CourseRevisionContent {
              type
              id
              cacheId
              contentId
              contentKind
              __typename
            }
            __typename
          }
          __typename
        }
        ... on CourseRevisionQuiz {
          type
          id
          slug
          cacheId
          contentId
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}`,
  CourseEditorDeleteUnitTest: `mutation CourseEditorDeleteUnitTest($input: DeleteUnitTest!) {
  mutated: deleteUnitTest(inputData: $input) {
    course {
      ...CourseStructure
      __typename
    }
    __typename
  }
}

fragment CourseStructure on CourseRevision {
  id
  contentId
  translationFingerprint
  title
  description
  customTitleTag
  customDescriptionTag
  slugRedirects {
    redirectType
    oldSlug
    contentId
    __typename
  }
  legacySlugRedirects {
    redirectType
    oldSlug
    contentId
    __typename
  }
  slugsEverPublished
  locale
  slug
  importedCurationData
  linkedCourseStructure
  curriculumKey
  footerHtml
  allowedExerciseTypes
  hideCommunityQuestions
  listed
  importable
  masteryEnabled
  introSetting {
    title
    description
    buttonText
    internalContent
    externalUrl
    hideButton
    __typename
  }
  sponsorSetting {
    sponsorImageSetting {
      imageUrl
      imageCaption
      imageBaselineAligned
      __typename
    }
    taglineHtml
    __typename
  }
  operationId
  lastPublishedOperationId
  snapshotCount
  intent
  resources
  changeLog
  items {
    ... on CourseRevisionUnit {
      type
      id
      cacheId
      contentId
      slugSuffix
      translationFingerprint
      title
      description
      listed
      customTitleTag
      customDescriptionTag
      masteryEnabled
      unitTestContentId
      unitTestSlug
      intent
      resources
      changeLog
      items {
        ... on CourseRevisionLesson {
          type
          id
          cacheId
          contentId
          slugSuffix
          translationFingerprint
          title
          description
          listed
          intent
          resources
          changeLog
          items {
            ... on CourseRevisionContent {
              type
              id
              cacheId
              contentId
              contentKind
              __typename
            }
            __typename
          }
          __typename
        }
        ... on CourseRevisionQuiz {
          type
          id
          slug
          cacheId
          contentId
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}`,
  CourseEditorEditChangeLog: `mutation CourseEditorEditChangeLog($input: EditItemChangeLog!) {
  mutated: editChangeLog(inputData: $input) {
    course {
      ...CourseStructure
      __typename
    }
    __typename
  }
}

fragment CourseStructure on CourseRevision {
  id
  contentId
  translationFingerprint
  title
  description
  customTitleTag
  customDescriptionTag
  slugRedirects {
    redirectType
    oldSlug
    contentId
    __typename
  }
  legacySlugRedirects {
    redirectType
    oldSlug
    contentId
    __typename
  }
  slugsEverPublished
  locale
  slug
  importedCurationData
  linkedCourseStructure
  curriculumKey
  footerHtml
  allowedExerciseTypes
  hideCommunityQuestions
  listed
  importable
  masteryEnabled
  introSetting {
    title
    description
    buttonText
    internalContent
    externalUrl
    hideButton
    __typename
  }
  sponsorSetting {
    sponsorImageSetting {
      imageUrl
      imageCaption
      imageBaselineAligned
      __typename
    }
    taglineHtml
    __typename
  }
  operationId
  lastPublishedOperationId
  snapshotCount
  intent
  resources
  changeLog
  items {
    ... on CourseRevisionUnit {
      type
      id
      cacheId
      contentId
      slugSuffix
      translationFingerprint
      title
      description
      listed
      customTitleTag
      customDescriptionTag
      masteryEnabled
      unitTestContentId
      unitTestSlug
      intent
      resources
      changeLog
      items {
        ... on CourseRevisionLesson {
          type
          id
          cacheId
          contentId
          slugSuffix
          translationFingerprint
          title
          description
          listed
          intent
          resources
          changeLog
          items {
            ... on CourseRevisionContent {
              type
              id
              cacheId
              contentId
              contentKind
              __typename
            }
            __typename
          }
          __typename
        }
        ... on CourseRevisionQuiz {
          type
          id
          slug
          cacheId
          contentId
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}`,
  CourseEditorEditCourseIntro: `mutation CourseEditorEditCourseIntro($input: EditCourseIntro!) {
  mutated: editCourseIntro(inputData: $input) {
    course {
      ...CourseStructure
      __typename
    }
    __typename
  }
}

fragment CourseStructure on CourseRevision {
  id
  contentId
  translationFingerprint
  title
  description
  customTitleTag
  customDescriptionTag
  slugRedirects {
    redirectType
    oldSlug
    contentId
    __typename
  }
  legacySlugRedirects {
    redirectType
    oldSlug
    contentId
    __typename
  }
  slugsEverPublished
  locale
  slug
  importedCurationData
  linkedCourseStructure
  curriculumKey
  footerHtml
  allowedExerciseTypes
  hideCommunityQuestions
  listed
  importable
  masteryEnabled
  introSetting {
    title
    description
    buttonText
    internalContent
    externalUrl
    hideButton
    __typename
  }
  sponsorSetting {
    sponsorImageSetting {
      imageUrl
      imageCaption
      imageBaselineAligned
      __typename
    }
    taglineHtml
    __typename
  }
  operationId
  lastPublishedOperationId
  snapshotCount
  intent
  resources
  changeLog
  items {
    ... on CourseRevisionUnit {
      type
      id
      cacheId
      contentId
      slugSuffix
      translationFingerprint
      title
      description
      listed
      customTitleTag
      customDescriptionTag
      masteryEnabled
      unitTestContentId
      unitTestSlug
      intent
      resources
      changeLog
      items {
        ... on CourseRevisionLesson {
          type
          id
          cacheId
          contentId
          slugSuffix
          translationFingerprint
          title
          description
          listed
          intent
          resources
          changeLog
          items {
            ... on CourseRevisionContent {
              type
              id
              cacheId
              contentId
              contentKind
              __typename
            }
            __typename
          }
          __typename
        }
        ... on CourseRevisionQuiz {
          type
          id
          slug
          cacheId
          contentId
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}`,
  CourseEditorEditCourseSponsor: `mutation CourseEditorEditCourseSponsor($input: EditCourseSponsor!) {
  mutated: editCourseSponsor(inputData: $input) {
    course {
      ...CourseStructure
      __typename
    }
    __typename
  }
}

fragment CourseStructure on CourseRevision {
  id
  contentId
  translationFingerprint
  title
  description
  customTitleTag
  customDescriptionTag
  slugRedirects {
    redirectType
    oldSlug
    contentId
    __typename
  }
  legacySlugRedirects {
    redirectType
    oldSlug
    contentId
    __typename
  }
  slugsEverPublished
  locale
  slug
  importedCurationData
  linkedCourseStructure
  curriculumKey
  footerHtml
  allowedExerciseTypes
  hideCommunityQuestions
  listed
  importable
  masteryEnabled
  introSetting {
    title
    description
    buttonText
    internalContent
    externalUrl
    hideButton
    __typename
  }
  sponsorSetting {
    sponsorImageSetting {
      imageUrl
      imageCaption
      imageBaselineAligned
      __typename
    }
    taglineHtml
    __typename
  }
  operationId
  lastPublishedOperationId
  snapshotCount
  intent
  resources
  changeLog
  items {
    ... on CourseRevisionUnit {
      type
      id
      cacheId
      contentId
      slugSuffix
      translationFingerprint
      title
      description
      listed
      customTitleTag
      customDescriptionTag
      masteryEnabled
      unitTestContentId
      unitTestSlug
      intent
      resources
      changeLog
      items {
        ... on CourseRevisionLesson {
          type
          id
          cacheId
          contentId
          slugSuffix
          translationFingerprint
          title
          description
          listed
          intent
          resources
          changeLog
          items {
            ... on CourseRevisionContent {
              type
              id
              cacheId
              contentId
              contentKind
              __typename
            }
            __typename
          }
          __typename
        }
        ... on CourseRevisionQuiz {
          type
          id
          slug
          cacheId
          contentId
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}`,
  CourseEditorEditIntent: `mutation CourseEditorEditIntent($input: EditItemIntent!) {
  mutated: editIntent(inputData: $input) {
    course {
      ...CourseStructure
      __typename
    }
    __typename
  }
}

fragment CourseStructure on CourseRevision {
  id
  contentId
  translationFingerprint
  title
  description
  customTitleTag
  customDescriptionTag
  slugRedirects {
    redirectType
    oldSlug
    contentId
    __typename
  }
  legacySlugRedirects {
    redirectType
    oldSlug
    contentId
    __typename
  }
  slugsEverPublished
  locale
  slug
  importedCurationData
  linkedCourseStructure
  curriculumKey
  footerHtml
  allowedExerciseTypes
  hideCommunityQuestions
  listed
  importable
  masteryEnabled
  introSetting {
    title
    description
    buttonText
    internalContent
    externalUrl
    hideButton
    __typename
  }
  sponsorSetting {
    sponsorImageSetting {
      imageUrl
      imageCaption
      imageBaselineAligned
      __typename
    }
    taglineHtml
    __typename
  }
  operationId
  lastPublishedOperationId
  snapshotCount
  intent
  resources
  changeLog
  items {
    ... on CourseRevisionUnit {
      type
      id
      cacheId
      contentId
      slugSuffix
      translationFingerprint
      title
      description
      listed
      customTitleTag
      customDescriptionTag
      masteryEnabled
      unitTestContentId
      unitTestSlug
      intent
      resources
      changeLog
      items {
        ... on CourseRevisionLesson {
          type
          id
          cacheId
          contentId
          slugSuffix
          translationFingerprint
          title
          description
          listed
          intent
          resources
          changeLog
          items {
            ... on CourseRevisionContent {
              type
              id
              cacheId
              contentId
              contentKind
              __typename
            }
            __typename
          }
          __typename
        }
        ... on CourseRevisionQuiz {
          type
          id
          slug
          cacheId
          contentId
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}`,
  CourseEditorEditResources: `mutation CourseEditorEditResources($input: EditItemResources!) {
  mutated: editResources(inputData: $input) {
    course {
      ...CourseStructure
      __typename
    }
    __typename
  }
}

fragment CourseStructure on CourseRevision {
  id
  contentId
  translationFingerprint
  title
  description
  customTitleTag
  customDescriptionTag
  slugRedirects {
    redirectType
    oldSlug
    contentId
    __typename
  }
  legacySlugRedirects {
    redirectType
    oldSlug
    contentId
    __typename
  }
  slugsEverPublished
  locale
  slug
  importedCurationData
  linkedCourseStructure
  curriculumKey
  footerHtml
  allowedExerciseTypes
  hideCommunityQuestions
  listed
  importable
  masteryEnabled
  introSetting {
    title
    description
    buttonText
    internalContent
    externalUrl
    hideButton
    __typename
  }
  sponsorSetting {
    sponsorImageSetting {
      imageUrl
      imageCaption
      imageBaselineAligned
      __typename
    }
    taglineHtml
    __typename
  }
  operationId
  lastPublishedOperationId
  snapshotCount
  intent
  resources
  changeLog
  items {
    ... on CourseRevisionUnit {
      type
      id
      cacheId
      contentId
      slugSuffix
      translationFingerprint
      title
      description
      listed
      customTitleTag
      customDescriptionTag
      masteryEnabled
      unitTestContentId
      unitTestSlug
      intent
      resources
      changeLog
      items {
        ... on CourseRevisionLesson {
          type
          id
          cacheId
          contentId
          slugSuffix
          translationFingerprint
          title
          description
          listed
          intent
          resources
          changeLog
          items {
            ... on CourseRevisionContent {
              type
              id
              cacheId
              contentId
              contentKind
              __typename
            }
            __typename
          }
          __typename
        }
        ... on CourseRevisionQuiz {
          type
          id
          slug
          cacheId
          contentId
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}`,
  CourseEditorEnableMastery: `mutation CourseEditorEnableMastery($input: EnableMastery!) {
  mutated: enableMastery(inputData: $input) {
    course {
      ...CourseStructure
      __typename
    }
    __typename
  }
}

fragment CourseStructure on CourseRevision {
  id
  contentId
  translationFingerprint
  title
  description
  customTitleTag
  customDescriptionTag
  slugRedirects {
    redirectType
    oldSlug
    contentId
    __typename
  }
  legacySlugRedirects {
    redirectType
    oldSlug
    contentId
    __typename
  }
  slugsEverPublished
  locale
  slug
  importedCurationData
  linkedCourseStructure
  curriculumKey
  footerHtml
  allowedExerciseTypes
  hideCommunityQuestions
  listed
  importable
  masteryEnabled
  introSetting {
    title
    description
    buttonText
    internalContent
    externalUrl
    hideButton
    __typename
  }
  sponsorSetting {
    sponsorImageSetting {
      imageUrl
      imageCaption
      imageBaselineAligned
      __typename
    }
    taglineHtml
    __typename
  }
  operationId
  lastPublishedOperationId
  snapshotCount
  intent
  resources
  changeLog
  items {
    ... on CourseRevisionUnit {
      type
      id
      cacheId
      contentId
      slugSuffix
      translationFingerprint
      title
      description
      listed
      customTitleTag
      customDescriptionTag
      masteryEnabled
      unitTestContentId
      unitTestSlug
      intent
      resources
      changeLog
      items {
        ... on CourseRevisionLesson {
          type
          id
          cacheId
          contentId
          slugSuffix
          translationFingerprint
          title
          description
          listed
          intent
          resources
          changeLog
          items {
            ... on CourseRevisionContent {
              type
              id
              cacheId
              contentId
              contentKind
              __typename
            }
            __typename
          }
          __typename
        }
        ... on CourseRevisionQuiz {
          type
          id
          slug
          cacheId
          contentId
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}`,
  CourseEditorMoveItem: `mutation CourseEditorMoveItem($input: MoveItem!) {
  mutated: moveItem(inputData: $input) {
    course {
      ...CourseStructure
      __typename
    }
    __typename
  }
}

fragment CourseStructure on CourseRevision {
  id
  contentId
  translationFingerprint
  title
  description
  customTitleTag
  customDescriptionTag
  slugRedirects {
    redirectType
    oldSlug
    contentId
    __typename
  }
  legacySlugRedirects {
    redirectType
    oldSlug
    contentId
    __typename
  }
  slugsEverPublished
  locale
  slug
  importedCurationData
  linkedCourseStructure
  curriculumKey
  footerHtml
  allowedExerciseTypes
  hideCommunityQuestions
  listed
  importable
  masteryEnabled
  introSetting {
    title
    description
    buttonText
    internalContent
    externalUrl
    hideButton
    __typename
  }
  sponsorSetting {
    sponsorImageSetting {
      imageUrl
      imageCaption
      imageBaselineAligned
      __typename
    }
    taglineHtml
    __typename
  }
  operationId
  lastPublishedOperationId
  snapshotCount
  intent
  resources
  changeLog
  items {
    ... on CourseRevisionUnit {
      type
      id
      cacheId
      contentId
      slugSuffix
      translationFingerprint
      title
      description
      listed
      customTitleTag
      customDescriptionTag
      masteryEnabled
      unitTestContentId
      unitTestSlug
      intent
      resources
      changeLog
      items {
        ... on CourseRevisionLesson {
          type
          id
          cacheId
          contentId
          slugSuffix
          translationFingerprint
          title
          description
          listed
          intent
          resources
          changeLog
          items {
            ... on CourseRevisionContent {
              type
              id
              cacheId
              contentId
              contentKind
              __typename
            }
            __typename
          }
          __typename
        }
        ... on CourseRevisionQuiz {
          type
          id
          slug
          cacheId
          contentId
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}`,
  CourseEditorPublish: `mutation CourseEditorPublish($input: PublishCourse!) {
  publishResult: publishCourse(inputData: $input) {
    snapshotId
    __typename
  }
}`,
  CourseEditorQueueCoursePublish: `mutation CourseEditorQueueCoursePublish($courseId: String!, $snapshotId: String!, $contentDescriptors: [String!]!, $title: String!) {
  startPublishForCourse(
    courseId: $courseId
    snapshotId: $snapshotId
    contentDescriptors: $contentDescriptors
    title: $title
  ) {
    success
    publishStatus {
      id
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  CourseEditorSetProperty: `mutation CourseEditorSetProperty($input: EditProperty!) {
  mutated: editProperty(inputData: $input) {
    course {
      ...CourseStructure
      __typename
    }
    __typename
  }
}

fragment CourseStructure on CourseRevision {
  id
  contentId
  translationFingerprint
  title
  description
  customTitleTag
  customDescriptionTag
  slugRedirects {
    redirectType
    oldSlug
    contentId
    __typename
  }
  legacySlugRedirects {
    redirectType
    oldSlug
    contentId
    __typename
  }
  slugsEverPublished
  locale
  slug
  importedCurationData
  linkedCourseStructure
  curriculumKey
  footerHtml
  allowedExerciseTypes
  hideCommunityQuestions
  listed
  importable
  masteryEnabled
  introSetting {
    title
    description
    buttonText
    internalContent
    externalUrl
    hideButton
    __typename
  }
  sponsorSetting {
    sponsorImageSetting {
      imageUrl
      imageCaption
      imageBaselineAligned
      __typename
    }
    taglineHtml
    __typename
  }
  operationId
  lastPublishedOperationId
  snapshotCount
  intent
  resources
  changeLog
  items {
    ... on CourseRevisionUnit {
      type
      id
      cacheId
      contentId
      slugSuffix
      translationFingerprint
      title
      description
      listed
      customTitleTag
      customDescriptionTag
      masteryEnabled
      unitTestContentId
      unitTestSlug
      intent
      resources
      changeLog
      items {
        ... on CourseRevisionLesson {
          type
          id
          cacheId
          contentId
          slugSuffix
          translationFingerprint
          title
          description
          listed
          intent
          resources
          changeLog
          items {
            ... on CourseRevisionContent {
              type
              id
              cacheId
              contentId
              contentKind
              __typename
            }
            __typename
          }
          __typename
        }
        ... on CourseRevisionQuiz {
          type
          id
          slug
          cacheId
          contentId
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}`,
  CourseEditorSyncLinkedCourse: `mutation CourseEditorSyncLinkedCourse($input: SyncCourse!) {
  course: syncLinkedCourse(inputData: $input) {
    ...CourseStructure
    __typename
  }
}

fragment CourseStructure on CourseRevision {
  id
  contentId
  translationFingerprint
  title
  description
  customTitleTag
  customDescriptionTag
  slugRedirects {
    redirectType
    oldSlug
    contentId
    __typename
  }
  legacySlugRedirects {
    redirectType
    oldSlug
    contentId
    __typename
  }
  slugsEverPublished
  locale
  slug
  importedCurationData
  linkedCourseStructure
  curriculumKey
  footerHtml
  allowedExerciseTypes
  hideCommunityQuestions
  listed
  importable
  masteryEnabled
  introSetting {
    title
    description
    buttonText
    internalContent
    externalUrl
    hideButton
    __typename
  }
  sponsorSetting {
    sponsorImageSetting {
      imageUrl
      imageCaption
      imageBaselineAligned
      __typename
    }
    taglineHtml
    __typename
  }
  operationId
  lastPublishedOperationId
  snapshotCount
  intent
  resources
  changeLog
  items {
    ... on CourseRevisionUnit {
      type
      id
      cacheId
      contentId
      slugSuffix
      translationFingerprint
      title
      description
      listed
      customTitleTag
      customDescriptionTag
      masteryEnabled
      unitTestContentId
      unitTestSlug
      intent
      resources
      changeLog
      items {
        ... on CourseRevisionLesson {
          type
          id
          cacheId
          contentId
          slugSuffix
          translationFingerprint
          title
          description
          listed
          intent
          resources
          changeLog
          items {
            ... on CourseRevisionContent {
              type
              id
              cacheId
              contentId
              contentKind
              __typename
            }
            __typename
          }
          __typename
        }
        ... on CourseRevisionQuiz {
          type
          id
          slug
          cacheId
          contentId
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}`,
  CourseMenuEditor_CreateCourseMenuRevision: `mutation CourseMenuEditor_CreateCourseMenuRevision($newCourseMenu: NewCourseMenuInput!) {
  createCourseMenu(input: $newCourseMenu) {
    courseMenu {
      ...CourseMenuRevisionFields
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}

fragment CourseMenuRevisionFields on CourseMenuRevision {
  id
  sha
  groups {
    identifier
    translatedTitle
    href
    isNew
    children {
      identifier
      translatedTitle
      href
      isNew
      nonContentLink
      loggedOutHref
      __typename
    }
    __typename
  }
  __typename
}`,
  CourseMenuEditor_EditCourseMenuRevision: `mutation CourseMenuEditor_EditCourseMenuRevision($sha: String!, $updatedCourseMenu: EditCourseMenuInput!) {
  editCourseMenu(sha: $sha, input: $updatedCourseMenu) {
    courseMenu {
      ...CourseMenuRevisionFields
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}

fragment CourseMenuRevisionFields on CourseMenuRevision {
  id
  sha
  groups {
    identifier
    translatedTitle
    href
    isNew
    children {
      identifier
      translatedTitle
      href
      isNew
      nonContentLink
      loggedOutHref
      __typename
    }
    __typename
  }
  __typename
}`,
  CreateAssessmentItemTag: `mutation CreateAssessmentItemTag($displayName: String!, $description: String!, $lessonId: String!) {
  createAssessmentItemTag(
    displayName: $displayName
    description: $description
    lessonId: $lessonId
  ) {
    assessmentItemTag {
      ...AssessmentItemTagFields
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}

fragment AssessmentItemTagFields on AssessmentItemTag {
  editId: id
  id: urlsafeTag
  displayName
  description
  relatedContentId: lessonId
  __typename
}`,
  createAssignments: `mutation createAssignments($classDescriptors: [String!]!, $qualifiedContentDescriptorsList: [String!], $startDate: DateTime!, $dueDate: DateTime, $isDraft: Boolean, $studentKaids: [ID], $subjectSlug: String!, $questionSetType: ExerciseItemPickerStrategy, $title: String, $instructions: String, $configuredActivityInputs: String) {
  createAssignments(
    assignment: {classroomDescriptors: $classDescriptors, qualifiedContentDescriptorsList: $qualifiedContentDescriptorsList, startDate: $startDate, dueDate: $dueDate, isDraft: $isDraft, studentKaids: $studentKaids, subjectSlug: $subjectSlug, exerciseItemPickerStrategy: $questionSetType, title: $title, instructions: $instructions, configuredActivityInputs: $configuredActivityInputs}
  ) {
    assignments {
      ...AssignmentInfoFragment
      __typename
    }
    __typename
  }
}

fragment AssignmentInfoFragment on Assignment {
  id
  contents {
    id
    title: translatedTitle
    kind
    __typename
  }
  studentList {
    id
    cacheId
    name
    isK4dClassroom
    __typename
  }
  students {
    id
    kaid
    __typename
  }
  startDate
  dueDate
  isDraft
  subjectSlug
  title
  instructions
  __typename
}`,
  createChildMutation: `mutation createChildMutation($birthdate: Date!, $username: String!, $password: String!, $nickname: String) {
  createChild(
    birthdate: $birthdate
    username: $username
    password: $password
    nickname: $nickname
  ) {
    child {
      id
      nickname
      __typename
    }
    error {
      code
      field
      __typename
    }
    __typename
  }
}`,
  createClassroomMutation: `mutation createClassroomMutation($classroomName: String!, $subscribeToUpdates: Boolean, $isTestClassroom: Boolean, $isChildAssignmentsClassroom: Boolean) {
  createClassroom(
    classroomName: $classroomName
    subscribeToUpdates: $subscribeToUpdates
    isTestClassroom: $isTestClassroom
    isChildAssignmentsClassroom: $isChildAssignmentsClassroom
  ) {
    classroom {
      id
      cacheId
      descriptor
      key
      name
      signupCode
      isChildAssignmentsClassroom
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  CreateCourseMasteryAssignmentsMutation: `mutation CreateCourseMasteryAssignmentsMutation($classDescriptors: [String!]!, $studentKaids: [ID!]!, $topicId: String!, $dueDate: DateTime!) {
  createCourseMasteryAssignments(
    assignments: {classroomDescriptors: $classDescriptors, studentKaids: $studentKaids, courseId: $topicId, dueDate: $dueDate}
  ) {
    assignments {
      id
      createdDate
      dueDate
      __typename
    }
    __typename
  }
}`,
  createCurationPageRevisionMutation: `mutation createCurationPageRevisionMutation($input: NewCurationPageInput!) {
  createCurationPage(input: $input) {
    curationPage {
      contentKind
      id
      title
      slug
      alternateSlugs
      description
      listed
      sponsored
      showCurationModule
      lowerToc
      customDescriptionTag
      customTitleTag
      curationData
      sha
      hasUnpublishedChanges
      __typename
    }
    error {
      code
      conflictSha
      debugMessage
      __typename
    }
    __typename
  }
}`,
  createCustomBadge: `mutation createCustomBadge($input: CreateCustomBadgeInput) {
  createCustomBadge(input: $input) {
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  createDistrict: `mutation createDistrict($name: String!, $offerings: [Offering!]!, $rosterSource: RosterSource!, $isTest: Boolean!, $rosterID: String!, $nweaID: String!, $ncesID: String, $sendEmails: Boolean!, $goLiveDate: Date!, $schoolYearDates: DistrictSchoolYearInput!, $region: String) {
  createDistrict(
    name: $name
    offerings: $offerings
    isTest: $isTest
    rosterID: $rosterID
    rosterSource: $rosterSource
    nweaID: $nweaID
    ncesID: $ncesID
    sendTeacherActivationEmails: $sendEmails
    goLiveDate: $goLiveDate
    schoolYearDates: $schoolYearDates
    region: $region
  ) {
    error {
      code
      __typename
    }
    district {
      id
      name
      __typename
    }
    __typename
  }
}`,
  createGoogleClassroom: `mutation createGoogleClassroom($googleClassId: String!, $googleClassName: String!, $googleClassUrl: String!, $googleClassStudents: [GoogleClassStudent]!, $khanClassName: String) {
  createGoogleClassroom(
    googleClassId: $googleClassId
    googleClassName: $googleClassName
    googleClassUrl: $googleClassUrl
    googleClassStudents: $googleClassStudents
    khanClassName: $khanClassName
  ) {
    classroom {
      ...ClassroomData
      __typename
    }
    linkedStudents {
      ...LinkedStudentData
      __typename
    }
    unsuccessfullyLinkedStudents {
      ...UnlinkedStudentData
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}

fragment ClassroomData on StudentList {
  cacheId
  id
  descriptor
  name
  key
  signupCode
  googleClassId
  googleClassName
  googleClassUrl
  __typename
}

fragment LinkedStudentData on LinkedGoogleClassStudent {
  email
  __typename
}

fragment UnlinkedStudentData on UnsuccessfullyLinkedGoogleClassStudent {
  email
  nickname
  error {
    code
    __typename
  }
  __typename
}`,
  createInitialClassroom: `mutation createInitialClassroom($classroomName: String!) {
  createClassroom(classroomName: $classroomName, autoGenerated: true) {
    classroom {
      id
      cacheId
      descriptor
      __typename
    }
    __typename
  }
}`,
  createOffensiveTerm: `mutation createOffensiveTerm($term: String!, $kaLocale: String, $isAiGuide: Boolean) {
  createNewOffensiveTerm(term: $term, kaLocale: $kaLocale, isAiGuide: $isAiGuide) {
    offensiveTerm {
      id
      term
      __typename
    }
    __typename
  }
}`,
  createOfficialClarification: `mutation createOfficialClarification($clarification: CreateOfficialClarificationInput!) {
  createOfficialClarification(clarification: $clarification) {
    newClarification {
      ...clarificationFragmentWithReporter
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  createProgram: `mutation createProgram($title: String!, $userAuthoredContentType: UserAuthoredContentType!, $revision: ProgramRevisionInput!, $curationNodeSlug: String!) {
  createProgram(
    title: $title
    userAuthoredContentType: $userAuthoredContentType
    revision: $revision
    curationNodeSlug: $curationNodeSlug
  ) {
    program {
      ...Program
      __typename
    }
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}

fragment Program on Program {
  id
  latestRevision {
    id
    code
    __typename
  }
  title
  url
  userAuthoredContentType
  __typename
}`,
  createStudentAccounts: `mutation createStudentAccounts($studentListKey: String, $students: [CreateStudentsInput]!) {
  createStudents(students: $students, studentListKey: $studentListKey) {
    students {
      id
      username
      __typename
    }
    errors {
      code
      username
      __typename
    }
    __typename
  }
}`,
  CreateTeamPageEntryMutation: `mutation CreateTeamPageEntryMutation($content: TeamPageEntryInput!, $entryType: TeamPageEntryType!) {
  createTeamPageEntry(content: $content, entryType: $entryType) {
    entry {
      ...entry
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}

fragment entry on TeamPageEntryForEditing {
  id
  isPet
  isIntern
  isAlum
  hasPendingChanges
  draftContent {
    id
    name
    altNames
    startDate
    isAlum
    mainPhotoURL
    hoverPhotoURL
    title
    bio
    contactLinks {
      type
      editValue
      editPrefix
      url
      __typename
    }
    __typename
  }
  __typename
}`,
  DeactivateUDIMutation: `mutation DeactivateUDIMutation($uuid: ID!) {
  deactivateUserDistrictInfo: deactivateUserDistrictInfoV2(uuid: $uuid) {
    exists
    canDeactivate
    wasDeactivated
    kaid
    __typename
  }
}`,
  deleteAllContentPermissions: `mutation deleteAllContentPermissions($kaid: String!) {
  deleteAllContentPermissions(kaid: $kaid) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  DeleteAssessmentItemTag: `mutation DeleteAssessmentItemTag($id: String!) {
  deleteAssessmentItemTag(id: $id) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  deleteClassroomMutation: `mutation deleteClassroomMutation($classroomDescriptor: String!) {
  deleteClassroom(descriptor: $classroomDescriptor) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  deleteCleverTeacherRequest: `mutation deleteCleverTeacherRequest($studentIdentifier: ID!) {
  deleteCleverTeacherRequest(studentIdentifier: $studentIdentifier) {
    coach: user {
      id
      kaid
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  deleteCoachMutation: `mutation deleteCoachMutation($coachKaid: ID!, $studentKaid: String) {
  removeCoach(coachKaid: $coachKaid, studentKaid: $studentKaid) {
    wasSuccessful
    __typename
  }
}`,
  deleteCoachRequest: `mutation deleteCoachRequest($studentEmail: String!) {
  deleteCoachRequest(studentEmail: $studentEmail) {
    coach: user {
      id
      kaid
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  deleteContentPermission: `mutation deleteContentPermission($userKaid: String!, $permissionId: String!) {
  deleteContentPermission(userKaid: $userKaid, contentPermissionId: $permissionId) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  deleteCustomRedirect: `mutation deleteCustomRedirect($from: String!) {
  deleteCustomRedirect(redirectFrom: $from) {
    error {
      code
      __typename
    }
    deletedRedirect {
      id
      __typename
    }
    __typename
  }
}`,
  deleteDonationAsk: `mutation deleteDonationAsk($id: String!) {
  deleteDonationAsk(id: $id) {
    success
    error {
      code
      __typename
    }
    __typename
  }
}`,
  DeleteDub: `mutation DeleteDub($input: String!) {
  deleteDub(sourceYouTubeId: $input) {
    error {
      code
      debugMessage
      dubInsertOrUpdateEntry {
        sourceYouTubeId
        dubYouTubeId
        contentId
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  deleteEmailInvitation: `mutation deleteEmailInvitation($studentEmail: String!) {
  deleteEmailInvite(studentEmail: $studentEmail) {
    coach: user {
      id
      kaid
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  deleteEmailInvite: `mutation deleteEmailInvite($childEmail: String!) {
  deleteEmailInvite(studentEmail: $childEmail) {
    user {
      id
      childInvitations {
        invitationType
        email
        requestKey
        nickname
        __typename
      }
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  DeleteFlagMutation: `mutation DeleteFlagMutation($flagName: String!) {
  removeFlag(name: $flagName) {
    wasSuccess
    __typename
  }
}`,
  deleteOffensiveTerm: `mutation deleteOffensiveTerm($id: ID!) {
  deleteOffensiveTerm(id: $id) {
    success
    __typename
  }
}`,
  deleteOfficialClarification: `mutation deleteOfficialClarification($id: ID!) {
  deleteOfficialClarification(id: $id) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  deleteParentRequest: `mutation deleteParentRequest($childEmail: String!) {
  deleteCoachRequest(studentEmail: $childEmail) {
    user {
      id
      childInvitations {
        invitationType
        email
        requestKey
        nickname
        __typename
      }
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  DeletePostMutation: `mutation DeletePostMutation($postKey: String!) {
  hideFeedback(feedbackKey: $postKey) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  deleteProgram: `mutation deleteProgram($programID: ID!) {
  deleteProgram(programID: $programID) {
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  DevadminCreateAuthor: `mutation DevadminCreateAuthor($name: String!) {
  createAuthorOption(name: $name) {
    author {
      id
      name
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  DevadminDeleteAuthor: `mutation DevadminDeleteAuthor($id: ID!) {
  deleteAuthorOption(id: $id) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  devadminTriggerAlarm: `mutation devadminTriggerAlarm($level: AlarmLevel!, $subject: String!, $contents: String) {
  devadminTriggerAlarmV2(
    level: $level
    subjectLine: $subject
    contents: $contents
  ) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  disableAIGuide: `mutation disableAIGuide($kaid: String!) {
  disableAIGuide(kaid: $kaid, reason: MODERATION) {
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  disconnectClever: `mutation disconnectClever($kaid: String!) {
  devadminDisconnectClever(kaid: $kaid) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  DismissItemMutation: `mutation DismissItemMutation($itemName: String!, $expires: DateTime) {
  dismissItem(itemName: $itemName, expires: $expires) {
    error {
      code
      __typename
    }
    dismissedItem {
      id
      isDismissed
      __typename
    }
    __typename
  }
}`,
  districtRoster: `mutation districtRoster($districtID: String!, $force: Boolean!) {
  rosterDistrict(districtID: $districtID, force: $force) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  DoGeneralAICompletion: `mutation DoGeneralAICompletion($prompt: String!, $model: String, $temperature: Float, $maxTokens: Int, $stop: [String!]) {
  doGeneralAICompletion(
    input: {prompt: $prompt, model: $model, temperature: $temperature, maxTokens: $maxTokens, stop: $stop}
  ) {
    completion {
      text
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  editClassroomSatStatusMutation: `mutation editClassroomSatStatusMutation($classDescriptor: String!, $includeSat: Boolean!, $fromUpsell: Boolean) {
  setClassroomSatStatus(
    classroomDescriptor: $classDescriptor
    includeSat: $includeSat
    fromUpsell: $fromUpsell
  ) {
    classroom {
      id
      cacheId
      includesSat
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  EditModifyCoachesCapability: `mutation EditModifyCoachesCapability($targetKaid: String!, $allow: Boolean!) {
  setModifyCoachesCapability(targetKaid: $targetKaid, allow: $allow) {
    target {
      id
      canModifyCoaches
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  EditNotationReadAloudsForAssessmentItem: `mutation EditNotationReadAloudsForAssessmentItem($assessmentItemID: ID!, $exerciseID: ID!, $notationMap: String!) {
  editNotationReadAloudsForAssessmentItem(
    assessmentItemID: $assessmentItemID
    exerciseID: $exerciseID
    notationMap: $notationMap
  ) {
    updatedNotations {
      assessmentItemId
      domainId
      exerciseId
      exerciseUrl
      id
      original
      readable
      __typename
    }
    deletedNotations
    error {
      code
      message
      __typename
    }
    __typename
  }
}`,
  EnableAIGuide: `mutation EnableAIGuide($kaid: String!) {
  enableAIGuide(kaid: $kaid) {
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  encodeAppleLoginState: `mutation encodeAppleLoginState($action: Action!, $continueUrl: String!, $role: UserRole, $signupCodes: [String]) {
  encodeAppleLoginState(
    action: $action
    continueUrl: $continueUrl
    role: $role
    signupCodes: $signupCodes
  ) {
    redirectUri
    state
    __typename
  }
}`,
  endMasteryTowerSession: `mutation endMasteryTowerSession($classDescriptor: String!) {
  endMasteryTowerSession(classDescriptor: $classDescriptor) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  enrollInAIGuide: `mutation enrollInAIGuide($kaid: String!, $enrollmentGroup: AIGuideEnrollmentGroup!) {
  enrollInAIGuide(kaid: $kaid, enrollmentGroup: $enrollmentGroup) {
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  enrollMultipleInAIGuide: `mutation enrollMultipleInAIGuide($kaids: [String!], $enrollmentGroup: AIGuideEnrollmentGroup!, $description: String!) {
  enrollMultipleInAIGuide(
    kaids: $kaids
    enrollmentGroup: $enrollmentGroup
    description: $description
  ) {
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  exchangeGoogleCodeForIDTokenMutation: `mutation exchangeGoogleCodeForIDTokenMutation($code: String!, $redirectURI: String!) {
  exchangeGoogleCodeForIDToken(code: $code, redirectURI: $redirectURI) {
    idToken
    error {
      code
      __typename
    }
    __typename
  }
}`,
  FlagPostMutation: `mutation FlagPostMutation($flag: String!, $entityKey: String!, $justification: String) {
  flagEntity(flag: $flag, entityKey: $entityKey, justification: $justification) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  forgotPassword: `mutation forgotPassword($email: String!) {
  forgotPassword(email: $email) {
    error {
      code
      __typename
    }
    devOnlyLink
    __typename
  }
}`,
  ForgotPasswordMutation: `mutation ForgotPasswordMutation($email: String!) {
  forgotPassword(email: $email) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  forgotPasswordSupport: `mutation forgotPasswordSupport($kaid: String!, $email: String!) {
  forgotPasswordSupport(kaid: $kaid, email: $email) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  formalTeacherStatusMutation: `mutation formalTeacherStatusMutation($tosForFormalTeacherStatus: Boolean) {
  setSettings(tosForFormalTeacherStatus: $tosForFormalTeacherStatus) {
    user {
      id
      tosForFormalTeacherStatus
      __typename
    }
    __typename
  }
}`,
  GetEmailFromToken: `mutation GetEmailFromToken($token: String!) {
  getEmailFromLinkAccountToken(token: $token) {
    email
    isEmancipated
    error {
      code
      __typename
    }
    __typename
  }
}`,
  getOrCreateExerciseTask: `mutation getOrCreateExerciseTask($input: GetOrCreateExerciseTaskInput!, $ancestorIds: [String!]!) {
  getOrCreateExerciseTask(input: $input) {
    result {
      error {
        code
        debugMessage
        __typename
      }
      userTask {
        cards {
          ...problemCardFields
          __typename
        }
        task {
          ... on MasteryChallengeTask {
            ...masteryChallengeTaskFields
            __typename
          }
          ... on SubjectChallengeTask {
            ...courseChallengeTaskFields
            __typename
          }
          ... on TopicQuizTask {
            ...quizTaskFields
            __typename
          }
          ... on TopicUnitTestTask {
            ...unitTestTaskFields
            __typename
          }
          __typename
        }
        userExercises {
          ...userExerciseFields
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}

fragment courseChallengeTaskFields on SubjectChallengeTask {
  id
  key
  completionCriteria {
    name
    __typename
  }
  contentKey
  isCompleted
  pointBounty
  pointsEarned
  promotionCriteria {
    ...promotionCriteriaFields
    __typename
  }
  reservedItems
  reservedItemsCompleted
  taskAttemptHistory {
    ...taskAttemptHistoryFields
    __typename
  }
  taskType
  __typename
}

fragment masteryChallengeTaskFields on MasteryChallengeTask {
  id
  key
  completionCriteria {
    name
    __typename
  }
  expirationTime
  isCompleted
  pointBounty
  pointsEarned
  promotionCriteria {
    ...promotionCriteriaFields
    __typename
  }
  reservedItems
  reservedItemsCompleted
  taskAttemptHistory {
    ...taskAttemptHistoryFields
    __typename
  }
  taskType
  __typename
}

fragment problemCardFields on ProblemCard {
  cardType
  done
  exerciseName
  problemType
  __typename
}

fragment problemTypeFields on ProblemType {
  items {
    id
    live
    sha
    __typename
  }
  name
  relatedVideos
  __typename
}

fragment promotionCriteriaFields on PromotionCriteria {
  name
  value
  __typename
}

fragment quizTaskFields on TopicQuizTask {
  id
  key
  canRestart
  completionCriteria {
    name
    __typename
  }
  contentKey
  isCompleted
  pointBounty
  pointsEarned
  promotionCriteria {
    ...promotionCriteriaFields
    __typename
  }
  reservedItems
  reservedItemsCompleted
  taskAttemptHistory {
    ...taskAttemptHistoryFields
    __typename
  }
  taskType
  __typename
}

fragment taskAttemptHistoryFields on TaskProblemAttempt {
  correct
  timeDone
  seenHint
  itemId
  __typename
}

fragment unitTestTaskFields on TopicUnitTestTask {
  id
  key
  canRestart
  completionCriteria {
    name
    __typename
  }
  contentKey
  isCompleted
  pointBounty
  pointsEarned
  promotionCriteria {
    ...promotionCriteriaFields
    __typename
  }
  reservedItems
  reservedItemsCompleted
  taskAttemptHistory {
    ...taskAttemptHistoryFields
    __typename
  }
  taskType
  __typename
}

fragment userExerciseFields on UserExercise {
  exerciseModel: exercise {
    id
    assessmentItemCount: numAssessmentItems
    displayName
    isQuiz
    isSkillCheck
    name
    nodeSlug
    progressKey
    translatedDisplayName
    relatedContent {
      id
      contentKind
      kind
      thumbnailUrl
      translatedTitle
      urlWithinCurationNode
      urlWithinClosestAncestor(ancestorIds: $ancestorIds)
      topicPaths {
        path {
          id
          kind
          slug
          __typename
        }
        __typename
      }
      ... on Article {
        kaUrl
        nodeSlug
        relativeUrl
        slug
        __typename
      }
      ... on Video {
        duration
        imageUrl
        kaUrl
        nodeSlug
        relativeUrl
        slug
        translatedYoutubeId
        __typename
      }
      __typename
    }
    relatedVideos {
      contentKind
      duration
      id
      imageUrl
      kaUrl
      kind
      nodeSlug
      progressKey
      relativeUrl
      slug
      thumbnailUrl
      translatedDescription
      translatedTitle
      translatedYoutubeId
      __typename
    }
    problemTypes {
      ...problemTypeFields
      __typename
    }
    translatedProblemTypes {
      ...problemTypeFields
      __typename
    }
    __typename
  }
  exercise: exerciseName
  fpmMasteryLevel
  lastAttemptNumber
  lastCountHints
  lastDone
  lastMasteryUpdate
  longestStreak
  maximumExerciseProgressDt: maximumExerciseProgressDate
  streak
  totalCorrect
  totalDone
  __typename
}`,
  getOrCreatePracticeTask: `mutation getOrCreatePracticeTask($input: GetOrCreatePracticeTaskInput!, $ancestorIds: [String!]!) {
  getOrCreatePracticeTask(input: $input) {
    result {
      error {
        code
        debugMessage
        __typename
      }
      userTask {
        cards {
          ...problemCardFields
          __typename
        }
        task {
          ...practiceTaskFields
          __typename
        }
        userExercises {
          ...userExerciseFields
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}

fragment practiceTaskFields on PracticeTask {
  id
  key
  bonusReservedItems
  bonusReservedItemsCompleted
  bonusTaskAttemptHistory {
    ...taskAttemptHistoryFields
    __typename
  }
  canRestart
  completionCriteria {
    name
    __typename
  }
  contentKey
  exerciseLength
  isCompleted
  pointBounty
  pointsEarned
  promotionCriteria {
    ...promotionCriteriaFields
    __typename
  }
  reservedItems
  reservedItemsCompleted
  slug
  taskAttemptHistory {
    ...taskAttemptHistoryFields
    __typename
  }
  taskType
  timeEstimate {
    lowerBound
    upperBound
    __typename
  }
  __typename
}

fragment problemCardFields on ProblemCard {
  cardType
  done
  exerciseName
  problemType
  __typename
}

fragment problemTypeFields on ProblemType {
  items {
    id
    live
    sha
    __typename
  }
  name
  relatedVideos
  __typename
}

fragment promotionCriteriaFields on PromotionCriteria {
  name
  value
  __typename
}

fragment taskAttemptHistoryFields on TaskProblemAttempt {
  correct
  timeDone
  seenHint
  itemId
  __typename
}

fragment userExerciseFields on UserExercise {
  exerciseModel: exercise {
    id
    assessmentItemCount: numAssessmentItems
    displayName
    isQuiz
    isSkillCheck
    name
    nodeSlug
    progressKey
    translatedDisplayName
    relatedContent {
      id
      contentKind
      kind
      thumbnailUrl
      translatedTitle
      urlWithinCurationNode
      urlWithinClosestAncestor(ancestorIds: $ancestorIds)
      topicPaths {
        path {
          id
          kind
          slug
          __typename
        }
        __typename
      }
      ... on Article {
        kaUrl
        nodeSlug
        relativeUrl
        slug
        __typename
      }
      ... on Video {
        duration
        imageUrl
        kaUrl
        nodeSlug
        relativeUrl
        slug
        translatedYoutubeId
        __typename
      }
      __typename
    }
    relatedVideos {
      contentKind
      duration
      id
      imageUrl
      kaUrl
      kind
      nodeSlug
      progressKey
      relativeUrl
      slug
      thumbnailUrl
      translatedDescription
      translatedTitle
      translatedYoutubeId
      __typename
    }
    problemTypes {
      ...problemTypeFields
      __typename
    }
    translatedProblemTypes {
      ...problemTypeFields
      __typename
    }
    __typename
  }
  exercise: exerciseName
  fpmMasteryLevel
  lastAttemptNumber
  lastCountHints
  lastDone
  lastMasteryUpdate
  longestStreak
  maximumExerciseProgressDt: maximumExerciseProgressDate
  streak
  totalCorrect
  totalDone
  __typename
}`,
  GetOrCreateReadAloud: `mutation GetOrCreateReadAloud($assessmentItemID: ID!, $exerciseID: ID!, $perseusSerializedState: String) {
  getOrCreateReadAloud(
    assessmentItemID: $assessmentItemID
    exerciseID: $exerciseID
    perseusSerializedState: $perseusSerializedState
  ) {
    readAloud
    error {
      code
      message
      __typename
    }
    __typename
  }
}`,
  gtp_completeOnboardingMutation: `mutation gtp_completeOnboardingMutation($examId: String!) {
  completeOnboarding(examId: $examId) {
    tpud {
      id
      onboardingState
      __typename
    }
    __typename
  }
}`,
  gtp_createNewStageMutation: `mutation gtp_createNewStageMutation($examId: String!, $stageIndex: Int!) {
  createNewStage(examId: $examId, stageIndex: $stageIndex) {
    checkpoints {
      ...gtp_checkpointFragment
      __typename
    }
    tpud {
      id
      currentStage
      currentCheckpoint
      __typename
    }
    __typename
  }
}`,
  gtp_deleteDataMutation: `mutation gtp_deleteDataMutation($examGroupId: String!) {
  deleteData(examGroupId: $examGroupId) {
    success
    __typename
  }
}`,
  gtp_getOrCreateTestPrepTaskByDescriptor: `mutation gtp_getOrCreateTestPrepTaskByDescriptor($examId: String!, $taskType: String!, $exerciseName: String!, $skillId: String, $level: String) {
  getOrCreateTestPrepTaskByDescriptor(
    examId: $examId
    taskType: $taskType
    exerciseName: $exerciseName
    skillId: $skillId
    level: $level
  ) {
    task {
      ...gtp_taskFragment
      __typename
    }
    practiceTest {
      ...gtp_practiceTestFragment
      __typename
    }
    __typename
  }
}

fragment gtp_taskFragment on Task {
  id
  kaid
  examId
  taskType
  secondsTaken
  taskDurationSeconds
  translatedTitle
  creationDatetime
  startDatetime
  completed
  receivedCredit
  completionDatetime
  stage
  checkpoint
  taskContent {
    concepts {
      item {
        conceptId
        translatedTitle
        __typename
      }
      questions {
        conceptId
        translatedTitle
        __typename
      }
      __typename
    }
    id
    itemData
    itemShapeType
    skills {
      item {
        areaId
        skillId
        skillContentId
        translatedTitle
        __typename
      }
      questions {
        areaId
        skillId
        skillContentId
        translatedTitle
        __typename
      }
      __typename
    }
    gradingMetadata {
      instructions
      promptTitle
      responseTitle
      minScore
      maxScore
      rubric {
        article {
          id
          perseusContent
          __typename
        }
        __typename
      }
      scoreExamples {
        score
        article {
          id
          perseusContent
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
  taskState
  taskStateHash
  exerciseName
  itemIds
  areaId
  areaTitle
  ... on SkillTask {
    skillId
    skill {
      description
      __typename
    }
    level
    incomingSkillLevelLabel {
      label
      skillLevel
      __typename
    }
    outgoingSkillLevelLabel {
      label
      skillLevel
      __typename
    }
    __typename
  }
  ... on TmsTask {
    directions
    extendedTaskState
    startExtendedTimeDt
    __typename
  }
  ... on TestSectionTask {
    directions
    __typename
  }
  ... on ExpressDiagnosticTask {
    directions
    skillLevels {
      skillName
      minLevel
      maxLevel
      level
      __typename
    }
    __typename
  }
  __typename
}`,
  gtp_resetPracticeTestMutation: `mutation gtp_resetPracticeTestMutation($examId: String!, $taskId: String!) {
  resetPracticeTest(examId: $examId, taskId: $taskId) {
    error {
      code
      debugMessage
      __typename
    }
    practiceTests {
      ...gtp_practiceTestFragment
      __typename
    }
    tpud {
      ...gtp_tpudFragment
      __typename
    }
    __typename
  }
}`,
  gtp_startExpressTask: `mutation gtp_startExpressTask($taskType: String!, $taskId: ID!) {
  startTask(taskType: $taskType, taskId: $taskId) {
    descriptorList {
      id
      checkpointStr
      ...gtp_expressDescriptorsFragment
      __typename
    }
    practiceTest {
      ...gtp_practiceTestFragment
      __typename
    }
    task {
      ...gtp_taskFragment
      __typename
    }
    tpud {
      id
      diagnosticsStates {
        type
        state
        __typename
      }
      hasSeededSkillLevels
      __typename
    }
    __typename
  }
}

fragment gtp_taskFragment on Task {
  id
  kaid
  examId
  taskType
  secondsTaken
  taskDurationSeconds
  translatedTitle
  creationDatetime
  startDatetime
  completed
  receivedCredit
  completionDatetime
  stage
  checkpoint
  taskContent {
    concepts {
      item {
        conceptId
        translatedTitle
        __typename
      }
      questions {
        conceptId
        translatedTitle
        __typename
      }
      __typename
    }
    id
    itemData
    itemShapeType
    skills {
      item {
        areaId
        skillId
        skillContentId
        translatedTitle
        __typename
      }
      questions {
        areaId
        skillId
        skillContentId
        translatedTitle
        __typename
      }
      __typename
    }
    gradingMetadata {
      instructions
      promptTitle
      responseTitle
      minScore
      maxScore
      rubric {
        article {
          id
          perseusContent
          __typename
        }
        __typename
      }
      scoreExamples {
        score
        article {
          id
          perseusContent
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
  taskState
  taskStateHash
  exerciseName
  itemIds
  areaId
  areaTitle
  ... on SkillTask {
    skillId
    skill {
      description
      __typename
    }
    level
    incomingSkillLevelLabel {
      label
      skillLevel
      __typename
    }
    outgoingSkillLevelLabel {
      label
      skillLevel
      __typename
    }
    __typename
  }
  ... on TmsTask {
    directions
    extendedTaskState
    startExtendedTimeDt
    __typename
  }
  ... on TestSectionTask {
    directions
    __typename
  }
  ... on ExpressDiagnosticTask {
    directions
    skillLevels {
      skillName
      minLevel
      maxLevel
      level
      __typename
    }
    __typename
  }
  __typename
}`,
  gtp_startExtendedTimeMode: `mutation gtp_startExtendedTimeMode($taskType: String!, $taskId: ID!) {
  startExtendedTimeMode(taskType: $taskType, taskId: $taskId) {
    task {
      ...gtp_taskFragment
      __typename
    }
    __typename
  }
}

fragment gtp_taskFragment on Task {
  id
  kaid
  examId
  taskType
  secondsTaken
  taskDurationSeconds
  translatedTitle
  creationDatetime
  startDatetime
  completed
  receivedCredit
  completionDatetime
  stage
  checkpoint
  taskContent {
    concepts {
      item {
        conceptId
        translatedTitle
        __typename
      }
      questions {
        conceptId
        translatedTitle
        __typename
      }
      __typename
    }
    id
    itemData
    itemShapeType
    skills {
      item {
        areaId
        skillId
        skillContentId
        translatedTitle
        __typename
      }
      questions {
        areaId
        skillId
        skillContentId
        translatedTitle
        __typename
      }
      __typename
    }
    gradingMetadata {
      instructions
      promptTitle
      responseTitle
      minScore
      maxScore
      rubric {
        article {
          id
          perseusContent
          __typename
        }
        __typename
      }
      scoreExamples {
        score
        article {
          id
          perseusContent
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
  taskState
  taskStateHash
  exerciseName
  itemIds
  areaId
  areaTitle
  ... on SkillTask {
    skillId
    skill {
      description
      __typename
    }
    level
    incomingSkillLevelLabel {
      label
      skillLevel
      __typename
    }
    outgoingSkillLevelLabel {
      label
      skillLevel
      __typename
    }
    __typename
  }
  ... on TmsTask {
    directions
    extendedTaskState
    startExtendedTimeDt
    __typename
  }
  ... on TestSectionTask {
    directions
    __typename
  }
  ... on ExpressDiagnosticTask {
    directions
    skillLevels {
      skillName
      minLevel
      maxLevel
      level
      __typename
    }
    __typename
  }
  __typename
}`,
  gtp_startStage: `mutation gtp_startStage($examId: String!) {
  startStage(examId: $examId) {
    checkpoints {
      ...gtp_checkpointFragment
      __typename
    }
    __typename
  }
}`,
  gtp_startTask: `mutation gtp_startTask($taskType: String!, $taskId: ID!) {
  startTask(taskType: $taskType, taskId: $taskId) {
    descriptorList {
      id
      checkpointStr
      ...gtp_descriptorsFragment
      __typename
    }
    practiceTest {
      ...gtp_practiceTestFragment
      __typename
    }
    task {
      ...gtp_taskFragment
      __typename
    }
    tpud {
      id
      hasSeededSkillLevels
      __typename
    }
    __typename
  }
}

fragment gtp_taskFragment on Task {
  id
  kaid
  examId
  taskType
  secondsTaken
  taskDurationSeconds
  translatedTitle
  creationDatetime
  startDatetime
  completed
  receivedCredit
  completionDatetime
  stage
  checkpoint
  taskContent {
    concepts {
      item {
        conceptId
        translatedTitle
        __typename
      }
      questions {
        conceptId
        translatedTitle
        __typename
      }
      __typename
    }
    id
    itemData
    itemShapeType
    skills {
      item {
        areaId
        skillId
        skillContentId
        translatedTitle
        __typename
      }
      questions {
        areaId
        skillId
        skillContentId
        translatedTitle
        __typename
      }
      __typename
    }
    gradingMetadata {
      instructions
      promptTitle
      responseTitle
      minScore
      maxScore
      rubric {
        article {
          id
          perseusContent
          __typename
        }
        __typename
      }
      scoreExamples {
        score
        article {
          id
          perseusContent
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
  taskState
  taskStateHash
  exerciseName
  itemIds
  areaId
  areaTitle
  ... on SkillTask {
    skillId
    skill {
      description
      __typename
    }
    level
    incomingSkillLevelLabel {
      label
      skillLevel
      __typename
    }
    outgoingSkillLevelLabel {
      label
      skillLevel
      __typename
    }
    __typename
  }
  ... on TmsTask {
    directions
    extendedTaskState
    startExtendedTimeDt
    __typename
  }
  ... on TestSectionTask {
    directions
    __typename
  }
  ... on ExpressDiagnosticTask {
    directions
    skillLevels {
      skillName
      minLevel
      maxLevel
      level
      __typename
    }
    __typename
  }
  __typename
}`,
  gtp_submitExpressTask: `mutation gtp_submitExpressTask($taskId: ID!, $taskType: String!, $newTaskState: JSONString!, $newTaskStateHash: ID!, $prevTaskStateHash: ID) {
  submitTask(
    taskId: $taskId
    taskType: $taskType
    newTaskState: $newTaskState
    newTaskStateHash: $newTaskStateHash
    prevTaskStateHash: $prevTaskStateHash
  ) {
    checkpoints {
      ...gtp_checkpointFragment
      __typename
    }
    descriptorList {
      id
      checkpointStr
      ...gtp_expressDescriptorsFragment
      __typename
    }
    practiceTest {
      ...gtp_practiceTestFragment
      __typename
    }
    task {
      ...gtp_taskFragment
      __typename
    }
    tpud {
      ...gtp_tpudFragment
      __typename
    }
    egud {
      ...gtp_egudFragment
      __typename
    }
    __typename
  }
}

fragment gtp_egudFragment on ExamGroupUserData {
  id
  practiceDaysInfo {
    day
    hour
    length
    minute
    __typename
  }
  selectedCutoffIdentifiers
  selectedExams
  initialSelectedExams
  dailyActivityHistory {
    date
    activityHistory {
      examsCompleted
      problemsDone
      secondsSpent
      status
      cta {
        type
        minutes
        __typename
      }
      __typename
    }
    __typename
  }
  extendedTimeMultiplier
  __typename
}

fragment gtp_taskFragment on Task {
  id
  kaid
  examId
  taskType
  secondsTaken
  taskDurationSeconds
  translatedTitle
  creationDatetime
  startDatetime
  completed
  receivedCredit
  completionDatetime
  stage
  checkpoint
  taskContent {
    concepts {
      item {
        conceptId
        translatedTitle
        __typename
      }
      questions {
        conceptId
        translatedTitle
        __typename
      }
      __typename
    }
    id
    itemData
    itemShapeType
    skills {
      item {
        areaId
        skillId
        skillContentId
        translatedTitle
        __typename
      }
      questions {
        areaId
        skillId
        skillContentId
        translatedTitle
        __typename
      }
      __typename
    }
    gradingMetadata {
      instructions
      promptTitle
      responseTitle
      minScore
      maxScore
      rubric {
        article {
          id
          perseusContent
          __typename
        }
        __typename
      }
      scoreExamples {
        score
        article {
          id
          perseusContent
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
  taskState
  taskStateHash
  exerciseName
  itemIds
  areaId
  areaTitle
  ... on SkillTask {
    skillId
    skill {
      description
      __typename
    }
    level
    incomingSkillLevelLabel {
      label
      skillLevel
      __typename
    }
    outgoingSkillLevelLabel {
      label
      skillLevel
      __typename
    }
    __typename
  }
  ... on TmsTask {
    directions
    extendedTaskState
    startExtendedTimeDt
    __typename
  }
  ... on TestSectionTask {
    directions
    __typename
  }
  ... on ExpressDiagnosticTask {
    directions
    skillLevels {
      skillName
      minLevel
      maxLevel
      level
      __typename
    }
    __typename
  }
  __typename
}`,
  gtp_submitTask: `mutation gtp_submitTask($taskId: ID!, $taskType: String!, $newTaskState: JSONString!, $newTaskStateHash: ID!, $prevTaskStateHash: ID) {
  submitTask(
    taskId: $taskId
    taskType: $taskType
    newTaskState: $newTaskState
    newTaskStateHash: $newTaskStateHash
    prevTaskStateHash: $prevTaskStateHash
  ) {
    checkpoints {
      ...gtp_checkpointFragment
      __typename
    }
    descriptorList {
      id
      checkpointStr
      ...gtp_descriptorsFragment
      __typename
    }
    practiceTest {
      ...gtp_practiceTestFragment
      __typename
    }
    task {
      ...gtp_taskFragment
      __typename
    }
    tpud {
      ...gtp_tpudFragment
      __typename
    }
    egud {
      ...gtp_egudFragment
      __typename
    }
    essayScores {
      ...gtp_essayScoresFragment
      __typename
    }
    __typename
  }
}

fragment gtp_egudFragment on ExamGroupUserData {
  id
  practiceDaysInfo {
    day
    hour
    length
    minute
    __typename
  }
  selectedCutoffIdentifiers
  selectedExams
  initialSelectedExams
  dailyActivityHistory {
    date
    activityHistory {
      examsCompleted
      problemsDone
      secondsSpent
      status
      cta {
        type
        minutes
        __typename
      }
      __typename
    }
    __typename
  }
  extendedTimeMultiplier
  __typename
}

fragment gtp_essayScoresFragment on EssayScores {
  areas {
    translatedTitle
    essays {
      examCompletionDate
      score
      maxScore
      __typename
    }
    __typename
  }
  __typename
}

fragment gtp_taskFragment on Task {
  id
  kaid
  examId
  taskType
  secondsTaken
  taskDurationSeconds
  translatedTitle
  creationDatetime
  startDatetime
  completed
  receivedCredit
  completionDatetime
  stage
  checkpoint
  taskContent {
    concepts {
      item {
        conceptId
        translatedTitle
        __typename
      }
      questions {
        conceptId
        translatedTitle
        __typename
      }
      __typename
    }
    id
    itemData
    itemShapeType
    skills {
      item {
        areaId
        skillId
        skillContentId
        translatedTitle
        __typename
      }
      questions {
        areaId
        skillId
        skillContentId
        translatedTitle
        __typename
      }
      __typename
    }
    gradingMetadata {
      instructions
      promptTitle
      responseTitle
      minScore
      maxScore
      rubric {
        article {
          id
          perseusContent
          __typename
        }
        __typename
      }
      scoreExamples {
        score
        article {
          id
          perseusContent
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
  taskState
  taskStateHash
  exerciseName
  itemIds
  areaId
  areaTitle
  ... on SkillTask {
    skillId
    skill {
      description
      __typename
    }
    level
    incomingSkillLevelLabel {
      label
      skillLevel
      __typename
    }
    outgoingSkillLevelLabel {
      label
      skillLevel
      __typename
    }
    __typename
  }
  ... on TmsTask {
    directions
    extendedTaskState
    startExtendedTimeDt
    __typename
  }
  ... on TestSectionTask {
    directions
    __typename
  }
  ... on ExpressDiagnosticTask {
    directions
    skillLevels {
      skillName
      minLevel
      maxLevel
      level
      __typename
    }
    __typename
  }
  __typename
}`,
  gtp_updateExamGroupSettingsV2: `mutation gtp_updateExamGroupSettingsV2($examGroupId: String!, $practiceDaysInfo: [PracticeDaysInput!], $selectedCutoffs: [String!], $selectedExams: [String!], $extendedTimeMultiplier: Float, $exams: [ExamSettingsInput], $enableGtpSetupPage: Boolean) {
  updateExamGroupSettings(
    examGroupId: $examGroupId
    practiceDaysInfo: $practiceDaysInfo
    selectedCutoffs: $selectedCutoffs
    selectedExams: $selectedExams
    extendedTimeMultiplier: $extendedTimeMultiplier
    exams: $exams
    enableGtpSetupPage: $enableGtpSetupPage
  ) {
    egud {
      ...gtp_egudFragment
      __typename
    }
    exams {
      id
      examId
      checkpoints {
        ...gtp_checkpointFragment
        __typename
      }
      drillStage {
        id
        numCreditedTasks
        creditedTaskIds
        __typename
      }
      tpud {
        ...gtp_tpudFragment
        __typename
      }
      practiceTests {
        ...gtp_practiceTestFragment
        __typename
      }
      __typename
    }
    __typename
  }
}

fragment gtp_egudFragment on ExamGroupUserData {
  id
  practiceDaysInfo {
    day
    hour
    length
    minute
    __typename
  }
  selectedCutoffIdentifiers
  selectedExams
  initialSelectedExams
  dailyActivityHistory {
    date
    activityHistory {
      examsCompleted
      problemsDone
      secondsSpent
      status
      cta {
        type
        minutes
        __typename
      }
      __typename
    }
    __typename
  }
  extendedTimeMultiplier
  __typename
}`,
  gtp_updateSubscriptionByToken: `mutation gtp_updateSubscriptionByToken($token: String!, $subscribe: Boolean!) {
  updateSubscriptionByToken(token: $token, subscribe: $subscribe) {
    success
    __typename
  }
}`,
  gtp_updateTask: `mutation gtp_updateTask($taskId: ID!, $taskType: String!, $newTaskState: JSONString!, $newTaskStateHash: ID!, $prevTaskStateHash: ID) {
  updateTask(
    taskId: $taskId
    taskType: $taskType
    newTaskState: $newTaskState
    newTaskStateHash: $newTaskStateHash
    prevTaskStateHash: $prevTaskStateHash
  ) {
    task {
      ...gtp_taskFragment
      __typename
    }
    egud {
      ...gtp_egudFragment
      __typename
    }
    statusCode
    tpud {
      ...gtp_tpudFragment
      __typename
    }
    __typename
  }
}

fragment gtp_egudFragment on ExamGroupUserData {
  id
  practiceDaysInfo {
    day
    hour
    length
    minute
    __typename
  }
  selectedCutoffIdentifiers
  selectedExams
  initialSelectedExams
  dailyActivityHistory {
    date
    activityHistory {
      examsCompleted
      problemsDone
      secondsSpent
      status
      cta {
        type
        minutes
        __typename
      }
      __typename
    }
    __typename
  }
  extendedTimeMultiplier
  __typename
}

fragment gtp_taskFragment on Task {
  id
  kaid
  examId
  taskType
  secondsTaken
  taskDurationSeconds
  translatedTitle
  creationDatetime
  startDatetime
  completed
  receivedCredit
  completionDatetime
  stage
  checkpoint
  taskContent {
    concepts {
      item {
        conceptId
        translatedTitle
        __typename
      }
      questions {
        conceptId
        translatedTitle
        __typename
      }
      __typename
    }
    id
    itemData
    itemShapeType
    skills {
      item {
        areaId
        skillId
        skillContentId
        translatedTitle
        __typename
      }
      questions {
        areaId
        skillId
        skillContentId
        translatedTitle
        __typename
      }
      __typename
    }
    gradingMetadata {
      instructions
      promptTitle
      responseTitle
      minScore
      maxScore
      rubric {
        article {
          id
          perseusContent
          __typename
        }
        __typename
      }
      scoreExamples {
        score
        article {
          id
          perseusContent
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
  taskState
  taskStateHash
  exerciseName
  itemIds
  areaId
  areaTitle
  ... on SkillTask {
    skillId
    skill {
      description
      __typename
    }
    level
    incomingSkillLevelLabel {
      label
      skillLevel
      __typename
    }
    outgoingSkillLevelLabel {
      label
      skillLevel
      __typename
    }
    __typename
  }
  ... on TmsTask {
    directions
    extendedTaskState
    startExtendedTimeDt
    __typename
  }
  ... on TestSectionTask {
    directions
    __typename
  }
  ... on ExpressDiagnosticTask {
    directions
    skillLevels {
      skillName
      minLevel
      maxLevel
      level
      __typename
    }
    __typename
  }
  __typename
}`,
  hideProgramEverywhere: `mutation hideProgramEverywhere($programID: ID!, $hide: Boolean!) {
  hideProgramEverywhere(programID: $programID, hide: $hide) {
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  hideProgramFromHotlist: `mutation hideProgramFromHotlist($programID: ID!, $hide: Boolean!) {
  hideProgramFromHotlist(programID: $programID, hide: $hide) {
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  impersonateUserMutation: `mutation impersonateUserMutation($kaid: String!, $reason: String!) {
  impersonateUser(kaid: $kaid, reason: $reason) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  InsertOrUpdateDub: `mutation InsertOrUpdateDub($input: DubInsertOrUpdateInputEntry!) {
  insertOrUpdateDub(dubInputEntry: $input) {
    error {
      code
      debugMessage
      dubInsertOrUpdateEntry {
        sourceYouTubeId
        dubYouTubeId
        contentId
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  InviteChildToJoinKAMutation: `mutation InviteChildToJoinKAMutation($childEmail: String!) {
  inviteChild(childEmail: $childEmail) {
    childInvite {
      invitationType
      email
      requestKey
      nickname
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  joinAIGuideWaitlist: `mutation joinAIGuideWaitlist {
  joinAIGuideWaitlist {
    error {
      code
      __typename
    }
    __typename
  }
}
`,
  joinGrassrootsClassMutation: `mutation joinGrassrootsClassMutation($classCode: String!) {
  joinStudent(classCode: $classCode) {
    isDistrictSynced
    errors
    __typename
  }
}`,
  joinStudentMutation: `mutation joinStudentMutation($classCode: String!) {
  joinStudent(classCode: $classCode) {
    errors
    __typename
  }
}`,
  joinStudentMutationForModal: `mutation joinStudentMutationForModal($classCode: String!) {
  joinStudent(classCode: $classCode) {
    isDistrictSynced
    __typename
  }
}
`,
  khanLibraryAddCourseToFolder: `mutation khanLibraryAddCourseToFolder($folderId: String!, $courseId: String!) {
  addCourseToFolder(folderId: $folderId, courseId: $courseId) {
    folder {
      ...Folder
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}

fragment BaseFolder on Folder {
  id
  name
  kaLocale
  isEmpty
  __typename
}

fragment Folder on Folder {
  ...BaseFolder
  courses {
    ...PublishedCourseRevisionFragment
    __typename
  }
  __typename
}

fragment PublishedCourseRevisionFragment on CourseRevision {
  id
  contentId
  kaLocale
  title
  slug
  importable
  allowedExerciseTypes
  hasUnpublishedChanges
  published {
    id
    slug
    title
    listed
    masteryEnabled
    domainSlug
    domainId: parentTopicId
    courseSnapshotId
    __typename
  }
  __typename
}`,
  khanLibraryCopyCourse: `mutation khanLibraryCopyCourse($input: CopyCourse!) {
  course: copyCourse(inputData: $input) {
    ...CourseRevisionStructure
    __typename
  }
}

fragment CourseRevisionStructure on CourseRevision {
  id
  contentId
  operationId
  title
  allowedExerciseTypes
  items {
    ... on CourseRevisionUnit {
      type
      id
      items {
        ... on CourseRevisionLesson {
          type
          id
          items {
            cacheId
            ... on CourseRevisionContent {
              type
              id
              contentKind
              contentId
              __typename
            }
            __typename
          }
          __typename
        }
        ... on CourseRevisionQuiz {
          type
          id
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}`,
  khanLibraryCreateCourse: `mutation khanLibraryCreateCourse($input: CreateDefaultCourse!) {
  createDefaultCourse(inputData: $input) {
    course: courseRevision {
      ...CourseRevisionStructure
      __typename
    }
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}

fragment CourseRevisionStructure on CourseRevision {
  id
  contentId
  operationId
  title
  allowedExerciseTypes
  items {
    ... on CourseRevisionUnit {
      type
      id
      items {
        ... on CourseRevisionLesson {
          type
          id
          items {
            cacheId
            ... on CourseRevisionContent {
              type
              id
              contentKind
              contentId
              __typename
            }
            __typename
          }
          __typename
        }
        ... on CourseRevisionQuiz {
          type
          id
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}`,
  khanLibraryEditDomain: `mutation khanLibraryEditDomain($sha: String!, $input: EditDomainInput!) {
  editDomain(sha: $sha, input: $input) {
    domain {
      ...khanLibraryDomainRevision
      __typename
    }
    error {
      code
      conflictSha
      debugMessage
      __typename
    }
    __typename
  }
}

fragment khanLibraryDomainRevision on DomainRevision {
  id
  sha
  childrenDescriptors {
    canonicalId
    contentId
    kind
    __typename
  }
  __typename
}`,
  khanLibraryLinkCourse: `mutation khanLibraryLinkCourse($input: CreateLinkedCourse!) {
  course: createLinkedCourse(inputData: $input) {
    ...CourseRevisionStructure
    __typename
  }
}

fragment CourseRevisionStructure on CourseRevision {
  id
  contentId
  operationId
  title
  allowedExerciseTypes
  items {
    ... on CourseRevisionUnit {
      type
      id
      items {
        ... on CourseRevisionLesson {
          type
          id
          items {
            cacheId
            ... on CourseRevisionContent {
              type
              id
              contentKind
              contentId
              __typename
            }
            __typename
          }
          __typename
        }
        ... on CourseRevisionQuiz {
          type
          id
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}`,
  learnStormCampaignEnroll: `mutation learnStormCampaignEnroll($campaignId: ID!) {
  learnStormEnroll(campaignId: $campaignId) {
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  learnStormCampaignUpdate: `mutation learnStormCampaignUpdate($id: ID!, $live: Boolean!, $eligibleLocale: String!, $eligibleCountryCodes: [String]!, $campaignName: String!, $promoSite: String!, $growthMindsetUrl: String!, $certificateUrl: String!, $signupStartDate: DateTime!, $startDate: DateTime!, $stopDate: DateTime!, $bannerEnrollmentHeader: String!, $bannerEnrollmentCopy: String!, $bannerBeforeHeader: String!, $bannerBeforeCopy: String!, $bannerDuringHeader: String!, $bannerDuringCopy: String!, $bannerAfterHeader: String!, $bannerAfterCopy: String!, $shutdownDate: DateTime!, $bannerVisible: Boolean!) {
  learnStormCampaignUpdate(
    campaign: {id: $id, live: $live, eligibleKALocale: $eligibleLocale, eligibleCountryCodes: $eligibleCountryCodes, campaignName: $campaignName, promoSite: $promoSite, growthMindsetURL: $growthMindsetUrl, certificateURL: $certificateUrl, signupStartDate: $signupStartDate, startDate: $startDate, stopDate: $stopDate, shutdownDate: $shutdownDate, bannerEnrollmentHeader: $bannerEnrollmentHeader, bannerEnrollmentCopy: $bannerEnrollmentCopy, bannerBeforeHeader: $bannerBeforeHeader, bannerBeforeCopy: $bannerBeforeCopy, bannerDuringHeader: $bannerDuringHeader, bannerDuringCopy: $bannerDuringCopy, bannerAfterHeader: $bannerAfterHeader, bannerAfterCopy: $bannerAfterCopy, bannerVisible: $bannerVisible}
  ) {
    campaign {
      id
      __typename
    }
    __typename
  }
}`,
  learnStormEnroll: `mutation learnStormEnroll($campaignId: ID!) {
  learnStormEnroll(campaignId: $campaignId) {
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  linkAppleAccountMutation: `mutation linkAppleAccountMutation($authCode: String!, $state: String!) {
  linkAppleAccount(authCode: $authCode, state: $state) {
    error {
      code
      accessToken
      __typename
    }
    user {
      id
      kaid
      __typename
    }
    __typename
  }
}`,
  linkCleverAccountV2Mutation: `mutation linkCleverAccountV2Mutation($transferToken: String!) {
  linkCleverAccountV2(transferToken: $transferToken) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  linkCurrentUserToUDIByUUIDMutation: `mutation linkCurrentUserToUDIByUUIDMutation($uuid: ID!, $loginType: String!, $method: UserDistrictInfoActivationMethod) {
  linkCurrentUserToUDIByUUID(uuid: $uuid, loginType: $loginType, method: $method) {
    succeeded
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  LinkEmailByToken: `mutation LinkEmailByToken($token: String!) {
  verifyLinkedEmail(token: $token) {
    email
    error {
      code
      __typename
    }
    __typename
  }
}`,
  linkEmailToCurrentUserAccount: `mutation linkEmailToCurrentUserAccount($email: String!) {
  linkEmailToCurrentUserAccount(email: $email) {
    email
    error {
      code
      __typename
    }
    __typename
  }
}`,
  linkThirdPartyAccountMutation: `mutation linkThirdPartyAccountMutation($loginType: String!, $token: String!) {
  linkThirdPartyAccount(loginType: $loginType, token: $token) {
    error {
      code
      __typename
    }
    user {
      id
      kaid
      __typename
    }
    __typename
  }
}`,
  linkThirdPartyOAuth: `mutation linkThirdPartyOAuth($oauthType: ThirdPartyOAuthType!, $password: String!, $accessToken: String!) {
  linkThirdPartyAuth(
    oauthType: $oauthType
    password: $password
    accessToken: $accessToken
  ) {
    user {
      id
      kaid
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  LinkUDIToUserMutation: `mutation LinkUDIToUserMutation($uuid: ID!, $kaid: ID!) {
  linkUserDistrictInfoV2(uuid: $uuid, kaid: $kaid, method: DEVADMIN) {
    succeeded
    user {
      id
      userDistrictInfos {
        id
        district {
          id
          name
          __typename
        }
        createdAt
        updatedAt
        uuid
        kaid
        activatedAt
        activationMethod
        activationEmailSentAt
        districtProvidedFullName
        districtProvidedEmail
        primaryRole
        isKmap
        adminOfSchools {
          id
          name
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  linkUserByClassCodeMutation: `mutation linkUserByClassCodeMutation($email: String!, $classCode: String!) {
  linkUserByClassCodeV2(email: $email, classCode: $classCode) {
    succeeded
    error {
      code
      __typename
    }
    __typename
  }
}`,
  linkUserByClassCodeV2: `mutation linkUserByClassCodeV2($email: String!, $classCode: String!) {
  linkUserByClassCodeV2(email: $email, classCode: $classCode) {
    succeeded
    error {
      code
      __typename
    }
    __typename
  }
}`,
  loginWithAppleAuthCodeAndState: `mutation loginWithAppleAuthCodeAndState($authCode: String!, $state: String!, $userData: AppleUserData, $role: UserRole) {
  loginWithAppleAuthCodeAndState(
    authCode: $authCode
    state: $state
    userData: $userData
    role: $role
  ) {
    error {
      code
      accessToken
      __typename
    }
    user {
      id
      kaid
      canAccessDistrictsHomepage
      isTeacher
      hasUnresolvedInvitations
      preferredKaLocale {
        id
        kaLocale
        status
        __typename
      }
      __typename
    }
    isFirstLogin
    __typename
  }
}`,
  loginWithClasslink: `mutation loginWithClasslink($classlinkCode: String, $useDevClasslinkClient: Boolean) {
  loginWithClasslink(
    classlinkCode: $classlinkCode
    useDevClasslinkClient: $useDevClasslinkClient
  ) {
    user {
      id
      kaid
      canAccessDistrictsHomepage
      isTeacher
      hasUnresolvedInvitations
      preferredKaLocale {
        id
        kaLocale
        status
        __typename
      }
      __typename
    }
    isFirstLogin
    udiUUID
    error {
      code
      __typename
    }
    __typename
  }
}`,
  loginWithCleverMutation: `mutation loginWithCleverMutation($code: String!, $reauth: Boolean!, $fromDevApp: Boolean!, $isMap: Boolean!, $isLP: Boolean!, $isCanvas: Boolean, $referrerUrl: String!) {
  loginWithClever(
    code: $code
    reauth: $reauth
    fromDevApp: $fromDevApp
    isMap: $isMap
    isLP: $isLP
    isCanvas: $isCanvas
    referrerUrl: $referrerUrl
  ) {
    error {
      code
      cleverUserInfo {
        cleverId
        isTeacher
        cleverEmail
        __typename
      }
      transferToken
      udiUuid
      kaLocale
      __typename
    }
    user {
      id
      kaid
      canAccessDistrictsHomepage
      isTeacher
      hasUnresolvedInvitations
      preferredKaLocale {
        id
        kaLocale
        status
        __typename
      }
      userDistrictInfos {
        id
        district {
          id
          kaLocale
          __typename
        }
        __typename
      }
      __typename
    }
    isLibraryUser
    isFirstLogin
    transferToken
    __typename
  }
}`,
  loginWithFacebookMutation: `mutation loginWithFacebookMutation($token: String!, $role: UserRole, $inviteId: String) {
  loginWithFacebook(token: $token, role: $role, inviteId: $inviteId) {
    user {
      id
      kaid
      canAccessDistrictsHomepage
      isTeacher
      hasUnresolvedInvitations
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
}`,
  loginWithGoogleMutation: `mutation loginWithGoogleMutation($token: String!, $birthdate: String, $linkClever: Boolean, $role: UserRole, $cleverTransferToken: String, $inviteId: String) {
  loginWithGoogle(
    token: $token
    birthdate: $birthdate
    linkClever: $linkClever
    role: $role
    cleverTransferToken: $cleverTransferToken
    inviteId: $inviteId
  ) {
    user {
      id
      kaid
      canAccessDistrictsHomepage
      isTeacher
      hasUnresolvedInvitations
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
}`,
  loginWithPasswordMutation: `mutation loginWithPasswordMutation($identifier: String!, $password: String!) {
  loginWithPassword(identifier: $identifier, password: $password) {
    user {
      id
      kaid
      canAccessDistrictsHomepage
      isTeacher
      hasUnresolvedInvitations
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
}`,
  logoutMutation: `mutation logoutMutation($allowClever: Boolean!, $continueUrl: String!, $finish: Boolean!) {
  logout(allowClever: $allowClever, continueUrl: $continueUrl, finish: $finish) {
    continueUrl
    __typename
  }
}`,
  mapContentToStandard: `mutation mapContentToStandard($setId: String!, $standardId: String!, $descriptor: String!, $secondary: String, $delete: Boolean!) {
  mapContentToStandard(
    setId: $setId
    standardId: $standardId
    contentDescriptor: $descriptor
    secondaryDescriptor: $secondary
    delete: $delete
  ) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  markAIGuideWaitlistEntryEligible: `mutation markAIGuideWaitlistEntryEligible($kaid: String!) {
  markAIGuideWaitlistEntryEligible(kaid: $kaid) {
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  markAIGuideWaitlistEntryIneligible: `mutation markAIGuideWaitlistEntryIneligible($kaid: String!) {
  markAIGuideWaitlistEntryIneligible(kaid: $kaid) {
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  markPromoAsSeen: `mutation markPromoAsSeen($promoName: String!, $kaid: String!) {
  recordPromo(promoName: $promoName, kaid: $kaid) {
    registrationSuccess
    error {
      code
      __typename
    }
    __typename
  }
}`,
  modifyDistrict: `mutation modifyDistrict($existingDistrictID: ID!, $newName: String, $offerings: [Offering!], $rosterSyncingEnabled: Boolean, $rosterID: String, $rosterSource: RosterSource, $nweaID: String, $ncesID: String, $isTest: Boolean, $sendTeacherActivationEmails: Boolean, $goLiveDate: Date, $kaLocale: String, $schoolYearDates: DistrictSchoolYearInput, $region: String, $allOnGrades: [DistrictGradeLevel!], $allOffGrades: [DistrictGradeLevel!], $subsetGrades: [DistrictGradeLevel!], $schoolKhanmigoPreferences: [DistrictKhanmigoSchool!], $khanmigoPreference: KhanmigoEnrollment, $khanmigoAdmins: Int, $khanmigoTeachers: Int, $khanmigoStudents: Int, $khanmigoStartDate: Date, $khanmigoEndDate: Date, $khanmigoTokenCapacity: Int, $khanmigoIncludeUserEmails: [String!], $khanmigoExcludeUserEmails: [String!], $khanmigoIncludeNonStudents: Boolean, $khanmigoIncludeStudents: Boolean) {
  modifyDistrict(
    existingDistrictID: $existingDistrictID
    newName: $newName
    offerings: $offerings
    rosterSyncingEnabled: $rosterSyncingEnabled
    rosterID: $rosterID
    rosterSource: $rosterSource
    nweaID: $nweaID
    ncesID: $ncesID
    isTest: $isTest
    sendTeacherActivationEmails: $sendTeacherActivationEmails
    goLiveDate: $goLiveDate
    kaLocale: $kaLocale
    schoolYearDates: $schoolYearDates
    region: $region
    allOnGrades: $allOnGrades
    allOffGrades: $allOffGrades
    subsetGrades: $subsetGrades
    schoolKhanmigoPreferences: $schoolKhanmigoPreferences
    khanmigoPreference: $khanmigoPreference
    khanmigoAdmins: $khanmigoAdmins
    khanmigoTeachers: $khanmigoTeachers
    khanmigoStudents: $khanmigoStudents
    khanmigoStartDate: $khanmigoStartDate
    khanmigoEndDate: $khanmigoEndDate
    khanmigoTokenCapacity: $khanmigoTokenCapacity
    khanmigoIncludeUserEmails: $khanmigoIncludeUserEmails
    khanmigoExcludeUserEmails: $khanmigoExcludeUserEmails
    khanmigoIncludeNonStudents: $khanmigoIncludeNonStudents
    khanmigoIncludeStudents: $khanmigoIncludeStudents
  ) {
    district {
      id
      rosterID
      name
      isKmapDistrict
      isK4dDistrict
      rosterSource
      nweaID
      ncesID
      isTest
      sendActivationEmails
      rosterSyncingEnabled
      goLiveDate
      kaLocale
      schoolYearDates {
        start {
          nthWeek
          dayOfWeek
          month
          __typename
        }
        end {
          nthWeek
          dayOfWeek
          month
          __typename
        }
        __typename
      }
      region
      khanmigoPreference
      khanmigoIncludeNonStudents
      khanmigoIncludeStudents
      khanmigoAdmins
      khanmigoTeachers
      khanmigoStudents
      khanmigoStart
      khanmigoEnd
      khanmigoIncludedUsers {
        id
        districtProvidedEmail
        __typename
      }
      khanmigoExcludedUsers {
        id
        districtProvidedEmail
        __typename
      }
      khanmigoGradeEnrollment {
        id
        districtID
        allOnGrades {
          id
          name
          sortIndex
          __typename
        }
        allOffGrades {
          id
          name
          sortIndex
          __typename
        }
        subsetGrades {
          id
          name
          sortIndex
          __typename
        }
        __typename
      }
      __typename
    }
    khanmigoIncludeUserMissingEmails
    khanmigoExcludeUserMissingEmails
    error {
      code
      __typename
    }
    __typename
  }
}`,
  ModifyUserInFolder: `mutation ModifyUserInFolder($folderId: ID!, $userKaid: String!, $operation: FolderEditOperation!) {
  updateTeamKaidsInFolder(
    folderId: $folderId
    kaid: $userKaid
    operation: $operation
  ) {
    folder {
      id
      kaLocale
      name
      courseIds
      teamKaids
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  mppDevadminSignURLForImageUpload: `mutation mppDevadminSignURLForImageUpload($contentType: ImageContentType!) {
  signURLForImageUpload(contentType: $contentType) {
    result {
      publicURL
      uploadURL
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  notifyAnswer: `mutation notifyAnswer($key: String!, $notifyOnAnswer: Boolean!) {
  modifyNotifyOnAnswer(feedbackKey: $key, notifyOnAnswer: $notifyOnAnswer) {
    feedback {
      feedbackType
      content
      notifyOnAnswer
      __typename
    }
    __typename
  }
}`,
  optOutOfTeacherCampaign: `mutation optOutOfTeacherCampaign($campaignId: ID!) {
  teacherCampaignOptOut(campaignId: $campaignId) {
    teacherCampaignProgress {
      id
      optedOutPreCampaign
      optedOutOfCampaign
      __typename
    }
    __typename
  }
}`,
  passwordChangeMutation: `mutation passwordChangeMutation($kaid: String!, $password: String!, $oldPassword: String) {
  passwordChange(kaid: $kaid, password: $password, oldPassword: $oldPassword) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  passwordChangeSupportMutation: `mutation passwordChangeSupportMutation($kaid: String!, $password: String!) {
  passwordChangeSupport(kaid: $kaid, password: $password) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  PerformModAction: `mutation PerformModAction($modAction: ModAction!, $entityKey: String!, $intoType: FeedbackType) {
  performModAction(
    modAction: $modAction
    entityKey: $entityKey
    intoType: $intoType
  ) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  populateCompleteSignup: `mutation populateCompleteSignup($token: String, $inviteId: String, $parent: Boolean, $hCaptchaResponseToken: String) {
  populateCompleteSignup(
    token: $token
    inviteId: $inviteId
    parent: $parent
    hCaptchaResponseToken: $hCaptchaResponseToken
  ) {
    token
    inviteId
    isParent
    isTeacher
    isStudentInvite
    unverifiedUser {
      email
      nickname
      username
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  postloginJoinStudentMutation: `mutation postloginJoinStudentMutation($classCode: String!) {
  joinStudent(classCode: $classCode) {
    error {
      code
      signupCode
      classroomName
      __typename
    }
    classroom {
      id
      cacheId
      signupCode
      name
      __typename
    }
    __typename
  }
}`,
  PresignURLForTeamPageImageUpload: `mutation PresignURLForTeamPageImageUpload($filename: String!) {
  presignURLForTeamPageImageUpload(filename: $filename) {
    presignedPutURL
    uploadedImageURL
    error {
      code
      __typename
    }
    __typename
  }
}`,
  publishAssignment: `mutation publishAssignment($assignmentId: ID!, $startDate: DateTime!) {
  updateAssignment(
    id: $assignmentId
    assignment: {isDraft: false, startDate: $startDate}
  ) {
    assignment {
      ...AssignmentInfoFragment
      __typename
    }
    __typename
  }
}

fragment AssignmentInfoFragment on Assignment {
  id
  contents {
    id
    title: translatedTitle
    kind
    __typename
  }
  studentList {
    id
    cacheId
    name
    isK4dClassroom
    __typename
  }
  students {
    id
    kaid
    __typename
  }
  startDate
  dueDate
  isDraft
  subjectSlug
  title
  instructions
  __typename
}`,
  publishStandardMappings: `mutation publishStandardMappings($set: String!, $content: String!) {
  publishStandardMappings(setId: $set, contentDescriptor: $content) {
    published {
      id
      setId
      standardId
      contentDescriptor
      secondaryDescriptor
      deletion: isDeletion
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  PublishTeamPageEntry: `mutation PublishTeamPageEntry($entryId: ID!) {
  publishTeamPageEntry(entryId: $entryId) {
    updatedEntry {
      ...entry
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}

fragment entry on TeamPageEntryForEditing {
  id
  isPet
  isIntern
  isAlum
  hasPendingChanges
  draftContent {
    id
    name
    altNames
    startDate
    isAlum
    mainPhotoURL
    hoverPhotoURL
    title
    bio
    contactLinks {
      type
      editValue
      editPrefix
      url
      __typename
    }
    __typename
  }
  __typename
}`,
  PullTestResultForDistrict: `mutation PullTestResultForDistrict($districtID: String!, $force: Boolean!) {
  pullTestResultForDistrict(districtID: $districtID, force: $force) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  readNotification: `mutation readNotification($key: String!) {
  readNotification(key: $key) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  reauthWithAppleMutation: `mutation reauthWithAppleMutation($authCode: String!, $state: String!) {
  reauthWithApple(authCode: $authCode, state: $state) {
    error {
      code
      accessToken
      __typename
    }
    user {
      id
      kaid
      __typename
    }
    __typename
  }
}`,
  reauthWithPasswordMutation: `mutation reauthWithPasswordMutation($password: String!, $twoFactorAuthCode: String, $twoFactorRecoveryCode: String) {
  reauthWithPassword(
    password: $password
    twoFactorAuthCode: $twoFactorAuthCode
    twoFactorRecoveryCode: $twoFactorRecoveryCode
  ) {
    error {
      code
      __typename
    }
    noRecoveryCodesRemaining
    __typename
  }
}`,
  reauthWithThirdPartyMutation: `mutation reauthWithThirdPartyMutation($loginType: String!, $token: String!) {
  reauthWithThirdParty(loginType: $loginType, token: $token) {
    error {
      code
      __typename
    }
    user {
      id
      kaid
      __typename
    }
    __typename
  }
}`,
  rejectCoachRequestFromNotifMutation: `mutation rejectCoachRequestFromNotifMutation($coachKaid: String!) {
  deleteCoachRequestAsStudent(coachKaid: $coachKaid) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  rejectCoachRequestMutation: `mutation rejectCoachRequestMutation($coachKaid: String!, $studentKaid: String) {
  deleteCoachRequestAsStudent(coachKaid: $coachKaid, studentKaid: $studentKaid) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  removeCoachees: `mutation removeCoachees($coachKaid: String!, $studentKaids: [String]!) {
  removeCoachees(coachKaid: $coachKaid, studentKaids: $studentKaids) {
    removedKaids
    errors {
      kaid
      code
      __typename
    }
    __typename
  }
}`,
  removeParents: `mutation removeParents($childKaid: String!, $parentKaid: String!) {
  removeParents(childKaid: $childKaid, parentKaid: $parentKaid) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  removeStudentsFromClassrooms: `mutation removeStudentsFromClassrooms($kaids: [ID!]!, $classroomIds: [ID!]!) {
  removeStudentsFromClassrooms(kaids: $kaids, classroomIds: $classroomIds) {
    coach {
      id
      kaid
      __typename
    }
    __typename
  }
}`,
  removeThirdPartyAuth: `mutation removeThirdPartyAuth($oauthType: ThirdPartyOAuthType!) {
  removeThirdPartyAuth(oauthType: $oauthType) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  removeThirdPartyAuthDevadmin: `mutation removeThirdPartyAuthDevadmin($oauthType: ThirdPartyOAuthType!, $targetKaid: String) {
  removeThirdPartyAuth(oauthType: $oauthType, targetKaid: $targetKaid) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  renameStudentListMutation: `mutation renameStudentListMutation($listId: ID!, $name: String!) {
  renameStudentList(listId: $listId, name: $name) {
    studentList {
      id
      cacheId
      name
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  requestAdminReportCSV: `mutation requestAdminReportCSV($kaid: ID!, $selectedNodeID: ID!, $childIDs: [String!]!, $reportType: AdminReportType!, $startDate: DateTime!, $endDate: DateTime!, $grades: [String!], $teacherKaids: [String!], $courseSISValues: [String!], $courseID: String, $strandKey: String, $bands: [String!], $notifyByEmail: Boolean!, $kaLocale: String) {
  requestAdminReportCSV(
    kaid: $kaid
    selectedNodeID: $selectedNodeID
    childIDs: $childIDs
    reportType: $reportType
    startDate: $startDate
    endDate: $endDate
    teacherKaids: $teacherKaids
    grades: $grades
    courseSISValues: $courseSISValues
    courseID: $courseID
    strandKey: $strandKey
    bands: $bands
    notifyByEmail: $notifyByEmail
    kaLocale: $kaLocale
  ) {
    adminReport {
      id
      status
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  requestAuthEmail: `mutation requestAuthEmail($authEmail: String!) {
  requestAuthEmail(authEmail: $authEmail) {
    user {
      id
      pendingEmails
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  requestAuthEmailForDev: `mutation requestAuthEmailForDev($authEmail: String!) {
  requestAuthEmail(authEmail: $authEmail) {
    user {
      id
      pendingEmails
      __typename
    }
    verificationUrl
    error {
      code
      __typename
    }
    __typename
  }
}`,
  RequestToBeParentMuation: `mutation RequestToBeParentMuation($childEmail: String!) {
  requestChild(childEmail: $childEmail) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  resendInvitationMutation: `mutation resendInvitationMutation($coacheeEmail: String!) {
  resendInvitation(coacheeEmail: $coacheeEmail) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  resendUnderAgeGateApprovalEmailForDevadmin: `mutation resendUnderAgeGateApprovalEmailForDevadmin($kaid: String!) {
  resendUnderAgeGateApprovalEmail(kaid: $kaid) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  resendUnderAgeGateApprovalEmailForLogin: `mutation resendUnderAgeGateApprovalEmailForLogin {
  resendUnderAgeGateApprovalEmail {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  resendVerificationEmail: `mutation resendVerificationEmail($token: String!) {
  resendVerificationEmail(token: $token) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  resetPassword: `mutation resetPassword($token: String!, $password: String!) {
  resetPassword(token: $token, password: $password) {
    error {
      code
      __typename
    }
    identifier
    __typename
  }
}`,
  RestartTask: `mutation RestartTask($key: String!) {
  restartTask(input: {key: $key}) {
    error {
      code
      debugMessage
      __typename
    }
    task {
      id
      ... on PracticeTask {
        exerciseLength
        taskAttemptHistory {
          itemId
          __typename
        }
        __typename
      }
      ... on TopicQuizTask {
        taskAttemptHistory {
          itemId
          __typename
        }
        __typename
      }
      ... on TopicUnitTestTask {
        taskAttemptHistory {
          itemId
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  scheduleUserDeletionMutation: `mutation scheduleUserDeletionMutation($targetKaid: String!, $keepActivityIfNecessary: Boolean) {
  scheduleUserDeletion(
    targetKaid: $targetKaid
    keepActivityIfNecessary: $keepActivityIfNecessary
  ) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  sendAgingParentTestEmail: `mutation sendAgingParentTestEmail {
  sendAgingParentTestEmail {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  sendAiGuideEnrolledTestEmail: `mutation sendAiGuideEnrolledTestEmail {
  sendAiGuideEnrolledTestEmail {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  sendAiGuideThreadFlaggedTestEmail: `mutation sendAiGuideThreadFlaggedTestEmail {
  sendChildAiGuideThreadFlaggedTestEmail {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  sendChildAddedCoachTestEmail: `mutation sendChildAddedCoachTestEmail {
  sendChildAddedCoachTestEmail {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  sendExistingParentClaimManagedStudentTestEmail: `mutation sendExistingParentClaimManagedStudentTestEmail {
  sendExistingParentClaimManagedStudentTestEmail {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  sendKmapActivationEmailForTeacherMutation: `mutation sendKmapActivationEmailForTeacherMutation($districtEmail: String!) {
  sendKmapActivationEmailForTeacher(districtEmail: $districtEmail) {
    emailSent
    error {
      code
      __typename
    }
    __typename
  }
}`,
  sendModMessageMutation: `mutation sendModMessageMutation($kaid: String!, $message: String!) {
  sendModMessage(kaid: $kaid, message: $message) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  sendNewAssignmentTestEmail: `mutation sendNewAssignmentTestEmail {
  sendNewAssignmentTestEmail {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  sendParentChildInviteTestEmail: `mutation sendParentChildInviteTestEmail {
  sendParentChildInviteTestEmail {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  sendParentReportTestEmail: `mutation sendParentReportTestEmail {
  sendParentReportTestEmail {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  sendSampleTestEmail: `mutation sendSampleTestEmail {
  sendSampleTestEmail {
    emailsSent
    errorMessages
    __typename
  }
}`,
  sendTeacherReportTestEmail: `mutation sendTeacherReportTestEmail {
  sendTeacherReportTestEmail {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  sendTeacherStudentInviteTestEmail: `mutation sendTeacherStudentInviteTestEmail {
  sendTeacherStudentInviteTestEmail {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  sendUnderAgeGateParentApproveTestEmail: `mutation sendUnderAgeGateParentApproveTestEmail {
  sendUnderAgeGateParentApproveTestEmail {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  sendUnderAgeGateParentReminderTestEmail: `mutation sendUnderAgeGateParentReminderTestEmail {
  sendUnderAgeGateParentReminderTestEmail {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  sendUnregisteredParentClaimManagedStudentTestEmail: `mutation sendUnregisteredParentClaimManagedStudentTestEmail {
  sendUnregisteredParentClaimManagedStudentTestEmail {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  sendWaitlistAddedTestEmail: `mutation sendWaitlistAddedTestEmail {
  sendWaitlistAddedTestEmail {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  sendWaitlistApprovedReminderTestEmail: `mutation sendWaitlistApprovedReminderTestEmail {
  sendWaitlistApprovedReminderTestEmail {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  sendWaitlistApprovedTestEmail: `mutation sendWaitlistApprovedTestEmail {
  sendWaitlistApprovedTestEmail {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  SetAccessibility: `mutation SetAccessibility($kaid: String!, $hideVisual: Boolean!, $prefersReducedMotion: Boolean!, $noColorInVideos: Boolean!, $soundOn: Boolean) {
  setSettings(
    kaid: $kaid
    hideVisual: $hideVisual
    prefersReducedMotion: $prefersReducedMotion
    noColorInVideos: $noColorInVideos
    soundOn: $soundOn
  ) {
    user {
      id
      hideVisual
      prefersReducedMotion
      noColorInVideos
      soundOn
      __typename
    }
    errors {
      code
      __typename
    }
    __typename
  }
}`,
  setAdminReportCancelled: `mutation setAdminReportCancelled($reportID: ID!) {
  setAdminReportCancelled(reportID: $reportID) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  setAffiliataionCountryCode: `mutation setAffiliataionCountryCode($countryCode: String!) {
  userSettingsSetAffiliationCountryCode(countryCode: $countryCode) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  SetAIGuideInteractionReaction: `mutation SetAIGuideInteractionReaction($threadId: ID!, $interactionId: ID!, $reaction: String, $note: String, $rewrittenResponse: String, $rating: Int, $sentiment: String) {
  setAIGuideInteractionReaction(
    threadId: $threadId
    interactionId: $interactionId
    reaction: $reaction
    note: $note
    rewrittenResponse: $rewrittenResponse
    rating: $rating
    sentiment: $sentiment
  ) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  SetBasicSettings: `mutation SetBasicSettings($kaid: String!, $nickname: String, $username: String, $userLanguage: String, $region: String, $birthdate: String) {
  setSettings(
    kaid: $kaid
    nickname: $nickname
    username: $username
    userLanguage: $userLanguage
    region: $region
    birthdate: $birthdate
  ) {
    user {
      id
      nickname
      username
      userLanguage
      region
      birthdate
      homepageUrl
      __typename
    }
    errors {
      code
      __typename
    }
    __typename
  }
}`,
  setBirthdateForSelf: `mutation setBirthdateForSelf($birthdate: String!) {
  setSettings(birthdate: $birthdate) {
    errors {
      code
      __typename
    }
    __typename
  }
}`,
  setBirthdateForUser: `mutation setBirthdateForUser($kaid: String!, $birthdate: String) {
  setSettings(kaid: $kaid, birthdate: $birthdate) {
    errors {
      code
      __typename
    }
    __typename
  }
}`,
  setChronomancerMode: `mutation setChronomancerMode($mode: ChronomancerMode!) {
  setChronomancerMode(mode: $mode) {
    chronomancer {
      mode
      isCollegeBoardIntegrationEnabled
      outages {
        start
        end
        __typename
      }
      __typename
    }
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  setClassroomCoursesMutation: `mutation setClassroomCoursesMutation($classDescriptor: String!, $courseKeys: [String!]!) {
  setClassroomCourses(
    classroomDescriptor: $classDescriptor
    courseKeys: $courseKeys
  ) {
    classroom {
      id
      cacheId
      descriptor
      topics {
        id
        key
        slug
        title: translatedTitle
        translatedStandaloneTitle
        iconPath
        domainSlug
        isHighSchoolSubject
        masteryEnabled
        subjectMasteryEnabled
        learnableContentSummary {
          countExercises
          __typename
        }
        __typename
      }
      isK4dClassroom
      __typename
    }
    __typename
  }
}`,
  setClassroomMasteryTowersGoal: `mutation setClassroomMasteryTowersGoal($classDescriptor: String!, $weeklyGoal: Int!) {
  setClassroomMasteryTowersGoal(
    classDescriptor: $classDescriptor
    weeklyGoal: $weeklyGoal
  ) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  setClassroomSatStatusMutation: `mutation setClassroomSatStatusMutation($classDescriptor: String!, $includeSat: Boolean!, $fromUpsell: Boolean) {
  setClassroomSatStatus(
    classroomDescriptor: $classDescriptor
    includeSat: $includeSat
    fromUpsell: $fromUpsell
  ) {
    classroom {
      id
      cacheId
      descriptor
      includesSat
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  SetClassroomTestPrepExams: `mutation SetClassroomTestPrepExams($classDescriptor: String!, $examIds: [String!]!) {
  setClassroomTestPrepExams(
    classroomDescriptor: $classDescriptor
    examIds: $examIds
  ) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  SetCleverInfo: `mutation SetCleverInfo($cleverDistrictId: String!, $cleverId: String!, $kaid: String!) {
  setCleverInfoAsAdmin(
    cleverDistrictId: $cleverDistrictId
    cleverId: $cleverId
    kaid: $kaid
  ) {
    error {
      code
      __typename
    }
    user {
      id
      cleverId
      cleverDistrictId
      __typename
    }
    __typename
  }
}`,
  setCustomRedirect: `mutation setCustomRedirect($from: String!, $to: String!) {
  setCustomRedirect(redirectFrom: $from, redirectTo: $to) {
    error {
      code
      __typename
    }
    customRedirect {
      id
      redirectFrom
      redirectTo
      __typename
    }
    __typename
  }
}`,
  setEduorgAffiliationMutation: `mutation setEduorgAffiliationMutation($eduorgKeyId: ID!) {
  setEduorgAffiliation(eduorgKeyId: $eduorgKeyId) {
    user {
      id
      schoolAffiliation {
        id
        name
        postalCode
        location
        __typename
      }
      affiliationCountryCode
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  setHasFormalTeacherStatus: `mutation setHasFormalTeacherStatus($tosForFormalTeacherStatus: Boolean) {
  setSettings(tosForFormalTeacherStatus: $tosForFormalTeacherStatus) {
    user {
      id
      tosForFormalTeacherStatus
      __typename
    }
    errors {
      code
      __typename
    }
    __typename
  }
}`,
  setInitialClassroomCourses: `mutation setInitialClassroomCourses($classDescriptor: String!, $courseKeys: [String!]!) {
  setClassroomCourses(
    classroomDescriptor: $classDescriptor
    courseKeys: $courseKeys
  ) {
    classroom {
      id
      cacheId
      __typename
    }
    __typename
  }
}`,
  setMasteryTowerName: `mutation setMasteryTowerName($classDescriptor: String!, $leaderboardName: String!) {
  setMasteryTowerName(
    classDescriptor: $classDescriptor
    leaderboardName: $leaderboardName
  ) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  setModifyCoachesCapability: `mutation setModifyCoachesCapability($targetKaid: String!, $allow: Boolean!) {
  setModifyCoachesCapability(targetKaid: $targetKaid, allow: $allow) {
    target {
      id
      canModifyCoaches
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  SetModifyCoachesCapbilityMutation: `mutation SetModifyCoachesCapbilityMutation($targetKaid: String!, $allow: Boolean!) {
  setModifyCoachesCapability(targetKaid: $targetKaid, allow: $allow) {
    target {
      id
      canModifyCoaches
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  setParent: `mutation setParent($parentEmail: String!) {
  setParent(parentEmail: $parentEmail) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  setPrimaryEmail: `mutation setPrimaryEmail($email: String!, $targetKaid: String) {
  setPrimaryEmail(email: $email, targetKaid: $targetKaid) {
    user {
      id
      email
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  setPrimaryEmailMutation: `mutation setPrimaryEmailMutation($email: String!) {
  setPrimaryEmail(email: $email) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  SetProfileBadges: `mutation SetProfileBadges($kaid: String!, $badgeNames: [String!]!) {
  setProfileBadges(kaid: $kaid, badgeNames: $badgeNames) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  SetProfilePrograms: `mutation SetProfilePrograms($kaid: String!, $programKeys: [String!]!) {
  setProfilePrograms(kaid: $kaid, programKeys: $programKeys) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  SetPromotionMutation: `mutation SetPromotionMutation($promoName: String!) {
  recordPromo(promoName: $promoName) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  setSettingsMutationWithErrors: `mutation setSettingsMutationWithErrors($kaid: String!, $nickname: String, $username: String, $soundOn: Boolean, $muteVideos: Boolean, $showCaptions: Boolean, $playbackRate: PlaybackRate, $userLanguage: String, $region: String, $birthdate: String, $hideVisual: Boolean, $prefersReducedMotion: Boolean, $noColorInVideos: Boolean) {
  setSettings(
    kaid: $kaid
    nickname: $nickname
    username: $username
    soundOn: $soundOn
    muteVideos: $muteVideos
    showCaptions: $showCaptions
    playbackRate: $playbackRate
    userLanguage: $userLanguage
    region: $region
    birthdate: $birthdate
    hideVisual: $hideVisual
    prefersReducedMotion: $prefersReducedMotion
    noColorInVideos: $noColorInVideos
  ) {
    user {
      id
      nickname
      username
      soundOn
      muteVideos
      showCaptions
      userLanguage
      region
      birthdate
      hideVisual
      prefersReducedMotion
      noColorInVideos
      __typename
    }
    errors {
      code
      __typename
    }
    __typename
  }
}`,
  setTeacherAffiliation: `mutation setTeacherAffiliation($tosForFormalTeacherStatus: Boolean, $countryCode: String!, $eduorgKeyId: ID!) {
  setSettings(tosForFormalTeacherStatus: $tosForFormalTeacherStatus) {
    user {
      id
      tosForFormalTeacherStatus
      __typename
    }
    __typename
  }
  userSettingsSetAffiliationCountryCode(countryCode: $countryCode) {
    error {
      code
      __typename
    }
    __typename
  }
  setEduorgAffiliation(eduorgKeyId: $eduorgKeyId) {
    user {
      id
      schoolAffiliation {
        id
        name
        postalCode
        location
        __typename
      }
      affiliationCountryCode
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  setTeacherCountryAffiliation: `mutation setTeacherCountryAffiliation($countryCode: String!) {
  userSettingsSetAffiliationCountryCode(countryCode: $countryCode) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  setUserCourses: `mutation setUserCourses($courseIds: [String]!, $gradeLevelId: String) {
  setUserCourses(courseIds: $courseIds, gradeLevelId: $gradeLevelId) {
    error {
      code
      __typename
    }
    user {
      id
      homepageModules {
        navigation {
          interestedInLsat
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  SetUserHomepageAdmin: `mutation SetUserHomepageAdmin($homepage: UserHomepage!, $kaid: String) {
  setUserHomepage(homepage: $homepage, kaid: $kaid) {
    error {
      code
      __typename
    }
    user {
      id
      homepage
      __typename
    }
    __typename
  }
}`,
  SetVideo: `mutation SetVideo($kaid: String!, $muteVideos: Boolean!, $showCaptions: Boolean!, $playbackRate: PlaybackRate!) {
  setSettings(
    kaid: $kaid
    muteVideos: $muteVideos
    showCaptions: $showCaptions
    playbackRate: $playbackRate
  ) {
    user {
      id
      muteVideos
      showCaptions
      playbackRate
      __typename
    }
    errors {
      code
      __typename
    }
    __typename
  }
}`,
  SetWalmartInfo: `mutation SetWalmartInfo($kaid: String!, $walmartId: String, $walmartDivision: String) {
  setWalmartInfoAsAdmin(
    walmartId: $walmartId
    walmartDivision: $walmartDivision
    kaid: $kaid
  ) {
    error {
      code
      __typename
    }
    user {
      id
      walmartId
      walmartDivision
      __typename
    }
    __typename
  }
}`,
  setWalmartInfoToJoinMutation: `mutation setWalmartInfoToJoinMutation($profileKeyName: String!) {
  setWalmartInfo(profileKeyName: $profileKeyName) {
    error {
      code
      __typename
    }
    walmartProfile {
      continueUrl
      __typename
    }
    __typename
  }
}`,
  signupAdultWithPasswordMutation: `mutation signupAdultWithPasswordMutation($email: String!, $password: String!, $firstname: String!, $lastname: String!, $role: UserRole!, $birthdate: Date) {
  signupAdultWithPassword(
    email: $email
    password: $password
    firstname: $firstname
    lastname: $lastname
    role: $role
    birthdate: $birthdate
  ) {
    user {
      id
      kaid
      canAccessDistrictsHomepage
      isTeacher
      hasUnresolvedInvitations
      preferredKaLocale {
        id
        kaLocale
        status
        __typename
      }
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  signupDistrictsWithClasslink: `mutation signupDistrictsWithClasslink($options: ClasslinkSignupOptions) {
  signupDistrictsWithClasslink(options: $options) {
    user {
      id
      kaid
      canAccessDistrictsHomepage
      isTeacher
      hasUnresolvedInvitations
      preferredKaLocale {
        id
        kaLocale
        status
        __typename
      }
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  signupDistrictsWithPasswordMutation: `mutation signupDistrictsWithPasswordMutation($email: String!, $password: String!, $firstname: String!, $lastname: String!, $role: UserRole, $birthdate: Date) {
  signupDistrictsWithPassword(
    email: $email
    password: $password
    firstname: $firstname
    lastname: $lastname
    role: $role
    birthdate: $birthdate
  ) {
    user {
      id
      kaid
      canAccessDistrictsHomepage
      isTeacher
      hasUnresolvedInvitations
      preferredKaLocale {
        id
        kaLocale
        status
        __typename
      }
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  signupLearnerWithPasswordMutation: `mutation signupLearnerWithPasswordMutation($email: String!, $password: String!, $firstname: String!, $lastname: String!, $birthdate: Date!) {
  signupLearnerWithPassword(
    email: $email
    password: $password
    firstname: $firstname
    lastname: $lastname
    birthdate: $birthdate
  ) {
    user {
      id
      kaid
      canAccessDistrictsHomepage
      isTeacher
      hasUnresolvedInvitations
      preferredKaLocale {
        id
        kaLocale
        status
        __typename
      }
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  signupResendVerificationEmailMutation: `mutation signupResendVerificationEmailMutation {
  signupResendVerificationEmail {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  signupUnderAgeGateMutation: `mutation signupUnderAgeGateMutation($username: String!, $password: String!, $birthdate: Date!, $parentEmail: String!, $signupCodes: [String]) {
  signupUnderAgeGate(
    username: $username
    password: $password
    birthdate: $birthdate
    parentEmail: $parentEmail
    signupCodes: $signupCodes
  ) {
    user {
      id
      kaid
      canAccessDistrictsHomepage
      isTeacher
      hasUnresolvedInvitations
      preferredKaLocale {
        id
        kaLocale
        status
        __typename
      }
      studentLists {
        id
        cacheId
        signupCode
        __typename
      }
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  SignupWithWalmartMutation: `mutation SignupWithWalmartMutation($profileKeyName: String!, $email: String!) {
  signupWithWalmart(profileKeyName: $profileKeyName, email: $email) {
    error {
      code
      __typename
    }
    user {
      id
      kaid
      __typename
    }
    __typename
  }
}`,
  signURLForReport: `mutation signURLForReport($recordID: String!) {
  signURLForReport(recordID: $recordID) {
    url
    error {
      code
      __typename
    }
    __typename
  }
}`,
  siteEditorStartPublish: `mutation siteEditorStartPublish($title: String, $contentDescriptors: [String!]!) {
  startPublishForContentDescriptors(
    title: $title
    contentDescriptors: $contentDescriptors
  ) {
    publishStatus {
      id
      queued
      __typename
    }
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  spinOffProgram: `mutation spinOffProgram($originProgramOrContentId: String!, $originProgramKind: SpinoffOriginKind!, $originRevisionId: ID, $title: String!, $revision: ProgramRevisionInput!, $curationNodeSlug: String!) {
  spinOffProgram(
    origin: {programOrContentId: $originProgramOrContentId, kind: $originProgramKind}
    originRevisionId: $originRevisionId
    title: $title
    revision: $revision
    curationNodeSlug: $curationNodeSlug
  ) {
    program {
      ...Program
      __typename
    }
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}

fragment Program on Program {
  id
  latestRevision {
    id
    code
    __typename
  }
  title
  url
  userAuthoredContentType
  __typename
}`,
  startMasteryTowerSession: `mutation startMasteryTowerSession($classDescriptor: String!) {
  startMasteryTowerSession(classDescriptor: $classDescriptor) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  stopCoachingStudents: `mutation stopCoachingStudents($kaids: [ID!]!) {
  stopCoachingStudents(studentKaids: $kaids) {
    errors {
      code
      __typename
    }
    __typename
  }
}`,
  submitStory: `mutation submitStory($story: SubmitStoryInput!) {
  submitStory(story: $story) {
    success
    __typename
  }
}`,
  submitTeacherCampaignResponse: `mutation submitTeacherCampaignResponse($urlEncodedStepKey: ID!, $exerciseNo: Int!, $text: [String]!) {
  teacherCampaignExerciseComplete(
    urlEncodedStepKey: $urlEncodedStepKey
    exerciseNo: $exerciseNo
    text: $text
  ) {
    ok
    __typename
  }
}`,
  teacherCampaignUpdate: `mutation teacherCampaignUpdate($campaign: TeacherCampaignUpdateInput!) {
  teacherCampaignUpdate(campaign: $campaign) {
    campaign {
      id
      __typename
    }
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  transferAuthMutation: `mutation transferAuthMutation($key: String!) {
  transferAuth(key: $key) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  transferCleverAuthMutation: `mutation transferCleverAuthMutation($transferToken: String!, $reauth: Boolean!) {
  transferCleverAuth(transferToken: $transferToken, reauth: $reauth) {
    error {
      code
      cleverUserInfo {
        cleverId
        isTeacher
        cleverEmail
        __typename
      }
      transferToken
      udiUuid
      kaLocale
      __typename
    }
    user {
      id
      kaid
      canAccessDistrictsHomepage
      isTeacher
      hasUnresolvedInvitations
      preferredKaLocale {
        id
        kaLocale
        status
        __typename
      }
      userDistrictInfos {
        id
        district {
          id
          kaLocale
          __typename
        }
        __typename
      }
      __typename
    }
    isLibraryUser
    isFirstLogin
    transferToken
    __typename
  }
}`,
  translationEditorEditTalkthrough: `mutation translationEditorEditTalkthrough($sha: String!, $input: EditTalkthroughInput!) {
  editTalkthrough(sha: $sha, input: $input) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  translationEditorSignURLForTalkthroughMP3Upload: `mutation translationEditorSignURLForTalkthroughMP3Upload($kaLocale: KALocale!, $youtubeID: String!) {
  signURLForTalkthroughMP3Upload(kaLocale: $kaLocale, youtubeID: $youtubeID) {
    uploadURL
    publicURL
    error {
      code
      __typename
    }
    __typename
  }
}`,
  UnbanUserMutation: `mutation UnbanUserMutation($targetKaid: String!) {
  unhellbanUser(targetKaid: $targetKaid) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  UnderAgeGateParentApproval: `mutation UnderAgeGateParentApproval($username: String!) {
  underAgeGateParentApproval(username: $username) {
    error {
      code
      __typename
    }
    user {
      id
      nickname
      underAgeGatePendingApprovals {
        username
        daysUntilCutoff
        __typename
      }
      childInvitations {
        invitationType
        email
        requestKey
        nickname
        __typename
      }
      parentChildren: children {
        id
        coachNickname
        kaid
        userId
        isUnderAgeGateManagedByActor
        avatar {
          name
          imageSrc
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  underAgeGateParentApprovalByTokenMutation: `mutation underAgeGateParentApprovalByTokenMutation($tosAccepted: Boolean!, $underAgeGateUsername: String, $parentApproveToken: String) {
  underAgeGateParentApprovalByToken(
    tosAccepted: $tosAccepted
    underAgeGateUsername: $underAgeGateUsername
    parentApproveToken: $parentApproveToken
  ) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  unlinkAuthEmail: `mutation unlinkAuthEmail($authEmail: String!) {
  unlinkEmail(authEmail: $authEmail) {
    user {
      id
      authEmails
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  unsyncGoogleClassroom: `mutation unsyncGoogleClassroom($classroomId: String!) {
  unsyncGoogleClassroom(classroomId: $classroomId) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  UpdateAssessmentItemTag: `mutation UpdateAssessmentItemTag($id: String!, $displayName: String!, $description: String!, $lessonId: String!) {
  updateAssessmentItemTag(
    id: $id
    displayName: $displayName
    description: $description
    lessonId: $lessonId
  ) {
    assessmentItemTag {
      ...AssessmentItemTagFields
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}

fragment AssessmentItemTagFields on AssessmentItemTag {
  editId: id
  id: urlsafeTag
  displayName
  description
  relatedContentId: lessonId
  __typename
}`,
  updateAssignment: `mutation updateAssignment($assignmentId: ID!, $studentKaids: [ID], $studentKaidsToAdd: [ID], $studentKaidsToRemove: [ID], $contentDescriptors: [String], $startDate: DateTime, $dueDate: DateTime, $isDraft: Boolean) {
  updateAssignment(
    id: $assignmentId
    assignment: {studentKaids: $studentKaids, contentDescriptors: $contentDescriptors, startDate: $startDate, dueDate: $dueDate, isDraft: $isDraft, studentKaidsToAdd: $studentKaidsToAdd, studentKaidsToRemove: $studentKaidsToRemove}
  ) {
    assignment {
      ...AssignmentInfoFragment
      __typename
    }
    __typename
  }
}

fragment AssignmentInfoFragment on Assignment {
  id
  contents {
    id
    title: translatedTitle
    kind
    __typename
  }
  studentList {
    id
    cacheId
    name
    isK4dClassroom
    __typename
  }
  students {
    id
    kaid
    __typename
  }
  startDate
  dueDate
  isDraft
  subjectSlug
  title
  instructions
  __typename
}`,
  updateAssignments: `mutation updateAssignments($ids: [ID]!, $startDate: DateTime, $dueDate: DateTime) {
  updateAssignments(
    ids: $ids
    assignment: {startDate: $startDate, dueDate: $dueDate}
  ) {
    assignments {
      id
      contents {
        id
        title
        __typename
      }
      studentList {
        id
        cacheId
        name
        __typename
      }
      students {
        id
        kaid
        __typename
      }
      coach {
        id
        kaid
        __typename
      }
      startDate
      dueDate
      isDraft
      subjectSlug
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  updateChallengeProgress: `mutation updateChallengeProgress($currentStep: Int, $programId: ID!, $lessonId: ID!, $stashedCode: String, $status: Int) {
  updateChallengeProgress(
    input: {currentStep: $currentStep, programId: $programId, lessonId: $lessonId, stashedCode: $stashedCode, status: $status}
  ) {
    actionResults {
      pointsEarned {
        points
        __typename
      }
      notificationsAdded {
        badges
        avatarParts
        readable
        urgent
        toast
        continueUrl
        __typename
      }
      tutorialNodeProgress {
        contentId
        progress
        __typename
      }
      userProfile {
        countVideosCompleted
        points
        countBrandNewNotifications
        __typename
      }
      __typename
    }
    programProgress {
      currentStep
      completionStatus
      content {
        id
        contentKind
        __typename
      }
      points
      stashedCode
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  UpdateCoachNicknameForStudent: `mutation UpdateCoachNicknameForStudent($nickname: String, $studentKaid: String!) {
  updateCoachNicknameForStudent(nickname: $nickname, studentKaid: $studentKaid) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  updateContentPermission: `mutation updateContentPermission($userKaid: String!, $id: String!, $role: String!, $kaLocale: String!, $kind: String!, $canPublish: Boolean!) {
  updateContentPermission(
    userKaid: $userKaid
    contentPermission: {id: $id, role: $role, kaLocale: $kaLocale, kind: $kind, canPublish: $canPublish}
  ) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  updateCurationPageRevisionMutation: `mutation updateCurationPageRevisionMutation($sha: String!, $input: EditCurationPageInput!) {
  editCurationPage(sha: $sha, input: $input) {
    curationPage {
      contentKind
      id
      title
      slug
      alternateSlugs
      curriculumKey
      description
      listed
      sponsored
      showCurationModule
      lowerToc
      customDescriptionTag
      customTitleTag
      curationData
      sha
      hasUnpublishedChanges
      __typename
    }
    error {
      code
      conflictSha
      debugMessage
      __typename
    }
    __typename
  }
}`,
  updateCustomBadge: `mutation updateCustomBadge($input: UpdateCustomBadgeInput) {
  updateCustomBadge(input: $input) {
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  updateDistrictGoLiveDate: `mutation updateDistrictGoLiveDate($districtID: String!, $goLiveDate: Date!) {
  updateDistrictGoLiveDate(districtID: $districtID, goLiveDate: $goLiveDate) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  updateDistrictRosterDistrictAdmins: `mutation updateDistrictRosterDistrictAdmins($districtID: String!, $enable: Boolean!) {
  updateDistrictRosterDistrictAdmins(districtID: $districtID, enable: $enable) {
    district {
      id
      rosterDistrictAdmins
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  updateDistrictRosterSyncing: `mutation updateDistrictRosterSyncing($districtID: String!, $sync: Boolean!) {
  updateDistrictRosterSyncing(districtID: $districtID, sync: $sync) {
    district {
      id
      rosterSyncingEnabled
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  updateDistrictTeacherActivationEmails: `mutation updateDistrictTeacherActivationEmails($districtID: String!, $enable: Boolean!) {
  updateDistrictTeacherActivationEmails(districtID: $districtID, enable: $enable) {
    district {
      id
      sendActivationEmails
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  updateDomainRevisionMutation: `mutation updateDomainRevisionMutation($sha: String!, $input: EditDomainInput!) {
  editDomain(sha: $sha, input: $input) {
    domain {
      contentKind
      id
      title
      slug
      alternateSlugs
      description
      listed
      sponsored
      showCurationModule
      lowerToc
      customDescriptionTag
      customTitleTag
      curationData
      sha
      hasUnpublishedChanges
      __typename
    }
    error {
      code
      conflictSha
      debugMessage
      __typename
    }
    __typename
  }
}`,
  updateDonationAsk: `mutation updateDonationAsk($donationAsk: DonationAskInput) {
  updateDonationAsk(donationAsk: $donationAsk) {
    success
    error {
      code
      __typename
    }
    __typename
  }
}`,
  updateDonationAskActiveState: `mutation updateDonationAskActiveState($donationAsk: DonationAskActivityInput) {
  updateDonationAskActiveState(donationAsk: $donationAsk) {
    success
    error {
      code
      __typename
    }
    __typename
  }
}`,
  UpdateFeedback: `mutation UpdateFeedback($feedbackKey: String!, $textContent: String!, $shownLowQualityNotice: Boolean) {
  updateFeedback(
    feedbackKey: $feedbackKey
    textContent: $textContent
    shownLowQualityNotice: $shownLowQualityNotice
  ) {
    feedback {
      isLocked
      isPinned
      appearsAsDeleted
      author {
        id
        kaid
        nickname
        avatar {
          name
          imageSrc
          __typename
        }
        __typename
      }
      content
      date
      definitelyNotSpam
      deleted
      downVoted
      expandKey
      feedbackType
      flaggedBy
      flags
      focusUrl
      focus {
        kind
        id
        translatedTitle
        relativeUrl
        __typename
      }
      fromVideoAuthor
      key
      notifyOnAnswer
      permalink
      qualityKind
      replyCount
      replyExpandKeys
      sumVotesIncremented
      upVoted
      __typename
    }
    lowQualityResponse {
      feedbackCode
      feedbackChar
      feedbackType
      showLowQualityNotice
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  UpdateFlagMutation: `mutation UpdateFlagMutation($flagName: String!, $description: String, $team: String, $expires: String, $rules: [RuleInput!]!) {
  updateFlag(
    name: $flagName
    description: $description
    team: $team
    expires: $expires
    rules: $rules
  ) {
    flag {
      id
      name
      description
      team
      expires
      created
      rules {
        name
        isAllowRule
        context {
          name
          value
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  updateGoogleClassroom: `mutation updateGoogleClassroom($googleClassId: String!, $googleClassName: String!, $googleClassUrl: String!, $googleClassStudents: [GoogleClassStudent]!, $classroomKey: String!, $khanClassName: String) {
  updateGoogleClassroom(
    googleClassId: $googleClassId
    googleClassName: $googleClassName
    googleClassUrl: $googleClassUrl
    googleClassStudents: $googleClassStudents
    classroomKey: $classroomKey
    khanClassName: $khanClassName
  ) {
    classroom {
      ...ClassroomData
      __typename
    }
    linkedStudents {
      ...LinkedStudentData
      __typename
    }
    unsuccessfullyLinkedStudents {
      ...UnlinkedStudentData
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}

fragment ClassroomData on StudentList {
  cacheId
  id
  descriptor
  name
  key
  signupCode
  googleClassId
  googleClassName
  googleClassUrl
  __typename
}

fragment LinkedStudentData on LinkedGoogleClassStudent {
  email
  __typename
}

fragment UnlinkedStudentData on UnsuccessfullyLinkedGoogleClassStudent {
  email
  nickname
  error {
    code
    __typename
  }
  __typename
}`,
  UpdateGrants: `mutation UpdateGrants($kaid: ID!, $rolesToGrant: [RoleInput!]!, $roleIdsToRevoke: [ID!]!) {
  revokeAndGrantRoles(
    kaid: $kaid
    rolesToGrant: $rolesToGrant
    roleIdsToRevoke: $roleIdsToRevoke
  ) {
    userWithGrants {
      id
      grants {
        permissionId
        role {
          name
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  updateInteractiveProgress: `mutation updateInteractiveProgress($programId: ID!, $lessonId: ID!) {
  updateInteractiveProgress(input: {programId: $programId, lessonId: $lessonId}) {
    actionResults {
      pointsEarned {
        points
        __typename
      }
      notificationsAdded {
        badges
        avatarParts
        readable
        urgent
        toast
        continueUrl
        __typename
      }
      tutorialNodeProgress {
        contentId
        progress
        __typename
      }
      userProfile {
        countVideosCompleted
        points
        countBrandNewNotifications
        __typename
      }
      __typename
    }
    programProgress {
      completionStatus
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  UpdateKMapPlacementMutation: `mutation UpdateKMapPlacementMutation($classDescriptor: String!, $studentMapGoals: [StudentMapGoalsInput]!) {
  updateMapGoals(
    classroomDescriptor: $classDescriptor
    studentMapGoals: $studentMapGoals
  ) {
    assignments {
      id
      __typename
    }
    __typename
  }
}`,
  updateMuteVideosSetting: `mutation updateMuteVideosSetting($muteVideos: Boolean!) {
  setSettings(muteVideos: $muteVideos) {
    user {
      id
      muteVideos
      __typename
    }
    __typename
  }
}`,
  updateOfficialClarification: `mutation updateOfficialClarification($id: ID!, $clarification: UpdateOfficialClarificationInput!) {
  updateOfficialClarification(id: $id, clarification: $clarification) {
    updatedClarification {
      ...clarificationFragmentWithReporter
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  updatePlaybackRateSetting: `mutation updatePlaybackRateSetting($playbackRate: PlaybackRate!) {
  setSettings(playbackRate: $playbackRate) {
    user {
      id
      playbackRate
      __typename
    }
    __typename
  }
}`,
  updateProfile: `mutation updateProfile($avatarName: String, $bio: String, $profileAccessLevel: ProfileAccessLevel, $nickname: String, $username: String) {
  setSettings(
    avatarName: $avatarName
    bio: $bio
    nickname: $nickname
    username: $username
    profileAccessLevel: $profileAccessLevel
  ) {
    user {
      id
      avatar {
        name
        imageSrc
        __typename
      }
      bio
      profile {
        accessLevel
        __typename
      }
      nickname
      username
      __typename
    }
    errors {
      code
      __typename
    }
    __typename
  }
}`,
  updateProgram: `mutation updateProgram($programId: ID!, $title: String, $revision: ProgramRevisionInput!) {
  updateProgram(programId: $programId, title: $title, revision: $revision) {
    program {
      ...Program
      __typename
    }
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}

fragment Program on Program {
  id
  latestRevision {
    id
    code
    __typename
  }
  title
  url
  userAuthoredContentType
  __typename
}`,
  updateProgramSettings: `mutation updateProgramSettings($programId: ID!, $height: Int!, $width: Int!, $category: ProgramCategoryInput, $description: String) {
  updateProgramSettings(
    programId: $programId
    height: $height
    width: $width
    category: $category
    description: $description
  ) {
    program {
      id
      height
      width
      category
      description
      __typename
    }
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  updateProjectProgress: `mutation updateProjectProgress($programId: ID!, $lessonId: ID!, $stashedCode: String, $status: Int) {
  updateProjectProgress(
    input: {programId: $programId, lessonId: $lessonId, stashedCode: $stashedCode, status: $status}
  ) {
    actionResults {
      pointsEarned {
        points
        __typename
      }
      notificationsAdded {
        badges
        avatarParts
        readable
        urgent
        toast
        continueUrl
        __typename
      }
      tutorialNodeProgress {
        contentId
        progress
        __typename
      }
      userProfile {
        countVideosCompleted
        points
        countBrandNewNotifications
        __typename
      }
      __typename
    }
    programProgress {
      completionStatus
      content {
        id
        contentKind
        __typename
      }
      points
      stashedCode
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  updateRewards: `mutation updateRewards {
  checkForNewRewards {
    newBadges {
      name
      __typename
    }
    newAvatars {
      name
      __typename
    }
    __typename
  }
}`,
  UpdateRolesAndHomepage: `mutation UpdateRolesAndHomepage($roles: [UserRole]!, $homepage: UserHomepage!) {
  updateRolesAndHomepageSettings(roles: $roles, homepage: $homepage) {
    user {
      id
      isTeacher
      isParent
      homepageUrl
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  updateShowCaptionsSetting: `mutation updateShowCaptionsSetting($showCaptions: Boolean!) {
  setSettings(showCaptions: $showCaptions) {
    user {
      id
      showCaptions
      __typename
    }
    __typename
  }
}`,
  updateStory: `mutation updateStory($key: ID!, $story: UpdateStoryInput!) {
  updateStory(key: $key, story: $story) {
    success
    __typename
  }
}`,
  updateStripeCardInSubscription: `mutation updateStripeCardInSubscription($subscriptionId: String!, $cardToken: String!) {
  updateStripeSubscription(subscriptionId: $subscriptionId, cardToken: $cardToken) {
    subscription {
      id
      customerName
      customerId
      last4
      status
      expMonth
      expYear
      monthlyAmountCents
      __typename
    }
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}
`,
  updateStripeSubscriptionAmount: `mutation updateStripeSubscriptionAmount($subscriptionId: String!, $newPlan: String!, $zipCode: String!) {
  updateStripeSubscriptionAmount(subscriptionId: $subscriptionId, newPlan: $newPlan, zipCode: $zipCode) {
    subscription {
      id
      monthlyAmountCents
      __typename
    }
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}
`,
  UpdateSubjectMasteryAssignmentMutation: `mutation UpdateSubjectMasteryAssignmentMutation($id: ID!, $studentKaids: [ID]!, $dueDate: DateTime!) {
  updateSubjectMasteryAssignment(
    updateSubjectMasteryAssignmentInput: {id: $id, studentKaids: $studentKaids, dueDate: $dueDate}
  ) {
    assignment {
      id
      dueDate
      __typename
    }
    __typename
  }
}`,
  updateSubscriptionByToken: `mutation updateSubscriptionByToken($token: String!, $subscribe: Boolean!) {
  updateSubscriptionByToken(token: $token, subscribe: $subscribe) {
    success
    __typename
  }
}`,
  updateSubscriptionFromToken: `mutation updateSubscriptionFromToken($token: String!, $subscribe: Boolean!) {
  updateSubscriptionByToken(token: $token, subscribe: $subscribe) {
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  updateTalkthroughProgress: `mutation updateTalkthroughProgress($fullyWatched: Boolean!, $lastMsWatched: Float!, $lessonId: ID!, $msDuration: Int!, $msWatched: Float!, $programId: ID!, $updateProgress: Boolean!) {
  updateTalkthroughProgress(
    input: {fullyWatched: $fullyWatched, lastMsWatched: $lastMsWatched, lessonId: $lessonId, msDuration: $msDuration, msWatched: $msWatched, programId: $programId, updateProgress: $updateProgress}
  ) {
    actionResults {
      pointsEarned {
        points
        __typename
      }
      notificationsAdded {
        badges
        avatarParts
        readable
        urgent
        toast
        continueUrl
        __typename
      }
      tutorialNodeProgress {
        contentId
        progress
        __typename
      }
      userProfile {
        countVideosCompleted
        points
        countBrandNewNotifications
        __typename
      }
      __typename
    }
    programProgress {
      completionStatus
      content {
        id
        contentKind
        __typename
      }
      points
      lastMsWatched
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  updateTeacherCampaignProgress: `mutation updateTeacherCampaignProgress($campaignId: ID!) {
  teacherCampaignProgressUpdate(campaignId: $campaignId) {
    progress: teacherCampaignProgress {
      id
      completedSteps
      __typename
    }
    __typename
  }
}`,
  UpdateTeamPageEntry: `mutation UpdateTeamPageEntry($entryId: ID!, $content: TeamPageEntryInput!) {
  updateTeamPageEntry(entryId: $entryId, content: $content) {
    updatedEntry {
      ...entry
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}

fragment entry on TeamPageEntryForEditing {
  id
  isPet
  isIntern
  isAlum
  hasPendingChanges
  draftContent {
    id
    name
    altNames
    startDate
    isAlum
    mainPhotoURL
    hoverPhotoURL
    title
    bio
    contactLinks {
      type
      editValue
      editPrefix
      url
      __typename
    }
    __typename
  }
  __typename
}`,
  updateUnderAgeGateParentEmailAsAdminMutation: `mutation updateUnderAgeGateParentEmailAsAdminMutation($parentEmail: String!, $childKaid: String!) {
  updateUnderAgeGateParentEmailAsAdmin(
    parentEmail: $parentEmail
    childKaid: $childKaid
  ) {
    user {
      id
      kaid
      underAgeGate {
        parentEmail
        __typename
      }
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  updateUnderAgeGateParentEmailMutation: `mutation updateUnderAgeGateParentEmailMutation($parentEmail: String!) {
  updateUnderAgeGateParentEmail(parentEmail: $parentEmail) {
    user {
      id
      kaid
      underAgeGate {
        parentEmail
        __typename
      }
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  updateUserArticleProgress: `mutation updateUserArticleProgress($input: UserArticleProgressInput!) {
  updateUserArticleProgress(articleProgressUpdate: $input) {
    actionResults {
      tutorialNodeProgress {
        contentId
        progress
        __typename
      }
      notificationsAdded {
        avatarParts
        badges
        continueUrl
        readable
        toast
        urgent
        __typename
      }
      userProfile {
        countBrandNewNotifications
        countVideosCompleted
        points
        __typename
      }
      __typename
    }
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  UpdateUserRole: `mutation UpdateUserRole($role: UserRole!, $operation: RoleOperation!, $kaid: String) {
  updateUserRole(role: $role, operation: $operation, kaid: $kaid) {
    error {
      code
      __typename
    }
    user {
      id
      isTeacher
      isParent
      __typename
    }
    __typename
  }
}`,
  updateUserVideoProgress: `mutation updateUserVideoProgress($input: UserVideoProgressInput!) {
  updateUserVideoProgress(videoProgressUpdate: $input) {
    videoItemProgress {
      content {
        id
        progressKey
        ... on Video {
          downloadUrls
          __typename
        }
        __typename
      }
      lastSecondWatched
      secondsWatched
      lastWatched
      points
      started
      completed
      __typename
    }
    actionResults {
      pointsEarned {
        points
        __typename
      }
      tutorialNodeProgress {
        contentId
        progress
        __typename
      }
      userProfile {
        countVideosCompleted
        points
        countBrandNewNotifications
        __typename
      }
      notificationsAdded {
        badges
        avatarParts
        readable
        urgent
        toast
        continueUrl
        __typename
      }
      ... on VideoActionResults {
        currentTask {
          id
          content {
            id
            __typename
          }
          pointBounty
          __typename
        }
        __typename
      }
      __typename
    }
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  userExerciseCacheMutations: `mutation userExerciseCacheMutations($kaid: String!) {
  clearUserExerciseCache(kaid: $kaid) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  VoteEntityMutation: `mutation VoteEntityMutation($postKey: String!, $voteType: Int!) {
  voteEntity(entityKey: $postKey, voteType: $voteType) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  ForceLinkEmail: `mutation ForceLinkEmail($email: String!, $kaid: String!) {
  forceLinkEmail(email: $email, kaid: $kaid) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  UnlinkEmailForSupport: `mutation UnlinkEmailForSupport($email: String!, $kaid: String!) {
  unlinkEmailForSupport(email: $email, kaid: $kaid) {
    error {
      code
      __typename
    }
    removed
    __typename
  }
}`,
  DisableAIGuide: `mutation DisableAIGuide($kaid: String!) {
  disableAIGuide(kaid: $kaid, reason: DISABLED_BY_USER) {
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  UpdateSubscriptionByToken: `mutation UpdateSubscriptionByToken($token: String!, $subscribe: Boolean!) {
  updateSubscriptionByToken(token: $token, subscribe: $subscribe) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  SetContentEditingStatus: `mutation SetContentEditingStatus($publishEnabled: Boolean, $editingEnabled: Boolean) {
  setContentEditingStatus(
    publishEnabled: $publishEnabled
    editingEnabled: $editingEnabled
  ) {
    contentEditingStatus {
      editingEnabled
      publishEnabled
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  SetGuidePreferences: `mutation SetGuidePreferences($readingLevel: AIGuideReadingLevel, $guideLanguageCode: String, $guideVoiceDescriptor: String, $showDABs: Boolean) {
  setPreferencesForUser(
    readingLevel: $readingLevel
    guideLanguageCode: $guideLanguageCode
    guideVoiceDescriptor: $guideVoiceDescriptor
    showDABs: $showDABs
  ) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  archiveAssignmentMutation: `mutation archiveAssignmentMutation($id: ID!, $curationNodeLevel: MasteryAssignmentCurationNodeLevel!) {
  archiveMasteryAssignments(
    archiveMasteryAssignmentsInputs: [{curationNodeLevel: $curationNodeLevel, id: $id}]
  ) {
    assignments {
      id
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  StopResponse: `mutation StopResponse($input: StopResponseInput!) {
  stopResponse(input: $input) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  createAIGuidePrompt: `mutation createAIGuidePrompt($name: String!, $description: String!) {
  createAIGuidePrompt(name: $name, description: $description) {
    prompt {
      id
      name
      description
      __typename
    }
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  createOrUpdateAIGuidePromptDraft: `mutation createOrUpdateAIGuidePromptDraft($promptName: String!, $hashBeforeUpdate: String, $newIsReadyForReview: Boolean!, $newReleaseNotes: String!, $newPromptText: String!, $newConfigJSON: JSONString!) {
  createOrUpdateAIGuidePromptDraft(
    promptName: $promptName
    hashBeforeUpdate: $hashBeforeUpdate
    newIsReadyForReview: $newIsReadyForReview
    newReleaseNotes: $newReleaseNotes
    newPromptText: $newPromptText
    newConfigJSON: $newConfigJSON
  ) {
    prompt {
      id
      draft {
        hash
        isReadyForReview
        releaseNotes
        promptText
        configJSON
        tokenCount
        __typename
      }
      __typename
    }
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  publishAIGuidePromptVersion: `mutation publishAIGuidePromptVersion($promptName: String!, $hash: String!) {
  publishAIGuidePromptVersion(promptName: $promptName, hash: $hash) {
    promptVersion {
      id
      versionNumber
      releaseNotes
      promptText
      configJSON
      __typename
    }
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  editAssignmentMutation: `mutation editAssignmentMutation($id: ID!, $curationNodeLevel: MasteryAssignmentCurationNodeLevel!, $dueDate: DateTime!, $students: [ID]!) {
  updateMasteryAssignment(
    updateMasteryAssignmentInput: {id: $id, curationNodeLevel: $curationNodeLevel, dueDate: $dueDate, studentKaids: $students}
  ) {
    assignment {
      id
      type: curationNodeLevel
      dueDate
      course {
        id
        translatedTitle
        iconUrl
        __typename
      }
      studentData {
        kaid
        status
        __typename
      }
      unit {
        id
        translatedTitle
        iconUrl
        __typename
      }
      studentProgressMedian
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  createMasteryAssignmentsMutation: `mutation createMasteryAssignmentsMutation($input: CreateMasteryAssignmentsInput!) {
  createMasteryAssignments(input: $input) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  sendAiGuideDisabledTestEmail: `mutation sendAiGuideDisabledTestEmail($reason: ReasonForDisablingAIGuide!) {
  sendAiGuideDisabledTestEmail(reason: $reason) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  sendAiGuideNotEligibleTestEmail: `mutation sendAiGuideNotEligibleTestEmail($reason: ReasonForDisablingAIGuide!) {
  sendAiGuideNotEligibleTestEmail(reason: $reason) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  BulkReviewThreadModeration: `mutation BulkReviewThreadModeration($threadIds: [String!]!) {
  bulkReviewThreadModeration(threadIds: $threadIds) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  CloseThread: `mutation CloseThread($input: String!) {
  closeThread(threadId: $input) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  districtDryRunMutation: `mutation districtDryRunMutation($districtID: String!, $dryRun: Boolean!) {
  provisionKhanmigoDistrict(districtID: $districtID, dryRun: $dryRun) {
    error {
      code
      __typename
    }
    __typename
  }
}
`,
  districtKhanmigoProvisioningMutation: `mutation districtKhanmigoProvisioningMutation($districtID: String!, $dryRun: Boolean!) {
  provisionKhanmigoDistrict(districtID: $districtID, dryRun: $dryRun) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  createProduct: `mutation createProduct($input: MutateProductInput!) {
  createProduct(input: $input) {
    product {
      id
      name
      isActive
      description
      extProductID
      validationBillingCountries
      prices {
        currency
        extProductID
        id
        recurringInterval
        recurringIntervalCount
        type
        unitAmount
        __typename
      }
      __typename
    }
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  updateProduct: `mutation updateProduct($id: ID!, $input: MutateProductInput!) {
  updateProduct(id: $id, input: $input) {
    product {
      id
      name
      isActive
      description
      extProductID
      validationBillingCountries
      prices {
        currency
        extProductID
        id
        recurringInterval
        recurringIntervalCount
        type
        unitAmount
        __typename
      }
      __typename
    }
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  EnableAIGuideDevadmin: `mutation EnableAIGuideDevadmin($kaid: String!) {
  enableAIGuide(kaid: $kaid) {
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  setClassTestResultsReviewDate: `mutation setClassTestResultsReviewDate($classroomDescriptor: String!, $studentKaids: [String!]!, $reviewDate: DateTime!) {
  setClassTestResultsReviewDate(
    classroomDescriptor: $classroomDescriptor
    studentKaids: $studentKaids
    reviewDate: $reviewDate
  ) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  createStripeSession: `mutation createStripeSession($priceID: String!, $paymentFrequency: PaymentFrequency!, $cancelURL: String!, $successURL: String!) {
  createStripeSession(
    priceID: $priceID
    paymentFrequency: $paymentFrequency
    cancelURL: $cancelURL
    successURL: $successURL
  ) {
    redirectURL
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  RemoveGuideCooldown: `mutation RemoveGuideCooldown($cooldown: RemoveCooldownInput!) {
  removeCooldown(cooldown: $cooldown) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  SetGuideCooldown: `mutation SetGuideCooldown($cooldown: SetCooldownInput!) {
  setCooldown(cooldown: $cooldown) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  addDistrictCourseProgressDateRange: `mutation addDistrictCourseProgressDateRange($selectedNodeID: String!, $dateRange: CustomDateRange!) {
  addDistrictCourseProgressDateRange(
    selectedNodeID: $selectedNodeID
    dateRange: $dateRange
  ) {
    dateRanges {
      from
      isCustom
      isInProgress
      lastUpdatedDate
      numDays
      rangeType
      upTo
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  removeDistrictCourseProgressDateRanges: `mutation removeDistrictCourseProgressDateRanges($selectedNodeID: String!, $dateRanges: [CustomDateRange!]!) {
  removeDistrictCourseProgressDateRanges(
    selectedNodeID: $selectedNodeID
    dateRanges: $dateRanges
  ) {
    dateRanges {
      from
      isCustom
      isInProgress
      lastUpdatedDate
      numDays
      rangeType
      upTo
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  setCollectingInterests: `mutation setCollectingInterests($kaid: String!, $collect: Boolean!) {
  setCollectInterests(kaid: $kaid, collect: $collect) {
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  deleteAllGuideInterests: `mutation deleteAllGuideInterests($kaid: String!) {
  deleteInterests(kaid: $kaid) {
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  deleteGuideInterest: `mutation deleteGuideInterest($kaid: String!, $key: String!) {
  deleteInterest(kaid: $kaid, combinedKey: $key) {
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  contentEditorEditChallenge: `mutation contentEditorEditChallenge($input: EditChallengeInput!, $sha: String!) {
  editChallenge(input: $input, sha: $sha) {
    challenge {
      ...ChallengeRevision
      __typename
    }
    error {
      code
      debugMessage
      conflictSha
      __typename
    }
    __typename
  }
}

fragment ChallengeRevision on ChallengeRevision {
  id
  contentId
  contentKind
  sha
  doNotPublish
  slug
  listed
  title
  description
  authorName
  code
  codeFormat
  tests
  testsFormat
  height
  width
  userAuthoredContentType
  customTitleTag
  customDescriptionTag
  sourceKaLocale
  __typename
}`,
  sendAiGuideDisabledDuringDistrictActivationTestEmail: `mutation sendAiGuideDisabledDuringDistrictActivationTestEmail {
  sendAiGuideDisabledDuringDistrictActivationTestEmail {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  sendDistrictKhamigoSevereFlagNotificationTestEmail: `mutation sendDistrictKhamigoSevereFlagNotificationTestEmail {
  sendDistrictKhamigoSevereFlagNotificationTestEmail {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  csEditorEditProject: `mutation csEditorEditProject($input: EditProjectInput!, $sha: String!) {
  editProject(input: $input, sha: $sha) {
    project {
      ...ProjectRevision
      __typename
    }
    error {
      code
      conflictSha
      debugMessage
      __typename
    }
    __typename
  }
}

fragment ProjectRevision on ProjectRevision {
  id
  contentId
  contentKind
  slug
  description
  listed
  title
  sha
  code
  doNotPublish
  projectEval
  __typename
}`,
  associateThreadWithFeedback: `mutation associateThreadWithFeedback($essaySessionID: String!, $feedbackID: String!, $threadID: String!) {
  associateThreadWithFeedback(
    essaySessionID: $essaySessionID
    feedbackID: $feedbackID
    threadID: $threadID
  ) {
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  createEssaySession: `mutation createEssaySession($essayText: String!, $essayVersion: Int!, $essayInstructions: String!, $studentGradeLevel: Int!, $paragraphIDToParagraphNumbers: [ParagraphIDToParagraphNumbersInputEntry!]!) {
  createEssaySession(
    essayInstructions: $essayInstructions
    essayText: $essayText
    essayVersion: $essayVersion
    studentGradeLevel: $studentGradeLevel
    paragraphIDToParagraphNumbers: $paragraphIDToParagraphNumbers
  ) {
    essaySessionID
    error {
      debugMessage
      __typename
    }
    __typename
  }
}`,
  saveLatestEssaySession: `mutation saveLatestEssaySession($essaySessionID: String!, $essayInstructions: String!, $studentGradeLevel: Int!, $essayText: String!, $essayTitle: String!, $essayVersion: Int!, $paragraphIDToParagraphNumbers: [ParagraphIDToParagraphNumbersInputEntry!]!) {
  saveLatestEssayText(
    essaySessionID: $essaySessionID
    essayInstructions: $essayInstructions
    studentGradeLevel: $studentGradeLevel
    essayText: $essayText
    essayTitle: $essayTitle
    essayVersion: $essayVersion
    paragraphIDToParagraphNumbers: $paragraphIDToParagraphNumbers
    stage: REVISING
  ) {
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  updateEssayFeedbackResolved: `mutation updateEssayFeedbackResolved($essaySessionID: String!, $feedbackID: String!, $isResolved: Boolean!) {
  updateEssayFeedbackResolved(
    essaySessionID: $essaySessionID
    feedbackID: $feedbackID
    isResolved: $isResolved
  ) {
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  disableSevereModerationAlertsForAdmin: `mutation disableSevereModerationAlertsForAdmin($udiID: String!) {
  disableSevereModerationAlertsForAdmin(udiID: $udiID) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  enableSevereModerationAlertsForAdmins: `mutation enableSevereModerationAlertsForAdmins($udiIDs: [String!]!) {
  enableSevereModerationAlertsForAdmins(udiIDs: $udiIDs) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  aiGuideApplySwagMutation: `mutation aiGuideApplySwagMutation($kaid: String!, $swagId: String!) {
  applyAiGuideSwag(kaid: $kaid, swagID: $swagId) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  aiGuideClaimSwagMutation: `mutation aiGuideClaimSwagMutation($kaid: String!, $swagId: String!) {
  claimAiGuideSwag(kaid: $kaid, swagID: $swagId) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  finishEssaySession: `mutation finishEssaySession($essaySessionID: String!) {
  finishEssaySession(essaySessionID: $essaySessionID) {
    error {
      debugMessage
      __typename
    }
    __typename
  }
}`,
  resetProjectProgress: `mutation resetProjectProgress($programId: ID!, $lessonId: ID!) {
  resetProjectProgress(input: {programId: $programId, lessonId: $lessonId}) {
    programProgress {
      completionStatus
      content {
        id
        contentKind
        __typename
      }
      points
      stashedCode
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  resetChallengeProgress: `mutation resetChallengeProgress($programId: ID!, $lessonId: ID!) {
  resetChallengeProgress(input: {programId: $programId, lessonId: $lessonId}) {
    programProgress {
      completionStatus
      content {
        id
        contentKind
        __typename
      }
      points
      stashedCode
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  generateTotpTwoFactorSecret: `mutation generateTotpTwoFactorSecret($email: String!) {
  generateTotpTwoFactorSecret(email: $email) {
    totpSecret
    totpProvisioningUri
    error {
      code
      __typename
    }
    __typename
  }
}`,
  aiGuideEnrollViaConversionTrial: `mutation aiGuideEnrollViaConversionTrial($digitalTermsOfServiceAccepted: Boolean!) {
  aiGuideEnrollViaConversionTrial(
    digitalTermsOfServiceAccepted: $digitalTermsOfServiceAccepted
  ) {
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  endFocusMode: `mutation endFocusMode($kaids: [String!]!) {
  removeTeacherDirectedCooldowns(kaids: $kaids) {
    errors {
      code
      debugMessage
      failedFor
      kaids
      __typename
    }
    __typename
  }
}`,
  startFocusMode: `mutation startFocusMode($kaids: [String!]!, $cooldownEnd: DateTime!) {
  setTeacherDirectedCooldowns(kaids: $kaids, cooldownEnd: $cooldownEnd) {
    errors {
      code
      debugMessage
      failedFor
      kaids
      __typename
    }
    __typename
  }
}`,
  contentEditorEditExercise: `mutation contentEditorEditExercise($sha: String!, $input: EditExercisePropertiesInput!) {
  editExerciseProperties(sha: $sha, input: $input) {
    exercise {
      ...ExerciseRevision
      __typename
    }
    error {
      code
      conflictSha
      debugMessage
      __typename
    }
    __typename
  }
}

fragment AssessmentItemRevision on AssessmentItemRevision {
  id
  contentKind
  contentId
  sha
  creationDate
  name
  authorNames
  itemData
  itemShapeType
  perseusApiMajorVersion
  requiresScreenOrMouse
  tags
  __typename
}

fragment ExerciseRevision on ExerciseRevision {
  id
  contentKind
  contentId
  sha
  creationDate
  authorKey
  doNotPublish
  sourceKaLocale
  sourceLanguage: sourceKaLocale
  slug
  name: slug
  title
  displayName: title
  prettyDisplayName: title
  description
  descriptionHtml: description
  customTitleTag
  customDescriptionTag
  thumbnailData
  thumbnailCache
  sponsored
  alternateSlugs
  authorName
  covers
  prerequisites
  relatedContent
  assessmentItemTags
  difficultyLevel
  suggestedCompletionCriteria
  trackingDocumentUrl
  problemTypeKind
  numQuestionsPerProblemType
  problemTypes {
    name
    relatedVideos
    items {
      id
      sha
      perseusApiMajorVersion
      requiresScreenOrMouse
      __typename
    }
    __typename
  }
  assessmentItems {
    ...AssessmentItemRevision
    __typename
  }
  listed
  hasLintErrors
  __typename
}`,
  spinOffPythonProgram: `mutation spinOffPythonProgram($originProgramOrContentId: String!, $originProgramKind: SpinoffOriginKind!, $originRevisionId: ID, $title: String!, $revision: ProgramRevisionInput!, $curationNodeSlug: String!) {
  spinOffProgram(
    origin: {programOrContentId: $originProgramOrContentId, kind: $originProgramKind}
    originRevisionId: $originRevisionId
    title: $title
    revision: $revision
    curationNodeSlug: $curationNodeSlug
  ) {
    program {
      id
      url
      __typename
    }
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  createKhanmigoCheckoutStripeSession: `mutation createKhanmigoCheckoutStripeSession($priceID: String!, $paymentFrequency: PaymentFrequency!, $cancelURL: String!, $successURL: String!, $couponID: String) {
  createStripeSession(
    priceID: $priceID
    paymentFrequency: $paymentFrequency
    cancelURL: $cancelURL
    successURL: $successURL
    couponID: $couponID
  ) {
    redirectURL
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  enableTotpTwoFactor: `mutation enableTotpTwoFactor($secret: String!, $code: String!) {
  enableTotpTwoFactor(secret: $secret, code: $code) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  contentEditorEditAIGuideActivity: `mutation contentEditorEditAIGuideActivity($sha: String!, $input: EditAIGuideActivityInput!) {
  editAIGuideActivity(sha: $sha, input: $input) {
    aiGuideActivity {
      ...AIGuideActivityRevision
      __typename
    }
    error {
      code
      conflictSha
      debugMessage
      __typename
    }
    __typename
  }
}

fragment AIGuideActivityRevision on AIGuideActivityRevision {
  id
  contentId
  contentKind
  slug
  sha
  listed
  __typename
}`,
  SubmitActivityAssignmentMutation: `mutation SubmitActivityAssignmentMutation($assignmentID: ID!, $threadID: ID!) {
  submitActivityAssignment(assignmentID: $assignmentID, threadID: $threadID) {
    notification {
      classroomName
      firstCompletion
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  CreateKhanLibraryFolder: `mutation CreateKhanLibraryFolder($name: String!, $kaLocale: String!) {
  createFolder(name: $name, kaLocale: $kaLocale) {
    error {
      code
      debugMessage
      __typename
    }
    folder {
      id
      kaLocale
      name
      __typename
    }
    __typename
  }
}`,
  MarkDistrictClass: `mutation MarkDistrictClass($classDescriptor: String!, $eduOrgID: String!) {
  markDistrictClass(classDescriptor: $classDescriptor, eduOrgID: $eduOrgID) {
    succeeded
    __typename
  }
}`,
  UnmarkDistrictClass: `mutation UnmarkDistrictClass($classDescriptor: String!) {
  unmarkDistrictClass(classDescriptor: $classDescriptor) {
    succeeded
    __typename
  }
}`,
  generateTwoFactorRecoveryCodes: `mutation generateTwoFactorRecoveryCodes {
  generateTwoFactorRecoveryCodes {
    recoveryCodes
    error {
      code
      __typename
    }
    __typename
  }
}`,
  editAdminUDIMutation: `mutation editAdminUDIMutation($urlsafeKey: ID!, $params: WriteAdminUDIParams!) {
  editAdminUDI(urlsafeKey: $urlsafeKey, params: $params) {
    adminUDI {
      id
      canManageAdmins
      __typename
    }
    error {
      code
      conflictingUDI {
        id
        districtProvidedEmail
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  markDeletedAdminUDIMutation: `mutation markDeletedAdminUDIMutation($urlsafeKey: ID!) {
  markDeletedAdminUDI(urlsafeKey: $urlsafeKey) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  resendActivationEmailMutation: `mutation resendActivationEmailMutation($urlsafeKey: ID!) {
  resendActivationEmail(urlsafeKey: $urlsafeKey) {
    emailSent
    error {
      code
      __typename
    }
    __typename
  }
}`,
  setUpAdminMutation: `mutation setUpAdminMutation($params: WriteAdminUDIParams!) {
  setUpAndInviteAdmin(params: $params) {
    adminUDI {
      id
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  createPythonProgram: `mutation createPythonProgram($title: String!, $revision: ProgramRevisionInput!, $curationNodeSlug: String!) {
  createProgram(
    title: $title
    revision: $revision
    curationNodeSlug: $curationNodeSlug
    userAuthoredContentType: PYTHON
    codeFormat: MULTI_FILE_JSON
  ) {
    program {
      id
      url
      __typename
    }
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  SetPartnershipSchoolYear: `mutation SetPartnershipSchoolYear($partnershipID: String!, $schoolYearDates: DistrictSchoolYearInput!) {
  setPartnershipSchoolYear(
    partnershipID: $partnershipID
    schoolYearDates: $schoolYearDates
  ) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  deleteEssaySession: `mutation deleteEssaySession($id: String!) {
  deleteEssaySession(essaySessionID: $id) {
    error {
      debugMessage
      __typename
    }
    __typename
  }
}`,
  deletePythonProgram: `mutation deletePythonProgram($programId: ID!) {
  deleteProgram(programID: $programId) {
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  ProvisionKhanmigoPartnership: `mutation ProvisionKhanmigoPartnership($partnershipID: String!, $dryRun: Boolean!) {
  provisionKhanmigoPartnership(partnershipID: $partnershipID, dryRun: $dryRun) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  RosterPartnership: `mutation RosterPartnership($partnershipID: String!) {
  rosterPartnership(partnershipID: $partnershipID) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  SetPartnershipKhanmigoPreference: `mutation SetPartnershipKhanmigoPreference($partnershipID: String!, $khanmigoPreference: KhanmigoEnrollmentForPartnership!) {
  setPartnershipKhanmigoPreference(
    partnershipID: $partnershipID
    khanmigoPreference: $khanmigoPreference
  ) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  UpdatePartnershipRosterSyncing: `mutation UpdatePartnershipRosterSyncing($partnershipID: String!, $sync: Boolean!) {
  updatePartnershipRosterSyncing(partnershipID: $partnershipID, sync: $sync) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  DeleteKhanLibraryFolder: `mutation DeleteKhanLibraryFolder($folderId: String!) {
  deleteFolder(folderId: $folderId) {
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  updateProgramCategory: `mutation updateProgramCategory($programId: ID!, $category: ProgramCategoryInput) {
  updateProgramSettings(
    programId: $programId
    height: 0
    width: 0
    category: $category
  ) {
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  setUpAdminsMutation: `mutation setUpAdminsMutation($params: [WriteAdminUDIParams!]!) {
  setUpAdminUDIs(params: $params) {
    adminUDI {
      id
      __typename
    }
    error {
      code
      conflictingUDI {
        id
        districtProvidedEmail
        districtProvidedFirstName
        districtProvidedLastName
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  saveFreeForTeachersEligibilityForm: `mutation saveFreeForTeachersEligibilityForm($teacherRoleOp: RoleOperation!, $birthdate: String!) {
  setSettings(birthdate: $birthdate) {
    errors {
      code
      __typename
    }
    __typename
  }
  updateUserRole(role: TEACHER, operation: $teacherRoleOp) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  CancelStripeSubscription: `mutation CancelStripeSubscription($subscriptionId: String!) {
  cancelStripeSubscription(subscriptionId: $subscriptionId) {
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  contentEditorCreateChallenge: `mutation contentEditorCreateChallenge($input: NewChallengeInput!) {
  createChallenge(input: $input) {
    challenge {
      ...ChallengeRevision
      __typename
    }
    error {
      code
      conflictSha
      debugMessage
      __typename
    }
    __typename
  }
}

fragment ChallengeRevision on ChallengeRevision {
  id
  contentId
  contentKind
  sha
  doNotPublish
  slug
  listed
  title
  description
  authorName
  code
  codeFormat
  tests
  testsFormat
  height
  width
  userAuthoredContentType
  customTitleTag
  customDescriptionTag
  sourceKaLocale
  __typename
}`,
  updateShowDiscussions: `mutation updateShowDiscussions($adminAggregateID: String!, $enable: Boolean!) {
  updateShowDiscussionsForSubDistricts(
    adminAggregateID: $adminAggregateID
    enable: $enable
  ) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  freeForTeachersEnroll: `mutation freeForTeachersEnroll($termsUrl: String!, $userAcceptedTerms: Boolean!, $countryCode: String!) {
  activateTeacherTools(
    termsUrl: $termsUrl
    userAcceptedTerms: $userAcceptedTerms
    countryCode: $countryCode
  ) {
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  coeditingAutosave: `mutation coeditingAutosave($configName: String!, $threadId: String!, $title: String!, $prefix: String!, $selection: String!, $suffix: String!, $persona: AIGuidePersona!) {
  saveCoeditingSnapshot(
    configName: $configName
    threadId: $threadId
    title: $title
    prefix: $prefix
    selection: $selection
    suffix: $suffix
    persona: $persona
  ) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  contentEditorCreateProject: `mutation contentEditorCreateProject($input: NewProjectInput!) {
  createProject(input: $input) {
    project {
      ...ProjectRevision
      __typename
    }
    error {
      code
      conflictSha
      debugMessage
      __typename
    }
    __typename
  }
}

fragment ProjectRevision on ProjectRevision {
  id
  contentId
  contentKind
  sha
  doNotPublish
  slug
  listed
  title
  description
  projectEval
  authorName
  code
  codeFormat
  customTitleTag
  customDescriptionTag
  sourceKaLocale
  __typename
}`,
  activateNewAIGuideAccessPlan: `mutation activateNewAIGuideAccessPlan($blueprint: AIGuideAccessPlanDefaultBlueprint!) {
  activateNewAIGuideAccessPlan(blueprint: $blueprint) {
    activatedAccessPlan {
      id
      __typename
    }
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  saveGettingStartedThreadId: `mutation saveGettingStartedThreadId($sessionId: String!, $threadId: String!) {
  setEssaySessionThreadIDs(
    essaySessionID: $sessionId
    gettingStartedThreadID: $threadId
  ) {
    error {
      debugMessage
      __typename
    }
    __typename
  }
}`,
  EnableDisableChildrenAIGuide: `mutation EnableDisableChildrenAIGuide($enableKAIDs: [String!]!, $disableKAIDs: [String!]!) {
  aiGuideDeactivateChildAccounts(childKAIDs: $disableKAIDs) {
    errors {
      code
      debugMessage
      kaid
      __typename
    }
    __typename
  }
  aiGuideActivateChildAccounts(childKAIDs: $enableKAIDs) {
    errors {
      code
      debugMessage
      kaid
      __typename
    }
    __typename
  }
}`,
  saveThreadIds: `mutation saveThreadIds($sessionId: String!, $gettingStartedThreadId: String, $outliningThreadId: String, $draftingThreadId: String) {
  setEssaySessionThreadIDs(
    essaySessionID: $sessionId
    gettingStartedThreadID: $gettingStartedThreadId
    outliningThreadID: $outliningThreadId
    draftingThreadID: $draftingThreadId
  ) {
    error {
      debugMessage
      __typename
    }
    __typename
  }
}`,
  writingCoachCreateEssaySession: `mutation writingCoachCreateEssaySession($assignmentTitle: String!, $essayText: String!, $essayType: EssayType!, $essayVersion: Int!, $essayInstructions: String!, $minimumWordCount: Int, $studentGradeLevel: Int!, $paragraphIDToParagraphNumbers: [ParagraphIDToParagraphNumbersInputEntry!]!, $sampleEssayName: String) {
  createEssaySession(
    essayInstructions: $essayInstructions
    essayText: $essayText
    essayTitle: $assignmentTitle
    essayType: $essayType
    essayVersion: $essayVersion
    minimumWordCount: $minimumWordCount
    studentGradeLevel: $studentGradeLevel
    paragraphIDToParagraphNumbers: $paragraphIDToParagraphNumbers
    sampleEssayName: $sampleEssayName
  ) {
    essaySessionID
    error {
      debugMessage
      __typename
    }
    __typename
  }
}`,
  activateAIGuideAccessPlanByID: `mutation activateAIGuideAccessPlanByID($id: ID!) {
  activateAIGuideAccessPlanByID(id: $id) {
    activatedAccessPlan {
      id
      __typename
    }
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  deactivateAIGuideAccessPlanByID: `mutation deactivateAIGuideAccessPlanByID($accessPlanID: ID!, $reasons: [ReasonForDisablingAIGuide!]!, $explanation: String!) {
  deactivateAIGuideAccessPlanByID(
    accessPlanID: $accessPlanID
    reasons: $reasons
    explanation: $explanation
  ) {
    deactivatedAccessPlan {
      id
      __typename
    }
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  saveLatestOutline: `mutation saveLatestOutline($essaySessionID: String!, $outline: String!, $outlineVersion: Int!) {
  saveLatestEssayOutline(
    essaySessionID: $essaySessionID
    outline: $outline
    outlineVersion: $outlineVersion
  ) {
    error {
      debugMessage
      __typename
    }
    __typename
  }
}`,
  saveLatestEssayText: `mutation saveLatestEssayText($essayInstructions: String!, $essaySessionID: String!, $essayText: String!, $essayTitle: String!, $essayVersion: Int!, $paragraphIDToParagraphNumbers: [ParagraphIDToParagraphNumbersInputEntry!]!, $studentGradeLevel: Int!, $stage: WritingCoachEssayEditingStage!) {
  saveLatestEssayText(
    essayInstructions: $essayInstructions
    essaySessionID: $essaySessionID
    essayText: $essayText
    essayTitle: $essayTitle
    essayVersion: $essayVersion
    paragraphIDToParagraphNumbers: $paragraphIDToParagraphNumbers
    studentGradeLevel: $studentGradeLevel
    stage: $stage
  ) {
    error {
      debugMessage
      __typename
    }
    __typename
  }
}`,
  clearAdminUDIInfoMutation: `mutation clearAdminUDIInfoMutation($urlsafeKey: ID!) {
  clearAdminUDIInfo(urlsafeKey: $urlsafeKey) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  deleteEmailTemplate: `mutation deleteEmailTemplate($id: ID!) {
  deleteEmailTemplate(id: $id) {
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  upsertEmailTemplate: `mutation upsertEmailTemplate($id: ID!, $name: String!, $textTemplate: String!, $htmlTemplate: String!, $exampleData: Map!) {
  upsertEmailTemplate(
    id: $id
    name: $name
    htmlTemplate: $htmlTemplate
    textTemplate: $textTemplate
    exampleData: $exampleData
  ) {
    updatedTemplate {
      id
      name
      htmlTemplate
      textTemplate
      exampleData
      __typename
    }
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  reportPastedContent: `mutation reportPastedContent($essaySessionId: ID!, $pastedText: String!, $pasteLocation: EssayPasteLocation!) {
  reportEssayPastedContent(
    essaySessionID: $essaySessionId
    pastedText: $pastedText
    pasteLocation: $pasteLocation
  ) {
    error {
      debugMessage
      __typename
    }
    __typename
  }
}`,
  writingCoachUpdateEssayFeedbackResolved: `mutation writingCoachUpdateEssayFeedbackResolved($essaySessionID: String!, $feedbackID: String!, $isResolved: Boolean!) {
  updateEssayFeedbackResolved(
    essaySessionID: $essaySessionID
    feedbackID: $feedbackID
    isResolved: $isResolved
  ) {
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  sendEmail: `mutation sendEmail($email: SendEmailInput!) {
  sendEmail(email: $email) {
    emailsSent
    errorMessages
    errors {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  completeEssaySession: `mutation completeEssaySession($essaySessionID: String!) {
  completeEssaySession(essaySessionID: $essaySessionID) {
    error {
      debugMessage
      __typename
    }
    notification {
      classroomName
      __typename
    }
    __typename
  }
}`,
  setTeacherSchoolAffiliation: `mutation setTeacherSchoolAffiliation($countryCode: String!, $eduorgKeyId: ID!) {
  userSettingsSetAffiliationCountryCode(countryCode: $countryCode) {
    error {
      code
      __typename
    }
    __typename
  }
  setEduorgAffiliation(eduorgKeyId: $eduorgKeyId) {
    user {
      id
      schoolAffiliation {
        id
        name
        postalCode
        location
        __typename
      }
      affiliationCountryCode
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  disableTotpTwoFactor: `mutation disableTotpTwoFactor($kaid: String!) {
  disableTotpTwoFactor(targetKaid: $kaid) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  getOrCreateEssaySessionForAssignment: `mutation getOrCreateEssaySessionForAssignment($assignmentId: String!) {
  getOrCreateEssaySessionForAssignment(assignmentID: $assignmentId) {
    essaySession {
      id
      essayMode
      essayTitle
      lastUpdated
      currentStage
      assignmentId: assignmentID
      completed
      sampleEssayName
      __typename
    }
    error {
      debugMessage
      __typename
    }
    __typename
  }
}`,
  createAIGuideConversationTestCase: `mutation createAIGuideConversationTestCase($input: CreateAIGuideConversationTestCaseInput!) {
  createAIGuideConversationTestCase(input: $input) {
    testCase {
      id
      owningTeam
      name
      description
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  deleteAIGuideConversationTestCase: `mutation deleteAIGuideConversationTestCase($id: ID!) {
  deleteAIGuideConversationTestCase(id: $id) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  removeAIGuideConversationTestCaseInteraction: `mutation removeAIGuideConversationTestCaseInteraction($id: ID!, $interactionId: ID!) {
  removeAIGuideConversationTestCaseInteraction(
    id: $id
    interactionId: $interactionId
  ) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  updateAIGuideConversationTestCase: `mutation updateAIGuideConversationTestCase($id: ID!, $input: UpdateAIGuideConversationTestCaseInput!) {
  updateAIGuideConversationTestCase(id: $id, input: $input) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  upsertLegalDoc: `mutation upsertLegalDoc($legalDocument: LegalDocumentInput!, $notes: String!) {
  upsertLegalDocument(legalDocument: $legalDocument, notes: $notes) {
    legalDocument {
      id
      name
      slug
      isArchived
      kaLocales
      countryCodes
      draftContent
      __typename
    }
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  publishLegalDocument: `mutation publishLegalDocument($id: ID!, $notes: String!) {
  createLegalDocumentVersion(id: $id, notes: $notes) {
    version {
      id
      content
      publishedByKaid
      publishedAt
      __typename
    }
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  setLegalDocArchived: `mutation setLegalDocArchived($legalDocID: ID!, $isArchived: Boolean!) {
  setLegalDocumentArchivedStatus(legalDocID: $legalDocID, isArchived: $isArchived) {
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  reportEssayTextPastedContent: `mutation reportEssayTextPastedContent($essaySessionId: ID!, $textBeforePaste: String!, $essayVersionBeforePaste: Int!, $stage: WritingCoachEssayEditingStage!, $selectionStart: Int!, $selectionEnd: Int!, $pastedText: String!) {
  reportEssayTextPastedContent(
    essaySessionID: $essaySessionId
    textBeforePaste: $textBeforePaste
    essayVersionBeforePaste: $essayVersionBeforePaste
    stage: $stage
    selectionStart: $selectionStart
    selectionEnd: $selectionEnd
    pastedText: $pastedText
  ) {
    error {
      debugMessage
      __typename
    }
    __typename
  }
}`,
  reportOutlinePastedContent: `mutation reportOutlinePastedContent($essaySessionId: ID!, $outlineBeforePaste: String!, $outlineVersionBeforePaste: Int!, $pasteLocation: EssayOutlinePasteLocation!, $pasteLocationPointer: String!, $selectionStart: Int!, $selectionEnd: Int!, $pastedText: String!) {
  reportEssayOutlinePastedContent(
    essaySessionID: $essaySessionId
    outlineBeforePaste: $outlineBeforePaste
    outlineVersionBeforePaste: $outlineVersionBeforePaste
    pasteLocation: $pasteLocation
    pasteLocationPointer: $pasteLocationPointer
    selectionStart: $selectionStart
    selectionEnd: $selectionEnd
    pastedText: $pastedText
  ) {
    error {
      debugMessage
      __typename
    }
    __typename
  }
}`,
  AddUserParentRole: `mutation AddUserParentRole($kaid: String) {
  updateUserRole(kaid: $kaid, role: PARENT, operation: ADD) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  EditKhanLibraryFolder: `mutation EditKhanLibraryFolder($folderId: String!, $name: String!) {
  editFolder(folderId: $folderId, name: $name) {
    error {
      code
      debugMessage
      __typename
    }
    folder {
      id
      name
      __typename
    }
    __typename
  }
}`,
  deleteEkbEntry: `mutation deleteEkbEntry($id: String!) {
  deleteExpandedKnowledgeBaseEntry(id: $id) {
    error {
      debugMessage
      code
      __typename
    }
    __typename
  }
}`,
  upsertExpandedKnowledgeBaseEntry: `mutation upsertExpandedKnowledgeBaseEntry($id: String!, $category: String!, $text: String!, $url: String!) {
  upsertExpandedKnowledgeBaseEntry(
    id: $id
    category: $category
    text: $text
    url: $url
  ) {
    error {
      code
      debugMessage
      __typename
    }
    upsertResult {
      upsertedCount
      code
      details {
        value
        __typename
      }
      message
      __typename
    }
    __typename
  }
}`,
  updateAIGuideConversationTestCaseInteraction: `mutation updateAIGuideConversationTestCaseInteraction($testCaseId: ID!, $interactionId: ID!, $input: UpdateAIGuideConversationTestCaseInteractionInput!) {
  updateAIGuideConversationTestCaseInteraction(
    testCaseId: $testCaseId
    interactionId: $interactionId
    input: $input
  ) {
    testCase {
      id
      interactions {
        threadId
        interactionId
        success
        name
        __typename
      }
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  freeForTeachersReferralMutation: `mutation freeForTeachersReferralMutation($referralCode: String!) {
  trackUserReferralRedemption(referralCode: $referralCode) {
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  sendLearnerParentAIGuideActivatedTestEmail: `mutation sendLearnerParentAIGuideActivatedTestEmail {
  sendLearnerParentAIGuideActivatedTestEmail {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  sendTeacherToolsActivatedTestEmail: `mutation sendTeacherToolsActivatedTestEmail {
  sendTeacherToolsActivatedTestEmail {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  archiveCoeditingDocument: `mutation archiveCoeditingDocument($threadID: String!) {
  archiveCoeditingDocument(threadID: $threadID) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  getOrCreateAssessmentTask: `mutation getOrCreateAssessmentTask($assessmentId: String!, $growthBookFeatures: String!) {
  getOrCreateAssessmentTask(
    input: {assessmentId: $assessmentId, growthBookFeatures: $growthBookFeatures}
  ) {
    result {
      task {
        ...TaskFragment
        __typename
      }
      __typename
    }
    __typename
  }
}

fragment TaskFragment on AssessmentTask {
  id
  expirationTime
  questionsCompleted
  estimatedQuestionsRemaining
  hasSubmittedLearnerInsightsFeedback
  assessment {
    id
    surveyURL
    __typename
  }
  currentStep {
    stepNumber
    stepId
    type
    assessmentItem {
      id
      exerciseId
      itemData
      __typename
    }
    ... on EYTQuestion {
      conversationStarter
      completionCriteria
      __typename
    }
    __typename
  }
  surveyMonkeyID
  __typename
}`,
  writingCoachAssociateThreadWithFeedback: `mutation writingCoachAssociateThreadWithFeedback($essaySessionID: String!, $feedbackID: String!, $threadID: String!) {
  associateThreadWithFeedback(
    essaySessionID: $essaySessionID
    feedbackID: $feedbackID
    threadID: $threadID
  ) {
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  writingCoachSaveLatestEssaySession: `mutation writingCoachSaveLatestEssaySession($essaySessionID: String!, $essayInstructions: String!, $studentGradeLevel: Int!, $essayText: String!, $essayTitle: String!, $essayVersion: Int!, $paragraphIDToParagraphNumbers: [ParagraphIDToParagraphNumbersInputEntry!]!) {
  saveLatestEssayText(
    essaySessionID: $essaySessionID
    essayInstructions: $essayInstructions
    studentGradeLevel: $studentGradeLevel
    essayText: $essayText
    essayTitle: $essayTitle
    essayVersion: $essayVersion
    paragraphIDToParagraphNumbers: $paragraphIDToParagraphNumbers
    stage: REVISING
  ) {
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  CompleteStandardQuestion: `mutation CompleteStandardQuestion($assessmentId: String!, $stepId: String!, $correct: Boolean!, $response: String!, $userAgent: String!) {
  complete: completeStandardQuestion(
    input: {assessmentId: $assessmentId, stepId: $stepId, correct: $correct, response: $response, userAgent: $userAgent}
  ) {
    result {
      task {
        ...TaskFragment
        __typename
      }
      status
      __typename
    }
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}

fragment TaskFragment on AssessmentTask {
  id
  expirationTime
  questionsCompleted
  estimatedQuestionsRemaining
  hasSubmittedLearnerInsightsFeedback
  assessment {
    id
    surveyURL
    __typename
  }
  currentStep {
    stepNumber
    stepId
    type
    assessmentItem {
      id
      exerciseId
      itemData
      __typename
    }
    ... on EYTQuestion {
      conversationStarter
      completionCriteria
      __typename
    }
    __typename
  }
  surveyMonkeyID
  __typename
}`,
  createUserCertificate: `mutation createUserCertificate($courseID: String!) {
  createUserCertificate(courseID: $courseID) {
    userCertificate {
      id
      kaid
      courseID
      createdAt
      __typename
    }
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  addFavoritedTeacherTool: `mutation addFavoritedTeacherTool($toolID: ID!, $configName: String!) {
  aiGuideAddFavoritedTeacherTool(toolID: $toolID, configName: $configName) {
    favoritedTool {
      id
      configName
      __typename
    }
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  deleteFavoritedTeacherTool: `mutation deleteFavoritedTeacherTool($toolID: ID!, $configName: String!) {
  aiGuideDeleteFavoritedTeacherTool(toolID: $toolID, configName: $configName) {
    favoritedTool {
      id
      configName
      __typename
    }
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  addDistrictGoal: `mutation addDistrictGoal($districtID: String!, $input: DistrictGoalInput!) {
  addDistrictGoal(districtID: $districtID, input: $input) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  activateCanvasTeacherTools: `mutation activateCanvasTeacherTools($termsUrl: String!, $userAcceptedTerms: Boolean!) {
  activateCanvasTeacherTools(
    termsUrl: $termsUrl
    userAcceptedTerms: $userAcceptedTerms
  ) {
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  deleteAssessmentTask: `mutation deleteAssessmentTask($assessmentId: String!) {
  deleteAssessmentTask(input: {assessmentId: $assessmentId}) {
    result {
      deletedTaskId
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  modifyDistrictWithOptions: `mutation modifyDistrictWithOptions($existingDistrictID: ID!, $modifyDistrictOptions: ModifyDistrictOptions!) {
  modifyDistrictWithOptions(
    existingDistrictID: $existingDistrictID
    options: $modifyDistrictOptions
  ) {
    district {
      id
      rosterID
      name
      isKmapDistrict
      isK4dDistrict
      rosterSource
      nweaID
      ncesID
      isTest
      sendActivationEmails
      rosterSyncingEnabled
      goLiveDate
      kaLocale
      schoolYearDates {
        start {
          nthWeek
          dayOfWeek
          month
          __typename
        }
        end {
          nthWeek
          dayOfWeek
          month
          __typename
        }
        __typename
      }
      region
      khanmigoPreference
      khanmigoIncludeNonStudents
      khanmigoIncludeStudents
      khanmigoAdmins
      khanmigoTeachers
      khanmigoStudents
      khanmigoStart
      khanmigoEnd
      khanmigoIncludedUsers {
        id
        districtProvidedEmail
        __typename
      }
      khanmigoExcludedUsers {
        id
        districtProvidedEmail
        __typename
      }
      khanmigoGradeEnrollment {
        id
        districtID
        allOnGrades {
          id
          name
          sortIndex
          __typename
        }
        allOffGrades {
          id
          name
          sortIndex
          __typename
        }
        subsetGrades {
          id
          name
          sortIndex
          __typename
        }
        __typename
      }
      __typename
    }
    khanmigoIncludeUserMissingEmails
    khanmigoExcludeUserMissingEmails
    error {
      code
      __typename
    }
    __typename
  }
}`,
  createDistrictWithOptions: `mutation createDistrictWithOptions($options: CreateDistrictOptions!) {
  createDistrictWithOptions(options: $options) {
    error {
      code
      __typename
    }
    district {
      id
      name
      __typename
    }
    __typename
  }
}`,
  createTransferAuthTokenMutation: `mutation createTransferAuthTokenMutation($canvasProfileKeyName: String) {
  createTransferAuthToken(canvasProfileKeyName: $canvasProfileKeyName) {
    token
    __typename
  }
}`,
  setCanvasInfo: `mutation setCanvasInfo($profileKeyName: String!) {
  setCanvasInfo(profileKeyName: $profileKeyName) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  signUpWithCanvas: `mutation signUpWithCanvas($profileKeyName: String!) {
  signupWithCanvas(profileKeyName: $profileKeyName) {
    error {
      code
      email
      __typename
    }
    __typename
  }
}`,
  ClearCanvasUserId: `mutation ClearCanvasUserId($kaid: String!) {
  setCanvasInfoAsAdmin(kaid: $kaid, canvasUserId: null) {
    error {
      code
      __typename
    }
    user {
      id
      __typename
    }
    __typename
  }
}`,
  addOrEditCourseMasteryTarget: `mutation addOrEditCourseMasteryTarget($districtID: String!, $input: [CourseMasteryTargetInput!]!) {
  addOrEditCourseMasteryTarget(districtID: $districtID, input: $input) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  deleteAllCourseMasteryTargets: `mutation deleteAllCourseMasteryTargets($districtID: String!) {
  deleteAllCourseMasteryTargets(districtID: $districtID) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  addOrEditLearningMinutesTarget: `mutation addOrEditLearningMinutesTarget($districtID: String!, $input: LearningMinutesTargetInput!) {
  addOrEditLearningMinutesTarget(districtID: $districtID, input: $input) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  deleteLearningMinutesTarget: `mutation deleteLearningMinutesTarget($districtID: String!) {
  deleteLearningMinutesTarget(districtID: $districtID) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  copyCoeditingDocument: `mutation copyCoeditingDocument($documentID: String!, $snapshotID: String!) {
  copyCoeditingDocument(documentID: $documentID, snapshotID: $snapshotID) {
    newDocumentID
    error {
      code
      __typename
    }
    __typename
  }
}`,
  addOrEditSkillsTarget: `mutation addOrEditSkillsTarget($districtID: String!, $input: SkillsTargetInput!, $toProficient: Boolean!) {
  addOrEditSkillsTarget(
    districtID: $districtID
    input: $input
    toProficient: $toProficient
  ) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  deleteSkillsTarget: `mutation deleteSkillsTarget($districtID: String!, $toProficient: Boolean!) {
  deleteSkillsTarget(districtID: $districtID, toProficient: $toProficient) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  addOrEditKhanmigoTarget: `mutation addOrEditKhanmigoTarget($districtID: String!, $input: KhanmigoTargetInput!) {
  addOrEditKhanmigoTarget(districtID: $districtID, input: $input) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  deleteKhanmigoTarget: `mutation deleteKhanmigoTarget($districtID: String!) {
  deleteKhanmigoTarget(districtID: $districtID) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  addOrEditActivationTarget: `mutation addOrEditActivationTarget($districtID: String!, $input: ActivationTargetInput!) {
  addOrEditActivationTarget(districtID: $districtID, input: $input) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  deleteActivationTarget: `mutation deleteActivationTarget($districtID: String!) {
  deleteActivationTarget(districtID: $districtID) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  ltiDynamicRegistration: `mutation ltiDynamicRegistration($openIDConfigurationURL: String!, $registrationToken: String!) {
  ltiCanvasDynamicRegistration(
    openIDConfigurationURL: $openIDConfigurationURL
    registrationToken: $registrationToken
  ) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  UpdatePhantomUserRole: `mutation UpdatePhantomUserRole($role: UserRole!, $operation: RoleOperation!) {
  updateUserRole(role: $role, operation: $operation) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  writingCoachLogClientError: `mutation writingCoachLogClientError($message: String!, $errorType: String!, $essaySessionID: String!) {
  writingCoachLogClientError(
    message: $message
    errorType: $errorType
    essaySessionID: $essaySessionID
  ) {
    error {
      debugMessage
      __typename
    }
    __typename
  }
}`,
  Graphie2000_CreateGraphie: `mutation Graphie2000_CreateGraphie($svgBase64: String!, $data: JSONString!, $legacyJs: String) {
  createGraphie(svgBase64: $svgBase64, data: $data, legacyJs: $legacyJs) {
    hash
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  Graphie2000_DoGeneralAICompletion: `mutation Graphie2000_DoGeneralAICompletion($prompt: String!, $model: String, $temperature: Float, $maxTokens: Int, $stop: [String!]) {
  doGeneralAICompletion(
    input: {prompt: $prompt, model: $model, temperature: $temperature, maxTokens: $maxTokens, stop: $stop}
  ) {
    completion {
      text
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  LinkCurrentUserToUMIByUUIDMutation: `mutation LinkCurrentUserToUMIByUUIDMutation($uuid: ID!) {
  linkCurrentUserToUMIByUUID(uuid: $uuid) {
    succeeded
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  CompleteEYTQuestion: `mutation CompleteEYTQuestion($assessmentId: String!, $stepId: String!, $response: String!, $updatedResponse: String, $correct: Boolean!, $updatedCorrect: Boolean, $conversationThreadID: String!, $hasKhanmigoError: Boolean, $userAgent: String!, $reasonEYTEnded: ReasonEYTEnded!, $userReportedKhanmigoIssue: String) {
  complete: completeEYTQuestion(
    input: {assessmentId: $assessmentId, stepId: $stepId, response: $response, updatedResponse: $updatedResponse, correct: $correct, updatedCorrect: $updatedCorrect, conversationThreadID: $conversationThreadID, hasKhanmigoError: $hasKhanmigoError, userAgent: $userAgent, reasonEYTEnded: $reasonEYTEnded, userReportedKhanmigoIssueDescription: $userReportedKhanmigoIssue}
  ) {
    result {
      task {
        ...TaskFragment
        __typename
      }
      status
      __typename
    }
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}

fragment TaskFragment on AssessmentTask {
  id
  expirationTime
  questionsCompleted
  estimatedQuestionsRemaining
  hasSubmittedLearnerInsightsFeedback
  assessment {
    id
    surveyURL
    __typename
  }
  currentStep {
    stepNumber
    stepId
    type
    assessmentItem {
      id
      exerciseId
      itemData
      __typename
    }
    ... on EYTQuestion {
      conversationStarter
      completionCriteria
      __typename
    }
    __typename
  }
  surveyMonkeyID
  __typename
}`,
  createTestDistrict: `mutation createTestDistrict($name: String!, $karfJson: String!) {
  createTestDistrict(name: $name, karfJson: $karfJson) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  updateTestDistrictRoster: `mutation updateTestDistrictRoster($districtId: ID!, $karfJson: String!) {
  updateTestDistrictRoster(districtID: $districtId, karfJson: $karfJson) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  deleteDistrictGoal: `mutation deleteDistrictGoal($districtId: String!) {
  deleteDistrictGoal(districtID: $districtId) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  ClearUMI: `mutation ClearUMI($id: ID!) {
  clearUMI(id: $id) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  resendActivationEmailMutationForUMI: `mutation resendActivationEmailMutationForUMI($id: ID!) {
  resendActivationEmailForUMI(id: $id) {
    emailSent
    error {
      code
      __typename
    }
    __typename
  }
}`,
  EditUMI: `mutation EditUMI($id: ID!, $params: WriteUMIParams!) {
  editUMI(id: $id, params: $params) {
    umi {
      id
      canManageAdmins
      __typename
    }
    error {
      code
      conflictingUMI {
        id
        email
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  SetUpUMIs: `mutation SetUpUMIs($params: [WriteUMIParams!]!) {
  setUpUMIs(params: $params) {
    umi {
      id
      __typename
    }
    error {
      code
      conflictingUMI {
        id
        email
        firstName
        lastName
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  LearnPrototype_PracticeTask: `mutation LearnPrototype_PracticeTask($exerciseId: String!, $assignmentKey: String) {
  getOrCreatePracticeTask(
    input: {exerciseId: $exerciseId, assignmentKey: $assignmentKey, stopCardPersist: false, canReserveItems: true}
  ) {
    result {
      error {
        code
        debugMessage
        __typename
      }
      userTask {
        task {
          ...prototypePracticeTaskFields
          __typename
        }
        userExercises {
          ...exerciseTaskUserExerciseEntityFields
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}

fragment exerciseTaskExerciseFields on Exercise {
  id
  contentKind
  slug
  topicPaths {
    path {
      id
      kind
      __typename
    }
    __typename
  }
  problemTypeKind
  numAssessmentItems
  translatedDisplayName
  relatedContent {
    ...relatedContentFields
    __typename
  }
  parentTopic {
    id
    domainSlug
    __typename
  }
  __typename
}

fragment exerciseTaskUserExerciseEntityFields on UserExercise {
  exercise {
    ...exerciseTaskExerciseFields
    __typename
  }
  fpmMasteryLevel
  lastAttemptNumber
  lastCountHints
  __typename
}

fragment prototypePracticeTaskFields on PracticeTask {
  id
  key
  exerciseLength
  taskType
  contentKey
  reservedItems
  reservedItemsCompleted
  isCompleted
  taskAttemptHistory {
    ...taskAttemptHistoryFields
    __typename
  }
  __typename
}

fragment relatedContentFields on LearnableContent {
  id
  contentKind
  thumbnailUrl
  defaultUrlPath
  translatedTitle
  ... on Video {
    duration
    translatedYoutubeId
    __typename
  }
  __typename
}

fragment taskAttemptHistoryFields on TaskProblemAttempt {
  correct
  timeDone
  seenHint
  itemId
  __typename
}`,
  LearnPrototype_PracticeTaskAttemptProblem: `mutation LearnPrototype_PracticeTaskAttemptProblem($input: AttemptProblemInput!) {
  attemptProblem(attempt: $input) {
    result {
      updatedUserExercise: userExercise {
        ...exerciseTaskUserExerciseEntityFields
        __typename
      }
      updatedTask {
        ...prototypePracticeTaskFields
        __typename
      }
      actionResults {
        attemptCorrect
        notificationsAdded {
          avatarParts
          badges
          readable
          toast
          urgent
          continueUrl
          __typename
        }
        updatedStpStreakLength
        updatedCourseProficiencyLevel
        __typename
      }
      error {
        code
        debugMessage
        __typename
      }
      __typename
    }
    __typename
  }
}

fragment exerciseTaskExerciseFields on Exercise {
  id
  contentKind
  slug
  topicPaths {
    path {
      id
      kind
      __typename
    }
    __typename
  }
  problemTypeKind
  numAssessmentItems
  translatedDisplayName
  relatedContent {
    ...relatedContentFields
    __typename
  }
  parentTopic {
    id
    domainSlug
    __typename
  }
  __typename
}

fragment exerciseTaskUserExerciseEntityFields on UserExercise {
  exercise {
    ...exerciseTaskExerciseFields
    __typename
  }
  fpmMasteryLevel
  lastAttemptNumber
  lastCountHints
  __typename
}

fragment prototypePracticeTaskFields on PracticeTask {
  id
  key
  exerciseLength
  taskType
  contentKey
  reservedItems
  reservedItemsCompleted
  isCompleted
  taskAttemptHistory {
    ...taskAttemptHistoryFields
    __typename
  }
  __typename
}

fragment relatedContentFields on LearnableContent {
  id
  contentKind
  thumbnailUrl
  defaultUrlPath
  translatedTitle
  ... on Video {
    duration
    translatedYoutubeId
    __typename
  }
  __typename
}

fragment taskAttemptHistoryFields on TaskProblemAttempt {
  correct
  timeDone
  seenHint
  itemId
  __typename
}`,
  createTrialDistrictAndSchool: `mutation createTrialDistrictAndSchool($districtName: String!, $schoolName: String!, $kaLocale: String!, $countryCode: String!, $region: String!) {
  createTrialDistrictAndSchool(
    districtName: $districtName
    schoolName: $schoolName
    kaLocale: $kaLocale
    countryCode: $countryCode
    region: $region
  ) {
    error {
      code
      __typename
    }
    district {
      id
      name
      __typename
    }
    __typename
  }
}`,
  createBlooket: `mutation createBlooket($threadId: String!, $title: String!, $description: String!, $questions: JSONString!, $persona: AIGuidePersona!) {
  createBlooketQuestionSet(
    threadId: $threadId
    title: $title
    description: $description
    questions: $questions
    persona: $persona
  ) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  updateBlooket: `mutation updateBlooket($threadId: String!, $title: String!, $description: String!, $questions: JSONString!) {
  updateBlooketQuestionSet(
    threadId: $threadId
    title: $title
    description: $description
    questions: $questions
  ) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  updateExtraInfo: `mutation updateExtraInfo($nickname: String, $birthday: String) {
  setSettings(nickname: $nickname, birthdate: $birthday) {
    errors {
      code
      __typename
    }
    __typename
  }
}`,
  LinkClassToHiprDistrict: `mutation LinkClassToHiprDistrict($classDescriptor: String!, $schoolId: String!) {
  markDistrictClass(classDescriptor: $classDescriptor, schoolID: $schoolId) {
    succeeded
    __typename
  }
}`,
  UnlinkClassFromHiprDistrict: `mutation UnlinkClassFromHiprDistrict($classDescriptor: String!) {
  unmarkDistrictClass(classDescriptor: $classDescriptor) {
    succeeded
    __typename
  }
}`,
  createTeacherUDIForTrialAndHIPRDistrict: `mutation createTeacherUDIForTrialAndHIPRDistrict($districtID: ID!, $udiProperties: [CreateTeacherUDIForTrialAndHIPRDistrictInput!]!) {
  createTeacherUDIForTrialAndHIPRDistrict(
    districtID: $districtID
    udiProperties: $udiProperties
  ) {
    udi {
      id
      __typename
    }
    error {
      code
      dedupUDI {
        id
        keyNameID
        districtProvidedEmail
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  resendTeacherActivationEmailMutation: `mutation resendTeacherActivationEmailMutation($urlsafeKey: ID!) {
  resendActivationEmail(urlsafeKey: $urlsafeKey) {
    emailSent
    error {
      code
      __typename
    }
    __typename
  }
}`,
  updateTeacherUDIForTrialAndHIPRDistrict: `mutation updateTeacherUDIForTrialAndHIPRDistrict($districtID: ID!, $udiID: ID!, $udiProperties: CreateTeacherUDIForTrialAndHIPRDistrictInput!) {
  updateTeacherUDIForTrialAndHIPRDistrict(
    districtID: $districtID
    udiID: $udiID
    udiProperties: $udiProperties
  ) {
    udi {
      id
      __typename
    }
    error {
      code
      dedupUDI {
        id
        keyNameID
        districtProvidedEmail
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  devadminDeleteAssessmentTask: `mutation devadminDeleteAssessmentTask($kaid: String!, $assessmentId: String!) {
  deleteAssessmentTask(input: {kaid: $kaid, assessmentId: $assessmentId}) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  exportQuestionSetToBlooket: `mutation exportQuestionSetToBlooket($threadId: String!) {
  exportBlooketQuestionSet(threadId: $threadId) {
    redirectURL
    error {
      code
      __typename
    }
    __typename
  }
}`,
  createTrialDistrictWithSchoolAndAdmin: `mutation createTrialDistrictWithSchoolAndAdmin($districtName: String!, $schoolName: String!, $districtAdminEmail: String!, $districtAdminFirstName: String!, $districtAdminLastName: String!, $kaLocale: String!, $countryCode: String!, $region: String!) {
  createTrialDistrictWithSchoolAndAdmin(
    districtName: $districtName
    schoolName: $schoolName
    districtAdminEmail: $districtAdminEmail
    districtAdminFirstName: $districtAdminFirstName
    districtAdminLastName: $districtAdminLastName
    kaLocale: $kaLocale
    countryCode: $countryCode
    region: $region
  ) {
    error {
      code
      conflictingDistrict {
        id
        name
        __typename
      }
      __typename
    }
    district {
      id
      name
      __typename
    }
    school {
      id
      name
      __typename
    }
    admin {
      id
      districtProvidedFirstName
      districtProvidedLastName
      __typename
    }
    __typename
  }
}`,
  devadminUpdateAssessmentTaskCreationTime: `mutation devadminUpdateAssessmentTaskCreationTime($kaid: String!, $assessmentId: String!, $creationTime: DateTime!) {
  updateAssessmentTaskCreationTime(
    input: {kaid: $kaid, assessmentId: $assessmentId, creationTime: $creationTime}
  ) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  deleteTeacherUDIForTrialAndHIPRDistrict: `mutation deleteTeacherUDIForTrialAndHIPRDistrict($districtId: ID!, $udiIds: [ID!]!) {
  deleteTeacherUDIForTrialAndHIPRDistrict(
    districtID: $districtId
    udiIDs: $udiIds
  ) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  deleteBlooketQuestionSet: `mutation deleteBlooketQuestionSet($threadId: String!) {
  deleteBlooketQuestionSet(threadId: $threadId) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  acceptDistrictTrialTOS: `mutation acceptDistrictTrialTOS($input: AcceptDistrictTrialTOSInput!) {
  acceptDistrictTrialTOS(input: $input) {
    districtID
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  createClassroomForWritingCoach: `mutation createClassroomForWritingCoach($classroomName: String!) {
  createClassroom(classroomName: $classroomName) {
    classroom {
      id
      cacheId
      descriptor
      signupCode
      __typename
    }
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  createWritingCoachAssignments: `mutation createWritingCoachAssignments($classDescriptors: [String!]!, $qualifiedContentDescriptorsList: [String!], $startDate: DateTime!, $dueDate: DateTime, $isDraft: Boolean, $studentKaids: [ID], $subjectSlug: String!, $questionSetType: ExerciseItemPickerStrategy, $title: String, $instructions: String, $configuredActivityInputs: String) {
  createAssignments(
    assignment: {classroomDescriptors: $classDescriptors, qualifiedContentDescriptorsList: $qualifiedContentDescriptorsList, startDate: $startDate, dueDate: $dueDate, isDraft: $isDraft, studentKaids: $studentKaids, subjectSlug: $subjectSlug, exerciseItemPickerStrategy: $questionSetType, title: $title, instructions: $instructions, configuredActivityInputs: $configuredActivityInputs}
  ) {
    assignments {
      id
      __typename
    }
    __typename
  }
}`,
  devadminCreateAssessmentConfig: `mutation devadminCreateAssessmentConfig($input: CreateInterimAssessmentInput!) {
  createInterimAssessment(input: $input) {
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  createWritingCoachEssaySession: `mutation createWritingCoachEssaySession($assignmentTitle: String!, $essayText: String!, $essayType: EssayType!, $essayMode: EssayMode!, $essayVersion: Int!, $essayInstructions: String!, $minimumWordCount: Int, $studentGradeLevel: Int!, $paragraphIDToParagraphNumbers: [ParagraphIDToParagraphNumbersInputEntry!]!, $sampleEssayName: String) {
  createEssaySession(
    essayInstructions: $essayInstructions
    essayText: $essayText
    essayTitle: $assignmentTitle
    essayType: $essayType
    essayMode: $essayMode
    essayVersion: $essayVersion
    minimumWordCount: $minimumWordCount
    studentGradeLevel: $studentGradeLevel
    paragraphIDToParagraphNumbers: $paragraphIDToParagraphNumbers
    sampleEssayName: $sampleEssayName
  ) {
    essaySessionID
    error {
      debugMessage
      __typename
    }
    __typename
  }
}`,
  joinClassroomByCode: `mutation joinClassroomByCode($code: String!) {
  joinStudent(classCode: $code) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  addStudentToAssignment: `mutation addStudentToAssignment($id: ID!, $studentKaid: String!) {
  addStudentToAssignment(id: $id, studentKaid: $studentKaid) {
    success
    error {
      code
      __typename
    }
    __typename
  }
}`,
  devadminEditAssessmentConfig: `mutation devadminEditAssessmentConfig($input: EditInterimAssessmentInput!) {
  editInterimAssessment(input: $input) {
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  activateWritingCoach: `mutation activateWritingCoach($role: WritingCoachRole!) {
  activateWritingCoach(role: $role) {
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  aiGuideCreateInvitations: `mutation aiGuideCreateInvitations($input: AIGuideCreateInvitationsInput!) {
  aiGuideCreateInvitations(input: $input) {
    invitations
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  deleteCleverLibraryAndGrassrootsClassroomMutation: `mutation deleteCleverLibraryAndGrassrootsClassroomMutation($classroomDescriptor: String!) {
  deleteClassroom(descriptor: $classroomDescriptor) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  devadminDeleteAssessmentConfig: `mutation devadminDeleteAssessmentConfig($assessmentSlug: String!) {
  deleteInterimAssessment(assessmentSlug: $assessmentSlug) {
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  loginWithPasswordAndRecoveryCodeMutation: `mutation loginWithPasswordAndRecoveryCodeMutation($identifier: String!, $password: String!, $twoFactorRecoveryCode: String!) {
  loginWithPassword(
    identifier: $identifier
    password: $password
    twoFactorRecoveryCode: $twoFactorRecoveryCode
  ) {
    user {
      id
      kaid
      canAccessDistrictsHomepage
      isTeacher
      hasUnresolvedInvitations
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
}`,
  loginWithPasswordAndTwoFactorCodeMutation: `mutation loginWithPasswordAndTwoFactorCodeMutation($identifier: String!, $password: String!, $twoFactorAuthCode: String!) {
  loginWithPassword(
    identifier: $identifier
    password: $password
    twoFactorAuthCode: $twoFactorAuthCode
  ) {
    user {
      id
      kaid
      canAccessDistrictsHomepage
      isTeacher
      hasUnresolvedInvitations
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
}`,
  optInCoach: `mutation optInCoach($kaid: String) {
  clearUserOptOutOfABTesting(kaid: $kaid) {
    user {
      id
      kaid
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  optOutCoach: `mutation optOutCoach($kaid: String) {
  userOptOutOfABTesting(kaid: $kaid) {
    user {
      id
      kaid
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  renameClassroomMutation: `mutation renameClassroomMutation($classroomDescriptor: String!, $name: String!) {
  renameClassroom(descriptor: $classroomDescriptor, name: $name) {
    classroom {
      id
      descriptor
      cacheId
      name
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  setHasFormalTeacherStatusFixed: `mutation setHasFormalTeacherStatusFixed($tosForFormalTeacherStatus: Boolean) {
  setSettings(tosForFormalTeacherStatus: $tosForFormalTeacherStatus) {
    user {
      id
      tosForFormalTeacherStatus
      __typename
    }
    errors {
      code
      __typename
    }
    __typename
  }
}`,
  setParentHomeschoolStatus: `mutation setParentHomeschoolStatus($isHomeschoolParent: Boolean!) {
  setParentHomeschoolStatus(isHomeschoolParent: $isHomeschoolParent) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  setTeacherCourses: `mutation setTeacherCourses($kaid: String!, $courses: [TeacherCourse!]!) {
  setTeacherCourses(kaid: $kaid, teacherCourses: $courses) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  setTeacherGradeLevels: `mutation setTeacherGradeLevels($kaid: String!, $gradeLevels: [TeacherGradeLevel!]!) {
  setTeacherGradeLevels(kaid: $kaid, teacherGradeLevels: $gradeLevels) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  updateEnableImageInput: `mutation updateEnableImageInput($districtID: String!, $enable: Boolean!) {
  updateEnableImageInputForDistrict(districtID: $districtID, enable: $enable) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  updateWritingCoachAssignment: `mutation updateWritingCoachAssignment($assignmentId: ID!, $input: UpdateAssignmentInput!) {
  updateAssignment(id: $assignmentId, assignment: $input) {
    assignment {
      id
      __typename
    }
    __typename
  }
}`,
  writingCoachArchiveAssignments: `mutation writingCoachArchiveAssignments($assignmentIds: [ID]!) {
  archiveAssignments(ids: $assignmentIds) {
    assignments {
      id
      __typename
    }
    __typename
  }
}`,
  KAClassroom_GetOrCreateSingleExerciseTask: `mutation KAClassroom_GetOrCreateSingleExerciseTask($exerciseId: String!, $assignmentKey: String) {
  getOrCreatePracticeTask(
    input: {exerciseId: $exerciseId, assignmentKey: $assignmentKey, canReserveItems: true}
  ) {
    result {
      error {
        code
        debugMessage
        __typename
      }
      userTask {
        task {
          ...singleExercisePracticeTaskFields
          __typename
        }
        userExercises {
          ...taskUserExerciseFields
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}

fragment singleExercisePracticeTaskFields on PracticeTask {
  id
  key
  bonusReservedItems
  bonusReservedItemsCompleted
  bonusTaskAttemptHistory {
    ...taskProblemAttemptHistoryFields
    __typename
  }
  exerciseLength
  isCompleted
  reservedItems
  reservedItemsCompleted
  taskAttemptHistory {
    ...taskProblemAttemptHistoryFields
    __typename
  }
  taskType
  __typename
}

fragment taskExerciseFields on Exercise {
  id
  contentKind
  isDoAll: isQuiz
  numAssessmentItems
  problemTypeKind
  slug
  translatedDisplayName
  __typename
}

fragment taskProblemAttemptHistoryFields on TaskProblemAttempt {
  correct
  seenHint
  itemId
  __typename
}

fragment taskUserExerciseFields on UserExercise {
  exercise {
    ...taskExerciseFields
    __typename
  }
  lastAttemptNumber
  lastCountHints
  totalDone
  __typename
}`,
  toggleDistrictLMSConnect: `mutation toggleDistrictLMSConnect($districtId: ID!, $lmsProviderId: ID!) {
  updateLMSProviderID(districtID: $districtId, lmsProviderID: $lmsProviderId) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  KAClassroom_SetClassroomCourses: `mutation KAClassroom_SetClassroomCourses($classDescriptor: String!, $courseKeys: [String!]!) {
  setClassroomCourses(
    classroomDescriptor: $classDescriptor
    courseKeys: $courseKeys
  ) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  DoGeneralAICompletionForAssessments: `mutation DoGeneralAICompletionForAssessments($prompt: String!, $model: String, $temperature: Float, $maxTokens: Int, $stop: [String!]) {
  doGeneralAICompletion(
    input: {prompt: $prompt, model: $model, temperature: $temperature, maxTokens: $maxTokens, stop: $stop}
  ) {
    completion {
      text
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  SetAIGuideInteractionReactionForAssessments: `mutation SetAIGuideInteractionReactionForAssessments($threadId: ID!, $interactionId: ID!, $reaction: String, $note: String, $rewrittenResponse: String, $rating: Int, $sentiment: String) {
  setAIGuideInteractionReaction(
    threadId: $threadId
    interactionId: $interactionId
    reaction: $reaction
    note: $note
    rewrittenResponse: $rewrittenResponse
    rating: $rating
    sentiment: $sentiment
  ) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  SetPromotionMutationForAssessments: `mutation SetPromotionMutationForAssessments($promoName: String!) {
  recordPromo(promoName: $promoName) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  StopResponseForAssessments: `mutation StopResponseForAssessments($input: StopResponseInput!) {
  stopResponse(input: $input) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  devadminUpdateAssessmentSchedule: `mutation devadminUpdateAssessmentSchedule($input: UpdateInterimAssessmentTestingScheduleInput!) {
  updateInterimAssessmentTestingSchedule(input: $input) {
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  submitLearnerInsightsFeedback: `mutation submitLearnerInsightsFeedback($assessmentId: String!, $rating: Int!) {
  submitLearnerInsightsFeedback(
    input: {assessmentId: $assessmentId, rating: $rating}
  ) {
    result {
      task {
        id
        hasSubmittedLearnerInsightsFeedback
        __typename
      }
      __typename
    }
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  PlaytestingDeleteAssessmentTask: `mutation PlaytestingDeleteAssessmentTask($kaid: String!, $assessmentId: String!) {
  deleteAssessmentTask(input: {kaid: $kaid, assessmentId: $assessmentId}) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  PlaytestingUpdateAssessmentTaskCreationTime: `mutation PlaytestingUpdateAssessmentTaskCreationTime($kaid: String!, $assessmentId: String!, $creationTime: DateTime!) {
  updateAssessmentTaskCreationTime(
    input: {kaid: $kaid, assessmentId: $assessmentId, creationTime: $creationTime}
  ) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  getOrCreateLearnerInsights: `mutation getOrCreateLearnerInsights($assessmentId: String!) {
  getOrCreateLearnerInsights(input: {assessmentId: $assessmentId}) {
    result {
      learnerInsightsForStudent {
        overallSummary
        __typename
      }
      __typename
    }
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  sendTestRealTimeMessage: `mutation sendTestRealTimeMessage($channel: String!, $message: String!) {
  sendTestRealTimeMessage(channel: $channel, message: $message) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  archiveCoeditingDocumentFromAiTools: `mutation archiveCoeditingDocumentFromAiTools($threadID: String!) {
  archiveCoeditingDocument(threadID: $threadID) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  deleteBlooketQuestionSetFromAiTools: `mutation deleteBlooketQuestionSetFromAiTools($threadId: String!) {
  deleteBlooketQuestionSet(threadId: $threadId) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  khanmigoToolsAddFavoritedTeacherTool: `mutation khanmigoToolsAddFavoritedTeacherTool($toolID: ID!, $configName: String!) {
  aiGuideAddFavoritedTeacherTool(toolID: $toolID, configName: $configName) {
    favoritedTool {
      id
      configName
      __typename
    }
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  khanmigoToolsDeleteFavoritedTeacherTool: `mutation khanmigoToolsDeleteFavoritedTeacherTool($toolID: ID!, $configName: String!) {
  aiGuideDeleteFavoritedTeacherTool(toolID: $toolID, configName: $configName) {
    favoritedTool {
      id
      configName
      __typename
    }
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  KAClassroom_RecordActionableInsightAction: `mutation KAClassroom_RecordActionableInsightAction($insightID: ID!, $actionType: ActionableInsightActionType!) {
  recordActionableInsightAction(
    input: {actionableInsightId: $insightID, actionType: $actionType}
  ) {
    success
    __typename
  }
}`,
  khanmigoToolsCoeditingAutosave: `mutation khanmigoToolsCoeditingAutosave($configName: String!, $threadId: String!, $title: String!, $jsonData: String!, $persona: AIGuidePersona!) {
  saveCoeditingV2Snapshot(
    configName: $configName
    threadId: $threadId
    title: $title
    jsonData: $jsonData
    persona: $persona
  ) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
}
