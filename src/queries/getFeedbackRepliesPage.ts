import { KHAN_GRAPHQL_URL } from '../lib/constants'
import { StandardResponse } from '../types/responses'
import { RepliesSchema } from '../types/schema'
import { EncryptedFeedbackKey, FeedbackKey } from '../types/strings'
import { graphql } from '../utils/fetch'

export namespace GetFeedbackRepliesPage {
  export const query = `query getFeedbackRepliesPage($postKey: String!, $cursor: String, $limit: Int!) {
  feedbackRepliesPaginated(feedbackKey: $postKey, cursor: $cursor, limit: $limit) {
    cursor
    isComplete
    feedback {
      isLocked
      isPinned
      expandKey
      appearsAsDeleted
      author {
        id
        kaid
        nickname
        avatar {
          name
          imageSrc
          __typename
        }
        __typename
      }
      content
      date
      definitelyNotSpam
      deleted
      downVoted
      expandKey
      feedbackType
      flaggedBy
      flaggedByUser
      flags
      focusUrl
      fromVideoAuthor
      key
      lowQualityScore
      notifyOnAnswer
      permalink
      qualityKind
      replyCount
      replyExpandKeys
      showLowQualityNotice
      sumVotesIncremented
      upVoted
      __typename
    }
    __typename
  }
}`

  export interface Variables {
    postKey: FeedbackKey | EncryptedFeedbackKey
    cursor?: string | null
    limit: number
  }

  export type Response = StandardResponse<Data>

  export type Data = {
    feedbackRepliesPaginated: RepliesSchema
  }
}

/**
 * Low-level function to fetch a page of replies to a feedback post.
 *
 * @link {@link https://khan-api.bhavjit.com/reference/view/19553924/2s8YzQUiXU#16b92467-dd37-4dbb-968a-cb700ae0f9cb | Reference}
 */
export default function getFeedbackRepliesPage(
  variables: GetFeedbackRepliesPage.Variables,
  init?: RequestInit
) {
  return graphql<
    GetFeedbackRepliesPage.Variables,
    GetFeedbackRepliesPage.Response
  >(
    `${KHAN_GRAPHQL_URL}/getFeedbackRepliesPage`,
    GetFeedbackRepliesPage.query,
    variables,
    init
  )
}
