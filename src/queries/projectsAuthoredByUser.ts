import { KHAN_GRAPHQL_URL } from '../lib/constants'
import { ListProgramSortOrder } from '../types/enums'
import { StandardResponse } from '../types/responses'
import { ListProgramsSchema, ProgramSchema, UserSchema } from '../types/schema'
import { Kaid } from '../types/strings'
import { graphql } from '../utils/fetch'

export namespace ProjectsAuthoredByUser {
  export const query = `query projectsAuthoredByUser($kaid: String, $pageInfo: ListProgramsPageInfo, $sort: ListProgramSortOrder) {
  user(kaid: $kaid) {
    id
    programs(pageInfo: $pageInfo, sort: $sort) {
      complete
      cursor
      programs {
        id
        key
        authorKaid
        authorNickname
        displayableSpinoffCount
        imagePath
        sumVotesIncremented
        translatedTitle: title
        url
        __typename
      }
      __typename
    }
    __typename
  }
}`

  export interface Variables {
    kaid: Kaid
    pageInfo?: {
      cursor?: string | null
      itemsPerPage: number
    }
    sort?: ListProgramSortOrder
  }

  export type Response = StandardResponse<Data>

  export type Data = {
    user: Pick<
      UserSchema<
        unknown,
        unknown,
        ListProgramsSchema<
          Pick<
            ProgramSchema,
            | '__typename'
            | 'authorKaid'
            | 'authorNickname'
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
      '__typename' | 'id' | 'kaid' | 'programs'
    >
  }
}

/**
 * @link {@link https://khan-api.bhavjit.com/reference/view/19553924/2s8YzQUiXU#fe90a093-1deb-48bc-98a0-116275b2f512 | Reference}
 */
export default function projectsAuthoredByUser(
  variables: ProjectsAuthoredByUser.Variables,
  init?: RequestInit
) {
  return graphql<
    ProjectsAuthoredByUser.Variables,
    ProjectsAuthoredByUser.Response
  >(
    `${KHAN_GRAPHQL_URL}/projectsAuthoredByUser`,
    ProjectsAuthoredByUser.query,
    variables,
    init
  )
}
