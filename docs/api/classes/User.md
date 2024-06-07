## Extends

- `default`\<[`UserSchema`](api%5Cinterfaces%5CUserSchema.md), [`IUser`](api%5Cinterfaces%5CIUser.md)\>

## Implements

- [`IUser`](api%5Cinterfaces%5CIUser.md)

## Constructors

### new User()

> **new User**(`data`?): [`User`](api%5Cclasses%5CUser.md)

Creates a new class instance

#### Parameters

• **data?**: [`IUser`](api%5Cinterfaces%5CIUser.md)

#### Returns

[`User`](api%5Cclasses%5CUser.md)

#### Inherited from

`Wrapper<UserSchema, IUser>.constructor`

#### Source

[src/lib/Wrapper.ts:36](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/Wrapper.ts#L36)

### new User()

> **new User**(`client`, `data`?): [`User`](api%5Cclasses%5CUser.md)

#### Parameters

• **client**: [`Client`](api%5Cclasses%5CClient.md)

• **data?**: [`IUser`](api%5Cinterfaces%5CIUser.md)

#### Returns

[`User`](api%5Cclasses%5CUser.md)

#### Inherited from

`Wrapper<UserSchema, IUser>.constructor`

#### Source

[src/lib/Wrapper.ts:37](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/Wrapper.ts#L37)

## Properties

### accessLevel?

> `optional` `readonly` **accessLevel**: [`UserAccessLevel`](api%5Cenumerations%5CUserAccessLevel.md)

#### Implementation of

[`IUser`](api%5Cinterfaces%5CIUser.md).[`accessLevel`](api%5Cinterfaces%5CIUser.md#accesslevel)

#### Source

[src/User.ts:160](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/User.ts#L160)

***

### avatar?

> `optional` `readonly` **avatar**: [`AvatarURL`](api%5Ctype-aliases%5CAvatarURL.md)

The user's avatar URL.

#### Implementation of

[`IUser`](api%5Cinterfaces%5CIUser.md).[`avatar`](api%5Cinterfaces%5CIUser.md#avatar)

#### Source

[src/User.ts:99](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/User.ts#L99)

***

### badgeCounts?

> `optional` `readonly` **badgeCounts**: `Record`\<[`BadgeCategory`](api%5Cenumerations%5CBadgeCategory.md), `number`\>

The user's badge counts by category.

#### Implementation of

[`IUser`](api%5Cinterfaces%5CIUser.md).[`badgeCounts`](api%5Cinterfaces%5CIUser.md#badgecounts)

#### Source

[src/User.ts:111](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/User.ts#L111)

***

### bio?

> `optional` `readonly` **bio**: `string`

The user's bio.

#### Implementation of

[`IUser`](api%5Cinterfaces%5CIUser.md).[`bio`](api%5Cinterfaces%5CIUser.md#bio)

#### Source

[src/User.ts:103](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/User.ts#L103)

***

### canAccessDistrictsHomepage?

> `optional` `readonly` **canAccessDistrictsHomepage**: `boolean`

#### Implementation of

[`IUser`](api%5Cinterfaces%5CIUser.md).[`canAccessDistrictsHomepage`](api%5Cinterfaces%5CIUser.md#canaccessdistrictshomepage)

#### Source

[src/User.ts:126](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/User.ts#L126)

***

### canHellban?

> `optional` `readonly` **canHellban**: `boolean`

#### Implementation of

[`IUser`](api%5Cinterfaces%5CIUser.md).[`canHellban`](api%5Cinterfaces%5CIUser.md#canhellban)

#### Source

[src/User.ts:127](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/User.ts#L127)

***

### canMessageUsers?

> `optional` `readonly` **canMessageUsers**: `boolean`

Whether the user can send Guardian messages.

#### Implementation of

[`IUser`](api%5Cinterfaces%5CIUser.md).[`canMessageUsers`](api%5Cinterfaces%5CIUser.md#canmessageusers)

#### Source

[src/User.ts:131](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/User.ts#L131)

***

### canModifyCoaches?

> `optional` `readonly` **canModifyCoaches**: `boolean`

#### Implementation of

[`IUser`](api%5Cinterfaces%5CIUser.md).[`canModifyCoaches`](api%5Cinterfaces%5CIUser.md#canmodifycoaches)

#### Source

[src/User.ts:132](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/User.ts#L132)

***

### child?

> `optional` `readonly` **child**: `boolean`

Whether the user is a child account.

#### Implementation of

[`IUser`](api%5Cinterfaces%5CIUser.md).[`child`](api%5Cinterfaces%5CIUser.md#child)

#### Source

[src/User.ts:149](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/User.ts#L149)

***

### client?

> `optional` **client**: [`Client`](api%5Cclasses%5CClient.md)

The client that this base was fetched with.

#### Inherited from

`Wrapper.client`

#### Source

[src/lib/Wrapper.ts:15](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/Wrapper.ts#L15)

***

### completedVideos?

> `optional` `readonly` **completedVideos**: `number`

#### Implementation of

[`IUser`](api%5Cinterfaces%5CIUser.md).[`completedVideos`](api%5Cinterfaces%5CIUser.md#completedvideos)

#### Source

[src/User.ts:124](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/User.ts#L124)

***

### creator?

> `optional` `readonly` **creator**: `boolean`

#### Implementation of

[`IUser`](api%5Cinterfaces%5CIUser.md).[`creator`](api%5Cinterfaces%5CIUser.md#creator)

#### Source

[src/User.ts:156](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/User.ts#L156)

***

### curator?

> `optional` `readonly` **curator**: `boolean`

#### Implementation of

[`IUser`](api%5Cinterfaces%5CIUser.md).[`curator`](api%5Cinterfaces%5CIUser.md#curator)

#### Source

[src/User.ts:154](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/User.ts#L154)

***

### developer?

> `optional` `readonly` **developer**: `boolean`

#### Implementation of

[`IUser`](api%5Cinterfaces%5CIUser.md).[`developer`](api%5Cinterfaces%5CIUser.md#developer)

#### Source

[src/User.ts:141](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/User.ts#L141)

***

### email?

> `optional` `readonly` **email**: `string`

The user's email address. Required authentication.

#### Implementation of

[`IUser`](api%5Cinterfaces%5CIUser.md).[`email`](api%5Cinterfaces%5CIUser.md#email)

#### Source

[src/User.ts:91](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/User.ts#L91)

***

### emails?

> `optional` `readonly` **emails**: `string`[]

The user's authentication email addresses. Required authentication.

#### Implementation of

[`IUser`](api%5Cinterfaces%5CIUser.md).[`emails`](api%5Cinterfaces%5CIUser.md#emails)

#### Source

[src/User.ts:95](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/User.ts#L95)

***

### formalTeacher?

> `optional` `readonly` **formalTeacher**: `boolean`

#### Source

[src/User.ts:153](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/User.ts#L153)

***

### googleID?

> `optional` `readonly` **googleID**: `null` \| `string`

#### Implementation of

[`IUser`](api%5Cinterfaces%5CIUser.md).[`googleID`](api%5Cinterfaces%5CIUser.md#googleid)

#### Source

[src/User.ts:118](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/User.ts#L118)

***

### hasAccessToAIGuideDev?

> `optional` `readonly` **hasAccessToAIGuideDev**: `boolean`

#### Implementation of

[`IUser`](api%5Cinterfaces%5CIUser.md).[`hasAccessToAIGuideDev`](api%5Cinterfaces%5CIUser.md#hasaccesstoaiguidedev)

#### Source

[src/User.ts:134](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/User.ts#L134)

***

### hasAccessToAIGuideTeacher?

> `optional` `readonly` **hasAccessToAIGuideTeacher**: `boolean`

#### Implementation of

[`IUser`](api%5Cinterfaces%5CIUser.md).[`hasAccessToAIGuideTeacher`](api%5Cinterfaces%5CIUser.md#hasaccesstoaiguideteacher)

#### Source

[src/User.ts:135](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/User.ts#L135)

***

### hasChildren?

> `optional` `readonly` **hasChildren**: `boolean`

#### Implementation of

[`IUser`](api%5Cinterfaces%5CIUser.md).[`hasChildren`](api%5Cinterfaces%5CIUser.md#haschildren)

#### Source

[src/User.ts:136](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/User.ts#L136)

***

### hasClasses?

> `optional` `readonly` **hasClasses**: `boolean`

#### Implementation of

[`IUser`](api%5Cinterfaces%5CIUser.md).[`hasClasses`](api%5Cinterfaces%5CIUser.md#hasclasses)

#### Source

[src/User.ts:137](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/User.ts#L137)

***

### hasCoach?

> `optional` `readonly` **hasCoach**: `boolean`

#### Implementation of

[`IUser`](api%5Cinterfaces%5CIUser.md).[`hasCoach`](api%5Cinterfaces%5CIUser.md#hascoach)

#### Source

[src/User.ts:138](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/User.ts#L138)

***

### hasStudents?

> `optional` `readonly` **hasStudents**: `boolean`

#### Implementation of

[`IUser`](api%5Cinterfaces%5CIUser.md).[`hasStudents`](api%5Cinterfaces%5CIUser.md#hasstudents)

#### Source

[src/User.ts:139](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/User.ts#L139)

***

### joined?

> `optional` `readonly` **joined**: `Date`

The date the user created their account.

#### Implementation of

[`IUser`](api%5Cinterfaces%5CIUser.md).[`joined`](api%5Cinterfaces%5CIUser.md#joined)

#### Source

[src/User.ts:115](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/User.ts#L115)

***

### kaid?

> `optional` `readonly` **kaid**: `null` \| \`kaid\_$\{number\}\`

The user's KAID.

#### Implementation of

[`IUser`](api%5Cinterfaces%5CIUser.md).[`kaid`](api%5Cinterfaces%5CIUser.md#kaid)

#### Source

[src/User.ts:79](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/User.ts#L79)

***

### key?

> `optional` `readonly` **key**: `string`

#### Implementation of

[`IUser`](api%5Cinterfaces%5CIUser.md).[`key`](api%5Cinterfaces%5CIUser.md#key)

#### Source

[src/User.ts:117](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/User.ts#L117)

***

### midsignupPhantom?

> `optional` `readonly` **midsignupPhantom**: `boolean`

#### Implementation of

[`IUser`](api%5Cinterfaces%5CIUser.md).[`midsignupPhantom`](api%5Cinterfaces%5CIUser.md#midsignupphantom)

#### Source

[src/User.ts:158](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/User.ts#L158)

***

### moderator?

> `optional` `readonly` **moderator**: `boolean`

Whether the user is a Guardian.

#### Implementation of

[`IUser`](api%5Cinterfaces%5CIUser.md).[`moderator`](api%5Cinterfaces%5CIUser.md#moderator)

#### Source

[src/User.ts:145](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/User.ts#L145)

***

### newNotifications?

> `optional` `readonly` **newNotifications**: `number`

The number of unread notifications.

#### Implementation of

[`IUser`](api%5Cinterfaces%5CIUser.md).[`newNotifications`](api%5Cinterfaces%5CIUser.md#newnotifications)

#### Source

[src/User.ts:123](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/User.ts#L123)

***

### nickname?

> `optional` `readonly` **nickname**: `string`

The user's nickname. May in rare cases be `null`.

#### Implementation of

[`IUser`](api%5Cinterfaces%5CIUser.md).[`nickname`](api%5Cinterfaces%5CIUser.md#nickname)

#### Source

[src/User.ts:87](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/User.ts#L87)

***

### orphan?

> `optional` `readonly` **orphan**: `boolean`

#### Implementation of

[`IUser`](api%5Cinterfaces%5CIUser.md).[`orphan`](api%5Cinterfaces%5CIUser.md#orphan)

#### Source

[src/User.ts:151](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/User.ts#L151)

***

### parent?

> `optional` `readonly` **parent**: `boolean`

#### Implementation of

[`IUser`](api%5Cinterfaces%5CIUser.md).[`parent`](api%5Cinterfaces%5CIUser.md#parent)

#### Source

[src/User.ts:150](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/User.ts#L150)

***

### phantom?

> `optional` `readonly` **phantom**: `boolean`

#### Implementation of

[`IUser`](api%5Cinterfaces%5CIUser.md).[`phantom`](api%5Cinterfaces%5CIUser.md#phantom)

#### Source

[src/User.ts:157](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/User.ts#L157)

***

### points?

> `optional` `readonly` **points**: `number`

The user's energy points.

#### Implementation of

[`IUser`](api%5Cinterfaces%5CIUser.md).[`points`](api%5Cinterfaces%5CIUser.md#points)

#### Source

[src/User.ts:107](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/User.ts#L107)

***

### programs?

> `optional` `readonly` **programs**: [`Program`](api%5Cclasses%5CProgram.md)[]

#### Implementation of

[`IUser`](api%5Cinterfaces%5CIUser.md).[`programs`](api%5Cinterfaces%5CIUser.md#programs)

#### Source

[src/User.ts:163](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/User.ts#L163)

***

### publisher?

> `optional` `readonly` **publisher**: `boolean`

#### Implementation of

[`IUser`](api%5Cinterfaces%5CIUser.md).[`publisher`](api%5Cinterfaces%5CIUser.md#publisher)

#### Source

[src/User.ts:155](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/User.ts#L155)

***

### qualarooID?

> `optional` `readonly` **qualarooID**: `null` \| `string`

#### Implementation of

[`IUser`](api%5Cinterfaces%5CIUser.md).[`qualarooID`](api%5Cinterfaces%5CIUser.md#qualarooid)

#### Source

[src/User.ts:119](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/User.ts#L119)

***

### rawData?

> `optional` **rawData**: `RecursivePartial`\<[`UserSchema`](api%5Cinterfaces%5CUserSchema.md)\<[`AvatarSchema`](api%5Cinterfaces%5CAvatarSchema.md), [`ProfileSchema`](api%5Cinterfaces%5CProfileSchema.md), [`ListProgramsSchema`](api%5Cinterfaces%5CListProgramsSchema.md)\<`unknown`\>\>\>

The raw base schema data

#### Remarks

Only set if the base was created from a user schema.

#### Inherited from

`Wrapper.rawData`

#### Source

[src/lib/Wrapper.ts:22](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/Wrapper.ts#L22)

***

### self?

> `optional` `readonly` **self**: `boolean`

Whether the user is the currently authenticated user.

#### Implementation of

[`IUser`](api%5Cinterfaces%5CIUser.md).[`self`](api%5Cinterfaces%5CIUser.md#self)

#### Source

[src/User.ts:75](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/User.ts#L75)

***

### statistics?

> `optional` `readonly` **statistics**: [`UserStatistics`](api%5Cinterfaces%5CUserStatistics.md)

#### Implementation of

[`IUser`](api%5Cinterfaces%5CIUser.md).[`statistics`](api%5Cinterfaces%5CIUser.md#statistics)

#### Source

[src/User.ts:162](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/User.ts#L162)

***

### teacher?

> `optional` `readonly` **teacher**: `boolean`

#### Implementation of

[`IUser`](api%5Cinterfaces%5CIUser.md).[`teacher`](api%5Cinterfaces%5CIUser.md#teacher)

#### Source

[src/User.ts:152](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/User.ts#L152)

***

### username?

> `optional` `readonly` **username**: `null` \| `string`

The user's username. May not be set by the user.

#### Implementation of

[`IUser`](api%5Cinterfaces%5CIUser.md).[`username`](api%5Cinterfaces%5CIUser.md#username)

#### Source

[src/User.ts:83](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/User.ts#L83)

## Accessors

### url

> `get` **url**(): `null` \| \`http$\{string\}://$\{string\}khanacademy.$\{string\}/profile/$\{string\}\`

#### Returns

`null` \| \`http$\{string\}://$\{string\}khanacademy.$\{string\}/profile/$\{string\}\`

#### Source

[src/User.ts:165](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/User.ts#L165)

## Methods

### #resolveIdentifier()

> `private` **#resolveIdentifier**(): `string`

#### Returns

`string`

#### Source

[src/User.ts:201](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/User.ts#L201)

***

### copy()

> **copy**(`data`): [`User`](api%5Cclasses%5CUser.md)

Updates data into the class

#### Parameters

• **data**: [`IUser`](api%5Cinterfaces%5CIUser.md)

The data to copy from

#### Returns

[`User`](api%5Cclasses%5CUser.md)

The class instance

#### Inherited from

`Wrapper.copy`

#### Source

[src/lib/Wrapper.ts:53](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/Wrapper.ts#L53)

***

### copyFromSchema()

> **copyFromSchema**(`schema`): [`User`](api%5Cclasses%5CUser.md)

Updates data from a schema into the instance

#### Parameters

• **schema**: `RecursivePartial`\<[`UserSchema`](api%5Cinterfaces%5CUserSchema.md)\<[`AvatarSchema`](api%5Cinterfaces%5CAvatarSchema.md), [`ProfileSchema`](api%5Cinterfaces%5CProfileSchema.md), [`ListProgramsSchema`](api%5Cinterfaces%5CListProgramsSchema.md)\<`unknown`\>\>\>

The schema to copy from

#### Returns

[`User`](api%5Cclasses%5CUser.md)

The class instance

#### Inherited from

`Wrapper.copyFromSchema`

#### Source

[src/lib/Wrapper.ts:65](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/Wrapper.ts#L65)

***

### get()

> **get**(`client`): `Promise`\<[`User`](api%5Cclasses%5CUser.md)\>

Fetches the user's profile using a `getFullUserProfile` query and updates the user's data

#### Parameters

• **client**: [`Client`](api%5Cclasses%5CClient.md)= `undefined`

Optional client to use for the request

#### Returns

`Promise`\<[`User`](api%5Cclasses%5CUser.md)\>

#### Overrides

`Wrapper.get`

#### See

[Client.getUser](api%5Cclasses%5CClient.md#getuser)

#### Source

[src/User.ts:283](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/User.ts#L283)

***

### getAllPrograms()

> **getAllPrograms**(`client`, `sort`?, `limit`?): `Promise`\<[`User`](api%5Cclasses%5CUser.md)\>

#### Parameters

• **client**: [`Client`](api%5Cclasses%5CClient.md)= `undefined`

• **sort?**: [`ListProgramSortOrder`](api%5Cenumerations%5CListProgramSortOrder.md)

• **limit?**: `number`

#### Returns

`Promise`\<[`User`](api%5Cclasses%5CUser.md)\>

#### See

[Client.getAllUserPrograms](api%5Cclasses%5CClient.md#getalluserprograms)

#### Source

[src/User.ts:332](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/User.ts#L332)

***

### getAvatar()

> **getAvatar**(`client`): `Promise`\<`"https://www.khanacademy.org/images/avatars/svg/blobby-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/blobby-yellow.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/blobby-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/blobby-purple.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/area-52-yellow.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/area-52-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/area-52-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/area-52-purple.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/eggleston-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/eggleston-yellow.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/eggleston-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/eggleston-orange.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/scuttlebug-purple.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/scuttlebug-yellow.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/scuttlebug-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/scuttlebug-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/boggle-yellow.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/boggle-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/boggle-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/boggle-purple.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/sneak-peak-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/sneak-peak-yellow.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/sneak-peak-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/sneak-peak-purple.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/stelly-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/stelly-yellow.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/stelly-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/stelly-orange.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cacteye-purple.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cacteye-yellow.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cacteye-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cacteye-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leaf-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leaf-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leaf-grey.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leaf-red.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leaf-orange.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leaf-yellow.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leafers-seed.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leafers-seedling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leafers-sapling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leafers-tree.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leafers-ultimate.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/piceratops-seed.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/piceratops-seedling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/piceratops-sapling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/piceratops-tree.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/piceratops-ultimate.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/duskpin-seed.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/duskpin-seedling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/duskpin-sapling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/duskpin-tree.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/duskpin-ultimate.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/primosaur-seed.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/primosaur-seedling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/primosaur-sapling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/primosaur-tree.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/primosaur-ultimate.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/starky-seed.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/starky-seedling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/starky-sapling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/starky-tree.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/starky-ultimate.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/aqualine-seed.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/aqualine-seedling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/aqualine-sapling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/aqualine-tree.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/aqualine-ultimate.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/spunky-sam.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/spunky-sam-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/spunky-sam-orange.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/spunky-sam-red.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/marcimus.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/marcimus-orange.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/marcimus-red.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/marcimus-purple.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/mr-pink.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/mr-pink-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/mr-pink-orange.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/robot_female_1.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/robot_female_2.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/robot_female_3.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/robot_male_1.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/robot_male_2.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/robot_male_3.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/orange-juice-squid.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/purple-pi.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/purple-pi-pink.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/purple-pi-teal.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/mr-pants.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/mr-pants-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/mr-pants-orange.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/mr-pants-pink.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/mr-pants-purple.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/old-spice-man.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/old-spice-man-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cs-winston.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cs-winston-baby.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cs-ohnoes.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cs-hopper-happy.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cs-hopper-jumping.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cs-hopper-cool.svg"` \| `"https://www.khanacademy.org/images/avatars/blobby-green.png"` \| `"https://www.khanacademy.org/images/avatars/blobby-yellow.png"` \| `"https://www.khanacademy.org/images/avatars/blobby-blue.png"` \| `"https://www.khanacademy.org/images/avatars/blobby-purple.png"` \| `"https://www.khanacademy.org/images/avatars/area-52-yellow.png"` \| `"https://www.khanacademy.org/images/avatars/area-52-blue.png"` \| `"https://www.khanacademy.org/images/avatars/area-52-green.png"` \| `"https://www.khanacademy.org/images/avatars/area-52-purple.png"` \| `"https://www.khanacademy.org/images/avatars/eggleston-blue.png"` \| `"https://www.khanacademy.org/images/avatars/eggleston-yellow.png"` \| `"https://www.khanacademy.org/images/avatars/eggleston-green.png"` \| `"https://www.khanacademy.org/images/avatars/eggleston-orange.png"` \| `"https://www.khanacademy.org/images/avatars/scuttlebug-purple.png"` \| `"https://www.khanacademy.org/images/avatars/scuttlebug-yellow.png"` \| `"https://www.khanacademy.org/images/avatars/scuttlebug-blue.png"` \| `"https://www.khanacademy.org/images/avatars/scuttlebug-green.png"` \| `"https://www.khanacademy.org/images/avatars/boggle-yellow.png"` \| `"https://www.khanacademy.org/images/avatars/boggle-blue.png"` \| `"https://www.khanacademy.org/images/avatars/boggle-green.png"` \| `"https://www.khanacademy.org/images/avatars/boggle-purple.png"` \| `"https://www.khanacademy.org/images/avatars/sneak-peak-green.png"` \| `"https://www.khanacademy.org/images/avatars/sneak-peak-yellow.png"` \| `"https://www.khanacademy.org/images/avatars/sneak-peak-blue.png"` \| `"https://www.khanacademy.org/images/avatars/sneak-peak-purple.png"` \| `"https://www.khanacademy.org/images/avatars/stelly-blue.png"` \| `"https://www.khanacademy.org/images/avatars/stelly-yellow.png"` \| `"https://www.khanacademy.org/images/avatars/stelly-green.png"` \| `"https://www.khanacademy.org/images/avatars/stelly-orange.png"` \| `"https://www.khanacademy.org/images/avatars/cacteye-purple.png"` \| `"https://www.khanacademy.org/images/avatars/cacteye-yellow.png"` \| `"https://www.khanacademy.org/images/avatars/cacteye-blue.png"` \| `"https://www.khanacademy.org/images/avatars/cacteye-green.png"` \| `"https://www.khanacademy.org/images/avatars/leaf-green.png"` \| `"https://www.khanacademy.org/images/avatars/leaf-blue.png"` \| `"https://www.khanacademy.org/images/avatars/leaf-grey.png"` \| `"https://www.khanacademy.org/images/avatars/leaf-red.png"` \| `"https://www.khanacademy.org/images/avatars/leaf-orange.png"` \| `"https://www.khanacademy.org/images/avatars/leaf-yellow.png"` \| `"https://www.khanacademy.org/images/avatars/leafers-seed.png"` \| `"https://www.khanacademy.org/images/avatars/leafers-seedling.png"` \| `"https://www.khanacademy.org/images/avatars/leafers-sapling.png"` \| `"https://www.khanacademy.org/images/avatars/leafers-tree.png"` \| `"https://www.khanacademy.org/images/avatars/leafers-ultimate.png"` \| `"https://www.khanacademy.org/images/avatars/piceratops-seed.png"` \| `"https://www.khanacademy.org/images/avatars/piceratops-seedling.png"` \| `"https://www.khanacademy.org/images/avatars/piceratops-sapling.png"` \| `"https://www.khanacademy.org/images/avatars/piceratops-tree.png"` \| `"https://www.khanacademy.org/images/avatars/piceratops-ultimate.png"` \| `"https://www.khanacademy.org/images/avatars/duskpin-seed.png"` \| `"https://www.khanacademy.org/images/avatars/duskpin-seedling.png"` \| `"https://www.khanacademy.org/images/avatars/duskpin-sapling.png"` \| `"https://www.khanacademy.org/images/avatars/duskpin-tree.png"` \| `"https://www.khanacademy.org/images/avatars/duskpin-ultimate.png"` \| `"https://www.khanacademy.org/images/avatars/primosaur-seed.png"` \| `"https://www.khanacademy.org/images/avatars/primosaur-seedling.png"` \| `"https://www.khanacademy.org/images/avatars/primosaur-sapling.png"` \| `"https://www.khanacademy.org/images/avatars/primosaur-tree.png"` \| `"https://www.khanacademy.org/images/avatars/primosaur-ultimate.png"` \| `"https://www.khanacademy.org/images/avatars/starky-seed.png"` \| `"https://www.khanacademy.org/images/avatars/starky-seedling.png"` \| `"https://www.khanacademy.org/images/avatars/starky-sapling.png"` \| `"https://www.khanacademy.org/images/avatars/starky-tree.png"` \| `"https://www.khanacademy.org/images/avatars/starky-ultimate.png"` \| `"https://www.khanacademy.org/images/avatars/aqualine-seed.png"` \| `"https://www.khanacademy.org/images/avatars/aqualine-seedling.png"` \| `"https://www.khanacademy.org/images/avatars/aqualine-sapling.png"` \| `"https://www.khanacademy.org/images/avatars/aqualine-tree.png"` \| `"https://www.khanacademy.org/images/avatars/aqualine-ultimate.png"` \| `"https://www.khanacademy.org/images/avatars/spunky-sam.png"` \| `"https://www.khanacademy.org/images/avatars/spunky-sam-green.png"` \| `"https://www.khanacademy.org/images/avatars/spunky-sam-orange.png"` \| `"https://www.khanacademy.org/images/avatars/spunky-sam-red.png"` \| `"https://www.khanacademy.org/images/avatars/marcimus.png"` \| `"https://www.khanacademy.org/images/avatars/marcimus-orange.png"` \| `"https://www.khanacademy.org/images/avatars/marcimus-red.png"` \| `"https://www.khanacademy.org/images/avatars/marcimus-purple.png"` \| `"https://www.khanacademy.org/images/avatars/mr-pink.png"` \| `"https://www.khanacademy.org/images/avatars/mr-pink-green.png"` \| `"https://www.khanacademy.org/images/avatars/mr-pink-orange.png"` \| `"https://www.khanacademy.org/images/avatars/robot_female_1.png"` \| `"https://www.khanacademy.org/images/avatars/robot_female_2.png"` \| `"https://www.khanacademy.org/images/avatars/robot_female_3.png"` \| `"https://www.khanacademy.org/images/avatars/robot_male_1.png"` \| `"https://www.khanacademy.org/images/avatars/robot_male_2.png"` \| `"https://www.khanacademy.org/images/avatars/robot_male_3.png"` \| `"https://www.khanacademy.org/images/avatars/orange-juice-squid.png"` \| `"https://www.khanacademy.org/images/avatars/purple-pi.png"` \| `"https://www.khanacademy.org/images/avatars/purple-pi-pink.png"` \| `"https://www.khanacademy.org/images/avatars/purple-pi-teal.png"` \| `"https://www.khanacademy.org/images/avatars/mr-pants.png"` \| `"https://www.khanacademy.org/images/avatars/mr-pants-green.png"` \| `"https://www.khanacademy.org/images/avatars/mr-pants-orange.png"` \| `"https://www.khanacademy.org/images/avatars/mr-pants-pink.png"` \| `"https://www.khanacademy.org/images/avatars/mr-pants-purple.png"` \| `"https://www.khanacademy.org/images/avatars/old-spice-man.png"` \| `"https://www.khanacademy.org/images/avatars/old-spice-man-blue.png"` \| `"https://www.khanacademy.org/images/avatars/cs-winston.png"` \| `"https://www.khanacademy.org/images/avatars/cs-winston-baby.png"` \| `"https://www.khanacademy.org/images/avatars/cs-ohnoes.png"` \| `"https://www.khanacademy.org/images/avatars/cs-hopper-happy.png"` \| `"https://www.khanacademy.org/images/avatars/cs-hopper-jumping.png"` \| `"https://www.khanacademy.org/images/avatars/cs-hopper-cool.png"`\>

#### Parameters

• **client**: [`Client`](api%5Cclasses%5CClient.md)= `undefined`

#### Returns

`Promise`\<`"https://www.khanacademy.org/images/avatars/svg/blobby-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/blobby-yellow.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/blobby-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/blobby-purple.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/area-52-yellow.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/area-52-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/area-52-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/area-52-purple.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/eggleston-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/eggleston-yellow.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/eggleston-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/eggleston-orange.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/scuttlebug-purple.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/scuttlebug-yellow.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/scuttlebug-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/scuttlebug-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/boggle-yellow.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/boggle-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/boggle-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/boggle-purple.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/sneak-peak-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/sneak-peak-yellow.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/sneak-peak-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/sneak-peak-purple.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/stelly-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/stelly-yellow.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/stelly-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/stelly-orange.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cacteye-purple.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cacteye-yellow.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cacteye-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cacteye-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leaf-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leaf-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leaf-grey.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leaf-red.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leaf-orange.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leaf-yellow.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leafers-seed.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leafers-seedling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leafers-sapling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leafers-tree.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leafers-ultimate.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/piceratops-seed.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/piceratops-seedling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/piceratops-sapling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/piceratops-tree.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/piceratops-ultimate.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/duskpin-seed.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/duskpin-seedling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/duskpin-sapling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/duskpin-tree.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/duskpin-ultimate.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/primosaur-seed.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/primosaur-seedling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/primosaur-sapling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/primosaur-tree.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/primosaur-ultimate.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/starky-seed.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/starky-seedling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/starky-sapling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/starky-tree.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/starky-ultimate.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/aqualine-seed.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/aqualine-seedling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/aqualine-sapling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/aqualine-tree.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/aqualine-ultimate.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/spunky-sam.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/spunky-sam-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/spunky-sam-orange.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/spunky-sam-red.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/marcimus.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/marcimus-orange.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/marcimus-red.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/marcimus-purple.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/mr-pink.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/mr-pink-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/mr-pink-orange.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/robot_female_1.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/robot_female_2.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/robot_female_3.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/robot_male_1.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/robot_male_2.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/robot_male_3.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/orange-juice-squid.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/purple-pi.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/purple-pi-pink.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/purple-pi-teal.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/mr-pants.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/mr-pants-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/mr-pants-orange.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/mr-pants-pink.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/mr-pants-purple.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/old-spice-man.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/old-spice-man-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cs-winston.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cs-winston-baby.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cs-ohnoes.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cs-hopper-happy.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cs-hopper-jumping.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cs-hopper-cool.svg"` \| `"https://www.khanacademy.org/images/avatars/blobby-green.png"` \| `"https://www.khanacademy.org/images/avatars/blobby-yellow.png"` \| `"https://www.khanacademy.org/images/avatars/blobby-blue.png"` \| `"https://www.khanacademy.org/images/avatars/blobby-purple.png"` \| `"https://www.khanacademy.org/images/avatars/area-52-yellow.png"` \| `"https://www.khanacademy.org/images/avatars/area-52-blue.png"` \| `"https://www.khanacademy.org/images/avatars/area-52-green.png"` \| `"https://www.khanacademy.org/images/avatars/area-52-purple.png"` \| `"https://www.khanacademy.org/images/avatars/eggleston-blue.png"` \| `"https://www.khanacademy.org/images/avatars/eggleston-yellow.png"` \| `"https://www.khanacademy.org/images/avatars/eggleston-green.png"` \| `"https://www.khanacademy.org/images/avatars/eggleston-orange.png"` \| `"https://www.khanacademy.org/images/avatars/scuttlebug-purple.png"` \| `"https://www.khanacademy.org/images/avatars/scuttlebug-yellow.png"` \| `"https://www.khanacademy.org/images/avatars/scuttlebug-blue.png"` \| `"https://www.khanacademy.org/images/avatars/scuttlebug-green.png"` \| `"https://www.khanacademy.org/images/avatars/boggle-yellow.png"` \| `"https://www.khanacademy.org/images/avatars/boggle-blue.png"` \| `"https://www.khanacademy.org/images/avatars/boggle-green.png"` \| `"https://www.khanacademy.org/images/avatars/boggle-purple.png"` \| `"https://www.khanacademy.org/images/avatars/sneak-peak-green.png"` \| `"https://www.khanacademy.org/images/avatars/sneak-peak-yellow.png"` \| `"https://www.khanacademy.org/images/avatars/sneak-peak-blue.png"` \| `"https://www.khanacademy.org/images/avatars/sneak-peak-purple.png"` \| `"https://www.khanacademy.org/images/avatars/stelly-blue.png"` \| `"https://www.khanacademy.org/images/avatars/stelly-yellow.png"` \| `"https://www.khanacademy.org/images/avatars/stelly-green.png"` \| `"https://www.khanacademy.org/images/avatars/stelly-orange.png"` \| `"https://www.khanacademy.org/images/avatars/cacteye-purple.png"` \| `"https://www.khanacademy.org/images/avatars/cacteye-yellow.png"` \| `"https://www.khanacademy.org/images/avatars/cacteye-blue.png"` \| `"https://www.khanacademy.org/images/avatars/cacteye-green.png"` \| `"https://www.khanacademy.org/images/avatars/leaf-green.png"` \| `"https://www.khanacademy.org/images/avatars/leaf-blue.png"` \| `"https://www.khanacademy.org/images/avatars/leaf-grey.png"` \| `"https://www.khanacademy.org/images/avatars/leaf-red.png"` \| `"https://www.khanacademy.org/images/avatars/leaf-orange.png"` \| `"https://www.khanacademy.org/images/avatars/leaf-yellow.png"` \| `"https://www.khanacademy.org/images/avatars/leafers-seed.png"` \| `"https://www.khanacademy.org/images/avatars/leafers-seedling.png"` \| `"https://www.khanacademy.org/images/avatars/leafers-sapling.png"` \| `"https://www.khanacademy.org/images/avatars/leafers-tree.png"` \| `"https://www.khanacademy.org/images/avatars/leafers-ultimate.png"` \| `"https://www.khanacademy.org/images/avatars/piceratops-seed.png"` \| `"https://www.khanacademy.org/images/avatars/piceratops-seedling.png"` \| `"https://www.khanacademy.org/images/avatars/piceratops-sapling.png"` \| `"https://www.khanacademy.org/images/avatars/piceratops-tree.png"` \| `"https://www.khanacademy.org/images/avatars/piceratops-ultimate.png"` \| `"https://www.khanacademy.org/images/avatars/duskpin-seed.png"` \| `"https://www.khanacademy.org/images/avatars/duskpin-seedling.png"` \| `"https://www.khanacademy.org/images/avatars/duskpin-sapling.png"` \| `"https://www.khanacademy.org/images/avatars/duskpin-tree.png"` \| `"https://www.khanacademy.org/images/avatars/duskpin-ultimate.png"` \| `"https://www.khanacademy.org/images/avatars/primosaur-seed.png"` \| `"https://www.khanacademy.org/images/avatars/primosaur-seedling.png"` \| `"https://www.khanacademy.org/images/avatars/primosaur-sapling.png"` \| `"https://www.khanacademy.org/images/avatars/primosaur-tree.png"` \| `"https://www.khanacademy.org/images/avatars/primosaur-ultimate.png"` \| `"https://www.khanacademy.org/images/avatars/starky-seed.png"` \| `"https://www.khanacademy.org/images/avatars/starky-seedling.png"` \| `"https://www.khanacademy.org/images/avatars/starky-sapling.png"` \| `"https://www.khanacademy.org/images/avatars/starky-tree.png"` \| `"https://www.khanacademy.org/images/avatars/starky-ultimate.png"` \| `"https://www.khanacademy.org/images/avatars/aqualine-seed.png"` \| `"https://www.khanacademy.org/images/avatars/aqualine-seedling.png"` \| `"https://www.khanacademy.org/images/avatars/aqualine-sapling.png"` \| `"https://www.khanacademy.org/images/avatars/aqualine-tree.png"` \| `"https://www.khanacademy.org/images/avatars/aqualine-ultimate.png"` \| `"https://www.khanacademy.org/images/avatars/spunky-sam.png"` \| `"https://www.khanacademy.org/images/avatars/spunky-sam-green.png"` \| `"https://www.khanacademy.org/images/avatars/spunky-sam-orange.png"` \| `"https://www.khanacademy.org/images/avatars/spunky-sam-red.png"` \| `"https://www.khanacademy.org/images/avatars/marcimus.png"` \| `"https://www.khanacademy.org/images/avatars/marcimus-orange.png"` \| `"https://www.khanacademy.org/images/avatars/marcimus-red.png"` \| `"https://www.khanacademy.org/images/avatars/marcimus-purple.png"` \| `"https://www.khanacademy.org/images/avatars/mr-pink.png"` \| `"https://www.khanacademy.org/images/avatars/mr-pink-green.png"` \| `"https://www.khanacademy.org/images/avatars/mr-pink-orange.png"` \| `"https://www.khanacademy.org/images/avatars/robot_female_1.png"` \| `"https://www.khanacademy.org/images/avatars/robot_female_2.png"` \| `"https://www.khanacademy.org/images/avatars/robot_female_3.png"` \| `"https://www.khanacademy.org/images/avatars/robot_male_1.png"` \| `"https://www.khanacademy.org/images/avatars/robot_male_2.png"` \| `"https://www.khanacademy.org/images/avatars/robot_male_3.png"` \| `"https://www.khanacademy.org/images/avatars/orange-juice-squid.png"` \| `"https://www.khanacademy.org/images/avatars/purple-pi.png"` \| `"https://www.khanacademy.org/images/avatars/purple-pi-pink.png"` \| `"https://www.khanacademy.org/images/avatars/purple-pi-teal.png"` \| `"https://www.khanacademy.org/images/avatars/mr-pants.png"` \| `"https://www.khanacademy.org/images/avatars/mr-pants-green.png"` \| `"https://www.khanacademy.org/images/avatars/mr-pants-orange.png"` \| `"https://www.khanacademy.org/images/avatars/mr-pants-pink.png"` \| `"https://www.khanacademy.org/images/avatars/mr-pants-purple.png"` \| `"https://www.khanacademy.org/images/avatars/old-spice-man.png"` \| `"https://www.khanacademy.org/images/avatars/old-spice-man-blue.png"` \| `"https://www.khanacademy.org/images/avatars/cs-winston.png"` \| `"https://www.khanacademy.org/images/avatars/cs-winston-baby.png"` \| `"https://www.khanacademy.org/images/avatars/cs-ohnoes.png"` \| `"https://www.khanacademy.org/images/avatars/cs-hopper-happy.png"` \| `"https://www.khanacademy.org/images/avatars/cs-hopper-jumping.png"` \| `"https://www.khanacademy.org/images/avatars/cs-hopper-cool.png"`\>

#### See

[!.getUserAvatar](api%5Cclasses%5CClient.md)

#### Source

[src/User.ts:292](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/User.ts#L292)

***

### getPrograms()

> **getPrograms**(`client`, `sort`?, `limit`?): `AsyncGenerator`\<[`Program`](api%5Cclasses%5CProgram.md)[], [`User`](api%5Cclasses%5CUser.md), `unknown`\>

#### Parameters

• **client**: [`Client`](api%5Cclasses%5CClient.md)= `undefined`

• **sort?**: [`ListProgramSortOrder`](api%5Cenumerations%5CListProgramSortOrder.md)

• **limit?**: `number`

#### Returns

`AsyncGenerator`\<[`Program`](api%5Cclasses%5CProgram.md)[], [`User`](api%5Cclasses%5CUser.md), `unknown`\>

#### See

[Client.getUserPrograms](api%5Cclasses%5CClient.md#getuserprograms)

#### Source

[src/User.ts:311](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/User.ts#L311)

***

### getStatistics()

> **getStatistics**(`client`): `Promise`\<[`User`](api%5Cclasses%5CUser.md)\>

#### Parameters

• **client**: [`Client`](api%5Cclasses%5CClient.md)= `undefined`

#### Returns

`Promise`\<[`User`](api%5Cclasses%5CUser.md)\>

#### See

[Client.getUserStatistics](api%5Cclasses%5CClient.md#getuserstatistics)

#### Source

[src/User.ts:302](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/User.ts#L302)

***

### is()

> **is**(`user`): `boolean`

Checks if two users are the same

#### Parameters

• **user**: [`IUser`](api%5Cinterfaces%5CIUser.md) \| [`User`](api%5Cclasses%5CUser.md)

The user to compare to

#### Returns

`boolean`

#### Overrides

`Wrapper.is`

#### Source

[src/User.ts:351](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/User.ts#L351)

***

### isSchema()

> **isSchema**(`schema`): `boolean`

Checks if the schema represents the same instance

#### Parameters

• **schema**: `RecursivePartial`\<[`UserSchema`](api%5Cinterfaces%5CUserSchema.md)\<[`AvatarSchema`](api%5Cinterfaces%5CAvatarSchema.md), [`ProfileSchema`](api%5Cinterfaces%5CProfileSchema.md), [`ListProgramsSchema`](api%5Cinterfaces%5CListProgramsSchema.md)\<`unknown`\>\>\>

#### Returns

`boolean`

#### Inherited from

`Wrapper.isSchema`

#### Source

[src/lib/Wrapper.ts:88](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/Wrapper.ts#L88)

***

### transformSchema()

> **transformSchema**(`schema`): `object`

#### Parameters

• **schema**: `RecursivePartial`\<[`UserSchema`](api%5Cinterfaces%5CUserSchema.md)\<[`AvatarSchema`](api%5Cinterfaces%5CAvatarSchema.md), [`ProfileSchema`](api%5Cinterfaces%5CProfileSchema.md), [`ListProgramsSchema`](api%5Cinterfaces%5CListProgramsSchema.md)\<`unknown`\>\>\>

#### Returns

`object`

##### accessLevel

> **accessLevel**: `undefined` \| [`UserAccessLevel`](api%5Cenumerations%5CUserAccessLevel.md) = `schema.profile.accessLevel`

##### badgeCounts

> **badgeCounts**: `undefined` \| `Record`\<[`BadgeCategory`](api%5Cenumerations%5CBadgeCategory.md), `number`\>

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

> **kaid**: `undefined` \| `null` \| \`kaid\_$\{number\}\`

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

#### Source

[src/User.ts:209](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/User.ts#L209)

***

### fromIdentifier()

> `static` **fromIdentifier**(`identifier`): [`User`](api%5Cclasses%5CUser.md)

#### Parameters

• **identifier**: `string`

#### Returns

[`User`](api%5Cclasses%5CUser.md)

#### Source

[src/User.ts:190](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/User.ts#L190)

***

### fromSchema()

> `static` **fromSchema**(`schema`): [`User`](api%5Cclasses%5CUser.md)

Creates a new user from the given from a user schema

#### Parameters

• **schema**: `RecursivePartial`\<[`UserSchema`](api%5Cinterfaces%5CUserSchema.md)\<[`AvatarSchema`](api%5Cinterfaces%5CAvatarSchema.md), [`ProfileSchema`](api%5Cinterfaces%5CProfileSchema.md), [`ListProgramsSchema`](api%5Cinterfaces%5CListProgramsSchema.md)\<`unknown`\>\>\>

#### Returns

[`User`](api%5Cclasses%5CUser.md)

#### Description

Note that `Client.getUser` will automatically call this method. This is only useful if you need to use the low-level API.

#### See

[Client.getUser](api%5Cclasses%5CClient.md#getuser)

#### Source

[src/User.ts:182](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/User.ts#L182)
