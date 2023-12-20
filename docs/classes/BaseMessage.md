# Class: BaseMessage

## Hierarchy

- `default`\<[`FeedbackSchemaBase`](../interfaces/FeedbackSchemaBase.md), [`IBaseMessage`](../interfaces/IBaseMessage.md)\>

  ↳ **`BaseMessage`**

  ↳↳ [`Message`](Message.md)

  ↳↳ [`Reply`](Reply.md)

## Implements

- [`IBaseMessage`](../interfaces/IBaseMessage.md)

## Constructors

### constructor

• **new BaseMessage**(`data?`)

Creates a new class instance

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBaseMessage`](../interfaces/IBaseMessage.md) |

#### Inherited from

Wrapper\<FeedbackSchemaBase, IBaseMessage\>.constructor

#### Defined in

[lib/Wrapper.ts:36](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/Wrapper.ts#L36)

• **new BaseMessage**(`client`, `data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `data?` | [`IBaseMessage`](../interfaces/IBaseMessage.md) |

#### Inherited from

Wrapper\<FeedbackSchemaBase, IBaseMessage\>.constructor

#### Defined in

[lib/Wrapper.ts:37](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/Wrapper.ts#L37)

## Properties

### author

• `Optional` `Readonly` **author**: [`User`](User.md)

#### Implementation of

[IBaseMessage](../interfaces/IBaseMessage.md).[author](../interfaces/IBaseMessage.md#author)

#### Defined in

[lib/messages/BaseMessage.ts:34](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L34)

___

### byVideoAuthor

• `Optional` `Readonly` **byVideoAuthor**: `boolean`

**`Raw`**

types/schema!FeedbackSchemaBase.fromVideoAuthor

#### Implementation of

[IBaseMessage](../interfaces/IBaseMessage.md).[byVideoAuthor](../interfaces/IBaseMessage.md#byvideoauthor)

#### Defined in

[lib/messages/BaseMessage.ts:74](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L74)

___

### client

• `Optional` **client**: [`Client`](Client.md)

The client that this base was fetched with.

#### Inherited from

Wrapper.client

#### Defined in

[lib/Wrapper.ts:15](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/Wrapper.ts#L15)

___

### created

• `Optional` `Readonly` **created**: `Date`

**`Raw`**

types/schema!FeedbackSchemaBase.date

#### Implementation of

[IBaseMessage](../interfaces/IBaseMessage.md).[created](../interfaces/IBaseMessage.md#created)

#### Defined in

[lib/messages/BaseMessage.ts:39](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L39)

___

### deleted

• `Optional` `Readonly` **deleted**: `boolean`

**`Raw`**

types/schema!FeedbackSchemaBase.appearsAsDeleted

#### Implementation of

[IBaseMessage](../interfaces/IBaseMessage.md).[deleted](../interfaces/IBaseMessage.md#deleted)

#### Defined in

[lib/messages/BaseMessage.ts:53](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L53)

___

### encryptedKey

• `Optional` `Readonly` **encryptedKey**: \`kaencrypted\_$\{string}\_$\{string}\`

**`Raw`**

types/schema!FeedbackSchemaBase.key

#### Implementation of

[IBaseMessage](../interfaces/IBaseMessage.md).[encryptedKey](../interfaces/IBaseMessage.md#encryptedkey)

#### Defined in

[lib/messages/BaseMessage.ts:48](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L48)

___

### key

• `Optional` `Readonly` **key**: \`ag5zfmtoYW4tYWNhZGVteX$\{string}CxIIVXNlckRhdGEi$\{string}thaWRf$\{string}$\{string}$\{string}\`

**`Raw`**

types/schema!FeedbackSchemaBase.expandKey

#### Implementation of

[IBaseMessage](../interfaces/IBaseMessage.md).[key](../interfaces/IBaseMessage.md#key)

#### Defined in

[lib/messages/BaseMessage.ts:44](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L44)

___

### locked

• `Optional` `Readonly` **locked**: `boolean`

**`Raw`**

types/schema!FeedbackSchemaBase.isLocked

#### Implementation of

[IBaseMessage](../interfaces/IBaseMessage.md).[locked](../interfaces/IBaseMessage.md#locked)

#### Defined in

[lib/messages/BaseMessage.ts:57](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L57)

___

### pinned

• `Optional` `Readonly` **pinned**: `boolean`

**`Raw`**

types/schema!FeedbackSchemaBase.isPinned

#### Implementation of

[IBaseMessage](../interfaces/IBaseMessage.md).[pinned](../interfaces/IBaseMessage.md#pinned)

#### Defined in

[lib/messages/BaseMessage.ts:61](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L61)

___

### program

• `Optional` `Readonly` **program**: [`Program`](Program.md)

#### Implementation of

[IBaseMessage](../interfaces/IBaseMessage.md).[program](../interfaces/IBaseMessage.md#program)

#### Defined in

[lib/messages/BaseMessage.ts:35](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L35)

___

### rawData

• `Optional` **rawData**: `RecursivePartial`\<[`FeedbackSchemaBase`](../interfaces/FeedbackSchemaBase.md)\>

The raw base schema data

**`Remarks`**

Only set if the base was created from a user schema.

#### Inherited from

Wrapper.rawData

#### Defined in

[lib/Wrapper.ts:22](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/Wrapper.ts#L22)

___

### score

• `Optional` `Readonly` **score**: `number`

**`Raw`**

types/schema!FeedbackSchemaBase.lowQualityScore

#### Implementation of

[IBaseMessage](../interfaces/IBaseMessage.md).[score](../interfaces/IBaseMessage.md#score)

#### Defined in

[lib/messages/BaseMessage.ts:69](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L69)

___

### selfFlagged

• `Optional` `Readonly` **selfFlagged**: `boolean`

**`Raw`**

types/schema!FeedbackSchemaBase.flaggedByUser

#### Implementation of

[IBaseMessage](../interfaces/IBaseMessage.md).[selfFlagged](../interfaces/IBaseMessage.md#selfflagged)

#### Defined in

[lib/messages/BaseMessage.ts:79](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L79)

___

### text

• `Optional` `Readonly` **text**: `string`

**`Raw`**

types/schema!FeedbackSchemaBase.content

#### Implementation of

[IBaseMessage](../interfaces/IBaseMessage.md).[text](../interfaces/IBaseMessage.md#text)

#### Defined in

[lib/messages/BaseMessage.ts:33](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L33)

___

### verified

• `Optional` `Readonly` **verified**: `boolean`

**`Raw`**

types/schema!FeedbackSchemaBase.definitelyNotSpam

#### Implementation of

[IBaseMessage](../interfaces/IBaseMessage.md).[verified](../interfaces/IBaseMessage.md#verified)

#### Defined in

[lib/messages/BaseMessage.ts:65](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L65)

## Accessors

### bySelf

• `get` **bySelf**(): `boolean`

Checks if the message was written by the client user

#### Returns

`boolean`

#### Defined in

[lib/messages/BaseMessage.ts:84](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L84)

___

### url

• `get` **url**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

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

#### Defined in

[lib/messages/BaseMessage.ts:138](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L138)

___

### copy

▸ **copy**(`data`): [`BaseMessage`](BaseMessage.md)

Updates data into the class

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`IBaseMessage`](../interfaces/IBaseMessage.md) | The data to copy from |

#### Returns

[`BaseMessage`](BaseMessage.md)

The class instance

#### Inherited from

Wrapper.copy

#### Defined in

[lib/Wrapper.ts:53](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/Wrapper.ts#L53)

___

### copyFromSchema

▸ **copyFromSchema**(`schema`): [`BaseMessage`](BaseMessage.md)

Updates data from a schema into the instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `schema` | `RecursivePartial`\<[`FeedbackSchemaBase`](../interfaces/FeedbackSchemaBase.md)\> | The schema to copy from |

#### Returns

[`BaseMessage`](BaseMessage.md)

The class instance

#### Inherited from

Wrapper.copyFromSchema

#### Defined in

[lib/Wrapper.ts:65](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/Wrapper.ts#L65)

___

### get

▸ `Abstract` **get**(`client?`): `Promise`\<[`BaseMessage`](BaseMessage.md)\>

Gets and updates the instance's data

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `client?` | [`Client`](Client.md) | The API client to use |

#### Returns

`Promise`\<[`BaseMessage`](BaseMessage.md)\>

#### Inherited from

Wrapper.get

#### Defined in

[lib/Wrapper.ts:78](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/Wrapper.ts#L78)

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

#### Overrides

Wrapper.is

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

Wrapper.isSchema

#### Defined in

[lib/Wrapper.ts:88](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/Wrapper.ts#L88)

___

### transformSchema

▸ **transformSchema**(`schema`): [`IBaseMessage`](../interfaces/IBaseMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `RecursivePartial`\<[`FeedbackSchemaBase`](../interfaces/FeedbackSchemaBase.md)\> |

#### Returns

[`IBaseMessage`](../interfaces/IBaseMessage.md)

#### Overrides

Wrapper.transformSchema

#### Defined in

[lib/messages/BaseMessage.ts:101](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L101)
