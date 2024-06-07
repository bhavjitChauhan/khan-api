## Remarks

Note that Help Requests are a type of Question.

## Raw

[QuestionFeedbackSchema](api%5Cinterfaces%5CQuestionFeedbackSchema.md)

## Extends

- [`Message`](api%5Cclasses%5CMessage.md)

## Implements

- [`IQuestion`](api%5Cinterfaces%5CIQuestion.md)

## Constructors

### new Question()

> **new Question**(`data`?): [`Question`](api%5Cclasses%5CQuestion.md)

Creates a new class instance

#### Parameters

• **data?**: [`IBaseMessage`](api%5Cinterfaces%5CIBaseMessage.md)

#### Returns

[`Question`](api%5Cclasses%5CQuestion.md)

#### Inherited from

[`Message`](api%5Cclasses%5CMessage.md).[`constructor`](api%5Cclasses%5CMessage.md#constructors)

#### Source

[src/lib/Wrapper.ts:36](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/Wrapper.ts#L36)

### new Question()

> **new Question**(`client`, `data`?): [`Question`](api%5Cclasses%5CQuestion.md)

#### Parameters

• **client**: [`Client`](api%5Cclasses%5CClient.md)

• **data?**: [`IBaseMessage`](api%5Cinterfaces%5CIBaseMessage.md)

#### Returns

[`Question`](api%5Cclasses%5CQuestion.md)

#### Inherited from

[`Message`](api%5Cclasses%5CMessage.md).[`constructor`](api%5Cclasses%5CMessage.md#constructors)

#### Source

[src/lib/Wrapper.ts:37](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/Wrapper.ts#L37)

## Properties

### answerCount?

> `optional` `readonly` **answerCount**: `number`

#### Implementation of

[`IQuestion`](api%5Cinterfaces%5CIQuestion.md).[`answerCount`](api%5Cinterfaces%5CIQuestion.md#answercount)

#### Source

[src/lib/messages/Question.ts:21](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/Question.ts#L21)

***

### answers?

> `optional` `readonly` **answers**: [`Answer`](api%5Cclasses%5CAnswer.md)[]

#### Implementation of

[`IQuestion`](api%5Cinterfaces%5CIQuestion.md).[`answers`](api%5Cinterfaces%5CIQuestion.md#answers)

#### Source

[src/lib/messages/Question.ts:22](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/Question.ts#L22)

***

### author?

> `optional` `readonly` **author**: [`User`](api%5Cclasses%5CUser.md)

#### Implementation of

[`IQuestion`](api%5Cinterfaces%5CIQuestion.md).[`author`](api%5Cinterfaces%5CIQuestion.md#author)

#### Inherited from

[`Message`](api%5Cclasses%5CMessage.md).[`author`](api%5Cclasses%5CMessage.md#author)

#### Source

[src/lib/messages/BaseMessage.ts:34](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L34)

***

### byVideoAuthor?

> `optional` `readonly` **byVideoAuthor**: `boolean`

#### Raw

[FeedbackSchemaBase.fromVideoAuthor](api%5Cinterfaces%5CFeedbackSchemaBase.md#fromvideoauthor)

#### Implementation of

[`IQuestion`](api%5Cinterfaces%5CIQuestion.md).[`byVideoAuthor`](api%5Cinterfaces%5CIQuestion.md#byvideoauthor)

#### Inherited from

[`Message`](api%5Cclasses%5CMessage.md).[`byVideoAuthor`](api%5Cclasses%5CMessage.md#byvideoauthor)

#### Source

[src/lib/messages/BaseMessage.ts:74](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L74)

***

### client?

> `optional` **client**: [`Client`](api%5Cclasses%5CClient.md)

The client that this base was fetched with.

#### Inherited from

[`Message`](api%5Cclasses%5CMessage.md).[`client`](api%5Cclasses%5CMessage.md#client)

#### Source

[src/lib/Wrapper.ts:15](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/Wrapper.ts#L15)

***

### created?

> `optional` `readonly` **created**: `Date`

#### Raw

[FeedbackSchemaBase.date](api%5Cinterfaces%5CFeedbackSchemaBase.md#date)

#### Implementation of

[`IQuestion`](api%5Cinterfaces%5CIQuestion.md).[`created`](api%5Cinterfaces%5CIQuestion.md#created)

#### Inherited from

[`Message`](api%5Cclasses%5CMessage.md).[`created`](api%5Cclasses%5CMessage.md#created)

#### Source

[src/lib/messages/BaseMessage.ts:39](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L39)

***

### deleted?

> `optional` `readonly` **deleted**: `boolean`

#### Raw

[FeedbackSchemaBase.appearsAsDeleted](api%5Cinterfaces%5CFeedbackSchemaBase.md#appearsasdeleted)

#### Implementation of

[`IQuestion`](api%5Cinterfaces%5CIQuestion.md).[`deleted`](api%5Cinterfaces%5CIQuestion.md#deleted)

#### Inherited from

[`Message`](api%5Cclasses%5CMessage.md).[`deleted`](api%5Cclasses%5CMessage.md#deleted)

#### Source

[src/lib/messages/BaseMessage.ts:53](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L53)

***

### encryptedKey?

> `optional` `readonly` **encryptedKey**: \`kaencrypted\_$\{string\}\_$\{string\}\`

#### Raw

[FeedbackSchemaBase.key](api%5Cinterfaces%5CFeedbackSchemaBase.md#key)

#### Implementation of

[`IQuestion`](api%5Cinterfaces%5CIQuestion.md).[`encryptedKey`](api%5Cinterfaces%5CIQuestion.md#encryptedkey)

#### Inherited from

[`Message`](api%5Cclasses%5CMessage.md).[`encryptedKey`](api%5Cclasses%5CMessage.md#encryptedkey)

#### Source

[src/lib/messages/BaseMessage.ts:48](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L48)

***

### key?

> `optional` `readonly` **key**: \`ag5zfmtoYW4tYWNhZGVteX$\{string\}CxIIVXNlckRhdGEi$\{string\}thaWRf$\{string\}$\{string\}$\{string\}\`

#### Raw

[FeedbackSchemaBase.expandKey](api%5Cinterfaces%5CFeedbackSchemaBase.md#expandkey)

#### Implementation of

[`IQuestion`](api%5Cinterfaces%5CIQuestion.md).[`key`](api%5Cinterfaces%5CIQuestion.md#key)

#### Inherited from

[`Message`](api%5Cclasses%5CMessage.md).[`key`](api%5Cclasses%5CMessage.md#key)

#### Source

[src/lib/messages/BaseMessage.ts:44](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L44)

***

### locked?

> `optional` `readonly` **locked**: `boolean`

#### Raw

[FeedbackSchemaBase.isLocked](api%5Cinterfaces%5CFeedbackSchemaBase.md#islocked)

#### Implementation of

[`IQuestion`](api%5Cinterfaces%5CIQuestion.md).[`locked`](api%5Cinterfaces%5CIQuestion.md#locked)

#### Inherited from

[`Message`](api%5Cclasses%5CMessage.md).[`locked`](api%5Cclasses%5CMessage.md#locked)

#### Source

[src/lib/messages/BaseMessage.ts:57](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L57)

***

### old?

> `optional` `readonly` **old**: `boolean`

#### Raw

[QuestionFeedbackSchema.isOld](api%5Cinterfaces%5CQuestionFeedbackSchema.md#isold)

#### Implementation of

[`IQuestion`](api%5Cinterfaces%5CIQuestion.md).[`old`](api%5Cinterfaces%5CIQuestion.md#old)

#### Source

[src/lib/messages/Question.ts:26](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/Question.ts#L26)

***

### pinned?

> `optional` `readonly` **pinned**: `boolean`

#### Raw

[FeedbackSchemaBase.isPinned](api%5Cinterfaces%5CFeedbackSchemaBase.md#ispinned)

#### Implementation of

[`IQuestion`](api%5Cinterfaces%5CIQuestion.md).[`pinned`](api%5Cinterfaces%5CIQuestion.md#pinned)

#### Inherited from

[`Message`](api%5Cclasses%5CMessage.md).[`pinned`](api%5Cclasses%5CMessage.md#pinned)

#### Source

[src/lib/messages/BaseMessage.ts:61](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L61)

***

### program?

> `optional` `readonly` **program**: [`Program`](api%5Cclasses%5CProgram.md)

#### Implementation of

[`IQuestion`](api%5Cinterfaces%5CIQuestion.md).[`program`](api%5Cinterfaces%5CIQuestion.md#program)

#### Inherited from

[`Message`](api%5Cclasses%5CMessage.md).[`program`](api%5Cclasses%5CMessage.md#program)

#### Source

[src/lib/messages/BaseMessage.ts:35](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L35)

***

### rawData?

> `optional` **rawData**: `RecursivePartial`\<[`FeedbackSchemaBase`](api%5Cinterfaces%5CFeedbackSchemaBase.md)\>

The raw base schema data

#### Remarks

Only set if the base was created from a user schema.

#### Inherited from

[`Message`](api%5Cclasses%5CMessage.md).[`rawData`](api%5Cclasses%5CMessage.md#rawdata)

#### Source

[src/lib/Wrapper.ts:22](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/Wrapper.ts#L22)

***

### replies?

> `optional` `readonly` **replies**: [`Reply`](api%5Cclasses%5CReply.md)[]

#### Implementation of

[`IQuestion`](api%5Cinterfaces%5CIQuestion.md).[`replies`](api%5Cinterfaces%5CIQuestion.md#replies)

#### Inherited from

[`Message`](api%5Cclasses%5CMessage.md).[`replies`](api%5Cclasses%5CMessage.md#replies)

#### Source

[src/lib/messages/Message.ts:50](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/Message.ts#L50)

***

### replyCount?

> `optional` `readonly` **replyCount**: `number`

#### Implementation of

[`IQuestion`](api%5Cinterfaces%5CIQuestion.md).[`replyCount`](api%5Cinterfaces%5CIQuestion.md#replycount)

#### Inherited from

[`Message`](api%5Cclasses%5CMessage.md).[`replyCount`](api%5Cclasses%5CMessage.md#replycount)

#### Source

[src/lib/messages/Message.ts:49](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/Message.ts#L49)

***

### score?

> `optional` `readonly` **score**: `number`

#### Raw

[FeedbackSchemaBase.lowQualityScore](api%5Cinterfaces%5CFeedbackSchemaBase.md#lowqualityscore)

#### Implementation of

[`IQuestion`](api%5Cinterfaces%5CIQuestion.md).[`score`](api%5Cinterfaces%5CIQuestion.md#score)

#### Inherited from

[`Message`](api%5Cclasses%5CMessage.md).[`score`](api%5Cclasses%5CMessage.md#score)

#### Source

[src/lib/messages/BaseMessage.ts:69](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L69)

***

### selfDownvoted?

> `optional` `readonly` **selfDownvoted**: `boolean`

#### Raw

[FeedbackSchemaBase.downVoted](api%5Cinterfaces%5CFeedbackSchemaBase.md#downvoted)

#### Implementation of

[`IQuestion`](api%5Cinterfaces%5CIQuestion.md).[`selfDownvoted`](api%5Cinterfaces%5CIQuestion.md#selfdownvoted)

#### Inherited from

[`Message`](api%5Cclasses%5CMessage.md).[`selfDownvoted`](api%5Cclasses%5CMessage.md#selfdownvoted)

#### Source

[src/lib/messages/Message.ts:48](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/Message.ts#L48)

***

### selfFlagged?

> `optional` `readonly` **selfFlagged**: `boolean`

#### Raw

[FeedbackSchemaBase.flaggedByUser](api%5Cinterfaces%5CFeedbackSchemaBase.md#flaggedbyuser)

#### Implementation of

[`IQuestion`](api%5Cinterfaces%5CIQuestion.md).[`selfFlagged`](api%5Cinterfaces%5CIQuestion.md#selfflagged)

#### Inherited from

[`Message`](api%5Cclasses%5CMessage.md).[`selfFlagged`](api%5Cclasses%5CMessage.md#selfflagged)

#### Source

[src/lib/messages/BaseMessage.ts:79](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L79)

***

### selfUpvoted?

> `optional` `readonly` **selfUpvoted**: `boolean`

#### Raw

[FeedbackSchemaBase.upVoted](api%5Cinterfaces%5CFeedbackSchemaBase.md#upvoted)

#### Implementation of

[`IQuestion`](api%5Cinterfaces%5CIQuestion.md).[`selfUpvoted`](api%5Cinterfaces%5CIQuestion.md#selfupvoted)

#### Inherited from

[`Message`](api%5Cclasses%5CMessage.md).[`selfUpvoted`](api%5Cclasses%5CMessage.md#selfupvoted)

#### Source

[src/lib/messages/Message.ts:44](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/Message.ts#L44)

***

### text?

> `optional` `readonly` **text**: `string`

#### Raw

[FeedbackSchemaBase.content](api%5Cinterfaces%5CFeedbackSchemaBase.md#content)

#### Implementation of

[`IQuestion`](api%5Cinterfaces%5CIQuestion.md).[`text`](api%5Cinterfaces%5CIQuestion.md#text)

#### Inherited from

[`Message`](api%5Cclasses%5CMessage.md).[`text`](api%5Cclasses%5CMessage.md#text)

#### Source

[src/lib/messages/BaseMessage.ts:33](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L33)

***

### verified?

> `optional` `readonly` **verified**: `boolean`

#### Raw

[FeedbackSchemaBase.definitelyNotSpam](api%5Cinterfaces%5CFeedbackSchemaBase.md#definitelynotspam)

#### Implementation of

[`IQuestion`](api%5Cinterfaces%5CIQuestion.md).[`verified`](api%5Cinterfaces%5CIQuestion.md#verified)

#### Inherited from

[`Message`](api%5Cclasses%5CMessage.md).[`verified`](api%5Cclasses%5CMessage.md#verified)

#### Source

[src/lib/messages/BaseMessage.ts:65](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L65)

***

### votes?

> `optional` `readonly` **votes**: `number`

#### Raw

[FeedbackSchemaBase.sumVotesIncremented](api%5Cinterfaces%5CFeedbackSchemaBase.md#sumvotesincremented)

#### Implementation of

[`IQuestion`](api%5Cinterfaces%5CIQuestion.md).[`votes`](api%5Cinterfaces%5CIQuestion.md#votes)

#### Inherited from

[`Message`](api%5Cclasses%5CMessage.md).[`votes`](api%5Cclasses%5CMessage.md#votes)

#### Source

[src/lib/messages/Message.ts:40](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/Message.ts#L40)

***

### Type

> `static` `readonly` **Type**: *typeof* [`MessageType`](api%5Cenumerations%5CMessageType.md) = `MessageType`

Aliases for the message types.

#### Inherited from

[`Message`](api%5Cclasses%5CMessage.md).[`Type`](api%5Cclasses%5CMessage.md#type)

#### Source

[src/lib/messages/Message.ts:35](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/Message.ts#L35)

## Accessors

### bySelf

> `get` **bySelf**(): `boolean`

Checks if the message was written by the client user

#### Returns

`boolean`

#### Source

[src/lib/messages/BaseMessage.ts:84](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L84)

***

### selfVoted

> `get` **selfVoted**(): `null` \| `1` \| `0` \| `-1`

#### See

 - [Message.selfUpvoted](api%5Cclasses%5CMessage.md#selfupvoted)
 - [Message.selfDownvoted](api%5Cclasses%5CMessage.md#selfdownvoted)

#### Returns

`null` \| `1` \| `0` \| `-1`

`1` if the message was upvoted by the user, `-1` if it was downvoted,
and `0` if it was not voted on. `null` if the user is not logged in.

#### Source

[src/lib/messages/Message.ts:59](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/Message.ts#L59)

***

### url

> `get` **url**(): `null` \| `string`

#### Returns

`null` \| `string`

#### Source

[src/lib/messages/BaseMessage.ts:88](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L88)

## Methods

### #resolveIdentifier()

> `private` **#resolveIdentifier**(): \`ag5zfmtoYW4tYWNhZGVteX$\{string\}CxIIVXNlckRhdGEi$\{string\}thaWRf$\{string\}$\{string\}$\{string\}\` \| \`kaencrypted\_$\{string\}\_$\{string\}\`

#### Returns

\`ag5zfmtoYW4tYWNhZGVteX$\{string\}CxIIVXNlckRhdGEi$\{string\}thaWRf$\{string\}$\{string\}$\{string\}\` \| \`kaencrypted\_$\{string\}\_$\{string\}\`

#### Inherited from

[`Message`](api%5Cclasses%5CMessage.md).[`#resolveIdentifier`](api%5Cclasses%5CMessage.md##resolveidentifier)

#### Source

[src/lib/messages/Message.ts:84](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/Message.ts#L84)

***

### byUser()

> **byUser**(`user`): `boolean`

Checks if the message was written by the given user

#### Parameters

• **user**: [`User`](api%5Cclasses%5CUser.md)

#### Returns

`boolean`

#### Inherited from

[`Message`](api%5Cclasses%5CMessage.md).[`byUser`](api%5Cclasses%5CMessage.md#byuser)

#### Source

[src/lib/messages/BaseMessage.ts:138](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L138)

***

### copy()

> **copy**(`question`): [`Question`](api%5Cclasses%5CQuestion.md)

Updates data into the class

#### Parameters

• **question**: [`IQuestion`](api%5Cinterfaces%5CIQuestion.md)

The data to copy from

#### Returns

[`Question`](api%5Cclasses%5CQuestion.md)

The class instance

#### Overrides

[`Message`](api%5Cclasses%5CMessage.md).[`copy`](api%5Cclasses%5CMessage.md#copy)

#### Source

[src/lib/messages/Question.ts:60](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/Question.ts#L60)

***

### copyFromSchema()

> **copyFromSchema**(`schema`): [`Question`](api%5Cclasses%5CQuestion.md)

Updates data from a schema into the instance

#### Parameters

• **schema**: `RecursivePartial`\<[`FeedbackSchemaBase`](api%5Cinterfaces%5CFeedbackSchemaBase.md)\>

The schema to copy from

#### Returns

[`Question`](api%5Cclasses%5CQuestion.md)

The class instance

#### Inherited from

[`Message`](api%5Cclasses%5CMessage.md).[`copyFromSchema`](api%5Cclasses%5CMessage.md#copyfromschema)

#### Source

[src/lib/Wrapper.ts:65](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/Wrapper.ts#L65)

***

### get()

> **get**(`client`): `Promise`\<[`Question`](api%5Cclasses%5CQuestion.md)\>

Gets and updates the instance's data

#### Parameters

• **client**: [`Client`](api%5Cclasses%5CClient.md)= `undefined`

The API client to use

#### Returns

`Promise`\<[`Question`](api%5Cclasses%5CQuestion.md)\>

#### Inherited from

[`Message`](api%5Cclasses%5CMessage.md).[`get`](api%5Cclasses%5CMessage.md#get)

#### Source

[src/lib/messages/Message.ts:109](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/Message.ts#L109)

***

### getAllReplies()

> **getAllReplies**(`client`): `Promise`\<[`Question`](api%5Cclasses%5CQuestion.md)\>

#### Parameters

• **client**: [`Client`](api%5Cclasses%5CClient.md)= `undefined`

#### Returns

`Promise`\<[`Question`](api%5Cclasses%5CQuestion.md)\>

#### Inherited from

[`Message`](api%5Cclasses%5CMessage.md).[`getAllReplies`](api%5Cclasses%5CMessage.md#getallreplies)

#### See

[Client.getAllMessageReplies](api%5Cclasses%5CClient.md#getallmessagereplies)

#### Source

[src/lib/messages/Message.ts:134](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/Message.ts#L134)

***

### getReplies()

> **getReplies**(`client`, `limit`?): `AsyncGenerator`\<[`Reply`](api%5Cclasses%5CReply.md)[], [`Question`](api%5Cclasses%5CQuestion.md), `unknown`\>

#### Parameters

• **client**: [`Client`](api%5Cclasses%5CClient.md)= `undefined`

• **limit?**: `number`

#### Returns

`AsyncGenerator`\<[`Reply`](api%5Cclasses%5CReply.md)[], [`Question`](api%5Cclasses%5CQuestion.md), `unknown`\>

#### Inherited from

[`Message`](api%5Cclasses%5CMessage.md).[`getReplies`](api%5Cclasses%5CMessage.md#getreplies)

#### See

[Client.getMessageReplies](api%5Cclasses%5CClient.md#getmessagereplies)

#### Source

[src/lib/messages/Message.ts:118](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/Message.ts#L118)

***

### is()

> **is**(`message`): `boolean`

Checks if the message is the same as the given message

#### Parameters

• **message**: [`IBaseMessage`](api%5Cinterfaces%5CIBaseMessage.md) \| [`BaseMessage`](api%5Cclasses%5CBaseMessage.md)

#### Returns

`boolean`

#### Inherited from

[`Message`](api%5Cclasses%5CMessage.md).[`is`](api%5Cclasses%5CMessage.md#is)

#### Source

[src/lib/messages/BaseMessage.ts:145](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L145)

***

### isSchema()

> **isSchema**(`schema`): `boolean`

Checks if the schema represents the same instance

#### Parameters

• **schema**: `RecursivePartial`\<[`FeedbackSchemaBase`](api%5Cinterfaces%5CFeedbackSchemaBase.md)\>

#### Returns

`boolean`

#### Inherited from

[`Message`](api%5Cclasses%5CMessage.md).[`isSchema`](api%5Cclasses%5CMessage.md#isschema)

#### Source

[src/lib/Wrapper.ts:88](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/Wrapper.ts#L88)

***

### transformSchema()

> **transformSchema**(`schema`): [`IQuestion`](api%5Cinterfaces%5CIQuestion.md)

#### Parameters

• **schema**: `RecursivePartial`\<[`QuestionFeedbackSchema`](api%5Cinterfaces%5CQuestionFeedbackSchema.md)\>

#### Returns

[`IQuestion`](api%5Cinterfaces%5CIQuestion.md)

#### Overrides

[`Message`](api%5Cclasses%5CMessage.md).[`transformSchema`](api%5Cclasses%5CMessage.md#transformschema)

#### Source

[src/lib/messages/Question.ts:44](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/Question.ts#L44)

***

### fromIdentifier()

> `static` **fromIdentifier**(`identifier`): [`Question`](api%5Cclasses%5CQuestion.md)

#### Parameters

• **identifier**: \`ag5zfmtoYW4tYWNhZGVteX$\{string\}CxIIVXNlckRhdGEi$\{string\}thaWRf$\{string\}$\{string\}$\{string\}\` \| \`kaencrypted\_$\{string\}\_$\{string\}\`

#### Returns

[`Question`](api%5Cclasses%5CQuestion.md)

#### Overrides

[`Message`](api%5Cclasses%5CMessage.md).[`fromIdentifier`](api%5Cclasses%5CMessage.md#fromidentifier)

#### Source

[src/lib/messages/Question.ts:35](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/Question.ts#L35)

***

### fromSchema()

> `static` **fromSchema**(`schema`): [`Question`](api%5Cclasses%5CQuestion.md)

#### Parameters

• **schema**: `RecursivePartial`\<[`QuestionFeedbackSchema`](api%5Cinterfaces%5CQuestionFeedbackSchema.md)\>

#### Returns

[`Question`](api%5Cclasses%5CQuestion.md)

#### Overrides

[`Message`](api%5Cclasses%5CMessage.md).[`fromSchema`](api%5Cclasses%5CMessage.md#fromschema)

#### Source

[src/lib/messages/Question.ts:28](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/Question.ts#L28)
