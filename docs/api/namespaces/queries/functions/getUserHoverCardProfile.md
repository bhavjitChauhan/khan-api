## Call Signature

> **getUserHoverCardProfile**(`variables`, `init`?): `Promise`\<[`TypedResponse`](api/interfaces%5CTypedResponse.md)\<[`Response`](api/namespaces%5Cqueries%5Cnamespaces%5CGetUserHoverCardProfile%5Ctype-aliases%5CResponse.md)\>\>

Defined in: [src/queries/getUserHoverCardProfile.ts:70](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/queries/getUserHoverCardProfile.ts#L70)

Low-level function for making a `getUserHoverCardProfile` request.

### Parameters

#### variables

[`Variables`](api/namespaces%5Cqueries%5Cnamespaces%5CGetUserHoverCardProfile%5Cinterfaces%5CVariables.md)

#### init?

`RequestInit`

### Returns

`Promise`\<[`TypedResponse`](api/interfaces%5CTypedResponse.md)\<[`Response`](api/namespaces%5Cqueries%5Cnamespaces%5CGetUserHoverCardProfile%5Ctype-aliases%5CResponse.md)\>\>

### Link

[Reference](https://khan-api.bhavjit.com/reference/view/19553924/2s8YzQUiXU#6de1d62b-d8b4-425e-b0f2-305be6279718)

### Example

Simple usage without error handling:
```js
const response = await queries.getUserHoverCardProfile({
  kaid: 'kaid_326465577260382527912172'
})
const json = await response.json()
const profile = json.data.user
```

## Call Signature

> **getUserHoverCardProfile**(`kaid`, `init`?): `Promise`\<[`TypedResponse`](api/interfaces%5CTypedResponse.md)\<[`Response`](api/namespaces%5Cqueries%5Cnamespaces%5CGetUserHoverCardProfile%5Ctype-aliases%5CResponse.md)\>\>

Defined in: [src/queries/getUserHoverCardProfile.ts:83](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/queries/getUserHoverCardProfile.ts#L83)

### Parameters

#### kaid

`` `kaid_${number}` ``

#### init?

`RequestInit`

### Returns

`Promise`\<[`TypedResponse`](api/interfaces%5CTypedResponse.md)\<[`Response`](api/namespaces%5Cqueries%5Cnamespaces%5CGetUserHoverCardProfile%5Ctype-aliases%5CResponse.md)\>\>

### Example

Alternative usage:
```js
const response = await queries.getUserHoverCardProfile('kaid_326465577260382527912172')
const json = await response.json()
const profile = json.data.user
```
