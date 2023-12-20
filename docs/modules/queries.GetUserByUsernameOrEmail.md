# Namespace: GetUserByUsernameOrEmail

[queries](queries.md).GetUserByUsernameOrEmail

## Interfaces

- [Variables](../interfaces/queries.GetUserByUsernameOrEmail.Variables.md)

## Type Aliases

### Data

Ƭ **Data**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `user` | `Pick`\<[`UserSchema`](../interfaces/UserSchema.md), ``"__typename"`` \| ``"id"`` \| ``"kaid"``\> \| ``null`` |

#### Defined in

[queries/getUserByUsernameOrEmail.ts:25](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/queries/getUserByUsernameOrEmail.ts#L25)

___

### Response

Ƭ **Response**: [`StandardResponse`](../README.md#standardresponse)\<[`Data`](queries.GetUserByUsernameOrEmail.md#data)\>

#### Defined in

[queries/getUserByUsernameOrEmail.ts:23](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/queries/getUserByUsernameOrEmail.ts#L23)

## Variables

### query

• `Const` **query**: ``"query getUserByUsernameOrEmail($username: String, $email: String) {\n  user(username: $username, email: $email) {\n    id\n    kaid\n    __typename\n  }\n}"``

#### Defined in

[queries/getUserByUsernameOrEmail.ts:9](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/queries/getUserByUsernameOrEmail.ts#L9)
