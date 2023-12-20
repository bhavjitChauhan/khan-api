# Interface: BasicFeedbackSchema

## Hierarchy

- [`FeedbackSchemaBase`](FeedbackSchemaBase.md)

  ↳ **`BasicFeedbackSchema`**

## Properties

### \_\_typename

• **\_\_typename**: [`FeedbackTypename`](../enums/FeedbackTypename.md)

#### Overrides

[FeedbackSchemaBase](FeedbackSchemaBase.md).[__typename](FeedbackSchemaBase.md#__typename)

#### Defined in

[types/schema.ts:347](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L347)

___

### appearsAsDeleted

• **appearsAsDeleted**: `boolean`

#### Inherited from

[FeedbackSchemaBase](FeedbackSchemaBase.md).[appearsAsDeleted](FeedbackSchemaBase.md#appearsasdeleted)

#### Defined in

[types/schema.ts:286](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L286)

___

### author

• **author**: `Pick`\<[`UserSchema`](UserSchema.md)\<`Pick`\<[`AvatarSchema`](AvatarSchema.md), ``"__typename"`` \| ``"imageSrc"`` \| ``"name"``\>, [`ProfileSchema`](ProfileSchema.md), [`ListProgramsSchema`](ListProgramsSchema.md)\<`unknown`\>\>, ``"id"`` \| ``"__typename"`` \| ``"kaid"`` \| ``"nickname"`` \| ``"avatar"``\>

#### Inherited from

[FeedbackSchemaBase](FeedbackSchemaBase.md).[author](FeedbackSchemaBase.md#author)

#### Defined in

[types/schema.ts:287](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L287)

___

### badges

• **badges**: `unknown`

Always `null`

#### Inherited from

[FeedbackSchemaBase](FeedbackSchemaBase.md).[badges](FeedbackSchemaBase.md#badges)

#### Defined in

[types/schema.ts:294](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L294)

___

### content

• **content**: `string`

#### Inherited from

[FeedbackSchemaBase](FeedbackSchemaBase.md).[content](FeedbackSchemaBase.md#content)

#### Defined in

[types/schema.ts:295](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L295)

___

### date

• **date**: `string`

#### Inherited from

[FeedbackSchemaBase](FeedbackSchemaBase.md).[date](FeedbackSchemaBase.md#date)

#### Defined in

[types/schema.ts:296](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L296)

___

### definitelyNotSpam

• **definitelyNotSpam**: `boolean`

#### Inherited from

[FeedbackSchemaBase](FeedbackSchemaBase.md).[definitelyNotSpam](FeedbackSchemaBase.md#definitelynotspam)

#### Defined in

[types/schema.ts:297](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L297)

___

### deleted

• **deleted**: `boolean`

#### Inherited from

[FeedbackSchemaBase](FeedbackSchemaBase.md).[deleted](FeedbackSchemaBase.md#deleted)

#### Defined in

[types/schema.ts:298](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L298)

___

### downVoted

• **downVoted**: `boolean`

#### Inherited from

[FeedbackSchemaBase](FeedbackSchemaBase.md).[downVoted](FeedbackSchemaBase.md#downvoted)

#### Defined in

[types/schema.ts:299](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L299)

___

### expandKey

• **expandKey**: `string`

#### Inherited from

[FeedbackSchemaBase](FeedbackSchemaBase.md).[expandKey](FeedbackSchemaBase.md#expandkey)

#### Defined in

[types/schema.ts:300](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L300)

___

### feedbackType

• **feedbackType**: [`COMMENT`](../enums/FeedbackType.md#comment) \| [`REPLY`](../enums/FeedbackType.md#reply)

#### Overrides

[FeedbackSchemaBase](FeedbackSchemaBase.md).[feedbackType](FeedbackSchemaBase.md#feedbacktype)

#### Defined in

[types/schema.ts:348](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L348)

___

### flaggedBy

• **flaggedBy**: `unknown`

Always `null`

#### Inherited from

[FeedbackSchemaBase](FeedbackSchemaBase.md).[flaggedBy](FeedbackSchemaBase.md#flaggedby)

#### Defined in

[types/schema.ts:305](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L305)

___

### flaggedByUser

• **flaggedByUser**: `boolean`

#### Inherited from

[FeedbackSchemaBase](FeedbackSchemaBase.md).[flaggedByUser](FeedbackSchemaBase.md#flaggedbyuser)

#### Defined in

[types/schema.ts:306](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L306)

___

### flags

• **flags**: `unknown`

Always `null`

#### Inherited from

[FeedbackSchemaBase](FeedbackSchemaBase.md).[flags](FeedbackSchemaBase.md#flags)

#### Defined in

[types/schema.ts:310](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L310)

___

### focus

• **focus**: [`FeedbackFocusSchema`](FeedbackFocusSchema.md)

#### Inherited from

[FeedbackSchemaBase](FeedbackSchemaBase.md).[focus](FeedbackSchemaBase.md#focus)

#### Defined in

[types/schema.ts:311](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L311)

___

### focusUrl

• **focusUrl**: `string`

#### Inherited from

[FeedbackSchemaBase](FeedbackSchemaBase.md).[focusUrl](FeedbackSchemaBase.md#focusurl)

#### Defined in

[types/schema.ts:312](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L312)

___

### fromVideoAuthor

• **fromVideoAuthor**: `boolean`

#### Inherited from

[FeedbackSchemaBase](FeedbackSchemaBase.md).[fromVideoAuthor](FeedbackSchemaBase.md#fromvideoauthor)

#### Defined in

[types/schema.ts:313](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L313)

___

### isLocked

• **isLocked**: `boolean`

#### Inherited from

[FeedbackSchemaBase](FeedbackSchemaBase.md).[isLocked](FeedbackSchemaBase.md#islocked)

#### Defined in

[types/schema.ts:314](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L314)

___

### isPinned

• **isPinned**: `boolean`

#### Inherited from

[FeedbackSchemaBase](FeedbackSchemaBase.md).[isPinned](FeedbackSchemaBase.md#ispinned)

#### Defined in

[types/schema.ts:315](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L315)

___

### key

• **key**: `string`

Encrypted ID

#### Inherited from

[FeedbackSchemaBase](FeedbackSchemaBase.md).[key](FeedbackSchemaBase.md#key)

#### Defined in

[types/schema.ts:319](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L319)

___

### lowQualityScore

• **lowQualityScore**: `number`

#### Inherited from

[FeedbackSchemaBase](FeedbackSchemaBase.md).[lowQualityScore](FeedbackSchemaBase.md#lowqualityscore)

#### Defined in

[types/schema.ts:320](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L320)

___

### notifyOnAnswer

• **notifyOnAnswer**: `boolean`

#### Inherited from

[FeedbackSchemaBase](FeedbackSchemaBase.md).[notifyOnAnswer](FeedbackSchemaBase.md#notifyonanswer)

#### Defined in

[types/schema.ts:321](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L321)

___

### permalink

• **permalink**: `string`

#### Inherited from

[FeedbackSchemaBase](FeedbackSchemaBase.md).[permalink](FeedbackSchemaBase.md#permalink)

#### Defined in

[types/schema.ts:322](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L322)

___

### qualityKind

• **qualityKind**: `string`

#### Inherited from

[FeedbackSchemaBase](FeedbackSchemaBase.md).[qualityKind](FeedbackSchemaBase.md#qualitykind)

#### Defined in

[types/schema.ts:323](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L323)

___

### replyCount

• **replyCount**: `number`

#### Inherited from

[FeedbackSchemaBase](FeedbackSchemaBase.md).[replyCount](FeedbackSchemaBase.md#replycount)

#### Defined in

[types/schema.ts:324](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L324)

___

### replyExpandKeys

• **replyExpandKeys**: \`ag5zfmtoYW4tYWNhZGVteX$\{string}CxIIVXNlckRhdGEi$\{string}thaWRf$\{string}$\{string}$\{string}\` \| \`ag5zfmtoYW4tYWNhZGVteX$\{string}CxIIVXNlckRhdGEi$\{string}thaWRf$\{string}$\{string}$\{string}\`[]

Expand keys for parent feedback. Always 1-2 elements

#### Inherited from

[FeedbackSchemaBase](FeedbackSchemaBase.md).[replyExpandKeys](FeedbackSchemaBase.md#replyexpandkeys)

#### Defined in

[types/schema.ts:328](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L328)

___

### showLowQualityNotice

• **showLowQualityNotice**: `boolean`

Always `false`? May depend on the user

#### Inherited from

[FeedbackSchemaBase](FeedbackSchemaBase.md).[showLowQualityNotice](FeedbackSchemaBase.md#showlowqualitynotice)

#### Defined in

[types/schema.ts:332](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L332)

___

### sumVotesIncremented

• **sumVotesIncremented**: `number`

#### Inherited from

[FeedbackSchemaBase](FeedbackSchemaBase.md).[sumVotesIncremented](FeedbackSchemaBase.md#sumvotesincremented)

#### Defined in

[types/schema.ts:333](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L333)

___

### upVoted

• **upVoted**: `boolean`

#### Inherited from

[FeedbackSchemaBase](FeedbackSchemaBase.md).[upVoted](FeedbackSchemaBase.md#upvoted)

#### Defined in

[types/schema.ts:334](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/schema.ts#L334)
