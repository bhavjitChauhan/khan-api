import Client from './Client'
import Question from './lib/messages/Question'
import TipsAndThanks from './lib/messages/TipsAndThanks'
import Wrapper from './lib/Wrapper'
import { FeedbackSort, ProgramEditorType } from './types/enums'
import { ProgramSchema, UserSchema } from './types/schema'
import { ProgramIDNumber, ProgramKey } from './types/strings'
import User from './User'
import {
  isProgramKey,
  ProgramImagePathRegex,
  ProgramURLRegex,
} from './utils/regexes'
import { resolveProgramID } from './utils/resolvers'
import { RecursivePartial } from './utils/types'

/**
 * @raw {@link ProgramEditorType}
 */
export enum ProgramType {
  ProcessingJS = 'pjs',
  HTML = 'webpage',
  SQL = 'ace_sql',
  Other = '',
}

export interface IProgram {
  readonly id?: ProgramIDNumber
  readonly title?: string
  readonly author?: User
  readonly created?: Date
  readonly updated?: Date | null
  readonly width?: number
  readonly height?: number
  readonly votes?: number
  readonly spinOffCount?: number
  readonly hidden?: boolean
  readonly code?: string
  readonly type?: ProgramType

  readonly origin?: Program | null
  readonly key?: ProgramKey
  readonly thumbnailID?: number
  readonly description?: string | null
  readonly deleted?: boolean
  readonly category?: string

  readonly selfFlagged?: boolean
  readonly selfVoted?: boolean

  readonly tipsAndThanks?: TipsAndThanks[]
  readonly questions?: Question[]
  readonly helpRequests?: Question[]
}

