> `const` **query**: "query getFeedbackReplies($postKey: String!) \{\n  feedbackReplies(feedbackKey: $postKey) \{\n    isLocked\n    isPinned\n    expandKey\n    appearsAsDeleted\n    author \{\n      id\n      kaid\n      nickname\n      avatar \{\n        name\n        imageSrc\n        \_\_typename\n      \}\n      \_\_typename\n    \}\n    content\n    date\n    definitelyNotSpam\n    deleted\n    downVoted\n    expandKey\n    feedbackType\n    flaggedBy\n    flaggedByUser\n    flags\n    focusUrl\n    fromVideoAuthor\n    key\n    lowQualityScore\n    notifyOnAnswer\n    permalink\n    qualityKind\n    replyCount\n    replyExpandKeys\n    showLowQualityNotice\n    sumVotesIncremented\n    upVoted\n    \_\_typename\n  \}\n\}"

## Source

[src/queries/getFeedbackReplies.ts:8](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/queries/getFeedbackReplies.ts#L8)
