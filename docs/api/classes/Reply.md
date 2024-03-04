# Class: Reply

## Hierarchy

- [`BaseMessage`](api/classes/BaseMessage.md)

  ↳ **`Reply`**

## Implements

- [`IReply`](api/interfaces/IReply.md)

## Constructors

### constructor

• **new Reply**(`data?`): [`Reply`](api/classes/Reply.md)

Creates a new class instance

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBaseMessage`](api/interfaces/IBaseMessage.md) |

#### Returns

[`Reply`](api/classes/Reply.md)

#### Inherited from

[BaseMessage](api/classes/BaseMessage.md).[constructor](api/classes/BaseMessage.md#constructor)

#### Defined in

[src/lib/Wrapper.ts:36](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/Wrapper.ts#L36)

• **new Reply**(`client`, `data?`): [`Reply`](api/classes/Reply.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](api/classes/Client.md) |
| `data?` | [`IBaseMessage`](api/interfaces/IBaseMessage.md) |

#### Returns

[`Reply`](api/classes/Reply.md)

#### Inherited from

[BaseMessage](api/classes/BaseMessage.md).[constructor](api/classes/BaseMessage.md#constructor)

#### Defined in

[src/lib/Wrapper.ts:37](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/Wrapper.ts#L37)

## Properties

### author

• `Optional` `Readonly` **author**: [`User`](api/classes/User.md)

#### Implementation of

[IReply](api/interfaces/IReply.md).[author](api/interfaces/IReply.md#author)

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

[IReply](api/interfaces/IReply.md).[byVideoAuthor](api/interfaces/IReply.md#byvideoauthor)

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

[IReply](api/interfaces/IReply.md).[created](api/interfaces/IReply.md#created)

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

[IReply](api/interfaces/IReply.md).[deleted](api/interfaces/IReply.md#deleted)

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

[IReply](api/interfaces/IReply.md).[encryptedKey](api/interfaces/IReply.md#encryptedkey)

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

[IReply](api/interfaces/IReply.md).[key](api/interfaces/IReply.md#key)

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

[IReply](api/interfaces/IReply.md).[locked](api/interfaces/IReply.md#locked)

#### Inherited from

[BaseMessage](api/classes/BaseMessage.md).[locked](api/classes/BaseMessage.md#locked)

#### Defined in

[src/lib/messages/BaseMessage.ts:57](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/BaseMessage.ts#L57)

___

### message

• `Optional` `Readonly` **message**: [`Message`](api/classes/Message.md)

#### Implementation of

[IReply](api/interfaces/IReply.md).[message](api/interfaces/IReply.md#message)

#### Defined in

[src/lib/messages/Reply.ts:14](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/Reply.ts#L14)

___

### pinned

• `Optional` `Readonly` **pinned**: `boolean`

**`Raw`**

[FeedbackSchemaBase.isPinned](api/interfaces/FeedbackSchemaBase.md#ispinned)

#### Implementation of

[IReply](api/interfaces/IReply.md).[pinned](api/interfaces/IReply.md#pinned)

#### Inherited from

[BaseMessage](api/classes/BaseMessage.md).[pinned](api/classes/BaseMessage.md#pinned)

#### Defined in

[src/lib/messages/BaseMessage.ts:61](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/BaseMessage.ts#L61)

___

### program

• `Optional` `Readonly` **program**: [`Program`](api/classes/Program.md)

#### Implementation of

[IReply](api/interfaces/IReply.md).[program](api/interfaces/IReply.md#program)

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

### score

• `Optional` `Readonly` **score**: `number`

**`Raw`**

[FeedbackSchemaBase.lowQualityScore](api/interfaces/FeedbackSchemaBase.md#lowqualityscore)

#### Implementation of

[IReply](api/interfaces/IReply.md).[score](api/interfaces/IReply.md#score)

#### Inherited from

[BaseMessage](api/classes/BaseMessage.md).[score](api/classes/BaseMessage.md#score)

#### Defined in

[src/lib/messages/BaseMessage.ts:69](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/BaseMessage.ts#L69)

___

### selfFlagged

• `Optional` `Readonly` **selfFlagged**: `boolean`

**`Raw`**

[FeedbackSchemaBase.flaggedByUser](api/interfaces/FeedbackSchemaBase.md#flaggedbyuser)

#### Implementation of

[IReply](api/interfaces/IReply.md).[selfFlagged](api/interfaces/IReply.md#selfflagged)

#### Inherited from

[BaseMessage](api/classes/BaseMessage.md).[selfFlagged](api/classes/BaseMessage.md#selfflagged)

#### Defined in

[src/lib/messages/BaseMessage.ts:79](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/BaseMessage.ts#L79)

___

### text

• `Optional` `Readonly` **text**: `string`

**`Raw`**

[FeedbackSchemaBase.content](api/interfaces/FeedbackSchemaBase.md#content)

#### Implementation of

[IReply](api/interfaces/IReply.md).[text](api/interfaces/IReply.md#text)

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

[IReply](api/interfaces/IReply.md).[verified](api/interfaces/IReply.md#verified)

#### Inherited from

[BaseMessage](api/classes/BaseMessage.md).[verified](api/classes/BaseMessage.md#verified)

#### Defined in

[src/lib/messages/BaseMessage.ts:65](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/BaseMessage.ts#L65)

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

### url

• `get` **url**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Inherited from

BaseMessage.url

#### Defined in

[src/lib/messages/BaseMessage.ts:88](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/BaseMessage.ts#L88)

## Methods

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

▸ **copy**(`reply`): [`Reply`](api/classes/Reply.md)

Updates data into the class

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reply` | [`IReply`](api/interfaces/IReply.md) | The data to copy from |

