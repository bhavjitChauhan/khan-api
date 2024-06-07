import { KHAN_GRAPHQL_URL } from '../lib/constants'
import { StandardResponse } from '../types/responses'
import {
  ListProgramsSchema,
  ProfileSchema,
  ProgramSchema,
  UserSchema,
  UserSummarySchema,
} from '../types/schema'
import { Kaid } from '../types/strings'
import { graphql, TypedResponse } from '../utils/fetch'
import { isKaid } from '../utils/regexes'

export namespace GetProfileWidgets {
  export const query = `query getProfileWidgets($kaid: String!) {
  user(kaid: $kaid) {
    id
    kaid
    badgeCounts
    isChild
    profile {
      programs {
        id
        authorKaid
        authorNickname
        deleted
        displayableSpinoffCount
        imagePath
        key
        sumVotesIncremented
        translatedTitle: title
        url
        __typename
      }
      __typename
    }
    programs(sort: TOP, pageInfo: {itemsPerPage: 2}) {
      programs {
        id
        authorKaid
        authorNickname
        deleted
        displayableSpinoffCount
        imagePath
        key
        sumVotesIncremented
        translatedTitle: title
        url
        __typename
      }
      __typename
    }
    __typename
  }
  userSummary(kaid: $kaid) {
    statistics {
      answers
      comments
      flags
      projectanswers
      projectquestions
      questions
      replies
      votes
      __typename
    }
    __typename
  }
}`

  export interface Variables {
    kaid: Kaid
  }

  export type Response = StandardResponse<Data>

  export type Data = {
    user: Pick<
      UserSchema<
        unknown,
        Pick<ProfileSchema, '__typename' | 'programs'>,
        ListProgramsSchema<
          Pick<
            ProgramSchema,
            | '__typename'
            | 'authorKaid'
            | 'authorNickname'
            | 'deleted'
            | 'displayableSpinoffCount'
            | 'id'
            | 'imagePath'
            | 'key'
            | 'sumVotesIncremented'
            | 'url'
          > & {
            translatedTitle: ProgramSchema['title']
          }
        >
      >,
      | '__typename'
      | 'badgeCounts'
      | 'id'
      | 'isChild'
      | 'kaid'
      | 'profile'
      | 'programs'
    >
    /**
     * Will still be defined even if the user doesn't exist, but all values will be 0
     */
    userSummary: UserSummarySchema
  }
}

/**
 * @link {@link https://khan-api.bhavjit.com/reference/view/19553924/2s8YzQUiXU#d88fe317-8705-43d7-a811-5d93316dd4a2 | Reference}
 */
export default function getProfileWidgets(
  variables: GetProfileWidgets.Variables,
  init?: RequestInit
): Promise<TypedResponse<GetProfileWidgets.Response>>
export default function getProfileWidgets(
  kaid: Kaid,
  init?: RequestInit
): Promise<TypedResponse<GetProfileWidgets.Response>>
export default function getProfileWidgets(
  variablesOrKaid: GetProfileWidgets.Variables | Kaid,
  init?: RequestInit
) {
  return graphql<GetProfileWidgets.Variables, GetProfileWidgets.Response>(
    `${KHAN_GRAPHQL_URL}/getProfileWidgets`,
    GetProfileWidgets.query,
    typeof variablesOrKaid === 'string' && isKaid(variablesOrKaid)
      ? { kaid: variablesOrKaid }
      : variablesOrKaid,
    init
  )
}
