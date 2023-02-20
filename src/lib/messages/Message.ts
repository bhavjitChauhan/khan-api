import Client from '../../Client'
import { FeedbackType } from '../../types/enums'
import {
  AnswerFeedbackSchema,
  BasicFeedbackSchema,
  QuestionFeedbackSchema,
} from '../../types/schema'
import { EncryptedFeedbackKey, FeedbackKey } from '../../types/strings'
import { isEncryptedFeedbackKey } from '../../utils/regexes'
import { resolveFeedbackKey } from '../../utils/resolvers'
import { RecursivePartial } from '../../utils/types'
import BaseMessage, { IBaseMessage } from './BaseMessage'
import Reply from './Reply'

/**
 * @rawEquivalent {@link types/enums!FeedbackType}
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
   * @rawEquivalent {@link types/schema!FeedbackSchemaBase.sumVotesIncremented}
   */
  readonly votes?: number
  /**
   * @rawEquivalent {@link types/schema!FeedbackSchemaBase.upVoted}
   */
  readonly selfUpvoted?: boolean
  /**
   * @rawEquivalent {@link types/schema!FeedbackSchemaBase.downVoted}
   */
  readonly selfDownvoted?: boolean
  readonly replyCount?: number
  readonly replies?: Reply[]

  /**
   * @returns `1` if the message was upvoted by the user, `-1` if it was downvoted,
   * and `0` if it was not voted on. `null` if the user is not logged in.
   *
   * @see {@link lib/messages/Message!Message.selfUpvoted}
   * @see {@link lib/messages/Message!Message.selfDownvoted}
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

  static async fromIdentifier(identifier: FeedbackKey | EncryptedFeedbackKey) {
    const key = await resolveFeedbackKey(identifier)

    const message = new Message({
      key,
      encryptedKey: isEncryptedFeedbackKey(identifier) ? identifier : undefined,
    })

    return message
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
    if (!this.key && !this.encryptedKey)
      throw new Error('Message does not have a key or encrypted key')

    const comment = await client.getMessage(this.key ?? this.encryptedKey!)

    return this.copy(comment)
  }

  async getAllReplies(client = this.client ?? new Client()) {
    if (!this.key && !this.encryptedKey)
      throw new Error('Message does not have a key or encrypted key')

    const replies = await client.getAllMessageReplies(
      this.key ?? this.encryptedKey!
    )

    return this.copy({ replies })
  }
}
