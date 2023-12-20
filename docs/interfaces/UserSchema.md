# Interface: UserSchema\<AvatarData, ProfileData, ListProgramsData\>

**`File`**

GraphQL Schema

**`Summary`**

This file contains the GraphQL schema types for the KA API.

**`Description`**

This file exists to reduce code duplication and because GraphQL operates using schemas.

Khan Academy's safelisted GraphQL queries will usually not request any schema entirely so TypeScript's `Pick` and `Omit` utility types may come in handy.

## Type parameters

| Name | Type |
| :------ | :------ |
| `AvatarData` | [`AvatarSchema`](AvatarSchema.md) |
| `ProfileData` | [`ProfileSchema`](ProfileSchema.md) |
| `ListProgramsData` | [`ListProgramsSchema`](ListProgramsSchema.md) |

## Properties

### \_\_typename

• **\_\_typename**: ``"User"``

#### Defined in

[types/schema.ts:36](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L36)

___

### actorHasUserScopedPermission

• **actorHasUserScopedPermission**: `boolean`

#### Defined in

[types/schema.ts:37](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L37)

___

### authEmails

• **authEmails**: ``null`` \| `string`[]

#### Defined in

[types/schema.ts:38](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L38)

___

### autocontinueOn

• **autocontinueOn**: ``null`` \| `boolean`

#### Defined in

[types/schema.ts:39](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L39)

___

### avatar

• **avatar**: `AvatarData`

#### Defined in

[types/schema.ts:40](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L40)

___

### badgeCounts

• **badgeCounts**: `string`

#### Defined in

[types/schema.ts:41](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L41)

___

### bio

• **bio**: `string`

#### Defined in

[types/schema.ts:42](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L42)

___

### birthMonthYear

• **birthMonthYear**: `unknown`

#### Defined in

[types/schema.ts:43](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L43)

___

### canAccessDistrictsHomepage

• **canAccessDistrictsHomepage**: `boolean`

#### Defined in

[types/schema.ts:44](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L44)

___

### canHellban

• **canHellban**: ``null`` \| `boolean`

#### Defined in

[types/schema.ts:45](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L45)

___

### canMessageUsers

• **canMessageUsers**: ``null`` \| `boolean`

#### Defined in

[types/schema.ts:46](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L46)

___

### canModifyCoaches

• **canModifyCoaches**: ``null`` \| `boolean`

#### Defined in

[types/schema.ts:47](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L47)

___

### countVideosCompleted

• **countVideosCompleted**: `number`

#### Defined in

[types/schema.ts:48](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L48)

___

### email

• **email**: ``null`` \| `string`

#### Defined in

[types/schema.ts:49](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L49)

___

### gaUserId

• **gaUserId**: ``null`` \| `string`

#### Defined in

[types/schema.ts:50](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L50)

___

### hasAccessToAIGuideDev

• **hasAccessToAIGuideDev**: `boolean`

#### Defined in

[types/schema.ts:51](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L51)

___

### hasAccessToAIGuideTeacher

• **hasAccessToAIGuideTeacher**: `boolean`

#### Defined in

[types/schema.ts:52](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L52)

___

### hasChildren

• **hasChildren**: ``null`` \| `boolean`

#### Defined in

[types/schema.ts:53](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L53)

___

### hasClasses

• **hasClasses**: ``null`` \| `boolean`

#### Defined in

[types/schema.ts:54](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L54)

___

### hasCoach

• **hasCoach**: ``null`` \| `boolean`

#### Defined in

[types/schema.ts:55](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L55)

___

### hasStudents

• **hasStudents**: ``null`` \| `boolean`

#### Defined in

[types/schema.ts:56](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L56)

___

### hasUnresolvedInvitations

• **hasUnresolvedInvitations**: ``null`` \| `boolean`

#### Defined in

[types/schema.ts:57](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L57)

___

### hideVisual

• **hideVisual**: ``null`` \| `boolean`

#### Defined in

[types/schema.ts:58](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L58)

___

### homepageUrl

• **homepageUrl**: ``null`` \| `string`

#### Defined in

[types/schema.ts:59](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L59)

___

### id

