# Khan API

## Namespaces

- [mutations](modules/mutations.md)
- [queries](modules/queries.md)

## Enumerations

- [FeedbackFocusKind](enums/FeedbackFocusKind.md)
- [FeedbackSort](enums/FeedbackSort.md)
- [FeedbackType](enums/FeedbackType.md)
- [FeedbackTypename](enums/FeedbackTypename.md)
- [ListProgramSortOrder](enums/ListProgramSortOrder.md)
- [MessageType](enums/MessageType.md)
- [ProgramEditorType](enums/ProgramEditorType.md)
- [ProgramType](enums/ProgramType.md)
- [ServiceErrorCode](enums/ServiceErrorCode.md)
- [ServiceErrorName](enums/ServiceErrorName.md)
- [UserAccessLevel](enums/UserAccessLevel.md)

## Classes

- [Answer](classes/Answer.md)
- [BaseMessage](classes/BaseMessage.md)
- [Client](classes/Client.md)
- [Message](classes/Message.md)
- [Program](classes/Program.md)
- [Question](classes/Question.md)
- [Reply](classes/Reply.md)
- [TipsAndThanks](classes/TipsAndThanks.md)
- [User](classes/User.md)

## Interfaces

- [AnswerFeedbackSchema](interfaces/AnswerFeedbackSchema.md)
- [AvatarSchema](interfaces/AvatarSchema.md)
- [BasicFeedbackSchema](interfaces/BasicFeedbackSchema.md)
- [FeedbackFocusSchema](interfaces/FeedbackFocusSchema.md)
- [FeedbackForFocusSchema](interfaces/FeedbackForFocusSchema.md)
- [FeedbackSchemaBase](interfaces/FeedbackSchemaBase.md)
- [IAnswer](interfaces/IAnswer.md)
- [IBaseMessage](interfaces/IBaseMessage.md)
- [IMessage](interfaces/IMessage.md)
- [IProgram](interfaces/IProgram.md)
- [IQuestion](interfaces/IQuestion.md)
- [IReply](interfaces/IReply.md)
- [IUser](interfaces/IUser.md)
- [InputErrorResponse](interfaces/InputErrorResponse.md)
- [ListProgramsSchema](interfaces/ListProgramsSchema.md)
- [LocaleSchema](interfaces/LocaleSchema.md)
- [OriginProgramSchema](interfaces/OriginProgramSchema.md)
- [PendingEmailVerificationSchema](interfaces/PendingEmailVerificationSchema.md)
- [ProfileSchema](interfaces/ProfileSchema.md)
- [ProgramRevisionSchema](interfaces/ProgramRevisionSchema.md)
- [ProgramSchema](interfaces/ProgramSchema.md)
- [QaExpandKeyInfoSchema](interfaces/QaExpandKeyInfoSchema.md)
- [QuestionFeedbackSchema](interfaces/QuestionFeedbackSchema.md)
- [RepliesSchema](interfaces/RepliesSchema.md)
- [TopicSchema](interfaces/TopicSchema.md)
- [UserSchema](interfaces/UserSchema.md)
- [UserStatisticsSchema](interfaces/UserStatisticsSchema.md)
- [UserSummarySchema](interfaces/UserSummarySchema.md)

## Type Aliases

### AvatarName

