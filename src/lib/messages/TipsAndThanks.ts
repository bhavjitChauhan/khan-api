import { BasicFeedbackSchema } from '../../types/schema'
import { EncryptedFeedbackKey, FeedbackKey } from '../../types/strings'
import { isEncryptedFeedbackKey, isFeedbackKey } from '../../utils/regexes'
import { RecursivePartial } from '../../utils/types'
import Message, { IMessage } from './Message'

export type ITipsAndThanks = IMessage

export default class TipsAndThanks extends Message {
  static fromSchema(schema: RecursivePartial<BasicFeedbackSchema>) {
    const message = new TipsAndThanks()
    message.copyFromSchema(schema)
    message.rawData = schema
    return message
  }

  static fromIdentifier(identifier: FeedbackKey | EncryptedFeedbackKey) {
    const message = new TipsAndThanks({
      key: isFeedbackKey(identifier) ? identifier : undefined,
      encryptedKey: isEncryptedFeedbackKey(identifier) ? identifier : undefined,
    })

    return message
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
