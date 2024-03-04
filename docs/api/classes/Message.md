# Class: Message

## Hierarchy

- [`BaseMessage`](api/classes/BaseMessage.md)

  ↳ **`Message`**

  ↳↳ [`TipsAndThanks`](api/classes/TipsAndThanks.md)

  ↳↳ [`Question`](api/classes/Question.md)

  ↳↳ [`Answer`](api/classes/Answer.md)

## Implements

- [`IMessage`](api/interfaces/IMessage.md)

## Constructors

### constructor

• **new Message**(`data?`): [`Message`](api/classes/Message.md)

Creates a new class instance

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBaseMessage`](api/interfaces/IBaseMessage.md) |

#### Returns

[`Message`](api/classes/Message.md)

#### Inherited from

[BaseMessage](api/classes/BaseMessage.md).[constructor](api/classes/BaseMessage.md#constructor)

#### Defined in

[src/lib/Wrapper.ts:36](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/Wrapper.ts#L36)

• **new Message**(`client`, `data?`): [`Message`](api/classes/Message.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](api/classes/Client.md) |
| `data?` | [`IBaseMessage`](api/interfaces/IBaseMessage.md) |

#### Returns

[`Message`](api/classes/Message.md)

#### Inherited from

[BaseMessage](api/classes/BaseMessage.md).[constructor](api/classes/BaseMessage.md#constructor)

#### Defined in

[src/lib/Wrapper.ts:37](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/Wrapper.ts#L37)

## Properties

### author

• `Optional` `Readonly` **author**: [`User`](api/classes/User.md)

#### Implementation of

[IMessage](api/interfaces/IMessage.md).[author](api/interfaces/IMessage.md#author)

#### Inherited from

[BaseMessage](api/classes/BaseMessage.md).[author](api/classes/BaseMessage.md#author)

#### Defined in

[src/lib/messages/BaseMessage.ts:34](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/BaseMessage.ts#L34)

___

### byVideoAuthor

• `Optional` `Readonly` **byVideoAuthor**: `boolean`

**`Raw`**

[FeedbackSchemaBase.fromVideoAuthor](api/interfaces/FeedbackSchemaBase.md#fromvideoauthor)

#### Implementation of

[IMessage](api/interfaces/IMessage.md).[byVideoAuthor](api/interfaces/IMessage.md#byvideoauthor)

#### Inherited from

[BaseMessage](api/classes/BaseMessage.md).[byVideoAuthor](api/classes/BaseMessage.md#byvideoauthor)

#### Defined in

[src/lib/messages/BaseMessage.ts:74](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/BaseMessage.ts#L74)

___

### client

• `Optional` **client**: [`Client`](api/classes/Client.md)

The client that this base was fetched with.

#### Inherited from

[BaseMessage](api/classes/BaseMessage.md).[client](api/classes/BaseMessage.md#client)

#### Defined in

[src/lib/Wrapper.ts:15](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/Wrapper.ts#L15)

___

### created

• `Optional` `Readonly` **created**: `Date`

**`Raw`**

[FeedbackSchemaBase.date](api/interfaces/FeedbackSchemaBase.md#date)

#### Implementation of

[IMessage](api/interfaces/IMessage.md).[created](api/interfaces/IMessage.md#created)

#### Inherited from

[BaseMessage](api/classes/BaseMessage.md).[created](api/classes/BaseMessage.md#created)

#### Defined in

[src/lib/messages/BaseMessage.ts:39](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/BaseMessage.ts#L39)

___

### deleted

• `Optional` `Readonly` **deleted**: `boolean`

**`Raw`**

[FeedbackSchemaBase.appearsAsDeleted](api/interfaces/FeedbackSchemaBase.md#appearsasdeleted)

#### Implementation of

[IMessage](api/interfaces/IMessage.md).[deleted](api/interfaces/IMessage.md#deleted)

#### Inherited from

[BaseMessage](api/classes/BaseMessage.md).[deleted](api/classes/BaseMessage.md#deleted)

#### Defined in

[src/lib/messages/BaseMessage.ts:53](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/BaseMessage.ts#L53)

___

### encryptedKey

• `Optional` `Readonly` **encryptedKey**: \`kaencrypted\_$\{string}\_$\{string}\`

**`Raw`**

[FeedbackSchemaBase.key](api/interfaces/FeedbackSchemaBase.md#key)

#### Implementation of

[IMessage](api/interfaces/IMessage.md).[encryptedKey](api/interfaces/IMessage.md#encryptedkey)

#### Inherited from

[BaseMessage](api/classes/BaseMessage.md).[encryptedKey](api/classes/BaseMessage.md#encryptedkey)

#### Defined in

[src/lib/messages/BaseMessage.ts:48](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/BaseMessage.ts#L48)

___

### key

• `Optional` `Readonly` **key**: \`ag5zfmtoYW4tYWNhZGVteX$\{string}CxIIVXNlckRhdGEi$\{string}thaWRf$\{string}$\{string}$\{string}\`

**`Raw`**

[FeedbackSchemaBase.expandKey](api/interfaces/FeedbackSchemaBase.md#expandkey)

#### Implementation of

[IMessage](api/interfaces/IMessage.md).[key](api/interfaces/IMessage.md#key)

#### Inherited from

[BaseMessage](api/classes/BaseMessage.md).[key](api/classes/BaseMessage.md#key)

#### Defined in

[src/lib/messages/BaseMessage.ts:44](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/BaseMessage.ts#L44)

___

### locked

• `Optional` `Readonly` **locked**: `boolean`

**`Raw`**

[FeedbackSchemaBase.isLocked](api/interfaces/FeedbackSchemaBase.md#islocked)

#### Implementation of

[IMessage](api/interfaces/IMessage.md).[locked](api/interfaces/IMessage.md#locked)

#### Inherited from

[BaseMessage](api/classes/BaseMessage.md).[locked](api/classes/BaseMessage.md#locked)

#### Defined in

[src/lib/messages/BaseMessage.ts:57](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/BaseMessage.ts#L57)

___

### pinned

• `Optional` `Readonly` **pinned**: `boolean`

**`Raw`**

[FeedbackSchemaBase.isPinned](api/interfaces/FeedbackSchemaBase.md#ispinned)

#### Implementation of

[IMessage](api/interfaces/IMessage.md).[pinned](api/interfaces/IMessage.md#pinned)

#### Inherited from

[BaseMessage](api/classes/BaseMessage.md).[pinned](api/classes/BaseMessage.md#pinned)

#### Defined in

[src/lib/messages/BaseMessage.ts:61](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/BaseMessage.ts#L61)

___

### program

• `Optional` `Readonly` **program**: [`Program`](api/classes/Program.md)

#### Implementation of

[IMessage](api/interfaces/IMessage.md).[program](api/interfaces/IMessage.md#program)

#### Inherited from

[BaseMessage](api/classes/BaseMessage.md).[program](api/classes/BaseMessage.md#program)

#### Defined in

[src/lib/messages/BaseMessage.ts:35](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/BaseMessage.ts#L35)

___

### rawData

• `Optional` **rawData**: `RecursivePartial`\<[`FeedbackSchemaBase`](api/interfaces/FeedbackSchemaBase.md)\>

The raw base schema data

**`Remarks`**

Only set if the base was created from a user schema.

#### Inherited from

[BaseMessage](api/classes/BaseMessage.md).[rawData](api/classes/BaseMessage.md#rawdata)

#### Defined in

[src/lib/Wrapper.ts:22](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/Wrapper.ts#L22)

___

### replies

• `Optional` `Readonly` **replies**: [`Reply`](api/classes/Reply.md)[]

#### Implementation of

[IMessage](api/interfaces/IMessage.md).[replies](api/interfaces/IMessage.md#replies)

#### Defined in

[src/lib/messages/Message.ts:50](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/Message.ts#L50)

___

### replyCount

• `Optional` `Readonly` **replyCount**: `number`

#### Implementation of

[IMessage](api/interfaces/IMessage.md).[replyCount](api/interfaces/IMessage.md#replycount)

#### Defined in

[src/lib/messages/Message.ts:49](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/Message.ts#L49)

___

### score

• `Optional` `Readonly` **score**: `number`

**`Raw`**

[FeedbackSchemaBase.lowQualityScore](api/interfaces/FeedbackSchemaBase.md#lowqualityscore)

#### Implementation of

[IMessage](api/interfaces/IMessage.md).[score](api/interfaces/IMessage.md#score)

#### Inherited from

[BaseMessage](api/classes/BaseMessage.md).[score](api/classes/BaseMessage.md#score)

#### Defined in

[src/lib/messages/BaseMessage.ts:69](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/BaseMessage.ts#L69)

___

### selfDownvoted

• `Optional` `Readonly` **selfDownvoted**: `boolean`

**`Raw`**

[FeedbackSchemaBase.downVoted](api/interfaces/FeedbackSchemaBase.md#downvoted)

#### Implementation of

[IMessage](api/interfaces/IMessage.md).[selfDownvoted](api/interfaces/IMessage.md#selfdownvoted)

#### Defined in

[src/lib/messages/Message.ts:48](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/Message.ts#L48)

___

### selfFlagged

• `Optional` `Readonly` **selfFlagged**: `boolean`

**`Raw`**

[FeedbackSchemaBase.flaggedByUser](api/interfaces/FeedbackSchemaBase.md#flaggedbyuser)

#### Implementation of

[IMessage](api/interfaces/IMessage.md).[selfFlagged](api/interfaces/IMessage.md#selfflagged)

#### Inherited from

[BaseMessage](api/classes/BaseMessage.md).[selfFlagged](api/classes/BaseMessage.md#selfflagged)

#### Defined in

[src/lib/messages/BaseMessage.ts:79](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/BaseMessage.ts#L79)

___

### selfUpvoted

• `Optional` `Readonly` **selfUpvoted**: `boolean`

**`Raw`**

[FeedbackSchemaBase.upVoted](api/interfaces/FeedbackSchemaBase.md#upvoted)

#### Implementation of

[IMessage](api/interfaces/IMessage.md).[selfUpvoted](api/interfaces/IMessage.md#selfupvoted)

#### Defined in

[src/lib/messages/Message.ts:44](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/Message.ts#L44)

___

### text

• `Optional` `Readonly` **text**: `string`

**`Raw`**

[FeedbackSchemaBase.content](api/interfaces/FeedbackSchemaBase.md#content)

#### Implementation of

[IMessage](api/interfaces/IMessage.md).[text](api/interfaces/IMessage.md#text)

#### Inherited from

[BaseMessage](api/classes/BaseMessage.md).[text](api/classes/BaseMessage.md#text)

#### Defined in

[src/lib/messages/BaseMessage.ts:33](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/BaseMessage.ts#L33)

___

### verified

• `Optional` `Readonly` **verified**: `boolean`

**`Raw`**

[FeedbackSchemaBase.definitelyNotSpam](api/interfaces/FeedbackSchemaBase.md#definitelynotspam)

#### Implementation of

[IMessage](api/interfaces/IMessage.md).[verified](api/interfaces/IMessage.md#verified)

#### Inherited from

[BaseMessage](api/classes/BaseMessage.md).[verified](api/classes/BaseMessage.md#verified)

#### Defined in

[src/lib/messages/BaseMessage.ts:65](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/BaseMessage.ts#L65)

___

### votes

• `Optional` `Readonly` **votes**: `number`

**`Raw`**

[FeedbackSchemaBase.sumVotesIncremented](api/interfaces/FeedbackSchemaBase.md#sumvotesincremented)

#### Implementation of

[IMessage](api/interfaces/IMessage.md).[votes](api/interfaces/IMessage.md#votes)

#### Defined in

[src/lib/messages/Message.ts:40](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/Message.ts#L40)

___

### Type

▪ `Static` `Readonly` **Type**: typeof [`MessageType`](api/enums/MessageType.md) = `MessageType`

Aliases for the message types.

#### Defined in

[src/lib/messages/Message.ts:35](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/Message.ts#L35)

## Accessors

### bySelf

• `get` **bySelf**(): `boolean`

Checks if the message was written by the client user

#### Returns

`boolean`

#### Inherited from

BaseMessage.bySelf

#### Defined in

[src/lib/messages/BaseMessage.ts:84](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/BaseMessage.ts#L84)

___

### selfVoted

• `get` **selfVoted**(): ``null`` \| ``1`` \| ``0`` \| ``-1``

#### Returns

``null`` \| ``1`` \| ``0`` \| ``-1``

`1` if the message was upvoted by the user, `-1` if it was downvoted,
and `0` if it was not voted on. `null` if the user is not logged in.

**`See`**

 - [Message.selfUpvoted](api/classes/Message.md#selfupvoted)
 - [Message.selfDownvoted](api/classes/Message.md#selfdownvoted)

#### Defined in

[src/lib/messages/Message.ts:59](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/Message.ts#L59)

___

### url

• `get` **url**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Inherited from

BaseMessage.url

#### Defined in

[src/lib/messages/BaseMessage.ts:88](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/BaseMessage.ts#L88)

## Methods

### #resolveIdentifier

▸ **#resolveIdentifier**(): \`ag5zfmtoYW4tYWNhZGVteX$\{string}CxIIVXNlckRhdGEi$\{string}thaWRf$\{string}$\{string}$\{string}\` \| \`kaencrypted\_$\{string}\_$\{string}\`

#### Returns

\`ag5zfmtoYW4tYWNhZGVteX$\{string}CxIIVXNlckRhdGEi$\{string}thaWRf$\{string}$\{string}$\{string}\` \| \`kaencrypted\_$\{string}\_$\{string}\`

#### Defined in

[src/lib/messages/Message.ts:84](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/Message.ts#L84)

___

### byUser

▸ **byUser**(`user`): `boolean`

Checks if the message was written by the given user

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | [`User`](api/classes/User.md) |

#### Returns

`boolean`

#### Inherited from

[BaseMessage](api/classes/BaseMessage.md).[byUser](api/classes/BaseMessage.md#byuser)

#### Defined in

[src/lib/messages/BaseMessage.ts:138](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/BaseMessage.ts#L138)

___

### copy

▸ **copy**(`message`): [`Message`](api/classes/Message.md)

Updates data into the class

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | [`IMessage`](api/interfaces/IMessage.md) | The data to copy from |

#### Returns

[`Message`](api/classes/Message.md)

The class instance

#### Overrides

[BaseMessage](api/classes/BaseMessage.md).[copy](api/classes/BaseMessage.md#copy)

#### Defined in

[src/lib/messages/Message.ts:105](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/Message.ts#L105)

___

### copyFromSchema

▸ **copyFromSchema**(`schema`): [`Message`](api/classes/Message.md)

Updates data from a schema into the instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `schema` | `RecursivePartial`\<[`FeedbackSchemaBase`](api/interfaces/FeedbackSchemaBase.md)\> | The schema to copy from |

#### Returns

[`Message`](api/classes/Message.md)

The class instance

#### Inherited from

[BaseMessage](api/classes/BaseMessage.md).[copyFromSchema](api/classes/BaseMessage.md#copyfromschema)

#### Defined in

[src/lib/Wrapper.ts:65](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/Wrapper.ts#L65)

___

### get

▸ **get**(`client?`): `Promise`\<[`Message`](api/classes/Message.md)\>

Gets and updates the instance's data

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `client` | [`Client`](api/classes/Client.md) | The API client to use |

#### Returns

`Promise`\<[`Message`](api/classes/Message.md)\>

#### Overrides

[BaseMessage](api/classes/BaseMessage.md).[get](api/classes/BaseMessage.md#get)

#### Defined in

[src/lib/messages/Message.ts:109](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/Message.ts#L109)

___

### getAllReplies

▸ **getAllReplies**(`client?`): `Promise`\<[`Message`](api/classes/Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](api/classes/Client.md) |

#### Returns

`Promise`\<[`Message`](api/classes/Message.md)\>

**`See`**

[Client.getAllMessageReplies](api/classes/Client.md#getallmessagereplies)

#### Defined in

[src/lib/messages/Message.ts:134](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/Message.ts#L134)

___

### getReplies

▸ **getReplies**(`client?`, `limit?`): `AsyncGenerator`\<[`Reply`](api/classes/Reply.md)[], [`Message`](api/classes/Message.md), `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](api/classes/Client.md) |
| `limit?` | `number` |

