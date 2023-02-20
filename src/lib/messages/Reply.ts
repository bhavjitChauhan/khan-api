import Client from '../../Client'
import { BasicFeedbackSchema } from '../../types/schema'
import { isEncryptedFeedbackKey, isFeedbackKey } from '../../utils/regexes'
import { RecursivePartial } from '../../utils/types'
import Message from './Message'
import BaseMessage, { IBaseMessage } from './BaseMessage'
import { FeedbackKey, EncryptedFeedbackKey } from '../../types/strings'
import { resolveFeedbackKey } from '../../utils/resolvers'

export interface IReply extends IBaseMessage {
  message?: Message
}

export default class Reply extends BaseMessage implements IReply {
  readonly message?: Message

  static fromSchema(schema: RecursivePartial<BasicFeedbackSchema>) {
    const reply = new Reply()
    reply.copyFromSchema(schema)
    reply.rawData = schema
    return reply
  }

  static async fromIdentifier(identifier: FeedbackKey | EncryptedFeedbackKey) {
    const key = await resolveFeedbackKey(identifier)

    const reply = new Reply({
      key,
      encryptedKey: isEncryptedFeedbackKey(identifier) ? identifier : undefined,
    })

    return reply
  }

  transformSchema(schema: RecursivePartial<BasicFeedbackSchema>): IReply {
    return {
      ...super.transformSchema(schema),
      message: (() => {
        if (typeof schema.replyExpandKeys === 'undefined') return
        if (
          typeof schema.replyExpandKeys === 'string' &&
          isFeedbackKey(schema.replyExpandKeys)
        )
          return new Message({ key: schema.replyExpandKeys })
        if (Array.isArray(schema.replyExpandKeys))
          return new Message({ key: schema.replyExpandKeys[0] })
      })(),
    }
  }

  copy(reply: IReply) {
    return super.copy(reply)
  }

  /**
   * Updates data from a schema into the instance
   *
   * @param schema The schema to copy from
   * @returns The class instance
   */
  copyFromSchema(schema: RecursivePartial<BasicFeedbackSchema>) {
    return super.copyFromSchema(schema)
  }

  async get(client = this.client ?? new Client()) {
    if (!this.key && !this.encryptedKey)
      throw new Error('Message does not have a key or encrypted key')

    const comment = await client.getMessage(this.key ?? this.encryptedKey!)

    return this.copy(comment)
  }
}
