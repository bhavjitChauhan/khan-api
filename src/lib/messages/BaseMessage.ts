import Wrapper from '../Wrapper'
import Program from '../../Program'
import { FeedbackSchemaBase } from '../../types/schema'
import User from '../../User'
import { RecursivePartial } from '../../utils/types'
import { FeedbackFocusKind } from '../../types/enums'
import { EncryptedFeedbackKey, FeedbackKey } from '../../types/strings'
import { ProgramIDRegexMatch } from '../../utils/regexes'

export interface IBaseMessage {
  author?: User
  byVideoAuthor?: boolean
  created?: Date
  deleted?: boolean
  encryptedKey?: string
  locked?: boolean
  key?: string
  pinned?: boolean
  program?: Program
  score?: number
  selfFlagged?: boolean
  text?: string
  verified?: boolean
}

export default abstract class BaseMessage
  extends Wrapper<FeedbackSchemaBase, IBaseMessage>
  implements IBaseMessage
{
  /**
   * @raw {@link FeedbackSchemaBase.content}
   */
  readonly text?: string
  readonly author?: User
  readonly program?: Program
  /**
   * @raw {@link FeedbackSchemaBase.date}
   */
  readonly created?: Date

  /**
   * @raw {@link FeedbackSchemaBase.expandKey}
   */
  readonly key?: FeedbackKey
  /**
   * @raw {@link FeedbackSchemaBase.key}
   */
  readonly encryptedKey?: EncryptedFeedbackKey

  /**
   * @raw {@link FeedbackSchemaBase.appearsAsDeleted}
   */
  readonly deleted?: boolean
  /**
   * @raw {@link FeedbackSchemaBase.isLocked}
   */
  readonly locked?: boolean
  /**
   * @raw {@link FeedbackSchemaBase.isPinned}
   */
  readonly pinned?: boolean
  /**
   * @raw {@link FeedbackSchemaBase.definitelyNotSpam}
   */
  readonly verified?: boolean
  /**
   * @raw {@link FeedbackSchemaBase.lowQualityScore}
   */
  readonly score?: number

  /**
   * @raw {@link FeedbackSchemaBase.fromVideoAuthor}
   */
  readonly byVideoAuthor?: boolean

  /**
   * @raw {@link FeedbackSchemaBase.flaggedByUser}
   */
  readonly selfFlagged?: boolean

  /**
   * Checks if the message was written by the client user
   */
  get bySelf() {
    return this.client?.user ? this.byUser(this.client.user) : false
  }

  get url() {
    if (!this.program?.url || !this.encryptedKey) return null
    const parameters = {
      qa_expand_key: this.key ?? this.encryptedKey,
      qa_expand_type: this.rawData?.feedbackType?.toLowerCase(),
    }
    const url = new URL(this.program.url)
    for (const [key, value] of Object.entries(parameters)) {
      if (value) url.searchParams.set(key, value)
    }
    return url.toString()
  }

  transformSchema(schema: RecursivePartial<FeedbackSchemaBase>): IBaseMessage {
    return {
      text: schema.content,
      author: schema.author && User.fromSchema(schema.author),
      program: (() => {
        if (schema.focus?.kind === FeedbackFocusKind.Scratchpad)
          return new Program({
            id:
              typeof schema.focus.id === 'string'
                ? parseInt(schema.focus.id, 10)
                : undefined,
            title: schema.focus.translatedTitle,
          })
        if (schema.focusUrl) {
          const matches = schema.focusUrl.match(ProgramIDRegexMatch)
          if (!matches || matches.length < 1) return
          return new Program({
            id: parseInt(matches[1], 10),
          })
        }
      })(),
      created: schema.date ? new Date(schema.date) : undefined,
      key: schema.expandKey,
      encryptedKey: schema.key,
      deleted: schema.appearsAsDeleted,
      locked: schema.isLocked,
      pinned: schema.isPinned,
      verified: schema.definitelyNotSpam,
      score: schema.lowQualityScore,
      byVideoAuthor: schema.fromVideoAuthor,
      selfFlagged: schema.flaggedByUser,
    }
  }

  /**
   * Checks if the message was written by the given user
   */
  byUser(user: User) {
    return this.author ? this.author.is(user) : false
  }

  /**
   * Checks if the message is the same as the given message
   */
  is(message: BaseMessage | IBaseMessage): boolean {
    if (
      !(this.key && message.key) &&
      !(this.encryptedKey && message.encryptedKey)
    ) {
      console.warn("Messages don't have any identifiers that can be compared")
      return false
    }
    return (
      (this.key && message.key && this.key === message.key) ||
      (this.encryptedKey &&
        message.encryptedKey &&
        this.encryptedKey === message.encryptedKey) ||
      false
    )
  }
}
