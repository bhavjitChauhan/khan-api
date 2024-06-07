## QAExpandKeyInfo(variables, init)

> **QAExpandKeyInfo**(`variables`, `init`?): `Promise`\<[`TypedResponse`](api%5Cinterfaces%5CTypedResponse.md)\<[`Response`](api%5Cnamespaces%5Cqueries%5Cnamespaces%5CQaExpandKeyInfo%5Ctype-aliases%5CResponse.md)\>\>

Low-level function for making a `QAExpandKeyInfo` request.

### Parameters

• **variables**: [`Variables`](api%5Cnamespaces%5Cqueries%5Cnamespaces%5CQaExpandKeyInfo%5Cinterfaces%5CVariables.md)

• **init?**: `RequestInit`

### Returns

`Promise`\<[`TypedResponse`](api%5Cinterfaces%5CTypedResponse.md)\<[`Response`](api%5Cnamespaces%5Cqueries%5Cnamespaces%5CQaExpandKeyInfo%5Ctype-aliases%5CResponse.md)\>\>

### Link

[Reference](https://khan-api.bhavjit.com/reference/view/19553924/2s8YzQUiXU#2354cba6-9065-4431-8d4a-f44f24527eb4)

### Example

Simple usage without error handling:
```js
const response = await queries.QAExpandKeyInfo({
 encryptedKey: 'kaencrypted_e1af9ca95e8bf24e1cebdb8a1e94f7a3_76142801656102acc04c5154ee776b59e6323603d457c39e2a18a68f32a9ac1fefcdfd57c28ec771ec62fbee8ae03e0509090d80723bb489a87010ba69a0a5fdbd27a91a0db97971b59b77548da0eb2494aa274600fa28939e8975abd13c851c5a2f4f701d7dc7e8a2879f3c8d59be0953fafa318bd9b036f6c3d6dc0212c926'
})
const json = await response.json()
const unencryptedKey = json.data.qaExpandKeyInfo?.unencryptedKey
```

### Source

[src/queries/QAExpandKeyInfo.ts:42](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/queries/QAExpandKeyInfo.ts#L42)

## QAExpandKeyInfo(encryptedKey, init)

> **QAExpandKeyInfo**(`encryptedKey`, `init`?): `Promise`\<[`TypedResponse`](api%5Cinterfaces%5CTypedResponse.md)\<[`Response`](api%5Cnamespaces%5Cqueries%5Cnamespaces%5CQaExpandKeyInfo%5Ctype-aliases%5CResponse.md)\>\>

### Parameters

• **encryptedKey**: \`kaencrypted\_$\{string\}\_$\{string\}\`

• **init?**: `RequestInit`

### Returns

`Promise`\<[`TypedResponse`](api%5Cinterfaces%5CTypedResponse.md)\<[`Response`](api%5Cnamespaces%5Cqueries%5Cnamespaces%5CQaExpandKeyInfo%5Ctype-aliases%5CResponse.md)\>\>

### Example

Alternative usage:
```js
const response = await queries.QAExpandKeyInfo('kaencrypted_e1af9ca95e8bf24e1cebdb8a1e94f7a3_76142801656102acc04c5154ee776b59e6323603d457c39e2a18a68f32a9ac1fefcdfd57c28ec771ec62fbee8ae03e0509090d80723bb489a87010ba69a0a5fdbd27a91a0db97971b59b77548da0eb2494aa274600fa28939e8975abd13c851c5a2f4f701d7dc7e8a2879f3c8d59be0953fafa318bd9b036f6c3d6dc0212c926')
const json = await response.json()
const unencryptedKey = json.data.qaExpandKeyInfo?.unencryptedKey
```

### Source

[src/queries/QAExpandKeyInfo.ts:55](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/queries/QAExpandKeyInfo.ts#L55)
