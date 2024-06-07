## Extends

- [`FeedbackSchemaBase`](api%5Cinterfaces%5CFeedbackSchemaBase.md)

## Properties

### \_\_typename

> **\_\_typename**: [`QuestionFeedback`](api%5Cenumerations%5CFeedbackTypename.md#questionfeedback)

#### Overrides

[`FeedbackSchemaBase`](api%5Cinterfaces%5CFeedbackSchemaBase.md).[`__typename`](api%5Cinterfaces%5CFeedbackSchemaBase.md#__typename)

#### Source

[src/types/schema.ts:354](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L354)

***

### answerCount

> **answerCount**: `number`

#### Source

[src/types/schema.ts:355](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L355)

***

### answers

> **answers**: `null` \| `Pick`\<[`AnswerFeedbackSchema`](api%5Cinterfaces%5CAnswerFeedbackSchema.md), `"__typename"` \| `"deleted"` \| `"key"` \| `"sumVotesIncremented"` \| `"flaggedBy"` \| `"flags"` \| `"upVoted"` \| `"appearsAsDeleted"` \| `"author"` \| `"content"` \| `"date"` \| `"definitelyNotSpam"` \| `"downVoted"` \| `"expandKey"` \| `"feedbackType"` \| `"focus"` \| `"focusUrl"` \| `"fromVideoAuthor"` \| `"isLocked"` \| `"isPinned"` \| `"lowQualityScore"` \| `"notifyOnAnswer"` \| `"permalink"` \| `"qualityKind"` \| `"replyCount"` \| `"replyExpandKeys"` \| `"showLowQualityNotice"`\>[]

#### Source

[src/types/schema.ts:356](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L356)

***

### appearsAsDeleted

> **appearsAsDeleted**: `boolean`

#### Inherited from

[`FeedbackSchemaBase`](api%5Cinterfaces%5CFeedbackSchemaBase.md).[`appearsAsDeleted`](api%5Cinterfaces%5CFeedbackSchemaBase.md#appearsasdeleted)

#### Source

[src/types/schema.ts:288](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L288)

***

### author

> **author**: `Pick`\<[`UserSchema`](api%5Cinterfaces%5CUserSchema.md)\<`Pick`\<[`AvatarSchema`](api%5Cinterfaces%5CAvatarSchema.md), `"__typename"` \| `"imageSrc"` \| `"name"`\>, [`ProfileSchema`](api%5Cinterfaces%5CProfileSchema.md), [`ListProgramsSchema`](api%5Cinterfaces%5CListProgramsSchema.md)\<`unknown`\>\>, `"id"` \| `"__typename"` \| `"kaid"` \| `"nickname"` \| `"avatar"`\>

#### Inherited from

[`FeedbackSchemaBase`](api%5Cinterfaces%5CFeedbackSchemaBase.md).[`author`](api%5Cinterfaces%5CFeedbackSchemaBase.md#author)

#### Source

[src/types/schema.ts:289](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L289)

***

### badges

> **badges**: `unknown`

Always `null`

#### Inherited from

[`FeedbackSchemaBase`](api%5Cinterfaces%5CFeedbackSchemaBase.md).[`badges`](api%5Cinterfaces%5CFeedbackSchemaBase.md#badges)

#### Source

[src/types/schema.ts:296](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L296)

***

### content

> **content**: `string`

#### Inherited from

[`FeedbackSchemaBase`](api%5Cinterfaces%5CFeedbackSchemaBase.md).[`content`](api%5Cinterfaces%5CFeedbackSchemaBase.md#content)

#### Source

[src/types/schema.ts:297](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L297)

***

### date

> **date**: `string`

#### Inherited from

[`FeedbackSchemaBase`](api%5Cinterfaces%5CFeedbackSchemaBase.md).[`date`](api%5Cinterfaces%5CFeedbackSchemaBase.md#date)

#### Source

[src/types/schema.ts:298](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L298)

***

### definitelyNotSpam

> **definitelyNotSpam**: `boolean`

#### Inherited from

[`FeedbackSchemaBase`](api%5Cinterfaces%5CFeedbackSchemaBase.md).[`definitelyNotSpam`](api%5Cinterfaces%5CFeedbackSchemaBase.md#definitelynotspam)

#### Source

[src/types/schema.ts:299](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L299)

***

### deleted

> **deleted**: `boolean`

#### Inherited from

[`FeedbackSchemaBase`](api%5Cinterfaces%5CFeedbackSchemaBase.md).[`deleted`](api%5Cinterfaces%5CFeedbackSchemaBase.md#deleted)

#### Source

[src/types/schema.ts:300](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L300)

***

### downVoted

> **downVoted**: `boolean`

#### Inherited from

[`FeedbackSchemaBase`](api%5Cinterfaces%5CFeedbackSchemaBase.md).[`downVoted`](api%5Cinterfaces%5CFeedbackSchemaBase.md#downvoted)

#### Source

[src/types/schema.ts:301](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L301)

***

### expandKey

> **expandKey**: `string`

#### Inherited from

[`FeedbackSchemaBase`](api%5Cinterfaces%5CFeedbackSchemaBase.md).[`expandKey`](api%5Cinterfaces%5CFeedbackSchemaBase.md#expandkey)

#### Source

[src/types/schema.ts:302](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L302)

***

### feedbackType

> **feedbackType**: [`PROJECT_HELP_QUESTION`](api%5Cenumerations%5CFeedbackType.md#project_help_question) \| [`QUESTION`](api%5Cenumerations%5CFeedbackType.md#question)

#### Overrides

[`FeedbackSchemaBase`](api%5Cinterfaces%5CFeedbackSchemaBase.md).[`feedbackType`](api%5Cinterfaces%5CFeedbackSchemaBase.md#feedbacktype)

#### Source

[src/types/schema.ts:388](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L388)

***

### flaggedBy

> **flaggedBy**: `unknown`

Always `null`

#### Inherited from

[`FeedbackSchemaBase`](api%5Cinterfaces%5CFeedbackSchemaBase.md).[`flaggedBy`](api%5Cinterfaces%5CFeedbackSchemaBase.md#flaggedby)

#### Source

[src/types/schema.ts:307](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L307)

***

### flaggedByUser

> **flaggedByUser**: `boolean`

#### Inherited from

[`FeedbackSchemaBase`](api%5Cinterfaces%5CFeedbackSchemaBase.md).[`flaggedByUser`](api%5Cinterfaces%5CFeedbackSchemaBase.md#flaggedbyuser)

#### Source

[src/types/schema.ts:308](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L308)

***

### flags

> **flags**: `unknown`

Always `null`

#### Inherited from

[`FeedbackSchemaBase`](api%5Cinterfaces%5CFeedbackSchemaBase.md).[`flags`](api%5Cinterfaces%5CFeedbackSchemaBase.md#flags)

#### Source

[src/types/schema.ts:312](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L312)

***

### focus

> **focus**: [`FeedbackFocusSchema`](api%5Cinterfaces%5CFeedbackFocusSchema.md)

#### Inherited from

[`FeedbackSchemaBase`](api%5Cinterfaces%5CFeedbackSchemaBase.md).[`focus`](api%5Cinterfaces%5CFeedbackSchemaBase.md#focus)

#### Source

[src/types/schema.ts:313](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L313)

***

### focusUrl

> **focusUrl**: `string`

#### Inherited from

[`FeedbackSchemaBase`](api%5Cinterfaces%5CFeedbackSchemaBase.md).[`focusUrl`](api%5Cinterfaces%5CFeedbackSchemaBase.md#focusurl)

#### Source

[src/types/schema.ts:314](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L314)

***

### fromVideoAuthor

> **fromVideoAuthor**: `boolean`

#### Inherited from

[`FeedbackSchemaBase`](api%5Cinterfaces%5CFeedbackSchemaBase.md).[`fromVideoAuthor`](api%5Cinterfaces%5CFeedbackSchemaBase.md#fromvideoauthor)

#### Source

[src/types/schema.ts:315](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L315)

***

### hasAnswered

> **hasAnswered**: `unknown`

Always `null`

#### Source

[src/types/schema.ts:392](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L392)

***

### isLocked

> **isLocked**: `boolean`

#### Inherited from

[`FeedbackSchemaBase`](api%5Cinterfaces%5CFeedbackSchemaBase.md).[`isLocked`](api%5Cinterfaces%5CFeedbackSchemaBase.md#islocked)

#### Source

[src/types/schema.ts:316](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L316)

***

### isOld

> **isOld**: `boolean`

#### Source

[src/types/schema.ts:393](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L393)

***

### isPinned

> **isPinned**: `boolean`

#### Inherited from

[`FeedbackSchemaBase`](api%5Cinterfaces%5CFeedbackSchemaBase.md).[`isPinned`](api%5Cinterfaces%5CFeedbackSchemaBase.md#ispinned)

#### Source

[src/types/schema.ts:317](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L317)

***

### key

> **key**: `string`

Encrypted ID

#### Inherited from

[`FeedbackSchemaBase`](api%5Cinterfaces%5CFeedbackSchemaBase.md).[`key`](api%5Cinterfaces%5CFeedbackSchemaBase.md#key)

#### Source

[src/types/schema.ts:321](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L321)

***

### lowQualityScore

> **lowQualityScore**: `number`

#### Inherited from

[`FeedbackSchemaBase`](api%5Cinterfaces%5CFeedbackSchemaBase.md).[`lowQualityScore`](api%5Cinterfaces%5CFeedbackSchemaBase.md#lowqualityscore)

#### Source

[src/types/schema.ts:322](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L322)

***

### notifyOnAnswer

> **notifyOnAnswer**: `boolean`

#### Inherited from

[`FeedbackSchemaBase`](api%5Cinterfaces%5CFeedbackSchemaBase.md).[`notifyOnAnswer`](api%5Cinterfaces%5CFeedbackSchemaBase.md#notifyonanswer)

#### Source

[src/types/schema.ts:323](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L323)

***

### permalink

> **permalink**: `string`

#### Inherited from

[`FeedbackSchemaBase`](api%5Cinterfaces%5CFeedbackSchemaBase.md).[`permalink`](api%5Cinterfaces%5CFeedbackSchemaBase.md#permalink)

#### Source

[src/types/schema.ts:324](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L324)

***

### qualityKind

> **qualityKind**: `string`

#### Inherited from

[`FeedbackSchemaBase`](api%5Cinterfaces%5CFeedbackSchemaBase.md).[`qualityKind`](api%5Cinterfaces%5CFeedbackSchemaBase.md#qualitykind)

#### Source

[src/types/schema.ts:325](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L325)

***

### replyCount

> **replyCount**: `number`

#### Inherited from

[`FeedbackSchemaBase`](api%5Cinterfaces%5CFeedbackSchemaBase.md).[`replyCount`](api%5Cinterfaces%5CFeedbackSchemaBase.md#replycount)

#### Source

[src/types/schema.ts:326](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L326)

***

### replyExpandKeys

> **replyExpandKeys**: \`ag5zfmtoYW4tYWNhZGVteX$\{string\}CxIIVXNlckRhdGEi$\{string\}thaWRf$\{string\}$\{string\}$\{string\}\` \| \`ag5zfmtoYW4tYWNhZGVteX$\{string\}CxIIVXNlckRhdGEi$\{string\}thaWRf$\{string\}$\{string\}$\{string\}\`[]

Expand keys for parent feedback. Always 1-2 elements

#### Inherited from

[`FeedbackSchemaBase`](api%5Cinterfaces%5CFeedbackSchemaBase.md).[`replyExpandKeys`](api%5Cinterfaces%5CFeedbackSchemaBase.md#replyexpandkeys)

#### Source

[src/types/schema.ts:330](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L330)

***

### showLowQualityNotice

> **showLowQualityNotice**: `boolean`

Always `false`? May depend on the user

#### Inherited from

[`FeedbackSchemaBase`](api%5Cinterfaces%5CFeedbackSchemaBase.md).[`showLowQualityNotice`](api%5Cinterfaces%5CFeedbackSchemaBase.md#showlowqualitynotice)

#### Source

[src/types/schema.ts:334](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L334)

***

### sumVotesIncremented

> **sumVotesIncremented**: `number`

#### Inherited from

[`FeedbackSchemaBase`](api%5Cinterfaces%5CFeedbackSchemaBase.md).[`sumVotesIncremented`](api%5Cinterfaces%5CFeedbackSchemaBase.md#sumvotesincremented)

#### Source

[src/types/schema.ts:335](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L335)

***

### upVoted

> **upVoted**: `boolean`

#### Inherited from

[`FeedbackSchemaBase`](api%5Cinterfaces%5CFeedbackSchemaBase.md).[`upVoted`](api%5Cinterfaces%5CFeedbackSchemaBase.md#upvoted)

#### Source

[src/types/schema.ts:336](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/types/schema.ts#L336)
