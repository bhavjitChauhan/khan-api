# Namespace: GetFeedbackRepliesPage

[queries](api/modules/queries.md).GetFeedbackRepliesPage

## Interfaces

- [Variables](api/interfaces/queries.GetFeedbackRepliesPage.Variables.md)

## Type Aliases

### Data

Ƭ **Data**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `feedbackRepliesPaginated` | [`RepliesSchema`](api/interfaces/RepliesSchema.md) |

#### Defined in

[src/queries/getFeedbackRepliesPage.ts:65](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/queries/getFeedbackRepliesPage.ts#L65)

___

### Response

Ƭ **Response**: [`StandardResponse`](api/README.md#standardresponse)\<[`Data`](api/modules/queries.GetFeedbackRepliesPage.md#data)\>

#### Defined in

[src/queries/getFeedbackRepliesPage.ts:63](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/queries/getFeedbackRepliesPage.ts#L63)

## Variables

### query

• `Const` **query**: ``"query getFeedbackRepliesPage($postKey: String!, $cursor: String, $limit: Int!) {\n  feedbackRepliesPaginated(feedbackKey: $postKey, cursor: $cursor, limit: $limit) {\n    cursor\n    isComplete\n    feedback {\n      isLocked\n      isPinned\n      expandKey\n      appearsAsDeleted\n      author {\n        id\n        kaid\n        nickname\n        avatar {\n          name\n          imageSrc\n          __typename\n        }\n        __typename\n      }\n      content\n      date\n      definitelyNotSpam\n      deleted\n      downVoted\n      expandKey\n      feedbackType\n      flaggedBy\n      flaggedByUser\n      flags\n      focusUrl\n      fromVideoAuthor\n      key\n      lowQualityScore\n      notifyOnAnswer\n      permalink\n      qualityKind\n      replyCount\n      replyExpandKeys\n      showLowQualityNotice\n      sumVotesIncremented\n      upVoted\n      __typename\n    }\n    __typename\n  }\n}"``

#### Defined in

[src/queries/getFeedbackRepliesPage.ts:8](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/queries/getFeedbackRepliesPage.ts#L8)
