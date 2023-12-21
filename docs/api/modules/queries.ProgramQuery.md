# Namespace: ProgramQuery

[queries](api/modules/queries.md).ProgramQuery

## Interfaces

- [Variables](api/interfaces/queries.ProgramQuery.Variables.md)

## Type Aliases

### Data

Ƭ **Data**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `programById` | `Pick`\<[`ProgramSchema`](api/interfaces/ProgramSchema.md)\<`Pick`\<[`UserSchema`](api/interfaces/UserSchema.md), ``"__typename"`` \| ``"id"`` \| ``"kaid"`` \| ``"nickname"`` \| ``"profile"`` \| ``"profileRoot"``\>\>, ``"__typename"`` \| ``"byChild"`` \| ``"category"`` \| ``"created"`` \| ``"creatorProfile"`` \| ``"deleted"`` \| ``"description"`` \| ``"docsUrlPath"`` \| ``"flaggedBy"`` \| ``"flaggedByUser"`` \| ``"flags"`` \| ``"height"`` \| ``"hideFromHotlist"`` \| ``"id"`` \| ``"imagePath"`` \| ``"isOwner"`` \| ``"isProjectOrFork"`` \| ``"kaid"`` \| ``"key"`` \| ``"newUrlPath"`` \| ``"originScratchpad"`` \| ``"restrictPosting"`` \| ``"revision"`` \| ``"slug"`` \| ``"spinoffCount"`` \| ``"sumVotesIncremented"`` \| ``"title"`` \| ``"topic"`` \| ``"translatedTitle"`` \| ``"upVoted"`` \| ``"url"`` \| ``"userAuthoredContentType"`` \| ``"width"``\> \| ``null`` |

#### Defined in

[src/queries/programQuery.ts:81](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/queries/programQuery.ts#L81)

___

### Response

Ƭ **Response**: [`StandardResponse`](api/README.md#standardresponse)\<[`Data`](api/modules/queries.ProgramQuery.md#data)\>

#### Defined in

[src/queries/programQuery.ts:79](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/queries/programQuery.ts#L79)

## Variables

### query

• `Const` **query**: ``"query programQuery($programId: String!) {\n  programById(id: $programId) {\n    byChild\n    category\n    created\n    creatorProfile: author {\n      id\n      nickname\n      profileRoot\n      profile {\n        accessLevel\n        __typename\n      }\n      __typename\n    }\n    deleted\n    description\n    spinoffCount: displayableSpinoffCount\n    docsUrlPath\n    flags\n    flaggedBy: flaggedByKaids\n    flaggedByUser: isFlaggedByCurrentUser\n    height\n    hideFromHotlist\n    id\n    imagePath\n    isProjectOrFork: originIsProject\n    isOwner\n    kaid: authorKaid\n    key\n    newUrlPath\n    originScratchpad: originProgram {\n      deleted\n      translatedTitle\n      url\n      __typename\n    }\n    restrictPosting\n    revision: latestRevision {\n      id\n      code\n      configVersion\n      created\n      editorType\n      folds\n      __typename\n    }\n    slug\n    sumVotesIncremented\n    title\n    topic: parentCurationNode {\n      id\n      nodeSlug: slug\n      relativeUrl\n      slug\n      translatedTitle\n      __typename\n    }\n    translatedTitle\n    url\n    userAuthoredContentType\n    upVoted\n    width\n    __typename\n  }\n}"``

#### Defined in

[src/queries/programQuery.ts:8](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/queries/programQuery.ts#L8)
