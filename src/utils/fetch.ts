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
  return await post<Response>(url, body, init)
}
