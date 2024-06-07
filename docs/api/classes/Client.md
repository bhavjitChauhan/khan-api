## Constructors

### new Client()

> **new Client**(): [`Client`](api%5Cclasses%5CClient.md)

Creates a new Client instance

#### Returns

[`Client`](api%5Cclasses%5CClient.md)

#### Example

```ts
const client = new Client()
```

#### Source

[src/Client.ts:94](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Client.ts#L94)

## Properties

### #cachedFeedbackKeys

> `private` **#cachedFeedbackKeys**: `Map`\<\`kaencrypted\_$\{string\}\_$\{string\}\`, \`ag5zfmtoYW4tYWNhZGVteX$\{string\}CxIIVXNlckRhdGEi$\{string\}thaWRf$\{string\}$\{string\}$\{string\}\`\>

#### Source

[src/Client.ts:68](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Client.ts#L68)

***

### #cachedKaids

> `private` **#cachedKaids**: `Map`\<`string`, \`kaid\_$\{number\}\`\>

#### Source

[src/Client.ts:66](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Client.ts#L66)

***

### #cachedUsernames

> `private` **#cachedUsernames**: `Map`\<`string`, `string`\>

#### Source

[src/Client.ts:67](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Client.ts#L67)

***

### #cookies?

> `private` `optional` **#cookies**: `string`

#### Source

[src/Client.ts:64](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Client.ts#L64)

***

### #identifier?

> `private` `optional` **#identifier**: `string`

#### Source

[src/Client.ts:62](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Client.ts#L62)

***

### #password?

> `private` `optional` **#password**: `string`

#### Source

[src/Client.ts:63](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Client.ts#L63)

***

### authenticated

> **authenticated**: `boolean` = `false`

#### Source

[src/Client.ts:70](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Client.ts#L70)

***

### kaid

> **kaid**: `null` \| \`kaid\_$\{number\}\` = `null`

#### Source

[src/Client.ts:71](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Client.ts#L71)

***

### user?

> `optional` **user**: [`User`](api%5Cclasses%5CUser.md)

#### Source

[src/Client.ts:72](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Client.ts#L72)

## Accessors

### kaas

> `get` **kaas**(): `null` \| `string`

Gets the KAAS cookie from the current session

#### Remarks

The KAAS cookie is used by Khan Academy to authenticate requests.

#### Returns

`null` \| `string`

KAAS cookie or null if not authenticated

#### Source

[src/Client.ts:190](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Client.ts#L190)

## Methods

### getAllMessageReplies()

> **getAllMessageReplies**(`identifier`): `Promise`\<[`Reply`](api%5Cclasses%5CReply.md)[]\>

Gets all replies to a message

#### Parameters

• **identifier**: \`ag5zfmtoYW4tYWNhZGVteX$\{string\}CxIIVXNlckRhdGEi$\{string\}thaWRf$\{string\}$\{string\}$\{string\}\` \| \`kaencrypted\_$\{string\}\_$\{string\}\`

#### Returns

`Promise`\<[`Reply`](api%5Cclasses%5CReply.md)[]\>

#### Raw

[queries!getFeedbackReplies](api%5Cnamespaces%5Cqueries%5Cfunctions%5CgetFeedbackReplies.md)

#### See

[Client.getMessageReplies](api%5Cclasses%5CClient.md#getmessagereplies)

#### Example

```ts
const client = new Client()
const replies = await client.getAllMessageReplies('ag5zfmtoYW4tYWNhZGVteXJBCxIIVXNlckRhdGEiHmthaWRfNjYzMzc5NDA2ODA0Nzc0MjA1NjU0NTUzNAwLEghGZWVkYmFjaxiAgJO6wamwCgw'))
console.log(replies.map(reply => reply.text))
```

#### Source

[src/Client.ts:974](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Client.ts#L974)

***

### getAllProgramHelpRequests()

> **getAllProgramHelpRequests**(`identifier`, `sort`): `Promise`\<[`Question`](api%5Cclasses%5CQuestion.md)[]\>

Gets all Help Requests for a program

#### Parameters

• **identifier**: [`ProgramID`](api%5Ctype-aliases%5CProgramID.md) \| \`http$\{string\}://$\{string\}khanacademy.$\{string\}/$\{string\}/$\{string\}/$\{number\}\` \| \`ag5zfmtoYW4tYWNhZGVteXI$\{string\}CxIKU2NyYXRjaHBhZB$\{string\}$\{string\}\`

• **sort**: [`FeedbackSort`](api%5Cenumerations%5CFeedbackSort.md)= `FeedbackSort.TopVoted`

#### Returns

`Promise`\<[`Question`](api%5Cclasses%5CQuestion.md)[]\>

#### See

[Client.getAllProgramMessages](api%5Cclasses%5CClient.md#getallprogrammessages)

#### Source

[src/Client.ts:888](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Client.ts#L888)

***

### getAllProgramMessages()

> **getAllProgramMessages**(`type`, `identifier`, `sort`): `Promise`\<[`Message`](api%5Cclasses%5CMessage.md)[]\>

Gets all specified types of messages for a program

#### Parameters

• **type**: [`MessageType`](api%5Cenumerations%5CMessageType.md)= `Message.Type.TipsAndThanks`

• **identifier**: [`ProgramID`](api%5Ctype-aliases%5CProgramID.md) \| \`http$\{string\}://$\{string\}khanacademy.$\{string\}/$\{string\}/$\{string\}/$\{number\}\` \| \`ag5zfmtoYW4tYWNhZGVteXI$\{string\}CxIKU2NyYXRjaHBhZB$\{string\}$\{string\}\`

• **sort**: [`FeedbackSort`](api%5Cenumerations%5CFeedbackSort.md)= `FeedbackSort.TopVoted`

#### Returns

`Promise`\<[`Message`](api%5Cclasses%5CMessage.md)[]\>

#### See

[Client.getProgramMessages](api%5Cclasses%5CClient.md#getprogrammessages)

#### Example

```ts
const client = new Client()
const messages = await client.getAllProgramMessages(undefined, 5154160781082624)
console.log(messages.map(message => message.text)
```

#### Source

[src/Client.ts:791](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Client.ts#L791)

***

### getAllProgramQuestions()

> **getAllProgramQuestions**(`identifier`, `sort`): `Promise`\<[`Question`](api%5Cclasses%5CQuestion.md)[]\>

Gets all questions for a program

#### Parameters

• **identifier**: [`ProgramID`](api%5Ctype-aliases%5CProgramID.md) \| \`http$\{string\}://$\{string\}khanacademy.$\{string\}/$\{string\}/$\{string\}/$\{number\}\` \| \`ag5zfmtoYW4tYWNhZGVteXI$\{string\}CxIKU2NyYXRjaHBhZB$\{string\}$\{string\}\`

• **sort**: [`FeedbackSort`](api%5Cenumerations%5CFeedbackSort.md)= `FeedbackSort.TopVoted`

#### Returns

`Promise`\<[`Question`](api%5Cclasses%5CQuestion.md)[]\>

#### See

[Client.getAllProgramMessages](api%5Cclasses%5CClient.md#getallprogrammessages)

#### Source

[src/Client.ts:856](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Client.ts#L856)

***

### getAllProgramTipsAndThanks()

> **getAllProgramTipsAndThanks**(`identifier`, `sort`): `Promise`\<[`TipsAndThanks`](api%5Cclasses%5CTipsAndThanks.md)[]\>

Gets all Tips and Thanks messages for a program

#### Parameters

• **identifier**: [`ProgramID`](api%5Ctype-aliases%5CProgramID.md) \| \`http$\{string\}://$\{string\}khanacademy.$\{string\}/$\{string\}/$\{string\}/$\{number\}\` \| \`ag5zfmtoYW4tYWNhZGVteXI$\{string\}CxIKU2NyYXRjaHBhZB$\{string\}$\{string\}\`

• **sort**: [`FeedbackSort`](api%5Cenumerations%5CFeedbackSort.md)= `FeedbackSort.TopVoted`

#### Returns

`Promise`\<[`TipsAndThanks`](api%5Cclasses%5CTipsAndThanks.md)[]\>

#### See

[Client.getAllProgramMessages](api%5Cclasses%5CClient.md#getallprogrammessages)

#### Source

[src/Client.ts:824](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Client.ts#L824)

***

### getAllUserPrograms()

> **getAllUserPrograms**(`identifier`?, `sort`?, `limit`?): `Promise`\<[`Program`](api%5Cclasses%5CProgram.md)[]\>

Gets all of a user's programs

#### Parameters

• **identifier?**: `string`

• **sort?**: [`ListProgramSortOrder`](api%5Cenumerations%5CListProgramSortOrder.md)= `ListProgramSortOrder.TOP`

• **limit?**: `number`= `100`

#### Returns

`Promise`\<[`Program`](api%5Cclasses%5CProgram.md)[]\>

#### See

[Client.getUserPrograms](api%5Cclasses%5CClient.md#getuserprograms)

#### Example

```ts
const client = new Client()
const programs = await client.getAllUserPrograms('bhavjitChauhan')
console.log(programs.map(program => program.title))
```

#### Source

[src/Client.ts:445](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Client.ts#L445)

***

### getAnswer()

> **getAnswer**(`identifier`): `Promise`\<[`Answer`](api%5Cclasses%5CAnswer.md)\>

Gets a single answer message

#### Parameters

• **identifier**: \`ag5zfmtoYW4tYWNhZGVteX$\{string\}CxIIVXNlckRhdGEi$\{string\}thaWRf$\{string\}$\{string\}$\{string\}\` \| \`kaencrypted\_$\{string\}\_$\{string\}\`

Feedback key or encrypted feedback key

#### Returns

`Promise`\<[`Answer`](api%5Cclasses%5CAnswer.md)\>

#### Source

[src/Client.ts:666](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Client.ts#L666)

***

### getHotlistPrograms()

> **getHotlistPrograms**(`sort`, `limit`, `official`): `AsyncGenerator`\<[`Program`](api%5Cclasses%5CProgram.md)[], `void`, `unknown`\>

Gets programs from the hotlist

#### Parameters

• **sort**: [`ListProgramSortOrder`](api%5Cenumerations%5CListProgramSortOrder.md)= `ListProgramSortOrder.HOT`

• **limit**: `number`= `40`

• **official**: `boolean`= `false`

Whether to only get official project spinoffs

#### Returns

`AsyncGenerator`\<[`Program`](api%5Cclasses%5CProgram.md)[], `void`, `unknown`\>

#### Raw

[queries!hotlist](api%5Cnamespaces%5Cqueries%5Cfunctions%5Chotlist.md)

#### Example

```ts
const client = new Client()
for await (const programs of client.getHotlistPrograms()) {
 console.log(programs.map(program => program.title))
}
```

#### Source

[src/Client.ts:502](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Client.ts#L502)

***

### getMessage()

> **getMessage**(`identifier`): `Promise`\<[`TipsAndThanks`](api%5Cclasses%5CTipsAndThanks.md) \| [`Question`](api%5Cclasses%5CQuestion.md) \| [`Answer`](api%5Cclasses%5CAnswer.md)\>

Gets a single message by its feedback key or encrypted feedback key

#### Parameters

• **identifier**: \`ag5zfmtoYW4tYWNhZGVteX$\{string\}CxIIVXNlckRhdGEi$\{string\}thaWRf$\{string\}$\{string\}$\{string\}\` \| \`kaencrypted\_$\{string\}\_$\{string\}\`

Feedback key or encrypted feedback key

#### Returns

`Promise`\<[`TipsAndThanks`](api%5Cclasses%5CTipsAndThanks.md) \| [`Question`](api%5Cclasses%5CQuestion.md) \| [`Answer`](api%5Cclasses%5CAnswer.md)\>

#### Remarks

This method is not recommended when you know the message's type. Use
[`getTipsAndThanks`](api%5Cclasses%5CClient.md#gettipsandthanks),
[`getQuestion`](api%5Cclasses%5CClient.md#getquestion) or
[`getReply`](api%5Cclasses%5CClient.md#getreply) instead.

#### Source

[src/Client.ts:584](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Client.ts#L584)

***

### getMessageReplies()

> **getMessageReplies**(`identifier`, `limit`): `AsyncGenerator`\<[`Reply`](api%5Cclasses%5CReply.md)[], `void`, `unknown`\>

Gets replies to a message

#### Parameters

• **identifier**: \`ag5zfmtoYW4tYWNhZGVteX$\{string\}CxIIVXNlckRhdGEi$\{string\}thaWRf$\{string\}$\{string\}$\{string\}\` \| \`kaencrypted\_$\{string\}\_$\{string\}\`

Feedback key or encrypted feedback key

• **limit**: `number`= `10`

#### Returns

`AsyncGenerator`\<[`Reply`](api%5Cclasses%5CReply.md)[], `void`, `unknown`\>

#### Raw

[queries!getFeedbackRepliesPage](api%5Cnamespaces%5Cqueries%5Cfunctions%5CgetFeedbackRepliesPage.md)

#### Example

```ts
const client = new Client()
for await (const replies of client.getMessageReplies('ag5zfmtoYW4tYWNhZGVteXJBCxIIVXNlckRhdGEiHmthaWRfNjYzMzc5NDA2ODA0Nzc0MjA1NjU0NTUzNAwLEghGZWVkYmFjaxiAgJO6wamwCgw')) {
 console.log(replies.map(reply => reply.text))
}
```

#### Source

[src/Client.ts:912](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Client.ts#L912)

***

### getProgram()

> **getProgram**(`identifier`): `Promise`\<[`Program`](api%5Cclasses%5CProgram.md)\>

#### Parameters

• **identifier**: [`ProgramID`](api%5Ctype-aliases%5CProgramID.md) \| \`http$\{string\}://$\{string\}khanacademy.$\{string\}/$\{string\}/$\{string\}/$\{number\}\` \| \`ag5zfmtoYW4tYWNhZGVteXI$\{string\}CxIKU2NyYXRjaHBhZB$\{string\}$\{string\}\`

Program ID, URL or key

#### Returns

`Promise`\<[`Program`](api%5Cclasses%5CProgram.md)\>

#### Source

[src/Client.ts:460](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Client.ts#L460)

***

### getProgramHelpRequests()

> **getProgramHelpRequests**(`identifier`, `sort`): `AsyncGenerator`\<[`Question`](api%5Cclasses%5CQuestion.md)[], `void`, `unknown`\>

Gets Help Requests for a program

#### Parameters

• **identifier**: [`ProgramID`](api%5Ctype-aliases%5CProgramID.md) \| \`http$\{string\}://$\{string\}khanacademy.$\{string\}/$\{string\}/$\{string\}/$\{number\}\` \| \`ag5zfmtoYW4tYWNhZGVteXI$\{string\}CxIKU2NyYXRjaHBhZB$\{string\}$\{string\}\`

• **sort**: [`FeedbackSort`](api%5Cenumerations%5CFeedbackSort.md)= `FeedbackSort.TopVoted`

#### Returns

`AsyncGenerator`\<[`Question`](api%5Cclasses%5CQuestion.md)[], `void`, `unknown`\>

#### See

[Client.getProgramMessages](api%5Cclasses%5CClient.md#getprogrammessages)

#### Source

[src/Client.ts:872](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Client.ts#L872)

***

### getProgramMessages()

> **getProgramMessages**(`type`, `identifier`, `sort`): `AsyncGenerator`\<([`TipsAndThanks`](api%5Cclasses%5CTipsAndThanks.md) \| [`Question`](api%5Cclasses%5CQuestion.md))[], `void`, `unknown`\>

Gets specified types of messages for a program

#### Parameters

• **type**: [`MessageType`](api%5Cenumerations%5CMessageType.md)= `Message.Type.TipsAndThanks`

• **identifier**: [`ProgramID`](api%5Ctype-aliases%5CProgramID.md) \| \`http$\{string\}://$\{string\}khanacademy.$\{string\}/$\{string\}/$\{string\}/$\{number\}\` \| \`ag5zfmtoYW4tYWNhZGVteXI$\{string\}CxIKU2NyYXRjaHBhZB$\{string\}$\{string\}\`

Program ID, program URL, or program key

• **sort**: [`FeedbackSort`](api%5Cenumerations%5CFeedbackSort.md)= `FeedbackSort.TopVoted`

#### Returns

`AsyncGenerator`\<([`TipsAndThanks`](api%5Cclasses%5CTipsAndThanks.md) \| [`Question`](api%5Cclasses%5CQuestion.md))[], `void`, `unknown`\>

#### Example

```ts
const client = new Client()
for await (const messages of client.getProgramTipsAndThanks(5154160781082624)) {
  console.log(messages.map(message => message.text)
}
```

#### Source

[src/Client.ts:722](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Client.ts#L722)

***

### getProgramQuestions()

> **getProgramQuestions**(`identifier`, `sort`): `AsyncGenerator`\<[`Question`](api%5Cclasses%5CQuestion.md)[], `void`, `unknown`\>

Gets questions for a program

#### Parameters

• **identifier**: [`ProgramID`](api%5Ctype-aliases%5CProgramID.md) \| \`http$\{string\}://$\{string\}khanacademy.$\{string\}/$\{string\}/$\{string\}/$\{number\}\` \| \`ag5zfmtoYW4tYWNhZGVteXI$\{string\}CxIKU2NyYXRjaHBhZB$\{string\}$\{string\}\`

• **sort**: [`FeedbackSort`](api%5Cenumerations%5CFeedbackSort.md)= `FeedbackSort.TopVoted`

#### Returns

`AsyncGenerator`\<[`Question`](api%5Cclasses%5CQuestion.md)[], `void`, `unknown`\>

#### See

[Client.getProgramMessages](api%5Cclasses%5CClient.md#getprogrammessages)

#### Source

[src/Client.ts:840](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Client.ts#L840)

***

### getProgramTipsAndThanks()

> **getProgramTipsAndThanks**(`identifier`, `sort`): `AsyncGenerator`\<[`TipsAndThanks`](api%5Cclasses%5CTipsAndThanks.md)[], `void`, `unknown`\>

Gets Tips and Thanks messages for a program

#### Parameters

• **identifier**: [`ProgramID`](api%5Ctype-aliases%5CProgramID.md) \| \`http$\{string\}://$\{string\}khanacademy.$\{string\}/$\{string\}/$\{string\}/$\{number\}\` \| \`ag5zfmtoYW4tYWNhZGVteXI$\{string\}CxIKU2NyYXRjaHBhZB$\{string\}$\{string\}\`

• **sort**: [`FeedbackSort`](api%5Cenumerations%5CFeedbackSort.md)= `FeedbackSort.TopVoted`

#### Returns

`AsyncGenerator`\<[`TipsAndThanks`](api%5Cclasses%5CTipsAndThanks.md)[], `void`, `unknown`\>

#### See

[Client.getProgramMessages](api%5Cclasses%5CClient.md#getprogrammessages)

#### Source

[src/Client.ts:808](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Client.ts#L808)

***

### getQuestion()

> **getQuestion**(`identifier`): `Promise`\<[`Question`](api%5Cclasses%5CQuestion.md)\>

Gets a single question message

#### Parameters

• **identifier**: \`ag5zfmtoYW4tYWNhZGVteX$\{string\}CxIIVXNlckRhdGEi$\{string\}thaWRf$\{string\}$\{string\}$\{string\}\` \| \`kaencrypted\_$\{string\}\_$\{string\}\`

Feedback key or encrypted feedback key

#### Returns

`Promise`\<[`Question`](api%5Cclasses%5CQuestion.md)\>

#### Remarks

Note that Help Requests are a type of question.

#### Source

[src/Client.ts:657](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Client.ts#L657)

***

### getRecentPrograms()

> **getRecentPrograms**(`limit`, `official`): `AsyncGenerator`\<[`Program`](api%5Cclasses%5CProgram.md)[], `void`, `unknown`\>

#### Parameters

• **limit**: `number`= `40`

• **official**: `boolean`= `false`

#### Returns

`AsyncGenerator`\<[`Program`](api%5Cclasses%5CProgram.md)[], `void`, `unknown`\>

#### Source

[src/Client.ts:565](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Client.ts#L565)

***

### getReply()

> **getReply**(`identifier`): `Promise`\<[`Reply`](api%5Cclasses%5CReply.md)\>

Gets a single reply

#### Parameters

• **identifier**: \`ag5zfmtoYW4tYWNhZGVteX$\{string\}CxIIVXNlckRhdGEi$\{string\}thaWRf$\{string\}$\{string\}$\{string\}\` \| \`kaencrypted\_$\{string\}\_$\{string\}\`

Feedback key or encrypted feedback key

#### Returns

`Promise`\<[`Reply`](api%5Cclasses%5CReply.md)\>

#### Source

[src/Client.ts:675](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Client.ts#L675)

***

### getTipsAndThanks()

> **getTipsAndThanks**(`identifier`): `Promise`\<[`TipsAndThanks`](api%5Cclasses%5CTipsAndThanks.md)\>

Gets a single tips and thanks message

#### Parameters

• **identifier**: \`ag5zfmtoYW4tYWNhZGVteX$\{string\}CxIIVXNlckRhdGEi$\{string\}thaWRf$\{string\}$\{string\}$\{string\}\` \| \`kaencrypted\_$\{string\}\_$\{string\}\`

Feedback key or encrypted feedback key

#### Returns

`Promise`\<[`TipsAndThanks`](api%5Cclasses%5CTipsAndThanks.md)\>

#### Source

[src/Client.ts:645](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Client.ts#L645)

***

### getTopPrograms()

> **getTopPrograms**(`limit`, `official`): `AsyncGenerator`\<[`Program`](api%5Cclasses%5CProgram.md)[], `void`, `unknown`\>

#### Parameters

• **limit**: `number`= `40`

• **official**: `boolean`= `false`

#### Returns

`AsyncGenerator`\<[`Program`](api%5Cclasses%5CProgram.md)[], `void`, `unknown`\>

#### Source

[src/Client.ts:557](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Client.ts#L557)

***

### getUser()

> **getUser**(`identifier`?): `Promise`\<[`User`](api%5Cclasses%5CUser.md)\>

#### Parameters

• **identifier?**: `string`

KAID, username or email

#### Returns

`Promise`\<[`User`](api%5Cclasses%5CUser.md)\>

#### Source

[src/Client.ts:275](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Client.ts#L275)

***

### getUserAvatar()

> **getUserAvatar**(`identifier`, `type`): `Promise`\<`"https://www.khanacademy.org/images/avatars/svg/blobby-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/blobby-yellow.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/blobby-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/blobby-purple.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/area-52-yellow.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/area-52-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/area-52-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/area-52-purple.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/eggleston-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/eggleston-yellow.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/eggleston-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/eggleston-orange.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/scuttlebug-purple.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/scuttlebug-yellow.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/scuttlebug-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/scuttlebug-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/boggle-yellow.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/boggle-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/boggle-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/boggle-purple.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/sneak-peak-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/sneak-peak-yellow.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/sneak-peak-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/sneak-peak-purple.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/stelly-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/stelly-yellow.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/stelly-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/stelly-orange.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cacteye-purple.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cacteye-yellow.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cacteye-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cacteye-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leaf-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leaf-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leaf-grey.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leaf-red.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leaf-orange.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leaf-yellow.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leafers-seed.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leafers-seedling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leafers-sapling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leafers-tree.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leafers-ultimate.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/piceratops-seed.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/piceratops-seedling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/piceratops-sapling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/piceratops-tree.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/piceratops-ultimate.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/duskpin-seed.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/duskpin-seedling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/duskpin-sapling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/duskpin-tree.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/duskpin-ultimate.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/primosaur-seed.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/primosaur-seedling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/primosaur-sapling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/primosaur-tree.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/primosaur-ultimate.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/starky-seed.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/starky-seedling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/starky-sapling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/starky-tree.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/starky-ultimate.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/aqualine-seed.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/aqualine-seedling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/aqualine-sapling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/aqualine-tree.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/aqualine-ultimate.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/spunky-sam.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/spunky-sam-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/spunky-sam-orange.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/spunky-sam-red.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/marcimus.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/marcimus-orange.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/marcimus-red.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/marcimus-purple.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/mr-pink.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/mr-pink-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/mr-pink-orange.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/robot_female_1.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/robot_female_2.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/robot_female_3.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/robot_male_1.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/robot_male_2.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/robot_male_3.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/orange-juice-squid.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/purple-pi.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/purple-pi-pink.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/purple-pi-teal.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/mr-pants.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/mr-pants-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/mr-pants-orange.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/mr-pants-pink.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/mr-pants-purple.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/old-spice-man.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/old-spice-man-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cs-winston.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cs-winston-baby.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cs-ohnoes.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cs-hopper-happy.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cs-hopper-jumping.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cs-hopper-cool.svg"` \| `"https://www.khanacademy.org/images/avatars/blobby-green.png"` \| `"https://www.khanacademy.org/images/avatars/blobby-yellow.png"` \| `"https://www.khanacademy.org/images/avatars/blobby-blue.png"` \| `"https://www.khanacademy.org/images/avatars/blobby-purple.png"` \| `"https://www.khanacademy.org/images/avatars/area-52-yellow.png"` \| `"https://www.khanacademy.org/images/avatars/area-52-blue.png"` \| `"https://www.khanacademy.org/images/avatars/area-52-green.png"` \| `"https://www.khanacademy.org/images/avatars/area-52-purple.png"` \| `"https://www.khanacademy.org/images/avatars/eggleston-blue.png"` \| `"https://www.khanacademy.org/images/avatars/eggleston-yellow.png"` \| `"https://www.khanacademy.org/images/avatars/eggleston-green.png"` \| `"https://www.khanacademy.org/images/avatars/eggleston-orange.png"` \| `"https://www.khanacademy.org/images/avatars/scuttlebug-purple.png"` \| `"https://www.khanacademy.org/images/avatars/scuttlebug-yellow.png"` \| `"https://www.khanacademy.org/images/avatars/scuttlebug-blue.png"` \| `"https://www.khanacademy.org/images/avatars/scuttlebug-green.png"` \| `"https://www.khanacademy.org/images/avatars/boggle-yellow.png"` \| `"https://www.khanacademy.org/images/avatars/boggle-blue.png"` \| `"https://www.khanacademy.org/images/avatars/boggle-green.png"` \| `"https://www.khanacademy.org/images/avatars/boggle-purple.png"` \| `"https://www.khanacademy.org/images/avatars/sneak-peak-green.png"` \| `"https://www.khanacademy.org/images/avatars/sneak-peak-yellow.png"` \| `"https://www.khanacademy.org/images/avatars/sneak-peak-blue.png"` \| `"https://www.khanacademy.org/images/avatars/sneak-peak-purple.png"` \| `"https://www.khanacademy.org/images/avatars/stelly-blue.png"` \| `"https://www.khanacademy.org/images/avatars/stelly-yellow.png"` \| `"https://www.khanacademy.org/images/avatars/stelly-green.png"` \| `"https://www.khanacademy.org/images/avatars/stelly-orange.png"` \| `"https://www.khanacademy.org/images/avatars/cacteye-purple.png"` \| `"https://www.khanacademy.org/images/avatars/cacteye-yellow.png"` \| `"https://www.khanacademy.org/images/avatars/cacteye-blue.png"` \| `"https://www.khanacademy.org/images/avatars/cacteye-green.png"` \| `"https://www.khanacademy.org/images/avatars/leaf-green.png"` \| `"https://www.khanacademy.org/images/avatars/leaf-blue.png"` \| `"https://www.khanacademy.org/images/avatars/leaf-grey.png"` \| `"https://www.khanacademy.org/images/avatars/leaf-red.png"` \| `"https://www.khanacademy.org/images/avatars/leaf-orange.png"` \| `"https://www.khanacademy.org/images/avatars/leaf-yellow.png"` \| `"https://www.khanacademy.org/images/avatars/leafers-seed.png"` \| `"https://www.khanacademy.org/images/avatars/leafers-seedling.png"` \| `"https://www.khanacademy.org/images/avatars/leafers-sapling.png"` \| `"https://www.khanacademy.org/images/avatars/leafers-tree.png"` \| `"https://www.khanacademy.org/images/avatars/leafers-ultimate.png"` \| `"https://www.khanacademy.org/images/avatars/piceratops-seed.png"` \| `"https://www.khanacademy.org/images/avatars/piceratops-seedling.png"` \| `"https://www.khanacademy.org/images/avatars/piceratops-sapling.png"` \| `"https://www.khanacademy.org/images/avatars/piceratops-tree.png"` \| `"https://www.khanacademy.org/images/avatars/piceratops-ultimate.png"` \| `"https://www.khanacademy.org/images/avatars/duskpin-seed.png"` \| `"https://www.khanacademy.org/images/avatars/duskpin-seedling.png"` \| `"https://www.khanacademy.org/images/avatars/duskpin-sapling.png"` \| `"https://www.khanacademy.org/images/avatars/duskpin-tree.png"` \| `"https://www.khanacademy.org/images/avatars/duskpin-ultimate.png"` \| `"https://www.khanacademy.org/images/avatars/primosaur-seed.png"` \| `"https://www.khanacademy.org/images/avatars/primosaur-seedling.png"` \| `"https://www.khanacademy.org/images/avatars/primosaur-sapling.png"` \| `"https://www.khanacademy.org/images/avatars/primosaur-tree.png"` \| `"https://www.khanacademy.org/images/avatars/primosaur-ultimate.png"` \| `"https://www.khanacademy.org/images/avatars/starky-seed.png"` \| `"https://www.khanacademy.org/images/avatars/starky-seedling.png"` \| `"https://www.khanacademy.org/images/avatars/starky-sapling.png"` \| `"https://www.khanacademy.org/images/avatars/starky-tree.png"` \| `"https://www.khanacademy.org/images/avatars/starky-ultimate.png"` \| `"https://www.khanacademy.org/images/avatars/aqualine-seed.png"` \| `"https://www.khanacademy.org/images/avatars/aqualine-seedling.png"` \| `"https://www.khanacademy.org/images/avatars/aqualine-sapling.png"` \| `"https://www.khanacademy.org/images/avatars/aqualine-tree.png"` \| `"https://www.khanacademy.org/images/avatars/aqualine-ultimate.png"` \| `"https://www.khanacademy.org/images/avatars/spunky-sam.png"` \| `"https://www.khanacademy.org/images/avatars/spunky-sam-green.png"` \| `"https://www.khanacademy.org/images/avatars/spunky-sam-orange.png"` \| `"https://www.khanacademy.org/images/avatars/spunky-sam-red.png"` \| `"https://www.khanacademy.org/images/avatars/marcimus.png"` \| `"https://www.khanacademy.org/images/avatars/marcimus-orange.png"` \| `"https://www.khanacademy.org/images/avatars/marcimus-red.png"` \| `"https://www.khanacademy.org/images/avatars/marcimus-purple.png"` \| `"https://www.khanacademy.org/images/avatars/mr-pink.png"` \| `"https://www.khanacademy.org/images/avatars/mr-pink-green.png"` \| `"https://www.khanacademy.org/images/avatars/mr-pink-orange.png"` \| `"https://www.khanacademy.org/images/avatars/robot_female_1.png"` \| `"https://www.khanacademy.org/images/avatars/robot_female_2.png"` \| `"https://www.khanacademy.org/images/avatars/robot_female_3.png"` \| `"https://www.khanacademy.org/images/avatars/robot_male_1.png"` \| `"https://www.khanacademy.org/images/avatars/robot_male_2.png"` \| `"https://www.khanacademy.org/images/avatars/robot_male_3.png"` \| `"https://www.khanacademy.org/images/avatars/orange-juice-squid.png"` \| `"https://www.khanacademy.org/images/avatars/purple-pi.png"` \| `"https://www.khanacademy.org/images/avatars/purple-pi-pink.png"` \| `"https://www.khanacademy.org/images/avatars/purple-pi-teal.png"` \| `"https://www.khanacademy.org/images/avatars/mr-pants.png"` \| `"https://www.khanacademy.org/images/avatars/mr-pants-green.png"` \| `"https://www.khanacademy.org/images/avatars/mr-pants-orange.png"` \| `"https://www.khanacademy.org/images/avatars/mr-pants-pink.png"` \| `"https://www.khanacademy.org/images/avatars/mr-pants-purple.png"` \| `"https://www.khanacademy.org/images/avatars/old-spice-man.png"` \| `"https://www.khanacademy.org/images/avatars/old-spice-man-blue.png"` \| `"https://www.khanacademy.org/images/avatars/cs-winston.png"` \| `"https://www.khanacademy.org/images/avatars/cs-winston-baby.png"` \| `"https://www.khanacademy.org/images/avatars/cs-ohnoes.png"` \| `"https://www.khanacademy.org/images/avatars/cs-hopper-happy.png"` \| `"https://www.khanacademy.org/images/avatars/cs-hopper-jumping.png"` \| `"https://www.khanacademy.org/images/avatars/cs-hopper-cool.png"`\>

#### Parameters

• **identifier**: `undefined` \| `string`= `undefined`

• **type**: `"svg"` \| `"png"`= `'svg'`

#### Returns

`Promise`\<`"https://www.khanacademy.org/images/avatars/svg/blobby-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/blobby-yellow.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/blobby-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/blobby-purple.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/area-52-yellow.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/area-52-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/area-52-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/area-52-purple.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/eggleston-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/eggleston-yellow.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/eggleston-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/eggleston-orange.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/scuttlebug-purple.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/scuttlebug-yellow.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/scuttlebug-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/scuttlebug-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/boggle-yellow.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/boggle-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/boggle-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/boggle-purple.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/sneak-peak-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/sneak-peak-yellow.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/sneak-peak-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/sneak-peak-purple.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/stelly-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/stelly-yellow.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/stelly-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/stelly-orange.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cacteye-purple.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cacteye-yellow.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cacteye-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cacteye-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leaf-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leaf-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leaf-grey.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leaf-red.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leaf-orange.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leaf-yellow.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leafers-seed.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leafers-seedling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leafers-sapling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leafers-tree.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/leafers-ultimate.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/piceratops-seed.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/piceratops-seedling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/piceratops-sapling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/piceratops-tree.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/piceratops-ultimate.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/duskpin-seed.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/duskpin-seedling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/duskpin-sapling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/duskpin-tree.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/duskpin-ultimate.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/primosaur-seed.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/primosaur-seedling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/primosaur-sapling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/primosaur-tree.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/primosaur-ultimate.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/starky-seed.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/starky-seedling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/starky-sapling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/starky-tree.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/starky-ultimate.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/aqualine-seed.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/aqualine-seedling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/aqualine-sapling.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/aqualine-tree.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/aqualine-ultimate.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/spunky-sam.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/spunky-sam-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/spunky-sam-orange.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/spunky-sam-red.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/marcimus.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/marcimus-orange.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/marcimus-red.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/marcimus-purple.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/mr-pink.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/mr-pink-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/mr-pink-orange.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/robot_female_1.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/robot_female_2.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/robot_female_3.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/robot_male_1.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/robot_male_2.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/robot_male_3.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/orange-juice-squid.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/purple-pi.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/purple-pi-pink.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/purple-pi-teal.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/mr-pants.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/mr-pants-green.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/mr-pants-orange.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/mr-pants-pink.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/mr-pants-purple.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/old-spice-man.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/old-spice-man-blue.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cs-winston.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cs-winston-baby.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cs-ohnoes.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cs-hopper-happy.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cs-hopper-jumping.svg"` \| `"https://www.khanacademy.org/images/avatars/svg/cs-hopper-cool.svg"` \| `"https://www.khanacademy.org/images/avatars/blobby-green.png"` \| `"https://www.khanacademy.org/images/avatars/blobby-yellow.png"` \| `"https://www.khanacademy.org/images/avatars/blobby-blue.png"` \| `"https://www.khanacademy.org/images/avatars/blobby-purple.png"` \| `"https://www.khanacademy.org/images/avatars/area-52-yellow.png"` \| `"https://www.khanacademy.org/images/avatars/area-52-blue.png"` \| `"https://www.khanacademy.org/images/avatars/area-52-green.png"` \| `"https://www.khanacademy.org/images/avatars/area-52-purple.png"` \| `"https://www.khanacademy.org/images/avatars/eggleston-blue.png"` \| `"https://www.khanacademy.org/images/avatars/eggleston-yellow.png"` \| `"https://www.khanacademy.org/images/avatars/eggleston-green.png"` \| `"https://www.khanacademy.org/images/avatars/eggleston-orange.png"` \| `"https://www.khanacademy.org/images/avatars/scuttlebug-purple.png"` \| `"https://www.khanacademy.org/images/avatars/scuttlebug-yellow.png"` \| `"https://www.khanacademy.org/images/avatars/scuttlebug-blue.png"` \| `"https://www.khanacademy.org/images/avatars/scuttlebug-green.png"` \| `"https://www.khanacademy.org/images/avatars/boggle-yellow.png"` \| `"https://www.khanacademy.org/images/avatars/boggle-blue.png"` \| `"https://www.khanacademy.org/images/avatars/boggle-green.png"` \| `"https://www.khanacademy.org/images/avatars/boggle-purple.png"` \| `"https://www.khanacademy.org/images/avatars/sneak-peak-green.png"` \| `"https://www.khanacademy.org/images/avatars/sneak-peak-yellow.png"` \| `"https://www.khanacademy.org/images/avatars/sneak-peak-blue.png"` \| `"https://www.khanacademy.org/images/avatars/sneak-peak-purple.png"` \| `"https://www.khanacademy.org/images/avatars/stelly-blue.png"` \| `"https://www.khanacademy.org/images/avatars/stelly-yellow.png"` \| `"https://www.khanacademy.org/images/avatars/stelly-green.png"` \| `"https://www.khanacademy.org/images/avatars/stelly-orange.png"` \| `"https://www.khanacademy.org/images/avatars/cacteye-purple.png"` \| `"https://www.khanacademy.org/images/avatars/cacteye-yellow.png"` \| `"https://www.khanacademy.org/images/avatars/cacteye-blue.png"` \| `"https://www.khanacademy.org/images/avatars/cacteye-green.png"` \| `"https://www.khanacademy.org/images/avatars/leaf-green.png"` \| `"https://www.khanacademy.org/images/avatars/leaf-blue.png"` \| `"https://www.khanacademy.org/images/avatars/leaf-grey.png"` \| `"https://www.khanacademy.org/images/avatars/leaf-red.png"` \| `"https://www.khanacademy.org/images/avatars/leaf-orange.png"` \| `"https://www.khanacademy.org/images/avatars/leaf-yellow.png"` \| `"https://www.khanacademy.org/images/avatars/leafers-seed.png"` \| `"https://www.khanacademy.org/images/avatars/leafers-seedling.png"` \| `"https://www.khanacademy.org/images/avatars/leafers-sapling.png"` \| `"https://www.khanacademy.org/images/avatars/leafers-tree.png"` \| `"https://www.khanacademy.org/images/avatars/leafers-ultimate.png"` \| `"https://www.khanacademy.org/images/avatars/piceratops-seed.png"` \| `"https://www.khanacademy.org/images/avatars/piceratops-seedling.png"` \| `"https://www.khanacademy.org/images/avatars/piceratops-sapling.png"` \| `"https://www.khanacademy.org/images/avatars/piceratops-tree.png"` \| `"https://www.khanacademy.org/images/avatars/piceratops-ultimate.png"` \| `"https://www.khanacademy.org/images/avatars/duskpin-seed.png"` \| `"https://www.khanacademy.org/images/avatars/duskpin-seedling.png"` \| `"https://www.khanacademy.org/images/avatars/duskpin-sapling.png"` \| `"https://www.khanacademy.org/images/avatars/duskpin-tree.png"` \| `"https://www.khanacademy.org/images/avatars/duskpin-ultimate.png"` \| `"https://www.khanacademy.org/images/avatars/primosaur-seed.png"` \| `"https://www.khanacademy.org/images/avatars/primosaur-seedling.png"` \| `"https://www.khanacademy.org/images/avatars/primosaur-sapling.png"` \| `"https://www.khanacademy.org/images/avatars/primosaur-tree.png"` \| `"https://www.khanacademy.org/images/avatars/primosaur-ultimate.png"` \| `"https://www.khanacademy.org/images/avatars/starky-seed.png"` \| `"https://www.khanacademy.org/images/avatars/starky-seedling.png"` \| `"https://www.khanacademy.org/images/avatars/starky-sapling.png"` \| `"https://www.khanacademy.org/images/avatars/starky-tree.png"` \| `"https://www.khanacademy.org/images/avatars/starky-ultimate.png"` \| `"https://www.khanacademy.org/images/avatars/aqualine-seed.png"` \| `"https://www.khanacademy.org/images/avatars/aqualine-seedling.png"` \| `"https://www.khanacademy.org/images/avatars/aqualine-sapling.png"` \| `"https://www.khanacademy.org/images/avatars/aqualine-tree.png"` \| `"https://www.khanacademy.org/images/avatars/aqualine-ultimate.png"` \| `"https://www.khanacademy.org/images/avatars/spunky-sam.png"` \| `"https://www.khanacademy.org/images/avatars/spunky-sam-green.png"` \| `"https://www.khanacademy.org/images/avatars/spunky-sam-orange.png"` \| `"https://www.khanacademy.org/images/avatars/spunky-sam-red.png"` \| `"https://www.khanacademy.org/images/avatars/marcimus.png"` \| `"https://www.khanacademy.org/images/avatars/marcimus-orange.png"` \| `"https://www.khanacademy.org/images/avatars/marcimus-red.png"` \| `"https://www.khanacademy.org/images/avatars/marcimus-purple.png"` \| `"https://www.khanacademy.org/images/avatars/mr-pink.png"` \| `"https://www.khanacademy.org/images/avatars/mr-pink-green.png"` \| `"https://www.khanacademy.org/images/avatars/mr-pink-orange.png"` \| `"https://www.khanacademy.org/images/avatars/robot_female_1.png"` \| `"https://www.khanacademy.org/images/avatars/robot_female_2.png"` \| `"https://www.khanacademy.org/images/avatars/robot_female_3.png"` \| `"https://www.khanacademy.org/images/avatars/robot_male_1.png"` \| `"https://www.khanacademy.org/images/avatars/robot_male_2.png"` \| `"https://www.khanacademy.org/images/avatars/robot_male_3.png"` \| `"https://www.khanacademy.org/images/avatars/orange-juice-squid.png"` \| `"https://www.khanacademy.org/images/avatars/purple-pi.png"` \| `"https://www.khanacademy.org/images/avatars/purple-pi-pink.png"` \| `"https://www.khanacademy.org/images/avatars/purple-pi-teal.png"` \| `"https://www.khanacademy.org/images/avatars/mr-pants.png"` \| `"https://www.khanacademy.org/images/avatars/mr-pants-green.png"` \| `"https://www.khanacademy.org/images/avatars/mr-pants-orange.png"` \| `"https://www.khanacademy.org/images/avatars/mr-pants-pink.png"` \| `"https://www.khanacademy.org/images/avatars/mr-pants-purple.png"` \| `"https://www.khanacademy.org/images/avatars/old-spice-man.png"` \| `"https://www.khanacademy.org/images/avatars/old-spice-man-blue.png"` \| `"https://www.khanacademy.org/images/avatars/cs-winston.png"` \| `"https://www.khanacademy.org/images/avatars/cs-winston-baby.png"` \| `"https://www.khanacademy.org/images/avatars/cs-ohnoes.png"` \| `"https://www.khanacademy.org/images/avatars/cs-hopper-happy.png"` \| `"https://www.khanacademy.org/images/avatars/cs-hopper-jumping.png"` \| `"https://www.khanacademy.org/images/avatars/cs-hopper-cool.png"`\>

#### Source

[src/Client.ts:314](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Client.ts#L314)

***

### getUserPrograms()

> **getUserPrograms**(`identifier`?, `sort`?, `limit`?): `AsyncGenerator`\<[`Program`](api%5Cclasses%5CProgram.md)[], `void`, `unknown`\>

Gets a user's programs

#### Parameters

• **identifier?**: `string`

• **sort?**: [`ListProgramSortOrder`](api%5Cenumerations%5CListProgramSortOrder.md)= `ListProgramSortOrder.TOP`

• **limit?**: `number`= `40`

#### Returns

`AsyncGenerator`\<[`Program`](api%5Cclasses%5CProgram.md)[], `void`, `unknown`\>

#### Raw

[queries!projectsAuthoredByUser](api%5Cnamespaces%5Cqueries%5Cfunctions%5CprojectsAuthoredByUser.md)

#### Example

```ts
const client = new Client()
for await (const programs of client.getUserPrograms('bhavjitChauhan')) {
 console.log(programs.map(program => program.title))
}
```

#### Source

[src/Client.ts:373](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Client.ts#L373)

***

### getUserStatistics()

> **getUserStatistics**(`identifier`): `Promise`\<[`UserStatistics`](api%5Cinterfaces%5CUserStatistics.md)\>

#### Parameters

• **identifier**: `undefined` \| `string`= `undefined`

#### Returns

`Promise`\<[`UserStatistics`](api%5Cinterfaces%5CUserStatistics.md)\>

#### Source

[src/Client.ts:336](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Client.ts#L336)

***

### login()

> **login**(`identifier`?, `password`?): `Promise`\<[`Client`](api%5Cclasses%5CClient.md)\>

Logs in to Khan Academy and stores the KAAS cookie

#### Parameters

• **identifier?**: `string`

KAID, username or email

• **password?**: `string`

#### Returns

`Promise`\<[`Client`](api%5Cclasses%5CClient.md)\>

#### Source

[src/Client.ts:202](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Client.ts#L202)

***

### resolveCachedFeedbackKey()

> **resolveCachedFeedbackKey**(`identifier`): `Promise`\<\`ag5zfmtoYW4tYWNhZGVteX$\{string\}CxIIVXNlckRhdGEi$\{string\}thaWRf$\{string\}$\{string\}$\{string\}\`\>

Resolved an encrypted message key to an unencrypted message key and caches
the result

#### Parameters

• **identifier**: \`ag5zfmtoYW4tYWNhZGVteX$\{string\}CxIIVXNlckRhdGEi$\{string\}thaWRf$\{string\}$\{string\}$\{string\}\` \| \`kaencrypted\_$\{string\}\_$\{string\}\`

#### Returns

`Promise`\<\`ag5zfmtoYW4tYWNhZGVteX$\{string\}CxIIVXNlckRhdGEi$\{string\}thaWRf$\{string\}$\{string\}$\{string\}\`\>

#### Remarks

If the identifier is cached, it will be returned immediately. Otherwise a
`QAExpandKeyInfo` request will be made to resolve the identifier

#### See

[resolveFeedbackKey](api%5Cfunctions%5CresolveFeedbackKey.md)

#### Source

[src/Client.ts:167](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Client.ts#L167)

***

### resolveCachedKaid()

> **resolveCachedKaid**(`identifier`): `Promise`\<\`kaid\_$\{number\}\`\>

Resolves a username or email to a KAID and caches the result

#### Parameters

• **identifier**: `string`

#### Returns

`Promise`\<\`kaid\_$\{number\}\`\>

#### Remarks

If the identifier is cached, it will be returned immediately. Otherwise a
`getUserByUsernameOrEmail` request will be made to resolve the identifier

#### See

[resolveKaid](api%5Cfunctions%5CresolveKaid.md)

#### Example

```ts
const getKaid = async () => await client.resolveCachedKaid('bhavjitChauhan')
console.log(await getKaid()) // Makes a request
console.log(await getKaid()) // Returns cached result
```

#### Source

[src/Client.ts:112](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Client.ts#L112)

***

### resolveCachedUsername()

> **resolveCachedUsername**(`identifier`): `Promise`\<`string`\>

Resolves a KAID to a username and caches the result

#### Parameters

• **identifier**: `string`

#### Returns

`Promise`\<`string`\>

#### Remarks

If the identifier is cached, it will be returned immediately. Otherwise a
`getUserHoverCardProfile` request will be made to resolve the identifier

#### See

[resolveUsername](api%5Cfunctions%5CresolveUsername.md)

#### Example

```ts
const getUsername = async () => await client.resolveCachedUsername('kaid_376749826184384230772276')
console.log(await getUsername()) // Makes a request
console.log(await getUsername()) // Returns cached result
```

#### Source

[src/Client.ts:141](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Client.ts#L141)

***

### #resolveJsonReponse()

> `static` `private` **#resolveJsonReponse**\<`T`\>(`response`): `Promise`\<`T`\>

#### Type parameters

• **T**

#### Parameters

• **response**: [`TypedResponse`](api%5Cinterfaces%5CTypedResponse.md)\<`T`\>

#### Returns

`Promise`\<`T`\>

#### Source

[src/Client.ts:74](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/Client.ts#L74)
