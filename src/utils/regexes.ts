import { GoogleID, Kaid, ProgramKey, QualarooID } from '../types/strings'
import { toStandardBase64 } from './format'

export const KaidRegex = /^kaid_\d{20,25}$/
export const isKaid = (str: string): str is Kaid => KaidRegex.test(str)

const PROGRAM_ID_LENGTHS = [9, 10, 16] as const
export const ProgramIDRegex = new RegExp(
  `^[1-9](?:(?:${PROGRAM_ID_LENGTHS.map((v) => `\\d{${v - 1}}`).join('|')}))$`
)

const PROGRAM_URL_TLDS = ['com', 'org'] as const
const PROGRAM_URL_LOCALES = [
  'as',
  'az',
  'cs',
  'da',
  'el',
  'gu',
  'hu',
  'id',
  'it',
  'lt',
  'ja',
  'kk',
  'kn',
  'ky',
  'lv',
  'mn',
  'mr',
  'my',
  'nl',
  'pt-pt',
  'ru',
  'sv',
  'ta',
  'uz',
  'bg',
  'bn',
  'de',
  'en',
  'es',
  'fr',
  'hi',
  'hy',
  'ka',
  'km',
  'ko',
  'nb',
  'pa',
  'pl',
  'pt',
  'ro',
  'sr',
  'tr',
  'vi',
  'zh-hans',
  'sgn-us',
] as const
const PROGRAM_URL_PATHS = [
  'computer-programming',
  'cs',
  'pixar',
  'nasa',
  'piab-sandbox',
  'computer-science',
  'hour-of-code',
  'math',
  'differential-equations',
  'electrical-engineering',
  'mcat',
  'apchem-topic',
  'chemistry',
  'art-history-basics',
  'biology',
] as const
export const ProgramURLRegex = new RegExp(
  `^https?:\\/\\/(?:(?:www|${PROGRAM_URL_LOCALES.join(
    '|'
  )})\\.)?khanacademy\\.(?:${PROGRAM_URL_TLDS.join(
    '|'
  )})\\/(?:${PROGRAM_URL_PATHS.join(
    '|'
  )})\\/[\\w\\d-.~()'!*:@,;]+\\/(${ProgramIDRegex.toString().slice(2, -2)})$`,
  'i'
)

export const ProgramImagePathRegex = new RegExp(
  `^\\/(?:${PROGRAM_URL_PATHS.join(
    '|'
  )})\\/[\\w\\d-.~()'!*:@,;]+\\/\\d+\\/(\\d+)\\.png$`
)

const PROGRAM_KEY_LENGTHS = [51, 54] as const
const ProgramKeyRegex =
  /^ag5zfmtoYW4tYWNhZGVteXI(?:U|X)CxIKU2NyYXRjaHBhZB(?:i|j)(?=[\w-]*$)(?:.{7}w|.{9}C(?:g|w|A|Q)w)$/

/**
 * Checks if a string is a valid program key
 *
 * @remarks
 * This function will only check the format of the string and not the existence
 * of the program on Khan Academy.
 *
 * Program keys are not the same format as lesson keys or other keys
 * that may look similar at first glance.
 *
 * This function has been tested against more than 1,000,000 program keys but it
 * is possible that in the future, new program key formats will be introduced.
 */
export function isProgramKey(str: string): str is ProgramKey {
  if (PROGRAM_KEY_LENGTHS.includes(str.length as 51 | 54)) return false
  if (!ProgramKeyRegex.test(str)) return false

  try {
    atob(toStandardBase64(str))
    return true
  } catch {
    return false
  }
}

export const GoogleIDRegex = /^http:\/\/googleid\.khanacademy\.org\/(\d+)$/
export const isGoogleID = (str: string): str is GoogleID =>
  GoogleIDRegex.test(str)

export const QualarooIDRegex = /^_gae_bingo_random:(\w+-\w+-\w+)$/
export const isQualarooID = (str: string): str is QualarooID =>
  QualarooIDRegex.test(str)

export const EmailRegex =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
