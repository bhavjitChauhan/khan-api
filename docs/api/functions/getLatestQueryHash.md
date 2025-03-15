> **getLatestQueryHash**(`query`): `Promise`\<`null` \| `number`\>

Defined in: [src/utils/safelist.ts:85](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/utils/safelist.ts#L85)

Gets the latest version of a query from the Safelist and returns its hash.

## Parameters

### query

`string`

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

[hashQuery](api/functions%5ChashQuery.md)
