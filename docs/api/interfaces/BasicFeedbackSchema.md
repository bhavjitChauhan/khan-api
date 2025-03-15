Defined in: [src/types/schema.ts:351](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L351)

## Extends

- [`FeedbackSchemaBase`](api/interfaces%5CFeedbackSchemaBase.md)

## Properties

### \_\_typename

> **\_\_typename**: [`FeedbackTypename`](api/enumerations%5CFeedbackTypename.md)

Defined in: [src/types/schema.ts:353](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L353)

#### Overrides

[`FeedbackSchemaBase`](api/interfaces%5CFeedbackSchemaBase.md).[`__typename`](api/interfaces%5CFeedbackSchemaBase.md#__typename)

***

### appearsAsDeleted

> **appearsAsDeleted**: `boolean`

Defined in: [src/types/schema.ts:292](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L292)

#### Inherited from

[`FeedbackSchemaBase`](api/interfaces%5CFeedbackSchemaBase.md).[`appearsAsDeleted`](api/interfaces%5CFeedbackSchemaBase.md#appearsasdeleted)

***

### author

> **author**: `Pick`\<[`UserSchema`](api/interfaces%5CUserSchema.md)\<`Pick`\<[`AvatarSchema`](api/interfaces%5CAvatarSchema.md), `"__typename"` \| `"imageSrc"` \| `"name"`\>, [`ProfileSchema`](api/interfaces%5CProfileSchema.md), [`ListProgramsSchema`](api/interfaces%5CListProgramsSchema.md)\<`unknown`\>\>, `"id"` \| `"__typename"` \| `"kaid"` \| `"nickname"` \| `"avatar"`\>

Defined in: [src/types/schema.ts:293](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L293)

#### Inherited from

[`FeedbackSchemaBase`](api/interfaces%5CFeedbackSchemaBase.md).[`author`](api/interfaces%5CFeedbackSchemaBase.md#author)

***

### badges

> **badges**: `unknown`

Defined in: [src/types/schema.ts:300](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L300)

Always `null`

#### Inherited from

[`FeedbackSchemaBase`](api/interfaces%5CFeedbackSchemaBase.md).[`badges`](api/interfaces%5CFeedbackSchemaBase.md#badges)

***

### content

> **content**: `string`

Defined in: [src/types/schema.ts:301](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L301)

#### Inherited from

[`FeedbackSchemaBase`](api/interfaces%5CFeedbackSchemaBase.md).[`content`](api/interfaces%5CFeedbackSchemaBase.md#content)

***

### date

> **date**: `string`

Defined in: [src/types/schema.ts:302](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L302)

#### Inherited from

[`FeedbackSchemaBase`](api/interfaces%5CFeedbackSchemaBase.md).[`date`](api/interfaces%5CFeedbackSchemaBase.md#date)

***

### definitelyNotSpam

> **definitelyNotSpam**: `boolean`

Defined in: [src/types/schema.ts:303](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L303)

#### Inherited from

[`FeedbackSchemaBase`](api/interfaces%5CFeedbackSchemaBase.md).[`definitelyNotSpam`](api/interfaces%5CFeedbackSchemaBase.md#definitelynotspam)

***

### deleted

> **deleted**: `boolean`

Defined in: [src/types/schema.ts:304](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L304)

#### Inherited from

[`FeedbackSchemaBase`](api/interfaces%5CFeedbackSchemaBase.md).[`deleted`](api/interfaces%5CFeedbackSchemaBase.md#deleted)

***

### downVoted

> **downVoted**: `boolean`

Defined in: [src/types/schema.ts:305](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L305)

#### Inherited from

[`FeedbackSchemaBase`](api/interfaces%5CFeedbackSchemaBase.md).[`downVoted`](api/interfaces%5CFeedbackSchemaBase.md#downvoted)

***

### expandKey

> **expandKey**: `string`

Defined in: [src/types/schema.ts:306](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L306)

#### Inherited from

[`FeedbackSchemaBase`](api/interfaces%5CFeedbackSchemaBase.md).[`expandKey`](api/interfaces%5CFeedbackSchemaBase.md#expandkey)

***

### feedbackType

> **feedbackType**: [`COMMENT`](api/enumerations%5CFeedbackType.md#comment) \| [`REPLY`](api/enumerations%5CFeedbackType.md#reply)

Defined in: [src/types/schema.ts:354](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L354)

#### Overrides

[`FeedbackSchemaBase`](api/interfaces%5CFeedbackSchemaBase.md).[`feedbackType`](api/interfaces%5CFeedbackSchemaBase.md#feedbacktype)

***

### flaggedBy

> **flaggedBy**: `unknown`

Defined in: [src/types/schema.ts:311](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L311)

Always `null`

#### Inherited from

[`FeedbackSchemaBase`](api/interfaces%5CFeedbackSchemaBase.md).[`flaggedBy`](api/interfaces%5CFeedbackSchemaBase.md#flaggedby)

***

### flaggedByUser

> **flaggedByUser**: `boolean`

Defined in: [src/types/schema.ts:312](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L312)

#### Inherited from

[`FeedbackSchemaBase`](api/interfaces%5CFeedbackSchemaBase.md).[`flaggedByUser`](api/interfaces%5CFeedbackSchemaBase.md#flaggedbyuser)

***

### flags

> **flags**: `unknown`

Defined in: [src/types/schema.ts:316](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L316)

Always `null`

#### Inherited from

[`FeedbackSchemaBase`](api/interfaces%5CFeedbackSchemaBase.md).[`flags`](api/interfaces%5CFeedbackSchemaBase.md#flags)

***

### focus

> **focus**: [`FeedbackFocusSchema`](api/interfaces%5CFeedbackFocusSchema.md)

Defined in: [src/types/schema.ts:317](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L317)

#### Inherited from

[`FeedbackSchemaBase`](api/interfaces%5CFeedbackSchemaBase.md).[`focus`](api/interfaces%5CFeedbackSchemaBase.md#focus)

***

### focusUrl

> **focusUrl**: `string`

Defined in: [src/types/schema.ts:318](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L318)

#### Inherited from

[`FeedbackSchemaBase`](api/interfaces%5CFeedbackSchemaBase.md).[`focusUrl`](api/interfaces%5CFeedbackSchemaBase.md#focusurl)

***

### fromVideoAuthor

> **fromVideoAuthor**: `boolean`

Defined in: [src/types/schema.ts:319](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L319)

#### Inherited from

[`FeedbackSchemaBase`](api/interfaces%5CFeedbackSchemaBase.md).[`fromVideoAuthor`](api/interfaces%5CFeedbackSchemaBase.md#fromvideoauthor)

***

### isLocked

> **isLocked**: `boolean`

Defined in: [src/types/schema.ts:320](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L320)

#### Inherited from

[`FeedbackSchemaBase`](api/interfaces%5CFeedbackSchemaBase.md).[`isLocked`](api/interfaces%5CFeedbackSchemaBase.md#islocked)

***

### isPinned

> **isPinned**: `boolean`

Defined in: [src/types/schema.ts:321](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L321)

#### Inherited from

[`FeedbackSchemaBase`](api/interfaces%5CFeedbackSchemaBase.md).[`isPinned`](api/interfaces%5CFeedbackSchemaBase.md#ispinned)

***

### key

> **key**: `string`

Defined in: [src/types/schema.ts:325](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L325)

Encrypted ID

#### Inherited from

[`FeedbackSchemaBase`](api/interfaces%5CFeedbackSchemaBase.md).[`key`](api/interfaces%5CFeedbackSchemaBase.md#key)

***

### lowQualityScore

> **lowQualityScore**: `number`

Defined in: [src/types/schema.ts:326](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L326)

#### Inherited from

[`FeedbackSchemaBase`](api/interfaces%5CFeedbackSchemaBase.md).[`lowQualityScore`](api/interfaces%5CFeedbackSchemaBase.md#lowqualityscore)

***

### notifyOnAnswer

> **notifyOnAnswer**: `boolean`

Defined in: [src/types/schema.ts:327](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L327)

#### Inherited from

[`FeedbackSchemaBase`](api/interfaces%5CFeedbackSchemaBase.md).[`notifyOnAnswer`](api/interfaces%5CFeedbackSchemaBase.md#notifyonanswer)

***

### permalink

> **permalink**: `string`

Defined in: [src/types/schema.ts:328](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L328)

#### Inherited from

[`FeedbackSchemaBase`](api/interfaces%5CFeedbackSchemaBase.md).[`permalink`](api/interfaces%5CFeedbackSchemaBase.md#permalink)

***

### qualityKind

> **qualityKind**: `string`

Defined in: [src/types/schema.ts:329](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L329)

#### Inherited from

[`FeedbackSchemaBase`](api/interfaces%5CFeedbackSchemaBase.md).[`qualityKind`](api/interfaces%5CFeedbackSchemaBase.md#qualitykind)

***

### replyCount

> **replyCount**: `number`

Defined in: [src/types/schema.ts:330](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L330)

#### Inherited from

[`FeedbackSchemaBase`](api/interfaces%5CFeedbackSchemaBase.md).[`replyCount`](api/interfaces%5CFeedbackSchemaBase.md#replycount)

***

### replyExpandKeys

> **replyExpandKeys**: `` `ag5zfmtoYW4tYWNhZGVteX${string}CxIIVXNlckRhdGEi${string}thaWRf${string}${string}${string}` `` \| `` `ag5zfmtoYW4tYWNhZGVteX${string}CxIIVXNlckRhdGEi${string}thaWRf${string}${string}${string}` ``[]

Defined in: [src/types/schema.ts:334](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L334)

Expand keys for parent feedback. Always 1-2 elements

#### Inherited from

[`FeedbackSchemaBase`](api/interfaces%5CFeedbackSchemaBase.md).[`replyExpandKeys`](api/interfaces%5CFeedbackSchemaBase.md#replyexpandkeys)

***

### showLowQualityNotice

> **showLowQualityNotice**: `boolean`

Defined in: [src/types/schema.ts:338](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L338)

Always `false`? May depend on the user

#### Inherited from

[`FeedbackSchemaBase`](api/interfaces%5CFeedbackSchemaBase.md).[`showLowQualityNotice`](api/interfaces%5CFeedbackSchemaBase.md#showlowqualitynotice)

***

### sumVotesIncremented

> **sumVotesIncremented**: `number`

Defined in: [src/types/schema.ts:339](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L339)

#### Inherited from

[`FeedbackSchemaBase`](api/interfaces%5CFeedbackSchemaBase.md).[`sumVotesIncremented`](api/interfaces%5CFeedbackSchemaBase.md#sumvotesincremented)

***

### upVoted

> **upVoted**: `boolean`

Defined in: [src/types/schema.ts:340](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/types/schema.ts#L340)

#### Inherited from

[`FeedbackSchemaBase`](api/interfaces%5CFeedbackSchemaBase.md).[`upVoted`](api/interfaces%5CFeedbackSchemaBase.md#upvoted)
