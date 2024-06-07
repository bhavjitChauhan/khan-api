## Extends

- [`IBaseMessage`](api%5Cinterfaces%5CIBaseMessage.md)

## Extended by

- [`IQuestion`](api%5Cinterfaces%5CIQuestion.md)
- [`IAnswer`](api%5Cinterfaces%5CIAnswer.md)

## Properties

### author?

> `optional` **author**: [`User`](api%5Cclasses%5CUser.md)

#### Inherited from

[`IBaseMessage`](api%5Cinterfaces%5CIBaseMessage.md).[`author`](api%5Cinterfaces%5CIBaseMessage.md#author)

#### Source

[src/lib/messages/BaseMessage.ts:11](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L11)

***

### byVideoAuthor?

> `optional` **byVideoAuthor**: `boolean`

#### Inherited from

[`IBaseMessage`](api%5Cinterfaces%5CIBaseMessage.md).[`byVideoAuthor`](api%5Cinterfaces%5CIBaseMessage.md#byvideoauthor)

#### Source

[src/lib/messages/BaseMessage.ts:12](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L12)

***

### created?

> `optional` **created**: `Date`

#### Inherited from

[`IBaseMessage`](api%5Cinterfaces%5CIBaseMessage.md).[`created`](api%5Cinterfaces%5CIBaseMessage.md#created)

#### Source

[src/lib/messages/BaseMessage.ts:13](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L13)

***

### deleted?

> `optional` **deleted**: `boolean`

#### Inherited from

[`IBaseMessage`](api%5Cinterfaces%5CIBaseMessage.md).[`deleted`](api%5Cinterfaces%5CIBaseMessage.md#deleted)

#### Source

[src/lib/messages/BaseMessage.ts:14](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L14)

***

### encryptedKey?

> `optional` **encryptedKey**: `string`

#### Inherited from

[`IBaseMessage`](api%5Cinterfaces%5CIBaseMessage.md).[`encryptedKey`](api%5Cinterfaces%5CIBaseMessage.md#encryptedkey)

#### Source

[src/lib/messages/BaseMessage.ts:15](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L15)

***

### key?

> `optional` **key**: `string`

#### Inherited from

[`IBaseMessage`](api%5Cinterfaces%5CIBaseMessage.md).[`key`](api%5Cinterfaces%5CIBaseMessage.md#key)

#### Source

[src/lib/messages/BaseMessage.ts:17](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L17)

***

### locked?

> `optional` **locked**: `boolean`

#### Inherited from

[`IBaseMessage`](api%5Cinterfaces%5CIBaseMessage.md).[`locked`](api%5Cinterfaces%5CIBaseMessage.md#locked)

#### Source

[src/lib/messages/BaseMessage.ts:16](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L16)

***

### pinned?

> `optional` **pinned**: `boolean`

#### Inherited from

[`IBaseMessage`](api%5Cinterfaces%5CIBaseMessage.md).[`pinned`](api%5Cinterfaces%5CIBaseMessage.md#pinned)

#### Source

[src/lib/messages/BaseMessage.ts:18](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L18)

***

### program?

> `optional` **program**: [`Program`](api%5Cclasses%5CProgram.md)

#### Inherited from

[`IBaseMessage`](api%5Cinterfaces%5CIBaseMessage.md).[`program`](api%5Cinterfaces%5CIBaseMessage.md#program)

#### Source

[src/lib/messages/BaseMessage.ts:19](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L19)

***

### replies?

> `optional` **replies**: [`Reply`](api%5Cclasses%5CReply.md)[]

#### Source

[src/lib/messages/Message.ts:24](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/Message.ts#L24)

***

### replyCount?

> `optional` **replyCount**: `number`

#### Source

[src/lib/messages/Message.ts:25](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/Message.ts#L25)

***

### score?

> `optional` **score**: `number`

#### Inherited from

[`IBaseMessage`](api%5Cinterfaces%5CIBaseMessage.md).[`score`](api%5Cinterfaces%5CIBaseMessage.md#score)

#### Source

[src/lib/messages/BaseMessage.ts:20](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L20)

***

### selfDownvoted?

> `optional` **selfDownvoted**: `boolean`

#### Source

[src/lib/messages/Message.ts:26](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/Message.ts#L26)

***

### selfFlagged?

> `optional` **selfFlagged**: `boolean`

#### Inherited from

[`IBaseMessage`](api%5Cinterfaces%5CIBaseMessage.md).[`selfFlagged`](api%5Cinterfaces%5CIBaseMessage.md#selfflagged)

#### Source

[src/lib/messages/BaseMessage.ts:21](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L21)

***

### selfUpvoted?

> `optional` **selfUpvoted**: `boolean`

#### Source

[src/lib/messages/Message.ts:27](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/Message.ts#L27)

***

### text?

> `optional` **text**: `string`

#### Inherited from

[`IBaseMessage`](api%5Cinterfaces%5CIBaseMessage.md).[`text`](api%5Cinterfaces%5CIBaseMessage.md#text)

#### Source

[src/lib/messages/BaseMessage.ts:22](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L22)

***

### verified?

> `optional` **verified**: `boolean`

#### Inherited from

[`IBaseMessage`](api%5Cinterfaces%5CIBaseMessage.md).[`verified`](api%5Cinterfaces%5CIBaseMessage.md#verified)

#### Source

[src/lib/messages/BaseMessage.ts:23](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/BaseMessage.ts#L23)

***

### votes?

> `optional` **votes**: `number`

#### Source

[src/lib/messages/Message.ts:28](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/lib/messages/Message.ts#L28)
