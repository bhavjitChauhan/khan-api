> **Data**: `object`

## Type declaration

### user

> **user**: `Pick`\<[`UserSchema`](api%5Cinterfaces%5CUserSchema.md)\<`unknown`, `Pick`\<[`ProfileSchema`](api%5Cinterfaces%5CProfileSchema.md), `"__typename"` \| `"programs"`\>, [`ListProgramsSchema`](api%5Cinterfaces%5CListProgramsSchema.md)\<`Pick`\<[`ProgramSchema`](api%5Cinterfaces%5CProgramSchema.md), `"__typename"` \| `"authorKaid"` \| `"authorNickname"` \| `"deleted"` \| `"displayableSpinoffCount"` \| `"id"` \| `"imagePath"` \| `"key"` \| `"sumVotesIncremented"` \| `"url"`\> & `object`\>\>, `"__typename"` \| `"badgeCounts"` \| `"id"` \| `"isChild"` \| `"kaid"` \| `"profile"` \| `"programs"`\>

### userSummary

> **userSummary**: [`UserSummarySchema`](api%5Cinterfaces%5CUserSummarySchema.md)

Will still be defined even if the user doesn't exist, but all values will be 0

## Source

[src/queries/getProfileWidgets.ts:77](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/queries/getProfileWidgets.ts#L77)
