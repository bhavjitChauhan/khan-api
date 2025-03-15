> **programKeyToID**(`key`): `number`

Defined in: [src/utils/programs.ts:15](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/utils/programs.ts#L15)

Decodes program ID from a program key

## Parameters

### key

`` `ag5zfmtoYW4tYWNhZGVteXI${string}CxIKU2NyYXRjaHBhZB${string}${string}` ``

## Returns

`number`

## Remarks

Program keys are (URL-safe) Base64 encoded strings that contain the program
ID.

Credit to [@L1quidH2O](https://github.com/L1quidH2O) for the
original implementation.
