import { ProgramKey } from '../types/strings'
import { toStandardBase64, toURLSafeBase64 } from './format'
import { isProgramKey, ProgramIDRegex } from './regexes'

/**
 * Decodes program ID from a program key
 *
 * @remarks
 * Program keys are (URL-safe) Base64 encoded strings that contain the program
 * ID.
 *
 * Credits to {@link https://github.com/L1quidH2O | @L1quidH2O} for the
 * original implementation.
 */
export function programKeyToID(key: string) {
  if (!isProgramKey(key)) throw new Error('Invalid program key')

  let bytes = atob(toStandardBase64(key))
    .split('')
    .map((char) => char.charCodeAt(0))

  const version = bytes[17]
  if (version === 20) bytes = bytes.slice(32, 37)
  else if (version === 23) bytes = bytes.slice(34, 40)
  else throw new Error(`Unknown program key version: ${version}`)

  let result = 0n
  for (let i = 0; i < bytes.length; i++) {
    result |= BigInt(bytes[i] & 127) << BigInt(i * 7)
  }

  return Number(version === 20 ? result : result << 14n)
}

/**
 * Encodes program ID to a program key
 *
 * @remarks
 * Credits to {@link https://github.com/L1quidH2O | @L1quidH2O} for the
 * original implementation.
 */
export function programIDtoKey(id: number) {
  if (!ProgramIDRegex.test(id.toString())) throw new Error('Invalid program ID')

  const encoded = id
    .toString(2)
    .match(/.{1,7}(?=(.{7})*$)/g)!
    .map((r) => String.fromCharCode(parseInt(r.length === 7 ? `1${r}` : r, 2)))
    .reverse()
    .join('')

  let base64 = btoa(
    `j\x0Es~khan-academyr${
      encoded.length === 5 ? '\x14' : '\x17'
    }\v\x12\nScratchpad\x18${encoded}\f`
  )

  base64 = toURLSafeBase64(base64)

  return base64 as ProgramKey
}
