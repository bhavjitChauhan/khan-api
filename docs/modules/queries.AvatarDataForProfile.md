# Namespace: AvatarDataForProfile

[queries](queries.md).AvatarDataForProfile

## Interfaces

- [Variables](../interfaces/queries.AvatarDataForProfile.Variables.md)

## Type Aliases

### Data

Ƭ **Data**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `user` | `Pick`\<[`UserSchema`](../interfaces/UserSchema.md)\<`Pick`\<[`AvatarSchema`](../interfaces/AvatarSchema.md), ``"__typename"`` \| ``"imageSrc"`` \| ``"name"``\>\>, ``"__typename"`` \| ``"avatar"`` \| ``"id"`` \| ``"kaid"``\> \| ``null`` |

#### Defined in

[queries/avatarDataForProfile.ts:26](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/queries/avatarDataForProfile.ts#L26)

___

### Response

Ƭ **Response**: [`StandardResponse`](../README.md#standardresponse)\<[`Data`](queries.AvatarDataForProfile.md#data)\>

#### Defined in

[queries/avatarDataForProfile.ts:24](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/queries/avatarDataForProfile.ts#L24)

## Variables

### query

• `Const` **query**: ``"query avatarDataForProfile($kaid: String!) {\n  user(kaid: $kaid) {\n    id\n    avatar {\n      name\n      imageSrc\n      __typename\n    }\n    __typename\n  }\n}"``

#### Defined in

[queries/avatarDataForProfile.ts:8](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/queries/avatarDataForProfile.ts#L8)
