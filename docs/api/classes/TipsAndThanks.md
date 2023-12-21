# Class: TipsAndThanks

## Hierarchy

- [`Message`](api/classes/Message.md)

  ↳ **`TipsAndThanks`**

## Constructors

### constructor

• **new TipsAndThanks**(`data?`): [`TipsAndThanks`](api/classes/TipsAndThanks.md)

Creates a new class instance

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBaseMessage`](api/interfaces/IBaseMessage.md) |

#### Returns

[`TipsAndThanks`](api/classes/TipsAndThanks.md)

#### Inherited from

[Message](api/classes/Message.md).[constructor](api/classes/Message.md#constructor)

#### Defined in

[src/lib/Wrapper.ts:36](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/lib/Wrapper.ts#L36)

• **new TipsAndThanks**(`client`, `data?`): [`TipsAndThanks`](api/classes/TipsAndThanks.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](api/classes/Client.md) |
| `data?` | [`IBaseMessage`](api/interfaces/IBaseMessage.md) |

#### Returns

[`TipsAndThanks`](api/classes/TipsAndThanks.md)

#### Inherited from

[Message](api/classes/Message.md).[constructor](api/classes/Message.md#constructor)

#### Defined in

[src/lib/Wrapper.ts:37](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/lib/Wrapper.ts#L37)

## Properties

### author

• `Optional` `Readonly` **author**: [`User`](api/classes/User.md)

#### Inherited from

[Message](api/classes/Message.md).[author](api/classes/Message.md#author)

#### Defined in

[src/lib/messages/BaseMessage.ts:34](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/lib/messages/BaseMessage.ts#L34)

___

### byVideoAuthor

• `Optional` `Readonly` **byVideoAuthor**: `boolean`

**`Raw`**

[FeedbackSchemaBase.fromVideoAuthor](api/interfaces/FeedbackSchemaBase.md#fromvideoauthor)

#### Inherited from

[Message](api/classes/Message.md).[byVideoAuthor](api/classes/Message.md#byvideoauthor)

#### Defined in

[src/lib/messages/BaseMessage.ts:74](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/lib/messages/BaseMessage.ts#L74)

___

### client

• `Optional` **client**: [`Client`](api/classes/Client.md)

The client that this base was fetched with.

#### Inherited from

[Message](api/classes/Message.md).[client](api/classes/Message.md#client)

#### Defined in

[src/lib/Wrapper.ts:15](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/lib/Wrapper.ts#L15)

___

### created

• `Optional` `Readonly` **created**: `Date`

**`Raw`**

[FeedbackSchemaBase.date](api/interfaces/FeedbackSchemaBase.md#date)

#### Inherited from

[Message](api/classes/Message.md).[created](api/classes/Message.md#created)

#### Defined in

[src/lib/messages/BaseMessage.ts:39](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/lib/messages/BaseMessage.ts#L39)

___

### deleted

• `Optional` `Readonly` **deleted**: `boolean`

**`Raw`**

[FeedbackSchemaBase.appearsAsDeleted](api/interfaces/FeedbackSchemaBase.md#appearsasdeleted)

#### Inherited from

[Message](api/classes/Message.md).[deleted](api/classes/Message.md#deleted)

#### Defined in

[src/lib/messages/BaseMessage.ts:53](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/lib/messages/BaseMessage.ts#L53)

___

### encryptedKey

• `Optional` `Readonly` **encryptedKey**: \`kaencrypted\_$\{string}\_$\{string}\`

**`Raw`**

[FeedbackSchemaBase.key](api/interfaces/FeedbackSchemaBase.md#key)

#### Inherited from

[Message](api/classes/Message.md).[encryptedKey](api/classes/Message.md#encryptedkey)

#### Defined in

[src/lib/messages/BaseMessage.ts:48](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/lib/messages/BaseMessage.ts#L48)

___

### key

• `Optional` `Readonly` **key**: \`ag5zfmtoYW4tYWNhZGVteX$\{string}CxIIVXNlckRhdGEi$\{string}thaWRf$\{string}$\{string}$\{string}\`

**`Raw`**

[FeedbackSchemaBase.expandKey](api/interfaces/FeedbackSchemaBase.md#expandkey)

#### Inherited from

[Message](api/classes/Message.md).[key](api/classes/Message.md#key)

#### Defined in

[src/lib/messages/BaseMessage.ts:44](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/lib/messages/BaseMessage.ts#L44)

___

### locked

• `Optional` `Readonly` **locked**: `boolean`

**`Raw`**

[FeedbackSchemaBase.isLocked](api/interfaces/FeedbackSchemaBase.md#islocked)

#### Inherited from

[Message](api/classes/Message.md).[locked](api/classes/Message.md#locked)

#### Defined in

[src/lib/messages/BaseMessage.ts:57](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/lib/messages/BaseMessage.ts#L57)

___

### pinned

• `Optional` `Readonly` **pinned**: `boolean`

**`Raw`**

[FeedbackSchemaBase.isPinned](api/interfaces/FeedbackSchemaBase.md#ispinned)

#### Inherited from

[Message](api/classes/Message.md).[pinned](api/classes/Message.md#pinned)

#### Defined in

[src/lib/messages/BaseMessage.ts:61](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/lib/messages/BaseMessage.ts#L61)

___

### program

• `Optional` `Readonly` **program**: [`Program`](api/classes/Program.md)

#### Inherited from

[Message](api/classes/Message.md).[program](api/classes/Message.md#program)

#### Defined in

[src/lib/messages/BaseMessage.ts:35](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/lib/messages/BaseMessage.ts#L35)

___

### rawData

• `Optional` **rawData**: `RecursivePartial`\<[`FeedbackSchemaBase`](api/interfaces/FeedbackSchemaBase.md)\>

The raw base schema data

**`Remarks`**

Only set if the base was created from a user schema.

#### Inherited from

[Message](api/classes/Message.md).[rawData](api/classes/Message.md#rawdata)

#### Defined in

[src/lib/Wrapper.ts:22](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/lib/Wrapper.ts#L22)

___

### replies

• `Optional` `Readonly` **replies**: [`Reply`](api/classes/Reply.md)[]

#### Inherited from

[Message](api/classes/Message.md).[replies](api/classes/Message.md#replies)

#### Defined in

[src/lib/messages/Message.ts:50](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/lib/messages/Message.ts#L50)

___

### replyCount

• `Optional` `Readonly` **replyCount**: `number`

#### Inherited from

[Message](api/classes/Message.md).[replyCount](api/classes/Message.md#replycount)

#### Defined in

[src/lib/messages/Message.ts:49](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/lib/messages/Message.ts#L49)

___

### score

• `Optional` `Readonly` **score**: `number`

**`Raw`**

[FeedbackSchemaBase.lowQualityScore](api/interfaces/FeedbackSchemaBase.md#lowqualityscore)

#### Inherited from

[Message](api/classes/Message.md).[score](api/classes/Message.md#score)

#### Defined in

[src/lib/messages/BaseMessage.ts:69](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/lib/messages/BaseMessage.ts#L69)

___

### selfDownvoted

• `Optional` `Readonly` **selfDownvoted**: `boolean`

**`Raw`**

[FeedbackSchemaBase.downVoted](api/interfaces/FeedbackSchemaBase.md#downvoted)

#### Inherited from

[Message](api/classes/Message.md).[selfDownvoted](api/classes/Message.md#selfdownvoted)

#### Defined in

[src/lib/messages/Message.ts:48](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/lib/messages/Message.ts#L48)

___

### selfFlagged

• `Optional` `Readonly` **selfFlagged**: `boolean`

**`Raw`**

[FeedbackSchemaBase.flaggedByUser](api/interfaces/FeedbackSchemaBase.md#flaggedbyuser)

#### Inherited from

[Message](api/classes/Message.md).[selfFlagged](api/classes/Message.md#selfflagged)

#### Defined in

[src/lib/messages/BaseMessage.ts:79](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/lib/messages/BaseMessage.ts#L79)

___

### selfUpvoted

• `Optional` `Readonly` **selfUpvoted**: `boolean`

**`Raw`**

[FeedbackSchemaBase.upVoted](api/interfaces/FeedbackSchemaBase.md#upvoted)

#### Inherited from

[Message](api/classes/Message.md).[selfUpvoted](api/classes/Message.md#selfupvoted)

#### Defined in

[src/lib/messages/Message.ts:44](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/lib/messages/Message.ts#L44)

___

### text

• `Optional` `Readonly` **text**: `string`

**`Raw`**

[FeedbackSchemaBase.content](api/interfaces/FeedbackSchemaBase.md#content)

#### Inherited from

[Message](api/classes/Message.md).[text](api/classes/Message.md#text)

#### Defined in

[src/lib/messages/BaseMessage.ts:33](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/lib/messages/BaseMessage.ts#L33)

___

### verified

• `Optional` `Readonly` **verified**: `boolean`

**`Raw`**

[FeedbackSchemaBase.definitelyNotSpam](api/interfaces/FeedbackSchemaBase.md#definitelynotspam)

#### Inherited from

[Message](api/classes/Message.md).[verified](api/classes/Message.md#verified)

#### Defined in

[src/lib/messages/BaseMessage.ts:65](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/lib/messages/BaseMessage.ts#L65)

___

### votes

• `Optional` `Readonly` **votes**: `number`

**`Raw`**

[FeedbackSchemaBase.sumVotesIncremented](api/interfaces/FeedbackSchemaBase.md#sumvotesincremented)

#### Inherited from

[Message](api/classes/Message.md).[votes](api/classes/Message.md#votes)

#### Defined in

[src/lib/messages/Message.ts:40](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/lib/messages/Message.ts#L40)

___

### Type

▪ `Static` `Readonly` **Type**: typeof [`MessageType`](api/enums/MessageType.md) = `MessageType`

Aliases for the message types.

#### Inherited from

[Message](api/classes/Message.md).[Type](api/classes/Message.md#type)

#### Defined in

[src/lib/messages/Message.ts:35](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/lib/messages/Message.ts#L35)

## Accessors

### bySelf

• `get` **bySelf**(): `boolean`

Checks if the message was written by the client user

#### Returns

`boolean`

#### Inherited from

Message.bySelf

#### Defined in

[src/lib/messages/BaseMessage.ts:84](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/lib/messages/BaseMessage.ts#L84)

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

#### Inherited from

Message.selfVoted

#### Defined in

[src/lib/messages/Message.ts:59](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/lib/messages/Message.ts#L59)

___

### url

• `get` **url**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Inherited from

Message.url

#### Defined in

[src/lib/messages/BaseMessage.ts:88](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/lib/messages/BaseMessage.ts#L88)

## Methods

### #resolveIdentifier

▸ **#resolveIdentifier**(): \`ag5zfmtoYW4tYWNhZGVteX$\{string}CxIIVXNlckRhdGEi$\{string}thaWRf$\{string}$\{string}$\{string}\` \| \`kaencrypted\_$\{string}\_$\{string}\`

#### Returns

\`ag5zfmtoYW4tYWNhZGVteX$\{string}CxIIVXNlckRhdGEi$\{string}thaWRf$\{string}$\{string}$\{string}\` \| \`kaencrypted\_$\{string}\_$\{string}\`

#### Inherited from

[Message](api/classes/Message.md).[#resolveIdentifier](api/classes/Message.md##resolveidentifier)

#### Defined in

[src/lib/messages/Message.ts:84](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/lib/messages/Message.ts#L84)

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

[Message](api/classes/Message.md).[byUser](api/classes/Message.md#byuser)

#### Defined in

[src/lib/messages/BaseMessage.ts:138](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/lib/messages/BaseMessage.ts#L138)

___

### copy

▸ **copy**(`tipsAndThanks`): [`TipsAndThanks`](api/classes/TipsAndThanks.md)

Updates data into the class

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tipsAndThanks` | [`IMessage`](api/interfaces/IMessage.md) | The data to copy from |

