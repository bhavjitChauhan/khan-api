# Class: TipsAndThanks

## Hierarchy

- [`Message`](Message.md)

  ↳ **`TipsAndThanks`**

## Constructors

### constructor

• **new TipsAndThanks**(`data?`)

Creates a new class instance

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBaseMessage`](../interfaces/IBaseMessage.md) |

#### Inherited from

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[lib/Wrapper.ts:36](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/Wrapper.ts#L36)

• **new TipsAndThanks**(`client`, `data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `data?` | [`IBaseMessage`](../interfaces/IBaseMessage.md) |

#### Inherited from

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[lib/Wrapper.ts:37](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/Wrapper.ts#L37)

## Properties

### author

• `Optional` `Readonly` **author**: [`User`](User.md)

#### Inherited from

[Message](Message.md).[author](Message.md#author)

#### Defined in

[lib/messages/BaseMessage.ts:34](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L34)

___

### byVideoAuthor

• `Optional` `Readonly` **byVideoAuthor**: `boolean`

**`Raw`**

types/schema!FeedbackSchemaBase.fromVideoAuthor

#### Inherited from

[Message](Message.md).[byVideoAuthor](Message.md#byvideoauthor)

#### Defined in

[lib/messages/BaseMessage.ts:74](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L74)

___

### client

• `Optional` **client**: [`Client`](Client.md)

The client that this base was fetched with.

#### Inherited from

[Message](Message.md).[client](Message.md#client)

#### Defined in

[lib/Wrapper.ts:15](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/Wrapper.ts#L15)

___

### created

• `Optional` `Readonly` **created**: `Date`

**`Raw`**

types/schema!FeedbackSchemaBase.date

#### Inherited from

[Message](Message.md).[created](Message.md#created)

#### Defined in

[lib/messages/BaseMessage.ts:39](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L39)

___

### deleted

• `Optional` `Readonly` **deleted**: `boolean`

**`Raw`**

types/schema!FeedbackSchemaBase.appearsAsDeleted

#### Inherited from

[Message](Message.md).[deleted](Message.md#deleted)

#### Defined in

[lib/messages/BaseMessage.ts:53](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L53)

___

### encryptedKey

• `Optional` `Readonly` **encryptedKey**: \`kaencrypted\_$\{string}\_$\{string}\`

**`Raw`**

types/schema!FeedbackSchemaBase.key

#### Inherited from

[Message](Message.md).[encryptedKey](Message.md#encryptedkey)

#### Defined in

[lib/messages/BaseMessage.ts:48](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L48)

___

### key

• `Optional` `Readonly` **key**: \`ag5zfmtoYW4tYWNhZGVteX$\{string}CxIIVXNlckRhdGEi$\{string}thaWRf$\{string}$\{string}$\{string}\`

**`Raw`**

types/schema!FeedbackSchemaBase.expandKey

#### Inherited from

[Message](Message.md).[key](Message.md#key)

#### Defined in

[lib/messages/BaseMessage.ts:44](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L44)

___

### locked

• `Optional` `Readonly` **locked**: `boolean`

**`Raw`**

types/schema!FeedbackSchemaBase.isLocked

#### Inherited from

[Message](Message.md).[locked](Message.md#locked)

#### Defined in

[lib/messages/BaseMessage.ts:57](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L57)

___

### pinned

• `Optional` `Readonly` **pinned**: `boolean`

**`Raw`**

types/schema!FeedbackSchemaBase.isPinned

#### Inherited from

[Message](Message.md).[pinned](Message.md#pinned)

#### Defined in

[lib/messages/BaseMessage.ts:61](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L61)

___

### program

• `Optional` `Readonly` **program**: [`Program`](Program.md)

#### Inherited from

[Message](Message.md).[program](Message.md#program)

#### Defined in

[lib/messages/BaseMessage.ts:35](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L35)

___

### rawData

• `Optional` **rawData**: `RecursivePartial`\<[`FeedbackSchemaBase`](../interfaces/FeedbackSchemaBase.md)\>

The raw base schema data

**`Remarks`**

Only set if the base was created from a user schema.

#### Inherited from

[Message](Message.md).[rawData](Message.md#rawdata)

#### Defined in

[lib/Wrapper.ts:22](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/Wrapper.ts#L22)

___

### replies

• `Optional` `Readonly` **replies**: [`Reply`](Reply.md)[]

#### Inherited from

[Message](Message.md).[replies](Message.md#replies)

#### Defined in

[lib/messages/Message.ts:50](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/Message.ts#L50)

___

### replyCount

• `Optional` `Readonly` **replyCount**: `number`

#### Inherited from

[Message](Message.md).[replyCount](Message.md#replycount)

#### Defined in

[lib/messages/Message.ts:49](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/Message.ts#L49)

___

### score

• `Optional` `Readonly` **score**: `number`

**`Raw`**

types/schema!FeedbackSchemaBase.lowQualityScore

#### Inherited from

[Message](Message.md).[score](Message.md#score)

#### Defined in

[lib/messages/BaseMessage.ts:69](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L69)

___

### selfDownvoted

• `Optional` `Readonly` **selfDownvoted**: `boolean`

**`Raw`**

types/schema!FeedbackSchemaBase.downVoted

#### Inherited from

[Message](Message.md).[selfDownvoted](Message.md#selfdownvoted)

#### Defined in

[lib/messages/Message.ts:48](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/Message.ts#L48)

___

### selfFlagged

• `Optional` `Readonly` **selfFlagged**: `boolean`

**`Raw`**

types/schema!FeedbackSchemaBase.flaggedByUser

#### Inherited from

[Message](Message.md).[selfFlagged](Message.md#selfflagged)

#### Defined in

[lib/messages/BaseMessage.ts:79](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L79)

___

### selfUpvoted

• `Optional` `Readonly` **selfUpvoted**: `boolean`

**`Raw`**

types/schema!FeedbackSchemaBase.upVoted

#### Inherited from

[Message](Message.md).[selfUpvoted](Message.md#selfupvoted)

#### Defined in

[lib/messages/Message.ts:44](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/Message.ts#L44)

___

### text

• `Optional` `Readonly` **text**: `string`

**`Raw`**

types/schema!FeedbackSchemaBase.content

#### Inherited from

[Message](Message.md).[text](Message.md#text)

#### Defined in

[lib/messages/BaseMessage.ts:33](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L33)

___

### verified

• `Optional` `Readonly` **verified**: `boolean`

**`Raw`**

types/schema!FeedbackSchemaBase.definitelyNotSpam

#### Inherited from

[Message](Message.md).[verified](Message.md#verified)

#### Defined in

[lib/messages/BaseMessage.ts:65](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L65)

___

### votes

• `Optional` `Readonly` **votes**: `number`

**`Raw`**

types/schema!FeedbackSchemaBase.sumVotesIncremented

#### Inherited from

[Message](Message.md).[votes](Message.md#votes)

#### Defined in

[lib/messages/Message.ts:40](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/Message.ts#L40)

___

### Type

▪ `Static` `Readonly` **Type**: typeof [`MessageType`](../enums/MessageType.md) = `MessageType`

Aliases for the message types.

#### Inherited from

[Message](Message.md).[Type](Message.md#type)

#### Defined in

[lib/messages/Message.ts:35](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/Message.ts#L35)

## Accessors

### bySelf

• `get` **bySelf**(): `boolean`

Checks if the message was written by the client user

#### Returns

`boolean`

#### Inherited from

Message.bySelf

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

#### Inherited from

Message.selfVoted

#### Defined in

[lib/messages/Message.ts:59](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/Message.ts#L59)

___

### url

• `get` **url**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Inherited from

Message.url

#### Defined in

[lib/messages/BaseMessage.ts:88](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L88)

## Methods

### #resolveIdentifier

▸ `Private` **#resolveIdentifier**(): \`ag5zfmtoYW4tYWNhZGVteX$\{string}CxIIVXNlckRhdGEi$\{string}thaWRf$\{string}$\{string}$\{string}\` \| \`kaencrypted\_$\{string}\_$\{string}\`

#### Returns

\`ag5zfmtoYW4tYWNhZGVteX$\{string}CxIIVXNlckRhdGEi$\{string}thaWRf$\{string}$\{string}$\{string}\` \| \`kaencrypted\_$\{string}\_$\{string}\`

#### Inherited from

[Message](Message.md).[#resolveIdentifier](Message.md##resolveidentifier)

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

[Message](Message.md).[byUser](Message.md#byuser)

#### Defined in

[lib/messages/BaseMessage.ts:138](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L138)

___

### copy

▸ **copy**(`tipsAndThanks`): [`TipsAndThanks`](TipsAndThanks.md)

Updates data into the class

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tipsAndThanks` | [`IMessage`](../interfaces/IMessage.md) | The data to copy from |

#### Returns

[`TipsAndThanks`](TipsAndThanks.md)

The class instance

#### Overrides

[Message](Message.md).[copy](Message.md#copy)

#### Defined in

[lib/messages/TipsAndThanks.ts:38](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/TipsAndThanks.ts#L38)

___

### copyFromSchema

▸ **copyFromSchema**(`schema`): [`TipsAndThanks`](TipsAndThanks.md)

Updates data from a schema into the instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `schema` | `RecursivePartial`\<[`FeedbackSchemaBase`](../interfaces/FeedbackSchemaBase.md)\> | The schema to copy from |

#### Returns

[`TipsAndThanks`](TipsAndThanks.md)

The class instance

#### Inherited from

[Message](Message.md).[copyFromSchema](Message.md#copyfromschema)

#### Defined in

[lib/Wrapper.ts:65](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/Wrapper.ts#L65)

___

### get

▸ **get**(`client?`): `Promise`\<[`TipsAndThanks`](TipsAndThanks.md)\>

Gets and updates the instance's data

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `client` | [`Client`](Client.md) | The API client to use |

#### Returns

`Promise`\<[`TipsAndThanks`](TipsAndThanks.md)\>

#### Inherited from

[Message](Message.md).[get](Message.md#get)

#### Defined in

[lib/messages/Message.ts:109](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/Message.ts#L109)

___

### getAllReplies

▸ **getAllReplies**(`client?`): `Promise`\<[`TipsAndThanks`](TipsAndThanks.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |

#### Returns

`Promise`\<[`TipsAndThanks`](TipsAndThanks.md)\>

**`See`**

[!Client.getAllMessageReplies](Client.md)

#### Inherited from

[Message](Message.md).[getAllReplies](Message.md#getallreplies)

#### Defined in

[lib/messages/Message.ts:134](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/Message.ts#L134)

___

### getReplies

▸ **getReplies**(`client?`, `limit?`): `AsyncGenerator`\<[`Reply`](Reply.md)[], [`TipsAndThanks`](TipsAndThanks.md), `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `limit?` | `number` |

#### Returns

`AsyncGenerator`\<[`Reply`](Reply.md)[], [`TipsAndThanks`](TipsAndThanks.md), `unknown`\>

**`See`**

[!Client.getMessageReplies](Client.md)

#### Inherited from

[Message](Message.md).[getReplies](Message.md#getreplies)

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

[Message](Message.md).[is](Message.md#is)

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

[Message](Message.md).[isSchema](Message.md#isschema)

#### Defined in

[lib/Wrapper.ts:88](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/Wrapper.ts#L88)

___

### transformSchema

▸ **transformSchema**(`schema`): [`IMessage`](../interfaces/IMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `RecursivePartial`\<[`BasicFeedbackSchema`](../interfaces/BasicFeedbackSchema.md)\> |

#### Returns

[`IMessage`](../interfaces/IMessage.md)

#### Overrides

[Message](Message.md).[transformSchema](Message.md#transformschema)

#### Defined in

[lib/messages/TipsAndThanks.ts:26](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/TipsAndThanks.ts#L26)

___

### fromIdentifier

▸ `Static` **fromIdentifier**(`identifier`): [`TipsAndThanks`](TipsAndThanks.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | \`ag5zfmtoYW4tYWNhZGVteX$\{string}CxIIVXNlckRhdGEi$\{string}thaWRf$\{string}$\{string}$\{string}\` \| \`kaencrypted\_$\{string}\_$\{string}\` |

#### Returns

[`TipsAndThanks`](TipsAndThanks.md)

#### Overrides

[Message](Message.md).[fromIdentifier](Message.md#fromidentifier)

#### Defined in

[lib/messages/TipsAndThanks.ts:17](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/TipsAndThanks.ts#L17)

___

### fromSchema

▸ `Static` **fromSchema**(`schema`): [`TipsAndThanks`](TipsAndThanks.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `RecursivePartial`\<[`BasicFeedbackSchema`](../interfaces/BasicFeedbackSchema.md)\> |

#### Returns

[`TipsAndThanks`](TipsAndThanks.md)

#### Overrides

[Message](Message.md).[fromSchema](Message.md#fromschema)

#### Defined in

[lib/messages/TipsAndThanks.ts:10](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/TipsAndThanks.ts#L10)
