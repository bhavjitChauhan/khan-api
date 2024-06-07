## Extends

- `default`\<[`FeedbackSchemaBase`](api%5Cinterfaces%5CFeedbackSchemaBase.md), [`IBaseMessage`](api%5Cinterfaces%5CIBaseMessage.md)\>

## Extended by

- [`Message`](api%5Cclasses%5CMessage.md)
- [`Reply`](api%5Cclasses%5CReply.md)

## Implements

- [`IBaseMessage`](api%5Cinterfaces%5CIBaseMessage.md)

## Constructors

### new BaseMessage()

> **new BaseMessage**(`data`?): [`BaseMessage`](api%5Cclasses%5CBaseMessage.md)

Creates a new class instance

#### Parameters

• **data?**: [`IBaseMessage`](api%5Cinterfaces%5CIBaseMessage.md)

#### Returns

[`BaseMessage`](api%5Cclasses%5CBaseMessage.md)

#### Inherited from

`Wrapper<FeedbackSchemaBase, IBaseMessage>.constructor`

#### Source

[src/lib/Wrapper.ts:36](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/Wrapper.ts#L36)

### new BaseMessage()

> **new BaseMessage**(`client`, `data`?): [`BaseMessage`](api%5Cclasses%5CBaseMessage.md)

#### Parameters

• **client**: [`Client`](api%5Cclasses%5CClient.md)

• **data?**: [`IBaseMessage`](api%5Cinterfaces%5CIBaseMessage.md)

#### Returns

[`BaseMessage`](api%5Cclasses%5CBaseMessage.md)

#### Inherited from

`Wrapper<FeedbackSchemaBase, IBaseMessage>.constructor`

#### Source

[src/lib/Wrapper.ts:37](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/Wrapper.ts#L37)

## Properties

### author?

> `optional` `readonly` **author**: [`User`](api%5Cclasses%5CUser.md)

#### Implementation of

[`IBaseMessage`](api%5Cinterfaces%5CIBaseMessage.md).[`author`](api%5Cinterfaces%5CIBaseMessage.md#author)

#### Source

[src/lib/messages/BaseMessage.ts:34](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L34)

***

### byVideoAuthor?

> `optional` `readonly` **byVideoAuthor**: `boolean`

#### Raw

[FeedbackSchemaBase.fromVideoAuthor](api%5Cinterfaces%5CFeedbackSchemaBase.md#fromvideoauthor)

#### Implementation of

[`IBaseMessage`](api%5Cinterfaces%5CIBaseMessage.md).[`byVideoAuthor`](api%5Cinterfaces%5CIBaseMessage.md#byvideoauthor)

#### Source

[src/lib/messages/BaseMessage.ts:74](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L74)

***

### client?

> `optional` **client**: [`Client`](api%5Cclasses%5CClient.md)

The client that this base was fetched with.

#### Inherited from

`Wrapper.client`

#### Source

[src/lib/Wrapper.ts:15](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/Wrapper.ts#L15)

***

### created?

> `optional` `readonly` **created**: `Date`

#### Raw

[FeedbackSchemaBase.date](api%5Cinterfaces%5CFeedbackSchemaBase.md#date)

#### Implementation of

[`IBaseMessage`](api%5Cinterfaces%5CIBaseMessage.md).[`created`](api%5Cinterfaces%5CIBaseMessage.md#created)

#### Source

[src/lib/messages/BaseMessage.ts:39](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L39)

***

### deleted?

> `optional` `readonly` **deleted**: `boolean`

#### Raw

[FeedbackSchemaBase.appearsAsDeleted](api%5Cinterfaces%5CFeedbackSchemaBase.md#appearsasdeleted)

#### Implementation of

[`IBaseMessage`](api%5Cinterfaces%5CIBaseMessage.md).[`deleted`](api%5Cinterfaces%5CIBaseMessage.md#deleted)

#### Source

[src/lib/messages/BaseMessage.ts:53](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L53)

***

### encryptedKey?

> `optional` `readonly` **encryptedKey**: \`kaencrypted\_$\{string\}\_$\{string\}\`

#### Raw

[FeedbackSchemaBase.key](api%5Cinterfaces%5CFeedbackSchemaBase.md#key)

#### Implementation of

[`IBaseMessage`](api%5Cinterfaces%5CIBaseMessage.md).[`encryptedKey`](api%5Cinterfaces%5CIBaseMessage.md#encryptedkey)

#### Source

[src/lib/messages/BaseMessage.ts:48](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L48)

***

### key?

> `optional` `readonly` **key**: \`ag5zfmtoYW4tYWNhZGVteX$\{string\}CxIIVXNlckRhdGEi$\{string\}thaWRf$\{string\}$\{string\}$\{string\}\`

#### Raw

[FeedbackSchemaBase.expandKey](api%5Cinterfaces%5CFeedbackSchemaBase.md#expandkey)

#### Implementation of

[`IBaseMessage`](api%5Cinterfaces%5CIBaseMessage.md).[`key`](api%5Cinterfaces%5CIBaseMessage.md#key)

#### Source

[src/lib/messages/BaseMessage.ts:44](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L44)

***

### locked?

> `optional` `readonly` **locked**: `boolean`

#### Raw

[FeedbackSchemaBase.isLocked](api%5Cinterfaces%5CFeedbackSchemaBase.md#islocked)

#### Implementation of

[`IBaseMessage`](api%5Cinterfaces%5CIBaseMessage.md).[`locked`](api%5Cinterfaces%5CIBaseMessage.md#locked)

#### Source

[src/lib/messages/BaseMessage.ts:57](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L57)

***

### pinned?

> `optional` `readonly` **pinned**: `boolean`

#### Raw

[FeedbackSchemaBase.isPinned](api%5Cinterfaces%5CFeedbackSchemaBase.md#ispinned)

#### Implementation of

[`IBaseMessage`](api%5Cinterfaces%5CIBaseMessage.md).[`pinned`](api%5Cinterfaces%5CIBaseMessage.md#pinned)

#### Source

[src/lib/messages/BaseMessage.ts:61](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L61)

***

### program?

> `optional` `readonly` **program**: [`Program`](api%5Cclasses%5CProgram.md)

#### Implementation of

[`IBaseMessage`](api%5Cinterfaces%5CIBaseMessage.md).[`program`](api%5Cinterfaces%5CIBaseMessage.md#program)

#### Source

[src/lib/messages/BaseMessage.ts:35](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L35)

***

### rawData?

> `optional` **rawData**: `RecursivePartial`\<[`FeedbackSchemaBase`](api%5Cinterfaces%5CFeedbackSchemaBase.md)\>

The raw base schema data

#### Remarks

Only set if the base was created from a user schema.

#### Inherited from

`Wrapper.rawData`

#### Source

[src/lib/Wrapper.ts:22](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/Wrapper.ts#L22)

***

### score?

> `optional` `readonly` **score**: `number`

#### Raw

[FeedbackSchemaBase.lowQualityScore](api%5Cinterfaces%5CFeedbackSchemaBase.md#lowqualityscore)

#### Implementation of

[`IBaseMessage`](api%5Cinterfaces%5CIBaseMessage.md).[`score`](api%5Cinterfaces%5CIBaseMessage.md#score)

#### Source

[src/lib/messages/BaseMessage.ts:69](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L69)

***

### selfFlagged?

> `optional` `readonly` **selfFlagged**: `boolean`

#### Raw

[FeedbackSchemaBase.flaggedByUser](api%5Cinterfaces%5CFeedbackSchemaBase.md#flaggedbyuser)

#### Implementation of

[`IBaseMessage`](api%5Cinterfaces%5CIBaseMessage.md).[`selfFlagged`](api%5Cinterfaces%5CIBaseMessage.md#selfflagged)

#### Source

[src/lib/messages/BaseMessage.ts:79](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L79)

***

### text?

> `optional` `readonly` **text**: `string`

#### Raw

[FeedbackSchemaBase.content](api%5Cinterfaces%5CFeedbackSchemaBase.md#content)

#### Implementation of

[`IBaseMessage`](api%5Cinterfaces%5CIBaseMessage.md).[`text`](api%5Cinterfaces%5CIBaseMessage.md#text)

#### Source

[src/lib/messages/BaseMessage.ts:33](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L33)

***

### verified?

> `optional` `readonly` **verified**: `boolean`

#### Raw

[FeedbackSchemaBase.definitelyNotSpam](api%5Cinterfaces%5CFeedbackSchemaBase.md#definitelynotspam)

#### Implementation of

[`IBaseMessage`](api%5Cinterfaces%5CIBaseMessage.md).[`verified`](api%5Cinterfaces%5CIBaseMessage.md#verified)

#### Source

[src/lib/messages/BaseMessage.ts:65](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L65)

## Accessors

### bySelf

> `get` **bySelf**(): `boolean`

Checks if the message was written by the client user

#### Returns

`boolean`

#### Source

[src/lib/messages/BaseMessage.ts:84](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L84)

***

### url

> `get` **url**(): `null` \| `string`

#### Returns

`null` \| `string`

#### Source

[src/lib/messages/BaseMessage.ts:88](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L88)

## Methods

### byUser()

> **byUser**(`user`): `boolean`

Checks if the message was written by the given user

#### Parameters

• **user**: [`User`](api%5Cclasses%5CUser.md)

#### Returns

`boolean`

#### Source

[src/lib/messages/BaseMessage.ts:138](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L138)

***

### copy()

> **copy**(`data`): [`BaseMessage`](api%5Cclasses%5CBaseMessage.md)

Updates data into the class

#### Parameters

• **data**: [`IBaseMessage`](api%5Cinterfaces%5CIBaseMessage.md)

The data to copy from

#### Returns

[`BaseMessage`](api%5Cclasses%5CBaseMessage.md)

The class instance

#### Inherited from

`Wrapper.copy`

#### Source

[src/lib/Wrapper.ts:53](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/Wrapper.ts#L53)

***

### copyFromSchema()

> **copyFromSchema**(`schema`): [`BaseMessage`](api%5Cclasses%5CBaseMessage.md)

Updates data from a schema into the instance

#### Parameters

• **schema**: `RecursivePartial`\<[`FeedbackSchemaBase`](api%5Cinterfaces%5CFeedbackSchemaBase.md)\>

The schema to copy from

#### Returns

[`BaseMessage`](api%5Cclasses%5CBaseMessage.md)

The class instance

#### Inherited from

`Wrapper.copyFromSchema`

#### Source

[src/lib/Wrapper.ts:65](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/Wrapper.ts#L65)

***

### get()

> `abstract` **get**(`client`?): `Promise`\<[`BaseMessage`](api%5Cclasses%5CBaseMessage.md)\>

Gets and updates the instance's data

#### Parameters

• **client?**: [`Client`](api%5Cclasses%5CClient.md)

The API client to use

#### Returns

`Promise`\<[`BaseMessage`](api%5Cclasses%5CBaseMessage.md)\>

#### Inherited from

`Wrapper.get`

#### Source

[src/lib/Wrapper.ts:78](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/Wrapper.ts#L78)

***

### is()

> **is**(`message`): `boolean`

Checks if the message is the same as the given message

#### Parameters

• **message**: [`IBaseMessage`](api%5Cinterfaces%5CIBaseMessage.md) \| [`BaseMessage`](api%5Cclasses%5CBaseMessage.md)

#### Returns

`boolean`

#### Overrides

`Wrapper.is`

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

`Wrapper.isSchema`

#### Source

[src/lib/Wrapper.ts:88](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/Wrapper.ts#L88)

***

### transformSchema()

> **transformSchema**(`schema`): [`IBaseMessage`](api%5Cinterfaces%5CIBaseMessage.md)

#### Parameters

• **schema**: `RecursivePartial`\<[`FeedbackSchemaBase`](api%5Cinterfaces%5CFeedbackSchemaBase.md)\>

#### Returns

[`IBaseMessage`](api%5Cinterfaces%5CIBaseMessage.md)

#### Overrides

`Wrapper.transformSchema`

#### Source

[src/lib/messages/BaseMessage.ts:101](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L101)
