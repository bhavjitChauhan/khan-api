# Namespace: Hotlist

[queries](api/modules/queries.md).Hotlist

## Interfaces

- [Variables](api/interfaces/queries.Hotlist.Variables.md)

## Type Aliases

### Data

Ƭ **Data**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `listTopPrograms` | [`ListProgramsSchema`](api/interfaces/ListProgramsSchema.md)\<`Pick`\<[`ProgramSchema`](api/interfaces/ProgramSchema.md), ``"id"`` \| ``"key"`` \| ``"authorKaid"`` \| ``"authorNickname"`` \| ``"displayableSpinoffCount"`` \| ``"imagePath"`` \| ``"sumVotesIncremented"`` \| ``"translatedTitle"`` \| ``"url"``\>\> |

#### Defined in

[src/queries/hotlist.ts:46](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/queries/hotlist.ts#L46)

___

### Response

Ƭ **Response**: [`StandardResponse`](api/README.md#standardresponse)\<[`Data`](api/modules/queries.Hotlist.md#data)\>

#### Defined in

[src/queries/hotlist.ts:44](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/queries/hotlist.ts#L44)

## Variables

### query

• `Const` **query**: ``"query hotlist($curationNodeId: String, $onlyOfficialProjectSpinoffs: Boolean!, $sort: ListProgramSortOrder, $pageInfo: ListProgramsPageInfo) {\n  listTopPrograms(\n    curationNodeId: $curationNodeId\n    onlyOfficialProjectSpinoffs: $onlyOfficialProjectSpinoffs\n    sort: $sort\n    pageInfo: $pageInfo\n  ) {\n    complete\n    cursor\n    programs {\n      id\n      key\n      authorKaid\n      authorNickname\n      displayableSpinoffCount\n      imagePath\n      sumVotesIncremented\n      translatedTitle: title\n      url\n      __typename\n    }\n    __typename\n  }\n}"``

#### Defined in

[src/queries/hotlist.ts:8](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/queries/hotlist.ts#L8)
