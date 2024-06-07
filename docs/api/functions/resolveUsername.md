> **resolveUsername**(`identifier`): `Promise`\<`string`\>

Resolve a username from a KAID or email address

## Parameters

• **identifier**: `string`

KAID, username, or email address

## Returns

`Promise`\<`string`\>

## Example

```ts
const username = await resolveUsername('kaid_376749826184384230772276')
console.log(username) // bhavjitChauhan
```

## Source

[src/utils/resolvers.ts:73](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/utils/resolvers.ts#L73)
