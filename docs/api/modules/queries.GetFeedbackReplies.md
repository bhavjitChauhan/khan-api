# Namespace: GetFeedbackReplies

[queries](api/modules/queries.md).GetFeedbackReplies

## Interfaces

- [Variables](api/interfaces/queries.GetFeedbackReplies.Variables.md)

## Type Aliases

### Data

Ƭ **Data**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `feedbackReplies` | `Pick`\<[`BasicFeedbackSchema`](api/interfaces/BasicFeedbackSchema.md), ``"__typename"`` \| ``"appearsAsDeleted"`` \| ``"author"`` \| ``"content"`` \| ``"date"`` \| ``"definitelyNotSpam"`` \| ``"deleted"`` \| ``"downVoted"`` \| ``"expandKey"`` \| ``"feedbackType"`` \| ``"flaggedBy"`` \| ``"flaggedByUser"`` \| ``"flags"`` \| ``"focusUrl"`` \| ``"fromVideoAuthor"`` \| ``"isLocked"`` \| ``"isPinned"`` \| ``"key"`` \| ``"lowQualityScore"`` \| ``"notifyOnAnswer"`` \| ``"permalink"`` \| ``"qualityKind"`` \| ``"replyCount"`` \| ``"replyExpandKeys"`` \| ``"showLowQualityNotice"`` \| ``"sumVotesIncremented"`` \| ``"upVoted"``\>[] |

#### Defined in

[queries/getFeedbackReplies.ts:57](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/queries/getFeedbackReplies.ts#L57)

___

### Response

Ƭ **Response**: [`StandardResponse`](api/README.md#standardresponse)\<[`Data`](api/modules/queries.GetFeedbackReplies.md#data)\>

#### Defined in

[queries/getFeedbackReplies.ts:55](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/queries/getFeedbackReplies.ts#L55)

## Variables

### query

• `Const` **query**: ``"query getFeedbackReplies($postKey: String!) {\n  feedbackReplies(feedbackKey: $postKey) {\n    isLocked\n    isPinned\n    expandKey\n    appearsAsDeleted\n    author {\n      id\n      kaid\n      nickname\n      avatar {\n        name\n        imageSrc\n        __typename\n      }\n      __typename\n    }\n    content\n    date\n    definitelyNotSpam\n    deleted\n    downVoted\n    expandKey\n    feedbackType\n    flaggedBy\n    flaggedByUser\n    flags\n    focusUrl\n    fromVideoAuthor\n    key\n    lowQualityScore\n    notifyOnAnswer\n    permalink\n    qualityKind\n    replyCount\n    replyExpandKeys\n    showLowQualityNotice\n    sumVotesIncremented\n    upVoted\n    __typename\n  }\n}"``

#### Defined in

[queries/getFeedbackReplies.ts:8](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/queries/getFeedbackReplies.ts#L8)
