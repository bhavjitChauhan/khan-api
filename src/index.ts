/** Queries */
import avatarDataForProfile from './queries/avatarDataForProfile'
import getFullUserProfile from './queries/getFullUserProfile'
import getUserByUsernameOrEmail from './queries/getUserByUsernameOrEmail'
import programQuery from './queries/programQuery'
export const queries = {
  avatarDataForProfile,
  getFullUserProfile,
  getUserByUsernameOrEmail,
  programQuery,
}

/** Mutations */
import loginWithPasswordMutation from './mutations/loginWithPasswordMutation'
export const mutations = {
  loginWithPasswordMutation,
}

/** Classes */
import Client from './Client'
import Program from './Program'
import User from './User'
export { Client, Program, User }

/** Utilities */
export * from './utils/regexes'
export * from './utils/avatars'

/** Types */
export * from './types/schema'
export * from './types/strings'
