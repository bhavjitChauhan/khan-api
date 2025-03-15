> **resolveUsername**(`identifier`): `Promise`\<`string`\>

Defined in: [src/utils/resolvers.ts:73](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/utils/resolvers.ts#L73)

Resolve a username from a KAID or email address

## Parameters

### identifier

`string`

KAID, username, or email address

## Returns

`Promise`\<`string`\>

## Example

```ts
const username = await resolveUsername('kaid_376749826184384230772276')
console.log(username) // bhavjitChauhan
```
