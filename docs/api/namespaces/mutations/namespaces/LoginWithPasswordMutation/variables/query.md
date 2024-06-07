> `const` **query**: "mutation loginWithPasswordMutation($identifier: String!, $password: String!) \{\n  loginWithPassword(identifier: $identifier, password: $password) \{\n    user \{\n      id\n      kaid\n      canAccessDistrictsHomepage\n      isTeacher\n      hasUnresolvedInvitations\n      transferAuthToken\n      preferredKaLocale \{\n        id\n        kaLocale\n        status\n        \_\_typename\n      \}\n      \_\_typename\n    \}\n    isFirstLogin\n    error \{\n      code\n      \_\_typename\n    \}\n    \_\_typename\n  \}\n\}"

## Source

[src/mutations/loginWithPasswordMutation.ts:7](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/mutations/loginWithPasswordMutation.ts#L7)
