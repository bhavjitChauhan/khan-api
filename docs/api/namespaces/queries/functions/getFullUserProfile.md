## Call Signature

> **getFullUserProfile**(`variables`?, `init`?): `Promise`\<[`TypedResponse`](api/interfaces%5CTypedResponse.md)\<[`Response`](api/namespaces%5Cqueries%5Cnamespaces%5CGetFullUserProfile%5Ctype-aliases%5CResponse.md)\>\>

Defined in: [src/queries/getFullUserProfile.ts:248](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/queries/getFullUserProfile.ts#L248)

Low-level function for making a `getFullUserProfile` request.

### Parameters

#### variables?

[`Variables`](api/namespaces%5Cqueries%5Cnamespaces%5CGetFullUserProfile%5Cinterfaces%5CVariables.md)

Fetches profile associated with any cookies if not provided

#### init?

`RequestInit`

### Returns

`Promise`\<[`TypedResponse`](api/interfaces%5CTypedResponse.md)\<[`Response`](api/namespaces%5Cqueries%5Cnamespaces%5CGetFullUserProfile%5Ctype-aliases%5CResponse.md)\>\>

### Remarks

This request does not require authentication but some fields will be returned
as `null`.

If, for some reason, both `kaid` and `username` are provided, Khan Academy
will use `kaid` and ignore `username`.

### Link

[Reference](https://khan-api.bhavjit.com/reference/view/19553924/2s8YzQUiXU#9ae4c690-be8a-4b57-acfc-07a4870a5ee3)

### See

[Client.getUser](api/classes%5CClient.md#getuser)

### Examples

Get profile by KAID, without error handling:
```js
const response = await queries.getFullUserProfile({ kaid: 'kaid_326465577260382527912172' })
const json = await response.json()
const profile = json.data.user
```

Similarly, get profile by username:
```js
const response = await queries.getFullUserProfile({ username: 'sal' })
const json = await response.json()
const profile = json.data.user
```

If no variables are provided or an empty object is passed in, Khan Academy
will use any cookies included with the request to fetch the profile
associated with them:
```js
const response = await queries.getFullUserProfile(null, {
 headers: { cookie: 'KAAS=...' }
})
const json = await response.json()
const profile = json.data.user
```

## Call Signature

> **getFullUserProfile**(`kaid`?, `init`?): `Promise`\<[`TypedResponse`](api/interfaces%5CTypedResponse.md)\<[`Response`](api/namespaces%5Cqueries%5Cnamespaces%5CGetFullUserProfile%5Ctype-aliases%5CResponse.md)\>\>

Defined in: [src/queries/getFullUserProfile.ts:261](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/queries/getFullUserProfile.ts#L261)

### Parameters

#### kaid?

`` `kaid_${number}` ``

#### init?

`RequestInit`

### Returns

`Promise`\<[`TypedResponse`](api/interfaces%5CTypedResponse.md)\<[`Response`](api/namespaces%5Cqueries%5Cnamespaces%5CGetFullUserProfile%5Ctype-aliases%5CResponse.md)\>\>

### Example

Alternative usage by KAID:
```js
const response = await queries.getFullUserProfile('kaid_326465577260382527912172')
const json = await response.json()
const profile = json.data.user
```

## Call Signature

> **getFullUserProfile**(`username`?, `init`?): `Promise`\<[`TypedResponse`](api/interfaces%5CTypedResponse.md)\<[`Response`](api/namespaces%5Cqueries%5Cnamespaces%5CGetFullUserProfile%5Ctype-aliases%5CResponse.md)\>\>

Defined in: [src/queries/getFullUserProfile.ts:274](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/queries/getFullUserProfile.ts#L274)

### Parameters

#### username?

`string`

#### init?

`RequestInit`

### Returns

`Promise`\<[`TypedResponse`](api/interfaces%5CTypedResponse.md)\<[`Response`](api/namespaces%5Cqueries%5Cnamespaces%5CGetFullUserProfile%5Ctype-aliases%5CResponse.md)\>\>

### Example

Similarly, by username:
```js
const response = await queries.getFullUserProfile('sal')
const json = await response.json()
const profile = json.data.user
```
