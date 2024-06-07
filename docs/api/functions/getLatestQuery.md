> **getLatestQuery**(`query`): `Promise`\<`null` \| `string`\>

Gets the latest version of a query from the Safelist.

## Parameters

• **query**: `string`

The operation name of the query

## Returns

`Promise`\<`null` \| `string`\>

## See

[Safelisted Queries](https://github.com/bhavjitChauhan/khan-api/tree/safelist/query)

## Example

```ts
const GET_FULL_USER_PROFILE_QUERY = await getLatestQuery('getFullUserProfile')
```

## Source

[src/utils/safelist.ts:14](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/utils/safelist.ts#L14)
