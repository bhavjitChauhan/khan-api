import Message, { IMessage } from './Message'
import Answer from './Answer'
import { BasicFeedbackSchema, QuestionFeedbackSchema } from '../../types/schema'
import { RecursivePartial } from '../../utils/types'

export interface IQuestion extends IMessage {
  answers?: Answer[]
  answerCount?: number
  old?: boolean
}

export default class Question extends Message implements IQuestion {
  readonly answerCount?: number
  readonly answers?: Answer[]
  /**
   * @rawEquivalent {@link BasicFeedbackSchema.isOld | `isOld`}
   */
  readonly old?: boolean

  static fromSchema(schema: RecursivePartial<QuestionFeedbackSchema>) {
    const question = new Question()
    question.copyFromSchema(schema)
    question.rawData = schema
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
