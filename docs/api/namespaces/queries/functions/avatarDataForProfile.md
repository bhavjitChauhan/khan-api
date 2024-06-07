## avatarDataForProfile(variables, init)

> **avatarDataForProfile**(`variables`, `init`?): `Promise`\<[`TypedResponse`](api%5Cinterfaces%5CTypedResponse.md)\<[`Response`](api%5Cnamespaces%5Cqueries%5Cnamespaces%5CAvatarDataForProfile%5Ctype-aliases%5CResponse.md)\>\>

Low-level function for making a `avatarDataForProfile` request.

### Parameters

• **variables**: [`Variables`](api%5Cnamespaces%5Cqueries%5Cnamespaces%5CAvatarDataForProfile%5Cinterfaces%5CVariables.md)

• **init?**: `RequestInit`

### Returns

`Promise`\<[`TypedResponse`](api%5Cinterfaces%5CTypedResponse.md)\<[`Response`](api%5Cnamespaces%5Cqueries%5Cnamespaces%5CAvatarDataForProfile%5Ctype-aliases%5CResponse.md)\>\>

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

### Source

[src/queries/avatarDataForProfile.ts:50](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/queries/avatarDataForProfile.ts#L50)

## avatarDataForProfile(kaid, init)

> **avatarDataForProfile**(`kaid`, `init`?): `Promise`\<[`TypedResponse`](api%5Cinterfaces%5CTypedResponse.md)\<[`Response`](api%5Cnamespaces%5Cqueries%5Cnamespaces%5CAvatarDataForProfile%5Ctype-aliases%5CResponse.md)\>\>

### Parameters

• **kaid**: \`kaid\_$\{number\}\`

• **init?**: `RequestInit`

### Returns

`Promise`\<[`TypedResponse`](api%5Cinterfaces%5CTypedResponse.md)\<[`Response`](api%5Cnamespaces%5Cqueries%5Cnamespaces%5CAvatarDataForProfile%5Ctype-aliases%5CResponse.md)\>\>

### Example

Alternative usage:
```js
const response = await queries.avatarDataForProfile('kaid_326465577260382527912172')
const json = await response.json()
const profile = json.data.user
const avatar = profile.avatar
```

### Source

[src/queries/avatarDataForProfile.ts:64](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/queries/avatarDataForProfile.ts#L64)
