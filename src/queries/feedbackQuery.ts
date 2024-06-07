import { KHAN_GRAPHQL_URL } from '../lib/constants'
import { FeedbackFocusKind, FeedbackSort, FeedbackType } from '../types/enums'
import { StandardResponse } from '../types/responses'
import { FeedbackForFocusSchema } from '../types/schema'
import { graphql } from '../utils/fetch'

export namespace FeedbackQuery {
  export const query = `query feedbackQuery($topicId: String!, $focusKind: String!, $cursor: String, $limit: Int, $feedbackType: FeedbackType!, $currentSort: Int, $qaExpandKey: String) {
  feedback(
    focusId: $topicId
    cursor: $cursor
    limit: $limit
    feedbackType: $feedbackType
    focusKind: $focusKind
    sort: $currentSort
    qaExpandKey: $qaExpandKey
    answersLimit: 1
  ) {
    feedback {
      isLocked
      isPinned
      replyCount
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
      badges {
        name
        icons {
          smallUrl
          __typename
        }
        description
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
      focus {
        kind
        id
        translatedTitle
        relativeUrl
        __typename
      }
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
      ... on QuestionFeedback {
        hasAnswered
        answers {
          isLocked
          isPinned
          replyCount
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
          badges {
            name
            icons {
              smallUrl
              __typename
            }
            description
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
          focus {
            kind
            id
            translatedTitle
            relativeUrl
            __typename
          }
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
        isOld
        answerCount
        __typename
      }
      ... on AnswerFeedback {
        question {
          isLocked
          isPinned
          replyCount
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
          badges {
            name
            icons {
              smallUrl
              __typename
            }
            description
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
          focus {
            kind
            id
            translatedTitle
            relativeUrl
            __typename
          }
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
      __typename
    }
    cursor
    isComplete
    sortedByDate
    __typename
  }
}`

  export interface Variables {
    topicId: string
    focusKind: FeedbackFocusKind
    cursor?: string
    limit?: number
    feedbackType: FeedbackType
    currentSort: FeedbackSort | number | null
    qaExpandKey?: string | null
  }

  export type Response = StandardResponse<Data>

  export type Data = {
    feedback: FeedbackForFocusSchema
  }
}

/**
 * Low-level for making a `feedbackQuery` request.
 *
 * @link {@link https://khan-api.bhavjit.com/reference/view/19553924/2s8YzQUiXU#e7abb177-fe2b-4e49-a003-5f9be43b90e4 | Reference}
 */
export default function feedbackQuery(
  variables: FeedbackQuery.Variables,
  init?: RequestInit
) {
  return graphql<FeedbackQuery.Variables, FeedbackQuery.Response>(
    `${KHAN_GRAPHQL_URL}/feedbackQuery`,
    FeedbackQuery.query,
    variables,
    init
  )
}
