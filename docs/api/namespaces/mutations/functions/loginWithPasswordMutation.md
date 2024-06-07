> **loginWithPasswordMutation**(`variables`, `init`?): `Promise`\<[`TypedResponse`](api%5Cinterfaces%5CTypedResponse.md)\<[`Response`](api%5Cnamespaces%5Cmutations%5Cnamespaces%5CLoginWithPasswordMutation%5Ctype-aliases%5CResponse.md)\>\>

Low-level function for making a `loginWithPasswordMutation` request.

## Parameters

• **variables**: [`Variables`](api%5Cnamespaces%5Cmutations%5Cnamespaces%5CLoginWithPasswordMutation%5Cinterfaces%5CVariables.md)

• **init?**: `RequestInit`

## Returns

`Promise`\<[`TypedResponse`](api%5Cinterfaces%5CTypedResponse.md)\<[`Response`](api%5Cnamespaces%5Cmutations%5Cnamespaces%5CLoginWithPasswordMutation%5Ctype-aliases%5CResponse.md)\>\>

## Remarks

There are many things that can go wrong with this request and Khan Academy
doesn't provide a great way to handle them. It's recommended to use
[Client.login](api%5Cclasses%5CClient.md#login) instead.

## Link

[Reference](https://khan-api.bhavjit.com/reference/view/19553924/2s8YzQUiXU#77a4642b-3580-4409-b837-1ac82a487c35)

## See

[Client.login](api%5Cclasses%5CClient.md#login)

## Example

Simple usage without error handling:
```js
const response = await mutations.loginWithPasswordMutation({
  identifier: 'username', // or email
  password: 'password',
})

const cookies = response.headers.get('set-cookie')
```

## Source

[src/mutations/loginWithPasswordMutation.ts:90](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/mutations/loginWithPasswordMutation.ts#L90)
