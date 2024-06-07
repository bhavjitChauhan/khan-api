import { KHAN_GRAPHQL_URL } from '../lib/constants'
import { ListProgramSortOrder } from '../types/enums'
import { StandardResponse } from '../types/responses'
import { ListProgramsSchema, ProgramSchema } from '../types/schema'
import { graphql } from '../utils/fetch'

export namespace Hotlist {
  export const query =
    `query hotlist($curationNodeId: String, $onlyOfficialProjectSpinoffs: Boolean!, $sort: ListProgramSortOrder, $pageInfo: ListProgramsPageInfo, $userAuthoredContentTypes: [UserAuthoredContentType!]) {
  listTopPrograms(
    curationNodeId: $curationNodeId
    onlyOfficialProjectSpinoffs: $onlyOfficialProjectSpinoffs
    sort: $sort
    pageInfo: $pageInfo
    userAuthoredContentTypes: $userAuthoredContentTypes
  ) {
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
      userAuthoredContentType
      __typename
    }
    __typename
  }
}` as const

  export interface Variables {
    curationNodeId?: string | null
    onlyOfficialProjectSpinoffs: boolean
    sort?: ListProgramSortOrder | null
    pageInfo?: {
      cursor?: string | null
      itemsPerPage: number
    }
  }

  export type Response = StandardResponse<Data>

  export type Data = {
    listTopPrograms: ListProgramsSchema<
      Pick<
        ProgramSchema,
        | 'id'
        | 'key'
        | 'authorKaid'
        | 'authorNickname'
        | 'displayableSpinoffCount'
        | 'imagePath'
        | 'sumVotesIncremented'
        | 'translatedTitle'
        | 'url'
        | 'userAuthoredContentType'
      >
    >
  }
}

/**
 * Low-level function for making a `hotlist` request.
 *
 * @link {@link https://khan-api.bhavjit.com/reference/view/19553924/2s8YzQUiXU#63956e0c-3e52-410a-9c80-70b5b8031d97}
 *
 * @example
 * Simple usage without error handling:
 * ```js
 * const response = await queries.hotlist({
 *  onlyOfficialProjectSpinoffs: false,
 * })
 * const json = await response.json()
 * const programs = json.data.listTopPrograms.programs
 * ```
 */
export default function hotlist(
  variables: Hotlist.Variables,
  init?: RequestInit
) {
  return graphql<Hotlist.Variables, Hotlist.Response>(
    `${KHAN_GRAPHQL_URL}/hotlist`,
    Hotlist.query,
    variables,
    init
  )
}
