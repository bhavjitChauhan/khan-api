export const truncate = (str: string, length: number, postfix = '...') => {
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

export function toURLSafeBase64(base64: string) {
  return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
}
