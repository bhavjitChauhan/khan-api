Defined in: [src/lib/messages/Reply.ts:13](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/Reply.ts#L13)

## Extends

- [`BaseMessage`](api/classes%5CBaseMessage.md)

## Implements

- [`IReply`](api/interfaces%5CIReply.md)

## Constructors

### new Reply()

> **new Reply**(`data`?): [`Reply`](api/classes%5CReply.md)

Defined in: [src/lib/Wrapper.ts:36](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/Wrapper.ts#L36)

Creates a new class instance

#### Parameters

##### data?

[`IBaseMessage`](api/interfaces%5CIBaseMessage.md)

#### Returns

[`Reply`](api/classes%5CReply.md)

#### Inherited from

[`BaseMessage`](api/classes%5CBaseMessage.md).[`constructor`](api/classes%5CBaseMessage.md#constructors)

### new Reply()

> **new Reply**(`client`, `data`?): [`Reply`](api/classes%5CReply.md)

Defined in: [src/lib/Wrapper.ts:37](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/Wrapper.ts#L37)

#### Parameters

##### client

[`Client`](api/classes%5CClient.md)

##### data?

[`IBaseMessage`](api/interfaces%5CIBaseMessage.md)

#### Returns

[`Reply`](api/classes%5CReply.md)

#### Inherited from

[`BaseMessage`](api/classes%5CBaseMessage.md).[`constructor`](api/classes%5CBaseMessage.md#constructors)

## Properties

### author?

> `readonly` `optional` **author**: [`User`](api/classes%5CUser.md)

Defined in: [src/lib/messages/BaseMessage.ts:34](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L34)

#### Implementation of

[`IReply`](api/interfaces%5CIReply.md).[`author`](api/interfaces%5CIReply.md#author)

#### Inherited from

[`BaseMessage`](api/classes%5CBaseMessage.md).[`author`](api/classes%5CBaseMessage.md#author)

***

### byVideoAuthor?

> `readonly` `optional` **byVideoAuthor**: `boolean`

Defined in: [src/lib/messages/BaseMessage.ts:74](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L74)

#### Raw

[FeedbackSchemaBase.fromVideoAuthor](api/interfaces%5CFeedbackSchemaBase.md#fromvideoauthor)

#### Implementation of

[`IReply`](api/interfaces%5CIReply.md).[`byVideoAuthor`](api/interfaces%5CIReply.md#byvideoauthor)

#### Inherited from

[`BaseMessage`](api/classes%5CBaseMessage.md).[`byVideoAuthor`](api/classes%5CBaseMessage.md#byvideoauthor)

***

### client?

> `optional` **client**: [`Client`](api/classes%5CClient.md)

Defined in: [src/lib/Wrapper.ts:15](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/Wrapper.ts#L15)

The client that this base was fetched with.

#### Inherited from

[`BaseMessage`](api/classes%5CBaseMessage.md).[`client`](api/classes%5CBaseMessage.md#client-1)

***

### created?

> `readonly` `optional` **created**: `Date`

Defined in: [src/lib/messages/BaseMessage.ts:39](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L39)

#### Raw

[FeedbackSchemaBase.date](api/interfaces%5CFeedbackSchemaBase.md#date)

#### Implementation of

[`IReply`](api/interfaces%5CIReply.md).[`created`](api/interfaces%5CIReply.md#created)

#### Inherited from

[`BaseMessage`](api/classes%5CBaseMessage.md).[`created`](api/classes%5CBaseMessage.md#created)

***

### deleted?

> `readonly` `optional` **deleted**: `boolean`

Defined in: [src/lib/messages/BaseMessage.ts:53](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L53)

#### Raw

[FeedbackSchemaBase.appearsAsDeleted](api/interfaces%5CFeedbackSchemaBase.md#appearsasdeleted)

#### Implementation of

[`IReply`](api/interfaces%5CIReply.md).[`deleted`](api/interfaces%5CIReply.md#deleted)

#### Inherited from

[`BaseMessage`](api/classes%5CBaseMessage.md).[`deleted`](api/classes%5CBaseMessage.md#deleted)

***

### encryptedKey?

> `readonly` `optional` **encryptedKey**: `` `kaencrypted_${string}_${string}` ``

Defined in: [src/lib/messages/BaseMessage.ts:48](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L48)

#### Raw

[FeedbackSchemaBase.key](api/interfaces%5CFeedbackSchemaBase.md#key)

#### Implementation of

[`IReply`](api/interfaces%5CIReply.md).[`encryptedKey`](api/interfaces%5CIReply.md#encryptedkey)

#### Inherited from

[`BaseMessage`](api/classes%5CBaseMessage.md).[`encryptedKey`](api/classes%5CBaseMessage.md#encryptedkey)

***

### key?

> `readonly` `optional` **key**: `` `ag5zfmtoYW4tYWNhZGVteX${string}CxIIVXNlckRhdGEi${string}thaWRf${string}${string}${string}` ``

Defined in: [src/lib/messages/BaseMessage.ts:44](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L44)

#### Raw

[FeedbackSchemaBase.expandKey](api/interfaces%5CFeedbackSchemaBase.md#expandkey)

#### Implementation of

[`IReply`](api/interfaces%5CIReply.md).[`key`](api/interfaces%5CIReply.md#key)

#### Inherited from

[`BaseMessage`](api/classes%5CBaseMessage.md).[`key`](api/classes%5CBaseMessage.md#key)

***

### locked?

> `readonly` `optional` **locked**: `boolean`

Defined in: [src/lib/messages/BaseMessage.ts:57](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L57)

#### Raw

[FeedbackSchemaBase.isLocked](api/interfaces%5CFeedbackSchemaBase.md#islocked)

#### Implementation of

[`IReply`](api/interfaces%5CIReply.md).[`locked`](api/interfaces%5CIReply.md#locked)

#### Inherited from

[`BaseMessage`](api/classes%5CBaseMessage.md).[`locked`](api/classes%5CBaseMessage.md#locked)

***

### message?

> `readonly` `optional` **message**: [`Message`](api/classes%5CMessage.md)

Defined in: [src/lib/messages/Reply.ts:14](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/Reply.ts#L14)

#### Implementation of

[`IReply`](api/interfaces%5CIReply.md).[`message`](api/interfaces%5CIReply.md#message)

***

### pinned?

> `readonly` `optional` **pinned**: `boolean`

Defined in: [src/lib/messages/BaseMessage.ts:61](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L61)

#### Raw

[FeedbackSchemaBase.isPinned](api/interfaces%5CFeedbackSchemaBase.md#ispinned)

#### Implementation of

[`IReply`](api/interfaces%5CIReply.md).[`pinned`](api/interfaces%5CIReply.md#pinned)

#### Inherited from

[`BaseMessage`](api/classes%5CBaseMessage.md).[`pinned`](api/classes%5CBaseMessage.md#pinned)

***

### program?

> `readonly` `optional` **program**: [`Program`](api/classes%5CProgram.md)

Defined in: [src/lib/messages/BaseMessage.ts:35](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L35)

#### Implementation of

[`IReply`](api/interfaces%5CIReply.md).[`program`](api/interfaces%5CIReply.md#program)

#### Inherited from

[`BaseMessage`](api/classes%5CBaseMessage.md).[`program`](api/classes%5CBaseMessage.md#program)

***

### rawData?

> `optional` **rawData**: `RecursivePartial`\<[`FeedbackSchemaBase`](api/interfaces%5CFeedbackSchemaBase.md)\>

Defined in: [src/lib/Wrapper.ts:22](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/Wrapper.ts#L22)

The raw base schema data

#### Remarks

Only set if the base was created from a user schema.

#### Inherited from

[`BaseMessage`](api/classes%5CBaseMessage.md).[`rawData`](api/classes%5CBaseMessage.md#rawdata)

***

### score?

> `readonly` `optional` **score**: `number`

Defined in: [src/lib/messages/BaseMessage.ts:69](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L69)

#### Raw

[FeedbackSchemaBase.lowQualityScore](api/interfaces%5CFeedbackSchemaBase.md#lowqualityscore)

#### Implementation of

[`IReply`](api/interfaces%5CIReply.md).[`score`](api/interfaces%5CIReply.md#score)

#### Inherited from

[`BaseMessage`](api/classes%5CBaseMessage.md).[`score`](api/classes%5CBaseMessage.md#score)

***

### selfFlagged?

> `readonly` `optional` **selfFlagged**: `boolean`

Defined in: [src/lib/messages/BaseMessage.ts:79](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L79)

#### Raw

[FeedbackSchemaBase.flaggedByUser](api/interfaces%5CFeedbackSchemaBase.md#flaggedbyuser)

#### Implementation of

[`IReply`](api/interfaces%5CIReply.md).[`selfFlagged`](api/interfaces%5CIReply.md#selfflagged)

#### Inherited from

[`BaseMessage`](api/classes%5CBaseMessage.md).[`selfFlagged`](api/classes%5CBaseMessage.md#selfflagged)

***

### text?

> `readonly` `optional` **text**: `string`

Defined in: [src/lib/messages/BaseMessage.ts:33](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L33)

#### Raw

[FeedbackSchemaBase.content](api/interfaces%5CFeedbackSchemaBase.md#content)

#### Implementation of

[`IReply`](api/interfaces%5CIReply.md).[`text`](api/interfaces%5CIReply.md#text)

#### Inherited from

[`BaseMessage`](api/classes%5CBaseMessage.md).[`text`](api/classes%5CBaseMessage.md#text)

***

### verified?

> `readonly` `optional` **verified**: `boolean`

Defined in: [src/lib/messages/BaseMessage.ts:65](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L65)

#### Raw

[FeedbackSchemaBase.definitelyNotSpam](api/interfaces%5CFeedbackSchemaBase.md#definitelynotspam)

#### Implementation of

[`IReply`](api/interfaces%5CIReply.md).[`verified`](api/interfaces%5CIReply.md#verified)

#### Inherited from

[`BaseMessage`](api/classes%5CBaseMessage.md).[`verified`](api/classes%5CBaseMessage.md#verified)

## Accessors

### bySelf

#### Get Signature

> **get** **bySelf**(): `boolean`

Defined in: [src/lib/messages/BaseMessage.ts:84](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L84)

Checks if the message was written by the client user

##### Returns

`boolean`

#### Inherited from

[`BaseMessage`](api/classes%5CBaseMessage.md).[`bySelf`](api/classes%5CBaseMessage.md#byself)

***

### url

#### Get Signature

> **get** **url**(): `null` \| `string`

Defined in: [src/lib/messages/BaseMessage.ts:88](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L88)

##### Returns

`null` \| `string`

#### Inherited from

[`BaseMessage`](api/classes%5CBaseMessage.md).[`url`](api/classes%5CBaseMessage.md#url)

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

#### Inherited from

[`BaseMessage`](api/classes%5CBaseMessage.md).[`byUser`](api/classes%5CBaseMessage.md#byuser)

***

### copy()

> **copy**(`reply`): [`Reply`](api/classes%5CReply.md)

Defined in: [src/lib/messages/Reply.ts:48](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/Reply.ts#L48)

Updates data into the class

#### Parameters

##### reply

[`IReply`](api/interfaces%5CIReply.md)

#### Returns

[`Reply`](api/classes%5CReply.md)

The class instance

#### Overrides

[`BaseMessage`](api/classes%5CBaseMessage.md).[`copy`](api/classes%5CBaseMessage.md#copy)

***

### copyFromSchema()

> **copyFromSchema**(`schema`): [`Reply`](api/classes%5CReply.md)

Defined in: [src/lib/messages/Reply.ts:58](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/Reply.ts#L58)

Updates data from a schema into the instance

#### Parameters

##### schema

`RecursivePartial`\<[`BasicFeedbackSchema`](api/interfaces%5CBasicFeedbackSchema.md)\>

The schema to copy from

#### Returns

[`Reply`](api/classes%5CReply.md)

The class instance

#### Overrides

[`BaseMessage`](api/classes%5CBaseMessage.md).[`copyFromSchema`](api/classes%5CBaseMessage.md#copyfromschema)

***

### get()

> **get**(`client`): `Promise`\<[`Reply`](api/classes%5CReply.md)\>

Defined in: [src/lib/messages/Reply.ts:62](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/Reply.ts#L62)

Gets and updates the instance's data

#### Parameters

##### client

[`Client`](api/classes%5CClient.md) = `...`

The API client to use

#### Returns

`Promise`\<[`Reply`](api/classes%5CReply.md)\>

#### Overrides

[`BaseMessage`](api/classes%5CBaseMessage.md).[`get`](api/classes%5CBaseMessage.md#get)

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

#### Inherited from

[`BaseMessage`](api/classes%5CBaseMessage.md).[`is`](api/classes%5CBaseMessage.md#is)

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

[`BaseMessage`](api/classes%5CBaseMessage.md).[`isSchema`](api/classes%5CBaseMessage.md#isschema)

***

### transformSchema()

> **transformSchema**(`schema`): [`IReply`](api/interfaces%5CIReply.md)

Defined in: [src/lib/messages/Reply.ts:32](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/Reply.ts#L32)

Transforms a API schema into an abstracted interface

#### Parameters

##### schema

`RecursivePartial`\<[`BasicFeedbackSchema`](api/interfaces%5CBasicFeedbackSchema.md)\>

The schema to transform

#### Returns

[`IReply`](api/interfaces%5CIReply.md)

#### Overrides

[`BaseMessage`](api/classes%5CBaseMessage.md).[`transformSchema`](api/classes%5CBaseMessage.md#transformschema)

***

### fromIdentifier()

> `static` **fromIdentifier**(`identifier`): [`Reply`](api/classes%5CReply.md)

Defined in: [src/lib/messages/Reply.ts:23](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/Reply.ts#L23)

#### Parameters

##### identifier

`` `ag5zfmtoYW4tYWNhZGVteX${string}CxIIVXNlckRhdGEi${string}thaWRf${string}${string}${string}` `` | `` `kaencrypted_${string}_${string}` ``

#### Returns

[`Reply`](api/classes%5CReply.md)

***

### fromSchema()

> `static` **fromSchema**(`schema`): [`Reply`](api/classes%5CReply.md)

Defined in: [src/lib/messages/Reply.ts:16](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/Reply.ts#L16)

#### Parameters

##### schema

`RecursivePartial`\<[`BasicFeedbackSchema`](api/interfaces%5CBasicFeedbackSchema.md)\>

#### Returns

[`Reply`](api/classes%5CReply.md)
