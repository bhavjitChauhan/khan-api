> **resolveKaid**(`identifier`): `Promise`\<`` `kaid_${number}` ``\>

Defined in: [src/utils/resolvers.ts:39](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/utils/resolvers.ts#L39)

Resolve a KAID from a username or email address

## Parameters

### identifier

`string`

A KAID, username, or email address

## Returns

`Promise`\<`` `kaid_${number}` ``\>

## Example

```ts
const kaid = await resolveKaid('bhavjitChauhan')
console.log(kaid) // kaid_376749826184384230772276
```
