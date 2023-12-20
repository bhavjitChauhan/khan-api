# Namespace: mutations

Mutations

## Namespaces

- [LoginWithPasswordMutation](api/modules/mutations.LoginWithPasswordMutation.md)

## Functions

### loginWithPasswordMutation

▸ **loginWithPasswordMutation**(`variables`, `init?`): `Promise`\<`TypedResponse`\<[`Response`](api/modules/mutations.LoginWithPasswordMutation.md#response)\>\>

Low-level function for making a `loginWithPasswordMutation` request.

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | [`Variables`](api/interfaces/mutations.LoginWithPasswordMutation.Variables.md) |
| `init?` | `RequestInit` |

#### Returns

`Promise`\<`TypedResponse`\<[`Response`](api/modules/mutations.LoginWithPasswordMutation.md#response)\>\>

**`Remarks`**

There are many things that can go wrong with this request and Khan Academy
doesn't provide a great way to handle them. It's recommended to use
Client!Client.login | Client.login instead.

**`Link`**

[Reference](https://khan-api.bhavjit.com/reference/view/19553924/2s8YzQUiXU#77a4642b-3580-4409-b837-1ac82a487c35)

**`See`**

Client!Client.login

**`Example`**

Simple usage without error handling:
```js
const response = await mutations.loginWithPasswordMutation({
  identifier: 'username', // or email
  password: 'password',
})

const cookies = response.headers.get('set-cookie')
```

#### Defined in

[mutations/loginWithPasswordMutation.ts:91](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/mutations/loginWithPasswordMutation.ts#L91)
