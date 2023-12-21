export interface Env {}

const KHAN_DOMAIN = 'www.khanacademy.org',
  ALLOWED_PATHNAME = '/api/internal/graphql'

function isRootUrl(url: string) {
  const { pathname } = new URL(url)
  return pathname === '/'
}

function isAllowedProxiedUrl(url: string) {
  const { hostname, pathname } = new URL(url)
  return hostname === KHAN_DOMAIN && pathname.startsWith(ALLOWED_PATHNAME)
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    if (isRootUrl(request.url)) return Response.redirect('https://khan-api.bhavjit.com/docs/proxy')

    const domain = request.headers.get('host')!.replace(/:\d{1,5}$/, ''),
      domainRegex = new RegExp(`${domain}(?::\\d{1,5})?`)

    const proxiedRequest = new Request(request.url.replace(domainRegex, KHAN_DOMAIN), {
      method: request.method,
      headers: request.headers,
      body: request.body,
    })
    if (!isAllowedProxiedUrl(proxiedRequest.url))
      return new Response(`Only \`${request.headers.get('host')}${ALLOWED_PATHNAME}\` is allowed`, { status: 403 })

    const proxiedResponse = await fetch(proxiedRequest)

    const modifiedHeaders = new Headers(proxiedResponse.headers)
    modifiedHeaders.set('Access-Control-Allow-Origin', request.headers.get('origin') ?? '*')
    const modifiedResponse = new Response(proxiedResponse.body, {
      status: proxiedResponse.status,
      statusText: proxiedResponse.statusText,
      headers: modifiedHeaders,
    })

    return modifiedResponse
  },
}
