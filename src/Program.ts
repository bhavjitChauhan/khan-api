import Client from './Client'
import { Wrapper } from './lib/Wrapper'
import { ProgramEditorType } from './types/enums'
import { ProgramSchema } from './types/schema'
import User from './User'
import { ProgramImagePathRegex, ProgramURLRegex } from './utils/regexes'
import { RecursivePartial } from './utils/types'

interface IProgram {
  readonly id?: number
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
  readonly type?: Program.Type

  readonly origin?: Program | null
  readonly key?: string
  readonly thumbnailID?: number
  readonly description?: string | null
  readonly deleted?: boolean
  readonly category?: string

  readonly flaggedBySelf?: boolean
  readonly votedBySelf?: boolean
}

export class Program
  extends Wrapper<ProgramSchema, IProgram>
  implements IProgram
{
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
  readonly type?: Program.Type

  /**
   * The original program that this program is a spin-off of.
   */
  readonly origin?: Program | null
  readonly key?: string
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
  readonly flaggedBySelf?: boolean
  /**
   * Whether the program has been voted by the client's authenticated user.
   *
   * @see {@link client}
   */
  readonly votedBySelf?: boolean

  get spinoff() {
    return !!this.origin
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

  static #transformSchema(schema: RecursivePartial<ProgramSchema>) {
    return {
      id: schema.id ? parseInt(schema.id, 10) : undefined,
      title: schema.translatedTitle,
      author: schema.creatorProfile
        ? User.fromUserSchema({
            isChild: schema.byChild ?? undefined,
            ...schema.creatorProfile,
          })
        : undefined,
      created: (() => {
        if (!schema.created) return undefined
        // Some very old programs' updated date is before their created date
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
      spinOffCount: schema.spinoffCount,
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

      origin: schema.originScratchpad
        ? // Resist the urge to cast as `ProgramSchema`
          new Program({
            id: parseInt(
              schema.originScratchpad.url.match(ProgramURLRegex)![1],
              10
            ),
            title: schema.originScratchpad.translatedTitle,
            deleted: schema.originScratchpad.deleted,
          })
        : schema.originScratchpad,
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

      flaggedBySelf: schema.flaggedByUser,
      votedBySelf: schema.upVoted,
    }
  }

  static fromProgramSchema(schema: RecursivePartial<ProgramSchema>) {
    const program = new Program(Program.#transformSchema(schema))
    program.rawData = schema

    return program
  }

  transformSchema(schema: RecursivePartial<ProgramSchema>) {
    return Program.#transformSchema(schema)
  }

  async get(client = this.client ?? new Client()) {
    if (!this.id) throw new Error('Program is missing ID')

    const data = await client.getProgram(this.id)

    return this.copy(data)
  }
}
export namespace Program {
  export enum Type {
    ProcessingJS = 'ProcessingJS',
    HTML = 'HTML',
    SQL = 'SQL',
    Other = 'Other',
  }
}

export default Program
