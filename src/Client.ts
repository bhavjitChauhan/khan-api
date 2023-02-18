import loginWithPasswordMutation, {
  LoginWithPasswordMutation,
} from './mutations/loginWithPasswordMutation'
import Program from './Program'
import avatarDataForProfile from './queries/avatarDataForProfile'
import getFullUserProfile from './queries/getFullUserProfile'
import getUserByUsernameOrEmail from './queries/getUserByUsernameOrEmail'
import getUserHoverCardProfile from './queries/getUserHoverCardProfile'
import programQuery from './queries/programQuery'
import { assertDataResponse } from './types/responses'
import {
  Kaid,
  EncryptedFeedbackKey,
  FeedbackKey,
  ProgramKey,
  ProgramID,
  ProgramURL,
  ProgramIDNumber,
} from './types/strings'
import User from './User'
import {
  extractAvatarSlug,
  generateAvatarPNG,
  generateAvatarSVG,
} from './utils/avatars'
import { stripCookies } from './utils/cookies'
import { programKeyToID } from './utils/programs'
import { truncate } from './utils/format'
import {
  EmailRegex,
  isEncryptedFeedbackKey,
  isKaid,
  isFeedbackKey,
  isProgramKey,
  ProgramIDRegex,
  ProgramURLRegex,
  isProgramURL,
  isProgramID,
} from './utils/regexes'
import { PLACEHOLDER_PROGRAM_ID } from './lib/constants'
import feedbackQuery from './queries/feedbackQuery'
import QAExpandKeyInfo from './queries/QAExpandKeyInfo'
import { FeedbackFocusKind, FeedbackSort, FeedbackType } from './types/enums'
import Answer from './lib/messages/Answer'
import Question from './lib/messages/Question'
import Reply from './lib/messages/Reply'
import {
  isTipsAndThanksSchema,
  isQuestionSchema,
  isReplySchema,
} from './utils/messages'
import TipsAndThanks from './lib/messages/TipsAndThanks'
import getFeedbackReplies from './queries/getFeedbackReplies'

export default class Client {
  #identifier?: string
  #password?: string
  #cookies?: string

  #identifierMap = new Map<string, Kaid>()

  authenticated = false
  kaid: Kaid | null = null
  user?: User

  constructor() {
    return this
  }

