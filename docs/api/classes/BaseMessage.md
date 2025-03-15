Defined in: [src/lib/messages/BaseMessage.ts:26](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L26)

## Extends

- `default`\<[`FeedbackSchemaBase`](api/interfaces%5CFeedbackSchemaBase.md), [`IBaseMessage`](api/interfaces%5CIBaseMessage.md)\>

## Extended by

- [`Message`](api/classes%5CMessage.md)
- [`Reply`](api/classes%5CReply.md)

## Implements

- [`IBaseMessage`](api/interfaces%5CIBaseMessage.md)

## Constructors

### new BaseMessage()

> **new BaseMessage**(`data`?): [`BaseMessage`](api/classes%5CBaseMessage.md)

Defined in: [src/lib/Wrapper.ts:36](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/Wrapper.ts#L36)

Creates a new class instance

#### Parameters

##### data?

[`IBaseMessage`](api/interfaces%5CIBaseMessage.md)

#### Returns

[`BaseMessage`](api/classes%5CBaseMessage.md)

#### Inherited from

`Wrapper<FeedbackSchemaBase, IBaseMessage>.constructor`

### new BaseMessage()

> **new BaseMessage**(`client`, `data`?): [`BaseMessage`](api/classes%5CBaseMessage.md)

Defined in: [src/lib/Wrapper.ts:37](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/Wrapper.ts#L37)

#### Parameters

##### client

[`Client`](api/classes%5CClient.md)

##### data?

[`IBaseMessage`](api/interfaces%5CIBaseMessage.md)

#### Returns

[`BaseMessage`](api/classes%5CBaseMessage.md)

#### Inherited from

`Wrapper<FeedbackSchemaBase, IBaseMessage>.constructor`

## Properties

### author?

> `readonly` `optional` **author**: [`User`](api/classes%5CUser.md)

Defined in: [src/lib/messages/BaseMessage.ts:34](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L34)

#### Implementation of

[`IBaseMessage`](api/interfaces%5CIBaseMessage.md).[`author`](api/interfaces%5CIBaseMessage.md#author)

***

### byVideoAuthor?

> `readonly` `optional` **byVideoAuthor**: `boolean`

Defined in: [src/lib/messages/BaseMessage.ts:74](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L74)

#### Raw

[FeedbackSchemaBase.fromVideoAuthor](api/interfaces%5CFeedbackSchemaBase.md#fromvideoauthor)

#### Implementation of

[`IBaseMessage`](api/interfaces%5CIBaseMessage.md).[`byVideoAuthor`](api/interfaces%5CIBaseMessage.md#byvideoauthor)

***

### client?

> `optional` **client**: [`Client`](api/classes%5CClient.md)

Defined in: [src/lib/Wrapper.ts:15](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/Wrapper.ts#L15)

The client that this base was fetched with.

#### Inherited from

`Wrapper.client`

***

### created?

> `readonly` `optional` **created**: `Date`

Defined in: [src/lib/messages/BaseMessage.ts:39](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L39)

#### Raw

[FeedbackSchemaBase.date](api/interfaces%5CFeedbackSchemaBase.md#date)

#### Implementation of

[`IBaseMessage`](api/interfaces%5CIBaseMessage.md).[`created`](api/interfaces%5CIBaseMessage.md#created)

***

### deleted?

> `readonly` `optional` **deleted**: `boolean`

Defined in: [src/lib/messages/BaseMessage.ts:53](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L53)

#### Raw

[FeedbackSchemaBase.appearsAsDeleted](api/interfaces%5CFeedbackSchemaBase.md#appearsasdeleted)

#### Implementation of

[`IBaseMessage`](api/interfaces%5CIBaseMessage.md).[`deleted`](api/interfaces%5CIBaseMessage.md#deleted)

***

### encryptedKey?

> `readonly` `optional` **encryptedKey**: `` `kaencrypted_${string}_${string}` ``

Defined in: [src/lib/messages/BaseMessage.ts:48](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L48)

#### Raw

[FeedbackSchemaBase.key](api/interfaces%5CFeedbackSchemaBase.md#key)

#### Implementation of

[`IBaseMessage`](api/interfaces%5CIBaseMessage.md).[`encryptedKey`](api/interfaces%5CIBaseMessage.md#encryptedkey)

***

### key?

> `readonly` `optional` **key**: `` `ag5zfmtoYW4tYWNhZGVteX${string}CxIIVXNlckRhdGEi${string}thaWRf${string}${string}${string}` ``

Defined in: [src/lib/messages/BaseMessage.ts:44](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L44)

#### Raw

[FeedbackSchemaBase.expandKey](api/interfaces%5CFeedbackSchemaBase.md#expandkey)

#### Implementation of

[`IBaseMessage`](api/interfaces%5CIBaseMessage.md).[`key`](api/interfaces%5CIBaseMessage.md#key)

***

### locked?

> `readonly` `optional` **locked**: `boolean`

Defined in: [src/lib/messages/BaseMessage.ts:57](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L57)

#### Raw

[FeedbackSchemaBase.isLocked](api/interfaces%5CFeedbackSchemaBase.md#islocked)

#### Implementation of

[`IBaseMessage`](api/interfaces%5CIBaseMessage.md).[`locked`](api/interfaces%5CIBaseMessage.md#locked)

***

### pinned?

> `readonly` `optional` **pinned**: `boolean`

Defined in: [src/lib/messages/BaseMessage.ts:61](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L61)

#### Raw

[FeedbackSchemaBase.isPinned](api/interfaces%5CFeedbackSchemaBase.md#ispinned)

#### Implementation of

[`IBaseMessage`](api/interfaces%5CIBaseMessage.md).[`pinned`](api/interfaces%5CIBaseMessage.md#pinned)

***

### program?

> `readonly` `optional` **program**: [`Program`](api/classes%5CProgram.md)

Defined in: [src/lib/messages/BaseMessage.ts:35](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L35)

#### Implementation of

[`IBaseMessage`](api/interfaces%5CIBaseMessage.md).[`program`](api/interfaces%5CIBaseMessage.md#program)

***

### rawData?

> `optional` **rawData**: `RecursivePartial`\<[`FeedbackSchemaBase`](api/interfaces%5CFeedbackSchemaBase.md)\>

Defined in: [src/lib/Wrapper.ts:22](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/Wrapper.ts#L22)

The raw base schema data

#### Remarks

Only set if the base was created from a user schema.

#### Inherited from

`Wrapper.rawData`

***

### score?

> `readonly` `optional` **score**: `number`

Defined in: [src/lib/messages/BaseMessage.ts:69](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L69)

#### Raw

[FeedbackSchemaBase.lowQualityScore](api/interfaces%5CFeedbackSchemaBase.md#lowqualityscore)

#### Implementation of

[`IBaseMessage`](api/interfaces%5CIBaseMessage.md).[`score`](api/interfaces%5CIBaseMessage.md#score)

***

### selfFlagged?

> `readonly` `optional` **selfFlagged**: `boolean`

Defined in: [src/lib/messages/BaseMessage.ts:79](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L79)

#### Raw

[FeedbackSchemaBase.flaggedByUser](api/interfaces%5CFeedbackSchemaBase.md#flaggedbyuser)

#### Implementation of

[`IBaseMessage`](api/interfaces%5CIBaseMessage.md).[`selfFlagged`](api/interfaces%5CIBaseMessage.md#selfflagged)

***

### text?

> `readonly` `optional` **text**: `string`

Defined in: [src/lib/messages/BaseMessage.ts:33](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L33)

#### Raw

[FeedbackSchemaBase.content](api/interfaces%5CFeedbackSchemaBase.md#content)

#### Implementation of

[`IBaseMessage`](api/interfaces%5CIBaseMessage.md).[`text`](api/interfaces%5CIBaseMessage.md#text)

***

### verified?

> `readonly` `optional` **verified**: `boolean`

Defined in: [src/lib/messages/BaseMessage.ts:65](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L65)

#### Raw

[FeedbackSchemaBase.definitelyNotSpam](api/interfaces%5CFeedbackSchemaBase.md#definitelynotspam)

#### Implementation of

[`IBaseMessage`](api/interfaces%5CIBaseMessage.md).[`verified`](api/interfaces%5CIBaseMessage.md#verified)

## Accessors

### bySelf

#### Get Signature

> **get** **bySelf**(): `boolean`

Defined in: [src/lib/messages/BaseMessage.ts:84](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L84)

Checks if the message was written by the client user

##### Returns

`boolean`

***

### url

#### Get Signature

> **get** **url**(): `null` \| `string`

Defined in: [src/lib/messages/BaseMessage.ts:88](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L88)

##### Returns

`null` \| `string`

## Methods

### byUser()

> **byUser**(`user`): `boolean`

Defined in: [src/lib/messages/BaseMessage.ts:138](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L138)

Checks if the message was written by the given user

#### Parameters

##### user

[`User`](api/classes%5CUser.md)

#### Returns

`boolean`

***

### copy()

> **copy**(`data`): [`BaseMessage`](api/classes%5CBaseMessage.md)

Defined in: [src/lib/Wrapper.ts:53](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/Wrapper.ts#L53)

Updates data into the class

#### Parameters

##### data

[`IBaseMessage`](api/interfaces%5CIBaseMessage.md)

The data to copy from

#### Returns

[`BaseMessage`](api/classes%5CBaseMessage.md)

The class instance

#### Inherited from

`Wrapper.copy`

***

### copyFromSchema()

> **copyFromSchema**(`schema`): [`BaseMessage`](api/classes%5CBaseMessage.md)

Defined in: [src/lib/Wrapper.ts:65](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/Wrapper.ts#L65)

Updates data from a schema into the instance

#### Parameters

##### schema

`RecursivePartial`\<[`FeedbackSchemaBase`](api/interfaces%5CFeedbackSchemaBase.md)\>

The schema to copy from

#### Returns

[`BaseMessage`](api/classes%5CBaseMessage.md)

The class instance

#### Inherited from

`Wrapper.copyFromSchema`

***

### get()

> `abstract` **get**(`client`?): `Promise`\<[`BaseMessage`](api/classes%5CBaseMessage.md)\>

Defined in: [src/lib/Wrapper.ts:78](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/Wrapper.ts#L78)

Gets and updates the instance's data

#### Parameters

##### client?

[`Client`](api/classes%5CClient.md)

The API client to use

#### Returns

`Promise`\<[`BaseMessage`](api/classes%5CBaseMessage.md)\>

#### Inherited from

`Wrapper.get`

***

### is()

> **is**(`message`): `boolean`

Defined in: [src/lib/messages/BaseMessage.ts:145](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L145)

Checks if the message is the same as the given message

#### Parameters

##### message

[`IBaseMessage`](api/interfaces%5CIBaseMessage.md) | [`BaseMessage`](api/classes%5CBaseMessage.md)

#### Returns

`boolean`

#### Overrides

`Wrapper.is`

***

### isSchema()

> **isSchema**(`schema`): `boolean`

Defined in: [src/lib/Wrapper.ts:88](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/Wrapper.ts#L88)

Checks if the schema represents the same instance

#### Parameters

##### schema

`RecursivePartial`\<[`FeedbackSchemaBase`](api/interfaces%5CFeedbackSchemaBase.md)\>

#### Returns

`boolean`

#### Inherited from

`Wrapper.isSchema`

***

### transformSchema()

> **transformSchema**(`schema`): [`IBaseMessage`](api/interfaces%5CIBaseMessage.md)

Defined in: [src/lib/messages/BaseMessage.ts:101](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L101)

Transforms a API schema into an abstracted interface

#### Parameters

##### schema

`RecursivePartial`\<[`FeedbackSchemaBase`](api/interfaces%5CFeedbackSchemaBase.md)\>

The schema to transform

#### Returns

[`IBaseMessage`](api/interfaces%5CIBaseMessage.md)

#### Overrides

`Wrapper.transformSchema`
