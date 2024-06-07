## Extends

- [`BaseMessage`](api%5Cclasses%5CBaseMessage.md)

## Implements

- [`IReply`](api%5Cinterfaces%5CIReply.md)

## Constructors

### new Reply()

> **new Reply**(`data`?): [`Reply`](api%5Cclasses%5CReply.md)

Creates a new class instance

#### Parameters

• **data?**: [`IBaseMessage`](api%5Cinterfaces%5CIBaseMessage.md)

#### Returns

[`Reply`](api%5Cclasses%5CReply.md)

#### Inherited from

[`BaseMessage`](api%5Cclasses%5CBaseMessage.md).[`constructor`](api%5Cclasses%5CBaseMessage.md#constructors)

#### Source

[src/lib/Wrapper.ts:36](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/Wrapper.ts#L36)

### new Reply()

> **new Reply**(`client`, `data`?): [`Reply`](api%5Cclasses%5CReply.md)

#### Parameters

• **client**: [`Client`](api%5Cclasses%5CClient.md)

• **data?**: [`IBaseMessage`](api%5Cinterfaces%5CIBaseMessage.md)

#### Returns

[`Reply`](api%5Cclasses%5CReply.md)

#### Inherited from

[`BaseMessage`](api%5Cclasses%5CBaseMessage.md).[`constructor`](api%5Cclasses%5CBaseMessage.md#constructors)

#### Source

[src/lib/Wrapper.ts:37](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/Wrapper.ts#L37)

## Properties

### author?

> `optional` `readonly` **author**: [`User`](api%5Cclasses%5CUser.md)

#### Implementation of

[`IReply`](api%5Cinterfaces%5CIReply.md).[`author`](api%5Cinterfaces%5CIReply.md#author)

#### Inherited from

[`BaseMessage`](api%5Cclasses%5CBaseMessage.md).[`author`](api%5Cclasses%5CBaseMessage.md#author)

#### Source

[src/lib/messages/BaseMessage.ts:34](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L34)

***

### byVideoAuthor?

> `optional` `readonly` **byVideoAuthor**: `boolean`

#### Raw

[FeedbackSchemaBase.fromVideoAuthor](api%5Cinterfaces%5CFeedbackSchemaBase.md#fromvideoauthor)

#### Implementation of

[`IReply`](api%5Cinterfaces%5CIReply.md).[`byVideoAuthor`](api%5Cinterfaces%5CIReply.md#byvideoauthor)

#### Inherited from

[`BaseMessage`](api%5Cclasses%5CBaseMessage.md).[`byVideoAuthor`](api%5Cclasses%5CBaseMessage.md#byvideoauthor)

#### Source

[src/lib/messages/BaseMessage.ts:74](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L74)

***

### client?

> `optional` **client**: [`Client`](api%5Cclasses%5CClient.md)

The client that this base was fetched with.

#### Inherited from

[`BaseMessage`](api%5Cclasses%5CBaseMessage.md).[`client`](api%5Cclasses%5CBaseMessage.md#client)

#### Source

[src/lib/Wrapper.ts:15](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/Wrapper.ts#L15)

***

### created?

> `optional` `readonly` **created**: `Date`

#### Raw

[FeedbackSchemaBase.date](api%5Cinterfaces%5CFeedbackSchemaBase.md#date)

#### Implementation of

[`IReply`](api%5Cinterfaces%5CIReply.md).[`created`](api%5Cinterfaces%5CIReply.md#created)

#### Inherited from

[`BaseMessage`](api%5Cclasses%5CBaseMessage.md).[`created`](api%5Cclasses%5CBaseMessage.md#created)

#### Source

[src/lib/messages/BaseMessage.ts:39](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L39)

***

### deleted?

> `optional` `readonly` **deleted**: `boolean`

#### Raw

[FeedbackSchemaBase.appearsAsDeleted](api%5Cinterfaces%5CFeedbackSchemaBase.md#appearsasdeleted)

#### Implementation of

[`IReply`](api%5Cinterfaces%5CIReply.md).[`deleted`](api%5Cinterfaces%5CIReply.md#deleted)

#### Inherited from

[`BaseMessage`](api%5Cclasses%5CBaseMessage.md).[`deleted`](api%5Cclasses%5CBaseMessage.md#deleted)

#### Source

[src/lib/messages/BaseMessage.ts:53](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L53)

***

### encryptedKey?

> `optional` `readonly` **encryptedKey**: \`kaencrypted\_$\{string\}\_$\{string\}\`

#### Raw

[FeedbackSchemaBase.key](api%5Cinterfaces%5CFeedbackSchemaBase.md#key)

#### Implementation of

[`IReply`](api%5Cinterfaces%5CIReply.md).[`encryptedKey`](api%5Cinterfaces%5CIReply.md#encryptedkey)

#### Inherited from

[`BaseMessage`](api%5Cclasses%5CBaseMessage.md).[`encryptedKey`](api%5Cclasses%5CBaseMessage.md#encryptedkey)

#### Source

[src/lib/messages/BaseMessage.ts:48](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L48)

***

### key?

> `optional` `readonly` **key**: \`ag5zfmtoYW4tYWNhZGVteX$\{string\}CxIIVXNlckRhdGEi$\{string\}thaWRf$\{string\}$\{string\}$\{string\}\`

#### Raw

[FeedbackSchemaBase.expandKey](api%5Cinterfaces%5CFeedbackSchemaBase.md#expandkey)

#### Implementation of

[`IReply`](api%5Cinterfaces%5CIReply.md).[`key`](api%5Cinterfaces%5CIReply.md#key)

#### Inherited from

[`BaseMessage`](api%5Cclasses%5CBaseMessage.md).[`key`](api%5Cclasses%5CBaseMessage.md#key)

#### Source

[src/lib/messages/BaseMessage.ts:44](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L44)

***

### locked?

> `optional` `readonly` **locked**: `boolean`

#### Raw

[FeedbackSchemaBase.isLocked](api%5Cinterfaces%5CFeedbackSchemaBase.md#islocked)

#### Implementation of

[`IReply`](api%5Cinterfaces%5CIReply.md).[`locked`](api%5Cinterfaces%5CIReply.md#locked)

#### Inherited from

[`BaseMessage`](api%5Cclasses%5CBaseMessage.md).[`locked`](api%5Cclasses%5CBaseMessage.md#locked)

#### Source

[src/lib/messages/BaseMessage.ts:57](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L57)

***

### message?

> `optional` `readonly` **message**: [`Message`](api%5Cclasses%5CMessage.md)

#### Implementation of

[`IReply`](api%5Cinterfaces%5CIReply.md).[`message`](api%5Cinterfaces%5CIReply.md#message)

#### Source

[src/lib/messages/Reply.ts:14](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/Reply.ts#L14)

***

### pinned?

> `optional` `readonly` **pinned**: `boolean`

#### Raw

[FeedbackSchemaBase.isPinned](api%5Cinterfaces%5CFeedbackSchemaBase.md#ispinned)

#### Implementation of

[`IReply`](api%5Cinterfaces%5CIReply.md).[`pinned`](api%5Cinterfaces%5CIReply.md#pinned)

#### Inherited from

[`BaseMessage`](api%5Cclasses%5CBaseMessage.md).[`pinned`](api%5Cclasses%5CBaseMessage.md#pinned)

#### Source

[src/lib/messages/BaseMessage.ts:61](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L61)

***

### program?

> `optional` `readonly` **program**: [`Program`](api%5Cclasses%5CProgram.md)

#### Implementation of

[`IReply`](api%5Cinterfaces%5CIReply.md).[`program`](api%5Cinterfaces%5CIReply.md#program)

#### Inherited from

[`BaseMessage`](api%5Cclasses%5CBaseMessage.md).[`program`](api%5Cclasses%5CBaseMessage.md#program)

#### Source

[src/lib/messages/BaseMessage.ts:35](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L35)

***

### rawData?

> `optional` **rawData**: `RecursivePartial`\<[`FeedbackSchemaBase`](api%5Cinterfaces%5CFeedbackSchemaBase.md)\>

The raw base schema data

#### Remarks

Only set if the base was created from a user schema.

#### Inherited from

[`BaseMessage`](api%5Cclasses%5CBaseMessage.md).[`rawData`](api%5Cclasses%5CBaseMessage.md#rawdata)

#### Source

[src/lib/Wrapper.ts:22](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/Wrapper.ts#L22)

***

### score?

> `optional` `readonly` **score**: `number`

#### Raw

[FeedbackSchemaBase.lowQualityScore](api%5Cinterfaces%5CFeedbackSchemaBase.md#lowqualityscore)

#### Implementation of

[`IReply`](api%5Cinterfaces%5CIReply.md).[`score`](api%5Cinterfaces%5CIReply.md#score)

#### Inherited from

[`BaseMessage`](api%5Cclasses%5CBaseMessage.md).[`score`](api%5Cclasses%5CBaseMessage.md#score)

#### Source

[src/lib/messages/BaseMessage.ts:69](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L69)

***

### selfFlagged?

> `optional` `readonly` **selfFlagged**: `boolean`

#### Raw

[FeedbackSchemaBase.flaggedByUser](api%5Cinterfaces%5CFeedbackSchemaBase.md#flaggedbyuser)

#### Implementation of

[`IReply`](api%5Cinterfaces%5CIReply.md).[`selfFlagged`](api%5Cinterfaces%5CIReply.md#selfflagged)

#### Inherited from

[`BaseMessage`](api%5Cclasses%5CBaseMessage.md).[`selfFlagged`](api%5Cclasses%5CBaseMessage.md#selfflagged)

#### Source

[src/lib/messages/BaseMessage.ts:79](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L79)

***

### text?

> `optional` `readonly` **text**: `string`

#### Raw

[FeedbackSchemaBase.content](api%5Cinterfaces%5CFeedbackSchemaBase.md#content)

#### Implementation of

[`IReply`](api%5Cinterfaces%5CIReply.md).[`text`](api%5Cinterfaces%5CIReply.md#text)

#### Inherited from

[`BaseMessage`](api%5Cclasses%5CBaseMessage.md).[`text`](api%5Cclasses%5CBaseMessage.md#text)

#### Source

[src/lib/messages/BaseMessage.ts:33](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L33)

***

### verified?

> `optional` `readonly` **verified**: `boolean`

#### Raw

[FeedbackSchemaBase.definitelyNotSpam](api%5Cinterfaces%5CFeedbackSchemaBase.md#definitelynotspam)

#### Implementation of

[`IReply`](api%5Cinterfaces%5CIReply.md).[`verified`](api%5Cinterfaces%5CIReply.md#verified)

#### Inherited from

[`BaseMessage`](api%5Cclasses%5CBaseMessage.md).[`verified`](api%5Cclasses%5CBaseMessage.md#verified)

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

#### Inherited from

[`BaseMessage`](api%5Cclasses%5CBaseMessage.md).[`byUser`](api%5Cclasses%5CBaseMessage.md#byuser)

#### Source

[src/lib/messages/BaseMessage.ts:138](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L138)

***

### copy()

> **copy**(`reply`): [`Reply`](api%5Cclasses%5CReply.md)

Updates data into the class

#### Parameters

• **reply**: [`IReply`](api%5Cinterfaces%5CIReply.md)

The data to copy from

#### Returns

[`Reply`](api%5Cclasses%5CReply.md)

The class instance

#### Overrides

[`BaseMessage`](api%5Cclasses%5CBaseMessage.md).[`copy`](api%5Cclasses%5CBaseMessage.md#copy)

#### Source

[src/lib/messages/Reply.ts:48](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/Reply.ts#L48)

***

### copyFromSchema()

> **copyFromSchema**(`schema`): [`Reply`](api%5Cclasses%5CReply.md)

Updates data from a schema into the instance

#### Parameters

• **schema**: `RecursivePartial`\<[`BasicFeedbackSchema`](api%5Cinterfaces%5CBasicFeedbackSchema.md)\>

The schema to copy from

#### Returns

[`Reply`](api%5Cclasses%5CReply.md)

The class instance

#### Overrides

[`BaseMessage`](api%5Cclasses%5CBaseMessage.md).[`copyFromSchema`](api%5Cclasses%5CBaseMessage.md#copyfromschema)

#### Source

[src/lib/messages/Reply.ts:58](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/Reply.ts#L58)

***

### get()

> **get**(`client`): `Promise`\<[`Reply`](api%5Cclasses%5CReply.md)\>

Gets and updates the instance's data

#### Parameters

• **client**: [`Client`](api%5Cclasses%5CClient.md)= `undefined`

The API client to use

#### Returns

`Promise`\<[`Reply`](api%5Cclasses%5CReply.md)\>

#### Overrides

[`BaseMessage`](api%5Cclasses%5CBaseMessage.md).[`get`](api%5Cclasses%5CBaseMessage.md#get)

#### Source

[src/lib/messages/Reply.ts:62](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/Reply.ts#L62)

***

### is()

> **is**(`message`): `boolean`

Checks if the message is the same as the given message

#### Parameters

• **message**: [`IBaseMessage`](api%5Cinterfaces%5CIBaseMessage.md) \| [`BaseMessage`](api%5Cclasses%5CBaseMessage.md)

#### Returns

`boolean`

#### Inherited from

[`BaseMessage`](api%5Cclasses%5CBaseMessage.md).[`is`](api%5Cclasses%5CBaseMessage.md#is)

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

[`BaseMessage`](api%5Cclasses%5CBaseMessage.md).[`isSchema`](api%5Cclasses%5CBaseMessage.md#isschema)

#### Source

[src/lib/Wrapper.ts:88](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/Wrapper.ts#L88)

***

### transformSchema()

> **transformSchema**(`schema`): [`IReply`](api%5Cinterfaces%5CIReply.md)

#### Parameters

• **schema**: `RecursivePartial`\<[`BasicFeedbackSchema`](api%5Cinterfaces%5CBasicFeedbackSchema.md)\>

#### Returns

[`IReply`](api%5Cinterfaces%5CIReply.md)

#### Overrides

[`BaseMessage`](api%5Cclasses%5CBaseMessage.md).[`transformSchema`](api%5Cclasses%5CBaseMessage.md#transformschema)

#### Source

[src/lib/messages/Reply.ts:32](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/Reply.ts#L32)

***

### fromIdentifier()

> `static` **fromIdentifier**(`identifier`): [`Reply`](api%5Cclasses%5CReply.md)

#### Parameters

• **identifier**: \`ag5zfmtoYW4tYWNhZGVteX$\{string\}CxIIVXNlckRhdGEi$\{string\}thaWRf$\{string\}$\{string\}$\{string\}\` \| \`kaencrypted\_$\{string\}\_$\{string\}\`

#### Returns

[`Reply`](api%5Cclasses%5CReply.md)

#### Source

[src/lib/messages/Reply.ts:23](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/Reply.ts#L23)

***

### fromSchema()

> `static` **fromSchema**(`schema`): [`Reply`](api%5Cclasses%5CReply.md)

#### Parameters

• **schema**: `RecursivePartial`\<[`BasicFeedbackSchema`](api%5Cinterfaces%5CBasicFeedbackSchema.md)\>

#### Returns

[`Reply`](api%5Cclasses%5CReply.md)

#### Source

[src/lib/messages/Reply.ts:16](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/Reply.ts#L16)
