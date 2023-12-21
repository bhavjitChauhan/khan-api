import Message, { IMessage } from './Message'
import Answer from './Answer'
import { BasicFeedbackSchema, QuestionFeedbackSchema } from '../../types/schema'
import { RecursivePartial } from '../../utils/types'
import { FeedbackKey, EncryptedFeedbackKey } from '../../types/strings'
import { isEncryptedFeedbackKey, isFeedbackKey } from '../../utils/regexes'

export interface IQuestion extends IMessage {
  answers?: Answer[]
  answerCount?: number
  old?: boolean
}

/**
 * @remarks
 * Note that Help Requests are a type of Question.
 *
 * @raw {@link QuestionFeedbackSchema}
 */
export default class Question extends Message implements IQuestion {
  readonly answerCount?: number
  readonly answers?: Answer[]
  /**
   * @raw {@link QuestionFeedbackSchema.isOld}
   */
  readonly old?: boolean

  static fromSchema(schema: RecursivePartial<QuestionFeedbackSchema>) {
    const question = new Question()
    question.copyFromSchema(schema)
    question.rawData = schema
    return question
  }

  static fromIdentifier(identifier: FeedbackKey | EncryptedFeedbackKey) {
    const question = new Question({
      key: isFeedbackKey(identifier) ? identifier : undefined,
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
