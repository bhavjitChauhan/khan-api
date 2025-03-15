Defined in: [src/lib/messages/Question.ts:20](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/Question.ts#L20)

## Remarks

Note that Help Requests are a type of Question.

## Raw

[QuestionFeedbackSchema](api/interfaces%5CQuestionFeedbackSchema.md)

## Extends

- [`Message`](api/classes%5CMessage.md)

## Implements

- [`IQuestion`](api/interfaces%5CIQuestion.md)

## Constructors

### new Question()

> **new Question**(`data`?): [`Question`](api/classes%5CQuestion.md)

Defined in: [src/lib/Wrapper.ts:36](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/Wrapper.ts#L36)

Creates a new class instance

#### Parameters

##### data?

[`IBaseMessage`](api/interfaces%5CIBaseMessage.md)

#### Returns

[`Question`](api/classes%5CQuestion.md)

#### Inherited from

[`Message`](api/classes%5CMessage.md).[`constructor`](api/classes%5CMessage.md#constructors)

### new Question()

> **new Question**(`client`, `data`?): [`Question`](api/classes%5CQuestion.md)

Defined in: [src/lib/Wrapper.ts:37](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/Wrapper.ts#L37)

#### Parameters

##### client

[`Client`](api/classes%5CClient.md)

##### data?

[`IBaseMessage`](api/interfaces%5CIBaseMessage.md)

#### Returns

[`Question`](api/classes%5CQuestion.md)

#### Inherited from

[`Message`](api/classes%5CMessage.md).[`constructor`](api/classes%5CMessage.md#constructors)

## Properties

### answerCount?

> `readonly` `optional` **answerCount**: `number`

Defined in: [src/lib/messages/Question.ts:21](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/Question.ts#L21)

#### Implementation of

[`IQuestion`](api/interfaces%5CIQuestion.md).[`answerCount`](api/interfaces%5CIQuestion.md#answercount)

***

### answers?

> `readonly` `optional` **answers**: [`Answer`](api/classes%5CAnswer.md)[]

Defined in: [src/lib/messages/Question.ts:22](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/Question.ts#L22)

#### Implementation of

[`IQuestion`](api/interfaces%5CIQuestion.md).[`answers`](api/interfaces%5CIQuestion.md#answers)

***

### author?

> `readonly` `optional` **author**: [`User`](api/classes%5CUser.md)

Defined in: [src/lib/messages/BaseMessage.ts:34](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L34)

#### Implementation of

[`IQuestion`](api/interfaces%5CIQuestion.md).[`author`](api/interfaces%5CIQuestion.md#author)

#### Inherited from

[`Message`](api/classes%5CMessage.md).[`author`](api/classes%5CMessage.md#author)

***

### byVideoAuthor?

> `readonly` `optional` **byVideoAuthor**: `boolean`

Defined in: [src/lib/messages/BaseMessage.ts:74](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L74)

#### Raw

[FeedbackSchemaBase.fromVideoAuthor](api/interfaces%5CFeedbackSchemaBase.md#fromvideoauthor)

#### Implementation of

[`IQuestion`](api/interfaces%5CIQuestion.md).[`byVideoAuthor`](api/interfaces%5CIQuestion.md#byvideoauthor)

#### Inherited from

[`Message`](api/classes%5CMessage.md).[`byVideoAuthor`](api/classes%5CMessage.md#byvideoauthor)

***

### client?

> `optional` **client**: [`Client`](api/classes%5CClient.md)

Defined in: [src/lib/Wrapper.ts:15](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/Wrapper.ts#L15)

The client that this base was fetched with.

#### Inherited from

[`Message`](api/classes%5CMessage.md).[`client`](api/classes%5CMessage.md#client-1)

***

### created?

> `readonly` `optional` **created**: `Date`

Defined in: [src/lib/messages/BaseMessage.ts:39](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L39)

#### Raw

[FeedbackSchemaBase.date](api/interfaces%5CFeedbackSchemaBase.md#date)

#### Implementation of

[`IQuestion`](api/interfaces%5CIQuestion.md).[`created`](api/interfaces%5CIQuestion.md#created)

#### Inherited from

[`Message`](api/classes%5CMessage.md).[`created`](api/classes%5CMessage.md#created)

***

### deleted?

> `readonly` `optional` **deleted**: `boolean`

Defined in: [src/lib/messages/BaseMessage.ts:53](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L53)

#### Raw

[FeedbackSchemaBase.appearsAsDeleted](api/interfaces%5CFeedbackSchemaBase.md#appearsasdeleted)

#### Implementation of

[`IQuestion`](api/interfaces%5CIQuestion.md).[`deleted`](api/interfaces%5CIQuestion.md#deleted)

#### Inherited from

[`Message`](api/classes%5CMessage.md).[`deleted`](api/classes%5CMessage.md#deleted)

***

### encryptedKey?

> `readonly` `optional` **encryptedKey**: `` `kaencrypted_${string}_${string}` ``

Defined in: [src/lib/messages/BaseMessage.ts:48](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L48)

#### Raw

[FeedbackSchemaBase.key](api/interfaces%5CFeedbackSchemaBase.md#key)

#### Implementation of

[`IQuestion`](api/interfaces%5CIQuestion.md).[`encryptedKey`](api/interfaces%5CIQuestion.md#encryptedkey)

#### Inherited from

[`Message`](api/classes%5CMessage.md).[`encryptedKey`](api/classes%5CMessage.md#encryptedkey)

***

### key?

> `readonly` `optional` **key**: `` `ag5zfmtoYW4tYWNhZGVteX${string}CxIIVXNlckRhdGEi${string}thaWRf${string}${string}${string}` ``

Defined in: [src/lib/messages/BaseMessage.ts:44](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L44)

#### Raw

[FeedbackSchemaBase.expandKey](api/interfaces%5CFeedbackSchemaBase.md#expandkey)

#### Implementation of

[`IQuestion`](api/interfaces%5CIQuestion.md).[`key`](api/interfaces%5CIQuestion.md#key)

#### Inherited from

[`Message`](api/classes%5CMessage.md).[`key`](api/classes%5CMessage.md#key)

***

### locked?

> `readonly` `optional` **locked**: `boolean`

Defined in: [src/lib/messages/BaseMessage.ts:57](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L57)

#### Raw

[FeedbackSchemaBase.isLocked](api/interfaces%5CFeedbackSchemaBase.md#islocked)

#### Implementation of

[`IQuestion`](api/interfaces%5CIQuestion.md).[`locked`](api/interfaces%5CIQuestion.md#locked)

#### Inherited from

[`Message`](api/classes%5CMessage.md).[`locked`](api/classes%5CMessage.md#locked)

***

### old?

> `readonly` `optional` **old**: `boolean`

Defined in: [src/lib/messages/Question.ts:26](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/Question.ts#L26)

#### Raw

[QuestionFeedbackSchema.isOld](api/interfaces%5CQuestionFeedbackSchema.md#isold)

#### Implementation of

[`IQuestion`](api/interfaces%5CIQuestion.md).[`old`](api/interfaces%5CIQuestion.md#old)

***

### pinned?

> `readonly` `optional` **pinned**: `boolean`

Defined in: [src/lib/messages/BaseMessage.ts:61](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L61)

#### Raw

[FeedbackSchemaBase.isPinned](api/interfaces%5CFeedbackSchemaBase.md#ispinned)

#### Implementation of

[`IQuestion`](api/interfaces%5CIQuestion.md).[`pinned`](api/interfaces%5CIQuestion.md#pinned)

#### Inherited from

[`Message`](api/classes%5CMessage.md).[`pinned`](api/classes%5CMessage.md#pinned)

***

### program?

> `readonly` `optional` **program**: [`Program`](api/classes%5CProgram.md)

Defined in: [src/lib/messages/BaseMessage.ts:35](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L35)

#### Implementation of

[`IQuestion`](api/interfaces%5CIQuestion.md).[`program`](api/interfaces%5CIQuestion.md#program)

#### Inherited from

[`Message`](api/classes%5CMessage.md).[`program`](api/classes%5CMessage.md#program)

***

### rawData?

> `optional` **rawData**: `RecursivePartial`\<[`FeedbackSchemaBase`](api/interfaces%5CFeedbackSchemaBase.md)\>

Defined in: [src/lib/Wrapper.ts:22](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/Wrapper.ts#L22)

The raw base schema data

#### Remarks

Only set if the base was created from a user schema.

#### Inherited from

[`Message`](api/classes%5CMessage.md).[`rawData`](api/classes%5CMessage.md#rawdata)

***

### replies?

> `readonly` `optional` **replies**: [`Reply`](api/classes%5CReply.md)[]

Defined in: [src/lib/messages/Message.ts:50](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/Message.ts#L50)

#### Implementation of

[`IQuestion`](api/interfaces%5CIQuestion.md).[`replies`](api/interfaces%5CIQuestion.md#replies)

#### Inherited from

[`Message`](api/classes%5CMessage.md).[`replies`](api/classes%5CMessage.md#replies)

***

### replyCount?

> `readonly` `optional` **replyCount**: `number`

Defined in: [src/lib/messages/Message.ts:49](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/Message.ts#L49)

#### Implementation of

[`IQuestion`](api/interfaces%5CIQuestion.md).[`replyCount`](api/interfaces%5CIQuestion.md#replycount)

#### Inherited from

[`Message`](api/classes%5CMessage.md).[`replyCount`](api/classes%5CMessage.md#replycount)

***

### score?

> `readonly` `optional` **score**: `number`

Defined in: [src/lib/messages/BaseMessage.ts:69](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L69)

#### Raw

[FeedbackSchemaBase.lowQualityScore](api/interfaces%5CFeedbackSchemaBase.md#lowqualityscore)

#### Implementation of

[`IQuestion`](api/interfaces%5CIQuestion.md).[`score`](api/interfaces%5CIQuestion.md#score)

#### Inherited from

[`Message`](api/classes%5CMessage.md).[`score`](api/classes%5CMessage.md#score)

***

### selfDownvoted?

> `readonly` `optional` **selfDownvoted**: `boolean`

Defined in: [src/lib/messages/Message.ts:48](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/Message.ts#L48)

#### Raw

[FeedbackSchemaBase.downVoted](api/interfaces%5CFeedbackSchemaBase.md#downvoted)

#### Implementation of

[`IQuestion`](api/interfaces%5CIQuestion.md).[`selfDownvoted`](api/interfaces%5CIQuestion.md#selfdownvoted)

#### Inherited from

[`Message`](api/classes%5CMessage.md).[`selfDownvoted`](api/classes%5CMessage.md#selfdownvoted)

***

### selfFlagged?

> `readonly` `optional` **selfFlagged**: `boolean`

Defined in: [src/lib/messages/BaseMessage.ts:79](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L79)

#### Raw

[FeedbackSchemaBase.flaggedByUser](api/interfaces%5CFeedbackSchemaBase.md#flaggedbyuser)

#### Implementation of

[`IQuestion`](api/interfaces%5CIQuestion.md).[`selfFlagged`](api/interfaces%5CIQuestion.md#selfflagged)

#### Inherited from

[`Message`](api/classes%5CMessage.md).[`selfFlagged`](api/classes%5CMessage.md#selfflagged)

***

### selfUpvoted?

> `readonly` `optional` **selfUpvoted**: `boolean`

Defined in: [src/lib/messages/Message.ts:44](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/Message.ts#L44)

#### Raw

[FeedbackSchemaBase.upVoted](api/interfaces%5CFeedbackSchemaBase.md#upvoted)

#### Implementation of

[`IQuestion`](api/interfaces%5CIQuestion.md).[`selfUpvoted`](api/interfaces%5CIQuestion.md#selfupvoted)

#### Inherited from

[`Message`](api/classes%5CMessage.md).[`selfUpvoted`](api/classes%5CMessage.md#selfupvoted)

***

### text?

> `readonly` `optional` **text**: `string`

Defined in: [src/lib/messages/BaseMessage.ts:33](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L33)

#### Raw

[FeedbackSchemaBase.content](api/interfaces%5CFeedbackSchemaBase.md#content)

#### Implementation of

[`IQuestion`](api/interfaces%5CIQuestion.md).[`text`](api/interfaces%5CIQuestion.md#text)

#### Inherited from

[`Message`](api/classes%5CMessage.md).[`text`](api/classes%5CMessage.md#text)

***

### verified?

> `readonly` `optional` **verified**: `boolean`

Defined in: [src/lib/messages/BaseMessage.ts:65](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L65)

#### Raw

[FeedbackSchemaBase.definitelyNotSpam](api/interfaces%5CFeedbackSchemaBase.md#definitelynotspam)

#### Implementation of

[`IQuestion`](api/interfaces%5CIQuestion.md).[`verified`](api/interfaces%5CIQuestion.md#verified)

#### Inherited from

[`Message`](api/classes%5CMessage.md).[`verified`](api/classes%5CMessage.md#verified)

***

### votes?

> `readonly` `optional` **votes**: `number`

Defined in: [src/lib/messages/Message.ts:40](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/Message.ts#L40)

#### Raw

[FeedbackSchemaBase.sumVotesIncremented](api/interfaces%5CFeedbackSchemaBase.md#sumvotesincremented)

#### Implementation of

[`IQuestion`](api/interfaces%5CIQuestion.md).[`votes`](api/interfaces%5CIQuestion.md#votes)

#### Inherited from

[`Message`](api/classes%5CMessage.md).[`votes`](api/classes%5CMessage.md#votes)

***

### Type

> `readonly` `static` **Type**: *typeof* [`MessageType`](api/enumerations%5CMessageType.md) = `MessageType`

Defined in: [src/lib/messages/Message.ts:35](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/Message.ts#L35)

Aliases for the message types.

#### Inherited from

[`Message`](api/classes%5CMessage.md).[`Type`](api/classes%5CMessage.md#type)

## Accessors

### bySelf

#### Get Signature

> **get** **bySelf**(): `boolean`

Defined in: [src/lib/messages/BaseMessage.ts:84](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L84)

Checks if the message was written by the client user

##### Returns

`boolean`

#### Inherited from

[`Message`](api/classes%5CMessage.md).[`bySelf`](api/classes%5CMessage.md#byself)

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

#### Inherited from

[`Message`](api/classes%5CMessage.md).[`selfVoted`](api/classes%5CMessage.md#selfvoted)

***

### url

#### Get Signature

> **get** **url**(): `null` \| `string`

Defined in: [src/lib/messages/BaseMessage.ts:88](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L88)

##### Returns

`null` \| `string`

#### Inherited from

[`Message`](api/classes%5CMessage.md).[`url`](api/classes%5CMessage.md#url)

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

[`Message`](api/classes%5CMessage.md).[`byUser`](api/classes%5CMessage.md#byuser)

***

### copy()

> **copy**(`question`): [`Question`](api/classes%5CQuestion.md)

Defined in: [src/lib/messages/Question.ts:60](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/Question.ts#L60)

Updates data into the class

#### Parameters

##### question

[`IQuestion`](api/interfaces%5CIQuestion.md)

#### Returns

[`Question`](api/classes%5CQuestion.md)

The class instance

#### Overrides

[`Message`](api/classes%5CMessage.md).[`copy`](api/classes%5CMessage.md#copy)

***

### copyFromSchema()

> **copyFromSchema**(`schema`): [`Question`](api/classes%5CQuestion.md)

Defined in: [src/lib/Wrapper.ts:65](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/Wrapper.ts#L65)

Updates data from a schema into the instance

#### Parameters

##### schema

`RecursivePartial`\<[`FeedbackSchemaBase`](api/interfaces%5CFeedbackSchemaBase.md)\>

The schema to copy from

#### Returns

[`Question`](api/classes%5CQuestion.md)

The class instance

#### Inherited from

[`Message`](api/classes%5CMessage.md).[`copyFromSchema`](api/classes%5CMessage.md#copyfromschema)

***

### get()

> **get**(`client`): `Promise`\<[`Question`](api/classes%5CQuestion.md)\>

Defined in: [src/lib/messages/Message.ts:109](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/Message.ts#L109)

Gets and updates the instance's data

#### Parameters

##### client

[`Client`](api/classes%5CClient.md) = `...`

The API client to use

#### Returns

`Promise`\<[`Question`](api/classes%5CQuestion.md)\>

#### Inherited from

[`Message`](api/classes%5CMessage.md).[`get`](api/classes%5CMessage.md#get)

***

### getAllReplies()

> **getAllReplies**(`client`): `Promise`\<[`Question`](api/classes%5CQuestion.md)\>

Defined in: [src/lib/messages/Message.ts:134](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/Message.ts#L134)

#### Parameters

##### client

[`Client`](api/classes%5CClient.md) = `...`

#### Returns

`Promise`\<[`Question`](api/classes%5CQuestion.md)\>

#### See

[Client.getAllMessageReplies](api/classes%5CClient.md#getallmessagereplies)

#### Inherited from

[`Message`](api/classes%5CMessage.md).[`getAllReplies`](api/classes%5CMessage.md#getallreplies)

***

### getReplies()

> **getReplies**(`client`, `limit`?): `AsyncGenerator`\<[`Reply`](api/classes%5CReply.md)[], [`Question`](api/classes%5CQuestion.md), `unknown`\>

Defined in: [src/lib/messages/Message.ts:118](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/Message.ts#L118)

#### Parameters

##### client

[`Client`](api/classes%5CClient.md) = `...`

##### limit?

`number`

#### Returns

`AsyncGenerator`\<[`Reply`](api/classes%5CReply.md)[], [`Question`](api/classes%5CQuestion.md), `unknown`\>

#### See

[Client.getMessageReplies](api/classes%5CClient.md#getmessagereplies)

#### Inherited from

[`Message`](api/classes%5CMessage.md).[`getReplies`](api/classes%5CMessage.md#getreplies)

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

[`Message`](api/classes%5CMessage.md).[`is`](api/classes%5CMessage.md#is)

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

[`Message`](api/classes%5CMessage.md).[`isSchema`](api/classes%5CMessage.md#isschema)

***

### transformSchema()

> **transformSchema**(`schema`): [`IQuestion`](api/interfaces%5CIQuestion.md)

Defined in: [src/lib/messages/Question.ts:44](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/Question.ts#L44)

Transforms a API schema into an abstracted interface

#### Parameters

##### schema

`RecursivePartial`\<[`QuestionFeedbackSchema`](api/interfaces%5CQuestionFeedbackSchema.md)\>

The schema to transform

#### Returns

[`IQuestion`](api/interfaces%5CIQuestion.md)

#### Overrides

[`Message`](api/classes%5CMessage.md).[`transformSchema`](api/classes%5CMessage.md#transformschema)

***

### fromIdentifier()

> `static` **fromIdentifier**(`identifier`): [`Question`](api/classes%5CQuestion.md)

Defined in: [src/lib/messages/Question.ts:35](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/Question.ts#L35)

#### Parameters

##### identifier

`` `ag5zfmtoYW4tYWNhZGVteX${string}CxIIVXNlckRhdGEi${string}thaWRf${string}${string}${string}` `` | `` `kaencrypted_${string}_${string}` ``

#### Returns

[`Question`](api/classes%5CQuestion.md)

#### Overrides

[`Message`](api/classes%5CMessage.md).[`fromIdentifier`](api/classes%5CMessage.md#fromidentifier)

***

### fromSchema()

> `static` **fromSchema**(`schema`): [`Question`](api/classes%5CQuestion.md)

Defined in: [src/lib/messages/Question.ts:28](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/Question.ts#L28)

#### Parameters

##### schema

`RecursivePartial`\<[`QuestionFeedbackSchema`](api/interfaces%5CQuestionFeedbackSchema.md)\>

#### Returns

[`Question`](api/classes%5CQuestion.md)

#### Overrides

[`Message`](api/classes%5CMessage.md).[`fromSchema`](api/classes%5CMessage.md#fromschema)
