# Class: Message

## Hierarchy

- [`BaseMessage`](BaseMessage.md)

  ↳ **`Message`**

  ↳↳ [`TipsAndThanks`](TipsAndThanks.md)

  ↳↳ [`Question`](Question.md)

  ↳↳ [`Answer`](Answer.md)

## Implements

- [`IMessage`](../interfaces/IMessage.md)

## Constructors

### constructor

• **new Message**(`data?`)

Creates a new class instance

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBaseMessage`](../interfaces/IBaseMessage.md) |

#### Inherited from

[BaseMessage](BaseMessage.md).[constructor](BaseMessage.md#constructor)

#### Defined in

[lib/Wrapper.ts:36](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/Wrapper.ts#L36)

• **new Message**(`client`, `data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `data?` | [`IBaseMessage`](../interfaces/IBaseMessage.md) |

#### Inherited from

[BaseMessage](BaseMessage.md).[constructor](BaseMessage.md#constructor)

#### Defined in

[lib/Wrapper.ts:37](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/Wrapper.ts#L37)

## Properties

### author

• `Optional` `Readonly` **author**: [`User`](User.md)

#### Implementation of

[IMessage](../interfaces/IMessage.md).[author](../interfaces/IMessage.md#author)

#### Inherited from

[BaseMessage](BaseMessage.md).[author](BaseMessage.md#author)

#### Defined in

[lib/messages/BaseMessage.ts:34](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L34)

___

### byVideoAuthor

• `Optional` `Readonly` **byVideoAuthor**: `boolean`

**`Raw`**

types/schema!FeedbackSchemaBase.fromVideoAuthor

#### Implementation of

[IMessage](../interfaces/IMessage.md).[byVideoAuthor](../interfaces/IMessage.md#byvideoauthor)

#### Inherited from

[BaseMessage](BaseMessage.md).[byVideoAuthor](BaseMessage.md#byvideoauthor)

#### Defined in

[lib/messages/BaseMessage.ts:74](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L74)

___

### client

• `Optional` **client**: [`Client`](Client.md)

The client that this base was fetched with.

#### Inherited from

[BaseMessage](BaseMessage.md).[client](BaseMessage.md#client)

#### Defined in

[lib/Wrapper.ts:15](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/Wrapper.ts#L15)

___

### created

• `Optional` `Readonly` **created**: `Date`

**`Raw`**

types/schema!FeedbackSchemaBase.date

#### Implementation of

[IMessage](../interfaces/IMessage.md).[created](../interfaces/IMessage.md#created)

#### Inherited from

[BaseMessage](BaseMessage.md).[created](BaseMessage.md#created)

#### Defined in

[lib/messages/BaseMessage.ts:39](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L39)

___

### deleted

• `Optional` `Readonly` **deleted**: `boolean`

**`Raw`**

types/schema!FeedbackSchemaBase.appearsAsDeleted

#### Implementation of

[IMessage](../interfaces/IMessage.md).[deleted](../interfaces/IMessage.md#deleted)

#### Inherited from

[BaseMessage](BaseMessage.md).[deleted](BaseMessage.md#deleted)

#### Defined in

[lib/messages/BaseMessage.ts:53](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L53)

___

### encryptedKey

• `Optional` `Readonly` **encryptedKey**: \`kaencrypted\_$\{string}\_$\{string}\`

**`Raw`**

types/schema!FeedbackSchemaBase.key

#### Implementation of

[IMessage](../interfaces/IMessage.md).[encryptedKey](../interfaces/IMessage.md#encryptedkey)

#### Inherited from

[BaseMessage](BaseMessage.md).[encryptedKey](BaseMessage.md#encryptedkey)

#### Defined in

[lib/messages/BaseMessage.ts:48](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L48)

___

### key

• `Optional` `Readonly` **key**: \`ag5zfmtoYW4tYWNhZGVteX$\{string}CxIIVXNlckRhdGEi$\{string}thaWRf$\{string}$\{string}$\{string}\`

**`Raw`**

types/schema!FeedbackSchemaBase.expandKey

#### Implementation of

[IMessage](../interfaces/IMessage.md).[key](../interfaces/IMessage.md#key)

#### Inherited from

[BaseMessage](BaseMessage.md).[key](BaseMessage.md#key)

#### Defined in

[lib/messages/BaseMessage.ts:44](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L44)

___

### locked

• `Optional` `Readonly` **locked**: `boolean`

**`Raw`**

types/schema!FeedbackSchemaBase.isLocked

#### Implementation of

[IMessage](../interfaces/IMessage.md).[locked](../interfaces/IMessage.md#locked)

#### Inherited from

[BaseMessage](BaseMessage.md).[locked](BaseMessage.md#locked)

#### Defined in

[lib/messages/BaseMessage.ts:57](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L57)

___

### pinned

• `Optional` `Readonly` **pinned**: `boolean`

**`Raw`**

types/schema!FeedbackSchemaBase.isPinned

#### Implementation of

[IMessage](../interfaces/IMessage.md).[pinned](../interfaces/IMessage.md#pinned)

#### Inherited from

[BaseMessage](BaseMessage.md).[pinned](BaseMessage.md#pinned)

#### Defined in

[lib/messages/BaseMessage.ts:61](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L61)

___

### program

• `Optional` `Readonly` **program**: [`Program`](Program.md)

#### Implementation of

[IMessage](../interfaces/IMessage.md).[program](../interfaces/IMessage.md#program)

#### Inherited from

[BaseMessage](BaseMessage.md).[program](BaseMessage.md#program)

#### Defined in

[lib/messages/BaseMessage.ts:35](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L35)

___

### rawData

• `Optional` **rawData**: `RecursivePartial`\<[`FeedbackSchemaBase`](../interfaces/FeedbackSchemaBase.md)\>

The raw base schema data

**`Remarks`**

Only set if the base was created from a user schema.

#### Inherited from

[BaseMessage](BaseMessage.md).[rawData](BaseMessage.md#rawdata)

#### Defined in

[lib/Wrapper.ts:22](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/Wrapper.ts#L22)

___

### replies

• `Optional` `Readonly` **replies**: [`Reply`](Reply.md)[]

#### Implementation of

[IMessage](../interfaces/IMessage.md).[replies](../interfaces/IMessage.md#replies)

#### Defined in

[lib/messages/Message.ts:50](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/Message.ts#L50)

___

### replyCount

• `Optional` `Readonly` **replyCount**: `number`

#### Implementation of

[IMessage](../interfaces/IMessage.md).[replyCount](../interfaces/IMessage.md#replycount)

#### Defined in

[lib/messages/Message.ts:49](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/Message.ts#L49)

___

### score

• `Optional` `Readonly` **score**: `number`

**`Raw`**

types/schema!FeedbackSchemaBase.lowQualityScore

#### Implementation of

[IMessage](../interfaces/IMessage.md).[score](../interfaces/IMessage.md#score)

#### Inherited from

[BaseMessage](BaseMessage.md).[score](BaseMessage.md#score)

#### Defined in

[lib/messages/BaseMessage.ts:69](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L69)

___

### selfDownvoted

• `Optional` `Readonly` **selfDownvoted**: `boolean`

**`Raw`**

types/schema!FeedbackSchemaBase.downVoted

#### Implementation of

[IMessage](../interfaces/IMessage.md).[selfDownvoted](../interfaces/IMessage.md#selfdownvoted)

#### Defined in

[lib/messages/Message.ts:48](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/Message.ts#L48)

___

### selfFlagged

• `Optional` `Readonly` **selfFlagged**: `boolean`

**`Raw`**

types/schema!FeedbackSchemaBase.flaggedByUser

#### Implementation of

[IMessage](../interfaces/IMessage.md).[selfFlagged](../interfaces/IMessage.md#selfflagged)

#### Inherited from

[BaseMessage](BaseMessage.md).[selfFlagged](BaseMessage.md#selfflagged)

#### Defined in

[lib/messages/BaseMessage.ts:79](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L79)

___

### selfUpvoted

• `Optional` `Readonly` **selfUpvoted**: `boolean`

**`Raw`**

types/schema!FeedbackSchemaBase.upVoted

#### Implementation of

[IMessage](../interfaces/IMessage.md).[selfUpvoted](../interfaces/IMessage.md#selfupvoted)

#### Defined in

[lib/messages/Message.ts:44](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/Message.ts#L44)

___

### text

• `Optional` `Readonly` **text**: `string`

**`Raw`**

types/schema!FeedbackSchemaBase.content

#### Implementation of

[IMessage](../interfaces/IMessage.md).[text](../interfaces/IMessage.md#text)

#### Inherited from

[BaseMessage](BaseMessage.md).[text](BaseMessage.md#text)

#### Defined in

[lib/messages/BaseMessage.ts:33](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L33)

___

### verified

• `Optional` `Readonly` **verified**: `boolean`

**`Raw`**

types/schema!FeedbackSchemaBase.definitelyNotSpam

#### Implementation of

[IMessage](../interfaces/IMessage.md).[verified](../interfaces/IMessage.md#verified)

#### Inherited from

[BaseMessage](BaseMessage.md).[verified](BaseMessage.md#verified)

#### Defined in

[lib/messages/BaseMessage.ts:65](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L65)

___

### votes

• `Optional` `Readonly` **votes**: `number`

**`Raw`**

types/schema!FeedbackSchemaBase.sumVotesIncremented

#### Implementation of

[IMessage](../interfaces/IMessage.md).[votes](../interfaces/IMessage.md#votes)

#### Defined in

[lib/messages/Message.ts:40](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/Message.ts#L40)

___

### Type

▪ `Static` `Readonly` **Type**: typeof [`MessageType`](../enums/MessageType.md) = `MessageType`

Aliases for the message types.

#### Defined in

[lib/messages/Message.ts:35](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/Message.ts#L35)

## Accessors

### bySelf

• `get` **bySelf**(): `boolean`

Checks if the message was written by the client user

#### Returns

`boolean`

#### Inherited from

BaseMessage.bySelf

#### Defined in

[lib/messages/BaseMessage.ts:84](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L84)

___

### selfVoted

• `get` **selfVoted**(): ``null`` \| ``1`` \| ``0`` \| ``-1``

#### Returns

``null`` \| ``1`` \| ``0`` \| ``-1``

`1` if the message was upvoted by the user, `-1` if it was downvoted,
and `0` if it was not voted on. `null` if the user is not logged in.

**`See`**

 - lib/messages/Message!Message.selfUpvoted
 - lib/messages/Message!Message.selfDownvoted

#### Defined in

[lib/messages/Message.ts:59](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/Message.ts#L59)

___

### url

• `get` **url**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Inherited from

BaseMessage.url

#### Defined in

[lib/messages/BaseMessage.ts:88](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L88)

## Methods

### #resolveIdentifier

▸ `Private` **#resolveIdentifier**(): \`ag5zfmtoYW4tYWNhZGVteX$\{string}CxIIVXNlckRhdGEi$\{string}thaWRf$\{string}$\{string}$\{string}\` \| \`kaencrypted\_$\{string}\_$\{string}\`

#### Returns

\`ag5zfmtoYW4tYWNhZGVteX$\{string}CxIIVXNlckRhdGEi$\{string}thaWRf$\{string}$\{string}$\{string}\` \| \`kaencrypted\_$\{string}\_$\{string}\`

#### Defined in

[lib/messages/Message.ts:84](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/Message.ts#L84)

___

### byUser

▸ **byUser**(`user`): `boolean`

Checks if the message was written by the given user

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | [`User`](User.md) |

#### Returns

`boolean`

#### Inherited from

[BaseMessage](BaseMessage.md).[byUser](BaseMessage.md#byuser)

#### Defined in

[lib/messages/BaseMessage.ts:138](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L138)

___

### copy

▸ **copy**(`message`): [`Message`](Message.md)

Updates data into the class

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | [`IMessage`](../interfaces/IMessage.md) | The data to copy from |

#### Returns

[`Message`](Message.md)

The class instance

#### Overrides

[BaseMessage](BaseMessage.md).[copy](BaseMessage.md#copy)

#### Defined in

[lib/messages/Message.ts:105](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/Message.ts#L105)

___

### copyFromSchema

▸ **copyFromSchema**(`schema`): [`Message`](Message.md)

Updates data from a schema into the instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `schema` | `RecursivePartial`\<[`FeedbackSchemaBase`](../interfaces/FeedbackSchemaBase.md)\> | The schema to copy from |

#### Returns

[`Message`](Message.md)

The class instance

#### Inherited from

[BaseMessage](BaseMessage.md).[copyFromSchema](BaseMessage.md#copyfromschema)

#### Defined in

[lib/Wrapper.ts:65](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/Wrapper.ts#L65)

___

### get

▸ **get**(`client?`): `Promise`\<[`Message`](Message.md)\>

Gets and updates the instance's data

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `client` | [`Client`](Client.md) | The API client to use |

#### Returns

`Promise`\<[`Message`](Message.md)\>

#### Overrides

[BaseMessage](BaseMessage.md).[get](BaseMessage.md#get)

#### Defined in

[lib/messages/Message.ts:109](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/Message.ts#L109)

___

### getAllReplies

▸ **getAllReplies**(`client?`): `Promise`\<[`Message`](Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |

#### Returns

`Promise`\<[`Message`](Message.md)\>

**`See`**

[!Client.getAllMessageReplies](Client.md)

#### Defined in

[lib/messages/Message.ts:134](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/Message.ts#L134)

___

### getReplies

▸ **getReplies**(`client?`, `limit?`): `AsyncGenerator`\<[`Reply`](Reply.md)[], [`Message`](Message.md), `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `limit?` | `number` |

#### Returns

`AsyncGenerator`\<[`Reply`](Reply.md)[], [`Message`](Message.md), `unknown`\>

**`See`**

[!Client.getMessageReplies](Client.md)

#### Defined in

[lib/messages/Message.ts:118](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/Message.ts#L118)

___

### is

▸ **is**(`message`): `boolean`

Checks if the message is the same as the given message

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`IBaseMessage`](../interfaces/IBaseMessage.md) \| [`BaseMessage`](BaseMessage.md) |

#### Returns

`boolean`

#### Inherited from

[BaseMessage](BaseMessage.md).[is](BaseMessage.md#is)

#### Defined in

[lib/messages/BaseMessage.ts:145](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L145)

___

### isSchema

▸ **isSchema**(`schema`): `boolean`

Checks if the schema represents the same instance

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `RecursivePartial`\<[`FeedbackSchemaBase`](../interfaces/FeedbackSchemaBase.md)\> |

#### Returns

`boolean`

#### Inherited from

[BaseMessage](BaseMessage.md).[isSchema](BaseMessage.md#isschema)

#### Defined in

[lib/Wrapper.ts:88](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/Wrapper.ts#L88)

___

### transformSchema

▸ **transformSchema**(`schema`): [`IMessage`](../interfaces/IMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `RecursivePartial`\<[`BasicFeedbackSchema`](../interfaces/BasicFeedbackSchema.md) \| [`QuestionFeedbackSchema`](../interfaces/QuestionFeedbackSchema.md) \| [`AnswerFeedbackSchema`](../interfaces/AnswerFeedbackSchema.md)\> |

#### Returns

[`IMessage`](../interfaces/IMessage.md)

#### Overrides

[BaseMessage](BaseMessage.md).[transformSchema](BaseMessage.md#transformschema)

#### Defined in

[lib/messages/Message.ts:91](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/Message.ts#L91)

___

### fromIdentifier

▸ `Static` **fromIdentifier**(`identifier`): [`Message`](Message.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | \`ag5zfmtoYW4tYWNhZGVteX$\{string}CxIIVXNlckRhdGEi$\{string}thaWRf$\{string}$\{string}$\{string}\` \| \`kaencrypted\_$\{string}\_$\{string}\` |

#### Returns

[`Message`](Message.md)

#### Defined in

[lib/messages/Message.ts:75](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/Message.ts#L75)

___

### fromSchema

▸ `Static` **fromSchema**(`schema`): [`Message`](Message.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `RecursivePartial`\<[`BasicFeedbackSchema`](../interfaces/BasicFeedbackSchema.md) \| [`QuestionFeedbackSchema`](../interfaces/QuestionFeedbackSchema.md) \| [`AnswerFeedbackSchema`](../interfaces/AnswerFeedbackSchema.md)\> |

#### Returns

[`Message`](Message.md)

#### Defined in

[lib/messages/Message.ts:64](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/Message.ts#L64)