Ƭ **AvatarName**: typeof [`avatarNames`](README.md#avatarnames)[`number`]

#### Defined in

[types/strings.ts:21](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/strings.ts#L21)

___

### AvatarPNG

Ƭ **AvatarPNG**: \`https://www.khanacademy.org/images/avatars/$\{AvatarSlug}.png\`

#### Defined in

[types/strings.ts:30](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/strings.ts#L30)

___

### AvatarPath

Ƭ **AvatarPath**: \`/images/avatars/svg/$\{AvatarSlug}.svg\`

#### Defined in

[types/strings.ts:25](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/strings.ts#L25)

___

### AvatarSVG

Ƭ **AvatarSVG**: \`https://www.khanacademy.org$\{AvatarPath}\`

#### Defined in

[types/strings.ts:27](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/strings.ts#L27)

___

### AvatarSlug

Ƭ **AvatarSlug**: typeof [`avatarSlugs`](README.md#avatarslugs)[`number`]

#### Defined in

[types/strings.ts:23](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/strings.ts#L23)

___

### AvatarURL

Ƭ **AvatarURL**: [`AvatarSVG`](README.md#avatarsvg) \| [`AvatarPNG`](README.md#avatarpng)

#### Defined in

[types/strings.ts:33](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/strings.ts#L33)

___

### DataResponse

Ƭ **DataResponse**\<`T`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | `T` |

#### Defined in

[types/responses.ts:3](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/responses.ts#L3)

___

### Email

Ƭ **Email**: \`$\{string}@$\{string}.$\{string}\`

#### Defined in

[types/strings.ts:8](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/strings.ts#L8)

___

### EncryptedFeedbackKey

Ƭ **EncryptedFeedbackKey**: \`kaencrypted\_$\{string}\_$\{string}\`

#### Defined in

[types/strings.ts:73](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/strings.ts#L73)

___

### FeedbackKey

Ƭ **FeedbackKey**: \`ag5zfmtoYW4tYWNhZGVteX$\{string}CxIIVXNlckRhdGEi$\{string}thaWRf$\{string}$\{string}$\{string}\`

#### Defined in

[types/strings.ts:70](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/strings.ts#L70)

___

### GoogleID

Ƭ **GoogleID**: \`http://googleid.khanacademy.org/$\{number}\`

#### Defined in

[types/strings.ts:16](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/strings.ts#L16)

___

### ITipsAndThanks

Ƭ **ITipsAndThanks**: [`IMessage`](interfaces/IMessage.md)

#### Defined in

[lib/messages/TipsAndThanks.ts:7](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/lib/messages/TipsAndThanks.ts#L7)

___

### Kaid

Ƭ **Kaid**: \`kaid\_$\{number}\`

#### Defined in

[types/strings.ts:12](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/strings.ts#L12)

___

### Locale

Ƭ **Locale**: typeof [`URL_LOCALES`](README.md#url_locales)[`number`]

#### Defined in

[types/strings.ts:10](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/strings.ts#L10)

___

### ProgramID

Ƭ **ProgramID**: \`$\{number}\` \| `number`

#### Defined in

[types/strings.ts:37](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/strings.ts#L37)

___

### ProgramIDNumber

Ƭ **ProgramIDNumber**: `number`

#### Defined in

[types/strings.ts:36](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/strings.ts#L36)

___

### ProgramIDString

Ƭ **ProgramIDString**: \`$\{number}\`

#### Defined in

[types/strings.ts:35](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/strings.ts#L35)

___

### ProgramKey

Ƭ **ProgramKey**: \`ag5zfmtoYW4tYWNhZGVteXI$\{string}CxIKU2NyYXRjaHBhZB$\{string}$\{string}\`

#### Defined in

[types/strings.ts:43](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/strings.ts#L43)

___

### ProgramURL

Ƭ **ProgramURL**: \`http$\{string}://$\{string}khanacademy.$\{string}/$\{string}/$\{string}/$\{number}\`

#### Defined in

[types/strings.ts:40](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/strings.ts#L40)

___

### ProgramURLPath

Ƭ **ProgramURLPath**: typeof [`PROGRAM_URL_PATHS`](README.md#program_url_paths)[`number`]

#### Defined in

[types/strings.ts:39](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/strings.ts#L39)

___

### QualarooID

Ƭ **QualarooID**: \`\_gae\_bingo\_random:$\{string}\`

#### Defined in

[types/strings.ts:14](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/strings.ts#L14)

___

### ServiceErrorsResponse

Ƭ **ServiceErrorsResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `errors` | \{ `extensions`: \{ `code`: [`ServiceErrorCode`](enums/ServiceErrorCode.md) ; `serviceName`: [`ServiceErrorName`](enums/ServiceErrorName.md)  } ; `message`: `string` ; `path`: `string`[]  }[] |

#### Defined in

[types/responses.ts:7](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/responses.ts#L7)

___

### StandardResponse

Ƭ **StandardResponse**\<`T`\>: [`DataResponse`](README.md#dataresponse)\<`T`\> \| [`ServiceErrorsResponse`](README.md#serviceerrorsresponse) \| [`InputErrorResponse`](interfaces/InputErrorResponse.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Defined in

[types/responses.ts:25](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/responses.ts#L25)

___

### UserURL

Ƭ **UserURL**: \`http$\{string}://$\{string}khanacademy.$\{string}/profile/$\{string}\`

#### Defined in

[types/strings.ts:18](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/strings.ts#L18)

## Variables

### EmailRegex

• `Const` **EmailRegex**: `RegExp`

#### Defined in

[utils/regexes.ts:194](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/regexes.ts#L194)

___

### EmailRegexMatch

• `Const` **EmailRegexMatch**: `RegExp`

#### Defined in

[utils/regexes.ts:196](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/regexes.ts#L196)

___

### FeedbackKeyRegex

• `Const` **FeedbackKeyRegex**: `RegExp`

#### Defined in

[utils/regexes.ts:170](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/regexes.ts#L170)

___

### FeedbackKeyRegexMatch

• `Const` **FeedbackKeyRegexMatch**: `RegExp`

#### Defined in

[utils/regexes.ts:172](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/regexes.ts#L172)

___

### GoogleIDRegex

• `Const` **GoogleIDRegex**: `RegExp`

#### Defined in

[utils/regexes.ts:184](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/regexes.ts#L184)

___

### GoogleIDRegexMatch

• `Const` **GoogleIDRegexMatch**: `RegExp`

#### Defined in

[utils/regexes.ts:185](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/regexes.ts#L185)

___

### KaidRegex

• `Const` **KaidRegex**: `RegExp`

#### Defined in

[utils/regexes.ts:68](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/regexes.ts#L68)

___

### KaidRegexMatch

• `Const` **KaidRegexMatch**: `RegExp`

#### Defined in

[utils/regexes.ts:69](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/regexes.ts#L69)

___

### MESSAGE\_ENCRYPTED\_KEY\_LENGTHS

• `Const` **MESSAGE\_ENCRYPTED\_KEY\_LENGTHS**: readonly [``301``]

#### Defined in

[utils/regexes.ts:176](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/regexes.ts#L176)

___

### MESSAGE\_KEY\_LENGTHS

• `Const` **MESSAGE\_KEY\_LENGTHS**: readonly [``106``, ``107``, ``108``, ``110``, ``111``]

#### Defined in

[utils/regexes.ts:169](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/regexes.ts#L169)

___

### MessageEncryptedKeyRegex

• `Const` **MessageEncryptedKeyRegex**: `RegExp`

#### Defined in

[utils/regexes.ts:177](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/regexes.ts#L177)

___

### MessageEncryptedKeyRegexMatch

• `Const` **MessageEncryptedKeyRegexMatch**: `RegExp`

#### Defined in

[utils/regexes.ts:179](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/regexes.ts#L179)

___

### PROGRAM\_ID\_LENGTHS

• `Const` **PROGRAM\_ID\_LENGTHS**: readonly [``9``, ``10``, ``16``]

#### Defined in

[utils/regexes.ts:87](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/regexes.ts#L87)

___

### PROGRAM\_KEY\_LENGTHS

• `Const` **PROGRAM\_KEY\_LENGTHS**: readonly [``51``, ``54``]

#### Defined in

[utils/regexes.ts:137](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/regexes.ts#L137)

___

### PROGRAM\_URL\_PATHS

• `Const` **PROGRAM\_URL\_PATHS**: readonly [``"computer-programming"``, ``"cs"``, ``"pixar"``, ``"nasa"``, ``"piab-sandbox"``, ``"computer-science"``, ``"hour-of-code"``, ``"math"``, ``"differential-equations"``, ``"electrical-engineering"``, ``"mcat"``, ``"apchem-topic"``, ``"chemistry"``, ``"art-history-basics"``, ``"biology"``]

#### Defined in

[utils/regexes.ts:99](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/regexes.ts#L99)

___

### ProgramIDRegex

• `Const` **ProgramIDRegex**: `RegExp`

#### Defined in

[utils/regexes.ts:88](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/regexes.ts#L88)

___

### ProgramIDRegexMatch

• `Const` **ProgramIDRegexMatch**: `RegExp`

#### Defined in

[utils/regexes.ts:91](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/regexes.ts#L91)

___

### ProgramImagePathRegex

• `Const` **ProgramImagePathRegex**: `RegExp`

#### Defined in

[utils/regexes.ts:130](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/regexes.ts#L130)

___

### ProgramImagePathRegexMatch

• `Const` **ProgramImagePathRegexMatch**: `RegExp`

#### Defined in

[utils/regexes.ts:135](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/regexes.ts#L135)

___

### ProgramKeyRegex

• `Const` **ProgramKeyRegex**: `RegExp`

#### Defined in

[utils/regexes.ts:138](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/regexes.ts#L138)

___

### ProgramKeyRegexMatch

• `Const` **ProgramKeyRegexMatch**: `RegExp`

#### Defined in

[utils/regexes.ts:140](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/regexes.ts#L140)

___

### ProgramURLRegex

• `Const` **ProgramURLRegex**: `RegExp`

#### Defined in

[utils/regexes.ts:116](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/regexes.ts#L116)

___

### ProgramURLRegexMatch

• `Const` **ProgramURLRegexMatch**: `RegExp`

#### Defined in

[utils/regexes.ts:124](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/regexes.ts#L124)

___

### QualarooIDRegex

• `Const` **QualarooIDRegex**: `RegExp`

#### Defined in

[utils/regexes.ts:189](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/regexes.ts#L189)

___

### QualarooIDRegexMatch

• `Const` **QualarooIDRegexMatch**: `RegExp`

#### Defined in

[utils/regexes.ts:190](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/regexes.ts#L190)

___

### TypeToMessageClass

• `Const` **TypeToMessageClass**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `COMMENT` | typeof [`TipsAndThanks`](classes/TipsAndThanks.md) |
| `PROJECT_HELP_QUESTION` | typeof [`Question`](classes/Question.md) |
| `QUESTION` | typeof [`Question`](classes/Question.md) |

#### Defined in

[utils/messages.ts:38](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/messages.ts#L38)

___

### URL\_LOCALES

• `Const` **URL\_LOCALES**: readonly [``"as"``, ``"az"``, ``"cs"``, ``"da"``, ``"el"``, ``"gu"``, ``"hu"``, ``"id"``, ``"it"``, ``"lt"``, ``"ja"``, ``"kk"``, ``"kn"``, ``"ky"``, ``"lv"``, ``"mn"``, ``"mr"``, ``"my"``, ``"nl"``, ``"pt-pt"``, ``"ru"``, ``"sv"``, ``"ta"``, ``"uz"``, ``"bg"``, ``"bn"``, ``"de"``, ``"en"``, ``"es"``, ``"fr"``, ``"hi"``, ``"hy"``, ``"ka"``, ``"km"``, ``"ko"``, ``"nb"``, ``"pa"``, ``"pl"``, ``"pt"``, ``"ro"``, ``"sr"``, ``"tr"``, ``"vi"``, ``"zh-hans"``, ``"sgn-us"``]

#### Defined in

[utils/regexes.ts:20](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/regexes.ts#L20)

___

### URL\_TLDS

• `Const` **URL\_TLDS**: readonly [``"com"``, ``"org"``]

#### Defined in

[utils/regexes.ts:19](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/regexes.ts#L19)

___

### UserURLRegex

• `Const` **UserURLRegex**: `RegExp`

#### Defined in

[utils/regexes.ts:72](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/regexes.ts#L72)

___

### UserURLRegexMatch

• `Const` **UserURLRegexMatch**: `RegExp`

#### Defined in

[utils/regexes.ts:83](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/regexes.ts#L83)

___

### avatarNames

• `Const` **avatarNames**: readonly [``"blobby_green_style"``, ``"blobby_yellow_style"``, ``"blobby_blue_style"``, ``"blobby_purple_style"``, ``"area_52_yellow_style"``, ``"area_52_blue_style"``, ``"area_52_green_style"``, ``"area_52_purple_style"``, ``"eggleston_blue_style"``, ``"eggleston_yellow_style"``, ``"eggleston_green_style"``, ``"eggleston_orange_style"``, ``"scuttlebug_purple_style"``, ``"scuttlebug_yellow_style"``, ``"scuttlebug_blue_style"``, ``"scuttlebug_green_style"``, ``"boggle_yellow_style"``, ``"boggle_blue_style"``, ``"boggle_green_style"``, ``"boggle_purple_style"``, ``"sneak_peak_green_style"``, ``"sneak_peak_yellow_style"``, ``"sneak_peak_blue_style"``, ``"sneak_peak_purple_style"``, ``"stelly_blue_style"``, ``"stelly_yellow_style"``, ``"stelly_green_style"``, ``"stelly_orange_style"``, ``"cacteye_purple_style"``, ``"cacteye_yellow_style"``, ``"cacteye_blue_style"``, ``"cacteye_green_style"``, ``"leaf_green_style"``, ``"leaf_blue_style"``, ``"leaf_grey_style"``, ``"leaf_red_style"``, ``"leaf_orange_style"``, ``"leaf_yellow_style"``, ``"leafers_seed_style"``, ``"leafers_seedling_style"``, ``"leafers_sapling_style"``, ``"leafers_tree_style"``, ``"leafers_ultimate_style"``, ``"piceratops_seed_style"``, ``"piceratops_seedling_style"``, ``"piceratops_sapling_style"``, ``"piceratops_tree_style"``, ``"piceratops_ultimate_style"``, ``"duskpin_seed_style"``, ``"duskpin_seedling_style"``, ``"duskpin_sapling_style"``, ``"duskpin_tree_style"``, ``"duskpin_ultimate_style"``, ``"primosaur_seed_style"``, ``"primosaur_seedling_style"``, ``"primosaur_sapling_style"``, ``"primosaur_tree_style"``, ``"primosaur_ultimate_style"``, ``"starky_seed_style"``, ``"starky_seedling_style"``, ``"starky_sapling_style"``, ``"starky_tree_style"``, ``"starky_ultimate_style"``, ``"aqualine_seed_style"``, ``"aqualine_seedling_style"``, ``"aqualine_sapling_style"``, ``"aqualine_tree_style"``, ``"aqualine_ultimate_style"``, ``"spunky_sam_blue_style"``, ``"spunky_sam_green_style"``, ``"spunky_sam_orange_style"``, ``"spunky_sam_red_style"``, ``"marcimus_pink_style"``, ``"marcimus_orange_style"``, ``"marcimus_red_style"``, ``"marcimus_purple_style"``, ``"mr_pink_red_style"``, ``"mr_pink_green_style"``, ``"mr_pink_orange_style"``, ``"female_robot_amelia_style"``, ``"female_robot_ada_style"``, ``"female_robot_grace_style"``, ``"male_robot_johnny_style"``, ``"male_robot_donald_style"``, ``"male_robot_hal_style"``, ``"orange_juice_squid_orange_style"``, ``"purple_pi_purple_style"``, ``"purple_pi_pink_style"``, ``"purple_pi_teal_style"``, ``"mr_pants_teal_style"``, ``"mr_pants_green_style"``, ``"mr_pants_orange_style"``, ``"mr_pants_pink_style"``, ``"mr_pants_purple_style"``, ``"old_spice_man_green_style"``, ``"old_spice_man_blue_style"``, ``"winston_default_style"``, ``"winston_baby_style"``, ``"ohnoes_default_style"``, ``"hopper_happy_style"``, ``"hopper_jumping_style"``, ``"hopper_cool_style"``]

#### Defined in

[utils/avatars.ts:10](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/avatars.ts#L10)

___

### avatarSlugs

• `Const` **avatarSlugs**: readonly [``"blobby-green"``, ``"blobby-yellow"``, ``"blobby-blue"``, ``"blobby-purple"``, ``"area-52-yellow"``, ``"area-52-blue"``, ``"area-52-green"``, ``"area-52-purple"``, ``"eggleston-blue"``, ``"eggleston-yellow"``, ``"eggleston-green"``, ``"eggleston-orange"``, ``"scuttlebug-purple"``, ``"scuttlebug-yellow"``, ``"scuttlebug-blue"``, ``"scuttlebug-green"``, ``"boggle-yellow"``, ``"boggle-blue"``, ``"boggle-green"``, ``"boggle-purple"``, ``"sneak-peak-green"``, ``"sneak-peak-yellow"``, ``"sneak-peak-blue"``, ``"sneak-peak-purple"``, ``"stelly-blue"``, ``"stelly-yellow"``, ``"stelly-green"``, ``"stelly-orange"``, ``"cacteye-purple"``, ``"cacteye-yellow"``, ``"cacteye-blue"``, ``"cacteye-green"``, ``"leaf-green"``, ``"leaf-blue"``, ``"leaf-grey"``, ``"leaf-red"``, ``"leaf-orange"``, ``"leaf-yellow"``, ``"leafers-seed"``, ``"leafers-seedling"``, ``"leafers-sapling"``, ``"leafers-tree"``, ``"leafers-ultimate"``, ``"piceratops-seed"``, ``"piceratops-seedling"``, ``"piceratops-sapling"``, ``"piceratops-tree"``, ``"piceratops-ultimate"``, ``"duskpin-seed"``, ``"duskpin-seedling"``, ``"duskpin-sapling"``, ``"duskpin-tree"``, ``"duskpin-ultimate"``, ``"primosaur-seed"``, ``"primosaur-seedling"``, ``"primosaur-sapling"``, ``"primosaur-tree"``, ``"primosaur-ultimate"``, ``"starky-seed"``, ``"starky-seedling"``, ``"starky-sapling"``, ``"starky-tree"``, ``"starky-ultimate"``, ``"aqualine-seed"``, ``"aqualine-seedling"``, ``"aqualine-sapling"``, ``"aqualine-tree"``, ``"aqualine-ultimate"``, ``"spunky-sam"``, ``"spunky-sam-green"``, ``"spunky-sam-orange"``, ``"spunky-sam-red"``, ``"marcimus"``, ``"marcimus-orange"``, ``"marcimus-red"``, ``"marcimus-purple"``, ``"mr-pink"``, ``"mr-pink-green"``, ``"mr-pink-orange"``, ``"robot_female_1"``, ``"robot_female_2"``, ``"robot_female_3"``, ``"robot_male_1"``, ``"robot_male_2"``, ``"robot_male_3"``, ``"orange-juice-squid"``, ``"purple-pi"``, ``"purple-pi-pink"``, ``"purple-pi-teal"``, ``"mr-pants"``, ``"mr-pants-green"``, ``"mr-pants-orange"``, ``"mr-pants-pink"``, ``"mr-pants-purple"``, ``"old-spice-man"``, ``"old-spice-man-blue"``, ``"cs-winston"``, ``"cs-winston-baby"``, ``"cs-ohnoes"``, ``"cs-hopper-happy"``, ``"cs-hopper-jumping"``, ``"cs-hopper-cool"``]

#### Defined in

[utils/avatars.ts:117](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/avatars.ts#L117)

## Functions

### assertDataResponse

▸ **assertDataResponse**\<`T`\>(`response`): asserts response is DataResponse\<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | [`StandardResponse`](README.md#standardresponse)\<`T`\> |

#### Returns

asserts response is DataResponse\<T\>

#### Defined in

[types/responses.ts:54](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/responses.ts#L54)

___

### avatarNameToSlug

▸ **avatarNameToSlug**(`name`): ``"blobby-green"`` \| ``"blobby-yellow"`` \| ``"blobby-blue"`` \| ``"blobby-purple"`` \| ``"area-52-yellow"`` \| ``"area-52-blue"`` \| ``"area-52-green"`` \| ``"area-52-purple"`` \| ``"eggleston-blue"`` \| ``"eggleston-yellow"`` \| ``"eggleston-green"`` \| ``"eggleston-orange"`` \| ``"scuttlebug-purple"`` \| ``"scuttlebug-yellow"`` \| ``"scuttlebug-blue"`` \| ``"scuttlebug-green"`` \| ``"boggle-yellow"`` \| ``"boggle-blue"`` \| ``"boggle-green"`` \| ``"boggle-purple"`` \| ``"sneak-peak-green"`` \| ``"sneak-peak-yellow"`` \| ``"sneak-peak-blue"`` \| ``"sneak-peak-purple"`` \| ``"stelly-blue"`` \| ``"stelly-yellow"`` \| ``"stelly-green"`` \| ``"stelly-orange"`` \| ``"cacteye-purple"`` \| ``"cacteye-yellow"`` \| ``"cacteye-blue"`` \| ``"cacteye-green"`` \| ``"leaf-green"`` \| ``"leaf-blue"`` \| ``"leaf-grey"`` \| ``"leaf-red"`` \| ``"leaf-orange"`` \| ``"leaf-yellow"`` \| ``"leafers-seed"`` \| ``"leafers-seedling"`` \| ``"leafers-sapling"`` \| ``"leafers-tree"`` \| ``"leafers-ultimate"`` \| ``"piceratops-seed"`` \| ``"piceratops-seedling"`` \| ``"piceratops-sapling"`` \| ``"piceratops-tree"`` \| ``"piceratops-ultimate"`` \| ``"duskpin-seed"`` \| ``"duskpin-seedling"`` \| ``"duskpin-sapling"`` \| ``"duskpin-tree"`` \| ``"duskpin-ultimate"`` \| ``"primosaur-seed"`` \| ``"primosaur-seedling"`` \| ``"primosaur-sapling"`` \| ``"primosaur-tree"`` \| ``"primosaur-ultimate"`` \| ``"starky-seed"`` \| ``"starky-seedling"`` \| ``"starky-sapling"`` \| ``"starky-tree"`` \| ``"starky-ultimate"`` \| ``"aqualine-seed"`` \| ``"aqualine-seedling"`` \| ``"aqualine-sapling"`` \| ``"aqualine-tree"`` \| ``"aqualine-ultimate"`` \| ``"spunky-sam"`` \| ``"spunky-sam-green"`` \| ``"spunky-sam-orange"`` \| ``"spunky-sam-red"`` \| ``"marcimus"`` \| ``"marcimus-orange"`` \| ``"marcimus-red"`` \| ``"marcimus-purple"`` \| ``"mr-pink"`` \| ``"mr-pink-green"`` \| ``"mr-pink-orange"`` \| ``"robot_female_1"`` \| ``"robot_female_2"`` \| ``"robot_female_3"`` \| ``"robot_male_1"`` \| ``"robot_male_2"`` \| ``"robot_male_3"`` \| ``"orange-juice-squid"`` \| ``"purple-pi"`` \| ``"purple-pi-pink"`` \| ``"purple-pi-teal"`` \| ``"mr-pants"`` \| ``"mr-pants-green"`` \| ``"mr-pants-orange"`` \| ``"mr-pants-pink"`` \| ``"mr-pants-purple"`` \| ``"old-spice-man"`` \| ``"old-spice-man-blue"`` \| ``"cs-winston"`` \| ``"cs-winston-baby"`` \| ``"cs-ohnoes"`` \| ``"cs-hopper-happy"`` \| ``"cs-hopper-jumping"`` \| ``"cs-hopper-cool"``

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"blobby_green_style"`` \| ``"blobby_yellow_style"`` \| ``"blobby_blue_style"`` \| ``"blobby_purple_style"`` \| ``"area_52_yellow_style"`` \| ``"area_52_blue_style"`` \| ``"area_52_green_style"`` \| ``"area_52_purple_style"`` \| ``"eggleston_blue_style"`` \| ``"eggleston_yellow_style"`` \| ``"eggleston_green_style"`` \| ``"eggleston_orange_style"`` \| ``"scuttlebug_purple_style"`` \| ``"scuttlebug_yellow_style"`` \| ``"scuttlebug_blue_style"`` \| ``"scuttlebug_green_style"`` \| ``"boggle_yellow_style"`` \| ``"boggle_blue_style"`` \| ``"boggle_green_style"`` \| ``"boggle_purple_style"`` \| ``"sneak_peak_green_style"`` \| ``"sneak_peak_yellow_style"`` \| ``"sneak_peak_blue_style"`` \| ``"sneak_peak_purple_style"`` \| ``"stelly_blue_style"`` \| ``"stelly_yellow_style"`` \| ``"stelly_green_style"`` \| ``"stelly_orange_style"`` \| ``"cacteye_purple_style"`` \| ``"cacteye_yellow_style"`` \| ``"cacteye_blue_style"`` \| ``"cacteye_green_style"`` \| ``"leaf_green_style"`` \| ``"leaf_blue_style"`` \| ``"leaf_grey_style"`` \| ``"leaf_red_style"`` \| ``"leaf_orange_style"`` \| ``"leaf_yellow_style"`` \| ``"leafers_seed_style"`` \| ``"leafers_seedling_style"`` \| ``"leafers_sapling_style"`` \| ``"leafers_tree_style"`` \| ``"leafers_ultimate_style"`` \| ``"piceratops_seed_style"`` \| ``"piceratops_seedling_style"`` \| ``"piceratops_sapling_style"`` \| ``"piceratops_tree_style"`` \| ``"piceratops_ultimate_style"`` \| ``"duskpin_seed_style"`` \| ``"duskpin_seedling_style"`` \| ``"duskpin_sapling_style"`` \| ``"duskpin_tree_style"`` \| ``"duskpin_ultimate_style"`` \| ``"primosaur_seed_style"`` \| ``"primosaur_seedling_style"`` \| ``"primosaur_sapling_style"`` \| ``"primosaur_tree_style"`` \| ``"primosaur_ultimate_style"`` \| ``"starky_seed_style"`` \| ``"starky_seedling_style"`` \| ``"starky_sapling_style"`` \| ``"starky_tree_style"`` \| ``"starky_ultimate_style"`` \| ``"aqualine_seed_style"`` \| ``"aqualine_seedling_style"`` \| ``"aqualine_sapling_style"`` \| ``"aqualine_tree_style"`` \| ``"aqualine_ultimate_style"`` \| ``"spunky_sam_blue_style"`` \| ``"spunky_sam_green_style"`` \| ``"spunky_sam_orange_style"`` \| ``"spunky_sam_red_style"`` \| ``"marcimus_pink_style"`` \| ``"marcimus_orange_style"`` \| ``"marcimus_red_style"`` \| ``"marcimus_purple_style"`` \| ``"mr_pink_red_style"`` \| ``"mr_pink_green_style"`` \| ``"mr_pink_orange_style"`` \| ``"female_robot_amelia_style"`` \| ``"female_robot_ada_style"`` \| ``"female_robot_grace_style"`` \| ``"male_robot_johnny_style"`` \| ``"male_robot_donald_style"`` \| ``"male_robot_hal_style"`` \| ``"orange_juice_squid_orange_style"`` \| ``"purple_pi_purple_style"`` \| ``"purple_pi_pink_style"`` \| ``"purple_pi_teal_style"`` \| ``"mr_pants_teal_style"`` \| ``"mr_pants_green_style"`` \| ``"mr_pants_orange_style"`` \| ``"mr_pants_pink_style"`` \| ``"mr_pants_purple_style"`` \| ``"old_spice_man_green_style"`` \| ``"old_spice_man_blue_style"`` \| ``"winston_default_style"`` \| ``"winston_baby_style"`` \| ``"ohnoes_default_style"`` \| ``"hopper_happy_style"`` \| ``"hopper_jumping_style"`` \| ``"hopper_cool_style"`` |

#### Returns

``"blobby-green"`` \| ``"blobby-yellow"`` \| ``"blobby-blue"`` \| ``"blobby-purple"`` \| ``"area-52-yellow"`` \| ``"area-52-blue"`` \| ``"area-52-green"`` \| ``"area-52-purple"`` \| ``"eggleston-blue"`` \| ``"eggleston-yellow"`` \| ``"eggleston-green"`` \| ``"eggleston-orange"`` \| ``"scuttlebug-purple"`` \| ``"scuttlebug-yellow"`` \| ``"scuttlebug-blue"`` \| ``"scuttlebug-green"`` \| ``"boggle-yellow"`` \| ``"boggle-blue"`` \| ``"boggle-green"`` \| ``"boggle-purple"`` \| ``"sneak-peak-green"`` \| ``"sneak-peak-yellow"`` \| ``"sneak-peak-blue"`` \| ``"sneak-peak-purple"`` \| ``"stelly-blue"`` \| ``"stelly-yellow"`` \| ``"stelly-green"`` \| ``"stelly-orange"`` \| ``"cacteye-purple"`` \| ``"cacteye-yellow"`` \| ``"cacteye-blue"`` \| ``"cacteye-green"`` \| ``"leaf-green"`` \| ``"leaf-blue"`` \| ``"leaf-grey"`` \| ``"leaf-red"`` \| ``"leaf-orange"`` \| ``"leaf-yellow"`` \| ``"leafers-seed"`` \| ``"leafers-seedling"`` \| ``"leafers-sapling"`` \| ``"leafers-tree"`` \| ``"leafers-ultimate"`` \| ``"piceratops-seed"`` \| ``"piceratops-seedling"`` \| ``"piceratops-sapling"`` \| ``"piceratops-tree"`` \| ``"piceratops-ultimate"`` \| ``"duskpin-seed"`` \| ``"duskpin-seedling"`` \| ``"duskpin-sapling"`` \| ``"duskpin-tree"`` \| ``"duskpin-ultimate"`` \| ``"primosaur-seed"`` \| ``"primosaur-seedling"`` \| ``"primosaur-sapling"`` \| ``"primosaur-tree"`` \| ``"primosaur-ultimate"`` \| ``"starky-seed"`` \| ``"starky-seedling"`` \| ``"starky-sapling"`` \| ``"starky-tree"`` \| ``"starky-ultimate"`` \| ``"aqualine-seed"`` \| ``"aqualine-seedling"`` \| ``"aqualine-sapling"`` \| ``"aqualine-tree"`` \| ``"aqualine-ultimate"`` \| ``"spunky-sam"`` \| ``"spunky-sam-green"`` \| ``"spunky-sam-orange"`` \| ``"spunky-sam-red"`` \| ``"marcimus"`` \| ``"marcimus-orange"`` \| ``"marcimus-red"`` \| ``"marcimus-purple"`` \| ``"mr-pink"`` \| ``"mr-pink-green"`` \| ``"mr-pink-orange"`` \| ``"robot_female_1"`` \| ``"robot_female_2"`` \| ``"robot_female_3"`` \| ``"robot_male_1"`` \| ``"robot_male_2"`` \| ``"robot_male_3"`` \| ``"orange-juice-squid"`` \| ``"purple-pi"`` \| ``"purple-pi-pink"`` \| ``"purple-pi-teal"`` \| ``"mr-pants"`` \| ``"mr-pants-green"`` \| ``"mr-pants-orange"`` \| ``"mr-pants-pink"`` \| ``"mr-pants-purple"`` \| ``"old-spice-man"`` \| ``"old-spice-man-blue"`` \| ``"cs-winston"`` \| ``"cs-winston-baby"`` \| ``"cs-ohnoes"`` \| ``"cs-hopper-happy"`` \| ``"cs-hopper-jumping"`` \| ``"cs-hopper-cool"``

#### Defined in

[utils/avatars.ts:222](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/avatars.ts#L222)

___

### avatarSlugToName

▸ **avatarSlugToName**(`slug`): ``"blobby_green_style"`` \| ``"blobby_yellow_style"`` \| ``"blobby_blue_style"`` \| ``"blobby_purple_style"`` \| ``"area_52_yellow_style"`` \| ``"area_52_blue_style"`` \| ``"area_52_green_style"`` \| ``"area_52_purple_style"`` \| ``"eggleston_blue_style"`` \| ``"eggleston_yellow_style"`` \| ``"eggleston_green_style"`` \| ``"eggleston_orange_style"`` \| ``"scuttlebug_purple_style"`` \| ``"scuttlebug_yellow_style"`` \| ``"scuttlebug_blue_style"`` \| ``"scuttlebug_green_style"`` \| ``"boggle_yellow_style"`` \| ``"boggle_blue_style"`` \| ``"boggle_green_style"`` \| ``"boggle_purple_style"`` \| ``"sneak_peak_green_style"`` \| ``"sneak_peak_yellow_style"`` \| ``"sneak_peak_blue_style"`` \| ``"sneak_peak_purple_style"`` \| ``"stelly_blue_style"`` \| ``"stelly_yellow_style"`` \| ``"stelly_green_style"`` \| ``"stelly_orange_style"`` \| ``"cacteye_purple_style"`` \| ``"cacteye_yellow_style"`` \| ``"cacteye_blue_style"`` \| ``"cacteye_green_style"`` \| ``"leaf_green_style"`` \| ``"leaf_blue_style"`` \| ``"leaf_grey_style"`` \| ``"leaf_red_style"`` \| ``"leaf_orange_style"`` \| ``"leaf_yellow_style"`` \| ``"leafers_seed_style"`` \| ``"leafers_seedling_style"`` \| ``"leafers_sapling_style"`` \| ``"leafers_tree_style"`` \| ``"leafers_ultimate_style"`` \| ``"piceratops_seed_style"`` \| ``"piceratops_seedling_style"`` \| ``"piceratops_sapling_style"`` \| ``"piceratops_tree_style"`` \| ``"piceratops_ultimate_style"`` \| ``"duskpin_seed_style"`` \| ``"duskpin_seedling_style"`` \| ``"duskpin_sapling_style"`` \| ``"duskpin_tree_style"`` \| ``"duskpin_ultimate_style"`` \| ``"primosaur_seed_style"`` \| ``"primosaur_seedling_style"`` \| ``"primosaur_sapling_style"`` \| ``"primosaur_tree_style"`` \| ``"primosaur_ultimate_style"`` \| ``"starky_seed_style"`` \| ``"starky_seedling_style"`` \| ``"starky_sapling_style"`` \| ``"starky_tree_style"`` \| ``"starky_ultimate_style"`` \| ``"aqualine_seed_style"`` \| ``"aqualine_seedling_style"`` \| ``"aqualine_sapling_style"`` \| ``"aqualine_tree_style"`` \| ``"aqualine_ultimate_style"`` \| ``"spunky_sam_blue_style"`` \| ``"spunky_sam_green_style"`` \| ``"spunky_sam_orange_style"`` \| ``"spunky_sam_red_style"`` \| ``"marcimus_pink_style"`` \| ``"marcimus_orange_style"`` \| ``"marcimus_red_style"`` \| ``"marcimus_purple_style"`` \| ``"mr_pink_red_style"`` \| ``"mr_pink_green_style"`` \| ``"mr_pink_orange_style"`` \| ``"female_robot_amelia_style"`` \| ``"female_robot_ada_style"`` \| ``"female_robot_grace_style"`` \| ``"male_robot_johnny_style"`` \| ``"male_robot_donald_style"`` \| ``"male_robot_hal_style"`` \| ``"orange_juice_squid_orange_style"`` \| ``"purple_pi_purple_style"`` \| ``"purple_pi_pink_style"`` \| ``"purple_pi_teal_style"`` \| ``"mr_pants_teal_style"`` \| ``"mr_pants_green_style"`` \| ``"mr_pants_orange_style"`` \| ``"mr_pants_pink_style"`` \| ``"mr_pants_purple_style"`` \| ``"old_spice_man_green_style"`` \| ``"old_spice_man_blue_style"`` \| ``"winston_default_style"`` \| ``"winston_baby_style"`` \| ``"ohnoes_default_style"`` \| ``"hopper_happy_style"`` \| ``"hopper_jumping_style"`` \| ``"hopper_cool_style"``

#### Parameters

| Name | Type |
| :------ | :------ |
| `slug` | ``"blobby-green"`` \| ``"blobby-yellow"`` \| ``"blobby-blue"`` \| ``"blobby-purple"`` \| ``"area-52-yellow"`` \| ``"area-52-blue"`` \| ``"area-52-green"`` \| ``"area-52-purple"`` \| ``"eggleston-blue"`` \| ``"eggleston-yellow"`` \| ``"eggleston-green"`` \| ``"eggleston-orange"`` \| ``"scuttlebug-purple"`` \| ``"scuttlebug-yellow"`` \| ``"scuttlebug-blue"`` \| ``"scuttlebug-green"`` \| ``"boggle-yellow"`` \| ``"boggle-blue"`` \| ``"boggle-green"`` \| ``"boggle-purple"`` \| ``"sneak-peak-green"`` \| ``"sneak-peak-yellow"`` \| ``"sneak-peak-blue"`` \| ``"sneak-peak-purple"`` \| ``"stelly-blue"`` \| ``"stelly-yellow"`` \| ``"stelly-green"`` \| ``"stelly-orange"`` \| ``"cacteye-purple"`` \| ``"cacteye-yellow"`` \| ``"cacteye-blue"`` \| ``"cacteye-green"`` \| ``"leaf-green"`` \| ``"leaf-blue"`` \| ``"leaf-grey"`` \| ``"leaf-red"`` \| ``"leaf-orange"`` \| ``"leaf-yellow"`` \| ``"leafers-seed"`` \| ``"leafers-seedling"`` \| ``"leafers-sapling"`` \| ``"leafers-tree"`` \| ``"leafers-ultimate"`` \| ``"piceratops-seed"`` \| ``"piceratops-seedling"`` \| ``"piceratops-sapling"`` \| ``"piceratops-tree"`` \| ``"piceratops-ultimate"`` \| ``"duskpin-seed"`` \| ``"duskpin-seedling"`` \| ``"duskpin-sapling"`` \| ``"duskpin-tree"`` \| ``"duskpin-ultimate"`` \| ``"primosaur-seed"`` \| ``"primosaur-seedling"`` \| ``"primosaur-sapling"`` \| ``"primosaur-tree"`` \| ``"primosaur-ultimate"`` \| ``"starky-seed"`` \| ``"starky-seedling"`` \| ``"starky-sapling"`` \| ``"starky-tree"`` \| ``"starky-ultimate"`` \| ``"aqualine-seed"`` \| ``"aqualine-seedling"`` \| ``"aqualine-sapling"`` \| ``"aqualine-tree"`` \| ``"aqualine-ultimate"`` \| ``"spunky-sam"`` \| ``"spunky-sam-green"`` \| ``"spunky-sam-orange"`` \| ``"spunky-sam-red"`` \| ``"marcimus"`` \| ``"marcimus-orange"`` \| ``"marcimus-red"`` \| ``"marcimus-purple"`` \| ``"mr-pink"`` \| ``"mr-pink-green"`` \| ``"mr-pink-orange"`` \| ``"robot_female_1"`` \| ``"robot_female_2"`` \| ``"robot_female_3"`` \| ``"robot_male_1"`` \| ``"robot_male_2"`` \| ``"robot_male_3"`` \| ``"orange-juice-squid"`` \| ``"purple-pi"`` \| ``"purple-pi-pink"`` \| ``"purple-pi-teal"`` \| ``"mr-pants"`` \| ``"mr-pants-green"`` \| ``"mr-pants-orange"`` \| ``"mr-pants-pink"`` \| ``"mr-pants-purple"`` \| ``"old-spice-man"`` \| ``"old-spice-man-blue"`` \| ``"cs-winston"`` \| ``"cs-winston-baby"`` \| ``"cs-ohnoes"`` \| ``"cs-hopper-happy"`` \| ``"cs-hopper-jumping"`` \| ``"cs-hopper-cool"`` |

#### Returns

``"blobby_green_style"`` \| ``"blobby_yellow_style"`` \| ``"blobby_blue_style"`` \| ``"blobby_purple_style"`` \| ``"area_52_yellow_style"`` \| ``"area_52_blue_style"`` \| ``"area_52_green_style"`` \| ``"area_52_purple_style"`` \| ``"eggleston_blue_style"`` \| ``"eggleston_yellow_style"`` \| ``"eggleston_green_style"`` \| ``"eggleston_orange_style"`` \| ``"scuttlebug_purple_style"`` \| ``"scuttlebug_yellow_style"`` \| ``"scuttlebug_blue_style"`` \| ``"scuttlebug_green_style"`` \| ``"boggle_yellow_style"`` \| ``"boggle_blue_style"`` \| ``"boggle_green_style"`` \| ``"boggle_purple_style"`` \| ``"sneak_peak_green_style"`` \| ``"sneak_peak_yellow_style"`` \| ``"sneak_peak_blue_style"`` \| ``"sneak_peak_purple_style"`` \| ``"stelly_blue_style"`` \| ``"stelly_yellow_style"`` \| ``"stelly_green_style"`` \| ``"stelly_orange_style"`` \| ``"cacteye_purple_style"`` \| ``"cacteye_yellow_style"`` \| ``"cacteye_blue_style"`` \| ``"cacteye_green_style"`` \| ``"leaf_green_style"`` \| ``"leaf_blue_style"`` \| ``"leaf_grey_style"`` \| ``"leaf_red_style"`` \| ``"leaf_orange_style"`` \| ``"leaf_yellow_style"`` \| ``"leafers_seed_style"`` \| ``"leafers_seedling_style"`` \| ``"leafers_sapling_style"`` \| ``"leafers_tree_style"`` \| ``"leafers_ultimate_style"`` \| ``"piceratops_seed_style"`` \| ``"piceratops_seedling_style"`` \| ``"piceratops_sapling_style"`` \| ``"piceratops_tree_style"`` \| ``"piceratops_ultimate_style"`` \| ``"duskpin_seed_style"`` \| ``"duskpin_seedling_style"`` \| ``"duskpin_sapling_style"`` \| ``"duskpin_tree_style"`` \| ``"duskpin_ultimate_style"`` \| ``"primosaur_seed_style"`` \| ``"primosaur_seedling_style"`` \| ``"primosaur_sapling_style"`` \| ``"primosaur_tree_style"`` \| ``"primosaur_ultimate_style"`` \| ``"starky_seed_style"`` \| ``"starky_seedling_style"`` \| ``"starky_sapling_style"`` \| ``"starky_tree_style"`` \| ``"starky_ultimate_style"`` \| ``"aqualine_seed_style"`` \| ``"aqualine_seedling_style"`` \| ``"aqualine_sapling_style"`` \| ``"aqualine_tree_style"`` \| ``"aqualine_ultimate_style"`` \| ``"spunky_sam_blue_style"`` \| ``"spunky_sam_green_style"`` \| ``"spunky_sam_orange_style"`` \| ``"spunky_sam_red_style"`` \| ``"marcimus_pink_style"`` \| ``"marcimus_orange_style"`` \| ``"marcimus_red_style"`` \| ``"marcimus_purple_style"`` \| ``"mr_pink_red_style"`` \| ``"mr_pink_green_style"`` \| ``"mr_pink_orange_style"`` \| ``"female_robot_amelia_style"`` \| ``"female_robot_ada_style"`` \| ``"female_robot_grace_style"`` \| ``"male_robot_johnny_style"`` \| ``"male_robot_donald_style"`` \| ``"male_robot_hal_style"`` \| ``"orange_juice_squid_orange_style"`` \| ``"purple_pi_purple_style"`` \| ``"purple_pi_pink_style"`` \| ``"purple_pi_teal_style"`` \| ``"mr_pants_teal_style"`` \| ``"mr_pants_green_style"`` \| ``"mr_pants_orange_style"`` \| ``"mr_pants_pink_style"`` \| ``"mr_pants_purple_style"`` \| ``"old_spice_man_green_style"`` \| ``"old_spice_man_blue_style"`` \| ``"winston_default_style"`` \| ``"winston_baby_style"`` \| ``"ohnoes_default_style"`` \| ``"hopper_happy_style"`` \| ``"hopper_jumping_style"`` \| ``"hopper_cool_style"``

#### Defined in

[utils/avatars.ts:226](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/avatars.ts#L226)

___

### convertAvatarPNGToSVG

▸ **convertAvatarPNGToSVG**(`url`): [`AvatarSVG`](README.md#avatarsvg) \| ``null``

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | ``"https://www.khanacademy.org/images/avatars/blobby-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/blobby-yellow.png"`` \| ``"https://www.khanacademy.org/images/avatars/blobby-blue.png"`` \| ``"https://www.khanacademy.org/images/avatars/blobby-purple.png"`` \| ``"https://www.khanacademy.org/images/avatars/area-52-yellow.png"`` \| ``"https://www.khanacademy.org/images/avatars/area-52-blue.png"`` \| ``"https://www.khanacademy.org/images/avatars/area-52-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/area-52-purple.png"`` \| ``"https://www.khanacademy.org/images/avatars/eggleston-blue.png"`` \| ``"https://www.khanacademy.org/images/avatars/eggleston-yellow.png"`` \| ``"https://www.khanacademy.org/images/avatars/eggleston-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/eggleston-orange.png"`` \| ``"https://www.khanacademy.org/images/avatars/scuttlebug-purple.png"`` \| ``"https://www.khanacademy.org/images/avatars/scuttlebug-yellow.png"`` \| ``"https://www.khanacademy.org/images/avatars/scuttlebug-blue.png"`` \| ``"https://www.khanacademy.org/images/avatars/scuttlebug-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/boggle-yellow.png"`` \| ``"https://www.khanacademy.org/images/avatars/boggle-blue.png"`` \| ``"https://www.khanacademy.org/images/avatars/boggle-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/boggle-purple.png"`` \| ``"https://www.khanacademy.org/images/avatars/sneak-peak-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/sneak-peak-yellow.png"`` \| ``"https://www.khanacademy.org/images/avatars/sneak-peak-blue.png"`` \| ``"https://www.khanacademy.org/images/avatars/sneak-peak-purple.png"`` \| ``"https://www.khanacademy.org/images/avatars/stelly-blue.png"`` \| ``"https://www.khanacademy.org/images/avatars/stelly-yellow.png"`` \| ``"https://www.khanacademy.org/images/avatars/stelly-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/stelly-orange.png"`` \| ``"https://www.khanacademy.org/images/avatars/cacteye-purple.png"`` \| ``"https://www.khanacademy.org/images/avatars/cacteye-yellow.png"`` \| ``"https://www.khanacademy.org/images/avatars/cacteye-blue.png"`` \| ``"https://www.khanacademy.org/images/avatars/cacteye-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/leaf-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/leaf-blue.png"`` \| ``"https://www.khanacademy.org/images/avatars/leaf-grey.png"`` \| ``"https://www.khanacademy.org/images/avatars/leaf-red.png"`` \| ``"https://www.khanacademy.org/images/avatars/leaf-orange.png"`` \| ``"https://www.khanacademy.org/images/avatars/leaf-yellow.png"`` \| ``"https://www.khanacademy.org/images/avatars/leafers-seed.png"`` \| ``"https://www.khanacademy.org/images/avatars/leafers-seedling.png"`` \| ``"https://www.khanacademy.org/images/avatars/leafers-sapling.png"`` \| ``"https://www.khanacademy.org/images/avatars/leafers-tree.png"`` \| ``"https://www.khanacademy.org/images/avatars/leafers-ultimate.png"`` \| ``"https://www.khanacademy.org/images/avatars/piceratops-seed.png"`` \| ``"https://www.khanacademy.org/images/avatars/piceratops-seedling.png"`` \| ``"https://www.khanacademy.org/images/avatars/piceratops-sapling.png"`` \| ``"https://www.khanacademy.org/images/avatars/piceratops-tree.png"`` \| ``"https://www.khanacademy.org/images/avatars/piceratops-ultimate.png"`` \| ``"https://www.khanacademy.org/images/avatars/duskpin-seed.png"`` \| ``"https://www.khanacademy.org/images/avatars/duskpin-seedling.png"`` \| ``"https://www.khanacademy.org/images/avatars/duskpin-sapling.png"`` \| ``"https://www.khanacademy.org/images/avatars/duskpin-tree.png"`` \| ``"https://www.khanacademy.org/images/avatars/duskpin-ultimate.png"`` \| ``"https://www.khanacademy.org/images/avatars/primosaur-seed.png"`` \| ``"https://www.khanacademy.org/images/avatars/primosaur-seedling.png"`` \| ``"https://www.khanacademy.org/images/avatars/primosaur-sapling.png"`` \| ``"https://www.khanacademy.org/images/avatars/primosaur-tree.png"`` \| ``"https://www.khanacademy.org/images/avatars/primosaur-ultimate.png"`` \| ``"https://www.khanacademy.org/images/avatars/starky-seed.png"`` \| ``"https://www.khanacademy.org/images/avatars/starky-seedling.png"`` \| ``"https://www.khanacademy.org/images/avatars/starky-sapling.png"`` \| ``"https://www.khanacademy.org/images/avatars/starky-tree.png"`` \| ``"https://www.khanacademy.org/images/avatars/starky-ultimate.png"`` \| ``"https://www.khanacademy.org/images/avatars/aqualine-seed.png"`` \| ``"https://www.khanacademy.org/images/avatars/aqualine-seedling.png"`` \| ``"https://www.khanacademy.org/images/avatars/aqualine-sapling.png"`` \| ``"https://www.khanacademy.org/images/avatars/aqualine-tree.png"`` \| ``"https://www.khanacademy.org/images/avatars/aqualine-ultimate.png"`` \| ``"https://www.khanacademy.org/images/avatars/spunky-sam.png"`` \| ``"https://www.khanacademy.org/images/avatars/spunky-sam-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/spunky-sam-orange.png"`` \| ``"https://www.khanacademy.org/images/avatars/spunky-sam-red.png"`` \| ``"https://www.khanacademy.org/images/avatars/marcimus.png"`` \| ``"https://www.khanacademy.org/images/avatars/marcimus-orange.png"`` \| ``"https://www.khanacademy.org/images/avatars/marcimus-red.png"`` \| ``"https://www.khanacademy.org/images/avatars/marcimus-purple.png"`` \| ``"https://www.khanacademy.org/images/avatars/mr-pink.png"`` \| ``"https://www.khanacademy.org/images/avatars/mr-pink-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/mr-pink-orange.png"`` \| ``"https://www.khanacademy.org/images/avatars/robot_female_1.png"`` \| ``"https://www.khanacademy.org/images/avatars/robot_female_2.png"`` \| ``"https://www.khanacademy.org/images/avatars/robot_female_3.png"`` \| ``"https://www.khanacademy.org/images/avatars/robot_male_1.png"`` \| ``"https://www.khanacademy.org/images/avatars/robot_male_2.png"`` \| ``"https://www.khanacademy.org/images/avatars/robot_male_3.png"`` \| ``"https://www.khanacademy.org/images/avatars/orange-juice-squid.png"`` \| ``"https://www.khanacademy.org/images/avatars/purple-pi.png"`` \| ``"https://www.khanacademy.org/images/avatars/purple-pi-pink.png"`` \| ``"https://www.khanacademy.org/images/avatars/purple-pi-teal.png"`` \| ``"https://www.khanacademy.org/images/avatars/mr-pants.png"`` \| ``"https://www.khanacademy.org/images/avatars/mr-pants-green.png"`` \| ``"https://www.khanacademy.org/images/avatars/mr-pants-orange.png"`` \| ``"https://www.khanacademy.org/images/avatars/mr-pants-pink.png"`` \| ``"https://www.khanacademy.org/images/avatars/mr-pants-purple.png"`` \| ``"https://www.khanacademy.org/images/avatars/old-spice-man.png"`` \| ``"https://www.khanacademy.org/images/avatars/old-spice-man-blue.png"`` \| ``"https://www.khanacademy.org/images/avatars/cs-winston.png"`` \| ``"https://www.khanacademy.org/images/avatars/cs-winston-baby.png"`` \| ``"https://www.khanacademy.org/images/avatars/cs-ohnoes.png"`` \| ``"https://www.khanacademy.org/images/avatars/cs-hopper-happy.png"`` \| ``"https://www.khanacademy.org/images/avatars/cs-hopper-jumping.png"`` \| ``"https://www.khanacademy.org/images/avatars/cs-hopper-cool.png"`` |

#### Returns

[`AvatarSVG`](README.md#avatarsvg) \| ``null``

#### Defined in

[utils/avatars.ts:275](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/avatars.ts#L275)

___

### convertAvatarSVGToPNG

▸ **convertAvatarSVGToPNG**(`url`): [`AvatarPNG`](README.md#avatarpng) \| ``null``

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | ``"https://www.khanacademy.org/images/avatars/svg/blobby-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/blobby-yellow.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/blobby-blue.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/blobby-purple.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/area-52-yellow.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/area-52-blue.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/area-52-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/area-52-purple.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/eggleston-blue.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/eggleston-yellow.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/eggleston-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/eggleston-orange.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/scuttlebug-purple.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/scuttlebug-yellow.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/scuttlebug-blue.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/scuttlebug-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/boggle-yellow.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/boggle-blue.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/boggle-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/boggle-purple.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/sneak-peak-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/sneak-peak-yellow.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/sneak-peak-blue.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/sneak-peak-purple.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/stelly-blue.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/stelly-yellow.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/stelly-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/stelly-orange.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/cacteye-purple.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/cacteye-yellow.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/cacteye-blue.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/cacteye-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/leaf-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/leaf-blue.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/leaf-grey.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/leaf-red.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/leaf-orange.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/leaf-yellow.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/leafers-seed.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/leafers-seedling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/leafers-sapling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/leafers-tree.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/leafers-ultimate.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/piceratops-seed.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/piceratops-seedling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/piceratops-sapling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/piceratops-tree.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/piceratops-ultimate.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/duskpin-seed.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/duskpin-seedling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/duskpin-sapling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/duskpin-tree.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/duskpin-ultimate.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/primosaur-seed.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/primosaur-seedling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/primosaur-sapling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/primosaur-tree.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/primosaur-ultimate.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/starky-seed.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/starky-seedling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/starky-sapling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/starky-tree.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/starky-ultimate.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/aqualine-seed.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/aqualine-seedling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/aqualine-sapling.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/aqualine-tree.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/aqualine-ultimate.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/spunky-sam.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/spunky-sam-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/spunky-sam-orange.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/spunky-sam-red.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/marcimus.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/marcimus-orange.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/marcimus-red.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/marcimus-purple.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/mr-pink.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/mr-pink-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/mr-pink-orange.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/robot_female_1.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/robot_female_2.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/robot_female_3.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/robot_male_1.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/robot_male_2.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/robot_male_3.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/orange-juice-squid.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/purple-pi.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/purple-pi-pink.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/purple-pi-teal.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/mr-pants.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/mr-pants-green.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/mr-pants-orange.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/mr-pants-pink.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/mr-pants-purple.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/old-spice-man.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/old-spice-man-blue.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/cs-winston.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/cs-winston-baby.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/cs-ohnoes.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/cs-hopper-happy.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/cs-hopper-jumping.svg"`` \| ``"https://www.khanacademy.org/images/avatars/svg/cs-hopper-cool.svg"`` |

#### Returns

[`AvatarPNG`](README.md#avatarpng) \| ``null``

#### Defined in

[utils/avatars.ts:269](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/avatars.ts#L269)

___

### extractAvatarSlug

▸ **extractAvatarSlug**(`path`): [`AvatarSlug`](README.md#avatarslug) \| ``null``

Extracts the avatar slug from a path or URL

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | ``"/images/avatars/svg/blobby-green.svg"`` \| ``"/images/avatars/svg/blobby-yellow.svg"`` \| ``"/images/avatars/svg/blobby-blue.svg"`` \| ``"/images/avatars/svg/blobby-purple.svg"`` \| ``"/images/avatars/svg/area-52-yellow.svg"`` \| ``"/images/avatars/svg/area-52-blue.svg"`` \| ``"/images/avatars/svg/area-52-green.svg"`` \| ``"/images/avatars/svg/area-52-purple.svg"`` \| ``"/images/avatars/svg/eggleston-blue.svg"`` \| ``"/images/avatars/svg/eggleston-yellow.svg"`` \| ``"/images/avatars/svg/eggleston-green.svg"`` \| ``"/images/avatars/svg/eggleston-orange.svg"`` \| ``"/images/avatars/svg/scuttlebug-purple.svg"`` \| ``"/images/avatars/svg/scuttlebug-yellow.svg"`` \| ``"/images/avatars/svg/scuttlebug-blue.svg"`` \| ``"/images/avatars/svg/scuttlebug-green.svg"`` \| ``"/images/avatars/svg/boggle-yellow.svg"`` \| ``"/images/avatars/svg/boggle-blue.svg"`` \| ``"/images/avatars/svg/boggle-green.svg"`` \| ``"/images/avatars/svg/boggle-purple.svg"`` \| ``"/images/avatars/svg/sneak-peak-green.svg"`` \| ``"/images/avatars/svg/sneak-peak-yellow.svg"`` \| ``"/images/avatars/svg/sneak-peak-blue.svg"`` \| ``"/images/avatars/svg/sneak-peak-purple.svg"`` \| ``"/images/avatars/svg/stelly-blue.svg"`` \| ``"/images/avatars/svg/stelly-yellow.svg"`` \| ``"/images/avatars/svg/stelly-green.svg"`` \| ``"/images/avatars/svg/stelly-orange.svg"`` \| ``"/images/avatars/svg/cacteye-purple.svg"`` \| ``"/images/avatars/svg/cacteye-yellow.svg"`` \| ``"/images/avatars/svg/cacteye-blue.svg"`` \| ``"/images/avatars/svg/cacteye-green.svg"`` \| ``"/images/avatars/svg/leaf-green.svg"`` \| ``"/images/avatars/svg/leaf-blue.svg"`` \| ``"/images/avatars/svg/leaf-grey.svg"`` \| ``"/images/avatars/svg/leaf-red.svg"`` \| ``"/images/avatars/svg/leaf-orange.svg"`` \| ``"/images/avatars/svg/leaf-yellow.svg"`` \| ``"/images/avatars/svg/leafers-seed.svg"`` \| ``"/images/avatars/svg/leafers-seedling.svg"`` \| ``"/images/avatars/svg/leafers-sapling.svg"`` \| ``"/images/avatars/svg/leafers-tree.svg"`` \| ``"/images/avatars/svg/leafers-ultimate.svg"`` \| ``"/images/avatars/svg/piceratops-seed.svg"`` \| ``"/images/avatars/svg/piceratops-seedling.svg"`` \| ``"/images/avatars/svg/piceratops-sapling.svg"`` \| ``"/images/avatars/svg/piceratops-tree.svg"`` \| ``"/images/avatars/svg/piceratops-ultimate.svg"`` \| ``"/images/avatars/svg/duskpin-seed.svg"`` \| ``"/images/avatars/svg/duskpin-seedling.svg"`` \| ``"/images/avatars/svg/duskpin-sapling.svg"`` \| ``"/images/avatars/svg/duskpin-tree.svg"`` \| ``"/images/avatars/svg/duskpin-ultimate.svg"`` \| ``"/images/avatars/svg/primosaur-seed.svg"`` \| ``"/images/avatars/svg/primosaur-seedling.svg"`` \| ``"/images/avatars/svg/primosaur-sapling.svg"`` \| ``"/images/avatars/svg/primosaur-tree.svg"`` \| ``"/images/avatars/svg/primosaur-ultimate.svg"`` \| ``"/images/avatars/svg/starky-seed.svg"`` \| ``"/images/avatars/svg/starky-seedling.svg"`` \| ``"/images/avatars/svg/starky-sapling.svg"`` \| ``"/images/avatars/svg/starky-tree.svg"`` \| ``"/images/avatars/svg/starky-ultimate.svg"`` \| ``"/images/avatars/svg/aqualine-seed.svg"`` \| ``"/images/avatars/svg/aqualine-seedling.svg"`` \| ``"/images/avatars/svg/aqualine-sapling.svg"`` \| ``"/images/avatars/svg/aqualine-tree.svg"`` \| ``"/images/avatars/svg/aqualine-ultimate.svg"`` \| ``"/images/avatars/svg/spunky-sam.svg"`` \| ``"/images/avatars/svg/spunky-sam-green.svg"`` \| ``"/images/avatars/svg/spunky-sam-orange.svg"`` \| ``"/images/avatars/svg/spunky-sam-red.svg"`` \| ``"/images/avatars/svg/marcimus.svg"`` \| ``"/images/avatars/svg/marcimus-orange.svg"`` \| ``"/images/avatars/svg/marcimus-red.svg"`` \| ``"/images/avatars/svg/marcimus-purple.svg"`` \| ``"/images/avatars/svg/mr-pink.svg"`` \| ``"/images/avatars/svg/mr-pink-green.svg"`` \| ``"/images/avatars/svg/mr-pink-orange.svg"`` \| ``"/images/avatars/svg/robot_female_1.svg"`` \| ``"/images/avatars/svg/robot_female_2.svg"`` \| ``"/images/avatars/svg/robot_female_3.svg"`` \| ``"/images/avatars/svg/robot_male_1.svg"`` \| ``"/images/avatars/svg/robot_male_2.svg"`` \| ``"/images/avatars/svg/robot_male_3.svg"`` \| ``"/images/avatars/svg/orange-juice-squid.svg"`` \| ``"/images/avatars/svg/purple-pi.svg"`` \| ``"/images/avatars/svg/purple-pi-pink.svg"`` \| ``"/images/avatars/svg/purple-pi-teal.svg"`` \| ``"/images/avatars/svg/mr-pants.svg"`` \| ``"/images/avatars/svg/mr-pants-green.svg"`` \| ``"/images/avatars/svg/mr-pants-orange.svg"`` \| ``"/images/avatars/svg/mr-pants-pink.svg"`` \| ``"/images/avatars/svg/mr-pants-purple.svg"`` \| ``"/images/avatars/svg/old-spice-man.svg"`` \| ``"/images/avatars/svg/old-spice-man-blue.svg"`` \| ``"/images/avatars/svg/cs-winston.svg"`` \| ``"/images/avatars/svg/cs-winston-baby.svg"`` \| ``"/images/avatars/svg/cs-ohnoes.svg"`` \| ``"/images/avatars/svg/cs-hopper-happy.svg"`` \| ``"/images/avatars/svg/cs-hopper-jumping.svg"`` \| ``"/images/avatars/svg/cs-hopper-cool.svg"`` \| [`AvatarURL`](README.md#avatarurl) | Relative or absolute path to an avatar |

#### Returns

[`AvatarSlug`](README.md#avatarslug) \| ``null``

The avatar slug if the path is valid, null otherwise

**`Example`**

```ts
extractAvatarSlug('/images/avatars/blobby-green.svg') // 'blobby-green'
```

**`Example`**

```ts
extractAvatarSlug('https://www.khanacademy.org/images/avatars/svg/blobby-green.svg') // 'blobby-green'
```

**`Example`**

```ts
extractAvatarSlug('https://www.khanacademy.org/images/avatars/blobby-green.png') // 'blobby-green'
```

#### Defined in

[utils/avatars.ts:259](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/avatars.ts#L259)

___

### generateAvatarPNG

▸ **generateAvatarPNG**(`slug`): [`AvatarPNG`](README.md#avatarpng)

Generates a URL to an avatar PNG

#### Parameters

| Name | Type |
| :------ | :------ |
| `slug` | ``"blobby-green"`` \| ``"blobby-yellow"`` \| ``"blobby-blue"`` \| ``"blobby-purple"`` \| ``"area-52-yellow"`` \| ``"area-52-blue"`` \| ``"area-52-green"`` \| ``"area-52-purple"`` \| ``"eggleston-blue"`` \| ``"eggleston-yellow"`` \| ``"eggleston-green"`` \| ``"eggleston-orange"`` \| ``"scuttlebug-purple"`` \| ``"scuttlebug-yellow"`` \| ``"scuttlebug-blue"`` \| ``"scuttlebug-green"`` \| ``"boggle-yellow"`` \| ``"boggle-blue"`` \| ``"boggle-green"`` \| ``"boggle-purple"`` \| ``"sneak-peak-green"`` \| ``"sneak-peak-yellow"`` \| ``"sneak-peak-blue"`` \| ``"sneak-peak-purple"`` \| ``"stelly-blue"`` \| ``"stelly-yellow"`` \| ``"stelly-green"`` \| ``"stelly-orange"`` \| ``"cacteye-purple"`` \| ``"cacteye-yellow"`` \| ``"cacteye-blue"`` \| ``"cacteye-green"`` \| ``"leaf-green"`` \| ``"leaf-blue"`` \| ``"leaf-grey"`` \| ``"leaf-red"`` \| ``"leaf-orange"`` \| ``"leaf-yellow"`` \| ``"leafers-seed"`` \| ``"leafers-seedling"`` \| ``"leafers-sapling"`` \| ``"leafers-tree"`` \| ``"leafers-ultimate"`` \| ``"piceratops-seed"`` \| ``"piceratops-seedling"`` \| ``"piceratops-sapling"`` \| ``"piceratops-tree"`` \| ``"piceratops-ultimate"`` \| ``"duskpin-seed"`` \| ``"duskpin-seedling"`` \| ``"duskpin-sapling"`` \| ``"duskpin-tree"`` \| ``"duskpin-ultimate"`` \| ``"primosaur-seed"`` \| ``"primosaur-seedling"`` \| ``"primosaur-sapling"`` \| ``"primosaur-tree"`` \| ``"primosaur-ultimate"`` \| ``"starky-seed"`` \| ``"starky-seedling"`` \| ``"starky-sapling"`` \| ``"starky-tree"`` \| ``"starky-ultimate"`` \| ``"aqualine-seed"`` \| ``"aqualine-seedling"`` \| ``"aqualine-sapling"`` \| ``"aqualine-tree"`` \| ``"aqualine-ultimate"`` \| ``"spunky-sam"`` \| ``"spunky-sam-green"`` \| ``"spunky-sam-orange"`` \| ``"spunky-sam-red"`` \| ``"marcimus"`` \| ``"marcimus-orange"`` \| ``"marcimus-red"`` \| ``"marcimus-purple"`` \| ``"mr-pink"`` \| ``"mr-pink-green"`` \| ``"mr-pink-orange"`` \| ``"robot_female_1"`` \| ``"robot_female_2"`` \| ``"robot_female_3"`` \| ``"robot_male_1"`` \| ``"robot_male_2"`` \| ``"robot_male_3"`` \| ``"orange-juice-squid"`` \| ``"purple-pi"`` \| ``"purple-pi-pink"`` \| ``"purple-pi-teal"`` \| ``"mr-pants"`` \| ``"mr-pants-green"`` \| ``"mr-pants-orange"`` \| ``"mr-pants-pink"`` \| ``"mr-pants-purple"`` \| ``"old-spice-man"`` \| ``"old-spice-man-blue"`` \| ``"cs-winston"`` \| ``"cs-winston-baby"`` \| ``"cs-ohnoes"`` \| ``"cs-hopper-happy"`` \| ``"cs-hopper-jumping"`` \| ``"cs-hopper-cool"`` |

#### Returns

[`AvatarPNG`](README.md#avatarpng)

#### Defined in

[utils/avatars.ts:240](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/avatars.ts#L240)

___

### generateAvatarSVG

▸ **generateAvatarSVG**(`slug`): [`AvatarSVG`](README.md#avatarsvg)

Generates a URL to an avatar SVG

#### Parameters

| Name | Type |
| :------ | :------ |
| `slug` | ``"blobby-green"`` \| ``"blobby-yellow"`` \| ``"blobby-blue"`` \| ``"blobby-purple"`` \| ``"area-52-yellow"`` \| ``"area-52-blue"`` \| ``"area-52-green"`` \| ``"area-52-purple"`` \| ``"eggleston-blue"`` \| ``"eggleston-yellow"`` \| ``"eggleston-green"`` \| ``"eggleston-orange"`` \| ``"scuttlebug-purple"`` \| ``"scuttlebug-yellow"`` \| ``"scuttlebug-blue"`` \| ``"scuttlebug-green"`` \| ``"boggle-yellow"`` \| ``"boggle-blue"`` \| ``"boggle-green"`` \| ``"boggle-purple"`` \| ``"sneak-peak-green"`` \| ``"sneak-peak-yellow"`` \| ``"sneak-peak-blue"`` \| ``"sneak-peak-purple"`` \| ``"stelly-blue"`` \| ``"stelly-yellow"`` \| ``"stelly-green"`` \| ``"stelly-orange"`` \| ``"cacteye-purple"`` \| ``"cacteye-yellow"`` \| ``"cacteye-blue"`` \| ``"cacteye-green"`` \| ``"leaf-green"`` \| ``"leaf-blue"`` \| ``"leaf-grey"`` \| ``"leaf-red"`` \| ``"leaf-orange"`` \| ``"leaf-yellow"`` \| ``"leafers-seed"`` \| ``"leafers-seedling"`` \| ``"leafers-sapling"`` \| ``"leafers-tree"`` \| ``"leafers-ultimate"`` \| ``"piceratops-seed"`` \| ``"piceratops-seedling"`` \| ``"piceratops-sapling"`` \| ``"piceratops-tree"`` \| ``"piceratops-ultimate"`` \| ``"duskpin-seed"`` \| ``"duskpin-seedling"`` \| ``"duskpin-sapling"`` \| ``"duskpin-tree"`` \| ``"duskpin-ultimate"`` \| ``"primosaur-seed"`` \| ``"primosaur-seedling"`` \| ``"primosaur-sapling"`` \| ``"primosaur-tree"`` \| ``"primosaur-ultimate"`` \| ``"starky-seed"`` \| ``"starky-seedling"`` \| ``"starky-sapling"`` \| ``"starky-tree"`` \| ``"starky-ultimate"`` \| ``"aqualine-seed"`` \| ``"aqualine-seedling"`` \| ``"aqualine-sapling"`` \| ``"aqualine-tree"`` \| ``"aqualine-ultimate"`` \| ``"spunky-sam"`` \| ``"spunky-sam-green"`` \| ``"spunky-sam-orange"`` \| ``"spunky-sam-red"`` \| ``"marcimus"`` \| ``"marcimus-orange"`` \| ``"marcimus-red"`` \| ``"marcimus-purple"`` \| ``"mr-pink"`` \| ``"mr-pink-green"`` \| ``"mr-pink-orange"`` \| ``"robot_female_1"`` \| ``"robot_female_2"`` \| ``"robot_female_3"`` \| ``"robot_male_1"`` \| ``"robot_male_2"`` \| ``"robot_male_3"`` \| ``"orange-juice-squid"`` \| ``"purple-pi"`` \| ``"purple-pi-pink"`` \| ``"purple-pi-teal"`` \| ``"mr-pants"`` \| ``"mr-pants-green"`` \| ``"mr-pants-orange"`` \| ``"mr-pants-pink"`` \| ``"mr-pants-purple"`` \| ``"old-spice-man"`` \| ``"old-spice-man-blue"`` \| ``"cs-winston"`` \| ``"cs-winston-baby"`` \| ``"cs-ohnoes"`` \| ``"cs-hopper-happy"`` \| ``"cs-hopper-jumping"`` \| ``"cs-hopper-cool"`` |

#### Returns

[`AvatarSVG`](README.md#avatarsvg)

#### Defined in

[utils/avatars.ts:233](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/avatars.ts#L233)

___

### getLatestFragment

▸ **getLatestFragment**(`fragment`): `Promise`\<``null`` \| `string`\>

Gets the latest version of a fragment from the Khan Academy safelist.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fragment` | `string` | The name of the fragment |

#### Returns

`Promise`\<``null`` \| `string`\>

**`See`**

[Safelisted Fragments](https://github.com/bhavjitChauhan/khan-api/tree/safelist/fragment)

#### Defined in

[utils/safelist.ts:42](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/safelist.ts#L42)

___

### getLatestMutation

▸ **getLatestMutation**(`mutation`): `Promise`\<``null`` \| `string`\>

Gets the latest version of a mutation from the Khan Academy safelist.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mutation` | `string` | The operation name of the mutation |

#### Returns

`Promise`\<``null`` \| `string`\>

**`See`**

[Safelisted Mutations](https://github.com/bhavjitChauhan/khan-api/tree/safelist/mutation)

#### Defined in

[utils/safelist.ts:28](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/safelist.ts#L28)

___

### getLatestQuery

▸ **getLatestQuery**(`query`): `Promise`\<``null`` \| `string`\>

Gets the latest version of a query from the Khan Academy safelist.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `string` | The operation name of the query |

#### Returns

`Promise`\<``null`` \| `string`\>

**`See`**

[Safelisted Queries](https://github.com/bhavjitChauhan/khan-api/tree/safelist/query)

**`Example`**

```ts
const GET_FULL_USER_PROFILE_QUERY = await getLatestQuery('getFullUserProfile')
```

#### Defined in

[utils/safelist.ts:14](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/safelist.ts#L14)

___

### isAnswerSchema

▸ **isAnswerSchema**(`schema`): schema is AnswerFeedbackSchema

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`BasicFeedbackSchema`](interfaces/BasicFeedbackSchema.md) \| [`QuestionFeedbackSchema`](interfaces/QuestionFeedbackSchema.md) \| [`AnswerFeedbackSchema`](interfaces/AnswerFeedbackSchema.md) |

#### Returns

schema is AnswerFeedbackSchema

#### Defined in

[utils/messages.ts:32](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/messages.ts#L32)

___

### isDataResponse

▸ **isDataResponse**\<`T`\>(`response`): response is DataResponse\<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | [`StandardResponse`](README.md#standardresponse)\<`T`\> |

#### Returns

response is DataResponse\<T\>

#### Defined in

[types/responses.ts:30](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/responses.ts#L30)

___

### isEmail

▸ **isEmail**(`str`): str is \`$\{string}@$\{string}.$\{string}\`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

str is \`$\{string}@$\{string}.$\{string}\`

#### Defined in

[utils/regexes.ts:197](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/regexes.ts#L197)

___

### isEncryptedFeedbackKey

▸ **isEncryptedFeedbackKey**(`str`): str is \`kaencrypted\_$\{string}\_$\{string}\`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

str is \`kaencrypted\_$\{string}\_$\{string}\`

#### Defined in

[utils/regexes.ts:180](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/regexes.ts#L180)

___

### isFeedbackKey

▸ **isFeedbackKey**(`str`): str is \`ag5zfmtoYW4tYWNhZGVteX$\{string}CxIIVXNlckRhdGEi$\{string}thaWRf$\{string}$\{string}$\{string}\`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

str is \`ag5zfmtoYW4tYWNhZGVteX$\{string}CxIIVXNlckRhdGEi$\{string}thaWRf$\{string}$\{string}$\{string}\`

#### Defined in

[utils/regexes.ts:173](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/regexes.ts#L173)

___

### isGoogleID

▸ **isGoogleID**(`str`): str is \`http://googleid.khanacademy.org/$\{number}\`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

str is \`http://googleid.khanacademy.org/$\{number}\`

#### Defined in

[utils/regexes.ts:186](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/regexes.ts#L186)

___

### isInputErrorResponse

▸ **isInputErrorResponse**(`response`): response is InputErrorResponse

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | [`StandardResponse`](README.md#standardresponse)\<`unknown`\> |

#### Returns

response is InputErrorResponse

#### Defined in

[types/responses.ts:44](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/responses.ts#L44)

___

### isKaid

▸ **isKaid**(`str`): str is \`kaid\_$\{number}\`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

str is \`kaid\_$\{number}\`

#### Defined in

[utils/regexes.ts:70](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/regexes.ts#L70)

___

### isProgramID

▸ **isProgramID**(`strOrNum`): strOrNum is ProgramID

#### Parameters

| Name | Type |
| :------ | :------ |
| `strOrNum` | `string` \| `number` |

#### Returns

strOrNum is ProgramID

#### Defined in

[utils/regexes.ts:95](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/regexes.ts#L95)

___

### isProgramKey

▸ **isProgramKey**(`str`): str is \`ag5zfmtoYW4tYWNhZGVteXI$\{string}CxIKU2NyYXRjaHBhZB$\{string}$\{string}\`

Checks if a string is a valid program key

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

str is \`ag5zfmtoYW4tYWNhZGVteXI$\{string}CxIKU2NyYXRjaHBhZB$\{string}$\{string}\`

**`Remarks`**

This function will only check the format of the string and not the existence
of the program on Khan Academy.

Program keys are not the same format as lesson keys or other keys
that may look similar at first glance.

This function has been tested against more than 1,000,000 program keys but it
is possible that in the future, new program key formats will be introduced.

#### Defined in

[utils/regexes.ts:155](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/regexes.ts#L155)

___

### isProgramURL

▸ **isProgramURL**(`str`): str is \`http$\{string}://$\{string}khanacademy.$\{string}/$\{string}/$\{string}/$\{number}\`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

str is \`http$\{string}://$\{string}khanacademy.$\{string}/$\{string}/$\{string}/$\{number}\`

#### Defined in

[utils/regexes.ts:126](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/regexes.ts#L126)

___

### isQualarooID

▸ **isQualarooID**(`str`): str is \`\_gae\_bingo\_random:$\{string}\`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

str is \`\_gae\_bingo\_random:$\{string}\`

#### Defined in

[utils/regexes.ts:191](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/regexes.ts#L191)

___

### isQuestionSchema

▸ **isQuestionSchema**(`schema`): schema is QuestionFeedbackSchema

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`BasicFeedbackSchema`](interfaces/BasicFeedbackSchema.md) \| [`QuestionFeedbackSchema`](interfaces/QuestionFeedbackSchema.md) \| [`AnswerFeedbackSchema`](interfaces/AnswerFeedbackSchema.md) |

#### Returns

schema is QuestionFeedbackSchema

#### Defined in

[utils/messages.ts:23](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/messages.ts#L23)

___

### isReplySchema

▸ **isReplySchema**(`schema`): schema is BasicFeedbackSchema

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`BasicFeedbackSchema`](interfaces/BasicFeedbackSchema.md) \| [`QuestionFeedbackSchema`](interfaces/QuestionFeedbackSchema.md) \| [`AnswerFeedbackSchema`](interfaces/AnswerFeedbackSchema.md) |

#### Returns

schema is BasicFeedbackSchema

#### Defined in

[utils/messages.ts:17](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/messages.ts#L17)

___

### isServiceErrorsResponse

▸ **isServiceErrorsResponse**(`response`): response is ServiceErrorsResponse

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | [`StandardResponse`](README.md#standardresponse)\<`unknown`\> |

#### Returns

response is ServiceErrorsResponse

#### Defined in

[types/responses.ts:36](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/types/responses.ts#L36)

___

### isTipsAndThanksSchema

▸ **isTipsAndThanksSchema**(`schema`): schema is BasicFeedbackSchema

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`BasicFeedbackSchema`](interfaces/BasicFeedbackSchema.md) \| [`QuestionFeedbackSchema`](interfaces/QuestionFeedbackSchema.md) \| [`AnswerFeedbackSchema`](interfaces/AnswerFeedbackSchema.md) |

#### Returns

schema is BasicFeedbackSchema

#### Defined in

[utils/messages.ts:11](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/messages.ts#L11)

___

### isUserURL

▸ **isUserURL**(`str`): str is \`http$\{string}://$\{string}khanacademy.$\{string}/profile/$\{string}\`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

str is \`http$\{string}://$\{string}khanacademy.$\{string}/profile/$\{string}\`

#### Defined in

[utils/regexes.ts:85](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/regexes.ts#L85)

___

### programIDtoKey

▸ **programIDtoKey**(`id`): \`ag5zfmtoYW4tYWNhZGVteXI$\{string}CxIKU2NyYXRjaHBhZB$\{string}$\{string}\`

Encodes program ID to a program key

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`ProgramID`](README.md#programid) |

#### Returns

\`ag5zfmtoYW4tYWNhZGVteXI$\{string}CxIKU2NyYXRjaHBhZB$\{string}$\{string}\`

**`Remarks`**

Credit to [@L1quidH2O](https://github.com/L1quidH2O) for the
original implementation.

#### Defined in

[utils/programs.ts:42](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/programs.ts#L42)

___

### programKeyToID

▸ **programKeyToID**(`key`): [`ProgramIDNumber`](README.md#programidnumber)

Decodes program ID from a program key

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | \`ag5zfmtoYW4tYWNhZGVteXI$\{string}CxIKU2NyYXRjaHBhZB$\{string}$\{string}\` |

#### Returns

[`ProgramIDNumber`](README.md#programidnumber)

**`Remarks`**

Program keys are (URL-safe) Base64 encoded strings that contain the program
ID.

Credit to [@L1quidH2O](https://github.com/L1quidH2O) for the
original implementation.

#### Defined in

[utils/programs.ts:15](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/programs.ts#L15)

___

### resolveFeedbackKey

▸ **resolveFeedbackKey**(`identifier`): `Promise`\<[`FeedbackKey`](README.md#feedbackkey)\>

Resolves a feedback key from an encrypted feedback key

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | \`ag5zfmtoYW4tYWNhZGVteX$\{string}CxIIVXNlckRhdGEi$\{string}thaWRf$\{string}$\{string}$\{string}\` \| \`kaencrypted\_$\{string}\_$\{string}\` | Feedback key or encrypted feedback key |

#### Returns

`Promise`\<[`FeedbackKey`](README.md#feedbackkey)\>

#### Defined in

[utils/resolvers.ts:130](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/resolvers.ts#L130)

___

### resolveKaid

▸ **resolveKaid**(`identifier`): `Promise`\<[`Kaid`](README.md#kaid)\>

Resolve a KAID from a username or email address

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | A KAID, username, or email address |

#### Returns

`Promise`\<[`Kaid`](README.md#kaid)\>

**`Example`**

```ts
const kaid = await resolveKaid('bhavjitChauhan')
console.log(kaid) // kaid_376749826184384230772276
```

#### Defined in

[utils/resolvers.ts:39](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/resolvers.ts#L39)

___

### resolveProgramID

▸ **resolveProgramID**(`identifier`): [`ProgramIDNumber`](README.md#programidnumber)

Resolve a program ID from a program URL or key

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | [`ProgramID`](README.md#programid) \| \`http$\{string}://$\{string}khanacademy.$\{string}/$\{string}/$\{string}/$\{number}\` \| \`ag5zfmtoYW4tYWNhZGVteXI$\{string}CxIKU2NyYXRjaHBhZB$\{string}$\{string}\` | Program ID, URL, or key |

#### Returns

[`ProgramIDNumber`](README.md#programidnumber)

Program ID as a number

#### Defined in

[utils/resolvers.ts:104](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/resolvers.ts#L104)

___

### resolveUsername

▸ **resolveUsername**(`identifier`): `Promise`\<`string`\>

Resolve a username from a KAID or email address

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | KAID, username, or email address |

#### Returns

`Promise`\<`string`\>

**`Example`**

```ts
const username = await resolveUsername('kaid_376749826184384230772276')
console.log(username) // bhavjitChauhan
```

#### Defined in

[utils/resolvers.ts:73](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/utils/resolvers.ts#L73)
