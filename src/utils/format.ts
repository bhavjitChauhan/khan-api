export const truncate = (str: string, length: number, postfix = '...') => {
  length = Math.max(0, length)
  return str.length > length
    ? str.slice(0, length - postfix.length) + postfix
    : str
}
