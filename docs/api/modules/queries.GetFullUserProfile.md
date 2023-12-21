# Namespace: GetFullUserProfile

[queries](api/modules/queries.md).GetFullUserProfile

## Interfaces

- [Variables](api/interfaces/queries.GetFullUserProfile.Variables.md)

## Type Aliases

### Data

Ƭ **Data**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `actorIsImpersonatingUser` | `boolean` |
| `user` | `Pick`\<[`UserSchema`](api/interfaces/UserSchema.md)\<`unknown`, `Pick`\<[`ProfileSchema`](api/interfaces/ProfileSchema.md), ``"__typename"`` \| ``"accessLevel"``\>\>, ``"__typename"`` \| ``"authEmails"`` \| ``"badgeCounts"`` \| ``"birthMonthYear"`` \| ``"bio"`` \| ``"canAccessDistrictsHomepage"`` \| ``"canHellban"`` \| ``"canMessageUsers"`` \| ``"canModifyCoaches"`` \| ``"countVideosCompleted"`` \| ``"email"`` \| ``"gaUserId"`` \| ``"hasAccessToAIGuideDev"`` \| ``"hasAccessToAIGuideTeacher"`` \| ``"hasChildren"`` \| ``"hasClasses"`` \| ``"hasCoach"`` \| ``"hasStudents"`` \| ``"hideVisual"`` \| ``"homepageUrl"`` \| ``"id"`` \| ``"includesDistrictOwnedData"`` \| ``"includesK4dDistrictOwnedData"`` \| ``"includesKmapDistrictOwnedData"`` \| ``"isAIGuideEnabled"`` \| ``"isChild"`` \| ``"isCoachingLoggedInUser"`` \| ``"isCreator"`` \| ``"isCurator"`` \| ``"isDataCollectible"`` \| ``"isDeveloper"`` \| ``"isFormalTeacher"`` \| ``"isMidsignupPhantom"`` \| ``"isModerator"`` \| ``"isOrphan"`` \| ``"isParent"`` \| ``"isPhantom"`` \| ``"isPublisher"`` \| ``"isSelf"`` \| ``"isTeacher"`` \| ``"joined"`` \| ``"kaid"`` \| ``"key"`` \| ``"lastLoginCountry"`` \| ``"muteVideos"`` \| ``"newNotificationCount"`` \| ``"nickname"`` \| ``"noColorInVideos"`` \| ``"pendingEmailVerifications"`` \| ``"points"`` \| ``"preferredKaLocale"`` \| ``"prefersReducedMotion"`` \| ``"profile"`` \| ``"profileRoot"`` \| ``"region"`` \| ``"shouldShowAgeCheck"`` \| ``"showCaptions"`` \| ``"signupDataIfUnverified"`` \| ``"soundOn"`` \| ``"tosAccepted"`` \| ``"underAgeGate"`` \| ``"userId"`` \| ``"username"``\> \| ``null`` |

#### Defined in

[src/queries/getFullUserProfile.ts:109](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/queries/getFullUserProfile.ts#L109)

___

### Response

Ƭ **Response**: [`StandardResponse`](api/README.md#standardresponse)\<[`Data`](api/modules/queries.GetFullUserProfile.md#data)\>

#### Defined in

[src/queries/getFullUserProfile.ts:107](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/queries/getFullUserProfile.ts#L107)

## Variables

### query

• `Const` **query**: ``"query getFullUserProfile($kaid: String, $username: String) {\n  user(kaid: $kaid, username: $username) {\n    id\n    kaid\n    key\n    userId\n    email\n    username\n    profileRoot\n    gaUserId\n    isPhantom\n    isDeveloper: hasPermission(name: \"can_do_what_only_admins_can_do\")\n    isCurator: hasPermission(name: \"can_curate_tags\", scope: ANY_ON_CURRENT_LOCALE)\n    isCreator: hasPermission(name: \"has_creator_role\", scope: ANY_ON_CURRENT_LOCALE)\n    isPublisher: hasPermission(name: \"can_publish\", scope: ANY_ON_CURRENT_LOCALE)\n    isModerator: hasPermission(name: \"can_moderate_users\", scope: GLOBAL)\n    isParent\n    isTeacher\n    isFormalTeacher\n    isDataCollectible\n    isChild\n    isOrphan\n    isCoachingLoggedInUser\n    canModifyCoaches\n    nickname\n    hideVisual\n    joined\n    points\n    countVideosCompleted\n    bio\n    profile {\n      accessLevel\n      __typename\n    }\n    soundOn\n    muteVideos\n    showCaptions\n    prefersReducedMotion\n    noColorInVideos\n    newNotificationCount\n    canHellban: hasPermission(name: \"can_ban_users\", scope: GLOBAL)\n    canMessageUsers: hasPermission(\n      name: \"can_send_moderator_messages\"\n      scope: GLOBAL\n    )\n    isSelf: isActor\n    hasStudents: hasCoachees\n    hasClasses\n    hasChildren\n    hasCoach\n    badgeCounts\n    homepageUrl\n    isMidsignupPhantom\n    includesDistrictOwnedData\n    includesKmapDistrictOwnedData\n    includesK4dDistrictOwnedData\n    canAccessDistrictsHomepage\n    preferredKaLocale {\n      id\n      kaLocale\n      status\n      __typename\n    }\n    underAgeGate {\n      parentEmail\n      daysUntilCutoff\n      approvalGivenAt\n      __typename\n    }\n    authEmails\n    signupDataIfUnverified {\n      email\n      emailBounced\n      __typename\n    }\n    pendingEmailVerifications {\n      email\n      __typename\n    }\n    hasAccessToAIGuideTeacher\n    tosAccepted\n    shouldShowAgeCheck\n    birthMonthYear\n    lastLoginCountry\n    region\n    __typename\n  }\n  actorIsImpersonatingUser\n  isAIGuideEnabled\n  hasAccessToAIGuideDev\n}"``

#### Defined in

[src/queries/getFullUserProfile.ts:9](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/queries/getFullUserProfile.ts#L9)
