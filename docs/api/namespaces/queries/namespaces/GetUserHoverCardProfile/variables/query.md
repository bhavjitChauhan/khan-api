> `const` **query**: "query getUserHoverCardProfile($kaid: String!) \{\n  user(kaid: $kaid) \{\n    id\n    nickname\n    username\n    bio\n    avatar \{\n      name\n      imageSrc\n      \_\_typename\n    \}\n    points\n    isPhantom\n    isActor\n    isCoachedByActor\n    userSummaryIsVisibleToActor\n    actorHasUserScopedPermission(capability: CAN\_VIEW\_USER\_IDENTITY)\n    \_\_typename\n  \}\n\}"

Defined in: [src/queries/getUserHoverCardProfile.ts:8](https://github.com/bhavjitChauhan/khan-api/blob/67d30ab4498111952301bcaddbef9a132bf75105/src/queries/getUserHoverCardProfile.ts#L8)
