# Interface: IAnswer

## Hierarchy

- [`IMessage`](IMessage.md)

  ↳ **`IAnswer`**

## Implemented by

- [`Answer`](../classes/Answer.md)

## Properties

### author

• `Optional` **author**: [`User`](../classes/User.md)

#### Inherited from

[IMessage](IMessage.md).[author](IMessage.md#author)

#### Defined in

[lib/messages/BaseMessage.ts:11](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L11)

___

### byVideoAuthor

• `Optional` **byVideoAuthor**: `boolean`

#### Inherited from

[IMessage](IMessage.md).[byVideoAuthor](IMessage.md#byvideoauthor)

#### Defined in

[lib/messages/BaseMessage.ts:12](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L12)

___

### created

• `Optional` **created**: `Date`

#### Inherited from

[IMessage](IMessage.md).[created](IMessage.md#created)

#### Defined in

[lib/messages/BaseMessage.ts:13](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L13)

___

### deleted

• `Optional` **deleted**: `boolean`

#### Inherited from

[IMessage](IMessage.md).[deleted](IMessage.md#deleted)

#### Defined in

[lib/messages/BaseMessage.ts:14](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L14)

___

### encryptedKey

• `Optional` **encryptedKey**: `string`

#### Inherited from

[IMessage](IMessage.md).[encryptedKey](IMessage.md#encryptedkey)

#### Defined in

[lib/messages/BaseMessage.ts:15](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L15)

___

### key

• `Optional` **key**: `string`

#### Inherited from

[IMessage](IMessage.md).[key](IMessage.md#key)

#### Defined in

[lib/messages/BaseMessage.ts:17](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L17)

___

### locked

• `Optional` **locked**: `boolean`

#### Inherited from

[IMessage](IMessage.md).[locked](IMessage.md#locked)

#### Defined in

[lib/messages/BaseMessage.ts:16](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L16)

___

### pinned

• `Optional` **pinned**: `boolean`

#### Inherited from

[IMessage](IMessage.md).[pinned](IMessage.md#pinned)

#### Defined in

[lib/messages/BaseMessage.ts:18](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L18)

___

### program

• `Optional` **program**: [`Program`](../classes/Program.md)

#### Inherited from

[IMessage](IMessage.md).[program](IMessage.md#program)

#### Defined in

[lib/messages/BaseMessage.ts:19](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L19)

___

### question

• `Optional` **question**: [`Question`](../classes/Question.md)

#### Defined in

[lib/messages/Answer.ts:13](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/Answer.ts#L13)

___

### replies

• `Optional` **replies**: [`Reply`](../classes/Reply.md)[]

#### Inherited from

[IMessage](IMessage.md).[replies](IMessage.md#replies)

#### Defined in

[lib/messages/Message.ts:24](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/Message.ts#L24)

___

### replyCount

• `Optional` **replyCount**: `number`

#### Inherited from

[IMessage](IMessage.md).[replyCount](IMessage.md#replycount)

#### Defined in

[lib/messages/Message.ts:25](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/Message.ts#L25)

___

### score

• `Optional` **score**: `number`

#### Inherited from

[IMessage](IMessage.md).[score](IMessage.md#score)

#### Defined in

[lib/messages/BaseMessage.ts:20](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L20)

___

### selfDownvoted

• `Optional` **selfDownvoted**: `boolean`

#### Inherited from

[IMessage](IMessage.md).[selfDownvoted](IMessage.md#selfdownvoted)

#### Defined in

[lib/messages/Message.ts:26](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/Message.ts#L26)

___

### selfFlagged

• `Optional` **selfFlagged**: `boolean`

#### Inherited from

[IMessage](IMessage.md).[selfFlagged](IMessage.md#selfflagged)

#### Defined in

[lib/messages/BaseMessage.ts:21](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L21)

___

### selfUpvoted

• `Optional` **selfUpvoted**: `boolean`

#### Inherited from

[IMessage](IMessage.md).[selfUpvoted](IMessage.md#selfupvoted)

#### Defined in

[lib/messages/Message.ts:27](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/Message.ts#L27)

___

### text

• `Optional` **text**: `string`

#### Inherited from

[IMessage](IMessage.md).[text](IMessage.md#text)

#### Defined in

[lib/messages/BaseMessage.ts:22](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L22)

___

### verified

• `Optional` **verified**: `boolean`

#### Inherited from

[IMessage](IMessage.md).[verified](IMessage.md#verified)

#### Defined in

[lib/messages/BaseMessage.ts:23](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/BaseMessage.ts#L23)

___

### votes

• `Optional` **votes**: `number`

#### Inherited from

[IMessage](IMessage.md).[votes](IMessage.md#votes)

#### Defined in

[lib/messages/Message.ts:28](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/Message.ts#L28)
