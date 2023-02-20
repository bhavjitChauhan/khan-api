import { MessageType } from '../lib/messages/Message'
import Question from '../lib/messages/Question'
import TipsAndThanks from '../lib/messages/TipsAndThanks'
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

export const TypeToClass = {
  [MessageType.TipsAndThanks]: TipsAndThanks,
  [MessageType.Question]: Question,
  [MessageType.HelpRequest]: Question,
} as const
