# Interface: QuestionFeedbackSchema

## Hierarchy

- [`FeedbackSchemaBase`](api/interfaces/FeedbackSchemaBase.md)

  ↳ **`QuestionFeedbackSchema`**

## Properties

### \_\_typename

• **\_\_typename**: [`QuestionFeedback`](api/enums/FeedbackTypename.md#questionfeedback)

#### Overrides

[FeedbackSchemaBase](api/interfaces/FeedbackSchemaBase.md).[__typename](api/interfaces/FeedbackSchemaBase.md#__typename)

#### Defined in

[src/types/schema.ts:352](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L352)

___

### answerCount

• **answerCount**: `number`

#### Defined in

[src/types/schema.ts:353](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L353)

___

### answers

• **answers**: ``null`` \| `Pick`\<[`AnswerFeedbackSchema`](api/interfaces/AnswerFeedbackSchema.md), ``"__typename"`` \| ``"deleted"`` \| ``"key"`` \| ``"sumVotesIncremented"`` \| ``"flaggedBy"`` \| ``"flags"`` \| ``"upVoted"`` \| ``"appearsAsDeleted"`` \| ``"author"`` \| ``"content"`` \| ``"date"`` \| ``"definitelyNotSpam"`` \| ``"downVoted"`` \| ``"expandKey"`` \| ``"feedbackType"`` \| ``"focus"`` \| ``"focusUrl"`` \| ``"fromVideoAuthor"`` \| ``"isLocked"`` \| ``"isPinned"`` \| ``"lowQualityScore"`` \| ``"notifyOnAnswer"`` \| ``"permalink"`` \| ``"qualityKind"`` \| ``"replyCount"`` \| ``"replyExpandKeys"`` \| ``"showLowQualityNotice"``\>[]

#### Defined in

[src/types/schema.ts:354](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L354)

___

### appearsAsDeleted

• **appearsAsDeleted**: `boolean`

#### Inherited from

[FeedbackSchemaBase](api/interfaces/FeedbackSchemaBase.md).[appearsAsDeleted](api/interfaces/FeedbackSchemaBase.md#appearsasdeleted)

#### Defined in

[src/types/schema.ts:286](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L286)

___

### author

• **author**: `Pick`\<[`UserSchema`](api/interfaces/UserSchema.md)\<`Pick`\<[`AvatarSchema`](api/interfaces/AvatarSchema.md), ``"__typename"`` \| ``"imageSrc"`` \| ``"name"``\>, [`ProfileSchema`](api/interfaces/ProfileSchema.md), [`ListProgramsSchema`](api/interfaces/ListProgramsSchema.md)\<`unknown`\>\>, ``"id"`` \| ``"__typename"`` \| ``"kaid"`` \| ``"nickname"`` \| ``"avatar"``\>

#### Inherited from

[FeedbackSchemaBase](api/interfaces/FeedbackSchemaBase.md).[author](api/interfaces/FeedbackSchemaBase.md#author)

#### Defined in

[src/types/schema.ts:287](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L287)

___

### badges

• **badges**: `unknown`

Always `null`

#### Inherited from

[FeedbackSchemaBase](api/interfaces/FeedbackSchemaBase.md).[badges](api/interfaces/FeedbackSchemaBase.md#badges)

#### Defined in

[src/types/schema.ts:294](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L294)

___

### content

• **content**: `string`

#### Inherited from

[FeedbackSchemaBase](api/interfaces/FeedbackSchemaBase.md).[content](api/interfaces/FeedbackSchemaBase.md#content)

#### Defined in

[src/types/schema.ts:295](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L295)

___

### date

• **date**: `string`

#### Inherited from

[FeedbackSchemaBase](api/interfaces/FeedbackSchemaBase.md).[date](api/interfaces/FeedbackSchemaBase.md#date)

#### Defined in

[src/types/schema.ts:296](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L296)

___

### definitelyNotSpam

• **definitelyNotSpam**: `boolean`

#### Inherited from

[FeedbackSchemaBase](api/interfaces/FeedbackSchemaBase.md).[definitelyNotSpam](api/interfaces/FeedbackSchemaBase.md#definitelynotspam)

#### Defined in

[src/types/schema.ts:297](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L297)

___

### deleted

• **deleted**: `boolean`

#### Inherited from

[FeedbackSchemaBase](api/interfaces/FeedbackSchemaBase.md).[deleted](api/interfaces/FeedbackSchemaBase.md#deleted)

#### Defined in

[src/types/schema.ts:298](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L298)

___

### downVoted

• **downVoted**: `boolean`

#### Inherited from

[FeedbackSchemaBase](api/interfaces/FeedbackSchemaBase.md).[downVoted](api/interfaces/FeedbackSchemaBase.md#downvoted)

#### Defined in

[src/types/schema.ts:299](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L299)

___

### expandKey

• **expandKey**: `string`

#### Inherited from

[FeedbackSchemaBase](api/interfaces/FeedbackSchemaBase.md).[expandKey](api/interfaces/FeedbackSchemaBase.md#expandkey)

#### Defined in

[src/types/schema.ts:300](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L300)

___

### feedbackType

• **feedbackType**: [`PROJECT_HELP_QUESTION`](api/enums/FeedbackType.md#project_help_question) \| [`QUESTION`](api/enums/FeedbackType.md#question)

#### Overrides

[FeedbackSchemaBase](api/interfaces/FeedbackSchemaBase.md).[feedbackType](api/interfaces/FeedbackSchemaBase.md#feedbacktype)

#### Defined in

[src/types/schema.ts:386](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L386)

___

### flaggedBy

• **flaggedBy**: `unknown`

Always `null`

#### Inherited from

[FeedbackSchemaBase](api/interfaces/FeedbackSchemaBase.md).[flaggedBy](api/interfaces/FeedbackSchemaBase.md#flaggedby)

#### Defined in

[src/types/schema.ts:305](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L305)

___

### flaggedByUser

• **flaggedByUser**: `boolean`

#### Inherited from

[FeedbackSchemaBase](api/interfaces/FeedbackSchemaBase.md).[flaggedByUser](api/interfaces/FeedbackSchemaBase.md#flaggedbyuser)

#### Defined in

[src/types/schema.ts:306](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L306)

___

### flags

• **flags**: `unknown`

Always `null`

#### Inherited from

[FeedbackSchemaBase](api/interfaces/FeedbackSchemaBase.md).[flags](api/interfaces/FeedbackSchemaBase.md#flags)

#### Defined in

[src/types/schema.ts:310](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L310)

___

### focus

• **focus**: [`FeedbackFocusSchema`](api/interfaces/FeedbackFocusSchema.md)

#### Inherited from

[FeedbackSchemaBase](api/interfaces/FeedbackSchemaBase.md).[focus](api/interfaces/FeedbackSchemaBase.md#focus)

#### Defined in

[src/types/schema.ts:311](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L311)

___

### focusUrl

• **focusUrl**: `string`

#### Inherited from

[FeedbackSchemaBase](api/interfaces/FeedbackSchemaBase.md).[focusUrl](api/interfaces/FeedbackSchemaBase.md#focusurl)

#### Defined in

[src/types/schema.ts:312](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L312)

___

### fromVideoAuthor

• **fromVideoAuthor**: `boolean`

#### Inherited from

[FeedbackSchemaBase](api/interfaces/FeedbackSchemaBase.md).[fromVideoAuthor](api/interfaces/FeedbackSchemaBase.md#fromvideoauthor)

#### Defined in

[src/types/schema.ts:313](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L313)

___

### hasAnswered

• **hasAnswered**: `unknown`

Always `null`

#### Defined in

[src/types/schema.ts:390](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L390)

___

### isLocked

• **isLocked**: `boolean`

#### Inherited from

[FeedbackSchemaBase](api/interfaces/FeedbackSchemaBase.md).[isLocked](api/interfaces/FeedbackSchemaBase.md#islocked)

#### Defined in

[src/types/schema.ts:314](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L314)

___

### isOld

• **isOld**: `boolean`

#### Defined in

[src/types/schema.ts:391](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L391)

___

### isPinned

• **isPinned**: `boolean`

#### Inherited from

[FeedbackSchemaBase](api/interfaces/FeedbackSchemaBase.md).[isPinned](api/interfaces/FeedbackSchemaBase.md#ispinned)

#### Defined in

[src/types/schema.ts:315](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L315)

___

### key

• **key**: `string`

Encrypted ID

#### Inherited from

[FeedbackSchemaBase](api/interfaces/FeedbackSchemaBase.md).[key](api/interfaces/FeedbackSchemaBase.md#key)

#### Defined in

[src/types/schema.ts:319](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L319)

___

### lowQualityScore

• **lowQualityScore**: `number`

#### Inherited from

[FeedbackSchemaBase](api/interfaces/FeedbackSchemaBase.md).[lowQualityScore](api/interfaces/FeedbackSchemaBase.md#lowqualityscore)

#### Defined in

[src/types/schema.ts:320](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L320)

___

### notifyOnAnswer

• **notifyOnAnswer**: `boolean`

#### Inherited from

[FeedbackSchemaBase](api/interfaces/FeedbackSchemaBase.md).[notifyOnAnswer](api/interfaces/FeedbackSchemaBase.md#notifyonanswer)

#### Defined in

[src/types/schema.ts:321](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L321)

___

### permalink

• **permalink**: `string`

#### Inherited from

[FeedbackSchemaBase](api/interfaces/FeedbackSchemaBase.md).[permalink](api/interfaces/FeedbackSchemaBase.md#permalink)

#### Defined in

[src/types/schema.ts:322](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L322)

___

### qualityKind

• **qualityKind**: `string`

#### Inherited from

[FeedbackSchemaBase](api/interfaces/FeedbackSchemaBase.md).[qualityKind](api/interfaces/FeedbackSchemaBase.md#qualitykind)

#### Defined in

[src/types/schema.ts:323](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L323)

___

### replyCount

• **replyCount**: `number`

#### Inherited from

[FeedbackSchemaBase](api/interfaces/FeedbackSchemaBase.md).[replyCount](api/interfaces/FeedbackSchemaBase.md#replycount)

#### Defined in

[src/types/schema.ts:324](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L324)

___

### replyExpandKeys

• **replyExpandKeys**: \`ag5zfmtoYW4tYWNhZGVteX$\{string}CxIIVXNlckRhdGEi$\{string}thaWRf$\{string}$\{string}$\{string}\` \| \`ag5zfmtoYW4tYWNhZGVteX$\{string}CxIIVXNlckRhdGEi$\{string}thaWRf$\{string}$\{string}$\{string}\`[]

Expand keys for parent feedback. Always 1-2 elements

#### Inherited from

[FeedbackSchemaBase](api/interfaces/FeedbackSchemaBase.md).[replyExpandKeys](api/interfaces/FeedbackSchemaBase.md#replyexpandkeys)

#### Defined in

[src/types/schema.ts:328](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L328)

___

### showLowQualityNotice

• **showLowQualityNotice**: `boolean`

Always `false`? May depend on the user

#### Inherited from

[FeedbackSchemaBase](api/interfaces/FeedbackSchemaBase.md).[showLowQualityNotice](api/interfaces/FeedbackSchemaBase.md#showlowqualitynotice)

#### Defined in

[src/types/schema.ts:332](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L332)

___

### sumVotesIncremented

• **sumVotesIncremented**: `number`

#### Inherited from

[FeedbackSchemaBase](api/interfaces/FeedbackSchemaBase.md).[sumVotesIncremented](api/interfaces/FeedbackSchemaBase.md#sumvotesincremented)

#### Defined in

[src/types/schema.ts:333](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L333)

___

### upVoted

• **upVoted**: `boolean`

#### Inherited from

[FeedbackSchemaBase](api/interfaces/FeedbackSchemaBase.md).[upVoted](api/interfaces/FeedbackSchemaBase.md#upvoted)

#### Defined in

[src/types/schema.ts:334](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L334)
