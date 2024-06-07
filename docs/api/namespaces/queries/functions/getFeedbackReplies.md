## getFeedbackReplies(variables, init)

> **getFeedbackReplies**(`variables`, `init`?): `Promise`\<[`TypedResponse`](api%5Cinterfaces%5CTypedResponse.md)\<[`Response`](api%5Cnamespaces%5Cqueries%5Cnamespaces%5CGetFeedbackReplies%5Ctype-aliases%5CResponse.md)\>\>

Low-level function for making a `getFeedbackReplies` request.

### Parameters

• **variables**: [`Variables`](api%5Cnamespaces%5Cqueries%5Cnamespaces%5CGetFeedbackReplies%5Cinterfaces%5CVariables.md)

• **init?**: `RequestInit`

### Returns

`Promise`\<[`TypedResponse`](api%5Cinterfaces%5CTypedResponse.md)\<[`Response`](api%5Cnamespaces%5Cqueries%5Cnamespaces%5CGetFeedbackReplies%5Ctype-aliases%5CResponse.md)\>\>

### Link

[Reference](https://khan-api.bhavjit.com/reference/view/19553924/2s8YzQUiXU#3d616591-a38f-4bec-9836-367dba32a2ac)

### Example

Simple usage without error handling:
```js
const response = await queries.getFeedbackReplies({
 postKey: 'ag5zfmtoYW4tYWNhZGVteXJBCxIIVXNlckRhdGEiHmthaWRfNjYzMzc5NDA2ODA0Nzc0MjA1NjU0NTUzNAwLEghGZWVkYmFjaxiAgOPjx8-XCAw'
})
const json = await response.json()
const replies = json.data.feedbackReplies
```

### Source

[src/queries/getFeedbackReplies.ts:106](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/queries/getFeedbackReplies.ts#L106)

## getFeedbackReplies(postKey, init)

> **getFeedbackReplies**(`postKey`, `init`?): `Promise`\<[`TypedResponse`](api%5Cinterfaces%5CTypedResponse.md)\<[`Response`](api%5Cnamespaces%5Cqueries%5Cnamespaces%5CGetFeedbackReplies%5Ctype-aliases%5CResponse.md)\>\>

### Parameters

• **postKey**: \`ag5zfmtoYW4tYWNhZGVteX$\{string\}CxIIVXNlckRhdGEi$\{string\}thaWRf$\{string\}$\{string\}$\{string\}\` \| \`kaencrypted\_$\{string\}\_$\{string\}\`

• **init?**: `RequestInit`

### Returns

`Promise`\<[`TypedResponse`](api%5Cinterfaces%5CTypedResponse.md)\<[`Response`](api%5Cnamespaces%5Cqueries%5Cnamespaces%5CGetFeedbackReplies%5Ctype-aliases%5CResponse.md)\>\>

### Example

Alternative usage:
```js
const await queries.getFeedbackReplies('ag5zfmtoYW4tYWNhZGVteXJBCxIIVXNlckRhdGEiHmthaWRfNjYzMzc5NDA2ODA0Nzc0MjA1NjU0NTUzNAwLEghGZWVkYmFjaxiAgOPjx8-XCAw')
const json = await response.json()
const replies = json.data.feedbackReplies
```

### Source

[src/queries/getFeedbackReplies.ts:119](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/queries/getFeedbackReplies.ts#L119)
