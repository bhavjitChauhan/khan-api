## programQuery(variables, init)

> **programQuery**(`variables`, `init`?): `Promise`\<[`TypedResponse`](api%5Cinterfaces%5CTypedResponse.md)\<[`Response`](api%5Cnamespaces%5Cqueries%5Cnamespaces%5CProgramQuery%5Ctype-aliases%5CResponse.md)\>\>

Low-level function for making a `programQuery` request.

### Parameters

• **variables**: [`Variables`](api%5Cnamespaces%5Cqueries%5Cnamespaces%5CProgramQuery%5Cinterfaces%5CVariables.md)

• **init?**: `RequestInit`

### Returns

`Promise`\<[`TypedResponse`](api%5Cinterfaces%5CTypedResponse.md)\<[`Response`](api%5Cnamespaces%5Cqueries%5Cnamespaces%5CProgramQuery%5Ctype-aliases%5CResponse.md)\>\>

### Link

[Reference](https://khan-api.bhavjit.com/reference/view/19553924/2s8YzQUiXU#77a4642b-3580-4409-b837-1ac82a487c35)

### See

[Client.getProgram](api%5Cclasses%5CClient.md#getprogram)

### Example

Simple usage without error handling:
```js
const response = await queries.programQuery({
  programId: '6058668928843776'
})
const json = await response.json()
const program = json.data.programById
```

### Source

[src/queries/programQuery.ts:143](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/queries/programQuery.ts#L143)

## programQuery(programId, init)

> **programQuery**(`programId`, `init`?): `Promise`\<[`TypedResponse`](api%5Cinterfaces%5CTypedResponse.md)\<[`Response`](api%5Cnamespaces%5Cqueries%5Cnamespaces%5CProgramQuery%5Ctype-aliases%5CResponse.md)\>\>

### Parameters

• **programId**: [`ProgramID`](api%5Ctype-aliases%5CProgramID.md)

• **init?**: `RequestInit`

### Returns

`Promise`\<[`TypedResponse`](api%5Cinterfaces%5CTypedResponse.md)\<[`Response`](api%5Cnamespaces%5Cqueries%5Cnamespaces%5CProgramQuery%5Ctype-aliases%5CResponse.md)\>\>

### Example

Alternative usage:
```js
const response = await queries.programQuery(6058668928843776)
const json = await response.json()
const program = json.data.programById
```

### Source

[src/queries/programQuery.ts:156](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/queries/programQuery.ts#L156)
