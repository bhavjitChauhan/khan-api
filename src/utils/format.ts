/**
 * Shorten a string to a given length
 *
 * @param length Length to shorten to including postfix
 * @param postfix Postfix to append to the end of the string
 */
export function truncate(str: string, length: number, postfix = '...') {
  length = Math.max(0, length)
  return str.length > length
    ? str.slice(0, length - postfix.length) + postfix
    : str
}

/**
 * Converts URL-safe Base64 to standard Base64
 */
export function toStandardBase64(base64: string) {
  return base64.replace(/-/g, '+').replace(/_/g, '/')
}

/**
 * Converts standard Base64 to URL-safe Base64
 */
export function toURLSafeBase64(base64: string) {
  return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
}
