# Namespace: ProjectsAuthoredByUser

[queries](api/modules/queries.md).ProjectsAuthoredByUser

## Interfaces

- [Variables](api/interfaces/queries.ProjectsAuthoredByUser.Variables.md)

## Type Aliases

### Data

Ƭ **Data**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `user` | `Pick`\<[`UserSchema`](api/interfaces/UserSchema.md)\<`unknown`, `unknown`, [`ListProgramsSchema`](api/interfaces/ListProgramsSchema.md)\<`Pick`\<[`ProgramSchema`](api/interfaces/ProgramSchema.md), ``"__typename"`` \| ``"authorKaid"`` \| ``"authorNickname"`` \| ``"displayableSpinoffCount"`` \| ``"id"`` \| ``"imagePath"`` \| ``"key"`` \| ``"sumVotesIncremented"`` \| ``"url"``\> & \{ `translatedTitle`: [`ProgramSchema`](api/interfaces/ProgramSchema.md)[``"title"``]  }\>\>, ``"__typename"`` \| ``"id"`` \| ``"kaid"`` \| ``"programs"``\> |

#### Defined in

[src/queries/projectsAuthoredByUser.ts:45](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/queries/projectsAuthoredByUser.ts#L45)

___

### Response

Ƭ **Response**: [`StandardResponse`](api/README.md#standardresponse)\<[`Data`](api/modules/queries.ProjectsAuthoredByUser.md#data)\>

#### Defined in

[src/queries/projectsAuthoredByUser.ts:43](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/queries/projectsAuthoredByUser.ts#L43)

## Variables

### query

• `Const` **query**: ``"query projectsAuthoredByUser($kaid: String, $pageInfo: ListProgramsPageInfo, $sort: ListProgramSortOrder) {\n  user(kaid: $kaid) {\n    id\n    programs(pageInfo: $pageInfo, sort: $sort) {\n      complete\n      cursor\n      programs {\n        id\n        key\n        authorKaid\n        authorNickname\n        displayableSpinoffCount\n        imagePath\n        sumVotesIncremented\n        translatedTitle: title\n        url\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}"``

#### Defined in

[src/queries/projectsAuthoredByUser.ts:9](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/queries/projectsAuthoredByUser.ts#L9)