#### Returns

`AsyncGenerator`\<[`Reply`](api/classes/Reply.md)[], [`Message`](api/classes/Message.md), `unknown`\>

**`See`**

[Client.getMessageReplies](api/classes/Client.md#getmessagereplies)

#### Defined in

[src/lib/messages/Message.ts:118](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/Message.ts#L118)

___

### is

▸ **is**(`message`): `boolean`

Checks if the message is the same as the given message

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`IBaseMessage`](api/interfaces/IBaseMessage.md) \| [`BaseMessage`](api/classes/BaseMessage.md) |

#### Returns

`boolean`

#### Inherited from

[BaseMessage](api/classes/BaseMessage.md).[is](api/classes/BaseMessage.md#is)

#### Defined in

[src/lib/messages/BaseMessage.ts:145](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/BaseMessage.ts#L145)

___

### isSchema

▸ **isSchema**(`schema`): `boolean`

Checks if the schema represents the same instance

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `RecursivePartial`\<[`FeedbackSchemaBase`](api/interfaces/FeedbackSchemaBase.md)\> |

#### Returns

`boolean`

#### Inherited from

[BaseMessage](api/classes/BaseMessage.md).[isSchema](api/classes/BaseMessage.md#isschema)

#### Defined in

[src/lib/Wrapper.ts:88](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/Wrapper.ts#L88)

___

### transformSchema

▸ **transformSchema**(`schema`): [`IMessage`](api/interfaces/IMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `RecursivePartial`\<[`BasicFeedbackSchema`](api/interfaces/BasicFeedbackSchema.md) \| [`QuestionFeedbackSchema`](api/interfaces/QuestionFeedbackSchema.md) \| [`AnswerFeedbackSchema`](api/interfaces/AnswerFeedbackSchema.md)\> |

#### Returns

[`IMessage`](api/interfaces/IMessage.md)

#### Overrides

[BaseMessage](api/classes/BaseMessage.md).[transformSchema](api/classes/BaseMessage.md#transformschema)

#### Defined in

[src/lib/messages/Message.ts:91](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/Message.ts#L91)

___

### fromIdentifier

▸ **fromIdentifier**(`identifier`): [`Message`](api/classes/Message.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | \`ag5zfmtoYW4tYWNhZGVteX$\{string}CxIIVXNlckRhdGEi$\{string}thaWRf$\{string}$\{string}$\{string}\` \| \`kaencrypted\_$\{string}\_$\{string}\` |

#### Returns

[`Message`](api/classes/Message.md)

#### Defined in

[src/lib/messages/Message.ts:75](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/Message.ts#L75)

___

### fromSchema

▸ **fromSchema**(`schema`): [`Message`](api/classes/Message.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `RecursivePartial`\<[`BasicFeedbackSchema`](api/interfaces/BasicFeedbackSchema.md) \| [`QuestionFeedbackSchema`](api/interfaces/QuestionFeedbackSchema.md) \| [`AnswerFeedbackSchema`](api/interfaces/AnswerFeedbackSchema.md)\> |

#### Returns

[`Message`](api/classes/Message.md)

#### Defined in

[src/lib/messages/Message.ts:64](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/Message.ts#L64)
