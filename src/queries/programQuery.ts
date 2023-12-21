import { KHAN_GRAPHQL_URL } from '../lib/constants'
import { StandardResponse } from '../types/responses'
import { ProgramSchema, UserSchema } from '../types/schema'
import { ProgramID } from '../types/strings'
import { graphql, TypedResponse } from '../utils/fetch'

export namespace ProgramQuery {
  export const query = `query programQuery($programId: String!) {
  programById(id: $programId) {
    byChild
    category
    created
    creatorProfile: author {
      id
      nickname
      profileRoot
      profile {
        accessLevel
        __typename
      }
      __typename
    }
    deleted
    description
    spinoffCount: displayableSpinoffCount
    docsUrlPath
    flags
    flaggedBy: flaggedByKaids
    flaggedByUser: isFlaggedByCurrentUser
    height
    hideFromHotlist
    id
    imagePath
    isProjectOrFork: originIsProject
    isOwner
    kaid: authorKaid
    key
    newUrlPath
    originScratchpad: originProgram {
      deleted
      translatedTitle
      url
      __typename
    }
    restrictPosting
    revision: latestRevision {
      id
      code
      configVersion
      created
      editorType
      folds
      __typename
    }
    slug
    sumVotesIncremented
    title
    topic: parentCurationNode {
      id
      nodeSlug: slug
      relativeUrl
      slug
      translatedTitle
      __typename
    }
    translatedTitle
    url
    userAuthoredContentType
    upVoted
    width
    __typename
  }
}` as const

  export interface Variables {
    programId: string
  }

  export type Response = StandardResponse<Data>

  export type Data = {
    programById: Pick<
      ProgramSchema<
        Pick<
          UserSchema,
          '__typename' | 'id' | 'kaid' | 'nickname' | 'profile' | 'profileRoot'
        >
      >,
      | '__typename'
      | 'byChild'
      | 'category'
      | 'created'
      | 'creatorProfile'
      | 'deleted'
      | 'description'
      | 'docsUrlPath'
      | 'flaggedBy'
      | 'flaggedByUser'
      | 'flags'
      | 'height'
      | 'hideFromHotlist'
      | 'id'
      | 'imagePath'
      | 'isOwner'
      | 'isProjectOrFork'
      | 'kaid'
      | 'key'
      | 'newUrlPath'
      | 'originScratchpad'
      | 'restrictPosting'
      | 'revision'
      | 'slug'
      | 'spinoffCount'
      | 'sumVotesIncremented'
      | 'title'
      | 'topic'
      | 'translatedTitle'
      | 'upVoted'
      | 'url'
      | 'userAuthoredContentType'
      | 'width'
    > | null
  }
}

/**
 * Low-level function for making a `programQuery` request.
 *
 * @link {@link https://khan-api.bhavjit.com/reference/view/19553924/2s8YzQUiXU#77a4642b-3580-4409-b837-1ac82a487c35 | Reference}
 *
 * @see {@link Client.getProgram}
 *
 * @example
 * Simple usage without error handling:
 * ```js
 * const response = await queries.programQuery({
 *   programId: '6058668928843776'
 * })
 * const json = await response.json()
 * const program = json.data.programById
 * ```
 */
export default function programQuery(
  variables: ProgramQuery.Variables,
  init?: RequestInit
): Promise<TypedResponse<ProgramQuery.Response>>
/**
 * @example
 * Alternative usage:
 * ```js
 * const response = await queries.programQuery(6058668928843776)
 * const json = await response.json()
 * const program = json.data.programById
 * ```
 */
export default function programQuery(
  programId: ProgramID,
  init?: RequestInit
): Promise<TypedResponse<ProgramQuery.Response>>
export default function programQuery(
  variablesOrProgramId: ProgramQuery.Variables | ProgramID,
  init?: RequestInit
) {
  return graphql<ProgramQuery.Variables, ProgramQuery.Response>(
    `${KHAN_GRAPHQL_URL}/programQuery`,
    ProgramQuery.query,
    typeof variablesOrProgramId === 'number'
      ? { programId: variablesOrProgramId.toString() }
      : typeof variablesOrProgramId === 'string'
        ? { programId: variablesOrProgramId }
        : variablesOrProgramId,
    init
  )
}
