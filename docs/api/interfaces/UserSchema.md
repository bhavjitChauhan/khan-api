## File

GraphQL Schema

## Summary

This file contains the GraphQL schema types for the KA API.

## Description

This file exists to reduce code duplication and because GraphQL operates using schemas.

Khan Academy's safelisted GraphQL queries will usually not request any schema entirely so TypeScript's `Pick` and `Omit` utility types may come in handy.

## Type parameters

• **AvatarData** = [`AvatarSchema`](api%5Cinterfaces%5CAvatarSchema.md)

• **ProfileData** = [`ProfileSchema`](api%5Cinterfaces%5CProfileSchema.md)

• **ListProgramsData** = [`ListProgramsSchema`](api%5Cinterfaces%5CListProgramsSchema.md)

## Properties

### \_\_typename

> **\_\_typename**: `"User"`

#### Source

[src/types/schema.ts:36](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L36)

***

### actorHasUserScopedPermission

> **actorHasUserScopedPermission**: `boolean`

#### Source

[src/types/schema.ts:37](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L37)

***

### authEmails

> **authEmails**: `null` \| `string`[]

#### Source

[src/types/schema.ts:38](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L38)

***

### autocontinueOn

> **autocontinueOn**: `null` \| `boolean`

#### Source

[src/types/schema.ts:39](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L39)

***

### avatar

> **avatar**: `AvatarData`

#### Source

[src/types/schema.ts:40](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L40)

***

### badgeCounts

> **badgeCounts**: `string`

#### Source

[src/types/schema.ts:41](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L41)

***

### bio

> **bio**: `string`

#### Source

[src/types/schema.ts:42](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L42)

***

### birthMonthYear

> **birthMonthYear**: `unknown`

#### Source

[src/types/schema.ts:43](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L43)

***

### canAccessDistrictsHomepage

> **canAccessDistrictsHomepage**: `boolean`

#### Source

[src/types/schema.ts:44](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L44)

***

### canHellban

> **canHellban**: `null` \| `boolean`

#### Source

[src/types/schema.ts:45](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L45)

***

### canMessageUsers

> **canMessageUsers**: `null` \| `boolean`

#### Source

[src/types/schema.ts:46](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L46)

***

### canModifyCoaches

> **canModifyCoaches**: `null` \| `boolean`

#### Source

[src/types/schema.ts:47](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L47)

***

### countVideosCompleted

> **countVideosCompleted**: `number`

#### Source

[src/types/schema.ts:48](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L48)

***

### email

> **email**: `null` \| `string`

#### Source

[src/types/schema.ts:49](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L49)

***

### gaUserId

> **gaUserId**: `null` \| `string`

#### Source

[src/types/schema.ts:50](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L50)

***

### hasAccessToAIGuideDev

> **hasAccessToAIGuideDev**: `boolean`

#### Source

[src/types/schema.ts:51](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L51)

***

### hasAccessToAIGuideTeacher

> **hasAccessToAIGuideTeacher**: `boolean`

#### Source

[src/types/schema.ts:52](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L52)

***

### hasChildren

> **hasChildren**: `null` \| `boolean`

#### Source

[src/types/schema.ts:53](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L53)

***

### hasClasses

> **hasClasses**: `null` \| `boolean`

#### Source

[src/types/schema.ts:54](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L54)

***

### hasCoach

> **hasCoach**: `null` \| `boolean`

#### Source

[src/types/schema.ts:55](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L55)

***

### hasStudents

> **hasStudents**: `null` \| `boolean`

#### Source

[src/types/schema.ts:56](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L56)

***

### hasUnresolvedInvitations

> **hasUnresolvedInvitations**: `null` \| `boolean`

#### Source

[src/types/schema.ts:57](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L57)

***

### hideVisual

> **hideVisual**: `null` \| `boolean`

#### Source

[src/types/schema.ts:58](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L58)

***

### homepageUrl

> **homepageUrl**: `null` \| `string`

#### Source

[src/types/schema.ts:59](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L59)

***

### id

