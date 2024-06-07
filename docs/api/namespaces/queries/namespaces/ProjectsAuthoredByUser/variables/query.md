> `const` **query**: "query projectsAuthoredByUser($kaid: String, $pageInfo: ListProgramsPageInfo, $sort: ListProgramSortOrder) \{\n  user(kaid: $kaid) \{\n    id\n    programs(pageInfo: $pageInfo, sort: $sort) \{\n      complete\n      cursor\n      programs \{\n        id\n        key\n        authorKaid\n        authorNickname\n        displayableSpinoffCount\n        imagePath\n        sumVotesIncremented\n        translatedTitle: title\n        url\n        \_\_typename\n      \}\n      \_\_typename\n    \}\n    \_\_typename\n  \}\n\}"

## Source

[src/queries/projectsAuthoredByUser.ts:9](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/queries/projectsAuthoredByUser.ts#L9)
