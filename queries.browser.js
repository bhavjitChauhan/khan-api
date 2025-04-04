queries = {
  activatedDistrictTeachers: `query activatedDistrictTeachers($districtId: ID!, $pageSize: Int, $cursor: Int) {
  activationReportByTeacher: activationReportByTeacherV2(
    districtId: $districtId
    pageSize: $pageSize
    cursor: $cursor
  ) {
    rows {
      isActivated
      teacherKaid
      teacherName
      __typename
    }
    __typename
  }
}`,
  ActiveDistrictQuery: `query ActiveDistrictQuery($districtId: ID!, $from: DateTime, $upTo: DateTime, $schoolIds: [ID!], $gradeLevels: [DistrictGradeLevel!], $courseSIS: [String!]) {
  districtById(districtId: $districtId) {
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
    activeCourseSISNumbers(
      from: $from
      upTo: $upTo
      schoolIds: $schoolIds
      gradeLevels: $gradeLevels
    )
    activeTeachers(
      from: $from
      upTo: $upTo
      schoolIds: $schoolIds
      gradeLevels: $gradeLevels
      courseSIS: $courseSIS
    ) {
      id
      kaid
      displayNameForTeacher
      __typename
    }
    __typename
  }
}`,
  ActivitySessionsQuery: `query ActivitySessionsQuery($studentKaid: String!, $endDate: Date, $startDate: Date, $courseType: String, $activityKind: String, $after: ID, $pageSize: Int) {
  user(kaid: $studentKaid) {
    id
    activityLog(
      endDate: $endDate
      startDate: $startDate
      courseType: $courseType
      activityKind: $activityKind
    ) {
      time {
        exerciseMinutes
        totalMinutes
        __typename
      }
      activitySessions(pageSize: $pageSize, after: $after) {
        sessions {
          ...ActivitySessionV1
          ... on MasteryActivitySession {
            correctCount
            problemCount
            skillLevels {
              ...ActivitySessionSkillLevelsV1
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

fragment ActivitySessionSkillLevelsV1 on SkillLevelChange {
  id
  before
  after
  __typename
}

fragment ActivitySessionV1 on ActivitySession {
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
}`,
  aiGuideEnrollmentsMeta: `query aiGuideEnrollmentsMeta {
  aiGuideEnrollmentsMeta {
    countEnabled
    countEnrolled
    __typename
  }
}`,
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
    aiGuideInvitationAcceptance(token: $token) {
      acceptedAt
      __typename
    }
    __typename
  }
}`,
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
}`,
  allFlaggedGuideThreads: `query allFlaggedGuideThreads($moderationCategory: ModerationCategory, $moderationReviewStatus: ModerationReviewStatus, $moderationFlagSeverity: ModerationFlagSeverityFilter, $severeModerationAlertSent: Boolean, $moderationScore: Float, $afterDate: DateTime, $beforeDate: DateTime, $page: Int, $limit: Int) {
  allFlaggedGuideThreads: allAiGuideThreads(
    moderationCategory: $moderationCategory
    moderationReviewStatus: $moderationReviewStatus
    moderationStatus: FLAGGED
    moderationFlagSeverity: $moderationFlagSeverity
    severeModerationAlertSent: $severeModerationAlertSent
    minModerationScore: $moderationScore
    afterDate: $afterDate
    beforeDate: $beforeDate
    page: $page
    limit: $limit
  ) {
    cursor
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
        aiGuideFlaggedInteractionsCount
        aiGuideAccessPlans {
          id
          isActive
          description
          enrollmentGroup
          enrollmentGroupReferenceID
          createdAt
          __typename
        }
        userDistrictInfos(includeDeleted: false) {
          id
          uuid
          district {
            id
            name
            __typename
          }
          __typename
        }
        __typename
      }
      summary
      lastUpdatedAt
      flagged
      flaggedCategories
      insights {
        languages
        __typename
      }
      interactions {
        id
        question
        englishTranslatedQuestion
        flagged
        flaggedCategories
        flaggedScores {
          harassment
          harassmentThreatening
          hate
          hateThreatening
          illicit
          illicitViolent
          selfHarm
          selfHarmInstructions
          selfHarmIntent
          sexual
          sexualMinors
          violence
          violenceGraphic
          kaOffensiveTerms
          __typename
        }
        traceID
        url
        pageTitle
        pageType
        moderationFlagDetails {
          flags {
            text {
              category
              severity
              __typename
            }
            textWithImages {
              category
              severity
              __typename
            }
            wordSpotting {
              category
              severity
              __typename
            }
            __typename
          }
          moderationResults {
            textResults {
              model
              result {
                categories {
                  category
                  value
                  __typename
                }
                categoryScores {
                  category
                  value
                  __typename
                }
                flagged
                __typename
              }
              __typename
            }
            textWithImagesResults {
              model
              result {
                categories {
                  category
                  value
                  __typename
                }
                categoryScores {
                  category
                  value
                  __typename
                }
                flagged
                __typename
              }
              __typename
            }
            wordSpottingResults
            __typename
          }
          __typename
        }
        imageMetadata {
          id
          llmSummary
          llmDetailedDescription
          llmPedagogicalContext
          llmContentWarningCheck
          llmImageType
          llmMood
          __typename
        }
        __typename
      }
      moderatorKAID
      moderatorNickname
      moderationReviewed
      lastModerationReviewedDate
      moderationFlagSeverity
      severeModerationAlertSent
      adminsNotifiedCount
      __typename
    }
    __typename
  }
}`,
  allStandardsForSet: `query allStandardsForSet($setId: String!) {
  setOfStandards(setId: $setId, region: "*") {
    id
    standards {
      id
      standardId
      description
      __typename
    }
    __typename
  }
}`,
  allTranslatableLocales: `query allTranslatableLocales {
  locales(includeEnglish: false) {
    id
    lang: kaLocale
    crowdinLocale
    displayName
    __typename
  }
}`,
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
  articleEditorRedirectQuery: `query articleEditorRedirectQuery($contentId: String!) {
  articleRevisionById(id: $contentId) {
    id
    slug
    sha
    __typename
  }
}`,
  articleForDiff: `query articleForDiff($sha: String!) {
  articleRevisionBySha(sha: $sha) {
    id
    sha
    perseusContent
    __typename
  }
}`,
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
}`,
  assessmentItemForDiff: `query assessmentItemForDiff($sha: String!) {
  assessmentItemRevisionsBySHAs(shas: [$sha]) {
    id
    itemShapeType
    itemData
    __typename
  }
}`,
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
}`,
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
}`,
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
}`,
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
}`,
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
}`,
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
}`,
  checkPromotion: `query checkPromotion($promoName: String!) {
  user {
    id
    promotion(promoName: $promoName)
    __typename
  }
}`,
  checkUsername: `query checkUsername($username: String!) {
  checkUsername(username: $username) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
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
}`,
  ClassDescriptorByClassCodeQuery: `query ClassDescriptorByClassCodeQuery($classCode: String!) {
  studentList(classCode: $classCode) {
    id
    cacheId
    descriptor
    __typename
  }
}`,
  ClassInfo: `query ClassInfo($classCode: String!) {
  joinByClassCodeInfo(classCode: $classCode) {
    id
    cacheId
    name
    signupCode
    includesCentrallyOwnedDistrictData
    __typename
  }
}`,
  ClassroomByCode: `query ClassroomByCode($classCode: String!) {
  studentList(classCode: $classCode) {
    cacheId
    coachKaid
    descriptor
    hasAssignments
    id
    name
    signupCode
    __typename
  }
}`,
  ClassroomByDescriptorQuery: `query ClassroomByDescriptorQuery($descriptor: String!) {
  classroomByDescriptor(descriptor: $descriptor) {
    id
    cacheId
    name
    key
    descriptor
    signupCode
    autoGenerated
    createdOn
    googleClassId
    googleClassName
    countStudents
    hasAssignments
    hasCourseMasteryGoals(filter: NO_KMAP)
    hasMasteryAssignments
    classroomDistrictInfo {
      id
      isNweaMapSynced
      courseSISName
      sisSubjct
      studentsHaveAccessToKhanmigo
      teacherUserDistrictInfo {
        id
        khanmigoShould
        __typename
      }
      school {
        id
        eduOrg {
          id
          name
          country
          postalCode
          administrativeAreaLevel1
          administrativeAreaLevel2
          locality
          __typename
        }
        __typename
      }
      isManuallyUnmarked
      district {
        id
        isCentrallyRostered
        schoolYearStart
        schoolYearEnd
        __typename
      }
      classWillBeRemovedInDays
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
    includesCentrallyOwnedDistrictData
    isChildAssignmentsClassroom
    __typename
  }
  teacher: user {
    id
    hasPartnershipSchoolAffiliation
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
    __typename
  }
}`,
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
}`,
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
}`,
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
}`,
  CoachAssignments: `query CoachAssignments($classDescriptor: String!, $assignmentFilters: CoachAssignmentFilters, $orderBy: AssignmentOrder!, $pageSize: Int, $after: ID) {
  classroom: classroomByDescriptor(descriptor: $classDescriptor) {
    id
    cacheId
    isK4dClassroom
    assignmentsPage(
      filters: $assignmentFilters
      orderBy: $orderBy
      after: $after
      pageSize: $pageSize
    ) {
      assignments {
        ...AssignmentFields
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

fragment AssignmentFields on Assignment {
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
}`,
  contentEditingStatus: `query contentEditingStatus {
  contentEditingStatus {
    editingEnabled
    publishEnabled
    __typename
  }
}`,
  contentEditingStatusQuery: `query contentEditingStatusQuery {
  contentEditingStatus {
    editingDisabled
    publishDisabled
    __typename
  }
}`,
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
}`,
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
}`,
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
}`,
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
}`,
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
}`,
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
}`,
  contentEditorPublishGetContentStageItem: `query contentEditorPublishGetContentStageItem($kaLocale: KALocale!, $contentKind: String!, $contentId: String!) {
  contentStageItem(
    kaLocale: $kaLocale
    contentKind: $contentKind
    contentId: $contentId
  ) {
    id
    sha
    sourceKaLocale
    isModified
    doNotPublish
    __typename
  }
}`,
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
}`,
  contentForDescriptors: `query contentForDescriptors($descriptors: [String]!) {
  contentForDescriptors(descriptors: $descriptors) {
    id
    sha
    __typename
  }
}`,
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
      lesson {
        ...LessonData
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
      lesson {
        ...LessonData
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
}

fragment LearnableContentData on LearnableContent {
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
}

fragment LearnableContentMetadata on LearnableContent {
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
}

fragment LessonData on Lesson {
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
}

fragment QuizMetadata on TopicQuiz {
  ...LearnableContentMetadata
  exerciseLength
  index
  timeEstimate {
    lowerBound
    upperBound
    __typename
  }
  __typename
}

fragment UnitData on Unit {
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
}

fragment UnitTestMetadata on TopicUnitTest {
  ...LearnableContentMetadata
  exerciseLength
  timeEstimate {
    lowerBound
    upperBound
    __typename
  }
  __typename
}`,
  ContentItemAssignmentStatusesQuery: `query ContentItemAssignmentStatusesQuery($classDescriptor: String!, $contentDescriptors: [String!]!) {
  classroom: classroomByDescriptor(descriptor: $classDescriptor) {
    id
    cacheId
    contentAssignmentStatuses: nonDraftAssignmentStatusesForContentDescriptors(
      contentDescriptors: $contentDescriptors
    )
    __typename
  }
}`,
  contentTabThreeLevelQuery: `query contentTabThreeLevelQuery($courseId: String!, $region: String!, $locale: String!) {
  courseById(id: $courseId) {
    id
    children: curatedChildren {
      ...CourseFieldsThreeLevels
      ...LessonAndChildrenFieldsThreeLevels
      ... on Unit {
        id
        description
        iconPath
        key
        kind
        mappedStandardIds(locale: $locale, region: $region)
        title: translatedTitle
        children: allOrderedChildren {
          __typename
          ...LearnableContentFieldsThreeLevels
          ...QuizAndTestFields
          ...LessonAndChildrenFieldsThreeLevels
        }
        __typename
      }
      __typename
    }
    courseChallenge {
      id
      contentId
      defaultUrlPath
      description
      kind
      mappedStandardIds(locale: $locale, region: $region)
      title: translatedTitle
      expectedDoNCount: exerciseLength
      __typename
    }
    domain: parent {
      id
      contentKind
      __typename
    }
    __typename
  }
}

fragment CourseFieldsThreeLevels on Course {
  ... on Course {
    id
    description
    iconPath
    key
    kind
    mappedStandardIds(locale: $locale, region: $region)
    title: translatedTitle
    __typename
  }
  __typename
}

fragment LearnableContentFieldsThreeLevels on LearnableContent {
  contentId
  description
  kind
  mappedStandardIds(locale: $locale, region: $region)
  nodeUrl: urlWithinTopic
  slug
  title: translatedTitle
  __typename
}

fragment LessonAndChildrenFieldsThreeLevels on Lesson {
  ... on Lesson {
    id
    description
    iconPath
    key
    kind
    mappedStandardIds(locale: $locale, region: $region)
    title: translatedTitle
    children {
      __typename
      ...LearnableContentFieldsThreeLevels
      ... on Video {
        duration
        imageUrl
        translatedYoutubeId
        youtubeId
        __typename
      }
      ... on Exercise {
        expectedDoNCount: exerciseLength(useDefault: true)
        problemTypeKind
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
}`,
  contentTabTwoLevelQuery: `query contentTabTwoLevelQuery($courseId: String!, $region: String!, $locale: String!) {
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
        mappedStandardIds(locale: $locale, region: $region)
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
            mappedStandardIds(locale: $locale, region: $region)
            title: translatedTitle
            __typename
          }
        }
        __typename
      }
      __typename
    }
    courseChallenge {
      id
      contentId
      defaultUrlPath
      description
      kind
      mappedStandardIds(locale: $locale, region: $region)
      title: translatedTitle
      expectedDoNCount: exerciseLength
      __typename
    }
    domain: parent {
      id
      contentKind
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
    mappedStandardIds(locale: $locale, region: $region)
    title: translatedTitle
    __typename
  }
  __typename
}

fragment LearnableContentFields on LearnableContent {
  contentId
  description
  kind
  mappedStandardIds(locale: $locale, region: $region)
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
    mappedStandardIds(locale: $locale, region: $region)
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
        problemTypeKind
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
}`,
  Content_GetRelatedAssessmentItems: `query Content_GetRelatedAssessmentItems($exerciseId: String) {
  exerciseById(id: $exerciseId) {
    id
    prerequisites
    assessmentItems {
      id
      itemShapeType
      itemData
      problemType
      __typename
    }
    __typename
  }
}`,
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
}`,
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
}`,
  courseEditorGetCourseEntity: `query courseEditorGetCourseEntity($id: String!) {
  courseById(id: $id) {
    id
    creationDate
    belongsToCourseId
    courseSnapshotId
    __typename
  }
}`,
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
}`,
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
      interimAssessmentType
      suggestedCompletionCriteria
      __typename
    }
    __typename
  }
}`,
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
      mappedStandards(region: "*") {
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
      interimAssessmentType
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
}`,
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
}`,
  courseEditorGetFolderCourses: `query courseEditorGetFolderCourses($ids: [String!]!) {
  courses(ids: $ids) {
    id
    contentId
    title
    importable
    allowedExerciseTypes
    __typename
  }
}`,
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
}`,
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
}`,
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
}`,
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
}`,
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
    mappedStandards(region: "*") {
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
      interimAssessmentType
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
}`,
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
}`,
  courseEditorGetPublishedIdentity: `query courseEditorGetPublishedIdentity($descriptors: [String!]!) {
  contentForDescriptors(descriptors: $descriptors) {
    id
    sha
    slug
    listed
    sourceLanguage
    title
    ... on Exercise {
      interimAssessmentType
      suggestedCompletionCriteria
      __typename
    }
    __typename
  }
}`,
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
}`,
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
}`,
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
}`,
  courseEditorGetPublishedTitlesForCurationIDs: `query courseEditorGetPublishedTitlesForCurationIDs($ids: [String!]!) {
  topicsById(ids: $ids) {
    id
    contentKind
    title
    translatedTitle
    __typename
  }
}`,
  courseEditorGetPublishedTitlesForDescriptors: `query courseEditorGetPublishedTitlesForDescriptors($descriptors: [String!]!) {
  contentForDescriptors(descriptors: $descriptors) {
    id
    contentKind
    title
    translatedTitle
    __typename
  }
}`,
  courseEditorGetPublishedTopic: `query courseEditorGetPublishedTopic($contentId: String!) {
  topicById(id: $contentId) {
    id
    kind
    creationDate
    relativeUrl
    __typename
  }
}`,
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
}`,
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
}`,
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
}`,
  courseEditorGetPublishedTopicQuiz: `query courseEditorGetPublishedTopicQuiz($slug: String!) {
  topicQuiz(slug: $slug) {
    id
    kind
    creationDate
    defaultUrlPath
    __typename
  }
}`,
  courseEditorGetPublishedTopicSlugById: `query courseEditorGetPublishedTopicSlugById($id: String!) {
  topicById(id: $id) {
    id
    slug
    __typename
  }
}`,
  courseEditorGetPublishedTopicStandardIds: `query courseEditorGetPublishedTopicStandardIds($slug: String!, $locale: String!) {
  topic(slug: $slug) {
    id
    mappedStandardIds(locale: $locale)
    __typename
  }
}`,
  courseEditorGetPublishedTopicsTitles: `query courseEditorGetPublishedTopicsTitles($ids: [String!]!) {
  topicsById(ids: $ids) {
    id
    title
    __typename
  }
}`,
  courseEditorGetPublishedTopicUnitTest: `query courseEditorGetPublishedTopicUnitTest($slug: String!) {
  topicUnitTest(slug: $slug) {
    id
    kind
    creationDate
    defaultUrlPath
    __typename
  }
}`,
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
}`,
  courseEditorGetStatus: `query courseEditorGetStatus {
  contentEditingStatus {
    publishEnabled
    __typename
  }
}`,
  courseEditorGetSyncOperationsSummary: `query courseEditorGetSyncOperationsSummary($sourceId: String!, $sourceSnapshotId: Int!, $targetId: String!, $targetOperationId: Int!) {
  syncOperationsSummary(
    sourceId: $sourceId
    sourceSnapshotId: $sourceSnapshotId
    targetId: $targetId
    targetOperationId: $targetOperationId
  ) {
    type
    count
    __typename
  }
}`,
  CourseEditorIsLinkedCourseInSync: `query CourseEditorIsLinkedCourseInSync($sourceId: String!, $sourceSnapshotId: Int!, $targetId: String!, $targetOperationId: Int!) {
  isLinkedCourseInSync(
    sourceId: $sourceId
    sourceSnapshotId: $sourceSnapshotId
    targetId: $targetId
    targetOperationId: $targetOperationId
  )
}`,
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
    ... on ExerciseRevision {
      interimAssessmentType
      __typename
    }
    __typename
  }
}`,
  courseEditorSearchPublished: `query courseEditorSearchPublished($query: String!, $contentKinds: [String]) {
  searchPage(
    query: $query
    contentKinds: $contentKinds
    numResults: 125
    region: "*"
  ) {
    results {
      contentKind: kind
      contentId
      learnableContent {
        id
        title
        translatedTitle
        ... on Exercise {
          interimAssessmentType
          __typename
        }
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
}`,
  CourseEditor_MobileRegions: `query CourseEditor_MobileRegions {
  curricula: curriculums {
    key
    name
    country
    region
    __typename
  }
}`,
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
}`,
  CourseMenuEditor_ContentStageItems: `query CourseMenuEditor_ContentStageItems($kaLocale: KALocale!, $descriptors: [String!]!) {
  contentStageItems(kaLocale: $kaLocale, contentDescriptors: $descriptors) {
    id
    contentId
    isModified
    __typename
  }
}`,
  CourseMenuEditor_DefaultCourseMenu: `query CourseMenuEditor_DefaultCourseMenu($curriculum: String!) {
  defaultCourseMenu: learnMenuTopics(curriculum: $curriculum) {
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
}`,
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
}`,
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
}`,
  csvReportStatus: `query csvReportStatus($kaid: String!, $partnershipID: String, $districtID: String) {
  getLastNAdminReportsForUser(
    kaid: $kaid
    partnershipID: $partnershipID
    districtID: $districtID
    topNResults: 1
  ) {
    adminReports {
      id
      kaid
      status
      blobCreatedAt
      blobExpiresAt
      reportType
      startDate
      endDate
      selectedNode {
        ... on MetaDistrict {
          id
          name
          levelHeight
          hasCentralRostering
          children {
            ... on MetaDistrict {
              id
              __typename
            }
            ... on District {
              id
              __typename
            }
            __typename
          }
          __typename
        }
        ... on District {
          id
          name
          levelHeight
          isCentrallyRostered
          activeGrades {
            id
            name
            sortIndex
            __typename
          }
          schools {
            id
            __typename
          }
          __typename
        }
        __typename
      }
      children {
        ... on MetaDistrict {
          id
          name
          levelHeight
          __typename
        }
        ... on District {
          id
          name
          levelHeight
          __typename
        }
        ... on School {
          id
          name
          __typename
        }
        __typename
      }
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
}`,
  curationNodePublishedInfo: `query curationNodePublishedInfo($contentId: String!) {
  publishedInfo: topicById(id: $contentId) {
    id
    relativeUrl
    creationDate
    __typename
  }
}`,
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
}`,
  curriculumsQuery: `query curriculumsQuery {
  curriculums {
    country
    key
    name
    region
    __typename
  }
}`,
  DevadminListAuthors: `query DevadminListAuthors {
  allAuthorOptions {
    id
    name
    __typename
  }
}`,
  digitalSatAuthTransfer: `query digitalSatAuthTransfer {
  user {
    id
    transferAuthToken
    __typename
  }
}`,
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
}`,
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
}`,
  DistrictActivationByGradeLevelContainerUsingNewService: `query DistrictActivationByGradeLevelContainerUsingNewService($districtId: ID!, $schoolIds: [ID!]) {
  activationReportByGradeLevel(districtId: $districtId, schoolIds: $schoolIds) {
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
      numStudentsStartedAnActivity
      studentTargetStatus
      teacherTargetStatus
      __typename
    }
    updatedAt
    totalRow {
      numStudentsTotal
      numStudentsActivated
      numTeachersTotal
      numTeachersActivated
      numStudentsStartedAnActivity
      studentTargetStatus
      teacherTargetStatus
      __typename
    }
    target {
      percentage
      __typename
    }
    __typename
  }
}`,
  DistrictActivationBySchoolContainerUsingNewService: `query DistrictActivationBySchoolContainerUsingNewService($districtId: ID!, $schoolIds: [ID!]) {
  activationReportBySchool(districtId: $districtId, schoolIds: $schoolIds) {
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
}`,
  DistrictActivationByTeacherContainer: `query DistrictActivationByTeacherContainer($districtId: ID!, $schoolIds: [ID!], $teacherIDs: [ID!], $pageSize: Int, $cursor: Int) {
  activationReportByTeacher: activationReportByTeacherV2(
    districtId: $districtId
    schoolIds: $schoolIds
    teacherIDs: $teacherIDs
    pageSize: $pageSize
    cursor: $cursor
  ) {
    rows {
      teacherId
      teacherName
      numStudentsTotal
      numStudentsActivated
      isActivated
      numStudentsStartedAnActivity
      studentTargetStatus
      __typename
    }
    totalCount
    updatedAt
    target {
      percentage
      __typename
    }
    totalRow {
      numStudentsTotal
      __typename
    }
    __typename
  }
}`,
  DistrictGradeLevelsQuery: `query DistrictGradeLevelsQuery {
  userFacingGradeLevels {
    id
    name
    __typename
  }
}`,
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
        domainId: parentTopicId
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
}`,
  districtHomepageProgress: `query districtHomepageProgress($districtID: String!, $schoolIDs: [ID!], $mapOnly: Boolean) {
  districtHomepage(districtID: $districtID, schoolIDs: $schoolIDs) {
    top5CourseSchool {
      course {
        id
        title
        domainId: parentTopicId
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
}`,
  DistrictPrimaryOfferingAsTeacher: `query DistrictPrimaryOfferingAsTeacher {
  districtPrimaryOfferingAsTeacher
}`,
  DistrictQuery: `query DistrictQuery($districtID: ID!) {
  districtById(districtId: $districtID) {
    id
    partnership {
      ... on MetaDistrict {
        id
        __typename
      }
      ... on District {
        id
        __typename
      }
      __typename
    }
    name
    rosterSource
    isTest
    hasKhanmigo
    isKmapDistrict
    isK4dDistrict
    isCentrallyRostered
    region
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
    schoolYearStart
    schoolYearEnd
    kaLocale
    ancestors {
      id
      levelHeight
      name
      __typename
    }
    countryCode
    levelHeight
    goal {
      type
      createdBy {
        id
        kaid
        __typename
      }
      __typename
    }
    schoolYearStart
    __typename
  }
}`,
  districts: `query districts($filter: String!, $excludeTeacherDirected: Boolean!) {
  districts(filter: $filter, excludeTeacherDirected: $excludeTeacherDirected) {
    id
    name
    rosterID
    rosterSource
    nweaID
    ncesID
    rosterSyncingEnabled
    sendActivationEmails
    rosterDistrictAdmins
    deletedAt
    isDowngraded
    isTest
    onlySevereAIModeration
    isKmapDistrict
    isK4dDistrict
    isOldNWEA
    lastRostered
    lastTestPull
    goLiveDate
    region
    countryCode
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
    hasKhanmigo
    khanmigoPreference
    khanmigoIncludeNonStudents
    khanmigoIncludeStudents
    khanmigoStudents
    khanmigoAdmins
    khanmigoTeachers
    khanmigoTotal
    khanmigoUDIsShould
    khanmigoUDIsHave
    khanmigoTokenCapacity
    khanmigoTokenUsage
    khanmigoStart
    khanmigoEnd
    hasAssessments
    researchOptOut
    hasLMSConnect
    __typename
  }
}`,
  DistrictSkillsMAPProgressQuery: `query DistrictSkillsMAPProgressQuery($districtID: String!, $filters: DistrictSkillsMAPProgressFilters!, $region: String!) {
  districtSkillsMAPProgress(districtID: $districtID, filters: $filters) {
    totalStudents
    numSkillsWorkedOn
    rows {
      exercise {
        id
        title
        mappedStandards(region: $region) {
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
    mapGrowthTest {
      key
      __typename
    }
    learnableContentPage(
      pageParams: {pageSize: 1000, after: 0, contentKinds: [EXERCISE]}
    ) {
      contents {
        exerciseID: id
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  DistrictSkillsProgressQuery: `query DistrictSkillsProgressQuery($districtID: String!, $filters: DistrictSkillsProgressFilters!, $courseID: String!, $region: String!) {
  districtSkillsProgress(districtID: $districtID, filters: $filters) {
    totalStudents
    numSkillsWorkedOn
    rows {
      exercise {
        id
        title: translatedTitle
        mappedStandards(region: $region) {
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
    title: translatedTitle
    unitChildren {
      unitID: id
      unitTitle: translatedTitle
      learnableContentPage(
        pageParams: {pageSize: 1000, after: 0, contentKinds: [EXERCISE]}
      ) {
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
}`,
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
}`,
  DistrictStudentsWithSkillProgressQuery: `query DistrictStudentsWithSkillProgressQuery($districtID: String!, $filters: DistrictStudentsWithSkillProgressFilters, $masteryLevel: UpdatedMasteryLevel!, $skillId: String!) {
  districtStudentsWithSkillProgress(
    districtID: $districtID
    masteryLevel: $masteryLevel
    skillId: $skillId
    filters: $filters
  ) {
    id
    kaid
    displayNameForTeacher
    __typename
  }
}`,
  districtTeachers: `query districtTeachers($districtId: ID!, $pageSize: Int, $cursor: Int) {
  activationReportByTeacher: activationReportByTeacherV2(
    districtId: $districtId
    pageSize: $pageSize
    cursor: $cursor
  ) {
    rows {
      teacherId
      teacherName
      __typename
    }
    __typename
  }
}`,
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
      status
      failureReason
      failureStacktrace
      stackdriverLogUrl
      __typename
    }
    __typename
  }
}`,
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
}`,
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
}`,
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
}`,
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
}`,
  EduOrgsInfo: `query EduOrgsInfo($postalCode: String!) {
  eduOrganizations(postalCode: $postalCode) {
    keyId: id
    name
    postalCode
    locationDisplayText: location
    __typename
  }
}`,
  exerciseEditorGetAllArticleRevisions: `query exerciseEditorGetAllArticleRevisions {
  allArticleRevisions {
    id
    slug
    title
    __typename
  }
}`,
  exerciseEditorGetAllExerciseRevisions: `query exerciseEditorGetAllExerciseRevisions {
  allExerciseRevisions {
    id
    slug
    title
    __typename
  }
}`,
  exerciseEditorGetAllVideoRevisions: `query exerciseEditorGetAllVideoRevisions {
  allVideoRevisions {
    id
    slug
    title
    __typename
  }
}`,
  ExtractPerseusStrings: `query ExtractPerseusStrings($perseusJson: String!) {
  extractPerseusStrings(perseusJson: $perseusJson)
}`,
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
}`,
  feedbackForAuthor: `query feedbackForAuthor($kaid: String!, $feedbackType: FeedbackType!, $cursor: String, $limit: Int, $sort: Int) {
  feedbackForAuthor(
    kaid: $kaid
    feedbackType: $feedbackType
    cursor: $cursor
    limit: $limit
    sort: $sort
  ) {
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
}`,
  feedbackQuery: `query feedbackQuery($topicId: String!, $focusKind: String!, $cursor: String, $limit: Int, $feedbackType: FeedbackType!, $currentSort: Int, $qaExpandKey: String) {
  feedback(
    focusId: $topicId
    cursor: $cursor
    limit: $limit
    feedbackType: $feedbackType
    focusKind: $focusKind
    sort: $currentSort
    qaExpandKey: $qaExpandKey
    answersLimit: 1
  ) {
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
}`,
  FetchArticleContentData: `query FetchArticleContentData($path: String!, $queryParams: String!, $isModal: Boolean, $followRedirects: Boolean, $countryCode: String!) {
  contentJson: curatedArticleContentLibraryJson(
    path: $path
    queryParams: $queryParams
    isModal: $isModal
    followRedirects: $followRedirects
    countryCode: $countryCode
  )
}`,
  FetchContentData: `query FetchContentData($path: String!, $queryParams: String!, $isModal: Boolean, $followRedirects: Boolean, $countryCode: String!) {
  contentJson: curatedContentLibraryJson(
    path: $path
    queryParams: $queryParams
    isModal: $isModal
    followRedirects: $followRedirects
    countryCode: $countryCode
  )
}`,
  FetchExerciseContentData: `query FetchExerciseContentData($path: String!, $queryParams: String!, $isModal: Boolean, $followRedirects: Boolean, $countryCode: String!) {
  contentJson: curatedExerciseContentLibraryJson(
    path: $path
    queryParams: $queryParams
    isModal: $isModal
    followRedirects: $followRedirects
    countryCode: $countryCode
  )
}`,
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
}`,
  FetchProgrammingContentData: `query FetchProgrammingContentData($path: String!, $queryParams: String!, $isModal: Boolean, $followRedirects: Boolean, $countryCode: String!) {
  contentJson: curatedProgrammingContentLibraryJson(
    path: $path
    queryParams: $queryParams
    isModal: $isModal
    followRedirects: $followRedirects
    countryCode: $countryCode
  )
}`,
  FetchVideoContentData: `query FetchVideoContentData($path: String!, $queryParams: String!, $isModal: Boolean, $followRedirects: Boolean, $countryCode: String!) {
  contentJson: curatedVideoContentLibraryJson(
    path: $path
    queryParams: $queryParams
    isModal: $isModal
    followRedirects: $followRedirects
    countryCode: $countryCode
  )
}`,
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
}`,
  findUsersByIp: `query findUsersByIp($ip: String!, $usersCursor: ID, $pageSize: Int) {
  usersSearchByIpPage(ip: $ip, after: $usersCursor, pageSize: $pageSize) {
    users {
      ...UserFields
      ...FilterFields
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

fragment FilterFields on User {
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
}`,
  FlaggedFeedback: `query FlaggedFeedback($feedbackType: FeedbackType, $page: Int, $sort: ModerationSortOrder, $limit: Int, $kaLocale: String) {
  flaggedFeedback(
    feedbackType: $feedbackType
    page: $page
    sort: $sort
    limit: $limit
    kaLocale: $kaLocale
  ) {
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
}`,
  FlaggedPrograms: `query FlaggedPrograms($page: Int, $sort: ModerationSortOrder, $limit: Int) {
  flaggedPrograms(page: $page, sort: $sort, limit: $limit) {
    programs {
      programID: id
      key
      appearsAsDeleted
      codeFormat
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
}`,
  footerDomainsQuery: `query footerDomainsQuery($region: String) {
  footerDomains(region: $region) {
    translatedTitle
    href
    __typename
  }
}`,
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
    hasUserOptedOutFromABTesting
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
    isEmailVerified
    isTotpTwoFactorEnabled
    nickname
    username
    birthdate
    userLanguage
    region
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
    includesCentrallyOwnedDistrictData
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
  sessionHash
}`,
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
    donateURL
    __typename
  }
}`,
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
}`,
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
}`,
  getAllDonationAsks: `query getAllDonationAsks {
  allDonationAsks {
    id
    active
    __typename
  }
}`,
  GetAllFolders: `query GetAllFolders {
  allFolders {
    id
    kaLocale
    name
    courseIds
    __typename
  }
}`,
  getAllSetsOfStandards: `query getAllSetsOfStandards($locale: String, $domain: String) {
  sets: allSetsOfStandards(locale: $locale, domain: $domain, region: "*") {
    id
    name
    shortName
    __typename
  }
}`,
  getAllStandardsForContent: `query getAllStandardsForContent($contentDescriptor: String!, $locale: String!) {
  standards: standardMappingsForContent(
    contentDescriptor: $contentDescriptor
    region: "*"
    locale: $locale
  ) {
    id
    standardId
    setId
    __typename
  }
}`,
  getAllSubject: `query getAllSubject($region: String!) {
  domains: studentListTopics(region: $region) {
    subjects: topics {
      id
      slug
      __typename
    }
    __typename
  }
}`,
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
}`,
  getArticleForTeacherCampaignExtraCredit: `query getArticleForTeacherCampaignExtraCredit($slug: String!) {
  article(slug: $slug) {
    nodeUrl: urlWithinTopic
    title
    kind
    contentId: id
    slug
    __typename
  }
}`,
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
}`,
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
}`,
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
}`,
  GetAuthors: `query GetAuthors {
  allAuthorOptions {
    id
    name
    key
    __typename
  }
}`,
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
}`,
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
      grassrootsKhanmigoIneligibleReasons
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
      grassrootsKhanmigoIneligibleReasons
      __typename
    }
    __typename
  }
}`,
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
}`,
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
}`,
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
      topics {
        id
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  getClassList: `query getClassList {
  coach: user {
    id
    nickname
    studentLists: coachedStudentLists {
      name
      id
      signupCode
      cacheId
      key
      descriptor
      autoGenerated
      createdOn
      googleClassId
      googleClassName
      countStudents
      hasAssignments
      hasCourseMasteryGoals(filter: NO_KMAP)
      hasMasteryAssignments(filters: NO_KMAP)
      classroomDistrictInfo {
        id
        isNweaMapSynced
        courseSISName
        studentUserDistrictInfos {
          id
          isActivated
          __typename
        }
        district {
          id
          isCentrallyRostered
          schoolYearStart
          schoolYearEnd
          __typename
        }
        school {
          id
          eduOrg {
            id
            name
            country
            postalCode
            administrativeAreaLevel1
            administrativeAreaLevel2
            locality
            __typename
          }
          __typename
        }
        isManuallyUnmarked
        classWillBeRemovedInDays
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
      isKmapClassroom
      isCleverLibrarySynced
      includesCentrallyOwnedDistrictData
      invitations {
        id
        accepted
        __typename
      }
      coachRequests {
        id
        __typename
      }
      isChildAssignmentsClassroom
      __typename
    }
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
    hasPartnershipSchoolAffiliation
    hasAccessToAIGuideTeacher
    affiliationCountryCode
    isAIGuideEnabled
    isKmapTeacher
    isK4dTeacher
    includesCentrallyOwnedDistrictData
    userDistrictInfos {
      id
      activatedAt
      rosterSource
      primaryRole
      district {
        id
        name
        schools(administeredOnly: false) {
          id
          __typename
        }
        __typename
      }
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
}`,
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
      includesCentrallyOwnedDistrictData
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
    includesCentrallyOwnedDistrictData
    isK4dClassroom
    classroomDistrictInfo {
      id
      courseSISName
      sisSubjct
      __typename
    }
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
}`,
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
}`,
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
      hasKADAiGuideEnrolledStudents
      isK4dClassroom
      __typename
    }
    __typename
  }
}`,
  getClassSettings: `query getClassSettings($classDescriptor: String!) {
  classroom: classroomByDescriptor(descriptor: $classDescriptor) {
    id
    cacheId
    founder: coach {
      id
      kaid
      hasPartnershipSchoolAffiliation
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
      userDistrictInfos {
        id
        rosterSource
        district {
          id
          name
          __typename
        }
        __typename
      }
      __typename
    }
    descriptor
    name
    key
    signupCode
    countStudents
    classroomDistrictInfo {
      id
      name
      rosterSource
      teacherUserDistrictInfoIDs {
        id
        displayNameForTeacher
        kaid
        __typename
      }
      school {
        id
        eduOrg {
          id
          name
          country
          postalCode
          administrativeAreaLevel1
          administrativeAreaLevel2
          locality
          __typename
        }
        __typename
      }
      isManuallyUnmarked
      __typename
    }
    allTeachers {
      id
      kaid
      __typename
    }
    googleClassId
    googleClassName
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
      masteryEnabled
      __typename
    }
    includesCentrallyOwnedDistrictData
    isK4dClassroom
    isChildAssignmentsClassroom
    __typename
  }
}`,
  getCoach: `query getCoach {
  coach: user {
    id
    nickname
    __typename
  }
  user {
    id
    tosForFormalTeacherStatus
    includesCentrallyOwnedDistrictData
    userDistrictInfos {
      id
      rosterSource
      district {
        id
        name
        __typename
      }
      __typename
    }
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
}`,
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
        assessmentItemsForAssessment {
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
  ... on LearnableCourseChallenge {
    translatedTitle
    exerciseLength
    __typename
  }
  __typename
}`,
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
}`,
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
  contentAssignmentChanges(
    assignmentID: $assignmentID
    maxNumChanges: $maxNumChanges
  ) {
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
}`,
  getContentAssignmentsForCoachAsDevadmin: `query getContentAssignmentsForCoachAsDevadmin($after: ID, $assignmentFilters: CoachAssignmentFilters, $classDescriptor: String!, $orderBy: AssignmentOrder!, $pageSize: Int) {
  classroom: classroomByDescriptor(descriptor: $classDescriptor) {
    id
    cacheId
    assignmentsPage(
      filters: $assignmentFilters
      orderBy: $orderBy
      after: $after
      pageSize: $pageSize
    ) {
      assignments {
        id
        createdDate
        assignedDate
        updatedDate
        dueDate
        startDate
        title
        contents {
          id
          contentDescriptor
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
}`,
  getContentForStandard: `query getContentForStandard($set: String!, $region: String, $standard: String) {
  contentForStandardMappings(setId: $set, region: $region, standardId: $standard)
}`,
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
}`,
  getCourse: `query getCourse($id: String!) {
  courseById(id: $id) {
    id
    relativeUrl
    translatedTitle
    __typename
  }
}`,
  getCourseMasteryAssignmentChangesQuery: `query getCourseMasteryAssignmentChangesQuery($assignmentID: ID!, $maxNumChanges: Int!) {
  courseMasteryAssignmentChanges(
    assignmentID: $assignmentID
    maxNumChanges: $maxNumChanges
  ) {
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
}`,
  getCourseMasteryAssignmentsForCoachAsDevAdmin: `query getCourseMasteryAssignmentsForCoachAsDevAdmin($descriptor: String!) {
  classroomByDescriptor(descriptor: $descriptor) {
    id
    cacheId
    studentKaidsAndNicknames {
      kaid
      coachNickname
      __typename
    }
    courseMasteryAssignments: subjectMasteryAssignments(
      activeFilter: ACTIVE_OR_ARCHIVED
    ) {
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
}`,
  getCourseProgress: `query getCourseProgress($filters: DistrictCourseProgressFilters!, $getKmapTopics: Boolean!) {
  districtCourseProgressByCourse(filters: $filters) {
    dateInfo {
      from
      upTo
      lastUpdatedDate
      __typename
    }
    learningMinutesTarget {
      minutesPerWeek
      __typename
    }
    skillsLeveledUp {
      skillsPerWeek
      __typename
    }
    skillsToProficient {
      skillsPerWeek
      __typename
    }
    rows {
      course {
        id
        title: translatedTitle
        isKmap
        __typename
      }
      info {
        activeLearners
        totalLearners
        averageMinutes
        averageSkillsLeveledToProficient
        averageSkillsLeveledUp
        averageSkillsWorkedOn
        percent0
        percent1to15
        percent15to30
        percent30plus
        attemptedPercent
        familiarPercent
        proficientPercent
        masteredPercent
        minutesTargetStatus
        skillsLeveledUpTargetStatus
        skillsToProficientTargetStatus
        __typename
      }
      __typename
    }
    __typename
  }
  kmapTopics @include(if: $getKmapTopics) {
    id
    title
    bandKey
    strandKey
    __typename
  }
}`,
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
        classroomDistrictInfo {
          id
          name
          __typename
        }
        __typename
      }
      info {
        activeLearners
        totalLearners
        averageMinutes
        averageSkillsLeveledToProficient
        averageSkillsLeveledUp
        averageSkillsWorkedOn
        percent0
        percent1to15
        percent15to30
        percent30plus
        attemptedPercent
        familiarPercent
        proficientPercent
        masteredPercent
        minutesTargetStatus
        skillsLeveledUpTargetStatus
        skillsToProficientTargetStatus
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  getCourseProgressBySchool: `query getCourseProgressBySchool($filters: DistrictCourseProgressFilters!, $courseID: String) {
  districtCourseProgressBySchool(filters: $filters, courseID: $courseID) {
    dateInfo {
      from
      upTo
      lastUpdatedDate
      __typename
    }
    learningMinutesTarget {
      minutesPerWeek
      __typename
    }
    skillsLeveledUp {
      skillsPerWeek
      __typename
    }
    skillsToProficient {
      skillsPerWeek
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
        totalLearners
        averageMinutes
        averageSkillsLeveledToProficient
        averageSkillsLeveledUp
        averageSkillsWorkedOn
        percent0
        percent1to15
        percent15to30
        percent30plus
        attemptedPercent
        familiarPercent
        proficientPercent
        masteredPercent
        minutesTargetStatus
        skillsLeveledUpTargetStatus
        skillsToProficientTargetStatus
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  getCourseProgressByStudent: `query getCourseProgressByStudent($filters: DistrictCourseProgressFilters!, $classroomDescriptor: String!, $courseID: String!, $onlyStudentsWhoWorkedOnTheCourseNotForAClass: Boolean) {
  districtCourseProgressByStudent(
    filters: $filters
    courseID: $courseID
    classroomDescriptor: $classroomDescriptor
    onlyStudentsWhoWorkedOnTheCourseNotForAClass: $onlyStudentsWhoWorkedOnTheCourseNotForAClass
  ) {
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
        totalLearners
        averageMinutes
        averageSkillsLeveledToProficient
        averageSkillsLeveledUp
        averageSkillsWorkedOn
        percent0
        percent1to15
        percent15to30
        percent30plus
        attemptedPercent
        familiarPercent
        proficientPercent
        masteredPercent
        minutesTargetStatus
        skillsLeveledUpTargetStatus
        skillsToProficientTargetStatus
        __typename
      }
      __typename
    }
    __typename
  }
}`,
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
}`,
  getCustomRedirect: `query getCustomRedirect($redirectFrom: String!) {
  customRedirect(redirectFrom: $redirectFrom) {
    id
    redirectTo
    __typename
  }
}`,
  getCustomRedirects: `query getCustomRedirects {
  customRedirects {
    id
    redirectFrom
    redirectTo
    __typename
  }
}`,
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
      includesCentrallyOwnedDistrictData
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
}`,
  getDatastoreUserData: `query getDatastoreUserData($examGroupId: String!, $kaid: String) {
  examGroup(examGroupId: $examGroupId) {
    id
    datastoreUserData(kaid: $kaid)
    __typename
  }
}`,
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
}`,
  getDescriptionForStandard: `query getDescriptionForStandard($region: String!, $setId: String!, $standardId: String!) {
  publishedStandard(region: $region, setId: $setId, standardId: $standardId) {
    id
    description
    __typename
  }
}`,
  getDistrictCourses: `query getDistrictCourses($districtId: ID!) {
  district: districtById(districtId: $districtId) {
    id
    activeCourseSISNumbers
    __typename
  }
}`,
  getDistrictGrades: `query getDistrictGrades($districtId: ID!) {
  district: districtById(districtId: $districtId) {
    id
    activeGrades {
      id
      sortIndex
      name
      __typename
    }
    __typename
  }
}`,
  getDistrictInstructionalAreaQuery: `query getDistrictInstructionalAreaQuery {
  kmapTopics {
    id
    key
    instructionalAreaName: strand
    instructionalAreaKey: strandKey
    mapGrowthTest {
      key
      __typename
    }
    __typename
  }
}`,
  getDistrictInternalAdmins: `query getDistrictInternalAdmins($districtID: String!) {
  getDistrictInternalAdmins(districtID: $districtID) {
    id
    kaid
    districtProvidedFullName
    districtProvidedEmail
    __typename
  }
}`,
  getDistrictSchools: `query getDistrictSchools($districtId: ID!) {
  district: districtById(districtId: $districtId) {
    id
    schools {
      id
      name
      __typename
    }
    __typename
  }
}`,
  getDistrictSchoolsAndType: `query getDistrictSchoolsAndType($districtId: ID!) {
  district: districtById(districtId: $districtId) {
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
}`,
  getDistrictTeachers: `query getDistrictTeachers($districtId: ID!, $pageSize: Int, $cursor: Int) {
  activationReportByTeacher: activationReportByTeacherV2(
    districtId: $districtId
    pageSize: $pageSize
    cursor: $cursor
  ) {
    rows {
      isActivated
      teacherKaid
      teacherName
      __typename
    }
    __typename
  }
}`,
  getDomainsForStandardsEditor: `query getDomainsForStandardsEditor {
  allDomains {
    id
    contentId: id
    slug
    translatedTitle
    kind
    __typename
  }
}`,
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
    donateURL
    __typename
  }
}`,
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
}`,
  getEduOrganizationsForRegion: `query getEduOrganizationsForRegion($country: String!, $postalCode: String, $administrativeAreaLevel1: String, $administrativeAreaLevel2: String, $locality: String, $partnershipOnly: Boolean) {
  eduOrganizationsForRegion(
    filters: {country: $country, postalCode: $postalCode, administrativeAreaLevel1: $administrativeAreaLevel1, administrativeAreaLevel2: $administrativeAreaLevel2, locality: $locality, partnershipOnly: $partnershipOnly}
  ) {
    id
    name
    country
    postalCode
    administrativeAreaLevel1
    administrativeAreaLevel2
    locality
    __typename
  }
}`,
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
}`,
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
    hasClasses
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
  streaksEmailSubscription {
    token
    checked
    __typename
  }
  __typename
}`,
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
    hasClasses
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
  streaksEmailSubscription {
    token
    checked
    __typename
  }
  __typename
}`,
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
}`,
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
}`,
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
}`,
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
}`,
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
    interimAssessmentType
    __typename
  }
  user {
    id
    canEditInterimAssessments: hasPermission(
      name: "can_edit_interim_assessments"
      scope: ANY_ON_CURRENT_LOCALE
    )
    __typename
  }
}`,
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
}`,
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
}`,
  getFlag: `query getFlag($name: String!) {
  flag(name: $name) {
    id
    name
    isUserPassing
    __typename
  }
}`,
  getFlagsSummary: `query getFlagsSummary {
  flags {
    id
    name
    isUserPassing
    __typename
  }
}`,
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
}`,
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
}`,
  getInfoForTotalStudentCountQuery: `query getInfoForTotalStudentCountQuery {
  coach: user {
    id
    coacheeCount
    coachInvitationsCount
    __typename
  }
}`,
  getInitialDataForPrePhantomUser: `query getInitialDataForPrePhantomUser($exerciseId: ID!, $input: AssessmentItemInput!, $ancestorIds: [String!]!) {
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
  getIsClassCleverLibrarySynced: `query getIsClassCleverLibrarySynced($classDescriptor: String!) {
  classroom: classroomByDescriptor(descriptor: $classDescriptor) {
    id
    cacheId
    isCleverLibrarySynced
    __typename
  }
}`,
  getIsDistrictSynced: `query getIsDistrictSynced($classDescriptor: String!) {
  classroom: classroomByDescriptor(descriptor: $classDescriptor) {
    id
    cacheId
    includesDistrictOwnedData
    includesCentrallyOwnedDistrictData
    __typename
  }
}`,
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
}`,
  getKhanLabsSettings: `query getKhanLabsSettings($targetKaid: String!) {
  user(kaid: $targetKaid) {
    id
    age
    isParent
    isTeacher
    isAIGuideEnabled
    aiGuideEnrollmentGroup
    aiGuideDisabledReason
    nickname
    includesDistrictOwnedData
    children {
      id
      age
      nickname
      isAIGuideEnabled
      aiGuideEnrollmentGroup
      aiGuideDisabledReason
      includesDistrictOwnedData
      aiGuideAccessPlans {
        id
        isActive
        enrollmentGroup
        __typename
      }
      __typename
    }
    hasKhanmigoViaStripe
    everHadKhanmigoViaStripe
    aiGuideAccessPlans {
      id
      isActive
      enrollmentGroup
      __typename
    }
    __typename
  }
}`,
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
}`,
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
}`,
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
}`,
  getLearnStormCampaignDataForEnrollment: `query getLearnStormCampaignDataForEnrollment {
  learnStormActiveEligibleCampaign {
    id
    campaignName
    __typename
  }
}`,
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
}`,
  getLearnStormCampaigns: `query getLearnStormCampaigns {
  learnStormCampaigns {
    id
    campaignName
    live
    __typename
  }
}`,
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
}`,
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
}`,
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
}`,
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
}`,
  getModerationLogs: `query getModerationLogs($limit: Int!, $cursor: String!, $beforeTimestampSeconds: String, $excludeModeratorKaids: [String!]) {
  moderationLogs(
    limit: $limit
    cursor: $cursor
    beforeTimestampSeconds: $beforeTimestampSeconds
    excludeModeratorKaids: $excludeModeratorKaids
  ) {
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
}`,
  getModerationResult: `query getModerationResult($text: String, $image: String, $model: String) {
  getModerationResult(text: $text, image: $image, model: $model) {
    categories
    categoryScores
    flagged
    __typename
  }
}`,
  GetNotationReadAloudsForAssessmentItem: `query GetNotationReadAloudsForAssessmentItem($assessmentItemID: ID!, $exerciseID: ID!) {
  getNotationReadAloudsForAssessmentItem(
    assessmentItemID: $assessmentItemID
    exerciseID: $exerciseID
  ) {
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
}`,
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
        ...UnitMasteryGoalCreatedNotificationType
        ...UnitMasteryDueDateCreatedNotificationType
        ...CourseMasteryDueDateCreatedNotificationType
        ...MasteryGoalDueDateApproachingCreatedNotificationType
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

