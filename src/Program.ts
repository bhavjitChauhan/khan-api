import KhanClient from './KhanClient'
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
  readonly updated?: Date
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

export class Program implements IProgram {
  client?: KhanClient
  rawData?: RecursivePartial<ProgramSchema>

  readonly id?: number
  readonly title?: string
  readonly author?: User
  readonly created?: Date
  readonly updated?: Date
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
  readonly votes?: number
  readonly spinOffCount?: number
  readonly code?: string
  readonly hidden?: boolean
  readonly type?: Program.Type

  /**
   * The original program that this program is a spin-off of.
   */
  readonly origin?: Program | null
  readonly key?: string
  readonly thumbnailID?: number
  readonly description?: string | null
  readonly deleted?: boolean

  readonly flaggedBySelf?: boolean
  readonly votedBySelf?: boolean

  static #transformProgramQuery(schema: RecursivePartial<ProgramSchema>) {
    return {
      id: schema.id ? parseInt(schema.id, 10) : undefined,
      title: schema.translatedTitle,
      author: schema.creatorProfile
        ? User.fromUserSchema({
            isChild: schema.byChild ?? undefined,
            ...schema.creatorProfile,
          })
        : undefined,
      created: schema.created ? new Date(schema.created) : undefined,
      updated: schema.revision?.created
        ? new Date(schema.revision.created)
        : undefined,
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
    const program = new Program(Program.#transformProgramQuery(schema))
    program.rawData = schema

    return program
  }

  constructor(program: IProgram) {
    if (program) return this.copy(program)
    return this
  }

  copy(program: IProgram) {
    Object.assign(this, program)

    return this
  }

  copyFromProgramSchema(schema: RecursivePartial<ProgramSchema>) {
    return this.copy(Program.#transformProgramQuery(schema))
  }

  async fetch(client = new KhanClient()) {
    if (!this.id) throw new Error('Program is missing ID')

    const program = await client.getProgram(this.id)
    if (!program) throw new Error('Program not found')

    return this.copy(program)
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
