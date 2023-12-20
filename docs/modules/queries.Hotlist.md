# Namespace: Hotlist

[queries](queries.md).Hotlist

## Interfaces

- [Variables](../interfaces/queries.Hotlist.Variables.md)

## Type Aliases

### Data

Ƭ **Data**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `listTopPrograms` | [`ListProgramsSchema`](../interfaces/ListProgramsSchema.md)\<`Pick`\<[`ProgramSchema`](../interfaces/ProgramSchema.md), ``"id"`` \| ``"key"`` \| ``"authorKaid"`` \| ``"authorNickname"`` \| ``"displayableSpinoffCount"`` \| ``"imagePath"`` \| ``"sumVotesIncremented"`` \| ``"translatedTitle"`` \| ``"url"``\>\> |

#### Defined in

[queries/hotlist.ts:46](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/queries/hotlist.ts#L46)

___

### Response

Ƭ **Response**: [`StandardResponse`](../README.md#standardresponse)\<[`Data`](queries.Hotlist.md#data)\>

#### Defined in

[queries/hotlist.ts:44](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/queries/hotlist.ts#L44)

## Variables

### query

• `Const` **query**: ``"query hotlist($curationNodeId: String, $onlyOfficialProjectSpinoffs: Boolean!, $sort: ListProgramSortOrder, $pageInfo: ListProgramsPageInfo) {\n  listTopPrograms(\n    curationNodeId: $curationNodeId\n    onlyOfficialProjectSpinoffs: $onlyOfficialProjectSpinoffs\n    sort: $sort\n    pageInfo: $pageInfo\n  ) {\n    complete\n    cursor\n    programs {\n      id\n      key\n      authorKaid\n      authorNickname\n      displayableSpinoffCount\n      imagePath\n      sumVotesIncremented\n      translatedTitle: title\n      url\n      __typename\n    }\n    __typename\n  }\n}"``

#### Defined in

[queries/hotlist.ts:8](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/queries/hotlist.ts#L8)