> **id**: `null` \| \`kaid\_$\{number\}\`

Same as KAID unless the user is anonymous

#### Source

[src/types/schema.ts:63](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L63)

***

### includesDistrictOwnedData

> **includesDistrictOwnedData**: `boolean`

#### Source

[src/types/schema.ts:64](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L64)

***

### includesK4dDistrictOwnedData

> **includesK4dDistrictOwnedData**: `boolean`

#### Source

[src/types/schema.ts:65](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L65)

***

### includesKmapDistrictOwnedData

> **includesKmapDistrictOwnedData**: `boolean`

#### Source

[src/types/schema.ts:66](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L66)

***

### isAIGuideEnabled

> **isAIGuideEnabled**: `boolean`

#### Source

[src/types/schema.ts:67](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L67)

***

### isActor

> **isActor**: `boolean`

#### Source

[src/types/schema.ts:68](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L68)

***

### isChild

> **isChild**: `null` \| `boolean`

#### Source

[src/types/schema.ts:69](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L69)

***

### isCoachedByActor

> **isCoachedByActor**: `boolean`

#### Source

[src/types/schema.ts:70](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L70)

***

### isCoachingLoggedInUser

> **isCoachingLoggedInUser**: `boolean`

#### Source

[src/types/schema.ts:71](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L71)

***

### isCreator

> **isCreator**: `null` \| `boolean`

#### Source

[src/types/schema.ts:72](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L72)

***

### isCurator

> **isCurator**: `null` \| `boolean`

#### Source

[src/types/schema.ts:73](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L73)

***

### isDataCollectible

> **isDataCollectible**: `null` \| `boolean`

#### Source

[src/types/schema.ts:74](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L74)

***

### isDeveloper

> **isDeveloper**: `null` \| `boolean`

#### Source

[src/types/schema.ts:75](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L75)

***

### isFormalTeacher

> **isFormalTeacher**: `null` \| `boolean`

#### Source

[src/types/schema.ts:76](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L76)

***

### isK4dStudent

> **isK4dStudent**: `null` \| `boolean`

#### Source

[src/types/schema.ts:77](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L77)

***

### isKmapStudent

> **isKmapStudent**: `null` \| `boolean`

#### Source

[src/types/schema.ts:78](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L78)

***

### isMidsignupPhantom

> **isMidsignupPhantom**: `boolean`

#### Source

[src/types/schema.ts:79](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L79)

***

### isModerator

> **isModerator**: `null` \| `boolean`

#### Source

[src/types/schema.ts:80](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L80)

***

### isOrphan

> **isOrphan**: `null` \| `boolean`

#### Source

[src/types/schema.ts:81](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L81)

***

### isParent

> **isParent**: `null` \| `boolean`

#### Source

[src/types/schema.ts:82](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L82)

***

### isPhantom

> **isPhantom**: `boolean`

#### Source

[src/types/schema.ts:83](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L83)

***

### isPublisher

> **isPublisher**: `null` \| `boolean`

#### Source

[src/types/schema.ts:84](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L84)

***

### isSatStudent

> **isSatStudent**: `null` \| `boolean`

#### Source

[src/types/schema.ts:85](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L85)

***

### isSelf

> **isSelf**: `boolean`

#### Source

[src/types/schema.ts:86](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L86)

***

### isTeacher

> **isTeacher**: `null` \| `boolean`

#### Source

[src/types/schema.ts:87](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L87)

***

### joined

> **joined**: `string`

#### Source

[src/types/schema.ts:88](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L88)

***

### kaid

> **kaid**: `""` \| \`kaid\_$\{number\}\`

Will always be a string if requested in the GraphQL query. Defaults to empty string (`''`) for anonymous users.

#### Source

[src/types/schema.ts:92](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L92)

***

### key

> **key**: `null` \| `string`

#### Source

[src/types/schema.ts:93](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L93)

***

### lastLoginCountry

> **lastLoginCountry**: `null` \| `string`

#### Source

[src/types/schema.ts:94](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L94)

***

### muteVideos

> **muteVideos**: `null` \| `boolean`

#### Source

[src/types/schema.ts:95](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L95)

***

### newNotificationCount

> **newNotificationCount**: `null` \| `number`

#### Source

[src/types/schema.ts:96](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L96)

***

### nickname

> **nickname**: `null` \| `string`

#### Source

[src/types/schema.ts:97](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L97)

***

### noColorInVideos

> **noColorInVideos**: `null` \| `boolean`

#### Source

[src/types/schema.ts:98](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L98)

***

### pendingEmailVerifications

> **pendingEmailVerifications**: `null` \| [`PendingEmailVerificationSchema`](api%5Cinterfaces%5CPendingEmailVerificationSchema.md)[]

#### Source

[src/types/schema.ts:99](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L99)

***

### points

> **points**: `number`

#### Source

[src/types/schema.ts:100](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L100)

***

### preferredKaLocale

> **preferredKaLocale**: `null` \| [`LocaleSchema`](api%5Cinterfaces%5CLocaleSchema.md)

#### Source

[src/types/schema.ts:101](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L101)

***

### prefersReducedMotion

> **prefersReducedMotion**: `null` \| `boolean`

#### Source

[src/types/schema.ts:102](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L102)

***

### profile

> **profile**: `ProfileData`

#### Source

[src/types/schema.ts:103](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L103)

***

### profileRoot

> **profileRoot**: `null` \| \`/profile/$\{string\}/\`

Defaults to `null` for anonymous users.

#### Source

[src/types/schema.ts:107](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L107)

***

### programs

> **programs**: `ListProgramsData`

#### Source

[src/types/schema.ts:108](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L108)

***

### ~~qualarooId~~

> **qualarooId**: `null` \| \`kaid\_$\{number\}\` \| \`\_gae\_bingo\_random:$\{string\}\`

Either Qualaroo ID or KAID

#### Link

https://github.com/kamens/gae_bingo

#### Deprecated

Since 2023-04-24

#### Source

[src/types/schema.ts:116](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L116)

***

### region

> **region**: `unknown`

#### Source

[src/types/schema.ts:117](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L117)

***

### shouldShowAgeCheck

> **shouldShowAgeCheck**: `null` \| `boolean`

#### Source

[src/types/schema.ts:118](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L118)

***

### showCaptions

> **showCaptions**: `null` \| `boolean`

#### Source

[src/types/schema.ts:119](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L119)

***

### signupDataIfUnverified

> **signupDataIfUnverified**: `unknown`

#### Source

[src/types/schema.ts:120](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L120)

***

### soundOn

> **soundOn**: `null` \| `boolean`

#### Source

[src/types/schema.ts:121](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L121)

***

### tosAccepted

> **tosAccepted**: `null` \| `boolean`

#### Source

[src/types/schema.ts:122](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L122)

***

### transferAuthToken

> **transferAuthToken**: `string`

#### Source

[src/types/schema.ts:123](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L123)

***

### underAgeGate

> **underAgeGate**: `unknown`

#### Source

[src/types/schema.ts:124](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L124)

***

### userId

> **userId**: \`kaid\_$\{number\}\` \| \`http://googleid.khanacademy.org/$\{number\}\`

Either Google ID or KAID

#### Source

[src/types/schema.ts:128](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L128)

***

### userSummaryIsVisibleToActor

> **userSummaryIsVisibleToActor**: `boolean`

#### Source

[src/types/schema.ts:129](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L129)

***

### username

> **username**: `string`

#### Source

[src/types/schema.ts:130](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L130)
