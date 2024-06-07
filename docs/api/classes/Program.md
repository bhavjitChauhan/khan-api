## Extends

- `default`\<[`ProgramSchema`](api%5Cinterfaces%5CProgramSchema.md)\<[`UserSchema`](api%5Cinterfaces%5CUserSchema.md)\>, [`IProgram`](api%5Cinterfaces%5CIProgram.md)\>

## Implements

- [`IProgram`](api%5Cinterfaces%5CIProgram.md)

## Constructors

### new Program()

> **new Program**(`data`?): [`Program`](api%5Cclasses%5CProgram.md)

Creates a new class instance

#### Parameters

• **data?**: [`IProgram`](api%5Cinterfaces%5CIProgram.md)

#### Returns

[`Program`](api%5Cclasses%5CProgram.md)

#### Inherited from

`Wrapper<ProgramSchema<UserSchema>, IProgram>.constructor`

#### Source

[src/lib/Wrapper.ts:36](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/Wrapper.ts#L36)

### new Program()

> **new Program**(`client`, `data`?): [`Program`](api%5Cclasses%5CProgram.md)

#### Parameters

• **client**: [`Client`](api%5Cclasses%5CClient.md)

• **data?**: [`IProgram`](api%5Cinterfaces%5CIProgram.md)

#### Returns

[`Program`](api%5Cclasses%5CProgram.md)

#### Inherited from

`Wrapper<ProgramSchema<UserSchema>, IProgram>.constructor`

#### Source

[src/lib/Wrapper.ts:37](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/Wrapper.ts#L37)

## Properties

### author?

> `optional` `readonly` **author**: [`User`](api%5Cclasses%5CUser.md)

The author of the program.

#### Implementation of

[`IProgram`](api%5Cinterfaces%5CIProgram.md).[`author`](api%5Cinterfaces%5CIProgram.md#author)

#### Source

[src/Program.ts:78](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Program.ts#L78)

***

### client?

> `optional` **client**: [`Client`](api%5Cclasses%5CClient.md)

The client that this base was fetched with.

#### Inherited from

`Wrapper.client`

#### Source

[src/lib/Wrapper.ts:15](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/Wrapper.ts#L15)

***

### code?

> `optional` `readonly` **code**: `string`

The code of the program.

#### Implementation of

[`IProgram`](api%5Cinterfaces%5CIProgram.md).[`code`](api%5Cinterfaces%5CIProgram.md#code)

#### Source

[src/Program.ts:118](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Program.ts#L118)

***

### created?

> `optional` `readonly` **created**: `Date`

The date the program was created.

#### Implementation of

[`IProgram`](api%5Cinterfaces%5CIProgram.md).[`created`](api%5Cinterfaces%5CIProgram.md#created)

#### Source

[src/Program.ts:82](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Program.ts#L82)

***

### deleted?

> `optional` `readonly` **deleted**: `boolean`

Whether the program has been deleted.

#### Implementation of

[`IProgram`](api%5Cinterfaces%5CIProgram.md).[`deleted`](api%5Cinterfaces%5CIProgram.md#deleted)

#### Source

[src/Program.ts:147](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Program.ts#L147)

***

### description?

> `optional` `readonly` **description**: `null` \| `string`

The description of the program. Set to `null` if the description is empty string.

#### Implementation of

[`IProgram`](api%5Cinterfaces%5CIProgram.md).[`description`](api%5Cinterfaces%5CIProgram.md#description)

#### Source

[src/Program.ts:143](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Program.ts#L143)

***

### height?

> `optional` `readonly` **height**: `number`

The height of the program in pixels.

#### Description

Constrained between 400 and 600. May be any value in between.

#### Implementation of

[`IProgram`](api%5Cinterfaces%5CIProgram.md).[`height`](api%5Cinterfaces%5CIProgram.md#height)

#### Source

[src/Program.ts:103](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Program.ts#L103)

***

### helpRequests?

> `optional` `readonly` **helpRequests**: [`Question`](api%5Cclasses%5CQuestion.md)[]

#### Implementation of

[`IProgram`](api%5Cinterfaces%5CIProgram.md).[`helpRequests`](api%5Cinterfaces%5CIProgram.md#helprequests)

#### Source

[src/Program.ts:164](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Program.ts#L164)

***

### hidden?

> `optional` `readonly` **hidden**: `boolean`

Whether the program is hidden from the hotlist.

#### Implementation of

[`IProgram`](api%5Cinterfaces%5CIProgram.md).[`hidden`](api%5Cinterfaces%5CIProgram.md#hidden)

#### Source

[src/Program.ts:122](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Program.ts#L122)

***

### id?

> `optional` `readonly` **id**: `number`

The ID of the program.

#### Implementation of

[`IProgram`](api%5Cinterfaces%5CIProgram.md).[`id`](api%5Cinterfaces%5CIProgram.md#id)

#### Source

[src/Program.ts:70](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Program.ts#L70)

***

### key?

> `optional` `readonly` **key**: \`ag5zfmtoYW4tYWNhZGVteXI$\{string\}CxIKU2NyYXRjaHBhZB$\{string\}$\{string\}\`

#### Implementation of

[`IProgram`](api%5Cinterfaces%5CIProgram.md).[`key`](api%5Cinterfaces%5CIProgram.md#key)

#### Source

[src/Program.ts:132](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Program.ts#L132)

***

### origin?

> `optional` `readonly` **origin**: `null` \| [`Program`](api%5Cclasses%5CProgram.md)

The original program that this program is a spin-off of.

#### Implementation of

[`IProgram`](api%5Cinterfaces%5CIProgram.md).[`origin`](api%5Cinterfaces%5CIProgram.md#origin)

#### Source

[src/Program.ts:131](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Program.ts#L131)

***

### questions?

> `optional` `readonly` **questions**: [`Question`](api%5Cclasses%5CQuestion.md)[]

#### Implementation of

[`IProgram`](api%5Cinterfaces%5CIProgram.md).[`questions`](api%5Cinterfaces%5CIProgram.md#questions)

#### Source

[src/Program.ts:163](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Program.ts#L163)

***

### rawData?

> `optional` **rawData**: `RecursivePartial`\<[`ProgramSchema`](api%5Cinterfaces%5CProgramSchema.md)\<[`UserSchema`](api%5Cinterfaces%5CUserSchema.md)\<[`AvatarSchema`](api%5Cinterfaces%5CAvatarSchema.md), [`ProfileSchema`](api%5Cinterfaces%5CProfileSchema.md), [`ListProgramsSchema`](api%5Cinterfaces%5CListProgramsSchema.md)\<`unknown`\>\>\>\>

The raw base schema data

#### Remarks

Only set if the base was created from a user schema.

#### Inherited from

`Wrapper.rawData`

#### Source

[src/lib/Wrapper.ts:22](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/Wrapper.ts#L22)

***

### selfFlagged?

> `optional` `readonly` **selfFlagged**: `boolean`

Whether the program has been flagged by the client's authenticated user.

#### See

[client](api%5Cclasses%5CUser.md#client)

#### Implementation of

[`IProgram`](api%5Cinterfaces%5CIProgram.md).[`selfFlagged`](api%5Cinterfaces%5CIProgram.md#selfflagged)

#### Source

[src/Program.ts:154](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Program.ts#L154)

***

### selfVoted?

> `optional` `readonly` **selfVoted**: `boolean`

Whether the program has been voted by the client's authenticated user.

#### See

[client](api%5Cclasses%5CUser.md#client)

#### Implementation of

[`IProgram`](api%5Cinterfaces%5CIProgram.md).[`selfVoted`](api%5Cinterfaces%5CIProgram.md#selfvoted)

#### Source

[src/Program.ts:160](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Program.ts#L160)

***

### spinOffCount?

> `optional` `readonly` **spinOffCount**: `number`

The number of spin-offs the program has.

#### Implementation of

[`IProgram`](api%5Cinterfaces%5CIProgram.md).[`spinOffCount`](api%5Cinterfaces%5CIProgram.md#spinoffcount)

#### Source

[src/Program.ts:114](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Program.ts#L114)

***

### thumbnailID?

> `optional` `readonly` **thumbnailID**: `number`

The ID of the latest thumbnail image of the program.

#### Description

Previous thumbnails are not guaranteed to be available.

#### Implementation of

[`IProgram`](api%5Cinterfaces%5CIProgram.md).[`thumbnailID`](api%5Cinterfaces%5CIProgram.md#thumbnailid)

#### Source

[src/Program.ts:139](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Program.ts#L139)

***

### tipsAndThanks?

> `optional` `readonly` **tipsAndThanks**: [`TipsAndThanks`](api%5Cclasses%5CTipsAndThanks.md)[]

#### Implementation of

[`IProgram`](api%5Cinterfaces%5CIProgram.md).[`tipsAndThanks`](api%5Cinterfaces%5CIProgram.md#tipsandthanks)

#### Source

[src/Program.ts:162](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Program.ts#L162)

***

### title?

> `optional` `readonly` **title**: `string`

The title of the program.

#### Implementation of

[`IProgram`](api%5Cinterfaces%5CIProgram.md).[`title`](api%5Cinterfaces%5CIProgram.md#title)

#### Source

[src/Program.ts:74](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Program.ts#L74)

***

### type?

> `optional` `readonly` **type**: [`ProgramType`](api%5Cenumerations%5CProgramType.md)

The type of program.

#### Implementation of

[`IProgram`](api%5Cinterfaces%5CIProgram.md).[`type`](api%5Cinterfaces%5CIProgram.md#type)

#### Source

[src/Program.ts:126](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Program.ts#L126)

***

### updated?

> `optional` `readonly` **updated**: `null` \| `Date`

The date the program was last updated.

#### Description

Set to `null` if the program has never been updated.

#### Implementation of

[`IProgram`](api%5Cinterfaces%5CIProgram.md).[`updated`](api%5Cinterfaces%5CIProgram.md#updated)

#### Source

[src/Program.ts:89](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Program.ts#L89)

***

### votes?

> `optional` `readonly` **votes**: `number`

The number of votes the program has received.

#### Description

Note that a program has 1 vote on creation.

#### Implementation of

[`IProgram`](api%5Cinterfaces%5CIProgram.md).[`votes`](api%5Cinterfaces%5CIProgram.md#votes)

#### Source

[src/Program.ts:110](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Program.ts#L110)

***

### width?

> `optional` `readonly` **width**: `number`

The height of the program in pixels.

#### Description

Constrained between 400 and 600. May be any value in between.

#### Implementation of

[`IProgram`](api%5Cinterfaces%5CIProgram.md).[`width`](api%5Cinterfaces%5CIProgram.md#width)

#### Source

[src/Program.ts:96](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Program.ts#L96)

***

### Type

> `static` `readonly` **Type**: *typeof* [`ProgramType`](api%5Cenumerations%5CProgramType.md) = `ProgramType`

Aliases for the program types.

#### Raw

[ProgramRevisionSchema.editorType](api%5Cinterfaces%5CProgramRevisionSchema.md#editortype)

#### Source

[src/Program.ts:65](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Program.ts#L65)

## Accessors

### lines

> `get` **lines**(): `null` \| `number`

Number of lines of code in the program.

#### Returns

`null` \| `number`

#### Source

[src/Program.ts:173](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Program.ts#L173)

***

### shortUrl

> `get` **shortUrl**(): `null` \| `string`

Short URL of the program.

#### Returns

`null` \| `string`

#### Source

[src/Program.ts:192](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Program.ts#L192)

***

### spinoff

> `get` **spinoff**(): `null` \| `boolean`

#### Returns

`null` \| `boolean`

#### Source

[src/Program.ts:166](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Program.ts#L166)

***

### thumbnailUrl

> `get` **thumbnailUrl**(): `null` \| `string`

Thumbnail image URL of the program.

#### Description

To get the latest thumbnail image, use 'latest' as the thumbnail ID instead.

#### Returns

`null` \| `string`

#### Source

[src/Program.ts:203](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Program.ts#L203)

***

### url

> `get` **url**(): `null` \| `string`

URL of the program.

#### Returns

`null` \| `string`

#### Source

[src/Program.ts:181](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Program.ts#L181)

## Methods

### #resolveIdentifier()

> `private` **#resolveIdentifier**(): `number` \| \`ag5zfmtoYW4tYWNhZGVteXI$\{string\}CxIKU2NyYXRjaHBhZB$\{string\}$\{string\}\`

#### Returns

`number` \| \`ag5zfmtoYW4tYWNhZGVteXI$\{string\}CxIKU2NyYXRjaHBhZB$\{string\}$\{string\}\`

#### Source

[src/Program.ts:231](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Program.ts#L231)

***

### copy()

> **copy**(`data`): [`Program`](api%5Cclasses%5CProgram.md)

Updates data into the class

#### Parameters

• **data**: [`IProgram`](api%5Cinterfaces%5CIProgram.md)

The data to copy from

#### Returns

[`Program`](api%5Cclasses%5CProgram.md)

The class instance

#### Inherited from

`Wrapper.copy`

#### Source

[src/lib/Wrapper.ts:53](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/Wrapper.ts#L53)

***

### copyFromSchema()

> **copyFromSchema**(`schema`): [`Program`](api%5Cclasses%5CProgram.md)

Updates data from a schema into the instance

#### Parameters

• **schema**: `RecursivePartial`\<[`ProgramSchema`](api%5Cinterfaces%5CProgramSchema.md)\<[`UserSchema`](api%5Cinterfaces%5CUserSchema.md)\<[`AvatarSchema`](api%5Cinterfaces%5CAvatarSchema.md), [`ProfileSchema`](api%5Cinterfaces%5CProfileSchema.md), [`ListProgramsSchema`](api%5Cinterfaces%5CListProgramsSchema.md)\<`unknown`\>\>\>\>

The schema to copy from

#### Returns

[`Program`](api%5Cclasses%5CProgram.md)

The class instance

#### Inherited from

`Wrapper.copyFromSchema`

#### Source

[src/lib/Wrapper.ts:65](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/Wrapper.ts#L65)

***

### get()

> **get**(`client`): `Promise`\<[`Program`](api%5Cclasses%5CProgram.md)\>

#### Parameters

• **client**: [`Client`](api%5Cclasses%5CClient.md)= `undefined`

#### Returns

`Promise`\<[`Program`](api%5Cclasses%5CProgram.md)\>

#### Overrides

`Wrapper.get`

#### Source

[src/Program.ts:325](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Program.ts#L325)

***

### getAllHelpRequests()

> **getAllHelpRequests**(`client`, `sort`?): `Promise`\<[`Program`](api%5Cclasses%5CProgram.md)\>

#### Parameters

• **client**: [`Client`](api%5Cclasses%5CClient.md)= `undefined`

• **sort?**: [`FeedbackSort`](api%5Cenumerations%5CFeedbackSort.md)

#### Returns

`Promise`\<[`Program`](api%5Cclasses%5CProgram.md)\>

#### Source

[src/Program.ts:405](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Program.ts#L405)

***

### getAllQuestions()

> **getAllQuestions**(`client`, `sort`?): `Promise`\<[`Program`](api%5Cclasses%5CProgram.md)\>

#### Parameters

• **client**: [`Client`](api%5Cclasses%5CClient.md)= `undefined`

• **sort?**: [`FeedbackSort`](api%5Cenumerations%5CFeedbackSort.md)

#### Returns

`Promise`\<[`Program`](api%5Cclasses%5CProgram.md)\>

#### Source

[src/Program.ts:377](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Program.ts#L377)

***

### getAllTipsAndThanks()

> **getAllTipsAndThanks**(`client`, `sort`?): `Promise`\<[`Program`](api%5Cclasses%5CProgram.md)\>

#### Parameters

• **client**: [`Client`](api%5Cclasses%5CClient.md)= `undefined`

• **sort?**: [`FeedbackSort`](api%5Cenumerations%5CFeedbackSort.md)

#### Returns

`Promise`\<[`Program`](api%5Cclasses%5CProgram.md)\>

#### Source

[src/Program.ts:349](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Program.ts#L349)

***

### getHelpRequests()

> **getHelpRequests**(`client`, `sort`?): `AsyncGenerator`\<[`Question`](api%5Cclasses%5CQuestion.md)[], [`Program`](api%5Cclasses%5CProgram.md), `unknown`\>

#### Parameters

• **client**: [`Client`](api%5Cclasses%5CClient.md)= `undefined`

• **sort?**: [`FeedbackSort`](api%5Cenumerations%5CFeedbackSort.md)

#### Returns

`AsyncGenerator`\<[`Question`](api%5Cclasses%5CQuestion.md)[], [`Program`](api%5Cclasses%5CProgram.md), `unknown`\>

#### Source

[src/Program.ts:389](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Program.ts#L389)

***

### getQuestions()

> **getQuestions**(`client`, `sort`?): `AsyncGenerator`\<[`Question`](api%5Cclasses%5CQuestion.md)[], [`Program`](api%5Cclasses%5CProgram.md), `unknown`\>

#### Parameters

• **client**: [`Client`](api%5Cclasses%5CClient.md)= `undefined`

• **sort?**: [`FeedbackSort`](api%5Cenumerations%5CFeedbackSort.md)

#### Returns

`AsyncGenerator`\<[`Question`](api%5Cclasses%5CQuestion.md)[], [`Program`](api%5Cclasses%5CProgram.md), `unknown`\>

#### Source

[src/Program.ts:361](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Program.ts#L361)

***

### getTipsAndThanks()

> **getTipsAndThanks**(`client`, `sort`?): `AsyncGenerator`\<[`TipsAndThanks`](api%5Cclasses%5CTipsAndThanks.md)[], [`Program`](api%5Cclasses%5CProgram.md), `unknown`\>

#### Parameters

• **client**: [`Client`](api%5Cclasses%5CClient.md)= `undefined`

• **sort?**: [`FeedbackSort`](api%5Cenumerations%5CFeedbackSort.md)

#### Returns

`AsyncGenerator`\<[`TipsAndThanks`](api%5Cclasses%5CTipsAndThanks.md)[], [`Program`](api%5Cclasses%5CProgram.md), `unknown`\>

#### Source

[src/Program.ts:333](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Program.ts#L333)

***

### is()

> **is**(`program`): `boolean`

#### Parameters

• **program**: [`IProgram`](api%5Cinterfaces%5CIProgram.md)

#### Returns

`boolean`

#### Overrides

`Wrapper.is`

#### Source

[src/Program.ts:417](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Program.ts#L417)

***

### isSchema()

> **isSchema**(`schema`): `boolean`

Checks if the schema represents the same instance

#### Parameters

• **schema**: `RecursivePartial`\<[`ProgramSchema`](api%5Cinterfaces%5CProgramSchema.md)\<[`UserSchema`](api%5Cinterfaces%5CUserSchema.md)\<[`AvatarSchema`](api%5Cinterfaces%5CAvatarSchema.md), [`ProfileSchema`](api%5Cinterfaces%5CProfileSchema.md), [`ListProgramsSchema`](api%5Cinterfaces%5CListProgramsSchema.md)\<`unknown`\>\>\>\>

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

• **schema**: `RecursivePartial`\<[`ProgramSchema`](api%5Cinterfaces%5CProgramSchema.md)\<[`UserSchema`](api%5Cinterfaces%5CUserSchema.md)\<[`AvatarSchema`](api%5Cinterfaces%5CAvatarSchema.md), [`ProfileSchema`](api%5Cinterfaces%5CProfileSchema.md), [`ListProgramsSchema`](api%5Cinterfaces%5CListProgramsSchema.md)\<`unknown`\>\>\>\>

#### Returns

`object`

##### author

> **author**: `undefined` \| [`User`](api%5Cclasses%5CUser.md)

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

> **key**: `undefined` \| \`ag5zfmtoYW4tYWNhZGVteXI$\{string\}CxIKU2NyYXRjaHBhZB$\{string\}$\{string\}\` = `schema.key`

##### origin

> **origin**: `undefined` \| `null` \| [`Program`](api%5Cclasses%5CProgram.md)

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

> **type**: [`ProgramType`](api%5Cenumerations%5CProgramType.md)

##### updated

> **updated**: `undefined` \| `null` \| `Date`

##### votes

> **votes**: `undefined` \| `number` = `schema.sumVotesIncremented`

##### width

> **width**: `undefined` \| `number` = `schema.width`

#### Overrides

`Wrapper.transformSchema`

#### Source

[src/Program.ts:238](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Program.ts#L238)

***

### fromIdentifier()

> `static` **fromIdentifier**(`identifier`): [`Program`](api%5Cclasses%5CProgram.md)

#### Parameters

• **identifier**: [`ProgramID`](api%5Ctype-aliases%5CProgramID.md) \| \`http$\{string\}://$\{string\}khanacademy.$\{string\}/$\{string\}/$\{string\}/$\{number\}\` \| \`ag5zfmtoYW4tYWNhZGVteXI$\{string\}CxIKU2NyYXRjaHBhZB$\{string\}$\{string\}\`

#### Returns

[`Program`](api%5Cclasses%5CProgram.md)

#### Source

[src/Program.ts:219](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Program.ts#L219)

***

### fromSchema()

> `static` **fromSchema**(`schema`): [`Program`](api%5Cclasses%5CProgram.md)

#### Parameters

• **schema**: `RecursivePartial`\<[`ProgramSchema`](api%5Cinterfaces%5CProgramSchema.md)\<[`UserSchema`](api%5Cinterfaces%5CUserSchema.md)\<[`AvatarSchema`](api%5Cinterfaces%5CAvatarSchema.md), [`ProfileSchema`](api%5Cinterfaces%5CProfileSchema.md), [`ListProgramsSchema`](api%5Cinterfaces%5CListProgramsSchema.md)\<`unknown`\>\>\>\>

#### Returns

[`Program`](api%5Cclasses%5CProgram.md)

#### Source

[src/Program.ts:211](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Program.ts#L211)