  /**
   * Resolves a username or email to a KAID and caches the result
   *
   * @remarks
   * If the identifier is cached, it will be returned immediately. Otherwise a
   * `getUserByUsernameOrEmail` request will be made to resolve the identifier.
   *
   * @param identifier Username or email
   * @returns KAID
   */
  async resolveKaid(identifier: string): Promise<Kaid> {
    if (isKaid(identifier)) return identifier

    if (this.#identifierMap.has(identifier))
      return this.#identifierMap.get(identifier)!

    const isEmail = EmailRegex.test(identifier)
    const response = await getUserByUsernameOrEmail({
      [isEmail ? 'email' : 'username']: identifier,
    })
    const json = await response.json()

    assertDataResponse(json)
    if (!json.data.user) throw new Error('User not found')

    const kaid = json.data.user.kaid
    if (kaid === '') throw new Error('User does not have a valid KAID')

    if (!this.#identifierMap.has(identifier))
      this.#identifierMap.set(identifier, kaid)

    return kaid
  }

  /**
   * Resolves a KAID to a username
   */
  async resolveUsername(kaid: Kaid) {
    if (!isKaid(kaid)) throw new Error('Invalid KAID')

    const response = await getUserHoverCardProfile({
      kaid,
    })
    const json = await response.json()

    assertDataResponse(json)
    if (!json.data.user) throw new Error('User not found')

    return json.data.user.username
  }

  /**
   * Resolves a program URL or key to a program ID
   *
   * @param identifier Program URL or key
   */
  resolveProgramID(
    identifier: ProgramURL | ProgramKey | ProgramID
  ): ProgramIDNumber {
    if (typeof identifier === 'number') {
      if (!ProgramIDRegex.test(identifier.toString()))
        throw new Error('Invalid program ID')
      return identifier
    } else if (isProgramURL(identifier)) {
      const str = identifier.match(ProgramURLRegex)![1]
      if (!isProgramID(str)) throw new Error('Invalid URL')
      return parseInt(str, 10)
    } else if (isProgramKey(identifier)) {
      identifier = programKeyToID(identifier)
      if (!isProgramID(identifier)) throw new Error('Invalid program key')
      return identifier
    }
    if (!isProgramID(identifier))
      throw new Error('Invalid program ID, URL or key')
    return parseInt(identifier, 10)
  }

  /**
   * Resolved an encrypted message key to an unencrypted message key
   *
   * @param identifier Encrypted message key
   */
  async resolveFeedbackKey(identifier: FeedbackKey | EncryptedFeedbackKey) {
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

  /**
   * Gets the KAAS cookie from the current session
   *
   * @remarks
   * The KAAS cookie is used by Khan Academy to authenticate requests.
   *
   * @returns KAAS cookie or null if not authenticated
   */
  get kaas() {
    if (!this.authenticated || !this.#cookies) return null

    return this.#cookies.match(/KAAS=([^;]+)/)?.[1] ?? null
  }

  /**
   * @param identifier Username or email
   * @param password
   */
  // @TODO: Add support for KAID login
  async login(identifier?: string, password?: string) {
    if (identifier) {
      if (isKaid(identifier))
        identifier = await this.resolveUsername(identifier)
      this.#identifier = identifier
    }
    if (password) this.#password = password

    if (!this.#identifier || !this.#password) {
      if (!this.#identifier) throw new Error('Missing username or email')
      if (!this.#password) throw new Error('Missing password')
      throw new Error('Missing username/email and password')
    }

    const response = await loginWithPasswordMutation(
      {
        identifier: this.#identifier,
        password: this.#password,
      },
      { credentials: 'include' }
    )

    // @TODO: Handle invalid JSON response
    const json = await response.json()

    assertDataResponse(json)
    if (!json.data.loginWithPassword) throw new Error('Malformed response')

    if (json.data.loginWithPassword.error)
      switch (json.data.loginWithPassword.error.code) {
        case LoginWithPasswordMutation.ErrorCode.INVALID_CREDENTIALS:
          throw new Error(
            'Invalid Credentials error: Check your username/email and password'
          )
        case LoginWithPasswordMutation.ErrorCode.TOO_MANY_ATTEMPTS:
          throw new Error(
            'Too Many Attempts error: Rate-limited by Khan Academy'
          )
        default: {
          throw new Error(
            'Unknown error code: ' +
              (json.data.loginWithPassword.error.code as unknown as string)
          )
        }
      }

    const cookies = response.headers.get('set-cookie')
    if (!cookies)
      throw new Error(
        "No cookies returned: Something went wrong on Khan Academy's end"
      )
    this.#cookies = stripCookies(cookies)

    // Can this be a getter for `this.#cookies` instead?
    this.authenticated = true

    this.kaid =
      typeof json.data.loginWithPassword.user?.kaid === 'string' &&
      isKaid(json.data.loginWithPassword.user.kaid)
        ? json.data.loginWithPassword.user.kaid
        : null
    if (this.kaid === null)
      console.warn(
        `User ${
          identifier ?? this.kaas ?? 'unknown'
        } does not have a valid KAID`
      )

    return json.data.loginWithPassword
  }

  /**
   * @param identifier KAID, username or email
   */
  async getUser(identifier?: string) {
    if (!identifier && !this.authenticated)
      throw new Error(
        'Not authenticated: Login to get client user or provide a kaid/username'
      )

    let email: string | null = null
    if (identifier && EmailRegex.test(identifier)) {
      email = identifier
      identifier = await this.resolveKaid(identifier)
    }

    const response = await getFullUserProfile(
      identifier
        ? { [isKaid(identifier) ? 'kaid' : 'username']: identifier }
        : undefined,
      !identifier
        ? { credentials: 'include', headers: { cookie: this.#cookies! } }
        : undefined
    )
    const json = await response.json()

    assertDataResponse(json)
    if (!json.data.user) throw new Error('User not found')

    const user = User.fromSchema(json.data.user)
    user.client = this
    // Why not?
    if (!user.email && email && EmailRegex.test(email)) user.copy({ email })
    if (user.self) this.user = user

    if (user.kaid) {
      if (user.username && !this.#identifierMap.has(user.username))
        this.#identifierMap.set(user.username, user.kaid)
      if (user.email && !this.#identifierMap.has(user.email))
        this.#identifierMap.set(user.email, user.kaid)
    }

    return user
  }

  /**
   * @param id Program ID, URL or key
   */
  async getProgram(id: ProgramID | ProgramURL | ProgramKey) {
    id = this.resolveProgramID(id)

    const response = await programQuery({
      programId: id.toString(),
    })
    const json = await response.json()

    assertDataResponse(json)
    if (!json.data.programById) throw new Error('Program not found')

    const program = Program.fromSchema(json.data.programById)
    program.client = this

    if (this.user && program.author?.kaid === this.kaid) {
      program.copy({
        author: this.user,
      })
      // @TODO: Add option to disable this
      console.debug(
        `Copied the client's user data to program ${
          program.title
            ? `"${truncate(program.title, 32)}"`
            : program.id ?? 'unknown'
        } because the program's author matches the client user`
      )
    }

    return program
  }

  async getMessage(
    identifier: FeedbackKey | EncryptedFeedbackKey
  ): Promise<TipsAndThanks | Question | Answer | Reply> {
    if (isEncryptedFeedbackKey(identifier))
      identifier = await this.resolveFeedbackKey(identifier)

    const response = await feedbackQuery({
      topicId: PLACEHOLDER_PROGRAM_ID.toString(),
      focusKind: FeedbackFocusKind.Scratchpad,
      feedbackType: FeedbackType.COMMENT,
      currentSort: FeedbackSort.TopVoted,
      qaExpandKey: identifier,
    })
    const json = await response.json()

    assertDataResponse(json)
    if (
      !json.data.feedback ||
      !json.data.feedback.feedback ||
      json.data.feedback.feedback.length === 0
    )
      throw new Error('Message not found')

    const messageSchema = json.data.feedback.feedback[0]
    let message

    if (isTipsAndThanksSchema(messageSchema))
      message = TipsAndThanks.fromSchema(messageSchema)
    else if (isQuestionSchema(messageSchema)) {
      const question = Question.fromSchema(messageSchema)
      if (question.key !== identifier) {
        const answer = question.answers?.find(
          (answer) => answer.key === identifier
        )
        if (!answer) throw new Error('Question or answer not found')
        message = answer
        message.copy({ question })
      } else message = question
    } else if (isReplySchema(messageSchema))
      message = Reply.fromSchema(messageSchema)
    else throw new Error('Unknown message type')

    message.client = this

    if (this.user && message.author?.kaid === this.kaid) {
      message.copy({
        author: this.user,
      })
      console.debug(
        `Copied the client's user data to comment ${
          message.key ?? message.encryptedKey ?? 'unknown'
        } because the comment's author matches the client user`
      )
    }

    return message
  }

  async getTipsAndThanks(identifier: FeedbackKey | EncryptedFeedbackKey) {
    return this.getMessage(identifier) as Promise<TipsAndThanks>
  }

  async getQuestion(identifier: FeedbackKey | EncryptedFeedbackKey) {
    return this.getMessage(identifier) as Promise<Question>
  }

  async getAnswer(identifier: FeedbackKey | EncryptedFeedbackKey) {
    return this.getMessage(identifier) as Promise<Answer>
  }

  async getReply(identifier: FeedbackKey | EncryptedFeedbackKey) {
    const message = (await this.getMessage(identifier)) as
      | TipsAndThanks
      | Question
      | Answer
    if (!message.key) throw new Error('Message has no key')

    const response = await getFeedbackReplies({
      postKey: message.key,
    })
    const json = await response.json()

    assertDataResponse(json)
    if (!json.data.feedbackReplies || json.data.feedbackReplies.length === 0)
      throw new Error('Reply not found')

    const replySchema = json.data.feedbackReplies.find(
      (reply) => reply.expandKey === identifier || reply.key === identifier
    )
    if (!replySchema) throw new Error('Reply not found')

    const reply = Reply.fromSchema(replySchema)
    reply.client = this
    reply.copy({
      message,
    })

    if (this.user && reply.author?.kaid === this.kaid) {
      reply.copy({
        author: this.user,
      })
      console.debug(
        `Copied the client's user data to reply ${
          reply.key ?? reply.encryptedKey ?? 'unknown'
        } because the reply's author matches the client user`
      )
    }

    return reply
  }

  async getAvatar(
    identifier: string | undefined = this.kaid ?? this.#identifier,
    type: 'svg' | 'png' = 'svg'
  ) {
    if (!identifier) throw new Error('No identifier provided')

    if (!isKaid(identifier)) identifier = await this.resolveKaid(identifier)

    const response = await avatarDataForProfile({
      // Why do I have to cast this to `Kaid`? It should already be `Kaid`...
      kaid: identifier as Kaid,
    })
    const json = await response.json()

    assertDataResponse(json)
    if (!json.data.user) throw new Error('User not found')

    const slug = extractAvatarSlug(json.data.user.avatar.imageSrc)
    if (!slug) throw new Error('User has no avatar')

    return type === 'svg' ? generateAvatarSVG(slug) : generateAvatarPNG(slug)
  }
}
