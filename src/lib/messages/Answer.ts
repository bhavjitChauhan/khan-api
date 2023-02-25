import {
  AnswerFeedbackSchema,
  BasicFeedbackSchema,
  QuestionFeedbackSchema,
} from '../../types/schema'
import { FeedbackKey, EncryptedFeedbackKey } from '../../types/strings'
import { isEncryptedFeedbackKey, isFeedbackKey } from '../../utils/regexes'
import { RecursivePartial } from '../../utils/types'
import Message, { IMessage } from './Message'
import Question from './Question'

export interface IAnswer extends IMessage {
  question?: Question
}

export default class Answer extends Message implements IAnswer {
  readonly question?: Question

  static fromSchema(schema: RecursivePartial<AnswerFeedbackSchema>) {
    const answer = new Answer()
    answer.copyFromSchema(schema)
    answer.rawData = schema
    return answer
  }

  static fromIdentifier(identifier: FeedbackKey | EncryptedFeedbackKey) {
    const answer = new Answer({
      key: isFeedbackKey(identifier) ? identifier : undefined,
      encryptedKey: isEncryptedFeedbackKey(identifier) ? identifier : undefined,
    })

    return answer
  }

  transformSchema(schema: RecursivePartial<AnswerFeedbackSchema>): IAnswer {
    return {
      ...super.transformSchema(schema as RecursivePartial<BasicFeedbackSchema>),
      question: schema.question
        ? Question.fromSchema(
            // If only TypeScript had built-in support for recursive types...
            schema.question as RecursivePartial<QuestionFeedbackSchema>
          )
        : undefined,
    }
  }

  copy(answer: IAnswer) {
    return super.copy(answer)
  }
}
