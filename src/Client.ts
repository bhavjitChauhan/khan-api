import loginWithPasswordMutation, {
  LoginWithPasswordMutation,
} from './mutations/loginWithPasswordMutation'
import Program from './Program'
import avatarDataForProfile from './queries/avatarDataForProfile'
import getFullUserProfile from './queries/getFullUserProfile'
import programQuery from './queries/programQuery'
import { assertDataResponse } from './types/responses'
import {
  Kaid,
  EncryptedFeedbackKey,
  FeedbackKey,
  ProgramKey,
  ProgramID,
  ProgramURL,
  Email,
} from './types/strings'
import User from './User'
import {
  extractAvatarSlug,
  generateAvatarPNG,
  generateAvatarSVG,
} from './utils/avatars'
import { stripCookies } from './utils/cookies'
import { truncate } from './utils/format'
import {
  isEncryptedFeedbackKey,
  isKaid,
  isFeedbackKey,
  isEmail,
} from './utils/regexes'
import { PLACEHOLDER_PROGRAM_ID } from './lib/constants'
import feedbackQuery from './queries/feedbackQuery'
import { FeedbackFocusKind, FeedbackSort, FeedbackType } from './types/enums'
import Answer from './lib/messages/Answer'
import Question from './lib/messages/Question'
import Reply from './lib/messages/Reply'
import {
  isTipsAndThanksSchema,
  isQuestionSchema,
  TypeToClass,
} from './utils/messages'
import TipsAndThanks from './lib/messages/TipsAndThanks'
import getFeedbackReplies from './queries/getFeedbackReplies'
import { TypedResponse } from './utils/fetch'
import {
  resolveFeedbackKey,
  resolveKaid,
  resolveProgramID,
  resolveUsername,
} from './utils/resolvers'
import { BasicFeedbackSchema, QuestionFeedbackSchema } from './types/schema'
import Message from './lib/messages/Message'
import { RecursivePartial } from './utils/types'

export default class Client {
  #identifier?: string
  #password?: string
  #cookies?: string

  #cachedKaids = new Map<string | Email, Kaid>()
  #cachedUsernames = new Map<Kaid | string, string>()
  #cachedFeedbackKeys = new Map<EncryptedFeedbackKey, FeedbackKey>()

  authenticated = false
  kaid: Kaid | null = null
  user?: User

