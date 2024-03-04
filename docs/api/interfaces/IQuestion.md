# Interface: IQuestion

## Hierarchy

- [`IMessage`](api/interfaces/IMessage.md)

  ↳ **`IQuestion`**

## Implemented by

- [`Question`](api/classes/Question.md)

## Properties

### answerCount

• `Optional` **answerCount**: `number`

#### Defined in

[src/lib/messages/Question.ts:10](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/Question.ts#L10)

___

### answers

• `Optional` **answers**: [`Answer`](api/classes/Answer.md)[]

#### Defined in

[src/lib/messages/Question.ts:9](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/Question.ts#L9)

___

### author

• `Optional` **author**: [`User`](api/classes/User.md)

#### Inherited from

[IMessage](api/interfaces/IMessage.md).[author](api/interfaces/IMessage.md#author)

#### Defined in

[src/lib/messages/BaseMessage.ts:11](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/BaseMessage.ts#L11)

___

### byVideoAuthor

• `Optional` **byVideoAuthor**: `boolean`

#### Inherited from

[IMessage](api/interfaces/IMessage.md).[byVideoAuthor](api/interfaces/IMessage.md#byvideoauthor)

#### Defined in

[src/lib/messages/BaseMessage.ts:12](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/BaseMessage.ts#L12)

___

### created

• `Optional` **created**: `Date`

#### Inherited from

[IMessage](api/interfaces/IMessage.md).[created](api/interfaces/IMessage.md#created)

#### Defined in

[src/lib/messages/BaseMessage.ts:13](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/BaseMessage.ts#L13)

___

### deleted

• `Optional` **deleted**: `boolean`

#### Inherited from

[IMessage](api/interfaces/IMessage.md).[deleted](api/interfaces/IMessage.md#deleted)

#### Defined in

[src/lib/messages/BaseMessage.ts:14](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/BaseMessage.ts#L14)

___

### encryptedKey

• `Optional` **encryptedKey**: `string`

#### Inherited from

[IMessage](api/interfaces/IMessage.md).[encryptedKey](api/interfaces/IMessage.md#encryptedkey)

#### Defined in

[src/lib/messages/BaseMessage.ts:15](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/BaseMessage.ts#L15)

___

### key

• `Optional` **key**: `string`

#### Inherited from

[IMessage](api/interfaces/IMessage.md).[key](api/interfaces/IMessage.md#key)

#### Defined in

[src/lib/messages/BaseMessage.ts:17](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/BaseMessage.ts#L17)

___

### locked

• `Optional` **locked**: `boolean`

#### Inherited from

[IMessage](api/interfaces/IMessage.md).[locked](api/interfaces/IMessage.md#locked)

#### Defined in

[src/lib/messages/BaseMessage.ts:16](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/BaseMessage.ts#L16)

___

### old

• `Optional` **old**: `boolean`

#### Defined in

[src/lib/messages/Question.ts:11](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/Question.ts#L11)

___

### pinned

• `Optional` **pinned**: `boolean`

#### Inherited from

[IMessage](api/interfaces/IMessage.md).[pinned](api/interfaces/IMessage.md#pinned)

#### Defined in

[src/lib/messages/BaseMessage.ts:18](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/BaseMessage.ts#L18)

___

### program

• `Optional` **program**: [`Program`](api/classes/Program.md)

#### Inherited from

[IMessage](api/interfaces/IMessage.md).[program](api/interfaces/IMessage.md#program)

#### Defined in

[src/lib/messages/BaseMessage.ts:19](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/BaseMessage.ts#L19)

___

### replies

• `Optional` **replies**: [`Reply`](api/classes/Reply.md)[]

#### Inherited from

[IMessage](api/interfaces/IMessage.md).[replies](api/interfaces/IMessage.md#replies)

#### Defined in

[src/lib/messages/Message.ts:24](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/Message.ts#L24)

___

### replyCount

• `Optional` **replyCount**: `number`

#### Inherited from

[IMessage](api/interfaces/IMessage.md).[replyCount](api/interfaces/IMessage.md#replycount)

#### Defined in

[src/lib/messages/Message.ts:25](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/Message.ts#L25)

___

### score

• `Optional` **score**: `number`

#### Inherited from

[IMessage](api/interfaces/IMessage.md).[score](api/interfaces/IMessage.md#score)

#### Defined in

[src/lib/messages/BaseMessage.ts:20](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/BaseMessage.ts#L20)

___

### selfDownvoted

• `Optional` **selfDownvoted**: `boolean`

#### Inherited from

[IMessage](api/interfaces/IMessage.md).[selfDownvoted](api/interfaces/IMessage.md#selfdownvoted)

#### Defined in

[src/lib/messages/Message.ts:26](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/Message.ts#L26)

___

### selfFlagged

• `Optional` **selfFlagged**: `boolean`

#### Inherited from

[IMessage](api/interfaces/IMessage.md).[selfFlagged](api/interfaces/IMessage.md#selfflagged)

#### Defined in

[src/lib/messages/BaseMessage.ts:21](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/BaseMessage.ts#L21)

___

### selfUpvoted

• `Optional` **selfUpvoted**: `boolean`

#### Inherited from

[IMessage](api/interfaces/IMessage.md).[selfUpvoted](api/interfaces/IMessage.md#selfupvoted)

#### Defined in

[src/lib/messages/Message.ts:27](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/Message.ts#L27)

___

### text

• `Optional` **text**: `string`

#### Inherited from

[IMessage](api/interfaces/IMessage.md).[text](api/interfaces/IMessage.md#text)

#### Defined in

[src/lib/messages/BaseMessage.ts:22](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/BaseMessage.ts#L22)

___

### verified

• `Optional` **verified**: `boolean`

#### Inherited from

[IMessage](api/interfaces/IMessage.md).[verified](api/interfaces/IMessage.md#verified)

#### Defined in

[src/lib/messages/BaseMessage.ts:23](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/BaseMessage.ts#L23)

___

### votes

• `Optional` **votes**: `number`

#### Inherited from

[IMessage](api/interfaces/IMessage.md).[votes](api/interfaces/IMessage.md#votes)

#### Defined in

[src/lib/messages/Message.ts:28](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/lib/messages/Message.ts#L28)