#### Returns

[`TipsAndThanks`](api/classes/TipsAndThanks.md)

The class instance

#### Overrides

[Message](api/classes/Message.md).[copy](api/classes/Message.md#copy)

#### Defined in

[src/lib/messages/TipsAndThanks.ts:38](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/lib/messages/TipsAndThanks.ts#L38)

___

### copyFromSchema

▸ **copyFromSchema**(`schema`): [`TipsAndThanks`](api/classes/TipsAndThanks.md)

Updates data from a schema into the instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `schema` | `RecursivePartial`\<[`FeedbackSchemaBase`](api/interfaces/FeedbackSchemaBase.md)\> | The schema to copy from |

#### Returns

[`TipsAndThanks`](api/classes/TipsAndThanks.md)

The class instance

#### Inherited from

[Message](api/classes/Message.md).[copyFromSchema](api/classes/Message.md#copyfromschema)

#### Defined in

[src/lib/Wrapper.ts:65](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/lib/Wrapper.ts#L65)

___

### get

▸ **get**(`client?`): `Promise`\<[`TipsAndThanks`](api/classes/TipsAndThanks.md)\>

Gets and updates the instance's data

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `client` | [`Client`](api/classes/Client.md) | The API client to use |

#### Returns

`Promise`\<[`TipsAndThanks`](api/classes/TipsAndThanks.md)\>

#### Inherited from

[Message](api/classes/Message.md).[get](api/classes/Message.md#get)

#### Defined in

[src/lib/messages/Message.ts:109](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/lib/messages/Message.ts#L109)

___

### getAllReplies

▸ **getAllReplies**(`client?`): `Promise`\<[`TipsAndThanks`](api/classes/TipsAndThanks.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](api/classes/Client.md) |

#### Returns

`Promise`\<[`TipsAndThanks`](api/classes/TipsAndThanks.md)\>

**`See`**

[Client.getAllMessageReplies](api/classes/Client.md#getallmessagereplies)

#### Inherited from

[Message](api/classes/Message.md).[getAllReplies](api/classes/Message.md#getallreplies)

#### Defined in

[src/lib/messages/Message.ts:134](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/lib/messages/Message.ts#L134)

___

### getReplies

▸ **getReplies**(`client?`, `limit?`): `AsyncGenerator`\<[`Reply`](api/classes/Reply.md)[], [`TipsAndThanks`](api/classes/TipsAndThanks.md), `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](api/classes/Client.md) |
| `limit?` | `number` |

#### Returns

`AsyncGenerator`\<[`Reply`](api/classes/Reply.md)[], [`TipsAndThanks`](api/classes/TipsAndThanks.md), `unknown`\>

**`See`**

[Client.getMessageReplies](api/classes/Client.md#getmessagereplies)

#### Inherited from

[Message](api/classes/Message.md).[getReplies](api/classes/Message.md#getreplies)

#### Defined in

[src/lib/messages/Message.ts:118](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/lib/messages/Message.ts#L118)

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

[Message](api/classes/Message.md).[is](api/classes/Message.md#is)

#### Defined in

[src/lib/messages/BaseMessage.ts:145](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/lib/messages/BaseMessage.ts#L145)

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

[Message](api/classes/Message.md).[isSchema](api/classes/Message.md#isschema)

#### Defined in

[src/lib/Wrapper.ts:88](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/lib/Wrapper.ts#L88)

___

### transformSchema

▸ **transformSchema**(`schema`): [`IMessage`](api/interfaces/IMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `RecursivePartial`\<[`BasicFeedbackSchema`](api/interfaces/BasicFeedbackSchema.md)\> |

#### Returns

[`IMessage`](api/interfaces/IMessage.md)

#### Overrides

[Message](api/classes/Message.md).[transformSchema](api/classes/Message.md#transformschema)

#### Defined in

[src/lib/messages/TipsAndThanks.ts:26](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/lib/messages/TipsAndThanks.ts#L26)

___

### fromIdentifier

▸ **fromIdentifier**(`identifier`): [`TipsAndThanks`](api/classes/TipsAndThanks.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | \`ag5zfmtoYW4tYWNhZGVteX$\{string}CxIIVXNlckRhdGEi$\{string}thaWRf$\{string}$\{string}$\{string}\` \| \`kaencrypted\_$\{string}\_$\{string}\` |

#### Returns

[`TipsAndThanks`](api/classes/TipsAndThanks.md)

#### Overrides

[Message](api/classes/Message.md).[fromIdentifier](api/classes/Message.md#fromidentifier)

#### Defined in

[src/lib/messages/TipsAndThanks.ts:17](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/lib/messages/TipsAndThanks.ts#L17)

___

### fromSchema

▸ **fromSchema**(`schema`): [`TipsAndThanks`](api/classes/TipsAndThanks.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `RecursivePartial`\<[`BasicFeedbackSchema`](api/interfaces/BasicFeedbackSchema.md)\> |

#### Returns

[`TipsAndThanks`](api/classes/TipsAndThanks.md)

#### Overrides

[Message](api/classes/Message.md).[fromSchema](api/classes/Message.md#fromschema)

#### Defined in

[src/lib/messages/TipsAndThanks.ts:10](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/lib/messages/TipsAndThanks.ts#L10)
