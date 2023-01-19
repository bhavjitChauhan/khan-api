/**
 * @file Low-level string types with one-to-one mappings to the API
 */

import { avatarNames, avatarSlugs } from '../utils/avatars'

export type Kaid = `kaid_${number}`

export type QualarooID = `_gae_bingo_random:${string}`

export type GoogleID = `http://googleid.khanacademy.org/${number}`

export type Locale =
  | 'as'
  | 'az'
  | 'cs'
  | 'da'
  | 'el'
  | 'gu'
  | 'hu'
  | 'id'
  | 'it'
  | 'lt'
  | 'ja'
  | 'kk'
  | 'kn'
  | 'ky'
  | 'lv'
  | 'mn'
  | 'mr'
  | 'my'
  | 'nl'
  | 'pt-pt'
  | 'ru'
  | 'sgn-us'
  | 'sv'
  | 'ta'
  | 'uz'
  | 'bg'
  | 'bn'
  | 'de'
  | 'en'
  | 'es'
  | 'fr'
  | 'hi'
  | 'hy'
  | 'ka'
  | 'km'
  | 'ko'
  | 'nb'
  | 'pa'
  | 'pl'
  | 'pt'
  | 'ro'
  | 'sr'
  | 'tr'
  | 'vi'
  | 'zh-hans'

export type AvatarName = typeof avatarNames[number]

export type AvatarSlug = typeof avatarSlugs[number]

export type AvatarPath = `/images/avatars/svg/${AvatarSlug}.svg`

export type AvatarSVG = `https://www.khanacademy.org${AvatarPath}`

// @TODO: Can this be given a better name?
export type AvatarPNG =
  `https://www.khanacademy.org/images/avatars/${AvatarSlug}.png`

export type AvatarURL = AvatarSVG | AvatarPNG
