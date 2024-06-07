import { KHAN_GRAPHQL_URL } from '../lib/constants'
import { StandardResponse } from '../types/responses'
import { BasicFeedbackSchema } from '../types/schema'
import { EncryptedFeedbackKey, FeedbackKey } from '../types/strings'
import { graphql, TypedResponse } from '../utils/fetch'

export namespace GetFeedbackReplies {
  export const query = `query getFeedbackReplies($postKey: String!) {
  feedbackReplies(feedbackKey: $postKey) {
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
}`

  export interface Variables {
    postKey: FeedbackKey | EncryptedFeedbackKey
  }

  export type Response = StandardResponse<Data>

  export type Data = {
    feedbackReplies: Pick<
      BasicFeedbackSchema,
      | '__typename'
      | 'appearsAsDeleted'
      | 'author'
      | 'content'
      | 'date'
      | 'definitelyNotSpam'
      | 'deleted'
      | 'downVoted'
      | 'expandKey'
      | 'feedbackType'
      | 'flaggedBy'
      | 'flaggedByUser'
      | 'flags'
      | 'focusUrl'
      | 'fromVideoAuthor'
      | 'isLocked'
      | 'isPinned'
      | 'key'
      | 'lowQualityScore'
      | 'notifyOnAnswer'
      | 'permalink'
      | 'qualityKind'
      | 'replyCount'
      | 'replyExpandKeys'
      | 'showLowQualityNotice'
      | 'sumVotesIncremented'
      | 'upVoted'
    >[]
  }
}

/**
 * Low-level function for making a `getFeedbackReplies` request.
 *
 * @link {@link https://khan-api.bhavjit.com/reference/view/19553924/2s8YzQUiXU#3d616591-a38f-4bec-9836-367dba32a2ac | Reference}
 *
 * @example
 * Simple usage without error handling:
 * ```js
 * const response = await queries.getFeedbackReplies({
 *  postKey: 'ag5zfmtoYW4tYWNhZGVteXJBCxIIVXNlckRhdGEiHmthaWRfNjYzMzc5NDA2ODA0Nzc0MjA1NjU0NTUzNAwLEghGZWVkYmFjaxiAgOPjx8-XCAw'
 * })
 * const json = await response.json()
 * const replies = json.data.feedbackReplies
 * ```
 */
export default function getFeedbackReplies(
  variables: GetFeedbackReplies.Variables,
  init?: RequestInit
): Promise<TypedResponse<GetFeedbackReplies.Response>>
/**
 * @example
 * Alternative usage:
 * ```js
 * const await queries.getFeedbackReplies('ag5zfmtoYW4tYWNhZGVteXJBCxIIVXNlckRhdGEiHmthaWRfNjYzMzc5NDA2ODA0Nzc0MjA1NjU0NTUzNAwLEghGZWVkYmFjaxiAgOPjx8-XCAw')
 * const json = await response.json()
 * const replies = json.data.feedbackReplies
 * ```
 */
export default function getFeedbackReplies(
  postKey: FeedbackKey | EncryptedFeedbackKey,
  init?: RequestInit
): Promise<TypedResponse<GetFeedbackReplies.Response>>
export default function getFeedbackReplies(
  variablesOrPostKey:
    | GetFeedbackReplies.Variables
    | FeedbackKey
    | EncryptedFeedbackKey,
  init?: RequestInit
) {
  return graphql<GetFeedbackReplies.Variables, GetFeedbackReplies.Response>(
    `${KHAN_GRAPHQL_URL}/getFeedbackReplies`,
    GetFeedbackReplies.query,
    typeof variablesOrPostKey === 'string'
      ? { postKey: variablesOrPostKey }
      : variablesOrPostKey,
    init
  )
}
