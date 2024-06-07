> **resolveKaid**(`identifier`): `Promise`\<[`Kaid`](api%5Ctype-aliases%5CKaid.md)\>

Resolve a KAID from a username or email address

## Parameters

• **identifier**: `string`

A KAID, username, or email address

## Returns

`Promise`\<[`Kaid`](api%5Ctype-aliases%5CKaid.md)\>

## Example

```ts
const kaid = await resolveKaid('bhavjitChauhan')
console.log(kaid) // kaid_376749826184384230772276
```

## Source

[src/utils/resolvers.ts:39](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/utils/resolvers.ts#L39)
