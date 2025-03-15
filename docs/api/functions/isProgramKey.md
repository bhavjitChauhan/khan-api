> **isProgramKey**(`str`): `` str is `ag5zfmtoYW4tYWNhZGVteXI${string}CxIKU2NyYXRjaHBhZB${string}${string}` ``

Defined in: [src/utils/regexes.ts:155](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/utils/regexes.ts#L155)

Checks if a string is a valid program key

## Parameters

### str

`string`

## Returns

`` str is `ag5zfmtoYW4tYWNhZGVteXI${string}CxIKU2NyYXRjaHBhZB${string}${string}` ``

## Remarks

This function will only check the format of the string and not the existence
of the program on Khan Academy.

Program keys are not the same format as lesson keys or other keys
that may look similar at first glance.

This function has been tested against more than 1,000,000 program keys but it
is possible that in the future, new program key formats will be introduced.
