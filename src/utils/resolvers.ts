import getUserByUsernameOrEmail from '../queries/getUserByUsernameOrEmail'
import getUserHoverCardProfile from '../queries/getUserHoverCardProfile'
import QAExpandKeyInfo from '../queries/QAExpandKeyInfo'
import { assertDataResponse } from '../types/responses'
import {
  EncryptedFeedbackKey,
  FeedbackKey,
  Kaid,
  ProgramID,
  ProgramIDNumber,
  ProgramKey,
  ProgramURL,
} from '../types/strings'
import { programKeyToID } from './programs'
import {
  isKaid,
  EmailRegex,
  isProgramID,
  isProgramKey,
  isProgramURL,
  ProgramURLRegex,
  isEncryptedFeedbackKey,
  isFeedbackKey,
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
export async function resolveKaid(identifier: Kaid | string): Promise<Kaid> {
  if (isKaid(identifier)) return identifier

  const isEmail = EmailRegex.test(identifier)
  const response = await getUserByUsernameOrEmail({
    [isEmail ? 'email' : 'username']: identifier,
  })
  const json = await response.json()

  assertDataResponse(json)
  if (!json.data.user) throw new Error('User not found')

  const kaid = json.data.user.kaid
  if (!isKaid(kaid)) throw new Error('User does not have a valid KAID')

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
export async function resolveUsername(identifier: Kaid | string) {
  if (!isKaid(identifier) && !EmailRegex.test(identifier)) return identifier

  if (!isKaid(identifier)) identifier = await resolveKaid(identifier)

  const response = await getUserHoverCardProfile({
    kaid: identifier as Kaid,
  })
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

  const response = await QAExpandKeyInfo({
    encryptedKey: identifier,
  })
  const json = await response.json()

  assertDataResponse(json)
  if (!json.data.qaExpandKeyInfo) throw new Error('Message key not found')

  return json.data.qaExpandKeyInfo.unencryptedKey
}
