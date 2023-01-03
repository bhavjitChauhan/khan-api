import KhanClient from './KhanClient'
import { GetFullUserProfile } from './queries/getFullUserProfile'
import { BadgeCategory } from './types/badges'
import { UserAccessLevel } from './types/enums'
import { KAID } from './types/strings'
import { GoogleIDRegex, QualariiIDRegex } from './utils/regexes'

// @TODO: There has to be a solution that doesn't require duplicating properties
interface IUser {
  readonly self?: boolean
  readonly kaid?: KAID
  readonly username?: string
  readonly nickname?: string
  readonly email?: string
  readonly emails?: string[]
  readonly bio?: string
  readonly points?: number
  readonly badgeCounts?: Record<BadgeCategory, number>
  readonly joined?: Date

  readonly key?: string
  readonly googleID?: string
  readonly qualarooID?: string
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
  client?: KhanClient
  /**
   * The raw `getFullUserProfile` data returned by the API.
   */
  rawFullUserProfile?: GetFullUserProfile.Data

  /**
   * Whether the user is the currently authenticated user.
   */
  readonly self?: boolean
  /**
   * The user's KAID.
   */
  readonly kaid?: KAID
  /**
   * The user's username. May not be set by the user.
   */
  readonly username?: string
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
  readonly googleID?: string
  readonly qualarooID?: string
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

  static #transformFullUserProfile(data: GetFullUserProfile.Data) {
    if (!data.user) return {}

    return {
      emails: data.user.authEmails ?? undefined,
      badgeCounts: data.user.badgeCounts
        ? (JSON.parse(data.user.badgeCounts) as Record<BadgeCategory, number>)
        : undefined,
      bio: data.user.bio ?? undefined,
      canAccessDistrictsHomepage:
        data.user.canAccessDistrictsHomepage ?? undefined,
      canHellban: data.user.canHellban ?? undefined,
      canMessageUsers: data.user.canMessageUsers ?? undefined,
      canModifyCoaches: data.user.canModifyCoaches ?? undefined,
      completedVideos: data.user.countVideosCompleted,
      email: data.user.email ?? undefined,
      hasChildren: data.user.hasChildren ?? undefined,
      hasClasses: data.user.hasClasses ?? undefined,
      hasCoach: data.user.hasCoach ?? undefined,
      hasStudents: data.user.hasStudents ?? undefined,
      child: data.user.isChild ?? undefined,
      creator: data.user.isCreator ?? undefined,
      curator: data.user.isCurator ?? undefined,
      developer: data.user.isDeveloper ?? undefined,
      midsignupPhantom: data.user.isMidsignupPhantom ?? undefined,
      moderator: data.user.isModerator ?? undefined,
      orphan: data.user.isOrphan ?? undefined,
      parent: data.user.isParent ?? undefined,
      phantom: data.user.isPhantom ?? undefined,
      publisher: data.user.isPublisher ?? undefined,
      satStudent: data.user.isSatStudent ?? undefined,
      self: data.user.isSelf ?? undefined,
      teacher: data.user.isTeacher ?? undefined,
      joined: data.user.joined ? new Date(data.user.joined) : undefined,
      kaid: data.user.kaid ?? undefined,
      key: data.user.key ?? undefined,
      newNotifications: data.user.newNotificationCount ?? undefined,
      nickname: data.user.nickname ?? undefined,
      points: data.user.points ?? undefined,
      accessLevel: data.user.profile.accessLevel,
      googleID: GoogleIDRegex.test(data.user.userId)
        ? data.user.userId.match(GoogleIDRegex)![1]
        : undefined,
      qualarooID: QualariiIDRegex.test(data.user.userId)
        ? data.user.userId.match(QualariiIDRegex)![1]
        : undefined,
      username: data.user.username ?? undefined,
    }
  }

  /**
   * Creates a new user from the given from a `getFullUserProfile` query
   * 
   * @description
   * Note that `KhanClient.getUser` will automatically call this method. This is only useful if you need to use the low-level API.
   * 
   * @param data `getFullUserProfile` query data
   * 
   * @see KhanClient.getUser
   */
  static fromFullUserProfile(data: GetFullUserProfile.Data) {
    const user = new User(User.#transformFullUserProfile(data))

    user.rawFullUserProfile = data

    return user
  }

  /**
   * Creates a new user from the given formatted data or `User` instance
   * 
   * @description
   * Note that `KhanClient.getUser` will automatically use this class for abstraction. This is only useful if you need to talk between the low-level API and the high-level API.
   * 
   * @param user Formatted user data or `User` instance
   */
  constructor(user?: IUser) {
    if (user) this.copy(user)

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
   * Copies the given data from a `getFullUserProfile` query
   * 
   * @param data `getFullUserProfile` query data
   */
  copyFromFullUserProfile(data: GetFullUserProfile.Data) {
    this.copy(User.#transformFullUserProfile(data))

    return this
  }

  /**
   * Fetches the user's profile using a `getFullUserProfile` query and updates the user's data
   * 
   * @param client Optional client to use for the request
   */
  async update(client = new KhanClient()) {
    if (!this.kaid && !this.username) throw new Error('User does not have a KAID/username')

    const user = await client.getUser(this.kaid ?? this.username)
    if (user) this.copy(user)

    return this
  }
}
