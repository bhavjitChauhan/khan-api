## Call Signature

> **programQuery**(`variables`, `init`?): `Promise`\<[`TypedResponse`](api/interfaces%5CTypedResponse.md)\<[`Response`](api/namespaces%5Cqueries%5Cnamespaces%5CProgramQuery%5Ctype-aliases%5CResponse.md)\>\>

Defined in: [src/queries/programQuery.ts:143](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/queries/programQuery.ts#L143)

Low-level function for making a `programQuery` request.

### Parameters

#### variables

[`Variables`](api/namespaces%5Cqueries%5Cnamespaces%5CProgramQuery%5Cinterfaces%5CVariables.md)

#### init?

`RequestInit`

### Returns

`Promise`\<[`TypedResponse`](api/interfaces%5CTypedResponse.md)\<[`Response`](api/namespaces%5Cqueries%5Cnamespaces%5CProgramQuery%5Ctype-aliases%5CResponse.md)\>\>

### Link

[Reference](https://khan-api.bhavjit.com/reference/view/19553924/2s8YzQUiXU#77a4642b-3580-4409-b837-1ac82a487c35)

### See

[Client.getProgram](api/classes%5CClient.md#getprogram)

### Example

Simple usage without error handling:
```js
const response = await queries.programQuery({
  programId: '6058668928843776'
})
const json = await response.json()
const program = json.data.programById
```

## Call Signature

> **programQuery**(`programId`, `init`?): `Promise`\<[`TypedResponse`](api/interfaces%5CTypedResponse.md)\<[`Response`](api/namespaces%5Cqueries%5Cnamespaces%5CProgramQuery%5Ctype-aliases%5CResponse.md)\>\>

Defined in: [src/queries/programQuery.ts:156](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/queries/programQuery.ts#L156)

### Parameters

#### programId

[`ProgramID`](api/type-aliases%5CProgramID.md)

#### init?

`RequestInit`

### Returns

`Promise`\<[`TypedResponse`](api/interfaces%5CTypedResponse.md)\<[`Response`](api/namespaces%5Cqueries%5Cnamespaces%5CProgramQuery%5Ctype-aliases%5CResponse.md)\>\>

### Example

Alternative usage:
```js
const response = await queries.programQuery(6058668928843776)
const json = await response.json()
const program = json.data.programById
```
