> **programKeyToID**(`key`): [`ProgramIDNumber`](api%5Ctype-aliases%5CProgramIDNumber.md)

Decodes program ID from a program key

## Parameters

• **key**: \`ag5zfmtoYW4tYWNhZGVteXI$\{string\}CxIKU2NyYXRjaHBhZB$\{string\}$\{string\}\`

## Returns

[`ProgramIDNumber`](api%5Ctype-aliases%5CProgramIDNumber.md)

## Remarks

Program keys are (URL-safe) Base64 encoded strings that contain the program
ID.

Credit to [@L1quidH2O](https://github.com/L1quidH2O) for the
original implementation.

## Source

[src/utils/programs.ts:15](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/utils/programs.ts#L15)
