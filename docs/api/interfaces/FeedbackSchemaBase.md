Defined in: [src/types/schema.ts:290](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L290)

## Extended by

- [`BasicFeedbackSchema`](api/interfaces%5CBasicFeedbackSchema.md)
- [`QuestionFeedbackSchema`](api/interfaces%5CQuestionFeedbackSchema.md)
- [`AnswerFeedbackSchema`](api/interfaces%5CAnswerFeedbackSchema.md)

## Properties

### \_\_typename

> **\_\_typename**: [`FeedbackTypename`](api/enumerations%5CFeedbackTypename.md)

Defined in: [src/types/schema.ts:291](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L291)

***

### appearsAsDeleted

> **appearsAsDeleted**: `boolean`

Defined in: [src/types/schema.ts:292](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L292)

***

### author

> **author**: `Pick`\<[`UserSchema`](api/interfaces%5CUserSchema.md)\<`Pick`\<[`AvatarSchema`](api/interfaces%5CAvatarSchema.md), `"__typename"` \| `"imageSrc"` \| `"name"`\>, [`ProfileSchema`](api/interfaces%5CProfileSchema.md), [`ListProgramsSchema`](api/interfaces%5CListProgramsSchema.md)\<`unknown`\>\>, `"id"` \| `"__typename"` \| `"kaid"` \| `"nickname"` \| `"avatar"`\>

Defined in: [src/types/schema.ts:293](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L293)

***

### badges

> **badges**: `unknown`

Defined in: [src/types/schema.ts:300](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L300)

Always `null`

***

### content

> **content**: `string`

Defined in: [src/types/schema.ts:301](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L301)

***

### date

> **date**: `string`

Defined in: [src/types/schema.ts:302](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L302)

***

### definitelyNotSpam

> **definitelyNotSpam**: `boolean`

Defined in: [src/types/schema.ts:303](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L303)

***

### deleted

> **deleted**: `boolean`

Defined in: [src/types/schema.ts:304](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L304)

***

### downVoted

> **downVoted**: `boolean`

Defined in: [src/types/schema.ts:305](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L305)

***

### expandKey

> **expandKey**: `string`

Defined in: [src/types/schema.ts:306](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L306)

***

### feedbackType

> **feedbackType**: [`FeedbackType`](api/enumerations%5CFeedbackType.md)

Defined in: [src/types/schema.ts:307](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L307)

***

### flaggedBy

> **flaggedBy**: `unknown`

Defined in: [src/types/schema.ts:311](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L311)

Always `null`

***

### flaggedByUser

> **flaggedByUser**: `boolean`

Defined in: [src/types/schema.ts:312](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L312)

***

### flags

> **flags**: `unknown`

Defined in: [src/types/schema.ts:316](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L316)

Always `null`

***

### focus

> **focus**: [`FeedbackFocusSchema`](api/interfaces%5CFeedbackFocusSchema.md)

Defined in: [src/types/schema.ts:317](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L317)

***

### focusUrl

> **focusUrl**: `string`

Defined in: [src/types/schema.ts:318](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L318)

***

### fromVideoAuthor

> **fromVideoAuthor**: `boolean`

Defined in: [src/types/schema.ts:319](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L319)

***

### isLocked

> **isLocked**: `boolean`

Defined in: [src/types/schema.ts:320](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L320)

***

### isPinned

> **isPinned**: `boolean`

Defined in: [src/types/schema.ts:321](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L321)

***

### key

> **key**: `string`

Defined in: [src/types/schema.ts:325](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L325)

Encrypted ID

***

### lowQualityScore

> **lowQualityScore**: `number`

Defined in: [src/types/schema.ts:326](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L326)

***

### notifyOnAnswer

> **notifyOnAnswer**: `boolean`

Defined in: [src/types/schema.ts:327](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L327)

***

### permalink

> **permalink**: `string`

Defined in: [src/types/schema.ts:328](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L328)

***

### qualityKind

> **qualityKind**: `string`

Defined in: [src/types/schema.ts:329](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L329)

***

### replyCount

> **replyCount**: `number`

Defined in: [src/types/schema.ts:330](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L330)

***

### replyExpandKeys

> **replyExpandKeys**: `` `ag5zfmtoYW4tYWNhZGVteX${string}CxIIVXNlckRhdGEi${string}thaWRf${string}${string}${string}` `` \| `` `ag5zfmtoYW4tYWNhZGVteX${string}CxIIVXNlckRhdGEi${string}thaWRf${string}${string}${string}` ``[]

Defined in: [src/types/schema.ts:334](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L334)

Expand keys for parent feedback. Always 1-2 elements

***

### showLowQualityNotice

> **showLowQualityNotice**: `boolean`

Defined in: [src/types/schema.ts:338](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L338)

Always `false`? May depend on the user

***

### sumVotesIncremented

> **sumVotesIncremented**: `number`

Defined in: [src/types/schema.ts:339](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L339)

***

### upVoted

> **upVoted**: `boolean`

Defined in: [src/types/schema.ts:340](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L340)
