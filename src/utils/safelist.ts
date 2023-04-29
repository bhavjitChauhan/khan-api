import { SAFELIST_URL } from '../lib/constants'
import { http } from './fetch'

/**
 * Gets the latest version of a query from the Khan Academy safelist.
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
 * Gets the latest version of a mutation from the Khan Academy safelist.
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
 * Gets the latest version of a fragment from the Khan Academy safelist.
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
