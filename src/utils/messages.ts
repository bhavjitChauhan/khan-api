import { FeedbackType } from '../types/enums'
import {
  BasicFeedbackSchema,
  QuestionFeedbackSchema,
  AnswerFeedbackSchema,
} from '../types/schema'

export function isTipsAndThanksSchema(
  schema: BasicFeedbackSchema | QuestionFeedbackSchema | AnswerFeedbackSchema
): schema is BasicFeedbackSchema {
  return schema.feedbackType === FeedbackType.COMMENT
}

export function isReplySchema(
  schema: BasicFeedbackSchema | QuestionFeedbackSchema | AnswerFeedbackSchema
): schema is BasicFeedbackSchema {
  return schema.feedbackType === FeedbackType.REPLY
}

export function isQuestionSchema(
  schema: BasicFeedbackSchema | QuestionFeedbackSchema | AnswerFeedbackSchema
): schema is QuestionFeedbackSchema {
  return schema.feedbackType === FeedbackType.QUESTION
}

export function isAnswerSchema(
  schema: BasicFeedbackSchema | QuestionFeedbackSchema | AnswerFeedbackSchema
): schema is AnswerFeedbackSchema {
  return schema.feedbackType === FeedbackType.ANSWER
}
