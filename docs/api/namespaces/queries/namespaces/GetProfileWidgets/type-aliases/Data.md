> **Data**: `object`

Defined in: [src/queries/getProfileWidgets.ts:77](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/queries/getProfileWidgets.ts#L77)

## Type declaration

### user

> **user**: `Pick`\<[`UserSchema`](api/interfaces%5CUserSchema.md)\<`unknown`, `Pick`\<[`ProfileSchema`](api/interfaces%5CProfileSchema.md), `"__typename"` \| `"programs"`\>, [`ListProgramsSchema`](api/interfaces%5CListProgramsSchema.md)\<`Pick`\<[`ProgramSchema`](api/interfaces%5CProgramSchema.md), `"__typename"` \| `"authorKaid"` \| `"authorNickname"` \| `"deleted"` \| `"displayableSpinoffCount"` \| `"id"` \| `"imagePath"` \| `"key"` \| `"sumVotesIncremented"` \| `"url"`\> & `object`\>\>, `"__typename"` \| `"badgeCounts"` \| `"id"` \| `"isChild"` \| `"kaid"` \| `"profile"` \| `"programs"`\>

### userSummary

> **userSummary**: [`UserSummarySchema`](api/interfaces%5CUserSummarySchema.md)

Will still be defined even if the user doesn't exist, but all values will be 0
