# Namespace: GetUserByUsernameOrEmail

[queries](api/modules/queries.md).GetUserByUsernameOrEmail

## Interfaces

- [Variables](api/interfaces/queries.GetUserByUsernameOrEmail.Variables.md)

## Type Aliases

### Data

Ƭ **Data**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `user` | `Pick`\<[`UserSchema`](api/interfaces/UserSchema.md), ``"__typename"`` \| ``"id"`` \| ``"kaid"``\> \| ``null`` |

#### Defined in

[src/queries/getUserByUsernameOrEmail.ts:25](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/queries/getUserByUsernameOrEmail.ts#L25)

___

### Response

Ƭ **Response**: [`StandardResponse`](api/README.md#standardresponse)\<[`Data`](api/modules/queries.GetUserByUsernameOrEmail.md#data)\>

#### Defined in

[src/queries/getUserByUsernameOrEmail.ts:23](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/queries/getUserByUsernameOrEmail.ts#L23)

## Variables

### query

• `Const` **query**: ``"query getUserByUsernameOrEmail($username: String, $email: String) {\n  user(username: $username, email: $email) {\n    id\n    kaid\n    __typename\n  }\n}"``

#### Defined in

[src/queries/getUserByUsernameOrEmail.ts:9](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/queries/getUserByUsernameOrEmail.ts#L9)
