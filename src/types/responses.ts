import { ServiceErrorCode, ServiceErrorName } from './enums'

export type DataResponse<T = unknown> = {
  data: T
}

export type ServiceErrorsResponse = {
  data: unknown
  errors: Array<{
    extensions: {
      code: ServiceErrorCode
      serviceName: ServiceErrorName
    }
    message: string
    path: Array<string>
  }>
}

export interface InputErrorResponse {
  errors: Array<{
    message: string
  }>
}

export type StandardResponse<T = unknown> =
  | DataResponse<T>
  | ServiceErrorsResponse
  | InputErrorResponse

export function isDataResponse<T>(
  response: StandardResponse<T>
): response is DataResponse<T> {
  return 'data' in response && !('errors' in response)
}

export function isServiceErrorsResponse(
  response: StandardResponse
): response is ServiceErrorsResponse {
  return (
    'errors' in response && Array.isArray(response.errors) && 'data' in response
  )
}

export function isInputErrorResponse(
  response: StandardResponse
): response is InputErrorResponse {
  return (
    'errors' in response &&
    Array.isArray(response.errors) &&
    !('data' in response)
  )
}