  static async #resolveJsonReponse<T>(response: TypedResponse<T>) {
    try {
      return await response.json()
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : typeof err === 'string'
          ? err
          : 'Unknown error'
      throw new Error(`Failed to parse response JSON: ${message}`)
    }
  }

  /**
   * Creates a new Client instance
   *
   * @example
   * const client = new Client()
   */
  constructor() {
    return this
  }

  /**
   * Resolves a username or email to a KAID and caches the result
   *
   * @remarks
   * If the identifier is cached, it will be returned immediately. Otherwise a
   * `getUserByUsernameOrEmail` request will be made to resolve the identifier
   *
   * @see {@link utils/resolvers!resolveKaid}
   *
   * @example
   * const getKaid = async () => await client.resolveCachedKaid('bhavjitChauhan')
   * console.log(await getKaid()) // Makes a request
   * console.log(await getKaid()) // Returns cached result
   */
  async resolveCachedKaid(identifier: Kaid | string | Email): Promise<Kaid> {
    if (isKaid(identifier)) return identifier

    if (this.#cachedKaids.has(identifier))
      return this.#cachedKaids.get(identifier)!

    const kaid = await resolveKaid(identifier)

    this.#cachedKaids.set(identifier, kaid)

    return kaid
  }

  /**
   * Resolves a KAID to a username and caches the result
   *
   * @remarks
   * If the identifier is cached, it will be returned immediately. Otherwise a
   * `getUserHoverCardProfile` request will be made to resolve the identifier
   *
   * @see {@link utils/resolvers!resolveUsername}
   *
   * @example
   * const getUsername = async () => await client.resolveCachedUsername('kaid_376749826184384230772276')
   * console.log(await getUsername()) // Makes a request
   * console.log(await getUsername()) // Returns cached result
   */
  async resolveCachedUsername(identifier: Kaid | string) {
    if (!isKaid(identifier) && !isEmail(identifier)) return identifier

    if (this.#cachedUsernames.has(identifier))
      return this.#cachedUsernames.get(identifier)!

    const username = await resolveUsername(identifier)

    this.#cachedUsernames.set(identifier, username)

    return username
  }

  /**
   * Resolved an encrypted message key to an unencrypted message key and caches
   * the result
   *
   * @remarks
   * If the identifier is cached, it will be returned immediately. Otherwise a
   * `QAExpandKeyInfo` request will be made to resolve the identifier
   *
   * @see {@link utils/resolvers!resolveFeedbackKey}
   */
  async resolveCachedFeedbackKey(
    identifier: FeedbackKey | EncryptedFeedbackKey
  ) {
    if (isFeedbackKey(identifier)) return identifier

    if (this.#cachedFeedbackKeys.has(identifier))
      return this.#cachedFeedbackKeys.get(identifier)!

    const feedbackKey = await resolveFeedbackKey(identifier)

    this.#cachedFeedbackKeys.set(identifier, feedbackKey)

    return feedbackKey
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
   * Logs in to Khan Academy and stores the KAAS cookie
   *
   * @param identifier KAID, username or email
   * @param password
   */
  async login(identifier?: Kaid | string | Email, password?: string) {
    if (identifier) {
      if (isKaid(identifier))
        identifier = await this.resolveCachedUsername(identifier)
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

    const json = await Client.#resolveJsonReponse(response)

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
  async getUser(identifier?: Kaid | string | Email) {
    if (!identifier && !this.authenticated)
      throw new Error(
        'Not authenticated: Login to get client user or provide a kaid/username'
      )

    let email: string | null = null
    if (identifier && isEmail(identifier)) {
      email = identifier
      identifier = await this.resolveCachedKaid(identifier)
    }

    const response = await getFullUserProfile(
      identifier,
      !identifier
        ? { credentials: 'include', headers: { cookie: this.#cookies! } }
        : undefined
    )
    const json = await Client.#resolveJsonReponse(response)

    assertDataResponse(json)
    if (!json.data.user) throw new Error('User not found')

    const user = User.fromSchema(json.data.user)
    user.client = this
    // Why not?
    if (!user.email && email && isEmail(email)) user.copy({ email })
    if (user.self) this.user = user

    if (user.kaid) {
      if (user.username && !this.#cachedKaids.has(user.username))
        this.#cachedKaids.set(user.username, user.kaid)
      if (user.email && !this.#cachedKaids.has(user.email))
        this.#cachedKaids.set(user.email, user.kaid)
    }

    return user
  }

  /**
   * @param identifier Program ID, URL or key
   */
  async getProgram(identifier: ProgramID | ProgramURL | ProgramKey) {
    identifier = resolveProgramID(identifier)

    const response = await programQuery(identifier)
    const json = await Client.#resolveJsonReponse(response)

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

  /**
   * Gets a single message by its feedback key or encrypted feedback key
   *
   * @remarks
   * This method is not recommended when you know the message's type. Use
   * {@link Client!Client.getTipsAndThanks | `getTipsAndThanks`},
   * {@link Client!Client.getQuestion | `getQuestion`} or
   * {@link Client!Client.getReply | `getReply`} instead.
   *
   * @param identifier Feedback key or encrypted feedback key
   */
  async getMessage(
    identifier: FeedbackKey | EncryptedFeedbackKey
  ): Promise<TipsAndThanks | Question | Answer> {
    if (isEncryptedFeedbackKey(identifier))
      identifier = await this.resolveCachedFeedbackKey(identifier)

    const response = await feedbackQuery({
      topicId: PLACEHOLDER_PROGRAM_ID.toString(),
      focusKind: FeedbackFocusKind.Scratchpad,
      feedbackType: FeedbackType.COMMENT,
      currentSort: FeedbackSort.TopVoted,
      qaExpandKey: identifier,
    })
    const json = await Client.#resolveJsonReponse(response)

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
    } else throw new Error('Unknown message type')

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

  /**
   * Gets a single tips and thanks message
   *
   * @param identifier Feedback key or encrypted feedback key
   */
  async getTipsAndThanks(identifier: FeedbackKey | EncryptedFeedbackKey) {
    return this.getMessage(identifier) as Promise<TipsAndThanks>
  }

  /**
   * Gets a single question message
   *
   * @remarks
   * Note that Help Requests are a type of question.
   *
   * @param identifier Feedback key or encrypted feedback key
   */
  async getQuestion(identifier: FeedbackKey | EncryptedFeedbackKey) {
    return this.getMessage(identifier) as Promise<Question>
  }

  /**
   * Gets a single answer message
   *
   * @param identifier Feedback key or encrypted feedback key
   */
  async getAnswer(identifier: FeedbackKey | EncryptedFeedbackKey) {
    return this.getMessage(identifier) as Promise<Answer>
  }

  /**
   * Gets a single reply
   *
   * @param identifier Feedback key or encrypted feedback key
   */
  async getReply(identifier: FeedbackKey | EncryptedFeedbackKey) {
    const message = await this.getMessage(identifier)
    if (!message.key) throw new Error('Message has no key')

    const response = await getFeedbackReplies(message.key)
    const json = await Client.#resolveJsonReponse(response)

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

  /**
   * Gets specified types of messages for a program
   *
   * @param identifier Program ID, program URL, or program key
   *
   * @example
   * const client = new Client()
   * for await (const messages of client.getProgramTipsAndThanks(5154160781082624)) {
   *   console.log(messages.map(message => message.text)
   * }
   */
  async *getProgramMessages(
    // Default to Tips and Thanks as Khan Academy also should
    type = Message.Type.TipsAndThanks,
    identifier: ProgramID | ProgramURL | ProgramKey,
    sort: FeedbackSort = FeedbackSort.TopVoted
    // @TODO Add `limit` parameter when the API supports it because currently
    // it's only there for decoration
  ) {
    identifier = resolveProgramID(identifier)

    const variables = {
      topicId: identifier.toString(),
      focusKind: FeedbackFocusKind.Scratchpad,
      feedbackType: type as unknown as FeedbackType,
      currentSort: sort,
    }

    // Since TypeScript doesn't like it when you try to assign `this` to a
    // local variable, we have to use an arrow function here
    const getProgramMessagesPage = async (cursor?: string) => {
      const response = await feedbackQuery({
        ...variables,
        cursor,
      })
      const json = await Client.#resolveJsonReponse(response)

      assertDataResponse(json)
      if (!json.data.feedback.feedback) throw new Error('Comments not found')
      if (!json.data.feedback.isComplete && !json.data.feedback.cursor)
        throw new Error('Cursor not found')

      // I'm sorry for this; ChatGPT wasn't at a point where it could help
      const feedback = json.data.feedback
        .feedback as unknown as (RecursivePartial<QuestionFeedbackSchema> &
        RecursivePartial<BasicFeedbackSchema>)[]

      const messages = feedback.map((feedback) => {
        const message = TypeToClass[type].fromSchema(feedback)
        message.client = this
        return message
      })
      const nextCursor =
        !json.data.feedback.isComplete && json.data.feedback.cursor

      return {
        messages,
        cursor: nextCursor,
      }
    }

    let { messages, cursor } = await getProgramMessagesPage()
    yield messages

    while (cursor) {
      ;({ messages, cursor } = await getProgramMessagesPage(cursor))
      yield messages
    }
  }

  /**
   * Gets all specified types of messages for a program
   *
   * @see {@link Client!Client.getProgramMessages}
   *
   * @example
   * const client = new Client()
   * const messages = await client.getAllProgramMessages(undefined, 5154160781082624)
   * console.log(messages.map(message => message.text)
   */
  async getAllProgramMessages(
    type = Message.Type.TipsAndThanks,
    identifier: ProgramID | ProgramURL | ProgramKey,
    sort: FeedbackSort = FeedbackSort.TopVoted
  ) {
    const messages: Message[] = []
    for await (const page of this.getProgramMessages(type, identifier, sort)) {
      messages.push(...page)
    }
    return messages
  }

  /**
   * Gets Tips and Thanks messages for a program
   *
   * @see {@link Client!Client.getProgramMessages}
   */
  async *getProgramTipsAndThanks(
    identifier: ProgramID | ProgramURL | ProgramKey,
    sort: FeedbackSort = FeedbackSort.TopVoted
  ) {
    yield* this.getProgramMessages(
      Message.Type.TipsAndThanks,
      identifier,
      sort
    ) as unknown as AsyncGenerator<TipsAndThanks[], void, unknown>
  }

  /**
   * Gets all Tips and Thanks messages for a program
   *
   * @see {@link Client!Client.getAllProgramMessages}
   */
  async getAllProgramTipsAndThanks(
    identifier: ProgramID | ProgramURL | ProgramKey,
    sort: FeedbackSort = FeedbackSort.TopVoted
  ) {
    return this.getAllProgramMessages(
      Message.Type.TipsAndThanks,
      identifier,
      sort
    ) as Promise<TipsAndThanks[]>
  }

  /**
   * Gets questions for a program
   *
   * @see {@link Client!Client.getProgramMessages}
   */
  async *getProgramQuestions(
    identifier: ProgramID | ProgramURL | ProgramKey,
    sort: FeedbackSort = FeedbackSort.TopVoted
  ) {
    yield* this.getProgramMessages(
      Message.Type.Question,
      identifier,
      sort
    ) as unknown as AsyncGenerator<Question[], void, unknown>
  }

  /**
   * Gets all questions for a program
   *
   * @see {@link Client!Client.getAllProgramMessages}
   */
  async getAllProgramQuestions(
    identifier: ProgramID | ProgramURL | ProgramKey,
    sort: FeedbackSort = FeedbackSort.TopVoted
  ) {
    return this.getAllProgramMessages(
      Message.Type.Question,
      identifier,
      sort
    ) as Promise<Question[]>
  }

  /**
   * Gets Help Requests for a program
   *
   * @see {@link Client!Client.getProgramMessages}
   */
  async *getProgramHelpRequests(
    identifier: ProgramID | ProgramURL | ProgramKey,
    sort: FeedbackSort = FeedbackSort.TopVoted
  ) {
    yield* this.getProgramMessages(
      Message.Type.HelpRequest,
      identifier,
      sort
    ) as unknown as AsyncGenerator<Question[], void, unknown>
  }

  /**
   * Gets all Help Requests for a program
   *
   * @see {@link Client!Client.getAllProgramMessages}
   */
  async getAllProgramHelpRequests(
    identifier: ProgramID | ProgramURL | ProgramKey,
    sort: FeedbackSort = FeedbackSort.TopVoted
  ) {
    return this.getAllProgramMessages(
      Message.Type.HelpRequest,
      identifier,
      sort
    ) as Promise<Question[]>
  }

  /**
   * Gets all replies to a message
   *
   * @rawEquivalent {@link queries!getFeedbackReplies}
   */
  async getAllMessageReplies(identifier: FeedbackKey | EncryptedFeedbackKey) {
    identifier = await resolveFeedbackKey(identifier)

    const response = await getFeedbackReplies(identifier)
    const json = await Client.#resolveJsonReponse(response)

    assertDataResponse(json)
    if (!json.data.feedbackReplies) throw new Error('Replies not found')

    const replies = json.data.feedbackReplies.map((replySchema) => {
      const reply = Reply.fromSchema(replySchema)
      reply.client = this
      return reply
    })

    return replies
  }

  async getAvatar(
    identifier: string | undefined = this.kaid ?? this.#identifier,
    type: 'svg' | 'png' = 'svg'
  ) {
    if (!identifier) throw new Error('No identifier provided')

    if (!isKaid(identifier))
      identifier = await this.resolveCachedKaid(identifier)

    // Why do I have to cast this to `Kaid`? It should already be `Kaid`...
    const response = await avatarDataForProfile(identifier as Kaid)
    const json = await Client.#resolveJsonReponse(response)

    assertDataResponse(json)
    if (!json.data.user) throw new Error('User not found')

    const slug = extractAvatarSlug(json.data.user.avatar.imageSrc)
    if (!slug) throw new Error('User has no avatar')

    return type === 'svg' ? generateAvatarSVG(slug) : generateAvatarPNG(slug)
  }
}
