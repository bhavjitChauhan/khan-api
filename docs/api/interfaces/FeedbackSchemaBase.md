# Interface: FeedbackSchemaBase

## Hierarchy

- **`FeedbackSchemaBase`**

  ↳ [`BasicFeedbackSchema`](api/interfaces/BasicFeedbackSchema.md)

  ↳ [`QuestionFeedbackSchema`](api/interfaces/QuestionFeedbackSchema.md)

  ↳ [`AnswerFeedbackSchema`](api/interfaces/AnswerFeedbackSchema.md)

## Properties

### \_\_typename

• **\_\_typename**: [`FeedbackTypename`](api/enums/FeedbackTypename.md)

#### Defined in

[src/types/schema.ts:285](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L285)

___

### appearsAsDeleted

• **appearsAsDeleted**: `boolean`

#### Defined in

[src/types/schema.ts:286](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L286)

___

### author

• **author**: `Pick`\<[`UserSchema`](api/interfaces/UserSchema.md)\<`Pick`\<[`AvatarSchema`](api/interfaces/AvatarSchema.md), ``"__typename"`` \| ``"imageSrc"`` \| ``"name"``\>, [`ProfileSchema`](api/interfaces/ProfileSchema.md), [`ListProgramsSchema`](api/interfaces/ListProgramsSchema.md)\<`unknown`\>\>, ``"id"`` \| ``"__typename"`` \| ``"kaid"`` \| ``"nickname"`` \| ``"avatar"``\>

#### Defined in

[src/types/schema.ts:287](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L287)

___

### badges

• **badges**: `unknown`

Always `null`

#### Defined in

[src/types/schema.ts:294](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L294)

___

### content

• **content**: `string`

#### Defined in

[src/types/schema.ts:295](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L295)

___

### date

• **date**: `string`

#### Defined in

[src/types/schema.ts:296](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L296)

___

### definitelyNotSpam

• **definitelyNotSpam**: `boolean`

#### Defined in

[src/types/schema.ts:297](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L297)

___

### deleted

• **deleted**: `boolean`

#### Defined in

[src/types/schema.ts:298](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L298)

___

### downVoted

• **downVoted**: `boolean`

#### Defined in

[src/types/schema.ts:299](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L299)

___

### expandKey

• **expandKey**: `string`

#### Defined in

[src/types/schema.ts:300](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L300)

___

### feedbackType

• **feedbackType**: [`FeedbackType`](api/enums/FeedbackType.md)

#### Defined in

[src/types/schema.ts:301](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L301)

___

### flaggedBy

• **flaggedBy**: `unknown`

Always `null`

#### Defined in

[src/types/schema.ts:305](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L305)

___

### flaggedByUser

• **flaggedByUser**: `boolean`

#### Defined in

[src/types/schema.ts:306](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L306)

___

### flags

• **flags**: `unknown`

Always `null`

#### Defined in

[src/types/schema.ts:310](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L310)

___

### focus

• **focus**: [`FeedbackFocusSchema`](api/interfaces/FeedbackFocusSchema.md)

#### Defined in

[src/types/schema.ts:311](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L311)

___

### focusUrl

• **focusUrl**: `string`

#### Defined in

[src/types/schema.ts:312](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L312)

___

### fromVideoAuthor

• **fromVideoAuthor**: `boolean`

#### Defined in

[src/types/schema.ts:313](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L313)

___

### isLocked

• **isLocked**: `boolean`

#### Defined in

[src/types/schema.ts:314](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L314)

___

### isPinned

• **isPinned**: `boolean`

#### Defined in

[src/types/schema.ts:315](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L315)

___

### key

• **key**: `string`

Encrypted ID

#### Defined in

[src/types/schema.ts:319](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L319)

___

### lowQualityScore

• **lowQualityScore**: `number`

#### Defined in

[src/types/schema.ts:320](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L320)

___

### notifyOnAnswer

• **notifyOnAnswer**: `boolean`

#### Defined in

[src/types/schema.ts:321](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L321)

___

### permalink

• **permalink**: `string`

#### Defined in

[src/types/schema.ts:322](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L322)

___

### qualityKind

• **qualityKind**: `string`

#### Defined in

[src/types/schema.ts:323](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L323)

___

### replyCount

• **replyCount**: `number`

#### Defined in

[src/types/schema.ts:324](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L324)

___

### replyExpandKeys

• **replyExpandKeys**: \`ag5zfmtoYW4tYWNhZGVteX$\{string}CxIIVXNlckRhdGEi$\{string}thaWRf$\{string}$\{string}$\{string}\` \| \`ag5zfmtoYW4tYWNhZGVteX$\{string}CxIIVXNlckRhdGEi$\{string}thaWRf$\{string}$\{string}$\{string}\`[]

Expand keys for parent feedback. Always 1-2 elements

#### Defined in

[src/types/schema.ts:328](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L328)

___

### showLowQualityNotice

• **showLowQualityNotice**: `boolean`

Always `false`? May depend on the user

#### Defined in

[src/types/schema.ts:332](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L332)

___

### sumVotesIncremented

• **sumVotesIncremented**: `number`

#### Defined in

[src/types/schema.ts:333](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L333)

___

### upVoted

• **upVoted**: `boolean`

#### Defined in

[src/types/schema.ts:334](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/types/schema.ts#L334)
