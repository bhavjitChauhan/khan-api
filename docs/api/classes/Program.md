Defined in: [src/Program.ts:56](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/Program.ts#L56)

## Extends

- `default`\<[`ProgramSchema`](api/interfaces%5CProgramSchema.md)\<[`UserSchema`](api/interfaces%5CUserSchema.md)\>, [`IProgram`](api/interfaces%5CIProgram.md)\>

## Implements

- [`IProgram`](api/interfaces%5CIProgram.md)

## Constructors

### new Program()

> **new Program**(`data`?): [`Program`](api/classes%5CProgram.md)

Defined in: [src/lib/Wrapper.ts:36](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/Wrapper.ts#L36)

Creates a new class instance

#### Parameters

##### data?

[`IProgram`](api/interfaces%5CIProgram.md)

#### Returns

[`Program`](api/classes%5CProgram.md)

#### Inherited from

`Wrapper<ProgramSchema<UserSchema>, IProgram>.constructor`

### new Program()

> **new Program**(`client`, `data`?): [`Program`](api/classes%5CProgram.md)

Defined in: [src/lib/Wrapper.ts:37](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/Wrapper.ts#L37)

#### Parameters

##### client

[`Client`](api/classes%5CClient.md)

##### data?

[`IProgram`](api/interfaces%5CIProgram.md)

#### Returns

[`Program`](api/classes%5CProgram.md)

#### Inherited from

`Wrapper<ProgramSchema<UserSchema>, IProgram>.constructor`

## Properties

### author?

> `readonly` `optional` **author**: [`User`](api/classes%5CUser.md)

Defined in: [src/Program.ts:78](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/Program.ts#L78)

The author of the program.

#### Implementation of

[`IProgram`](api/interfaces%5CIProgram.md).[`author`](api/interfaces%5CIProgram.md#author)

***

### client?

> `optional` **client**: [`Client`](api/classes%5CClient.md)

Defined in: [src/lib/Wrapper.ts:15](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/Wrapper.ts#L15)

The client that this base was fetched with.

#### Inherited from

`Wrapper.client`

***

### code?

> `readonly` `optional` **code**: `string`

Defined in: [src/Program.ts:118](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/Program.ts#L118)

The code of the program.

#### Implementation of

[`IProgram`](api/interfaces%5CIProgram.md).[`code`](api/interfaces%5CIProgram.md#code)

***

### created?

> `readonly` `optional` **created**: `Date`

Defined in: [src/Program.ts:82](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/Program.ts#L82)

The date the program was created.

#### Implementation of

[`IProgram`](api/interfaces%5CIProgram.md).[`created`](api/interfaces%5CIProgram.md#created)

***

### deleted?

> `readonly` `optional` **deleted**: `boolean`

Defined in: [src/Program.ts:147](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/Program.ts#L147)

Whether the program has been deleted.

#### Implementation of

[`IProgram`](api/interfaces%5CIProgram.md).[`deleted`](api/interfaces%5CIProgram.md#deleted)

***

### description?

> `readonly` `optional` **description**: `null` \| `string`

Defined in: [src/Program.ts:143](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/Program.ts#L143)

The description of the program. Set to `null` if the description is empty string.

#### Implementation of

[`IProgram`](api/interfaces%5CIProgram.md).[`description`](api/interfaces%5CIProgram.md#description)

***

### height?

> `readonly` `optional` **height**: `number`

Defined in: [src/Program.ts:103](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/Program.ts#L103)

The height of the program in pixels.

#### Description

Constrained between 400 and 600. May be any value in between.

#### Implementation of

[`IProgram`](api/interfaces%5CIProgram.md).[`height`](api/interfaces%5CIProgram.md#height)

***

### helpRequests?

> `readonly` `optional` **helpRequests**: [`Question`](api/classes%5CQuestion.md)[]

Defined in: [src/Program.ts:164](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/Program.ts#L164)

#### Implementation of

[`IProgram`](api/interfaces%5CIProgram.md).[`helpRequests`](api/interfaces%5CIProgram.md#helprequests)

***

### hidden?

> `readonly` `optional` **hidden**: `boolean`

Defined in: [src/Program.ts:122](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/Program.ts#L122)

Whether the program is hidden from the hotlist.

#### Implementation of

[`IProgram`](api/interfaces%5CIProgram.md).[`hidden`](api/interfaces%5CIProgram.md#hidden)

***

### id?

> `readonly` `optional` **id**: `number`

Defined in: [src/Program.ts:70](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/Program.ts#L70)

The ID of the program.

#### Implementation of

[`IProgram`](api/interfaces%5CIProgram.md).[`id`](api/interfaces%5CIProgram.md#id)

***

### key?

> `readonly` `optional` **key**: `` `ag5zfmtoYW4tYWNhZGVteXI${string}CxIKU2NyYXRjaHBhZB${string}${string}` ``

Defined in: [src/Program.ts:132](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/Program.ts#L132)

#### Implementation of

[`IProgram`](api/interfaces%5CIProgram.md).[`key`](api/interfaces%5CIProgram.md#key)

***

### origin?

> `readonly` `optional` **origin**: `null` \| [`Program`](api/classes%5CProgram.md)

Defined in: [src/Program.ts:131](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/Program.ts#L131)

The original program that this program is a spin-off of.

#### Implementation of

[`IProgram`](api/interfaces%5CIProgram.md).[`origin`](api/interfaces%5CIProgram.md#origin)

***

### questions?

> `readonly` `optional` **questions**: [`Question`](api/classes%5CQuestion.md)[]

Defined in: [src/Program.ts:163](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/Program.ts#L163)

#### Implementation of

[`IProgram`](api/interfaces%5CIProgram.md).[`questions`](api/interfaces%5CIProgram.md#questions)

***

### rawData?

> `optional` **rawData**: `RecursivePartial`\<[`ProgramSchema`](api/interfaces%5CProgramSchema.md)\<[`UserSchema`](api/interfaces%5CUserSchema.md)\<[`AvatarSchema`](api/interfaces%5CAvatarSchema.md), [`ProfileSchema`](api/interfaces%5CProfileSchema.md), [`ListProgramsSchema`](api/interfaces%5CListProgramsSchema.md)\<`unknown`\>\>\>\>

Defined in: [src/lib/Wrapper.ts:22](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/Wrapper.ts#L22)

The raw base schema data

#### Remarks

Only set if the base was created from a user schema.

#### Inherited from

`Wrapper.rawData`

***

### selfFlagged?

> `readonly` `optional` **selfFlagged**: `boolean`

Defined in: [src/Program.ts:154](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/Program.ts#L154)

Whether the program has been flagged by the client's authenticated user.

#### See

[client](api/classes%5CUser.md#client-1)

#### Implementation of

[`IProgram`](api/interfaces%5CIProgram.md).[`selfFlagged`](api/interfaces%5CIProgram.md#selfflagged)

***

### selfVoted?

> `readonly` `optional` **selfVoted**: `boolean`

Defined in: [src/Program.ts:160](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/Program.ts#L160)

Whether the program has been voted by the client's authenticated user.

#### See

[client](api/classes%5CUser.md#client-1)

#### Implementation of

[`IProgram`](api/interfaces%5CIProgram.md).[`selfVoted`](api/interfaces%5CIProgram.md#selfvoted)

***

### spinOffCount?

> `readonly` `optional` **spinOffCount**: `number`

Defined in: [src/Program.ts:114](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/Program.ts#L114)

The number of spin-offs the program has.

#### Implementation of

[`IProgram`](api/interfaces%5CIProgram.md).[`spinOffCount`](api/interfaces%5CIProgram.md#spinoffcount)

***

### thumbnailID?

> `readonly` `optional` **thumbnailID**: `number`

Defined in: [src/Program.ts:139](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/Program.ts#L139)

The ID of the latest thumbnail image of the program.

#### Description

Previous thumbnails are not guaranteed to be available.

#### Implementation of

[`IProgram`](api/interfaces%5CIProgram.md).[`thumbnailID`](api/interfaces%5CIProgram.md#thumbnailid)

***

### tipsAndThanks?

> `readonly` `optional` **tipsAndThanks**: [`TipsAndThanks`](api/classes%5CTipsAndThanks.md)[]

Defined in: [src/Program.ts:162](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/Program.ts#L162)

#### Implementation of

[`IProgram`](api/interfaces%5CIProgram.md).[`tipsAndThanks`](api/interfaces%5CIProgram.md#tipsandthanks)

***

### title?

> `readonly` `optional` **title**: `string`

Defined in: [src/Program.ts:74](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/Program.ts#L74)

The title of the program.

#### Implementation of

[`IProgram`](api/interfaces%5CIProgram.md).[`title`](api/interfaces%5CIProgram.md#title)

***

### type?

> `readonly` `optional` **type**: [`ProgramType`](api/enumerations%5CProgramType.md)

Defined in: [src/Program.ts:126](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/Program.ts#L126)

The type of program.

#### Implementation of

[`IProgram`](api/interfaces%5CIProgram.md).[`type`](api/interfaces%5CIProgram.md#type)

***

### updated?

> `readonly` `optional` **updated**: `null` \| `Date`

Defined in: [src/Program.ts:89](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/Program.ts#L89)

The date the program was last updated.

#### Description

Set to `null` if the program has never been updated.

#### Implementation of

[`IProgram`](api/interfaces%5CIProgram.md).[`updated`](api/interfaces%5CIProgram.md#updated)

***

### votes?

> `readonly` `optional` **votes**: `number`

Defined in: [src/Program.ts:110](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/Program.ts#L110)

The number of votes the program has received.

#### Description

Note that a program has 1 vote on creation.

#### Implementation of

[`IProgram`](api/interfaces%5CIProgram.md).[`votes`](api/interfaces%5CIProgram.md#votes)

***

### width?

> `readonly` `optional` **width**: `number`

Defined in: [src/Program.ts:96](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/Program.ts#L96)

The height of the program in pixels.

#### Description

Constrained between 400 and 600. May be any value in between.

#### Implementation of

[`IProgram`](api/interfaces%5CIProgram.md).[`width`](api/interfaces%5CIProgram.md#width)

***

### Type

> `readonly` `static` **Type**: *typeof* [`ProgramType`](api/enumerations%5CProgramType.md) = `ProgramType`

Defined in: [src/Program.ts:65](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/Program.ts#L65)

Aliases for the program types.

#### Raw

[ProgramRevisionSchema.editorType](api/interfaces%5CProgramRevisionSchema.md#editortype)

## Accessors

### lines

#### Get Signature

> **get** **lines**(): `null` \| `number`

Defined in: [src/Program.ts:173](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/Program.ts#L173)

Number of lines of code in the program.

##### Returns

`null` \| `number`

***

### shortUrl

#### Get Signature

> **get** **shortUrl**(): `null` \| `string`

Defined in: [src/Program.ts:192](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/Program.ts#L192)

Short URL of the program.

##### Returns

`null` \| `string`

***

### spinoff

#### Get Signature

> **get** **spinoff**(): `null` \| `boolean`

Defined in: [src/Program.ts:166](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/Program.ts#L166)

##### Returns

`null` \| `boolean`

***

### thumbnailUrl

#### Get Signature

> **get** **thumbnailUrl**(): `null` \| `string`

Defined in: [src/Program.ts:203](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/Program.ts#L203)

Thumbnail image URL of the program.

##### Description

To get the latest thumbnail image, use 'latest' as the thumbnail ID instead.

##### Returns

`null` \| `string`

***

### url

#### Get Signature

> **get** **url**(): `null` \| `string`

Defined in: [src/Program.ts:181](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/Program.ts#L181)

URL of the program.

##### Returns

`null` \| `string`

## Methods

### copy()

> **copy**(`data`): [`Program`](api/classes%5CProgram.md)

Defined in: [src/lib/Wrapper.ts:53](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/Wrapper.ts#L53)

Updates data into the class

#### Parameters

##### data

[`IProgram`](api/interfaces%5CIProgram.md)

The data to copy from

#### Returns

[`Program`](api/classes%5CProgram.md)

The class instance

#### Inherited from

`Wrapper.copy`

***

### copyFromSchema()

> **copyFromSchema**(`schema`): [`Program`](api/classes%5CProgram.md)

Defined in: [src/lib/Wrapper.ts:65](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/Wrapper.ts#L65)

Updates data from a schema into the instance

#### Parameters

##### schema

`RecursivePartial`\<[`ProgramSchema`](api/interfaces%5CProgramSchema.md)\<[`UserSchema`](api/interfaces%5CUserSchema.md)\<[`AvatarSchema`](api/interfaces%5CAvatarSchema.md), [`ProfileSchema`](api/interfaces%5CProfileSchema.md), [`ListProgramsSchema`](api/interfaces%5CListProgramsSchema.md)\<`unknown`\>\>\>\>

The schema to copy from

#### Returns

[`Program`](api/classes%5CProgram.md)

The class instance

#### Inherited from

`Wrapper.copyFromSchema`

***

### get()

> **get**(`client`): `Promise`\<[`Program`](api/classes%5CProgram.md)\>

Defined in: [src/Program.ts:325](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/Program.ts#L325)

Gets and updates the instance's data

#### Parameters

##### client

[`Client`](api/classes%5CClient.md) = `...`

The API client to use

#### Returns

`Promise`\<[`Program`](api/classes%5CProgram.md)\>

#### Overrides

`Wrapper.get`

***

### getAllHelpRequests()

> **getAllHelpRequests**(`client`, `sort`?): `Promise`\<[`Program`](api/classes%5CProgram.md)\>

Defined in: [src/Program.ts:405](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/Program.ts#L405)

#### Parameters

##### client

[`Client`](api/classes%5CClient.md) = `...`

##### sort?

[`FeedbackSort`](api/enumerations%5CFeedbackSort.md)

#### Returns

`Promise`\<[`Program`](api/classes%5CProgram.md)\>

***

### getAllQuestions()

> **getAllQuestions**(`client`, `sort`?): `Promise`\<[`Program`](api/classes%5CProgram.md)\>

Defined in: [src/Program.ts:377](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/Program.ts#L377)

#### Parameters

##### client

[`Client`](api/classes%5CClient.md) = `...`

##### sort?

[`FeedbackSort`](api/enumerations%5CFeedbackSort.md)

#### Returns

`Promise`\<[`Program`](api/classes%5CProgram.md)\>

***

### getAllTipsAndThanks()

> **getAllTipsAndThanks**(`client`, `sort`?): `Promise`\<[`Program`](api/classes%5CProgram.md)\>

Defined in: [src/Program.ts:349](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/Program.ts#L349)

#### Parameters

##### client

[`Client`](api/classes%5CClient.md) = `...`

##### sort?

[`FeedbackSort`](api/enumerations%5CFeedbackSort.md)

#### Returns

`Promise`\<[`Program`](api/classes%5CProgram.md)\>

***

### getHelpRequests()

> **getHelpRequests**(`client`, `sort`?): `AsyncGenerator`\<[`Question`](api/classes%5CQuestion.md)[], [`Program`](api/classes%5CProgram.md), `unknown`\>

Defined in: [src/Program.ts:389](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/Program.ts#L389)

#### Parameters

##### client

[`Client`](api/classes%5CClient.md) = `...`

##### sort?

[`FeedbackSort`](api/enumerations%5CFeedbackSort.md)

#### Returns

`AsyncGenerator`\<[`Question`](api/classes%5CQuestion.md)[], [`Program`](api/classes%5CProgram.md), `unknown`\>

***

### getQuestions()

> **getQuestions**(`client`, `sort`?): `AsyncGenerator`\<[`Question`](api/classes%5CQuestion.md)[], [`Program`](api/classes%5CProgram.md), `unknown`\>

Defined in: [src/Program.ts:361](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/Program.ts#L361)

#### Parameters

##### client

[`Client`](api/classes%5CClient.md) = `...`

##### sort?

[`FeedbackSort`](api/enumerations%5CFeedbackSort.md)

#### Returns

`AsyncGenerator`\<[`Question`](api/classes%5CQuestion.md)[], [`Program`](api/classes%5CProgram.md), `unknown`\>

***

### getTipsAndThanks()

> **getTipsAndThanks**(`client`, `sort`?): `AsyncGenerator`\<[`TipsAndThanks`](api/classes%5CTipsAndThanks.md)[], [`Program`](api/classes%5CProgram.md), `unknown`\>

Defined in: [src/Program.ts:333](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/Program.ts#L333)

#### Parameters

##### client

[`Client`](api/classes%5CClient.md) = `...`

##### sort?

[`FeedbackSort`](api/enumerations%5CFeedbackSort.md)

#### Returns

`AsyncGenerator`\<[`TipsAndThanks`](api/classes%5CTipsAndThanks.md)[], [`Program`](api/classes%5CProgram.md), `unknown`\>

***

### is()

> **is**(`program`): `boolean`

Defined in: [src/Program.ts:417](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/Program.ts#L417)

Checks if the data represents the same instance

#### Parameters

##### program

[`IProgram`](api/interfaces%5CIProgram.md)

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

`RecursivePartial`\<[`ProgramSchema`](api/interfaces%5CProgramSchema.md)\<[`UserSchema`](api/interfaces%5CUserSchema.md)\<[`AvatarSchema`](api/interfaces%5CAvatarSchema.md), [`ProfileSchema`](api/interfaces%5CProfileSchema.md), [`ListProgramsSchema`](api/interfaces%5CListProgramsSchema.md)\<`unknown`\>\>\>\>

#### Returns

`boolean`

#### Inherited from

`Wrapper.isSchema`

***

### transformSchema()

> **transformSchema**(`schema`): `object`

Defined in: [src/Program.ts:238](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/Program.ts#L238)

Transforms a API schema into an abstracted interface

#### Parameters

##### schema

`RecursivePartial`\<[`ProgramSchema`](api/interfaces%5CProgramSchema.md)\<[`UserSchema`](api/interfaces%5CUserSchema.md)\<[`AvatarSchema`](api/interfaces%5CAvatarSchema.md), [`ProfileSchema`](api/interfaces%5CProfileSchema.md), [`ListProgramsSchema`](api/interfaces%5CListProgramsSchema.md)\<`unknown`\>\>\>\>

The schema to transform

#### Returns

`object`

##### author

> **author**: `undefined` \| [`User`](api/classes%5CUser.md)

##### code

> **code**: `undefined` \| `string` = `schema.revision.code`

##### created

> **created**: `undefined` \| `Date`

##### deleted

> **deleted**: `undefined` \| `boolean`

##### description

> **description**: `undefined` \| `null` \| `string`

##### height

> **height**: `undefined` \| `number` = `schema.height`

##### hidden

> **hidden**: `undefined` \| `boolean` = `schema.hideFromHotlist`

##### id

> **id**: `undefined` \| `number`

##### key

> **key**: `undefined` \| `` `ag5zfmtoYW4tYWNhZGVteXI${string}CxIKU2NyYXRjaHBhZB${string}${string}` `` = `schema.key`

##### origin

> **origin**: `undefined` \| `null` \| [`Program`](api/classes%5CProgram.md)

##### selfFlagged

> **selfFlagged**: `undefined` \| `boolean` = `schema.flaggedByUser`

##### selfVoted

> **selfVoted**: `undefined` \| `boolean` = `schema.upVoted`

##### spinOffCount

> **spinOffCount**: `undefined` \| `number`

##### thumbnailID

> **thumbnailID**: `undefined` \| `number`

##### title

> **title**: `undefined` \| `string` = `schema.translatedTitle`

##### type

> **type**: [`ProgramType`](api/enumerations%5CProgramType.md)

##### updated

> **updated**: `undefined` \| `null` \| `Date`

##### votes

> **votes**: `undefined` \| `number` = `schema.sumVotesIncremented`

##### width

> **width**: `undefined` \| `number` = `schema.width`

#### Overrides

`Wrapper.transformSchema`

***

### fromIdentifier()

> `static` **fromIdentifier**(`identifier`): [`Program`](api/classes%5CProgram.md)

Defined in: [src/Program.ts:219](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/Program.ts#L219)

#### Parameters

##### identifier

[`ProgramID`](api/type-aliases%5CProgramID.md) | `` `http${string}://${string}khanacademy.${string}/${string}/${string}/${number}` `` | `` `ag5zfmtoYW4tYWNhZGVteXI${string}CxIKU2NyYXRjaHBhZB${string}${string}` ``

#### Returns

[`Program`](api/classes%5CProgram.md)

***

### fromSchema()

> `static` **fromSchema**(`schema`): [`Program`](api/classes%5CProgram.md)

Defined in: [src/Program.ts:211](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/Program.ts#L211)

#### Parameters

##### schema

`RecursivePartial`\<[`ProgramSchema`](api/interfaces%5CProgramSchema.md)\<[`UserSchema`](api/interfaces%5CUserSchema.md)\<[`AvatarSchema`](api/interfaces%5CAvatarSchema.md), [`ProfileSchema`](api/interfaces%5CProfileSchema.md), [`ListProgramsSchema`](api/interfaces%5CListProgramsSchema.md)\<`unknown`\>\>\>\>

#### Returns

[`Program`](api/classes%5CProgram.md)
