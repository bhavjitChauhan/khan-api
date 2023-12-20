# Class: User

## Hierarchy

- `default`\<[`UserSchema`](api/interfaces/UserSchema.md), [`IUser`](api/interfaces/IUser.md)\>

  ↳ **`User`**

## Implements

- [`IUser`](api/interfaces/IUser.md)

## Constructors

### constructor

• **new User**(`data?`)

Creates a new class instance

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IUser`](api/interfaces/IUser.md) |

#### Inherited from

Wrapper\<UserSchema, IUser\>.constructor

#### Defined in

[lib/Wrapper.ts:36](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/Wrapper.ts#L36)

• **new User**(`client`, `data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](api/classes/Client.md) |
| `data?` | [`IUser`](api/interfaces/IUser.md) |

#### Inherited from

Wrapper\<UserSchema, IUser\>.constructor

#### Defined in

[lib/Wrapper.ts:37](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/Wrapper.ts#L37)

## Properties

### accessLevel

• `Optional` `Readonly` **accessLevel**: [`UserAccessLevel`](api/enums/UserAccessLevel.md)

#### Implementation of

[IUser](api/interfaces/IUser.md).[accessLevel](api/interfaces/IUser.md#accesslevel)

#### Defined in

[User.ts:160](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/User.ts#L160)

___

### avatar

• `Optional` `Readonly` **avatar**: [`AvatarURL`](api/README.md#avatarurl)

The user's avatar URL.

#### Implementation of

[IUser](api/interfaces/IUser.md).[avatar](api/interfaces/IUser.md#avatar)

#### Defined in

[User.ts:99](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/User.ts#L99)

___

### badgeCounts

• `Optional` `Readonly` **badgeCounts**: `Record`\<`BadgeCategory`, `number`\>

The user's badge counts by category.

#### Implementation of

[IUser](api/interfaces/IUser.md).[badgeCounts](api/interfaces/IUser.md#badgecounts)

#### Defined in

[User.ts:111](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/User.ts#L111)

___

### bio

• `Optional` `Readonly` **bio**: `string`

The user's bio.

#### Implementation of

[IUser](api/interfaces/IUser.md).[bio](api/interfaces/IUser.md#bio)

#### Defined in

[User.ts:103](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/User.ts#L103)

___

### canAccessDistrictsHomepage

• `Optional` `Readonly` **canAccessDistrictsHomepage**: `boolean`

#### Implementation of

[IUser](api/interfaces/IUser.md).[canAccessDistrictsHomepage](api/interfaces/IUser.md#canaccessdistrictshomepage)

#### Defined in

[User.ts:126](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/User.ts#L126)

___

### canHellban

• `Optional` `Readonly` **canHellban**: `boolean`

#### Implementation of

[IUser](api/interfaces/IUser.md).[canHellban](api/interfaces/IUser.md#canhellban)

#### Defined in

[User.ts:127](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/User.ts#L127)

___

### canMessageUsers

• `Optional` `Readonly` **canMessageUsers**: `boolean`

Whether the user can send Guardian messages.

#### Implementation of

[IUser](api/interfaces/IUser.md).[canMessageUsers](api/interfaces/IUser.md#canmessageusers)

#### Defined in

[User.ts:131](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/User.ts#L131)

___

### canModifyCoaches

• `Optional` `Readonly` **canModifyCoaches**: `boolean`

#### Implementation of

[IUser](api/interfaces/IUser.md).[canModifyCoaches](api/interfaces/IUser.md#canmodifycoaches)

#### Defined in

[User.ts:132](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/User.ts#L132)

___

### child

• `Optional` `Readonly` **child**: `boolean`

Whether the user is a child account.

#### Implementation of

[IUser](api/interfaces/IUser.md).[child](api/interfaces/IUser.md#child)

#### Defined in

[User.ts:149](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/User.ts#L149)

___

### client

• `Optional` **client**: [`Client`](api/classes/Client.md)

The client that this base was fetched with.

#### Inherited from

Wrapper.client

#### Defined in

[lib/Wrapper.ts:15](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/Wrapper.ts#L15)

___

### completedVideos

• `Optional` `Readonly` **completedVideos**: `number`

#### Implementation of

[IUser](api/interfaces/IUser.md).[completedVideos](api/interfaces/IUser.md#completedvideos)

#### Defined in

[User.ts:124](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/User.ts#L124)

___

### creator

• `Optional` `Readonly` **creator**: `boolean`

#### Implementation of

[IUser](api/interfaces/IUser.md).[creator](api/interfaces/IUser.md#creator)

#### Defined in

[User.ts:156](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/User.ts#L156)

___

### curator

• `Optional` `Readonly` **curator**: `boolean`

#### Implementation of

[IUser](api/interfaces/IUser.md).[curator](api/interfaces/IUser.md#curator)

#### Defined in

[User.ts:154](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/User.ts#L154)

___

### developer

• `Optional` `Readonly` **developer**: `boolean`

#### Implementation of

[IUser](api/interfaces/IUser.md).[developer](api/interfaces/IUser.md#developer)

#### Defined in

[User.ts:141](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/User.ts#L141)

___

### email

• `Optional` `Readonly` **email**: `string`

The user's email address. Required authentication.

#### Implementation of

[IUser](api/interfaces/IUser.md).[email](api/interfaces/IUser.md#email)

#### Defined in

[User.ts:91](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/User.ts#L91)

___

### emails

• `Optional` `Readonly` **emails**: `string`[]

The user's authentication email addresses. Required authentication.

#### Implementation of

[IUser](api/interfaces/IUser.md).[emails](api/interfaces/IUser.md#emails)

#### Defined in

[User.ts:95](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/User.ts#L95)

___

### formalTeacher

• `Optional` `Readonly` **formalTeacher**: `boolean`

#### Defined in

[User.ts:153](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/User.ts#L153)

___

### googleID

• `Optional` `Readonly` **googleID**: ``null`` \| `string`

#### Implementation of

[IUser](api/interfaces/IUser.md).[googleID](api/interfaces/IUser.md#googleid)

#### Defined in

[User.ts:118](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/User.ts#L118)

___

### hasAccessToAIGuideDev

• `Optional` `Readonly` **hasAccessToAIGuideDev**: `boolean`

#### Implementation of

[IUser](api/interfaces/IUser.md).[hasAccessToAIGuideDev](api/interfaces/IUser.md#hasaccesstoaiguidedev)

#### Defined in

[User.ts:134](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/User.ts#L134)

___

### hasAccessToAIGuideTeacher

• `Optional` `Readonly` **hasAccessToAIGuideTeacher**: `boolean`

#### Implementation of

[IUser](api/interfaces/IUser.md).[hasAccessToAIGuideTeacher](api/interfaces/IUser.md#hasaccesstoaiguideteacher)

#### Defined in

[User.ts:135](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/User.ts#L135)

___

### hasChildren

• `Optional` `Readonly` **hasChildren**: `boolean`

#### Implementation of

[IUser](api/interfaces/IUser.md).[hasChildren](api/interfaces/IUser.md#haschildren)

#### Defined in

[User.ts:136](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/User.ts#L136)

___

### hasClasses

• `Optional` `Readonly` **hasClasses**: `boolean`

#### Implementation of

[IUser](api/interfaces/IUser.md).[hasClasses](api/interfaces/IUser.md#hasclasses)

#### Defined in

[User.ts:137](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/User.ts#L137)

___

### hasCoach

• `Optional` `Readonly` **hasCoach**: `boolean`

#### Implementation of

[IUser](api/interfaces/IUser.md).[hasCoach](api/interfaces/IUser.md#hascoach)

#### Defined in

[User.ts:138](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/User.ts#L138)

___

### hasStudents

• `Optional` `Readonly` **hasStudents**: `boolean`

#### Implementation of

[IUser](api/interfaces/IUser.md).[hasStudents](api/interfaces/IUser.md#hasstudents)

#### Defined in

[User.ts:139](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/User.ts#L139)

___

### joined

• `Optional` `Readonly` **joined**: `Date`

The date the user created their account.

#### Implementation of

[IUser](api/interfaces/IUser.md).[joined](api/interfaces/IUser.md#joined)

#### Defined in

[User.ts:115](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/User.ts#L115)

___

### kaid

• `Optional` `Readonly` **kaid**: ``null`` \| \`kaid\_$\{number}\`

The user's KAID.

#### Implementation of

[IUser](api/interfaces/IUser.md).[kaid](api/interfaces/IUser.md#kaid)

#### Defined in

[User.ts:79](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/User.ts#L79)

___

### key

• `Optional` `Readonly` **key**: `string`

#### Implementation of

[IUser](api/interfaces/IUser.md).[key](api/interfaces/IUser.md#key)

#### Defined in

[User.ts:117](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/User.ts#L117)

___

### midsignupPhantom

• `Optional` `Readonly` **midsignupPhantom**: `boolean`

#### Implementation of

[IUser](api/interfaces/IUser.md).[midsignupPhantom](api/interfaces/IUser.md#midsignupphantom)

#### Defined in

[User.ts:158](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/User.ts#L158)

___

### moderator

• `Optional` `Readonly` **moderator**: `boolean`

Whether the user is a Guardian.

#### Implementation of

[IUser](api/interfaces/IUser.md).[moderator](api/interfaces/IUser.md#moderator)

#### Defined in

[User.ts:145](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/User.ts#L145)

___

### newNotifications

• `Optional` `Readonly` **newNotifications**: `number`

The number of unread notifications.

#### Implementation of

[IUser](api/interfaces/IUser.md).[newNotifications](api/interfaces/IUser.md#newnotifications)

#### Defined in

[User.ts:123](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/User.ts#L123)

___

### nickname

• `Optional` `Readonly` **nickname**: `string`

The user's nickname. May in rare cases be `null`.

#### Implementation of

[IUser](api/interfaces/IUser.md).[nickname](api/interfaces/IUser.md#nickname)

#### Defined in

[User.ts:87](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/User.ts#L87)

___

### orphan

• `Optional` `Readonly` **orphan**: `boolean`

#### Implementation of

[IUser](api/interfaces/IUser.md).[orphan](api/interfaces/IUser.md#orphan)

#### Defined in

[User.ts:151](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/User.ts#L151)

___

### parent

• `Optional` `Readonly` **parent**: `boolean`

#### Implementation of

[IUser](api/interfaces/IUser.md).[parent](api/interfaces/IUser.md#parent)

#### Defined in

[User.ts:150](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/User.ts#L150)

___

### phantom

• `Optional` `Readonly` **phantom**: `boolean`

#### Implementation of

[IUser](api/interfaces/IUser.md).[phantom](api/interfaces/IUser.md#phantom)

#### Defined in

[User.ts:157](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/User.ts#L157)

___

### points

• `Optional` `Readonly` **points**: `number`

The user's energy points.

#### Implementation of

[IUser](api/interfaces/IUser.md).[points](api/interfaces/IUser.md#points)

#### Defined in

[User.ts:107](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/User.ts#L107)

___

### programs

• `Optional` `Readonly` **programs**: [`Program`](api/classes/Program.md)[]

#### Implementation of

[IUser](api/interfaces/IUser.md).[programs](api/interfaces/IUser.md#programs)

#### Defined in

[User.ts:163](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/User.ts#L163)

___

### publisher

• `Optional` `Readonly` **publisher**: `boolean`

#### Implementation of

[IUser](api/interfaces/IUser.md).[publisher](api/interfaces/IUser.md#publisher)

#### Defined in

[User.ts:155](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/User.ts#L155)

___

### qualarooID

• `Optional` `Readonly` **qualarooID**: ``null`` \| `string`

#### Implementation of

[IUser](api/interfaces/IUser.md).[qualarooID](api/interfaces/IUser.md#qualarooid)

#### Defined in

[User.ts:119](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/User.ts#L119)

___

### rawData

• `Optional` **rawData**: `RecursivePartial`\<[`UserSchema`](api/interfaces/UserSchema.md)\<[`AvatarSchema`](api/interfaces/AvatarSchema.md), [`ProfileSchema`](api/interfaces/ProfileSchema.md), [`ListProgramsSchema`](api/interfaces/ListProgramsSchema.md)\<`unknown`\>\>\>

The raw base schema data

**`Remarks`**

Only set if the base was created from a user schema.

#### Inherited from

Wrapper.rawData

#### Defined in

[lib/Wrapper.ts:22](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/Wrapper.ts#L22)

___

### self

• `Optional` `Readonly` **self**: `boolean`

Whether the user is the currently authenticated user.

#### Implementation of

[IUser](api/interfaces/IUser.md).[self](api/interfaces/IUser.md#self)

#### Defined in

[User.ts:75](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/User.ts#L75)

___

### statistics

• `Optional` `Readonly` **statistics**: `UserStatistics`

#### Implementation of

[IUser](api/interfaces/IUser.md).[statistics](api/interfaces/IUser.md#statistics)

#### Defined in

[User.ts:162](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/User.ts#L162)

___

### teacher

• `Optional` `Readonly` **teacher**: `boolean`

#### Implementation of

[IUser](api/interfaces/IUser.md).[teacher](api/interfaces/IUser.md#teacher)

#### Defined in

[User.ts:152](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/User.ts#L152)

___

### username

• `Optional` `Readonly` **username**: ``null`` \| `string`

The user's username. May not be set by the user.

#### Implementation of

[IUser](api/interfaces/IUser.md).[username](api/interfaces/IUser.md#username)

#### Defined in

[User.ts:83](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/User.ts#L83)

## Accessors

### url

• `get` **url**(): ``null`` \| \`http$\{string}://$\{string}khanacademy.$\{string}/profile/$\{string}\`

#### Returns

``null`` \| \`http$\{string}://$\{string}khanacademy.$\{string}/profile/$\{string}\`

#### Defined in

[User.ts:165](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/User.ts#L165)

## Methods

### #resolveIdentifier

▸ `Private` **#resolveIdentifier**(): `string`

#### Returns

`string`

#### Defined in

[User.ts:201](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/User.ts#L201)

___

### copy

▸ **copy**(`data`): [`User`](api/classes/User.md)

Updates data into the class

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`IUser`](api/interfaces/IUser.md) | The data to copy from |

#### Returns

[`User`](api/classes/User.md)

The class instance

#### Inherited from

Wrapper.copy

#### Defined in

[lib/Wrapper.ts:53](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/Wrapper.ts#L53)

___

### copyFromSchema

▸ **copyFromSchema**(`schema`): [`User`](api/classes/User.md)

Updates data from a schema into the instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `schema` | `RecursivePartial`\<[`UserSchema`](api/interfaces/UserSchema.md)\<[`AvatarSchema`](api/interfaces/AvatarSchema.md), [`ProfileSchema`](api/interfaces/ProfileSchema.md), [`ListProgramsSchema`](api/interfaces/ListProgramsSchema.md)\<`unknown`\>\>\> | The schema to copy from |

#### Returns

[`User`](api/classes/User.md)

The class instance

#### Inherited from

Wrapper.copyFromSchema

#### Defined in

[lib/Wrapper.ts:65](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/Wrapper.ts#L65)

___

### get

▸ **get**(`client?`): `Promise`\<[`User`](api/classes/User.md)\>

Fetches the user's profile using a `getFullUserProfile` query and updates the user's data

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `client` | [`Client`](api/classes/Client.md) | Optional client to use for the request |

#### Returns

`Promise`\<[`User`](api/classes/User.md)\>

**`See`**

[!Client.getUser](api/classes/Client.md)

#### Overrides

Wrapper.get

#### Defined in

[User.ts:283](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/User.ts#L283)

___

### getAllPrograms

▸ **getAllPrograms**(`client?`, `sort?`, `limit?`): `Promise`\<[`User`](api/classes/User.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](api/classes/Client.md) |
| `sort?` | [`ListProgramSortOrder`](api/enums/ListProgramSortOrder.md) |
| `limit?` | `number` |

#### Returns

`Promise`\<[`User`](api/classes/User.md)\>

**`See`**

[!Client.getAllUserPrograms](api/classes/Client.md)

#### Defined in

[User.ts:332](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/User.ts#L332)

___

### getAvatar

▸ **getAvatar**(`client?`): `Promise`\<``"https://www.khanacademy.org/images/avatars/svg/blobby-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/blobby-yellow.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/blobby-blue.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/blobby-purple.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/area-52-yellow.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/area-52-blue.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/area-52-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/area-52-purple.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/eggleston-blue.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/eggleston-yellow.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/eggleston-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/eggleston-orange.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/scuttlebug-purple.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/scuttlebug-yellow.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/scuttlebug-blue.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/scuttlebug-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/boggle-yellow.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/boggle-blue.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/boggle-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/boggle-purple.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/sneak-peak-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/sneak-peak-yellow.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/sneak-peak-blue.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/sneak-peak-purple.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/stelly-blue.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/stelly-yellow.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/stelly-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/stelly-orange.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/cacteye-purple.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/cacteye-yellow.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/cacteye-blue.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/cacteye-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/leaf-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/leaf-blue.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/leaf-grey.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/leaf-red.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/leaf-orange.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/leaf-yellow.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/leafers-seed.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/leafers-seedling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/leafers-sapling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/leafers-tree.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/leafers-ultimate.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/piceratops-seed.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/piceratops-seedling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/piceratops-sapling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/piceratops-tree.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/piceratops-ultimate.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/duskpin-seed.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/duskpin-seedling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/duskpin-sapling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/duskpin-tree.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/duskpin-ultimate.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/primosaur-seed.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/primosaur-seedling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/primosaur-sapling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/primosaur-tree.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/primosaur-ultimate.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/starky-seed.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/starky-seedling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/starky-sapling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/starky-tree.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/starky-ultimate.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/aqualine-seed.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/aqualine-seedling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/aqualine-sapling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/aqualine-tree.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/aqualine-ultimate.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/spunky-sam.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/spunky-sam-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/spunky-sam-orange.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/spunky-sam-red.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/marcimus.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/marcimus-orange.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/marcimus-red.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/marcimus-purple.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/mr-pink.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/mr-pink-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/mr-pink-orange.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/robot_female_1.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/robot_female_2.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/robot_female_3.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/robot_male_1.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/robot_male_2.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/robot_male_3.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/orange-juice-squid.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/purple-pi.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/purple-pi-pink.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/purple-pi-teal.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/mr-pants.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/mr-pants-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/mr-pants-orange.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/mr-pants-pink.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/mr-pants-purple.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/old-spice-man.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/old-spice-man-blue.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/cs-winston.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/cs-winston-baby.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/cs-ohnoes.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/cs-hopper-happy.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/cs-hopper-jumping.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/cs-hopper-cool.svg"`` \| ``"https://www.khanacademy.org/images/avatars/blobby-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/blobby-yellow.png"`` \| ``"https://www.khanacademy.org/images/avatars/blobby-blue.png"`` \| ``"https://www.khanacademy.org/images/avatars/blobby-purple.png"`` \| ``"https://www.khanacademy.org/images/avatars/area-52-yellow.png"`` \| ``"https://www.khanacademy.org/images/avatars/area-52-blue.png"`` \| ``"https://www.khanacademy.org/images/avatars/area-52-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/area-52-purple.png"`` \| ``"https://www.khanacademy.org/images/avatars/eggleston-blue.png"`` \| ``"https://www.khanacademy.org/images/avatars/eggleston-yellow.png"`` \| ``"https://www.khanacademy.org/images/avatars/eggleston-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/eggleston-orange.png"`` \| ``"https://www.khanacademy.org/images/avatars/scuttlebug-purple.png"`` \| ``"https://www.khanacademy.org/images/avatars/scuttlebug-yellow.png"`` \| ``"https://www.khanacademy.org/images/avatars/scuttlebug-blue.png"`` \| ``"https://www.khanacademy.org/images/avatars/scuttlebug-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/boggle-yellow.png"`` \| ``"https://www.khanacademy.org/images/avatars/boggle-blue.png"`` \| ``"https://www.khanacademy.org/images/avatars/boggle-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/boggle-purple.png"`` \| ``"https://www.khanacademy.org/images/avatars/sneak-peak-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/sneak-peak-yellow.png"`` \| ``"https://www.khanacademy.org/images/avatars/sneak-peak-blue.png"`` \| ``"https://www.khanacademy.org/images/avatars/sneak-peak-purple.png"`` \| ``"https://www.khanacademy.org/images/avatars/stelly-blue.png"`` \| ``"https://www.khanacademy.org/images/avatars/stelly-yellow.png"`` \| ``"https://www.khanacademy.org/images/avatars/stelly-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/stelly-orange.png"`` \| ``"https://www.khanacademy.org/images/avatars/cacteye-purple.png"`` \| ``"https://www.khanacademy.org/images/avatars/cacteye-yellow.png"`` \| ``"https://www.khanacademy.org/images/avatars/cacteye-blue.png"`` \| ``"https://www.khanacademy.org/images/avatars/cacteye-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/leaf-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/leaf-blue.png"`` \| ``"https://www.khanacademy.org/images/avatars/leaf-grey.png"`` \| ``"https://www.khanacademy.org/images/avatars/leaf-red.png"`` \| ``"https://www.khanacademy.org/images/avatars/leaf-orange.png"`` \| ``"https://www.khanacademy.org/images/avatars/leaf-yellow.png"`` \| ``"https://www.khanacademy.org/images/avatars/leafers-seed.png"`` \| ``"https://www.khanacademy.org/images/avatars/leafers-seedling.png"`` \| ``"https://www.khanacademy.org/images/avatars/leafers-sapling.png"`` \| ``"https://www.khanacademy.org/images/avatars/leafers-tree.png"`` \| ``"https://www.khanacademy.org/images/avatars/leafers-ultimate.png"`` \| ``"https://www.khanacademy.org/images/avatars/piceratops-seed.png"`` \| ``"https://www.khanacademy.org/images/avatars/piceratops-seedling.png"`` \| ``"https://www.khanacademy.org/images/avatars/piceratops-sapling.png"`` \| ``"https://www.khanacademy.org/images/avatars/piceratops-tree.png"`` \| ``"https://www.khanacademy.org/images/avatars/piceratops-ultimate.png"`` \| ``"https://www.khanacademy.org/images/avatars/duskpin-seed.png"`` \| ``"https://www.khanacademy.org/images/avatars/duskpin-seedling.png"`` \| ``"https://www.khanacademy.org/images/avatars/duskpin-sapling.png"`` \| ``"https://www.khanacademy.org/images/avatars/duskpin-tree.png"`` \| ``"https://www.khanacademy.org/images/avatars/duskpin-ultimate.png"`` \| ``"https://www.khanacademy.org/images/avatars/primosaur-seed.png"`` \| ``"https://www.khanacademy.org/images/avatars/primosaur-seedling.png"`` \| ``"https://www.khanacademy.org/images/avatars/primosaur-sapling.png"`` \| ``"https://www.khanacademy.org/images/avatars/primosaur-tree.png"`` \| ``"https://www.khanacademy.org/images/avatars/primosaur-ultimate.png"`` \| ``"https://www.khanacademy.org/images/avatars/starky-seed.png"`` \| ``"https://www.khanacademy.org/images/avatars/starky-seedling.png"`` \| ``"https://www.khanacademy.org/images/avatars/starky-sapling.png"`` \| ``"https://www.khanacademy.org/images/avatars/starky-tree.png"`` \| ``"https://www.khanacademy.org/images/avatars/starky-ultimate.png"`` \| ``"https://www.khanacademy.org/images/avatars/aqualine-seed.png"`` \| ``"https://www.khanacademy.org/images/avatars/aqualine-seedling.png"`` \| ``"https://www.khanacademy.org/images/avatars/aqualine-sapling.png"`` \| ``"https://www.khanacademy.org/images/avatars/aqualine-tree.png"`` \| ``"https://www.khanacademy.org/images/avatars/aqualine-ultimate.png"`` \| ``"https://www.khanacademy.org/images/avatars/spunky-sam.png"`` \| ``"https://www.khanacademy.org/images/avatars/spunky-sam-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/spunky-sam-orange.png"`` \| ``"https://www.khanacademy.org/images/avatars/spunky-sam-red.png"`` \| ``"https://www.khanacademy.org/images/avatars/marcimus.png"`` \| ``"https://www.khanacademy.org/images/avatars/marcimus-orange.png"`` \| ``"https://www.khanacademy.org/images/avatars/marcimus-red.png"`` \| ``"https://www.khanacademy.org/images/avatars/marcimus-purple.png"`` \| ``"https://www.khanacademy.org/images/avatars/mr-pink.png"`` \| ``"https://www.khanacademy.org/images/avatars/mr-pink-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/mr-pink-orange.png"`` \| ``"https://www.khanacademy.org/images/avatars/robot_female_1.png"`` \| ``"https://www.khanacademy.org/images/avatars/robot_female_2.png"`` \| ``"https://www.khanacademy.org/images/avatars/robot_female_3.png"`` \| ``"https://www.khanacademy.org/images/avatars/robot_male_1.png"`` \| ``"https://www.khanacademy.org/images/avatars/robot_male_2.png"`` \| ``"https://www.khanacademy.org/images/avatars/robot_male_3.png"`` \| ``"https://www.khanacademy.org/images/avatars/orange-juice-squid.png"`` \| ``"https://www.khanacademy.org/images/avatars/purple-pi.png"`` \| ``"https://www.khanacademy.org/images/avatars/purple-pi-pink.png"`` \| ``"https://www.khanacademy.org/images/avatars/purple-pi-teal.png"`` \| ``"https://www.khanacademy.org/images/avatars/mr-pants.png"`` \| ``"https://www.khanacademy.org/images/avatars/mr-pants-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/mr-pants-orange.png"`` \| ``"https://www.khanacademy.org/images/avatars/mr-pants-pink.png"`` \| ``"https://www.khanacademy.org/images/avatars/mr-pants-purple.png"`` \| ``"https://www.khanacademy.org/images/avatars/old-spice-man.png"`` \| ``"https://www.khanacademy.org/images/avatars/old-spice-man-blue.png"`` \| ``"https://www.khanacademy.org/images/avatars/cs-winston.png"`` \| ``"https://www.khanacademy.org/images/avatars/cs-winston-baby.png"`` \| ``"https://www.khanacademy.org/images/avatars/cs-ohnoes.png"`` \| ``"https://www.khanacademy.org/images/avatars/cs-hopper-happy.png"`` \| ``"https://www.khanacademy.org/images/avatars/cs-hopper-jumping.png"`` \| ``"https://www.khanacademy.org/images/avatars/cs-hopper-cool.png"``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](api/classes/Client.md) |

#### Returns

`Promise`\<``"https://www.khanacademy.org/images/avatars/svg/blobby-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/blobby-yellow.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/blobby-blue.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/blobby-purple.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/area-52-yellow.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/area-52-blue.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/area-52-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/area-52-purple.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/eggleston-blue.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/eggleston-yellow.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/eggleston-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/eggleston-orange.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/scuttlebug-purple.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/scuttlebug-yellow.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/scuttlebug-blue.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/scuttlebug-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/boggle-yellow.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/boggle-blue.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/boggle-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/boggle-purple.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/sneak-peak-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/sneak-peak-yellow.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/sneak-peak-blue.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/sneak-peak-purple.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/stelly-blue.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/stelly-yellow.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/stelly-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/stelly-orange.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/cacteye-purple.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/cacteye-yellow.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/cacteye-blue.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/cacteye-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/leaf-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/leaf-blue.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/leaf-grey.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/leaf-red.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/leaf-orange.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/leaf-yellow.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/leafers-seed.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/leafers-seedling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/leafers-sapling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/leafers-tree.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/leafers-ultimate.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/piceratops-seed.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/piceratops-seedling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/piceratops-sapling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/piceratops-tree.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/piceratops-ultimate.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/duskpin-seed.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/duskpin-seedling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/duskpin-sapling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/duskpin-tree.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/duskpin-ultimate.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/primosaur-seed.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/primosaur-seedling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/primosaur-sapling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/primosaur-tree.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/primosaur-ultimate.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/starky-seed.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/starky-seedling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/starky-sapling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/starky-tree.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/starky-ultimate.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/aqualine-seed.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/aqualine-seedling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/aqualine-sapling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/aqualine-tree.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/aqualine-ultimate.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/spunky-sam.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/spunky-sam-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/spunky-sam-orange.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/spunky-sam-red.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/marcimus.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/marcimus-orange.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/marcimus-red.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/marcimus-purple.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/mr-pink.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/mr-pink-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/mr-pink-orange.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/robot_female_1.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/robot_female_2.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/robot_female_3.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/robot_male_1.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/robot_male_2.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/robot_male_3.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/orange-juice-squid.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/purple-pi.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/purple-pi-pink.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/purple-pi-teal.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/mr-pants.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/mr-pants-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/mr-pants-orange.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/mr-pants-pink.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/mr-pants-purple.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/old-spice-man.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/old-spice-man-blue.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/cs-winston.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/cs-winston-baby.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/cs-ohnoes.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/cs-hopper-happy.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/cs-hopper-jumping.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/cs-hopper-cool.svg"`` \| ``"https://www.khanacademy.org/images/avatars/blobby-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/blobby-yellow.png"`` \| ``"https://www.khanacademy.org/images/avatars/blobby-blue.png"`` \| ``"https://www.khanacademy.org/images/avatars/blobby-purple.png"`` \| ``"https://www.khanacademy.org/images/avatars/area-52-yellow.png"`` \| ``"https://www.khanacademy.org/images/avatars/area-52-blue.png"`` \| ``"https://www.khanacademy.org/images/avatars/area-52-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/area-52-purple.png"`` \| ``"https://www.khanacademy.org/images/avatars/eggleston-blue.png"`` \| ``"https://www.khanacademy.org/images/avatars/eggleston-yellow.png"`` \| ``"https://www.khanacademy.org/images/avatars/eggleston-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/eggleston-orange.png"`` \| ``"https://www.khanacademy.org/images/avatars/scuttlebug-purple.png"`` \| ``"https://www.khanacademy.org/images/avatars/scuttlebug-yellow.png"`` \| ``"https://www.khanacademy.org/images/avatars/scuttlebug-blue.png"`` \| ``"https://www.khanacademy.org/images/avatars/scuttlebug-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/boggle-yellow.png"`` \| ``"https://www.khanacademy.org/images/avatars/boggle-blue.png"`` \| ``"https://www.khanacademy.org/images/avatars/boggle-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/boggle-purple.png"`` \| ``"https://www.khanacademy.org/images/avatars/sneak-peak-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/sneak-peak-yellow.png"`` \| ``"https://www.khanacademy.org/images/avatars/sneak-peak-blue.png"`` \| ``"https://www.khanacademy.org/images/avatars/sneak-peak-purple.png"`` \| ``"https://www.khanacademy.org/images/avatars/stelly-blue.png"`` \| ``"https://www.khanacademy.org/images/avatars/stelly-yellow.png"`` \| ``"https://www.khanacademy.org/images/avatars/stelly-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/stelly-orange.png"`` \| ``"https://www.khanacademy.org/images/avatars/cacteye-purple.png"`` \| ``"https://www.khanacademy.org/images/avatars/cacteye-yellow.png"`` \| ``"https://www.khanacademy.org/images/avatars/cacteye-blue.png"`` \| ``"https://www.khanacademy.org/images/avatars/cacteye-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/leaf-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/leaf-blue.png"`` \| ``"https://www.khanacademy.org/images/avatars/leaf-grey.png"`` \| ``"https://www.khanacademy.org/images/avatars/leaf-red.png"`` \| ``"https://www.khanacademy.org/images/avatars/leaf-orange.png"`` \| ``"https://www.khanacademy.org/images/avatars/leaf-yellow.png"`` \| ``"https://www.khanacademy.org/images/avatars/leafers-seed.png"`` \| ``"https://www.khanacademy.org/images/avatars/leafers-seedling.png"`` \| ``"https://www.khanacademy.org/images/avatars/leafers-sapling.png"`` \| ``"https://www.khanacademy.org/images/avatars/leafers-tree.png"`` \| ``"https://www.khanacademy.org/images/avatars/leafers-ultimate.png"`` \| ``"https://www.khanacademy.org/images/avatars/piceratops-seed.png"`` \| ``"https://www.khanacademy.org/images/avatars/piceratops-seedling.png"`` \| ``"https://www.khanacademy.org/images/avatars/piceratops-sapling.png"`` \| ``"https://www.khanacademy.org/images/avatars/piceratops-tree.png"`` \| ``"https://www.khanacademy.org/images/avatars/piceratops-ultimate.png"`` \| ``"https://www.khanacademy.org/images/avatars/duskpin-seed.png"`` \| ``"https://www.khanacademy.org/images/avatars/duskpin-seedling.png"`` \| ``"https://www.khanacademy.org/images/avatars/duskpin-sapling.png"`` \| ``"https://www.khanacademy.org/images/avatars/duskpin-tree.png"`` \| ``"https://www.khanacademy.org/images/avatars/duskpin-ultimate.png"`` \| ``"https://www.khanacademy.org/images/avatars/primosaur-seed.png"`` \| ``"https://www.khanacademy.org/images/avatars/primosaur-seedling.png"`` \| ``"https://www.khanacademy.org/images/avatars/primosaur-sapling.png"`` \| ``"https://www.khanacademy.org/images/avatars/primosaur-tree.png"`` \| ``"https://www.khanacademy.org/images/avatars/primosaur-ultimate.png"`` \| ``"https://www.khanacademy.org/images/avatars/starky-seed.png"`` \| ``"https://www.khanacademy.org/images/avatars/starky-seedling.png"`` \| ``"https://www.khanacademy.org/images/avatars/starky-sapling.png"`` \| ``"https://www.khanacademy.org/images/avatars/starky-tree.png"`` \| ``"https://www.khanacademy.org/images/avatars/starky-ultimate.png"`` \| ``"https://www.khanacademy.org/images/avatars/aqualine-seed.png"`` \| ``"https://www.khanacademy.org/images/avatars/aqualine-seedling.png"`` \| ``"https://www.khanacademy.org/images/avatars/aqualine-sapling.png"`` \| ``"https://www.khanacademy.org/images/avatars/aqualine-tree.png"`` \| ``"https://www.khanacademy.org/images/avatars/aqualine-ultimate.png"`` \| ``"https://www.khanacademy.org/images/avatars/spunky-sam.png"`` \| ``"https://www.khanacademy.org/images/avatars/spunky-sam-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/spunky-sam-orange.png"`` \| ``"https://www.khanacademy.org/images/avatars/spunky-sam-red.png"`` \| ``"https://www.khanacademy.org/images/avatars/marcimus.png"`` \| ``"https://www.khanacademy.org/images/avatars/marcimus-orange.png"`` \| ``"https://www.khanacademy.org/images/avatars/marcimus-red.png"`` \| ``"https://www.khanacademy.org/images/avatars/marcimus-purple.png"`` \| ``"https://www.khanacademy.org/images/avatars/mr-pink.png"`` \| ``"https://www.khanacademy.org/images/avatars/mr-pink-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/mr-pink-orange.png"`` \| ``"https://www.khanacademy.org/images/avatars/robot_female_1.png"`` \| ``"https://www.khanacademy.org/images/avatars/robot_female_2.png"`` \| ``"https://www.khanacademy.org/images/avatars/robot_female_3.png"`` \| ``"https://www.khanacademy.org/images/avatars/robot_male_1.png"`` \| ``"https://www.khanacademy.org/images/avatars/robot_male_2.png"`` \| ``"https://www.khanacademy.org/images/avatars/robot_male_3.png"`` \| ``"https://www.khanacademy.org/images/avatars/orange-juice-squid.png"`` \| ``"https://www.khanacademy.org/images/avatars/purple-pi.png"`` \| ``"https://www.khanacademy.org/images/avatars/purple-pi-pink.png"`` \| ``"https://www.khanacademy.org/images/avatars/purple-pi-teal.png"`` \| ``"https://www.khanacademy.org/images/avatars/mr-pants.png"`` \| ``"https://www.khanacademy.org/images/avatars/mr-pants-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/mr-pants-orange.png"`` \| ``"https://www.khanacademy.org/images/avatars/mr-pants-pink.png"`` \| ``"https://www.khanacademy.org/images/avatars/mr-pants-purple.png"`` \| ``"https://www.khanacademy.org/images/avatars/old-spice-man.png"`` \| ``"https://www.khanacademy.org/images/avatars/old-spice-man-blue.png"`` \| ``"https://www.khanacademy.org/images/avatars/cs-winston.png"`` \| ``"https://www.khanacademy.org/images/avatars/cs-winston-baby.png"`` \| ``"https://www.khanacademy.org/images/avatars/cs-ohnoes.png"`` \| ``"https://www.khanacademy.org/images/avatars/cs-hopper-happy.png"`` \| ``"https://www.khanacademy.org/images/avatars/cs-hopper-jumping.png"`` \| ``"https://www.khanacademy.org/images/avatars/cs-hopper-cool.png"``\>

**`See`**

[!.getUserAvatar](api/classes/Client.md)

#### Defined in

[User.ts:292](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/User.ts#L292)

___

### getPrograms

▸ **getPrograms**(`client?`, `sort?`, `limit?`): `AsyncGenerator`\<[`Program`](api/classes/Program.md)[], [`User`](api/classes/User.md), `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](api/classes/Client.md) |
| `sort?` | [`ListProgramSortOrder`](api/enums/ListProgramSortOrder.md) |
| `limit?` | `number` |

#### Returns

`AsyncGenerator`\<[`Program`](api/classes/Program.md)[], [`User`](api/classes/User.md), `unknown`\>

**`See`**

[!Client.getUserPrograms](api/classes/Client.md)

#### Defined in

[User.ts:311](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/User.ts#L311)

___

### getStatistics

▸ **getStatistics**(`client?`): `Promise`\<[`User`](api/classes/User.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](api/classes/Client.md) |

#### Returns

`Promise`\<[`User`](api/classes/User.md)\>

**`See`**

[!Client.getUserStatistics](api/classes/Client.md)

#### Defined in

[User.ts:302](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/User.ts#L302)

___

### is

▸ **is**(`user`): `boolean`

Checks if two users are the same

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `user` | [`IUser`](api/interfaces/IUser.md) \| [`User`](api/classes/User.md) | The user to compare to |

#### Returns

`boolean`

#### Overrides

Wrapper.is

#### Defined in

[User.ts:351](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/User.ts#L351)

___

### isSchema

▸ **isSchema**(`schema`): `boolean`

Checks if the schema represents the same instance

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `RecursivePartial`\<[`UserSchema`](api/interfaces/UserSchema.md)\<[`AvatarSchema`](api/interfaces/AvatarSchema.md), [`ProfileSchema`](api/interfaces/ProfileSchema.md), [`ListProgramsSchema`](api/interfaces/ListProgramsSchema.md)\<`unknown`\>\>\> |

#### Returns

`boolean`

#### Inherited from

Wrapper.isSchema

#### Defined in

[lib/Wrapper.ts:88](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/Wrapper.ts#L88)

___

### transformSchema

▸ **transformSchema**(`schema`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `RecursivePartial`\<[`UserSchema`](api/interfaces/UserSchema.md)\<[`AvatarSchema`](api/interfaces/AvatarSchema.md), [`ProfileSchema`](api/interfaces/ProfileSchema.md), [`ListProgramsSchema`](api/interfaces/ListProgramsSchema.md)\<`unknown`\>\>\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `accessLevel` | `undefined` \| [`UserAccessLevel`](api/enums/UserAccessLevel.md) |
| `badgeCounts` | `undefined` \| `Record`\<`BadgeCategory`, `number`\> |
| `bio` | `undefined` \| `string` |
| `canAccessDistrictsHomepage` | `undefined` \| `boolean` |
| `canHellban` | `undefined` \| `boolean` |
| `canMessageUsers` | `undefined` \| `boolean` |
| `canModifyCoaches` | `undefined` \| `boolean` |
| `child` | `undefined` \| `boolean` |
| `completedVideos` | `undefined` \| `number` |
| `creator` | `undefined` \| `boolean` |
| `curator` | `undefined` \| `boolean` |
| `developer` | `undefined` \| `boolean` |
| `email` | `undefined` \| `string` |
| `emails` | `undefined` \| `string`[] |
| `formalTeacher` | `undefined` \| `boolean` |
| `googleID` | `undefined` \| ``null`` \| `string` |
| `hasAccessToAIGuideDev` | `undefined` \| `boolean` |
| `hasAccessToAIGuideTeacher` | `undefined` \| `boolean` |
| `hasChildren` | `undefined` \| `boolean` |
| `hasClasses` | `undefined` \| `boolean` |
| `hasCoach` | `undefined` \| `boolean` |
| `hasStudents` | `undefined` \| `boolean` |
| `joined` | `undefined` \| `Date` |
| `kaid` | `undefined` \| ``null`` \| \`kaid\_$\{number}\` |
| `key` | `undefined` \| `string` |
| `midsignupPhantom` | `undefined` \| `boolean` |
| `moderator` | `undefined` \| `boolean` |
| `newNotifications` | `undefined` \| `number` |
| `nickname` | `undefined` \| `string` |
| `orphan` | `undefined` \| `boolean` |
| `parent` | `undefined` \| `boolean` |
| `phantom` | `undefined` \| `boolean` |
| `points` | `undefined` \| `number` |
| `publisher` | `undefined` \| `boolean` |
| `qualarooID` | `undefined` \| ``null`` \| `string` |
| `self` | `undefined` \| `boolean` |
| `teacher` | `undefined` \| `boolean` |
| `username` | `undefined` \| ``null`` \| `string` |

#### Overrides

Wrapper.transformSchema

#### Defined in

[User.ts:209](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/User.ts#L209)

___

### fromIdentifier

▸ `Static` **fromIdentifier**(`identifier`): [`User`](api/classes/User.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | `string` |

#### Returns

[`User`](api/classes/User.md)

#### Defined in

[User.ts:190](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/User.ts#L190)

___

### fromSchema

▸ `Static` **fromSchema**(`schema`): [`User`](api/classes/User.md)

Creates a new user from the given from a user schema

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `RecursivePartial`\<[`UserSchema`](api/interfaces/UserSchema.md)\<[`AvatarSchema`](api/interfaces/AvatarSchema.md), [`ProfileSchema`](api/interfaces/ProfileSchema.md), [`ListProgramsSchema`](api/interfaces/ListProgramsSchema.md)\<`unknown`\>\>\> |

#### Returns

[`User`](api/classes/User.md)

**`Description`**

Note that `Client.getUser` will automatically call this method. This is only useful if you need to use the low-level API.

**`See`**

[!Client.getUser](api/classes/Client.md)

#### Defined in

[User.ts:182](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/User.ts#L182)
