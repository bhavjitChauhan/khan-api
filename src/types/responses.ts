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

export function assertDataResponse<T>(
  response: StandardResponse<T>
): asserts response is DataResponse<T> {
  if (isServiceErrorsResponse(response))
    throw new Error(
      'Expected data response but got service errors response: ' +
        response.errors.map((error) => error.message).join(', ')
    )
  if (isInputErrorResponse(response))
    throw new Error(
      'Expected data response but got input errors response: ' +
        response.errors.map((error) => error.message).join(', ')
    )
  if (!isDataResponse(response))
    throw new Error('Expected data response but got unknown response')
}
