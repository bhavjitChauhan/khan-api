// Low-level enums with one-to-one mappings to the API

export enum ServiceErrorCode {
  DOWNSTREAM_SERVICE_ERROR = 'DOWNSTREAM_SERVICE_ERROR',
}

export enum ServiceErrorName {
  users = 'users',
}

export enum UserAccessLevel {
  COACH = 'COACH',
  PUBLIC = 'PUBLIC',
}

export enum ProgramEditorType {
  pjs = 'pjs',
  webpage = 'webpage',
  ace_sql = 'ace_sql',
  unknown = '',
}
