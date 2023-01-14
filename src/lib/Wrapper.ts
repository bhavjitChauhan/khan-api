import Client from '../Client'
import { RecursivePartial } from '../utils/types'

/**
 * The base class for all abstracted classes
 *
 * @remarks
 * This class is used to wrap the API schema into a more user-friendly
 * interface.
 */
export abstract class Wrapper<Schema, Interface> {
  /**
   * The client that this base was fetched with.
   */
  client?: Client
  /**
   * The raw base schema data
   *
   * @remarks
   * Only set if the base was created from a user schema.
   */
  rawData?: RecursivePartial<Schema>

  /**
   * Transforms a API schema into an abstracted interface
   *
   * @param schema The schema to transform
   */
  // Why can't this be static? Guess we'll find out in 2030...
  // https://github.com/microsoft/TypeScript/issues/34516
  abstract transformSchema(schema: RecursivePartial<Schema>): Interface

  /**
   * Creates a new class instance
   */
  constructor(data?: Interface)
  constructor(client: Client, data?: Interface)
  constructor(clientOrData: Client, data?: Interface) {
    if (clientOrData instanceof Client) this.client = clientOrData
    else data ??= clientOrData

    if (data) this.copy(data)

    return this
  }

  /**
   * Updates data into the class
   *
   * @param data The data to copy from
   * @returns The class instance
   */
  copy(data: Interface) {
    Object.assign(this, data)

    return this
  }

  /**
   * Updates data from a schema into the instance
   *
   * @param schema The schema to copy from
   * @returns The class instance
   */
  copyFromSchema(schema: RecursivePartial<Schema>) {
    return this.copy(this.transformSchema(schema))
  }

  /**
   * Gets and updates the instance's data
   *
   * @param client The API client to use
   */
  abstract get(client?: Client): Promise<this>
}
