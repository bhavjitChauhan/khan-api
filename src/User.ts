import Client from './Client'
import { BadgeCategory } from './types/badges'
import { UserAccessLevel } from './types/enums'
import { UserSchema } from './types/schema'
import { KAID } from './types/strings'
import { GoogleIDRegex, KaidRegex, QualariiIDRegex } from './utils/regexes'
import { RecursivePartial } from './utils/types'

// @TODO: There has to be a solution that doesn't require duplicating properties
interface IUser {
  readonly self?: boolean
  readonly kaid?: KAID | null
  readonly username?: string | null
  readonly nickname?: string
  readonly email?: string
  readonly emails?: string[]
  readonly bio?: string
  readonly points?: number
  readonly badgeCounts?: Record<BadgeCategory, number>
  readonly joined?: Date

  readonly key?: string
  readonly googleID?: string | null
  readonly qualarooID?: string | null
  readonly newNotifications?: number
  readonly completedVideos?: number

  readonly canAccessDistrictsHomepage?: boolean
  readonly canHellban?: boolean
  readonly canMessageUsers?: boolean
  readonly canModifyCoaches?: boolean

  readonly hasChildren?: boolean
  readonly hasClasses?: boolean
  readonly hasCoach?: boolean
  readonly hasStudents?: boolean

  readonly developer?: boolean
  readonly moderator?: boolean
  readonly child?: boolean
  readonly parent?: boolean
  readonly orphan?: boolean
  readonly teacher?: boolean
  readonly curator?: boolean
  readonly publisher?: boolean
  readonly creator?: boolean
  readonly phantom?: boolean
  readonly midsignupPhantom?: boolean
  readonly satStudent?: boolean

  readonly accessLevel?: UserAccessLevel
}

export default class User implements IUser {
  /**
   * The client that this user was fetched with.
   */
  client?: Client
  /**
   * The raw user schema data
   *
   * @description
   * Only set if the user was created from a user schema.
   */
  rawData?: RecursivePartial<UserSchema>

  /**
   * Whether the user is the currently authenticated user.
   */
  readonly self?: boolean
  /**
   * The user's KAID.
   */
  readonly kaid?: KAID | null
  /**
   * The user's username. May not be set by the user.
   */
  readonly username?: string | null
  /**
   * The user's nickname. May in rare cases be `null`.
   */
  readonly nickname?: string
  /**
   * The user's email address. Required authentication.
   */
  readonly email?: string
  /**
   * The user's authentication email addresses. Required authentication.
   */
  readonly emails?: string[]
  /**
   * The user's bio.
   */
  readonly bio?: string
  /**
   * The user's energy points.
   */
  readonly points?: number
  /**
   * The user's badge counts by category.
   */
  readonly badgeCounts?: Record<BadgeCategory, number>
  /**
   * The date the user created their account.
   */
  readonly joined?: Date

  readonly key?: string
  readonly googleID?: string | null
  readonly qualarooID?: string | null
  /**
   * The number of unread notifications.
   */
  readonly newNotifications?: number
  readonly completedVideos?: number

  readonly canAccessDistrictsHomepage?: boolean
  readonly canHellban?: boolean
  /**
   * Whether the user can send Guardian messages.
   */
  readonly canMessageUsers?: boolean
  readonly canModifyCoaches?: boolean

  readonly hasChildren?: boolean
  readonly hasClasses?: boolean
  readonly hasCoach?: boolean
  readonly hasStudents?: boolean

  readonly developer?: boolean
  /**
   * Whether the user is a Guardian.
   */
  readonly moderator?: boolean
  /**
   * Whether the user is a child account.
   */
  readonly child?: boolean
  readonly parent?: boolean
  readonly orphan?: boolean
  readonly teacher?: boolean
  readonly curator?: boolean
  readonly publisher?: boolean
  readonly creator?: boolean
  readonly phantom?: boolean
  readonly midsignupPhantom?: boolean
  readonly satStudent?: boolean

  readonly accessLevel?: UserAccessLevel

