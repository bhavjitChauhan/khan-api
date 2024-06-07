> **hotlist**(`variables`, `init`?): `Promise`\<[`TypedResponse`](api%5Cinterfaces%5CTypedResponse.md)\<[`Response`](api%5Cnamespaces%5Cqueries%5Cnamespaces%5CHotlist%5Ctype-aliases%5CResponse.md)\>\>

Low-level function for making a `hotlist` request.

## Parameters

• **variables**: [`Variables`](api%5Cnamespaces%5Cqueries%5Cnamespaces%5CHotlist%5Cinterfaces%5CVariables.md)

• **init?**: `RequestInit`

## Returns

`Promise`\<[`TypedResponse`](api%5Cinterfaces%5CTypedResponse.md)\<[`Response`](api%5Cnamespaces%5Cqueries%5Cnamespaces%5CHotlist%5Ctype-aliases%5CResponse.md)\>\>

## Link

[https://khan-api.bhavjit.com/reference/view/19553924/2s8YzQUiXU#63956e0c-3e52-410a-9c80-70b5b8031d97](https://khan-api.bhavjit.com/reference/view/19553924/2s8YzQUiXU#63956e0c-3e52-410a-9c80-70b5b8031d97)

## Example

Simple usage without error handling:
```js
const response = await queries.hotlist({
 onlyOfficialProjectSpinoffs: false,
})
const json = await response.json()
const programs = json.data.listTopPrograms.programs
```

## Source

[src/queries/hotlist.ts:81](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/queries/hotlist.ts#L81)
