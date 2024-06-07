## getUserHoverCardProfile(variables, init)

> **getUserHoverCardProfile**(`variables`, `init`?): `Promise`\<[`TypedResponse`](api%5Cinterfaces%5CTypedResponse.md)\<[`Response`](api%5Cnamespaces%5Cqueries%5Cnamespaces%5CGetUserHoverCardProfile%5Ctype-aliases%5CResponse.md)\>\>

Low-level function for making a `getUserHoverCardProfile` request.

### Parameters

• **variables**: [`Variables`](api%5Cnamespaces%5Cqueries%5Cnamespaces%5CGetUserHoverCardProfile%5Cinterfaces%5CVariables.md)

• **init?**: `RequestInit`

### Returns

`Promise`\<[`TypedResponse`](api%5Cinterfaces%5CTypedResponse.md)\<[`Response`](api%5Cnamespaces%5Cqueries%5Cnamespaces%5CGetUserHoverCardProfile%5Ctype-aliases%5CResponse.md)\>\>

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

### Source

[src/queries/getUserHoverCardProfile.ts:70](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/queries/getUserHoverCardProfile.ts#L70)

## getUserHoverCardProfile(kaid, init)

> **getUserHoverCardProfile**(`kaid`, `init`?): `Promise`\<[`TypedResponse`](api%5Cinterfaces%5CTypedResponse.md)\<[`Response`](api%5Cnamespaces%5Cqueries%5Cnamespaces%5CGetUserHoverCardProfile%5Ctype-aliases%5CResponse.md)\>\>

### Parameters

• **kaid**: \`kaid\_$\{number\}\`

• **init?**: `RequestInit`

### Returns

`Promise`\<[`TypedResponse`](api%5Cinterfaces%5CTypedResponse.md)\<[`Response`](api%5Cnamespaces%5Cqueries%5Cnamespaces%5CGetUserHoverCardProfile%5Ctype-aliases%5CResponse.md)\>\>

### Example

Alternative usage:
```js
const response = await queries.getUserHoverCardProfile('kaid_326465577260382527912172')
const json = await response.json()
const profile = json.data.user
```

### Source

[src/queries/getUserHoverCardProfile.ts:83](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/queries/getUserHoverCardProfile.ts#L83)
