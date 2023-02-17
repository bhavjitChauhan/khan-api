import { KHAN_GRAPHQL_URL } from '../lib/constants'
import { StandardResponse } from '../types/responses'
import { BasicFeedbackSchema } from '../types/schema'
import { EncryptedFeedbackKey, FeedbackKey } from '../types/strings'
import { graphql } from '../utils/fetch'

export namespace GetFeedbackReplies {
  export const query = `query getFeedbackReplies($postKey: String!) {
  feedbackReplies(feedbackKey: $postKey) {
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
}
` as const

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

export default function getFeedbackReplies(
  variables: GetFeedbackReplies.Variables,
  init?: RequestInit
) {
  return graphql<GetFeedbackReplies.Variables, GetFeedbackReplies.Response>(
    `${KHAN_GRAPHQL_URL}/getFeedbackReplies`,
    GetFeedbackReplies.query,
    variables,
    init
  )
}
