## getUserByUsernameOrEmail(variables, init)

> **getUserByUsernameOrEmail**(`variables`, `init`?): `Promise`\<[`TypedResponse`](api%5Cinterfaces%5CTypedResponse.md)\<[`Response`](api%5Cnamespaces%5Cqueries%5Cnamespaces%5CGetUserByUsernameOrEmail%5Ctype-aliases%5CResponse.md)\>\>

Get KAID by username or email.

### Parameters

• **variables**: [`Variables`](api%5Cnamespaces%5Cqueries%5Cnamespaces%5CGetUserByUsernameOrEmail%5Cinterfaces%5CVariables.md)

• **init?**: `RequestInit`

### Returns

`Promise`\<[`TypedResponse`](api%5Cinterfaces%5CTypedResponse.md)\<[`Response`](api%5Cnamespaces%5Cqueries%5Cnamespaces%5CGetUserByUsernameOrEmail%5Ctype-aliases%5CResponse.md)\>\>

### Link

[Reference](https://khan-api.bhavjit.com/reference/view/19553924/2s8YzQUiXU#46e24c10-e98e-4900-bd53-b02d93f8e3c9)

### Examples

Simple usage without error handling:
```js
const response = await queries.getUserByUsernameOrEmail({
  username: 'sal'
})
const json = await response.json()
const kaid = json.data.user?.kaid
```

Similarly, get KAID by email:
```js
const response = await queries.getUserByUsernameOrEmail({
 email: 'sal@khanacademy.org'
})
const json = await response.json()
const kaid = json.data.user?.kaid
```

### Source

[src/queries/getUserByUsernameOrEmail.ts:54](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/queries/getUserByUsernameOrEmail.ts#L54)

## getUserByUsernameOrEmail(username, init)

> **getUserByUsernameOrEmail**(`username`, `init`?): `Promise`\<[`TypedResponse`](api%5Cinterfaces%5CTypedResponse.md)\<[`Response`](api%5Cnamespaces%5Cqueries%5Cnamespaces%5CGetUserByUsernameOrEmail%5Ctype-aliases%5CResponse.md)\>\>

### Parameters

• **username**: `string`

• **init?**: `RequestInit`

### Returns

`Promise`\<[`TypedResponse`](api%5Cinterfaces%5CTypedResponse.md)\<[`Response`](api%5Cnamespaces%5Cqueries%5Cnamespaces%5CGetUserByUsernameOrEmail%5Ctype-aliases%5CResponse.md)\>\>

### Example

Alternative usage by username:
```js
const response = await queries.getUserByUsernameOrEmail('sal')
const json = await response.json()
const kaid = json.data.user?.kaid
```

### Source

[src/queries/getUserByUsernameOrEmail.ts:67](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/queries/getUserByUsernameOrEmail.ts#L67)

## getUserByUsernameOrEmail(email, init)

> **getUserByUsernameOrEmail**(`email`, `init`?): `Promise`\<[`TypedResponse`](api%5Cinterfaces%5CTypedResponse.md)\<[`Response`](api%5Cnamespaces%5Cqueries%5Cnamespaces%5CGetUserByUsernameOrEmail%5Ctype-aliases%5CResponse.md)\>\>

### Parameters

• **email**: \`$\{string\}@$\{string\}.$\{string\}\`

• **init?**: `RequestInit`

### Returns

`Promise`\<[`TypedResponse`](api%5Cinterfaces%5CTypedResponse.md)\<[`Response`](api%5Cnamespaces%5Cqueries%5Cnamespaces%5CGetUserByUsernameOrEmail%5Ctype-aliases%5CResponse.md)\>\>

### Example

Similarly, by email:
```js
const response = await queries.getUserByUsernameOrEmail('sal@khanacademy.org')
const json = await response.json()
const kaid = json.data.user?.kaid
```

### Source

[src/queries/getUserByUsernameOrEmail.ts:80](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/queries/getUserByUsernameOrEmail.ts#L80)
