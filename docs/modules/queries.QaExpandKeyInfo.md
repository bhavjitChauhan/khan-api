# Namespace: QaExpandKeyInfo

[queries](queries.md).QaExpandKeyInfo

## Interfaces

- [Variables](../interfaces/queries.QaExpandKeyInfo.Variables.md)

## Type Aliases

### Data

Ƭ **Data**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `qaExpandKeyInfo` | [`QaExpandKeyInfoSchema`](../interfaces/QaExpandKeyInfoSchema.md) |

#### Defined in

[queries/QAExpandKeyInfo.ts:22](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/queries/QAExpandKeyInfo.ts#L22)

___

### Response

Ƭ **Response**: [`StandardResponse`](../README.md#standardresponse)\<[`Data`](queries.QaExpandKeyInfo.md#data)\>

#### Defined in

[queries/QAExpandKeyInfo.ts:20](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/queries/QAExpandKeyInfo.ts#L20)

## Variables

### query

• `Const` **query**: ``"query QAExpandKeyInfo($encryptedKey: String) {\n  qaExpandKeyInfo(encryptedQaExpandKey: $encryptedKey) {\n    feedbackType\n    unencryptedKey\n    __typename\n  }\n}"``

#### Defined in

[queries/QAExpandKeyInfo.ts:8](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/queries/QAExpandKeyInfo.ts#L8)
