fragments = {
  ActivitySession: `fragment ActivitySession on ActivitySession {
  id
  title
  subtitle
  activityKind {
    id
    __typename
  }
  durationMinutes
  eventTimestamp
  skillType
  __typename
}`,
  ActivitySessionSkillLevels: `fragment ActivitySessionSkillLevels on SkillLevelChange {
  id
  before
  after
  __typename
}`,
  ArticleRevision: `fragment ArticleRevision on ArticleRevision {
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
  AssessmentItemRevision: `fragment AssessmentItemRevision on AssessmentItemRevision {
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
}`,
  AssessmentItemTagFields: `fragment AssessmentItemTagFields on AssessmentItemTag {
  editId: id
  id: urlsafeTag
  displayName
  description
  relatedContentId: lessonId
  __typename
}`,
  AssignmentCsvData: `fragment AssignmentCsvData on Assignment {
  assignedDate
  startDate
  dueDate
  id
  title
  configuredActivityInputs
  contents {
    id
    title: translatedTitle
    defaultUrlPath
    kind
    __typename
  }
  itemCompletionStates: itemCompletionStatesForAllStudents {
    student {
      id
      coachNickname(teacherKaid: $teacherKaid)
      profileRoot
      __typename
    }
    state
    completedOn
    bestScore {
      numCorrect
      numAttempted
      __typename
    }
    exerciseAttempts {
      id
      isCompleted
      isRestarted
      numAttempted
      numCorrect
      lastAttemptDate
      __typename
    }
    activitySubmissions {
      thread {
        id
        __typename
      }
      __typename
    }
    essaySession {
      id
      currentStage
      completed
      lastUpdated
      wordCount
      draft {
        id
        feedbackList {
          id
          isPositive
          isResolved
          __typename
        }
        __typename
      }
      learningTime {
        promptReviewingSeconds
        outliningSeconds
        draftingSeconds
        revisingSeconds
        __typename
      }
      originalityFlags {
        isCritical
        ... on UserEssayOriginalityFlagPasteIntoOutline {
          location
          wordCount
          outlineVersionBeforePaste
          __typename
        }
        ... on UserEssayOriginalityFlagPasteIntoText {
          stage
          wordCount
          essayVersionBeforePaste
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
  studentList {
    id
    cacheId
    name
    __typename
  }
  __typename
}`,
  AssignmentData: `fragment AssignmentData on Assignment {
  id
  title
  contents {
    id
    contentDescriptor
    contentKind
    slug
    translatedTitle
    parentTopic {
      id
      parent {
        id
        masteryEnabled
        translatedTitle
        __typename
      }
      __typename
    }
    topicPaths {
      path {
        id
        slug
        kind
        __typename
      }
      __typename
    }
    urlWithinCurationNode
    ... on TopicQuiz {
      index
      __typename
    }
    __typename
  }
  courseId
  domainId
  dueDate
  exerciseConfig {
    itemPickerStrategy
    __typename
  }
  itemCompletionStates {
    state
    exerciseAttempts {
      id
      isCompleted
      isRestarted
      lastAttemptDate
      numCorrect
      numAttempted
      __typename
    }
    __typename
  }
  key
  lesson {
    id
    parent {
      id
      masteryEnabled
      translatedTitle
      __typename
    }
    __typename
  }
  lessonId
  unit {
    id
    masteryEnabled
    translatedTitle
    __typename
  }
  unitId
  __typename
}`,
  AssignmentInfoFragment: `fragment AssignmentInfoFragment on Assignment {
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
    isChildAssignmentsClassroom
    signupCode
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
  Badge: `fragment Badge on Badge {
  badgeCategory
  description
  fullDescription
  isCustom
  isRetired
  name
  points
  absoluteUrl
  hideContext
  icons {
    smallUrl
    compactUrl
    emailUrl
    largeUrl
    __typename
  }
  relativeUrl
  slug
  __typename
}`,
  BaseFolder: `fragment BaseFolder on Folder {
  id
  name
  kaLocale
  isEmpty
  __typename
}`,
  BasicContentItemProgress: `fragment BasicContentItemProgress on ContentItemProgress {
  bestScore {
    numAttempted
    numCorrect
    completedDate
    __typename
  }
  completionStatus
  content {
    id
    contentKind
    contentDescriptor
    progressKey
    __typename
  }
  __typename
}`,
  clarificationFragment: `fragment clarificationFragment on OfficialClarification {
  id
  text
  openTimestamp
  closeTimestamp
  youtubeId
  __typename
}`,
  Classroom: `fragment Classroom on StudentList {
  cacheId
  coachKaid
  descriptor
  hasAssignments
  id
  name
  signupCode
  __typename
}`,
  ClassroomData: `fragment ClassroomData on StudentList {
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
}`,
  CleverCoachRequestField: `fragment CleverCoachRequestField on CleverCoachRequest {
  id
  email: studentIdentifier
  __typename
}

fragment CoachRequestField on CoachRequest {
  id
  email: studentIdentifier
  __typename
}

fragment InvitationsField on Invitation {
  id
  email
  accepted
  __typename
}`,
  CommonContentItemProgressesFragment: `fragment CommonContentItemProgressesFragment on ContentItemProgress {
  bestScore {
    numAttempted
    numCorrect
    completedDate
    __typename
  }
  completionStatus
  content {
    id
    progressKey
    __typename
  }
  __typename
}`,
  CommonUserInfoFragment: `fragment CommonUserInfoFragment on User {
  id
  curationItemProgress(topicId: $topicId) {
    masteryEnabled
    subjectMasteryEnabled
    masteryMap {
      progressKey
      status
      __typename
    }
    currentMastery {
      percentage
      pointsEarned
      pointsAvailable
      __typename
    }
    __typename
  }
  recommendationsForUnit(unitId: $topicId) {
    contentId
    sourceId
    kind
    __typename
  }
  __typename
}`,
  contentEditorContentRevision: `fragment contentEditorContentRevision on ContentRevision {
  id
  cacheId: sha
  creationDate
  __typename
}`,
  contentEditorLearnableContent: `fragment contentEditorLearnableContent on LearnableContentRevision {
  doNotPublish
  listed
  slug
  title
  description
  __typename
}`,
  CourseData: `fragment CourseData on Course {
  id
  iconPath
  masteryEnabled
  relativeUrl
  slug
  translatedTitle
  translatedDescription
  isListedForLearners
  translatedCustomTitleTag
  contentKind
  userAuthoredContentTypes
  masterableExercises(includeDuplicates: true) {
    id
    __typename
  }
  parent {
    id
    contentKind
    relativeUrl
    slug
    translatedTitle
    __typename
  }
  lowerToc
  curation {
    hideSubjectIntro
    hideCommunityQuestions
    sponsorFooterAttribution {
      footnoteHtml
      imageBaselineAligned
      imageCaption
      imageUrl
      taglineHtml
      __typename
    }
    modules {
      kind
      untranslatedFields
      ... on CourseIntroModule {
        callToAction
        description
        link
        title
        video
        __typename
      }
      ... on ActionListModule {
        actions {
          text
          URL: url
          contentDescriptor
          __typename
        }
        kind
        title
        __typename
      }
      ... on PartnershipDescriptionModule {
        description
        imageCaption
        imageUrl
        isOutro
        partnerUrl
        partnerUrlText
        __typename
      }
      ... on ContentCarouselModule {
        referrer
        title
        contentDescriptors
        __typename
      }
      __typename
    }
    excludedChildren
    __typename
  }
  courseChallenge {
    id
    contentKind
    slug
    contentDescriptor
    parentTopic {
      id
      parent {
        id
        masteryEnabled
        __typename
      }
      __typename
    }
    urlWithinCurationNode
    exerciseLength
    timeEstimate {
      lowerBound
      upperBound
      __typename
    }
    __typename
  }
  masteryChallenge {
    id
    contentKind
    slug
    contentDescriptor
    parentTopic {
      id
      parent {
        id
        masteryEnabled
        __typename
      }
      __typename
    }
    urlWithinCurationNode
    exerciseLength
    timeEstimate {
      lowerBound
      upperBound
      __typename
    }
    __typename
  }
  __typename
}`,
  CourseFields: `fragment CourseFields on Course {
  ... on Course {
    id
    description
    iconPath
    key
    kind
    mappedStandardIds
    title: translatedTitle
    __typename
  }
  __typename
}
`,
  CourseMenuRevisionFields: `fragment CourseMenuRevisionFields on CourseMenuRevision {
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
  CourseProgress: `fragment CourseProgress on SubjectProgress {
  topic {
    domainSlug
    iconPath
    id
    slug
    title: translatedTitle
    relativeUrl
    __typename
  }
  unitProgresses {
    lastWorkedOn
    currentMastery {
      percentage
      __typename
    }
    topic {
      id
      iconPath
      title: translatedTitle
      relativeUrl
      masteryEnabled
      subjectMasteryEnabled
      __typename
    }
    __typename
  }
  __typename
}`,
  CourseRevisionStructure: `fragment CourseRevisionStructure on CourseRevision {
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
  CourseStructure: `fragment CourseStructure on CourseRevision {
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
  EmailSubscriptionFields: `fragment EmailSubscriptionFields on EmailSubscriptions {
  allEmailSubscription {
    checked
    key
    __typename
  }
  answerNotificationEmailSubscription {
    checked
    key
    __typename
  }
  newAssignmentNotificationEmailSubscription {
    checked
    key
    __typename
  }
  allStudentsCoachReportEmailSubscription {
    key
    checked
    __typename
  }
  parentReportEmailSubscriptions {
    key
    description
    checked
    __typename
  }
  studentListEmailSubscriptions {
    key
    checked
    description
    __typename
  }
  streaksEmailSubscription {
    token
    checked
    __typename
  }
  __typename
}`,
  entry: `fragment entry on TeamPageEntryForEditing {
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
  ExerciseRevision: `fragment ExerciseRevision on ExerciseRevision {
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
  exerciseTaskUserExerciseFields: `fragment exerciseTaskUserExerciseFields on UserExercise {
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
    translatedProblemTypes {
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
  Folder: `fragment Folder on Folder {
  ...BaseFolder
  courses {
    ...PublishedCourseRevisionFragment
    __typename
  }
  __typename
}`,
  FolderCourseRevisionFragment: `fragment FolderCourseRevisionFragment on CourseRevision {
  id
  contentId
  title
  items {
    ... on CourseRevisionUnit {
      id
      cacheId
      contentId
      slugSuffix
      title
      items {
        ... on CourseRevisionLesson {
          type
          id
          cacheId
          contentId
          slugSuffix
          title
          items {
            ... on CourseRevisionContent {
              id
              cacheId
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
  gtp_checkpointFragment: `fragment gtp_checkpointFragment on Checkpoint {
  id
  stages {
    numCreditedTasks
    creditedTaskIds
    goalTasks
    stageIndex
    stageDisplayNumber
    startedAt
    completedAt
    incomingLevels {
      name
      level
      __typename
    }
    focusAreas {
      skillTitle
      areaId
      areaTitle
      __typename
    }
    __typename
  }
  checkpointIndex
  startedAt
  completedAt
  drillMode
  isComplete
  removedFromSchedule
  hasDonePracticeTasks
  numStages
  canCreateNewStage
  hasDonePracticeTasks
  miniSectionStages
  tmsTaskIds
  __typename
}`,
  gtp_descriptorFragment: `fragment gtp_descriptorFragment on TaskDescriptor {
  id
  examId
  kaid
  taskType
  translatedTitle
  exerciseName
  taskId
  areaId
  taskDurationSeconds
  startDatetime
  completionDatetime
  numTotal
  numCorrect
  numAttempted
  ... on SkillTaskDescriptor {
    skillId
    description
    areaTitle
    level
    isRecommendedLevel
    stage
    rationale {
      level
      importance
      context
      frequency
      __typename
    }
    __typename
  }
  ... on TmsTaskDescriptor {
    areaTitle
    __typename
  }
  __typename
}`,
  gtp_egudFragment: `fragment gtp_egudFragment on ExamGroupUserData {
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
  gtp_essayScoresFragment: `fragment gtp_essayScoresFragment on EssayScores {
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
}`,
  gtp_examGroupMetadataFragment: `fragment gtp_examGroupMetadataFragment on ExamGroupMetadata {
  id
  testMaker
  kaRelationshipToTestCopy
  testMakerLogoImg
  registrationUrl
  __typename
}`,
  gtp_examMetadataFragment: `fragment gtp_examMetadataFragment on ExamMetadata {
  id
  accommodationsUrl
  accommodationsCopy
  accommodationsOptions
  numAvailableTests
  offerFullTestDiagnostics
  goalScoreContext
  goalScoreResources {
    url
    description
    __typename
  }
  skillLevelLabels {
    skillLevel
    label
    __typename
  }
  examGroupMetadata {
    examGroupId
    exams {
      examId
      __typename
    }
    __typename
  }
  subExamMode
  isPassFail
  cutoffScoreSelectorContext
  cutoffScoreDefaultText
  passFailScoreCutoffs {
    label
    identifier
    cutoffScoreThreshold
    __typename
  }
  __typename
}`,
  gtp_expressDescriptorsNumAttemptedFragment: `fragment gtp_expressDescriptorsNumAttemptedFragment on ExpressDiagnosticTaskDescriptor {
  numAttempted
  __typename
}`,
  gtp_practiceTestFragment: `fragment gtp_practiceTestFragment on PracticeTest {
  id
  practiceTestId
  approxTestMins
  testTitle
  directions
  formCode
  hasStarted
  completionStatus
  completedAt
  subScores {
    name
    score
    __typename
  }
  sections {
    sectionId
    taskId
    exerciseName
    isScored
    sectionTitle
    numCorrect
    numTotal
    durationSeconds
    breakDurationSeconds
    hasUserGrading
    completed
    userProvidedScores {
      score
      minScore
      maxScore
      __typename
    }
    __typename
  }
  __typename
}`,
  gtp_taskFragment: `fragment gtp_taskFragment on Task {
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
  gtp_tpudFragment: `fragment gtp_tpudFragment on TestPrepUserData {
  id
  examId
  currentStage
  currentCheckpoint
  targetScore
  diagnosticsStates {
    type
    state
    __typename
  }
  onboardingState
  hasSeededSkillLevels
  hasUnlockedDrillMode
  scoreInfo {
    minScore
    maxScore
    __typename
  }
  schedule {
    examDate
    practiceTestDates
    __typename
  }
  __typename
}`,
  khanLibraryDomainRevision: `fragment khanLibraryDomainRevision on DomainRevision {
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
  LearnableContent: `fragment LearnableContent on LearnableContent {
  id
  kind
  creationDate
  topicPaths {
    path {
      id
      kind
      slug
      __typename
    }
    __typename
  }
  __typename
}`,
  LearnableContentData: `fragment LearnableContentData on LearnableContent {
  id
  contentKind
  slug
  translatedTitle
  ... on Article {
    articleClarificationsEnabled: clarificationsEnabled
    translatedDescription
    translatedPerseusContent
    __typename
  }
  ... on Challenge {
    authorList {
      name
      __typename
    }
    canvasOnly
    code
    codeFormat
    configVersion
    defaultUrlPath
    height
    nodeSlug
    translatedDescription
    translatedTests
    testsFormat
    testStrings {
      message
      __typename
    }
    userAuthoredContentType
    width
    __typename
  }
  ... on Exercise {
    problemTypeKind
    __typename
  }
  ... on Interactive {
    authorList {
      name
      __typename
    }
    canvasOnly
    code
    codeFormat
    configVersion
    defaultUrlPath
    height
    nodeSlug
    translatedDescription
    userAuthoredContentType
    width
    __typename
  }
  ... on Project {
    authorList {
      name
      __typename
    }
    canvasOnly
    code
    codeFormat
    configVersion
    defaultUrlPath
    height
    nodeSlug
    translatedDescription
    translatedProjectEval
    translatedProjectEvalTips
    userAuthoredContentType
    width
    __typename
  }
  ... on Talkthrough {
    authorList {
      name
      __typename
    }
    canvasOnly
    code
    configVersion
    defaultUrlPath
    height
    nodeSlug
    playback
    subtitles {
      endTime
      kaIsValid
      startTime
      text
      __typename
    }
    translatedDescription
    translatedMp3Url
    userAuthoredContentType
    width
    youtubeId
    __typename
  }
  ... on TopicQuiz {
    index
    exerciseLength
    timeEstimate {
      lowerBound
      upperBound
      __typename
    }
    coveredTutorials {
      id
      translatedTitle
      relativeUrl
      allLearnableContent {
        id
        contentKind
        __typename
      }
      __typename
    }
    __typename
  }
  ... on TopicUnitTest {
    exerciseLength
    timeEstimate {
      lowerBound
      upperBound
      __typename
    }
    coveredTutorials {
      id
      translatedTitle
      relativeUrl
      allLearnableContent {
        id
        contentKind
        __typename
      }
      __typename
    }
    __typename
  }
  ... on Video {
    authorNames
    videoAuthorList: authorList {
      name
      __typename
    }
    clarificationsEnabled
    dateAdded
    description
    downloadUrls
    duration
    imageUrl
    kaUrl
    kaUserLicense
    keywords
    readableId
    sha
    thumbnailUrls {
      category
      url
      __typename
    }
    translatedDescriptionHtml
    translatedYoutubeId
    translatedYoutubeLang
    youtubeId
    augmentedTranscript
    relativeUrl
    descriptionHtml
    nodeSlug
    translatedDescription
    translatedCustomTitleTag
    subtitles {
      endTime
      kaIsValid
      startTime
      text
      __typename
    }
    keyMoments {
      startOffset
      endOffset
      label
      __typename
    }
    educationalLevel
    learningResourceType
    __typename
  }
  __typename
}`,
  LearnableContentFields: `fragment LearnableContentFields on LearnableContent {
  contentId
  description
  kind
  mappedStandardIds
  nodeUrl: urlWithinTopic
  slug
  title: translatedTitle
  __typename
}
`,
  LearnableContentMetadata: `fragment LearnableContentMetadata on LearnableContent {
  id
  canonicalUrl: defaultUrlPath
  contentDescriptor
  contentKind
  parentTopic {
    id
    parent {
      id
      masteryEnabled
      __typename
    }
    __typename
  }
  progressKey
  slug
  translatedCustomTitleTag
  translatedDescription
  translatedTitle
  urlWithinCurationNode
  ... on Challenge {
    userAuthoredContentType
    __typename
  }
  ... on Interactive {
    userAuthoredContentType
    __typename
  }
  ... on Project {
    userAuthoredContentType
    __typename
  }
  __typename
}`,
  LessonAndChildrenFields: `fragment LessonAndChildrenFields on Lesson {
  ... on Lesson {
    id
    description
    iconPath
    key
    kind
    mappedStandardIds
    title: translatedTitle
    children {
      __typename
      ...LearnableContentFields
      ... on Video {
        duration
        imageUrl
        translatedYoutubeId
        youtubeId
        __typename
      }
      ... on Exercise {
        expectedDoNCount: exerciseLength(useDefault: true)
        __typename
      }
    }
    __typename
  }
  __typename
}
`,
  LessonData: `fragment LessonData on Lesson {
  id
  relativeUrl
  slug
  translatedDescription
  translatedTitle
  key
  curatedChildren(includeUnlisted: false) {
    ... on LearnableContent {
      ...LearnableContentMetadata
      __typename
    }
    ... on Exercise {
      exerciseLength
      isSkillCheck
      sponsored
      thumbnailUrl
      timeEstimate {
        lowerBound
        upperBound
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}`,
  LinkedStudentData: `fragment LinkedStudentData on LinkedGoogleClassStudent {
  email
  __typename
}`,
  MappedStandards: `fragment MappedStandards on LearnableContent {
  mappedStandards {
    setId
    id
    standardId
    description
    __typename
  }
  __typename
}
`,
  Program: `fragment Program on Program {
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
  ProjectRevision: `fragment ProjectRevision on ProjectRevision {
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
  PublishedCourseRevisionFragment: `fragment PublishedCourseRevisionFragment on CourseRevision {
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
  QuizAndTestFields: `fragment QuizAndTestFields on LearnableContent {
  ... on TopicQuiz {
    coveredTutorials {
      id
      title: translatedTitle
      __typename
    }
    defaultUrlPath
    expectedDoNCount: exerciseLength
    index
    __typename
  }
  ... on TopicUnitTest {
    defaultUrlPath
    expectedDoNCount: exerciseLength
    __typename
  }
  __typename
}`,
  QuizMetadata: `fragment QuizMetadata on TopicQuiz {
  ...LearnableContentMetadata
  exerciseLength
  index
  timeEstimate {
    lowerBound
    upperBound
    __typename
  }
  __typename
}`,
  TalkthroughRevision: `fragment TalkthroughRevision on TalkthroughRevision {
  id
  contentId
  contentKind
  slug
  sha
  listed
  __typename
}`,
  tapArticleNode: `fragment tapArticleNode on TAPArticleNode {
  ...tapContentItem
  ...tapMetadataWordCounts
  ...tapContentWordCounts
  fingerprint
  __typename
}`,
  tapChallengeNode: `fragment tapChallengeNode on TAPChallengeNode {
  ...tapContentItem
  ...tapMetadataWordCounts
  ...tapContentWordCounts
  fingerprint
  __typename
}`,
  tapContentItem: `fragment tapContentItem on TAPContentItem {
  id
  contentKind
  contentId
  sha
  isNativeContent
  isUnlisted
  slug
  title
  translatedTitle
  __typename
}`,
  tapContentWordCounts: `fragment tapContentWordCounts on TAPContentWordCounts {
  wordCount
  translatableWordCount
  translatedWordCount
  translatedWordCount
  approvedWordCount
  __typename
}`,
  tapCourseNode: `fragment tapCourseNode on TAPCourseNode {
  ...tapContentItem
  ...tapMetadataWordCounts
  fingerprint
  children {
    ...tapUnitNode
    __typename
  }
  __typename
}`,
  tapDomainNode: `fragment tapDomainNode on TAPDomainNode {
  ...tapContentItem
  ...tapMetadataWordCounts
  fingerprint
  __typename
}`,
  tapExerciseNode: `fragment tapExerciseNode on TAPExerciseNode {
  ...tapContentItem
  ...tapMetadataWordCounts
  ...tapContentWordCounts
  fingerprint
  __typename
}`,
  tapInteractiveNode: `fragment tapInteractiveNode on TAPInteractiveNode {
  ...tapContentItem
  ...tapMetadataWordCounts
  fingerprint
  __typename
}`,
  tapLessonNode: `fragment tapLessonNode on TAPLessonNode {
  ...tapContentItem
  ...tapMetadataWordCounts
  fingerprint
  children {
    ...tapAIGuideActivityNode
    ...tapArticleNode
    ...tapChallengeNode
    ...tapExerciseNode
    ...tapInteractiveNode
    ...tapProjectNode
    ...tapTalkthroughNode
    ...tapVideoNode
    __typename
  }
  __typename
}`,
  tapMetadataWordCounts: `fragment tapMetadataWordCounts on TAPMetadataWordCounts {
  metadataWordCount
  metadataTranslatableWordCount
  metadataTranslatedWordCount
  metadataApprovedWordCount
  __typename
}`,
  tapPlatformNode: `fragment tapPlatformNode on TAPPlatformNode {
  ...tapContentWordCounts
  id
  slug
  title
  __typename
}`,
  tapProjectNode: `fragment tapProjectNode on TAPProjectNode {
  ...tapContentItem
  ...tapMetadataWordCounts
  ...tapContentWordCounts
  fingerprint
  __typename
}`,
  tapTalkthroughNode: `fragment tapTalkthroughNode on TAPTalkthroughNode {
  ...tapContentItem
  ...tapMetadataWordCounts
  fingerprint
  isDubbed
  isSubtitled
  youtubeId
  __typename
}`,
  tapTranslationFreshness: `fragment tapTranslationFreshness on TAPTranslationFreshness {
  lastStringsUpdateDate
  lastDubsUpdateDate
  lastSubtitlesUpdateDate
  oldestSubtitlesDate
  updateDate
  __typename
}`,
  tapUnitNode: `fragment tapUnitNode on TAPUnitNode {
  ...tapContentItem
  ...tapMetadataWordCounts
  fingerprint
  children {
    ...tapLessonNode
    __typename
  }
  __typename
}`,
  tapVideoNode: `fragment tapVideoNode on TAPVideoNode {
  ...tapContentItem
  ...tapMetadataWordCounts
  fingerprint
  isDubbed
  dubIsSubtitled
  isSubtitled
  translatedYoutubeId
  youtubeId
  __typename
}`,
  UnitData: `fragment UnitData on Unit {
  id
  iconPath
  masteryEnabled
  relativeUrl
  slug
  isListedForLearners
  translatedCustomTitleTag
  translatedDescription
  translatedTitle
  unlistedAncestorIds
  __typename
}`,
  UnitTestMetadata: `fragment UnitTestMetadata on TopicUnitTest {
  ...LearnableContentMetadata
  exerciseLength
  timeEstimate {
    lowerBound
    upperBound
    __typename
  }
  __typename
}`,
  UnlinkedStudentData: `fragment UnlinkedStudentData on UnsuccessfullyLinkedGoogleClassStudent {
  email
  nickname
  error {
    code
    __typename
  }
  __typename
}`,
  userExerciseFields: `fragment userExerciseFields on UserExercise {
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
  UserFields: `fragment UserFields on User {
  id
  kaid
  lastLogin
  points
  profileRoot
  nickname
  joined
  authEmails
  userId
  username
  coaches {
    id
    email
    username
    kaid
    __typename
  }
  aiGuideAccessPlans {
    id
    isActive
    enrollmentGroup
    __typename
  }
  __typename
}`,
  userTaskFields: `fragment userTaskFields on PracticeUserTask {
  cards {
    done
    cardType
    ... on ProblemCard {
      exerciseName
      problemType
      __typename
    }
    __typename
  }
  includeSkipButton
  task {
    contentKey
    exerciseLength
    id
    key
    pointBounty
    pointsEarned
    slug
    taskType
    timeEstimate {
      lowerBound
      upperBound
      __typename
    }
    completionCriteria {
      name
      __typename
    }
    promotionCriteria {
      name
      value
      __typename
    }
    reservedItems
    reservedItemsCompleted
    taskAttemptHistory {
      correct
      timeDone
      seenHint
      itemId
      __typename
    }
    __typename
  }
  userExercises {
    ...userExerciseFields
    __typename
  }
  __typename
}`,
  VideoRevision: `fragment VideoRevision on VideoRevision {
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
  contentSearchLearnableContent: `fragment contentSearchLearnableContent on LearnableContent {
  id
  slug
  title
  listed
  defaultUrlPath
  __typename
}`,
  tapAIGuideActivityNode: `fragment tapAIGuideActivityNode on TAPAIGuideActivityNode {
  ...tapContentItem
  ...tapMetadataWordCounts
  fingerprint
  __typename
}`,
  ChallengeRevision: `fragment ChallengeRevision on ChallengeRevision {
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
  AIGuideActivityRevision: `fragment AIGuideActivityRevision on AIGuideActivityRevision {
  id
  contentId
  contentKind
  slug
  sha
  listed
  __typename
}`,
  AllUserFields: `fragment AllUserFields on User {
  ...UserFields
  ...FilterFields
  __typename
}`,
  FilterFields: `fragment FilterFields on User {
  id
  nickname
  coaches {
    id
    email
    username
    kaid
    __typename
  }
  joined
  discussionBanned
  isChild
  points
  __typename
}`,
  static_ActivityFragment: `fragment static_ActivityFragment on AIGuideActivity {
  id
  translatedTitle
  contentDescriptor
  slug
  persona
  activityType
  worksInMobileApp
  worksOnSmallLayouts
  isAssignable
  __typename
}

query ActivitiesList {
  aiGuideActivitiesList(isMobileApp: false) {
    id
    welcomeActivities {
      ...static_ActivityFragment
      __typename
    }
    sections {
      id
      title: translatedTitle
      iconUrl: iconPath
      activities {
        ...static_ActivityFragment
        __typename
      }
      __typename
    }
    personas
    __typename
  }
}`,
  TaskFragment: `fragment TaskFragment on AssessmentTask {
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
  EssayHistory: `fragment EssayHistory on UserEssayHistoryPage {
  hasMore
  snapshots {
    snapshotIndex
    details {
      firstIncludedVersion
      firstIncludedEditTimestamp
      lastIncludedVersion
      lastIncludedEditTimestamp
      content
      __typename
    }
    ... on UserEssayTextSnapshot {
      stage
      learningTimeSeconds
      __typename
    }
    ... on UserEssayOutlineSnapshot {
      learningTimeSeconds
      __typename
    }
    __typename
  }
  __typename
}`,
  AssignmentFields: `fragment AssignmentFields on Assignment {
  id
  studentKaids
  isDraft
  assignmentStatus
  subjectSlug
  numStudentsCompleted
  assignedDate
  startDate
  dueDate
  contentDescriptors
  domainId
  courseId
  unitId
  lessonId
  contents {
    id
    title: translatedTitle
    kind
    defaultUrlPath
    __typename
  }
  exerciseConfig {
    itemPickerStrategy
    __typename
  }
  title
  instructions
  configuredActivityInputs
  __typename
}`,
  practiceTaskExerciseFields: `fragment practiceTaskExerciseFields on Exercise {
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
  __typename
}`,
  practiceTaskFields: `fragment practiceTaskFields on PracticeTask {
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
}`,
  practiceTaskUserExerciseFields: `fragment practiceTaskUserExerciseFields on UserExercise {
  exercise {
    ...practiceTaskExerciseFields
    __typename
  }
  fpmMasteryLevel
  lastAttemptNumber
  lastCountHints
  __typename
}`,
  relatedContentFields: `fragment relatedContentFields on LearnableContent {
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
}`,
  ModerationResultFragment: `fragment ModerationResultFragment on AutoModerationResult {
  autoModerationAction {
    autoDelete
    autoHide
    __typename
  }
  autoHideCriteria {
    isShortPost
    containsLargeWords
    containsASCIIArt
    lowQualityScore {
      totalScore
      components {
        code
        totalScorePercentage
        terms
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}`,
  exerciseTaskAttemptHistoryFields: `fragment exerciseTaskAttemptHistoryFields on TaskProblemAttempt {
  correct
  timeDone
  seenHint
  itemId
  __typename
}`,
  exerciseTaskExerciseFields: `fragment exerciseTaskExerciseFields on Exercise {
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
}`,
  exerciseTaskUserExerciseEntityFields: `fragment exerciseTaskUserExerciseEntityFields on UserExercise {
  exercise {
    ...exerciseTaskExerciseFields
    __typename
  }
  fpmMasteryLevel
  lastAttemptNumber
  lastCountHints
  __typename
}`,
  quizTaskFields: `fragment quizTaskFields on TopicQuizTask {
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
}`,
  assignmentFields: `fragment assignmentFields on Assignment {
  id
  key
  classroom {
    id
    cacheId
    name
    signupCode
    __typename
  }
  contentDescriptors
  startDate
  dueDate
  contents {
    ...contentFieldsForContents
    __typename
  }
  title
  domainId
  courseId
  unitId
  lessonId
  __typename
}`,
  contentFieldsForContents: `fragment contentFieldsForContents on LearnableContent {
  id
  kind
  title: translatedTitle
  defaultUrlPath
  topicPaths {
    path {
      id
      kind
      slug
      __typename
    }
    __typename
  }
  __typename
}`,
  courseChallengeTaskFields: `fragment courseChallengeTaskFields on SubjectChallengeTask {
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
}`,
  masteryChallengeTaskFields: `fragment masteryChallengeTaskFields on MasteryChallengeTask {
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
}`,
  problemCardFields: `fragment problemCardFields on ProblemCard {
  cardType
  done
  exerciseName
  problemType
  __typename
}`,
  problemTypeFields: `fragment problemTypeFields on ProblemType {
  items {
    id
    live
    sha
    __typename
  }
  name
  relatedVideos
  __typename
}`,
  promotionCriteriaFields: `fragment promotionCriteriaFields on PromotionCriteria {
  name
  value
  __typename
}`,
  prototypePracticeTaskFields: `fragment prototypePracticeTaskFields on PracticeTask {
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
}`,
  prototypeQuizTaskFields: `fragment prototypeQuizTaskFields on TopicQuizTask {
  id
  key
  taskType
  contentKey
  isCompleted
  taskAttemptHistory {
    ...taskAttemptHistoryFields
    __typename
  }
  __typename
}`,
  taskAttemptHistoryFields: `fragment taskAttemptHistoryFields on TaskProblemAttempt {
  correct
  timeDone
  seenHint
  itemId
  __typename
}`,
  unitTestTaskFields: `fragment unitTestTaskFields on TopicUnitTestTask {
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
}`,
  assessmentItemFields: `fragment assessmentItemFields on AssessmentItem {
  id
  sha
  problemType
  itemData
  __typename
}`,
  singleExercisePracticeTaskFields: `fragment singleExercisePracticeTaskFields on PracticeTask {
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
}`,
  taskExerciseFields: `fragment taskExerciseFields on Exercise {
  id
  contentKind
  isDoAll: isQuiz
  numAssessmentItems
  problemTypeKind
  slug
  translatedDisplayName
  __typename
}`,
  taskProblemAttemptHistoryFields: `fragment taskProblemAttemptHistoryFields on TaskProblemAttempt {
  correct
  seenHint
  itemId
  __typename
}`,
  taskUserExerciseFields: `fragment taskUserExerciseFields on UserExercise {
  exercise {
    ...taskExerciseFields
    __typename
  }
  lastAttemptNumber
  lastCountHints
  totalDone
  __typename
}`,
  ActivitySessionSkillLevelsV1: `fragment ActivitySessionSkillLevelsV1 on SkillLevelChange {
  id
  before
  after
  __typename
}`,
  ActivitySessionV1: `fragment ActivitySessionV1 on ActivitySession {
  id
  title
  subtitle
  activityKind {
    id
    __typename
  }
  durationMinutes
  eventTimestamp
  skillType
  __typename
}`,
}