• **id**: ``null`` \| \`kaid\_$\{number}\`

Same as KAID unless the user is anonymous

#### Defined in

[types/schema.ts:63](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L63)

___

### includesDistrictOwnedData

• **includesDistrictOwnedData**: `boolean`

#### Defined in

[types/schema.ts:64](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L64)

___

### includesK4dDistrictOwnedData

• **includesK4dDistrictOwnedData**: `boolean`

#### Defined in

[types/schema.ts:65](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L65)

___

### includesKmapDistrictOwnedData

• **includesKmapDistrictOwnedData**: `boolean`

#### Defined in

[types/schema.ts:66](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L66)

___

### isAIGuideEnabled

• **isAIGuideEnabled**: `boolean`

#### Defined in

[types/schema.ts:67](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L67)

___

### isActor

• **isActor**: `boolean`

#### Defined in

[types/schema.ts:68](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L68)

___

### isChild

• **isChild**: ``null`` \| `boolean`

#### Defined in

[types/schema.ts:69](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L69)

___

### isCoachedByActor

• **isCoachedByActor**: `boolean`

#### Defined in

[types/schema.ts:70](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L70)

___

### isCoachingLoggedInUser

• **isCoachingLoggedInUser**: `boolean`

#### Defined in

[types/schema.ts:71](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L71)

___

### isCreator

• **isCreator**: ``null`` \| `boolean`

#### Defined in

[types/schema.ts:72](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L72)

___

### isCurator

• **isCurator**: ``null`` \| `boolean`

#### Defined in

[types/schema.ts:73](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L73)

___

### isDataCollectible

• **isDataCollectible**: ``null`` \| `boolean`

#### Defined in

[types/schema.ts:74](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L74)

___

### isDeveloper

• **isDeveloper**: ``null`` \| `boolean`

#### Defined in

[types/schema.ts:75](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L75)

___

### isFormalTeacher

• **isFormalTeacher**: ``null`` \| `boolean`

#### Defined in

[types/schema.ts:76](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L76)

___

### isMidsignupPhantom

• **isMidsignupPhantom**: `boolean`

#### Defined in

[types/schema.ts:77](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L77)

___

### isModerator

• **isModerator**: ``null`` \| `boolean`

#### Defined in

[types/schema.ts:78](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L78)

___

### isOrphan

• **isOrphan**: ``null`` \| `boolean`

#### Defined in

[types/schema.ts:79](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L79)

___

### isParent

• **isParent**: ``null`` \| `boolean`

#### Defined in

[types/schema.ts:80](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L80)

___

### isPhantom

• **isPhantom**: `boolean`

#### Defined in

[types/schema.ts:81](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L81)

___

### isPublisher

• **isPublisher**: ``null`` \| `boolean`

#### Defined in

[types/schema.ts:82](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L82)

___

### isSatStudent

• **isSatStudent**: ``null`` \| `boolean`

#### Defined in

[types/schema.ts:83](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L83)

___

### isSelf

• **isSelf**: `boolean`

#### Defined in

[types/schema.ts:84](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L84)

___

### isTeacher

• **isTeacher**: ``null`` \| `boolean`

#### Defined in

[types/schema.ts:85](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L85)

___

### joined

• **joined**: `string`

#### Defined in

[types/schema.ts:86](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L86)

___

### kaid

• **kaid**: ``""`` \| \`kaid\_$\{number}\`

Will always be a string if requested in the GraphQL query. Defaults to empty string (`''`) for anonymous users.

#### Defined in

[types/schema.ts:90](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L90)

___

### key

• **key**: ``null`` \| `string`

#### Defined in

[types/schema.ts:91](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L91)

___

### lastLoginCountry

• **lastLoginCountry**: ``null`` \| `string`

#### Defined in

[types/schema.ts:92](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L92)

___

### muteVideos

• **muteVideos**: ``null`` \| `boolean`

#### Defined in

[types/schema.ts:93](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L93)

___

### newNotificationCount

• **newNotificationCount**: ``null`` \| `number`

#### Defined in

[types/schema.ts:94](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L94)

___

### nickname

• **nickname**: ``null`` \| `string`

#### Defined in

[types/schema.ts:95](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L95)

___

### noColorInVideos

• **noColorInVideos**: ``null`` \| `boolean`

#### Defined in

[types/schema.ts:96](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L96)

___

### pendingEmailVerifications

• **pendingEmailVerifications**: ``null`` \| [`PendingEmailVerificationSchema`](PendingEmailVerificationSchema.md)[]

#### Defined in

[types/schema.ts:97](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L97)

___

### points

• **points**: `number`

#### Defined in

[types/schema.ts:98](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L98)

___

### preferredKaLocale

• **preferredKaLocale**: ``null`` \| [`LocaleSchema`](LocaleSchema.md)

#### Defined in

[types/schema.ts:99](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L99)

___

### prefersReducedMotion

• **prefersReducedMotion**: ``null`` \| `boolean`

#### Defined in

[types/schema.ts:100](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L100)

___

### profile

• **profile**: `ProfileData`

#### Defined in

[types/schema.ts:101](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L101)

___

### profileRoot

• **profileRoot**: ``null`` \| \`/profile/$\{string}/\`

Defaults to `null` for anonymous users.

#### Defined in

[types/schema.ts:105](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L105)

___

### programs

• **programs**: `ListProgramsData`

#### Defined in

[types/schema.ts:106](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L106)

___

### qualarooId

• **qualarooId**: ``null`` \| \`kaid\_$\{number}\` \| \`\_gae\_bingo\_random:$\{string}\`

Either Qualaroo ID or KAID

**`Link`**

https://github.com/kamens/gae_bingo

**`Deprecated`**

Since 2023-04-24

#### Defined in

[types/schema.ts:114](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L114)

___

### region

• **region**: `unknown`

#### Defined in

[types/schema.ts:115](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L115)

___

### shouldShowAgeCheck

• **shouldShowAgeCheck**: ``null`` \| `boolean`

#### Defined in

[types/schema.ts:116](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L116)

___

### showCaptions

• **showCaptions**: ``null`` \| `boolean`

#### Defined in

[types/schema.ts:117](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L117)

___

### signupDataIfUnverified

• **signupDataIfUnverified**: `unknown`

#### Defined in

[types/schema.ts:118](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L118)

___

### soundOn

• **soundOn**: ``null`` \| `boolean`

#### Defined in

[types/schema.ts:119](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L119)

___

### tosAccepted

• **tosAccepted**: ``null`` \| `boolean`

#### Defined in

[types/schema.ts:120](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L120)

___

### transferAuthToken

• **transferAuthToken**: `string`

#### Defined in

[types/schema.ts:121](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L121)

___

### underAgeGate

• **underAgeGate**: `unknown`

#### Defined in

[types/schema.ts:122](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L122)

___

### userId

• **userId**: \`kaid\_$\{number}\` \| \`http://googleid.khanacademy.org/$\{number}\`

Either Google ID or KAID

#### Defined in

[types/schema.ts:126](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L126)

___

### userSummaryIsVisibleToActor

• **userSummaryIsVisibleToActor**: `boolean`

#### Defined in

[types/schema.ts:127](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L127)

___

### username

• **username**: `string`

#### Defined in

[types/schema.ts:128](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L128)
