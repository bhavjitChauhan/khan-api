Defined in: [src/types/schema.ts:31](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L31)

## File

GraphQL Schema

## Description

This file exists to reduce code duplication and because GraphQL operates using schemas.

Khan Academy's safelisted GraphQL queries will usually not request any schema entirely so TypeScript's `Pick` and `Omit` utility types may come in handy.

## Type Parameters

• **AvatarData** = [`AvatarSchema`](api/interfaces%5CAvatarSchema.md)

• **ProfileData** = [`ProfileSchema`](api/interfaces%5CProfileSchema.md)

• **ListProgramsData** = [`ListProgramsSchema`](api/interfaces%5CListProgramsSchema.md)

## Properties

### \_\_typename

> **\_\_typename**: `"User"`

Defined in: [src/types/schema.ts:36](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L36)

***

### actorHasUserScopedPermission

> **actorHasUserScopedPermission**: `boolean`

Defined in: [src/types/schema.ts:37](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L37)

***

### authEmails

> **authEmails**: `null` \| `string`[]

Defined in: [src/types/schema.ts:38](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L38)

***

### autocontinueOn

> **autocontinueOn**: `null` \| `boolean`

Defined in: [src/types/schema.ts:39](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L39)

***

### avatar

> **avatar**: `AvatarData`

Defined in: [src/types/schema.ts:40](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L40)

***

### badgeCounts

> **badgeCounts**: `string`

Defined in: [src/types/schema.ts:41](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L41)

***

### bio

> **bio**: `string`

Defined in: [src/types/schema.ts:42](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L42)

***

### birthMonthYear

> **birthMonthYear**: `unknown`

Defined in: [src/types/schema.ts:43](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L43)

***

### canAccessDistrictsHomepage

> **canAccessDistrictsHomepage**: `boolean`

Defined in: [src/types/schema.ts:44](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L44)

***

### canHellban

> **canHellban**: `null` \| `boolean`

Defined in: [src/types/schema.ts:45](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L45)

***

### canMessageUsers

> **canMessageUsers**: `null` \| `boolean`

Defined in: [src/types/schema.ts:46](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L46)

***

### canModifyCoaches

> **canModifyCoaches**: `null` \| `boolean`

Defined in: [src/types/schema.ts:47](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L47)

***

### countVideosCompleted

> **countVideosCompleted**: `number`

Defined in: [src/types/schema.ts:48](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L48)

***

### email

> **email**: `null` \| `string`

Defined in: [src/types/schema.ts:49](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L49)

***

### gaUserId

> **gaUserId**: `null` \| `string`

Defined in: [src/types/schema.ts:50](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L50)

***

### hasAccessToAIGuideCompanionMode

> **hasAccessToAIGuideCompanionMode**: `null` \| `boolean`

Defined in: [src/types/schema.ts:52](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L52)

***

### hasAccessToAIGuideDev

> **hasAccessToAIGuideDev**: `null` \| `boolean`

Defined in: [src/types/schema.ts:51](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L51)

***

### hasAccessToAIGuideDistrictAdmin

> **hasAccessToAIGuideDistrictAdmin**: `null` \| `boolean`

Defined in: [src/types/schema.ts:53](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L53)

***

### hasAccessToAIGuideLearner

> **hasAccessToAIGuideLearner**: `null` \| `boolean`

Defined in: [src/types/schema.ts:54](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L54)

***

### hasAccessToAIGuideParent

> **hasAccessToAIGuideParent**: `null` \| `boolean`

Defined in: [src/types/schema.ts:55](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L55)

***

### hasAccessToAIGuideTeacher

> **hasAccessToAIGuideTeacher**: `null` \| `boolean`

Defined in: [src/types/schema.ts:56](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L56)

***

### hasChildren

> **hasChildren**: `null` \| `boolean`

Defined in: [src/types/schema.ts:57](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L57)

***

### hasClasses

> **hasClasses**: `null` \| `boolean`

Defined in: [src/types/schema.ts:58](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L58)

***

### hasCoach

> **hasCoach**: `null` \| `boolean`

