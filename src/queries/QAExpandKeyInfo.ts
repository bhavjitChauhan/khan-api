import { KHAN_GRAPHQL_URL } from '../lib/constants'
import { StandardResponse } from '../types/responses'
import { QaExpandKeyInfoSchema } from '../types/schema'
import { graphql } from '../utils/fetch'

export namespace QaExpandKeyInfo {
  export const query = `query QAExpandKeyInfo($encryptedKey: String) {
  qaExpandKeyInfo(encryptedQaExpandKey: $encryptedKey) {
    feedbackType
    unencryptedKey
    __typename
  }
}
` as const

  export interface Variables {
    encryptedKey: string
  }

  export type Response = StandardResponse<Data>

  export type Data = {
    qaExpandKeyInfo: QaExpandKeyInfoSchema
  }
}

export default function QAExpandKeyInfo(
  variables: QaExpandKeyInfo.Variables,
  init?: RequestInit
) {
  return graphql<QaExpandKeyInfo.Variables, QaExpandKeyInfo.Response>(
    `${KHAN_GRAPHQL_URL}/QAExpandKeyInfo`,
    QaExpandKeyInfo.query,
    variables,
    init
  )
}
