import { Client } from '../src/index'
import Program from '../src/Program'
import { KHAN_PROGRAM_ID, KHAN_PROGRAM_KEY } from './constants'

describe('getProgram', () => {
  test('Fetches program given program ID string', async () => {
    const client = new Client()

    const program = await client.getProgram(KHAN_PROGRAM_ID)
    expect(program).toBeInstanceOf(Program)
    expect(program?.rawData).not.toBeNull()
  })

  test('Fetches program given program ID number', async () => {
    const client = new Client()

    const program = await client.getProgram(KHAN_PROGRAM_ID)
    expect(program).toBeInstanceOf(Program)
    expect(program?.rawData).not.toBeNull()
  })

  test('Fetches program given program URL', async () => {
    const client = new Client()

    const program = await client.getProgram(
      `https://www.khanacademy.org/computer-programming/-/${KHAN_PROGRAM_ID}`
    )
    expect(program).toBeInstanceOf(Program)
    expect(program?.rawData).not.toBeNull()
  })

  test('Fetches program given program key', async () => {
    const client = new Client()

    const program = await client.getProgram(KHAN_PROGRAM_KEY)
    expect(program).toBeInstanceOf(Program)
    expect(program?.rawData).not.toBeNull()
  })

  test('Throws error if invalid program ID', async () => {
    const client = new Client()

    await expect(client.getProgram(0)).rejects.toThrowError()
  })

  test('Throws error if invalid program URL', async () => {
    const client = new Client()

    await expect(
      client.getProgram('https://www.khanacademy.org/cs/-/0')
    ).rejects.toThrowError()
  })

  test('Throws error if program does not exist', async () => {
    const client = new Client()

    await expect(client.getProgram(123456789)).rejects.toThrowError()
  })
})
