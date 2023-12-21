# Interface: IMessage

## Hierarchy

- [`IBaseMessage`](api/interfaces/IBaseMessage.md)

  ↳ **`IMessage`**

  ↳↳ [`IQuestion`](api/interfaces/IQuestion.md)

  ↳↳ [`IAnswer`](api/interfaces/IAnswer.md)

## Implemented by

- [`Message`](api/classes/Message.md)

## Properties

### author

• `Optional` **author**: [`User`](api/classes/User.md)

#### Inherited from

[IBaseMessage](api/interfaces/IBaseMessage.md).[author](api/interfaces/IBaseMessage.md#author)

#### Defined in

[src/lib/messages/BaseMessage.ts:11](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/lib/messages/BaseMessage.ts#L11)

___

### byVideoAuthor

• `Optional` **byVideoAuthor**: `boolean`

#### Inherited from

[IBaseMessage](api/interfaces/IBaseMessage.md).[byVideoAuthor](api/interfaces/IBaseMessage.md#byvideoauthor)

#### Defined in

[src/lib/messages/BaseMessage.ts:12](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/lib/messages/BaseMessage.ts#L12)

___

### created

• `Optional` **created**: `Date`

#### Inherited from

[IBaseMessage](api/interfaces/IBaseMessage.md).[created](api/interfaces/IBaseMessage.md#created)

#### Defined in

[src/lib/messages/BaseMessage.ts:13](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/lib/messages/BaseMessage.ts#L13)

___

### deleted

• `Optional` **deleted**: `boolean`

#### Inherited from

[IBaseMessage](api/interfaces/IBaseMessage.md).[deleted](api/interfaces/IBaseMessage.md#deleted)

#### Defined in

[src/lib/messages/BaseMessage.ts:14](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/lib/messages/BaseMessage.ts#L14)

___

### encryptedKey

• `Optional` **encryptedKey**: `string`

#### Inherited from

[IBaseMessage](api/interfaces/IBaseMessage.md).[encryptedKey](api/interfaces/IBaseMessage.md#encryptedkey)

#### Defined in

[src/lib/messages/BaseMessage.ts:15](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/lib/messages/BaseMessage.ts#L15)

___

### key

• `Optional` **key**: `string`

#### Inherited from

[IBaseMessage](api/interfaces/IBaseMessage.md).[key](api/interfaces/IBaseMessage.md#key)

#### Defined in

[src/lib/messages/BaseMessage.ts:17](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/lib/messages/BaseMessage.ts#L17)

___

### locked

• `Optional` **locked**: `boolean`

#### Inherited from

[IBaseMessage](api/interfaces/IBaseMessage.md).[locked](api/interfaces/IBaseMessage.md#locked)

#### Defined in

[src/lib/messages/BaseMessage.ts:16](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/lib/messages/BaseMessage.ts#L16)

___

### pinned

• `Optional` **pinned**: `boolean`

#### Inherited from

[IBaseMessage](api/interfaces/IBaseMessage.md).[pinned](api/interfaces/IBaseMessage.md#pinned)

#### Defined in

[src/lib/messages/BaseMessage.ts:18](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/lib/messages/BaseMessage.ts#L18)

___

### program

• `Optional` **program**: [`Program`](api/classes/Program.md)

#### Inherited from

[IBaseMessage](api/interfaces/IBaseMessage.md).[program](api/interfaces/IBaseMessage.md#program)

#### Defined in

[src/lib/messages/BaseMessage.ts:19](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/lib/messages/BaseMessage.ts#L19)

___

### replies

• `Optional` **replies**: [`Reply`](api/classes/Reply.md)[]

#### Defined in

[src/lib/messages/Message.ts:24](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/lib/messages/Message.ts#L24)

___

### replyCount

• `Optional` **replyCount**: `number`

#### Defined in

[src/lib/messages/Message.ts:25](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/lib/messages/Message.ts#L25)

___

### score

• `Optional` **score**: `number`

#### Inherited from

[IBaseMessage](api/interfaces/IBaseMessage.md).[score](api/interfaces/IBaseMessage.md#score)

#### Defined in

[src/lib/messages/BaseMessage.ts:20](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/lib/messages/BaseMessage.ts#L20)

___

### selfDownvoted

• `Optional` **selfDownvoted**: `boolean`

#### Defined in

[src/lib/messages/Message.ts:26](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/lib/messages/Message.ts#L26)

___

### selfFlagged

• `Optional` **selfFlagged**: `boolean`

#### Inherited from

[IBaseMessage](api/interfaces/IBaseMessage.md).[selfFlagged](api/interfaces/IBaseMessage.md#selfflagged)

#### Defined in

[src/lib/messages/BaseMessage.ts:21](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/lib/messages/BaseMessage.ts#L21)

___

### selfUpvoted

• `Optional` **selfUpvoted**: `boolean`

#### Defined in

[src/lib/messages/Message.ts:27](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/lib/messages/Message.ts#L27)

___

### text

• `Optional` **text**: `string`

#### Inherited from

[IBaseMessage](api/interfaces/IBaseMessage.md).[text](api/interfaces/IBaseMessage.md#text)

#### Defined in

[src/lib/messages/BaseMessage.ts:22](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/lib/messages/BaseMessage.ts#L22)

___

### verified

• `Optional` **verified**: `boolean`

#### Inherited from

[IBaseMessage](api/interfaces/IBaseMessage.md).[verified](api/interfaces/IBaseMessage.md#verified)

#### Defined in

[src/lib/messages/BaseMessage.ts:23](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/lib/messages/BaseMessage.ts#L23)

___

### votes

• `Optional` **votes**: `number`

#### Defined in

[src/lib/messages/Message.ts:28](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/lib/messages/Message.ts#L28)
