import getUserByUsernameOrEmail from '../queries/getUserByUsernameOrEmail'
import getUserHoverCardProfile from '../queries/getUserHoverCardProfile'
import QAExpandKeyInfo from '../queries/QAExpandKeyInfo'
import { assertDataResponse } from '../types/responses'
import {
  Email,
  EncryptedFeedbackKey,
  FeedbackKey,
  Kaid,
  ProgramID,
  ProgramIDNumber,
  ProgramKey,
  ProgramURL,
  UserURL,
} from '../types/strings'
import { programKeyToID } from './programs'
import {
  isKaid,
  isProgramID,
  isProgramKey,
  isProgramURL,
  ProgramURLRegex,
  isEncryptedFeedbackKey,
  isFeedbackKey,
  isEmail,
  isUserURL,
  UserURLRegex,
} from './regexes'

/**
 * Resolve a KAID from a username or email address
 *
 * @param identifier A KAID, username, or email address
 *
 * @example
 * const kaid = await resolveKaid('bhavjitChauhan')
 * console.log(kaid) // kaid_376749826184384230772276
 */
export async function resolveKaid(
  identifier: Kaid | string | Email | UserURL
): Promise<Kaid> {
  if (isKaid(identifier)) return identifier
  if (isKaid(`kaid_${identifier}`)) return `kaid_${identifier}` as Kaid

  if (isUserURL(identifier)) {
    const match = identifier.match(UserURLRegex)
    if (!match) throw new Error('Invalid user URL')
    identifier = match[1]
    if (isKaid(identifier)) return identifier
  }

  const response = await getUserByUsernameOrEmail(identifier)
  const json = await response.json()

  assertDataResponse(json)
  if (!json.data.user) throw new Error('User not found')

  const kaid = json.data.user.kaid
  if (!isKaid(kaid)) throw new Error('Invalid KAID')

  return kaid
}

/**
 * Resolve a username from a KAID or email address
 *
 * @param identifier KAID, username, or email address
 *
 * @example
 * const username = await resolveUsername('kaid_376749826184384230772276')
 * console.log(username) // bhavjitChauhan
 */
export async function resolveUsername(
  identifier: Kaid | string | Email | UserURL
) {
  if (!isKaid(identifier) && !isEmail(identifier) && !isUserURL(identifier))
    return identifier

  if (isUserURL(identifier)) {
    const match = identifier.match(UserURLRegex)
    if (!match) throw new Error('Invalid user URL')
    identifier = match[1]
    if (!isKaid(identifier) && !isEmail(identifier)) return identifier
  }

  if (!isKaid(identifier)) identifier = await resolveKaid(identifier)

  const response = await getUserHoverCardProfile(identifier as Kaid)
  const json = await response.json()

  assertDataResponse(json)
  if (!json.data.user) throw new Error('User not found')

  return json.data.user.username
}

/**
 * Resolve a program ID from a program URL or key
 *
 * @param identifier Program ID, URL, or key
 *
 * @returns Program ID as a number
 */
export function resolveProgramID(
  identifier: ProgramID | ProgramURL | ProgramKey
): ProgramIDNumber {
  if (typeof identifier === 'number') {
    if (!isProgramID(identifier)) throw new Error('Invalid program ID')
    return identifier
  } else if (isProgramURL(identifier)) {
    const str = identifier.match(ProgramURLRegex)![1]
    if (!isProgramID(str)) throw new Error('Invalid program URL')
    return parseInt(str, 10)
  } else if (isProgramKey(identifier)) {
    identifier = programKeyToID(identifier)
    if (!isProgramID(identifier)) throw new Error('Invalid program key')
    return identifier
  } else if (typeof identifier === 'string') {
    if (!isProgramID(identifier)) throw new Error('Invalid program ID')
    return parseInt(identifier, 10)
  }
  throw new Error('Invalid program identifier')
}

/**
 * Resolves a feedback key from an encrypted feedback key
 *
 * @param identifier Feedback key or encrypted feedback key
 */
export async function resolveFeedbackKey(
  identifier: FeedbackKey | EncryptedFeedbackKey
): Promise<FeedbackKey> {
  if (isFeedbackKey(identifier)) return identifier
  if (!isEncryptedFeedbackKey(identifier))
    throw new Error('Invalid encrypted message key')

  const response = await QAExpandKeyInfo(identifier)
  const json = await response.json()

  assertDataResponse(json)
  if (!json.data.qaExpandKeyInfo) throw new Error('Message key not found')

  return json.data.qaExpandKeyInfo.unencryptedKey
}
