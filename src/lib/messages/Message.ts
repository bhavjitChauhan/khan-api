import Client from '../../Client'
import {
  AnswerFeedbackSchema,
  BasicFeedbackSchema,
  QuestionFeedbackSchema,
} from '../../types/schema'
import { RecursivePartial } from '../../utils/types'
import BaseMessage, { IBaseMessage } from './BaseMessage'
import Reply from './Reply'

export interface IMessage extends IBaseMessage {
  replies?: Reply[]
  replyCount?: number
  selfDownvoted?: boolean
  selfUpvoted?: boolean
  votes?: number
}

export default class Message extends BaseMessage implements IMessage {
  /**
   * @rawEquivalent {@link types/schema!FeedbackSchemaBase.sumVotesIncremented}
   */
  readonly votes?: number
  readonly replyCount?: number
  /**
   * @rawEquivalent {@link types/schema!FeedbackSchemaBase.upVoted}
   */
  readonly selfUpvoted?: boolean
  /**
   * @rawEquivalent {@link types/schema!FeedbackSchemaBase.downVoted}
   */
  readonly selfDownvoted?: boolean

  get selfVoted(): number {
    return this.selfUpvoted ? 1 : this.selfDownvoted ? -1 : 0
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

  async get(client = this.client ?? new Client()) {
    if (!this.key && !this.encryptedKey)
      throw new Error('Message does not have a key or encrypted key')

    const comment = await client.getMessage(this.key ?? this.encryptedKey!)

    return this.copy(comment)
  }
}
