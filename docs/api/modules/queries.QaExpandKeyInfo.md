# Namespace: QaExpandKeyInfo

[queries](api/modules/queries.md).QaExpandKeyInfo

## Interfaces

- [Variables](api/interfaces/queries.QaExpandKeyInfo.Variables.md)

## Type Aliases

### Data

Ƭ **Data**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `qaExpandKeyInfo` | [`QaExpandKeyInfoSchema`](api/interfaces/QaExpandKeyInfoSchema.md) |

#### Defined in

[src/queries/QAExpandKeyInfo.ts:22](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/queries/QAExpandKeyInfo.ts#L22)

___

### Response

Ƭ **Response**: [`StandardResponse`](api/README.md#standardresponse)\<[`Data`](api/modules/queries.QaExpandKeyInfo.md#data)\>

#### Defined in

[src/queries/QAExpandKeyInfo.ts:20](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/queries/QAExpandKeyInfo.ts#L20)

## Variables

### query

• `Const` **query**: ``"query QAExpandKeyInfo($encryptedKey: String) {\n  qaExpandKeyInfo(encryptedQaExpandKey: $encryptedKey) {\n    feedbackType\n    unencryptedKey\n    __typename\n  }\n}"``

#### Defined in

[src/queries/QAExpandKeyInfo.ts:8](https://github.com/bhavjitChauhan/khan-api/blob/649b2610/src/queries/QAExpandKeyInfo.ts#L8)
