## Call Signature

> **avatarDataForProfile**(`variables`, `init`?): `Promise`\<[`TypedResponse`](api/interfaces%5CTypedResponse.md)\<[`Response`](api/namespaces%5Cqueries%5Cnamespaces%5CAvatarDataForProfile%5Ctype-aliases%5CResponse.md)\>\>

Defined in: [src/queries/avatarDataForProfile.ts:50](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/queries/avatarDataForProfile.ts#L50)

Low-level function for making a `avatarDataForProfile` request.

### Parameters

#### variables

[`Variables`](api/namespaces%5Cqueries%5Cnamespaces%5CAvatarDataForProfile%5Cinterfaces%5CVariables.md)

#### init?

`RequestInit`

### Returns

`Promise`\<[`TypedResponse`](api/interfaces%5CTypedResponse.md)\<[`Response`](api/namespaces%5Cqueries%5Cnamespaces%5CAvatarDataForProfile%5Ctype-aliases%5CResponse.md)\>\>

### Link

[Reference](https://khan-api.bhavjit.com/reference/view/19553924/2s8YzQUiXU#256c194a-f6d5-4c7a-aaa5-97792cdba1b3)

### Example

Simple usage without error handling:
```js
const response = await queries.avatarDataForProfile({
  kaid: 'kaid_326465577260382527912172'
})
const json = await response.json()
const profile = json.data.user
const avatar = profile.avatar
```

## Call Signature

> **avatarDataForProfile**(`kaid`, `init`?): `Promise`\<[`TypedResponse`](api/interfaces%5CTypedResponse.md)\<[`Response`](api/namespaces%5Cqueries%5Cnamespaces%5CAvatarDataForProfile%5Ctype-aliases%5CResponse.md)\>\>

Defined in: [src/queries/avatarDataForProfile.ts:64](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/queries/avatarDataForProfile.ts#L64)

### Parameters

#### kaid

`` `kaid_${number}` ``

#### init?

`RequestInit`

### Returns

`Promise`\<[`TypedResponse`](api/interfaces%5CTypedResponse.md)\<[`Response`](api/namespaces%5Cqueries%5Cnamespaces%5CAvatarDataForProfile%5Ctype-aliases%5CResponse.md)\>\>

### Example

Alternative usage:
```js
const response = await queries.avatarDataForProfile('kaid_326465577260382527912172')
const json = await response.json()
const profile = json.data.user
const avatar = profile.avatar
```
