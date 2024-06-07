> **hashQuery**(`document`): `number`

Generates the djb2 hash for a query.

## Parameters

• **document**: `string`

## Returns

`number`

## Description

This hash may be used to make Khan API requests GET requests instead of POST
request queries.

## Example

```ts
const hash = hashQuery(GET_FULL_USER_PROFILE_QUERY)
const variables = { username: 'sal' }
const url = `https://www.khanacademy.org/api/internal/graphql/getFullUserProfile?hash=${hash}&variables=${encodeURIComponent(JSON.stringify(variables))}`

const response = await fetch(url)
const data = await response.json()
```

## Source

[src/utils/safelist.ts:64](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/utils/safelist.ts#L64)
