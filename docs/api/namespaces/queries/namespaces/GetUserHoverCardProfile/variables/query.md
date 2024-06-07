> `const` **query**: "query getUserHoverCardProfile($kaid: String!) \{\n  user(kaid: $kaid) \{\n    id\n    nickname\n    username\n    bio\n    avatar \{\n      name\n      imageSrc\n      \_\_typename\n    \}\n    points\n    isPhantom\n    isActor\n    isCoachedByActor\n    userSummaryIsVisibleToActor\n    actorHasUserScopedPermission(capability: CAN\_VIEW\_USER\_IDENTITY)\n    \_\_typename\n  \}\n\}"

## Source

[src/queries/getUserHoverCardProfile.ts:8](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/queries/getUserHoverCardProfile.ts#L8)
