Defined in: [src/lib/messages/Message.ts:31](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/Message.ts#L31)

## Extends

- [`BaseMessage`](api/classes%5CBaseMessage.md)

## Extended by

- [`TipsAndThanks`](api/classes%5CTipsAndThanks.md)
- [`Question`](api/classes%5CQuestion.md)
- [`Answer`](api/classes%5CAnswer.md)

## Implements

- [`IMessage`](api/interfaces%5CIMessage.md)

## Constructors

### new Message()

> **new Message**(`data`?): [`Message`](api/classes%5CMessage.md)

Defined in: [src/lib/Wrapper.ts:36](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/Wrapper.ts#L36)

Creates a new class instance

#### Parameters

##### data?

[`IBaseMessage`](api/interfaces%5CIBaseMessage.md)

#### Returns

[`Message`](api/classes%5CMessage.md)

#### Inherited from

[`BaseMessage`](api/classes%5CBaseMessage.md).[`constructor`](api/classes%5CBaseMessage.md#constructors)

### new Message()

> **new Message**(`client`, `data`?): [`Message`](api/classes%5CMessage.md)

Defined in: [src/lib/Wrapper.ts:37](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/Wrapper.ts#L37)

#### Parameters

##### client

[`Client`](api/classes%5CClient.md)

##### data?

[`IBaseMessage`](api/interfaces%5CIBaseMessage.md)

#### Returns

[`Message`](api/classes%5CMessage.md)

#### Inherited from

[`BaseMessage`](api/classes%5CBaseMessage.md).[`constructor`](api/classes%5CBaseMessage.md#constructors)

## Properties

### author?

> `readonly` `optional` **author**: [`User`](api/classes%5CUser.md)

Defined in: [src/lib/messages/BaseMessage.ts:34](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L34)

#### Implementation of

[`IMessage`](api/interfaces%5CIMessage.md).[`author`](api/interfaces%5CIMessage.md#author)

#### Inherited from

[`BaseMessage`](api/classes%5CBaseMessage.md).[`author`](api/classes%5CBaseMessage.md#author)

***

### byVideoAuthor?

> `readonly` `optional` **byVideoAuthor**: `boolean`

Defined in: [src/lib/messages/BaseMessage.ts:74](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L74)

#### Raw

[FeedbackSchemaBase.fromVideoAuthor](api/interfaces%5CFeedbackSchemaBase.md#fromvideoauthor)

#### Implementation of

[`IMessage`](api/interfaces%5CIMessage.md).[`byVideoAuthor`](api/interfaces%5CIMessage.md#byvideoauthor)

#### Inherited from

[`BaseMessage`](api/classes%5CBaseMessage.md).[`byVideoAuthor`](api/classes%5CBaseMessage.md#byvideoauthor)

***

### client?

> `optional` **client**: [`Client`](api/classes%5CClient.md)

Defined in: [src/lib/Wrapper.ts:15](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/Wrapper.ts#L15)

The client that this base was fetched with.

#### Inherited from

[`BaseMessage`](api/classes%5CBaseMessage.md).[`client`](api/classes%5CBaseMessage.md#client-1)

***

### created?

> `readonly` `optional` **created**: `Date`

Defined in: [src/lib/messages/BaseMessage.ts:39](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L39)

#### Raw

[FeedbackSchemaBase.date](api/interfaces%5CFeedbackSchemaBase.md#date)

#### Implementation of

[`IMessage`](api/interfaces%5CIMessage.md).[`created`](api/interfaces%5CIMessage.md#created)

#### Inherited from

[`BaseMessage`](api/classes%5CBaseMessage.md).[`created`](api/classes%5CBaseMessage.md#created)

***

### deleted?

> `readonly` `optional` **deleted**: `boolean`

Defined in: [src/lib/messages/BaseMessage.ts:53](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L53)

#### Raw

[FeedbackSchemaBase.appearsAsDeleted](api/interfaces%5CFeedbackSchemaBase.md#appearsasdeleted)

#### Implementation of

[`IMessage`](api/interfaces%5CIMessage.md).[`deleted`](api/interfaces%5CIMessage.md#deleted)

#### Inherited from

[`BaseMessage`](api/classes%5CBaseMessage.md).[`deleted`](api/classes%5CBaseMessage.md#deleted)

***

### encryptedKey?

> `readonly` `optional` **encryptedKey**: `` `kaencrypted_${string}_${string}` ``

Defined in: [src/lib/messages/BaseMessage.ts:48](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L48)

#### Raw

[FeedbackSchemaBase.key](api/interfaces%5CFeedbackSchemaBase.md#key)

#### Implementation of

[`IMessage`](api/interfaces%5CIMessage.md).[`encryptedKey`](api/interfaces%5CIMessage.md#encryptedkey)

#### Inherited from

[`BaseMessage`](api/classes%5CBaseMessage.md).[`encryptedKey`](api/classes%5CBaseMessage.md#encryptedkey)

***

### key?

> `readonly` `optional` **key**: `` `ag5zfmtoYW4tYWNhZGVteX${string}CxIIVXNlckRhdGEi${string}thaWRf${string}${string}${string}` ``

Defined in: [src/lib/messages/BaseMessage.ts:44](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L44)

#### Raw

[FeedbackSchemaBase.expandKey](api/interfaces%5CFeedbackSchemaBase.md#expandkey)

#### Implementation of

[`IMessage`](api/interfaces%5CIMessage.md).[`key`](api/interfaces%5CIMessage.md#key)

#### Inherited from

[`BaseMessage`](api/classes%5CBaseMessage.md).[`key`](api/classes%5CBaseMessage.md#key)

***

### locked?

> `readonly` `optional` **locked**: `boolean`

Defined in: [src/lib/messages/BaseMessage.ts:57](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L57)

#### Raw

[FeedbackSchemaBase.isLocked](api/interfaces%5CFeedbackSchemaBase.md#islocked)

#### Implementation of

[`IMessage`](api/interfaces%5CIMessage.md).[`locked`](api/interfaces%5CIMessage.md#locked)

#### Inherited from

[`BaseMessage`](api/classes%5CBaseMessage.md).[`locked`](api/classes%5CBaseMessage.md#locked)

***

### pinned?

> `readonly` `optional` **pinned**: `boolean`

Defined in: [src/lib/messages/BaseMessage.ts:61](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L61)

#### Raw

[FeedbackSchemaBase.isPinned](api/interfaces%5CFeedbackSchemaBase.md#ispinned)

#### Implementation of

[`IMessage`](api/interfaces%5CIMessage.md).[`pinned`](api/interfaces%5CIMessage.md#pinned)

#### Inherited from

[`BaseMessage`](api/classes%5CBaseMessage.md).[`pinned`](api/classes%5CBaseMessage.md#pinned)

***

### program?

> `readonly` `optional` **program**: [`Program`](api/classes%5CProgram.md)

Defined in: [src/lib/messages/BaseMessage.ts:35](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L35)

#### Implementation of

[`IMessage`](api/interfaces%5CIMessage.md).[`program`](api/interfaces%5CIMessage.md#program)

#### Inherited from

[`BaseMessage`](api/classes%5CBaseMessage.md).[`program`](api/classes%5CBaseMessage.md#program)

***

### rawData?

> `optional` **rawData**: `RecursivePartial`\<[`FeedbackSchemaBase`](api/interfaces%5CFeedbackSchemaBase.md)\>

Defined in: [src/lib/Wrapper.ts:22](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/Wrapper.ts#L22)

The raw base schema data

#### Remarks

Only set if the base was created from a user schema.

#### Inherited from

[`BaseMessage`](api/classes%5CBaseMessage.md).[`rawData`](api/classes%5CBaseMessage.md#rawdata)

***

### replies?

> `readonly` `optional` **replies**: [`Reply`](api/classes%5CReply.md)[]

Defined in: [src/lib/messages/Message.ts:50](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/Message.ts#L50)

#### Implementation of

[`IMessage`](api/interfaces%5CIMessage.md).[`replies`](api/interfaces%5CIMessage.md#replies)

***

### replyCount?

> `readonly` `optional` **replyCount**: `number`

Defined in: [src/lib/messages/Message.ts:49](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/Message.ts#L49)

#### Implementation of

[`IMessage`](api/interfaces%5CIMessage.md).[`replyCount`](api/interfaces%5CIMessage.md#replycount)

***

### score?

> `readonly` `optional` **score**: `number`

Defined in: [src/lib/messages/BaseMessage.ts:69](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L69)

#### Raw

[FeedbackSchemaBase.lowQualityScore](api/interfaces%5CFeedbackSchemaBase.md#lowqualityscore)

#### Implementation of

[`IMessage`](api/interfaces%5CIMessage.md).[`score`](api/interfaces%5CIMessage.md#score)

#### Inherited from

[`BaseMessage`](api/classes%5CBaseMessage.md).[`score`](api/classes%5CBaseMessage.md#score)

***

### selfDownvoted?

> `readonly` `optional` **selfDownvoted**: `boolean`

Defined in: [src/lib/messages/Message.ts:48](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/Message.ts#L48)

#### Raw

[FeedbackSchemaBase.downVoted](api/interfaces%5CFeedbackSchemaBase.md#downvoted)

#### Implementation of

[`IMessage`](api/interfaces%5CIMessage.md).[`selfDownvoted`](api/interfaces%5CIMessage.md#selfdownvoted)

***

### selfFlagged?

> `readonly` `optional` **selfFlagged**: `boolean`

Defined in: [src/lib/messages/BaseMessage.ts:79](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L79)

#### Raw

[FeedbackSchemaBase.flaggedByUser](api/interfaces%5CFeedbackSchemaBase.md#flaggedbyuser)

#### Implementation of

[`IMessage`](api/interfaces%5CIMessage.md).[`selfFlagged`](api/interfaces%5CIMessage.md#selfflagged)

#### Inherited from

[`BaseMessage`](api/classes%5CBaseMessage.md).[`selfFlagged`](api/classes%5CBaseMessage.md#selfflagged)

***

### selfUpvoted?

> `readonly` `optional` **selfUpvoted**: `boolean`

Defined in: [src/lib/messages/Message.ts:44](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/Message.ts#L44)

#### Raw

[FeedbackSchemaBase.upVoted](api/interfaces%5CFeedbackSchemaBase.md#upvoted)

#### Implementation of

[`IMessage`](api/interfaces%5CIMessage.md).[`selfUpvoted`](api/interfaces%5CIMessage.md#selfupvoted)

***

### text?

> `readonly` `optional` **text**: `string`

Defined in: [src/lib/messages/BaseMessage.ts:33](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L33)

#### Raw

[FeedbackSchemaBase.content](api/interfaces%5CFeedbackSchemaBase.md#content)

#### Implementation of

[`IMessage`](api/interfaces%5CIMessage.md).[`text`](api/interfaces%5CIMessage.md#text)

#### Inherited from

[`BaseMessage`](api/classes%5CBaseMessage.md).[`text`](api/classes%5CBaseMessage.md#text)

***

### verified?

> `readonly` `optional` **verified**: `boolean`

Defined in: [src/lib/messages/BaseMessage.ts:65](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L65)

#### Raw

[FeedbackSchemaBase.definitelyNotSpam](api/interfaces%5CFeedbackSchemaBase.md#definitelynotspam)

#### Implementation of

[`IMessage`](api/interfaces%5CIMessage.md).[`verified`](api/interfaces%5CIMessage.md#verified)

#### Inherited from

[`BaseMessage`](api/classes%5CBaseMessage.md).[`verified`](api/classes%5CBaseMessage.md#verified)

***

### votes?

> `readonly` `optional` **votes**: `number`

Defined in: [src/lib/messages/Message.ts:40](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/Message.ts#L40)

#### Raw

[FeedbackSchemaBase.sumVotesIncremented](api/interfaces%5CFeedbackSchemaBase.md#sumvotesincremented)

#### Implementation of

[`IMessage`](api/interfaces%5CIMessage.md).[`votes`](api/interfaces%5CIMessage.md#votes)

***

### Type

> `readonly` `static` **Type**: *typeof* [`MessageType`](api/enumerations%5CMessageType.md) = `MessageType`

Defined in: [src/lib/messages/Message.ts:35](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/Message.ts#L35)

Aliases for the message types.

## Accessors

### bySelf

#### Get Signature

> **get** **bySelf**(): `boolean`

Defined in: [src/lib/messages/BaseMessage.ts:84](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L84)

Checks if the message was written by the client user

##### Returns

`boolean`

#### Inherited from

[`BaseMessage`](api/classes%5CBaseMessage.md).[`bySelf`](api/classes%5CBaseMessage.md#byself)

***

### selfVoted

#### Get Signature

> **get** **selfVoted**(): `null` \| `1` \| `0` \| `-1`

Defined in: [src/lib/messages/Message.ts:59](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/Message.ts#L59)

##### See

 - [Message.selfUpvoted](api/classes%5CMessage.md#selfupvoted)
 - [Message.selfDownvoted](api/classes%5CMessage.md#selfdownvoted)

##### Returns

`null` \| `1` \| `0` \| `-1`

`1` if the message was upvoted by the user, `-1` if it was downvoted,
and `0` if it was not voted on. `null` if the user is not logged in.

***

### url

#### Get Signature

> **get** **url**(): `null` \| `string`

Defined in: [src/lib/messages/BaseMessage.ts:88](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L88)

##### Returns

`null` \| `string`

#### Inherited from

[`BaseMessage`](api/classes%5CBaseMessage.md).[`url`](api/classes%5CBaseMessage.md#url)

## Methods

### byUser()

> **byUser**(`user`): `boolean`

Defined in: [src/lib/messages/BaseMessage.ts:138](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L138)

Checks if the message was written by the given user

#### Parameters

##### user

[`User`](api/classes%5CUser.md)

#### Returns

`boolean`

#### Inherited from

[`BaseMessage`](api/classes%5CBaseMessage.md).[`byUser`](api/classes%5CBaseMessage.md#byuser)

***

### copy()

> **copy**(`message`): [`Message`](api/classes%5CMessage.md)

Defined in: [src/lib/messages/Message.ts:105](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/Message.ts#L105)

Updates data into the class

#### Parameters

##### message

[`IMessage`](api/interfaces%5CIMessage.md)

#### Returns

[`Message`](api/classes%5CMessage.md)

The class instance

#### Overrides

[`BaseMessage`](api/classes%5CBaseMessage.md).[`copy`](api/classes%5CBaseMessage.md#copy)

***

### copyFromSchema()

> **copyFromSchema**(`schema`): [`Message`](api/classes%5CMessage.md)

Defined in: [src/lib/Wrapper.ts:65](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/Wrapper.ts#L65)

Updates data from a schema into the instance

#### Parameters

##### schema

`RecursivePartial`\<[`FeedbackSchemaBase`](api/interfaces%5CFeedbackSchemaBase.md)\>

The schema to copy from

#### Returns

[`Message`](api/classes%5CMessage.md)

The class instance

#### Inherited from

[`BaseMessage`](api/classes%5CBaseMessage.md).[`copyFromSchema`](api/classes%5CBaseMessage.md#copyfromschema)

***

### get()

> **get**(`client`): `Promise`\<[`Message`](api/classes%5CMessage.md)\>

Defined in: [src/lib/messages/Message.ts:109](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/Message.ts#L109)

Gets and updates the instance's data

#### Parameters

##### client

[`Client`](api/classes%5CClient.md) = `...`

The API client to use

#### Returns

`Promise`\<[`Message`](api/classes%5CMessage.md)\>

#### Overrides

[`BaseMessage`](api/classes%5CBaseMessage.md).[`get`](api/classes%5CBaseMessage.md#get)

***

### getAllReplies()

> **getAllReplies**(`client`): `Promise`\<[`Message`](api/classes%5CMessage.md)\>

Defined in: [src/lib/messages/Message.ts:134](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/Message.ts#L134)

#### Parameters

##### client

[`Client`](api/classes%5CClient.md) = `...`

#### Returns

`Promise`\<[`Message`](api/classes%5CMessage.md)\>

#### See

[Client.getAllMessageReplies](api/classes%5CClient.md#getallmessagereplies)

***

### getReplies()

> **getReplies**(`client`, `limit`?): `AsyncGenerator`\<[`Reply`](api/classes%5CReply.md)[], [`Message`](api/classes%5CMessage.md), `unknown`\>

Defined in: [src/lib/messages/Message.ts:118](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/Message.ts#L118)

#### Parameters

##### client

[`Client`](api/classes%5CClient.md) = `...`

##### limit?

`number`

#### Returns

`AsyncGenerator`\<[`Reply`](api/classes%5CReply.md)[], [`Message`](api/classes%5CMessage.md), `unknown`\>

#### See

[Client.getMessageReplies](api/classes%5CClient.md#getmessagereplies)

***

### is()

> **is**(`message`): `boolean`

Defined in: [src/lib/messages/BaseMessage.ts:145](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L145)

Checks if the message is the same as the given message

#### Parameters

##### message

[`IBaseMessage`](api/interfaces%5CIBaseMessage.md) | [`BaseMessage`](api/classes%5CBaseMessage.md)

#### Returns

`boolean`

#### Inherited from

[`BaseMessage`](api/classes%5CBaseMessage.md).[`is`](api/classes%5CBaseMessage.md#is)

***

### isSchema()

> **isSchema**(`schema`): `boolean`

Defined in: [src/lib/Wrapper.ts:88](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/Wrapper.ts#L88)

Checks if the schema represents the same instance

#### Parameters

##### schema

`RecursivePartial`\<[`FeedbackSchemaBase`](api/interfaces%5CFeedbackSchemaBase.md)\>

#### Returns

`boolean`

#### Inherited from

[`BaseMessage`](api/classes%5CBaseMessage.md).[`isSchema`](api/classes%5CBaseMessage.md#isschema)

***

### transformSchema()

> **transformSchema**(`schema`): [`IMessage`](api/interfaces%5CIMessage.md)

Defined in: [src/lib/messages/Message.ts:91](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/Message.ts#L91)

Transforms a API schema into an abstracted interface

#### Parameters

##### schema

`RecursivePartial`\<[`BasicFeedbackSchema`](api/interfaces%5CBasicFeedbackSchema.md) \| [`QuestionFeedbackSchema`](api/interfaces%5CQuestionFeedbackSchema.md) \| [`AnswerFeedbackSchema`](api/interfaces%5CAnswerFeedbackSchema.md)\>

The schema to transform

#### Returns

[`IMessage`](api/interfaces%5CIMessage.md)

#### Overrides

[`BaseMessage`](api/classes%5CBaseMessage.md).[`transformSchema`](api/classes%5CBaseMessage.md#transformschema)

***

### fromIdentifier()

> `static` **fromIdentifier**(`identifier`): [`Message`](api/classes%5CMessage.md)

Defined in: [src/lib/messages/Message.ts:75](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/Message.ts#L75)

#### Parameters

##### identifier

`` `ag5zfmtoYW4tYWNhZGVteX${string}CxIIVXNlckRhdGEi${string}thaWRf${string}${string}${string}` `` | `` `kaencrypted_${string}_${string}` ``

#### Returns

[`Message`](api/classes%5CMessage.md)

***

### fromSchema()

> `static` **fromSchema**(`schema`): [`Message`](api/classes%5CMessage.md)

Defined in: [src/lib/messages/Message.ts:64](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/Message.ts#L64)

#### Parameters

##### schema

`RecursivePartial`\<[`BasicFeedbackSchema`](api/interfaces%5CBasicFeedbackSchema.md) \| [`QuestionFeedbackSchema`](api/interfaces%5CQuestionFeedbackSchema.md) \| [`AnswerFeedbackSchema`](api/interfaces%5CAnswerFeedbackSchema.md)\>

#### Returns

[`Message`](api/classes%5CMessage.md)
