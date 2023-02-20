import { BasicFeedbackSchema } from '../../types/schema'
import { EncryptedFeedbackKey, FeedbackKey } from '../../types/strings'
import { isEncryptedFeedbackKey } from '../../utils/regexes'
import { resolveFeedbackKey } from '../../utils/resolvers'
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

  static async fromIdentifier(identifier: FeedbackKey | EncryptedFeedbackKey) {
    const key = await resolveFeedbackKey(identifier)

    const message = new TipsAndThanks({
      key,
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
