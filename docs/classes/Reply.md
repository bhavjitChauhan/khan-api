# Class: Reply

## Hierarchy

- [`BaseMessage`](BaseMessage.md)

  ↳ **`Reply`**

## Implements

- [`IReply`](../interfaces/IReply.md)

## Constructors

### constructor

• **new Reply**(`data?`)

Creates a new class instance

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBaseMessage`](../interfaces/IBaseMessage.md) |

#### Inherited from

[BaseMessage](BaseMessage.md).[constructor](BaseMessage.md#constructor)

#### Defined in

[lib/Wrapper.ts:36](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/Wrapper.ts#L36)

• **new Reply**(`client`, `data?`)

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

[IReply](../interfaces/IReply.md).[author](../interfaces/IReply.md#author)

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

[IReply](../interfaces/IReply.md).[byVideoAuthor](../interfaces/IReply.md#byvideoauthor)

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

[IReply](../interfaces/IReply.md).[created](../interfaces/IReply.md#created)

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

[IReply](../interfaces/IReply.md).[deleted](../interfaces/IReply.md#deleted)

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

[IReply](../interfaces/IReply.md).[encryptedKey](../interfaces/IReply.md#encryptedkey)

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

[IReply](../interfaces/IReply.md).[key](../interfaces/IReply.md#key)

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

[IReply](../interfaces/IReply.md).[locked](../interfaces/IReply.md#locked)

#### Inherited from

[BaseMessage](BaseMessage.md).[locked](BaseMessage.md#locked)

#### Defined in

[lib/messages/BaseMessage.ts:57](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L57)

___

### message

• `Optional` `Readonly` **message**: [`Message`](Message.md)

#### Implementation of

[IReply](../interfaces/IReply.md).[message](../interfaces/IReply.md#message)

#### Defined in

[lib/messages/Reply.ts:14](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/Reply.ts#L14)

___

### pinned

• `Optional` `Readonly` **pinned**: `boolean`

**`Raw`**

types/schema!FeedbackSchemaBase.isPinned

#### Implementation of

[IReply](../interfaces/IReply.md).[pinned](../interfaces/IReply.md#pinned)

#### Inherited from

[BaseMessage](BaseMessage.md).[pinned](BaseMessage.md#pinned)

#### Defined in

[lib/messages/BaseMessage.ts:61](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L61)

___

### program

• `Optional` `Readonly` **program**: [`Program`](Program.md)

#### Implementation of

[IReply](../interfaces/IReply.md).[program](../interfaces/IReply.md#program)

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

### score

• `Optional` `Readonly` **score**: `number`

**`Raw`**

types/schema!FeedbackSchemaBase.lowQualityScore

#### Implementation of

[IReply](../interfaces/IReply.md).[score](../interfaces/IReply.md#score)

#### Inherited from

[BaseMessage](BaseMessage.md).[score](BaseMessage.md#score)

#### Defined in

[lib/messages/BaseMessage.ts:69](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L69)

___

### selfFlagged

• `Optional` `Readonly` **selfFlagged**: `boolean`

**`Raw`**

types/schema!FeedbackSchemaBase.flaggedByUser

#### Implementation of

[IReply](../interfaces/IReply.md).[selfFlagged](../interfaces/IReply.md#selfflagged)

#### Inherited from

[BaseMessage](BaseMessage.md).[selfFlagged](BaseMessage.md#selfflagged)

#### Defined in

[lib/messages/BaseMessage.ts:79](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L79)

___

### text

• `Optional` `Readonly` **text**: `string`

**`Raw`**

types/schema!FeedbackSchemaBase.content

#### Implementation of

[IReply](../interfaces/IReply.md).[text](../interfaces/IReply.md#text)

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

[IReply](../interfaces/IReply.md).[verified](../interfaces/IReply.md#verified)

#### Inherited from

[BaseMessage](BaseMessage.md).[verified](BaseMessage.md#verified)

#### Defined in

[lib/messages/BaseMessage.ts:65](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L65)

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

### url

• `get` **url**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Inherited from

BaseMessage.url

#### Defined in

[lib/messages/BaseMessage.ts:88](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L88)

## Methods

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

▸ **copy**(`reply`): [`Reply`](Reply.md)

Updates data into the class

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reply` | [`IReply`](../interfaces/IReply.md) | The data to copy from |

#### Returns

[`Reply`](Reply.md)

The class instance

#### Overrides

[BaseMessage](BaseMessage.md).[copy](BaseMessage.md#copy)

#### Defined in

[lib/messages/Reply.ts:48](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/Reply.ts#L48)

___

### copyFromSchema

▸ **copyFromSchema**(`schema`): [`Reply`](Reply.md)

Updates data from a schema into the instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `schema` | `RecursivePartial`\<[`BasicFeedbackSchema`](../interfaces/BasicFeedbackSchema.md)\> | The schema to copy from |

#### Returns

[`Reply`](Reply.md)

The class instance

#### Overrides

[BaseMessage](BaseMessage.md).[copyFromSchema](BaseMessage.md#copyfromschema)

#### Defined in

[lib/messages/Reply.ts:58](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/Reply.ts#L58)

___

### get

▸ **get**(`client?`): `Promise`\<[`Reply`](Reply.md)\>

Gets and updates the instance's data

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `client` | [`Client`](Client.md) | The API client to use |

#### Returns

`Promise`\<[`Reply`](Reply.md)\>

#### Overrides

[BaseMessage](BaseMessage.md).[get](BaseMessage.md#get)

#### Defined in

[lib/messages/Reply.ts:62](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/Reply.ts#L62)

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

▸ **transformSchema**(`schema`): [`IReply`](../interfaces/IReply.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `RecursivePartial`\<[`BasicFeedbackSchema`](../interfaces/BasicFeedbackSchema.md)\> |

#### Returns

[`IReply`](../interfaces/IReply.md)

#### Overrides

[BaseMessage](BaseMessage.md).[transformSchema](BaseMessage.md#transformschema)

#### Defined in

[lib/messages/Reply.ts:32](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/Reply.ts#L32)

___

### fromIdentifier

▸ `Static` **fromIdentifier**(`identifier`): [`Reply`](Reply.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | \`ag5zfmtoYW4tYWNhZGVteX$\{string}CxIIVXNlckRhdGEi$\{string}thaWRf$\{string}$\{string}$\{string}\` \| \`kaencrypted\_$\{string}\_$\{string}\` |

#### Returns

[`Reply`](Reply.md)

#### Defined in

[lib/messages/Reply.ts:23](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/Reply.ts#L23)

___

### fromSchema

▸ `Static` **fromSchema**(`schema`): [`Reply`](Reply.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `RecursivePartial`\<[`BasicFeedbackSchema`](../interfaces/BasicFeedbackSchema.md)\> |

#### Returns

[`Reply`](Reply.md)

#### Defined in

[lib/messages/Reply.ts:16](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/Reply.ts#L16)
