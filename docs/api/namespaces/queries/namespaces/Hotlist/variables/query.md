> `const` **query**: "query hotlist($curationNodeId: String, $onlyOfficialProjectSpinoffs: Boolean!, $sort: ListProgramSortOrder, $pageInfo: ListProgramsPageInfo, $userAuthoredContentTypes: \[UserAuthoredContentType!\]) \{\n  listTopPrograms(\n    curationNodeId: $curationNodeId\n    onlyOfficialProjectSpinoffs: $onlyOfficialProjectSpinoffs\n    sort: $sort\n    pageInfo: $pageInfo\n    userAuthoredContentTypes: $userAuthoredContentTypes\n  ) \{\n    complete\n    cursor\n    programs \{\n      id\n      key\n      authorKaid\n      authorNickname\n      displayableSpinoffCount\n      imagePath\n      sumVotesIncremented\n      translatedTitle: title\n      url\n      userAuthoredContentType\n      \_\_typename\n    \}\n    \_\_typename\n  \}\n\}"

## Source

[src/queries/hotlist.ts:8](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/queries/hotlist.ts#L8)
