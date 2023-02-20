/**
 * @file Low-level enums with one-to-one mappings to the API
 */

/** */
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

export enum FeedbackFocusKind {
  Challenge = 'Challenge',
  Interactive = 'Interactive',
  Project = 'Project',
  Scratchpad = 'Scratchpad',
  Talkthrough = 'Talkthrough',
}

/**
 * @remarks
 * Not all feedback types are supported by every query/mutation.
 *
 * @link {@link https://khan-api.bhavjit.com/reference/view/19553924/2s8YzQUiXU#afc29a01-a4d7-45db-bb1f-82ea66eb210a | Reference}
 */
export enum FeedbackType {
  ALL_PROJECT_ANSWER = 'ALL_PROJECT_ANSWER',
  ALL_PROJECT_QUESTION = 'ALL_PROJECT_QUESTION',
  ANSWER = 'ANSWER',
  COMMENT = 'COMMENT',
  PROGRAM = 'PROGRAM',
  PROJECTFEEDBACK = 'PROJECTFEEDBACK',
  PROJECT_CRITIQUE_ANSWER = 'PROJECT_CRITIQUE_ANSWER',
  PROJECT_CRITIQUE_QUESTION = 'PROJECT_CRITIQUE_QUESTION',
  PROJECT_EVAL_ANSWER = 'PROJECT_EVAL_ANSWER',
  PROJECT_EVAL_QUESTION = 'PROJECT_EVAL_QUESTION',
  PROJECT_HELP_ANSWER = 'PROJECT_HELP_ANSWER',
  PROJECT_HELP_QUESTION = 'PROJECT_HELP_QUESTION',
  QUESTION = 'QUESTION',
  REPLY = 'REPLY',
  SUGGESTED_CLARIFICATION = 'SUGGESTED_CLARIFICATION',
}

export enum FeedbackTypename {
  AnswerFeedback = 'AnswerFeedback',
  BasicFeedback = 'BasicFeedback',
  LowQualityFeedback = 'LowQualityFeedback',
  QuestionFeedback = 'QuestionFeedback',
}

export enum FeedbackSort {
  TopVoted = 1,
  Recent = 2,
}
