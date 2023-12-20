# Class: Program

## Hierarchy

- `default`\<[`ProgramSchema`](../interfaces/ProgramSchema.md)\<[`UserSchema`](../interfaces/UserSchema.md)\>, [`IProgram`](../interfaces/IProgram.md)\>

  ↳ **`Program`**

## Implements

- [`IProgram`](../interfaces/IProgram.md)

## Constructors

### constructor

• **new Program**(`data?`)

Creates a new class instance

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IProgram`](../interfaces/IProgram.md) |

#### Inherited from

Wrapper\<ProgramSchema\<UserSchema\>, IProgram\>.constructor

#### Defined in

[lib/Wrapper.ts:36](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/Wrapper.ts#L36)

• **new Program**(`client`, `data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `data?` | [`IProgram`](../interfaces/IProgram.md) |

#### Inherited from

Wrapper\<ProgramSchema\<UserSchema\>, IProgram\>.constructor

#### Defined in

[lib/Wrapper.ts:37](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/Wrapper.ts#L37)

## Properties

### author

• `Optional` `Readonly` **author**: [`User`](User.md)

The author of the program.

#### Implementation of

[IProgram](../interfaces/IProgram.md).[author](../interfaces/IProgram.md#author)

#### Defined in

[Program.ts:78](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L78)

___

### client

• `Optional` **client**: [`Client`](Client.md)

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

[IProgram](../interfaces/IProgram.md).[code](../interfaces/IProgram.md#code)

#### Defined in

[Program.ts:118](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L118)

___

### created

• `Optional` `Readonly` **created**: `Date`

The date the program was created.

#### Implementation of

[IProgram](../interfaces/IProgram.md).[created](../interfaces/IProgram.md#created)

#### Defined in

[Program.ts:82](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L82)

___

### deleted

• `Optional` `Readonly` **deleted**: `boolean`

Whether the program has been deleted.

#### Implementation of

[IProgram](../interfaces/IProgram.md).[deleted](../interfaces/IProgram.md#deleted)

#### Defined in

[Program.ts:147](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L147)

___

### description

• `Optional` `Readonly` **description**: ``null`` \| `string`

The description of the program. Set to `null` if the description is empty string.

#### Implementation of

[IProgram](../interfaces/IProgram.md).[description](../interfaces/IProgram.md#description)

#### Defined in

[Program.ts:143](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L143)

___

### height

• `Optional` `Readonly` **height**: `number`

The height of the program in pixels.

**`Description`**

Constrained between 400 and 600. May be any value in between.

#### Implementation of

[IProgram](../interfaces/IProgram.md).[height](../interfaces/IProgram.md#height)

#### Defined in

[Program.ts:103](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L103)

___

### helpRequests

• `Optional` `Readonly` **helpRequests**: [`Question`](Question.md)[]

#### Implementation of

[IProgram](../interfaces/IProgram.md).[helpRequests](../interfaces/IProgram.md#helprequests)

#### Defined in

[Program.ts:164](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L164)

___

### hidden

• `Optional` `Readonly` **hidden**: `boolean`

Whether the program is hidden from the hotlist.

#### Implementation of

[IProgram](../interfaces/IProgram.md).[hidden](../interfaces/IProgram.md#hidden)

#### Defined in

[Program.ts:122](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L122)

___

### id

• `Optional` `Readonly` **id**: `number`

The ID of the program.

#### Implementation of

[IProgram](../interfaces/IProgram.md).[id](../interfaces/IProgram.md#id)

#### Defined in

[Program.ts:70](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L70)

___

### key

• `Optional` `Readonly` **key**: \`ag5zfmtoYW4tYWNhZGVteXI$\{string}CxIKU2NyYXRjaHBhZB$\{string}$\{string}\`

#### Implementation of

[IProgram](../interfaces/IProgram.md).[key](../interfaces/IProgram.md#key)

#### Defined in

[Program.ts:132](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L132)

___

### origin

• `Optional` `Readonly` **origin**: ``null`` \| [`Program`](Program.md)

The original program that this program is a spin-off of.

#### Implementation of

[IProgram](../interfaces/IProgram.md).[origin](../interfaces/IProgram.md#origin)

#### Defined in

[Program.ts:131](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L131)

___

### questions

• `Optional` `Readonly` **questions**: [`Question`](Question.md)[]

#### Implementation of

[IProgram](../interfaces/IProgram.md).[questions](../interfaces/IProgram.md#questions)

#### Defined in

[Program.ts:163](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L163)

___

### rawData

• `Optional` **rawData**: `RecursivePartial`\<[`ProgramSchema`](../interfaces/ProgramSchema.md)\<[`UserSchema`](../interfaces/UserSchema.md)\<[`AvatarSchema`](../interfaces/AvatarSchema.md), [`ProfileSchema`](../interfaces/ProfileSchema.md), [`ListProgramsSchema`](../interfaces/ListProgramsSchema.md)\<`unknown`\>\>\>\>

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

[client](User.md#client)

#### Implementation of

[IProgram](../interfaces/IProgram.md).[selfFlagged](../interfaces/IProgram.md#selfflagged)

#### Defined in

[Program.ts:154](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L154)

___

### selfVoted

• `Optional` `Readonly` **selfVoted**: `boolean`

Whether the program has been voted by the client's authenticated user.

**`See`**

[client](User.md#client)

#### Implementation of

[IProgram](../interfaces/IProgram.md).[selfVoted](../interfaces/IProgram.md#selfvoted)

#### Defined in

[Program.ts:160](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L160)

___

### spinOffCount

• `Optional` `Readonly` **spinOffCount**: `number`

The number of spin-offs the program has.

#### Implementation of

[IProgram](../interfaces/IProgram.md).[spinOffCount](../interfaces/IProgram.md#spinoffcount)

#### Defined in

[Program.ts:114](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L114)

___

### thumbnailID

• `Optional` `Readonly` **thumbnailID**: `number`

The ID of the latest thumbnail image of the program.

**`Description`**

Previous thumbnails are not guaranteed to be available.

#### Implementation of

[IProgram](../interfaces/IProgram.md).[thumbnailID](../interfaces/IProgram.md#thumbnailid)

#### Defined in

[Program.ts:139](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L139)

___

### tipsAndThanks

• `Optional` `Readonly` **tipsAndThanks**: [`TipsAndThanks`](TipsAndThanks.md)[]

#### Implementation of

[IProgram](../interfaces/IProgram.md).[tipsAndThanks](../interfaces/IProgram.md#tipsandthanks)

#### Defined in

[Program.ts:162](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L162)

___

### title

• `Optional` `Readonly` **title**: `string`

The title of the program.

#### Implementation of

[IProgram](../interfaces/IProgram.md).[title](../interfaces/IProgram.md#title)

#### Defined in

[Program.ts:74](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L74)

___

### type

• `Optional` `Readonly` **type**: [`ProgramType`](../enums/ProgramType.md)

The type of program.

#### Implementation of

[IProgram](../interfaces/IProgram.md).[type](../interfaces/IProgram.md#type)

#### Defined in

[Program.ts:126](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L126)

___

### updated

• `Optional` `Readonly` **updated**: ``null`` \| `Date`

The date the program was last updated.

**`Description`**

Set to `null` if the program has never been updated.

#### Implementation of

[IProgram](../interfaces/IProgram.md).[updated](../interfaces/IProgram.md#updated)

#### Defined in

[Program.ts:89](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L89)

___

### votes

• `Optional` `Readonly` **votes**: `number`

The number of votes the program has received.

**`Description`**

Note that a program has 1 vote on creation.

#### Implementation of

[IProgram](../interfaces/IProgram.md).[votes](../interfaces/IProgram.md#votes)

#### Defined in

[Program.ts:110](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L110)

___

### width

• `Optional` `Readonly` **width**: `number`

The height of the program in pixels.

**`Description`**

Constrained between 400 and 600. May be any value in between.

#### Implementation of

[IProgram](../interfaces/IProgram.md).[width](../interfaces/IProgram.md#width)

#### Defined in

[Program.ts:96](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L96)

___

### Type

▪ `Static` `Readonly` **Type**: typeof [`ProgramType`](../enums/ProgramType.md) = `ProgramType`

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

▸ **copy**(`data`): [`Program`](Program.md)

Updates data into the class

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`IProgram`](../interfaces/IProgram.md) | The data to copy from |

#### Returns

[`Program`](Program.md)

The class instance

#### Inherited from

Wrapper.copy

#### Defined in

[lib/Wrapper.ts:53](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/Wrapper.ts#L53)

___

### copyFromSchema

▸ **copyFromSchema**(`schema`): [`Program`](Program.md)

Updates data from a schema into the instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `schema` | `RecursivePartial`\<[`ProgramSchema`](../interfaces/ProgramSchema.md)\<[`UserSchema`](../interfaces/UserSchema.md)\<[`AvatarSchema`](../interfaces/AvatarSchema.md), [`ProfileSchema`](../interfaces/ProfileSchema.md), [`ListProgramsSchema`](../interfaces/ListProgramsSchema.md)\<`unknown`\>\>\>\> | The schema to copy from |

#### Returns

[`Program`](Program.md)

The class instance

#### Inherited from

Wrapper.copyFromSchema

#### Defined in

[lib/Wrapper.ts:65](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/Wrapper.ts#L65)

___

### get

▸ **get**(`client?`): `Promise`\<[`Program`](Program.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |

#### Returns

`Promise`\<[`Program`](Program.md)\>

#### Overrides

Wrapper.get

#### Defined in

[Program.ts:325](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L325)

___

### getAllHelpRequests

▸ **getAllHelpRequests**(`client?`, `sort?`): `Promise`\<[`Program`](Program.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `sort?` | [`FeedbackSort`](../enums/FeedbackSort.md) |

#### Returns

`Promise`\<[`Program`](Program.md)\>

#### Defined in

[Program.ts:405](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L405)

___

### getAllQuestions

▸ **getAllQuestions**(`client?`, `sort?`): `Promise`\<[`Program`](Program.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `sort?` | [`FeedbackSort`](../enums/FeedbackSort.md) |

#### Returns

`Promise`\<[`Program`](Program.md)\>

#### Defined in

[Program.ts:377](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L377)

___

### getAllTipsAndThanks

▸ **getAllTipsAndThanks**(`client?`, `sort?`): `Promise`\<[`Program`](Program.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `sort?` | [`FeedbackSort`](../enums/FeedbackSort.md) |

#### Returns

`Promise`\<[`Program`](Program.md)\>

#### Defined in

[Program.ts:349](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L349)

___

### getHelpRequests

▸ **getHelpRequests**(`client?`, `sort?`): `AsyncGenerator`\<[`Question`](Question.md)[], [`Program`](Program.md), `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `sort?` | [`FeedbackSort`](../enums/FeedbackSort.md) |

#### Returns

`AsyncGenerator`\<[`Question`](Question.md)[], [`Program`](Program.md), `unknown`\>

#### Defined in

[Program.ts:389](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L389)

___

### getQuestions

▸ **getQuestions**(`client?`, `sort?`): `AsyncGenerator`\<[`Question`](Question.md)[], [`Program`](Program.md), `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `sort?` | [`FeedbackSort`](../enums/FeedbackSort.md) |

#### Returns

`AsyncGenerator`\<[`Question`](Question.md)[], [`Program`](Program.md), `unknown`\>

#### Defined in

[Program.ts:361](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L361)

___

### getTipsAndThanks

▸ **getTipsAndThanks**(`client?`, `sort?`): `AsyncGenerator`\<[`TipsAndThanks`](TipsAndThanks.md)[], [`Program`](Program.md), `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `sort?` | [`FeedbackSort`](../enums/FeedbackSort.md) |

#### Returns

`AsyncGenerator`\<[`TipsAndThanks`](TipsAndThanks.md)[], [`Program`](Program.md), `unknown`\>

#### Defined in

[Program.ts:333](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L333)

___

### is

▸ **is**(`program`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | [`IProgram`](../interfaces/IProgram.md) |

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
| `schema` | `RecursivePartial`\<[`ProgramSchema`](../interfaces/ProgramSchema.md)\<[`UserSchema`](../interfaces/UserSchema.md)\<[`AvatarSchema`](../interfaces/AvatarSchema.md), [`ProfileSchema`](../interfaces/ProfileSchema.md), [`ListProgramsSchema`](../interfaces/ListProgramsSchema.md)\<`unknown`\>\>\>\> |

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
| `schema` | `RecursivePartial`\<[`ProgramSchema`](../interfaces/ProgramSchema.md)\<[`UserSchema`](../interfaces/UserSchema.md)\<[`AvatarSchema`](../interfaces/AvatarSchema.md), [`ProfileSchema`](../interfaces/ProfileSchema.md), [`ListProgramsSchema`](../interfaces/ListProgramsSchema.md)\<`unknown`\>\>\>\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `author` | `undefined` \| [`User`](User.md) |
| `code` | `undefined` \| `string` |
| `created` | `undefined` \| `Date` |
| `deleted` | `undefined` \| `boolean` |
| `description` | `undefined` \| ``null`` \| `string` |
| `height` | `undefined` \| `number` |
| `hidden` | `undefined` \| `boolean` |
| `id` | `undefined` \| `number` |
| `key` | `undefined` \| \`ag5zfmtoYW4tYWNhZGVteXI$\{string}CxIKU2NyYXRjaHBhZB$\{string}$\{string}\` |
| `origin` | `undefined` \| ``null`` \| [`Program`](Program.md) |
| `selfFlagged` | `undefined` \| `boolean` |
| `selfVoted` | `undefined` \| `boolean` |
| `spinOffCount` | `undefined` \| `number` |
| `thumbnailID` | `undefined` \| `number` |
| `title` | `undefined` \| `string` |
| `type` | [`ProgramType`](../enums/ProgramType.md) |
| `updated` | `undefined` \| ``null`` \| `Date` |
| `votes` | `undefined` \| `number` |
| `width` | `undefined` \| `number` |

#### Overrides

Wrapper.transformSchema

#### Defined in

[Program.ts:238](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L238)

___

### fromIdentifier

▸ `Static` **fromIdentifier**(`identifier`): [`Program`](Program.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | [`ProgramID`](../README.md#programid) \| \`http$\{string}://$\{string}khanacademy.$\{string}/$\{string}/$\{string}/$\{number}\` \| \`ag5zfmtoYW4tYWNhZGVteXI$\{string}CxIKU2NyYXRjaHBhZB$\{string}$\{string}\` |

#### Returns

[`Program`](Program.md)

#### Defined in

[Program.ts:219](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L219)

___

### fromSchema

▸ `Static` **fromSchema**(`schema`): [`Program`](Program.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `RecursivePartial`\<[`ProgramSchema`](../interfaces/ProgramSchema.md)\<[`UserSchema`](../interfaces/UserSchema.md)\<[`AvatarSchema`](../interfaces/AvatarSchema.md), [`ProfileSchema`](../interfaces/ProfileSchema.md), [`ListProgramsSchema`](../interfaces/ListProgramsSchema.md)\<`unknown`\>\>\>\> |

#### Returns

[`Program`](Program.md)

#### Defined in

[Program.ts:211](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/Program.ts#L211)
