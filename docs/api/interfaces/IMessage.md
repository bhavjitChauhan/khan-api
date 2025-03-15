Defined in: [src/lib/messages/Message.ts:23](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/Message.ts#L23)

## Extends

- [`IBaseMessage`](api/interfaces%5CIBaseMessage.md)

## Extended by

- [`IQuestion`](api/interfaces%5CIQuestion.md)
- [`IAnswer`](api/interfaces%5CIAnswer.md)

## Properties

### author?

> `optional` **author**: [`User`](api/classes%5CUser.md)

Defined in: [src/lib/messages/BaseMessage.ts:11](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L11)

#### Inherited from

[`IBaseMessage`](api/interfaces%5CIBaseMessage.md).[`author`](api/interfaces%5CIBaseMessage.md#author)

***

### byVideoAuthor?

> `optional` **byVideoAuthor**: `boolean`

Defined in: [src/lib/messages/BaseMessage.ts:12](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L12)

#### Inherited from

[`IBaseMessage`](api/interfaces%5CIBaseMessage.md).[`byVideoAuthor`](api/interfaces%5CIBaseMessage.md#byvideoauthor)

***

### created?

> `optional` **created**: `Date`

Defined in: [src/lib/messages/BaseMessage.ts:13](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L13)

#### Inherited from

[`IBaseMessage`](api/interfaces%5CIBaseMessage.md).[`created`](api/interfaces%5CIBaseMessage.md#created)

***

### deleted?

> `optional` **deleted**: `boolean`

Defined in: [src/lib/messages/BaseMessage.ts:14](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L14)

#### Inherited from

[`IBaseMessage`](api/interfaces%5CIBaseMessage.md).[`deleted`](api/interfaces%5CIBaseMessage.md#deleted)

***

### encryptedKey?

> `optional` **encryptedKey**: `string`

Defined in: [src/lib/messages/BaseMessage.ts:15](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L15)

#### Inherited from

[`IBaseMessage`](api/interfaces%5CIBaseMessage.md).[`encryptedKey`](api/interfaces%5CIBaseMessage.md#encryptedkey)

***

### key?

> `optional` **key**: `string`

Defined in: [src/lib/messages/BaseMessage.ts:17](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L17)

#### Inherited from

[`IBaseMessage`](api/interfaces%5CIBaseMessage.md).[`key`](api/interfaces%5CIBaseMessage.md#key)

***

### locked?

> `optional` **locked**: `boolean`

Defined in: [src/lib/messages/BaseMessage.ts:16](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L16)

#### Inherited from

[`IBaseMessage`](api/interfaces%5CIBaseMessage.md).[`locked`](api/interfaces%5CIBaseMessage.md#locked)

***

### pinned?

> `optional` **pinned**: `boolean`

Defined in: [src/lib/messages/BaseMessage.ts:18](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L18)

#### Inherited from

[`IBaseMessage`](api/interfaces%5CIBaseMessage.md).[`pinned`](api/interfaces%5CIBaseMessage.md#pinned)

***

### program?

> `optional` **program**: [`Program`](api/classes%5CProgram.md)

Defined in: [src/lib/messages/BaseMessage.ts:19](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L19)

#### Inherited from

[`IBaseMessage`](api/interfaces%5CIBaseMessage.md).[`program`](api/interfaces%5CIBaseMessage.md#program)

***

### replies?

> `optional` **replies**: [`Reply`](api/classes%5CReply.md)[]

Defined in: [src/lib/messages/Message.ts:24](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/Message.ts#L24)

***

### replyCount?

> `optional` **replyCount**: `number`

Defined in: [src/lib/messages/Message.ts:25](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/Message.ts#L25)

***

### score?

> `optional` **score**: `number`

Defined in: [src/lib/messages/BaseMessage.ts:20](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L20)

#### Inherited from

[`IBaseMessage`](api/interfaces%5CIBaseMessage.md).[`score`](api/interfaces%5CIBaseMessage.md#score)

***

### selfDownvoted?

> `optional` **selfDownvoted**: `boolean`

Defined in: [src/lib/messages/Message.ts:26](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/Message.ts#L26)

***

### selfFlagged?

> `optional` **selfFlagged**: `boolean`

Defined in: [src/lib/messages/BaseMessage.ts:21](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L21)

#### Inherited from

[`IBaseMessage`](api/interfaces%5CIBaseMessage.md).[`selfFlagged`](api/interfaces%5CIBaseMessage.md#selfflagged)

***

### selfUpvoted?

> `optional` **selfUpvoted**: `boolean`

Defined in: [src/lib/messages/Message.ts:27](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/Message.ts#L27)

***

### text?

> `optional` **text**: `string`

Defined in: [src/lib/messages/BaseMessage.ts:22](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L22)

#### Inherited from

[`IBaseMessage`](api/interfaces%5CIBaseMessage.md).[`text`](api/interfaces%5CIBaseMessage.md#text)

***

### verified?

> `optional` **verified**: `boolean`

Defined in: [src/lib/messages/BaseMessage.ts:23](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/BaseMessage.ts#L23)

#### Inherited from

[`IBaseMessage`](api/interfaces%5CIBaseMessage.md).[`verified`](api/interfaces%5CIBaseMessage.md#verified)

***

### votes?

> `optional` **votes**: `number`

Defined in: [src/lib/messages/Message.ts:28](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/lib/messages/Message.ts#L28)
