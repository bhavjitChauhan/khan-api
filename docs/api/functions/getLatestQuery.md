> **getLatestQuery**(`query`): `Promise`\<`null` \| `string`\>

Defined in: [src/utils/safelist.ts:14](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/utils/safelist.ts#L14)

Gets the latest version of a query from the Safelist.

## Parameters

### query

`string`

The operation name of the query

## Returns

`Promise`\<`null` \| `string`\>

## See

[Safelisted Queries](https://github.com/bhavjitChauhan/khan-api/tree/safelist/query)

## Example

```ts
const GET_FULL_USER_PROFILE_QUERY = await getLatestQuery('getFullUserProfile')
```
