Defined in: [src/User.ts:71](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/User.ts#L71)

## Extends

- `default`\<[`UserSchema`](api/interfaces%5CUserSchema.md), [`IUser`](api/interfaces%5CIUser.md)\>

## Implements

- [`IUser`](api/interfaces%5CIUser.md)

## Constructors

### new User()

> **new User**(`data`?): [`User`](api/classes%5CUser.md)

Defined in: [src/lib/Wrapper.ts:36](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/Wrapper.ts#L36)

Creates a new class instance

#### Parameters

##### data?

[`IUser`](api/interfaces%5CIUser.md)

#### Returns

[`User`](api/classes%5CUser.md)

#### Inherited from

`Wrapper<UserSchema, IUser>.constructor`

### new User()

> **new User**(`client`, `data`?): [`User`](api/classes%5CUser.md)

Defined in: [src/lib/Wrapper.ts:37](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/Wrapper.ts#L37)

#### Parameters

##### client

[`Client`](api/classes%5CClient.md)

##### data?

[`IUser`](api/interfaces%5CIUser.md)

#### Returns

[`User`](api/classes%5CUser.md)

#### Inherited from

`Wrapper<UserSchema, IUser>.constructor`

## Properties

### accessLevel?

> `readonly` `optional` **accessLevel**: [`UserAccessLevel`](api/enumerations%5CUserAccessLevel.md)

Defined in: [src/User.ts:160](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/User.ts#L160)

#### Implementation of

[`IUser`](api/interfaces%5CIUser.md).[`accessLevel`](api/interfaces%5CIUser.md#accesslevel)

***

### avatar?

> `readonly` `optional` **avatar**: [`AvatarURL`](api/type-aliases%5CAvatarURL.md)

Defined in: [src/User.ts:99](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/User.ts#L99)

The user's avatar URL.

#### Implementation of

[`IUser`](api/interfaces%5CIUser.md).[`avatar`](api/interfaces%5CIUser.md#avatar)

***

### badgeCounts?

> `readonly` `optional` **badgeCounts**: `Record`\<[`BadgeCategory`](api/enumerations%5CBadgeCategory.md), `number`\>

Defined in: [src/User.ts:111](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/User.ts#L111)

The user's badge counts by category.

#### Implementation of

[`IUser`](api/interfaces%5CIUser.md).[`badgeCounts`](api/interfaces%5CIUser.md#badgecounts)

***

### bio?

> `readonly` `optional` **bio**: `string`

Defined in: [src/User.ts:103](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/User.ts#L103)

The user's bio.

#### Implementation of

[`IUser`](api/interfaces%5CIUser.md).[`bio`](api/interfaces%5CIUser.md#bio)

***

### canAccessDistrictsHomepage?

> `readonly` `optional` **canAccessDistrictsHomepage**: `boolean`

Defined in: [src/User.ts:126](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/User.ts#L126)

#### Implementation of

[`IUser`](api/interfaces%5CIUser.md).[`canAccessDistrictsHomepage`](api/interfaces%5CIUser.md#canaccessdistrictshomepage)

***

### canHellban?

> `readonly` `optional` **canHellban**: `boolean`

Defined in: [src/User.ts:127](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/User.ts#L127)

#### Implementation of

[`IUser`](api/interfaces%5CIUser.md).[`canHellban`](api/interfaces%5CIUser.md#canhellban)

***

### canMessageUsers?

> `readonly` `optional` **canMessageUsers**: `boolean`

Defined in: [src/User.ts:131](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/User.ts#L131)

Whether the user can send Guardian messages.

#### Implementation of

[`IUser`](api/interfaces%5CIUser.md).[`canMessageUsers`](api/interfaces%5CIUser.md#canmessageusers)

***

### canModifyCoaches?

> `readonly` `optional` **canModifyCoaches**: `boolean`

Defined in: [src/User.ts:132](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/User.ts#L132)

#### Implementation of

[`IUser`](api/interfaces%5CIUser.md).[`canModifyCoaches`](api/interfaces%5CIUser.md#canmodifycoaches)

***

### child?

> `readonly` `optional` **child**: `boolean`

Defined in: [src/User.ts:149](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/User.ts#L149)

Whether the user is a child account.

#### Implementation of

[`IUser`](api/interfaces%5CIUser.md).[`child`](api/interfaces%5CIUser.md#child)

***

### client?

> `optional` **client**: [`Client`](api/classes%5CClient.md)

Defined in: [src/lib/Wrapper.ts:15](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/Wrapper.ts#L15)

The client that this base was fetched with.

#### Inherited from

`Wrapper.client`

***

### completedVideos?

> `readonly` `optional` **completedVideos**: `number`

Defined in: [src/User.ts:124](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/User.ts#L124)

#### Implementation of

[`IUser`](api/interfaces%5CIUser.md).[`completedVideos`](api/interfaces%5CIUser.md#completedvideos)

***

### creator?

> `readonly` `optional` **creator**: `boolean`

Defined in: [src/User.ts:156](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/User.ts#L156)

#### Implementation of

[`IUser`](api/interfaces%5CIUser.md).[`creator`](api/interfaces%5CIUser.md#creator)

***

### curator?

> `readonly` `optional` **curator**: `boolean`

Defined in: [src/User.ts:154](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/User.ts#L154)

#### Implementation of

[`IUser`](api/interfaces%5CIUser.md).[`curator`](api/interfaces%5CIUser.md#curator)

***

### developer?

> `readonly` `optional` **developer**: `boolean`

Defined in: [src/User.ts:141](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/User.ts#L141)

#### Implementation of

[`IUser`](api/interfaces%5CIUser.md).[`developer`](api/interfaces%5CIUser.md#developer)

***

### email?

> `readonly` `optional` **email**: `string`

Defined in: [src/User.ts:91](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/User.ts#L91)

The user's email address. Required authentication.

#### Implementation of

[`IUser`](api/interfaces%5CIUser.md).[`email`](api/interfaces%5CIUser.md#email)

***

### emails?

> `readonly` `optional` **emails**: `string`[]

Defined in: [src/User.ts:95](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/User.ts#L95)

The user's authentication email addresses. Required authentication.

#### Implementation of

[`IUser`](api/interfaces%5CIUser.md).[`emails`](api/interfaces%5CIUser.md#emails)

***

### formalTeacher?

> `readonly` `optional` **formalTeacher**: `boolean`

Defined in: [src/User.ts:153](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/User.ts#L153)

***

### googleID?

> `readonly` `optional` **googleID**: `null` \| `string`

Defined in: [src/User.ts:118](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/User.ts#L118)

#### Implementation of

[`IUser`](api/interfaces%5CIUser.md).[`googleID`](api/interfaces%5CIUser.md#googleid)

***

### hasAccessToAIGuideDev?

> `readonly` `optional` **hasAccessToAIGuideDev**: `boolean`

Defined in: [src/User.ts:134](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/User.ts#L134)

#### Implementation of

[`IUser`](api/interfaces%5CIUser.md).[`hasAccessToAIGuideDev`](api/interfaces%5CIUser.md#hasaccesstoaiguidedev)

***

### hasAccessToAIGuideTeacher?

> `readonly` `optional` **hasAccessToAIGuideTeacher**: `boolean`

Defined in: [src/User.ts:135](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/User.ts#L135)

#### Implementation of

[`IUser`](api/interfaces%5CIUser.md).[`hasAccessToAIGuideTeacher`](api/interfaces%5CIUser.md#hasaccesstoaiguideteacher)

***

### hasChildren?

> `readonly` `optional` **hasChildren**: `boolean`

Defined in: [src/User.ts:136](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/User.ts#L136)

#### Implementation of

[`IUser`](api/interfaces%5CIUser.md).[`hasChildren`](api/interfaces%5CIUser.md#haschildren)

***

### hasClasses?

> `readonly` `optional` **hasClasses**: `boolean`

Defined in: [src/User.ts:137](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/User.ts#L137)

#### Implementation of

[`IUser`](api/interfaces%5CIUser.md).[`hasClasses`](api/interfaces%5CIUser.md#hasclasses)

***

### hasCoach?

> `readonly` `optional` **hasCoach**: `boolean`

Defined in: [src/User.ts:138](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/User.ts#L138)

#### Implementation of

[`IUser`](api/interfaces%5CIUser.md).[`hasCoach`](api/interfaces%5CIUser.md#hascoach)

***

### hasStudents?

> `readonly` `optional` **hasStudents**: `boolean`

Defined in: [src/User.ts:139](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/User.ts#L139)

#### Implementation of

[`IUser`](api/interfaces%5CIUser.md).[`hasStudents`](api/interfaces%5CIUser.md#hasstudents)

***

### joined?

> `readonly` `optional` **joined**: `Date`

Defined in: [src/User.ts:115](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/User.ts#L115)

The date the user created their account.

#### Implementation of

[`IUser`](api/interfaces%5CIUser.md).[`joined`](api/interfaces%5CIUser.md#joined)

***

### kaid?

> `readonly` `optional` **kaid**: `null` \| `` `kaid_${number}` ``

Defined in: [src/User.ts:79](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/User.ts#L79)

The user's KAID.

#### Implementation of

[`IUser`](api/interfaces%5CIUser.md).[`kaid`](api/interfaces%5CIUser.md#kaid)

***

### key?

> `readonly` `optional` **key**: `string`

Defined in: [src/User.ts:117](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/User.ts#L117)

#### Implementation of

[`IUser`](api/interfaces%5CIUser.md).[`key`](api/interfaces%5CIUser.md#key)

***

### midsignupPhantom?

> `readonly` `optional` **midsignupPhantom**: `boolean`

Defined in: [src/User.ts:158](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/User.ts#L158)

#### Implementation of

[`IUser`](api/interfaces%5CIUser.md).[`midsignupPhantom`](api/interfaces%5CIUser.md#midsignupphantom)

***

### moderator?

> `readonly` `optional` **moderator**: `boolean`

Defined in: [src/User.ts:145](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/User.ts#L145)

Whether the user is a Guardian.

#### Implementation of

[`IUser`](api/interfaces%5CIUser.md).[`moderator`](api/interfaces%5CIUser.md#moderator)

***

### newNotifications?

> `readonly` `optional` **newNotifications**: `number`

Defined in: [src/User.ts:123](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/User.ts#L123)

The number of unread notifications.

#### Implementation of

[`IUser`](api/interfaces%5CIUser.md).[`newNotifications`](api/interfaces%5CIUser.md#newnotifications)

***

### nickname?

> `readonly` `optional` **nickname**: `string`

Defined in: [src/User.ts:87](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/User.ts#L87)

The user's nickname. May in rare cases be `null`.

#### Implementation of

[`IUser`](api/interfaces%5CIUser.md).[`nickname`](api/interfaces%5CIUser.md#nickname)

***

### orphan?

> `readonly` `optional` **orphan**: `boolean`

Defined in: [src/User.ts:151](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/User.ts#L151)

#### Implementation of

[`IUser`](api/interfaces%5CIUser.md).[`orphan`](api/interfaces%5CIUser.md#orphan)

***

### parent?

> `readonly` `optional` **parent**: `boolean`

Defined in: [src/User.ts:150](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/User.ts#L150)

#### Implementation of

[`IUser`](api/interfaces%5CIUser.md).[`parent`](api/interfaces%5CIUser.md#parent)

***

### phantom?

> `readonly` `optional` **phantom**: `boolean`

Defined in: [src/User.ts:157](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/User.ts#L157)

#### Implementation of

[`IUser`](api/interfaces%5CIUser.md).[`phantom`](api/interfaces%5CIUser.md#phantom)

***

### points?

> `readonly` `optional` **points**: `number`

Defined in: [src/User.ts:107](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/User.ts#L107)

The user's energy points.

#### Implementation of

[`IUser`](api/interfaces%5CIUser.md).[`points`](api/interfaces%5CIUser.md#points)

***

### programs?

> `readonly` `optional` **programs**: [`Program`](api/classes%5CProgram.md)[]

Defined in: [src/User.ts:163](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/User.ts#L163)

#### Implementation of

[`IUser`](api/interfaces%5CIUser.md).[`programs`](api/interfaces%5CIUser.md#programs)

***

### publisher?

> `readonly` `optional` **publisher**: `boolean`

Defined in: [src/User.ts:155](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/User.ts#L155)

#### Implementation of

[`IUser`](api/interfaces%5CIUser.md).[`publisher`](api/interfaces%5CIUser.md#publisher)

***

### qualarooID?

> `readonly` `optional` **qualarooID**: `null` \| `string`

Defined in: [src/User.ts:119](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/User.ts#L119)

#### Implementation of

[`IUser`](api/interfaces%5CIUser.md).[`qualarooID`](api/interfaces%5CIUser.md#qualarooid)

***

### rawData?

> `optional` **rawData**: `RecursivePartial`\<[`UserSchema`](api/interfaces%5CUserSchema.md)\<[`AvatarSchema`](api/interfaces%5CAvatarSchema.md), [`ProfileSchema`](api/interfaces%5CProfileSchema.md), [`ListProgramsSchema`](api/interfaces%5CListProgramsSchema.md)\<`unknown`\>\>\>

Defined in: [src/lib/Wrapper.ts:22](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/Wrapper.ts#L22)

The raw base schema data

#### Remarks

Only set if the base was created from a user schema.

#### Inherited from

`Wrapper.rawData`

***

### self?

> `readonly` `optional` **self**: `boolean`

Defined in: [src/User.ts:75](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/User.ts#L75)

Whether the user is the currently authenticated user.

#### Implementation of

[`IUser`](api/interfaces%5CIUser.md).[`self`](api/interfaces%5CIUser.md#self)

***

### statistics?

> `readonly` `optional` **statistics**: [`UserStatistics`](api/interfaces%5CUserStatistics.md)

Defined in: [src/User.ts:162](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/User.ts#L162)

#### Implementation of

[`IUser`](api/interfaces%5CIUser.md).[`statistics`](api/interfaces%5CIUser.md#statistics)

***

### teacher?

> `readonly` `optional` **teacher**: `boolean`

Defined in: [src/User.ts:152](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/User.ts#L152)

#### Implementation of

[`IUser`](api/interfaces%5CIUser.md).[`teacher`](api/interfaces%5CIUser.md#teacher)

***

### username?

> `readonly` `optional` **username**: `null` \| `string`

Defined in: [src/User.ts:83](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/User.ts#L83)

The user's username. May not be set by the user.

#### Implementation of

[`IUser`](api/interfaces%5CIUser.md).[`username`](api/interfaces%5CIUser.md#username)

## Accessors

### url

#### Get Signature

> **get** **url**(): `null` \| `` `http${string}://${string}khanacademy.${string}/profile/${string}` ``

Defined in: [src/User.ts:165](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/User.ts#L165)

##### Returns

`null` \| `` `http${string}://${string}khanacademy.${string}/profile/${string}` ``

## Methods

### copy()

> **copy**(`data`): [`User`](api/classes%5CUser.md)

Defined in: [src/lib/Wrapper.ts:53](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/Wrapper.ts#L53)

Updates data into the class

#### Parameters

##### data

[`IUser`](api/interfaces%5CIUser.md)

The data to copy from

#### Returns

[`User`](api/classes%5CUser.md)

The class instance

#### Inherited from

`Wrapper.copy`

***

### copyFromSchema()

> **copyFromSchema**(`schema`): [`User`](api/classes%5CUser.md)

Defined in: [src/lib/Wrapper.ts:65](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/Wrapper.ts#L65)

Updates data from a schema into the instance

#### Parameters

##### schema

`RecursivePartial`\<[`UserSchema`](api/interfaces%5CUserSchema.md)\<[`AvatarSchema`](api/interfaces%5CAvatarSchema.md), [`ProfileSchema`](api/interfaces%5CProfileSchema.md), [`ListProgramsSchema`](api/interfaces%5CListProgramsSchema.md)\<`unknown`\>\>\>

The schema to copy from

#### Returns

[`User`](api/classes%5CUser.md)

The class instance

#### Inherited from

`Wrapper.copyFromSchema`

***

### get()

> **get**(`client`): `Promise`\<[`User`](api/classes%5CUser.md)\>

Defined in: [src/User.ts:283](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/User.ts#L283)

Fetches the user's profile using a `getFullUserProfile` query and updates the user's data

#### Parameters

##### client

[`Client`](api/classes%5CClient.md) = `...`

Optional client to use for the request

#### Returns

`Promise`\<[`User`](api/classes%5CUser.md)\>

#### See

[Client.getUser](api/classes%5CClient.md#getuser)

#### Overrides

`Wrapper.get`

***

### getAllPrograms()

> **getAllPrograms**(`client`, `sort`?, `limit`?): `Promise`\<[`User`](api/classes%5CUser.md)\>

Defined in: [src/User.ts:332](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/User.ts#L332)

#### Parameters

##### client

[`Client`](api/classes%5CClient.md) = `...`

##### sort?

[`ListProgramSortOrder`](api/enumerations%5CListProgramSortOrder.md)

##### limit?

`number`

#### Returns

`Promise`\<[`User`](api/classes%5CUser.md)\>

#### See

[Client.getAllUserPrograms](api/classes%5CClient.md#getalluserprograms)

***

### getAvatar()

> **getAvatar**(`client`): `Promise`\<`"https://www.khanacademy.org/images/avatars/svg/blobby-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/blobby-yellow.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/blobby-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/blobby-purple.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/area-52-yellow.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/area-52-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/area-52-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/area-52-purple.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/eggleston-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/eggleston-yellow.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/eggleston-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/eggleston-orange.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/scuttlebug-purple.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/scuttlebug-yellow.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/scuttlebug-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/scuttlebug-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/boggle-yellow.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/boggle-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/boggle-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/boggle-purple.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/sneak-peak-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/sneak-peak-yellow.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/sneak-peak-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/sneak-peak-purple.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/stelly-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/stelly-yellow.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/stelly-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/stelly-orange.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cacteye-purple.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cacteye-yellow.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cacteye-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cacteye-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leaf-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leaf-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leaf-grey.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leaf-red.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leaf-orange.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leaf-yellow.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leafers-seed.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leafers-seedling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leafers-sapling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leafers-tree.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leafers-ultimate.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/piceratops-seed.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/piceratops-seedling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/piceratops-sapling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/piceratops-tree.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/piceratops-ultimate.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/duskpin-seed.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/duskpin-seedling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/duskpin-sapling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/duskpin-tree.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/duskpin-ultimate.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/primosaur-seed.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/primosaur-seedling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/primosaur-sapling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/primosaur-tree.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/primosaur-ultimate.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/starky-seed.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/starky-seedling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/starky-sapling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/starky-tree.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/starky-ultimate.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/aqualine-seed.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/aqualine-seedling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/aqualine-sapling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/aqualine-tree.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/aqualine-ultimate.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/spunky-sam.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/spunky-sam-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/spunky-sam-orange.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/spunky-sam-red.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/marcimus.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/marcimus-orange.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/marcimus-red.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/marcimus-purple.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/mr-pink.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/mr-pink-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/mr-pink-orange.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/robot_female_1.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/robot_female_2.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/robot_female_3.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/robot_male_1.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/robot_male_2.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/robot_male_3.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/orange-juice-squid.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/purple-pi.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/purple-pi-pink.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/purple-pi-teal.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/mr-pants.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/mr-pants-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/mr-pants-orange.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/mr-pants-pink.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/mr-pants-purple.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/old-spice-man.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/old-spice-man-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cs-winston.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cs-winston-baby.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cs-ohnoes.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cs-hopper-happy.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cs-hopper-jumping.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cs-hopper-cool.svg"` \| `"https://www.khanacademy.org/images/avatars/blobby-green.png"` \| `"https://www.khanacademy.org/images/avatars/blobby-yellow.png"` \| `"https://www.khanacademy.org/images/avatars/blobby-blue.png"` \| `"https://www.khanacademy.org/images/avatars/blobby-purple.png"` \| `"https://www.khanacademy.org/images/avatars/area-52-yellow.png"` \| `"https://www.khanacademy.org/images/avatars/area-52-blue.png"` \| `"https://www.khanacademy.org/images/avatars/area-52-green.png"` \| `"https://www.khanacademy.org/images/avatars/area-52-purple.png"` \| `"https://www.khanacademy.org/images/avatars/eggleston-blue.png"` \| `"https://www.khanacademy.org/images/avatars/eggleston-yellow.png"` \| `"https://www.khanacademy.org/images/avatars/eggleston-green.png"` \| `"https://www.khanacademy.org/images/avatars/eggleston-orange.png"` \| `"https://www.khanacademy.org/images/avatars/scuttlebug-purple.png"` \| `"https://www.khanacademy.org/images/avatars/scuttlebug-yellow.png"` \| `"https://www.khanacademy.org/images/avatars/scuttlebug-blue.png"` \| `"https://www.khanacademy.org/images/avatars/scuttlebug-green.png"` \| `"https://www.khanacademy.org/images/avatars/boggle-yellow.png"` \| `"https://www.khanacademy.org/images/avatars/boggle-blue.png"` \| `"https://www.khanacademy.org/images/avatars/boggle-green.png"` \| `"https://www.khanacademy.org/images/avatars/boggle-purple.png"` \| `"https://www.khanacademy.org/images/avatars/sneak-peak-green.png"` \| `"https://www.khanacademy.org/images/avatars/sneak-peak-yellow.png"` \| `"https://www.khanacademy.org/images/avatars/sneak-peak-blue.png"` \| `"https://www.khanacademy.org/images/avatars/sneak-peak-purple.png"` \| `"https://www.khanacademy.org/images/avatars/stelly-blue.png"` \| `"https://www.khanacademy.org/images/avatars/stelly-yellow.png"` \| `"https://www.khanacademy.org/images/avatars/stelly-green.png"` \| `"https://www.khanacademy.org/images/avatars/stelly-orange.png"` \| `"https://www.khanacademy.org/images/avatars/cacteye-purple.png"` \| `"https://www.khanacademy.org/images/avatars/cacteye-yellow.png"` \| `"https://www.khanacademy.org/images/avatars/cacteye-blue.png"` \| `"https://www.khanacademy.org/images/avatars/cacteye-green.png"` \| `"https://www.khanacademy.org/images/avatars/leaf-green.png"` \| `"https://www.khanacademy.org/images/avatars/leaf-blue.png"` \| `"https://www.khanacademy.org/images/avatars/leaf-grey.png"` \| `"https://www.khanacademy.org/images/avatars/leaf-red.png"` \| `"https://www.khanacademy.org/images/avatars/leaf-orange.png"` \| `"https://www.khanacademy.org/images/avatars/leaf-yellow.png"` \| `"https://www.khanacademy.org/images/avatars/leafers-seed.png"` \| `"https://www.khanacademy.org/images/avatars/leafers-seedling.png"` \| `"https://www.khanacademy.org/images/avatars/leafers-sapling.png"` \| `"https://www.khanacademy.org/images/avatars/leafers-tree.png"` \| `"https://www.khanacademy.org/images/avatars/leafers-ultimate.png"` \| `"https://www.khanacademy.org/images/avatars/piceratops-seed.png"` \| `"https://www.khanacademy.org/images/avatars/piceratops-seedling.png"` \| `"https://www.khanacademy.org/images/avatars/piceratops-sapling.png"` \| `"https://www.khanacademy.org/images/avatars/piceratops-tree.png"` \| `"https://www.khanacademy.org/images/avatars/piceratops-ultimate.png"` \| `"https://www.khanacademy.org/images/avatars/duskpin-seed.png"` \| `"https://www.khanacademy.org/images/avatars/duskpin-seedling.png"` \| `"https://www.khanacademy.org/images/avatars/duskpin-sapling.png"` \| `"https://www.khanacademy.org/images/avatars/duskpin-tree.png"` \| `"https://www.khanacademy.org/images/avatars/duskpin-ultimate.png"` \| `"https://www.khanacademy.org/images/avatars/primosaur-seed.png"` \| `"https://www.khanacademy.org/images/avatars/primosaur-seedling.png"` \| `"https://www.khanacademy.org/images/avatars/primosaur-sapling.png"` \| `"https://www.khanacademy.org/images/avatars/primosaur-tree.png"` \| `"https://www.khanacademy.org/images/avatars/primosaur-ultimate.png"` \| `"https://www.khanacademy.org/images/avatars/starky-seed.png"` \| `"https://www.khanacademy.org/images/avatars/starky-seedling.png"` \| `"https://www.khanacademy.org/images/avatars/starky-sapling.png"` \| `"https://www.khanacademy.org/images/avatars/starky-tree.png"` \| `"https://www.khanacademy.org/images/avatars/starky-ultimate.png"` \| `"https://www.khanacademy.org/images/avatars/aqualine-seed.png"` \| `"https://www.khanacademy.org/images/avatars/aqualine-seedling.png"` \| `"https://www.khanacademy.org/images/avatars/aqualine-sapling.png"` \| `"https://www.khanacademy.org/images/avatars/aqualine-tree.png"` \| `"https://www.khanacademy.org/images/avatars/aqualine-ultimate.png"` \| `"https://www.khanacademy.org/images/avatars/spunky-sam.png"` \| `"https://www.khanacademy.org/images/avatars/spunky-sam-green.png"` \| `"https://www.khanacademy.org/images/avatars/spunky-sam-orange.png"` \| `"https://www.khanacademy.org/images/avatars/spunky-sam-red.png"` \| `"https://www.khanacademy.org/images/avatars/marcimus.png"` \| `"https://www.khanacademy.org/images/avatars/marcimus-orange.png"` \| `"https://www.khanacademy.org/images/avatars/marcimus-red.png"` \| `"https://www.khanacademy.org/images/avatars/marcimus-purple.png"` \| `"https://www.khanacademy.org/images/avatars/mr-pink.png"` \| `"https://www.khanacademy.org/images/avatars/mr-pink-green.png"` \| `"https://www.khanacademy.org/images/avatars/mr-pink-orange.png"` \| `"https://www.khanacademy.org/images/avatars/robot_female_1.png"` \| `"https://www.khanacademy.org/images/avatars/robot_female_2.png"` \| `"https://www.khanacademy.org/images/avatars/robot_female_3.png"` \| `"https://www.khanacademy.org/images/avatars/robot_male_1.png"` \| `"https://www.khanacademy.org/images/avatars/robot_male_2.png"` \| `"https://www.khanacademy.org/images/avatars/robot_male_3.png"` \| `"https://www.khanacademy.org/images/avatars/orange-juice-squid.png"` \| `"https://www.khanacademy.org/images/avatars/purple-pi.png"` \| `"https://www.khanacademy.org/images/avatars/purple-pi-pink.png"` \| `"https://www.khanacademy.org/images/avatars/purple-pi-teal.png"` \| `"https://www.khanacademy.org/images/avatars/mr-pants.png"` \| `"https://www.khanacademy.org/images/avatars/mr-pants-green.png"` \| `"https://www.khanacademy.org/images/avatars/mr-pants-orange.png"` \| `"https://www.khanacademy.org/images/avatars/mr-pants-pink.png"` \| `"https://www.khanacademy.org/images/avatars/mr-pants-purple.png"` \| `"https://www.khanacademy.org/images/avatars/old-spice-man.png"` \| `"https://www.khanacademy.org/images/avatars/old-spice-man-blue.png"` \| `"https://www.khanacademy.org/images/avatars/cs-winston.png"` \| `"https://www.khanacademy.org/images/avatars/cs-winston-baby.png"` \| `"https://www.khanacademy.org/images/avatars/cs-ohnoes.png"` \| `"https://www.khanacademy.org/images/avatars/cs-hopper-happy.png"` \| `"https://www.khanacademy.org/images/avatars/cs-hopper-jumping.png"` \| `"https://www.khanacademy.org/images/avatars/cs-hopper-cool.png"`\>

Defined in: [src/User.ts:292](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/User.ts#L292)

#### Parameters

##### client

[`Client`](api/classes%5CClient.md) = `...`

#### Returns

`Promise`\<`"https://www.khanacademy.org/images/avatars/svg/blobby-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/blobby-yellow.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/blobby-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/blobby-purple.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/area-52-yellow.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/area-52-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/area-52-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/area-52-purple.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/eggleston-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/eggleston-yellow.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/eggleston-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/eggleston-orange.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/scuttlebug-purple.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/scuttlebug-yellow.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/scuttlebug-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/scuttlebug-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/boggle-yellow.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/boggle-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/boggle-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/boggle-purple.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/sneak-peak-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/sneak-peak-yellow.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/sneak-peak-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/sneak-peak-purple.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/stelly-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/stelly-yellow.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/stelly-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/stelly-orange.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cacteye-purple.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cacteye-yellow.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cacteye-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cacteye-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leaf-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leaf-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leaf-grey.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leaf-red.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leaf-orange.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leaf-yellow.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leafers-seed.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leafers-seedling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leafers-sapling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leafers-tree.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leafers-ultimate.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/piceratops-seed.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/piceratops-seedling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/piceratops-sapling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/piceratops-tree.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/piceratops-ultimate.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/duskpin-seed.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/duskpin-seedling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/duskpin-sapling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/duskpin-tree.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/duskpin-ultimate.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/primosaur-seed.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/primosaur-seedling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/primosaur-sapling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/primosaur-tree.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/primosaur-ultimate.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/starky-seed.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/starky-seedling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/starky-sapling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/starky-tree.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/starky-ultimate.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/aqualine-seed.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/aqualine-seedling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/aqualine-sapling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/aqualine-tree.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/aqualine-ultimate.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/spunky-sam.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/spunky-sam-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/spunky-sam-orange.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/spunky-sam-red.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/marcimus.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/marcimus-orange.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/marcimus-red.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/marcimus-purple.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/mr-pink.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/mr-pink-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/mr-pink-orange.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/robot_female_1.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/robot_female_2.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/robot_female_3.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/robot_male_1.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/robot_male_2.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/robot_male_3.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/orange-juice-squid.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/purple-pi.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/purple-pi-pink.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/purple-pi-teal.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/mr-pants.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/mr-pants-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/mr-pants-orange.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/mr-pants-pink.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/mr-pants-purple.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/old-spice-man.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/old-spice-man-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cs-winston.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cs-winston-baby.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cs-ohnoes.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cs-hopper-happy.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cs-hopper-jumping.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cs-hopper-cool.svg"` \| `"https://www.khanacademy.org/images/avatars/blobby-green.png"` \| `"https://www.khanacademy.org/images/avatars/blobby-yellow.png"` \| `"https://www.khanacademy.org/images/avatars/blobby-blue.png"` \| `"https://www.khanacademy.org/images/avatars/blobby-purple.png"` \| `"https://www.khanacademy.org/images/avatars/area-52-yellow.png"` \| `"https://www.khanacademy.org/images/avatars/area-52-blue.png"` \| `"https://www.khanacademy.org/images/avatars/area-52-green.png"` \| `"https://www.khanacademy.org/images/avatars/area-52-purple.png"` \| `"https://www.khanacademy.org/images/avatars/eggleston-blue.png"` \| `"https://www.khanacademy.org/images/avatars/eggleston-yellow.png"` \| `"https://www.khanacademy.org/images/avatars/eggleston-green.png"` \| `"https://www.khanacademy.org/images/avatars/eggleston-orange.png"` \| `"https://www.khanacademy.org/images/avatars/scuttlebug-purple.png"` \| `"https://www.khanacademy.org/images/avatars/scuttlebug-yellow.png"` \| `"https://www.khanacademy.org/images/avatars/scuttlebug-blue.png"` \| `"https://www.khanacademy.org/images/avatars/scuttlebug-green.png"` \| `"https://www.khanacademy.org/images/avatars/boggle-yellow.png"` \| `"https://www.khanacademy.org/images/avatars/boggle-blue.png"` \| `"https://www.khanacademy.org/images/avatars/boggle-green.png"` \| `"https://www.khanacademy.org/images/avatars/boggle-purple.png"` \| `"https://www.khanacademy.org/images/avatars/sneak-peak-green.png"` \| `"https://www.khanacademy.org/images/avatars/sneak-peak-yellow.png"` \| `"https://www.khanacademy.org/images/avatars/sneak-peak-blue.png"` \| `"https://www.khanacademy.org/images/avatars/sneak-peak-purple.png"` \| `"https://www.khanacademy.org/images/avatars/stelly-blue.png"` \| `"https://www.khanacademy.org/images/avatars/stelly-yellow.png"` \| `"https://www.khanacademy.org/images/avatars/stelly-green.png"` \| `"https://www.khanacademy.org/images/avatars/stelly-orange.png"` \| `"https://www.khanacademy.org/images/avatars/cacteye-purple.png"` \| `"https://www.khanacademy.org/images/avatars/cacteye-yellow.png"` \| `"https://www.khanacademy.org/images/avatars/cacteye-blue.png"` \| `"https://www.khanacademy.org/images/avatars/cacteye-green.png"` \| `"https://www.khanacademy.org/images/avatars/leaf-green.png"` \| `"https://www.khanacademy.org/images/avatars/leaf-blue.png"` \| `"https://www.khanacademy.org/images/avatars/leaf-grey.png"` \| `"https://www.khanacademy.org/images/avatars/leaf-red.png"` \| `"https://www.khanacademy.org/images/avatars/leaf-orange.png"` \| `"https://www.khanacademy.org/images/avatars/leaf-yellow.png"` \| `"https://www.khanacademy.org/images/avatars/leafers-seed.png"` \| `"https://www.khanacademy.org/images/avatars/leafers-seedling.png"` \| `"https://www.khanacademy.org/images/avatars/leafers-sapling.png"` \| `"https://www.khanacademy.org/images/avatars/leafers-tree.png"` \| `"https://www.khanacademy.org/images/avatars/leafers-ultimate.png"` \| `"https://www.khanacademy.org/images/avatars/piceratops-seed.png"` \| `"https://www.khanacademy.org/images/avatars/piceratops-seedling.png"` \| `"https://www.khanacademy.org/images/avatars/piceratops-sapling.png"` \| `"https://www.khanacademy.org/images/avatars/piceratops-tree.png"` \| `"https://www.khanacademy.org/images/avatars/piceratops-ultimate.png"` \| `"https://www.khanacademy.org/images/avatars/duskpin-seed.png"` \| `"https://www.khanacademy.org/images/avatars/duskpin-seedling.png"` \| `"https://www.khanacademy.org/images/avatars/duskpin-sapling.png"` \| `"https://www.khanacademy.org/images/avatars/duskpin-tree.png"` \| `"https://www.khanacademy.org/images/avatars/duskpin-ultimate.png"` \| `"https://www.khanacademy.org/images/avatars/primosaur-seed.png"` \| `"https://www.khanacademy.org/images/avatars/primosaur-seedling.png"` \| `"https://www.khanacademy.org/images/avatars/primosaur-sapling.png"` \| `"https://www.khanacademy.org/images/avatars/primosaur-tree.png"` \| `"https://www.khanacademy.org/images/avatars/primosaur-ultimate.png"` \| `"https://www.khanacademy.org/images/avatars/starky-seed.png"` \| `"https://www.khanacademy.org/images/avatars/starky-seedling.png"` \| `"https://www.khanacademy.org/images/avatars/starky-sapling.png"` \| `"https://www.khanacademy.org/images/avatars/starky-tree.png"` \| `"https://www.khanacademy.org/images/avatars/starky-ultimate.png"` \| `"https://www.khanacademy.org/images/avatars/aqualine-seed.png"` \| `"https://www.khanacademy.org/images/avatars/aqualine-seedling.png"` \| `"https://www.khanacademy.org/images/avatars/aqualine-sapling.png"` \| `"https://www.khanacademy.org/images/avatars/aqualine-tree.png"` \| `"https://www.khanacademy.org/images/avatars/aqualine-ultimate.png"` \| `"https://www.khanacademy.org/images/avatars/spunky-sam.png"` \| `"https://www.khanacademy.org/images/avatars/spunky-sam-green.png"` \| `"https://www.khanacademy.org/images/avatars/spunky-sam-orange.png"` \| `"https://www.khanacademy.org/images/avatars/spunky-sam-red.png"` \| `"https://www.khanacademy.org/images/avatars/marcimus.png"` \| `"https://www.khanacademy.org/images/avatars/marcimus-orange.png"` \| `"https://www.khanacademy.org/images/avatars/marcimus-red.png"` \| `"https://www.khanacademy.org/images/avatars/marcimus-purple.png"` \| `"https://www.khanacademy.org/images/avatars/mr-pink.png"` \| `"https://www.khanacademy.org/images/avatars/mr-pink-green.png"` \| `"https://www.khanacademy.org/images/avatars/mr-pink-orange.png"` \| `"https://www.khanacademy.org/images/avatars/robot_female_1.png"` \| `"https://www.khanacademy.org/images/avatars/robot_female_2.png"` \| `"https://www.khanacademy.org/images/avatars/robot_female_3.png"` \| `"https://www.khanacademy.org/images/avatars/robot_male_1.png"` \| `"https://www.khanacademy.org/images/avatars/robot_male_2.png"` \| `"https://www.khanacademy.org/images/avatars/robot_male_3.png"` \| `"https://www.khanacademy.org/images/avatars/orange-juice-squid.png"` \| `"https://www.khanacademy.org/images/avatars/purple-pi.png"` \| `"https://www.khanacademy.org/images/avatars/purple-pi-pink.png"` \| `"https://www.khanacademy.org/images/avatars/purple-pi-teal.png"` \| `"https://www.khanacademy.org/images/avatars/mr-pants.png"` \| `"https://www.khanacademy.org/images/avatars/mr-pants-green.png"` \| `"https://www.khanacademy.org/images/avatars/mr-pants-orange.png"` \| `"https://www.khanacademy.org/images/avatars/mr-pants-pink.png"` \| `"https://www.khanacademy.org/images/avatars/mr-pants-purple.png"` \| `"https://www.khanacademy.org/images/avatars/old-spice-man.png"` \| `"https://www.khanacademy.org/images/avatars/old-spice-man-blue.png"` \| `"https://www.khanacademy.org/images/avatars/cs-winston.png"` \| `"https://www.khanacademy.org/images/avatars/cs-winston-baby.png"` \| `"https://www.khanacademy.org/images/avatars/cs-ohnoes.png"` \| `"https://www.khanacademy.org/images/avatars/cs-hopper-happy.png"` \| `"https://www.khanacademy.org/images/avatars/cs-hopper-jumping.png"` \| `"https://www.khanacademy.org/images/avatars/cs-hopper-cool.png"`\>

#### See

[!.getUserAvatar](api/classes%5CClient.md)

***

### getPrograms()

> **getPrograms**(`client`, `sort`?, `limit`?): `AsyncGenerator`\<[`Program`](api/classes%5CProgram.md)[], [`User`](api/classes%5CUser.md), `unknown`\>

Defined in: [src/User.ts:311](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/User.ts#L311)

#### Parameters

##### client

[`Client`](api/classes%5CClient.md) = `...`

##### sort?

[`ListProgramSortOrder`](api/enumerations%5CListProgramSortOrder.md)

##### limit?

`number`

#### Returns

`AsyncGenerator`\<[`Program`](api/classes%5CProgram.md)[], [`User`](api/classes%5CUser.md), `unknown`\>

#### See

[Client.getUserPrograms](api/classes%5CClient.md#getuserprograms)

***

### getStatistics()

> **getStatistics**(`client`): `Promise`\<[`User`](api/classes%5CUser.md)\>

Defined in: [src/User.ts:302](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/User.ts#L302)

#### Parameters

##### client

[`Client`](api/classes%5CClient.md) = `...`

#### Returns

`Promise`\<[`User`](api/classes%5CUser.md)\>

#### See

[Client.getUserStatistics](api/classes%5CClient.md#getuserstatistics)

***

### is()

> **is**(`user`): `boolean`

Defined in: [src/User.ts:351](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/User.ts#L351)

Checks if two users are the same

#### Parameters

##### user

The user to compare to

[`IUser`](api/interfaces%5CIUser.md) | [`User`](api/classes%5CUser.md)

#### Returns

`boolean`

#### Overrides

`Wrapper.is`

***

### isSchema()

> **isSchema**(`schema`): `boolean`

Defined in: [src/lib/Wrapper.ts:88](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/Wrapper.ts#L88)

Checks if the schema represents the same instance

#### Parameters

##### schema

`RecursivePartial`\<[`UserSchema`](api/interfaces%5CUserSchema.md)\<[`AvatarSchema`](api/interfaces%5CAvatarSchema.md), [`ProfileSchema`](api/interfaces%5CProfileSchema.md), [`ListProgramsSchema`](api/interfaces%5CListProgramsSchema.md)\<`unknown`\>\>\>

#### Returns

`boolean`

#### Inherited from

`Wrapper.isSchema`

***

### transformSchema()

> **transformSchema**(`schema`): `object`

Defined in: [src/User.ts:209](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/User.ts#L209)

Transforms a API schema into an abstracted interface

#### Parameters

##### schema

`RecursivePartial`\<[`UserSchema`](api/interfaces%5CUserSchema.md)\<[`AvatarSchema`](api/interfaces%5CAvatarSchema.md), [`ProfileSchema`](api/interfaces%5CProfileSchema.md), [`ListProgramsSchema`](api/interfaces%5CListProgramsSchema.md)\<`unknown`\>\>\>

The schema to transform

#### Returns

`object`

##### accessLevel

> **accessLevel**: `undefined` \| [`UserAccessLevel`](api/enumerations%5CUserAccessLevel.md) = `schema.profile.accessLevel`

##### badgeCounts

> **badgeCounts**: `undefined` \| `Record`\<[`BadgeCategory`](api/enumerations%5CBadgeCategory.md), `number`\>

##### bio

> **bio**: `undefined` \| `string`

##### canAccessDistrictsHomepage

> **canAccessDistrictsHomepage**: `undefined` \| `boolean`

##### canHellban

> **canHellban**: `undefined` \| `boolean`

##### canMessageUsers

> **canMessageUsers**: `undefined` \| `boolean`

##### canModifyCoaches

> **canModifyCoaches**: `undefined` \| `boolean`

##### child

> **child**: `undefined` \| `boolean`

##### completedVideos

> **completedVideos**: `undefined` \| `number` = `schema.countVideosCompleted`

##### creator

> **creator**: `undefined` \| `boolean`

##### curator

> **curator**: `undefined` \| `boolean`

##### developer

> **developer**: `undefined` \| `boolean`

##### email

> **email**: `undefined` \| `string`

##### emails

> **emails**: `undefined` \| `string`[]

##### formalTeacher

> **formalTeacher**: `undefined` \| `boolean`

##### googleID

> **googleID**: `undefined` \| `null` \| `string`

##### hasAccessToAIGuideDev

> **hasAccessToAIGuideDev**: `undefined` \| `boolean`

##### hasAccessToAIGuideTeacher

> **hasAccessToAIGuideTeacher**: `undefined` \| `boolean`

##### hasChildren

> **hasChildren**: `undefined` \| `boolean`

##### hasClasses

> **hasClasses**: `undefined` \| `boolean`

##### hasCoach

> **hasCoach**: `undefined` \| `boolean`

##### hasStudents

> **hasStudents**: `undefined` \| `boolean`

##### joined

> **joined**: `undefined` \| `Date`

##### kaid

> **kaid**: `undefined` \| `null` \| `` `kaid_${number}` ``

##### key

> **key**: `undefined` \| `string`

##### midsignupPhantom

> **midsignupPhantom**: `undefined` \| `boolean`

##### moderator

> **moderator**: `undefined` \| `boolean`

##### newNotifications

> **newNotifications**: `undefined` \| `number`

##### nickname

> **nickname**: `undefined` \| `string`

##### orphan

> **orphan**: `undefined` \| `boolean`

##### parent

> **parent**: `undefined` \| `boolean`

##### phantom

> **phantom**: `undefined` \| `boolean`

##### points

> **points**: `undefined` \| `number`

##### publisher

> **publisher**: `undefined` \| `boolean`

##### qualarooID

> **qualarooID**: `undefined` \| `null` \| `string`

##### self

> **self**: `undefined` \| `boolean`

##### teacher

> **teacher**: `undefined` \| `boolean`

##### username

> **username**: `undefined` \| `null` \| `string`

#### Overrides

`Wrapper.transformSchema`

***

### fromIdentifier()

> `static` **fromIdentifier**(`identifier`): [`User`](api/classes%5CUser.md)

Defined in: [src/User.ts:190](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/User.ts#L190)

#### Parameters

##### identifier

`string`

#### Returns

[`User`](api/classes%5CUser.md)

***

### fromSchema()

> `static` **fromSchema**(`schema`): [`User`](api/classes%5CUser.md)

Defined in: [src/User.ts:182](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/User.ts#L182)

Creates a new user from the given from a user schema

#### Parameters

##### schema

`RecursivePartial`\<[`UserSchema`](api/interfaces%5CUserSchema.md)\<[`AvatarSchema`](api/interfaces%5CAvatarSchema.md), [`ProfileSchema`](api/interfaces%5CProfileSchema.md), [`ListProgramsSchema`](api/interfaces%5CListProgramsSchema.md)\<`unknown`\>\>\>

#### Returns

[`User`](api/classes%5CUser.md)

#### Description

Note that `Client.getUser` will automatically call this method. This is only useful if you need to use the low-level API.

#### See

[Client.getUser](api/classes%5CClient.md#getuser)
