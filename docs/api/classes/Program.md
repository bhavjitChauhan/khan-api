# Class: Program

## Hierarchy

- `default`\<[`ProgramSchema`](api/interfaces/ProgramSchema.md)\<[`UserSchema`](api/interfaces/UserSchema.md)\>, [`IProgram`](api/interfaces/IProgram.md)\>

  ↳ **`Program`**

## Implements

- [`IProgram`](api/interfaces/IProgram.md)

## Constructors

### constructor

• **new Program**(`data?`)

Creates a new class instance

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IProgram`](api/interfaces/IProgram.md) |

#### Inherited from

Wrapper\<ProgramSchema\<UserSchema\>, IProgram\>.constructor

#### Defined in

[lib/Wrapper.ts:36](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/Wrapper.ts#L36)

• **new Program**(`client`, `data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](api/classes/Client.md) |
| `data?` | [`IProgram`](api/interfaces/IProgram.md) |

#### Inherited from

Wrapper\<ProgramSchema\<UserSchema\>, IProgram\>.constructor

#### Defined in

[lib/Wrapper.ts:37](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/Wrapper.ts#L37)

## Properties

### author

• `Optional` `Readonly` **author**: [`User`](api/classes/User.md)

The author of the program.

#### Implementation of

[IProgram](api/interfaces/IProgram.md).[author](api/interfaces/IProgram.md#author)

#### Defined in

[Program.ts:78](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L78)

___

### client

• `Optional` **client**: [`Client`](api/classes/Client.md)

The client that this base was fetched with.

#### Inherited from

Wrapper.client

#### Defined in

[lib/Wrapper.ts:15](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/Wrapper.ts#L15)

___

### code

• `Optional` `Readonly` **code**: `string`

The code of the program.

#### Implementation of

[IProgram](api/interfaces/IProgram.md).[code](api/interfaces/IProgram.md#code)

#### Defined in

[Program.ts:118](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L118)

___

### created

• `Optional` `Readonly` **created**: `Date`

The date the program was created.

#### Implementation of

[IProgram](api/interfaces/IProgram.md).[created](api/interfaces/IProgram.md#created)

#### Defined in

[Program.ts:82](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L82)

___

### deleted

• `Optional` `Readonly` **deleted**: `boolean`

Whether the program has been deleted.

#### Implementation of

[IProgram](api/interfaces/IProgram.md).[deleted](api/interfaces/IProgram.md#deleted)

#### Defined in

[Program.ts:147](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L147)

___

### description

• `Optional` `Readonly` **description**: ``null`` \| `string`

The description of the program. Set to `null` if the description is empty string.

#### Implementation of

[IProgram](api/interfaces/IProgram.md).[description](api/interfaces/IProgram.md#description)

#### Defined in

[Program.ts:143](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L143)

___

### height

• `Optional` `Readonly` **height**: `number`

The height of the program in pixels.

**`Description`**

Constrained between 400 and 600. May be any value in between.

#### Implementation of

[IProgram](api/interfaces/IProgram.md).[height](api/interfaces/IProgram.md#height)

#### Defined in

[Program.ts:103](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L103)

___

### helpRequests

• `Optional` `Readonly` **helpRequests**: [`Question`](api/classes/Question.md)[]

#### Implementation of

[IProgram](api/interfaces/IProgram.md).[helpRequests](api/interfaces/IProgram.md#helprequests)

#### Defined in

[Program.ts:164](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L164)

___

### hidden

• `Optional` `Readonly` **hidden**: `boolean`

Whether the program is hidden from the hotlist.

#### Implementation of

[IProgram](api/interfaces/IProgram.md).[hidden](api/interfaces/IProgram.md#hidden)

#### Defined in

[Program.ts:122](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L122)

___

### id

• `Optional` `Readonly` **id**: `number`

The ID of the program.

#### Implementation of

[IProgram](api/interfaces/IProgram.md).[id](api/interfaces/IProgram.md#id)

#### Defined in

[Program.ts:70](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L70)

___

### key

• `Optional` `Readonly` **key**: \`ag5zfmtoYW4tYWNhZGVteXI$\{string}CxIKU2NyYXRjaHBhZB$\{string}$\{string}\`

#### Implementation of

[IProgram](api/interfaces/IProgram.md).[key](api/interfaces/IProgram.md#key)

#### Defined in

[Program.ts:132](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L132)

___

### origin

• `Optional` `Readonly` **origin**: ``null`` \| [`Program`](api/classes/Program.md)

The original program that this program is a spin-off of.

#### Implementation of

[IProgram](api/interfaces/IProgram.md).[origin](api/interfaces/IProgram.md#origin)

#### Defined in

[Program.ts:131](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L131)

___

### questions

• `Optional` `Readonly` **questions**: [`Question`](api/classes/Question.md)[]

#### Implementation of

[IProgram](api/interfaces/IProgram.md).[questions](api/interfaces/IProgram.md#questions)

#### Defined in

[Program.ts:163](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L163)

___

### rawData

• `Optional` **rawData**: `RecursivePartial`\<[`ProgramSchema`](api/interfaces/ProgramSchema.md)\<[`UserSchema`](api/interfaces/UserSchema.md)\<[`AvatarSchema`](api/interfaces/AvatarSchema.md), [`ProfileSchema`](api/interfaces/ProfileSchema.md), [`ListProgramsSchema`](api/interfaces/ListProgramsSchema.md)\<`unknown`\>\>\>\>

The raw base schema data

**`Remarks`**

Only set if the base was created from a user schema.

#### Inherited from

Wrapper.rawData

#### Defined in

[lib/Wrapper.ts:22](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/Wrapper.ts#L22)

___

### selfFlagged

• `Optional` `Readonly` **selfFlagged**: `boolean`

Whether the program has been flagged by the client's authenticated user.

**`See`**

[client](api/classes/User.md#client)

#### Implementation of

[IProgram](api/interfaces/IProgram.md).[selfFlagged](api/interfaces/IProgram.md#selfflagged)

#### Defined in

[Program.ts:154](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L154)

___

### selfVoted

• `Optional` `Readonly` **selfVoted**: `boolean`

Whether the program has been voted by the client's authenticated user.

**`See`**

[client](api/classes/User.md#client)

#### Implementation of

[IProgram](api/interfaces/IProgram.md).[selfVoted](api/interfaces/IProgram.md#selfvoted)

#### Defined in

[Program.ts:160](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L160)

___

### spinOffCount

• `Optional` `Readonly` **spinOffCount**: `number`

The number of spin-offs the program has.

#### Implementation of

[IProgram](api/interfaces/IProgram.md).[spinOffCount](api/interfaces/IProgram.md#spinoffcount)

#### Defined in

[Program.ts:114](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L114)

___

### thumbnailID

• `Optional` `Readonly` **thumbnailID**: `number`

The ID of the latest thumbnail image of the program.

**`Description`**

Previous thumbnails are not guaranteed to be available.

#### Implementation of

[IProgram](api/interfaces/IProgram.md).[thumbnailID](api/interfaces/IProgram.md#thumbnailid)

#### Defined in

[Program.ts:139](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L139)

___

### tipsAndThanks

• `Optional` `Readonly` **tipsAndThanks**: [`TipsAndThanks`](api/classes/TipsAndThanks.md)[]

#### Implementation of

[IProgram](api/interfaces/IProgram.md).[tipsAndThanks](api/interfaces/IProgram.md#tipsandthanks)

#### Defined in

[Program.ts:162](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L162)

___

### title

• `Optional` `Readonly` **title**: `string`

The title of the program.

#### Implementation of

[IProgram](api/interfaces/IProgram.md).[title](api/interfaces/IProgram.md#title)

#### Defined in

[Program.ts:74](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L74)

___

### type

• `Optional` `Readonly` **type**: [`ProgramType`](api/enums/ProgramType.md)

The type of program.

#### Implementation of

[IProgram](api/interfaces/IProgram.md).[type](api/interfaces/IProgram.md#type)

#### Defined in

[Program.ts:126](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L126)

___

### updated

• `Optional` `Readonly` **updated**: ``null`` \| `Date`

The date the program was last updated.

**`Description`**

Set to `null` if the program has never been updated.

#### Implementation of

[IProgram](api/interfaces/IProgram.md).[updated](api/interfaces/IProgram.md#updated)

#### Defined in

[Program.ts:89](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L89)

___

### votes

• `Optional` `Readonly` **votes**: `number`

The number of votes the program has received.

**`Description`**

Note that a program has 1 vote on creation.

#### Implementation of

[IProgram](api/interfaces/IProgram.md).[votes](api/interfaces/IProgram.md#votes)

#### Defined in

[Program.ts:110](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L110)

___

### width

• `Optional` `Readonly` **width**: `number`

The height of the program in pixels.

**`Description`**

Constrained between 400 and 600. May be any value in between.

#### Implementation of

[IProgram](api/interfaces/IProgram.md).[width](api/interfaces/IProgram.md#width)

#### Defined in

[Program.ts:96](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L96)

___

### Type

▪ `Static` `Readonly` **Type**: typeof [`ProgramType`](api/enums/ProgramType.md) = `ProgramType`

Aliases for the program types.

**`Raw`**

types/schema!ProgramRevisionSchema.editorType

#### Defined in

[Program.ts:65](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L65)

## Accessors

### lines

• `get` **lines**(): ``null`` \| `number`

Number of lines of code in the program.

#### Returns

``null`` \| `number`

#### Defined in

[Program.ts:173](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L173)

___

### shortUrl

• `get` **shortUrl**(): ``null`` \| `string`

Short URL of the program.

#### Returns

``null`` \| `string`

#### Defined in

[Program.ts:192](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L192)

___

### spinoff

• `get` **spinoff**(): ``null`` \| `boolean`

#### Returns

``null`` \| `boolean`

#### Defined in

[Program.ts:166](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L166)

___

### thumbnailUrl

• `get` **thumbnailUrl**(): ``null`` \| `string`

Thumbnail image URL of the program.

#### Returns

``null`` \| `string`

**`Description`**

To get the latest thumbnail image, use 'latest' as the thumbnail ID instead.

#### Defined in

[Program.ts:203](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L203)

___

### url

• `get` **url**(): ``null`` \| `string`

URL of the program.

#### Returns

``null`` \| `string`

#### Defined in

[Program.ts:181](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L181)

## Methods

### #resolveIdentifier

▸ `Private` **#resolveIdentifier**(): `number` \| \`ag5zfmtoYW4tYWNhZGVteXI$\{string}CxIKU2NyYXRjaHBhZB$\{string}$\{string}\`

#### Returns

`number` \| \`ag5zfmtoYW4tYWNhZGVteXI$\{string}CxIKU2NyYXRjaHBhZB$\{string}$\{string}\`

#### Defined in

[Program.ts:231](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L231)

___

### copy

▸ **copy**(`data`): [`Program`](api/classes/Program.md)

Updates data into the class

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`IProgram`](api/interfaces/IProgram.md) | The data to copy from |

#### Returns

[`Program`](api/classes/Program.md)

The class instance

#### Inherited from

Wrapper.copy

#### Defined in

[lib/Wrapper.ts:53](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/Wrapper.ts#L53)

___

### copyFromSchema

▸ **copyFromSchema**(`schema`): [`Program`](api/classes/Program.md)

Updates data from a schema into the instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `schema` | `RecursivePartial`\<[`ProgramSchema`](api/interfaces/ProgramSchema.md)\<[`UserSchema`](api/interfaces/UserSchema.md)\<[`AvatarSchema`](api/interfaces/AvatarSchema.md), [`ProfileSchema`](api/interfaces/ProfileSchema.md), [`ListProgramsSchema`](api/interfaces/ListProgramsSchema.md)\<`unknown`\>\>\>\> | The schema to copy from |

#### Returns

[`Program`](api/classes/Program.md)

The class instance

#### Inherited from

Wrapper.copyFromSchema

#### Defined in

[lib/Wrapper.ts:65](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/Wrapper.ts#L65)

___

### get

▸ **get**(`client?`): `Promise`\<[`Program`](api/classes/Program.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](api/classes/Client.md) |

#### Returns

`Promise`\<[`Program`](api/classes/Program.md)\>

#### Overrides

Wrapper.get

#### Defined in

[Program.ts:325](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L325)

___

### getAllHelpRequests

▸ **getAllHelpRequests**(`client?`, `sort?`): `Promise`\<[`Program`](api/classes/Program.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](api/classes/Client.md) |
| `sort?` | [`FeedbackSort`](api/enums/FeedbackSort.md) |

#### Returns

`Promise`\<[`Program`](api/classes/Program.md)\>

#### Defined in

[Program.ts:405](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L405)

___

### getAllQuestions

▸ **getAllQuestions**(`client?`, `sort?`): `Promise`\<[`Program`](api/classes/Program.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](api/classes/Client.md) |
| `sort?` | [`FeedbackSort`](api/enums/FeedbackSort.md) |

#### Returns

`Promise`\<[`Program`](api/classes/Program.md)\>

#### Defined in

[Program.ts:377](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L377)

___

### getAllTipsAndThanks

▸ **getAllTipsAndThanks**(`client?`, `sort?`): `Promise`\<[`Program`](api/classes/Program.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](api/classes/Client.md) |
| `sort?` | [`FeedbackSort`](api/enums/FeedbackSort.md) |

#### Returns

`Promise`\<[`Program`](api/classes/Program.md)\>

#### Defined in

[Program.ts:349](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L349)

___

### getHelpRequests

▸ **getHelpRequests**(`client?`, `sort?`): `AsyncGenerator`\<[`Question`](api/classes/Question.md)[], [`Program`](api/classes/Program.md), `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](api/classes/Client.md) |
| `sort?` | [`FeedbackSort`](api/enums/FeedbackSort.md) |

#### Returns

`AsyncGenerator`\<[`Question`](api/classes/Question.md)[], [`Program`](api/classes/Program.md), `unknown`\>

#### Defined in

[Program.ts:389](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L389)

___

### getQuestions

▸ **getQuestions**(`client?`, `sort?`): `AsyncGenerator`\<[`Question`](api/classes/Question.md)[], [`Program`](api/classes/Program.md), `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](api/classes/Client.md) |
| `sort?` | [`FeedbackSort`](api/enums/FeedbackSort.md) |

#### Returns

`AsyncGenerator`\<[`Question`](api/classes/Question.md)[], [`Program`](api/classes/Program.md), `unknown`\>

#### Defined in

[Program.ts:361](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L361)

___

### getTipsAndThanks

▸ **getTipsAndThanks**(`client?`, `sort?`): `AsyncGenerator`\<[`TipsAndThanks`](api/classes/TipsAndThanks.md)[], [`Program`](api/classes/Program.md), `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](api/classes/Client.md) |
| `sort?` | [`FeedbackSort`](api/enums/FeedbackSort.md) |

#### Returns

`AsyncGenerator`\<[`TipsAndThanks`](api/classes/TipsAndThanks.md)[], [`Program`](api/classes/Program.md), `unknown`\>

#### Defined in

[Program.ts:333](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L333)

___

### is

▸ **is**(`program`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | [`IProgram`](api/interfaces/IProgram.md) |

#### Returns

`boolean`

#### Overrides

Wrapper.is

#### Defined in

[Program.ts:417](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L417)

___

### isSchema

▸ **isSchema**(`schema`): `boolean`

Checks if the schema represents the same instance

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `RecursivePartial`\<[`ProgramSchema`](api/interfaces/ProgramSchema.md)\<[`UserSchema`](api/interfaces/UserSchema.md)\<[`AvatarSchema`](api/interfaces/AvatarSchema.md), [`ProfileSchema`](api/interfaces/ProfileSchema.md), [`ListProgramsSchema`](api/interfaces/ListProgramsSchema.md)\<`unknown`\>\>\>\> |

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
| `schema` | `RecursivePartial`\<[`ProgramSchema`](api/interfaces/ProgramSchema.md)\<[`UserSchema`](api/interfaces/UserSchema.md)\<[`AvatarSchema`](api/interfaces/AvatarSchema.md), [`ProfileSchema`](api/interfaces/ProfileSchema.md), [`ListProgramsSchema`](api/interfaces/ListProgramsSchema.md)\<`unknown`\>\>\>\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `author` | `undefined` \| [`User`](api/classes/User.md) |
| `code` | `undefined` \| `string` |
| `created` | `undefined` \| `Date` |
| `deleted` | `undefined` \| `boolean` |
| `description` | `undefined` \| ``null`` \| `string` |
| `height` | `undefined` \| `number` |
| `hidden` | `undefined` \| `boolean` |
| `id` | `undefined` \| `number` |
| `key` | `undefined` \| \`ag5zfmtoYW4tYWNhZGVteXI$\{string}CxIKU2NyYXRjaHBhZB$\{string}$\{string}\` |
| `origin` | `undefined` \| ``null`` \| [`Program`](api/classes/Program.md) |
| `selfFlagged` | `undefined` \| `boolean` |
| `selfVoted` | `undefined` \| `boolean` |
| `spinOffCount` | `undefined` \| `number` |
| `thumbnailID` | `undefined` \| `number` |
| `title` | `undefined` \| `string` |
| `type` | [`ProgramType`](api/enums/ProgramType.md) |
| `updated` | `undefined` \| ``null`` \| `Date` |
| `votes` | `undefined` \| `number` |
| `width` | `undefined` \| `number` |

#### Overrides

Wrapper.transformSchema

#### Defined in

[Program.ts:238](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L238)

___

### fromIdentifier

▸ `Static` **fromIdentifier**(`identifier`): [`Program`](api/classes/Program.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | [`ProgramID`](api/README.md#programid) \| \`http$\{string}://$\{string}khanacademy.$\{string}/$\{string}/$\{string}/$\{number}\` \| \`ag5zfmtoYW4tYWNhZGVteXI$\{string}CxIKU2NyYXRjaHBhZB$\{string}$\{string}\` |

#### Returns

[`Program`](api/classes/Program.md)

#### Defined in

[Program.ts:219](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L219)

___

### fromSchema

▸ `Static` **fromSchema**(`schema`): [`Program`](api/classes/Program.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `RecursivePartial`\<[`ProgramSchema`](api/interfaces/ProgramSchema.md)\<[`UserSchema`](api/interfaces/UserSchema.md)\<[`AvatarSchema`](api/interfaces/AvatarSchema.md), [`ProfileSchema`](api/interfaces/ProfileSchema.md), [`ListProgramsSchema`](api/interfaces/ListProgramsSchema.md)\<`unknown`\>\>\>\> |

#### Returns

[`Program`](api/classes/Program.md)

#### Defined in

[Program.ts:211](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L211)
