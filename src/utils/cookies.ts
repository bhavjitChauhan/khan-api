/**
 * Remove cookie attributes from a cookie string (`Path`, `Expires`, `Max-Age`, `HttpOnly`, `Secure`, `SameSite`)
 * @param cookies
 */
export function stripCookies(cookies: string): string {
  return cookies
    .replace(/[a-zA-Z]+, \d\d [A-Za-z0-9]+ \d{4} \d\d:\d\d:\d\d [a-zA-Z]+/g, '')
    .replace(/; (Path|Expires|Max-Age|HttpOnly|Secure|SameSite)[^;,]*/g, '')
    .replace(/,/g, ';')
}
