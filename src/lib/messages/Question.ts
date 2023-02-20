import Message, { IMessage } from './Message'
import Answer from './Answer'
import { BasicFeedbackSchema, QuestionFeedbackSchema } from '../../types/schema'
import { RecursivePartial } from '../../utils/types'
import { FeedbackKey, EncryptedFeedbackKey } from '../../types/strings'
import { isEncryptedFeedbackKey } from '../../utils/regexes'
import { resolveFeedbackKey } from '../../utils/resolvers'

export interface IQuestion extends IMessage {
  answers?: Answer[]
  answerCount?: number
  old?: boolean
}

/**
 * @remarks
 * Note that Help Requests are a type of Question.
 *
 * @rawEquivalent {@link types/schema!QuestionFeedbackSchema}
 */
export default class Question extends Message implements IQuestion {
  readonly answerCount?: number
  readonly answers?: Answer[]
  /**
   * @rawEquivalent {@link types/schema!QuestionFeedbackSchema.isOld}
   */
  readonly old?: boolean

  static fromSchema(schema: RecursivePartial<QuestionFeedbackSchema>) {
    const question = new Question()
    question.copyFromSchema(schema)
    question.rawData = schema
    return question
  }

  static async fromIdentifier(identifier: FeedbackKey | EncryptedFeedbackKey) {
    const key = await resolveFeedbackKey(identifier)

    const question = new Question({
      key,
      encryptedKey: isEncryptedFeedbackKey(identifier) ? identifier : undefined,
    })

    return question
  }

  transformSchema(schema: RecursivePartial<QuestionFeedbackSchema>): IQuestion {
    return {
      ...super.transformSchema(schema as RecursivePartial<BasicFeedbackSchema>),
      answerCount: schema.answerCount,
      old: schema.isOld,
      answers: (() => {
        if (!schema.answers) return undefined
        const answers = schema.answers.map((answer) =>
          Answer.fromSchema(answer)
        )
        answers.forEach((answer) => answer.copy({ question: this }))
        return answers
      })(),
    }
  }

  copy(question: IQuestion) {
    return super.copy(question)
  }
}
