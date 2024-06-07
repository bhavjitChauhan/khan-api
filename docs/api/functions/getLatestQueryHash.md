> **getLatestQueryHash**(`query`): `Promise`\<`null` \| `number`\>

Gets the latest version of a query from the Safelist and returns its hash.

## Parameters

• **query**: `string`

## Returns

`Promise`\<`null` \| `number`\>

## Example

```ts
const hash = await getLatestQueryHash('getFullUserProfile')
const variables = { username: 'sal' }
const url = `https://www.khanacademy.org/api/internal/graphql/getFullUserProfile?hash=${hash}&variables=${encodeURIComponent(JSON.stringify(variables))}`

const response = await fetch(url)
const data = await response.json()
```

## See

[hashQuery](api%5Cfunctions%5ChashQuery.md)

## Source

[src/utils/safelist.ts:85](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/utils/safelist.ts#L85)
