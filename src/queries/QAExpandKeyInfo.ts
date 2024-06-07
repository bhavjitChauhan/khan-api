import { KHAN_GRAPHQL_URL } from '../lib/constants'
import { StandardResponse } from '../types/responses'
import { QaExpandKeyInfoSchema } from '../types/schema'
import { EncryptedFeedbackKey } from '../types/strings'
import { graphql, TypedResponse } from '../utils/fetch'

export namespace QaExpandKeyInfo {
  export const query = `query QAExpandKeyInfo($encryptedKey: String) {
  qaExpandKeyInfo(encryptedQaExpandKey: $encryptedKey) {
    feedbackType
    unencryptedKey
    __typename
  }
}`

  export interface Variables {
    encryptedKey: string
  }

  export type Response = StandardResponse<Data>

  export type Data = {
    qaExpandKeyInfo: QaExpandKeyInfoSchema
  }
}

/**
 * Low-level function for making a `QAExpandKeyInfo` request.
 *
 * @link {@link https://khan-api.bhavjit.com/reference/view/19553924/2s8YzQUiXU#2354cba6-9065-4431-8d4a-f44f24527eb4 | Reference}
 *
 * @example
 * Simple usage without error handling:
 * ```js
 * const response = await queries.QAExpandKeyInfo({
 *  encryptedKey: 'kaencrypted_e1af9ca95e8bf24e1cebdb8a1e94f7a3_76142801656102acc04c5154ee776b59e6323603d457c39e2a18a68f32a9ac1fefcdfd57c28ec771ec62fbee8ae03e0509090d80723bb489a87010ba69a0a5fdbd27a91a0db97971b59b77548da0eb2494aa274600fa28939e8975abd13c851c5a2f4f701d7dc7e8a2879f3c8d59be0953fafa318bd9b036f6c3d6dc0212c926'
 * })
 * const json = await response.json()
 * const unencryptedKey = json.data.qaExpandKeyInfo?.unencryptedKey
 * ```
 */
export default function QAExpandKeyInfo(
  variables: QaExpandKeyInfo.Variables,
  init?: RequestInit
): Promise<TypedResponse<QaExpandKeyInfo.Response>>
/**
 * @example
 * Alternative usage:
 * ```js
 * const response = await queries.QAExpandKeyInfo('kaencrypted_e1af9ca95e8bf24e1cebdb8a1e94f7a3_76142801656102acc04c5154ee776b59e6323603d457c39e2a18a68f32a9ac1fefcdfd57c28ec771ec62fbee8ae03e0509090d80723bb489a87010ba69a0a5fdbd27a91a0db97971b59b77548da0eb2494aa274600fa28939e8975abd13c851c5a2f4f701d7dc7e8a2879f3c8d59be0953fafa318bd9b036f6c3d6dc0212c926')
 * const json = await response.json()
 * const unencryptedKey = json.data.qaExpandKeyInfo?.unencryptedKey
 * ```
 */
export default function QAExpandKeyInfo(
  encryptedKey: EncryptedFeedbackKey,
  init?: RequestInit
): Promise<TypedResponse<QaExpandKeyInfo.Response>>
export default function QAExpandKeyInfo(
  variablesOrEncryptedKey: QaExpandKeyInfo.Variables | EncryptedFeedbackKey,
  init?: RequestInit
) {
  return graphql<QaExpandKeyInfo.Variables, QaExpandKeyInfo.Response>(
    `${KHAN_GRAPHQL_URL}/QAExpandKeyInfo`,
    QaExpandKeyInfo.query,
    typeof variablesOrEncryptedKey === 'string'
      ? { encryptedKey: variablesOrEncryptedKey }
      : variablesOrEncryptedKey,
    init
  )
}
