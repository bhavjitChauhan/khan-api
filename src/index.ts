/** Queries */
import avatarDataForProfile from './queries/avatarDataForProfile'
import feedbackQuery from './queries/feedbackQuery'
import getFeedbackReplies from './queries/getFeedbackReplies'
import getFullUserProfile from './queries/getFullUserProfile'
import getUserByUsernameOrEmail from './queries/getUserByUsernameOrEmail'
import getUserHoverCardProfile from './queries/getUserHoverCardProfile'
import programQuery from './queries/programQuery'
import QAExpandKeyInfo from './queries/QAExpandKeyInfo'
export const queries = {
  avatarDataForProfile,
  feedbackQuery,
  getFeedbackReplies,
  getFullUserProfile,
  getUserByUsernameOrEmail,
  getUserHoverCardProfile,
  programQuery,
  QAExpandKeyInfo,
}

/** Mutations */
import loginWithPasswordMutation from './mutations/loginWithPasswordMutation'
export const mutations = {
  loginWithPasswordMutation,
}

/** Classes */
import Client from './Client'
import User from './User'
import Program from './Program'
import TipsAndThanks from './lib/messages/TipsAndThanks'
import Question from './lib/messages/Question'
import Answer from './lib/messages/Answer'
import Reply from './lib/messages/Reply'
export { Client, User, Program, TipsAndThanks, Question, Answer, Reply }

/** Utilities */
export * from './utils/avatars'
export * from './utils/programs'
export * from './utils/messages'
export * from './utils/regexes'
export * from './utils/resolvers'

/** Types */
export * from './types/responses'
export * from './types/schema'
export * from './types/strings'