Defined in: [src/types/schema.ts:59](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L59)

***

### hasStudents

> **hasStudents**: `null` \| `boolean`

Defined in: [src/types/schema.ts:60](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L60)

***

### hasUnresolvedInvitations

> **hasUnresolvedInvitations**: `null` \| `boolean`

Defined in: [src/types/schema.ts:61](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L61)

***

### hideVisual

> **hideVisual**: `null` \| `boolean`

Defined in: [src/types/schema.ts:62](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L62)

***

### homepageUrl

> **homepageUrl**: `null` \| `string`

Defined in: [src/types/schema.ts:63](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L63)

***

### id

> **id**: `null` \| `` `kaid_${number}` ``

Defined in: [src/types/schema.ts:67](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L67)

Same as KAID unless the user is anonymous

***

### includesDistrictOwnedData

> **includesDistrictOwnedData**: `boolean`

Defined in: [src/types/schema.ts:68](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L68)

***

### includesK4dDistrictOwnedData

> **includesK4dDistrictOwnedData**: `boolean`

Defined in: [src/types/schema.ts:69](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L69)

***

### includesKmapDistrictOwnedData

> **includesKmapDistrictOwnedData**: `boolean`

Defined in: [src/types/schema.ts:70](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L70)

***

### isActor

> **isActor**: `boolean`

Defined in: [src/types/schema.ts:72](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L72)

***

### isAIGuideEnabled

> **isAIGuideEnabled**: `boolean`

Defined in: [src/types/schema.ts:71](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L71)

***

### isChild

> **isChild**: `null` \| `boolean`

Defined in: [src/types/schema.ts:73](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L73)

***

### isCoachedByActor

> **isCoachedByActor**: `boolean`

Defined in: [src/types/schema.ts:74](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L74)

***

### isCoachingLoggedInUser

> **isCoachingLoggedInUser**: `boolean`

Defined in: [src/types/schema.ts:75](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L75)

***

### isCreator

> **isCreator**: `null` \| `boolean`

Defined in: [src/types/schema.ts:76](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L76)

***

### isCurator

> **isCurator**: `null` \| `boolean`

Defined in: [src/types/schema.ts:77](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L77)

***

### isDataCollectible

> **isDataCollectible**: `null` \| `boolean`

Defined in: [src/types/schema.ts:78](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L78)

***

### isDeveloper

> **isDeveloper**: `null` \| `boolean`

Defined in: [src/types/schema.ts:79](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L79)

***

### isFormalTeacher

> **isFormalTeacher**: `null` \| `boolean`

Defined in: [src/types/schema.ts:80](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L80)

***

### isK4dStudent

> **isK4dStudent**: `null` \| `boolean`

Defined in: [src/types/schema.ts:81](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L81)

***

### isKmapStudent

> **isKmapStudent**: `null` \| `boolean`

Defined in: [src/types/schema.ts:82](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L82)

***

### isMidsignupPhantom

> **isMidsignupPhantom**: `boolean`

Defined in: [src/types/schema.ts:83](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L83)

***

### isModerator

> **isModerator**: `null` \| `boolean`

Defined in: [src/types/schema.ts:84](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L84)

***

### isOrphan

> **isOrphan**: `null` \| `boolean`

Defined in: [src/types/schema.ts:85](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L85)

***

### isParent

> **isParent**: `null` \| `boolean`

Defined in: [src/types/schema.ts:86](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L86)

***

### isPhantom

> **isPhantom**: `boolean`

Defined in: [src/types/schema.ts:87](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L87)

***

### isPublisher

> **isPublisher**: `null` \| `boolean`

Defined in: [src/types/schema.ts:88](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L88)

***

### isSatStudent

> **isSatStudent**: `null` \| `boolean`

Defined in: [src/types/schema.ts:89](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L89)

***

### isSelf

> **isSelf**: `boolean`

Defined in: [src/types/schema.ts:90](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L90)

***

### isTeacher

> **isTeacher**: `null` \| `boolean`

Defined in: [src/types/schema.ts:91](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L91)

***

### joined

> **joined**: `string`

