// Queries
import getFullUserProfile from './queries/getFullUserProfile'
import programQuery from './queries/programQuery'
export const queries = {
  getFullUserProfile,
  programQuery,
}

// Mutations
import loginWithPasswordMutation from './mutations/loginWithPasswordMutation'
export const mutations = {
  loginWithPasswordMutation,
}

// Classes
import Client from './Client'
import Program from './Program'
import User from './User'
export { Client, Program, User }

// Utilities
export * from './utils/regexes'
