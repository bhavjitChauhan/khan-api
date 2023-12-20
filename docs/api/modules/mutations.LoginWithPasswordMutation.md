# Namespace: LoginWithPasswordMutation

[mutations](api/modules/mutations.md).LoginWithPasswordMutation

## Enumerations

- [ErrorCode](api/enums/mutations.LoginWithPasswordMutation.ErrorCode.md)

## Interfaces

- [Variables](api/interfaces/mutations.LoginWithPasswordMutation.Variables.md)

## Type Aliases

### Response

Ƭ **Response**: [`StandardResponse`](api/README.md#standardresponse)\<\{ `loginWithPassword`: \{ `__typename`: ``"LoginWithPasswordMutation"`` ; `error`: \{ `__typename`: ``"LoginWithPasswordMutationError"`` ; `code`: [`ErrorCode`](api/enums/mutations.LoginWithPasswordMutation.ErrorCode.md)  } \| ``null`` ; `isFirstLogin`: `boolean` \| ``null`` ; `user`: `Pick`\<[`UserSchema`](api/interfaces/UserSchema.md), ``"__typename"`` \| ``"canAccessDistrictsHomepage"`` \| ``"hasUnresolvedInvitations"`` \| ``"id"`` \| ``"isTeacher"`` \| ``"kaid"`` \| ``"preferredKaLocale"`` \| ``"transferAuthToken"``\> \| ``null``  } \| ``null``  }\>

#### Defined in

[mutations/loginWithPasswordMutation.ts:40](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/mutations/loginWithPasswordMutation.ts#L40)

## Variables

### query

• `Const` **query**: ``"mutation loginWithPasswordMutation($identifier: String!, $password: String!) {\n  loginWithPassword(identifier: $identifier, password: $password) {\n    user {\n      id\n      kaid\n      canAccessDistrictsHomepage\n      isTeacher\n      hasUnresolvedInvitations\n      transferAuthToken\n      preferredKaLocale {\n        id\n        kaLocale\n        status\n        __typename\n      }\n      __typename\n    }\n    isFirstLogin\n    error {\n      code\n      __typename\n    }\n    __typename\n  }\n}"``

#### Defined in

[mutations/loginWithPasswordMutation.ts:7](https://github.com/bhavjitChauhan/khan-api/blob/b7f7b44b/src/mutations/loginWithPasswordMutation.ts#L7)
