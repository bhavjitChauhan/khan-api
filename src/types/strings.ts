/**
 * @file Low-level string types with one-to-one mappings to the API
 */

import { avatarNames, avatarSlugs } from '../utils/avatars'
import { PROGRAM_URL_LOCALES, PROGRAM_URL_PATHS } from '../utils/regexes'

export type Email = `${string}@${string}.${string}`

export type Kaid = `kaid_${number}`

export type QualarooID = `_gae_bingo_random:${string}`

export type GoogleID = `http://googleid.khanacademy.org/${number}`

export type Locale = (typeof PROGRAM_URL_LOCALES)[number]

export type AvatarName = (typeof avatarNames)[number]

export type AvatarSlug = (typeof avatarSlugs)[number]

export type AvatarPath = `/images/avatars/svg/${AvatarSlug}.svg`

export type AvatarSVG = `https://www.khanacademy.org${AvatarPath}`

// @TODO: Can this be given a better name?
export type AvatarPNG =
  `https://www.khanacademy.org/images/avatars/${AvatarSlug}.png`

export type AvatarURL = AvatarSVG | AvatarPNG

export type ProgramIDString = `${number}`
export type ProgramIDNumber = number
export type ProgramID = `${number}` | number

export type ProgramURLPath = (typeof PROGRAM_URL_PATHS)[number]
export type ProgramURL =
  `http${string}://${string}khanacademy.${string}/${string}/${string}/${number}`

export type ProgramKey =
  `ag5zfmtoYW4tYWNhZGVteXI${string}CxIKU2NyYXRjaHBhZB${string}${string}`

// Unfortunately (or fortunately, depending on your perspective) this type has
// too many permutations to be used without lagging the editor
// export type FeedbackKey = `ag5zfmtoYW4tYWNhZGVteX${'I' | 'J'}${
//   | 'A'
//   | 'B'
//   | '7'
//   | '9'
//   | '-'
//   | '_'}CxIIVXNlckRhdGEi${'Gm' | 'GG' | 'G2' | 'Hm' | 'HG' | 'HW'}thaWRf${
//   | 'M'
//   | 'N'
//   | 'O'}${string}${
//   | 'LEghGZWVkYmFjaxiAg'
//   | 'DAsSCEZlZWRiYWNrGICA'
//   | 'MCxIIRmVlZGJhY2sYgI'
//   | 'wLEghGZWVkYmFjaxiAg'
//   | 'DAsSCEZlZWRiYWNrGICA'}${string}${
//   | 'M'
//   | 'DA'
//   | 'Cgw'
//   | 'Cww'
//   | 'CAw'
//   | 'CQw'}`

export type FeedbackKey =
  `ag5zfmtoYW4tYWNhZGVteX${string}CxIIVXNlckRhdGEi${string}thaWRf${string}${string}${string}`

export type EncryptedFeedbackKey = `kaencrypted_${string}_${string}`
