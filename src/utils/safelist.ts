import { SAFELIST_URL } from '../lib/constants'
import { http } from './fetch'

/**
 * Gets the latest version of a query from the Safelist.
 *
 * @param query The operation name of the query
 *
 * @see {@link https://github.com/bhavjitChauhan/khan-api/tree/safelist/query | Safelisted Queries}
 *
 * @example
 * const GET_FULL_USER_PROFILE_QUERY = await getLatestQuery('getFullUserProfile')
 */
export async function getLatestQuery(query: string) {
  const response = await http(`${SAFELIST_URL}/query/${query}`)
  if (response.status === 404) return null
  const text = await response.text()
  return text
}

/**
 * Gets the latest version of a mutation from the Safelist.
 *
 * @param mutation The operation name of the mutation
 *
 * @see {@link https://github.com/bhavjitChauhan/khan-api/tree/safelist/mutation | Safelisted Mutations}
 */
export async function getLatestMutation(mutation: string) {
  const response = await http(`${SAFELIST_URL}/mutation/${mutation}`)
  if (response.status === 404) return null
  const text = await response.text()
  return text
}

/**
 * Gets the latest version of a fragment from the Safelist.
 *
 * @param fragment The name of the fragment
 *
 * @see {@link https://github.com/bhavjitChauhan/khan-api/tree/safelist/fragment | Safelisted Fragments}
 */
export async function getLatestFragment(fragment: string) {
  const response = await http(`${SAFELIST_URL}/fragment/${fragment}`)
  if (response.status === 404) return null
  const text = await response.text()
  return text
}

/**
 * Generates the djb2 hash for a query.
 *
 * @description
 * This hash may be used to make Khan API requests GET requests instead of POST
 * request queries.
 *
 * @example
 * const hash = hashQuery(GET_FULL_USER_PROFILE_QUERY)
 * const variables = { username: 'sal' }
 * const url = `https://www.khanacademy.org/api/internal/graphql/getFullUserProfile?hash=${hash}&variables=${encodeURIComponent(JSON.stringify(variables))}`
 *
 * const response = await fetch(url)
 * const data = await response.json()
 */
export function hashQuery(document: string) {
  let hash = 5381,
    i = document.length

  while (i) hash = (hash * 33) ^ document.charCodeAt(--i)
  return hash >>> 0
}

/**
 * Gets the latest version of a query from the Safelist and returns its hash.
 *
 * @example
 * const hash = await getLatestQueryHash('getFullUserProfile')
 * const variables = { username: 'sal' }
 * const url = `https://www.khanacademy.org/api/internal/graphql/getFullUserProfile?hash=${hash}&variables=${encodeURIComponent(JSON.stringify(variables))}`
 *
 * const response = await fetch(url)
 * const data = await response.json()
 *
 * @see {@link hashQuery}
 */
export async function getLatestQueryHash(query: string) {
  const text = await getLatestQuery(query)
  if (!text) return null
  return hashQuery(text)
}
