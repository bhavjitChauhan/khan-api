# Namespace: queries

Queries

## Namespaces

- [AvatarDataForProfile](queries.AvatarDataForProfile.md)
- [FeedbackQuery](queries.FeedbackQuery.md)
- [GetFeedbackReplies](queries.GetFeedbackReplies.md)
- [GetFeedbackRepliesPage](queries.GetFeedbackRepliesPage.md)
- [GetFullUserProfile](queries.GetFullUserProfile.md)
- [GetProfileWidgets](queries.GetProfileWidgets.md)
- [GetUserByUsernameOrEmail](queries.GetUserByUsernameOrEmail.md)
- [GetUserHoverCardProfile](queries.GetUserHoverCardProfile.md)
- [Hotlist](queries.Hotlist.md)
- [ProgramQuery](queries.ProgramQuery.md)
- [ProjectsAuthoredByUser](queries.ProjectsAuthoredByUser.md)
- [QaExpandKeyInfo](queries.QaExpandKeyInfo.md)

## Functions

### QAExpandKeyInfo

▸ **QAExpandKeyInfo**(`variables`, `init?`): `Promise`\<`TypedResponse`\<[`Response`](queries.QaExpandKeyInfo.md#response)\>\>

Low-level function for making a `QAExpandKeyInfo` request.

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | [`Variables`](../interfaces/queries.QaExpandKeyInfo.Variables.md) |
| `init?` | `RequestInit` |

#### Returns

`Promise`\<`TypedResponse`\<[`Response`](queries.QaExpandKeyInfo.md#response)\>\>

**`Link`**

[Reference](https://khan-api.bhavjit.com/reference/view/19553924/2s8YzQUiXU#2354cba6-9065-4431-8d4a-f44f24527eb4)

**`Example`**

Simple usage without error handling:
```js
const response = await queries.QAExpandKeyInfo({
 encryptedKey: 'kaencrypted_e1af9ca95e8bf24e1cebdb8a1e94f7a3_76142801656102acc04c5154ee776b59e6323603d457c39e2a18a68f32a9ac1fefcdfd57c28ec771ec62fbee8ae03e0509090d80723bb489a87010ba69a0a5fdbd27a91a0db97971b59b77548da0eb2494aa274600fa28939e8975abd13c851c5a2f4f701d7dc7e8a2879f3c8d59be0953fafa318bd9b036f6c3d6dc0212c926'
})
const json = await response.json()
const unencryptedKey = json.data.qaExpandKeyInfo?.unencryptedKey
```

#### Defined in

[queries/QAExpandKeyInfo.ts:42](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/queries/QAExpandKeyInfo.ts#L42)

▸ **QAExpandKeyInfo**(`encryptedKey`, `init?`): `Promise`\<`TypedResponse`\<[`Response`](queries.QaExpandKeyInfo.md#response)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `encryptedKey` | \`kaencrypted\_$\{string}\_$\{string}\` |
| `init?` | `RequestInit` |

#### Returns

`Promise`\<`TypedResponse`\<[`Response`](queries.QaExpandKeyInfo.md#response)\>\>

**`Example`**

Alternative usage:
```js
const response = await queries.QAExpandKeyInfo('kaencrypted_e1af9ca95e8bf24e1cebdb8a1e94f7a3_76142801656102acc04c5154ee776b59e6323603d457c39e2a18a68f32a9ac1fefcdfd57c28ec771ec62fbee8ae03e0509090d80723bb489a87010ba69a0a5fdbd27a91a0db97971b59b77548da0eb2494aa274600fa28939e8975abd13c851c5a2f4f701d7dc7e8a2879f3c8d59be0953fafa318bd9b036f6c3d6dc0212c926')
const json = await response.json()
const unencryptedKey = json.data.qaExpandKeyInfo?.unencryptedKey
```

#### Defined in

[queries/QAExpandKeyInfo.ts:55](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/queries/QAExpandKeyInfo.ts#L55)

___

### avatarDataForProfile

▸ **avatarDataForProfile**(`variables`, `init?`): `Promise`\<`TypedResponse`\<[`Response`](queries.AvatarDataForProfile.md#response)\>\>

Low-level function for making a `avatarDataForProfile` request.

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | [`Variables`](../interfaces/queries.AvatarDataForProfile.Variables.md) |
| `init?` | `RequestInit` |

#### Returns

`Promise`\<`TypedResponse`\<[`Response`](queries.AvatarDataForProfile.md#response)\>\>

**`Link`**

[Reference](https://khan-api.bhavjit.com/reference/view/19553924/2s8YzQUiXU#256c194a-f6d5-4c7a-aaa5-97792cdba1b3)

**`Example`**

Simple usage without error handling:
```js
const response = await queries.avatarDataForProfile({
  kaid: 'kaid_326465577260382527912172'
})
const json = await response.json()
const profile = json.data.user
const avatar = profile.avatar
```

#### Defined in

[queries/avatarDataForProfile.ts:50](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/queries/avatarDataForProfile.ts#L50)

▸ **avatarDataForProfile**(`kaid`, `init?`): `Promise`\<`TypedResponse`\<[`Response`](queries.AvatarDataForProfile.md#response)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `kaid` | \`kaid\_$\{number}\` |
| `init?` | `RequestInit` |

#### Returns

`Promise`\<`TypedResponse`\<[`Response`](queries.AvatarDataForProfile.md#response)\>\>

**`Example`**

Alternative usage:
```js
const response = await queries.avatarDataForProfile('kaid_326465577260382527912172')
const json = await response.json()
const profile = json.data.user
const avatar = profile.avatar
```

#### Defined in

[queries/avatarDataForProfile.ts:64](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/queries/avatarDataForProfile.ts#L64)

___

### feedbackQuery

▸ **feedbackQuery**(`variables`, `init?`): `Promise`\<`TypedResponse`\<[`Response`](queries.FeedbackQuery.md#response)\>\>

Low-level for making a `feedbackQuery` request.

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | [`Variables`](../interfaces/queries.FeedbackQuery.Variables.md) |
| `init?` | `RequestInit` |

#### Returns

`Promise`\<`TypedResponse`\<[`Response`](queries.FeedbackQuery.md#response)\>\>

**`Link`**

[Reference](https://khan-api.bhavjit.com/reference/view/19553924/2s8YzQUiXU#e7abb177-fe2b-4e49-a003-5f9be43b90e4)

#### Defined in

[queries/feedbackQuery.ts:226](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/queries/feedbackQuery.ts#L226)

___

### getFeedbackReplies

▸ **getFeedbackReplies**(`variables`, `init?`): `Promise`\<`TypedResponse`\<[`Response`](queries.GetFeedbackReplies.md#response)\>\>

Low-level function for making a `getFeedbackReplies` request.

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | [`Variables`](../interfaces/queries.GetFeedbackReplies.Variables.md) |
| `init?` | `RequestInit` |

#### Returns

`Promise`\<`TypedResponse`\<[`Response`](queries.GetFeedbackReplies.md#response)\>\>

**`Link`**

[Reference](https://khan-api.bhavjit.com/reference/view/19553924/2s8YzQUiXU#3d616591-a38f-4bec-9836-367dba32a2ac)

**`Example`**

Simple usage without error handling:
```js
const response = await queries.getFeedbackReplies({
 postKey: 'ag5zfmtoYW4tYWNhZGVteXJBCxIIVXNlckRhdGEiHmthaWRfNjYzMzc5NDA2ODA0Nzc0MjA1NjU0NTUzNAwLEghGZWVkYmFjaxiAgOPjx8-XCAw'
})
const json = await response.json()
const replies = json.data.feedbackReplies
```

#### Defined in

[queries/getFeedbackReplies.ts:106](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/queries/getFeedbackReplies.ts#L106)

▸ **getFeedbackReplies**(`postKey`, `init?`): `Promise`\<`TypedResponse`\<[`Response`](queries.GetFeedbackReplies.md#response)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `postKey` | \`ag5zfmtoYW4tYWNhZGVteX$\{string}CxIIVXNlckRhdGEi$\{string}thaWRf$\{string}$\{string}$\{string}\` \| \`kaencrypted\_$\{string}\_$\{string}\` |
| `init?` | `RequestInit` |

#### Returns

`Promise`\<`TypedResponse`\<[`Response`](queries.GetFeedbackReplies.md#response)\>\>

**`Example`**

Alternative usage:
```js
const await queries.getFeedbackReplies('ag5zfmtoYW4tYWNhZGVteXJBCxIIVXNlckRhdGEiHmthaWRfNjYzMzc5NDA2ODA0Nzc0MjA1NjU0NTUzNAwLEghGZWVkYmFjaxiAgOPjx8-XCAw')
const json = await response.json()
const replies = json.data.feedbackReplies
```

#### Defined in

[queries/getFeedbackReplies.ts:119](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/queries/getFeedbackReplies.ts#L119)

___

### getFeedbackRepliesPage

▸ **getFeedbackRepliesPage**(`variables`, `init?`): `Promise`\<`TypedResponse`\<[`Response`](queries.GetFeedbackRepliesPage.md#response)\>\>

Low-level function to fetch a page of replies to a feedback post.

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | [`Variables`](../interfaces/queries.GetFeedbackRepliesPage.Variables.md) |
| `init?` | `RequestInit` |

#### Returns

`Promise`\<`TypedResponse`\<[`Response`](queries.GetFeedbackRepliesPage.md#response)\>\>

**`Link`**

[Reference](https://khan-api.bhavjit.com/reference/view/19553924/2s8YzQUiXU#16b92467-dd37-4dbb-968a-cb700ae0f9cb)

#### Defined in

[queries/getFeedbackRepliesPage.ts:75](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/queries/getFeedbackRepliesPage.ts#L75)

___

### getFullUserProfile

▸ **getFullUserProfile**(`variables?`, `init?`): `Promise`\<`TypedResponse`\<[`Response`](queries.GetFullUserProfile.md#response)\>\>

Low-level function for making a `getFullUserProfile` request.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `variables?` | [`Variables`](../interfaces/queries.GetFullUserProfile.Variables.md) | Fetches profile associated with any cookies if not provided |
| `init?` | `RequestInit` | - |

#### Returns

`Promise`\<`TypedResponse`\<[`Response`](queries.GetFullUserProfile.md#response)\>\>

**`Remarks`**

This request does not require authentication but some fields will be returned
as `null`.

If, for some reason, both `kaid` and `username` are provided, Khan Academy
will use `kaid` and ignore `username`.

**`Link`**

[Reference](https://khan-api.bhavjit.com/reference/view/19553924/2s8YzQUiXU#9ae4c690-be8a-4b57-acfc-07a4870a5ee3)

**`See`**

Client!Client.getUser

**`Example`**

Get profile by KAID, without error handling:
```js
const response = await queries.getFullUserProfile({ kaid: 'kaid_326465577260382527912172' })
const json = await response.json()
const profile = json.data.user
```

**`Example`**

Similarly, get profile by username:
```js
const response = await queries.getFullUserProfile({ username: 'sal' })
const json = await response.json()
const profile = json.data.user
```

**`Example`**

If no variables are provided or an empty object is passed in, Khan Academy
will use any cookies included with the request to fetch the profile
associated with them:
```js
const response = await queries.getFullUserProfile(null, {
 headers: { cookie: 'KAAS=...' }
})
const json = await response.json()
const profile = json.data.user
```

#### Defined in

[queries/getFullUserProfile.ts:224](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/queries/getFullUserProfile.ts#L224)

▸ **getFullUserProfile**(`kaid?`, `init?`): `Promise`\<`TypedResponse`\<[`Response`](queries.GetFullUserProfile.md#response)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `kaid?` | \`kaid\_$\{number}\` |
| `init?` | `RequestInit` |

#### Returns

`Promise`\<`TypedResponse`\<[`Response`](queries.GetFullUserProfile.md#response)\>\>

**`Example`**

Alternative usage by KAID:
```js
const response = await queries.getFullUserProfile('kaid_326465577260382527912172')
const json = await response.json()
const profile = json.data.user
```

#### Defined in

[queries/getFullUserProfile.ts:237](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/queries/getFullUserProfile.ts#L237)

▸ **getFullUserProfile**(`username?`, `init?`): `Promise`\<`TypedResponse`\<[`Response`](queries.GetFullUserProfile.md#response)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `username?` | `string` |
| `init?` | `RequestInit` |

#### Returns

`Promise`\<`TypedResponse`\<[`Response`](queries.GetFullUserProfile.md#response)\>\>

**`Example`**

Similarly, by username:
```js
const response = await queries.getFullUserProfile('sal')
const json = await response.json()
const profile = json.data.user
```

#### Defined in

[queries/getFullUserProfile.ts:250](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/queries/getFullUserProfile.ts#L250)

___

### getProfileWidgets

▸ **getProfileWidgets**(`variables`, `init?`): `Promise`\<`TypedResponse`\<[`Response`](queries.GetProfileWidgets.md#response)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | [`Variables`](../interfaces/queries.GetProfileWidgets.Variables.md) |
| `init?` | `RequestInit` |

#### Returns

`Promise`\<`TypedResponse`\<[`Response`](queries.GetProfileWidgets.md#response)\>\>

**`Link`**

[Reference](https://khan-api.bhavjit.com/reference/view/19553924/2s8YzQUiXU#d88fe317-8705-43d7-a811-5d93316dd4a2)

#### Defined in

[queries/getProfileWidgets.ts:118](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/queries/getProfileWidgets.ts#L118)

▸ **getProfileWidgets**(`kaid`, `init?`): `Promise`\<`TypedResponse`\<[`Response`](queries.GetProfileWidgets.md#response)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `kaid` | \`kaid\_$\{number}\` |
| `init?` | `RequestInit` |

#### Returns

`Promise`\<`TypedResponse`\<[`Response`](queries.GetProfileWidgets.md#response)\>\>

#### Defined in

[queries/getProfileWidgets.ts:122](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/queries/getProfileWidgets.ts#L122)

___

### getUserByUsernameOrEmail

▸ **getUserByUsernameOrEmail**(`variables`, `init?`): `Promise`\<`TypedResponse`\<[`Response`](queries.GetUserByUsernameOrEmail.md#response)\>\>

Get KAID by username or email.

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | [`Variables`](../interfaces/queries.GetUserByUsernameOrEmail.Variables.md) |
| `init?` | `RequestInit` |

#### Returns

`Promise`\<`TypedResponse`\<[`Response`](queries.GetUserByUsernameOrEmail.md#response)\>\>

**`Link`**

[Reference](https://khan-api.bhavjit.com/reference/view/19553924/2s8YzQUiXU#46e24c10-e98e-4900-bd53-b02d93f8e3c9)

**`Example`**

Simple usage without error handling:
```js
const response = await queries.getUserByUsernameOrEmail({
  username: 'sal'
})
const json = await response.json()
const kaid = json.data.user?.kaid
```

**`Example`**

Similarly, get KAID by email:
```js
const response = await queries.getUserByUsernameOrEmail({
 email: 'sal@khanacademy.org'
})
const json = await response.json()
const kaid = json.data.user?.kaid
```

#### Defined in

[queries/getUserByUsernameOrEmail.ts:55](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/queries/getUserByUsernameOrEmail.ts#L55)

▸ **getUserByUsernameOrEmail**(`username`, `init?`): `Promise`\<`TypedResponse`\<[`Response`](queries.GetUserByUsernameOrEmail.md#response)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `username` | `string` |
| `init?` | `RequestInit` |

#### Returns

`Promise`\<`TypedResponse`\<[`Response`](queries.GetUserByUsernameOrEmail.md#response)\>\>

**`Example`**

Alternative usage by username:
```js
const response = await queries.getUserByUsernameOrEmail('sal')
const json = await response.json()
const kaid = json.data.user?.kaid
```

#### Defined in

[queries/getUserByUsernameOrEmail.ts:68](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/queries/getUserByUsernameOrEmail.ts#L68)

▸ **getUserByUsernameOrEmail**(`email`, `init?`): `Promise`\<`TypedResponse`\<[`Response`](queries.GetUserByUsernameOrEmail.md#response)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `email` | \`$\{string}@$\{string}.$\{string}\` |
| `init?` | `RequestInit` |

#### Returns

`Promise`\<`TypedResponse`\<[`Response`](queries.GetUserByUsernameOrEmail.md#response)\>\>

**`Example`**

Similarly, by email:
```js
const response = await queries.getUserByUsernameOrEmail('sal@khanacademy.org')
const json = await response.json()
const kaid = json.data.user?.kaid
```

#### Defined in

[queries/getUserByUsernameOrEmail.ts:81](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/queries/getUserByUsernameOrEmail.ts#L81)

___

### getUserHoverCardProfile

▸ **getUserHoverCardProfile**(`variables`, `init?`): `Promise`\<`TypedResponse`\<[`Response`](queries.GetUserHoverCardProfile.md#response)\>\>

Low-level function for making a `getUserHoverCardProfile` request.

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | [`Variables`](../interfaces/queries.GetUserHoverCardProfile.Variables.md) |
| `init?` | `RequestInit` |

#### Returns

`Promise`\<`TypedResponse`\<[`Response`](queries.GetUserHoverCardProfile.md#response)\>\>

**`Link`**

[Reference](https://khan-api.bhavjit.com/reference/view/19553924/2s8YzQUiXU#6de1d62b-d8b4-425e-b0f2-305be6279718)

**`Example`**

Simple usage without error handling:
```js
const response = await queries.getUserHoverCardProfile({
  kaid: 'kaid_326465577260382527912172'
})
const json = await response.json()
const profile = json.data.user
```

#### Defined in

[queries/getUserHoverCardProfile.ts:70](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/queries/getUserHoverCardProfile.ts#L70)

▸ **getUserHoverCardProfile**(`kaid`, `init?`): `Promise`\<`TypedResponse`\<[`Response`](queries.GetUserHoverCardProfile.md#response)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `kaid` | \`kaid\_$\{number}\` |
| `init?` | `RequestInit` |

#### Returns

`Promise`\<`TypedResponse`\<[`Response`](queries.GetUserHoverCardProfile.md#response)\>\>

**`Example`**

Alternative usage:
```js
const response = await queries.getUserHoverCardProfile('kaid_326465577260382527912172')
const json = await response.json()
const profile = json.data.user
```

#### Defined in

[queries/getUserHoverCardProfile.ts:83](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/queries/getUserHoverCardProfile.ts#L83)

___

### hotlist

▸ **hotlist**(`variables`, `init?`): `Promise`\<`TypedResponse`\<[`Response`](queries.Hotlist.md#response)\>\>

Low-level function for making a `hotlist` request.

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | [`Variables`](../interfaces/queries.Hotlist.Variables.md) |
| `init?` | `RequestInit` |

#### Returns

`Promise`\<`TypedResponse`\<[`Response`](queries.Hotlist.md#response)\>\>

**`Link`**

[https://khan-api.bhavjit.com/reference/view/19553924/2s8YzQUiXU#63956e0c-3e52-410a-9c80-70b5b8031d97](https://khan-api.bhavjit.com/reference/view/19553924/2s8YzQUiXU#63956e0c-3e52-410a-9c80-70b5b8031d97)

**`Example`**

Simple usage without error handling:
```js
const response = await queries.hotlist({
 onlyOfficialProjectSpinoffs: false,
})
const json = await response.json()
const programs = json.data.listTopPrograms.programs
```

#### Defined in

[queries/hotlist.ts:79](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/queries/hotlist.ts#L79)

___

### programQuery

▸ **programQuery**(`variables`, `init?`): `Promise`\<`TypedResponse`\<[`Response`](queries.ProgramQuery.md#response)\>\>

Low-level function for making a `programQuery` request.

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | [`Variables`](../interfaces/queries.ProgramQuery.Variables.md) |
| `init?` | `RequestInit` |

#### Returns

`Promise`\<`TypedResponse`\<[`Response`](queries.ProgramQuery.md#response)\>\>

**`Link`**

[Reference](https://khan-api.bhavjit.com/reference/view/19553924/2s8YzQUiXU#77a4642b-3580-4409-b837-1ac82a487c35)

**`See`**

Client!Client.getProgram

**`Example`**

Simple usage without error handling:
```js
const response = await queries.programQuery({
  programId: '6058668928843776'
})
const json = await response.json()
const program = json.data.programById
```

#### Defined in

[queries/programQuery.ts:143](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/queries/programQuery.ts#L143)

▸ **programQuery**(`programId`, `init?`): `Promise`\<`TypedResponse`\<[`Response`](queries.ProgramQuery.md#response)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `programId` | [`ProgramID`](../README.md#programid) |
| `init?` | `RequestInit` |

#### Returns

`Promise`\<`TypedResponse`\<[`Response`](queries.ProgramQuery.md#response)\>\>

**`Example`**

Alternative usage:
```js
const response = await queries.programQuery(6058668928843776)
const json = await response.json()
const program = json.data.programById
```

#### Defined in

[queries/programQuery.ts:156](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/queries/programQuery.ts#L156)

___

### projectsAuthoredByUser

▸ **projectsAuthoredByUser**(`variables`, `init?`): `Promise`\<`TypedResponse`\<[`Response`](queries.ProjectsAuthoredByUser.md#response)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | [`Variables`](../interfaces/queries.ProjectsAuthoredByUser.Variables.md) |
| `init?` | `RequestInit` |

#### Returns

`Promise`\<`TypedResponse`\<[`Response`](queries.ProjectsAuthoredByUser.md#response)\>\>

**`Link`**

[Reference](https://khan-api.bhavjit.com/reference/view/19553924/2s8YzQUiXU#fe90a093-1deb-48bc-98a0-116275b2f512)

#### Defined in

[queries/projectsAuthoredByUser.ts:75](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/queries/projectsAuthoredByUser.ts#L75)
