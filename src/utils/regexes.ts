export const KaidRegex = /^kaid_\d{20,25}$/

const VALID_PROGRAM_ID_LENGTHS = [9, 10, 16] as const
export const ProgramIDRegex = new RegExp(
  `^[1-9](?:(?:${VALID_PROGRAM_ID_LENGTHS.map((v) => `\\d{${v - 1}}`).join(
    '|'
  )}))$`
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
  )})\\/[a-zA-Z0-9-._~()'!*:@,;]+\\/${ProgramIDRegex.toString().slice(2, -2)}$`,
  'i'
)

export const GoogleIDRegex = /^http:\/\/googleid\.khanacademy\.org\/(\d+)$/

export const QualariiIDRegex = /^_gae_bingo_random:(\w+-\w+-\w+)$/
