import { BasicFeedbackSchema } from '../../types/schema'
import { RecursivePartial } from '../../utils/types'
import Message, { IMessage } from './Message'

export type ITipsAndThanks = IMessage

export default class TipsAndThanks extends Message {
  static fromSchema(schema: RecursivePartial<BasicFeedbackSchema>) {
    const comment = new TipsAndThanks()
    comment.copyFromSchema(schema)
    comment.rawData = schema
    return comment
  }

  transformSchema(
    schema: RecursivePartial<BasicFeedbackSchema>
  ): ITipsAndThanks {
    return {
      ...super.transformSchema(schema),
      votes: schema.sumVotesIncremented,
      replyCount: schema.replyCount,
      selfUpvoted: schema.upVoted,
      selfDownvoted: schema.downVoted,
    }
  }

  copy(tipsAndThanks: ITipsAndThanks) {
    return super.copy(tipsAndThanks)
  }
}
