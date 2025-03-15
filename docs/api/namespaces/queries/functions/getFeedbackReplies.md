## Call Signature

> **getFeedbackReplies**(`variables`, `init`?): `Promise`\<[`TypedResponse`](api/interfaces%5CTypedResponse.md)\<[`Response`](api/namespaces%5Cqueries%5Cnamespaces%5CGetFeedbackReplies%5Ctype-aliases%5CResponse.md)\>\>

Defined in: [src/queries/getFeedbackReplies.ts:106](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/queries/getFeedbackReplies.ts#L106)

Low-level function for making a `getFeedbackReplies` request.

### Parameters

#### variables

[`Variables`](api/namespaces%5Cqueries%5Cnamespaces%5CGetFeedbackReplies%5Cinterfaces%5CVariables.md)

#### init?

`RequestInit`

### Returns

`Promise`\<[`TypedResponse`](api/interfaces%5CTypedResponse.md)\<[`Response`](api/namespaces%5Cqueries%5Cnamespaces%5CGetFeedbackReplies%5Ctype-aliases%5CResponse.md)\>\>

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

## Call Signature

> **getFeedbackReplies**(`postKey`, `init`?): `Promise`\<[`TypedResponse`](api/interfaces%5CTypedResponse.md)\<[`Response`](api/namespaces%5Cqueries%5Cnamespaces%5CGetFeedbackReplies%5Ctype-aliases%5CResponse.md)\>\>

Defined in: [src/queries/getFeedbackReplies.ts:119](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/queries/getFeedbackReplies.ts#L119)

### Parameters

#### postKey

`` `ag5zfmtoYW4tYWNhZGVteX${string}CxIIVXNlckRhdGEi${string}thaWRf${string}${string}${string}` `` | `` `kaencrypted_${string}_${string}` ``

#### init?

`RequestInit`

### Returns

`Promise`\<[`TypedResponse`](api/interfaces%5CTypedResponse.md)\<[`Response`](api/namespaces%5Cqueries%5Cnamespaces%5CGetFeedbackReplies%5Ctype-aliases%5CResponse.md)\>\>

### Example

Alternative usage:
```js
const await queries.getFeedbackReplies('ag5zfmtoYW4tYWNhZGVteXJBCxIIVXNlckRhdGEiHmthaWRfNjYzMzc5NDA2ODA0Nzc0MjA1NjU0NTUzNAwLEghGZWVkYmFjaxiAgOPjx8-XCAw')
const json = await response.json()
const replies = json.data.feedbackReplies
```
