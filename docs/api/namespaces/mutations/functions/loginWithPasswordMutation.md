> **loginWithPasswordMutation**(`variables`, `init`?): `Promise`\<[`TypedResponse`](api/interfaces%5CTypedResponse.md)\<[`Response`](api/namespaces%5Cmutations%5Cnamespaces%5CLoginWithPasswordMutation%5Ctype-aliases%5CResponse.md)\>\>

Defined in: [src/mutations/loginWithPasswordMutation.ts:88](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/mutations/loginWithPasswordMutation.ts#L88)

Low-level function for making a `loginWithPasswordMutation` request.

## Parameters

### variables

[`Variables`](api/namespaces%5Cmutations%5Cnamespaces%5CLoginWithPasswordMutation%5Cinterfaces%5CVariables.md)

### init?

`RequestInit`

## Returns

`Promise`\<[`TypedResponse`](api/interfaces%5CTypedResponse.md)\<[`Response`](api/namespaces%5Cmutations%5Cnamespaces%5CLoginWithPasswordMutation%5Ctype-aliases%5CResponse.md)\>\>

## Remarks

There are many things that can go wrong with this request and Khan Academy
doesn't provide a great way to handle them. It's recommended to use
[Client.login](api/classes%5CClient.md#login) instead.

## Link

[Reference](https://khan-api.bhavjit.com/reference/view/19553924/2s8YzQUiXU#77a4642b-3580-4409-b837-1ac82a487c35)

## See

[Client.login](api/classes%5CClient.md#login)

## Example

Simple usage without error handling:
```js
const response = await mutations.loginWithPasswordMutation({
  identifier: 'username', // or email
  password: 'password',
})

const cookies = response.headers.get('set-cookie')
```
