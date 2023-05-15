queries = {
  activatedDistrictTeachers: `query activatedDistrictTeachers($districtName: String!, $pageSize: Int, $cursor: Int) {
  activationReportByTeacher(districtName: $districtName, pageSize: $pageSize, cursor: $cursor) {
    rows {
      isActivated
      teacherKaid
      teacherName
      __typename
    }
    __typename
  }
}
`,
  ActiveDistrictQuery: `query ActiveDistrictQuery($districtName: String!, $from: DateTime, $upTo: DateTime, $schoolIds: [ID!], $gradeLevels: [DistrictGradeLevel!], $courseSIS: [String!]) {
  district(districtName: $districtName) {
    id
    schools {
      id
      name
      isKADSchool
      isKmapSchool
      __typename
    }
    activeGrades(from: $from, upTo: $upTo, schoolIds: $schoolIds) {
      id
      sortIndex
      name
      __typename
    }
    activeCourseSISNumbers(from: $from, upTo: $upTo, schoolIds: $schoolIds, gradeLevels: $gradeLevels)
    activeTeachers(from: $from, upTo: $upTo, schoolIds: $schoolIds, gradeLevels: $gradeLevels, courseSIS: $courseSIS) {
      id
      kaid
      displayNameForTeacher
      __typename
    }
    __typename
  }
}
`,
  ActivitySessionsQuery: `query ActivitySessionsQuery($studentKaid: String!, $endDate: Date, $startDate: Date, $courseType: String, $activityKind: String, $after: ID, $pageSize: Int) {
  user(kaid: $studentKaid) {
    id
    exams {
      id
      examId
      metadata {
        id
        nameInfo {
          name
          __typename
        }
        __typename
      }
      __typename
    }
    activityLog(endDate: $endDate, startDate: $startDate, courseType: $courseType, activityKind: $activityKind) {
      time {
        exerciseMinutes
        totalMinutes
        __typename
      }
      activitySessions(pageSize: $pageSize, after: $after) {
        sessions {
          ... on BasicActivitySession {
            ...ActivitySession
            __typename
          }
          ... on MasteryActivitySession {
            ...ActivitySession
            correctCount
            problemCount
            skillLevels {
              ...ActivitySessionSkillLevels
              exercise {
                id
                translatedTitle
                __typename
              }
              __typename
            }
            task {
              id
              isRestarted
              __typename
            }
            __typename
          }
          ... on TestPrepActivitySession {
            ...ActivitySession
            testPrepCorrectCount: correctCount
            testPrepProblemCount: problemCount
            testPrepSkillLevels: skillLevels {
              id
              skill {
                translatedTitle
                skillId
                __typename
              }
              before
              after
              __typename
            }
            __typename
          }
          __typename
        }
        pageInfo {
          nextCursor
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}

fragment ActivitySession on ActivitySession {
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
}

fragment ActivitySessionSkillLevels on SkillLevelChange {
  id
  before
  after
  __typename
}
`,
  aiGuideEnrollments: `query aiGuideEnrollments($kaids: [String!]) {
  aiGuideEnrollments(kaids: $kaids) {
    enrollments {
      disabledByModeratorDate
      disabledByModeratorKAID
      disabledByUserDate
      enrolledAt
      enrolledByKaid
      enrollmentGroup
      id
      user {
        id
        kaid
        email
        nickname
        age
        isTeacher
        isParent
        joined
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  aiGuideEnrollmentsMeta: `query aiGuideEnrollmentsMeta {
  aiGuideEnrollmentsMeta {
    countEnabled
    countEnrolled
    __typename
  }
}
`,
  aiGuideInvitationInfo: `query aiGuideInvitationInfo($token: String!) {
  aiGuideInvitationInfo(token: $token) {
    digitalTermsOfServiceURL
    isExpired
    hasHitUsageLimit
    __typename
  }
  isEnrolledInAIGuide
  user {
    id
    age
    __typename
  }
}
`,
  allCurationNodes: `query allCurationNodes {
  allDomains {
    id
    slug
    title
    children: courseChildren {
      id
      slug
      title
      children: unitChildren {
        id
        slug
        title
        children: lessonChildren {
          id
          slug
          title
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  allFlaggedGuideThreads: `query allFlaggedGuideThreads($page: Int, $limit: Int) {
  allFlaggedGuideThreads: allAiGuideThreads(moderationStatus: FLAGGED, page: $page, limit: $limit) {
    threads {
      id
      user {
        id
        kaid
        nickname
        joined
        points
        isAIGuideEnabled
        age
        isTeacher
        isFormalTeacher
        isParent
        isChild
        canAccessDistrictsHomepage
        hasParents
        hasCoach
        isK4dStudent
        isK4dTeacher
        isStudentOfFormalTeacherActor
        __typename
      }
      summary
      lastUpdatedAt
      flagged
      flaggedCategories
      interactions {
        id
        question
        url
        flagged
        flaggedCategories
        flaggedScores {
          hate
          hateThreatening
          selfHarm
          sexual
          sexualMinors
          violence
          violenceGraphic
          kaOffensiveTerms
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  allStandardsForSet: `query allStandardsForSet($setId: String!) {
  setOfStandards(setId: $setId) {
    id
    standards {
      id
      standardId
      description
      __typename
    }
    __typename
  }
}
`,
  allTranslatableLocales: `query allTranslatableLocales {
  locales(includeEnglish: false) {
    id
    lang: kaLocale
    crowdinLocale
    displayName
    __typename
  }
}
`,
  articleEditorQuery: `query articleEditorQuery($contentId: String!) {
  contentEditingStatus {
    editingDisabled
    publishDisabled
    __typename
  }
  isEditableByCurrentUser(contentId: $contentId, contentKind: "Article")
  isPublishableByCurrentUser(contentId: $contentId, contentKind: "Article")
  articleRevisionById(id: $contentId) {
    ...ArticleRevision
    __typename
  }
}
`,
  articleEditorRedirectQuery: `query articleEditorRedirectQuery($contentId: String!) {
  articleRevisionById(id: $contentId) {
    id
    slug
    sha
    __typename
  }
}
`,
  articleForDiff: `query articleForDiff($sha: String!) {
  articleRevisionBySha(sha: $sha) {
    id
    sha
    perseusContent
    __typename
  }
}
`,
  articleRevisionsForDiff: `query articleRevisionsForDiff($contentId: String!) {
  allArticleRevisionsById(id: $contentId) {
    revisions {
      id
      cacheId: sha
      sha
      creationDate
      createdBy {
        id
        nickname
        __typename
      }
      __typename
    }
    hasMore
    __typename
  }
}
`,
  assessmentItemForDiff: `query assessmentItemForDiff($sha: String!) {
  assessmentItemRevisionsBySHAs(shas: [$sha]) {
    id
    itemShapeType
    itemData
    __typename
  }
}
`,
  assessmentItemRevisionsForDiff: `query assessmentItemRevisionsForDiff($contentId: String!) {
  allAssessmentItemRevisionsByID(contentId: $contentId) {
    id
    cacheId: sha
    sha
    creationDate
    createdBy {
      id
      nickname
      __typename
    }
    __typename
  }
}
`,
  assignmentCsvByClassQuery: `query assignmentCsvByClassQuery($classDescriptor: String!, $filters: CoachAssignmentFilters!, $orderBy: AssignmentOrder!, $after: ID, $teacherKaid: String!) {
  classroom: classroomByDescriptor(descriptor: $classDescriptor) {
    id
    cacheId
    assignmentsPage(filters: $filters, orderBy: $orderBy, after: $after) {
      assignments {
        ...AssignmentCsvData
        __typename
      }
      pageInfo {
        nextCursor
        __typename
      }
      __typename
    }
    __typename
  }
}

fragment AssignmentCsvData on Assignment {
  assignedDate
  startDate
  dueDate
  id
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
    __typename
  }
  studentList {
    id
    cacheId
    name
    __typename
  }
  __typename
}
`,
  assignmentCsvByIdQuery: `query assignmentCsvByIdQuery($assignmentId: String!, $teacherKaid: String!) {
  coach: user {
    id
    assignment: assignmentByThisUser(id: $assignmentId) {
      ...AssignmentCsvData
      __typename
    }
    __typename
  }
}

fragment AssignmentCsvData on Assignment {
  assignedDate
  startDate
  dueDate
  id
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
    __typename
  }
  studentList {
    id
    cacheId
    name
    __typename
  }
  __typename
}
`,
  assignmentQueryForDevAdmin: `query assignmentQueryForDevAdmin($coachKaid: String!, $contentAssignmentId: String!) {
  coach: user(kaid: $coachKaid) {
    id
    assignment: assignmentByThisUser(id: $contentAssignmentId) {
      id
      itemCompletionStates: itemCompletionStatesForAllStudents {
        student {
          id
          kaid
          coachNickname(teacherKaid: $coachKaid)
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
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  availableKinds: `query availableKinds {
  permission {
    content {
      data {
        availableKinds
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  availableRoles: `query availableRoles {
  permission {
    content {
      data {
        availableRoles
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  avatarDataForProfile: `query avatarDataForProfile($kaid: String!) {
  user(kaid: $kaid) {
    id
    avatar {
      name
      imageSrc
      __typename
    }
    __typename
  }
}
`,
  careersPageQuery: `query careersPageQuery {
  careers {
    departments {
      name
      jobs {
        title
        location
        url
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  checkPromotion: `query checkPromotion($promoName: String!) {
  user {
    id
    promotion(promoName: $promoName)
    __typename
  }
}
`,
  checkUsername: `query checkUsername($username: String!) {
  checkUsername(username: $username) {
    error {
      code
      __typename
    }
    __typename
  }
}
`,
  ClassCodeByClassIdQuery: `query ClassCodeByClassIdQuery($classId: String!) {
  user {
    id
    studentList(id: $classId) {
      id
      cacheId
      signupCode
      __typename
    }
    __typename
  }
}
`,
  ClassDescriptorByClassCodeQuery: `query ClassDescriptorByClassCodeQuery($classCode: String!) {
  studentList(classCode: $classCode) {
    id
    cacheId
    descriptor
    __typename
  }
}
`,
  ClassInfo: `query ClassInfo($classCode: String!) {
  joinByClassCodeInfo(classCode: $classCode) {
    id
    cacheId
    name
    signupCode
    includesDistrictOwnedData
    __typename
  }
}
`,
  ClassroomByCode: `query ClassroomByCode($classCode: String!) {
  studentList(classCode: $classCode) {
    cacheId
    coachKaid
    descriptor
    hasAssignments
    id
    name
    __typename
  }
}
`,
  ClassroomByDescriptorQuery: `query ClassroomByDescriptorQuery($descriptor: String!) {
  classroomByDescriptor(descriptor: $descriptor) {
    id
    cacheId
    name
    key
    descriptor
    signupCode
    includesSat
    autoGenerated
    createdOn
    googleClassId
    googleClassName
    countStudents
    hasAssignments
    hasCourseMasteryGoals(filter: NO_KMAP)
    classroomDistrictInfo {
      id
      isNweaMapSynced
      __typename
    }
    testPrepExams {
      id
      examId
      examGroup {
        id
        examGroupMetadata {
          id
          nameInfo {
            groupName
            __typename
          }
          __typename
        }
        __typename
      }
      metadata {
        id
        areas {
          id
          title
          __typename
        }
        __typename
      }
      __typename
    }
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
}
`,
  ClassroomDistrictInfosQuery: `query ClassroomDistrictInfosQuery($kaid: String) {
  coach: user(kaid: $kaid) {
    id
    classroomDistrictInfos: coachedClassroomDistrictInfos(primaryTeacherOnly: true) {
      id
      studentList {
        id
        classDescriptor: descriptor
        cacheId
        name
        signupCode
        topics {
          id
          slug
          translatedStandaloneTitle
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  classroomHasCourseMasteryAssignments: `query classroomHasCourseMasteryAssignments($classroomDescriptor: String!) {
  classroomByDescriptorV2(descriptor: $classroomDescriptor) {
    id
    cacheId
    hasMasteryAssignments
    __typename
  }
}
`,
  ClassSubjectMasteryProgress: `query ClassSubjectMasteryProgress($classDescriptor: String!, $topicId: String!, $teacherKaid: String!) {
  topicById(id: $topicId) {
    id
    childTopics {
      id
      translatedTitle
      __typename
    }
    __typename
  }
  classroom: classroomByDescriptor(descriptor: $classDescriptor) {
    id
    cacheId
    students {
      id
      coachNickname(teacherKaid: $teacherKaid)
      subjectProgress(topicId: $topicId) {
        currentMastery {
          percentage
          pointsEarned
          pointsAvailable
          __typename
        }
        unitProgresses {
          topic {
            id
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
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  ClassUnitMasteryProgress: `query ClassUnitMasteryProgress($classDescriptor: String!, $topicId: String!, $teacherKaid: String!) {
  topicById(id: $topicId) {
    id
    translatedTitle
    __typename
  }
  classroom: classroomByDescriptor(descriptor: $classDescriptor) {
    id
    cacheId
    students {
      id
      coachNickname(teacherKaid: $teacherKaid)
      unitProgress(topicId: $topicId) {
        topic {
          id
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
      __typename
    }
    __typename
  }
}
`,
  CoachAssignments: `query CoachAssignments($classDescriptor: String!, $assignmentFilters: CoachAssignmentFilters, $orderBy: AssignmentOrder!, $pageSize: Int, $after: ID) {
  classroom: classroomByDescriptor(descriptor: $classDescriptor) {
    id
    cacheId
    assignmentsPage(filters: $assignmentFilters, orderBy: $orderBy, after: $after, pageSize: $pageSize) {
      assignments {
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
        __typename
      }
      pageInfo {
        nextCursor
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  coachDetails: `query coachDetails {
  user {
    id
    parents {
      id
      __typename
    }
    teachers: coaches(coachType: TEACHER) {
      id
      __typename
    }
    __typename
  }
}
`,
  contentEditingStatus: `query contentEditingStatus {
  contentEditingStatus {
    editingEnabled
    publishEnabled
    __typename
  }
}
`,
  contentEditingStatusQuery: `query contentEditingStatusQuery {
  contentEditingStatus {
    editingDisabled
    publishDisabled
    __typename
  }
}
`,
  contentEditorArticleRevisions: `query contentEditorArticleRevisions($contentId: String!) {
  allArticleRevisionsById(id: $contentId) {
    revisions {
      ...contentEditorContentRevision
      ...contentEditorLearnableContent
      createdBy {
        id
        nickname
        __typename
      }
      authorNames
      content: perseusContent
      __typename
    }
    __typename
  }
}

fragment contentEditorContentRevision on ContentRevision {
  id
  cacheId: sha
  creationDate
  __typename
}

fragment contentEditorLearnableContent on LearnableContentRevision {
  doNotPublish
  listed
  slug
  title
  description
  __typename
}
`,
  contentEditorExerciseRevisions: `query contentEditorExerciseRevisions($contentId: String!) {
  allExerciseRevisionsById(id: $contentId) {
    revisions {
      ...contentEditorContentRevision
      ...contentEditorLearnableContent
      createdBy {
        id
        nickname
        __typename
      }
      authorName
      covers
      prerequisites
      relatedContent
      completionCriteria: suggestedCompletionCriteria
      problemItems: problemTypes {
        name
        relatedVideos
        items {
          id
          sha
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}

fragment contentEditorContentRevision on ContentRevision {
  id
  cacheId: sha
  creationDate
  __typename
}

fragment contentEditorLearnableContent on LearnableContentRevision {
  doNotPublish
  listed
  slug
  title
  description
  __typename
}
`,
  contentEditorGetArticleRevision: `query contentEditorGetArticleRevision($id: String!) {
  articleRevisionById(id: $id) {
    ...ArticleRevision
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
}
`,
  contentEditorGetExerciseRevision: `query contentEditorGetExerciseRevision($id: String!) {
  exerciseRevisionById(id: $id) {
    ...ExerciseRevision
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
}
`,
  contentEditorGetProjectRevision: `query contentEditorGetProjectRevision($id: String!) {
  projectRevisionById(id: $id) {
    ...ProjectRevision
    __typename
  }
}

fragment ProjectRevision on ProjectRevision {
  id
  contentId
  contentKind
  slug
  sha
  listed
  __typename
}
`,
  contentEditorGetPublishedExerciseProblems: `query contentEditorGetPublishedExerciseProblems($id: String!) {
  exerciseById(id: $id) {
    id
    assessmentItems {
      id
      sha
      __typename
    }
    __typename
  }
}
`,
  contentEditorGetTalkthroughRevision: `query contentEditorGetTalkthroughRevision($id: String!) {
  talkthroughRevisionById(id: $id) {
    ...TalkthroughRevision
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
}
`,
  contentEditorGetVideoRevision: `query contentEditorGetVideoRevision($id: String!) {
  videoRevisionById(id: $id) {
    ...VideoRevision
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
}
`,
  contentEditorPublishGetContentStageItem: `query contentEditorPublishGetContentStageItem($kaLocale: KALocale!, $contentKind: String!, $contentId: String!) {
  contentStageItem(kaLocale: $kaLocale, contentKind: $contentKind, contentId: $contentId) {
    id
    sha
    sourceKaLocale
    isModified
    doNotPublish
    __typename
  }
}
`,
  contentEditorVideoRevisions: `query contentEditorVideoRevisions($contentId: String!) {
  allVideoRevisionsById(id: $contentId) {
    revisions {
      ...contentEditorContentRevision
      ...contentEditorLearnableContent
      createdBy {
        id
        nickname
        __typename
      }
      authorNames
      augmentedTranscript
      keywords
      duration
      youtubeId
      __typename
    }
    __typename
  }
}

fragment contentEditorContentRevision on ContentRevision {
  id
  cacheId: sha
  creationDate
  __typename
}

fragment contentEditorLearnableContent on LearnableContentRevision {
  doNotPublish
  listed
  slug
  title
  description
  __typename
}
`,
  contentForDescriptors: `query contentForDescriptors($descriptors: [String]!) {
  contentForDescriptors(descriptors: $descriptors) {
    id
    sha
    __typename
  }
}
`,
  ContentForLearnableContent: `query ContentForLearnableContent($id: String!, $kind: String!, $kaLocale: KALocale!) {
  publishedContentVersion(kaLocale: $kaLocale) {
    contentVersion
    __typename
  }
  learnableContent(id: $id, kind: $kind) {
    ...LearnableContentData
    __typename
  }
}

fragment LearnableContentData on LearnableContent {
  id
  contentKind
  slug
  translatedTitle
  ... on Article {
    ...MappedStandards
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
    configVersion
    defaultUrlPath
    height
    nodeSlug
    translatedDescription
    translatedTests
    testStrings {
      message
      __typename
    }
    userAuthoredContentType
    width
    __typename
  }
  ... on Exercise {
    ...MappedStandards
    __typename
  }
  ... on Interactive {
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
    ...MappedStandards
    __typename
  }
  __typename
}

fragment MappedStandards on LearnableContent {
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
  ContentForPath: `query ContentForPath($path: String!, $countryCode: String!, $kaLocale: KALocale!) {
  publishedContentVersion(kaLocale: $kaLocale) {
    contentVersion
    __typename
  }
  contentRoute(path: $path, countryCode: $countryCode) {
    resolvedPath
    listedPathData {
      course {
        ...CourseData
        unitChildren {
          ...UnitData
          allOrderedChildren {
            ... on Lesson {
              ...LessonData
              __typename
            }
            ... on TopicQuiz {
              ...QuizMetadata
              __typename
            }
            ... on TopicUnitTest {
              ...UnitTestMetadata
              __typename
            }
            __typename
          }
          __typename
        }
        __typename
      }
      content {
        ...LearnableContentData
        __typename
      }
      __typename
    }
    unlistedPathData {
      course {
        ...CourseData
        unitChildren {
          ...UnitData
          allOrderedChildren {
            ... on Lesson {
              ...LessonData
              __typename
            }
            ... on TopicQuiz {
              ...QuizMetadata
              __typename
            }
            ... on TopicUnitTest {
              ...UnitTestMetadata
              __typename
            }
            __typename
          }
          __typename
        }
        __typename
      }
      content {
        ...LearnableContentData
        __typename
      }
      __typename
    }
    __typename
  }
}

fragment CourseData on Course {
  id
  masteryEnabled
  relativeUrl
  slug
  translatedTitle
  parent {
    id
    contentKind
    relativeUrl
    slug
    translatedTitle
    __typename
  }
  __typename
}

fragment LearnableContentData on LearnableContent {
  id
  contentKind
  slug
  translatedTitle
  ... on Article {
    ...MappedStandards
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
    configVersion
    defaultUrlPath
    height
    nodeSlug
    translatedDescription
    translatedTests
    testStrings {
      message
      __typename
    }
    userAuthoredContentType
    width
    __typename
  }
  ... on Exercise {
    ...MappedStandards
    __typename
  }
  ... on Interactive {
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
    ...MappedStandards
    __typename
  }
  __typename
}

fragment LearnableContentMetadata on LearnableContent {
  id
  canonicalUrl: defaultUrlPath
  contentDescriptor
  contentKind
  slug
  translatedTitle
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
  translatedCustomTitleTag
  __typename
}

fragment LessonData on Lesson {
  id
  relativeUrl
  slug
  translatedTitle
  key
  curatedChildren(includeUnlisted: false) {
    ... on LearnableContent {
      ...LearnableContentMetadata
      __typename
    }
    __typename
  }
  __typename
}

fragment MappedStandards on LearnableContent {
  mappedStandards {
    setId
    id
    standardId
    description
    __typename
  }
  __typename
}

fragment QuizMetadata on TopicQuiz {
  ...LearnableContentMetadata
  index
  __typename
}

fragment UnitData on Unit {
  id
  masteryEnabled
  slug
  translatedTitle
  relativeUrl
  unlistedAncestorIds
  __typename
}

fragment UnitTestMetadata on TopicUnitTest {
  ...LearnableContentMetadata
  __typename
}
`,
  ContentItemAssignmentStatusesQuery: `query ContentItemAssignmentStatusesQuery($classDescriptor: String!, $contentDescriptors: [String!]!) {
  classroom: classroomByDescriptor(descriptor: $classDescriptor) {
    id
    cacheId
    contentAssignmentStatuses: nonDraftAssignmentStatusesForContentDescriptors(contentDescriptors: $contentDescriptors)
    __typename
  }
}
`,
  contentTabThreeLevelQuery: `query contentTabThreeLevelQuery($courseId: String!) {
  courseById(id: $courseId) {
    id
    children: curatedChildren {
      ...CourseFields
      ...LessonAndChildrenFields
      ... on Unit {
        id
        description
        iconPath
        key
        kind
        mappedStandardIds
        title: translatedTitle
        children: allOrderedChildren {
          __typename
          ...LearnableContentFields
          ...QuizAndTestFields
          ...LessonAndChildrenFields
        }
        __typename
      }
      __typename
    }
    __typename
  }
}

fragment CourseFields on Course {
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

fragment LearnableContentFields on LearnableContent {
  contentId
  description
  kind
  mappedStandardIds
  nodeUrl: urlWithinTopic
  slug
  title: translatedTitle
  __typename
}

fragment LessonAndChildrenFields on Lesson {
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

fragment QuizAndTestFields on LearnableContent {
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
}
`,
  contentTabTwoLevelQuery: `query contentTabTwoLevelQuery($courseId: String!) {
  courseById(id: $courseId) {
    id
    children: curatedChildren {
      ...CourseFields
      ...LessonAndChildrenFields
      ... on Unit {
        id
        description
        iconPath
        key
        kind
        mappedStandardIds
        title: translatedTitle
        children: allOrderedChildren {
          __typename
          ...LearnableContentFields
          ...QuizAndTestFields
          ... on Lesson {
            id
            description
            iconPath
            key
            kind
            mappedStandardIds
            title: translatedTitle
            __typename
          }
        }
        __typename
      }
      __typename
    }
    __typename
  }
}

fragment CourseFields on Course {
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

fragment LearnableContentFields on LearnableContent {
  contentId
  description
  kind
  mappedStandardIds
  nodeUrl: urlWithinTopic
  slug
  title: translatedTitle
  __typename
}

fragment LessonAndChildrenFields on Lesson {
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

fragment QuizAndTestFields on LearnableContent {
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
}
`,
  Content_GetRelatedAssessmentItems: `query Content_GetRelatedAssessmentItems($exerciseId: String) {
  exerciseById(id: $exerciseId) {
    id
    assessmentItems {
      id
      itemShapeType
      itemData
      __typename
    }
    __typename
  }
}
`,
  courseChallengeAttemptQuery: `query courseChallengeAttemptQuery($topicId: String!) {
  user {
    id
    latestCourseChallengeAttempt(courseId: $topicId) {
      id
      numAttempted
      numCorrect
      completedDate
      canResume
      isCompleted
      __typename
    }
    __typename
  }
}
`,
  courseEditorFoldersByCourseIds: `query courseEditorFoldersByCourseIds($courseIds: [String!]) {
  allFolders(courseIdsFilter: $courseIds) {
    id
    __typename
  }
}
`,
  CourseEditorGetCourse: `query CourseEditorGetCourse($courseId: String!, $snapshotId: Int) {
  course(id: $courseId, snapshotId: $snapshotId) {
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
}
`,
  courseEditorGetCourseEntity: `query courseEditorGetCourseEntity($id: String!) {
  courseById(id: $id) {
    id
    creationDate
    belongsToCourseId
    courseSnapshotId
    __typename
  }
}
`,
  courseEditorGetEditingCourseRevisions: `query courseEditorGetEditingCourseRevisions($ids: [String!]!) {
  courses(ids: $ids) {
    ...FolderCourseRevisionFragment
    __typename
  }
}

fragment FolderCourseRevisionFragment on CourseRevision {
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
}
`,
  courseEditorGetEditingIdentity: `query courseEditorGetEditingIdentity($descriptors: [String!]!) {
  revisionsForDescriptors(descriptors: $descriptors) {
    ... on ContentRevision {
      id
      sha
      __typename
    }
    ... on LearnableContentRevision {
      doNotPublish
      slug
      sourceKaLocale
      importedFromSha
      listed
      title
      __typename
    }
    ... on ExerciseRevision {
      suggestedCompletionCriteria
      __typename
    }
    __typename
  }
}
`,
  courseEditorGetEditingRevisions: `query courseEditorGetEditingRevisions($descriptors: [String!]!) {
  revisionsForDescriptors(descriptors: $descriptors) {
    ... on ContentRevision {
      id
      contentKind
      sha
      __typename
    }
    ... on LearnableContentRevision {
      doNotPublish
      slug
      sourceKaLocale
      importedFromSha
      listed
      title
      translatedTitle
      description
      mappedStandards {
        id
        setId
        standardId
        __typename
      }
      __typename
    }
    ... on ArticleRevision {
      perseusContent
      __typename
    }
    ... on ExerciseRevision {
      assessmentItems {
        id
        itemData
        name
        authorNames
        perseusApiMajorVersion
        __typename
      }
      problemTypes {
        name
        items {
          id
          __typename
        }
        __typename
      }
      suggestedCompletionCriteria
      __typename
    }
    ... on VideoRevision {
      youtubeId
      subtitles {
        text
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  courseEditorGetEditingTitles: `query courseEditorGetEditingTitles($descriptors: [String!]!) {
  revisionsForDescriptors(descriptors: $descriptors) {
    ... on ContentRevision {
      id
      sha
      __typename
    }
    ... on LearnableContentRevision {
      title
      translatedTitle
      __typename
    }
    __typename
  }
}
`,
  courseEditorGetFolderCourses: `query courseEditorGetFolderCourses($ids: [String!]!) {
  courses(ids: $ids) {
    id
    contentId
    title
    importable
    __typename
  }
}
`,
  courseEditorGetFolderGroups: `query courseEditorGetFolderGroups {
  folderGroups {
    myFolders {
      ...LibraryFolder
      __typename
    }
    otherFolders {
      ...LibraryFolder
      __typename
    }
    __typename
  }
}

fragment LibraryFolder on Folder {
  id
  name
  kaLocale
  courseIds
  __typename
}
`,
  courseEditorGetPublishedArticle: `query courseEditorGetPublishedArticle($contentId: String!) {
  articleById(id: $contentId) {
    ...LearnableContent
    __typename
  }
}

fragment LearnableContent on LearnableContent {
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
}
`,
  courseEditorGetPublishedChallenge: `query courseEditorGetPublishedChallenge($contentId: String!) {
  challengeById(id: $contentId) {
    ...LearnableContent
    __typename
  }
}

fragment LearnableContent on LearnableContent {
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
}
`,
  courseEditorGetPublishedCourseRevisions: `query courseEditorGetPublishedCourseRevisions($ids: [String!]!) {
  courses(ids: $ids) {
    id
    lastPublishedData {
      ...FolderCourseRevisionFragment
      __typename
    }
    __typename
  }
}

fragment FolderCourseRevisionFragment on CourseRevision {
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
}
`,
  courseEditorGetPublishedEntities: `query courseEditorGetPublishedEntities($descriptors: [String!]!) {
  contentForDescriptors(descriptors: $descriptors) {
    id
    kind
    sha
    slug
    listed
    sourceLanguage
    title
    translatedTitle
    description
    translatedDescription
    mappedStandards {
      id
      setId
      standardId
      __typename
    }
    ... on Article {
      perseusContent
      __typename
    }
    ... on Exercise {
      assessmentItems {
        id
        itemData
        authorNames
        name
        perseusApiMajorVersion
        problemType
        __typename
      }
      suggestedCompletionCriteria
      __typename
    }
    ... on Video {
      youtubeId
      subtitles {
        text
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  courseEditorGetPublishedExercise: `query courseEditorGetPublishedExercise($contentId: String!) {
  exerciseById(id: $contentId) {
    ...LearnableContent
    __typename
  }
}

fragment LearnableContent on LearnableContent {
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
}
`,
  courseEditorGetPublishedIdentity: `query courseEditorGetPublishedIdentity($descriptors: [String!]!) {
  contentForDescriptors(descriptors: $descriptors) {
    id
    sha
    slug
    listed
    sourceLanguage
    title
    ... on Exercise {
      suggestedCompletionCriteria
      __typename
    }
    __typename
  }
}
`,
  courseEditorGetPublishedInteractive: `query courseEditorGetPublishedInteractive($contentId: String!) {
  interactiveById(id: $contentId) {
    ...LearnableContent
    __typename
  }
}

fragment LearnableContent on LearnableContent {
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
}
`,
  courseEditorGetPublishedProject: `query courseEditorGetPublishedProject($contentId: String!) {
  projectById(id: $contentId) {
    ...LearnableContent
    __typename
  }
}

fragment LearnableContent on LearnableContent {
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
}
`,
  courseEditorGetPublishedTalkthrough: `query courseEditorGetPublishedTalkthrough($contentId: String!) {
  talkthroughById(id: $contentId) {
    ...LearnableContent
    __typename
  }
}

fragment LearnableContent on LearnableContent {
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
}
`,
  courseEditorGetPublishedTitlesForCurationIDs: `query courseEditorGetPublishedTitlesForCurationIDs($ids: [String!]!) {
  topicsById(ids: $ids) {
    id
    contentKind
    title
    translatedTitle
    __typename
  }
}
`,
  courseEditorGetPublishedTitlesForDescriptors: `query courseEditorGetPublishedTitlesForDescriptors($descriptors: [String!]!) {
  contentForDescriptors(descriptors: $descriptors) {
    id
    contentKind
    title
    translatedTitle
    __typename
  }
}
`,
  courseEditorGetPublishedTopic: `query courseEditorGetPublishedTopic($contentId: String!) {
  topicById(id: $contentId) {
    id
    kind
    creationDate
    relativeUrl
    __typename
  }
}
`,
  courseEditorGetPublishedTopicChildren: `query courseEditorGetPublishedTopicChildren($ids: [String!]!) {
  topicsById(ids: $ids) {
    id
    children {
      ... on LearnableContent {
        id
        contentKind
        __typename
      }
      ... on CurationNode {
        id
        contentKind
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  courseEditorGetPublishedTopicPathsForCurationIDs: `query courseEditorGetPublishedTopicPathsForCurationIDs($ids: [String!]!) {
  topicsById(ids: $ids) {
    id
    contentKind
    slug
    topicPaths {
      path {
        id
        kind
        slug
        content {
          ... on CurationNode {
            title
            __typename
          }
          ... on LearnableContent {
            title
            __typename
          }
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  courseEditorGetPublishedTopicPathsForDescriptors: `query courseEditorGetPublishedTopicPathsForDescriptors($descriptors: [String!]!) {
  contentForDescriptors(descriptors: $descriptors) {
    id
    contentKind
    slug
    topicPaths {
      path {
        id
        kind
        slug
        content {
          ... on CurationNode {
            title
            __typename
          }
          ... on LearnableContent {
            title
            __typename
          }
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  courseEditorGetPublishedTopicQuiz: `query courseEditorGetPublishedTopicQuiz($slug: String!) {
  topicQuiz(slug: $slug) {
    id
    kind
    creationDate
    defaultUrlPath
    __typename
  }
}
`,
  courseEditorGetPublishedTopicSlugById: `query courseEditorGetPublishedTopicSlugById($id: String!) {
  topicById(id: $id) {
    id
    slug
    __typename
  }
}
`,
  courseEditorGetPublishedTopicStandardIds: `query courseEditorGetPublishedTopicStandardIds($slug: String!, $locale: String!) {
  topic(slug: $slug) {
    id
    mappedStandardIds(locale: $locale)
    __typename
  }
}
`,
  courseEditorGetPublishedTopicsTitles: `query courseEditorGetPublishedTopicsTitles($ids: [String!]!) {
  topicsById(ids: $ids) {
    id
    title
    __typename
  }
}
`,
  courseEditorGetPublishedTopicUnitTest: `query courseEditorGetPublishedTopicUnitTest($slug: String!) {
  topicUnitTest(slug: $slug) {
    id
    kind
    creationDate
    defaultUrlPath
    __typename
  }
}
`,
  courseEditorGetPublishedVideo: `query courseEditorGetPublishedVideo($contentId: String!) {
  videoById(contentId: $contentId) {
    ...LearnableContent
    __typename
  }
}

fragment LearnableContent on LearnableContent {
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
}
`,
  courseEditorGetStatus: `query courseEditorGetStatus {
  contentEditingStatus {
    publishEnabled
    __typename
  }
}
`,
  courseEditorGetSyncOperationsSummary: `query courseEditorGetSyncOperationsSummary($sourceId: String!, $sourceSnapshotId: Int!, $targetId: String!, $targetOperationId: Int!) {
  syncOperationsSummary(sourceId: $sourceId, sourceSnapshotId: $sourceSnapshotId, targetId: $targetId, targetOperationId: $targetOperationId) {
    type
    count
    __typename
  }
}
`,
  CourseEditorIsLinkedCourseInSync: `query CourseEditorIsLinkedCourseInSync($sourceId: String!, $sourceSnapshotId: Int!, $targetId: String!, $targetOperationId: Int!) {
  isLinkedCourseInSync(sourceId: $sourceId, sourceSnapshotId: $sourceSnapshotId, targetId: $targetId, targetOperationId: $targetOperationId)
}
`,
  courseEditorSearchEditing: `query courseEditorSearchEditing($text: String!, $filters: [EditingSearchFilter!]) {
  searchEditingContent(text: $text, filters: $filters, limit: 100) {
    ... on ContentRevision {
      id
      contentKind
      contentId
      __typename
    }
    ... on LearnableContentRevision {
      title
      translatedTitle
      __typename
    }
    __typename
  }
}
`,
  courseEditorSearchPublished: `query courseEditorSearchPublished($query: String!, $contentKinds: [String]) {
  searchPage(query: $query, contentKinds: $contentKinds, numResults: 100) {
    results {
      contentKind: kind
      contentId
      learnableContent {
        id
        title
        translatedTitle
        __typename
      }
      curationNode {
        id
        title
        translatedTitle
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  CourseEditor_MobileRegions: `query CourseEditor_MobileRegions {
  curricula: curriculums {
    key
    name
    country
    region
    __typename
  }
}
`,
  CourseMenuEditorQuery: `query CourseMenuEditorQuery {
  curricula: curriculums(includeEmptyCurriculum: true) {
    key
    courseMenuRevision {
      ...CourseMenuRevisionFields
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
}
`,
  CourseMenuEditor_ContentStageItems: `query CourseMenuEditor_ContentStageItems($kaLocale: KALocale!, $descriptors: [String!]!) {
  contentStageItems(kaLocale: $kaLocale, contentDescriptors: $descriptors) {
    id
    contentId
    isModified
    __typename
  }
}
`,
  CourseMenuEditor_DefaultCourseMenu: `query CourseMenuEditor_DefaultCourseMenu {
  defaultCourseMenu: learnMenuTopics {
    identifier: slug
    translatedTitle
    href
    isNew
    children {
      identifier: slug
      translatedTitle
      href
      isNew
      loggedOutHref
      nonContentLink
      __typename
    }
    __typename
  }
}
`,
  courseProgresses: `query courseProgresses($courseIds: [String!]!) {
  user {
    id
    courseProgresses(courseIds: $courseIds) {
      ...CourseProgress
      __typename
    }
    __typename
  }
}

fragment CourseProgress on SubjectProgress {
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
}
`,
  CoursesUnitsQuery: `query CoursesUnitsQuery($selectedMasteryCourseIds: [String]!) {
  coursesByIds(ids: $selectedMasteryCourseIds) {
    id
    slug
    translatedTitle
    unitChildren {
      id
      translatedTitle
      learnableContentSummary {
        countExercises
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  csvReportStatus: `query csvReportStatus($kaid: String!, $districtID: String!) {
  getLastNAdminReportsForUser(kaid: $kaid, districtID: $districtID, topNResults: 1) {
    adminReports {
      id
      kaid
      districtKeyId
      status
      blobCreatedAt
      blobExpiresAt
      reportType
      startDate
      endDate
      schools
      createdAt
      fileName
      fileSize
      bands
      courseSISValues
      teacherKaids
      course {
        id
        key
        title
        translatedTitle
        masteryEnabled
        __typename
      }
      grades
      strandKey
      notifyByEmail
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}
`,
  curationNodePublishedInfo: `query curationNodePublishedInfo($contentId: String!) {
  publishedInfo: topicById(id: $contentId) {
    id
    relativeUrl
    creationDate
    __typename
  }
}
`,
  curationPageRevision: `query curationPageRevision($id: String!) {
  curationPageRevision: curationPageRevisionById(id: $id) {
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
    curriculumKey
    sha
    hasUnpublishedChanges
    __typename
  }
}
`,
  curriculumsQuery: `query curriculumsQuery {
  curriculums {
    country
    key
    name
    region
    __typename
  }
}
`,
  DevadminListAuthors: `query DevadminListAuthors {
  allAuthorOptions {
    id
    name
    __typename
  }
}
`,
  digitalSatAuthTransfer: `query digitalSatAuthTransfer {
  user {
    id
    transferAuthToken
    __typename
  }
}
`,
  discussionAvatar: `query discussionAvatar {
  user {
    id
    avatar {
      name
      imageSrc
      __typename
    }
    __typename
  }
}
`,
  DisplayNameQuery: `query DisplayNameQuery($kaid: String!) {
  user(kaid: $kaid) {
    id
    userDistrictInfos(includeDeleted: true) {
      id
      displayNameForTeacher
      __typename
    }
    __typename
  }
}
`,
  DistrictActivationByGradeLevelContainerUsingNewService: `query DistrictActivationByGradeLevelContainerUsingNewService($districtId: ID!, $schoolIds: [ID!]) {
  activationReportByGradeLevel: activationReportByGradeLevelPortedToGo(districtId: $districtId, schoolIds: $schoolIds) {
    rows {
      gradeLevel {
        id
        name
        sortIndex
        __typename
      }
      numStudentsTotal
      numStudentsActivated
      numTeachersTotal
      numTeachersActivated
      __typename
    }
    updatedAt
    totalRow {
      numStudentsTotal
      numStudentsActivated
      numTeachersTotal
      numTeachersActivated
      __typename
    }
    __typename
  }
}
`,
  DistrictActivationBySchoolContainerUsingNewService: `query DistrictActivationBySchoolContainerUsingNewService($districtId: ID!, $schoolIds: [ID!]) {
  activationReportBySchool: activationReportBySchoolPortedToGo(districtId: $districtId, schoolIds: $schoolIds) {
    rows {
      school {
        id
        name
        __typename
      }
      numStudentsTotal
      numStudentsActivated
      numTeachersTotal
      numTeachersActivated
      __typename
    }
    updatedAt
    totalRow {
      numStudentsTotal
      numStudentsActivated
      numTeachersTotal
      numTeachersActivated
      __typename
    }
    __typename
  }
}
`,
  DistrictActivationByTeacherContainer: `query DistrictActivationByTeacherContainer($districtName: String!, $schoolIds: [ID!], $teacherIDs: [ID!], $pageSize: Int, $cursor: Int) {
  activationReportByTeacher(districtName: $districtName, schoolIds: $schoolIds, teacherIDs: $teacherIDs, pageSize: $pageSize, cursor: $cursor) {
    rows {
      teacherId
      teacherName
      numStudentsTotal
      numStudentsActivated
      isActivated
      __typename
    }
    totalCount
    updatedAt
    __typename
  }
}
`,
  DistrictGradeLevelsQuery: `query DistrictGradeLevelsQuery {
  userFacingGradeLevels {
    id
    name
    __typename
  }
}
`,
  districtHomepage: `query districtHomepage($districtID: String!, $schoolIDs: [ID!]) {
  districtHomepage(districtID: $districtID, schoolIDs: $schoolIDs) {
    dateInfo {
      lastUpdatedDate
      from
      upTo
      __typename
    }
    studentActivations {
      numRosteredStudents
      numActivated
      numWithLearningTime
      __typename
    }
    weeklyLearningTime {
      startOfWeek
      endOfWeek
      numActivatedStudents
      numStudentsNoTime
      numStudentsLt15
      numStudents15to30
      numStudentsGt30
      __typename
    }
    top5Courses: top5CourseSchool {
      course {
        id
        title
        __typename
      }
      school {
        id
        name
        __typename
      }
      info {
        attemptedPercent
        familiarPercent
        proficientPercent
        masteredPercent
        __typename
      }
      __typename
    }
    top5Grades: top5GradeSchool {
      gradeLevel {
        id
        name
        __typename
      }
      school {
        id
        name
        __typename
      }
      info {
        attemptedPercent
        familiarPercent
        proficientPercent
        masteredPercent
        __typename
      }
      __typename
    }
    mapOnlyTop5Grades: top5GradeSchool(mapOnly: true) {
      gradeLevel {
        id
        name
        __typename
      }
      school {
        id
        name
        __typename
      }
      info {
        attemptedPercent
        familiarPercent
        proficientPercent
        masteredPercent
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  districtHomepageProgress: `query districtHomepageProgress($districtID: String!, $schoolIDs: [ID!], $mapOnly: Boolean) {
  districtHomepage(districtID: $districtID, schoolIDs: $schoolIDs) {
    top5CourseSchool {
      course {
        id
        title
        __typename
      }
      school {
        id
        name
        __typename
      }
      info {
        attemptedPercent
        familiarPercent
        proficientPercent
        masteredPercent
        __typename
      }
      __typename
    }
    top5GradeSchool(mapOnly: $mapOnly) {
      gradeLevel {
        id
        name
        __typename
      }
      school {
        id
        name
        __typename
      }
      info {
        attemptedPercent
        familiarPercent
        proficientPercent
        masteredPercent
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  DistrictPrimaryOfferingAsTeacher: `query DistrictPrimaryOfferingAsTeacher {
  districtPrimaryOfferingAsTeacher
}
`,
  DistrictQuery: `query DistrictQuery($districtName: String!) {
  district(districtName: $districtName) {
    id
    name
    isTest
    isKmapDistrict
    isK4dDistrict
    activeGrades {
      id
      sortIndex
      name
      __typename
    }
    schools {
      id
      name
      isKADSchool
      isKmapSchool
      __typename
    }
    __typename
  }
}
`,
  districts: `query districts($filter: String!) {
  districts(filter: $filter) {
    id
    name
    rosterID
    rosterSource
    nweaID
    ncesID
    rosterSyncingEnabled
    sendActivationEmails
    rosterDistrictAdmins
    isTest
    isKmapDistrict
    isK4dDistrict
    lastRostered
    lastTestPull
    goLiveDate
    region
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
    schoolYearStart
    schoolYearEnd
    __typename
  }
}
`,
  DistrictSkillsMAPProgressQuery: `query DistrictSkillsMAPProgressQuery($districtID: String!, $filters: DistrictSkillsMAPProgressFilters!) {
  districtSkillsMAPProgress(districtID: $districtID, filters: $filters) {
    totalStudents
    numSkillsWorkedOn
    rows {
      exercise {
        id
        title
        mappedStandards {
          id
          setId
          standardId
          __typename
        }
        __typename
      }
      numAttempted
      numFamiliar
      numProficient
      numMastered
      numStudents
      __typename
    }
    __typename
  }
  kmapTopics {
    id
    title
    band
    bandGradeName
    bandKey
    strandKey
    learnableContentPage(pageParams: {pageSize: 1000, after: 0, contentKinds: [EXERCISE]}) {
      contents {
        exerciseID: id
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  DistrictSkillsProgressQuery: `query DistrictSkillsProgressQuery($districtID: String!, $filters: DistrictSkillsProgressFilters!, $courseID: String!) {
  districtSkillsProgress(districtID: $districtID, filters: $filters) {
    totalStudents
    numSkillsWorkedOn
    rows {
      exercise {
        id
        title
        mappedStandards {
          id
          setId
          standardId
          __typename
        }
        __typename
      }
      numAttempted
      numFamiliar
      numProficient
      numMastered
      numStudents
      __typename
    }
    __typename
  }
  courseById(id: $courseID) {
    id
    title
    unitChildren {
      unitID: id
      unitTitle: translatedTitle
      learnableContentPage(pageParams: {pageSize: 1000, after: 0, contentKinds: [EXERCISE]}) {
        contents {
          exerciseID: id
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  districtsMetrics: `query districtsMetrics($filter: String!) {
  districts(filter: $filter) {
    id
    lastNRosterJobs(numJobs: 1) {
      numClassrooms
      numStudents
      numTeachers
      __typename
    }
    __typename
  }
}
`,
  DistrictStudentsWithSkillProgressQuery: `query DistrictStudentsWithSkillProgressQuery($districtID: String!, $filters: DistrictStudentsWithSkillProgressFilters, $masteryLevel: UpdatedMasteryLevel!, $skillId: String!) {
  districtStudentsWithSkillProgress(districtID: $districtID, masteryLevel: $masteryLevel, skillId: $skillId, filters: $filters) {
    id
    kaid
    displayNameForTeacher
    __typename
  }
}
`,
  districtTeachers: `query districtTeachers($districtName: String!, $pageSize: Int, $cursor: Int) {
  activationReportByTeacher(districtName: $districtName, pageSize: $pageSize, cursor: $cursor) {
    rows {
      teacherId
      teacherName
      __typename
    }
    __typename
  }
}
`,
  DistrictWithRosterJobs: `query DistrictWithRosterJobs($districtId: ID!, $numJobs: Int!) {
  districtById(districtId: $districtId) {
    id
    lastNRosterJobs(numJobs: $numJobs) {
      createdAt
      numClassrooms
      numSchools
      numStudents
      numTeachers
      numDistrictAdmins
      numSchoolAdmins
      rosterSource
      timeSpentSeconds
      numNewClassrooms
      numNewSchools
      numNewStudents
      numNewTeachers
      numNewDistrictAdmins
      numNewSchoolAdmins
      numRemovedClassrooms
      numRemovedSchools
      numRemovedStudents
      numRemovedTeachers
      numRemovedDistrictAdmins
      numRemovedSchoolAdmins
      numInGracePeriodStudents
      numInGracePeriodTeachers
      __typename
    }
    __typename
  }
}
`,
  domainRevision: `query domainRevision($id: String!) {
  domainRevision: domainRevisionById(id: $id) {
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
}
`,
  domainRevisionsTreeQuery: `query domainRevisionsTreeQuery {
  domainRevisions {
    id
    title
    contentId
    contentKind
    sha
    hasUnpublishedChanges
    listed
    children {
      ... on CourseRevision {
        id
        title
        contentId
        contentKind
        hasUnpublishedChanges
        listed
        __typename
      }
      ... on CurationPageRevision {
        id
        title
        contentId
        contentKind
        hasUnpublishedChanges
        listed
        __typename
      }
      __typename
    }
    childrenDescriptors {
      canonicalId
      contentId
      kind
      __typename
    }
    __typename
  }
}
`,
  DownloadTeachersGuide: `query DownloadTeachersGuide($kaid: String!) {
  user(kaid: $kaid) {
    id
    userDistrictInfos {
      id
      district {
        id
        downloadTeachersGuide
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  EditableTeamPageEntries: `query EditableTeamPageEntries {
  teamPage: editableTeamPageEntries {
    currentUserHasEmployeeEntry
    entries {
      ...entry
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
}
`,
  EduOrgsInfo: `query EduOrgsInfo($postalCode: String!) {
  eduOrganizations(postalCode: $postalCode) {
    keyId: id
    name
    postalCode
    locationDisplayText: location
    __typename
  }
}
`,
  exerciseEditorGetAllArticleRevisions: `query exerciseEditorGetAllArticleRevisions {
  allArticleRevisions {
    id
    slug
    title
    __typename
  }
}
`,
  exerciseEditorGetAllExerciseRevisions: `query exerciseEditorGetAllExerciseRevisions {
  allExerciseRevisions {
    id
    slug
    title
    __typename
  }
}
`,
  exerciseEditorGetAllVideoRevisions: `query exerciseEditorGetAllVideoRevisions {
  allVideoRevisions {
    id
    slug
    title
    __typename
  }
}
`,
  ExtractPerseusStrings: `query ExtractPerseusStrings($perseusJson: String!) {
  extractPerseusStrings(perseusJson: $perseusJson)
}
`,
  FeedbackAnswers: `query FeedbackAnswers($parentKey: String!) {
  feedbackByKey(key: $parentKey) {
    ... on QuestionFeedback {
      answers {
        isLocked
        isPinned
        replyCount
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
        lowQualityScore
        notifyOnAnswer
        permalink
        qualityKind
        replyCount
        replyExpandKeys
        showLowQualityNotice
        sumVotesIncremented
        upVoted
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  feedbackForAuthor: `query feedbackForAuthor($kaid: String!, $feedbackType: FeedbackType!, $cursor: String, $limit: Int, $sort: Int) {
  feedbackForAuthor(kaid: $kaid, feedbackType: $feedbackType, cursor: $cursor, limit: $limit, sort: $sort) {
    feedback {
      replyCount
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
        __typename
      }
      fromVideoAuthor
      key
      lowQualityScore
      notifyOnAnswer
      permalink
      qualityKind
      replyCount
      replyExpandKeys
      showLowQualityNotice
      sumVotesIncremented
      upVoted
      ... on QuestionFeedback {
        hasAnswered
        isOld
        __typename
      }
      ... on AnswerFeedback {
        question {
          content
          __typename
        }
        __typename
      }
      __typename
    }
    isMod
    isComplete
    cursor
    __typename
  }
}
`,
  feedbackQuery: `query feedbackQuery($topicId: String!, $focusKind: String!, $cursor: String, $limit: Int, $feedbackType: FeedbackType!, $currentSort: Int, $qaExpandKey: String) {
  feedback(focusId: $topicId, cursor: $cursor, limit: $limit, feedbackType: $feedbackType, focusKind: $focusKind, sort: $currentSort, qaExpandKey: $qaExpandKey, answersLimit: 1) {
    feedback {
      isLocked
      isPinned
      replyCount
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
      badges {
        name
        icons {
          smallUrl
          __typename
        }
        description
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
      flaggedByUser
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
      lowQualityScore
      notifyOnAnswer
      permalink
      qualityKind
      replyCount
      replyExpandKeys
      showLowQualityNotice
      sumVotesIncremented
      upVoted
      ... on QuestionFeedback {
        hasAnswered
        answers {
          isLocked
          isPinned
          replyCount
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
          badges {
            name
            icons {
              smallUrl
              __typename
            }
            description
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
          flaggedByUser
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
          lowQualityScore
          notifyOnAnswer
          permalink
          qualityKind
          replyCount
          replyExpandKeys
          showLowQualityNotice
          sumVotesIncremented
          upVoted
          __typename
        }
        isOld
        answerCount
        __typename
      }
      ... on AnswerFeedback {
        question {
          isLocked
          isPinned
          replyCount
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
          badges {
            name
            icons {
              smallUrl
              __typename
            }
            description
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
          flaggedByUser
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
          lowQualityScore
          notifyOnAnswer
          permalink
          qualityKind
          replyCount
          replyExpandKeys
          showLowQualityNotice
          sumVotesIncremented
          upVoted
          __typename
        }
        __typename
      }
      __typename
    }
    cursor
    isComplete
    sortedByDate
    __typename
  }
}
`,
  FetchArticleContentData: `query FetchArticleContentData($path: String!, $queryParams: String!, $isModal: Boolean, $followRedirects: Boolean, $countryCode: String!) {
  contentJson: curatedArticleContentLibraryJson(path: $path, queryParams: $queryParams, isModal: $isModal, followRedirects: $followRedirects, countryCode: $countryCode)
}
`,
  FetchContentData: `query FetchContentData($path: String!, $queryParams: String!, $isModal: Boolean, $followRedirects: Boolean, $countryCode: String!) {
  contentJson: curatedContentLibraryJson(path: $path, queryParams: $queryParams, isModal: $isModal, followRedirects: $followRedirects, countryCode: $countryCode)
}
`,
  FetchExerciseContentData: `query FetchExerciseContentData($path: String!, $queryParams: String!, $isModal: Boolean, $followRedirects: Boolean, $countryCode: String!) {
  contentJson: curatedExerciseContentLibraryJson(path: $path, queryParams: $queryParams, isModal: $isModal, followRedirects: $followRedirects, countryCode: $countryCode)
}
`,
  FetchFlagsQuery: `query FetchFlagsQuery {
  flags {
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
}
`,
  FetchProgrammingContentData: `query FetchProgrammingContentData($path: String!, $queryParams: String!, $isModal: Boolean, $followRedirects: Boolean, $countryCode: String!) {
  contentJson: curatedProgrammingContentLibraryJson(path: $path, queryParams: $queryParams, isModal: $isModal, followRedirects: $followRedirects, countryCode: $countryCode)
}
`,
  FetchVideoContentData: `query FetchVideoContentData($path: String!, $queryParams: String!, $isModal: Boolean, $followRedirects: Boolean, $countryCode: String!) {
  contentJson: curatedVideoContentLibraryJson(path: $path, queryParams: $queryParams, isModal: $isModal, followRedirects: $followRedirects, countryCode: $countryCode)
}
`,
  findUsers: `query findUsers($identifier: String) {
  usersSearch(identifier: $identifier) {
    users {
      ...UserFields
      __typename
    }
    children {
      ...UserFields
      __typename
    }
    __typename
  }
}

fragment UserFields on User {
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
  __typename
}
`,
  findUsersByIp: `query findUsersByIp($ip: String!, $usersCursor: ID, $pageSize: Int) {
  usersSearchByIpPage(ip: $ip, after: $usersCursor, pageSize: $pageSize) {
    users {
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
      __typename
    }
    pageInfo {
      nextCursor
      __typename
    }
    totalCount
    __typename
  }
}
`,
  FlaggedFeedback: `query FlaggedFeedback($feedbackType: FeedbackType, $page: Int, $sort: ModerationSortOrder, $limit: Int, $kaLocale: String) {
  flaggedFeedback(feedbackType: $feedbackType, page: $page, sort: $sort, limit: $limit, kaLocale: $kaLocale) {
    feedback {
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
      flags
      flaggedBy
      flaggedByUser
      key
      expandKey
      permalink
      feedbackType
      deleted
      sumVotesIncremented
      appearsAsDeleted
      date
      replyCount
      lowQualityScore
      qualityKind
      replyExpandKeys
      downVoted
      upVoted
      focusUrl
      focus {
        id
        translatedTitle
        kind
        relativeUrl
        __typename
      }
      ... on QuestionFeedback {
        hasAnswered
        answers {
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
          flaggedByUser
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
          lowQualityScore
          permalink
          qualityKind
          replyCount
          replyExpandKeys
          sumVotesIncremented
          upVoted
          __typename
        }
        isOld
        answerCount
        __typename
      }
      ... on AnswerFeedback {
        questionKey
        question {
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
          appearsAsDeleted
          content
          date
          definitelyNotSpam
          deleted
          downVoted
          expandKey
          feedbackType
          flaggedBy
          flaggedByUser
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
          lowQualityScore
          permalink
          qualityKind
          replyCount
          replyExpandKeys
          sumVotesIncremented
          upVoted
          __typename
        }
        __typename
      }
      __typename
    }
    total
    __typename
  }
}
`,
  FlaggedPrograms: `query FlaggedPrograms($page: Int, $sort: ModerationSortOrder, $limit: Int) {
  flaggedPrograms(page: $page, sort: $sort, limit: $limit) {
    programs {
      programID: id
      key
      appearsAsDeleted
      date: created
      deleted
      hideFromHotlist
      flaggedBy: flaggedByKaids
      flags
      permalink: url
      relativeUrl: url
      sumVotesIncremented
      title
      thumbnail: imagePath
      latestRevision {
        code
        created
        __typename
      }
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
      __typename
    }
    total
    __typename
  }
}
`,
  footerDomainsQuery: `query footerDomainsQuery($curriculum: String) {
  footerDomains(curriculum: $curriculum) {
    translatedTitle
    href
    __typename
  }
}
`,
  getAccountSettings: `query getAccountSettings($targetKaid: String) {
  actor: user {
    id
    email
    username
    isChild
    hasPassword
    __typename
  }
  target: user(kaid: $targetKaid) {
    id
    isChild
    isParent
    tosForFormalTeacherStatus
    affiliationCountryCode
    schoolAffiliation {
      id
      name
      country
      postalCode
      administrativeAreaLevel1
      administrativeAreaLevel2
      locality
      __typename
    }
    hasSendableEmail
    nickname
    username
    birthdate
    userLanguage
    soundOn
    muteVideos
    showCaptions
    playbackRate
    hideVisual
    prefersReducedMotion
    noColorInVideos
    pendingParentEmail
    profileRoot
    hasPassword
    canModifyCoaches
    age
    authEmails
    appleId
    applePrimaryEmail
    googleId
    googlePrimaryEmail
    facebookId
    facebookPrimaryEmail
    mobileNumber
    canAccessDistrictsHomepage
    userChosenRoles
    homepage
    managingParent {
      id
      email
      __typename
    }
    underAgeGate {
      approvalGivenAt
      parentEmail
      daysUntilCutoff
      __typename
    }
    isSatStudent
    satStudent(id: $targetKaid) {
      id
      cbLinked
      extraTimeSections
      timePercentMultiplier
      __typename
    }
    maybeManagedChildren {
      id
      nickname
      username
      __typename
    }
    unmanagedChildren {
      id
      nickname
      username
      __typename
    }
    hasChildren
    includesDistrictOwnedData
    badgeCounts
    points
    userDistrictInfos {
      id
      districtProvidedBirthMonth
      districtProvidedBirthYear
      rosterSource
      __typename
    }
    __typename
  }
  chronomancer {
    isCollegeBoardIntegrationEnabled
    __typename
  }
  sessionHash
}
`,
  getActiveDonationAsks: `query getActiveDonationAsks {
  activeDonationAsks {
    id
    copy
    graphic
    headline
    defaultDonationFrequency
    oneTimeDonationAmounts
    recurringDonationAmounts
    classyCampaignId
    __typename
  }
}
`,
  getAIGuideWaitlistStatus: `query getAIGuideWaitlistStatus {
  user {
    id
    aiGuideWaitlistStatus
    __typename
  }
}
`,
  getAllBadges: `query getAllBadges {
  allBadges(excludeFilters: [CONTEXT_SPECIFIC]) {
    name
    description
    isCustom
    __typename
  }
}
`,
  getAllBadgesFull: `query getAllBadgesFull {
  allBadges {
    name
    description
    fullDescription
    points
    badgeCategory
    icons {
      compactUrl
      emailUrl
      largeUrl
      smallUrl
      __typename
    }
    isCustom
    __typename
  }
}
`,
  getAllDonationAsks: `query getAllDonationAsks {
  allDonationAsks {
    id
    active
    __typename
  }
}
`,
  GetAllFolders: `query GetAllFolders {
  allFolders {
    id
    kaLocale
    name
    courseIds
    teamKaids
    __typename
  }
}
`,
  getAllSetsOfStandards: `query getAllSetsOfStandards($locale: String, $domain: String) {
  sets: allSetsOfStandards(locale: $locale, domain: $domain) {
    id
    name
    shortName
    __typename
  }
}
`,
  getAllStandardsForContent: `query getAllStandardsForContent($contentDescriptor: String!) {
  standards: editableStandardsForContent(contentDescriptor: $contentDescriptor) {
    id
    standardId
    setId
    __typename
  }
}
`,
  getAllSubject: `query getAllSubject {
  domains: studentListTopics {
    subjects: topics {
      id
      slug
      __typename
    }
    __typename
  }
}
`,
  getAllSubmittedStories: `query getAllSubmittedStories($cursor: String!, $sort: SubmittedStorySort!) {
  allSubmittedStories(sortBy: $sort, cursor: $cursor, count: 20) {
    stories {
      date
      key
      name: submitterName
      email
      level
      teaser
      role
      published
      upvotes: votes
      story
      share_allowed: shareAllowed
      video_url: videoUrl
      video_title: videoTitle
      __typename
    }
    maybeMore
    nextCursor
    __typename
  }
}
`,
  getArticleForTeacherCampaignExtraCredit: `query getArticleForTeacherCampaignExtraCredit($slug: String!) {
  article(slug: $slug) {
    nodeUrl: urlWithinTopic
    title
    kind
    contentId: id
    slug
    __typename
  }
}
`,
  getAssessmentItem: `query getAssessmentItem($input: AssessmentItemInput!) {
  assessmentItem(input: $input) {
    item {
      id
      sha
      problemType
      itemData
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
  getAssessmentItems: `query getAssessmentItems($exerciseName: String) {
  exercise(name: $exerciseName) {
    id
    assessmentItems {
      id
      itemData
      __typename
    }
    __typename
  }
}
`,
  GetAssessmentItemTags: `query GetAssessmentItemTags {
  assessmentItemTags(filter: ALL) {
    ...AssessmentItemTagFields
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
}
`,
  GetAuthors: `query GetAuthors {
  allAuthorOptions {
    id
    name
    key
    __typename
  }
}
`,
  GetAvatars: `query GetAvatars {
  user {
    id
    avatar {
      name
      __typename
    }
    allAvatars {
      avatar {
        category
        imageSrc
        isDefaultForCategory
        name
        __typename
      }
      isAvailable
      __typename
    }
    __typename
  }
}
`,
  getChildrenForDevadmin: `query getChildrenForDevadmin($kaid: String!) {
  user(kaid: $kaid) {
    id
    maybeManagedChildren {
      id
      canModifyCoaches
      email
      isUnderAgeGate: isChild
      isSpawnedByCurrentUser: isSpawnedBy(coachKaid: $kaid)
      kaid
      nickname
      username
      __typename
    }
    unmanagedChildren {
      id
      canModifyCoaches
      email
      isUnderAgeGate: isChild
      isSpawnedByCurrentUser: isSpawnedBy(coachKaid: $kaid)
      kaid
      nickname
      username
      __typename
    }
    __typename
  }
}
`,
  getChildrenOfTopic: `query getChildrenOfTopic($id: String!) {
  topic: topicById(id: $id) {
    id
    contentId: id
    kind
    slug
    translatedTitle
    children: childrenWithUnlisted {
      ... on CurationNode {
        id
        contentId: id
        kind
        slug
        translatedTitle
        __typename
      }
      ... on LearnableContent {
        id
        contentId: id
        kind
        slug
        translatedTitle
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  getChronomancerStatus: `query getChronomancerStatus {
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
}
`,
  getClassesAndStudents: `query getClassesAndStudents {
  coach: user {
    id
    studentLists: coachedStudentLists {
      id
      descriptor
      cacheId
      name
      signupCode
      studentKaidsAndNicknames {
        id
        kaid
        coachNickname
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  getClassList: `query getClassList {
  coach: user {
    id
    studentLists: coachedStudentLists {
      name
      id
      signupCode
      cacheId
      key
      includesSat
      topics {
        id
        slug
        title: translatedTitle
        translatedStandaloneTitle
        iconPath
        domainSlug
        learnableContentSummary {
          countExercises
          __typename
        }
        __typename
      }
      autoGenerated
      countStudents
      classroomDistrictInfo {
        id
        isNweaMapSynced
        __typename
      }
      __typename
    }
    schoolAffiliation {
      id
      __typename
    }
    isAIGuideEnabled
    isKmapTeacher
    isK4dTeacher
    userDistrictInfos {
      id
      activatedAt
      __typename
    }
    isFormalTeacher
    __typename
  }
  user {
    id
    tosForFormalTeacherStatus
    __typename
  }
}
`,
  getClassroomRoster: `query getClassroomRoster($classDescriptor: String!, $teacherKaid: String!, $after: Int, $pageSize: Int) {
  coach: user {
    id
    studentLists: coachedStudentLists {
      id
      cacheId
      descriptor
      name
      signupCode
      topics {
        id
        slug
        translatedStandaloneTitle
        __typename
      }
      key
      isDistrictSynced
      __typename
    }
    schoolAffiliation {
      id
      __typename
    }
    affiliationCountryCode
    isFormalTeacher
    __typename
  }
  user {
    id
    tosForFormalTeacherStatus
    __typename
  }
  classroom: classroomByDescriptor(descriptor: $classDescriptor) {
    id
    cacheId
    name
    descriptor
    key
    autoGenerated
    signupCode
    topics {
      id
      key
      iconPath
      __typename
    }
    countStudents
    studentsPage(after: $after, pageSize: $pageSize) {
      ...StudentField2
      __typename
    }
    invitations {
      ...InvitationsField
      __typename
    }
    coachRequests {
      ...CoachRequestField
      __typename
    }
    cleverCoachRequests {
      ...CleverCoachRequestField
      __typename
    }
    isDistrictSynced
    __typename
  }
}

fragment CleverCoachRequestField on CleverCoachRequest {
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
}

fragment StudentField2 on StudentsPage {
  students {
    kaid
    id
    email
    coachNickname(teacherKaid: $teacherKaid)
    profileRoot
    username
    __typename
  }
  nextCursor
  __typename
}
`,
  getClassroomsAndPrimaryOffering: `query getClassroomsAndPrimaryOffering {
  districtPrimaryOfferingAsTeacher
  coach: user {
    id
    studentLists: coachedStudentLists {
      id
      cacheId
      __typename
    }
    __typename
  }
}
`,
  getClassSelector: `query getClassSelector {
  coach: user {
    id
    studentLists: coachedStudentLists {
      id
      descriptor
      cacheId
      name
      signupCode
      countStudents
      __typename
    }
    __typename
  }
}
`,
  getClassSettings: `query getClassSettings($classDescriptor: String!) {
  classroom: classroomByDescriptor(descriptor: $classDescriptor) {
    id
    cacheId
    founderKaid: coachKaid
    descriptor
    name
    key
    signupCode
    classroomDistrictInfo {
      id
      teacherUserDistrictInfoIDs {
        id
        displayNameForTeacher
        kaid
        __typename
      }
      __typename
    }
    allTeachers {
      id
      kaid
      __typename
    }
    googleClassId
    googleClassName
    includesSat
    invitations {
      id
      accepted
      __typename
    }
    coachRequests {
      id
      __typename
    }
    cleverCoachRequests {
      id
      __typename
    }
    topics {
      id
      key
      slug
      translatedStandaloneTitle
      __typename
    }
    isDistrictSynced
    isK4dClassroom
    __typename
  }
}
`,
  getCoach: `query getCoach {
  coach: user {
    id
    nickname
    __typename
  }
  user {
    id
    tosForFormalTeacherStatus
    isKmapTeacher
    isK4dTeacher
    schoolAffiliation {
      id
      name
      country
      postalCode
      administrativeAreaLevel1
      administrativeAreaLevel2
      locality
      __typename
    }
    affiliationCountryCode
    __typename
  }
}
`,
  getCoachExerciseReport: `query getCoachExerciseReport($assignmentId: String!, $teacherKaid: String!) {
  coach: user {
    id
    assignment: assignmentByThisUser(id: $assignmentId) {
      id
      assignedDate
      students {
        id
        kaid
        coachNickname(teacherKaid: $teacherKaid)
        __typename
      }
      studentList {
        id
        cacheId
        name
        signupCode
        __typename
      }
      contents {
        ...ExerciseContentFields
        __typename
      }
      exerciseConfig {
        itemPickerStrategy
        assessmentItemIds
        __typename
      }
      itemCompletionStatesForAllStudents {
        studentKaid
        exerciseAttempts {
          id
          isCompleted
          numAttempted
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}

fragment ExerciseContentFields on LearnableContent {
  id
  kind
  slug
  ... on Exercise {
    translatedTitle: translatedDisplayName
    exerciseLength
    assessmentItems {
      id
      contentId
      itemData
      __typename
    }
    __typename
  }
  ... on TopicQuiz {
    id
    translatedTitle
    exerciseLength
    coveredExercises(includeCoveredSkills: true) {
      id
      assessmentItems {
        id
        contentId
        itemData
        __typename
      }
      __typename
    }
    __typename
  }
  ... on TopicUnitTest {
    translatedTitle
    exerciseLength
    coveredExercises(includeCoveredSkills: true) {
      id
      assessmentItems {
        id
        contentId
        itemData
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}
`,
  getCombinedBadges: `query getCombinedBadges($kaid: String, $spotlightBadgeSlug: String!) {
  user(kaid: $kaid) {
    id
    badges {
      lastEarnedDate
      count
      badge {
        ...Badge
        __typename
      }
      __typename
    }
    __typename
  }
  allBadges(excludeFilters: [RETIRED, CUSTOM, HIDDEN_IF_UNKNOWN]) {
    ...Badge
    __typename
  }
  badgeBySlug(slug: $spotlightBadgeSlug) {
    ...Badge
    __typename
  }
}

fragment Badge on Badge {
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
}
`,
  getCommoncore: `query getCommoncore {
  commoncore {
    standards {
      code
      description
      domains {
        code
        description
        standards {
          id
          code
          descriptionHtml
          contents(filterByKind: [EXERCISE]) {
            id
            kind
            slug
            englishName: title
            translatedName: translatedTitle
            description
            ... on Exercise {
              questions: numAssessmentItems
              __typename
            }
            __typename
          }
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  getContentAssignmentChangesQuery: `query getContentAssignmentChangesQuery($assignmentID: ID!, $maxNumChanges: Int!) {
  contentAssignmentChanges(assignmentID: $assignmentID, maxNumChanges: $maxNumChanges) {
    assignmentID
    type
    timestamp
    actor {
      id
      kaid
      nickname
      __typename
    }
    __typename
  }
}
`,
  getContentAssignmentsForCoachAsDevadmin: `query getContentAssignmentsForCoachAsDevadmin($after: ID, $assignmentFilters: CoachAssignmentFilters, $classDescriptor: String!, $orderBy: AssignmentOrder!, $pageSize: Int) {
  classroom: classroomByDescriptor(descriptor: $classDescriptor) {
    id
    cacheId
    assignmentsPage(filters: $assignmentFilters, orderBy: $orderBy, after: $after, pageSize: $pageSize) {
      assignments {
        id
        createdDate
        assignedDate
        updatedDate
        dueDate
        startDate
        contents {
          id
          defaultUrlPath
          kind
          title
          __typename
        }
        studentKaids
        numStudentsCompleted
        exerciseConfig {
          itemPickerStrategy
          __typename
        }
        __typename
      }
      pageInfo {
        nextCursor
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  getContentForStandard: `query getContentForStandard($set: String!, $standard: String) {
  contentForStandardMappings(setId: $set, standardId: $standard)
}
`,
  getContentItemProgressesForSatSkill: `query getContentItemProgressesForSatSkill($contentDescriptors: [String!]) {
  user {
    id
    contentItemProgresses(queryBy: {contentDescriptors: $contentDescriptors}) {
      completionStatus
      content {
        id
        kind
        contentId
        translatedTitle
        title
        slug
        nodeUrl: defaultUrlPath
        progressKey
        ... on Exercise {
          isSkillCheck
          relatedContent: relatedContentKeys
          expectedDoNCount: exerciseLength
          timeEstimate {
            lowerBound
            upperBound
            __typename
          }
          thumbnailUrl
          parentTopic {
            id
            slug
            __typename
          }
          __typename
        }
        ... on Video {
          youtubeId
          translatedYoutubeId
          kaUrl
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  getCourse: `query getCourse($id: String!) {
  courseById(id: $id) {
    id
    relativeUrl
    translatedTitle
    __typename
  }
}
`,
  getCourseMasteryAssignmentChangesQuery: `query getCourseMasteryAssignmentChangesQuery($assignmentID: ID!, $maxNumChanges: Int!) {
  courseMasteryAssignmentChanges(assignmentID: $assignmentID, maxNumChanges: $maxNumChanges) {
    assignmentID
    type
    timestamp
    actor {
      id
      kaid
      nickname
      __typename
    }
    __typename
  }
}
`,
  getCourseMasteryAssignmentsForCoachAsDevAdmin: `query getCourseMasteryAssignmentsForCoachAsDevAdmin($descriptor: String!) {
  classroomByDescriptor(descriptor: $descriptor) {
    id
    cacheId
    studentKaidsAndNicknames {
      kaid
      coachNickname
      __typename
    }
    courseMasteryAssignments: subjectMasteryAssignments(activeFilter: ACTIVE_OR_ARCHIVED) {
      id
      assignedDate
      createdDate
      archivedDate
      dueDate
      course: topic {
        id
        translatedTitle
        relativeUrl
        __typename
      }
      isArchived
      activeStudentData {
        kaid
        assignedDate
        unassignedDate
        __typename
      }
      historicalStudentData {
        kaid
        assignedDate
        unassignedDate
        __typename
      }
      completedStudentData {
        kaid
        completedDate
        __typename
      }
      studentProgress {
        kaid
        lastWorkedOn
        currentMastery {
          percentage
          pointsEarned
          pointsAvailable
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  getCourseProgress: `query getCourseProgress($filters: DistrictCourseProgressFilters!) {
  districtCourseProgressByCourse(filters: $filters) {
    dateInfo {
      from
      upTo
      lastUpdatedDate
      __typename
    }
    rows {
      course {
        id
        title
        __typename
      }
      info {
        activeLearners
        averageMinutes
        averageSkillsLeveledToProficient
        averageSkillsLeveledUp
        averageSkillsWorkedOn
        percent1to15
        percent15to30
        percent30plus
        attemptedPercent
        familiarPercent
        proficientPercent
        masteredPercent
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  getCourseProgressByClassroom: `query getCourseProgressByClassroom($filters: DistrictCourseProgressFilters!, $courseID: String!) {
  districtCourseProgressByClassroom(filters: $filters, courseID: $courseID) {
    dateInfo {
      from
      upTo
      lastUpdatedDate
      __typename
    }
    rows {
      classroom {
        id
        cacheId
        name
        descriptor
        __typename
      }
      info {
        activeLearners
        averageMinutes
        averageSkillsLeveledToProficient
        averageSkillsLeveledUp
        averageSkillsWorkedOn
        percent1to15
        percent15to30
        percent30plus
        attemptedPercent
        familiarPercent
        proficientPercent
        masteredPercent
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  getCourseProgressBySchool: `query getCourseProgressBySchool($filters: DistrictCourseProgressFilters!, $courseID: String) {
  districtCourseProgressBySchool(filters: $filters, courseID: $courseID) {
    dateInfo {
      from
      upTo
      lastUpdatedDate
      __typename
    }
    rows {
      school {
        id
        name
        __typename
      }
      info {
        activeLearners
        averageMinutes
        averageSkillsLeveledToProficient
        averageSkillsLeveledUp
        averageSkillsWorkedOn
        percent1to15
        percent15to30
        percent30plus
        attemptedPercent
        familiarPercent
        proficientPercent
        masteredPercent
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  getCourseProgressByStudent: `query getCourseProgressByStudent($filters: DistrictCourseProgressFilters!, $classroomDescriptor: String!, $courseID: String!, $onlyStudentsWhoWorkedOnTheCourseNotForAClass: Boolean) {
  districtCourseProgressByStudent(filters: $filters, courseID: $courseID, classroomDescriptor: $classroomDescriptor, onlyStudentsWhoWorkedOnTheCourseNotForAClass: $onlyStudentsWhoWorkedOnTheCourseNotForAClass) {
    dateInfo {
      from
      upTo
      lastUpdatedDate
      __typename
    }
    rows {
      user {
        id
        kaid
        userDistrictInfos(includeDeleted: true) {
          id
          displayNameForTeacher
          __typename
        }
        __typename
      }
      info {
        activeLearners
        averageMinutes
        averageSkillsLeveledToProficient
        averageSkillsLeveledUp
        averageSkillsWorkedOn
        percent1to15
        percent15to30
        percent30plus
        attemptedPercent
        familiarPercent
        proficientPercent
        masteredPercent
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  getCreateMasteryAssignmentsFormData: `query getCreateMasteryAssignmentsFormData($classroomDescriptor: String!, $coursesIds: [String]!) {
  classroomByDescriptorV2(descriptor: $classroomDescriptor) {
    id
    cacheId
    studentKaidsAndNicknames {
      id
      kaid
      coachNickname
      __typename
    }
    __typename
  }
  coursesByIds(ids: $coursesIds) {
    id
    translatedTitle
    unitChildren {
      id
      masteryEnabled
      translatedTitle
      learnableContentSummary {
        countExercises
        __typename
      }
      iconPath
      __typename
    }
    __typename
  }
}
`,
  getCustomRedirect: `query getCustomRedirect($redirectFrom: String!) {
  customRedirect(redirectFrom: $redirectFrom) {
    id
    redirectTo
    __typename
  }
}
`,
  getCustomRedirects: `query getCustomRedirects {
  customRedirects {
    id
    redirectFrom
    redirectTo
    __typename
  }
}
`,
  getDashboardRoster: `query getDashboardRoster($teacherKaid: String!, $after: Int, $pageSize: Int) {
  coach: user {
    id
    countStudents: coacheeCount
    studentsPage(after: $after, pageSize: $pageSize) {
      ...StudentField1
      __typename
    }
    invitations {
      ...InvitationsField
      __typename
    }
    coachRequests {
      ...CoachRequestField
      __typename
    }
    cleverCoachRequests {
      ...CleverCoachRequestField
      __typename
    }
    studentLists: coachedStudentLists {
      id
      cacheId
      descriptor
      name
      topics {
        id
        slug
        translatedStandaloneTitle
        __typename
      }
      key
      studentKaids
      isDistrictSynced
      __typename
    }
    schoolAffiliation {
      id
      __typename
    }
    affiliationCountryCode
    isFormalTeacher
    __typename
  }
  user {
    id
    tosForFormalTeacherStatus
    __typename
  }
}

fragment CleverCoachRequestField on CleverCoachRequest {
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
}

fragment StudentField1 on StudentsPage {
  students {
    kaid
    id
    email
    coachNickname(teacherKaid: $teacherKaid)
    profileRoot
    username
    __typename
  }
  nextCursor
  __typename
}
`,
  getDatastoreUserData: `query getDatastoreUserData($examGroupId: String!, $kaid: String) {
  examGroup(examGroupId: $examGroupId) {
    id
    datastoreUserData(kaid: $kaid)
    __typename
  }
}
`,
  getDaysUntilClassIsDeletedQuery: `query getDaysUntilClassIsDeletedQuery($classDescriptor: String!) {
  classroom: classroomByDescriptor(descriptor: $classDescriptor) {
    id
    cacheId
    classroomDistrictInfo {
      id
      classWillBeRemovedInDays
      __typename
    }
    __typename
  }
}
`,
  getDescriptionForStandard: `query getDescriptionForStandard($setId: String!, $standardId: String!) {
  publishedStandard(setId: $setId, standardId: $standardId) {
    id
    description
    __typename
  }
}
`,
  getDistrictCourses: `query getDistrictCourses($districtName: String!) {
  district(districtName: $districtName) {
    id
    activeCourseSISNumbers
    __typename
  }
}
`,
  getDistrictGrades: `query getDistrictGrades($districtName: String!) {
  district(districtName: $districtName) {
    id
    activeGrades {
      id
      sortIndex
      name
      __typename
    }
    __typename
  }
}
`,
  getDistrictInstructionalAreaQuery: `query getDistrictInstructionalAreaQuery {
  kmapTopics {
    id
    key
    instructionalAreaName: strand
    instructionalAreaKey: strandKey
    __typename
  }
}
`,
  getDistrictInternalAdmins: `query getDistrictInternalAdmins($districtID: String!) {
  getDistrictInternalAdmins(districtID: $districtID) {
    id
    kaid
    districtProvidedFullName
    districtProvidedEmail
    __typename
  }
}
`,
  getDistrictSchools: `query getDistrictSchools($districtName: String!) {
  district(districtName: $districtName) {
    id
    schools {
      id
      name
      __typename
    }
    __typename
  }
}
`,
  getDistrictSchoolsAndType: `query getDistrictSchoolsAndType($districtName: String!) {
  district(districtName: $districtName) {
    id
    schools {
      id
      name
      isKADSchool
      isKmapSchool
      __typename
    }
    __typename
  }
}
`,
  getDistrictTeachers: `query getDistrictTeachers($districtName: String!, $pageSize: Int, $cursor: Int) {
  activationReportByTeacher(districtName: $districtName, pageSize: $pageSize, cursor: $cursor) {
    rows {
      isActivated
      teacherKaid
      teacherName
      __typename
    }
    __typename
  }
}
`,
  getDomainsForStandardsEditor: `query getDomainsForStandardsEditor {
  allDomains {
    id
    contentId: id
    slug
    translatedTitle
    kind
    __typename
  }
}
`,
  getDonationAskByID: `query getDonationAskByID($id: String!) {
  donationAskByID(id: $id) {
    id
    graphic
    headline
    copy
    defaultDonationFrequency
    oneTimeDonationAmounts
    recurringDonationAmounts
    classyCampaignId
    active
    authorKaid
    __typename
  }
}
`,
  GetDub: `query GetDub($sourceYouTubeId: String!) {
  dub(sourceYouTubeId: $sourceYouTubeId) {
    sourceYouTubeId
    dubYouTubeId
    video {
      id
      translatedTitle
      duration
      dateAdded
      defaultUrlPath
      description
      __typename
    }
    __typename
  }
}
`,
  getEduOrganizationsForRegion: `query getEduOrganizationsForRegion($country: String!, $postalCode: String, $administrativeAreaLevel1: String, $administrativeAreaLevel2: String, $locality: String) {
  eduOrganizationsForRegion(filters: {country: $country, postalCode: $postalCode, administrativeAreaLevel1: $administrativeAreaLevel1, administrativeAreaLevel2: $administrativeAreaLevel2, locality: $locality}) {
    id
    name
    country
    postalCode
    administrativeAreaLevel1
    administrativeAreaLevel2
    locality
    __typename
  }
}
`,
  getEligibleLearnStormCampaign: `query getEligibleLearnStormCampaign {
  learnStormActiveEligibleCampaign {
    id
    live
    bannerVisible
    campaignName
    promoSite
    signupStartDate
    startDate
    stopDate
    shutdownDate
    bannerBeforeHeader
    bannerBeforeCopy
    bannerDuringHeader
    bannerDuringCopy
    bannerAfterHeader
    bannerAfterCopy
    week
    weeks
    growthMindsetUrl
    certificateUrl
    bannerEnrollmentHeader
    bannerEnrollmentCopy
    __typename
  }
  coach: user {
    id
    coachedStudentLists {
      id
      cacheId
      countStudents
      hasCourseMasteryGoals
      signupCode
      topics {
        id
        masteryEnabled
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  getEmailSettings: `query getEmailSettings($targetKaid: String) {
  actor: user {
    id
    __typename
  }
  target: user(kaid: $targetKaid) {
    id
    isChild
    isEmailVerified
    hasSendableEmail
    email
    authEmails
    hasStudents: hasCoachees
    hasChildren
    pendingEmailVerifications {
      email
      __typename
    }
    signupDataIfUnverified {
      email
      __typename
    }
    emailSubscriptions {
      ...EmailSubscriptionFields
      __typename
    }
    __typename
  }
}

fragment EmailSubscriptionFields on EmailSubscriptions {
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
  satStudentListEmailSubscriptions {
    key
    checked
    description
    __typename
  }
  __typename
}
`,
  getEmailSettingsByToken: `query getEmailSettingsByToken($token: String!) {
  emailSettingsFromUnsubscribeToken(token: $token) {
    isChild
    isEmailVerified
    hasSendableEmail
    email
    hasStudents
    hasChildren
    emailSubscriptions {
      ...EmailSubscriptionFields
      __typename
    }
    __typename
  }
}

fragment EmailSubscriptionFields on EmailSubscriptions {
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
  satStudentListEmailSubscriptions {
    key
    checked
    description
    __typename
  }
  __typename
}
`,
  getEotCCCardDetails: `query getEotCCCardDetails($taskId: String!, $topicId: String!) {
  user {
    id
    exerciseData {
      subjectChallengeAttempt(taskId: $taskId, topicId: $topicId) {
        id
        numAttempted
        numCorrect
        pointsEarned
        skillsLeveledDown
        skillsLeveledUp
        skillsNoChange
        skillsNotTested
        skillLevelChanges {
          id
          exercise {
            id
            title
            translatedTitle
            __typename
          }
          before
          after
          changeDirection
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  getEotMCCardDetails: `query getEotMCCardDetails($taskId: String!, $topicId: String!) {
  user {
    id
    exerciseData {
      masteryChallengeAttempt(taskId: $taskId, topicId: $topicId) {
        id
        numAttempted
        numCorrect
        pointsEarned
        skillsLeveledDown
        skillsLeveledUp
        skillsNoChange
        skillLevelChanges {
          id
          exercise {
            id
            title
            translatedTitle
            __typename
          }
          before
          after
          changeDirection
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  getEotQuizCardDetails: `query getEotQuizCardDetails($taskId: String!, $topicId: String!) {
  user {
    id
    exerciseData {
      quizAttempt(taskId: $taskId, topicId: $topicId) {
        id
        numAttempted
        numCorrect
        pointsEarned
        skillsLeveledDown
        skillsLeveledUp
        skillsNoChange
        skillsNotTested
        skillLevelChanges {
          id
          exercise {
            id
            title
            translatedTitle
            __typename
          }
          before
          after
          changeDirection
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  getEotTestCardDetails: `query getEotTestCardDetails($taskId: String!, $topicId: String!) {
  user {
    id
    exerciseData {
      unitTestAttempt(taskId: $taskId, topicId: $topicId) {
        id
        numAttempted
        numCorrect
        pointsEarned
        skillsLeveledDown
        skillsLeveledUp
        skillsNoChange
        skillsNotTested
        skillLevelChanges {
          id
          exercise {
            id
            title
            translatedTitle
            __typename
          }
          before
          after
          changeDirection
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  getExerciseRevisionGo: `query getExerciseRevisionGo($firstId: String!, $secondId: String!) {
  first: exerciseRevisionById(id: $firstId) {
    id
    slug
    __typename
  }
  second: exerciseRevisionById(id: $secondId) {
    id
    displayName: title
    name: slug
    slug
    sha
    trackingDocumentUrl
    __typename
  }
}
`,
  getFeedbackReplies: `query getFeedbackReplies($postKey: String!) {
  feedbackReplies(feedbackKey: $postKey) {
    isLocked
    isPinned
    expandKey
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
    flaggedByUser
    flags
    focusUrl
    fromVideoAuthor
    key
    lowQualityScore
    notifyOnAnswer
    permalink
    qualityKind
    replyCount
    replyExpandKeys
    showLowQualityNotice
    sumVotesIncremented
    upVoted
    __typename
  }
}
`,
  getFeedbackRepliesPage: `query getFeedbackRepliesPage($postKey: String!, $cursor: String, $limit: Int!) {
  feedbackRepliesPaginated(feedbackKey: $postKey, cursor: $cursor, limit: $limit) {
    cursor
    isComplete
    feedback {
      isLocked
      isPinned
      expandKey
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
      flaggedByUser
      flags
      focusUrl
      fromVideoAuthor
      key
      lowQualityScore
      notifyOnAnswer
      permalink
      qualityKind
      replyCount
      replyExpandKeys
      showLowQualityNotice
      sumVotesIncremented
      upVoted
      __typename
    }
    __typename
  }
}
`,
  getFlag: `query getFlag($name: String!) {
  flag(name: $name) {
    id
    name
    isUserPassing
    __typename
  }
}
`,
  getFlagsSummary: `query getFlagsSummary {
  flags {
    id
    name
    isUserPassing
    __typename
  }
}
`,
  getFpmMasteryForTopic: `query getFpmMasteryForTopic($topicId: String!) {
  user {
    id
    curationItemProgress(topicId: $topicId) {
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
    __typename
  }
}
`,
  getFullUserProfile: `query getFullUserProfile($kaid: String, $username: String) {
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
    isCurator: hasPermission(name: "can_curate_tags", scope: ANY_ON_CURRENT_LOCALE)
    isCreator: hasPermission(name: "has_creator_role", scope: ANY_ON_CURRENT_LOCALE)
    isPublisher: hasPermission(name: "can_publish", scope: ANY_ON_CURRENT_LOCALE)
    isModerator: hasPermission(name: "can_moderate_users", scope: GLOBAL)
    isParent
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
    birthMonthYear
    lastLoginCountry
    __typename
  }
  actorIsImpersonatingUser
  isAIGuideEnabled
  hasAccessToAIGuideDev
}
`,
  getInfoForTotalStudentCountQuery: `query getInfoForTotalStudentCountQuery {
  coach: user {
    id
    coacheeCount
    coachInvitationsCount
    __typename
  }
}
`,
  getInitialDataForPrePhantomUser: `query getInitialDataForPrePhantomUser($exerciseId: ID!, $input: AssessmentItemInput!) {
  assessmentItem(input: $input) {
    item {
      id
      sha
      problemType
      itemData
      __typename
    }
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
  getDummyPracticeTaskForPrePhantomUser(exerciseId: $exerciseId) {
    userTask {
      ...userTaskFields
      __typename
    }
    __typename
  }
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
}

fragment userTaskFields on PracticeUserTask {
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
}
`,
  getIsClassCleverLibrarySynced: `query getIsClassCleverLibrarySynced($classDescriptor: String!) {
  classroom: classroomByDescriptor(descriptor: $classDescriptor) {
    id
    cacheId
    isCleverLibrarySynced
    __typename
  }
}
`,
  getIsDistrictSynced: `query getIsDistrictSynced($classDescriptor: String!) {
  classroom: classroomByDescriptor(descriptor: $classDescriptor) {
    id
    cacheId
    isDistrictSynced
    __typename
  }
}
`,
  getItemsForExercise: `query getItemsForExercise($id: String!) {
  exercise: exerciseById(id: $id) {
    id
    problemTypes {
      items {
        id
        __typename
      }
      __typename
    }
    assessmentItems {
      id
      tags: tagIds
      __typename
    }
    __typename
  }
}
`,
  getKhanLabsSettings: `query getKhanLabsSettings($targetKaid: String!) {
  user(kaid: $targetKaid) {
    id
    age
    isParent
    isAIGuideEnabled
    aiGuideDisabledReason
    nickname
    children {
      id
      age
      nickname
      isAIGuideEnabled
      aiGuideDisabledReason
      __typename
    }
    __typename
  }
}
`,
  getLastSecond: `query getLastSecond($readableVideoId: String!) {
  user {
    id
    contentItemProgresses(queryBy: {videoSlug: $readableVideoId}) {
      ... on VideoItemProgress {
        lastSecondWatched
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  getLearnMenuProgress: `query getLearnMenuProgress($slugs: [String!]) {
  user {
    id
    subjectProgressesBySlug(slugs: $slugs) {
      topic {
        id
        slug
        __typename
      }
      currentMastery {
        percentage
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  getLearnStormCampaign: `query getLearnStormCampaign($id: ID!) {
  campaign: learnStormCampaign(id: $id) {
    id
    live
    eligibleLocale
    eligibleCountryCodes
    campaignName
    promoSite
    growthMindsetUrl
    certificateUrl
    signupStartDate
    startDate
    stopDate
    shutdownDate
    bannerEnrollmentHeader
    bannerEnrollmentCopy
    bannerBeforeHeader
    bannerBeforeCopy
    bannerDuringHeader
    bannerDuringCopy
    bannerAfterHeader
    bannerAfterCopy
    week
    weeks
    bannerVisible
    __typename
  }
}
`,
  getLearnStormCampaignDataForEnrollment: `query getLearnStormCampaignDataForEnrollment {
  learnStormActiveEligibleCampaign {
    id
    campaignName
    __typename
  }
}
`,
  getLearnStormCampaignEnrollmentStatus: `query getLearnStormCampaignEnrollmentStatus($campaignId: ID!) {
  learnStormCampaignEnrollmentStatus(id: $campaignId) {
    isEnrolled
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}
`,
  getLearnStormCampaigns: `query getLearnStormCampaigns {
  learnStormCampaigns {
    id
    campaignName
    live
    __typename
  }
}
`,
  getLearnStormDashboard: `query getLearnStormDashboard($classDescriptor: String!) {
  coach: user {
    id
    studentLists: coachedStudentLists {
      id
      cacheId
      name
      signupCode
      countStudents
      __typename
    }
    __typename
  }
  classroom: classroomByDescriptor(descriptor: $classDescriptor) {
    id
    cacheId
    countStudents
    signupCode
    learnStormStatus {
      pointsNeededPerLevel
      classroomProgress {
        id
        earnedLevel
        currentLevelProgress
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  getManagedDistricts: `query getManagedDistricts {
  user {
    id
    managedDistricts {
      id
      name
      isTest
      isKmapDistrict
      isK4dDistrict
      __typename
    }
    homepageUrl
    userChosenRoles
    __typename
  }
}
`,
  GetMappersSuggestions: `query GetMappersSuggestions($kaid: String!) {
  mappersSuggestions(studentKaid: $kaid) {
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
}
`,
  getMasteryTowerEventsQuery: `query getMasteryTowerEventsQuery($classDescriptor: String!) {
  teacherMasteryTowerCurrentEvents(classroomDescriptor: $classDescriptor) {
    events {
      id
      eventTime
      pointsEarned
      source
      student {
        id
        kaid
        nickname
        __typename
      }
      exercise {
        id
        title
        defaultUrlPath
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  getModerationLogs: `query getModerationLogs($limit: Int!, $cursor: String!) {
  moderationLogs(limit: $limit, cursor: $cursor) {
    moderationLogs {
      date
      description {
        href
        linkText
        postText
        preText
        __typename
      }
      moderator {
        id
        kaid
        nickname
        __typename
      }
      __typename
    }
    nextCursor
    __typename
  }
}
`,
  getModerationResult: `query getModerationResult($input: String!) {
  getModerationResult(input: $input) {
    categories
    categoryScores
    flagged
    __typename
  }
}
`,
  GetNotationReadAloudsForAssessmentItem: `query GetNotationReadAloudsForAssessmentItem($assessmentItemID: ID!, $exerciseID: ID!) {
  getNotationReadAloudsForAssessmentItem(assessmentItemID: $assessmentItemID, exerciseID: $exerciseID) {
    notationReadAlouds {
      assessmentItemId
      domainId
      exerciseId
      exerciseUrl
      id
      readable
      original
      __typename
    }
    error {
      code
      message
      __typename
    }
    __typename
  }
}
`,
  getNotificationsForUser: `query getNotificationsForUser($after: ID) {
  user {
    id
    notifications(after: $after) {
      notifications {
        __typename
        brandNew
        class_
        date
        kaid
        read
        url
        urlsafeKey
        ...ThreadCreatedNotificationType
        ...AssignmentDueDateNotificationType
        ...AssignmentCreatedNotificationType
        ...CoachRequestNotificationType
        ...BadgeNotificationType
        ...CourseMasteryGoalCreatedNotificationType
        ...ModeratorNotificationType
        ...ProgramFeedbackNotificationType
        ...CoachRequestAcceptedNotificationType
        ...AvatarNotificationType
        ...InfoNotificationType
        ...ResponseFeedbackNotificationType
        ...GroupedBadgeNotificationType
      }
      pageInfo {
        nextCursor
        __typename
      }
      __typename
    }
    __typename
  }
}

fragment AssignmentCreatedNotificationType on AssignmentCreatedNotification {
  numAssignments
  contentTitle
  curationNodeIconURL
  className
  __typename
}

fragment AssignmentDueDateNotificationType on AssignmentDueDateNotification {
  numAssignments
  dueDate
  contentTitle
  curationNodeIconURL
  __typename
}

fragment AvatarNotificationType on AvatarNotification {
  name
  thumbnailSrc
  __typename
}

fragment BadgeNotificationType on BadgeNotification {
  badgeName
  badge {
    description
    fullDescription
    name
    relativeUrl
    icons {
      compactUrl
      __typename
    }
    __typename
  }
  __typename
}

fragment CoachRequestAcceptedNotificationType on CoachRequestAcceptedNotification {
  isMultipleClassrooms
  student {
    id
    email
    nickname
    __typename
  }
  classroom {
    cacheId
    id
    name
    topics {
      id
      slug
      iconUrl
      key
      translatedStandaloneTitle
      __typename
    }
    __typename
  }
  __typename
}

fragment CoachRequestNotificationType on CoachRequestNotification {
  coachIsParent
  coach {
    id
    kaid
    nickname
    __typename
  }
  __typename
}

fragment CourseMasteryGoalCreatedNotificationType on CourseMasteryGoalCreatedNotification {
  curationNodeIconURL
  curationNodeTranslatedTitle
  masteryPercentage
  __typename
}

fragment GroupedBadgeNotificationType on GroupedBadgeNotification {
  badgeNotifications {
    badge {
      badgeCategory
      description
      fullDescription
      name
      icons {
        compactUrl
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}

fragment InfoNotificationType on InfoNotification {
  notificationType
  __typename
}

fragment ModeratorNotificationType on ModeratorNotification {
  text
  __typename
}

fragment ProgramFeedbackNotificationType on ProgramFeedbackNotification {
  authorAvatarSrc
  authorNickname
  feedbackType
  translatedScratchpadTitle
  content
  __typename
}

fragment ResponseFeedbackNotificationType on ResponseFeedbackNotification {
  authorAvatarUrl
  authorNickname
  feedbackType
  focusTranslatedTitle
  content
  sumVotesIncremented
  __typename
}

fragment ThreadCreatedNotificationType on ThreadCreatedNotification {
  coachee {
    id
    kaid
    nickname
    __typename
  }
  threadId
  flagged
  __typename
}
`,
  getOffensiveTerms: `query getOffensiveTerms($isAiGuide: Boolean) {
  offensiveTerms(isAiGuide: $isAiGuide) {
    id
    term
    __typename
  }
}
`,
  getOfficialClarifications: `query getOfficialClarifications($youtubeId: String!) {
  officialClarifications(youtubeId: $youtubeId) {
    ...clarificationFragment
    __typename
  }
}

fragment clarificationFragment on OfficialClarification {
  id
  text
  openTimestamp
  closeTimestamp
  youtubeId
  __typename
}
`,
  getOfficialClarificationsWithReporter: `query getOfficialClarificationsWithReporter($youtubeId: String!) {
  officialClarifications(youtubeId: $youtubeId) {
    ...clarificationFragmentWithReporter
    __typename
  }
}
`,
  getPendingStudentsAsDevadmin: `query getPendingStudentsAsDevadmin($kaid: String!) {
  coach: user(kaid: $kaid) {
    id
    invitations {
      id
      email
      accepted
      __typename
    }
    coachRequests {
      id
      studentIdentifier
      studentKaid
      __typename
    }
    cleverCoachRequests {
      id
      studentIdentifier
      studentKaid
      __typename
    }
    __typename
  }
}
`,
  getProfileWidgetPrograms: `query getProfileWidgetPrograms($kaid: String!) {
  user(kaid: $kaid) {
    id
    profile {
      programs {
        id
        authorKaid
        authorNickname
        deleted
        displayableSpinoffCount
        imagePath
        key
        sumVotesIncremented
        translatedTitle: title
        url
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  getProfileWidgets: `query getProfileWidgets($kaid: String!) {
  user(kaid: $kaid) {
    id
    kaid
    badgeCounts
    isChild
    profile {
      programs {
        id
        authorKaid
        authorNickname
        deleted
        displayableSpinoffCount
        imagePath
        key
        sumVotesIncremented
        translatedTitle: title
        url
        __typename
      }
      __typename
    }
    programs(sort: TOP, pageInfo: {itemsPerPage: 2}) {
      programs {
        id
        authorKaid
        authorNickname
        deleted
        displayableSpinoffCount
        imagePath
        key
        sumVotesIncremented
        translatedTitle: title
        url
        __typename
      }
      __typename
    }
    __typename
  }
  userSummary(kaid: $kaid) {
    statistics {
      answers
      comments
      flags
      projectanswers
      projectquestions
      questions
      replies
      votes
      __typename
    }
    __typename
  }
}
`,
  getPromoForUser: `query getPromoForUser($promoName: String!) {
  user {
    id
    promotion(promoName: $promoName)
    __typename
  }
}
`,
  getPublicBadgesForProfiles: `query getPublicBadgesForProfiles($kaid: String) {
  user(kaid: $kaid) {
    id
    profile {
      badges {
        ...Badge
        __typename
      }
      __typename
    }
    __typename
  }
}

fragment Badge on Badge {
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
}
`,
  getRecentlySubmittedStories: `query getRecentlySubmittedStories {
  recentSubmittedStories {
    key
    submitterName
    date
    story
    youtubeId
    __typename
  }
}
`,
  getResources: `query getResources {
  coachResourcesCurationPage {
    curationData
    __typename
  }
}
`,
  getRoleData: `query getRoleData {
  roles {
    name
    description
    __typename
  }
}
`,
  getSailthruNewsletters: `query getSailthruNewsletters($targetKaid: String) {
  target: user(kaid: $targetKaid) {
    id
    emailSubscriptions {
      sailthruSubscriptions {
        checked
        description
        key
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  getSailthruNewslettersByToken: `query getSailthruNewslettersByToken($token: String!) {
  emailSettingsFromUnsubscribeToken(token: $token) {
    emailSubscriptions {
      sailthruSubscriptions {
        checked
        description
        key
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  getSatClass: `query getSatClass($classDescriptor: String!, $coachKaid: String, $domain: SatDomain, $startDate: Date, $endDate: Date) {
  coach: user(kaid: $coachKaid) {
    id
    satClass(classroomDescriptor: $classDescriptor) {
      studentList {
        id
        cacheId
        name
        includesSat
        __typename
      }
      studentData(domain: $domain, startDate: $startDate, endDate: $endDate) {
        id
        cbLinked
        examDate
        kaid
        name
        registeredExamDate
        problemsInfosWithDomain {
          problemsDone
          minutes
          mathRecommendedProblemsDone
          mathProblemsDone
          rwRecommendedProblemsDone
          rwProblemsDone
          mathDiagnosticsProgress
          rwDiagnosticsProgress
          __typename
        }
        __typename
      }
      skillInfo {
        skillId
        rank
        studentRecommendations
        studentLevels
        __typename
      }
      __typename
    }
    __typename
  }
  satSkills {
    name
    domain
    categoryTitle
    skillId
    __typename
  }
}
`,
  getSATLandingPageVideo: `query getSATLandingPageVideo($id: String!) {
  video(id: $id) {
    id
    kind
    kaUrl
    slug
    translatedTitle
    translatedYoutubeId
    youtubeId
    __typename
  }
}
`,
  getSatSkill: `query getSatSkill($skillId: String!) {
  satSkill(skillId: $skillId) {
    name
    domain
    subDomain
    categoryTitle
    frequencyBand
    relatedTopics {
      id
      title
      iconPath
      relativeUrl
      __typename
    }
    relatedVideos {
      id
      kind
      title
      youtubeId
      thumbnailUrl
      relativeUrl
      duration
      slug
      __typename
    }
    relatedExercises {
      id
      kind
      title
      thumbnailUrl
      relativeUrl
      slug
      __typename
    }
    relatedArticles {
      id
      kind
      title
      thumbnailUrl
      relativeUrl
      slug
      __typename
    }
    workedExamples {
      id
      kind
      title
      youtubeId
      thumbnailUrl
      relativeUrl
      duration
      slug
      __typename
    }
    cbLessonPlans {
      id
      kind
      title
      thumbnailUrl
      relativeUrl
      slug
      __typename
    }
    __typename
  }
}
`,
  getSatStudent: `query getSatStudent($kaid: String!, $domain: SatDomain, $startDate: Date, $endDate: Date) {
  coach: user {
    id
    satStudent(id: $kaid, domain: $domain, startDate: $startDate, endDate: $endDate) {
      id
      name
      kaid
      activeScheduleCreated
      examType
      practiceTime {
        hour
        minute
        __typename
      }
      examDate
      registeredExamDate
      cbLinked
      recommendedTasks {
        domain
        isCompleted
        name
        title
        taskId
        taskType
        level
        minutes
        __typename
      }
      completedTasks {
        date
        completedTasks {
          domain
          name
          title
          taskId
          taskType
          level
          minutes
          numCorrect
          numTotal
          reviewable
          formName
          scanAndScore
          __typename
        }
        __typename
      }
      practiceTestScores {
        title
        math
        readingAndWriting
        overall
        essay {
          reading
          analysis
          writing
          __typename
        }
        scanAndScore
        __typename
      }
      practicePlan {
        date
        callToAction
        examCompleted
        examId
        numProblems
        sessionLength
        visited
        minutesSpent
        __typename
      }
      domainSkillLevels {
        domain
        level
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  getSatStudentRecentActivity: `query getSatStudentRecentActivity($kaid: String!, $domain: SatDomain, $startDate: Date, $endDate: Date) {
  coach: user {
    id
    satStudent(id: $kaid, domain: $domain, startDate: $startDate, endDate: $endDate) {
      id
      problemsInfosWithDomain {
        problemsDone
        minutes
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  getSatStudentRecommendedTasks: `query getSatStudentRecommendedTasks($kaid: String!, $domain: SatDomain, $startDate: Date, $endDate: Date) {
  coach: user {
    id
    satStudent(id: $kaid, domain: $domain, startDate: $startDate, endDate: $endDate) {
      id
      recommendedTasks {
        domain
        isCompleted
        name
        title
        taskId
        taskType
        level
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  getSettingsPageData: `query getSettingsPageData($targetKaid: String) {
  target: user(kaid: $targetKaid) {
    id
    nickname
    username
    isActor
    isChild
    email
    isEnrolledInAIGuide
    __typename
  }
}
`,
  getSettingsPageDataByToken: `query getSettingsPageDataByToken($token: String!, $targetKaid: String) {
  target: user(kaid: $targetKaid) {
    id
    nickname
    username
    isActor
    isChild
    email
    isEnrolledInAIGuide
    __typename
  }
  emailSettingsFromUnsubscribeToken(token: $token) {
    email
    __typename
  }
}
`,
  GetStandardMappingEdits: `query GetStandardMappingEdits($setId: String!) {
  standardMappingEdits(setId: $setId) {
    id
    setId
    standardId
    contentDescriptor
    secondaryDescriptor
    deletion: isDeletion
    __typename
  }
}
`,
  getStandardsDataForLocaleAndDomain: `query getStandardsDataForLocaleAndDomain($locale: String, $domain: String) {
  allSetsOfStandards(locale: $locale, domain: $domain) {
    id
    name
    shortName
    standards {
      id
      standardId
      description
      children
      __typename
    }
    __typename
  }
}
`,
  getStandardsForContent: `query getStandardsForContent($setId: String!, $contentDescriptor: String!, $secondaryDescriptor: String) {
  standards: editableStandardsForContent(setId: $setId, contentDescriptor: $contentDescriptor, secondaryDescriptor: $secondaryDescriptor) {
    id
    standardId
    __typename
  }
}
`,
  GetStaticContent: `query GetStaticContent {
  allLicenseOptions {
    id
    name
    fullName
    deedURL
    logoURL
    __typename
  }
  allCompletionCriteriaOptions {
    id
    name
    __typename
  }
}
`,
  getStripeSubscriptionForEditing: `query getStripeSubscriptionForEditing($subscriptionId: String!) {
  simplifiedStripeSubscription(subscriptionId: $subscriptionId) {
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
}
`,
  getStudent: `query getStudent($kaid: String!, $teacherKaid: String!) {
  user(kaid: $kaid) {
    id
    email
    username
    nickname
    coachNickname(teacherKaid: $teacherKaid)
    profileRoot
    __typename
  }
}
`,
  getStudentExerciseContentReport_Exercise: `query getStudentExerciseContentReport_Exercise($assignmentId: String!, $slug: String) {
  exercise(name: $slug) {
    id
    translatedTitle: translatedDisplayName
    assessmentItems {
      id
      contentId
      itemData
      __typename
    }
    __typename
  }
  student: user {
    id
    kaid
    nickname
    assignment(id: $assignmentId) {
      id
      assignedDate
      __typename
    }
    __typename
  }
}
`,
  getStudentExerciseContentReport_TopicQuiz: `query getStudentExerciseContentReport_TopicQuiz($assignmentId: String!, $slug: String) {
  topicQuiz(slug: $slug) {
    id
    translatedTitle
    coveredExercises(includeCoveredSkills: true) {
      id
      assessmentItems {
        id
        contentId
        itemData
        __typename
      }
      __typename
    }
    __typename
  }
  student: user {
    id
    kaid
    nickname
    assignment(id: $assignmentId) {
      id
      assignedDate
      __typename
    }
    __typename
  }
}
`,
  getStudentExerciseContentReport_TopicUnitTest: `query getStudentExerciseContentReport_TopicUnitTest($assignmentId: String!, $slug: String) {
  topicUnitTest(slug: $slug) {
    id
    translatedTitle
    coveredExercises(includeCoveredSkills: true) {
      id
      assessmentItems {
        id
        contentId
        itemData
        __typename
      }
      __typename
    }
    __typename
  }
  student: user {
    id
    kaid
    nickname
    assignment(id: $assignmentId) {
      id
      assignedDate
      __typename
    }
    __typename
  }
}
`,
  getStudentListEmailSubscriptions: `query getStudentListEmailSubscriptions($studentListId: String!) {
  coach: user {
    id
    emailSubscriptions {
      coachReportSubscription: classroomEmailSubscriptionForClassroomID(classroomID: $studentListId) {
        checked
        token
        __typename
      }
      satCoachReportSubscription: satClassroomEmailSubscriptionForClassroomID(classroomID: $studentListId) {
        checked
        token
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  getStudents: `query getStudents($classDescriptor: String!) {
  classroom: classroomByDescriptor(descriptor: $classDescriptor) {
    id
    cacheId
    studentKaidsAndNicknames {
      id
      kaid
      coachNickname
      __typename
    }
    __typename
  }
}
`,
  getStudentSettings: `query getStudentSettings($kaid: String!) {
  student: user(kaid: $kaid) {
    id
    nickname
    username
    birthdate
    userLanguage
    soundOn
    muteVideos
    showCaptions
    hideVisual
    prefersReducedMotion
    noColorInVideos
    isDistrictSynced
    settingsCanBeModByLoggedInUser
    userDistrictInfos {
      id
      districtProvidedBirthMonth
      districtProvidedBirthYear
      __typename
    }
    __typename
  }
}
`,
  getStudentsForMappers: `query getStudentsForMappers {
  user {
    id
    nickname
    username
    age
    studentLists: coachedStudentLists {
      id
      cacheId
      key
      name
      __typename
    }
    students: coachees {
      id
      nickname
      username
      age
      studentLists {
        id
        cacheId
        key
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  getStudentsPerClass: `query getStudentsPerClass($after: Int, $classDescriptor: String!, $coachKaid: String, $dueAfter: DateTime, $pageSize: Int) {
  classroom: classroomByDescriptor(descriptor: $classDescriptor) {
    id
    cacheId
    studentsPage(after: $after, pageSize: $pageSize) {
      students {
        id
        assignmentCount(dueAfter: $dueAfter)
        coachNickname(teacherKaid: $coachKaid)
        email
        isChild
        username
        __typename
      }
      nextCursor
      __typename
    }
    __typename
  }
}
`,
  getStudentsPerCoach: `query getStudentsPerCoach($coachKaid: String, $after: Int, $pageSize: Int) {
  coach: user(kaid: $coachKaid) {
    id
    studentsPage(after: $after, pageSize: $pageSize) {
      students {
        id
        coachNickname(teacherKaid: $coachKaid)
        kaid
        email
        isChild
        username
        __typename
      }
      nextCursor
      __typename
    }
    __typename
  }
}
`,
  getStudentUserStatus: `query getStudentUserStatus {
  user {
    id
    nickname
    age
    birthdate
    cleverId
    userDistrictInfos {
      id
      __typename
    }
    __typename
  }
}
`,
  GetSubtitles: `query GetSubtitles($youtubeId: String!, $kaLocale: String!) {
  subtitles(youtubeId: $youtubeId, kaLocale: $kaLocale) {
    text
    startTime
    endTime
    kaIsValid
    __typename
  }
}
`,
  getSuggestedUsername: `query getSuggestedUsername($requestedUsername: String!) {
  suggestedUsername(requestedUsername: $requestedUsername)
}
`,
  GetSuggestionsSource: `query GetSuggestionsSource($version: String!) {
  queryCounts(version: $version) {
    name
    count
    __typename
  }
}
`,
  getTeacherCampaign: `query getTeacherCampaign($id: String!) {
  teacherCampaign(id: $id) {
    id
    live
    eligibleLocale
    eligibleCountryCodes
    campaignName
    promoSite
    signupStartDate
    startDate
    shutdownDate
    bannerBeforeHeader
    bannerBeforeCopy
    bannerBeforeGraphic
    colorBg
    colorBgAccent
    steps {
      id
      header
      body
      graphic
      cta
      headerShort
      __typename
      ... on TeacherCampaignVideoStep {
        numberRequired
        handouts
        manualHandouts
        manualHandoutDescriptions
        videos
        description
        __typename
      }
      ... on TeacherCampaignResponseStep {
        description
        exercises {
          title
          description
          introduction
          questions
          samples
          __typename
        }
        __typename
      }
      ... on TeacherCampaignAwardStep {
        headerOnCompletion
        bodyOnCompletion
        certificate
        extraCredit
        nextDrawTime
        useGenericIcon
        __typename
      }
    }
    __typename
  }
}
`,
  getTeacherCampaignDataForResponsePage: `query getTeacherCampaignDataForResponsePage($id: ID!, $stepId: ID!) {
  coach: user {
    id
    teacherCampaignProgress(id: $id) {
      id
      completedSteps
      responseProgress(stepId: $stepId) {
        completedExercises
        __typename
      }
      campaign {
        id
        steps {
          __typename
          id
          ... on TeacherCampaignResponseStep {
            header
            body
            graphic
            description
            exercises {
              title
              description
              introduction
              questions
              samples
              __typename
            }
            __typename
          }
        }
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  getTeacherCampaignDataForVideoPage: `query getTeacherCampaignDataForVideoPage($id: ID!) {
  coach: user {
    id
    teacherCampaignProgress(id: $id) {
      id
      completedSteps
      campaign {
        id
        steps {
          __typename
          id
          ... on TeacherCampaignVideoStep {
            header
            body
            graphic
            numberRequired
            handouts
            manualHandouts
            manualHandoutDescriptions
            videos
            description
            __typename
          }
        }
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  getTeacherCampaignPreviewVideo: `query getTeacherCampaignPreviewVideo($id: String!) {
  video(id: $id) {
    id
    thumbnailUrl
    kind
    kaUrl
    slug
    translatedTitle
    translatedYoutubeId
    translatedDescription
    youtubeId
    __typename
  }
  user {
    id
    contentItemProgresses(queryBy: {videoSlug: $id}) {
      completionStatus
      __typename
    }
    __typename
  }
}
`,
  getTeacherCampaignProgressForBanner: `query getTeacherCampaignProgressForBanner {
  coach: user {
    id
    teacherCampaignProgress {
      id
      optedOutPreCampaign
      optedOutOfCampaign
      completedSteps
      campaign {
        id
        live
        eligibleLocale
        eligibleCountryCodes
        campaignName
        promoSite
        signupStartDate
        startDate
        shutdownDate
        bannerBeforeHeader
        bannerBeforeCopy
        bannerBeforeGraphic
        colorBg
        colorBgAccent
        challengeActive
        contestActive
        steps {
          id
          header
          body
          graphic
          cta
          headerShort
          __typename
          ... on TeacherCampaignVideoStep {
            numberRequired
            handouts
            videos
            __typename
          }
          ... on TeacherCampaignResponseStep {
            exercises {
              introduction
              questions
              __typename
            }
            __typename
          }
          ... on TeacherCampaignAwardStep {
            headerOnCompletion
            bodyOnCompletion
            certificate
            extraCredit
            nextDrawTime
            useGenericIcon
            __typename
          }
        }
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  getTeacherCampaigns: `query getTeacherCampaigns {
  teacherCampaigns {
    id
    campaignName
    live
    __typename
  }
}
`,
  getTeamPage: `query getTeamPage($name: TeamPageName!) {
  teamPage(name: $name) {
    entries {
      id
      liveContent {
        id
        name
        isAlum
        mainPhotoURL
        hoverPhotoURL
        title
        bio
        altNames
        contactLinks {
          type
          url
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  getTestPrepProgressReport: `query getTestPrepProgressReport($classDescriptor: String!, $filters: TestPrepProgressReportFilters) {
  testPrepProgressReport(classroomDescriptor: $classDescriptor, filters: $filters) {
    teacherKaid
    classId
    rows {
      studentKaidAndNickname {
        id
        coachNickname
        __typename
      }
      totalMinutes
      completedPracticeTasks
      passedPracticeTasks
      skillsLeveledUp
      __typename
    }
    __typename
  }
}
`,
  getThankYouVideo: `query getThankYouVideo {
  video(id: "evergreen-thank-you-video") {
    id
    kaUrl
    kind
    slug
    title
    translatedTitle
    translatedYoutubeId
    youtubeId
    __typename
  }
}
`,
  getTopic: `query getTopic($slug: String!) {
  topic(slug: $slug) {
    id
    relativeUrl
    translatedTitle
    __typename
  }
}
`,
  getTopicPathBreadcrumbs: `query getTopicPathBreadcrumbs($descriptors: [String!]!) {
  contentForDescriptors(descriptors: $descriptors) {
    id
    topicPaths {
      path {
        id
        kind
        slug
        content {
          ... on CurationNode {
            id
            title
            __typename
          }
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  GetTopicQuestionsQuery: `query GetTopicQuestionsQuery($topicId: String!, $cursor: String, $limit: Int, $feedbackType: FeedbackType, $forceInTutorial: Boolean, $minAnswers: Int, $maxAnswers: Int) {
  topicQuestions(topicID: $topicId, topicSlug: "", cursor: $cursor, limit: $limit, feedbackType: $feedbackType, forceInTutorial: $forceInTutorial, minAnswers: $minAnswers, maxAnswers: $maxAnswers, answersLimit: 1) {
    feedback {
      isLocked
      isPinned
      replyCount
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
      flaggedByUser
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
      lowQualityScore
      notifyOnAnswer
      permalink
      qualityKind
      replyCount
      replyExpandKeys
      showLowQualityNotice
      sumVotesIncremented
      upVoted
      ... on QuestionFeedback {
        hasAnswered
        answers {
          isLocked
          isPinned
          replyCount
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
          lowQualityScore
          notifyOnAnswer
          permalink
          qualityKind
          replyCount
          replyExpandKeys
          showLowQualityNotice
          sumVotesIncremented
          upVoted
          __typename
        }
        isOld
        answerCount
        __typename
      }
      ... on AnswerFeedback {
        question {
          isLocked
          isPinned
          replyCount
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
          lowQualityScore
          notifyOnAnswer
          permalink
          qualityKind
          replyCount
          replyExpandKeys
          showLowQualityNotice
          sumVotesIncremented
          upVoted
          __typename
        }
        __typename
      }
      __typename
    }
    domainId
    cursor
    complete
    length
    topic {
      id
      slug
      translatedTitle
      relativeUrl
      description
      title
      creationDate
      kind
      translatedDescription
      __typename
    }
    __typename
  }
}
`,
  getTopics: `query getTopics($courseIdsToAdd: [String]!, $descriptor: String!, $fetchDistrictCourses: Boolean!) {
  domains: studentListTopics {
    slug: domainSlug
    title: translatedTitle
    subjects: topics {
      contentKind
      slug
      id
      key
      title: translatedTitle
      iconPath
      domainSlug
      __typename
    }
    __typename
  }
  coursesByIds(ids: $courseIdsToAdd) {
    contentKind
    slug
    id
    key
    title: translatedTitle
    iconPath
    domainSlug
    __typename
  }
  classroom: classroomByDescriptor(descriptor: $descriptor) @include(if: $fetchDistrictCourses) {
    id
    cacheId
    classroomDistrictInfo {
      id
      customCourses {
        id
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  getTransferAuthToken: `query getTransferAuthToken {
  user {
    id
    transferAuthToken
    __typename
  }
}
`,
  getUserByUsernameOrEmail: `query getUserByUsernameOrEmail($username: String, $email: String) {
  user(username: $username, email: $email) {
    id
    kaid
    __typename
  }
}
`,
  getUserChangeLogsAsDevadmin: `query getUserChangeLogsAsDevadmin($after: ID, $actorKaid: String, $targetKaid: String, $pageSize: Int) {
  user {
    id
    userSettingsChangeLogsPage(actorKaid: $actorKaid, targetKaid: $targetKaid, pageSize: $pageSize, after: $after) {
      logs {
        id
        actorKaid
        targetKaid
        timestamp
        changes {
          settingsType
          beforeValue
          afterValue
          __typename
        }
        __typename
      }
      pageInfo {
        nextCursor
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  getUserCoaches: `query getUserCoaches($kaid: String!) {
  user(kaid: $kaid) {
    id
    classroomDistrictInfos {
      id
      teacherUserDistrictInfoIDs {
        id
        kaid
        __typename
      }
      __typename
    }
    coaches {
      id
      kaid
      username
      nickname
      profileRoot
      isCoachingLoggedInUser
      __typename
    }
    pendingCoaches {
      id
      kaid
      username
      nickname
      profileRoot
      isCoachingLoggedInUser
      __typename
    }
    __typename
  }
}
`,
  getUserDevAdminGeneral: `query getUserDevAdminGeneral($kaid: String!) {
  user(kaid: $kaid) {
    id
    age
    aiGuideWaitlistStatus
    applePrimaryEmail
    appleId
    authEmails
    birthdate
    bio
    canAccessDistrictsHomepage
    canModifyCoaches
    cleverDistrictId
    cleverId
    cleverLastSync
    coaches {
      id
      kaid
      email
      username
      __typename
    }
    collegeBoardUsername
    pendingCoaches {
      id
      kaid
      email
      username
      __typename
    }
    countExercisesMastered
    countVideosCompleted
    discussionBanned
    email
    facebookPrimaryEmail
    facebookId
    googlePrimaryEmail
    googleId
    hasParents
    hasPassword
    homepage
    isAIGuideEnabled
    isChild
    isEnrolledInAIGuide
    isPhantom
    isParent
    isTeacher
    isFormalTeacher
    joined
    kaid
    lastLogin
    lastLoginIp
    lastLoginCountry
    lastLoginLocale
    lastReportedTimezone
    managingParent {
      id
      kaid
      email
      username
      __typename
    }
    mobileNumber
    mobileNumberVerified
    nickname
    parents {
      id
      kaid
      email
      username
      __typename
    }
    pendingEmails
    pendingEmailVerifications {
      email
      __typename
    }
    points
    possibleConflictingUsers {
      kaid: id
      email
      username
      __typename
    }
    profileRoot
    programCount
    signupDataIfUnverified {
      email
      __typename
    }
    spawningTeacher {
      id
      kaid
      email
      username
      __typename
    }
    spawningParent {
      id
      kaid
      email
      username
      __typename
    }
    title
    tosForFormalTeacherStatus
    underAgeGate {
      approvalGivenAt
      approvalSource
      parentEmail
      __typename
    }
    userAdminLogs {
      adminKaid
      adminEmail
      date
      description
      __typename
    }
    userId
    userLanguage
    username
    userNotes {
      text
      date
      author {
        id
        email
        __typename
      }
      __typename
    }
    userChosenRoles
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
      cleverId
      classlinkId
      rosterSource
      activationEmailSentAt
      activatedAt
      activationMethod
      districtProvidedFullName
      districtProvidedEmail
      districtProvidedBirthMonth
      districtProvidedBirthYear
      primaryRole
      isKmap
      isKAD
      gradeLevel
      adminOfSchools {
        id
        name
        __typename
      }
      __typename
    }
    walmartId
    walmartDivision
    hasCoach
    isK4dStudent
    isK4dTeacher
    isStudentOfFormalTeacherActor
    __typename
  }
  coach: user(kaid: $kaid) {
    id
    countStudents: coacheeCount
    studentLists: coachedStudentLists {
      id
      descriptor
      cacheId
      name
      includesSat
      isCleverLibrarySynced
      isK4dClassroom
      isKmapClassroom
      signupCode
      googleClassId
      topics {
        id
        title
        __typename
      }
      classroomDistrictInfo {
        id
        classWillBeRemovedInDays
        __typename
      }
      createdOn
      studentKaids
      primaryTeacher: coach {
        id
        kaid
        email
        __typename
      }
      allTeachers {
        id
        kaid
        email
        __typename
      }
      masteryTowerCurrentWeekScore
      __typename
    }
    __typename
  }
}
`,
  getUserHasUsedProduct: `query getUserHasUsedProduct($examGroupId: String!, $kaid: String!) {
  examGroup(examGroupId: $examGroupId) {
    id
    userHasUsedProduct(kaid: $kaid)
    __typename
  }
}
`,
  getUserHoverCardProfile: `query getUserHoverCardProfile($kaid: String!) {
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
}
`,
  getUserInfoForLinking: `query getUserInfoForLinking($userDistrictInfoUuid: ID!) {
  userDistrictInfo(uuid: $userDistrictInfoUuid) {
    id
    districtProvidedEmail
    districtProvidedFirstName
    districtProvidedLastName
    districtProvidedFullName
    districtProvidedBirthYear
    districtProvidedBirthMonth
    primaryRole
    isKmap
    kaid
    uuid
    cleverId
    classlinkId
    __typename
  }
}
`,
  getUserInfoForSubjectProgress: `query getUserInfoForSubjectProgress($topicId: String!) {
  user {
    id
    curationItemProgress(topicId: $topicId) {
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
    __typename
  }
}
`,
  getUserInfoForTopicProgressMastery: `query getUserInfoForTopicProgressMastery($topicId: String!) {
  user {
    contentItemProgresses(queryBy: {parentTopicId: $topicId}) {
      ...CommonContentItemProgressesFragment
      __typename
    }
    ...CommonUserInfoFragment
    __typename
  }
}

fragment CommonContentItemProgressesFragment on ContentItemProgress {
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
}

fragment CommonUserInfoFragment on User {
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
}
`,
  getUserInfoForTopicProgressNonMastery: `query getUserInfoForTopicProgressNonMastery($topicId: String!) {
  user {
    contentItemProgresses(queryBy: {parentTopicId: $topicId}) {
      ...CommonContentItemProgressesFragment
      ... on ExerciseItemProgress {
        lastCompletedAttempt {
          id
          lastAttemptDate
          numCorrect
          numAttempted
          __typename
        }
        __typename
      }
      __typename
    }
    ...CommonUserInfoFragment
    __typename
  }
}

fragment CommonContentItemProgressesFragment on ContentItemProgress {
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
}

fragment CommonUserInfoFragment on User {
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
}
`,
  getUserProgressDump: `query getUserProgressDump($kaid: String!, $problemLogCursor: ID, $videoProgressesCursor: ID, $pageSize: Int, $startDt: DateTime, $endDt: DateTime) {
  user(kaid: $kaid) {
    id
    kaid
    email
    lastLoginLocale
    rawLogs {
      videoProgressesPage(startDt: $startDt, endDt: $endDt, after: $videoProgressesCursor) {
        videoProgresses {
          completed
          lastSecondWatched
          duration
          progress
          points
          secondsWatched
          lastWatched
          content {
            id
            title
            ... on Video {
              youtubeId
              __typename
            }
            __typename
          }
          __typename
        }
        pageInfo {
          nextCursor
          __typename
        }
        __typename
      }
      problemLogsPage(startDt: $startDt, endDt: $endDt, after: $problemLogCursor, pageSize: $pageSize) {
        problemLogs {
          correct
          countAttempts
          countHints
          exercise
          exerciseContent {
            id
            title
            __typename
          }
          ipAddress
          incomingFpmLevel
          outgoingFpmLevel
          pointsEarned
          problemNumber
          problemsCorrect
          problemsTotal
          task {
            id
            isRestarted
            creationDate
            completedDate
            skillLevelChanges {
              id
              skillId
              after
              __typename
            }
            __typename
          }
          taskContent {
            id
            title
            __typename
          }
          taskKey
          taskType
          timeDone
          timeTaken
          __typename
        }
        pageInfo {
          nextCursor
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  getUserSoundOn: `query getUserSoundOn {
  user {
    id
    soundOn
    __typename
  }
}
`,
  getUserSoundPref: `query getUserSoundPref {
  user {
    id
    soundOn
    __typename
  }
}
`,
  getUsersWithGrants: `query getUsersWithGrants($withRoles: [String!]) {
  usersWithGrants(withRoles: $withRoles) {
    id
    kaid
    email
    nickname
    grants {
      role {
        name
        description
        __typename
      }
      grantingUserEmail
      permissionId
      __typename
    }
    __typename
  }
}
`,
  getUsersWithGrantsForEmail: `query getUsersWithGrantsForEmail($email: String!) {
  usersWithGrants(email: $email) {
    id
    email
    kaid
    nickname
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
}
`,
  getVideo: `query getVideo($contentId: String!) {
  videoById(contentId: $contentId) {
    id
    assessmentItemTags
    contentKind
    defaultUrlPath
    kind
    nodeSlug
    slug
    sponsored
    title
    translatedDescription
    translatedTitle
    translatedCustomTitleTag
    authorNames
    authorList {
      name
      __typename
    }
    clarificationsEnabled
    creationDate
    dateAdded
    description
    descriptionHtml
    downloadUrls
    duration
    imageUrl
    kaUrl
    kaUserLicense
    keywords
    readableId
    relativeUrl
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
    __typename
  }
}
`,
  getVideoListAndLocalesForLiteLocale: `query getVideoListAndLocalesForLiteLocale($kaLocale: String!) {
  videoListingForLocale(kaLocale: $kaLocale) {
    title
    description
    videos {
      id
      youtubeId
      title
      description
      __typename
    }
    __typename
  }
  localesForLanguagePicker(includeEnglish: false, includeFake: false) {
    id
    localName
    kaLocale
    __typename
  }
}
`,
  getVideoListForLiteLocale: `query getVideoListForLiteLocale($kaLocale: String!) {
  videoListingForLocale(kaLocale: $kaLocale) {
    videos {
      id
      youtubeId
      title
      description
      __typename
    }
    __typename
  }
}
`,
  getVideoNameForTeacherCampaignPreview: `query getVideoNameForTeacherCampaignPreview($id: String!) {
  video(id: $id) {
    id
    translatedTitle
    __typename
  }
}
`,
  getVideoPlayerSettings: `query getVideoPlayerSettings {
  user {
    id
    hasClasses
    hasPermission(name: "can_moderate_users")
    muteVideos
    noColorInVideos
    showCaptions
    playbackRate
    __typename
  }
}
`,
  getVideoSlug: `query getVideoSlug($contentId: String!) {
  videoById(contentId: $contentId) {
    id
    slug
    __typename
  }
}
`,
  GetWalmartProfile: `query GetWalmartProfile($profileKeyName: String!) {
  walmartProfile(profileKeyName: $profileKeyName) {
    walmartId
    nickname
    continueUrl
    __typename
  }
}
`,
  gtp_getCheckpoints: `query gtp_getCheckpoints($examId: String!) {
  checkpoints(examId: $examId) {
    ...gtp_checkpointFragment
    __typename
  }
}

fragment gtp_checkpointFragment on Checkpoint {
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
}
`,
  gtp_getDescriptors: `query gtp_getDescriptors($examId: String!, $checkpointStr: String) {
  descriptorList(examId: $examId, requestedCheckpoint: $checkpointStr) {
    id
    checkpointStr
    ...gtp_descriptorsFragment
    __typename
  }
}
`,
  gtp_getEGUD: `query gtp_getEGUD($examGroupId: String!) {
  egud(examGroupId: $examGroupId) {
    ...gtp_egudFragment
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
`,
  gtp_getEGUDViaExam: `query gtp_getEGUDViaExam($examId: String!) {
  exam(examId: $examId) {
    id
    examGroup {
      id
      egud {
        ...gtp_egudFragment
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
}
`,
  gtp_getEmailRemindersData: `query gtp_getEmailRemindersData($listName: String!) {
  user {
    id
    emailSubscriptions {
      email
      sailthruSubscriptionForListName(listName: $listName) {
        checked
        token
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  gtp_getEssayScores: `query gtp_getEssayScores($examId: String!) {
  essayScores(examId: $examId) {
    ...gtp_essayScoresFragment
    __typename
  }
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
`,
  gtp_getExamGroupMetadata: `query gtp_getExamGroupMetadata($examGroupId: String!) {
  examGroup(examGroupId: $examGroupId) {
    id
    examGroupMetadata {
      ...gtp_examGroupMetadataFragment
      __typename
    }
    __typename
  }
}

fragment gtp_examGroupMetadataFragment on ExamGroupMetadata {
  id
  testMaker
  kaRelationshipToTestCopy
  testMakerLogoImg
  registrationUrl
  __typename
}
`,
  gtp_getExamMetadata: `query gtp_getExamMetadata($examId: String!) {
  metadata(examId: $examId) {
    ...gtp_examMetadataFragment
    __typename
  }
}

fragment gtp_examMetadataFragment on ExamMetadata {
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
}
`,
  gtp_getExamOnboardingLessons: `query gtp_getExamOnboardingLessons($examId: String!) {
  exam(examId: $examId) {
    id
    onboardingLessons {
      id
      slug
      translatedTitle
      translatedDescription
      content: childrenWithUnlisted {
        ... on Video {
          id
          contentId
          title
          translatedTitle
          slug
          kind
          thumbnailUrl
          description
          contentId
          progressKey
          imageUrl
          duration
          youtubeId
          translatedYoutubeId
          downloadUrls
          translatedYoutubeLang
          nodeUrl: relativeUrl
          kaUrl
          __typename
        }
        ... on Article {
          id
          contentId
          title
          translatedTitle
          slug
          kind
          thumbnailUrl
          description
          contentId
          progressKey
          nodeUrl: relativeUrl
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  gtp_getExpressDescriptors: `query gtp_getExpressDescriptors($examId: String!) {
  descriptorList(examId: $examId, express: true) {
    id
    checkpointStr
    expressDescriptors {
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
      __typename
    }
    __typename
  }
}
`,
  gtp_getFullPracticeTests: `query gtp_getFullPracticeTests($examId: String!, $examGroupId: String!) {
  egud(examGroupId: $examGroupId) {
    id
    selectedExams
    __typename
  }
  exam(examId: $examId) {
    id
    examId
    userData {
      id
      practiceTests {
        id
        approxTestMins
        testTitle
        referenceTitle
        completionStatus
        completedAt
        sections {
          exerciseSlug
          completed
          taskId
          __typename
        }
        subScores {
          score
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  gtp_getHubPageData: `query gtp_getHubPageData($examId: String!) {
  metadata(examId: $examId) {
    id
    examGroupMetadata {
      examGroupId
      __typename
    }
    subExamMode
    __typename
  }
  descriptorList(examId: $examId, express: true) {
    id
    checkpointStr
    expressDescriptors {
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
      __typename
    }
    __typename
  }
}
`,
  gtp_getOnboardingContentProgress: `query gtp_getOnboardingContentProgress($lessonId: String!) {
  user {
    id
    contentItemProgresses(queryBy: {parentTopicId: $lessonId}) {
      completionStatus
      content {
        id
        progressKey
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  gtp_getPracticeTestsAndTpud: `query gtp_getPracticeTestsAndTpud($examId: String!) {
  exam(examId: $examId) {
    id
    userData {
      id
      practiceTests {
        id
        completionStatus
        __typename
      }
      tpud {
        id
        schedule {
          practiceTestDates
          __typename
        }
        targetScore
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  gtp_getSeedSkillLevelsBannerData: `query gtp_getSeedSkillLevelsBannerData($examId: String!) {
  tpud(examId: $examId) {
    id
    diagnosticsStates {
      type
      state
      __typename
    }
    hasSeededSkillLevels
    __typename
  }
  descriptorList(examId: $examId) {
    id
    checkpointStr
    expressDescriptors {
      id
      taskDurationSeconds
      __typename
    }
    __typename
  }
}
`,
  gtp_getTaskById: `query gtp_getTaskById($taskType: String!, $taskId: String!) {
  task(taskType: $taskType, taskId: $taskId) {
    ...gtp_taskFragment
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
}
`,
  gtp_getTestPrepHeaderInfo: `query gtp_getTestPrepHeaderInfo($examId: String!) {
  exam(examId: $examId) {
    id
    examGroup {
      id
      examGroupMetadata {
        id
        testMaker
        testMakerLogoImg
        kaRelationshipToTestCopy
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  gtp_getTestSectionTasks: `query gtp_getTestSectionTasks($examId: String!, $taskId: String!) {
  testSectionTasks(examId: $examId, taskId: $taskId) {
    ...gtp_taskFragment
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
}
`,
  gtp_getTPUD: `query gtp_getTPUD($examId: String!) {
  checkpoints(examId: $examId) {
    ...gtp_checkpointFragment
    __typename
  }
  exam(examId: $examId) {
    id
    userData {
      id
      practiceTests {
        ...gtp_practiceTestFragment
        __typename
      }
      __typename
    }
    __typename
  }
  drillStage(examId: $examId) {
    id
    numCreditedTasks
    creditedTaskIds
    __typename
  }
  tpud(examId: $examId) {
    ...gtp_tpudFragment
    __typename
  }
}

fragment gtp_checkpointFragment on Checkpoint {
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
}

fragment gtp_practiceTestFragment on PracticeTest {
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
}

fragment gtp_tpudFragment on TestPrepUserData {
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
}
`,
  gtp_onboardingStatus: `query gtp_onboardingStatus($examGroupId: String!) {
  egud(examGroupId: $examGroupId) {
    id
    selectedExams
    __typename
  }
  examGroup(examGroupId: $examGroupId) {
    id
    exams {
      id
      examId
      userData {
        id
        tpud {
          id
          onboardingState
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  gtp_relatedContent: `query gtp_relatedContent($taskType: String!, $taskId: String!) {
  relatedContent(taskType: $taskType, taskId: $taskId) {
    id
    taskId
    concepts {
      translatedTitle
      conceptId
      content {
        ... on LearnableContent {
          id
          thumbnailUrl
          slug
          translatedTitle
          kind
          __typename
        }
        ... on Video {
          translatedYoutubeId
          duration
          relativeUrl
          youtubeId
          __typename
        }
        ... on Article {
          relativeUrl
          __typename
        }
        __typename
      }
      __typename
    }
    skills {
      translatedTitle
      skillId
      content {
        ... on LearnableContent {
          id
          thumbnailUrl
          slug
          translatedTitle
          kind
          __typename
        }
        ... on Video {
          translatedYoutubeId
          duration
          relativeUrl
          youtubeId
          __typename
        }
        ... on Article {
          relativeUrl
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  guideTranscript: `query guideTranscript($transcriptId: String!) {
  aiGuideThread(threadId: $transcriptId) {
    id
    summary
    lastUpdatedAt
    flagged
    interactions {
      id
      answer
      question
      url
      createdAt
      flagged
      flaggedCategories
      __typename
    }
    __typename
  }
}
`,
  guideTranscripts: `query guideTranscripts($kaid: String!, $cursor: String) {
  aiGuideThreads(kaid: $kaid, cursor: $cursor) {
    threads {
      id
      summary
      lastUpdatedAt
      flagged
      __typename
    }
    cursor
    __typename
  }
}
`,
  hasChangedAvatar: `query hasChangedAvatar($kaid: String!) {
  user(kaid: $kaid) {
    id
    hasChangedAvatar
    __typename
  }
}
`,
  hasUsedTestPrepProductQuery: `query hasUsedTestPrepProductQuery($examGroupId: String!) {
  examGroup(examGroupId: $examGroupId) {
    id
    actorHasUsedProduct
    __typename
  }
}
`,
  hellbanActionsyQuery: `query hellbanActionsyQuery($kaid: String!) {
  userSummary(kaid: $kaid) {
    hellbanActions {
      date
      isHellban
      moderatorNickname
      reason
      urlsafeKey
      __typename
    }
    __typename
  }
}
`,
  homepageQueryV4: `query homepageQueryV4($kaid: String, $username: String) {
  flag(name: "lp_class_picker_via_gateway") {
    id
    name
    isUserPassing
    __typename
  }
  actorUser: user {
    id
    isAIGuideEnabled
    canViewAiGuideHistory: hasPermission(name: "can_view_ai_guide_history")
    __typename
  }
  user(kaid: $kaid, username: $username) {
    id
    kaid
    isActor
    isCoachedByActor
    isManagedByActor
    isAIGuideEnabled
    canViewUserProgress: actorHasUserScopedPermission(capability: CAN_VIEW_USER_PROGRESS)
    canViewTeachersAndClassrooms: actorHasUserScopedPermission(capability: CAN_VIEW_TEACHERS_AND_CLASSROOMS)
    isDistrictSynced
    isKmapSynced
    homepageModules {
      navigation {
        myCoursesEnabled
        interestedInSat
        interestedInLsat
        classes {
          studentList {
            id
            descriptor
            cacheId
            name
            coach {
              id
              kaid
              __typename
            }
            signupCode
            __typename
          }
          showAssignments
          hasActiveAssignments
          hasKmapGoals
          hasNonMapGoals
          isKmap
          isK4d
          isActive
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  hotlist: `query hotlist($curationNodeId: String, $onlyOfficialProjectSpinoffs: Boolean!, $sort: ListProgramSortOrder, $pageInfo: ListProgramsPageInfo) {
  listTopPrograms(curationNodeId: $curationNodeId, onlyOfficialProjectSpinoffs: $onlyOfficialProjectSpinoffs, sort: $sort, pageInfo: $pageInfo) {
    complete
    cursor
    programs {
      id
      key
      authorKaid
      authorNickname
      displayableSpinoffCount
      imagePath
      sumVotesIncremented
      translatedTitle: title
      url
      __typename
    }
    __typename
  }
}
`,
  InstructionalAndRitBandsQuery: `query InstructionalAndRitBandsQuery {
  kmapTopics {
    id
    key
    title
    domainSlug
    band
    bandGradeName
    bandKey
    strand
    strandKey
    __typename
  }
}
`,
  isActivityAccessibleForProfiles: `query isActivityAccessibleForProfiles {
  user {
    id
    isActor
    isCoachedByActor
    actorHasUserScopedPermission(capability: CAN_VIEW_USER_PROGRESS)
    __typename
  }
}
`,
  isCleverTeacher: `query isCleverTeacher {
  user {
    id
    cleverId
    isTeacher
    isKmapTeacher
    isK4dTeacher
    __typename
  }
}
`,
  isCourseEditableByCurrentUser: `query isCourseEditableByCurrentUser($courseId: String!) {
  isCourseEditableByCurrentUser(courseId: $courseId)
}
`,
  isDigitalSatStudent: `query isDigitalSatStudent {
  user {
    id
    mathProgress: curationItemProgress(topicId: "x0fcc98a58ba3bea7") {
      lastWorkedOn
      __typename
    }
    readingAndWritingProgress: curationItemProgress(topicId: "x0d47bcec73eb6c4b") {
      lastWorkedOn
      __typename
    }
    __typename
  }
}
`,
  isEmailInClass: `query isEmailInClass($email: String!, $classCode: String!) {
  isEmailInClass(email: $email, classCode: $classCode) {
    inClass
    error {
      code
      __typename
    }
    __typename
  }
}
`,
  isHellbanned: `query isHellbanned($kaid: String!) {
  user(kaid: $kaid) {
    id
    discussionBanned
    __typename
  }
}
`,
  isSatStudent: `query isSatStudent {
  user {
    id
    isSatStudent
    __typename
  }
}
`,
  IssueFormGetExerciseId: `query IssueFormGetExerciseId($exerciseName: String!) {
  exercise(name: $exerciseName) {
    id
    __typename
  }
}
`,
  joinModalClassInfo: `query joinModalClassInfo($classCode: String!) {
  joinByClassCodeInfo(classCode: $classCode) {
    id
    cacheId
    name
    signupCode
    includesDistrictOwnedData
    __typename
  }
}
`,
  KhanCoursesQuery: `query KhanCoursesQuery($districtId: ID!, $courseIdsToAdd: [String]!) {
  studentListTopics {
    translatedTitle
    topics {
      id
      key
      translatedTitle
      masteryEnabled
      __typename
    }
    __typename
  }
  coursesByIds(ids: $courseIdsToAdd) {
    id
    key
    translatedTitle
    masteryEnabled
    __typename
  }
  districtById(districtId: $districtId) {
    id
    curriculumAlignedCourses {
      id
      key
      translatedTitle
      masteryEnabled
      __typename
    }
    __typename
  }
}
`,
  khanLibraryCourseStructure: `query khanLibraryCourseStructure($id: String!) {
  courseById(id: $id) {
    id
    domainSlug
    slug
    title
    creationDate
    masteryEnabled
    unitChildren {
      id
      masteryEnabled
      title
      allOrderedChildren {
        ... on TopicUnitTest {
          id
          title
          __typename
        }
        ... on TopicQuiz {
          id
          title
          __typename
        }
        ... on Lesson {
          id
          title
          allLearnableContent {
            id
            title
            __typename
          }
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  khanLibraryGetDomainRevision: `query khanLibraryGetDomainRevision($contentId: String!) {
  domainRevisionById(id: $contentId) {
    ...khanLibraryDomainRevision
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
}
`,
  khanLibraryGetFolder: `query khanLibraryGetFolder($id: String!) {
  folderById(id: $id) {
    ...Folder
    __typename
  }
}

fragment BaseFolder on Folder {
  id
  name
  kaLocale
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
  importable
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
}
`,
  khanLibraryGetFolderTranslationProgress: `query khanLibraryGetFolderTranslationProgress($folderId: String!) {
  folderTranslationProgress(folderId: $folderId) {
    courses {
      ...tapCourseNode
      __typename
    }
    __typename
  }
}

fragment tapArticleNode on TAPArticleNode {
  ...tapContentItem
  ...tapMetadataWordCounts
  ...tapContentWordCounts
  fingerprint
  __typename
}

fragment tapChallengeNode on TAPChallengeNode {
  ...tapContentItem
  ...tapMetadataWordCounts
  ...tapContentWordCounts
  fingerprint
  __typename
}

fragment tapContentItem on TAPContentItem {
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
}

fragment tapContentWordCounts on TAPContentWordCounts {
  wordCount
  translatableWordCount
  translatedWordCount
  translatedWordCount
  approvedWordCount
  __typename
}

fragment tapCourseNode on TAPCourseNode {
  ...tapContentItem
  ...tapMetadataWordCounts
  fingerprint
  children {
    ...tapUnitNode
    __typename
  }
  __typename
}

fragment tapExerciseNode on TAPExerciseNode {
  ...tapContentItem
  ...tapMetadataWordCounts
  ...tapContentWordCounts
  fingerprint
  __typename
}

fragment tapInteractiveNode on TAPInteractiveNode {
  ...tapContentItem
  ...tapMetadataWordCounts
  fingerprint
  __typename
}

fragment tapLessonNode on TAPLessonNode {
  ...tapContentItem
  ...tapMetadataWordCounts
  fingerprint
  children {
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
}

fragment tapMetadataWordCounts on TAPMetadataWordCounts {
  metadataWordCount
  metadataTranslatableWordCount
  metadataTranslatedWordCount
  metadataApprovedWordCount
  __typename
}

fragment tapProjectNode on TAPProjectNode {
  ...tapContentItem
  ...tapMetadataWordCounts
  ...tapContentWordCounts
  fingerprint
  __typename
}

fragment tapTalkthroughNode on TAPTalkthroughNode {
  ...tapContentItem
  ...tapMetadataWordCounts
  fingerprint
  isDubbed
  isSubtitled
  youtubeId
  __typename
}

fragment tapUnitNode on TAPUnitNode {
  ...tapContentItem
  ...tapMetadataWordCounts
  fingerprint
  children {
    ...tapLessonNode
    __typename
  }
  __typename
}

fragment tapVideoNode on TAPVideoNode {
  ...tapContentItem
  ...tapMetadataWordCounts
  fingerprint
  isDubbed
  dubIsSubtitled
  isSubtitled
  translatedYoutubeId
  youtubeId
  __typename
}
`,
  khanLibraryGetLocalesLanguage: `query khanLibraryGetLocalesLanguage {
  localesForLanguagePicker(includeEnglish: true, includeFake: false) {
    id
    kaLocale
    displayName
    __typename
  }
}
`,
  khanLibraryGetMyGroup: `query khanLibraryGetMyGroup {
  folderGroups {
    myFolders {
      ...BaseFolder
      __typename
    }
    __typename
  }
}

fragment BaseFolder on Folder {
  id
  name
  kaLocale
  __typename
}
`,
  khanLibraryGetOtherGroup: `query khanLibraryGetOtherGroup {
  folderGroups {
    otherFolders {
      ...BaseFolder
      courses {
        id
        importable
        __typename
      }
      __typename
    }
    __typename
  }
}

fragment BaseFolder on Folder {
  id
  name
  kaLocale
  __typename
}
`,
  khanLibraryGetStatus: `query khanLibraryGetStatus {
  contentEditingStatus {
    editingEnabled
    __typename
  }
}
`,
  khanLibraryHasCourseEditorRole: `query khanLibraryHasCourseEditorRole {
  user {
    id
    hasPermission(name: "can_edit_courses")
    __typename
  }
}
`,
  KmapPlacementQuery: `query KmapPlacementQuery($classDescriptor: String!) {
  classroom: classroomByDescriptor(descriptor: $classDescriptor) {
    signupCode
    id
    cacheId
    kmapAssignments: subjectMasteryAssignments(filter: KMAP) {
      id
      studentListId
      activeStudentData {
        kaid
        assignedDate
        __typename
      }
      studentKaids
      course: topic {
        id
        slug
        domainSlug
        ... on KMapTopic {
          strandKey
          bandKey
          __typename
        }
        __typename
      }
      studentProgress {
        kaid
        currentMasteryPercentage
        __typename
      }
      __typename
    }
    studentKaidsAndNicknames {
      id
      kaid
      coachNickname
      __typename
    }
    classroomDistrictInfo {
      id
      isNweaMapSynced
      studentUserDistrictInfos {
        uuid
        id
        kaid
        gradeLevel
        displayNameForTeacher
        suggestedGradeBandKey
        previousMathAssessment {
          id
          isGrowthMeasure
          testStartDate
          termName
          goalData {
            id
            strandKey
            ritScore
            suggestedRitScoreBandKey
            __typename
          }
          __typename
        }
        currentMathAssessment {
          id
          isGrowthMeasure
          testStartDate
          termName
          goalData {
            id
            strandKey
            ritScore
            suggestedRitScoreBandKey
            __typename
          }
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
  kmapTopics {
    id
    slug
    strand
    band
    strandKey
    bandKey
    __typename
  }
}
`,
  KmapPlacementStudentListAdminQuery: `query KmapPlacementStudentListAdminQuery($classDescriptor: String!) {
  classroom: classroomByDescriptor(descriptor: $classDescriptor) {
    id
    cacheId
    signupCode
    kmapAssignments: subjectMasteryAssignments(filter: KMAP) {
      id
      studentListId
      activeStudentData {
        kaid
        assignedDate
        __typename
      }
      studentKaids
      course: topic {
        id
        slug
        domainSlug
        ... on KMapTopic {
          strandKey
          bandKey
          __typename
        }
        __typename
      }
      studentProgress {
        kaid
        currentMastery {
          percentage
          __typename
        }
        __typename
      }
      __typename
    }
    classroomDistrictInfo {
      id
      isNweaMapSynced
      studentUserDistrictInfos {
        uuid
        id
        kaid
        gradeLevel
        displayNameForTeacher
        suggestedGradeBandKey
        previousMathAssessment {
          id
          isGrowthMeasure
          testStartDate
          termName
          goalData {
            id
            strandKey
            ritScore
            suggestedRitScoreBandKey
            __typename
          }
          __typename
        }
        currentMathAssessment {
          id
          isGrowthMeasure
          testStartDate
          termName
          goalData {
            id
            strandKey
            ritScore
            suggestedRitScoreBandKey
            __typename
          }
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
  kmapTopics {
    id
    slug
    strand
    band
    strandKey
    bandKey
    __typename
  }
}
`,
  KmapProgressReportQuery: `query KmapProgressReportQuery($classDescriptor: String!, $progressFrom: DateTime, $progressUpTo: DateTime) {
  classroom: classroomByDescriptor(descriptor: $classDescriptor) {
    id
    cacheId
    studentKaidsAndNicknames {
      id
      kaid
      coachNickname
      __typename
    }
    assignments: subjectMasteryAssignments(filter: KMAP) {
      id
      studentKaids
      historicalStudentData {
        kaid
        __typename
      }
      completedStudentData {
        kaid
        __typename
      }
      course: topic {
        id
        ... on KMapTopic {
          strand
          strandKey
          band
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
  teacherKmapProgressReport: teacherMapProgressReport(classroomDescriptor: $classDescriptor, filters: {progressFrom: $progressFrom, progressUpTo: $progressUpTo}) {
    rows {
      studentKaidAndNickname: studentKaidsAndNickname {
        id
        kaid
        __typename
      }
      totalMinutes
      assignedCourseMasteryGoalId
      skillsLeveledUp
      skillsWithoutProgress
      courseMasteryGrowthPercentage
      courseMasteryOverallPercentage
      __typename
    }
    __typename
  }
}
`,
  KmapTopicsQuery: `query KmapTopicsQuery {
  kmapTopics {
    id
    key
    title
    domainSlug
    slug
    iconPath
    masteryEnabled
    subjectMasteryEnabled
    isHighSchoolSubject
    learnableContentSummary {
      countExercises
      __typename
    }
    band
    bandGradeName
    bandKey
    strand
    strandKey
    __typename
  }
}
`,
  learnMenuTopicsQuery: `query learnMenuTopicsQuery($curriculum: String) {
  learnMenuTopics(curriculum: $curriculum) {
    slug
    translatedTitle
    href
    isNew
    icon
    children {
      slug
      translatedTitle
      href
      isNew
      loggedOutHref
      nonContentLink
      __typename
    }
    __typename
  }
}
`,
  LintTranslationsFE: `query LintTranslationsFE($translations: [TranslationLinterInput!]!) {
  lintTranslations(translations: $translations) {
    status
    message
    correction
    __typename
  }
}
`,
  listClassroomPrograms: `query listClassroomPrograms($pageInfo: ListProgramsPageInfo, $classroomId: String!, $onlyOfficialProgramSpinoffs: Boolean!) {
  listClassroomPrograms(pageInfo: $pageInfo, classroomId: $classroomId, onlyOfficialProgramSpinoffs: $onlyOfficialProgramSpinoffs) {
    complete
    cursor
    programs {
      id
      key
      authorKaid
      authorNickname
      displayableSpinoffCount
      imagePath
      sumVotesIncremented
      translatedTitle: title
      url
      __typename
    }
    __typename
  }
}
`,
  ListRoleChangeRecords: `query ListRoleChangeRecords($kaid: String!) {
  listRoleChangeRecords(targetKaid: $kaid) {
    roleChangeRecords {
      approvalDate
      approverDistrictID
      approverEmail
      approverKaid
      approverType
      kaid
      removalDate
      removerDistrictID
      removerEmail
      removerKaid
      removerType
      role
      __typename
    }
    __typename
  }
}
`,
  listTopProgramSpinoffs: `query listTopProgramSpinoffs($pageInfo: ListProgramsPageInfo, $from: SpinoffOrigin!, $sort: ListProgramSortOrder) {
  listTopProgramSpinoffs(pageInfo: $pageInfo, from: $from, sort: $sort) {
    complete
    cursor
    programs {
      id
      key
      authorKaid
      authorNickname
      displayableSpinoffCount
      imagePath
      sumVotesIncremented
      translatedTitle: title
      url
      __typename
    }
    __typename
  }
}
`,
  LiteVideo_SlugFromYoutubeId: `query LiteVideo_SlugFromYoutubeId($youtubeId: String!) {
  videoByYoutubeId(youtubeId: $youtubeId) {
    id
    defaultUrlPath
    __typename
  }
}
`,
  localeMappings: `query localeMappings($includeEnglish: Boolean) {
  locales(includeEnglish: $includeEnglish) {
    id
    kaLocale
    crowdinLocale
    ... on Locale {
      id
      previewCmsEnabled
      displayName
      __typename
    }
    __typename
  }
}
`,
  localesForFlagRuleQuery: `query localesForFlagRuleQuery {
  localesForLanguagePicker(includeEnglish: false, includeFake: false) {
    id
    kaLocale
    displayName
    __typename
  }
}
`,
  localesForI18nSuggestBannerQuery: `query localesForI18nSuggestBannerQuery {
  localesForLanguagePicker(includeEnglish: true, includeFake: false) {
    id
    localName
    kaLocale
    displayName
    __typename
  }
}
`,
  localesForLangDropdownQuery: `query localesForLangDropdownQuery {
  localesForLanguagePicker(includeEnglish: true, includeFake: false) {
    id
    localName
    kaLocale
    __typename
  }
}
`,
  localesForLangPickerQuery: `query localesForLangPickerQuery {
  localesForLanguagePicker(includeEnglish: true, includeFake: false) {
    id
    localName
    kaLocale
    __typename
  }
}
`,
  LocalesForStandardsEditor: `query LocalesForStandardsEditor {
  locales(includeEnglish: true, includeFake: false, liveOnly: true) {
    id
    displayName
    __typename
  }
}
`,
  LocalesIncludingEnglish: `query LocalesIncludingEnglish {
  locales(includeEnglish: true) {
    id
    __typename
  }
}
`,
  loggedInUserQuery: `query loggedInUserQuery {
  user {
    id
    kaid
    canAccessDistrictsHomepage
    isTeacher
    hasUnresolvedInvitations
    transferAuthToken
    preferredKaLocale {
      id
      kaLocale
      status
      __typename
    }
    __typename
  }
}
`,
  lookupUser: `query lookupUser($kaid: String, $email: String, $username: String) {
  user(kaid: $kaid, email: $email, username: $username) {
    id
    kaid
    email
    username
    __typename
  }
}
`,
  ManageFolders_CoursesInFolder: `query ManageFolders_CoursesInFolder($folderID: String!) {
  folderById(id: $folderID) {
    id
    courses {
      id
      contentId
      title
      __typename
    }
    __typename
  }
}
`,
  ManageFolders_UsersInFolder: `query ManageFolders_UsersInFolder($kaids: [String!]!) {
  users(kaids: $kaids) {
    id
    kaid
    email
    username
    nickname
    __typename
  }
}
`,
  manticoreEditorGetVideo: `query manticoreEditorGetVideo($enVideoSlug: String!) {
  video(id: $enVideoSlug) {
    id
    title
    description
    youtubeId
    translatedYoutubeId
    hasTranslatedSubtitles
    subtitlesEditURLForVideo: subtitlesEditURL
    parentTopic {
      id
      slug
      __typename
    }
    defaultUrlPath
    listed
    __typename
  }
}
`,
  manticoreGetContentForDescriptors: `query manticoreGetContentForDescriptors($contentDescriptors: [String!]!) {
  contentForDescriptors(descriptors: $contentDescriptors) {
    id
    slug
    parentTopic {
      id
      slug
      __typename
    }
    __typename
  }
}
`,
  masteryAssignments: `query masteryAssignments($classCode: String!) {
  classroom(classCode: $classCode) {
    id
    cacheId
    masteryAssignments {
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
      __typename
    }
    students: studentKaidsAndNicknames {
      id
      kaid
      coachNickname
      __typename
    }
    __typename
  }
}
`,
  masteryTowerCurrentLeaderboardQuery: `query masteryTowerCurrentLeaderboardQuery($classDescriptor: String!) {
  classroom: classroomByDescriptorV2(descriptor: $classDescriptor) {
    id
    cacheId
    masteryTowerLeaderboard {
      classDescriptor
      masteryTowerName
      sessionCount
      score
      __typename
    }
    masteryTowerConfiguration {
      dateRange
      __typename
    }
    __typename
  }
}
`,
  masteryTowerCurrentSessionQuery: `query masteryTowerCurrentSessionQuery($classDescriptor: String!) {
  classroom: classroomByDescriptorV2(descriptor: $classDescriptor) {
    id
    cacheId
    masteryTowerCurrentSession {
      currentScore
      secondsRemaining
      startTime
      startingFloors
      __typename
    }
    __typename
  }
}
`,
  masteryTowerCurrentWeekLeaderboardQuery: `query masteryTowerCurrentWeekLeaderboardQuery($classDescriptor: String!) {
  classroom: classroomByDescriptorV2(descriptor: $classDescriptor) {
    id
    cacheId
    masteryTowerLeaderboard {
      classDescriptor
      masteryTowerName
      sessionCount
      score
      __typename
    }
    __typename
  }
}
`,
  masteryTowerDetailsQuery: `query masteryTowerDetailsQuery($classDescriptor: String!) {
  classroom: classroomByDescriptorV2(descriptor: $classDescriptor) {
    id
    cacheId
    countStudents
    masteryTowerCurrentWeekScore
    masteryTowerCurrentWeekSessions
    masteryTowerDifficultyOptions {
      easy
      medium
      hard
      __typename
    }
    masteryTowerConfiguration {
      currentWeeklyGoal
      masteryTowerName
      __typename
    }
    __typename
  }
}
`,
  masteryTowerHistoricalRankingQuery: `query masteryTowerHistoricalRankingQuery($classDescriptor: String!) {
  classroom: classroomByDescriptorV2(descriptor: $classDescriptor) {
    id
    cacheId
    masteryTowerHistoricalRanking {
      score
      sessionCount
      rank
      leaderboardSize
      startDate
      endDate
      __typename
    }
    __typename
  }
}
`,
  masteryTowerPreviousWeekLeaderboardQuery: `query masteryTowerPreviousWeekLeaderboardQuery($classDescriptor: String!) {
  classroom: classroomByDescriptorV2(descriptor: $classDescriptor) {
    id
    cacheId
    masteryTowerPreviousWeekLeaderboard {
      classDescriptor
      masteryTowerName
      sessionCount
      score
      __typename
    }
    __typename
  }
}
`,
  masteryTowerSupportDetailsQuery: `query masteryTowerSupportDetailsQuery($classDescriptor: String!) {
  classroom: classroomByDescriptorV2(descriptor: $classDescriptor) {
    id
    cacheId
    masteryTowerCurrentWeekScore
    masteryTowerCurrentWeekSessions
    masteryTowerConfiguration {
      currentWeeklyGoal
      masteryTowerName
      dateRange
      __typename
    }
    __typename
  }
}
`,
  ModFeedbackByIDQuery: `query ModFeedbackByIDQuery($feedbackID: ID!, $kaid: String) {
  feedbackByID(feedbackID: $feedbackID, kaid: $kaid) {
    replyCount
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
      __typename
    }
    fromVideoAuthor
    key
    lowQualityScore
    notifyOnAnswer
    permalink
    qualityKind
    replyCount
    replyExpandKeys
    showLowQualityNotice
    sumVotesIncremented
    upVoted
    ... on QuestionFeedback {
      hasAnswered
      answers {
        replyCount
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
        badges {
          name
          icons {
            smallUrl
            __typename
          }
          description
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
        flaggedByUser
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
        lowQualityScore
        notifyOnAnswer
        permalink
        qualityKind
        replyCount
        replyExpandKeys
        showLowQualityNotice
        sumVotesIncremented
        upVoted
        __typename
      }
      isOld
      answerCount
      __typename
    }
    ... on AnswerFeedback {
      question {
        replyCount
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
        badges {
          name
          icons {
            smallUrl
            __typename
          }
          description
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
        flaggedByUser
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
        lowQualityScore
        notifyOnAnswer
        permalink
        qualityKind
        replyCount
        replyExpandKeys
        showLowQualityNotice
        sumVotesIncremented
        upVoted
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  ModFeedbackForAuthorQuery: `query ModFeedbackForAuthorQuery($kaid: String!, $feedbackType: FeedbackType!, $cursor: String, $limit: Int, $sort: Int) {
  feedbackForAuthor(kaid: $kaid, feedbackType: $feedbackType, cursor: $cursor, limit: $limit, sort: $sort) {
    feedback {
      replyCount
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
        __typename
      }
      fromVideoAuthor
      key
      lowQualityScore
      notifyOnAnswer
      permalink
      qualityKind
      replyCount
      replyExpandKeys
      showLowQualityNotice
      sumVotesIncremented
      upVoted
      ... on QuestionFeedback {
        hasAnswered
        answers {
          replyCount
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
          badges {
            name
            icons {
              smallUrl
              __typename
            }
            description
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
          flaggedByUser
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
          lowQualityScore
          notifyOnAnswer
          permalink
          qualityKind
          replyCount
          replyExpandKeys
          showLowQualityNotice
          sumVotesIncremented
          upVoted
          __typename
        }
        isOld
        answerCount
        __typename
      }
      ... on AnswerFeedback {
        question {
          replyCount
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
          badges {
            name
            icons {
              smallUrl
              __typename
            }
            description
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
          flaggedByUser
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
          lowQualityScore
          notifyOnAnswer
          permalink
          qualityKind
          replyCount
          replyExpandKeys
          showLowQualityNotice
          sumVotesIncremented
          upVoted
          __typename
        }
        __typename
      }
      __typename
    }
    isMod
    isComplete
    cursor
    __typename
  }
}
`,
  MoveTypeModalAllExerciseRevisions: `query MoveTypeModalAllExerciseRevisions {
  allExerciseRevisions {
    id
    slug
    title
    __typename
  }
}
`,
  MyCourses: `query MyCourses {
  classPicker {
    enabled
    classesInGradeLevels {
      id
      subjects {
        id
        __typename
      }
      __typename
    }
    gradeLevelGroups {
      title
      levels {
        id
        title
        __typename
      }
      __typename
    }
    domains {
      slug
      title
      subjects {
        id
        key
        slug
        title: translatedTitle
        __typename
      }
      __typename
    }
    __typename
  }
  user {
    id
    selfSelectedGradeLevel
    districtGradeLevel
    cleverId
    isDistrictSynced
    classPickerSubjectProgresses {
      ...CourseProgress
      __typename
    }
    recentTopics(limit: 4) {
      id
      slug
      title: translatedTitle
      unit: parent {
        id
        title: translatedTitle
        thumbnailUrl: largeIconPath
        domain: domainSlug
        nodeUrl: relativeUrl
        __typename
      }
      __typename
    }
    __typename
  }
}

fragment CourseProgress on SubjectProgress {
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
}
`,
  MyCoursesViaGateway: `query MyCoursesViaGateway {
  classPicker {
    enabled
    classesInGradeLevels {
      id
      subjects {
        id
        __typename
      }
      __typename
    }
    gradeLevelGroups {
      title
      levels {
        id
        title
        __typename
      }
      __typename
    }
    domains {
      slug
      title
      subjects {
        id
        key
        slug
        title: translatedTitle
        __typename
      }
      __typename
    }
    __typename
  }
  user {
    id
    selfSelectedGradeLevel
    districtGradeLevel
    cleverId
    isDistrictSynced
    classPickerSubjectProgresses {
      ...CourseProgress
      __typename
    }
    recentTopics(limit: 4) {
      id
      slug
      title: translatedTitle
      unit: parent {
        id
        title: translatedTitle
        thumbnailUrl: largeIconPath
        domain: domainSlug
        nodeUrl: relativeUrl
        __typename
      }
      __typename
    }
    __typename
  }
}

fragment CourseProgress on SubjectProgress {
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
}
`,
  NamedPermissionCheck: `query NamedPermissionCheck($name: String!, $scope: Scope) {
  user {
    id
    hasPermission(name: $name, scope: $scope)
    __typename
  }
}
`,
  notTranslatedQuery: `query notTranslatedQuery($kaLocale: String!) {
  user {
    id
    transferAuthToken
    __typename
  }
  locale(kaLocale: $kaLocale) {
    id
    localName
    __typename
  }
}
`,
  OverallProgressReportQuery: `query OverallProgressReportQuery($classDescriptor: String!, $progressFrom: DateTime, $progressUpTo: DateTime) {
  classroom: classroomByDescriptor(descriptor: $classDescriptor) {
    id
    cacheId
    studentKaidsAndNicknames {
      id
      kaid
      coachNickname
      __typename
    }
    __typename
  }
  teacherOverallProgressReport(classroomDescriptor: $classDescriptor, filters: {progressFrom: $progressFrom, progressUpTo: $progressUpTo}) {
    rows {
      skillsLeveledUp
      skillsWithoutProgress
      studentKaidAndNickname: studentKaidsAndNickname {
        id
        kaid
        __typename
      }
      totalMinutes
      __typename
    }
    __typename
  }
}
`,
  ParentQuery: `query ParentQuery {
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
      __typename
    }
    parentChildren: children {
      id
      coachNickname
      kaid
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
}
`,
  previewAgingParentEmail: `query previewAgingParentEmail {
  preview: previewAgingParentEmail {
    textContent
    htmlContent
    __typename
  }
}
`,
  previewAiGuideEnrolledEmail: `query previewAiGuideEnrolledEmail {
  preview: previewAiGuideEnrolledEmail {
    textContent
    htmlContent
    __typename
  }
}
`,
  previewAiGuideThreadFlaggedEmail: `query previewAiGuideThreadFlaggedEmail {
  preview: previewChildAiGuideThreadFlaggedEmail {
    textContent
    htmlContent
    __typename
  }
}
`,
  previewChildAddedCoachEmail: `query previewChildAddedCoachEmail {
  preview: previewChildAddedCoachEmail {
    textContent
    htmlContent
    __typename
  }
}
`,
  previewDistrictsCSVReportReadyForDownloadEmail: `query previewDistrictsCSVReportReadyForDownloadEmail {
  preview: previewDistrictsCSVReportReadyForDownloadEmail {
    textContent
    htmlContent
    __typename
  }
}
`,
  previewExistingParentClaimManagedStudentEmail: `query previewExistingParentClaimManagedStudentEmail {
  preview: previewExistingParentClaimManagedStudentEmail {
    textContent
    htmlContent
    __typename
  }
}
`,
  previewNewAssignmentEmail: `query previewNewAssignmentEmail {
  preview: previewNewAssignmentEmail {
    textContent
    htmlContent
    __typename
  }
}
`,
  previewParentChildInviteEmail: `query previewParentChildInviteEmail {
  preview: previewParentChildInviteEmail {
    textContent
    htmlContent
    __typename
  }
}
`,
  previewParentReportEmail: `query previewParentReportEmail {
  preview: previewParentReportEmail {
    textContent
    htmlContent
    __typename
  }
}
`,
  previewSampleEmail: `query previewSampleEmail {
  preview: previewSampleEmail {
    textContent
    htmlContent
    __typename
  }
}
`,
  previewTeacherReportEmail: `query previewTeacherReportEmail {
  preview: previewTeacherReportEmail {
    textContent
    htmlContent
    __typename
  }
}
`,
  previewTeacherStudentInviteEmail: `query previewTeacherStudentInviteEmail {
  preview: previewTeacherStudentInviteEmail {
    textContent
    htmlContent
    __typename
  }
}
`,
  previewTestPrepMissedPracticeExamEmail: `query previewTestPrepMissedPracticeExamEmail {
  preview: previewTestPrepMissedPracticeExamEmail {
    textContent
    htmlContent
    __typename
  }
}
`,
  previewTestPrepPracticeExamEmail: `query previewTestPrepPracticeExamEmail {
  preview: previewTestPrepPracticeExamEmail {
    textContent
    htmlContent
    __typename
  }
}
`,
  previewTestPrepRealExamCongratsEmail: `query previewTestPrepRealExamCongratsEmail {
  preview: previewTestPrepRealExamCongratsEmail {
    textContent
    htmlContent
    __typename
  }
}
`,
  previewTestPrepScheduledPracticeEmail: `query previewTestPrepScheduledPracticeEmail {
  preview: previewTestPrepScheduledPracticeEmail {
    textContent
    htmlContent
    __typename
  }
}
`,
  previewUnderAgeGateParentApproveEmail: `query previewUnderAgeGateParentApproveEmail {
  preview: previewUnderAgeGateParentApproveEmail {
    textContent
    htmlContent
    __typename
  }
}
`,
  previewUnderAgeGateParentReminderEmail: `query previewUnderAgeGateParentReminderEmail {
  preview: previewUnderAgeGateParentReminderEmail {
    textContent
    htmlContent
    __typename
  }
}
`,
  previewUnregisteredParentClaimManagedStudentEmail: `query previewUnregisteredParentClaimManagedStudentEmail {
  preview: previewUnregisteredParentClaimManagedStudentEmail {
    textContent
    htmlContent
    __typename
  }
}
`,
  previewWaitlistAddedEmail: `query previewWaitlistAddedEmail {
  preview: previewWaitlistAddedEmail {
    textContent
    htmlContent
    __typename
  }
}
`,
  previewWaitlistApprovedEmail: `query previewWaitlistApprovedEmail {
  preview: previewWaitlistApprovedEmail {
    textContent
    htmlContent
    __typename
  }
}
`,
  previewWaitlistApprovedReminderEmail: `query previewWaitlistApprovedReminderEmail {
  preview: previewWaitlistApprovedReminderEmail {
    textContent
    htmlContent
    __typename
  }
}
`,
  ProblemAttemptsByStudent: `query ProblemAttemptsByStudent($studentKaids: [String], $contentDescriptor: String!, $progressAfter: DateTime) {
  students: users(kaids: $studentKaids) {
    id
    contentItemProgresses(queryBy: {contentDescriptors: [$contentDescriptor]}) {
      ... on ExerciseItemProgress {
        logs(progressAfter: $progressAfter) {
          ...ProblemAttemptFields
          __typename
        }
        __typename
      }
      ... on AssessmentItemProgress {
        logs(progressAfter: $progressAfter) {
          ...ProblemAttemptFields
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}

fragment ProblemAttemptFields on ProblemAttempt {
  kaid
  correct
  contentId: seed
  countAttempts
  countHints
  timeDone
  attemptStates
  __typename
}
`,
  profilePermissions: `query profilePermissions($kaid: String, $username: String) {
  user(kaid: $kaid, username: $username) {
    id
    isCoachListWritable
    isManagedByActor
    __typename
  }
}
`,
  programQuery: `query programQuery($programId: String!) {
  programById(id: $programId) {
    byChild
    category
    created
    creatorProfile: author {
      id
      nickname
      profileRoot
      profile {
        accessLevel
        __typename
      }
      __typename
    }
    deleted
    description
    spinoffCount: displayableSpinoffCount
    docsUrlPath
    flags
    flaggedBy: flaggedByKaids
    flaggedByUser: isFlaggedByCurrentUser
    height
    hideFromHotlist
    id
    imagePath
    isProjectOrFork: originIsProject
    isOwner
    kaid: authorKaid
    key
    newUrlPath
    originScratchpad: originProgram {
      deleted
      translatedTitle
      url
      __typename
    }
    restrictPosting
    revision: latestRevision {
      id
      code
      configVersion
      created
      editorType
      folds
      __typename
    }
    slug
    sumVotesIncremented
    title
    topic: parentCurationNode {
      id
      nodeSlug: slug
      relativeUrl
      slug
      translatedTitle
      __typename
    }
    translatedTitle
    url
    userAuthoredContentType
    upVoted
    width
    __typename
  }
}
`,
  ProgressByGradeQuery: `query ProgressByGradeQuery($districtName: String!, $schoolIds: [ID!], $gradeLevels: [DistrictGradeLevel!], $kmapStrandId: ID, $progressFrom: DateTime, $progressUpTo: DateTime) {
  districtProgressReportByGrade(districtName: $districtName, filters: {schoolIds: $schoolIds, gradeLevels: $gradeLevels, progressFrom: $progressFrom, progressUpTo: $progressUpTo, kmapStrandId: $kmapStrandId}) {
    avgRow {
      avgTotalMinutes
      avgSkillsLeveledUp
      __typename
    }
    rows {
      gradeLevel {
        id
        name
        sortIndex
        __typename
      }
      totalMinutes
      skillsLeveledUp
      __typename
    }
    __typename
  }
}
`,
  ProgressBySchoolQuery: `query ProgressBySchoolQuery($districtName: String!, $schoolIds: [ID!], $gradeLevels: [DistrictGradeLevel!], $progressFrom: DateTime, $progressUpTo: DateTime, $orderBy: ReportBySchoolSortableColumn, $orderDir: OrderDir, $kmapStrandId: ID, $pageSize: Int, $cursor: Int) {
  districtProgressReportBySchool(districtName: $districtName, filters: {schoolIds: $schoolIds, gradeLevels: $gradeLevels, progressFrom: $progressFrom, progressUpTo: $progressUpTo, kmapStrandId: $kmapStrandId}, orderBy: $orderBy, orderDir: $orderDir, pageSize: $pageSize, cursor: $cursor) {
    avgRow {
      avgTotalMinutes
      avgSkillsLeveledUp
      __typename
    }
    rows {
      school {
        id
        name
        __typename
      }
      totalMinutes
      skillsLeveledUp
      __typename
    }
    totalCount
    __typename
  }
}
`,
  ProgressByStudent: `query ProgressByStudent($assignmentFilters: CoachAssignmentFilters, $classDescriptor: String!, $pageSize: Int, $after: ID) {
  classroom: classroomByDescriptor(descriptor: $classDescriptor) {
    id
    cacheId
    descriptor
    name
    studentKaidsAndNicknames {
      id
      coachNickname
      __typename
    }
    assignmentsPage(filters: $assignmentFilters, after: $after, pageSize: $pageSize) {
      assignments {
        id
        dueDate
        contents {
          id
          translatedTitle
          kind
          defaultUrlPath
          __typename
        }
        itemCompletionStates: itemCompletionStatesForAllStudents {
          completedOn
          studentKaid
          bestScore {
            numAttempted
            numCorrect
            __typename
          }
          __typename
        }
        __typename
      }
      pageInfo {
        nextCursor
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  ProgressByTeacherQuery: `query ProgressByTeacherQuery($districtName: String!, $schoolIds: [ID!], $gradeLevels: [DistrictGradeLevel!], $teacherIds: [ID!], $progressFrom: DateTime, $progressUpTo: DateTime, $orderBy: ReportByTeacherSortableColumn, $orderDir: OrderDir, $kmapStrandId: ID, $pageSize: Int, $cursor: Int) {
  districtProgressReportByTeacher(districtName: $districtName, filters: {schoolIds: $schoolIds, gradeLevels: $gradeLevels, teacherIds: $teacherIds, progressFrom: $progressFrom, progressUpTo: $progressUpTo, kmapStrandId: $kmapStrandId}, orderBy: $orderBy, orderDir: $orderDir, pageSize: $pageSize, cursor: $cursor) {
    avgRow {
      avgTotalMinutes
      avgSkillsLeveledUp
      __typename
    }
    rows {
      teacherUserDistrictInfo {
        id
        kaid
        displayNameForTeacher
        __typename
      }
      totalMinutes
      skillsLeveledUp
      __typename
    }
    totalCount
    __typename
  }
}
`,
  projectsAuthoredByUser: `query projectsAuthoredByUser($kaid: String, $pageInfo: ListProgramsPageInfo, $sort: ListProgramSortOrder) {
  user(kaid: $kaid) {
    id
    programs(pageInfo: $pageInfo, sort: $sort) {
      complete
      cursor
      programs {
        id
        key
        authorKaid
        authorNickname
        displayableSpinoffCount
        imagePath
        sumVotesIncremented
        translatedTitle: title
        url
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  PublishContent: `query PublishContent($id: String!) {
  publishContent(id: $id) {
    changes {
      id
      kind
      slug
      title
      cmsUrl
      operations {
        operation
        parentTitle
        __typename
      }
      __typename
    }
    diff {
      id
      sha
      kind
      slug
      title
      authorNickname
      cmsUrl
      __typename
    }
    isForCourse
    __typename
  }
}
`,
  PublishList: `query PublishList($limit: Int, $queuedFilter: PublishListFilter, $kaLocaleFilter: KALocale) {
  publishList(limit: $limit, queuedFilter: $queuedFilter, kaLocaleFilter: $kaLocaleFilter) {
    statuses {
      id
      commitSha: publishedContentVersion
      commitMessage
      statusText
      success
      queued
      queueInsertTime
      startTime
      endTime
      kaLocale
      ownerEmail
      contentDescriptors
      profile {
        time
        name
        childEntries {
          time
          name
          __typename
        }
        __typename
      }
      __typename
    }
    currentlyRunningPublishIds
    error {
      code
      __typename
    }
    __typename
  }
}
`,
  QAExpandKeyInfo: `query QAExpandKeyInfo($encryptedKey: String) {
  qaExpandKeyInfo(encryptedQaExpandKey: $encryptedKey) {
    feedbackType
    unencryptedKey
    __typename
  }
}
`,
  querySchoolAffiliation: `query querySchoolAffiliation {
  coach: user {
    id
    schoolAffiliation {
      id
      __typename
    }
    isFormalTeacher
    __typename
  }
  user {
    id
    tosForFormalTeacherStatus
    __typename
  }
}
`,
  quizAndUnitTestAttemptsQuery: `query quizAndUnitTestAttemptsQuery($topicId: String!) {
  user {
    id
    latestUnitTestAttempts(unitId: $topicId) {
      id
      numAttempted
      numCorrect
      completedDate
      canResume
      isCompleted
      __typename
    }
    latestQuizAttempts(topicId: $topicId) {
      id
      numAttempted
      numCorrect
      completedDate
      canResume
      isCompleted
      positionKey
      __typename
    }
    __typename
  }
}
`,
  satMissionData: `query satMissionData {
  curator: actorRoleScopes(role: CREATOR) {
    contentKind
    __typename
  }
  user {
    id
    kaid
    isChild
    userId
    __typename
  }
  satCheats: flag(name: "sat_cheats") {
    id
    isUserPassing
    __typename
  }
  chronomancer {
    isCollegeBoardIntegrationEnabled
    __typename
  }
}
`,
  SatPracticeByGradeQuery: `query SatPracticeByGradeQuery($districtName: String!, $schoolIds: [ID!], $gradeLevels: [DistrictGradeLevel!], $progressFrom: DateTime, $progressUpTo: DateTime) {
  districtSatPracticeReportByGrade(districtName: $districtName, filters: {schoolIds: $schoolIds, gradeLevels: $gradeLevels, progressFrom: $progressFrom, progressUpTo: $progressUpTo}) {
    avgRow {
      avgPracticeMinutes
      avgMathPractice
      avgReadingAndWritingPractice
      __typename
    }
    rows {
      gradeLevel {
        id
        name
        sortIndex
        __typename
      }
      practiceMinutes
      mathPractice
      readingAndWritingPractice
      __typename
    }
    __typename
  }
}
`,
  SatPracticeBySchoolQuery: `query SatPracticeBySchoolQuery($districtName: String!, $schoolIds: [ID!], $gradeLevels: [DistrictGradeLevel!], $progressFrom: DateTime, $progressUpTo: DateTime, $orderBy: BySchoolSortableColumn, $orderDir: OrderDir, $pageSize: Int, $cursor: Int) {
  districtSatPracticeReportBySchool(districtName: $districtName, filters: {schoolIds: $schoolIds, gradeLevels: $gradeLevels, progressFrom: $progressFrom, progressUpTo: $progressUpTo}, orderBy: $orderBy, orderDir: $orderDir, pageSize: $pageSize, cursor: $cursor) {
    avgRow {
      avgPracticeMinutes
      avgMathPractice
      avgReadingAndWritingPractice
      __typename
    }
    rows {
      school {
        id
        name
        __typename
      }
      practiceMinutes
      mathPractice
      readingAndWritingPractice
      __typename
    }
    totalCount
    __typename
  }
}
`,
  SatPracticeByTeacherQuery: `query SatPracticeByTeacherQuery($districtName: String!, $schoolIds: [ID!], $teacherIds: [ID!], $gradeLevels: [DistrictGradeLevel!], $progressFrom: DateTime, $progressUpTo: DateTime, $orderBy: ByTeacherSortableColumn, $orderDir: OrderDir, $pageSize: Int, $cursor: Int) {
  districtSatPracticeReportByTeacher(districtName: $districtName, filters: {schoolIds: $schoolIds, teacherIds: $teacherIds, gradeLevels: $gradeLevels, progressFrom: $progressFrom, progressUpTo: $progressUpTo}, orderBy: $orderBy, orderDir: $orderDir, pageSize: $pageSize, cursor: $cursor) {
    avgRow {
      avgPracticeMinutes
      avgMathPractice
      avgReadingAndWritingPractice
      __typename
    }
    rows {
      teacherUserDistrictInfo {
        id
        kaid
        displayNameForTeacher
        __typename
      }
      practiceMinutes
      mathPractice
      readingAndWritingPractice
      __typename
    }
    totalCount
    __typename
  }
}
`,
  searchDonors: `query searchDonors($filterBy: DonorOrProspectFilterType!, $search: String!) {
  donorOrProspectsByKind(filterBy: $filterBy, search: $search) {
    id
    kaids
    acquisitionChannels
    emails
    transactions {
      id
      customerId
      subscriptionId
      medium
      timestamp
      amountCents
      refunded
      cancelled
      transactionId
      __typename
    }
    __typename
  }
}
`,
  seoMetadataQuery: `query seoMetadataQuery($examGroupId: String!) {
  examGroup(examGroupId: $examGroupId) {
    id
    examGroupMetadata {
      id
      seoMetadata {
        id
        description
        image
        title
        url
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  simpleCompletionQuery: `query simpleCompletionQuery($assignmentId: String!, $teacherKaid: String) {
  coach: user {
    id
    assignment: assignmentByThisUser(id: $assignmentId) {
      contents {
        id
        translatedTitle
        defaultUrlPath
        kind
        __typename
      }
      assignedDate
      dueDate
      id
      itemCompletionStates: itemCompletionStatesForAllStudents {
        student {
          id
          kaid
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
        __typename
      }
      studentList {
        id
        cacheId
        name
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  siteEditorCourseProperties: `query siteEditorCourseProperties($id: String!) {
  course(id: $id) {
    id
    title
    slug
    listed
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
    __typename
  }
}
`,
  siteEditorGetPublishQueueList: `query siteEditorGetPublishQueueList {
  publishList {
    statuses {
      id
      queued
      contentDescriptors
      __typename
    }
    __typename
  }
}
`,
  siteEditorGetPublishStatus: `query siteEditorGetPublishStatus($kaLocale: KALocale!, $contentDescriptors: [String!]!) {
  contentEditingStatus {
    publishEnabled
    __typename
  }
  contentStageItems(kaLocale: $kaLocale, contentDescriptors: $contentDescriptors) {
    id
    contentKind
    contentId
    sha
    publishedSha
    isModified
    __typename
  }
}
`,
  SkillsMetadataAndNoStudentsQuery: `query SkillsMetadataAndNoStudentsQuery($selectedMasteryCourseIds: [String]!) {
  coursesByIds(ids: $selectedMasteryCourseIds) {
    id
    unitChildren {
      id
      filteredContent(kinds: ["Exercise"]) {
        __typename
        id
        kind
        translatedTitle
        translatedDescription
        defaultUrlPath
        mappedStandards {
          id
          standardId
          __typename
        }
        topicPaths {
          path {
            id
            __typename
          }
          __typename
        }
        ... on Exercise {
          imageUrl
          imageUrl256
          __typename
        }
      }
      __typename
    }
    __typename
  }
}
`,
  SkillsMetadataAndStudentsQuery: `query SkillsMetadataAndStudentsQuery($selectedMasteryCourseIds: [String]!, $classDescriptor: String!) {
  classroom: classroomByDescriptor(descriptor: $classDescriptor) {
    id
    descriptor
    cacheId
    studentKaidsAndNicknames {
      id
      kaid
      coachNickname
      __typename
    }
    __typename
  }
  coursesByIds(ids: $selectedMasteryCourseIds) {
    id
    unitChildren {
      id
      filteredContent(kinds: ["Exercise"]) {
        __typename
        id
        kind
        translatedTitle
        translatedDescription
        defaultUrlPath
        mappedStandards {
          id
          standardId
          __typename
        }
        topicPaths {
          path {
            id
            __typename
          }
          __typename
        }
        ... on Exercise {
          imageUrl
          imageUrl256
          __typename
        }
      }
      __typename
    }
    __typename
  }
}
`,
  SkillsQuery: `query SkillsQuery($classDescriptor: String!, $skillIds: [String]!, $studentKaid: String) {
  teacherOverallProgressReport(classroomDescriptor: $classDescriptor, filters: {studentKaid: $studentKaid}) {
    skillsLevels(skillIds: $skillIds) {
      skillId
      studentLevels {
        skillLevel
        studentKaid
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  StandaloneUserAssignments: `query StandaloneUserAssignments($after: ID, $pageSize: Int, $kaid: String!, $classDescriptor: String!, $orderBy: AssignmentOrder!) {
  student: user(kaid: $kaid) {
    id
    assignmentsPage(after: $after, pageSize: $pageSize, classroomDescriptor: $classDescriptor, orderBy: $orderBy) {
      assignments {
        id
        contents {
          ...TranslatedContentFields
          __typename
        }
        assignedDate
        dueDate
        itemCompletionStates {
          studentKaid
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
            __typename
          }
          __typename
        }
        __typename
      }
      pageInfo {
        nextCursor
        __typename
      }
      __typename
    }
    __typename
  }
}

fragment TranslatedContentFields on LearnableContent {
  id
  kind
  translatedTitle
  defaultUrlPath
  __typename
}
`,
  StudentKmapPlacementQuery: `query StudentKmapPlacementQuery($classDescriptor: String!, $studentKaid: String!) {
  student: user(kaid: $studentKaid) {
    id
    assignments: subjectMasteryAssignments(filter: KMAP, classroomDescriptor: $classDescriptor) {
      id
      studentListId
      activeStudentData {
        kaid
        assignedDate
        __typename
      }
      studentKaids
      course: topic {
        id
        slug
        domainSlug
        ... on KMapTopic {
          strandKey
          bandKey
          __typename
        }
        __typename
      }
      studentProgress {
        kaid
        currentMastery {
          percentage
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
  classroom: classroomByDescriptor(descriptor: $classDescriptor) {
    id
    cacheId
    classroomDistrictInfo {
      id
      studentUserDistrictInfos(filters: {studentKaid: $studentKaid}) {
        id
        kaid
        gradeLevel
        displayNameForTeacher
        suggestedGradeBandKey
        previousMathAssessment {
          id
          isGrowthMeasure
          testStartDate
          termName
          goalData {
            id
            strandKey
            ritScore
            suggestedRitScoreBandKey
            __typename
          }
          __typename
        }
        currentMathAssessment {
          id
          isGrowthMeasure
          testStartDate
          termName
          goalData {
            id
            strandKey
            ritScore
            suggestedRitScoreBandKey
            __typename
          }
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
  kmapTopics {
    id
    slug
    strand
    band
    strandKey
    bandKey
    __typename
  }
}
`,
  studentListByClassCode: `query studentListByClassCode($classCode: String!) {
  joinByClassCodeInfo(classCode: $classCode) {
    id
    cacheId
    name
    signupCode
    includesDistrictOwnedData
    classroomDistrictInfo {
      id
      emailDomains
      __typename
    }
    __typename
  }
}
`,
  StudentListHasAssignments: `query StudentListHasAssignments($classDescriptor: String!) {
  classroom: classroomByDescriptor(descriptor: $classDescriptor) {
    id
    cacheId
    hasAssignments
    hasCourseMasteryGoals
    __typename
  }
}
`,
  StudentListsQuery: `query StudentListsQuery {
  coach: user {
    id
    studentLists: coachedStudentLists {
      id
      cacheId
      name
      signupCode
      topics {
        id
        slug
        translatedStandaloneTitle
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  StudentMasteryGoals: `query StudentMasteryGoals($kaid: String, $filter: SubjectMasteryContextFilter, $isPast: Boolean!, $classDescriptor: String) {
  user(kaid: $kaid) {
    id
    hasTakenKmapExam
    subjectMasteryAssignments(filter: $filter, isPast: $isPast, classroomDescriptor: $classDescriptor) {
      id
      activeStudentData {
        kaid
        assignedDate
        __typename
      }
      isKmap
      isPast
      whyPast
      whenPast
      whenCompleted
      studentList {
        id
        cacheId
        name
        coach {
          id
          kaid
          __typename
        }
        __typename
      }
      dueDate
      topic {
        ... on KMapTopic {
          strandKey
          band
          strand
          __typename
        }
        id
        slug
        domainSlug
        translatedTitle
        largeIconPath
        __typename
      }
      currentUserProgress {
        currentMastery {
          percentage
          pointsEarned
          pointsAvailable
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  studentPageByDescriptorQuery: `query studentPageByDescriptorQuery($classDescriptor: String!) {
  coach: user {
    id
    isFormalTeacher
    __typename
  }
  classroom: classroomByDescriptor(descriptor: $classDescriptor) {
    id
    cacheId
    classroomDistrictInfo {
      id
      isNweaMapSynced
      studentUserDistrictInfos {
        id
        kaid
        displayNameForTeacher
        __typename
      }
      __typename
    }
    studentKaidsAndNicknames {
      id
      kaid
      coachNickname
      __typename
    }
    __typename
  }
}
`,
  StudentSkillsProgressKADQuery: `query StudentSkillsProgressKADQuery($studentKaid: String!, $progressFrom: DateTime!, $progressUpTo: DateTime!, $courseID: String!) {
  districtStudentsSkillsProgressForCourses(studentKaid: $studentKaid, progressFrom: $progressFrom, progressUpTo: $progressUpTo, courseID: $courseID) {
    exercise {
      id
      title
      mappedStandards {
        id
        setId
        standardId
        __typename
      }
      __typename
    }
    exerciseMinutes
    netLevelChanges
    skillLevel
    workedOn
    __typename
  }
  courseById(id: $courseID) {
    id
    title
    unitChildren {
      unitID: id
      unitTitle: translatedTitle
      learnableContentPage(pageParams: {pageSize: 1000, after: 0, contentKinds: [EXERCISE]}) {
        contents {
          exerciseID: id
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  StudentSkillsProgressMAPQuery: `query StudentSkillsProgressMAPQuery($studentKaid: String!, $progressFrom: DateTime!, $progressUpTo: DateTime!, $bands: [String!], $strandKey: String) {
  districtStudentsSkillsProgressForCourses(studentKaid: $studentKaid, progressFrom: $progressFrom, progressUpTo: $progressUpTo, bands: $bands, strandKey: $strandKey) {
    exercise {
      id
      title
      mappedStandards {
        id
        setId
        standardId
        __typename
      }
      __typename
    }
    exerciseMinutes
    netLevelChanges
    skillLevel
    workedOn
    __typename
  }
  kmapTopics {
    id
    title
    band
    bandGradeName
    bandKey
    strandKey
    learnableContentPage(pageParams: {pageSize: 1000, after: 0, contentKinds: [EXERCISE]}) {
      contents {
        exerciseID: id
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  StudentSubjectMasteryGoals: `query StudentSubjectMasteryGoals {
  user {
    id
    goals: subjectMasteryAssignments {
      id
      topic {
        id
        slug
        domainSlug
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  SubjectMasteryAssignmentsByDescriptorQuery: `query SubjectMasteryAssignmentsByDescriptorQuery($classDescriptor: String!) {
  classroom: classroomByDescriptor(descriptor: $classDescriptor) {
    id
    cacheId
    assignments: subjectMasteryAssignments(filter: NO_KMAP) {
      id
      dueDate
      assignedDate
      subject: topic {
        id
        subjectMasteryEnabled
        title: translatedTitle
        __typename
      }
      studentKaids
      __typename
    }
    studentKaidsAndNicknames {
      id
      kaid
      coachNickname
      __typename
    }
    __typename
  }
}
`,
  TranscriptQuery: `query TranscriptQuery($videoId: String!) {
  videoById(contentId: $videoId) {
    id
    title
    augmentedTranscript
    subtitles {
      startTime
      text
      __typename
    }
    __typename
  }
}
`,
  transferAuthTokenQuery: `query transferAuthTokenQuery {
  user {
    id
    transferAuthToken
    __typename
  }
}
`,
  translationEditorEditableByUser: `query translationEditorEditableByUser($contentId: String!, $contentKind: String!) {
  isEditableByCurrentUser(contentId: $contentId, contentKind: $contentKind)
}
`,
  translationEditorPermissions: `query translationEditorPermissions {
  curator: actorRoleScopes(role: CURATOR) {
    locale
    __typename
  }
  videoTranslator: actorRoleScopes(role: VIDEO_TRANSLATIONS_EDITOR) {
    locale
    __typename
  }
  locales {
    id
    kaLocale
    displayName
    __typename
  }
}
`,
  translationEditorTalkthroughById: `query translationEditorTalkthroughById($id: String!) {
  talkthroughById(id: $id) {
    id
    title
    translatedMp3Url
    defaultUrlPath
    listed
    __typename
  }
}
`,
  translationEditorTalkthroughRevisionById: `query translationEditorTalkthroughRevisionById($id: String!) {
  talkthroughRevisionById(id: $id) {
    id
    sha
    translatedMP3URLs
    youtubeID
    __typename
  }
}
`,
  TranslationEditor_GetAllDubs: `query TranslationEditor_GetAllDubs {
  allDubs {
    sourceYouTubeId
    dubYouTubeId
    video {
      id
      title
      duration
      dateAdded
      translatedYoutubeId
      parentTopic {
        id
        title
        relativeUrl
        __typename
      }
      urlWithinTopic
      __typename
    }
    __typename
  }
}
`,
  TranslationEditor_GetArticleID: `query TranslationEditor_GetArticleID($slug: String!) {
  article(slug: $slug) {
    id
    __typename
  }
}
`,
  TranslationEditor_GetArticleStrings: `query TranslationEditor_GetArticleStrings($articleId: String!) {
  articleStrings(articleId: $articleId) {
    title
    englishContent
    jiptContent
    translationItems {
      assessmentItem
      englishString
      jiptString
      __typename
    }
    __typename
  }
  articleById(id: $articleId) {
    id
    defaultUrlPath
    listed
    __typename
  }
}
`,
  TranslationEditor_GetChallengeID: `query TranslationEditor_GetChallengeID($slug: String!) {
  challenge(slug: $slug) {
    id
    __typename
  }
}
`,
  TranslationEditor_GetCourseStrings: `query TranslationEditor_GetCourseStrings($courseId: String!) {
  courseStrings(courseId: $courseId) {
    id
    slug
    renderType
    title
    translatedTitle
    description
    translatedDescription
    __typename
  }
}
`,
  TranslationEditor_GetCurationNodeID: `query TranslationEditor_GetCurationNodeID($slug: String!) {
  topic(slug: $slug) {
    id
    __typename
  }
}
`,
  TranslationEditor_GetDescriptionStrings: `query TranslationEditor_GetDescriptionStrings($curationNodeId: String!) {
  curationNodeDescriptionStrings(curationNodeId: $curationNodeId) {
    id
    slug
    contentKind
    title
    translatedTitle
    standaloneTitle
    translatedStandaloneTitle
    description
    translatedDescription
    __typename
  }
}
`,
  TranslationEditor_GetExerciseID: `query TranslationEditor_GetExerciseID($slug: String!) {
  exercise(name: $slug) {
    id
    __typename
  }
}
`,
  TranslationEditor_GetExerciseStrings: `query TranslationEditor_GetExerciseStrings($exerciseId: String!) {
  exerciseStrings(exerciseId: $exerciseId) {
    orderedProblemTypes {
      name
      assessmentItems
      __typename
    }
    problemTypes {
      key
      value
      __typename
    }
    translationItems {
      assessmentItem
      englishString
      jiptString
      __typename
    }
    translatedAssessmentItems {
      key
      value
      __typename
    }
    __typename
  }
  exerciseById(id: $exerciseId) {
    id
    title
    defaultUrlPath
    listed
    __typename
  }
}
`,
  TranslationEditor_GetPlatformStrings: `query TranslationEditor_GetPlatformStrings($category: String!) {
  platformStrings(category: $category) {
    title
    strings {
      english
      translation
      __typename
    }
    __typename
  }
}
`,
  TranslationEditor_GetProgramStrings: `query TranslationEditor_GetProgramStrings($programKind: ProgramStringsKind!, $programId: String!, $contentDescriptor: String!) {
  programStrings(programKind: $programKind, programId: $programId) {
    title
    strings {
      english
      translation
      __typename
    }
    __typename
  }
  contentForDescriptors(descriptors: [$contentDescriptor]) {
    id
    defaultUrlPath
    listed
    __typename
  }
}
`,
  TranslationEditor_GetProjectID: `query TranslationEditor_GetProjectID($slug: String!) {
  project(slug: $slug) {
    id
    __typename
  }
}
`,
  TranslationEditor_GetVideosByIDs: `query TranslationEditor_GetVideosByIDs($ids: [String!]!) {
  videosByIds(ids: $ids) {
    id
    title
    duration
    dateAdded
    translatedYoutubeId
    parentTopic {
      id
      title
      relativeUrl
      __typename
    }
    urlWithinTopic
    __typename
  }
}
`,
  TranslationEditor_GetVideoTranslationStatus: `query TranslationEditor_GetVideoTranslationStatus($kaLocale: String!) {
  allVideoTranslationProgressForKaLocale(kaLocale: $kaLocale) {
    id
    slug
    title
    isDubbed
    dubIsSubtitled
    isSubtitled
    revisionStatus
    upstreamDuration
    youtubeId
    upstreamYoutubeId
    lesson {
      id
      slug
      title
      unit: parent {
        id
        slug
        title
        course: parent {
          id
          slug
          title
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  TranslationPipelineQuery: `query TranslationPipelineQuery {
  crowdinLocales
  currentPipelines {
    timestamp
    crowdinLocale
    priority
    archiveId
    pipelines {
      stage
      status
      startTime
      endTime
      message
      attempts
      __typename
    }
    __typename
  }
  historicalPipelines {
    timestamp
    crowdinLocale
    priority
    archiveId
    pipelines {
      stage
      status
      startTime
      endTime
      message
      attempts
      __typename
    }
    __typename
  }
}
`,
  translationPortalContentProgress: `query translationPortalContentProgress($contentDescriptors: [String!]!, $contentLocale: String!) {
  contentTranslationProgress(contentDescriptors: $contentDescriptors, contentKALocale: $contentLocale) {
    content {
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
  }
}

fragment tapArticleNode on TAPArticleNode {
  ...tapContentItem
  ...tapMetadataWordCounts
  ...tapContentWordCounts
  fingerprint
  __typename
}

fragment tapChallengeNode on TAPChallengeNode {
  ...tapContentItem
  ...tapMetadataWordCounts
  ...tapContentWordCounts
  fingerprint
  __typename
}

fragment tapContentItem on TAPContentItem {
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
}

fragment tapContentWordCounts on TAPContentWordCounts {
  wordCount
  translatableWordCount
  translatedWordCount
  translatedWordCount
  approvedWordCount
  __typename
}

fragment tapExerciseNode on TAPExerciseNode {
  ...tapContentItem
  ...tapMetadataWordCounts
  ...tapContentWordCounts
  fingerprint
  __typename
}

fragment tapInteractiveNode on TAPInteractiveNode {
  ...tapContentItem
  ...tapMetadataWordCounts
  fingerprint
  __typename
}

fragment tapMetadataWordCounts on TAPMetadataWordCounts {
  metadataWordCount
  metadataTranslatableWordCount
  metadataTranslatedWordCount
  metadataApprovedWordCount
  __typename
}

fragment tapProjectNode on TAPProjectNode {
  ...tapContentItem
  ...tapMetadataWordCounts
  ...tapContentWordCounts
  fingerprint
  __typename
}

fragment tapTalkthroughNode on TAPTalkthroughNode {
  ...tapContentItem
  ...tapMetadataWordCounts
  fingerprint
  isDubbed
  isSubtitled
  youtubeId
  __typename
}

fragment tapVideoNode on TAPVideoNode {
  ...tapContentItem
  ...tapMetadataWordCounts
  fingerprint
  isDubbed
  dubIsSubtitled
  isSubtitled
  translatedYoutubeId
  youtubeId
  __typename
}
`,
  translationPortalCourseContentProgress: `query translationPortalCourseContentProgress($courseId: String!, $contentLocale: String!) {
  courseTranslationProgress(courseId: $courseId, contentKALocale: $contentLocale) {
    course {
      ...tapCourseNode
      __typename
    }
    __typename
  }
}

fragment tapArticleNode on TAPArticleNode {
  ...tapContentItem
  ...tapMetadataWordCounts
  ...tapContentWordCounts
  fingerprint
  __typename
}

fragment tapChallengeNode on TAPChallengeNode {
  ...tapContentItem
  ...tapMetadataWordCounts
  ...tapContentWordCounts
  fingerprint
  __typename
}

fragment tapContentItem on TAPContentItem {
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
}

fragment tapContentWordCounts on TAPContentWordCounts {
  wordCount
  translatableWordCount
  translatedWordCount
  translatedWordCount
  approvedWordCount
  __typename
}

fragment tapCourseNode on TAPCourseNode {
  ...tapContentItem
  ...tapMetadataWordCounts
  fingerprint
  children {
    ...tapUnitNode
    __typename
  }
  __typename
}

fragment tapExerciseNode on TAPExerciseNode {
  ...tapContentItem
  ...tapMetadataWordCounts
  ...tapContentWordCounts
  fingerprint
  __typename
}

fragment tapInteractiveNode on TAPInteractiveNode {
  ...tapContentItem
  ...tapMetadataWordCounts
  fingerprint
  __typename
}

fragment tapLessonNode on TAPLessonNode {
  ...tapContentItem
  ...tapMetadataWordCounts
  fingerprint
  children {
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
}

fragment tapMetadataWordCounts on TAPMetadataWordCounts {
  metadataWordCount
  metadataTranslatableWordCount
  metadataTranslatedWordCount
  metadataApprovedWordCount
  __typename
}

fragment tapProjectNode on TAPProjectNode {
  ...tapContentItem
  ...tapMetadataWordCounts
  ...tapContentWordCounts
  fingerprint
  __typename
}

fragment tapTalkthroughNode on TAPTalkthroughNode {
  ...tapContentItem
  ...tapMetadataWordCounts
  fingerprint
  isDubbed
  isSubtitled
  youtubeId
  __typename
}

fragment tapUnitNode on TAPUnitNode {
  ...tapContentItem
  ...tapMetadataWordCounts
  fingerprint
  children {
    ...tapLessonNode
    __typename
  }
  __typename
}

fragment tapVideoNode on TAPVideoNode {
  ...tapContentItem
  ...tapMetadataWordCounts
  fingerprint
  isDubbed
  dubIsSubtitled
  isSubtitled
  translatedYoutubeId
  youtubeId
  __typename
}
`,
  translationPortalCourseContentProgressCached: `query translationPortalCourseContentProgressCached($courseId: String!, $contentLocale: String!) {
  courseTranslationProgress(courseId: $courseId, contentKALocale: $contentLocale) {
    course {
      ...tapCourseNode
      __typename
    }
    __typename
  }
}

fragment tapArticleNode on TAPArticleNode {
  ...tapContentItem
  ...tapMetadataWordCounts
  ...tapContentWordCounts
  fingerprint
  __typename
}

fragment tapChallengeNode on TAPChallengeNode {
  ...tapContentItem
  ...tapMetadataWordCounts
  ...tapContentWordCounts
  fingerprint
  __typename
}

fragment tapContentItem on TAPContentItem {
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
}

fragment tapContentWordCounts on TAPContentWordCounts {
  wordCount
  translatableWordCount
  translatedWordCount
  translatedWordCount
  approvedWordCount
  __typename
}

fragment tapCourseNode on TAPCourseNode {
  ...tapContentItem
  ...tapMetadataWordCounts
  fingerprint
  children {
    ...tapUnitNode
    __typename
  }
  __typename
}

fragment tapExerciseNode on TAPExerciseNode {
  ...tapContentItem
  ...tapMetadataWordCounts
  ...tapContentWordCounts
  fingerprint
  __typename
}

fragment tapInteractiveNode on TAPInteractiveNode {
  ...tapContentItem
  ...tapMetadataWordCounts
  fingerprint
  __typename
}

fragment tapLessonNode on TAPLessonNode {
  ...tapContentItem
  ...tapMetadataWordCounts
  fingerprint
  children {
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
}

fragment tapMetadataWordCounts on TAPMetadataWordCounts {
  metadataWordCount
  metadataTranslatableWordCount
  metadataTranslatedWordCount
  metadataApprovedWordCount
  __typename
}

fragment tapProjectNode on TAPProjectNode {
  ...tapContentItem
  ...tapMetadataWordCounts
  ...tapContentWordCounts
  fingerprint
  __typename
}

fragment tapTalkthroughNode on TAPTalkthroughNode {
  ...tapContentItem
  ...tapMetadataWordCounts
  fingerprint
  isDubbed
  isSubtitled
  youtubeId
  __typename
}

fragment tapUnitNode on TAPUnitNode {
  ...tapContentItem
  ...tapMetadataWordCounts
  fingerprint
  children {
    ...tapLessonNode
    __typename
  }
  __typename
}

fragment tapVideoNode on TAPVideoNode {
  ...tapContentItem
  ...tapMetadataWordCounts
  fingerprint
  isDubbed
  dubIsSubtitled
  isSubtitled
  translatedYoutubeId
  youtubeId
  __typename
}
`,
  translationPortalCourseTitlesByIds: `query translationPortalCourseTitlesByIds($ids: [String]!) {
  topicsById(ids: $ids) {
    id
    title
    domainSlug
    courseSnapshotId
    __typename
  }
}
`,
  translationPortalFolders: `query translationPortalFolders {
  folderGroups {
    myFolders {
      id
      name
      kaLocale
      courseIds
      __typename
    }
    otherFolders {
      id
      name
      kaLocale
      courseIds
      __typename
    }
    __typename
  }
}
`,
  translationPortalPlatformAndDomainsProgress: `query translationPortalPlatformAndDomainsProgress($locale: String!) {
  domainsTranslationProgress(contentKALocale: $locale) {
    domains {
      ...tapDomainNode
      __typename
    }
    __typename
  }
  platformTranslationProgress {
    platform {
      ...tapPlatformNode
      __typename
    }
    __typename
  }
}

fragment tapContentItem on TAPContentItem {
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
}

fragment tapContentWordCounts on TAPContentWordCounts {
  wordCount
  translatableWordCount
  translatedWordCount
  translatedWordCount
  approvedWordCount
  __typename
}

fragment tapDomainNode on TAPDomainNode {
  ...tapContentItem
  ...tapMetadataWordCounts
  fingerprint
  __typename
}

fragment tapMetadataWordCounts on TAPMetadataWordCounts {
  metadataWordCount
  metadataTranslatableWordCount
  metadataTranslatedWordCount
  metadataApprovedWordCount
  __typename
}

fragment tapPlatformNode on TAPPlatformNode {
  ...tapContentWordCounts
  id
  slug
  title
  __typename
}
`,
  translationPortalTranslationFreshness: `query translationPortalTranslationFreshness {
  platformTranslationProgress {
    ...tapTranslationFreshness
    __typename
  }
}

fragment tapTranslationFreshness on TAPTranslationFreshness {
  lastStringsUpdateDate
  lastDubsUpdateDate
  lastSubtitlesUpdateDate
  updateDate
  __typename
}
`,
  TranslationSearchQuery: `query TranslationSearchQuery($query: String!, $type: QueryType!) {
  stringSearch(query: $query, type: $type) {
    snapshotId
    filename
    entry {
      msgKey
      msgId
      msgIdPlural
      comment
      occurrences {
        file
        line
        __typename
      }
      flags
      timestamp
      isPlatform
      deleted
      __typename
    }
    translations {
      crowdinLocale
      msgStr
      approved
      lintError
      __typename
    }
    __typename
  }
}
`,
  translationsVideosGetVideo: `query translationsVideosGetVideo($youtubeId: String!) {
  videoByYoutubeId(youtubeId: $youtubeId) {
    id
    contentId
    description
    __typename
  }
}
`,
  translationsVideosGetVideos: `query translationsVideosGetVideos($youtubeIds: [String!]!) {
  videosByYoutubeIds(youtubeIds: $youtubeIds) {
    id
    contentId
    __typename
  }
}
`,
  unitProgressForSubject: `query unitProgressForSubject($subjectId: String!) {
  topicById(id: $subjectId) {
    id
    slug
    title
    masteryEnabled
    masteryChallenge {
      id
      timeEstimate {
        lowerBound
        upperBound
        __typename
      }
      __typename
    }
    __typename
  }
  user {
    id
    latestCourseChallengeAttempt(courseId: $subjectId) {
      id
      canResume
      completedDate
      __typename
    }
    exerciseData {
      masteryChallengeStatus(courseId: $subjectId) {
        totalQuestions
        isEligible
        currentAttempt {
          id
          canResume
          timeLeftSeconds
          expirationTime
          expirationPeriodHours
          __typename
        }
        __typename
      }
      __typename
    }
    subjectProgress(topicId: $subjectId) {
      notification {
        dismissalKey
        modifiedUnits {
          id
          __typename
        }
        __typename
      }
      unitProgresses {
        masteryEnabled
        currentMastery {
          percentage
          pointsEarned
          pointsAvailable
          __typename
        }
        topic {
          id
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  unprocessedAIGuideWaitlistEntries: `query unprocessedAIGuideWaitlistEntries($cursor: String, $eligibility: Boolean, $stableRandomOrder: Boolean) {
  unprocessedAIGuideWaitlistEntries(cursor: $cursor, eligibility: $eligibility, stableRandomOrder: $stableRandomOrder) {
    cursor
    entries {
      id
      isEligible
      isProcessed
      joinDate
      user {
        id
        age
        nickname
        email
        children {
          id
          underAgeGate {
            parentEmail
            __typename
          }
          classrooms {
            id
            cacheId
            __typename
          }
          __typename
        }
        discussionBanned
        isMVAL
        isParent
        isTeacher
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  UntranslatedContentCheck: `query UntranslatedContentCheck($path: String!, $countryCode: String!) {
  contentRoute(path: $path, countryCode: $countryCode) {
    resolvedPath
    __typename
  }
}
`,
  UserAfterUDIDeactivationQuery: `query UserAfterUDIDeactivationQuery($kaid: String!) {
  user(kaid: $kaid) {
    id
    userDistrictInfos {
      id
      __typename
    }
    authEmails
    userAdminLogs {
      adminKaid
      adminEmail
      date
      description
      __typename
    }
    __typename
  }
}
`,
  UserAssignments: `query UserAssignments($after: ID, $dueAfter: DateTime, $dueBefore: DateTime, $pageSize: Int, $orderBy: AssignmentOrder!, $studentListId: String, $coachKaid: String) {
  user {
    id
    kaid
    assignmentsPage(after: $after, dueAfter: $dueAfter, dueBefore: $dueBefore, pageSize: $pageSize, orderBy: $orderBy, studentListId: $studentListId, coachKaid: $coachKaid) {
      assignments {
        id
        key
        subjectSlug
        contents {
          ...ContentFields
          __typename
        }
        assignedDate
        dueDate
        studentList {
          id
          cacheId
          signupCode
          name
          __typename
        }
        totalCompletionStates: itemCompletionStates {
          student {
            id
            kaid
            __typename
          }
          state
          completedOn
          bestScore {
            numCorrect
            numAttempted
            __typename
          }
          __typename
        }
        exerciseConfig {
          itemPickerStrategy
          __typename
        }
        domainId
        courseId
        unitId
        lessonId
        __typename
      }
      pageInfo {
        nextCursor
        __typename
      }
      __typename
    }
    __typename
  }
}

fragment ContentFields on LearnableContent {
  contentId: id
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
  description: translatedDescription
  thumbnailUrl
  slug
  ... on Exercise {
    expectedDoNCount: exerciseLength
    timeEstimate {
      lowerBound
      upperBound
      __typename
    }
    __typename
  }
  ... on Video {
    youtubeId
    translatedYoutubeId
    duration
    __typename
  }
  __typename
}
`,
  UserAssignmentsForContent: `query UserAssignmentsForContent($classroomDescriptor: String!, $contentDescriptors: [String!]!) {
  user {
    id
    assignmentDueNextForContentDescriptors(classroomDescriptor: $classroomDescriptor, contentDescriptors: $contentDescriptors) {
      ...AssignmentData
      __typename
    }
    __typename
  }
}

fragment AssignmentData on Assignment {
  id
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
}
`,
  UserAssignmentsPage: `query UserAssignmentsPage($classroomDescriptor: String!, $dueAfterISO: DateTime, $pageSize: Int!, $cursor: ID) {
  user {
    id
    assignmentsPage(dueAfter: $dueAfterISO, orderBy: DUE_DATE_ASC, pageSize: $pageSize, classroomDescriptor: $classroomDescriptor, after: $cursor) {
      assignments {
        ...AssignmentData
        __typename
      }
      pageInfo {
        nextCursor
        __typename
      }
      __typename
    }
    __typename
  }
}

fragment AssignmentData on Assignment {
  id
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
}
`,
  UserClassroomsInfo: `query UserClassroomsInfo($teacherKaid: String) {
  user(kaid: $teacherKaid) {
    id
    coachedClassrooms {
      cacheId
      id
      name
      descriptor
      __typename
    }
    __typename
  }
}
`,
  userDataForNewContentPermission: `query userDataForNewContentPermission($email: String!) {
  user(email: $email) {
    id
    kaid
    email
    username
    nickname
    __typename
  }
}
`,
  userDistrictInfoByEmailAndClassCode: `query userDistrictInfoByEmailAndClassCode($email: String!, $classCode: String!) {
  userDistrictInfoByEmailAndClassCode(email: $email, classCode: $classCode) {
    error {
      debugMessage
      code
      __typename
    }
    userDistrictInfo {
      id
      districtProvidedEmail
      districtProvidedFirstName
      districtProvidedLastName
      districtProvidedFullName
      districtProvidedBirthYear
      districtProvidedBirthMonth
      primaryRole
      isKmap
      kaid
      uuid
      __typename
    }
    __typename
  }
}
`,
  UserDistrictInfosQuery: `query UserDistrictInfosQuery($email: String, $rosterID: String) {
  userDistrictInfos(email: $email, rosterID: $rosterID) {
    id
    district {
      id
      name
      __typename
    }
    createdAt
    updatedAt
    deletedAt
    cleverId
    classlinkId
    uuid
    kaid
    activationEmailSentAt
    activatedAt
    activationMethod
    districtProvidedEmail
    districtProvidedFullName
    primaryRole
    rosterSource
    isKmap
    isKAD
    adminOfSchools {
      id
      name
      __typename
    }
    __typename
  }
}
`,
  UserDistrictStudentsQuery: `query UserDistrictStudentsQuery($classDescriptor: String!) {
  classroomByDescriptor(descriptor: $classDescriptor) {
    id
    cacheId
    signupCode
    classroomDistrictInfo {
      id
      isNweaMapSynced
      studentUserDistrictInfos {
        id
        kaid
        uuid
        displayNameForTeacher
        districtProvidedEmail
        __typename
      }
      __typename
    }
    studentKaidsAndNicknames {
      id
      kaid
      coachNickname
      __typename
    }
    __typename
  }
}
`,
  UserDowngradedQuery: `query UserDowngradedQuery {
  user {
    id
    userDistrictInfos(includeDeleted: true) {
      id
      district {
        id
        name
        __typename
      }
      deletedAt
      primaryRole
      __typename
    }
    __typename
  }
}
`,
  UserEmailsQuery: `query UserEmailsQuery {
  user {
    id
    authEmails
    __typename
  }
}
`,
  userForConversationNotice: `query userForConversationNotice {
  user {
    id
    hasParents
    hasCoach
    __typename
  }
}
`,
  UserHasDismissedQuery: `query UserHasDismissedQuery($itemName: String!) {
  dismissedItem(itemName: $itemName) {
    id
    isDismissed
    __typename
  }
}
`,
  UserNextUpcomingAssignment: `query UserNextUpcomingAssignment {
  user {
    id
    assignmentDueNext {
      id
      studentList {
        ...Classroom
        __typename
      }
      __typename
    }
    __typename
  }
}

fragment Classroom on StudentList {
  cacheId
  coachKaid
  descriptor
  hasAssignments
  id
  name
  __typename
}
`,
  UserPermissionsByEmail: `query UserPermissionsByEmail($email: String!) {
  user(email: $email) {
    id
    userKaid: kaid
    userEmail: email
    userName: username
    permissions: contentPermissions {
      id
      kind
      role
      granterEmail
      locale: kaLocale
      canPublish
      topic: curationNodeSlug
      __typename
    }
    __typename
  }
}
`,
  UserPermissionsForContent: `query UserPermissionsForContent {
  user {
    id
    canEdit: hasPermission(name: "can_edit", scope: ANY_ON_CURRENT_LOCALE)
    canCurate: hasPermission(name: "can_curate_tags", scope: ANY_ON_CURRENT_LOCALE)
    __typename
  }
}
`,
  userProgressForAssignments: `query userProgressForAssignments($contentDescriptors: [String!]!) {
  user {
    id
    contentItemProgresses(queryBy: {contentDescriptors: $contentDescriptors}) {
      ...BasicContentItemProgress
      ... on ExerciseItemProgress {
        lastCompletedAttempt {
          id
          lastAttemptDate
          numCorrect
          numAttempted
          __typename
        }
        updatedMasteryLevel
        __typename
      }
      __typename
    }
    __typename
  }
}

fragment BasicContentItemProgress on ContentItemProgress {
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
}
`,
  userProgressForLesson: `query userProgressForLesson($lessonId: String!, $unitId: String!, $masteryEnabled: Boolean!) {
  user {
    id
    contentItemProgresses(queryBy: {parentTopicId: $lessonId}) {
      ...BasicContentItemProgress
      ... on ExerciseItemProgress @include(if: $masteryEnabled) {
        lastCompletedAttempt {
          id
          lastAttemptDate
          numCorrect
          numAttempted
          __typename
        }
        updatedMasteryLevel
        __typename
      }
      __typename
    }
    latestQuizAttempts(topicId: $unitId) {
      id
      numCorrect
      numAttempted
      isCompleted
      positionKey
      __typename
    }
    latestUnitTestAttempts(unitId: $unitId) {
      id
      numCorrect
      numAttempted
      isCompleted
      topicId
      __typename
    }
    __typename
  }
}

fragment BasicContentItemProgress on ContentItemProgress {
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
}
`,
  userProgressForPrograms: `query userProgressForPrograms($contentDescriptors: [String!]!) {
  user {
    id
    contentItemProgresses(queryBy: {contentDescriptors: $contentDescriptors}) {
      completionStatus
      content {
        id
        contentKind
        __typename
      }
      ... on ChallengeItemProgress {
        points
        stashedCode
        __typename
      }
      ... on InteractiveItemProgress {
        points
        __typename
      }
      ... on ProjectItemProgress {
        points
        stashedCode
        __typename
      }
      ... on TalkthroughItemProgress {
        points
        lastMsWatched
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  userSpinoffsOfProgram: `query userSpinoffsOfProgram($spinoffOrigin: SpinoffOrigin!, $pageInfo: ListProgramsPageInfo, $sort: ListProgramSortOrder) {
  user {
    id
    programSpinoffs(from: $spinoffOrigin, pageInfo: $pageInfo, sort: $sort) {
      complete
      cursor
      programs {
        id
        key
        authorKaid
        authorNickname
        displayableSpinoffCount
        imagePath
        sumVotesIncremented
        translatedTitle: title
        url
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  userStatisticsQuery: `query userStatisticsQuery($kaid: String!) {
  userSummary(kaid: $kaid) {
    statistics {
      answers
      comments
      projectanswers
      projectquestions
      questions
      replies
      votes
      __typename
    }
    __typename
  }
}
`,
  userSummaryQuery: `query userSummaryQuery($kaid: String!) {
  userSummary(kaid: $kaid) {
    answers {
      ...SharedFeedbackFields
      __typename
    }
    comments {
      ...SharedFeedbackFields
      __typename
    }
    projectanswers {
      ...SharedFeedbackFields
      __typename
    }
    projectquestions {
      ...SharedFeedbackFields
      __typename
    }
    questions {
      ...SharedFeedbackFields
      __typename
    }
    replies {
      ...SharedFeedbackFields
      __typename
    }
    badges {
      count
      badge {
        absoluteUrl
        badgeCategory
        description
        fullDescription
        hideContext
        icons {
          compactUrl
          emailUrl
          largeUrl
          smallUrl
          __typename
        }
        isCustom
        isRetired
        name
        points
        relativeUrl
        slug
        __typename
      }
      __typename
    }
    statistics {
      answers
      comments
      flags
      projectanswers
      projectquestions
      questions
      replies
      votes
      __typename
    }
    hellbanActions {
      date
      isHellban
      moderatorNickname
      reason
      urlsafeKey
      __typename
    }
    __typename
  }
  user(kaid: $kaid) {
    id
    notifications(notificationClass: MOD_NOTIFICATION) {
      notifications {
        date
        read
        ... on ModeratorNotification {
          text
          mod {
            id
            nickname
            __typename
          }
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}

fragment SharedFeedbackFields on Feedback {
  __typename
  appearsAsDeleted
  content
  date
  definitelyNotSpam
  deleted
  downVoted
  expandKey
  feedbackType
  focusUrl
  fromVideoAuthor
  key
  lowQualityScore
  notifyOnAnswer
  permalink
  relativeUrl
  replyCount
  restrictPosting
  showLowQualityNotice
  sumVotesIncremented
  upVoted
  focus {
    id
    kind
    relativeUrl
    translatedTitle
    __typename
  }
}
`,
  validateAiGuideToken: `query validateAiGuideToken($token: String!) {
  validateAiGuideToken(token: $token) {
    kaid
    email
    error {
      code
      __typename
    }
    __typename
  }
}
`,
  validateResetToken: `query validateResetToken($token: String!) {
  validateResetToken(token: $token) {
    error {
      code
      __typename
    }
    __typename
  }
}
`,
  verifyThirdPartyAuth: `query verifyThirdPartyAuth($oauthType: ThirdPartyOAuthType!, $accessToken: String!) {
  verifyThirdPartyAuth(oauthType: $oauthType, accessToken: $accessToken) {
    error {
      code
      __typename
    }
    email
    __typename
  }
}
`,
  videoByReadableId: `query videoByReadableId($videoId: String!) {
  video(id: $videoId) {
    id
    title
    youtubeId
    contentId
    __typename
  }
}
`,
  videoByYoutubeId: `query videoByYoutubeId($youtubeId: String!) {
  video: videoByYoutubeId(youtubeId: $youtubeId) {
    id
    assessmentItemTags
    contentKind
    defaultUrlPath
    kind
    nodeSlug
    slug
    sponsored
    title
    translatedDescription
    translatedTitle
    translatedCustomTitleTag
    authorNames
    authorList {
      name
      __typename
    }
    clarificationsEnabled
    creationDate
    dateAdded
    description
    descriptionHtml
    downloadUrls
    duration
    imageUrl
    kaUrl
    kaUserLicense
    keywords
    readableId
    relativeUrl
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
    __typename
  }
}
`,
  videoDataYoutubeId: `query videoDataYoutubeId($videoId: String!) {
  video: videoByYoutubeId(youtubeId: $videoId) {
    id
    title
    youtubeId
    contentId
    __typename
  }
}
`,
  videoEditorQuery: `query videoEditorQuery($contentId: String!) {
  contentEditingStatus {
    editingDisabled
    publishDisabled
    __typename
  }
  isEditableByCurrentUser(contentId: $contentId, contentKind: "Video")
  isPublishableByCurrentUser(contentId: $contentId, contentKind: "Video")
  videoRevisionById(id: $contentId) {
    ...VideoRevision
    __typename
  }
}
`,
  WhatNextPrompt: `query WhatNextPrompt($assignmentsPageSize: Int, $assignmentsOrderBy: AssignmentOrder!, $assignmentsDueAfter: DateTime!) {
  user {
    id
    kaid
    assignmentsPage(pageSize: $assignmentsPageSize, orderBy: $assignmentsOrderBy, dueAfter: $assignmentsDueAfter) {
      assignments {
        id
        contents {
          id
          contentKind
          translatedTitle
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
          __typename
        }
        courseId
        domainId
        dueDate
        exerciseConfig {
          itemPickerStrategy
          __typename
        }
        key
        lessonId
        unitId
        classroom {
          id
          cacheId
          signupCode
          __typename
        }
        itemCompletionStates {
          state
          bestScore {
            numCorrect
            numAttempted
            __typename
          }
          __typename
        }
        __typename
      }
      __typename
    }
    courseMasteryAssignments(isPast: false) {
      id
      dueDate
      currentUserProgressV2 {
        currentMasteryV2 {
          percentage
          pointsEarned
          pointsAvailable
          __typename
        }
        unitProgresses {
          ...UnitProgressFields
          __typename
        }
        __typename
      }
      topic {
        ...TopicFields
        __typename
      }
      __typename
    }
    classPickerCourseProgresses {
      lastWorkedOn
      topic {
        ...TopicFields
        __typename
      }
      unitProgresses {
        ...UnitProgressFields
        __typename
      }
      __typename
    }
    __typename
  }
}

fragment TopicFields on Topic {
  contentId: id
  id
  contentKind
  title: translatedTitle
  relativeUrl
  slug
  __typename
}

fragment UnitProgressFields on UnitProgress {
  lastWorkedOn
  currentMasteryV2 {
    percentage
    pointsEarned
    pointsAvailable
    __typename
  }
  topic {
    ...TopicFields
    __typename
  }
  __typename
}
`,
  WhatNextUnitDataQuery: `query WhatNextUnitDataQuery($unitID: String!) {
  unitById(id: $unitID) {
    id
    allOrderedChildren {
      ... on Lesson {
        id
        contentKind
        contentItems {
          id
          kind
          __typename
        }
        relativeUrl
        translatedTitle
        __typename
      }
      ... on TopicQuiz {
        id
        contentKind
        translatedTitle
        urlWithinCurationNode(ancestorId: $unitID)
        __typename
      }
      ... on TopicUnitTest {
        id
        contentKind
        translatedTitle
        urlWithinCurationNode(ancestorId: $unitID)
        __typename
      }
      __typename
    }
    __typename
  }
  user {
    id
    kaid
    contentItemProgresses(queryBy: {courseOrUnitId: $unitID}) {
      completionStatus
      content {
        id
        contentId
        contentKind
        urlWithinCurationNode(ancestorId: $unitID)
        translatedTitle
        __typename
      }
      ... on ExerciseItemProgress {
        updatedMasteryLevel
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  youtubeVideoInfoAddContent: `query youtubeVideoInfoAddContent($youtubeId: String!) {
  youtubeVideoInfo(youtubeId: $youtubeId) {
    description
    readableId: slug
    title
    duration
    keywords: keywordsString
    ... on YoutubeVideoInfoFromExistingContent {
      videoRevision {
        id
        __typename
      }
      kaUserLicense
      __typename
    }
    __typename
  }
}
`,
  contentSearchArticle: `query contentSearchArticle($contentId: String!) {
  articleById(id: $contentId) {
    ...contentSearchLearnableContent
    __typename
  }
}

fragment contentSearchLearnableContent on LearnableContent {
  id
  slug
  title
  listed
  defaultUrlPath
  __typename
}
`,
  contentSearchChallenge: `query contentSearchChallenge($contentId: String!) {
  challengeById(id: $contentId) {
    ...contentSearchLearnableContent
    __typename
  }
}

fragment contentSearchLearnableContent on LearnableContent {
  id
  slug
  title
  listed
  defaultUrlPath
  __typename
}
`,
  contentSearchCourse: `query contentSearchCourse($contentId: String!) {
  courseById(id: $contentId) {
    id
    slug
    title
    listed
    relativeUrl
    masteryEnabled
    linkedCourseStructure
    __typename
  }
}
`,
  contentSearchExercise: `query contentSearchExercise($contentId: String!) {
  exerciseById(id: $contentId) {
    ...contentSearchLearnableContent
    __typename
  }
}

fragment contentSearchLearnableContent on LearnableContent {
  id
  slug
  title
  listed
  defaultUrlPath
  __typename
}
`,
  contentSearchInteractive: `query contentSearchInteractive($contentId: String!) {
  interactiveById(id: $contentId) {
    ...contentSearchLearnableContent
    __typename
  }
}

fragment contentSearchLearnableContent on LearnableContent {
  id
  slug
  title
  listed
  defaultUrlPath
  __typename
}
`,
  contentSearchProject: `query contentSearchProject($contentId: String!) {
  projectById(id: $contentId) {
    ...contentSearchLearnableContent
    __typename
  }
}

fragment contentSearchLearnableContent on LearnableContent {
  id
  slug
  title
  listed
  defaultUrlPath
  __typename
}
`,
  contentSearchPrototype: `query contentSearchPrototype($queryString: String!) {
  contentSearch(queryString: $queryString) {
    results {
      contentKind
      contentId
      facets
      score
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
  contentSearchTalkthrough: `query contentSearchTalkthrough($contentId: String!) {
  talkthroughById(id: $contentId) {
    ...contentSearchLearnableContent
    __typename
  }
}

fragment contentSearchLearnableContent on LearnableContent {
  id
  slug
  title
  listed
  defaultUrlPath
  __typename
}
`,
  contentSearchVideo: `query contentSearchVideo($contentId: String!) {
  videoById(contentId: $contentId) {
    ...contentSearchLearnableContent
    __typename
  }
}

fragment contentSearchLearnableContent on LearnableContent {
  id
  slug
  title
  listed
  defaultUrlPath
  __typename
}
`,
  videoByReadableID: `query videoByReadableID($id: String!) {
  video(id: $id) {
    id
    assessmentItemTags
    contentKind
    defaultUrlPath
    kind
    nodeSlug
    slug
    sponsored
    title
    translatedDescription
    translatedTitle
    translatedCustomTitleTag
    authorNames
    authorList {
      name
      __typename
    }
    clarificationsEnabled
    creationDate
    dateAdded
    description
    descriptionHtml
    downloadUrls
    duration
    imageUrl
    kaUrl
    kaUserLicense
    keywords
    readableId
    relativeUrl
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
    __typename
  }
}
`,
  getEotCardDetails: `query getEotCardDetails($taskId: String!) {
  user {
    id
    exerciseData {
      practiceAttempt(taskId: $taskId) {
        id
        numAttempted
        numCorrect
        startingFpmLevel
        endingFpmLevel
        masteryLevelChange
        pointsEarned
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  getGradesProgress: `query getGradesProgress($filters: DistrictCourseProgressFilters!) {
  districtCourseProgressByGrade(filters: $filters) {
    dateInfo {
      from
      upTo
      lastUpdatedDate
      __typename
    }
    rows {
      gradeLevel {
        id
        name
        sortIndex
        __typename
      }
      info {
        activeLearners
        averageMinutes
        averageSkillsLeveledToProficient
        averageSkillsLeveledUp
        averageSkillsWorkedOn
        percent1to15
        percent15to30
        percent30plus
        attemptedPercent
        familiarPercent
        proficientPercent
        masteredPercent
        __typename
      }
      __typename
    }
    __typename
  }
}
`,
  guidePreferences: `query guidePreferences {
  user {
    id
    aiGuidePreferences {
      readingLevel
      __typename
    }
    __typename
  }
}
`,
}
