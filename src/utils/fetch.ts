import fetch from 'cross-fetch'
import { getLatestMutation, getLatestQuery } from './safelist'
import { PROXY_DOMAIN } from '../lib/constants'

export interface TypedResponse<T> extends Response {
  json(): Promise<T>
}

export async function http<Response>(
  url: string,
  init?: RequestInit
): Promise<TypedResponse<Response>> {
  return await fetch(url, init)
}

export async function get<Response>(
  url: string,
  init?: RequestInit
): Promise<TypedResponse<Response>> {
  init = { method: 'get', ...init }
  return await http<Response>(url, init)
}

export async function post<Response>(
  url: string,
  body: Record<string, unknown>,
  init?: RequestInit
): Promise<TypedResponse<Response>> {
  init = { method: 'post', body: JSON.stringify(body), ...init }
  return await http<Response>(url, init)
}

export async function graphql<Variables, Response>(
  url: string,
  query: string,
  variables: Variables = {} as Variables,
  init?: RequestInit
): Promise<TypedResponse<Response>> {
  const body = { query, variables }
  if (
    typeof window !== 'undefined' &&
    window.location.hostname !== 'khanacademy.org'
  )
    url = url.replace('www.khanacademy.org', PROXY_DOMAIN)

  const response = await post<Response>(url, body, init)
  if (response.status === 403) {
    const isQuery = query.startsWith('query'),
      operationName = query.match(/^(?:query|mutation) (\w+)/)?.[1]
    if (!operationName)
      throw new Error(`An unknown query is no longer in the safelist`)
    console.warn(
      `The query for operation "${operationName}" is no longer in the safelist. Attempting to fetch the latest version from the safelist...`
    )
    const latestQuery = isQuery
      ? await getLatestQuery(operationName)
      : await getLatestMutation(operationName)

    if (!latestQuery)
      throw new Error(
        `The query for operation "${operationName}" was not found in the safelist`
      )

    return await post<Response>(url, { ...body, query: latestQuery }, init)
  }
  return response
}
