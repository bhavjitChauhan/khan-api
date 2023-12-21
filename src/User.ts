import Client from './Client'
import Wrapper from './lib/Wrapper'
import Program from './Program'
import { BadgeCategory } from './types/badges'
import { ListProgramSortOrder, UserAccessLevel } from './types/enums'
import { UserSchema } from './types/schema'
import { AvatarURL, Email, Kaid, UserURL } from './types/strings'
import { UserStatistics } from './types/user-statistics'
import {
  GoogleIDRegex,
  isEmail,
  isGoogleID,
  isKaid,
  isQualarooID,
  QualarooIDRegex,
} from './utils/regexes'
import { RecursivePartial } from './utils/types'

// There has to be a solution that doesn't require duplicating properties
// Update: there is, but it's not worth it
// Another update: what was it???
export interface IUser {
  readonly self?: boolean
  readonly kaid?: Kaid | null
  readonly username?: string | null
  readonly nickname?: string
  readonly email?: string
  readonly emails?: string[]
  readonly avatar?: AvatarURL
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

  readonly hasAccessToAIGuideDev?: boolean
  readonly hasAccessToAIGuideTeacher?: boolean
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

  readonly accessLevel?: UserAccessLevel

  readonly statistics?: UserStatistics
  readonly programs?: Program[]
}

export default class User extends Wrapper<UserSchema, IUser> implements IUser {
  /**
   * Whether the user is the currently authenticated user.
   */
  readonly self?: boolean
  /**
   * The user's KAID.
   */
  readonly kaid?: Kaid | null
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
   * The user's avatar URL.
   */
  readonly avatar?: AvatarURL
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

  readonly hasAccessToAIGuideDev?: boolean
  readonly hasAccessToAIGuideTeacher?: boolean
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
  readonly formalTeacher?: boolean
  readonly curator?: boolean
  readonly publisher?: boolean
  readonly creator?: boolean
  readonly phantom?: boolean
  readonly midsignupPhantom?: boolean

  readonly accessLevel?: UserAccessLevel

  readonly statistics?: UserStatistics
  readonly programs?: Program[]

  get url() {
    if (!this.kaid) return null
    return `https://www.khanacademy.org/profile/${
      this.username ?? this.kaid
    }` as UserURL
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
  static fromSchema(schema: RecursivePartial<UserSchema>) {
    const user = new User()
    user.copyFromSchema(schema)
    user.rawData = schema

    return user
  }

  static fromIdentifier(identifier: Kaid | string | Email) {
    const user = new User({
      kaid: isKaid(identifier) ? identifier : undefined,
      username:
        !isKaid(identifier) && !isEmail(identifier) ? identifier : undefined,
      email: isEmail(identifier) ? identifier : undefined,
    })

    return user
  }

  #resolveIdentifier(): Kaid | string | Email {
    if (this.kaid) return this.kaid
    if (this.username) return this.username
    if (this.email) return this.email

    throw new Error('User has no identifier')
  }

  transformSchema(schema: RecursivePartial<UserSchema>) {
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
      hasAccessToAIGuideDev: schema.hasAccessToAIGuideDev ?? undefined,
      hasAccessToAIGuideTeacher: schema.hasAccessToAIGuideTeacher ?? undefined,
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
      self: schema.isSelf ?? undefined,
      teacher: schema.isTeacher ?? undefined,
      formalTeacher: schema.isFormalTeacher ?? undefined,
      joined: schema.joined ? new Date(schema.joined) : undefined,
      kaid:
        typeof schema.kaid === 'string' && isKaid(schema.kaid)
          ? schema.kaid
          : typeof schema.kaid === 'string'
            ? null
            : undefined,
      key: schema.key ?? undefined,
      newNotifications: schema.newNotificationCount ?? undefined,
      nickname: schema.nickname ?? undefined,
      points: schema.points ?? undefined,
      accessLevel: schema.profile?.accessLevel,
      googleID:
        typeof schema.userId === 'string' && isGoogleID(schema.userId)
          ? schema.userId.match(GoogleIDRegex)![1]
          : typeof schema.userId === 'string'
            ? null
            : undefined,
      qualarooID:
        typeof schema.qualarooId === 'string' && isQualarooID(schema.qualarooId)
          ? schema.qualarooId.match(QualarooIDRegex)![1]
          : typeof schema.qualarooId === 'string'
            ? null
            : undefined,
      username:
        schema.username ??
        (schema.profileRoot
          ? !isKaid(schema.profileRoot.slice(9, -1))
            ? schema.profileRoot.slice(9, -1)
            : null
          : schema.username),
    }
  }

  /**
   * Fetches the user's profile using a `getFullUserProfile` query and updates the user's data
   *
   * @param client Optional client to use for the request
   *
   * @see {@link Client.getUser}
   */
  async get(client = this.client ?? new Client()) {
    const user = await client.getUser(this.#resolveIdentifier())

    return this.copy(user)
  }

  /**
   * @see {@link Client!.getUserAvatar}
   */
  async getAvatar(client = this.client ?? new Client()) {
    const url = await client.getUserAvatar(this.#resolveIdentifier())
    this.copy({ avatar: url })

    return url
  }

  /**
   * @see {@link Client.getUserStatistics}
   */
  async getStatistics(client = this.client ?? new Client()) {
    const statistics = await client.getUserStatistics(this.#resolveIdentifier())

    return this.copy({ statistics })
  }

  /**
   * @see {@link Client.getUserPrograms}
   */
  async *getPrograms(
    client = this.client ?? new Client(),
    sort?: ListProgramSortOrder,
    limit?: number
  ) {
    for await (const programs of client.getUserPrograms(
      this.#resolveIdentifier(),
      sort,
      limit
    )) {
      if (!this.programs) this.copy({ programs: [] })
      this.programs?.push(...programs)
      yield programs
    }

    return this
  }

  /**
   * @see {@link Client.getAllUserPrograms}
   */
  async getAllPrograms(
    client = this.client ?? new Client(),
    sort?: ListProgramSortOrder,
    limit?: number
  ) {
    const programs = await client.getAllUserPrograms(
      this.#resolveIdentifier(),
      sort,
      limit
    )

    return this.copy({ programs })
  }

  /**
   * Checks if two users are the same
   *
   * @param user The user to compare to
   */
  is(user: User | IUser) {
    if (
      !(this.kaid && user.kaid) &&
      !(this.email && user.email) &&
      !(this.key && user.key) &&
      !(this.username && user.username) &&
      !(this.googleID && user.googleID) &&
      !(this.qualarooID && user.qualarooID)
    ) {
      console.warn("Users don't have any identifiers that can be compared")
      return false
    }
    return (
      (this.kaid && user.kaid && this.kaid === user.kaid) ||
      (this.email && user.email && this.email === user.email) ||
      (this.key && user.key && this.key === user.key) ||
      (this.username && user.username && this.username === user.username) ||
      (this.googleID && user.googleID && this.googleID === user.googleID) ||
      (this.qualarooID &&
        user.qualarooID &&
        this.qualarooID === user.qualarooID) ||
      false
    )
  }
}