Defined in: [src/types/schema.ts:92](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L92)

***

### kaid

> **kaid**: `""` \| `` `kaid_${number}` ``

Defined in: [src/types/schema.ts:96](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L96)

Will always be a string if requested in the GraphQL query. Defaults to empty string (`''`) for anonymous users.

***

### key

> **key**: `null` \| `string`

Defined in: [src/types/schema.ts:97](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L97)

***

### lastLoginCountry

> **lastLoginCountry**: `null` \| `string`

Defined in: [src/types/schema.ts:98](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L98)

***

### muteVideos

> **muteVideos**: `null` \| `boolean`

Defined in: [src/types/schema.ts:99](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L99)

***

### newNotificationCount

> **newNotificationCount**: `null` \| `number`

Defined in: [src/types/schema.ts:100](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L100)

***

### nickname

> **nickname**: `null` \| `string`

Defined in: [src/types/schema.ts:101](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L101)

***

### noColorInVideos

> **noColorInVideos**: `null` \| `boolean`

Defined in: [src/types/schema.ts:102](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L102)

***

### pendingEmailVerifications

> **pendingEmailVerifications**: `null` \| [`PendingEmailVerificationSchema`](api/interfaces%5CPendingEmailVerificationSchema.md)[]

Defined in: [src/types/schema.ts:103](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L103)

***

### points

> **points**: `number`

Defined in: [src/types/schema.ts:104](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L104)

***

### preferredKaLocale

> **preferredKaLocale**: `null` \| [`LocaleSchema`](api/interfaces%5CLocaleSchema.md)

Defined in: [src/types/schema.ts:105](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L105)

***

### prefersReducedMotion

> **prefersReducedMotion**: `null` \| `boolean`

Defined in: [src/types/schema.ts:106](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L106)

***

### profile

> **profile**: `ProfileData`

Defined in: [src/types/schema.ts:107](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L107)

***

### profileRoot

> **profileRoot**: `null` \| `` `/profile/${string}/` ``

Defined in: [src/types/schema.ts:111](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L111)

Defaults to `null` for anonymous users.

***

### programs

> **programs**: `ListProgramsData`

Defined in: [src/types/schema.ts:112](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L112)

***

### ~~qualarooId~~

> **qualarooId**: `null` \| `` `kaid_${number}` `` \| `` `_gae_bingo_random:${string}` ``

Defined in: [src/types/schema.ts:120](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L120)

Either Qualaroo ID or KAID

#### Link

https://github.com/kamens/gae_bingo

#### Deprecated

Since 2023-04-24

***

### region

> **region**: `unknown`

Defined in: [src/types/schema.ts:121](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L121)

***

### shouldShowAgeCheck

> **shouldShowAgeCheck**: `null` \| `boolean`

Defined in: [src/types/schema.ts:122](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L122)

***

### showCaptions

> **showCaptions**: `null` \| `boolean`

Defined in: [src/types/schema.ts:123](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L123)

***

### signupDataIfUnverified

> **signupDataIfUnverified**: `unknown`

Defined in: [src/types/schema.ts:124](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L124)

***

### soundOn

> **soundOn**: `null` \| `boolean`

Defined in: [src/types/schema.ts:125](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L125)

***

### tosAccepted

> **tosAccepted**: `null` \| `boolean`

Defined in: [src/types/schema.ts:126](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L126)

***

### transferAuthToken

> **transferAuthToken**: `string`

Defined in: [src/types/schema.ts:127](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L127)

***

### underAgeGate

> **underAgeGate**: `unknown`

Defined in: [src/types/schema.ts:128](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L128)

***

### userId

> **userId**: `` `kaid_${number}` `` \| `` `http://googleid.khanacademy.org/${number}` ``

Defined in: [src/types/schema.ts:132](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L132)

Either Google ID or KAID

***

### username

> **username**: `string`

Defined in: [src/types/schema.ts:134](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L134)

***

### userSummaryIsVisibleToActor

> **userSummaryIsVisibleToActor**: `boolean`

Defined in: [src/types/schema.ts:133](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L133)
