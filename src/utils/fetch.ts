export interface TypedResponse<T> extends Response {
  json(): Promise<T>
}

export async function http<Response>(url: string, init?: RequestInit): Promise<TypedResponse<Response>> {
  const response = await fetch(url, init)

  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`)

  return response
}

export async function get<Response>(url: string, init?: RequestInit): Promise<TypedResponse<Response>> {
  init = { method: 'get', ...init } as RequestInit
  return await http<Response>(url, init)
}

export async function post<Body, Response>(
  url: string,
  body: Body,
  init?: RequestInit
): Promise<TypedResponse<Response>> {
  init = { method: 'post', body: JSON.stringify(body), ...init }
  return await http<Response>(url, init)
}

export async function graphql<Variables, Response>(
  url: string,
  query: string,
  variables: Variables,
  init?: RequestInit
): Promise<TypedResponse<Response>> {
  interface Body {
    query: string
    variables: Variables
  }
  const body = { query, variables }
  return await post<Body, Response>(url, body, init)
}
