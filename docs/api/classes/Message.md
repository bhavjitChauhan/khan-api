## Extends

- [`BaseMessage`](api%5Cclasses%5CBaseMessage.md)

## Extended by

- [`TipsAndThanks`](api%5Cclasses%5CTipsAndThanks.md)
- [`Question`](api%5Cclasses%5CQuestion.md)
- [`Answer`](api%5Cclasses%5CAnswer.md)

## Implements

- [`IMessage`](api%5Cinterfaces%5CIMessage.md)

## Constructors

### new Message()

> **new Message**(`data`?): [`Message`](api%5Cclasses%5CMessage.md)

Creates a new class instance

#### Parameters

• **data?**: [`IBaseMessage`](api%5Cinterfaces%5CIBaseMessage.md)

#### Returns

[`Message`](api%5Cclasses%5CMessage.md)

#### Inherited from

[`BaseMessage`](api%5Cclasses%5CBaseMessage.md).[`constructor`](api%5Cclasses%5CBaseMessage.md#constructors)

#### Source

[src/lib/Wrapper.ts:36](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/Wrapper.ts#L36)

### new Message()

> **new Message**(`client`, `data`?): [`Message`](api%5Cclasses%5CMessage.md)

#### Parameters

• **client**: [`Client`](api%5Cclasses%5CClient.md)

• **data?**: [`IBaseMessage`](api%5Cinterfaces%5CIBaseMessage.md)

#### Returns

[`Message`](api%5Cclasses%5CMessage.md)

#### Inherited from

[`BaseMessage`](api%5Cclasses%5CBaseMessage.md).[`constructor`](api%5Cclasses%5CBaseMessage.md#constructors)

#### Source

[src/lib/Wrapper.ts:37](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/Wrapper.ts#L37)

## Properties

### author?

> `optional` `readonly` **author**: [`User`](api%5Cclasses%5CUser.md)

#### Implementation of

[`IMessage`](api%5Cinterfaces%5CIMessage.md).[`author`](api%5Cinterfaces%5CIMessage.md#author)

#### Inherited from

[`BaseMessage`](api%5Cclasses%5CBaseMessage.md).[`author`](api%5Cclasses%5CBaseMessage.md#author)

#### Source

[src/lib/messages/BaseMessage.ts:34](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L34)

***

### byVideoAuthor?

> `optional` `readonly` **byVideoAuthor**: `boolean`

#### Raw

[FeedbackSchemaBase.fromVideoAuthor](api%5Cinterfaces%5CFeedbackSchemaBase.md#fromvideoauthor)

#### Implementation of

[`IMessage`](api%5Cinterfaces%5CIMessage.md).[`byVideoAuthor`](api%5Cinterfaces%5CIMessage.md#byvideoauthor)

#### Inherited from

[`BaseMessage`](api%5Cclasses%5CBaseMessage.md).[`byVideoAuthor`](api%5Cclasses%5CBaseMessage.md#byvideoauthor)

#### Source

[src/lib/messages/BaseMessage.ts:74](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L74)

***

### client?

> `optional` **client**: [`Client`](api%5Cclasses%5CClient.md)

The client that this base was fetched with.

#### Inherited from

[`BaseMessage`](api%5Cclasses%5CBaseMessage.md).[`client`](api%5Cclasses%5CBaseMessage.md#client)

#### Source

[src/lib/Wrapper.ts:15](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/Wrapper.ts#L15)

***

### created?

> `optional` `readonly` **created**: `Date`

#### Raw

[FeedbackSchemaBase.date](api%5Cinterfaces%5CFeedbackSchemaBase.md#date)

#### Implementation of

[`IMessage`](api%5Cinterfaces%5CIMessage.md).[`created`](api%5Cinterfaces%5CIMessage.md#created)

#### Inherited from

[`BaseMessage`](api%5Cclasses%5CBaseMessage.md).[`created`](api%5Cclasses%5CBaseMessage.md#created)

#### Source

[src/lib/messages/BaseMessage.ts:39](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L39)

***

### deleted?

> `optional` `readonly` **deleted**: `boolean`

#### Raw

[FeedbackSchemaBase.appearsAsDeleted](api%5Cinterfaces%5CFeedbackSchemaBase.md#appearsasdeleted)

#### Implementation of

[`IMessage`](api%5Cinterfaces%5CIMessage.md).[`deleted`](api%5Cinterfaces%5CIMessage.md#deleted)

#### Inherited from

[`BaseMessage`](api%5Cclasses%5CBaseMessage.md).[`deleted`](api%5Cclasses%5CBaseMessage.md#deleted)

#### Source

[src/lib/messages/BaseMessage.ts:53](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L53)

***

### encryptedKey?

> `optional` `readonly` **encryptedKey**: \`kaencrypted\_$\{string\}\_$\{string\}\`

#### Raw

[FeedbackSchemaBase.key](api%5Cinterfaces%5CFeedbackSchemaBase.md#key)

#### Implementation of

[`IMessage`](api%5Cinterfaces%5CIMessage.md).[`encryptedKey`](api%5Cinterfaces%5CIMessage.md#encryptedkey)

#### Inherited from

[`BaseMessage`](api%5Cclasses%5CBaseMessage.md).[`encryptedKey`](api%5Cclasses%5CBaseMessage.md#encryptedkey)

#### Source

[src/lib/messages/BaseMessage.ts:48](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L48)

***

### key?

> `optional` `readonly` **key**: \`ag5zfmtoYW4tYWNhZGVteX$\{string\}CxIIVXNlckRhdGEi$\{string\}thaWRf$\{string\}$\{string\}$\{string\}\`

#### Raw

[FeedbackSchemaBase.expandKey](api%5Cinterfaces%5CFeedbackSchemaBase.md#expandkey)

#### Implementation of

[`IMessage`](api%5Cinterfaces%5CIMessage.md).[`key`](api%5Cinterfaces%5CIMessage.md#key)

#### Inherited from

[`BaseMessage`](api%5Cclasses%5CBaseMessage.md).[`key`](api%5Cclasses%5CBaseMessage.md#key)

#### Source

[src/lib/messages/BaseMessage.ts:44](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L44)

***

### locked?

> `optional` `readonly` **locked**: `boolean`

#### Raw

[FeedbackSchemaBase.isLocked](api%5Cinterfaces%5CFeedbackSchemaBase.md#islocked)

#### Implementation of

[`IMessage`](api%5Cinterfaces%5CIMessage.md).[`locked`](api%5Cinterfaces%5CIMessage.md#locked)

#### Inherited from

[`BaseMessage`](api%5Cclasses%5CBaseMessage.md).[`locked`](api%5Cclasses%5CBaseMessage.md#locked)

#### Source

[src/lib/messages/BaseMessage.ts:57](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L57)

***

### pinned?

> `optional` `readonly` **pinned**: `boolean`

#### Raw

[FeedbackSchemaBase.isPinned](api%5Cinterfaces%5CFeedbackSchemaBase.md#ispinned)

#### Implementation of

[`IMessage`](api%5Cinterfaces%5CIMessage.md).[`pinned`](api%5Cinterfaces%5CIMessage.md#pinned)

#### Inherited from

[`BaseMessage`](api%5Cclasses%5CBaseMessage.md).[`pinned`](api%5Cclasses%5CBaseMessage.md#pinned)

#### Source

[src/lib/messages/BaseMessage.ts:61](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L61)

***

### program?

> `optional` `readonly` **program**: [`Program`](api%5Cclasses%5CProgram.md)

#### Implementation of

[`IMessage`](api%5Cinterfaces%5CIMessage.md).[`program`](api%5Cinterfaces%5CIMessage.md#program)

#### Inherited from

[`BaseMessage`](api%5Cclasses%5CBaseMessage.md).[`program`](api%5Cclasses%5CBaseMessage.md#program)

#### Source

[src/lib/messages/BaseMessage.ts:35](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L35)

***

### rawData?

> `optional` **rawData**: `RecursivePartial`\<[`FeedbackSchemaBase`](api%5Cinterfaces%5CFeedbackSchemaBase.md)\>

The raw base schema data

#### Remarks

Only set if the base was created from a user schema.

#### Inherited from

[`BaseMessage`](api%5Cclasses%5CBaseMessage.md).[`rawData`](api%5Cclasses%5CBaseMessage.md#rawdata)

#### Source

[src/lib/Wrapper.ts:22](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/Wrapper.ts#L22)

***

### replies?

> `optional` `readonly` **replies**: [`Reply`](api%5Cclasses%5CReply.md)[]

#### Implementation of

[`IMessage`](api%5Cinterfaces%5CIMessage.md).[`replies`](api%5Cinterfaces%5CIMessage.md#replies)

#### Source

[src/lib/messages/Message.ts:50](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/Message.ts#L50)

***

### replyCount?

> `optional` `readonly` **replyCount**: `number`

#### Implementation of

[`IMessage`](api%5Cinterfaces%5CIMessage.md).[`replyCount`](api%5Cinterfaces%5CIMessage.md#replycount)

#### Source

[src/lib/messages/Message.ts:49](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/Message.ts#L49)

***

### score?

> `optional` `readonly` **score**: `number`

#### Raw

[FeedbackSchemaBase.lowQualityScore](api%5Cinterfaces%5CFeedbackSchemaBase.md#lowqualityscore)

#### Implementation of

[`IMessage`](api%5Cinterfaces%5CIMessage.md).[`score`](api%5Cinterfaces%5CIMessage.md#score)

#### Inherited from

[`BaseMessage`](api%5Cclasses%5CBaseMessage.md).[`score`](api%5Cclasses%5CBaseMessage.md#score)

#### Source

[src/lib/messages/BaseMessage.ts:69](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L69)

***

### selfDownvoted?

> `optional` `readonly` **selfDownvoted**: `boolean`

#### Raw

[FeedbackSchemaBase.downVoted](api%5Cinterfaces%5CFeedbackSchemaBase.md#downvoted)

#### Implementation of

[`IMessage`](api%5Cinterfaces%5CIMessage.md).[`selfDownvoted`](api%5Cinterfaces%5CIMessage.md#selfdownvoted)

#### Source

[src/lib/messages/Message.ts:48](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/Message.ts#L48)

***

### selfFlagged?

> `optional` `readonly` **selfFlagged**: `boolean`

#### Raw

[FeedbackSchemaBase.flaggedByUser](api%5Cinterfaces%5CFeedbackSchemaBase.md#flaggedbyuser)

#### Implementation of

[`IMessage`](api%5Cinterfaces%5CIMessage.md).[`selfFlagged`](api%5Cinterfaces%5CIMessage.md#selfflagged)

#### Inherited from

[`BaseMessage`](api%5Cclasses%5CBaseMessage.md).[`selfFlagged`](api%5Cclasses%5CBaseMessage.md#selfflagged)

#### Source

[src/lib/messages/BaseMessage.ts:79](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L79)

***

### selfUpvoted?

> `optional` `readonly` **selfUpvoted**: `boolean`

#### Raw

[FeedbackSchemaBase.upVoted](api%5Cinterfaces%5CFeedbackSchemaBase.md#upvoted)

#### Implementation of

[`IMessage`](api%5Cinterfaces%5CIMessage.md).[`selfUpvoted`](api%5Cinterfaces%5CIMessage.md#selfupvoted)

#### Source

[src/lib/messages/Message.ts:44](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/Message.ts#L44)

***

### text?

> `optional` `readonly` **text**: `string`

#### Raw

[FeedbackSchemaBase.content](api%5Cinterfaces%5CFeedbackSchemaBase.md#content)

#### Implementation of

[`IMessage`](api%5Cinterfaces%5CIMessage.md).[`text`](api%5Cinterfaces%5CIMessage.md#text)

#### Inherited from

[`BaseMessage`](api%5Cclasses%5CBaseMessage.md).[`text`](api%5Cclasses%5CBaseMessage.md#text)

#### Source

[src/lib/messages/BaseMessage.ts:33](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L33)

***

### verified?

> `optional` `readonly` **verified**: `boolean`

#### Raw

[FeedbackSchemaBase.definitelyNotSpam](api%5Cinterfaces%5CFeedbackSchemaBase.md#definitelynotspam)

#### Implementation of

[`IMessage`](api%5Cinterfaces%5CIMessage.md).[`verified`](api%5Cinterfaces%5CIMessage.md#verified)

#### Inherited from

[`BaseMessage`](api%5Cclasses%5CBaseMessage.md).[`verified`](api%5Cclasses%5CBaseMessage.md#verified)

#### Source

[src/lib/messages/BaseMessage.ts:65](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L65)

***

### votes?

> `optional` `readonly` **votes**: `number`

#### Raw

[FeedbackSchemaBase.sumVotesIncremented](api%5Cinterfaces%5CFeedbackSchemaBase.md#sumvotesincremented)

#### Implementation of

[`IMessage`](api%5Cinterfaces%5CIMessage.md).[`votes`](api%5Cinterfaces%5CIMessage.md#votes)

#### Source

[src/lib/messages/Message.ts:40](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/Message.ts#L40)

***

### Type

> `static` `readonly` **Type**: *typeof* [`MessageType`](api%5Cenumerations%5CMessageType.md) = `MessageType`

Aliases for the message types.

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

[`BaseMessage`](api%5Cclasses%5CBaseMessage.md).[`byUser`](api%5Cclasses%5CBaseMessage.md#byuser)

#### Source

[src/lib/messages/BaseMessage.ts:138](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L138)

***

### copy()

> **copy**(`message`): [`Message`](api%5Cclasses%5CMessage.md)

Updates data into the class

#### Parameters

• **message**: [`IMessage`](api%5Cinterfaces%5CIMessage.md)

The data to copy from

#### Returns

[`Message`](api%5Cclasses%5CMessage.md)

The class instance

#### Overrides

[`BaseMessage`](api%5Cclasses%5CBaseMessage.md).[`copy`](api%5Cclasses%5CBaseMessage.md#copy)

#### Source

[src/lib/messages/Message.ts:105](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/Message.ts#L105)

***

### copyFromSchema()

> **copyFromSchema**(`schema`): [`Message`](api%5Cclasses%5CMessage.md)

Updates data from a schema into the instance

#### Parameters

• **schema**: `RecursivePartial`\<[`FeedbackSchemaBase`](api%5Cinterfaces%5CFeedbackSchemaBase.md)\>

The schema to copy from

#### Returns

[`Message`](api%5Cclasses%5CMessage.md)

The class instance

#### Inherited from

[`BaseMessage`](api%5Cclasses%5CBaseMessage.md).[`copyFromSchema`](api%5Cclasses%5CBaseMessage.md#copyfromschema)

#### Source

[src/lib/Wrapper.ts:65](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/Wrapper.ts#L65)

***

### get()

> **get**(`client`): `Promise`\<[`Message`](api%5Cclasses%5CMessage.md)\>

Gets and updates the instance's data

#### Parameters

• **client**: [`Client`](api%5Cclasses%5CClient.md)= `undefined`

The API client to use

#### Returns

`Promise`\<[`Message`](api%5Cclasses%5CMessage.md)\>

#### Overrides

[`BaseMessage`](api%5Cclasses%5CBaseMessage.md).[`get`](api%5Cclasses%5CBaseMessage.md#get)

#### Source

[src/lib/messages/Message.ts:109](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/Message.ts#L109)

***

### getAllReplies()

> **getAllReplies**(`client`): `Promise`\<[`Message`](api%5Cclasses%5CMessage.md)\>

#### Parameters

• **client**: [`Client`](api%5Cclasses%5CClient.md)= `undefined`

#### Returns

`Promise`\<[`Message`](api%5Cclasses%5CMessage.md)\>

#### See

[Client.getAllMessageReplies](api%5Cclasses%5CClient.md#getallmessagereplies)

#### Source

[src/lib/messages/Message.ts:134](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/Message.ts#L134)

***

### getReplies()

> **getReplies**(`client`, `limit`?): `AsyncGenerator`\<[`Reply`](api%5Cclasses%5CReply.md)[], [`Message`](api%5Cclasses%5CMessage.md), `unknown`\>

#### Parameters

• **client**: [`Client`](api%5Cclasses%5CClient.md)= `undefined`

• **limit?**: `number`

#### Returns

`AsyncGenerator`\<[`Reply`](api%5Cclasses%5CReply.md)[], [`Message`](api%5Cclasses%5CMessage.md), `unknown`\>

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

[`BaseMessage`](api%5Cclasses%5CBaseMessage.md).[`is`](api%5Cclasses%5CBaseMessage.md#is)

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

[`BaseMessage`](api%5Cclasses%5CBaseMessage.md).[`isSchema`](api%5Cclasses%5CBaseMessage.md#isschema)

#### Source

[src/lib/Wrapper.ts:88](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/Wrapper.ts#L88)

***

### transformSchema()

> **transformSchema**(`schema`): [`IMessage`](api%5Cinterfaces%5CIMessage.md)

#### Parameters

• **schema**: `RecursivePartial`\<[`BasicFeedbackSchema`](api%5Cinterfaces%5CBasicFeedbackSchema.md) \| [`QuestionFeedbackSchema`](api%5Cinterfaces%5CQuestionFeedbackSchema.md) \| [`AnswerFeedbackSchema`](api%5Cinterfaces%5CAnswerFeedbackSchema.md)\>

#### Returns

[`IMessage`](api%5Cinterfaces%5CIMessage.md)

#### Overrides

[`BaseMessage`](api%5Cclasses%5CBaseMessage.md).[`transformSchema`](api%5Cclasses%5CBaseMessage.md#transformschema)

#### Source

[src/lib/messages/Message.ts:91](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/Message.ts#L91)

***

### fromIdentifier()

> `static` **fromIdentifier**(`identifier`): [`Message`](api%5Cclasses%5CMessage.md)

#### Parameters

• **identifier**: \`ag5zfmtoYW4tYWNhZGVteX$\{string\}CxIIVXNlckRhdGEi$\{string\}thaWRf$\{string\}$\{string\}$\{string\}\` \| \`kaencrypted\_$\{string\}\_$\{string\}\`

#### Returns

[`Message`](api%5Cclasses%5CMessage.md)

#### Source

[src/lib/messages/Message.ts:75](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/Message.ts#L75)

***

### fromSchema()

> `static` **fromSchema**(`schema`): [`Message`](api%5Cclasses%5CMessage.md)

#### Parameters

• **schema**: `RecursivePartial`\<[`BasicFeedbackSchema`](api%5Cinterfaces%5CBasicFeedbackSchema.md) \| [`QuestionFeedbackSchema`](api%5Cinterfaces%5CQuestionFeedbackSchema.md) \| [`AnswerFeedbackSchema`](api%5Cinterfaces%5CAnswerFeedbackSchema.md)\>

#### Returns

[`Message`](api%5Cclasses%5CMessage.md)

#### Source

[src/lib/messages/Message.ts:64](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/Message.ts#L64)
