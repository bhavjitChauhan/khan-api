# Namespace: FeedbackQuery

[queries](api/modules/queries.md).FeedbackQuery

## Interfaces

- [Variables](api/interfaces/queries.FeedbackQuery.Variables.md)

## Type Aliases

### Data

Ƭ **Data**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `feedback` | [`FeedbackForFocusSchema`](api/interfaces/FeedbackForFocusSchema.md) |

#### Defined in

[src/queries/feedbackQuery.ts:216](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/queries/feedbackQuery.ts#L216)

___

### Response

Ƭ **Response**: [`StandardResponse`](api/README.md#standardresponse)\<[`Data`](api/modules/queries.FeedbackQuery.md#data)\>

#### Defined in

[src/queries/feedbackQuery.ts:214](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/queries/feedbackQuery.ts#L214)

## Variables

### query

• `Const` **query**: ``"query feedbackQuery($topicId: String!, $focusKind: String!, $cursor: String, $limit: Int, $feedbackType: FeedbackType!, $currentSort: Int, $qaExpandKey: String) {\n  feedback(\n    focusId: $topicId\n    cursor: $cursor\n    limit: $limit\n    feedbackType: $feedbackType\n    focusKind: $focusKind\n    sort: $currentSort\n    qaExpandKey: $qaExpandKey\n    answersLimit: 1\n  ) {\n    feedback {\n      isLocked\n      isPinned\n      replyCount\n      appearsAsDeleted\n      author {\n        id\n        kaid\n        nickname\n        avatar {\n          name\n          imageSrc\n          __typename\n        }\n        __typename\n      }\n      badges {\n        name\n        icons {\n          smallUrl\n          __typename\n        }\n        description\n        __typename\n      }\n      content\n      date\n      definitelyNotSpam\n      deleted\n      downVoted\n      expandKey\n      feedbackType\n      flaggedBy\n      flaggedByUser\n      flags\n      focusUrl\n      focus {\n        kind\n        id\n        translatedTitle\n        relativeUrl\n        __typename\n      }\n      fromVideoAuthor\n      key\n      lowQualityScore\n      notifyOnAnswer\n      permalink\n      qualityKind\n      replyCount\n      replyExpandKeys\n      showLowQualityNotice\n      sumVotesIncremented\n      upVoted\n      ... on QuestionFeedback {\n        hasAnswered\n        answers {\n          isLocked\n          isPinned\n          replyCount\n          appearsAsDeleted\n          author {\n            id\n            kaid\n            nickname\n            avatar {\n              name\n              imageSrc\n              __typename\n            }\n            __typename\n          }\n          badges {\n            name\n            icons {\n              smallUrl\n              __typename\n            }\n            description\n            __typename\n          }\n          content\n          date\n          definitelyNotSpam\n          deleted\n          downVoted\n          expandKey\n          feedbackType\n          flaggedBy\n          flaggedByUser\n          flags\n          focusUrl\n          focus {\n            kind\n            id\n            translatedTitle\n            relativeUrl\n            __typename\n          }\n          fromVideoAuthor\n          key\n          lowQualityScore\n          notifyOnAnswer\n          permalink\n          qualityKind\n          replyCount\n          replyExpandKeys\n          showLowQualityNotice\n          sumVotesIncremented\n          upVoted\n          __typename\n        }\n        isOld\n        answerCount\n        __typename\n      }\n      ... on AnswerFeedback {\n        question {\n          isLocked\n          isPinned\n          replyCount\n          appearsAsDeleted\n          author {\n            id\n            kaid\n            nickname\n            avatar {\n              name\n              imageSrc\n              __typename\n            }\n            __typename\n          }\n          badges {\n            name\n            icons {\n              smallUrl\n              __typename\n            }\n            description\n            __typename\n          }\n          content\n          date\n          definitelyNotSpam\n          deleted\n          downVoted\n          expandKey\n          feedbackType\n          flaggedBy\n          flaggedByUser\n          flags\n          focusUrl\n          focus {\n            kind\n            id\n            translatedTitle\n            relativeUrl\n            __typename\n          }\n          fromVideoAuthor\n          key\n          lowQualityScore\n          notifyOnAnswer\n          permalink\n          qualityKind\n          replyCount\n          replyExpandKeys\n          showLowQualityNotice\n          sumVotesIncremented\n          upVoted\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    cursor\n    isComplete\n    sortedByDate\n    __typename\n  }\n}"``

#### Defined in

[src/queries/feedbackQuery.ts:8](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/queries/feedbackQuery.ts#L8)
