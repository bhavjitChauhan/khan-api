import { GetFullUserProfile } from './queries/getFullUserProfile'
import { BadgeCategory } from './types/badges'
import { GoogleIDRegex, QualariiIDRegex } from './utils/regexes'

interface IUser {
  readonly self?: boolean
  readonly kaid?: string
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

  readonly accessLevel?: GetFullUserProfile.AccessLevel
}

export default class User implements IUser {
  rawFullUserProfile?: GetFullUserProfile.Data

  readonly self?: boolean
  readonly kaid?: string
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

  readonly accessLevel?: GetFullUserProfile.AccessLevel

  static fromFullUserProfile(data: GetFullUserProfile.Data) {
    if (!data.user) return new User()

    const user = new User({
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
    })

    user.rawFullUserProfile = data

    return user
  }

  constructor(user?: IUser) {
    Object.assign(this, user)
  }
}
