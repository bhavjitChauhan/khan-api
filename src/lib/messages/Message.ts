import Client from '../../Client'
import { FeedbackType } from '../../types/enums'
import {
  AnswerFeedbackSchema,
  BasicFeedbackSchema,
  QuestionFeedbackSchema,
} from '../../types/schema'
import { EncryptedFeedbackKey, FeedbackKey } from '../../types/strings'
import { isEncryptedFeedbackKey, isFeedbackKey } from '../../utils/regexes'
import { RecursivePartial } from '../../utils/types'
import BaseMessage, { IBaseMessage } from './BaseMessage'
import Reply from './Reply'

/**
 * @raw {@link FeedbackType}
 */
export enum MessageType {
  TipsAndThanks = FeedbackType.COMMENT,
  Question = FeedbackType.QUESTION,
  HelpRequest = FeedbackType.PROJECT_HELP_QUESTION,
}

export interface IMessage extends IBaseMessage {
  replies?: Reply[]
  replyCount?: number
  selfDownvoted?: boolean
  selfUpvoted?: boolean
  votes?: number
}

export default class Message extends BaseMessage implements IMessage {
  /**
   * Aliases for the message types.
   */
  static readonly Type = MessageType

  /**
   * @raw {@link FeedbackSchemaBase.sumVotesIncremented}
   */
  readonly votes?: number
  /**
   * @raw {@link FeedbackSchemaBase.upVoted}
   */
  readonly selfUpvoted?: boolean
  /**
   * @raw {@link FeedbackSchemaBase.downVoted}
   */
  readonly selfDownvoted?: boolean
  readonly replyCount?: number
  readonly replies?: Reply[]

  /**
   * @returns `1` if the message was upvoted by the user, `-1` if it was downvoted,
   * and `0` if it was not voted on. `null` if the user is not logged in.
   *
   * @see {@link Message.selfUpvoted}
   * @see {@link Message.selfDownvoted}
   */
  get selfVoted() {
    if (this.client?.authenticated === false) return null
    return this.selfUpvoted ? 1 : this.selfDownvoted ? -1 : 0
  }

  static fromSchema(
    schema: RecursivePartial<
      BasicFeedbackSchema | QuestionFeedbackSchema | AnswerFeedbackSchema
    >
  ) {
    const message = new Message()
    message.copyFromSchema(schema)
    message.rawData = schema
    return message
  }

  static fromIdentifier(identifier: FeedbackKey | EncryptedFeedbackKey) {
    const message = new Message({
      key: isFeedbackKey(identifier) ? identifier : undefined,
      encryptedKey: isEncryptedFeedbackKey(identifier) ? identifier : undefined,
    })

    return message
  }

  #resolveIdentifier(): FeedbackKey | EncryptedFeedbackKey {
    if (this.key) return this.key
    if (this.encryptedKey) return this.encryptedKey

    throw new Error('Message does not have a key or encrypted key')
  }

  transformSchema(
    schema: RecursivePartial<
      BasicFeedbackSchema | QuestionFeedbackSchema | AnswerFeedbackSchema
    >
  ): IMessage {
    return {
      ...super.transformSchema(schema),
      votes: schema.sumVotesIncremented,
      replyCount: schema.replyCount,
      selfUpvoted: schema.upVoted,
      selfDownvoted: schema.downVoted,
    }
  }

  copy(message: IMessage) {
    return super.copy(message)
  }

  async get(client = this.client ?? new Client()) {
    const comment = await client.getMessage(this.#resolveIdentifier())

    return this.copy(comment)
  }

  /**
   * @see {@link Client.getMessageReplies}
   */
  async *getReplies(client = this.client ?? new Client(), limit?: number) {
    for await (const replies of client.getMessageReplies(
      this.#resolveIdentifier(),
      limit
    )) {
      if (!this.replies) this.copy({ replies: [] })
      this.replies?.push(...replies)
      yield replies
    }

    return this
  }

  /**
   * @see {@link Client.getAllMessageReplies}
   */
  async getAllReplies(client = this.client ?? new Client()) {
    if (!this.key && !this.encryptedKey)
      throw new Error('Message does not have a key or encrypted key')

    const replies = await client.getAllMessageReplies(
      this.key ?? this.encryptedKey!
    )

    return this.copy({ replies })
  }
}