fragment CourseMasteryDueDateCreatedNotificationType on CourseMasteryDueDateCreatedNotification {
  dueDate
  course {
    id
    iconUrl
    translatedStandaloneTitle
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

fragment MasteryGoalDueDateApproachingCreatedNotificationType on MasteryGoalDueDateApproachingCreatedNotification {
  classroomInfo: classroom {
    id
    cacheId
    __typename
  }
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

fragment UnitMasteryDueDateCreatedNotificationType on UnitMasteryDueDateCreatedNotification {
  dueDate
  unit {
    id
    iconUrl
    translatedStandaloneTitle
    __typename
  }
  __typename
}

fragment UnitMasteryGoalCreatedNotificationType on UnitMasteryGoalCreatedNotification {
  numAssignmentsCount: numAssignments
  classroomInfo: classroom {
    cacheId
    id
    coach {
      id
      nickname
      __typename
    }
    __typename
  }
  unit {
    id
    iconUrl
    parent {
      id
      iconUrl
      __typename
    }
    __typename
  }
  __typename
}`,
  getOffensiveTerms: `query getOffensiveTerms($isAiGuide: Boolean) {
  offensiveTerms(isAiGuide: $isAiGuide) {
    id
    term
    __typename
  }
}`,
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
}`,
  getOfficialClarificationsWithReporter: `query getOfficialClarificationsWithReporter($youtubeId: String!) {
  officialClarifications(youtubeId: $youtubeId) {
    ...clarificationFragmentWithReporter
    __typename
  }
}`,
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
}`,
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
}`,
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
}`,
  getPromoForUser: `query getPromoForUser($promoName: String!) {
  user {
    id
    promotion(promoName: $promoName)
    __typename
  }
}`,
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
}`,
  getRecentlySubmittedStories: `query getRecentlySubmittedStories {
  recentSubmittedStories {
    key
    submitterName
    date
    story
    youtubeId
    __typename
  }
}`,
  getResources: `query getResources {
  coachResourcesCurationPage {
    curationData
    __typename
  }
}`,
  getRoleData: `query getRoleData {
  roles {
    name
    description
    __typename
  }
}`,
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
}`,
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
}`,
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
}`,
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
}`,
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
}`,
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
}`,
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
}`,
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
}`,
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
}`,
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
}`,
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
}`,
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
  standards: editableStandardsForContent(
    setId: $setId
    contentDescriptor: $contentDescriptor
    secondaryDescriptor: $secondaryDescriptor
    region: "*"
  ) {
    id
    standardId
    __typename
  }
}`,
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
}`,
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
}`,
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
}`,
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
}`,
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
}`,
  getStudentListEmailSubscriptions: `query getStudentListEmailSubscriptions($classroomDescriptor: String!) {
  coach: user {
    id
    emailSubscriptions {
      coachReportSubscription: classroomEmailSubscriptionForClassroomDescriptor(
        classroomDescriptor: $classroomDescriptor
      ) {
        checked
        token
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  getStudents: `query getStudents($classDescriptor: String!, $aiGuideEnabledStudentsOnly: Boolean!) {
  classroom: classroomByDescriptor(descriptor: $classDescriptor) {
    id
    cacheId
    studentKaidsAndNicknames {
      id
      kaid
      coachNickname
      __typename
    }
    students @include(if: $aiGuideEnabledStudentsOnly) {
      id
      kaid
      hasAccessToAIGuideLearner
      isAIGuideEnabled
      __typename
    }
    __typename
  }
}`,
  getStudentSettings: `query getStudentSettings($kaid: String!) {
  student: user(kaid: $kaid) {
    id
    nickname
    username
    birthdate
    userLanguage
    region
    soundOn
    muteVideos
    showCaptions
    hideVisual
    prefersReducedMotion
    noColorInVideos
    includesDistrictOwnedData
    includesCentrallyOwnedDistrictData
    settingsCanBeModByLoggedInUser
    userDistrictInfos {
      id
      districtProvidedBirthMonth
      districtProvidedBirthYear
      __typename
    }
    __typename
  }
}`,
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
}`,
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
}`,
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
}`,
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
}`,
  GetSubtitles: `query GetSubtitles($youtubeId: String!, $kaLocale: String!) {
  subtitles(youtubeId: $youtubeId, kaLocale: $kaLocale) {
    text
    startTime
    endTime
    kaIsValid
    __typename
  }
}`,
  getSuggestedUsername: `query getSuggestedUsername($requestedUsername: String!) {
  suggestedUsername(requestedUsername: $requestedUsername)
}`,
  GetSuggestionsSource: `query GetSuggestionsSource($version: String!) {
  queryCounts(version: $version) {
    name
    count
    __typename
  }
}`,
  getTeacherCampaign: `query getTeacherCampaign($id: String!) {
  teacherCampaign(id: $id) {
    id
    live
    eligibleLocale
    eligibleCountryCodes
    audience
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
    __typename
  }
}`,
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
}`,
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
}`,
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
}`,
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
}`,
  getTeacherCampaigns: `query getTeacherCampaigns {
  teacherCampaigns {
    id
    campaignName
    live
    __typename
  }
}`,
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
}`,
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
}`,
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
}`,
  getTopic: `query getTopic($slug: String!) {
  topic(slug: $slug) {
    id
    relativeUrl
    translatedTitle
    __typename
  }
}`,
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
          ... on LearnableContent {
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
}`,
  GetTopicQuestionsQuery: `query GetTopicQuestionsQuery($topicId: String!, $cursor: String, $limit: Int, $feedbackType: FeedbackType, $forceInTutorial: Boolean, $minAnswers: Int, $maxAnswers: Int) {
  topicQuestions(
    topicID: $topicId
    topicSlug: ""
    cursor: $cursor
    limit: $limit
    feedbackType: $feedbackType
    forceInTutorial: $forceInTutorial
    minAnswers: $minAnswers
    maxAnswers: $maxAnswers
    answersLimit: 1
  ) {
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
}`,
  getTopics: `query getTopics($courseIdsToAdd: [String]!, $descriptor: String!, $fetchDistrictCourses: Boolean!, $region: String!) {
  domains: studentListTopics(region: $region) {
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
      masteryEnabled
      subjectMasteryEnabled
      isHighSchoolSubject
      translatedStandaloneTitle
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
}`,
  getTransferAuthToken: `query getTransferAuthToken {
  user {
    id
    transferAuthToken
    __typename
  }
}`,
  getUserByUsernameOrEmail: `query getUserByUsernameOrEmail($username: String, $email: String) {
  user(username: $username, email: $email) {
    id
    kaid
    __typename
  }
}`,
  getUserChangeLogsAsDevadmin: `query getUserChangeLogsAsDevadmin($after: ID, $actorKaid: String, $targetKaid: String, $pageSize: Int) {
  user {
    id
    userSettingsChangeLogsPage(
      actorKaid: $actorKaid
      targetKaid: $targetKaid
      pageSize: $pageSize
      after: $after
    ) {
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
}`,
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
}`,
  getUserDevAdminGeneral: `query getUserDevAdminGeneral($kaid: String!) {
  user(kaid: $kaid) {
    id
    age
    aiGuideAccessPlans {
      id
      isActive
      recipientKAID
      description
      createdBy
      createdAt
      activatedAt
      deactivatedAt
      deactivationReasons
      deactivationExplanation
      eligibilityPolicy
      lifecycleType
      enrollmentGroup
      enrollmentGroupReferenceID
      expiresAt
      __typename
    }
    aiGuideDisabledReason
    aiGuideEnrollmentGroup
    applePrimaryEmail
    appleId
    authEmails
    birthdate
    bio
    canAccessDistrictsHomepage
    canModifyCoaches
    children {
      id
      __typename
    }
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
    isCleverV3
    isEnrolledInAIGuide
    isPhantom
    isParent
    isTeacher
    isTotpTwoFactorEnabled
    isFormalTeacher
    joined
    kaid
    lastLogin
    lastLoginIp
    lastLoginCountry
    lastLoginKaLocale
    lastReportedTimezone
    managingParent {
      id
      kaid
      email
      username
      __typename
    }
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
    region
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
      uuid
      kaid
      adminOfSchools {
        id
        name
        __typename
      }
      gracePeriod {
        start
        end
        __typename
      }
      partnership {
        ... on MetaDistrict {
          id
          name
          __typename
        }
        ... on District {
          id
          name
          __typename
        }
        __typename
      }
      district {
        id
        name
        isOldNWEA
        kaLocale
        ancestors {
          id
          name
          __typename
        }
        __typename
      }
      createdAt
      deletedAt
      updatedAt
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
      khanmigoShould
      khanmigoStatus
      khanmigoReason
      udiAuditLogs {
        kind
        changes
        actorKaid
        createdAt
        description
        __typename
      }
      __typename
    }
    userMetaInfos {
      id
      uuid
      kaid
      partnership {
        id
        name
        __typename
      }
      adminOf {
        ... on MetaDistrict {
          id
          name
          ancestors {
            id
            name
            __typename
          }
          __typename
        }
        ... on District {
          id
          name
          ancestors {
            id
            name
            __typename
          }
          __typename
        }
        __typename
      }
      createdAt
      deletedAt
      updatedAt
      activationEmailSentAt
      activatedAt
      fullName
      email
      umiAuditLogs {
        kaid
        actorKaid
        createdAt
        description
        __typename
      }
      __typename
    }
    walmartId
    walmartDivision
    canvasUserId
    hasCoach
    isK4dStudent
    isKmapStudent
    isK4dTeacher
    isStudentOfFormalTeacherActor
    stripeCustomerUrl
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
      isCleverLibrarySynced
      isK4dClassroom
      isKmapClassroom
      includesDistrictOwnedData
      includesCentrallyOwnedDistrictData
      signupCode
      googleClassId
      topics {
        id
        title
        __typename
      }
      classroomDistrictInfo {
        id
        name
        classWillBeRemovedInDays
        districtProvidedIdentifier
        rosterSource
        cdiAuditLogs {
          kind
          description
          createdAt
          __typename
        }
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
}`,
  getUserHasUsedProduct: `query getUserHasUsedProduct($examGroupId: String!, $kaid: String!) {
  examGroup(examGroupId: $examGroupId) {
    id
    userHasUsedProduct(kaid: $kaid)
    __typename
  }
}`,
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
}`,
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
}`,
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
}`,
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
}`,
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
}`,
  getUserProgressDump: `query getUserProgressDump($kaid: String!, $problemLogCursor: ID, $videoProgressesCursor: ID, $pageSize: Int, $startDt: DateTime, $endDt: DateTime) {
  user(kaid: $kaid) {
    id
    kaid
    email
    lastLoginKaLocale
    rawLogs {
      videoProgressesPage(
        startDt: $startDt
        endDt: $endDt
        after: $videoProgressesCursor
        pageSize: $pageSize
      ) {
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
      problemLogsPage(
        startDt: $startDt
        endDt: $endDt
        after: $problemLogCursor
        pageSize: $pageSize
      ) {
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
}`,
  getUserSoundOn: `query getUserSoundOn {
  user {
    id
    soundOn
    __typename
  }
}`,
  getUserSoundPref: `query getUserSoundPref {
  user {
    id
    soundOn
    __typename
  }
}`,
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
}`,
  getUsersWithGrantsForEmail: `query getUsersWithGrantsForEmail($email: String!) {
  user(email: $email) {
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
}`,
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
}`,
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
}`,
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
}`,
  getVideoNameForTeacherCampaignPreview: `query getVideoNameForTeacherCampaignPreview($id: String!) {
  video(id: $id) {
    id
    translatedTitle
    __typename
  }
}`,
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
}`,
  getVideoSlug: `query getVideoSlug($contentId: String!) {
  videoById(contentId: $contentId) {
    id
    slug
    __typename
  }
}`,
  GetWalmartProfile: `query GetWalmartProfile($profileKeyName: String!) {
  walmartProfile(profileKeyName: $profileKeyName) {
    walmartId
    nickname
    continueUrl
    __typename
  }
}`,
  gtp_getCheckpoints: `query gtp_getCheckpoints($examId: String!) {
  checkpoints(examId: $examId) {
    ...gtp_checkpointFragment
    __typename
  }
}`,
  gtp_getDescriptors: `query gtp_getDescriptors($examId: String!, $checkpointStr: String) {
  descriptorList(examId: $examId, requestedCheckpoint: $checkpointStr) {
    id
    checkpointStr
    ...gtp_descriptorsFragment
    __typename
  }
}`,
  gtp_getEGUD: `query gtp_getEGUD($examGroupId: String!) {
  egud(examGroupId: $examGroupId) {
    ...gtp_egudFragment
    __typename
  }
}`,
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
}`,
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
}`,
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
}`,
  gtp_getExamGroupMetadata: `query gtp_getExamGroupMetadata($examGroupId: String!) {
  examGroup(examGroupId: $examGroupId) {
    id
    examGroupMetadata {
      ...gtp_examGroupMetadataFragment
      __typename
    }
    __typename
  }
}`,
  gtp_getExamMetadata: `query gtp_getExamMetadata($examId: String!) {
  metadata(examId: $examId) {
    ...gtp_examMetadataFragment
    __typename
  }
}`,
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
}`,
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
}`,
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
}`,
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
}`,
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
}`,
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
}`,
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
}`,
  gtp_getTaskById: `query gtp_getTaskById($taskType: String!, $taskId: String!) {
  task(taskType: $taskType, taskId: $taskId) {
    ...gtp_taskFragment
    __typename
  }
}`,
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
}`,
  gtp_getTestSectionTasks: `query gtp_getTestSectionTasks($examId: String!, $taskId: String!) {
  testSectionTasks(examId: $examId, taskId: $taskId) {
    ...gtp_taskFragment
    __typename
  }
}`,
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
}`,
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
}`,
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
}`,
  guideTranscript: `query guideTranscript($transcriptId: String!) {
  aiGuideThread(threadId: $transcriptId) {
    id
    summary
    lastUpdatedAt
    flagged
    kaid
    title
    insights {
      interests
      topics
      offTopic
      safety
      languages
      title
      summary
      math
      __typename
    }
    interactions {
      id
      answer
      question
      userInputImage
      url
      createdAt
      flagged
      flaggedCategories
      responseWasStoppedByUser
      traceID
      __typename
    }
    blooketQuestionSet {
      id
      title
      description
      questions {
        text
        answers {
          text
          isCorrect
          __typename
        }
        __typename
      }
      __typename
    }
    coeditingDocument {
      id
      snapshots {
        id
        createdAt
        text {
          prefix
          selection
          suffix
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  guideTranscripts: `query guideTranscripts($kaid: String!, $cursor: String, $startDate: DateTime, $endDate: DateTime, $moderationStatus: ModerationStatus) {
  aiGuideThreads(
    kaid: $kaid
    cursor: $cursor
    startDate: $startDate
    endDate: $endDate
    moderationStatus: $moderationStatus
  ) {
    threads {
      id
      lastUpdatedAt
      flagged
      title
      interactions {
        id
        pageType
        pageTitle
        question
        answer
        __typename
      }
      coeditingDocument {
        id
        title
        __typename
      }
      __typename
    }
    cursor
    __typename
  }
}`,
  hasChangedAvatar: `query hasChangedAvatar($kaid: String!) {
  user(kaid: $kaid) {
    id
    hasChangedAvatar
    __typename
  }
}`,
  hasUsedTestPrepProductQuery: `query hasUsedTestPrepProductQuery($examGroupId: String!) {
  examGroup(examGroupId: $examGroupId) {
    id
    actorHasUsedProduct
    __typename
  }
}`,
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
}`,
  homepageQueryV4: `query homepageQueryV4($kaid: String, $username: String) {
  actorUser: user {
    id
    hasAccessToAIGuideLearner
    isAIGuideEnabled
    canViewAiGuideHistory: hasPermission(name: "can_view_ai_guide_history")
    canManageDistrictStudent(studentKaid: $kaid)
    __typename
  }
  user(kaid: $kaid, username: $username) {
    id
    kaid
    isActor
    isCoachedByActor
    isManagedByActor
    isAIGuideEnabled
    canViewUserProgress: actorHasUserScopedPermission(
      capability: CAN_VIEW_USER_PROGRESS
    )
    canViewTeachersAndClassrooms: actorHasUserScopedPermission(
      capability: CAN_VIEW_TEACHERS_AND_CLASSROOMS
    )
    isDistrictSynced
    isKmapSynced
    userDistrictInfos {
      id
      currentMathAssessment {
        id
        mapTestKey
        __typename
      }
      gradeLevel
      __typename
    }
    homepageModules {
      navigation {
        myCoursesEnabled
        interestedInLsat
        classes {
          classroom {
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
            topics {
              id
              __typename
            }
            createdOn
            __typename
          }
          showAssignments
          hasActiveAssignments
          hasKmapGoals
          hasNonMapGoals
          isKmap
          isK4d
          latestDueDate
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
  hasAccessToAIGuideDev
}`,
  hotlist: `query hotlist($curationNodeId: String, $onlyOfficialProjectSpinoffs: Boolean!, $sort: ListProgramSortOrder, $pageInfo: ListProgramsPageInfo, $userAuthoredContentTypes: [UserAuthoredContentType!]) {
  listTopPrograms(
    curationNodeId: $curationNodeId
    onlyOfficialProjectSpinoffs: $onlyOfficialProjectSpinoffs
    sort: $sort
    pageInfo: $pageInfo
    userAuthoredContentTypes: $userAuthoredContentTypes
  ) {
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
      userAuthoredContentType
      __typename
    }
    __typename
  }
}`,
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
    mapGrowthTest {
      key
      __typename
    }
    __typename
  }
}`,
  isActivityAccessibleForProfiles: `query isActivityAccessibleForProfiles {
  user {
    id
    isActor
    isCoachedByActor
    actorHasUserScopedPermission(capability: CAN_VIEW_USER_PROGRESS)
    __typename
  }
}`,
  isCleverTeacher: `query isCleverTeacher {
  user {
    id
    cleverId
    isTeacher
    isKmapTeacher
    isK4dTeacher
    __typename
  }
}`,
  isCourseEditableByCurrentUser: `query isCourseEditableByCurrentUser($courseId: String!) {
  isCourseEditableByCurrentUser(courseId: $courseId)
}`,
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
}`,
  isEmailInClass: `query isEmailInClass($email: String!, $classCode: String!) {
  isEmailInClass(email: $email, classCode: $classCode) {
    inClass
    error {
      code
      __typename
    }
    __typename
  }
}`,
  isHellbanned: `query isHellbanned($kaid: String!) {
  user(kaid: $kaid) {
    id
    discussionBanned
    __typename
  }
}`,
  isSatStudent: `query isSatStudent {
  user {
    id
    isSatStudent
    __typename
  }
}`,
  IssueFormGetExerciseId: `query IssueFormGetExerciseId($exerciseName: String!) {
  exercise(name: $exerciseName) {
    id
    __typename
  }
}`,
  joinModalClassInfo: `query joinModalClassInfo($classCode: String!) {
  joinByClassCodeInfo(classCode: $classCode) {
    id
    cacheId
    name
    __typename
  }
}
`,
  KhanCoursesQuery: `query KhanCoursesQuery($adminAggregateID: ID!, $kaLocale: String!) {
  coursesForAdminAggregate(id: $adminAggregateID, kaLocale: $kaLocale) {
    id
    key
    translatedTitle
    domain: parent {
      id
      translatedTitle
      __typename
    }
    __typename
  }
}`,
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
}`,
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
}`,
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
  khanLibraryGetFolderTranslationProgress: `query khanLibraryGetFolderTranslationProgress($folderId: String!) {
  folderTranslationProgress(folderId: $folderId) {
    courses {
      ...tapCourseNode
      __typename
    }
    __typename
  }
}

fragment tapAIGuideActivityNode on TAPAIGuideActivityNode {
  ...tapContentItem
  ...tapMetadataWordCounts
  fingerprint
  __typename
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
}`,
  khanLibraryGetLocalesLanguage: `query khanLibraryGetLocalesLanguage {
  localesForLanguagePicker(includeEnglish: true, includeFake: false) {
    id
    kaLocale
    displayName
    __typename
  }
}`,
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
  isEmpty
  __typename
}`,
  khanLibraryGetOtherGroup: `query khanLibraryGetOtherGroup {
  folderGroups {
    otherFolders {
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
  isEmpty
  __typename
}`,
  khanLibraryGetStatus: `query khanLibraryGetStatus {
  contentEditingStatus {
    editingEnabled
    __typename
  }
}`,
  khanLibraryHasCourseEditorRole: `query khanLibraryHasCourseEditorRole {
  user {
    id
    hasPermission(name: "can_edit_courses")
    __typename
  }
}`,
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
          mapGrowthTest {
            key
            __typename
          }
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
          mapTestKey
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
          mapTestKey
          scoresReviewedDate
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
    mapGrowthTest {
      key
      __typename
    }
    __typename
  }
}`,
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
    mapGrowthTest {
      key
      __typename
    }
    __typename
  }
}`,
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
  teacherKmapProgressReport: teacherMapProgressReport(
    classroomDescriptor: $classDescriptor
    filters: {progressFrom: $progressFrom, progressUpTo: $progressUpTo}
  ) {
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
}`,
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
    mapGrowthTest {
      key
      __typename
    }
    __typename
  }
}`,
  learnMenuTopicsQuery: `query learnMenuTopicsQuery($region: String) {
  learnMenuTopics(region: $region) {
    domainId
    slug
    translatedTitle
    href
    isNew
    icon
    children {
      courseId
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
}`,
  LintTranslationsFE: `query LintTranslationsFE($translations: [TranslationLinterInput!]!) {
  lintTranslations(translations: $translations) {
    status
    message
    correction
    __typename
  }
}`,
  listClassroomPrograms: `query listClassroomPrograms($pageInfo: ListProgramsPageInfo, $classroomId: String!, $onlyOfficialProgramSpinoffs: Boolean!) {
  listClassroomPrograms(
    pageInfo: $pageInfo
    classroomId: $classroomId
    onlyOfficialProgramSpinoffs: $onlyOfficialProgramSpinoffs
  ) {
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
}`,
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
}`,
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
}`,
  LiteVideo_SlugFromYoutubeId: `query LiteVideo_SlugFromYoutubeId($youtubeId: String!) {
  videoByYoutubeId(youtubeId: $youtubeId) {
    id
    defaultUrlPath
    __typename
  }
}`,
  localeMappings: `query localeMappings($includeEnglish: Boolean) {
  locales(includeEnglish: $includeEnglish) {
    id
    kaLocale
    crowdinLocale
    status
    displayName
    __typename
  }
}`,
  localesForFlagRuleQuery: `query localesForFlagRuleQuery {
  localesForLanguagePicker(includeEnglish: false, includeFake: false) {
    id
    kaLocale
    displayName
    __typename
  }
}`,
  localesForI18nSuggestBannerQuery: `query localesForI18nSuggestBannerQuery {
  localesForLanguagePicker(includeEnglish: true, includeFake: false) {
    id
    localName
    kaLocale
    displayName
    __typename
  }
}`,
  localesForLangDropdownQuery: `query localesForLangDropdownQuery {
  localesForLanguagePicker(includeEnglish: true, includeFake: false) {
    id
    localName
    kaLocale
    __typename
  }
}`,
  localesForLangPickerQuery: `query localesForLangPickerQuery {
  localesForLanguagePicker(includeEnglish: true, includeFake: false) {
    id
    localName
    kaLocale
    __typename
  }
}`,
  LocalesForStandardsEditor: `query LocalesForStandardsEditor {
  locales(includeEnglish: true, includeFake: false, liveOnly: true) {
    id
    displayName
    __typename
  }
}`,
  LocalesIncludingEnglish: `query LocalesIncludingEnglish {
  locales(includeEnglish: true) {
    id
    __typename
  }
}`,
  loggedInUserQuery: `query loggedInUserQuery {
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
}`,
  lookupUser: `query lookupUser($kaid: String, $email: String, $username: String) {
  user(kaid: $kaid, email: $email, username: $username) {
    id
    kaid
    email
    username
    __typename
  }
}`,
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
}`,
  ManageFolders_UsersInFolder: `query ManageFolders_UsersInFolder($kaids: [String!]!) {
  users(kaids: $kaids) {
    id
    kaid
    email
    username
    nickname
    __typename
  }
}`,
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
}`,
  manticoreGetContentForDescriptors: `query manticoreGetContentForDescriptors($contentDescriptors: [String!]!) {
  contentForDescriptors(descriptors: $contentDescriptors) {
    id
    slug
    parentTopic {
      id
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
    name
    masteryAssignments(contextFilter: NO_KMAP) {
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
    classroomDistrictInfo {
      id
      isNweaMapSynced
      __typename
    }
    __typename
  }
}`,
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
}`,
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
}`,
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
}`,
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
}`,
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
}`,
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
}`,
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
}`,
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
}`,
  ModFeedbackForAuthorQuery: `query ModFeedbackForAuthorQuery($kaid: String!, $feedbackType: FeedbackType!, $cursor: String, $limit: Int, $sort: Int) {
  feedbackForAuthor(
    kaid: $kaid
    feedbackType: $feedbackType
    cursor: $cursor
    limit: $limit
    sort: $sort
  ) {
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
}`,
  MoveTypeModalAllExerciseRevisions: `query MoveTypeModalAllExerciseRevisions {
  allExerciseRevisions {
    id
    slug
    title
    __typename
  }
}`,
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
}`,
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
}`,
  NamedPermissionCheck: `query NamedPermissionCheck($name: String!, $scope: Scope) {
  user {
    id
    hasPermission(name: $name, scope: $scope)
    __typename
  }
}`,
  notTranslatedQuery: `query notTranslatedQuery($kaLocale: String!) {
  locale(kaLocale: $kaLocale) {
    id
    localName
    __typename
  }
}`,
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
}`,
  previewAgingParentEmail: `query previewAgingParentEmail {
  preview: previewAgingParentEmail {
    textContent
    htmlContent
    __typename
  }
}`,
  previewAiGuideEnrolledEmail: `query previewAiGuideEnrolledEmail {
  preview: previewAiGuideEnrolledEmail {
    textContent
    htmlContent
    __typename
  }
}`,
  previewAiGuideThreadFlaggedEmail: `query previewAiGuideThreadFlaggedEmail {
  preview: previewChildAiGuideThreadFlaggedEmail {
    textContent
    htmlContent
    __typename
  }
}`,
  previewChildAddedCoachEmail: `query previewChildAddedCoachEmail {
  preview: previewChildAddedCoachEmail {
    textContent
    htmlContent
    __typename
  }
}`,
  previewDistrictsCSVReportReadyForDownloadEmail: `query previewDistrictsCSVReportReadyForDownloadEmail {
  preview: previewDistrictsCSVReportReadyForDownloadEmail {
    textContent
    htmlContent
    __typename
  }
}`,
  previewExistingParentClaimManagedStudentEmail: `query previewExistingParentClaimManagedStudentEmail {
  preview: previewExistingParentClaimManagedStudentEmail {
    textContent
    htmlContent
    __typename
  }
}`,
  previewNewAssignmentEmail: `query previewNewAssignmentEmail {
  preview: previewNewAssignmentEmail {
    textContent
    htmlContent
    __typename
  }
}`,
  previewParentChildInviteEmail: `query previewParentChildInviteEmail {
  preview: previewParentChildInviteEmail {
    textContent
    htmlContent
    __typename
  }
}`,
  previewParentReportEmail: `query previewParentReportEmail {
  preview: previewParentReportEmail {
    textContent
    htmlContent
    __typename
  }
}`,
  previewSampleEmail: `query previewSampleEmail {
  preview: previewSampleEmail {
    textContent
    htmlContent
    __typename
  }
}`,
  previewTeacherReportEmail: `query previewTeacherReportEmail {
  preview: previewTeacherReportEmail {
    textContent
    htmlContent
    __typename
  }
}`,
  previewTeacherStudentInviteEmail: `query previewTeacherStudentInviteEmail {
  preview: previewTeacherStudentInviteEmail {
    textContent
    htmlContent
    __typename
  }
}`,
  previewTestPrepMissedPracticeExamEmail: `query previewTestPrepMissedPracticeExamEmail {
  preview: previewTestPrepMissedPracticeExamEmail {
    textContent
    htmlContent
    __typename
  }
}`,
  previewTestPrepPracticeExamEmail: `query previewTestPrepPracticeExamEmail {
  preview: previewTestPrepPracticeExamEmail {
    textContent
    htmlContent
    __typename
  }
}`,
  previewTestPrepRealExamCongratsEmail: `query previewTestPrepRealExamCongratsEmail {
  preview: previewTestPrepRealExamCongratsEmail {
    textContent
    htmlContent
    __typename
  }
}`,
  previewTestPrepScheduledPracticeEmail: `query previewTestPrepScheduledPracticeEmail {
  preview: previewTestPrepScheduledPracticeEmail {
    textContent
    htmlContent
    __typename
  }
}`,
  previewUnderAgeGateParentApproveEmail: `query previewUnderAgeGateParentApproveEmail {
  preview: previewUnderAgeGateParentApproveEmail {
    textContent
    htmlContent
    __typename
  }
}`,
  previewUnderAgeGateParentReminderEmail: `query previewUnderAgeGateParentReminderEmail {
  preview: previewUnderAgeGateParentReminderEmail {
    textContent
    htmlContent
    __typename
  }
}`,
  previewUnregisteredParentClaimManagedStudentEmail: `query previewUnregisteredParentClaimManagedStudentEmail {
  preview: previewUnregisteredParentClaimManagedStudentEmail {
    textContent
    htmlContent
    __typename
  }
}`,
  previewWaitlistAddedEmail: `query previewWaitlistAddedEmail {
  preview: previewWaitlistAddedEmail {
    textContent
    htmlContent
    __typename
  }
}`,
  previewWaitlistApprovedEmail: `query previewWaitlistApprovedEmail {
  preview: previewWaitlistApprovedEmail {
    textContent
    htmlContent
    __typename
  }
}`,
  previewWaitlistApprovedReminderEmail: `query previewWaitlistApprovedReminderEmail {
  preview: previewWaitlistApprovedReminderEmail {
    textContent
    htmlContent
    __typename
  }
}`,
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
}`,
  profilePermissions: `query profilePermissions($kaid: String, $username: String) {
  user(kaid: $kaid, username: $username) {
    id
    isCoachListWritable
    isManagedByActor
    __typename
  }
}`,
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
}`,
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
    classroomDistrictInfo {
      id
      studentUserDistrictInfos {
        id
        kaid
        sisId
        __typename
      }
      __typename
    }
    assignmentsPage(filters: $assignmentFilters, after: $after, pageSize: $pageSize) {
      assignments {
        id
        title
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
          activitySubmissions {
            threadID
            thread {
              id
              flagged
              lastUpdatedAt
              interactions {
                id
                answer
                question
                __typename
              }
              __typename
            }
            __typename
          }
          student {
            id
            kaid
            profileRoot
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
}`,
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
}`,
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
}`,
  PublishList: `query PublishList($limit: Int, $queuedFilter: PublishListFilter, $kaLocaleFilter: KALocale) {
  publishList(
    limit: $limit
    queuedFilter: $queuedFilter
    kaLocaleFilter: $kaLocaleFilter
  ) {
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
}`,
  QAExpandKeyInfo: `query QAExpandKeyInfo($encryptedKey: String) {
  qaExpandKeyInfo(encryptedQaExpandKey: $encryptedKey) {
    feedbackType
    unencryptedKey
    __typename
  }
}`,
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
}`,
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
}`,
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
}`,
  SatPracticeByGradeQuery: `query SatPracticeByGradeQuery($districtName: String!, $schoolIds: [ID!], $gradeLevels: [DistrictGradeLevel!], $progressFrom: DateTime, $progressUpTo: DateTime) {
  districtSatPracticeReportByGrade(
    districtName: $districtName
    filters: {schoolIds: $schoolIds, gradeLevels: $gradeLevels, progressFrom: $progressFrom, progressUpTo: $progressUpTo}
  ) {
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
}`,
  SatPracticeBySchoolQuery: `query SatPracticeBySchoolQuery($districtName: String!, $schoolIds: [ID!], $gradeLevels: [DistrictGradeLevel!], $progressFrom: DateTime, $progressUpTo: DateTime, $orderBy: BySchoolSortableColumn, $orderDir: OrderDir, $pageSize: Int, $cursor: Int) {
  districtSatPracticeReportBySchool(
    districtName: $districtName
    filters: {schoolIds: $schoolIds, gradeLevels: $gradeLevels, progressFrom: $progressFrom, progressUpTo: $progressUpTo}
    orderBy: $orderBy
    orderDir: $orderDir
    pageSize: $pageSize
    cursor: $cursor
  ) {
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
}`,
  SatPracticeByTeacherQuery: `query SatPracticeByTeacherQuery($districtName: String!, $schoolIds: [ID!], $teacherIds: [ID!], $gradeLevels: [DistrictGradeLevel!], $progressFrom: DateTime, $progressUpTo: DateTime, $orderBy: ByTeacherSortableColumn, $orderDir: OrderDir, $pageSize: Int, $cursor: Int) {
  districtSatPracticeReportByTeacher(
    districtName: $districtName
    filters: {schoolIds: $schoolIds, teacherIds: $teacherIds, gradeLevels: $gradeLevels, progressFrom: $progressFrom, progressUpTo: $progressUpTo}
    orderBy: $orderBy
    orderDir: $orderDir
    pageSize: $pageSize
    cursor: $cursor
  ) {
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
}`,
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
}`,
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
}`,
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
        bestScoreSkills {
          numLeveledUp
          numLeveledDown
          levelChanges {
            id
            before
            after
            changeDirection
            exercise {
              id
              translatedTitle
              __typename
            }
            __typename
          }
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
          threadID
          thread {
            id
            interactions {
              id
              answer
              question
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
    }
    __typename
  }
}`,
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
}`,
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
}`,
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
}`,
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
}`,
  SkillsMetadataAndStudentsQuery: `query SkillsMetadataAndStudentsQuery($selectedMasteryCourseIds: [String]!, $classDescriptor: String!, $region: String!, $locale: String!) {
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
        mappedStandards(region: $region, locale: $locale) {
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
}`,
  SkillsQuery: `query SkillsQuery($classDescriptor: String!, $skillIds: [String]!, $studentKaid: String) {
  teacherOverallProgressReport(
    classroomDescriptor: $classDescriptor
    filters: {studentKaid: $studentKaid}
  ) {
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
}`,
  StandaloneUserAssignments: `query StandaloneUserAssignments($after: ID, $pageSize: Int, $kaid: String!, $classDescriptor: String!, $orderBy: AssignmentOrder!) {
  student: user(kaid: $kaid) {
    id
    assignmentsPage(
      after: $after
      pageSize: $pageSize
      classroomDescriptor: $classDescriptor
      orderBy: $orderBy
    ) {
      assignments {
        id
        title
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
          activitySubmissions {
            threadID
            __typename
          }
          essaySession {
            id
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
}`,
  StudentKmapPlacementQuery: `query StudentKmapPlacementQuery($classDescriptor: String!, $studentKaid: String!) {
  student: user(kaid: $studentKaid) {
    id
    assignments: subjectMasteryAssignments(
      filter: KMAP
      classroomDescriptor: $classDescriptor
    ) {
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
          mapTestKey
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
          mapTestKey
          scoresReviewedDate
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
    mapGrowthTest {
      key
      __typename
    }
    __typename
  }
}`,
  studentListByClassCode: `query studentListByClassCode($classCode: String!) {
  joinByClassCodeInfo(classCode: $classCode) {
    id
    cacheId
    name
    signupCode
    descriptor
    includesCentrallyOwnedDistrictData
    classroomDistrictInfo {
      id
      emailDomains
      __typename
    }
    __typename
  }
}`,
  StudentListHasAssignments: `query StudentListHasAssignments($classDescriptor: String!) {
  classroom: classroomByDescriptor(descriptor: $classDescriptor) {
    id
    cacheId
    hasAssignments
    hasCourseMasteryGoals
    __typename
  }
}`,
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
}`,
  StudentMasteryGoals: `query StudentMasteryGoals($kaid: String, $isPast: Boolean!, $classDescriptor: String) {
  user(kaid: $kaid) {
    id
    hasTakenKmapExam
    masteryAssignments(isPast: $isPast, classroomDescriptor: $classDescriptor) {
      id
      curationNodeLevel
      studentData {
        kaid
        assignedDate
        __typename
      }
      isKmap
      isPast
      whyPast
      whenPast
      whenCompleted
      classroom {
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
      course {
        id
        slug
        domainSlug
        translatedTitle
        largeIconPath
        parent {
          id
          translatedTitle
          __typename
        }
        __typename
      }
      unit {
        id
        slug
        domainSlug
        translatedTitle
        largeIconPath
        __typename
      }
      currentUserProgress {
        currentMasteryV2 {
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
}`,
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
}`,
  StudentSkillsProgressKADQuery: `query StudentSkillsProgressKADQuery($studentKaid: String!, $progressFrom: DateTime!, $progressUpTo: DateTime!, $courseID: String!, $kaLocale: String!) {
  districtStudentsSkillsProgressForCourses(
    studentKaid: $studentKaid
    progressFrom: $progressFrom
    progressUpTo: $progressUpTo
    courseID: $courseID
    kaLocale: $kaLocale
  ) {
    exercise {
      id
      title: translatedTitle
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
    title: translatedTitle
    unitChildren {
      unitID: id
      unitTitle: translatedTitle
      learnableContentPage(
        pageParams: {pageSize: 1000, after: 0, contentKinds: [EXERCISE]}
      ) {
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
}`,
  StudentSkillsProgressMAPQuery: `query StudentSkillsProgressMAPQuery($studentKaid: String!, $progressFrom: DateTime!, $progressUpTo: DateTime!, $bands: [String!], $strandKey: String) {
  districtStudentsSkillsProgressForCourses(
    studentKaid: $studentKaid
    progressFrom: $progressFrom
    progressUpTo: $progressUpTo
    bands: $bands
    strandKey: $strandKey
  ) {
    exercise {
      id
      title: translatedTitle
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
    title: translatedTitle
    band
    bandGradeName
    bandKey
    strandKey
    mapGrowthTest {
      key
      __typename
    }
    learnableContentPage(
      pageParams: {pageSize: 1000, after: 0, contentKinds: [EXERCISE]}
    ) {
      contents {
        exerciseID: id
        __typename
      }
      __typename
    }
    __typename
  }
}`,
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
}`,
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
}`,
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
}`,
  transferAuthTokenQuery: `query transferAuthTokenQuery {
  user {
    id
    transferAuthToken
    __typename
  }
}`,
  translationEditorEditableByUser: `query translationEditorEditableByUser($contentId: String!, $contentKind: String!) {
  isEditableByCurrentUser(contentId: $contentId, contentKind: $contentKind)
}`,
  translationEditorPermissions: `query translationEditorPermissions {
  videoMapperEditor: actorRoleScopes(role: VIDEO_MAPPER_EDITOR) {
    kaLocale
    __typename
  }
  locales {
    id
    kaLocale
    displayName
    __typename
  }
}`,
  translationEditorTalkthroughById: `query translationEditorTalkthroughById($id: String!) {
  talkthroughById(id: $id) {
    id
    title
    translatedMp3Url
    defaultUrlPath
    listed
    __typename
  }
}`,
  translationEditorTalkthroughRevisionById: `query translationEditorTalkthroughRevisionById($id: String!) {
  talkthroughRevisionById(id: $id) {
    id
    sha
    translatedMP3URLs
    youtubeID
    __typename
  }
}`,
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
}`,
  TranslationEditor_GetArticleID: `query TranslationEditor_GetArticleID($slug: String!) {
  article(slug: $slug) {
    id
    __typename
  }
}`,
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
}`,
  TranslationEditor_GetChallengeID: `query TranslationEditor_GetChallengeID($slug: String!) {
  challenge(slug: $slug) {
    id
    __typename
  }
}`,
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
}`,
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
}`,
  TranslationEditor_GetExerciseID: `query TranslationEditor_GetExerciseID($slug: String!) {
  exercise(name: $slug) {
    id
    __typename
  }
}`,
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
}`,
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
}`,
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
}`,
  TranslationEditor_GetProjectID: `query TranslationEditor_GetProjectID($slug: String!) {
  project(slug: $slug) {
    id
    __typename
  }
}`,
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
}`,
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
}`,
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
}`,
  translationPortalContentProgress: `query translationPortalContentProgress($contentDescriptors: [String!]!, $contentLocale: String!) {
  contentTranslationProgress(
    contentDescriptors: $contentDescriptors
    contentKALocale: $contentLocale
  ) {
    content {
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
  }
}

fragment tapAIGuideActivityNode on TAPAIGuideActivityNode {
  ...tapContentItem
  ...tapMetadataWordCounts
  fingerprint
  __typename
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
}`,
  translationPortalCourseContentProgress: `query translationPortalCourseContentProgress($courseId: String!, $contentLocale: String!) {
  courseTranslationProgress(courseId: $courseId, contentKALocale: $contentLocale) {
    course {
      ...tapCourseNode
      __typename
    }
    __typename
  }
}

fragment tapAIGuideActivityNode on TAPAIGuideActivityNode {
  ...tapContentItem
  ...tapMetadataWordCounts
  fingerprint
  __typename
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
}`,
  translationPortalCourseContentProgressCached: `query translationPortalCourseContentProgressCached($courseId: String!, $contentLocale: String!) {
  courseTranslationProgress(courseId: $courseId, contentKALocale: $contentLocale) {
    course {
      ...tapCourseNode
      __typename
    }
    __typename
  }
}

fragment tapAIGuideActivityNode on TAPAIGuideActivityNode {
  ...tapContentItem
  ...tapMetadataWordCounts
  fingerprint
  __typename
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
}`,
  translationPortalCourseTitlesByIds: `query translationPortalCourseTitlesByIds($ids: [String]!) {
  topicsById(ids: $ids) {
    id
    title
    domainSlug
    courseSnapshotId
    __typename
  }
}`,
  translationPortalFolders: `query translationPortalFolders($kaLocale: String!) {
  allFolders(kaLocalesFilter: [$kaLocale]) {
    id
    name
    kaLocale
    courseIds
    __typename
  }
}`,
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
}`,
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
  oldestSubtitlesDate
  updateDate
  __typename
}`,
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
}`,
  translationsVideosGetVideo: `query translationsVideosGetVideo($youtubeId: String!) {
  videoByYoutubeId(youtubeId: $youtubeId) {
    id
    contentId
    description
    __typename
  }
}`,
  translationsVideosGetVideos: `query translationsVideosGetVideos($youtubeIds: [String!]!) {
  videosByYoutubeIds(youtubeIds: $youtubeIds) {
    id
    contentId
    __typename
  }
}`,
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
}`,
  unprocessedAIGuideWaitlistEntries: `query unprocessedAIGuideWaitlistEntries($cursor: String, $eligibility: Boolean, $stableRandomOrder: Boolean) {
  unprocessedAIGuideWaitlistEntries(
    cursor: $cursor
    eligibility: $eligibility
    stableRandomOrder: $stableRandomOrder
  ) {
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
}`,
  UntranslatedContentCheck: `query UntranslatedContentCheck($path: String!, $countryCode: String!) {
  contentRoute(path: $path, countryCode: $countryCode) {
    resolvedPath
    __typename
  }
}`,
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
}`,
  UserAssignments: `query UserAssignments($after: ID, $dueAfter: DateTime, $dueBefore: DateTime, $pageSize: Int, $orderBy: AssignmentOrder!, $studentListId: String, $coachKaid: String) {
  user {
    id
    hasAccessToAIGuideLearner
    isAIGuideEnabled
    kaid
    assignmentsPage(
      after: $after
      dueAfter: $dueAfter
      dueBefore: $dueBefore
      pageSize: $pageSize
      orderBy: $orderBy
      studentListId: $studentListId
      coachKaid: $coachKaid
    ) {
      assignments {
        id
        key
        subjectSlug
        title
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
          essaySession {
            id
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
}`,
  UserAssignmentsForContent: `query UserAssignmentsForContent($classroomDescriptor: String!, $contentDescriptors: [String!]!) {
  user {
    id
    assignmentDueNextForContentDescriptors(
      classroomDescriptor: $classroomDescriptor
      contentDescriptors: $contentDescriptors
    ) {
      ...AssignmentData
      __typename
    }
    __typename
  }
}

fragment AssignmentData on Assignment {
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
  UserAssignmentsPage: `query UserAssignmentsPage($classroomDescriptor: String!, $dueAfterISO: DateTime, $pageSize: Int!, $cursor: ID) {
  user {
    id
    assignmentsPage(
      dueAfter: $dueAfterISO
      orderBy: DUE_DATE_ASC
      pageSize: $pageSize
      classroomDescriptor: $classroomDescriptor
      after: $cursor
    ) {
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
}`,
  userDataForNewContentPermission: `query userDataForNewContentPermission($email: String!) {
  user(email: $email) {
    id
    kaid
    email
    username
    nickname
    __typename
  }
}`,
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
}`,
  UserDistrictInfosQuery: `query UserDistrictInfosQuery($email: String, $rosterID: String) {
  userDistrictInfos(email: $email, rosterID: $rosterID) {
    id
    uuid
    kaid
    adminOfSchools {
      id
      name
      __typename
    }
    gracePeriod {
      start
      end
      __typename
    }
    partnership {
      ... on MetaDistrict {
        id
        name
        __typename
      }
      ... on District {
        id
        name
        __typename
      }
      __typename
    }
    district {
      id
      name
      isOldNWEA
      kaLocale
      ancestors {
        id
        name
        __typename
      }
      __typename
    }
    createdAt
    deletedAt
    updatedAt
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
    khanmigoShould
    khanmigoStatus
    khanmigoReason
    udiAuditLogs {
      kind
      changes
      actorKaid
      createdAt
      description
      __typename
    }
    __typename
  }
}`,
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
}`,
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
      rosterSource
      __typename
    }
    __typename
  }
}`,
  UserEmailsQuery: `query UserEmailsQuery {
  user {
    id
    authEmails
    __typename
  }
}`,
  userForConversationNotice: `query userForConversationNotice {
  user {
    id
    hasParents
    hasCoach
    __typename
  }
}`,
  UserHasDismissedQuery: `query UserHasDismissedQuery($itemName: String!) {
  dismissedItem(itemName: $itemName) {
    id
    isDismissed
    __typename
  }
}`,
  UserNextUpcomingAssignment: `query UserNextUpcomingAssignment($contentDescriptors: [String!]!) {
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
    assignmentsPageForContentItems(contentDescriptors: $contentDescriptors) {
      assignments {
        id
        studentList {
          ...Classroom
          __typename
        }
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
  signupCode
  __typename
}`,
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
      folderId
      granterEmail
      locale: kaLocale
      canPublish
      __typename
    }
    __typename
  }
}`,
  UserPermissionsForContent: `query UserPermissionsForContent {
  user {
    id
    canEdit: hasPermission(name: "can_edit_content", scope: ANY_ON_CURRENT_LOCALE)
    __typename
  }
}`,
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
}`,
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
}`,
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
        currentStep
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
}`,
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
}`,
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
}`,
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
}`,
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
}`,
  validateResetToken: `query validateResetToken($token: String!) {
  validateResetToken(token: $token) {
    error {
      code
      __typename
    }
    __typename
  }
}`,
  verifyThirdPartyAuth: `query verifyThirdPartyAuth($oauthType: ThirdPartyOAuthType!, $accessToken: String!) {
  verifyThirdPartyAuth(oauthType: $oauthType, accessToken: $accessToken) {
    error {
      code
      __typename
    }
    email
    __typename
  }
}`,
  videoByReadableId: `query videoByReadableId($videoId: String!) {
  video(id: $videoId) {
    id
    title
    youtubeId
    contentId
    __typename
  }
}`,
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
}`,
  videoDataYoutubeId: `query videoDataYoutubeId($videoId: String!) {
  video: videoByYoutubeId(youtubeId: $videoId) {
    id
    title
    youtubeId
    contentId
    __typename
  }
}`,
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
  WhatNextPrompt: `query WhatNextPrompt($assignmentsPageSize: Int, $assignmentsOrderBy: AssignmentOrder!, $assignmentsDueAfter: DateTime!) {
  user {
    id
    kaid
    assignmentsPage(
      pageSize: $assignmentsPageSize
      orderBy: $assignmentsOrderBy
      dueAfter: $assignmentsDueAfter
    ) {
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
    recommendations(queryParams: {}) {
      content {
        id
        title
        defaultUrlPath
        __typename
      }
      reason
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
}`,
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
}`,
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
}`,
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
}`,
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
}`,
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
}`,
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
}`,
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
}`,
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
}`,
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
}`,
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
}`,
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
}`,
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
}`,
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
        bonusNumCorrect
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  getGradesProgress: `query getGradesProgress($filters: DistrictCourseProgressFilters!) {
  districtCourseProgressByGrade(filters: $filters) {
    dateInfo {
      from
      upTo
      lastUpdatedDate
      __typename
    }
    learningMinutesTarget {
      minutesPerWeek
      __typename
    }
    skillsLeveledUp {
      skillsPerWeek
      __typename
    }
    skillsToProficient {
      skillsPerWeek
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
        totalLearners
        averageMinutes
        averageSkillsLeveledToProficient
        averageSkillsLeveledUp
        averageSkillsWorkedOn
        percent0
        percent1to15
        percent15to30
        percent30plus
        attemptedPercent
        familiarPercent
        proficientPercent
        masteredPercent
        minutesTargetStatus
        skillsLeveledUpTargetStatus
        skillsToProficientTargetStatus
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  guidePreferences: `query guidePreferences {
  user {
    id
    aiGuidePreferences {
      readingLevel
      guideLanguageCode
      __typename
    }
    __typename
  }
}`,
  MappedStandardsForContent: `query MappedStandardsForContent($contentDescriptor: String!, $locale: String, $region: String) {
  standards: standardMappingsForContent(
    contentDescriptor: $contentDescriptor
    locale: $locale
    region: $region
  ) {
    setId
    id
    standardId
    description
    relativeUrl
    setOfStandards {
      id
      isDiscoverable
      __typename
    }
    __typename
  }
}`,
  masteryAssignmentsDevAdmin: `query masteryAssignmentsDevAdmin($classCode: String!, $activeFilter: MasteryAssignmentActiveFilter, $curationNodeLevel: MasteryAssignmentCurationNodeLevel) {
  classroom(classCode: $classCode) {
    id
    cacheId
    masteryAssignments(
      activeFilter: $activeFilter
      curationNodeLevel: $curationNodeLevel
    ) {
      id
      type: curationNodeLevel
      archivedDate
      assignedDate
      createdDate
      dueDate
      course {
        id
        translatedTitle
        iconUrl
        relativeUrl
        __typename
      }
      isArchived
      studentData {
        kaid
        status
        assignedDate
        completedDate
        unassignedDate
        __typename
      }
      studentProgress {
        kaid
        lastWorkedOn
        currentMasteryV2 {
          percentage
          pointsEarned
          pointsAvailable
          __typename
        }
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
}`,
  unitMasteryAssignmentChanges: `query unitMasteryAssignmentChanges($assignmentID: ID!, $maxNumChanges: Int!) {
  unitMasteryAssignmentChanges(
    assignmentID: $assignmentID
    maxNumChanges: $maxNumChanges
  ) {
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
}`,
  getCoachedClassrooms: `query getCoachedClassrooms {
  user {
    id
    coachedClassrooms {
      id
      cacheId
      name
      descriptor
      students: studentKaidsAndNicknames {
        id
        nickname: coachNickname
        __typename
      }
      countStudents
      __typename
    }
    __typename
  }
}`,
  getDistrictCourseProgressByStudent: `query getDistrictCourseProgressByStudent($filters: DistrictCourseProgressFilters!, $studentKaid: String!, $getKmapTopics: Boolean!, $classroomDescriptor: String!) {
  districtCourseProgressByCourseForStudent(
    filters: $filters
    studentKaid: $studentKaid
    classroomDescriptor: $classroomDescriptor
  ) {
    dateInfo {
      lastUpdatedDate
      from
      upTo
      __typename
    }
    rows {
      course {
        id
        title: translatedTitle
        __typename
      }
      info {
        averageMinutes
        activeLearners
        percent0
        percent1to15
        percent15to30
        percent30plus
        averageSkillsWorkedOn
        averageSkillsLeveledUp
        averageSkillsLeveledToProficient
        attemptedPercent
        familiarPercent
        proficientPercent
        masteredPercent
        minutesTargetStatus
        skillsLeveledUpTargetStatus
        skillsToProficientTargetStatus
        __typename
      }
      __typename
    }
    __typename
  }
  kmapTopics @include(if: $getKmapTopics) {
    id
    band
    bandKey
    strand
    strandKey
    title
    __typename
  }
}`,
  getProgressByTeacher: `query getProgressByTeacher($filters: DistrictCourseProgressFilters!) {
  districtCourseProgressByTeacher(filters: $filters) {
    dateInfo {
      from
      upTo
      lastUpdatedDate
      __typename
    }
    learningMinutesTarget {
      minutesPerWeek
      __typename
    }
    skillsLeveledUp {
      skillsPerWeek
      __typename
    }
    skillsToProficient {
      skillsPerWeek
      __typename
    }
    rows {
      user {
        id
        kaid
        userDistrictInfos {
          id
          displayNameForTeacher
          __typename
        }
        __typename
      }
      info {
        activeLearners
        totalLearners
        averageMinutes
        averageSkillsLeveledToProficient
        averageSkillsLeveledUp
        averageSkillsWorkedOn
        percent0
        percent1to15
        percent15to30
        percent30plus
        attemptedPercent
        familiarPercent
        proficientPercent
        masteredPercent
        minutesTargetStatus
        skillsLeveledUpTargetStatus
        skillsToProficientTargetStatus
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  getUserKhanmigoDonation: `query getUserKhanmigoDonation($kaid: String!) {
  khanmigoDonation(kaid: $kaid) {
    donationAmount
    donationStatus
    lastModifiedDate
    __typename
  }
}`,
  aiGuideDrafts: `query aiGuideDrafts {
  aiGuidePrompts {
    id
    name
    latestVersion {
      id
      versionNumber
      __typename
    }
    draft {
      hash
      isReadyForReview
      releaseNotes
      promptText
      __typename
    }
    __typename
  }
}`,
  aiGuidePrompt: `query aiGuidePrompt($name: String!) {
  aiGuidePrompt(name: $name) {
    id
    name
    description
    questions {
      id
      questionText
      __typename
    }
    versions {
      id
      versionNumber
      releaseNotes
      promptText
      configJSON
      tokenCount
      __typename
    }
    draft {
      hash
      isReadyForReview
      releaseNotes
      promptText
      configJSON
      tokenCount
      __typename
    }
    source
    __typename
  }
}`,
  aiGuidePrompts: `query aiGuidePrompts {
  aiGuidePrompts {
    id
    name
    description
    source
    latestVersion {
      id
      versionNumber
      tokenCount
      configJSON
      __typename
    }
    __typename
  }
}`,
  classroomStudentNames: `query classroomStudentNames($classroomDescriptor: String!) {
  classroomByDescriptorV2(descriptor: $classroomDescriptor) {
    id
    cacheId
    studentKaidsAndNicknames {
      id
      coachNickname
      __typename
    }
    __typename
  }
}
`,
  getPrecachedDateRanges: `query getPrecachedDateRanges($selectedNodeID: String!) {
  districtCourseProgressDates(selectedNodeID: $selectedNodeID) {
    lastUpdatedDate
    startDate: from
    endDate: upTo
    numDays
    isCustom
    isInProgress
    rangeType
    __typename
  }
}`,
  contentPermissionsReport_getUsersWithGrants: `query contentPermissionsReport_getUsersWithGrants($withRoles: [String!]) {
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
      scope {
        contentKind
        kaLocale
        __typename
      }
      grantingUserEmail
      permissionId
      __typename
    }
    __typename
  }
}`,
  previewAiGuideDisabledEmailByUser: `query previewAiGuideDisabledEmailByUser($reason: ReasonForDisablingAIGuide!) {
  preview: previewAiGuideDisabledEmail(reason: $reason) {
    textContent
    htmlContent
    __typename
  }
}`,
  previewAiGuideDisabledEmailGeneric: `query previewAiGuideDisabledEmailGeneric($reason: ReasonForDisablingAIGuide!) {
  preview: previewAiGuideDisabledEmail(reason: $reason) {
    textContent
    htmlContent
    __typename
  }
}`,
  previewAiGuideDisabledEmailInsufficientDonation: `query previewAiGuideDisabledEmailInsufficientDonation($reason: ReasonForDisablingAIGuide!) {
  preview: previewAiGuideDisabledEmail(reason: $reason) {
    textContent
    htmlContent
    __typename
  }
}`,
  previewAiGuideDisabledEmailLapsedDonation: `query previewAiGuideDisabledEmailLapsedDonation($reason: ReasonForDisablingAIGuide!) {
  preview: previewAiGuideDisabledEmail(reason: $reason) {
    textContent
    htmlContent
    __typename
  }
}`,
  previewAiGuideDisabledEmailModeration: `query previewAiGuideDisabledEmailModeration($reason: ReasonForDisablingAIGuide!) {
  preview: previewAiGuideDisabledEmail(reason: $reason) {
    textContent
    htmlContent
    __typename
  }
}`,
  previewAiGuideNotEligibleEmailModeration: `query previewAiGuideNotEligibleEmailModeration($reason: ReasonForDisablingAIGuide!) {
  preview: previewAiGuideNotEligibleEmail(reason: $reason) {
    textContent
    htmlContent
    __typename
  }
}`,
  previewAiGuideNotEligibleEmailNotAnAdult: `query previewAiGuideNotEligibleEmailNotAnAdult($reason: ReasonForDisablingAIGuide!) {
  preview: previewAiGuideNotEligibleEmail(reason: $reason) {
    textContent
    htmlContent
    __typename
  }
}`,
  previewAiGuideNotEligibleEmailTooManyChildren: `query previewAiGuideNotEligibleEmailTooManyChildren($reason: ReasonForDisablingAIGuide!) {
  preview: previewAiGuideNotEligibleEmail(reason: $reason) {
    textContent
    htmlContent
    __typename
  }
}`,
  previewAiGuideNotEligibleEmailUnsupportedCountry: `query previewAiGuideNotEligibleEmailUnsupportedCountry($reason: ReasonForDisablingAIGuide!) {
  preview: previewAiGuideNotEligibleEmail(reason: $reason) {
    textContent
    htmlContent
    __typename
  }
}`,
  GetProgressByCourseForStudent: `query GetProgressByCourseForStudent($filters: TeacherOverviewReportFilters!, $studentKaid: String!) {
  teacherOverviewByCourseForStudentReport(
    filters: $filters
    studentKaid: $studentKaid
  ) {
    dateInfo {
      from
      upTo
      lastUpdatedDate
      __typename
    }
    rows {
      course {
        id
        translatedTitle
        __typename
      }
      info {
        minutes
        leveledToProficient
        leveledUp
        workedOn
        attempted
        familiar
        proficient
        mastered
        minutesTargetStatus
        skillsLeveledUpTargetStatus
        skillsToProficientTargetStatus
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  GetProgressByStudent: `query GetProgressByStudent($filters: TeacherOverviewReportFilters!, $classDescriptor: String!) {
  teacherOverviewByStudentReport(filters: $filters) {
    dateInfo {
      from
      upTo
      lastUpdatedDate
      __typename
    }
    learningMinutesTarget {
      minutesPerWeek
      __typename
    }
    skillsLeveledUp {
      skillsPerWeek
      __typename
    }
    skillsToProficient {
      skillsPerWeek
      __typename
    }
    rows {
      user {
        id
        kaid
        __typename
      }
      info {
        minutes
        leveledToProficient
        leveledUp
        workedOn
        attempted
        familiar
        proficient
        mastered
        minutesTargetStatus
        skillsLeveledUpTargetStatus
        skillsToProficientTargetStatus
        __typename
      }
      __typename
    }
    __typename
  }
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
}`,
  getNonProfileKhanmigoEligibilityData: `query getNonProfileKhanmigoEligibilityData {
  user {
    id
    isAIGuideEnabled
    aiGuideDisabledReason
    isEnrolledInAIGuide
    children {
      id
      classrooms {
        id
        cacheId
        __typename
      }
      __typename
    }
    age
    hasKhanmigoViaClassy
    hasKhanmigoViaStripe
    __typename
  }
}`,
  GetProgressBySkillForStudentForCourse: `query GetProgressBySkillForStudentForCourse($filters: TeacherOverviewReportFilters!, $studentKaid: String!, $courseId: String!) {
  teacherOverviewBySkillForStudentForCourseReport(
    filters: $filters
    studentKaid: $studentKaid
  ) {
    dateInfo {
      from
      upTo
      lastUpdatedDate
      __typename
    }
    rows {
      skill {
        id
        translatedTitle
        __typename
      }
      info {
        leveledUp
        leveledToProficient
        attempted
        familiar
        proficient
        mastered
        minutesTargetStatus
        skillsLeveledUpTargetStatus
        skillsToProficientTargetStatus
        __typename
      }
      __typename
    }
    __typename
  }
  courseById(id: $courseId) {
    id
    unitChildren {
      id
      translatedTitle
      filteredContent(kinds: ["Exercise"]) {
        __typename
        id
      }
      __typename
    }
    __typename
  }
}`,
  previewAiGuideDisabledEmailTrialEnded: `query previewAiGuideDisabledEmailTrialEnded($reason: ReasonForDisablingAIGuide!) {
  preview: previewAiGuideDisabledEmail(reason: $reason) {
    textContent
    htmlContent
    __typename
  }
}`,
  allClassroomCoachedStudentNames: `query allClassroomCoachedStudentNames {
  user {
    id
    coachedClassrooms {
      descriptor
      cacheId
      id
      studentKaidsAndNicknames {
        id
        coachNickname
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  previewAiGuideDisabledEmailChildrenInClassroom: `query previewAiGuideDisabledEmailChildrenInClassroom($reason: ReasonForDisablingAIGuide!) {
  preview: previewAiGuideDisabledEmail(reason: $reason) {
    textContent
    htmlContent
    __typename
  }
}`,
  getMasteryAssignmentStudentProgress: `query getMasteryAssignmentStudentProgress($classCode: String!, $descriptors: [MasteryAssignmentDescriptor!]!) {
  classroom(classCode: $classCode) {
    id
    cacheId
    masteryAssignments: masteryAssignmentsByDescriptors(descriptors: $descriptors) {
      id
      type: curationNodeLevel
      studentProgress {
        kaid
        currentMasteryV2 {
          percentage
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  CourseIntroContent: `query CourseIntroContent($descriptor: String!) {
  learnableContentByDescriptors(contentDescriptors: [$descriptor]) {
    id
    defaultUrlPath
    contentKind
    ... on Video {
      duration
      thumbnailUrl
      __typename
    }
    __typename
  }
}`,
  CourseIntroCurationNode: `query CourseIntroCurationNode($id: String!) {
  topicById(id: $id) {
    id
    relativeUrl
    __typename
  }
}`,
  getUserInterests: `query getUserInterests($kaid: String!) {
  user(kaid: $kaid) {
    id
    isCollectingInterests
    aiGuideUserInterests {
      interest
      combinedKey
      __typename
    }
    __typename
  }
}`,
  GetAllSetsOfStandardsForRegion: `query GetAllSetsOfStandardsForRegion($regionSlug: String!, $domain: String!, $isDiscoverable: Boolean) {
  standardRegions(isDiscoverable: $isDiscoverable, slug: $regionSlug) {
    error {
      code
      debugMessage
      __typename
    }
    standardRegion {
      id
      imageUrl
      isDiscoverable
      __typename
    }
    __typename
  }
  allSetsOfStandards(
    domain: $domain
    isDiscoverable: $isDiscoverable
    regionSlug: $regionSlug
  ) {
    id
    name
    courseEntities {
      id
      relativeUrl
      standaloneTitle
      __typename
    }
    standards {
      id
      setId
      standardId
      description
      children
      relativeUrl
      mappedContent {
        ... on LearnableContent {
          id
          contentKind
          title
          defaultUrlPath
          __typename
        }
        __typename
      }
      __typename
    }
    domains
    __typename
  }
}`,
  GetSetOfStandards: `query GetSetOfStandards($setId: String!, $region: String) {
  setOfStandards(setId: $setId, region: $region) {
    id
    isDiscoverable
    name
    standardRegionIds
    domains
    standards {
      id
      standardId
      description
      coverage
      children
      groupLabel
      mappedContent {
        ... on LearnableContent {
          id
          contentKind
          title
          urlWithinStandardSet(setId: $setId)
          defaultUrlPath
          __typename
        }
        ... on Exercise {
          interimAssessmentType
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  GetStandardRegionsForUS: `query GetStandardRegionsForUS($isDiscoverable: Boolean) {
  standardRegions(isDiscoverable: $isDiscoverable) {
    error {
      code
      debugMessage
      __typename
    }
    standardRegion {
      id
      isDiscoverable
      slug
      __typename
    }
    __typename
  }
}
`,
  courseProgress: `query courseProgress($ids: [String!]!) {
  user {
    id
    courseProgressesV2(courseIds: $ids) {
      topic {
        domainSlug
        iconPath
        id
        slug
        title
        relativeUrl
        __typename
      }
      unitProgresses {
        lastWorkedOn
        topic {
          id
          iconPath
          title
          relativeUrl
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  courseProgressQuery: `query courseProgressQuery($topicId: String!) {
  user {
    id
    courseProgress(topicId: $topicId) {
      currentMasteryV2 {
        percentage
        pointsEarned
        __typename
      }
      masteryMap {
        progressKey
        status
        __typename
      }
      unitProgresses {
        currentMasteryV2 {
          percentage
          pointsEarned
          __typename
        }
        unitId
        __typename
      }
      __typename
    }
    exerciseData {
      masteryChallengeStatus(courseId: $topicId) {
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
}`,
  districtHasKhanmigo: `query districtHasKhanmigo($districtId: ID!) {
  districtById(districtId: $districtId) {
    id
    hasKhanmigo
    __typename
  }
}`,
  isEligibleForMasteryChallenge: `query isEligibleForMasteryChallenge($courseId: String!) {
  user {
    id
    exerciseData {
      masteryChallengeStatus(courseId: $courseId) {
        isEligible
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  standardRegionsForRegionPickerQuery: `query standardRegionsForRegionPickerQuery {
  standardRegions {
    standardRegion {
      id
      __typename
    }
    __typename
  }
}`,
  AllContentIcons: `query AllContentIcons {
  allDomains {
    id
    iconUrl
    relativeUrl
    courseChildren {
      id
      iconUrl
      relativeUrl
      unitChildren {
        id
        iconUrl
        relativeUrl
        lessonChildren {
          id
          iconUrl
          relativeUrl
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  StudentKMapGoals: `query StudentKMapGoals($kaid: String, $isPast: Boolean!, $classDescriptor: String) {
  user(kaid: $kaid) {
    id
    hasTakenKmapExam
    courseMasteryAssignments(
      filter: KMAP
      isPast: $isPast
      classroomDescriptor: $classDescriptor
    ) {
      id
      activeStudentDataV2 {
        kaid
        assignedDate
        __typename
      }
      isKmap
      isPast
      whyPastV2
      whenPast
      whenCompleted
      classroom {
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
          mapGrowthTest {
            key
            __typename
          }
          __typename
        }
        id
        slug
        domainSlug
        translatedTitle
        largeIconPath
        __typename
      }
      currentUserProgressV2 {
        currentMasteryV2 {
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
}`,
  classroomCreatedOnQuery: `query classroomCreatedOnQuery($classCode: String!) {
  classroom(classCode: $classCode) {
    cacheId
    createdOn
    id
    __typename
  }
}`,
  districtLastNKhanmigoJobs: `query districtLastNKhanmigoJobs($districtId: ID!, $includedDryRun: Boolean!, $numJobs: Int!) {
  districtById(districtId: $districtId) {
    id
    lastNKhanmigoJobs(includeDryRun: $includedDryRun, numJobs: $numJobs) {
      createdAt
      rosterSource
      timeSpentSeconds
      dryRunStatus
      khanmigoStudents
      khanmigoAddedStudents
      khanmigoRemovedStudents
      khanmigoTeachers
      khanmigoAddedTeachers
      khanmigoRemovedTeachers
      khanmigoSchoolAdmins
      khanmigoAddedSchoolAdmins
      khanmigoRemovedSchoolAdmins
      khanmigoDistrictAdmins
      khanmigoAddedDistrictAdmins
      khanmigoRemovedDistrictAdmins
      khanmigoTotal
      khanmigoAddedTotal
      khanmigoRemovedTotal
      __typename
    }
    __typename
  }
}`,
  getStandardsDataForLocaleRegionAndDomain: `query getStandardsDataForLocaleRegionAndDomain($locale: String, $region: String, $domain: String) {
  allSetsOfStandards(locale: $locale, region: $region, domain: $domain) {
    id
    isDiscoverable
    name
    shortName
    standards {
      id
      standardId
      description
      children
      relativeUrl
      __typename
    }
    __typename
  }
}`,
  allProducts: `query allProducts {
  allProducts {
    id
    name
    isActive
    description
    extProductID
    validationBillingCountries
    __typename
  }
}`,
  product: `query product($id: ID) {
  product(id: $id) {
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
}`,
  GetStandardRegionsForCountry: `query GetStandardRegionsForCountry($country: String!, $isDiscoverable: Boolean) {
  standardRegions(country: $country, isDiscoverable: $isDiscoverable) {
    error {
      code
      debugMessage
      __typename
    }
    standardRegion {
      id
      isDiscoverable
      slug
      __typename
    }
    __typename
  }
}`,
  TranslationEditor_GetContentForDescriptors: `query TranslationEditor_GetContentForDescriptors($contentDescriptors: [String!]!) {
  contentForDescriptors(descriptors: $contentDescriptors) {
    id
    parentTopic {
      id
      __typename
    }
    __typename
  }
}`,
  ActivitiesQuery: `query ActivitiesQuery {
  courseById(id: "x1b615e2cf0b0f17f") {
    id
    unitChildren {
      id
      listed
      translatedTitle
      lessonChildren {
        id
        iconUrl
        translatedTitle
        allLearnableContent {
          id
          slug
          translatedTitle
          defaultUrlPath
          contentDescriptor
          ... on AIGuideActivity {
            persona
            activityType
            isAssignable
            worksInMobileApp
            worksOnSmallLayouts
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
}`,
  getStudentExerciseContentReport_CourseChallenge: `query getStudentExerciseContentReport_CourseChallenge($assignmentId: String!) {
  student: user {
    id
    kaid
    nickname
    assignment(id: $assignmentId) {
      id
      assignedDate
      contents {
        id
        translatedTitle
        __typename
      }
      itemCompletionStates {
        assessmentItemsForAssessment {
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
}`,
  hasCooldown: `query hasCooldown {
  user {
    id
    hasCooldown
    __typename
  }
}`,
  ContentCarouselContent: `query ContentCarouselContent($descriptors: [String!]!) {
  learnableContentByDescriptors(contentDescriptors: $descriptors) {
    id
    translatedTitle
    contentKind
    thumbnailUrl
    urlWithinCurationNode(ancestorId: "xf191fa455939c8e1")
    ... on Video {
      duration
      __typename
    }
    parentTopic {
      id
      slug
      translatedTitle
      parent {
        id
        relativeUrl
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  getTokenCount: `query getTokenCount($promptText: String!) {
  getTokenCount(promptText: $promptText)
}`,
  devadminStringTranslation: `query devadminStringTranslation($message: String!, $messageContext: String, $kaLocale: KALocale!) {
  stringTranslationUncached(
    message: $message
    messageContext: $messageContext
    kaLocale: $kaLocale
  ) {
    found
    isAITranslated
    isNewTranslation
    translation
    __typename
  }
}`,
  getInterestsCollectionStatus: `query getInterestsCollectionStatus {
  user {
    id
    isCollectingInterests
    __typename
  }
}`,
  Content_GetPrerequisiteExercises: `query Content_GetPrerequisiteExercises($slugs: [String!]!) {
  exercisesBySlugs(slugs: $slugs) {
    id
    slug
    translatedTitle
    translatedDescription
    mappedStandards {
      id
      standardId
      __typename
    }
    __typename
  }
}`,
  getKhanmigoEnabled: `query getKhanmigoEnabled {
  user {
    id
    hasAccessToAIGuideLearner
    isAIGuideEnabled
    __typename
  }
}`,
  getMasteryAssignmentMedianProgress: `query getMasteryAssignmentMedianProgress($classCode: String!, $id: ID!, $curationNodeLevel: MasteryAssignmentCurationNodeLevel!) {
  classroom(classCode: $classCode) {
    id
    cacheId
    masteryAssignments: masteryAssignmentsByDescriptors(
      descriptors: [{id: $id, curationNodeLevel: $curationNodeLevel}]
    ) {
      id
      studentProgressMedian
      __typename
    }
    __typename
  }
}`,
  learnableContentPathQuery: `query learnableContentPathQuery($id: String!, $kind: String!) {
  learnableContent(id: $id, kind: $kind) {
    id
    defaultUrlPath
    __typename
  }
}`,
  getStringTranslation: `query getStringTranslation($message: String!, $messageContext: String, $messageLocation: String!, $kaLocale: KALocale!) {
  stringTranslation(
    message: $message
    messageContext: $messageContext
    messageLocation: $messageLocation
    kaLocale: $kaLocale
  ) {
    translation
    found
    isAITranslated
    isNewTranslation
    __typename
  }
}`,
  contentEditorGetChallengeRevision: `query contentEditorGetChallengeRevision($id: String!) {
  challengeRevisionById(id: $id) {
    id
    contentId
    contentKind
    description
    listed
    title
    sha
    code
    tests
    doNotPublish
    __typename
  }
}`,
  previewAiGuideDisabledDuringDistrictActivationEmail: `query previewAiGuideDisabledDuringDistrictActivationEmail {
  preview: previewAiGuideDisabledDuringDistrictActivationEmail {
    textContent
    htmlContent
    __typename
  }
}`,
  TranslationEditor_GetAIGuideActivityStrings: `query TranslationEditor_GetAIGuideActivityStrings($contentDescriptor: String!) {
  contentForDescriptors(descriptors: [$contentDescriptor]) {
    id
    defaultUrlPath
    listed
    title
    __typename
  }
}`,
  previewDistrictKhamigoSevereFlagNotificationEmail: `query previewDistrictKhamigoSevereFlagNotificationEmail {
  preview: previewDistrictKhamigoSevereFlagNotificationEmail {
    textContent
    htmlContent
    __typename
  }
}`,
  challengeEditorQuery: `query challengeEditorQuery($contentId: String!) {
  challengeRevisionById(id: $contentId) {
    ...ChallengeRevision
    __typename
  }
  contentEditingStatus {
    editingDisabled
    publishDisabled
    __typename
  }
  isEditableByCurrentUser(contentId: $contentId, contentKind: "Challenge")
  isPublishableByCurrentUser(contentId: $contentId, contentKind: "Challenge")
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
  projectEditorQuery: `query projectEditorQuery($contentId: String!) {
  projectRevisionById(id: $contentId) {
    ...ProjectRevision
    __typename
  }
  contentEditingStatus {
    editingDisabled
    publishDisabled
    __typename
  }
  isEditableByCurrentUser(contentId: $contentId, contentKind: "Project")
  isPublishableByCurrentUser(contentId: $contentId, contentKind: "Project")
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
  getAdminsForDistrict: `query getAdminsForDistrict($districtID: String!) {
  getAdminsForDistrict(districtID: $districtID) {
    id
    uuid
    displayNameForTeacher
    districtProvidedEmail
    kaid
    moderatorOfSchools {
      id
      __typename
    }
    adminOfSchools {
      id
      __typename
    }
    __typename
  }
}`,
  getKhanmigoModeratorsForDistrict: `query getKhanmigoModeratorsForDistrict($districtID: String!) {
  getKhanmigoModeratorsForDistrict(districtID: $districtID) {
    id
    uuid
    displayNameForTeacher
    kaid
    moderatorOfSchools {
      id
      name
      __typename
    }
    adminOfSchools {
      id
      __typename
    }
    __typename
  }
}`,
  LearnPrototype_UserClassrooms: `query LearnPrototype_UserClassrooms {
  user {
    id
    classrooms {
      id
      cacheId
      name
      descriptor
      topics {
        id
        translatedTitle
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  aiGuideOwnedSwagQuery: `query aiGuideOwnedSwagQuery {
  user {
    id
    aiGuideSwagOwned {
      id
      name
      altText
      description
      price
      __typename
    }
    __typename
  }
}`,
  aiGuideSwagQuery: `query aiGuideSwagQuery {
  aiGuideSwag {
    id
    name
    altText
    description
    price
    __typename
  }
}`,
  activeEssaySession: `query activeEssaySession {
  activeEssaySession {
    draft {
      feedbackList {
        _: id
        feedbackID
        dimension
        feedbackText
        isPositive
        isResolved
        relevantParagraphId
        relevantQuotedText
        thread {
          id
          interactions {
            answer
            annotations
            flagged
            id
            question
            __typename
          }
          __typename
        }
        __typename
      }
      id
      submittedText
      __typename
    }
    essayInstructions
    id
    mostRecentEditedText
    essayVersion
    paragraphIDToParagraphNumbers {
      paragraphID
      paragraphNumbers
      __typename
    }
    studentGradeLevel
    __typename
  }
}`,
  getUserAdminOfSchools: `query getUserAdminOfSchools {
  user {
    id
    userDistrictInfos {
      id
      adminOfSchools {
        id
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  devadminGetKhanmigoModeratorsForDistrict: `query devadminGetKhanmigoModeratorsForDistrict($districtID: String!) {
  getKhanmigoModeratorsForDistrict(districtID: $districtID) {
    id
    displayNameForTeacher
    moderatorOfSchools {
      id
      name
      __typename
    }
    __typename
  }
}`,
  AssignmentsPageForContentItems: `query AssignmentsPageForContentItems($contentDescriptors: [String!]!, $cursor: ID, $pageSize: Int) {
  user {
    id
    assignmentsPageForContentItems(
      contentDescriptors: $contentDescriptors
      after: $cursor
      pageSize: $pageSize
    ) {
      pageInfo {
        nextCursor
        __typename
      }
      assignments {
        id
        dueDate
        title
        itemCompletionStates {
          studentKaid
          completedOn
          __typename
        }
        contents {
          ... on AIGuideActivity {
            id
            contentId
            slug
            translatedTitle
            activityType
            defaultUrlPath
            __typename
          }
          __typename
        }
        classroom {
          cacheId
          id
          name
          descriptor
          coach {
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
}`,
  getDistrictDisallowDiscussions: `query getDistrictDisallowDiscussions {
  user {
    id
    districtDisallowDiscussions
    __typename
  }
}`,
  getIndexedContentSearchResults: `query getIndexedContentSearchResults($query: String!, $allowedTopicAncestors: [String], $contentKinds: [String], $pageNum: Int) {
  searchPage(
    query: $query
    allowedTopicAncestors: $allowedTopicAncestors
    contentKinds: $contentKinds
    pageNum: $pageNum
  ) {
    metadata {
      currentPage
      numPages
      resultCount
      __typename
    }
    pageInfo {
      nextCursor
      __typename
    }
    results {
      contentId
      kind
      curationNode {
        id
        iconPath
        title
        translatedTitle
        description
        translatedDescription
        domainSlug
        contentKind
        relativeUrl
        parent {
          id
          iconPath
          contentKind
          title
          translatedTitle
          parent {
            id
            iconPath
            contentKind
            title
            translatedTitle
            __typename
          }
          __typename
        }
        __typename
      }
      learnableContent {
        id
        title
        translatedTitle
        description
        translatedDescription
        defaultUrlPath
        parentTopic {
          id
          domainSlug
          title
          translatedTitle
          contentKind
          iconPath
          parent {
            id
            title
            translatedTitle
            contentKind
            relativeUrl
            iconPath
            parent {
              id
              title
              translatedTitle
              contentKind
              relativeUrl
              iconPath
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
}`,
  exerciseEditorQuery: `query exerciseEditorQuery($contentId: String!) {
  exerciseRevisionById(id: $contentId) {
    ...ExerciseRevision
    __typename
  }
  exerciseById(id: $contentId) {
    id
    contentId
    assessmentItems {
      id
      contentId
      sha
      __typename
    }
    __typename
  }
  contentEditingStatus {
    editingDisabled
    publishDisabled
    __typename
  }
  isEditableByCurrentUser(contentId: $contentId, contentKind: "Exercise")
  isPublishableByCurrentUser(contentId: $contentId, contentKind: "Exercise")
  user {
    id
    nickname
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
  getSatAccountSettings: `query getSatAccountSettings($targetKaid: String) {
  target: user(kaid: $targetKaid) {
    id
    isChild
    isSatStudent
    satStudent(id: $targetKaid) {
      id
      cbLinked
      extraTimeSections
      timePercentMultiplier
      __typename
    }
    __typename
  }
  chronomancer {
    isCollegeBoardIntegrationEnabled
    __typename
  }
}`,
  allCoacheeNames: `query allCoacheeNames {
  user {
    id
    coachedClassrooms {
      descriptor
      cacheId
      id
      studentKaidsAndNicknames {
        id
        coachNickname
        __typename
      }
      __typename
    }
    children {
      id
      nickname
      __typename
    }
    __typename
  }
}`,
  courseChallengeCsvQuery: `query courseChallengeCsvQuery($assignmentId: String!, $teacherKaid: String) {
  coach: user {
    id
    assignment: assignmentByThisUser(id: $assignmentId) {
      id
      itemCompletionStates: itemCompletionStatesForAllStudents {
        completedOn
        student {
          id
          coachNickname(teacherKaid: $teacherKaid)
          __typename
        }
        bestScoreSkills {
          levelChanges {
            id
            after
            changeDirection
            exercise {
              id
              translatedTitle
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
    }
    __typename
  }
}`,
  ActivitySessionsV2Query: `query ActivitySessionsV2Query($studentKaid: String!, $endDate: Date, $startDate: Date, $courseType: String, $activityKind: String, $after: ID, $pageSize: Int) {
  user(kaid: $studentKaid) {
    id
    activityLogV2(
      endDate: $endDate
      startDate: $startDate
      courseType: $courseType
      activityKind: $activityKind
    ) {
      time {
        exerciseMinutes
        totalMinutes
        __typename
      }
      activitySessions(pageSize: $pageSize, after: $after) {
        sessions {
          ...ActivitySession
          ... on BasicActivitySession {
            aiGuideThread {
              title
              id
              __typename
            }
            essaySession {
              essayTitle
              id
              __typename
            }
            __typename
          }
          ... on MasteryActivitySession {
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
}`,
  aiGuideConversionTrialInfo: `query aiGuideConversionTrialInfo {
  user {
    id
    age
    aiGuideAccessPlans {
      id
      isActive
      enrollmentGroup
      __typename
    }
    isAIGuideEnabled
    includesDistrictOwnedData
    __typename
  }
}`,
  pythonProgramQuery: `query pythonProgramQuery($programId: String!) {
  program: programById(id: $programId) {
    byChild
    category
    codeFormat
    created
    author {
      id
      nickname
      profileRoot
      profile {
        accessLevel
        __typename
      }
      __typename
    }
    hiddenEverywhere: deleted
    description
    spinoffCount: displayableSpinoffCount
    docsUrlPath
    flags
    flaggedByKaids
    isFlaggedByCurrentUser
    height
    hiddenFromHotlist: hideFromHotlist
    id
    imagePath
    originIsProject
    isOwner
    authorKaid
    key
    newUrlPath
    originProgram {
      deleted
      translatedTitle
      url
      __typename
    }
    restrictPosting
    latestRevision {
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
    parentCurationNode {
      id
      slug
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
    definitelyNotSpam
    __typename
  }
}`,
  allFolders: `query allFolders {
  allFolders {
    id
    name
    __typename
  }
}`,
  khanLibraryCanCreateCourses: `query khanLibraryCanCreateCourses($folderId: String!) {
  user {
    id
    canCreateCourses: hasContentPermission(
      name: "can_create_courses"
      contentScope: {contentKind: TOPIC, folderId: $folderId}
    )
    canEditDomains: hasPermission(
      name: "can_edit_domain_properties"
      scope: ANY_ON_CURRENT_LOCALE
    )
    __typename
  }
}`,
  getFocusModeByClass: `query getFocusModeByClass($descriptor: String!) {
  classroom: classroomByDescriptorV2(descriptor: $descriptor) {
    id
    cacheId
    classroomDistrictInfo {
      id
      district {
        id
        __typename
      }
      __typename
    }
    students {
      id
      kaid
      coachNickname
      isAIGuideEnabled
      cooldownStatus {
        hasTeacherDirectedCooldown
        teacherDirectedCooldownExpiresAt
        teacherDirectedCooldownStartedBy {
          id
          kaid
          nickname
          __typename
        }
        __typename
      }
      userDistrictInfos {
        id
        district {
          id
          __typename
        }
        khanmigoShould
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  getCooldownStatus: `query getCooldownStatus {
  user {
    id
    hasCooldown
    cooldownStatus {
      hasAntiCheatCooldown
      lastAntiCheatCooldownExpiresAt
      hasTeacherDirectedCooldown
      teacherDirectedCooldownExpiresAt
      teacherDirectedCooldownStartedBy {
        id
        kaid
        nickname
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  courseEditorAdminCourseSnapshotJsons: `query courseEditorAdminCourseSnapshotJsons($courseId: String!) {
  courseSnapshotJsonsByCourseId(id: $courseId)
}`,
  GuideExtensionAllowedUrls: `query GuideExtensionAllowedUrls {
  allowedUrlList {
    allowedURLS {
      pattern
      __typename
    }
    __typename
  }
}`,
  courseEditorAdminCourseOperationJsons: `query courseEditorAdminCourseOperationJsons($courseId: String!) {
  courseOperationJsonsByCourseId(id: $courseId)
}`,
  GuideExtensionIsUserK4DStudent: `query GuideExtensionIsUserK4DStudent {
  user {
    id
    kaid
    isK4dStudent
    __typename
  }
}`,
  khanmigoEnabledForUserQuery: `query khanmigoEnabledForUserQuery {
  coach: user {
    id
    isAIGuideEnabled
    __typename
  }
}`,
  getAdminsForInProductAdminRostering: `query getAdminsForInProductAdminRostering($partnershipID: ID!, $districtID: ID!) {
  getVisibleAdminUDIs(
    partnershipID: $partnershipID
    districtID: $districtID
    allowPartial: true
  ) {
    id
    displayNameForTeacher
    districtProvidedEmail
    districtProvidedFirstName
    districtProvidedLastName
    district {
      id
      name
      __typename
    }
    primaryRole
    canManageAdmins
    canSeeAllSchools
    activationEmailSentAt
    rosterSource
    cleverId
    classlinkId
    kaid
    adminOfSchools(onlyVisible: true) {
      id
      name
      __typename
    }
    hasAdminDirectedInfo
    __typename
  }
  getVisibleUMIs(partnershipID: $partnershipID) {
    id
    email
    firstName
    lastName
    displayName
    canManageAdmins
    activationEmailSentAt
    kaid
    adminOf(administeredOnly: true) {
      ... on MetaDistrict {
        id
        name
        __typename
      }
      ... on District {
        id
        name
        __typename
      }
      __typename
    }
    adminOfHeight
    __typename
  }
}`,
  getKhanmigoCheckoutVideo: `query getKhanmigoCheckoutVideo($contentId: String!) {
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
}`,
  getNonProfileKhanmigoCheckoutEligibilityData: `query getNonProfileKhanmigoCheckoutEligibilityData {
  user {
    id
    children {
      id
      __typename
    }
    age
    hasKhanmigoViaStripe
    __typename
  }
}`,
  contentEditorGetAIGuideActivityRevision: `query contentEditorGetAIGuideActivityRevision($id: String!) {
  aiGuideActivityRevisionById(id: $id) {
    ...AIGuideActivityRevision
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
  GuideExtensionUserDistrictStatus: `query GuideExtensionUserDistrictStatus {
  user {
    id
    kaid
    isK4dStudent
    isKmapStudent
    isK4dTeacher
    isKmapTeacher
    __typename
  }
}`,
  assignmentData: `query assignmentData($assignmentID: String!) {
  user {
    id
    assignment(id: $assignmentID) {
      id
      title
      itemCompletionStates {
        studentKaid
        completedOn
        activitySubmissions {
          threadID
          __typename
        }
        __typename
      }
      classroom {
        id
        cacheId
        name
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  districtKhanmigoActivity: `query districtKhanmigoActivity($filter: KhanmigoDistrictFilters!) {
  districtKhanmigoActivity(filter: $filter) {
    totalUsers
    rows {
      activityType
      aIGuideActivity {
        id
        translatedTitle
        __typename
      }
      aiReportingLabel {
        id
        translatedTitle
        __typename
      }
      totalUsers
      userPercentage
      courseRows {
        course {
          id
          translatedTitle
          __typename
        }
        totalUsers
        userPercentage
        unitRows {
          unit {
            id
            translatedTitle
            __typename
          }
          totalUsers
          userPercentage
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  GetPartnership: `query GetPartnership($partnershipID: ID!) {
  getPartnershipById(partnershipId: $partnershipID) {
    ... on MetaDistrict {
      id
      name
      ancestors {
        id
        name
        __typename
      }
      levelLabel
      levelHeight
      countryCode
      descendants {
        ... on MetaDistrict {
          id
          parent {
            id
            __typename
          }
          name
          levelLabel
          levelHeight
          __typename
        }
        ... on District {
          id
          parent {
            id
            __typename
          }
          name
          levelLabel
          levelHeight
          countryCode
          rosterSyncingEnabled
          khanmigoPreference
          isTest
          goLiveDate
          schoolYearStart
          schoolYearEnd
          schools {
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
    ... on District {
      id
      name
      ancestors {
        id
        name
        __typename
      }
      levelLabel
      levelHeight
      countryCode
      rosterSyncingEnabled
      khanmigoPreference
      isTest
      goLiveDate
      schoolYearStart
      schoolYearEnd
      schools {
        id
        name
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  GetPartnerships: `query GetPartnerships($countryCodes: [String!], $includeDeleted: Boolean!, $onlyTeacherDirected: Boolean!) {
  getPartnerships(
    countryCodes: $countryCodes
    includeDeleted: $includeDeleted
    onlyTeacherDirected: $onlyTeacherDirected
  ) {
    ... on MetaDistrict {
      id
      name
      countryCode
      inferredAttributes {
        rosterSyncingEnabled
        isRosterSyncingEnabledConsistent
        khanmigoPreference
        isKhanmigoPreferenceConsistent
        isTest
        isTestConsistent
        goLiveDate
        isGoLiveDateConsistent
        schoolYearStart
        isSchoolYearStartConsistent
        schoolYearEnd
        isSchoolYearEndConsistent
        __typename
      }
      __typename
    }
    ... on District {
      id
      name
      countryCode
      rosterSyncingEnabled
      khanmigoPreference
      isTest
      goLiveDate
      schoolYearStart
      schoolYearEnd
      __typename
    }
    __typename
  }
}`,
  getExerciseProblemTypeKind: `query getExerciseProblemTypeKind($exerciseIds: [String!]!) {
  exercises: exercisesByIds(ids: $exerciseIds) {
    id
    problemTypeKind
    __typename
  }
}`,
  aiGuideSwagAppliedQuery: `query aiGuideSwagAppliedQuery {
  user {
    id
    aiGuideSwagApplied {
      id
      __typename
    }
    __typename
  }
}`,
  GuidePreferences: `query GuidePreferences {
  user {
    id
    aiGuidePreferences {
      readingLevel
      guideLanguageCode
      guideVoiceDescriptor
      showDABs
      __typename
    }
    __typename
  }
}`,
  ExerciseEditorPermissionQuery: `query ExerciseEditorPermissionQuery($contentId: String!) {
  isEditable: isEditableByCurrentUser(
    contentId: $contentId
    contentKind: "Exercise"
  )
  isPublishable: isPublishableByCurrentUser(
    contentId: $contentId
    contentKind: "Exercise"
  )
  user {
    id
    nickname
    __typename
  }
}`,
  TranslationEditor_CanPublish: `query TranslationEditor_CanPublish($kaLocale: String!, $contentKind: ContentKind!) {
  user {
    id
    hasContentPermission(
      contentScope: {kaLocale: $kaLocale, contentKind: $contentKind}
      name: "can_publish_content"
    )
    __typename
  }
}`,
  allEssaySessions: `query allEssaySessions($contentDescriptor: String!) {
  allEssaySessions {
    id
    essayTitle
    lastUpdated
    currentStage
    assignmentId: assignmentID
    completed
    sampleEssayName
    essayMode
    __typename
  }
  user {
    id
    assignmentsForContent(contentDescriptor: $contentDescriptor) {
      id
      title
      dueDate
      configuredActivityInputs
      __typename
    }
    __typename
  }
}`,
  essaySession: `query essaySession($id: String!) {
  essaySession(essaySessionID: $id) {
    draft {
      feedbackList {
        dimension
        feedbackID
        feedbackText
        _: id
        isPositive
        isResolved
        relevantParagraphId
        relevantQuotedText
        thread {
          id
          interactions {
            annotations
            answer
            flagged
            id
            question
            __typename
          }
          __typename
        }
        __typename
      }
      id
      submittedText
      __typename
    }
    essayInstructions
    essayTitle
    essayVersion
    id
    mostRecentEditedText
    paragraphIDToParagraphNumbers {
      paragraphID
      paragraphNumbers
      __typename
    }
    studentGradeLevel
    __typename
  }
}`,
  districtKhanmigoTotalUsage: `query districtKhanmigoTotalUsage($filter: KhanmigoDistrictFilters!) {
  districtKhanmigoUsage(filter: $filter) {
    groupType
    overall {
      possibleUsers
      usersWithUsage
      percentUsersWithUsage
      chats
      avgChatsPerUsersWithUsage
      avgChatsPerPossibleUsers
      flaggedChats
      avgFlaggedChatsPerUsersWithUsage
      avgFlaggedChatsPerPossibleUsers
      messages
      avgMessagesPerChat
      avgMessagesPerUserWithUsage
      avgMessagesPerPossibleUsers
      targetStatus
      __typename
    }
    target {
      percentage
      __typename
    }
    bySchool {
      school {
        id
        name
        __typename
      }
      usage {
        possibleUsers
        usersWithUsage
        percentUsersWithUsage
        chats
        avgChatsPerUsersWithUsage
        avgChatsPerPossibleUsers
        flaggedChats
        avgFlaggedChatsPerUsersWithUsage
        avgFlaggedChatsPerPossibleUsers
        messages
        avgMessagesPerChat
        targetStatus
        avgMessagesPerUserWithUsage
        avgMessagesPerPossibleUsers
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  districtKhanmigoUsageByClass: `query districtKhanmigoUsageByClass($filter: KhanmigoDistrictFilters!, $schoolID: String!) {
  districtKhanmigoUsage(filter: $filter) {
    byClass(schoolID: $schoolID) {
      classroom {
        id
        cacheId
        name
        coachKaid
        descriptor
        __typename
      }
      usage {
        possibleUsers
        usersWithUsage
        percentUsersWithUsage
        chats
        avgChatsPerUsersWithUsage
        avgChatsPerPossibleUsers
        flaggedChats
        avgFlaggedChatsPerUsersWithUsage
        avgFlaggedChatsPerPossibleUsers
        messages
        avgMessagesPerChat
        targetStatus
        avgMessagesPerUserWithUsage
        avgMessagesPerPossibleUsers
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  districtKhanmigoUsageByStudent: `query districtKhanmigoUsageByStudent($filter: KhanmigoDistrictFilters!, $classroomDescriptor: String!) {
  districtKhanmigoUsage(filter: $filter) {
    byStudent(classroomDescriptor: $classroomDescriptor) {
      user {
        id
        kaid
        userDistrictInfos {
          id
          displayNameForTeacher
          __typename
        }
        __typename
      }
      usage {
        possibleUsers
        usersWithUsage
        percentUsersWithUsage
        chats
        avgChatsPerUsersWithUsage
        avgChatsPerPossibleUsers
        flaggedChats
        avgFlaggedChatsPerUsersWithUsage
        avgFlaggedChatsPerPossibleUsers
        messages
        avgMessagesPerChat
        avgMessagesPerUserWithUsage
        avgMessagesPerPossibleUsers
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  districtKhanmigoUsageByTeacher: `query districtKhanmigoUsageByTeacher($filter: KhanmigoDistrictFilters!, $schoolID: String!) {
  districtKhanmigoUsage(filter: $filter) {
    byTeacher(schoolID: $schoolID) {
      user {
        id
        kaid
        userDistrictInfos {
          id
          displayNameForTeacher
          __typename
        }
        __typename
      }
      usage {
        possibleUsers
        usersWithUsage
        percentUsersWithUsage
        chats
        avgChatsPerUsersWithUsage
        avgChatsPerPossibleUsers
        flaggedChats
        avgFlaggedChatsPerUsersWithUsage
        avgFlaggedChatsPerPossibleUsers
        messages
        avgMessagesPerChat
        avgMessagesPerUserWithUsage
        avgMessagesPerPossibleUsers
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  districtKhanmigoUsageOvertime: `query districtKhanmigoUsageOvertime($filter: KhanmigoDistrictFilters!) {
  districtKhanmigoUsage(filter: $filter) {
    groupType
    overTime {
      rangeStartDate
      rangeEndDate
      usage {
        possibleUsers
        usersWithUsage
        percentUsersWithUsage
        chats
        avgChatsPerUsersWithUsage
        avgChatsPerPossibleUsers
        flaggedChats
        avgFlaggedChatsPerUsersWithUsage
        avgFlaggedChatsPerPossibleUsers
        messages
        avgMessagesPerChat
        avgChatsPerUsersWithUsage
        avgMessagesPerPossibleUsers
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  getTeacherKhanmigoAccess: `query getTeacherKhanmigoAccess {
  user {
    id
    isFormalTeacher
    userDistrictInfos {
      id
      district {
        id
        khanmigoIncludeStudents
        __typename
      }
      __typename
    }
    aiGuideAccessPlans {
      id
      isActive
      enrollmentGroup
      __typename
    }
    __typename
  }
}`,
  FoldersLibraryPermissionCheck: `query FoldersLibraryPermissionCheck {
  user {
    id
    canCreateFolders: hasPermission(name: "can_create_folders")
    canEditFolders: hasPermission(name: "can_edit_folders")
    canDeleteFolders: hasPermission(name: "can_delete_folders")
    canGrantContentRoles: hasPermission(name: "can_grant_content_roles")
    canEditInterimAssessments: hasPermission(
      name: "can_edit_interim_assessments"
      scope: ANY_ON_CURRENT_LOCALE
    )
    __typename
  }
}`,
  getTeacherAIEligibilityData: `query getTeacherAIEligibilityData {
  user {
    id
    age
    isFormalTeacher
    isK4dTeacher
    __typename
  }
}`,
  courseMetadata: `query courseMetadata($path: String!, $countryCode: String!) {
  contentRoute(path: $path, countryCode: $countryCode) {
    resolvedPath
    listedPathData {
      course {
        id
        translatedTitle
        relativeUrl
        __typename
      }
      domain {
        id
        translatedTitle
        relativeUrl
        __typename
      }
      __typename
    }
    unlistedPathData {
      course {
        id
        translatedTitle
        relativeUrl
        __typename
      }
      domain {
        id
        translatedTitle
        relativeUrl
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  programsGalleryGetDomain: `query programsGalleryGetDomain($id: String!) {
  domainById(id: $id) {
    id
    translatedTitle
    relativeUrl
    __typename
  }
}`,
  freeForTeachersEnrollEligibility: `query freeForTeachersEnrollEligibility($agreesToTerms: Boolean) {
  user {
    id
    aiGuideAccessPlans {
      id
      enrollmentGroup
      isActive
      __typename
    }
    age
    birthdate
    email
    username
    aiGuideFreeForTeachersEligibility(agreesToAIGuideTermsOfService: $agreesToTerms) {
      age
      aiGuideTermsOfService
      isTeacher
      kadStudent
      __typename
    }
    __typename
  }
}`,
  getContentSearchResults: `query getContentSearchResults($query: String!, $allowedTopicAncestors: [String], $contentKinds: [String], $numResults: Int) {
  searchPage(
    query: $query
    allowedTopicAncestors: $allowedTopicAncestors
    contentKinds: $contentKinds
    numResults: $numResults
  ) {
    results {
      contentId
      kind
      learnableContent {
        id
        translatedTitle
        contentDescriptor
        translatedDescription
        mappedStandards {
          id
          setId
          standardId
          __typename
        }
        parentTopic {
          id
          translatedTitle
          contentKind
          parent {
            id
            translatedTitle
            contentKind
            parent {
              id
              translatedTitle
              contentKind
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
}`,
  UserPurchases: `query UserPurchases($kaid: String, $isActive: Boolean) {
  userPurchases(kaid: $kaid, isActive: $isActive) {
    id
    kind
    isActive
    cancelAt
    endedAt
    cancelAtPeriodEnd
    expiresAt
    extId
    kaid
    extProductID
    extUpdatedAt
    extCustomerID
    __typename
  }
}`,
  ActivityCompletionThreadQuery: `query ActivityCompletionThreadQuery($threadId: String!) {
  aiGuideThread(threadId: $threadId) {
    id
    summary
    flagged
    kaid
    interactions {
      id
      answer
      question
      __typename
    }
    __typename
  }
}`,
  LearnerWhatNextPrompt: `query LearnerWhatNextPrompt {
  user {
    id
    kaid
    recommendations(queryParams: {}) {
      content {
        id
        title
        defaultUrlPath
        __typename
      }
      reason
      __typename
    }
    __typename
  }
}`,
  isKADorKADTeacherQuery: `query isKADorKADTeacherQuery {
  user {
    id
    userDistrictInfos {
      id
      isKAD
      isKmap
      __typename
    }
    __typename
  }
}`,
  AITeacherTools_ArticleDetails: `query AITeacherTools_ArticleDetails($articleId: String) {
  articleById(id: $articleId) {
    id
    translatedTitle
    defaultUrlPath
    translatedPerseusContent
    parentTopic {
      id
      domainSlug
      allLearnableContent(includeUnlisted: false) {
        id
        translatedTitle
        defaultUrlPath
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  AITeacherTools_ExerciseDetails: `query AITeacherTools_ExerciseDetails($exerciseId: String!) {
  exerciseById(id: $exerciseId) {
    id
    translatedTitle
    prerequisites
    defaultUrlPath
    parentTopic {
      id
      domainSlug
      allLearnableContent(includeUnlisted: false) {
        id
        translatedTitle
        defaultUrlPath
        __typename
      }
      __typename
    }
    assessmentItems {
      id
      itemShapeType
      itemData
      problemType
      __typename
    }
    __typename
  }
}`,
  AITeacherTools_VideoDetails: `query AITeacherTools_VideoDetails($videoId: String) {
  videoById(contentId: $videoId) {
    id
    translatedTitle
    defaultUrlPath
    parentTopic {
      id
      domainSlug
      allLearnableContent(includeUnlisted: false) {
        id
        translatedTitle
        defaultUrlPath
        __typename
      }
      __typename
    }
    subtitles {
      text
      __typename
    }
    __typename
  }
}`,
  getShowDiscussionsForDistrict: `query getShowDiscussionsForDistrict($districtID: ID!) {
  districtById(districtId: $districtID) {
    id
    showDiscussions
    enableImageInput
    __typename
  }
}`,
  DistrictAdminPermissionsQuery: `query DistrictAdminPermissionsQuery {
  user {
    id
    hasPermission(name: "CAN_ACT_LIKE_A_DISTRICT_ADMIN", scope: ANY)
    userDistrictInfos {
      id
      district {
        id
        __typename
      }
      activatedAt
      canSeeAllSchools
      canManageAdmins
      isKmap
      isSuperAdmin
      __typename
    }
    __typename
  }
}`,
  activityByContentDescriptor: `query activityByContentDescriptor($activityID: String!, $activityKind: String!) {
  learnableContent(id: $activityID, kind: $activityKind) {
    id
    contentId
    contentKind
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
}`,
  getItemIdForGroupedExercise: `query getItemIdForGroupedExercise($exerciseId: String!) {
  assessmentItemsForGroupedItemTaskWithError(
    exerciseId: $exerciseId
    nextProblemNumber: 1
    previouslyReservedItemIds: []
  ) {
    value {
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
  districtId: `query districtId {
  user {
    id
    userDistrictInfos {
      id
      district {
        id
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  coeditingLatestSnapshot: `query coeditingLatestSnapshot($threadId: String!) {
  aiGuideThread(threadId: $threadId) {
    id
    coeditingDocument {
      id
      title
      latestSnapshot {
        id
        text {
          prefix
          selection
          suffix
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  getAiGuideThreads: `query getAiGuideThreads($kaid: String!, $hasCoeditor: Boolean!, $limit: Int!) {
  aiGuideThreads(kaid: $kaid, hasCoeditor: $hasCoeditor, limit: $limit) {
    threads {
      id
      coeditingDocument(excludeArchived: true) {
        id
        title
        configName
        threadId
        persona
        latestSnapshot {
          id
          createdAt
          __typename
        }
        __typename
      }
      blooketQuestionSet {
        id
        title
        threadId
        persona
        lastUpdatedAt
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  gettingStartedEssaySession: `query gettingStartedEssaySession($id: String!) {
  essaySession(essaySessionID: $id) {
    essayInstructions
    essayTitle
    essayType
    gettingStartedThreadID
    id
    minimumWordCount
    studentGradeLevel
    __typename
  }
}`,
  writingCoachEssaySession: `query writingCoachEssaySession($id: String!) {
  essaySession(essaySessionID: $id) {
    kaid
    assignmentID
    draft {
      feedbackList {
        dimension
        feedbackID
        feedbackText
        _USE_feedbackID_INSTEAD_: id
        isPositive
        isResolved
        relevantParagraphId
        relevantQuotedText
        thread {
          id
          interactions {
            annotations
            answer
            flagged
            id
            question
            __typename
          }
          __typename
        }
        __typename
      }
      id
      submittedText
      __typename
    }
    completed
    draftingThreadID
    essayInstructions
    essayMode
    essayTitle
    essayType
    essayVersion
    gettingStartedThreadID
    id
    mostRecentEditedText
    minimumWordCount
    outline
    outlineVersion
    outliningThreadID
    paragraphIDToParagraphNumbers {
      paragraphID
      paragraphNumbers
      __typename
    }
    studentGradeLevel
    sampleEssayName
    __typename
  }
}`,
  getUserEmailByKaid: `query getUserEmailByKaid($kaid: String!) {
  user(kaid: $kaid) {
    id
    email
    __typename
  }
}`,
  districtGrowthByClassroom: `query districtGrowthByClassroom($teacherKaid: String!, $schoolID: String!, $filters: DistrictGrowthFilters!) {
  districtGrowthByClassroom(
    teacherKaid: $teacherKaid
    schoolID: $schoolID
    filters: $filters
  ) {
    classroom {
      id
      cacheId
      descriptor
      name
      coachKaid
      classroomDistrictInfo {
        id
        name
        __typename
      }
      __typename
    }
    info {
      numStudents
      medianCMPercent
      wowPercentChange
      eoyPercentGuess
      targetStatus
      __typename
    }
    __typename
  }
}`,
  districtGrowthBySchool: `query districtGrowthBySchool($filters: DistrictGrowthFilters!) {
  districtGrowthBySchool(filters: $filters) {
    school {
      id
      name
      __typename
    }
    info {
      numStudents
      medianCMPercent
      wowPercentChange
      eoyPercentGuess
      course {
        id
        __typename
      }
      targetStatus
      __typename
    }
    target {
      course {
        id
        __typename
      }
      percentage
      gradeLevels
      __typename
    }
    __typename
  }
}`,
  districtGrowthByStudent: `query districtGrowthByStudent($classroomDescriptor: String!, $filters: DistrictGrowthFilters!) {
  districtGrowthByStudent(
    classroomDescriptor: $classroomDescriptor
    filters: $filters
  ) {
    user {
      id
      kaid
      userDistrictInfos {
        id
        displayNameForTeacher
        __typename
      }
      __typename
    }
    info {
      numStudents
      medianCMPercent
      wowPercentChange
      eoyPercentGuess
      targetStatus
      __typename
    }
    __typename
  }
}`,
  districtGrowthByTeacher: `query districtGrowthByTeacher($schoolID: String!, $filters: DistrictGrowthFilters!) {
  districtGrowthByTeacher(schoolID: $schoolID, filters: $filters) {
    user {
      id
      kaid
      userDistrictInfos {
        id
        displayNameForTeacher
        __typename
      }
      __typename
    }
    info {
      numStudents
      medianCMPercent
      wowPercentChange
      eoyPercentGuess
      targetStatus
      __typename
    }
    __typename
  }
}`,
  districtGrowthByWeek: `query districtGrowthByWeek($filters: DistrictGrowthFilters!) {
  districtGrowthByWeek(filters: $filters) {
    weekEndDate
    weekStartDate
    overallMedianCMPercent
    selectedSchoolsMedianCMPercent
    targetPercentage
    __typename
  }
}`,
  allEmailTemplates: `query allEmailTemplates {
  allEmailTemplates {
    id
    name
    htmlTemplate
    textTemplate
    exampleData
    __typename
  }
}`,
  emailTemplate: `query emailTemplate($id: ID!) {
  emailTemplate(id: $id) {
    id
    name
    htmlTemplate
    textTemplate
    exampleData
    __typename
  }
}`,
  previewEmail: `query previewEmail($email: SendEmailInput!) {
  previewEmail(email: $email) {
    htmlContent
    textContent
    __typename
  }
}`,
  findUsersByNickname: `query findUsersByNickname($nickname: String!) {
  usersSearchByNickname(nickname: $nickname) {
    users {
      ...UserFields
      ...FilterFields
      __typename
    }
    __typename
  }
}

fragment FilterFields on User {
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
}`,
  userBirthMonthYear: `query userBirthMonthYear {
  user {
    id
    birthMonthYear
    __typename
  }
}`,
  districtAdminName: `query districtAdminName {
  user {
    id
    kaid
    nickname
    userDistrictInfos {
      id
      districtProvidedFirstName
      __typename
    }
    __typename
  }
}`,
  perseusTemplateCompletionQuery: `query perseusTemplateCompletionQuery($exemplar: String!, $exerciseTitle: String!, $exerciseDescription: String!, $standardsDescriptions: String!, $additionalInstructions: String) {
  perseusTemplateCompletion(
    exemplar: $exemplar
    exerciseDetails: {title: $exerciseTitle, description: $exerciseDescription, standardsDescriptions: $standardsDescriptions}
    additionalInstructions: $additionalInstructions
  ) {
    completion {
      template
      misconceptions
      placeholderNames
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}`,
  districtDashboardLearningMinutes: `query districtDashboardLearningMinutes($filters: DistrictDashboardFilters!) {
  districtDashboardLearningMinutes(filters: $filters) {
    header {
      yearFirstWeekStart
      yearFirstWeekEnd
      yearLastWeekStart
      yearLastWeekEnd
      numberOfWeeksInTheSchoolYear
      lastWeekAvg
      yearToDateAvg
      __typename
    }
    target {
      percentage
      minutesPerWeek
      domains
      __typename
    }
    percentAtTarget
    rows {
      weekStart
      weekEnd
      totalStudents
      totalMinutes
      avgMinutes
      numWith0
      percent0
      numWith1to14
      percent1to14
      numWith15to29
      percent15to29
      num30Plus
      percent30Plus
      __typename
    }
    __typename
  }
}`,
  districtDashboardActivation: `query districtDashboardActivation($filters: DistrictDashboardFilters!) {
  districtDashboardActivation(filters: $filters) {
    numRosteredStudents
    numRosteredTeachers
    numTeachersWithAnAccount
    percentTeachersWithAnAccount
    numWithAnAccount
    percentWithAnAccount
    numStartedAnActivity
    percentStartedAnActivity
    lastUpdatedDate
    target {
      percentage
      __typename
    }
    __typename
  }
}`,
  districtDashboardSkillsLeveledUp: `query districtDashboardSkillsLeveledUp($filters: DistrictDashboardFilters!, $upToProficient: Boolean!) {
  districtDashboardSkillsLeveledUp(
    filters: $filters
    upToProficient: $upToProficient
  ) {
    header {
      yearFirstWeekStart
      yearFirstWeekEnd
      yearLastWeekStart
      yearLastWeekEnd
      numberOfWeeksInTheSchoolYear
      lastWeekAvg
      yearToDateAvg
      __typename
    }
    target {
      skillsPerWeek
      domains
      __typename
    }
    rows {
      weekStart
      weekEnd
      avgSkills
      __typename
    }
    __typename
  }
}`,
  districtById: `query districtById($districtId: String!, $excludeTeacherDirected: Boolean!) {
  districts(filter: $districtId, excludeTeacherDirected: $excludeTeacherDirected) {
    id
    name
    ancestors {
      id
      name
      __typename
    }
    goal {
      type
      __typename
    }
    rosterID
    rosterSource
    nweaID
    ncesID
    rosterSyncingEnabled
    sendActivationEmails
    rosterDistrictAdmins
    deletedAt
    isDowngraded
    isTest
    onlySevereAIModeration
    isKmapDistrict
    isK4dDistrict
    lastRostered
    lastTestPull
    goLiveDate
    isOldNWEA
    region
    countryCode
    createdBy {
      id
      kaid
      email
      __typename
    }
    districtAuditLogs {
      createdAt
      description
      kind
      __typename
    }
    schools {
      id
      name
      isKADSchool
      isKmapSchool
      khanmigoPreference
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
    hasKhanmigo
    khanmigoPreference
    khanmigoIncludeNonStudents
    khanmigoIncludeStudents
    khanmigoStudents
    khanmigoAdmins
    khanmigoTeachers
    khanmigoTotal
    khanmigoUDIsShould
    khanmigoUDIsHave
    khanmigoTokenCapacity
    khanmigoTokenUsage
    khanmigoStart
    khanmigoEnd
    khanmigoIncludedUsers {
      id
      districtProvidedEmail
      primaryRole
      __typename
    }
    khanmigoExcludedUsers {
      id
      districtProvidedEmail
      primaryRole
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
    hasAssessments
    researchOptOut
    hasLMSConnect
    __typename
  }
}`,
  devadminEssayHistory: `query devadminEssayHistory($essaySessionId: String!, $pageSize: Int!, $offset: Int!) {
  essaySession(essaySessionID: $essaySessionId) {
    id
    history(pageSize: $pageSize, offset: $offset) {
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
          learningTimeSeconds
          stage
          pasteMetadata {
            selectionStart
            selectionEnd
            text
            __typename
          }
          __typename
        }
        ... on UserEssayOutlineSnapshot {
          learningTimeSeconds
          pasteMetadata {
            location
            jsonPointer
            selectionStart
            selectionEnd
            text
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
}`,
  devadminEssayAuthor: `query devadminEssayAuthor($essaySessionId: String!) {
  essaySession(essaySessionID: $essaySessionId) {
    id
    kaid
    __typename
  }
}`,
  devadminWritingCoachTime: `query devadminWritingCoachTime($essaySessionId: String!) {
  essaySession(essaySessionID: $essaySessionId) {
    id
    learningTime {
      promptReviewingSeconds
      outliningSeconds
      draftingSeconds
      revisingSeconds
      __typename
    }
    __typename
  }
}`,
  listAIGuideConversationTestCases: `query listAIGuideConversationTestCases {
  listAIGuideConversationTestCases {
    id
    owningTeam
    name
    description
    interactions {
      threadId
      interactionId
      name
      success
      __typename
    }
    __typename
  }
}`,
  fetchAllLegalDocs: `query fetchAllLegalDocs($isArchived: Boolean) {
  legalDocuments(isArchived: $isArchived) {
    id
    name
    slug
    isArchived
    kaLocales
    countryCodes
    draftContent
    __typename
  }
}`,
  getTeacherTools: `query getTeacherTools {
  aiGuideTeacherTools(order: TEACHER_TOOLS_PAGE) {
    id
    configName
    __typename
  }
}`,
  fetchEssayPasteLog: `query fetchEssayPasteLog($essaySessionId: ID!) {
  userEssayPasteLog(essaySessionID: $essaySessionId) {
    pasteEvents {
      text
      location
      timestamp
      __typename
    }
    __typename
  }
}`,
  LearnerAssignableAIActivitiesQuery: `query LearnerAssignableAIActivitiesQuery {
  courseById(id: "x1b615e2cf0b0f17f") {
    id
    unitChildren {
      id
      listed
      translatedTitle
      lessonChildren {
        id
        translatedTitle
        allLearnableContent {
          id
          translatedTitle
          defaultUrlPath
          contentDescriptor
          ... on AIGuideActivity {
            isAssignable
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
}`,
  legalDocByID: `query legalDocByID($id: ID!) {
  legalDocument(id: $id) {
    id
    name
    slug
    isArchived
    kaLocales
    countryCodes
    draftContent
    lastUpdatedByKaid
    versions {
      id
      content
      publishedByKaid
      publishedAt
      __typename
    }
    __typename
  }
}`,
  getAllEkbEntries: `query getAllEkbEntries {
  getExpandedKnowledgeBaseEntries {
    entries {
      id
      metadata {
        category
        url
        text
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  districtDashboardKhanmigo: `query districtDashboardKhanmigo($filters: DistrictDashboardFilters!, $userType: DistrictUserTypeFilter) {
  districtDashboardKhanmigo(filters: $filters, userType: $userType) {
    lastWeekStart
    lastWeekEnd
    lastWeekUsage {
      usersWithUsage
      percentUsersWithUsage
      avgChats
      avgMessagesPerChat
      __typename
    }
    priorWeekUsage {
      usersWithUsage
      percentUsersWithUsage
      avgChats
      avgMessagesPerChat
      __typename
    }
    top5Activities {
      activityType
      aIGuideActivity {
        id
        translatedTitle
        __typename
      }
      aiReportingLabel {
        id
        translatedTitle
        __typename
      }
      userPercentage
      chatPercent
      totalChats
      totalUsers
      __typename
    }
    target {
      percentage
      __typename
    }
    __typename
  }
}`,
  devadminEssayOriginalityFlags: `query devadminEssayOriginalityFlags($essaySessionId: String!) {
  essaySession(essaySessionID: $essaySessionId) {
    id
    originalityFlags {
      ... on UserEssayOriginalityFlagPasteIntoOutline {
        timestamp
        location
        wordCount
        __typename
      }
      ... on UserEssayOriginalityFlagPasteIntoText {
        timestamp
        stage
        wordCount
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  legalDocBySlug: `query legalDocBySlug($slug: String!) {
  legalDocumentContent(slug: $slug) {
    id
    content
    __typename
  }
}`,
  teacherKhanmigoActivity: `query teacherKhanmigoActivity($filter: KhanmigoTeacherFilters!) {
  teacherKhanmigoActivity(filter: $filter) {
    totalChats
    rows {
      activityType
      aIGuideActivity {
        id
        translatedTitle
        __typename
      }
      aiReportingLabel {
        id
        translatedTitle
        __typename
      }
      totalChats
      chatPercent
      courseRows {
        course {
          id
          translatedTitle
          __typename
        }
        totalChats
        chatPercent
        unitRows {
          unit {
            id
            translatedTitle
            __typename
          }
          totalChats
          chatPercent
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  PerseusItemCompletionQuery: `query PerseusItemCompletionQuery($exerciseDetails: ExerciseDetailsInput!, $templateDetails: PerseusTemplateInput!, $numItems: Int!, $additionalInstructions: String) {
  perseusItemCompletion(
    exerciseDetails: $exerciseDetails
    templateDetails: $templateDetails
    numItems: $numItems
    additionalInstructions: $additionalInstructions
  ) {
    items
    error {
      code
      debugMessage
      __typename
    }
    __typename
  }
}`,
  khanLibraryCanEditInterimAssessments: `query khanLibraryCanEditInterimAssessments {
  user {
    id
    canEditInterimAssessments: hasPermission(
      name: "can_edit_interim_assessments"
      scope: ANY_ON_CURRENT_LOCALE
    )
    __typename
  }
}`,
  configurableInputsForActivity: `query configurableInputsForActivity($contentID: String!) {
  aiGuideActivityById(id: $contentID) {
    id
    configurableInputs
    __typename
  }
}`,
  teacherKhanmigoTotalUsage: `query teacherKhanmigoTotalUsage($filter: KhanmigoTeacherFilters!) {
  teacherKhanmigoUsage(filter: $filter) {
    overall {
      possibleUsers
      usersWithUsage
      percentUsersWithUsage
      chats
      avgChatsPerUsersWithUsage
      avgChatsPerPossibleUsers
      flaggedChats
      avgFlaggedChatsPerUsersWithUsage
      avgFlaggedChatsPerPossibleUsers
      messages
      avgMessagesPerChat
      avgMessagesPerUserWithUsage
      avgMessagesPerPossibleUsers
      __typename
    }
    byStudent {
      student {
        id
        kaid
        coachNickname
        __typename
      }
      chats
      flaggedChats
      messages
      avgMessagesPerChat
      activities
      __typename
    }
    __typename
  }
}`,
  teacherKhanmigoUsageOvertime: `query teacherKhanmigoUsageOvertime($filter: KhanmigoTeacherFilters!) {
  teacherKhanmigoUsage(filter: $filter) {
    groupType
    overTime {
      rangeStartDate
      rangeEndDate
      usage {
        usersWithUsage
        percentUsersWithUsage
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  GetManagedPartnerships: `query GetManagedPartnerships {
  user {
    id
    homepageUrl
    userChosenRoles
    __typename
  }
  getPartnerships(includeDeleted: false, onlyTeacherDirected: false) {
    ... on MetaDistrict {
      id
      name
      countryCode
      levelHeight
      __typename
    }
    ... on District {
      id
      name
      isTest
      isKmapDistrict
      isK4dDistrict
      countryCode
      levelHeight
      __typename
    }
    __typename
  }
}`,
  GetPartnershipForAdminDashboard: `query GetPartnershipForAdminDashboard($partnershipID: ID!) {
  getPartnershipById(partnershipId: $partnershipID) {
    ... on MetaDistrict {
      id
      name
      countryCode
      levelLabel
      levelHeight
      treeLabels {
        singular
        generalized
        __typename
      }
      descendants {
        ... on MetaDistrict {
          id
          parent {
            id
            __typename
          }
          name
          levelLabel
          levelHeight
          __typename
        }
        ... on District {
          id
          parent {
            id
            __typename
          }
          name
          levelLabel
          levelHeight
          isK4dDistrict
          isKmapDistrict
          schools {
            id
            name
            isKADSchool
            isKmapSchool
            __typename
          }
          isTest
          __typename
        }
        __typename
      }
      __typename
    }
    ... on District {
      id
      name
      countryCode
      levelLabel
      treeLabels {
        singular
        generalized
        __typename
      }
      schools {
        id
        name
        isKADSchool
        isKmapSchool
        __typename
      }
      levelHeight
      isTest
      __typename
    }
    __typename
  }
}`,
  AccountDeletionRequests: `query AccountDeletionRequests($kaid: String!) {
  accountDeletionRequests(targetKaid: $kaid) {
    user {
      id
      __typename
    }
    reason
    processOnDate
    __typename
  }
}`,
  getTeacherReferralEligibilityData: `query getTeacherReferralEligibilityData {
  user {
    id
    hasAccessToAIGuideTeacher
    isAIGuideEnabled
    __typename
  }
}`,
  khanmigoForTeachersPersonalReferralCode: `query khanmigoForTeachersPersonalReferralCode {
  user {
    id
    khanmigoForTeachersReferralCode
    __typename
  }
}`,
  SkillsToProficient_CourseProficiency: `query SkillsToProficient_CourseProficiency($courseId: String!) {
  user {
    id
    courseProgress(topicId: $courseId) {
      proficiencyLevel
      masteryMap {
        progressKey
        status
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  previewLearnerParentAIGuideActivatedEmail: `query previewLearnerParentAIGuideActivatedEmail {
  preview: previewLearnerParentAIGuideActivatedEmail {
    textContent
    htmlContent
    __typename
  }
}`,
  interimAssessmentCheckQuery: `query interimAssessmentCheckQuery($contentId: String!) {
  revision: exerciseRevisionById(id: $contentId) {
    id
    interimAssessmentType
    __typename
  }
  user {
    id
    canEditInterimAssessments: hasPermission(
      name: "can_edit_interim_assessments"
      scope: ANY_ON_CURRENT_LOCALE
    )
    __typename
  }
}`,
  StreakQuery: `query StreakQuery {
  user {
    id
    stpStreak {
      length
      isExpiring
      longestLength
      __typename
    }
    __typename
  }
}`,
  essaySessionHistory: `query essaySessionHistory($essaySessionID: String!, $pageSize: Int!, $offset: Int!) {
  essaySession(essaySessionID: $essaySessionID) {
    id
    history(pageSize: $pageSize, offset: $offset) {
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
          pasteMetadata {
            selectionStart
            selectionEnd
            text
            __typename
          }
          feedbackRequestedAt
          __typename
        }
        ... on UserEssayOutlineSnapshot {
          learningTimeSeconds
          pasteMetadata {
            location
            jsonPointer
            selectionStart
            selectionEnd
            text
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
}`,
  getCoachAssignmentReport: `query getCoachAssignmentReport($assignmentId: String!, $teacherKaid: String!) {
  coach: user {
    id
    assignment: assignmentByThisUser(id: $assignmentId) {
      id
      contentDescriptors
      title
      assignedDate
      dueDate
      configuredActivityInputs
      students {
        id
        kaid
        coachNickname(teacherKaid: $teacherKaid)
        __typename
      }
      classroom {
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
        assessmentItemsForAssessment {
          id
          contentId
          itemData
          __typename
        }
        student {
          id
          kaid
          coachNickname(teacherKaid: $teacherKaid)
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
              isResolved
              isPositive
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
        completedOn
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
  ... on LearnableCourseChallenge {
    translatedTitle
    exerciseLength
    __typename
  }
  __typename
}`,
  previewTeacherToolsActivatedEmail: `query previewTeacherToolsActivatedEmail {
  preview: previewTeacherToolsActivatedEmail {
    textContent
    htmlContent
    __typename
  }
}`,
  SkillsToProficient_OverallProficiency: `query SkillsToProficient_OverallProficiency {
  user {
    id
    countExercisesProficient
    overallProficiencyLevel
    __typename
  }
}`,
  ActiveAssignmentsAndGoalsQuery: `query ActiveAssignmentsAndGoalsQuery($classDescriptor: String!, $dueAfter: DateTime!, $userKaid: String!) {
  user(kaid: $userKaid) {
    id
    isKmapStudent
    assignmentsPage(
      classroomDescriptor: $classDescriptor
      dueAfter: $dueAfter
      orderBy: DUE_DATE_ASC
    ) {
      assignments {
        id
        dueDate
        __typename
      }
      __typename
    }
    masteryAssignments(classroomDescriptor: $classDescriptor, isPast: false) {
      id
      dueDate
      __typename
    }
    __typename
  }
}`,
  localesForTeacherToolsBanner: `query localesForTeacherToolsBanner {
  localesForLanguagePicker(includeEnglish: false, includeFake: false) {
    id
    localName
    kaLocale
    __typename
  }
}`,
  DistrictActivationBySchoolContainer: `query DistrictActivationBySchoolContainer($districtId: ID!, $schoolIds: [ID!]) {
  activationReportBySchool(districtId: $districtId, schoolIds: $schoolIds) {
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
      numStudentsStartedAnActivity
      studentTargetStatus
      teacherTargetStatus
      __typename
    }
    updatedAt
    totalRow {
      numStudentsTotal
      numStudentsActivated
      numTeachersTotal
      numTeachersActivated
      numStudentsStartedAnActivity
      studentTargetStatus
      teacherTargetStatus
      __typename
    }
    target {
      percentage
      __typename
    }
    __typename
  }
}`,
  SkillsToProficient_RecentCourses: `query SkillsToProficient_RecentCourses($pageSize: Int!) {
  user {
    id
    recentCourses(pageSize: $pageSize) {
      results {
        content {
          id
          isListedForLearners
          masteryEnabled
          relativeUrl
          translatedTitle
          ... on Course {
            masterableExercises(includeDuplicates: true) {
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
    }
    __typename
  }
}`,
  AssessmentStatus: `query AssessmentStatus($slug: String!) {
  user {
    id
    assessmentData {
      assessmentStatus(assessmentSlug: $slug) {
        status
        assessment {
          id
          name
          surveyURL
          __typename
        }
        task {
          id
          expirationTime
          questionsCompleted
          estimatedQuestionsRemaining
          hasSubmittedLearnerInsightsFeedback
          surveyMonkeyID
          __typename
        }
        __typename
      }
      __typename
    }
    nickname
    __typename
  }
}`,
  getUserActiveEnrollmentGroups: `query getUserActiveEnrollmentGroups {
  user {
    id
    aiGuideActiveEnrollmentGroups
    __typename
  }
}`,
  SkillsToProficient_ClassRecommendations: `query SkillsToProficient_ClassRecommendations($courseId: String, $classroomDescriptor: String) {
  user {
    id
    recommendations(
      queryParams: {courseId: $courseId, classroomDescriptor: $classroomDescriptor}
    ) {
      content {
        id
        defaultUrlPath
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  ClassroomDistrictInfoByRosterIdQuery: `query ClassroomDistrictInfoByRosterIdQuery($rosterID: ID!) {
  classroomDistrictInfoByRosterId(rosterId: $rosterID) {
    id
    keyNameID
    name
    studentsHaveAccessToKhanmigo
    district {
      id
      name
      __typename
    }
    rosterSource
    districtProvidedIdentifier
    createdAt
    updatedAt
    emailDomains
    isNweaMapSynced
    schoolKey
    school {
      id
      __typename
    }
    classroom {
      id
      cacheId
      __typename
    }
    classRemovalDate
    classWillBeRemovedInDays
    courseSISNumber
    courseSISName
    sectionSIS
    sisSubjct
    cdiAuditLogs {
      createdAt
      kind
      description
      __typename
    }
    studentsHaveAccessToKhanmigo
    isManuallyUnmarked
    __typename
  }
}`,
  classroomDistrictInfoByKeyNameIdQuery: `query classroomDistrictInfoByKeyNameIdQuery($keyNameID: ID!) {
  classroomDistrictInfoByKeyNameID(keyNameID: $keyNameID) {
    id
    keyNameID
    name
    studentsHaveAccessToKhanmigo
    district {
      id
      name
      __typename
    }
    rosterSource
    districtProvidedIdentifier
    createdAt
    updatedAt
    emailDomains
    isNweaMapSynced
    schoolKey
    school {
      id
      __typename
    }
    classroom {
      id
      cacheId
      __typename
    }
    classRemovalDate
    classWillBeRemovedInDays
    courseSISNumber
    courseSISName
    sectionSIS
    sisSubjct
    cdiAuditLogs {
      createdAt
      kind
      description
      __typename
    }
    studentsHaveAccessToKhanmigo
    isManuallyUnmarked
    __typename
  }
}`,
  userCertificate: `query userCertificate($courseID: String!) {
  userCertificate(courseID: $courseID) {
    id
    kaid
    courseID
    createdAt
    __typename
  }
}`,
  getTeacherAccessGroups: `query getTeacherAccessGroups {
  user {
    id
    hasAccessToAIGuideDistrictClassroomTeacher
    __typename
  }
}`,
  getFavoritedTeacherTools: `query getFavoritedTeacherTools {
  aiGuideFavoritedTeacherTools {
    id
    configName
    __typename
  }
}`,
  exerciseEditorConflictQuery: `query exerciseEditorConflictQuery($contentId: String!) {
  latestRevision: exerciseRevisionById(id: $contentId) {
    id
    sha
    creationDate
    createdBy {
      id
      nickname
      __typename
    }
    __typename
  }
}`,
  assignmentForWritingCoach: `query assignmentForWritingCoach($assignmentID: String!) {
  user {
    id
    assignment(id: $assignmentID) {
      id
      dueDate
      classroom {
        cacheId
        id
        name
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  snapshotForOutlinePasteEvent: `query snapshotForOutlinePasteEvent($essaySessionID: String!, $version: Int!) {
  essaySession(essaySessionID: $essaySessionID) {
    id
    snapshot: snapshotForOutlinePasteEvent(outlineVersionBeforePaste: $version) {
      snapshotIndex
      __typename
    }
    __typename
  }
}`,
  snapshotForTextPasteEvent: `query snapshotForTextPasteEvent($essaySessionID: String!, $version: Int!) {
  essaySession(essaySessionID: $essaySessionID) {
    id
    snapshot: snapshotForTextPasteEvent(essayVersionBeforePaste: $version) {
      snapshotIndex
      __typename
    }
    __typename
  }
}`,
  assignmentInfoForWritingCoach: `query assignmentInfoForWritingCoach($kaid: String!, $assignmentID: String!) {
  user(kaid: $kaid) {
    id
    assignment(id: $assignmentID) {
      id
      dueDate
      classroom {
        cacheId
        id
        name
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  essaySessionProgress: `query essaySessionProgress($teacherKaid: String!, $essaySessionID: String!) {
  essaySession(essaySessionID: $essaySessionID) {
    id
    kaid
    author {
      id
      coachNickname(teacherKaid: $teacherKaid)
      __typename
    }
    gettingStartedThread {
      id
      lastUpdatedAt
      __typename
    }
    outliningThreadID
    draftingThreadID
    assignmentId: assignmentID
    essayInstructions
    essayMode
    essayTitle
    essayType
    minimumWordCount
    studentGradeLevel
    mostRecentEditedText
    completed
    completedOn
    currentStage
    lastUpdated
    wordCount
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
    draft {
      id
      submittedText
      feedbackList {
        dimension
        feedbackID
        feedbackText
        _USE_feedbackID_INSTEAD_: id
        isPositive
        isResolved
        relevantParagraphId
        relevantQuotedText
        thread {
          id
          __typename
        }
        __typename
      }
      __typename
    }
    learningTime {
      understandingSeconds: promptReviewingSeconds
      outliningSeconds
      draftingSeconds
      revisingSeconds
      __typename
    }
    latestSnapshot {
      snapshotIndex
      __typename
    }
    __typename
  }
}`,
  SkillsToProficient_LearnerRecommendations: `query SkillsToProficient_LearnerRecommendations($courseId: String, $classroomDescriptor: String, $numRecs: Int) {
  user {
    id
    recommendations(
      queryParams: {courseId: $courseId, classroomDescriptor: $classroomDescriptor, numRecs: $numRecs}
    ) {
      content {
        id
        defaultUrlPath
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  getDistrictRosteredGrades: `query getDistrictRosteredGrades($districtID: ID!) {
  grades: activationReportByGradeLevel(districtId: $districtID, schoolIds: []) {
    rows {
      gradeLevel {
        id
        name
        sortIndex
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  SchoolsByRosterId: `query SchoolsByRosterId($rosterID: [ID!]!) {
  eduOrgsAreInPartnership(eduOrgIDs: $rosterID) {
    id
    name
    isKmapSchool
    isKADSchool
    khanmigoPreference
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
    eduOrg {
      id
      name
      locality
      administrativeAreaLevel2
      administrativeAreaLevel1
      postalCode
      country
      location
      __typename
    }
    schoolAuditLogs {
      createdAt
      kind
      description
      __typename
    }
    __typename
  }
}`,
  getTeacherToolbarTools: `query getTeacherToolbarTools {
  aiGuideTeacherTools(order: TEACHER_TOOLBAR) {
    id
    configName
    __typename
  }
}`,
  guideLanguages: `query guideLanguages {
  khanmigoSupportedKALocales {
    id
    khanmigoSupport
    displayName
    localName
    __typename
  }
}`,
  getAIInsightsForThread: `query getAIInsightsForThread($assignmentId: String!, $threadId: String!) {
  user {
    id
    assignmentByThisUser(id: $assignmentId) {
      id
      aiInsights(threadId: $threadId) {
        summary
        onTopic
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  getAllCoursesForRegion: `query getAllCoursesForRegion($region: String!) {
  groups: studentListTopics(region: $region) {
    groupTitle: translatedTitle
    courses: topics {
      id
      title: translatedTitle
      domainSlug
      __typename
    }
    __typename
  }
}`,
  getTeacherType: `query getTeacherType($targetKaid: String!) {
  user(kaid: $targetKaid) {
    id
    isK4dTeacher
    isKmapTeacher
    __typename
  }
}`,
  getParentKhanmigoEligibility: `query getParentKhanmigoEligibility($targetKaid: String!) {
  user(kaid: $targetKaid) {
    id
    aiGuideDisabledReason
    aiGuideAccessPlans {
      id
      enrollmentGroup
      isActive
      __typename
    }
    __typename
  }
}`,
  getLearnerKhanmigoEligibility: `query getLearnerKhanmigoEligibility {
  user {
    id
    aiGuideDisabledReason
    aiGuideActiveEnrollmentGroups
    __typename
  }
}`,
  SkillsToProficient_UnitRecommendations: `query SkillsToProficient_UnitRecommendations($courseId: String, $numRecs: Int, $unitId: String) {
  user {
    id
    recommendations(
      queryParams: {courseId: $courseId, numRecs: $numRecs, unitId: $unitId}
    ) {
      content {
        id
        defaultUrlPath
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  UserForDistrictSignup: `query UserForDistrictSignup {
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
    age
    nickname
    __typename
  }
}`,
  getUserIsSubscribedToAllEmails: `query getUserIsSubscribedToAllEmails($kaid: String) {
  user(kaid: $kaid) {
    id
    emailSubscriptions {
      allEmailSubscription {
        checked
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  districtDashboardCourseMastery: `query districtDashboardCourseMastery($filters: DistrictGrowthFilters!) {
  districtDashboardCourseMastery(filters: $filters) {
    header {
      yearFirstWeekStart
      yearFirstWeekEnd
      yearLastWeekStart
      yearLastWeekEnd
      numberOfWeeksInTheSchoolYear
      lastWeekAvg
      yearToDateAvg
      noData
      __typename
    }
    rows {
      weekStartDate
      weekEndDate
      overallMedianCMPercent
      selectedSchoolsMedianCMPercent
      targetPercentage
      __typename
    }
    __typename
  }
}`,
  getContentItem: `query getContentItem($descriptors: [String!]!) {
  contentForDescriptors(descriptors: $descriptors) {
    id
    contentDescriptor
    contentKind
    translatedTitle
    translatedDescription
    mappedStandards {
      id
      setId
      standardId
      __typename
    }
    lesson: parentTopic {
      id
      translatedTitle
      unit: parent {
        id
        translatedTitle
        course: parent {
          id
          translatedTitle
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  getCourseMasteryTargets: `query getCourseMasteryTargets($districtID: ID!) {
  districtById(districtId: $districtID) {
    id
    goal {
      courseMasteryTargets {
        course {
          id
          translatedTitle
          __typename
        }
        gradeLevels
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  districtActivationTarget: `query districtActivationTarget($districtID: ID!) {
  districtById(districtId: $districtID) {
    id
    goal {
      activationTarget {
        percentage
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  getCoeditingDocument: `query getCoeditingDocument($documentID: String!) {
  coeditingDocument(documentID: $documentID) {
    id
    ownerKaid
    threadId
    configName
    title
    persona
    latestSnapshot {
      id
      text {
        prefix
        selection
        suffix
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  getUserData: `query getUserData {
  user {
    id
    hasAccessToAIGuideDistrictClassroomTeacher
    __typename
  }
}`,
  getCurriculumAlignedCoursesForDistrict: `query getCurriculumAlignedCoursesForDistrict($districtId: ID!) {
  districtById(districtId: $districtId) {
    id
    curriculumAlignedCourses {
      id
      title: translatedTitle
      domainSlug
      __typename
    }
    __typename
  }
}`,
  getAiGuideAssignableActivities: `query getAiGuideAssignableActivities {
  aiGuideAssignableActivities {
    id
    configName
    contentID
    teacherToolData {
      description
      title
      urlSlug
      __typename
    }
    __typename
  }
}`,
  DistrictWithUserPermissionsQuery: `query DistrictWithUserPermissionsQuery($districtID: ID!) {
  districtById(districtId: $districtID) {
    id
    partnership {
      ... on MetaDistrict {
        id
        __typename
      }
      ... on District {
        id
        __typename
      }
      __typename
    }
    name
    createdAt
    rosterSource
    isTest
    hasKhanmigo
    isKmapDistrict
    isK4dDistrict
    isCentrallyRostered
    region
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
    schoolYearStart
    schoolYearEnd
    kaLocale
    ancestors {
      id
      levelHeight
      name
      __typename
    }
    countryCode
    levelHeight
    goal {
      type
      createdBy {
        id
        kaid
        __typename
      }
      __typename
    }
    schoolYearStart
    __typename
  }
  user {
    id
    hasPermission(name: "CAN_ACT_LIKE_A_DISTRICT_ADMIN", scope: ANY)
    userDistrictInfos {
      id
      district {
        id
        __typename
      }
      activatedAt
      canSeeAllSchools
      canManageAdmins
      isKmap
      isSuperAdmin
      __typename
    }
    userMetaInfos {
      id
      partnership {
        id
        descendants(administeredOnly: true) {
          ... on MetaDistrict {
            id
            __typename
          }
          ... on District {
            id
            __typename
          }
          __typename
        }
        __typename
      }
      adminOf {
        ... on MetaDistrict {
          id
          __typename
        }
        ... on District {
          id
          __typename
        }
        __typename
      }
      activatedAt
      canManageAdmins
      isSuperAdmin(districtID: $districtID)
      __typename
    }
    __typename
  }
}`,
  GetManagedPartnershipsForDistrictsRoot: `query GetManagedPartnershipsForDistrictsRoot {
  user {
    id
    homepageUrl
    userChosenRoles
    __typename
  }
  getPartnerships(includeDeleted: false, onlyTeacherDirected: false) {
    ... on MetaDistrict {
      id
      name
      countryCode
      levelHeight
      __typename
    }
    ... on District {
      id
      name
      isTest
      isKmapDistrict
      isK4dDistrict
      countryCode
      levelHeight
      __typename
    }
    __typename
  }
}`,
  getTeacherAccessPermissionsData: `query getTeacherAccessPermissionsData {
  user {
    id
    age
    joined
    isTeacher
    isFormalTeacher
    isK4dTeacher
    hasAccessToAIGuideTeacher
    isAIGuideEnabled
    hasClasses
    isKmapStudent
    isK4dStudent
    hasAccessToAIGuideDistrictClassroomTeacher
    classrooms {
      id
      cacheId
      isK4dClassroom
      __typename
    }
    __typename
  }
}`,
  teacherAssignments: `query teacherAssignments($contentDescriptor: String!) {
  user {
    id
    assignmentsForContentInClassroomsTaughtByThisUser(
      contentDescriptor: $contentDescriptor
    ) {
      ...AssignmentFields
      classroom {
        id
        cacheId
        name
        signupCode
        descriptor
        topics {
          id
          key
          slug
          title
          iconPath
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}

fragment AssignmentFields on Assignment {
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
  essaySnapshotPatches: `query essaySnapshotPatches($essaySessionId: String!, $snapshotIndex: Int!) {
  essaySession(essaySessionID: $essaySessionId) {
    id
    snapshot(snapshotIndex: $snapshotIndex) {
      ... on UserEssayTextSnapshot {
        patches {
          priorSnapshotStart
          currentSnapshotStart
          removed
          added
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  districtTeachersFromCursor: `query districtTeachersFromCursor($districtId: ID!, $schoolIds: [ID!], $pageSize: Int, $cursor: Int) {
  activationReportByTeacher: activationReportByTeacherV2(
    districtId: $districtId
    schoolIds: $schoolIds
    pageSize: $pageSize
    cursor: $cursor
  ) {
    rows {
      teacherId
      teacherName
      __typename
    }
    __typename
  }
}`,
  districtTeachersTotalCount: `query districtTeachersTotalCount($districtId: ID!, $schoolIds: [ID!]) {
  activationReportByTeacher: activationReportByTeacherV2(
    districtId: $districtId
    schoolIds: $schoolIds
  ) {
    totalCount
    __typename
  }
}`,
  getPreviewTeacherToolbarTools: `query getPreviewTeacherToolbarTools {
  previewAiGuideTeacherTools(order: TEACHER_TOOLBAR) {
    id
    configName
    __typename
  }
}`,
  getHomePageTargets: `query getHomePageTargets($districtID: ID!) {
  districtById(districtId: $districtID) {
    id
    goal {
      courseMasteryTargets {
        course {
          id
          title: translatedTitle
          __typename
        }
        gradeLevels
        __typename
      }
      khanmigoTarget {
        percentage
        __typename
      }
      learningMinutesTarget {
        percentage
        __typename
      }
      skillsLeveledUp {
        skillsPerWeek
        __typename
      }
      skillsToProficient {
        skillsPerWeek
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  courseEditorQuery: `query courseEditorQuery($courseId: String!) {
  contentEditingStatus {
    editingDisabled
    publishDisabled
    __typename
  }
  isCourseEditableByCurrentUser(courseId: $courseId)
}`,
  GetUMIForLinking: `query GetUMIForLinking($uuid: ID!) {
  userMetaInfoByUUID(uuid: $uuid) {
    id
    email
    firstName
    lastName
    fullName
    kaid
    uuid
    __typename
  }
}`,
  AssessmentSummary: `query AssessmentSummary($slug: String!) {
  user {
    id
    assessmentData {
      assessmentStatus(assessmentSlug: $slug) {
        assessment {
          id
          surveySlug
          __typename
        }
        summary {
          questionsCorrect
          questionsTotal
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  myTestDistricts: `query myTestDistricts {
  user {
    id
    engTestDistricts {
      district {
        id
        name
        __typename
      }
      karfJson
      __typename
    }
    __typename
  }
}`,
  findUsersByIpAndGetRestriction: `query findUsersByIpAndGetRestriction($ip: String!, $usersCursor: ID, $pageSize: Int) {
  usersSearchByIpPage(ip: $ip, after: $usersCursor, pageSize: $pageSize) {
    users {
      ...UserFields
      ...FilterFields
      __typename
    }
    pageInfo {
      nextCursor
      __typename
    }
    totalCount
    __typename
  }
  getIpRestrictionInfo(ip: $ip) {
    isRestricted
    isBlocked
    __typename
  }
}

fragment FilterFields on User {
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
  aiGuideAccessPlans {
    id
    isActive
    enrollmentGroup
    __typename
  }
  __typename
}`,
  additionalUserPageData: `query additionalUserPageData($ip: String!, $kaid: String!) {
  getIpRestrictionInfo(ip: $ip) {
    isRestricted
    isBlocked
    __typename
  }
  accountDeletionRequests(targetKaid: $kaid) {
    user {
      id
      __typename
    }
    reason
    processOnDate
    __typename
  }
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
}`,
  GetPartnershipDataForDashboard: `query GetPartnershipDataForDashboard($partnershipID: ID!, $kaLocale: String!) {
  partnershipDataForDashboard(partnershipID: $partnershipID) {
    root {
      ... on MetaDistrict {
        id
        name
        countryCode
        levelLabel
        levelHeight
        treeLabels(kaLocale: $kaLocale) {
          singular
          generalized
          __typename
        }
        isAdministered
        hasKAD: hasKad(scopeToActor: true)
        hasLearningPaths: hasLp(scopeToActor: true)
        hasKhanmigo(scopeToActor: true)
        hasCentralRostering(scopeToActor: true)
        kaLocale
        __typename
      }
      ... on District {
        id
        name
        countryCode
        levelLabel
        levelHeight
        treeLabels(kaLocale: $kaLocale) {
          singular
          generalized
          __typename
        }
        isTest
        isAdministered
        hasKAD: isK4dDistrict(scopeToActor: true)
        hasLearningPaths: isKmapDistrict(scopeToActor: true)
        hasKhanmigo: hasKhanmigo(scopeToActor: true)
        hasCentralRostering: isCentrallyRostered
        kaLocale
        __typename
      }
      __typename
    }
    visibleNodes {
      ... on MetaDistrict {
        id
        parent {
          id
          __typename
        }
        name
        levelLabel
        levelHeight
        isAdministered
        __typename
      }
      ... on District {
        id
        parent {
          id
          __typename
        }
        name
        schools {
          id
          name
          isKADSchool
          isKmapSchool
          __typename
        }
        levelLabel
        levelHeight
        isK4dDistrict
        isKmapDistrict
        isTest
        isAdministered
        __typename
      }
      __typename
    }
    __typename
  }
  user {
    id
    hasPermission(name: "CAN_ACT_LIKE_A_DISTRICT_ADMIN", scope: ANY)
    userDistrictInfos {
      id
      district {
        id
        __typename
      }
      partnership {
        ... on MetaDistrict {
          id
          __typename
        }
        ... on District {
          id
          __typename
        }
        __typename
      }
      activatedAt
      canSeeAllSchools
      canManageAdmins
      isKmap
      isAdmin
      __typename
    }
    userMetaInfos {
      id
      partnership {
        id
        __typename
      }
      activatedAt
      adminOf {
        ... on MetaDistrict {
          id
          __typename
        }
        ... on District {
          id
          __typename
        }
        __typename
      }
      canManageAdmins
      __typename
    }
    __typename
  }
}`,
  ActivationByNodeHook: `query ActivationByNodeHook($selectedNodeID: ID!, $childIDs: [ID!]) {
  activationReportByAdminAggregate(
    selectedNodeID: $selectedNodeID
    childIDs: $childIDs
  ) {
    rows {
      adminAggregate {
        ... on District {
          id
          name
          __typename
        }
        ... on MetaDistrict {
          id
          name
          __typename
        }
        __typename
      }
      numStudentsTotal
      numStudentsActivated
      numStudentsStartedAnActivity
      numTeachersTotal
      numTeachersActivated
      __typename
    }
    totalRow {
      numStudentsTotal
      numStudentsActivated
      numStudentsStartedAnActivity
      numTeachersTotal
      numTeachersActivated
      __typename
    }
    updatedAt
    __typename
  }
}`,
  ExpandedDistrictQuery: `query ExpandedDistrictQuery($districtID: ID!, $districtIDStr: String!) {
  districtById(districtId: $districtID) {
    id
    parent {
      id
      __typename
    }
    name
    createdAt
    levelLabel
    levelHeight
    isK4dDistrict
    isKmapDistrict
    isTest
    isAdministered
    partnership {
      ... on MetaDistrict {
        id
        __typename
      }
      ... on District {
        id
        __typename
      }
      __typename
    }
    hasKhanmigo
    isCentrallyRostered
    rosterSource
    region
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
    schoolYearStart
    schoolYearEnd
    kaLocale
    ancestors {
      id
      levelHeight
      name
      __typename
    }
    countryCode
    goal {
      type
      createdBy {
        id
        kaid
        __typename
      }
      __typename
    }
    schoolYearStart
    __typename
  }
  user {
    id
    isSuperAdmin(districtID: $districtIDStr)
    __typename
  }
}`,
  kadTrialDistricts: `query kadTrialDistricts {
  kadTrialDistricts {
    id
    name
    createdBy {
      id
      kaid
      email
      __typename
    }
    createdAt
    isDowngraded
    __typename
  }
}`,
  autoModerationResultByFeedbackKey: `query autoModerationResultByFeedbackKey($feedbackKey: String!) {
  autoModerationResultByFeedbackKey(feedbackKey: $feedbackKey) {
    feedback {
      feedbackType
      content
      __typename
    }
    autoModerationResult {
      ...ModerationResultFragment
      __typename
    }
    __typename
  }
}

fragment ModerationResultFragment on AutoModerationResult {
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
  autoModerationResultByFeedbackType: `query autoModerationResultByFeedbackType($feedbackType: FeedbackType!, $content: String!) {
  autoModerationResultByFeedbackType(
    feedbackType: $feedbackType
    content: $content
  ) {
    ...ModerationResultFragment
    __typename
  }
}

fragment ModerationResultFragment on AutoModerationResult {
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
  getBlooketQuestionSet: `query getBlooketQuestionSet($threadId: String!) {
  blooketQuestionSet(threadId: $threadId) {
    id
    ownerKaid
    threadId
    title
    description
    questions {
      text
      timeLimit
      randomizeAnswers
      answers {
        text
        isCorrect
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  getTrialTeacherInfos: `query getTrialTeacherInfos($schoolID: String!) {
  getTeachersForSchool(schoolID: $schoolID) {
    id
    keyNameID
    kaid
    districtProvidedFirstName
    districtProvidedLastName
    districtProvidedEmail
    cdiCount
    activationEmailSentAt
    __typename
  }
}`,
  GetKhanmigoModerators: `query GetKhanmigoModerators($partnershipID: ID!, $districtID: ID!) {
  getKhanmigoModerators(partnershipID: $partnershipID, districtID: $districtID) {
    id
    keyNameID
    displayNameForTeacher
    kaid
    moderatorOfSchools {
      id
      name
      __typename
    }
    __typename
  }
}`,
  GetVisibleAdminUDIs: `query GetVisibleAdminUDIs($partnershipID: ID!, $districtID: ID!) {
  getVisibleAdminUDIs(partnershipID: $partnershipID, districtID: $districtID) {
    id
    keyNameID
    displayNameForTeacher
    districtProvidedEmail
    kaid
    moderatorOfSchools {
      id
      __typename
    }
    __typename
  }
}`,
  devadminAssessmentStatus: `query devadminAssessmentStatus($kaid: String!, $assessmentSlug: String!) {
  actor: user {
    id
    __typename
  }
  user(kaid: $kaid) {
    id
    nickname
    assessmentData {
      assessmentStatus(assessmentSlug: $assessmentSlug) {
        status
        assessment {
          id
          name
          __typename
        }
        task {
          id
          creationTime
          expirationTime
          questionsCompleted
          estimatedQuestionsRemaining
          responses {
            exerciseId
            itemId
            finalResponse
            isCorrect
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
}`,
  AssignmentsPageForContentKind: `query AssignmentsPageForContentKind($contentKind: String!, $dueAfter: DateTime, $cursor: ID, $pageSize: Int) {
  user {
    id
    assignmentsPageForContentKind(
      contentKind: $contentKind
      dueAfter: $dueAfter
      after: $cursor
      pageSize: $pageSize
    ) {
      pageInfo {
        nextCursor
        __typename
      }
      assignments {
        id
        dueDate
        title
        itemCompletionStates {
          studentKaid
          completedOn
          __typename
        }
        contents {
          ... on AIGuideActivity {
            id
            contentId
            slug
            translatedTitle
            activityType
            defaultUrlPath
            __typename
          }
          __typename
        }
        classroom {
          cacheId
          id
          name
          descriptor
          coach {
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
}`,
  getExerciseTitle: `query getExerciseTitle($exerciseId: String!) {
  exerciseById(id: $exerciseId) {
    id
    translatedTitle
    __typename
  }
}`,
  ProgressByNodeHook: `query ProgressByNodeHook($filters: DistrictCourseProgressFilters!) {
  districtCourseProgressByAdminAggregate(filters: $filters) {
    dateInfo {
      from
      upTo
      lastUpdatedDate
      __typename
    }
    rows {
      adminAggregate {
        ... on District {
          id
          name
          __typename
        }
        ... on MetaDistrict {
          id
          name
          __typename
        }
        __typename
      }
      info {
        activeLearners
        totalLearners
        averageMinutes
        averageSkillsLeveledToProficient
        averageSkillsLeveledUp
        averageSkillsWorkedOn
        percent0
        percent1to15
        percent15to30
        percent30plus
        attemptedPercent
        familiarPercent
        proficientPercent
        masteredPercent
        minutesTargetStatus
        skillsLeveledUpTargetStatus
        skillsToProficientTargetStatus
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  getCanAddStudentToAssignment: `query getCanAddStudentToAssignment($assignmentId: ID!, $studentKaid: String!) {
  canAddStudentToAssignment(
    assignmentID: $assignmentId
    studentKaid: $studentKaid
  ) {
    responseCode
    assignment {
      ...assignmentFields
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}

fragment assignmentFields on Assignment {
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
}

fragment contentFieldsForContents on LearnableContent {
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
  exerciseEditorGetAllArticleRevisionsV2: `query exerciseEditorGetAllArticleRevisionsV2 {
  allArticleRevisions {
    id
    slug
    title
    __typename
  }
}`,
  exerciseEditorGetAllExerciseRevisionsV2: `query exerciseEditorGetAllExerciseRevisionsV2 {
  allExerciseRevisions {
    id
    slug
    title
    __typename
  }
}`,
  exerciseEditorGetAllVideoRevisionsV2: `query exerciseEditorGetAllVideoRevisionsV2 {
  allVideoRevisions {
    id
    slug
    title
    __typename
  }
}`,
  devadminAssessmentConfig: `query devadminAssessmentConfig($assessmentSlug: String!) {
  interimAssessment(assessmentSlug: $assessmentSlug) {
    id
    name
    slug
    enabled
    config {
      eytSurveySlug
      nonEYTSurveySlug
      steps {
        ... on InterimAssessmentStandardQuestionStep {
          id
          stepNumber
          exerciseId
          __typename
        }
        ... on InterimAssessmentEYTQuestionStep {
          id
          stepNumber
          exerciseId
          conversationStarter
          completionCriteria
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  getExerciseInfo: `query getExerciseInfo($exerciseId: String!) {
  exerciseById(id: $exerciseId) {
    id
    translatedTitle
    parentTopic {
      id
      domainSlug
      __typename
    }
    __typename
  }
}`,
  devadminAssessmentConfigs: `query devadminAssessmentConfigs {
  interimAssessments {
    id
    name
    slug
    enabled
    __typename
  }
}`,
  GetDistrictTrialTOSAcceptanceByKaid: `query GetDistrictTrialTOSAcceptanceByKaid {
  getDistrictTrialTOSAcceptanceByKaid {
    id
    __typename
  }
}`,
  districtKhanmigoTotalUsageByNode: `query districtKhanmigoTotalUsageByNode($filter: KhanmigoDistrictFilters!) {
  districtKhanmigoUsage(filter: $filter) {
    groupType
    overall {
      possibleUsers
      usersWithUsage
      percentUsersWithUsage
      chats
      avgChatsPerUsersWithUsage
      avgChatsPerPossibleUsers
      flaggedChats
      avgFlaggedChatsPerUsersWithUsage
      avgFlaggedChatsPerPossibleUsers
      messages
      avgMessagesPerChat
      avgMessagesPerUserWithUsage
      avgMessagesPerPossibleUsers
      targetStatus
      __typename
    }
    target {
      percentage
      __typename
    }
    byAdminAggregate {
      adminAggregate {
        ... on District {
          id
          name
          __typename
        }
        ... on MetaDistrict {
          id
          name
          __typename
        }
        __typename
      }
      usage {
        possibleUsers
        usersWithUsage
        percentUsersWithUsage
        chats
        avgChatsPerUsersWithUsage
        avgChatsPerPossibleUsers
        flaggedChats
        avgFlaggedChatsPerUsersWithUsage
        avgFlaggedChatsPerPossibleUsers
        messages
        avgMessagesPerChat
        targetStatus
        avgMessagesPerUserWithUsage
        avgMessagesPerPossibleUsers
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  districtKhanmigoTotalUsageBySchool: `query districtKhanmigoTotalUsageBySchool($filter: KhanmigoDistrictFilters!) {
  districtKhanmigoUsage(filter: $filter) {
    groupType
    overall {
      possibleUsers
      usersWithUsage
      percentUsersWithUsage
      chats
      avgChatsPerUsersWithUsage
      avgChatsPerPossibleUsers
      flaggedChats
      avgFlaggedChatsPerUsersWithUsage
      avgFlaggedChatsPerPossibleUsers
      messages
      avgMessagesPerChat
      avgMessagesPerUserWithUsage
      avgMessagesPerPossibleUsers
      targetStatus
      __typename
    }
    target {
      percentage
      __typename
    }
    bySchool {
      school {
        id
        name
        __typename
      }
      usage {
        possibleUsers
        usersWithUsage
        percentUsersWithUsage
        chats
        avgChatsPerUsersWithUsage
        avgChatsPerPossibleUsers
        flaggedChats
        avgFlaggedChatsPerUsersWithUsage
        avgFlaggedChatsPerPossibleUsers
        messages
        avgMessagesPerChat
        targetStatus
        avgMessagesPerUserWithUsage
        avgMessagesPerPossibleUsers
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  getClassroomsAndStudents: `query getClassroomsAndStudents {
  user {
    id
    isK4dTeacher
    classrooms: coachedStudentLists {
      id
      cacheId
      classroomDescriptor: descriptor
      name
      studentKaidsAndNicknames {
        id
        kaid
        nickname: coachNickname
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  devadminExerciseForAssessmentConfigEditor: `query devadminExerciseForAssessmentConfigEditor($id: String!) {
  exerciseById(id: $id) {
    id
    slug
    title
    __typename
  }
}`,
  lookUpClassroomByCode: `query lookUpClassroomByCode($code: String!) {
  joinByClassCodeInfo(classCode: $code) {
    cacheId
    id
    name
    __typename
  }
}`,
  ContentTranslationSearchQuery: `query ContentTranslationSearchQuery($query: String!, $type: QueryType!) {
  stringSearch(query: $query, type: $type) {
    snapshotId
    filename
    entry {
      msgKey
      msgId
      comment
      occurrences {
        file
        line
        __typename
      }
      timestamp
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
}`,
  ParentOverviewByChildReport: `query ParentOverviewByChildReport($filters: ParentOverviewReportFilters!) {
  parentOverviewByChildReport(filters: $filters) {
    dateInfo {
      lastUpdatedDate
      from
      upTo
      __typename
    }
    rows {
      user {
        id
        __typename
      }
      info {
        minutes
        workedOn
        leveledUp
        leveledToProficient
        attempted
        familiar
        proficient
        mastered
        __typename
      }
      __typename
    }
    __typename
  }
  parent: user {
    id
    children {
      id
      kaid
      nickname
      __typename
    }
    __typename
  }
}`,
  ParentOverviewByCourseForChildReport: `query ParentOverviewByCourseForChildReport($filters: ParentOverviewReportFilters!, $childKaid: String!) {
  parentOverviewByCourseForChildReport(filters: $filters, childKaid: $childKaid) {
    dateInfo {
      lastUpdatedDate
      from
      upTo
      __typename
    }
    rows {
      course {
        id
        translatedTitle
        __typename
      }
      info {
        minutes
        workedOn
        leveledUp
        leveledToProficient
        attempted
        familiar
        proficient
        mastered
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  PlatformTranslationSearchQuery: `query PlatformTranslationSearchQuery($query: String!, $type: QueryType!) {
  platformStringSearch(query: $query, type: $type) {
    results {
      snapshotId
      filename
      entry {
        msgKey
        msgId
        msgContext
        occurrences {
          file
          __typename
        }
        timestamp
        __typename
      }
      translations {
        msgStr
        approved
        crowdinLocale
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
  assignmentForAction: `query assignmentForAction($assignmentId: String!, $teacherKaid: String!) {
  coach: user {
    id
    assignment: assignmentByThisUser(id: $assignmentId) {
      id
      contentDescriptors
      title
      assignedDate
      startDate
      dueDate
      configuredActivityInputs
      students {
        id
        kaid
        coachNickname(teacherKaid: $teacherKaid)
        __typename
      }
      classroom {
        id
        cacheId
        descriptor
        name
        signupCode
        __typename
      }
      itemCompletionStatesForAllStudents {
        studentKaid
        essaySession {
          id
          currentStage
          __typename
        }
        completedOn
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  assignmentInfoForSharing: `query assignmentInfoForSharing($assignmentID: String!) {
  user {
    id
    assignmentByThisUser(id: $assignmentID) {
      id
      classroom {
        cacheId
        id
        name
        signupCode
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  devadminAssessmentConfigsByExercise: `query devadminAssessmentConfigsByExercise($exerciseId: String!) {
  interimAssessmentsByExercise(exerciseId: $exerciseId) {
    id
    name
    slug
    enabled
    __typename
  }
}`,
  getAssessmentItemForPreviewPage: `query getAssessmentItemForPreviewPage($input: AssessmentItemInput!) {
  assessmentItem(input: $input) {
    item {
      id
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
}`,
  getClassroomStruggleStats: `query getClassroomStruggleStats($classroomDescriptor: String!) {
  getClassroomStruggleStats(classroomDescriptor: $classroomDescriptor) {
    classroomStruggleStats {
      skillsByStudentsWhoHaveWorkedOnSkill {
        skillID
        value
        __typename
      }
      skillsWithMostProblemAttempts {
        skillID
        value
        __typename
      }
      skillsWithMostCorrectAnswers {
        skillID
        value
        __typename
      }
      skillsWithWorstCorrectPerAttemptRatio {
        skillID
        value
        total
        __typename
      }
      skillsWithMostTaskRestarts {
        skillID
        value
        __typename
      }
      skillsWithHighestSkipRate {
        skillID
        value
        __typename
      }
      skillsWithMostStudentsLast3AttemptIncorrect {
        skillID
        value
        __typename
      }
      skillsWithMostStudentsLast5AttemptIncorrect {
        skillID
        value
        __typename
      }
      skillsWithMostStudentsAtLeast3AttemptIncorrectInLast7 {
        skillID
        value
        __typename
      }
      skillsWithMostStudentsAtLeast3AttemptIncorrectInLast7Twice {
        skillID
        value
        __typename
      }
      skillsWithMostStudentsLastTaskAtAttempted {
        skillID
        value
        __typename
      }
      skillsWithMostStudentsLast2TasksAtAttempted {
        skillID
        value
        __typename
      }
      skillsWithMostStudentsLast3TasksAtAttempted {
        skillID
        value
        __typename
      }
      __typename
    }
    skills {
      skillID
      skillTitle
      skillUrl
      __typename
    }
    __typename
  }
}`,
  getParentTools: `query getParentTools {
  aiGuideParentTools {
    id
    configName
    __typename
  }
}`,
  getTeacherCourses: `query getTeacherCourses($kaid: String!) {
  user(kaid: $kaid) {
    id
    teacherCourses
    __typename
  }
}`,
  getTeacherGradeLevels: `query getTeacherGradeLevels($kaid: String!) {
  user(kaid: $kaid) {
    id
    teacherGradeLevels
    __typename
  }
}`,
  getUDIDetails: `query getUDIDetails($uuid: ID!) {
  userDistrictInfo(uuid: $uuid, includeDeleted: true) {
    id
    uuid
    kaid
    adminOfSchools {
      id
      name
      __typename
    }
    gracePeriod {
      start
      end
      __typename
    }
    partnership {
      ... on MetaDistrict {
        id
        name
        __typename
      }
      ... on District {
        id
        name
        __typename
      }
      __typename
    }
    district {
      id
      name
      isOldNWEA
      kaLocale
      ancestors {
        id
        name
        __typename
      }
      __typename
    }
    createdAt
    deletedAt
    updatedAt
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
    khanmigoShould
    khanmigoStatus
    khanmigoReason
    udiAuditLogs {
      kind
      changes
      actorKaid
      createdAt
      description
      __typename
    }
    __typename
  }
}`,
  userForAuthorization: `query userForAuthorization {
  user {
    id
    birthMonthYear
    hasAccessToAIGuideLearner
    hasAccessToWritingCoachLearner
    hasAccessToWritingCoachTeacher
    isAIGuideEnabled
    isCleverLibraryTeacher
    isFormalTeacher
    isK4dStudent
    isK4dTeacher
    isKmapStudent
    isKmapTeacher
    isTeacher
    __typename
  }
}`,
  userMayInputImages: `query userMayInputImages {
  user {
    id
    includesDistrictOwnedData
    districtEnableImageInput
    __typename
  }
}`,
  KAClassroom_GetAssessmentItem: `query KAClassroom_GetAssessmentItem($input: AssessmentItemInput!) {
  assessmentItem(input: $input) {
    item {
      ...assessmentItemFields
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

fragment assessmentItemFields on AssessmentItem {
  id
  sha
  problemType
  itemData
  __typename
}`,
  ParentOverviewBySkillForChildForCourseReport: `query ParentOverviewBySkillForChildForCourseReport($filters: ParentOverviewReportFilters!, $childKaid: String!, $courseId: String!) {
  parentOverviewBySkillForChildForCourseReport(
    filters: $filters
    childKaid: $childKaid
  ) {
    dateInfo {
      lastUpdatedDate
      from
      upTo
      __typename
    }
    rows {
      skill {
        id
        translatedTitle
        __typename
      }
      info {
        minutes
        workedOn
        leveledUp
        leveledToProficient
        attempted
        familiar
        proficient
        mastered
        __typename
      }
      __typename
    }
    __typename
  }
  courseById(id: $courseId) {
    id
    unitChildren {
      id
      translatedTitle
      filteredContent(kinds: ["Exercise"]) {
        __typename
        id
      }
      __typename
    }
    __typename
  }
}`,
  KAClassroom_GetClassroomCourses: `query KAClassroom_GetClassroomCourses($classDescriptor: String!) {
  classroom: classroomByDescriptor(descriptor: $classDescriptor) {
    cacheId
    id
    descriptor
    courses: topics {
      id
      title: translatedStandaloneTitle
      __typename
    }
    __typename
  }
}`,
  KAClassroom_GetDomains: `query KAClassroom_GetDomains($region: String!) {
  domains: studentListTopics(region: $region) {
    translatedTitle
    courses: topics {
      id
      key
      translatedTitle
      __typename
    }
    __typename
  }
}`,
  allCoacheeNamesForAssessments: `query allCoacheeNamesForAssessments {
  user {
    id
    coachedClassrooms {
      descriptor
      cacheId
      id
      studentKaidsAndNicknames {
        id
        coachNickname
        __typename
      }
      __typename
    }
    children {
      id
      nickname
      __typename
    }
    __typename
  }
}`,
  coachDetailsForAssessments: `query coachDetailsForAssessments {
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
}`,
  assignmentInfoForRedirect: `query assignmentInfoForRedirect($assignmentId: String!) {
  user {
    id
    assignmentByThisUser(id: $assignmentId) {
      id
      __typename
    }
    __typename
  }
}`,
  getChildAssignmentsClassrooms: `query getChildAssignmentsClassrooms($parentKaid: String!) {
  childAssignmentsClassroomsForParent(parentKaid: $parentKaid) {
    id
    cacheId
    name
    studentKaids
    __typename
  }
}`,
  getChildren: `query getChildren($targetKaid: String!) {
  user(kaid: $targetKaid) {
    id
    children {
      id
      nickname
      kaid
      __typename
    }
    __typename
  }
}`,
  AssessmentsPlaytestingKaid: `query AssessmentsPlaytestingKaid {
  user {
    id
    kaid
    __typename
  }
}`,
  KAClassroom_GetLearnerAssignmentData: `query KAClassroom_GetLearnerAssignmentData($input: LearningDashboardQueryInput) {
  learningDashboard(input: $input) {
    kaid
    classroomDescriptor
    queue {
      id
      completionState
      completedOn
      dueDate
      ... on ContentAssignment {
        content {
          id
          translatedTitle
          description
          contentKind
          contentDescriptor
          __typename
        }
        assignment {
          id
          title
          unit {
            id
            translatedTitle
            __typename
          }
          __typename
        }
        __typename
      }
      ... on UnitPacingSuggestion {
        content {
          id
          translatedTitle
          description
          contentKind
          contentDescriptor
          __typename
        }
        masteryAssignment {
          id
          unit {
            id
            translatedTitle
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
}`,
  extraInfoQuery: `query extraInfoQuery {
  user {
    id
    nickname
    email
    birthMonthYear
    tosForFormalTeacherStatus
    __typename
  }
}`,
  getAdminTools: `query getAdminTools {
  aiGuideAdminTools {
    id
    configName
    __typename
  }
}`,
  getAiGuideThreadsForMyDocuments: `query getAiGuideThreadsForMyDocuments($kaid: String!, $hasCoeditor: Boolean!, $limit: Int!) {
  aiGuideThreads(kaid: $kaid, hasCoeditor: $hasCoeditor, limit: $limit) {
    threads {
      id
      coeditingDocument(excludeArchived: true) {
        id
        title
        configName
        threadId
        persona
        latestSnapshot {
          id
          createdAt
          __typename
        }
        __typename
      }
      blooketQuestionSet {
        id
        title
        threadId
        persona
        lastUpdatedAt
        __typename
      }
      __typename
    }
    __typename
  }
}`,
  khanmigoToolsAvailableTeacherTools: `query khanmigoToolsAvailableTeacherTools {
  aiGuideTeacherTools(order: TEACHER_TOOLS_PAGE) {
    id
    configName
    __typename
  }
}`,
  khanmigoToolsFavoritedTeacherTools: `query khanmigoToolsFavoritedTeacherTools {
  aiGuideFavoritedTeacherTools {
    id
    configName
    __typename
  }
}`,
  khanmigoToolsLocalesForTeacherToolsBanner: `query khanmigoToolsLocalesForTeacherToolsBanner {
  localesForLanguagePicker(includeEnglish: false, includeFake: false) {
    id
    localName
    kaLocale
    __typename
  }
}`,
}
