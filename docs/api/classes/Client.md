# Class: Client

## Constructors

### constructor

• **new Client**(): [`Client`](api/classes/Client.md)

Creates a new Client instance

#### Returns

[`Client`](api/classes/Client.md)

**`Example`**

```ts
const client = new Client()
```

#### Defined in

[src/Client.ts:94](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/Client.ts#L94)

## Properties

### #cachedFeedbackKeys

• `Private` **#cachedFeedbackKeys**: `Map`\<\`kaencrypted\_$\{string}\_$\{string}\`, \`ag5zfmtoYW4tYWNhZGVteX$\{string}CxIIVXNlckRhdGEi$\{string}thaWRf$\{string}$\{string}$\{string}\`\>

#### Defined in

[src/Client.ts:68](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/Client.ts#L68)

___

### #cachedKaids

• `Private` **#cachedKaids**: `Map`\<`string`, \`kaid\_$\{number}\`\>

#### Defined in

[src/Client.ts:66](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/Client.ts#L66)

___

### #cachedUsernames

• `Private` **#cachedUsernames**: `Map`\<`string`, `string`\>

#### Defined in

[src/Client.ts:67](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/Client.ts#L67)

___

### #cookies

• `Private` `Optional` **#cookies**: `string`

#### Defined in

[src/Client.ts:64](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/Client.ts#L64)

___

### #identifier

• `Private` `Optional` **#identifier**: `string`

#### Defined in

[src/Client.ts:62](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/Client.ts#L62)

___

### #password

• `Private` `Optional` **#password**: `string`

#### Defined in

[src/Client.ts:63](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/Client.ts#L63)

___

### authenticated

• **authenticated**: `boolean` = `false`

#### Defined in

[src/Client.ts:70](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/Client.ts#L70)

___

### kaid

• **kaid**: ``null`` \| \`kaid\_$\{number}\` = `null`

#### Defined in

[src/Client.ts:71](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/Client.ts#L71)

___

### user

• `Optional` **user**: [`User`](api/classes/User.md)

#### Defined in

[src/Client.ts:72](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/Client.ts#L72)

## Accessors

### kaas

• `get` **kaas**(): ``null`` \| `string`

Gets the KAAS cookie from the current session

#### Returns

``null`` \| `string`

KAAS cookie or null if not authenticated

**`Remarks`**

The KAAS cookie is used by Khan Academy to authenticate requests.

#### Defined in

[src/Client.ts:190](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/Client.ts#L190)

## Methods

### getAllMessageReplies

▸ **getAllMessageReplies**(`identifier`): `Promise`\<[`Reply`](api/classes/Reply.md)[]\>

Gets all replies to a message

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | \`ag5zfmtoYW4tYWNhZGVteX$\{string}CxIIVXNlckRhdGEi$\{string}thaWRf$\{string}$\{string}$\{string}\` \| \`kaencrypted\_$\{string}\_$\{string}\` |

#### Returns

`Promise`\<[`Reply`](api/classes/Reply.md)[]\>

**`Raw`**

[queries!getFeedbackReplies](api/modules/queries.md#getfeedbackreplies)

**`See`**

[Client.getMessageReplies](api/classes/Client.md#getmessagereplies)

**`Example`**

```ts
const client = new Client()
const replies = await client.getAllMessageReplies('ag5zfmtoYW4tYWNhZGVteXJBCxIIVXNlckRhdGEiHmthaWRfNjYzMzc5NDA2ODA0Nzc0MjA1NjU0NTUzNAwLEghGZWVkYmFjaxiAgJO6wamwCgw'))
console.log(replies.map(reply => reply.text))
```

#### Defined in

[src/Client.ts:974](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/Client.ts#L974)

___

### getAllProgramHelpRequests

▸ **getAllProgramHelpRequests**(`identifier`, `sort?`): `Promise`\<[`Question`](api/classes/Question.md)[]\>

Gets all Help Requests for a program

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `identifier` | [`ProgramID`](api/README.md#programid) \| \`http$\{string}://$\{string}khanacademy.$\{string}/$\{string}/$\{string}/$\{number}\` \| \`ag5zfmtoYW4tYWNhZGVteXI$\{string}CxIKU2NyYXRjaHBhZB$\{string}$\{string}\` | `undefined` |
| `sort` | [`FeedbackSort`](api/enums/FeedbackSort.md) | `FeedbackSort.TopVoted` |

#### Returns

`Promise`\<[`Question`](api/classes/Question.md)[]\>

**`See`**

[Client.getAllProgramMessages](api/classes/Client.md#getallprogrammessages)

#### Defined in

[src/Client.ts:888](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/Client.ts#L888)

___

### getAllProgramMessages

▸ **getAllProgramMessages**(`type?`, `identifier`, `sort?`): `Promise`\<[`Message`](api/classes/Message.md)[]\>

Gets all specified types of messages for a program

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `type` | [`MessageType`](api/enums/MessageType.md) | `Message.Type.TipsAndThanks` |
| `identifier` | [`ProgramID`](api/README.md#programid) \| \`http$\{string}://$\{string}khanacademy.$\{string}/$\{string}/$\{string}/$\{number}\` \| \`ag5zfmtoYW4tYWNhZGVteXI$\{string}CxIKU2NyYXRjaHBhZB$\{string}$\{string}\` | `undefined` |
| `sort` | [`FeedbackSort`](api/enums/FeedbackSort.md) | `FeedbackSort.TopVoted` |

#### Returns

`Promise`\<[`Message`](api/classes/Message.md)[]\>

**`See`**

[Client.getProgramMessages](api/classes/Client.md#getprogrammessages)

**`Example`**

```ts
const client = new Client()
const messages = await client.getAllProgramMessages(undefined, 5154160781082624)
console.log(messages.map(message => message.text)
```

#### Defined in

[src/Client.ts:791](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/Client.ts#L791)

___

### getAllProgramQuestions

▸ **getAllProgramQuestions**(`identifier`, `sort?`): `Promise`\<[`Question`](api/classes/Question.md)[]\>

Gets all questions for a program

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `identifier` | [`ProgramID`](api/README.md#programid) \| \`http$\{string}://$\{string}khanacademy.$\{string}/$\{string}/$\{string}/$\{number}\` \| \`ag5zfmtoYW4tYWNhZGVteXI$\{string}CxIKU2NyYXRjaHBhZB$\{string}$\{string}\` | `undefined` |
| `sort` | [`FeedbackSort`](api/enums/FeedbackSort.md) | `FeedbackSort.TopVoted` |

#### Returns

`Promise`\<[`Question`](api/classes/Question.md)[]\>

**`See`**

[Client.getAllProgramMessages](api/classes/Client.md#getallprogrammessages)

#### Defined in

[src/Client.ts:856](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/Client.ts#L856)

___

### getAllProgramTipsAndThanks

▸ **getAllProgramTipsAndThanks**(`identifier`, `sort?`): `Promise`\<[`TipsAndThanks`](api/classes/TipsAndThanks.md)[]\>

Gets all Tips and Thanks messages for a program

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `identifier` | [`ProgramID`](api/README.md#programid) \| \`http$\{string}://$\{string}khanacademy.$\{string}/$\{string}/$\{string}/$\{number}\` \| \`ag5zfmtoYW4tYWNhZGVteXI$\{string}CxIKU2NyYXRjaHBhZB$\{string}$\{string}\` | `undefined` |
| `sort` | [`FeedbackSort`](api/enums/FeedbackSort.md) | `FeedbackSort.TopVoted` |

#### Returns

`Promise`\<[`TipsAndThanks`](api/classes/TipsAndThanks.md)[]\>

**`See`**

[Client.getAllProgramMessages](api/classes/Client.md#getallprogrammessages)

#### Defined in

[src/Client.ts:824](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/Client.ts#L824)

___

### getAllUserPrograms

▸ **getAllUserPrograms**(`identifier?`, `sort?`, `limit?`): `Promise`\<[`Program`](api/classes/Program.md)[]\>

Gets all of a user's programs

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `identifier?` | `string` | `undefined` |
| `sort` | [`ListProgramSortOrder`](api/enums/ListProgramSortOrder.md) | `ListProgramSortOrder.TOP` |
| `limit` | `number` | `100` |

#### Returns

`Promise`\<[`Program`](api/classes/Program.md)[]\>

**`See`**

[Client.getUserPrograms](api/classes/Client.md#getuserprograms)

**`Example`**

```ts
const client = new Client()
const programs = await client.getAllUserPrograms('bhavjitChauhan')
console.log(programs.map(program => program.title))
```

#### Defined in

[src/Client.ts:445](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/Client.ts#L445)

___

### getAnswer

▸ **getAnswer**(`identifier`): `Promise`\<[`Answer`](api/classes/Answer.md)\>

Gets a single answer message

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | \`ag5zfmtoYW4tYWNhZGVteX$\{string}CxIIVXNlckRhdGEi$\{string}thaWRf$\{string}$\{string}$\{string}\` \| \`kaencrypted\_$\{string}\_$\{string}\` | Feedback key or encrypted feedback key |

#### Returns

`Promise`\<[`Answer`](api/classes/Answer.md)\>

#### Defined in

[src/Client.ts:666](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/Client.ts#L666)

___

### getHotlistPrograms

▸ **getHotlistPrograms**(`sort?`, `limit?`, `official?`): `AsyncGenerator`\<[`Program`](api/classes/Program.md)[], `void`, `unknown`\>

Gets programs from the hotlist

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `sort` | [`ListProgramSortOrder`](api/enums/ListProgramSortOrder.md) | `ListProgramSortOrder.HOT` | - |
| `limit` | `number` | `40` | - |
| `official` | `boolean` | `false` | Whether to only get official project spinoffs |

#### Returns

`AsyncGenerator`\<[`Program`](api/classes/Program.md)[], `void`, `unknown`\>

**`Raw`**

[queries!hotlist](api/modules/queries.md#hotlist)

**`Example`**

```ts
const client = new Client()
for await (const programs of client.getHotlistPrograms()) {
 console.log(programs.map(program => program.title))
}
```

#### Defined in

[src/Client.ts:502](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/Client.ts#L502)

___

### getMessage

▸ **getMessage**(`identifier`): `Promise`\<[`TipsAndThanks`](api/classes/TipsAndThanks.md) \| [`Question`](api/classes/Question.md) \| [`Answer`](api/classes/Answer.md)\>

Gets a single message by its feedback key or encrypted feedback key

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | \`ag5zfmtoYW4tYWNhZGVteX$\{string}CxIIVXNlckRhdGEi$\{string}thaWRf$\{string}$\{string}$\{string}\` \| \`kaencrypted\_$\{string}\_$\{string}\` | Feedback key or encrypted feedback key |

#### Returns

`Promise`\<[`TipsAndThanks`](api/classes/TipsAndThanks.md) \| [`Question`](api/classes/Question.md) \| [`Answer`](api/classes/Answer.md)\>

**`Remarks`**

This method is not recommended when you know the message's type. Use
[`getTipsAndThanks`](api/classes/Client.md#gettipsandthanks),
[`getQuestion`](api/classes/Client.md#getquestion) or
[`getReply`](api/classes/Client.md#getreply) instead.

#### Defined in

[src/Client.ts:584](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/Client.ts#L584)

___

### getMessageReplies

▸ **getMessageReplies**(`identifier`, `limit?`): `AsyncGenerator`\<[`Reply`](api/classes/Reply.md)[], `void`, `unknown`\>

Gets replies to a message

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `identifier` | \`ag5zfmtoYW4tYWNhZGVteX$\{string}CxIIVXNlckRhdGEi$\{string}thaWRf$\{string}$\{string}$\{string}\` \| \`kaencrypted\_$\{string}\_$\{string}\` | `undefined` | Feedback key or encrypted feedback key |
| `limit` | `number` | `10` | - |

#### Returns

`AsyncGenerator`\<[`Reply`](api/classes/Reply.md)[], `void`, `unknown`\>

**`Raw`**

[queries!getFeedbackRepliesPage](api/modules/queries.md#getfeedbackrepliespage)

**`Example`**

```ts
const client = new Client()
for await (const replies of client.getMessageReplies('ag5zfmtoYW4tYWNhZGVteXJBCxIIVXNlckRhdGEiHmthaWRfNjYzMzc5NDA2ODA0Nzc0MjA1NjU0NTUzNAwLEghGZWVkYmFjaxiAgJO6wamwCgw')) {
 console.log(replies.map(reply => reply.text))
}
```

#### Defined in

[src/Client.ts:912](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/Client.ts#L912)

___

### getProgram

▸ **getProgram**(`identifier`): `Promise`\<[`Program`](api/classes/Program.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | [`ProgramID`](api/README.md#programid) \| \`http$\{string}://$\{string}khanacademy.$\{string}/$\{string}/$\{string}/$\{number}\` \| \`ag5zfmtoYW4tYWNhZGVteXI$\{string}CxIKU2NyYXRjaHBhZB$\{string}$\{string}\` | Program ID, URL or key |

#### Returns

`Promise`\<[`Program`](api/classes/Program.md)\>

#### Defined in

[src/Client.ts:460](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/Client.ts#L460)

___

### getProgramHelpRequests

▸ **getProgramHelpRequests**(`identifier`, `sort?`): `AsyncGenerator`\<[`Question`](api/classes/Question.md)[], `void`, `unknown`\>

Gets Help Requests for a program

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `identifier` | [`ProgramID`](api/README.md#programid) \| \`http$\{string}://$\{string}khanacademy.$\{string}/$\{string}/$\{string}/$\{number}\` \| \`ag5zfmtoYW4tYWNhZGVteXI$\{string}CxIKU2NyYXRjaHBhZB$\{string}$\{string}\` | `undefined` |
| `sort` | [`FeedbackSort`](api/enums/FeedbackSort.md) | `FeedbackSort.TopVoted` |

#### Returns

`AsyncGenerator`\<[`Question`](api/classes/Question.md)[], `void`, `unknown`\>

**`See`**

[Client.getProgramMessages](api/classes/Client.md#getprogrammessages)

#### Defined in

[src/Client.ts:872](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/Client.ts#L872)

___

### getProgramMessages

▸ **getProgramMessages**(`type?`, `identifier`, `sort?`): `AsyncGenerator`\<([`TipsAndThanks`](api/classes/TipsAndThanks.md) \| [`Question`](api/classes/Question.md))[], `void`, `unknown`\>

Gets specified types of messages for a program

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `type` | [`MessageType`](api/enums/MessageType.md) | `Message.Type.TipsAndThanks` | - |
| `identifier` | [`ProgramID`](api/README.md#programid) \| \`http$\{string}://$\{string}khanacademy.$\{string}/$\{string}/$\{string}/$\{number}\` \| \`ag5zfmtoYW4tYWNhZGVteXI$\{string}CxIKU2NyYXRjaHBhZB$\{string}$\{string}\` | `undefined` | Program ID, program URL, or program key |
| `sort` | [`FeedbackSort`](api/enums/FeedbackSort.md) | `FeedbackSort.TopVoted` | - |

#### Returns

`AsyncGenerator`\<([`TipsAndThanks`](api/classes/TipsAndThanks.md) \| [`Question`](api/classes/Question.md))[], `void`, `unknown`\>

**`Example`**

```ts
const client = new Client()
for await (const messages of client.getProgramTipsAndThanks(5154160781082624)) {
  console.log(messages.map(message => message.text)
}
```

#### Defined in

[src/Client.ts:722](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/Client.ts#L722)

___

### getProgramQuestions

▸ **getProgramQuestions**(`identifier`, `sort?`): `AsyncGenerator`\<[`Question`](api/classes/Question.md)[], `void`, `unknown`\>

Gets questions for a program

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `identifier` | [`ProgramID`](api/README.md#programid) \| \`http$\{string}://$\{string}khanacademy.$\{string}/$\{string}/$\{string}/$\{number}\` \| \`ag5zfmtoYW4tYWNhZGVteXI$\{string}CxIKU2NyYXRjaHBhZB$\{string}$\{string}\` | `undefined` |
| `sort` | [`FeedbackSort`](api/enums/FeedbackSort.md) | `FeedbackSort.TopVoted` |

#### Returns

`AsyncGenerator`\<[`Question`](api/classes/Question.md)[], `void`, `unknown`\>

**`See`**

[Client.getProgramMessages](api/classes/Client.md#getprogrammessages)

#### Defined in

[src/Client.ts:840](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/Client.ts#L840)

___

### getProgramTipsAndThanks

▸ **getProgramTipsAndThanks**(`identifier`, `sort?`): `AsyncGenerator`\<[`TipsAndThanks`](api/classes/TipsAndThanks.md)[], `void`, `unknown`\>

Gets Tips and Thanks messages for a program

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `identifier` | [`ProgramID`](api/README.md#programid) \| \`http$\{string}://$\{string}khanacademy.$\{string}/$\{string}/$\{string}/$\{number}\` \| \`ag5zfmtoYW4tYWNhZGVteXI$\{string}CxIKU2NyYXRjaHBhZB$\{string}$\{string}\` | `undefined` |
| `sort` | [`FeedbackSort`](api/enums/FeedbackSort.md) | `FeedbackSort.TopVoted` |

#### Returns

`AsyncGenerator`\<[`TipsAndThanks`](api/classes/TipsAndThanks.md)[], `void`, `unknown`\>

**`See`**

[Client.getProgramMessages](api/classes/Client.md#getprogrammessages)

#### Defined in

[src/Client.ts:808](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/Client.ts#L808)

___

### getQuestion

▸ **getQuestion**(`identifier`): `Promise`\<[`Question`](api/classes/Question.md)\>

Gets a single question message

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | \`ag5zfmtoYW4tYWNhZGVteX$\{string}CxIIVXNlckRhdGEi$\{string}thaWRf$\{string}$\{string}$\{string}\` \| \`kaencrypted\_$\{string}\_$\{string}\` | Feedback key or encrypted feedback key |

#### Returns

`Promise`\<[`Question`](api/classes/Question.md)\>

**`Remarks`**

Note that Help Requests are a type of question.

#### Defined in

[src/Client.ts:657](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/Client.ts#L657)

___

### getRecentPrograms

▸ **getRecentPrograms**(`limit?`, `official?`): `AsyncGenerator`\<[`Program`](api/classes/Program.md)[], `void`, `unknown`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `limit` | `number` | `40` |
| `official` | `boolean` | `false` |

#### Returns

`AsyncGenerator`\<[`Program`](api/classes/Program.md)[], `void`, `unknown`\>

#### Defined in

[src/Client.ts:565](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/Client.ts#L565)

___

### getReply

▸ **getReply**(`identifier`): `Promise`\<[`Reply`](api/classes/Reply.md)\>

Gets a single reply

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | \`ag5zfmtoYW4tYWNhZGVteX$\{string}CxIIVXNlckRhdGEi$\{string}thaWRf$\{string}$\{string}$\{string}\` \| \`kaencrypted\_$\{string}\_$\{string}\` | Feedback key or encrypted feedback key |

#### Returns

`Promise`\<[`Reply`](api/classes/Reply.md)\>

#### Defined in

[src/Client.ts:675](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/Client.ts#L675)

___

### getTipsAndThanks

▸ **getTipsAndThanks**(`identifier`): `Promise`\<[`TipsAndThanks`](api/classes/TipsAndThanks.md)\>

Gets a single tips and thanks message

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | \`ag5zfmtoYW4tYWNhZGVteX$\{string}CxIIVXNlckRhdGEi$\{string}thaWRf$\{string}$\{string}$\{string}\` \| \`kaencrypted\_$\{string}\_$\{string}\` | Feedback key or encrypted feedback key |

#### Returns

`Promise`\<[`TipsAndThanks`](api/classes/TipsAndThanks.md)\>

#### Defined in

[src/Client.ts:645](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/Client.ts#L645)

___

### getTopPrograms

▸ **getTopPrograms**(`limit?`, `official?`): `AsyncGenerator`\<[`Program`](api/classes/Program.md)[], `void`, `unknown`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `limit` | `number` | `40` |
| `official` | `boolean` | `false` |

#### Returns

`AsyncGenerator`\<[`Program`](api/classes/Program.md)[], `void`, `unknown`\>

#### Defined in

[src/Client.ts:557](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/Client.ts#L557)

___

### getUser

▸ **getUser**(`identifier?`): `Promise`\<[`User`](api/classes/User.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier?` | `string` | KAID, username or email |

#### Returns

`Promise`\<[`User`](api/classes/User.md)\>

#### Defined in

[src/Client.ts:275](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/Client.ts#L275)

___

### getUserAvatar

▸ **getUserAvatar**(`identifier?`, `type?`): `Promise`\<``"https://www.khanacademy.org/images/avatars/svg/blobby-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/blobby-yellow.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/blobby-blue.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/blobby-purple.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/area-52-yellow.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/area-52-blue.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/area-52-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/area-52-purple.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/eggleston-blue.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/eggleston-yellow.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/eggleston-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/eggleston-orange.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/scuttlebug-purple.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/scuttlebug-yellow.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/scuttlebug-blue.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/scuttlebug-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/boggle-yellow.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/boggle-blue.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/boggle-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/boggle-purple.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/sneak-peak-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/sneak-peak-yellow.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/sneak-peak-blue.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/sneak-peak-purple.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/stelly-blue.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/stelly-yellow.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/stelly-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/stelly-orange.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/cacteye-purple.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/cacteye-yellow.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/cacteye-blue.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/cacteye-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/leaf-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/leaf-blue.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/leaf-grey.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/leaf-red.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/leaf-orange.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/leaf-yellow.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/leafers-seed.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/leafers-seedling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/leafers-sapling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/leafers-tree.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/leafers-ultimate.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/piceratops-seed.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/piceratops-seedling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/piceratops-sapling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/piceratops-tree.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/piceratops-ultimate.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/duskpin-seed.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/duskpin-seedling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/duskpin-sapling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/duskpin-tree.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/duskpin-ultimate.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/primosaur-seed.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/primosaur-seedling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/primosaur-sapling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/primosaur-tree.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/primosaur-ultimate.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/starky-seed.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/starky-seedling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/starky-sapling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/starky-tree.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/starky-ultimate.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/aqualine-seed.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/aqualine-seedling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/aqualine-sapling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/aqualine-tree.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/aqualine-ultimate.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/spunky-sam.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/spunky-sam-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/spunky-sam-orange.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/spunky-sam-red.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/marcimus.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/marcimus-orange.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/marcimus-red.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/marcimus-purple.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/mr-pink.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/mr-pink-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/mr-pink-orange.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/robot_female_1.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/robot_female_2.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/robot_female_3.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/robot_male_1.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/robot_male_2.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/robot_male_3.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/orange-juice-squid.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/purple-pi.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/purple-pi-pink.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/purple-pi-teal.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/mr-pants.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/mr-pants-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/mr-pants-orange.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/mr-pants-pink.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/mr-pants-purple.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/old-spice-man.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/old-spice-man-blue.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/cs-winston.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/cs-winston-baby.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/cs-ohnoes.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/cs-hopper-happy.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/cs-hopper-jumping.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/cs-hopper-cool.svg"`` \| ``"https://www.khanacademy.org/images/avatars/blobby-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/blobby-yellow.png"`` \| ``"https://www.khanacademy.org/images/avatars/blobby-blue.png"`` \| ``"https://www.khanacademy.org/images/avatars/blobby-purple.png"`` \| ``"https://www.khanacademy.org/images/avatars/area-52-yellow.png"`` \| ``"https://www.khanacademy.org/images/avatars/area-52-blue.png"`` \| ``"https://www.khanacademy.org/images/avatars/area-52-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/area-52-purple.png"`` \| ``"https://www.khanacademy.org/images/avatars/eggleston-blue.png"`` \| ``"https://www.khanacademy.org/images/avatars/eggleston-yellow.png"`` \| ``"https://www.khanacademy.org/images/avatars/eggleston-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/eggleston-orange.png"`` \| ``"https://www.khanacademy.org/images/avatars/scuttlebug-purple.png"`` \| ``"https://www.khanacademy.org/images/avatars/scuttlebug-yellow.png"`` \| ``"https://www.khanacademy.org/images/avatars/scuttlebug-blue.png"`` \| ``"https://www.khanacademy.org/images/avatars/scuttlebug-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/boggle-yellow.png"`` \| ``"https://www.khanacademy.org/images/avatars/boggle-blue.png"`` \| ``"https://www.khanacademy.org/images/avatars/boggle-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/boggle-purple.png"`` \| ``"https://www.khanacademy.org/images/avatars/sneak-peak-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/sneak-peak-yellow.png"`` \| ``"https://www.khanacademy.org/images/avatars/sneak-peak-blue.png"`` \| ``"https://www.khanacademy.org/images/avatars/sneak-peak-purple.png"`` \| ``"https://www.khanacademy.org/images/avatars/stelly-blue.png"`` \| ``"https://www.khanacademy.org/images/avatars/stelly-yellow.png"`` \| ``"https://www.khanacademy.org/images/avatars/stelly-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/stelly-orange.png"`` \| ``"https://www.khanacademy.org/images/avatars/cacteye-purple.png"`` \| ``"https://www.khanacademy.org/images/avatars/cacteye-yellow.png"`` \| ``"https://www.khanacademy.org/images/avatars/cacteye-blue.png"`` \| ``"https://www.khanacademy.org/images/avatars/cacteye-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/leaf-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/leaf-blue.png"`` \| ``"https://www.khanacademy.org/images/avatars/leaf-grey.png"`` \| ``"https://www.khanacademy.org/images/avatars/leaf-red.png"`` \| ``"https://www.khanacademy.org/images/avatars/leaf-orange.png"`` \| ``"https://www.khanacademy.org/images/avatars/leaf-yellow.png"`` \| ``"https://www.khanacademy.org/images/avatars/leafers-seed.png"`` \| ``"https://www.khanacademy.org/images/avatars/leafers-seedling.png"`` \| ``"https://www.khanacademy.org/images/avatars/leafers-sapling.png"`` \| ``"https://www.khanacademy.org/images/avatars/leafers-tree.png"`` \| ``"https://www.khanacademy.org/images/avatars/leafers-ultimate.png"`` \| ``"https://www.khanacademy.org/images/avatars/piceratops-seed.png"`` \| ``"https://www.khanacademy.org/images/avatars/piceratops-seedling.png"`` \| ``"https://www.khanacademy.org/images/avatars/piceratops-sapling.png"`` \| ``"https://www.khanacademy.org/images/avatars/piceratops-tree.png"`` \| ``"https://www.khanacademy.org/images/avatars/piceratops-ultimate.png"`` \| ``"https://www.khanacademy.org/images/avatars/duskpin-seed.png"`` \| ``"https://www.khanacademy.org/images/avatars/duskpin-seedling.png"`` \| ``"https://www.khanacademy.org/images/avatars/duskpin-sapling.png"`` \| ``"https://www.khanacademy.org/images/avatars/duskpin-tree.png"`` \| ``"https://www.khanacademy.org/images/avatars/duskpin-ultimate.png"`` \| ``"https://www.khanacademy.org/images/avatars/primosaur-seed.png"`` \| ``"https://www.khanacademy.org/images/avatars/primosaur-seedling.png"`` \| ``"https://www.khanacademy.org/images/avatars/primosaur-sapling.png"`` \| ``"https://www.khanacademy.org/images/avatars/primosaur-tree.png"`` \| ``"https://www.khanacademy.org/images/avatars/primosaur-ultimate.png"`` \| ``"https://www.khanacademy.org/images/avatars/starky-seed.png"`` \| ``"https://www.khanacademy.org/images/avatars/starky-seedling.png"`` \| ``"https://www.khanacademy.org/images/avatars/starky-sapling.png"`` \| ``"https://www.khanacademy.org/images/avatars/starky-tree.png"`` \| ``"https://www.khanacademy.org/images/avatars/starky-ultimate.png"`` \| ``"https://www.khanacademy.org/images/avatars/aqualine-seed.png"`` \| ``"https://www.khanacademy.org/images/avatars/aqualine-seedling.png"`` \| ``"https://www.khanacademy.org/images/avatars/aqualine-sapling.png"`` \| ``"https://www.khanacademy.org/images/avatars/aqualine-tree.png"`` \| ``"https://www.khanacademy.org/images/avatars/aqualine-ultimate.png"`` \| ``"https://www.khanacademy.org/images/avatars/spunky-sam.png"`` \| ``"https://www.khanacademy.org/images/avatars/spunky-sam-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/spunky-sam-orange.png"`` \| ``"https://www.khanacademy.org/images/avatars/spunky-sam-red.png"`` \| ``"https://www.khanacademy.org/images/avatars/marcimus.png"`` \| ``"https://www.khanacademy.org/images/avatars/marcimus-orange.png"`` \| ``"https://www.khanacademy.org/images/avatars/marcimus-red.png"`` \| ``"https://www.khanacademy.org/images/avatars/marcimus-purple.png"`` \| ``"https://www.khanacademy.org/images/avatars/mr-pink.png"`` \| ``"https://www.khanacademy.org/images/avatars/mr-pink-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/mr-pink-orange.png"`` \| ``"https://www.khanacademy.org/images/avatars/robot_female_1.png"`` \| ``"https://www.khanacademy.org/images/avatars/robot_female_2.png"`` \| ``"https://www.khanacademy.org/images/avatars/robot_female_3.png"`` \| ``"https://www.khanacademy.org/images/avatars/robot_male_1.png"`` \| ``"https://www.khanacademy.org/images/avatars/robot_male_2.png"`` \| ``"https://www.khanacademy.org/images/avatars/robot_male_3.png"`` \| ``"https://www.khanacademy.org/images/avatars/orange-juice-squid.png"`` \| ``"https://www.khanacademy.org/images/avatars/purple-pi.png"`` \| ``"https://www.khanacademy.org/images/avatars/purple-pi-pink.png"`` \| ``"https://www.khanacademy.org/images/avatars/purple-pi-teal.png"`` \| ``"https://www.khanacademy.org/images/avatars/mr-pants.png"`` \| ``"https://www.khanacademy.org/images/avatars/mr-pants-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/mr-pants-orange.png"`` \| ``"https://www.khanacademy.org/images/avatars/mr-pants-pink.png"`` \| ``"https://www.khanacademy.org/images/avatars/mr-pants-purple.png"`` \| ``"https://www.khanacademy.org/images/avatars/old-spice-man.png"`` \| ``"https://www.khanacademy.org/images/avatars/old-spice-man-blue.png"`` \| ``"https://www.khanacademy.org/images/avatars/cs-winston.png"`` \| ``"https://www.khanacademy.org/images/avatars/cs-winston-baby.png"`` \| ``"https://www.khanacademy.org/images/avatars/cs-ohnoes.png"`` \| ``"https://www.khanacademy.org/images/avatars/cs-hopper-happy.png"`` \| ``"https://www.khanacademy.org/images/avatars/cs-hopper-jumping.png"`` \| ``"https://www.khanacademy.org/images/avatars/cs-hopper-cool.png"``\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `identifier` | `undefined` \| `string` | `undefined` |
| `type` | ``"svg"`` \| ``"png"`` | `'svg'` |

#### Returns

`Promise`\<``"https://www.khanacademy.org/images/avatars/svg/blobby-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/blobby-yellow.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/blobby-blue.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/blobby-purple.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/area-52-yellow.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/area-52-blue.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/area-52-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/area-52-purple.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/eggleston-blue.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/eggleston-yellow.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/eggleston-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/eggleston-orange.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/scuttlebug-purple.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/scuttlebug-yellow.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/scuttlebug-blue.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/scuttlebug-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/boggle-yellow.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/boggle-blue.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/boggle-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/boggle-purple.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/sneak-peak-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/sneak-peak-yellow.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/sneak-peak-blue.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/sneak-peak-purple.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/stelly-blue.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/stelly-yellow.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/stelly-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/stelly-orange.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/cacteye-purple.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/cacteye-yellow.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/cacteye-blue.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/cacteye-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/leaf-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/leaf-blue.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/leaf-grey.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/leaf-red.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/leaf-orange.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/leaf-yellow.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/leafers-seed.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/leafers-seedling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/leafers-sapling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/leafers-tree.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/leafers-ultimate.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/piceratops-seed.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/piceratops-seedling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/piceratops-sapling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/piceratops-tree.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/piceratops-ultimate.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/duskpin-seed.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/duskpin-seedling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/duskpin-sapling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/duskpin-tree.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/duskpin-ultimate.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/primosaur-seed.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/primosaur-seedling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/primosaur-sapling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/primosaur-tree.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/primosaur-ultimate.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/starky-seed.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/starky-seedling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/starky-sapling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/starky-tree.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/starky-ultimate.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/aqualine-seed.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/aqualine-seedling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/aqualine-sapling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/aqualine-tree.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/aqualine-ultimate.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/spunky-sam.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/spunky-sam-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/spunky-sam-orange.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/spunky-sam-red.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/marcimus.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/marcimus-orange.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/marcimus-red.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/marcimus-purple.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/mr-pink.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/mr-pink-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/mr-pink-orange.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/robot_female_1.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/robot_female_2.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/robot_female_3.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/robot_male_1.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/robot_male_2.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/robot_male_3.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/orange-juice-squid.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/purple-pi.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/purple-pi-pink.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/purple-pi-teal.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/mr-pants.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/mr-pants-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/mr-pants-orange.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/mr-pants-pink.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/mr-pants-purple.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/old-spice-man.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/old-spice-man-blue.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/cs-winston.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/cs-winston-baby.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/cs-ohnoes.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/cs-hopper-happy.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/cs-hopper-jumping.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/cs-hopper-cool.svg"`` \| ``"https://www.khanacademy.org/images/avatars/blobby-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/blobby-yellow.png"`` \| ``"https://www.khanacademy.org/images/avatars/blobby-blue.png"`` \| ``"https://www.khanacademy.org/images/avatars/blobby-purple.png"`` \| ``"https://www.khanacademy.org/images/avatars/area-52-yellow.png"`` \| ``"https://www.khanacademy.org/images/avatars/area-52-blue.png"`` \| ``"https://www.khanacademy.org/images/avatars/area-52-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/area-52-purple.png"`` \| ``"https://www.khanacademy.org/images/avatars/eggleston-blue.png"`` \| ``"https://www.khanacademy.org/images/avatars/eggleston-yellow.png"`` \| ``"https://www.khanacademy.org/images/avatars/eggleston-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/eggleston-orange.png"`` \| ``"https://www.khanacademy.org/images/avatars/scuttlebug-purple.png"`` \| ``"https://www.khanacademy.org/images/avatars/scuttlebug-yellow.png"`` \| ``"https://www.khanacademy.org/images/avatars/scuttlebug-blue.png"`` \| ``"https://www.khanacademy.org/images/avatars/scuttlebug-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/boggle-yellow.png"`` \| ``"https://www.khanacademy.org/images/avatars/boggle-blue.png"`` \| ``"https://www.khanacademy.org/images/avatars/boggle-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/boggle-purple.png"`` \| ``"https://www.khanacademy.org/images/avatars/sneak-peak-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/sneak-peak-yellow.png"`` \| ``"https://www.khanacademy.org/images/avatars/sneak-peak-blue.png"`` \| ``"https://www.khanacademy.org/images/avatars/sneak-peak-purple.png"`` \| ``"https://www.khanacademy.org/images/avatars/stelly-blue.png"`` \| ``"https://www.khanacademy.org/images/avatars/stelly-yellow.png"`` \| ``"https://www.khanacademy.org/images/avatars/stelly-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/stelly-orange.png"`` \| ``"https://www.khanacademy.org/images/avatars/cacteye-purple.png"`` \| ``"https://www.khanacademy.org/images/avatars/cacteye-yellow.png"`` \| ``"https://www.khanacademy.org/images/avatars/cacteye-blue.png"`` \| ``"https://www.khanacademy.org/images/avatars/cacteye-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/leaf-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/leaf-blue.png"`` \| ``"https://www.khanacademy.org/images/avatars/leaf-grey.png"`` \| ``"https://www.khanacademy.org/images/avatars/leaf-red.png"`` \| ``"https://www.khanacademy.org/images/avatars/leaf-orange.png"`` \| ``"https://www.khanacademy.org/images/avatars/leaf-yellow.png"`` \| ``"https://www.khanacademy.org/images/avatars/leafers-seed.png"`` \| ``"https://www.khanacademy.org/images/avatars/leafers-seedling.png"`` \| ``"https://www.khanacademy.org/images/avatars/leafers-sapling.png"`` \| ``"https://www.khanacademy.org/images/avatars/leafers-tree.png"`` \| ``"https://www.khanacademy.org/images/avatars/leafers-ultimate.png"`` \| ``"https://www.khanacademy.org/images/avatars/piceratops-seed.png"`` \| ``"https://www.khanacademy.org/images/avatars/piceratops-seedling.png"`` \| ``"https://www.khanacademy.org/images/avatars/piceratops-sapling.png"`` \| ``"https://www.khanacademy.org/images/avatars/piceratops-tree.png"`` \| ``"https://www.khanacademy.org/images/avatars/piceratops-ultimate.png"`` \| ``"https://www.khanacademy.org/images/avatars/duskpin-seed.png"`` \| ``"https://www.khanacademy.org/images/avatars/duskpin-seedling.png"`` \| ``"https://www.khanacademy.org/images/avatars/duskpin-sapling.png"`` \| ``"https://www.khanacademy.org/images/avatars/duskpin-tree.png"`` \| ``"https://www.khanacademy.org/images/avatars/duskpin-ultimate.png"`` \| ``"https://www.khanacademy.org/images/avatars/primosaur-seed.png"`` \| ``"https://www.khanacademy.org/images/avatars/primosaur-seedling.png"`` \| ``"https://www.khanacademy.org/images/avatars/primosaur-sapling.png"`` \| ``"https://www.khanacademy.org/images/avatars/primosaur-tree.png"`` \| ``"https://www.khanacademy.org/images/avatars/primosaur-ultimate.png"`` \| ``"https://www.khanacademy.org/images/avatars/starky-seed.png"`` \| ``"https://www.khanacademy.org/images/avatars/starky-seedling.png"`` \| ``"https://www.khanacademy.org/images/avatars/starky-sapling.png"`` \| ``"https://www.khanacademy.org/images/avatars/starky-tree.png"`` \| ``"https://www.khanacademy.org/images/avatars/starky-ultimate.png"`` \| ``"https://www.khanacademy.org/images/avatars/aqualine-seed.png"`` \| ``"https://www.khanacademy.org/images/avatars/aqualine-seedling.png"`` \| ``"https://www.khanacademy.org/images/avatars/aqualine-sapling.png"`` \| ``"https://www.khanacademy.org/images/avatars/aqualine-tree.png"`` \| ``"https://www.khanacademy.org/images/avatars/aqualine-ultimate.png"`` \| ``"https://www.khanacademy.org/images/avatars/spunky-sam.png"`` \| ``"https://www.khanacademy.org/images/avatars/spunky-sam-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/spunky-sam-orange.png"`` \| ``"https://www.khanacademy.org/images/avatars/spunky-sam-red.png"`` \| ``"https://www.khanacademy.org/images/avatars/marcimus.png"`` \| ``"https://www.khanacademy.org/images/avatars/marcimus-orange.png"`` \| ``"https://www.khanacademy.org/images/avatars/marcimus-red.png"`` \| ``"https://www.khanacademy.org/images/avatars/marcimus-purple.png"`` \| ``"https://www.khanacademy.org/images/avatars/mr-pink.png"`` \| ``"https://www.khanacademy.org/images/avatars/mr-pink-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/mr-pink-orange.png"`` \| ``"https://www.khanacademy.org/images/avatars/robot_female_1.png"`` \| ``"https://www.khanacademy.org/images/avatars/robot_female_2.png"`` \| ``"https://www.khanacademy.org/images/avatars/robot_female_3.png"`` \| ``"https://www.khanacademy.org/images/avatars/robot_male_1.png"`` \| ``"https://www.khanacademy.org/images/avatars/robot_male_2.png"`` \| ``"https://www.khanacademy.org/images/avatars/robot_male_3.png"`` \| ``"https://www.khanacademy.org/images/avatars/orange-juice-squid.png"`` \| ``"https://www.khanacademy.org/images/avatars/purple-pi.png"`` \| ``"https://www.khanacademy.org/images/avatars/purple-pi-pink.png"`` \| ``"https://www.khanacademy.org/images/avatars/purple-pi-teal.png"`` \| ``"https://www.khanacademy.org/images/avatars/mr-pants.png"`` \| ``"https://www.khanacademy.org/images/avatars/mr-pants-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/mr-pants-orange.png"`` \| ``"https://www.khanacademy.org/images/avatars/mr-pants-pink.png"`` \| ``"https://www.khanacademy.org/images/avatars/mr-pants-purple.png"`` \| ``"https://www.khanacademy.org/images/avatars/old-spice-man.png"`` \| ``"https://www.khanacademy.org/images/avatars/old-spice-man-blue.png"`` \| ``"https://www.khanacademy.org/images/avatars/cs-winston.png"`` \| ``"https://www.khanacademy.org/images/avatars/cs-winston-baby.png"`` \| ``"https://www.khanacademy.org/images/avatars/cs-ohnoes.png"`` \| ``"https://www.khanacademy.org/images/avatars/cs-hopper-happy.png"`` \| ``"https://www.khanacademy.org/images/avatars/cs-hopper-jumping.png"`` \| ``"https://www.khanacademy.org/images/avatars/cs-hopper-cool.png"``\>

#### Defined in

[src/Client.ts:314](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/Client.ts#L314)

___

### getUserPrograms

▸ **getUserPrograms**(`identifier?`, `sort?`, `limit?`): `AsyncGenerator`\<[`Program`](api/classes/Program.md)[], `void`, `unknown`\>

Gets a user's programs

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `identifier?` | `string` | `undefined` |
| `sort` | [`ListProgramSortOrder`](api/enums/ListProgramSortOrder.md) | `ListProgramSortOrder.TOP` |
| `limit` | `number` | `40` |

#### Returns

`AsyncGenerator`\<[`Program`](api/classes/Program.md)[], `void`, `unknown`\>

**`Raw`**

[queries!projectsAuthoredByUser](api/modules/queries.md#projectsauthoredbyuser)

**`Example`**

```ts
const client = new Client()
for await (const programs of client.getUserPrograms('bhavjitChauhan')) {
 console.log(programs.map(program => program.title))
}
```

#### Defined in

[src/Client.ts:373](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/Client.ts#L373)

___

### getUserStatistics

▸ **getUserStatistics**(`identifier?`): `Promise`\<[`UserStatistics`](api/interfaces/UserStatistics.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | `undefined` \| `string` |

#### Returns

`Promise`\<[`UserStatistics`](api/interfaces/UserStatistics.md)\>

#### Defined in

[src/Client.ts:336](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/Client.ts#L336)

___

### login

▸ **login**(`identifier?`, `password?`): `Promise`\<[`Client`](api/classes/Client.md)\>

Logs in to Khan Academy and stores the KAAS cookie

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier?` | `string` | KAID, username or email |
| `password?` | `string` |  |

#### Returns

`Promise`\<[`Client`](api/classes/Client.md)\>

#### Defined in

[src/Client.ts:202](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/Client.ts#L202)

___

### resolveCachedFeedbackKey

▸ **resolveCachedFeedbackKey**(`identifier`): `Promise`\<\`ag5zfmtoYW4tYWNhZGVteX$\{string}CxIIVXNlckRhdGEi$\{string}thaWRf$\{string}$\{string}$\{string}\`\>

Resolved an encrypted message key to an unencrypted message key and caches
the result

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | \`ag5zfmtoYW4tYWNhZGVteX$\{string}CxIIVXNlckRhdGEi$\{string}thaWRf$\{string}$\{string}$\{string}\` \| \`kaencrypted\_$\{string}\_$\{string}\` |

#### Returns

`Promise`\<\`ag5zfmtoYW4tYWNhZGVteX$\{string}CxIIVXNlckRhdGEi$\{string}thaWRf$\{string}$\{string}$\{string}\`\>

**`Remarks`**

If the identifier is cached, it will be returned immediately. Otherwise a
`QAExpandKeyInfo` request will be made to resolve the identifier

**`See`**

[resolveFeedbackKey](api/README.md#resolvefeedbackkey)

#### Defined in

[src/Client.ts:167](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/Client.ts#L167)

___

### resolveCachedKaid

▸ **resolveCachedKaid**(`identifier`): `Promise`\<\`kaid\_$\{number}\`\>

Resolves a username or email to a KAID and caches the result

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | `string` |

#### Returns

`Promise`\<\`kaid\_$\{number}\`\>

**`Remarks`**

If the identifier is cached, it will be returned immediately. Otherwise a
`getUserByUsernameOrEmail` request will be made to resolve the identifier

**`See`**

[resolveKaid](api/README.md#resolvekaid)

**`Example`**

```ts
const getKaid = async () => await client.resolveCachedKaid('bhavjitChauhan')
console.log(await getKaid()) // Makes a request
console.log(await getKaid()) // Returns cached result
```

#### Defined in

[src/Client.ts:112](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/Client.ts#L112)

___

### resolveCachedUsername

▸ **resolveCachedUsername**(`identifier`): `Promise`\<`string`\>

Resolves a KAID to a username and caches the result

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | `string` |

#### Returns

`Promise`\<`string`\>

**`Remarks`**

If the identifier is cached, it will be returned immediately. Otherwise a
`getUserHoverCardProfile` request will be made to resolve the identifier

**`See`**

[resolveUsername](api/README.md#resolveusername)

**`Example`**

```ts
const getUsername = async () => await client.resolveCachedUsername('kaid_376749826184384230772276')
console.log(await getUsername()) // Makes a request
console.log(await getUsername()) // Returns cached result
```

#### Defined in

[src/Client.ts:141](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/Client.ts#L141)

___

### #resolveJsonReponse

▸ **#resolveJsonReponse**\<`T`\>(`response`): `Promise`\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | [`TypedResponse`](api/interfaces/TypedResponse.md)\<`T`\> |

#### Returns

`Promise`\<`T`\>

#### Defined in

[src/Client.ts:74](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/Client.ts#L74)