#### Returns

[`Reply`](api/classes/Reply.md)

The class instance

#### Overrides

[BaseMessage](api/classes/BaseMessage.md).[copy](api/classes/BaseMessage.md#copy)

#### Defined in

[src/lib/messages/Reply.ts:48](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/Reply.ts#L48)

___

### copyFromSchema

▸ **copyFromSchema**(`schema`): [`Reply`](api/classes/Reply.md)

Updates data from a schema into the instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `schema` | `RecursivePartial`\<[`BasicFeedbackSchema`](api/interfaces/BasicFeedbackSchema.md)\> | The schema to copy from |

#### Returns

[`Reply`](api/classes/Reply.md)

The class instance

#### Overrides

[BaseMessage](api/classes/BaseMessage.md).[copyFromSchema](api/classes/BaseMessage.md#copyfromschema)

#### Defined in

[src/lib/messages/Reply.ts:58](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/Reply.ts#L58)

___

### get

▸ **get**(`client?`): `Promise`\<[`Reply`](api/classes/Reply.md)\>

Gets and updates the instance's data

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `client` | [`Client`](api/classes/Client.md) | The API client to use |

#### Returns

`Promise`\<[`Reply`](api/classes/Reply.md)\>

#### Overrides

[BaseMessage](api/classes/BaseMessage.md).[get](api/classes/BaseMessage.md#get)

#### Defined in

[src/lib/messages/Reply.ts:62](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/Reply.ts#L62)

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

▸ **transformSchema**(`schema`): [`IReply`](api/interfaces/IReply.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `RecursivePartial`\<[`BasicFeedbackSchema`](api/interfaces/BasicFeedbackSchema.md)\> |

#### Returns

[`IReply`](api/interfaces/IReply.md)

#### Overrides

[BaseMessage](api/classes/BaseMessage.md).[transformSchema](api/classes/BaseMessage.md#transformschema)

#### Defined in

[src/lib/messages/Reply.ts:32](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/Reply.ts#L32)

___

### fromIdentifier

▸ **fromIdentifier**(`identifier`): [`Reply`](api/classes/Reply.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | \`ag5zfmtoYW4tYWNhZGVteX$\{string}CxIIVXNlckRhdGEi$\{string}thaWRf$\{string}$\{string}$\{string}\` \| \`kaencrypted\_$\{string}\_$\{string}\` |

#### Returns

[`Reply`](api/classes/Reply.md)

#### Defined in

[src/lib/messages/Reply.ts:23](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/Reply.ts#L23)

___

### fromSchema

▸ **fromSchema**(`schema`): [`Reply`](api/classes/Reply.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `RecursivePartial`\<[`BasicFeedbackSchema`](api/interfaces/BasicFeedbackSchema.md)\> |

#### Returns

[`Reply`](api/classes/Reply.md)

#### Defined in

[src/lib/messages/Reply.ts:16](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/Reply.ts#L16)
