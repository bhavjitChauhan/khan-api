# Namespace: GetProfileWidgets

[queries](api/modules/queries.md).GetProfileWidgets

## Interfaces

- [Variables](api/interfaces/queries.GetProfileWidgets.Variables.md)

## Type Aliases

### Data

Ƭ **Data**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `user` | `Pick`\<[`UserSchema`](api/interfaces/UserSchema.md)\<`unknown`, `Pick`\<[`ProfileSchema`](api/interfaces/ProfileSchema.md), ``"__typename"`` \| ``"programs"``\>, [`ListProgramsSchema`](api/interfaces/ListProgramsSchema.md)\<`Pick`\<[`ProgramSchema`](api/interfaces/ProgramSchema.md), ``"__typename"`` \| ``"authorKaid"`` \| ``"authorNickname"`` \| ``"deleted"`` \| ``"displayableSpinoffCount"`` \| ``"id"`` \| ``"imagePath"`` \| ``"key"`` \| ``"sumVotesIncremented"`` \| ``"url"``\> & \{ `translatedTitle`: [`ProgramSchema`](api/interfaces/ProgramSchema.md)[``"title"``]  }\>\>, ``"__typename"`` \| ``"badgeCounts"`` \| ``"id"`` \| ``"isChild"`` \| ``"kaid"`` \| ``"profile"`` \| ``"programs"``\> | - |
| `userSummary` | [`UserSummarySchema`](api/interfaces/UserSummarySchema.md) | Will still be defined even if the user doesn't exist, but all values will be 0 |

#### Defined in

[queries/getProfileWidgets.ts:77](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/queries/getProfileWidgets.ts#L77)

___

### Response

Ƭ **Response**: [`StandardResponse`](api/README.md#standardresponse)\<[`Data`](api/modules/queries.GetProfileWidgets.md#data)\>

#### Defined in

[queries/getProfileWidgets.ts:75](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/queries/getProfileWidgets.ts#L75)

## Variables

### query

• `Const` **query**: ``"query getProfileWidgets($kaid: String!) {\n  user(kaid: $kaid) {\n    id\n    kaid\n    badgeCounts\n    isChild\n    profile {\n      programs {\n        id\n        authorKaid\n        authorNickname\n        deleted\n        displayableSpinoffCount\n        imagePath\n        key\n        sumVotesIncremented\n        translatedTitle: title\n        url\n        __typename\n      }\n      __typename\n    }\n    programs(sort: TOP, pageInfo: {itemsPerPage: 2}) {\n      programs {\n        id\n        authorKaid\n        authorNickname\n        deleted\n        displayableSpinoffCount\n        imagePath\n        key\n        sumVotesIncremented\n        translatedTitle: title\n        url\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  userSummary(kaid: $kaid) {\n    statistics {\n      answers\n      comments\n      flags\n      projectanswers\n      projectquestions\n      questions\n      replies\n      votes\n      __typename\n    }\n    __typename\n  }\n}"``

#### Defined in

[queries/getProfileWidgets.ts:15](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/queries/getProfileWidgets.ts#L15)