export default class Program
  extends Wrapper<ProgramSchema<UserSchema>, IProgram>
  implements IProgram
{
  /**
   * Aliases for the program types.
   *
   * @raw {@link ProgramRevisionSchema.editorType}
   */
  static readonly Type = ProgramType

  /**
   * The ID of the program.
   */
  readonly id?: number
  /**
   * The title of the program.
   */
  readonly title?: string
  /**
   * The author of the program.
   */
  readonly author?: User
  /**
   * The date the program was created.
   */
  readonly created?: Date
  /**
   * The date the program was last updated.
   *
   * @description
   * Set to `null` if the program has never been updated.
   */
  readonly updated?: Date | null
  /**
   * The height of the program in pixels.
   *
   * @description
   * Constrained between 400 and 600. May be any value in between.
   */
  readonly width?: number
  /**
   * The height of the program in pixels.
   *
   * @description
   * Constrained between 400 and 600. May be any value in between.
   */
  readonly height?: number
  /**
   * The number of votes the program has received.
   *
   * @description
   * Note that a program has 1 vote on creation.
   */
  readonly votes?: number
  /**
   * The number of spin-offs the program has.
   */
  readonly spinOffCount?: number
  /**
   * The code of the program.
   */
  readonly code?: string
  /**
   * Whether the program is hidden from the hotlist.
   */
  readonly hidden?: boolean
  /**
   * The type of program.
   */
  readonly type?: ProgramType

  /**
   * The original program that this program is a spin-off of.
   */
  readonly origin?: Program | null
  readonly key?: ProgramKey
  /**
   * The ID of the latest thumbnail image of the program.
   *
   * @description
   * Previous thumbnails are not guaranteed to be available.
   */
  readonly thumbnailID?: number
  /**
   * The description of the program. Set to `null` if the description is empty string.
   */
  readonly description?: string | null
  /**
   * Whether the program has been deleted.
   */
  readonly deleted?: boolean

  /**
   * Whether the program has been flagged by the client's authenticated user.
   *
   * @see {@link client}
   */
  readonly selfFlagged?: boolean
  /**
   * Whether the program has been voted by the client's authenticated user.
   *
   * @see {@link client}
   */
  readonly selfVoted?: boolean

  readonly tipsAndThanks?: TipsAndThanks[]
  readonly questions?: Question[]
  readonly helpRequests?: Question[]

  get spinoff() {
    return typeof this.origin !== 'undefined' ? !!this.origin : null
  }

  /**
   * Number of lines of code in the program.
   */
  get lines() {
    if (this.code) return this.code.split('\n').length
    return null
  }

  /**
   * URL of the program.
   */
  get url() {
    if (this.rawData?.url)
      return `https://www.khanacademy.org${this.rawData.url}`
    if (this.id)
      return `https://www.khanacademy.org/computer-programming/-/${this.id}`
    return null
  }

  /**
   * Short URL of the program.
   */
  get shortUrl() {
    if (this.id) return `https://khanacademy.org/cs/-/${this.id}`
    return null
  }

  /**
   * Thumbnail image URL of the program.
   *
   * @description
   * To get the latest thumbnail image, use 'latest' as the thumbnail ID instead.
   */
  get thumbnailUrl() {
    if (this.rawData?.imagePath)
      return `https://www.khanacademy.org${this.rawData.imagePath}`
    if (this.thumbnailID && this.url)
      return `${this.url}/${this.thumbnailID}.png`
    return null
  }

  static fromSchema(schema: RecursivePartial<ProgramSchema<UserSchema>>) {
    const program = new Program()
    program.copyFromSchema(schema)
    program.rawData = schema

    return program
  }

  static fromIdentifier(identifier: Parameters<typeof resolveProgramID>[0]) {
    const id = resolveProgramID(identifier)
    const program = new Program({
      id,
      key:
        typeof identifier === 'string' && isProgramKey(identifier)
          ? identifier
          : undefined,
    })
    return program
  }

  #resolveIdentifier() {
    if (this.id) return this.id
    if (this.key) return this.key

    throw new Error('Program has no identifier')
  }

  transformSchema(schema: RecursivePartial<ProgramSchema<UserSchema>>) {
    return {
      id: schema.id ? parseInt(schema.id, 10) : undefined,
      title: schema.translatedTitle,
      author:
        schema.authorKaid || schema.authorNickname || schema.creatorProfile
          ? User.fromSchema({
              kaid: schema.authorKaid,
              nickname: schema.authorNickname,
              isChild: schema.byChild ?? undefined,
              ...schema.creatorProfile,
            })
          : undefined,
      created: (() => {
        if (!schema.created) return undefined
        // Some very old programs' updated date is before their created date (e.g. 981866281)
        if (schema.revision?.created) {
          return new Date(
            Math.min(
              new Date(schema.created).valueOf(),
              new Date(schema.revision.created).valueOf()
            )
          )
        }
        return new Date(schema.created)
      })(),
      updated: (() => {
        if (!schema.revision?.created) return undefined
        if (schema.created && schema.revision.created === schema.created)
          return null
        return new Date(schema.revision.created)
      })(),
      width: schema.width,
      height: schema.height,
      votes: schema.sumVotesIncremented,
      spinOffCount: schema.spinoffCount ?? schema.displayableSpinoffCount,
      code: schema.revision?.code,
      hidden: schema.hideFromHotlist,
      type: (() => {
        switch (schema.revision?.editorType) {
          case ProgramEditorType.pjs:
            return Program.Type.ProcessingJS
          case ProgramEditorType.webpage:
            return Program.Type.HTML
          case ProgramEditorType.ace_sql:
            return Program.Type.SQL
          default:
            return Program.Type.Other
        }
      })(),

      origin: (() => {
        if (!schema.originScratchpad) return schema.originScratchpad
        const id = (
          'https://khanacademy.org' + schema.originScratchpad.url
        ).match(ProgramURLRegex)?.[1]
        if (!id) {
          console.error(
            `Failed to parse origin program ID from URL: ${schema.originScratchpad.url}`
          )
          return undefined
        }
        // Resist the urge to cast as `ProgramSchema`
        return new Program({
          id: parseInt(id, 10),
          title: schema.originScratchpad.translatedTitle,
          deleted: schema.originScratchpad.deleted,
        })
      })(),
      key: schema.key,
      thumbnailID:
        schema.imagePath && ProgramImagePathRegex.test(schema.imagePath)
          ? parseInt(schema.imagePath.match(ProgramImagePathRegex)![1], 10)
          : undefined,
      description:
        typeof schema.description === 'string'
          ? schema.description !== ''
            ? schema.description
            : null
          : schema.description,
      deleted: schema.deleted ?? undefined,

      selfFlagged: schema.flaggedByUser,
      selfVoted: schema.upVoted,
    }
  }

  async get(client = this.client ?? new Client()) {
    if (!this.id && !this.key) throw new Error('Program is missing ID and key')

    const data = await client.getProgram(this.id ?? this.key!)

    return this.copy(data)
  }

  async *getTipsAndThanks(
    client = this.client ?? new Client(),
    sort?: FeedbackSort
  ) {
    for await (const messages of client.getProgramTipsAndThanks(
      this.#resolveIdentifier(),
      sort
    )) {
      if (!this.tipsAndThanks) this.copy({ tipsAndThanks: [] })
      messages.forEach((message) => this.tipsAndThanks?.push(message))
      yield messages
    }

    return this
  }

  async getAllTipsAndThanks(
    client = this.client ?? new Client(),
    sort?: FeedbackSort
  ) {
    const messages = await client.getAllProgramTipsAndThanks(
      this.#resolveIdentifier(),
      sort
    )

    return this.copy({ tipsAndThanks: messages })
  }

  async *getQuestions(
    client = this.client ?? new Client(),
    sort?: FeedbackSort
  ) {
    for await (const messages of client.getProgramQuestions(
      this.#resolveIdentifier(),
      sort
    )) {
      if (!this.questions) this.copy({ questions: [] })
      messages.forEach((message) => this.questions!.push(message))
      yield messages
    }

    return this
  }

  async getAllQuestions(
    client = this.client ?? new Client(),
    sort?: FeedbackSort
  ) {
    const messages = await client.getAllProgramQuestions(
      this.#resolveIdentifier(),
      sort
    )

    return this.copy({ questions: messages })
  }

  async *getHelpRequests(
    client = this.client ?? new Client(),
    sort?: FeedbackSort
  ) {
    for await (const messages of client.getProgramHelpRequests(
      this.#resolveIdentifier(),
      sort
    )) {
      if (!this.helpRequests) this.copy({ helpRequests: [] })
      messages.forEach((message) => this.helpRequests!.push(message))
      yield messages
    }

    return this
  }

  async getAllHelpRequests(
    client = this.client ?? new Client(),
    sort?: FeedbackSort
  ) {
    const messages = await client.getAllProgramHelpRequests(
      this.#resolveIdentifier(),
      sort
    )

    return this.copy({ helpRequests: messages })
  }

  is(program: IProgram) {
    if (!(this.id && program.id) && !(this.key && program.key)) {
      console.warn("Programs don't have any identifiers that can be compared")
      return false
    }
    return (
      (this.id && program.id && this.id === program.id) ||
      (this.key && program.key && this.key === program.key) ||
      false
    )
  }
}