  static #transformUserSchema(schema: RecursivePartial<UserSchema>) {
    return {
      emails: schema.authEmails ?? undefined,
      badgeCounts: schema.badgeCounts
        ? (JSON.parse(schema.badgeCounts) as Record<BadgeCategory, number>)
        : undefined,
      bio: schema.bio ?? undefined,
      canAccessDistrictsHomepage:
        schema.canAccessDistrictsHomepage ?? undefined,
      canHellban: schema.canHellban ?? undefined,
      canMessageUsers: schema.canMessageUsers ?? undefined,
      canModifyCoaches: schema.canModifyCoaches ?? undefined,
      completedVideos: schema.countVideosCompleted,
      email: schema.email ?? undefined,
      hasChildren: schema.hasChildren ?? undefined,
      hasClasses: schema.hasClasses ?? undefined,
      hasCoach: schema.hasCoach ?? undefined,
      hasStudents: schema.hasStudents ?? undefined,
      child: schema.isChild ?? undefined,
      creator: schema.isCreator ?? undefined,
      curator: schema.isCurator ?? undefined,
      developer: schema.isDeveloper ?? undefined,
      midsignupPhantom: schema.isMidsignupPhantom ?? undefined,
      moderator: schema.isModerator ?? undefined,
      orphan: schema.isOrphan ?? undefined,
      parent: schema.isParent ?? undefined,
      phantom: schema.isPhantom ?? undefined,
      publisher: schema.isPublisher ?? undefined,
      satStudent: schema.isSatStudent ?? undefined,
      self: schema.isSelf ?? undefined,
      teacher: schema.isTeacher ?? undefined,
      joined: schema.joined ? new Date(schema.joined) : undefined,
      kaid:
        typeof schema.kaid === 'string' && KaidRegex.test(schema.kaid)
          ? (schema.kaid as KAID)
          : typeof schema.kaid === 'string'
          ? null
          : undefined,
      key: schema.key ?? undefined,
      newNotifications: schema.newNotificationCount ?? undefined,
      nickname: schema.nickname ?? undefined,
      points: schema.points ?? undefined,
      accessLevel: schema.profile?.accessLevel,
      googleID:
        typeof schema.userId === 'string' && GoogleIDRegex.test(schema.userId)
          ? schema.userId.match(GoogleIDRegex)![1]
          : typeof schema.userId === 'string'
          ? null
          : undefined,
      qualarooID:
        typeof schema.qualarooId === 'string' &&
        QualariiIDRegex.test(schema.qualarooId)
          ? schema.qualarooId.match(QualariiIDRegex)![1]
          : typeof schema.qualarooId === 'string'
          ? null
          : undefined,
      username:
        schema.username ??
        (schema.profileRoot
          ? !KaidRegex.test(schema.profileRoot.slice(9, -1))
            ? schema.profileRoot.slice(9, -1)
            : null
          : schema.username),
    }
  }

  /**
   * Creates a new user from the given from a user schema
   *
   * @description
   * Note that `Client.getUser` will automatically call this method. This is only useful if you need to use the low-level API.
   *
   * @param schema
   *
   * @see {@link Client.getUser}
   */
  static fromUserSchema(schema: RecursivePartial<UserSchema>) {
    const user = new User(User.#transformUserSchema(schema))
    user.rawData = schema

    return user
  }

  /**
   * Creates a new user from the given formatted data or `User` instance
   *
   * @description
   * Note that `Client.getUser` will automatically use this class for abstraction. This is only useful if you need to talk between the low-level API and the high-level API.
   *
   * @param user Formatted user data or `User` instance
   */
  constructor(user?: IUser) {
    if (user) return this.copy(user)
    return this
  }

  /**
   * Copies the given formatted data or `User` instance
   *
   * @param user Formatted user data or `User` instance
   */
  copy(user: IUser) {
    Object.assign(this, user)

    return this
  }

  /**
   * Copies the given data from a user schema
   */
  copyFromUserSchema(schema: RecursivePartial<UserSchema>) {
    return this.copy(User.#transformUserSchema(schema))
  }

  /**
   * Fetches the user's profile using a `getFullUserProfile` query and updates the user's data
   *
   * @param client Optional client to use for the request
   */
  async fetch(client = new Client()) {
    if (!this.kaid && !this.username)
      throw new Error('User does not have a KAID/username')

    const user = await client.getUser(this.kaid ?? this.username!)
    if (!user) throw new Error('User not found')

    return this.copy(user)
  }
}
