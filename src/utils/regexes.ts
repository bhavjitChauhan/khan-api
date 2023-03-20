import {
  GoogleID,
  Kaid,
  EncryptedFeedbackKey,
  FeedbackKey,
  ProgramKey,
  QualarooID,
  ProgramURL,
  ProgramID,
  Email,
  UserURL,
} from '../types/strings'
import { toStandardBase64 } from './format'

function matchify(regex: RegExp) {
  return new RegExp(`(${regex.source.slice(1, -1)})`)
}

export const URL_TLDS = ['com', 'org'] as const
export const URL_LOCALES = [
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

export const KaidRegex = /^kaid_\d{20,25}$/
export const KaidRegexMatch = matchify(KaidRegex)
export const isKaid = (str: string): str is Kaid => KaidRegex.test(str)

export const UserURLRegex = new RegExp(
  `^https?:\\/\\/(?:(?:www|${URL_LOCALES.join(
    '|'
  )})\\.)?khanacademy\\.(?:${URL_TLDS.join(
    '|'
  )})\\/profile\\/((?!kaid_|kaid_\\D)\\w+|(?:${KaidRegex.toString().slice(
    2,
    -2
  )}))(?:\\/.*)?$`,
  'i'
)
export const UserURLRegexMatch = matchify(UserURLRegex)

export const isUserURL = (str: string): str is UserURL => UserURLRegex.test(str)

export const PROGRAM_ID_LENGTHS = [9, 10, 16] as const
export const ProgramIDRegex = new RegExp(
  `^[1-9](?:(?:${PROGRAM_ID_LENGTHS.map((v) => `\\d{${v - 1}}`).join('|')}))$`
)
export const ProgramIDRegexMatch = new RegExp(
  `(?:^|\\D)(${ProgramIDRegex.source.slice(1, -1)})(?:$|\\D)`
)

export function isProgramID(strOrNum: string | number): strOrNum is ProgramID {
  return ProgramIDRegex.test(strOrNum.toString())
}

export const PROGRAM_URL_PATHS = [
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
  `^https?:\\/\\/(?:(?:www|${URL_LOCALES.join(
    '|'
  )})\\.)?khanacademy\\.(?:${URL_TLDS.join('|')})\\/(?:${PROGRAM_URL_PATHS.join(
    '|'
  )})\\/[\\w\\d-.~()'!*:@,;]+\\/(${ProgramIDRegex.toString().slice(2, -2)})$`,
  'i'
)
export const ProgramURLRegexMatch = matchify(ProgramURLRegex)

export function isProgramURL(str: string): str is ProgramURL {
  return ProgramURLRegex.test(str)
}

export const ProgramImagePathRegex = new RegExp(
  `^\\/(?:${PROGRAM_URL_PATHS.join(
    '|'
  )})\\/[\\w\\d-.~()'!*:@,;]+\\/\\d+\\/(\\d+)\\.png$`
)
export const ProgramImagePathRegexMatch = matchify(ProgramImagePathRegex)

export const PROGRAM_KEY_LENGTHS = [51, 54] as const
export const ProgramKeyRegex =
  /^ag5zfmtoYW4tYWNhZGVteXI(?:U|X)CxIKU2NyYXRjaHBhZB(?:i|j)(?=[\w-]*$)(?:.{7}w|.{9}C(?:g|w|A|Q)w)$/
export const ProgramKeyRegexMatch = matchify(ProgramKeyRegex)

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

// For some reason, there are 3 keys with 103 characters. There's no way anyone
// is going to actually test those keys so I don't consider them valid
export const MESSAGE_KEY_LENGTHS = [106, 107, 108, 110, 111] as const
export const FeedbackKeyRegex =
  /^ag5zfmtoYW4tYWNhZGVteX(?:I|J)(?:A|B|7|9|-|_)CxIIVXNlckRhdGEi(?:Gm|GG|G2|Hm|HG|HW)thaWRf(?:M|N|O)(?:\w{34}|\w{29,31}|\w{27})(?:LEghGZWVkYmFjaxiAg[I-P](?:O|P|W|X|2|3)|DAsSCEZlZWRiYWNrGICA|MCxIIRmVlZGJhY2sYgI(?:C|D)|wLEghGZWVkYmFjaxiAg|DAsSCEZlZWRiYWNrGICA)(?:[\w-]{5}|[\w-]{7,8})(?:M|DA|C(?:g|w|A|Q)w)$/
export const FeedbackKeyRegexMatch = matchify(FeedbackKeyRegex)
export const isFeedbackKey = (str: string): str is FeedbackKey =>
  FeedbackKeyRegex.test(str)

export const MESSAGE_ENCRYPTED_KEY_LENGTHS = [301] as const
export const MessageEncryptedKeyRegex =
  /^kaencrypted_[a-z0-9]{32}_[a-z0-9]{256}$/
export const MessageEncryptedKeyRegexMatch = matchify(MessageEncryptedKeyRegex)
export const isEncryptedFeedbackKey = (
  str: string
): str is EncryptedFeedbackKey => MessageEncryptedKeyRegex.test(str)

export const GoogleIDRegex = /^http:\/\/googleid\.khanacademy\.org\/(\d+)$/
export const GoogleIDRegexMatch = matchify(GoogleIDRegex)
export const isGoogleID = (str: string): str is GoogleID =>
  GoogleIDRegex.test(str)

export const QualarooIDRegex = /^_gae_bingo_random:(\w+-\w+-\w+)$/
export const QualarooIDRegexMatch = matchify(QualarooIDRegex)
export const isQualarooID = (str: string): str is QualarooID =>
  QualarooIDRegex.test(str)

export const EmailRegex =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
export const EmailRegexMatch = matchify(EmailRegex)
export const isEmail = (str: string): str is Email => EmailRegex.test(str)
