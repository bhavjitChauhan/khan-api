# Namespace: GetUserHoverCardProfile

[queries](api/modules/queries.md).GetUserHoverCardProfile

## Interfaces

- [Variables](api/interfaces/queries.GetUserHoverCardProfile.Variables.md)

## Type Aliases

### Data

Ƭ **Data**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `user` | `Pick`\<[`UserSchema`](api/interfaces/UserSchema.md)\<`Pick`\<[`AvatarSchema`](api/interfaces/AvatarSchema.md), ``"__typename"`` \| ``"imageSrc"`` \| ``"name"``\>\>, ``"__typename"`` \| ``"actorHasUserScopedPermission"`` \| ``"avatar"`` \| ``"bio"`` \| ``"id"`` \| ``"isActor"`` \| ``"isCoachedByActor"`` \| ``"isPhantom"`` \| ``"kaid"`` \| ``"nickname"`` \| ``"points"`` \| ``"userSummaryIsVisibleToActor"`` \| ``"username"``\> \| ``null`` |

#### Defined in

[src/queries/getUserHoverCardProfile.ts:35](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/queries/getUserHoverCardProfile.ts#L35)

___

### Response

Ƭ **Response**: [`StandardResponse`](api/README.md#standardresponse)\<[`Data`](api/modules/queries.GetUserHoverCardProfile.md#data)\>

#### Defined in

[src/queries/getUserHoverCardProfile.ts:33](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/queries/getUserHoverCardProfile.ts#L33)

## Variables

### query

• `Const` **query**: ``"query getUserHoverCardProfile($kaid: String!) {\n  user(kaid: $kaid) {\n    id\n    nickname\n    username\n    bio\n    avatar {\n      name\n      imageSrc\n      __typename\n    }\n    points\n    isPhantom\n    isActor\n    isCoachedByActor\n    userSummaryIsVisibleToActor\n    actorHasUserScopedPermission(capability: CAN_VIEW_USER_IDENTITY)\n    __typename\n  }\n}"``

#### Defined in

[src/queries/getUserHoverCardProfile.ts:8](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/queries/getUserHoverCardProfile.ts#L8)
