import { Client } from '../src/'
import { KHAN_KAID, KHAN_USERNAME } from './constants'

describe('getAvatar', () => {
  test('Fetches avatar given KAID', async () => {
    const client = new Client()

    const url = await client.getAvatar(KHAN_KAID)
    expect(typeof url).toBe('string')
  })

  test('Fetches avatar given username', async () => {
    const client = new Client()

    const url = await client.getAvatar(KHAN_USERNAME)
    expect(typeof url).toBe('string')
  })

  test('Fetches profile given email', async () => {
    const client = new Client()

    const url = await client.getAvatar(process.env.KHAN_EMAIL)
    expect(typeof url).toBe('string')
  })

  test('Fetches own profile iff authenticated', async () => {
    const client = new Client()
    await expect(client.getUser()).rejects.toThrowError()

    await client.login(process.env.KHAN_EMAIL, process.env.KHAN_PASSWORD)
    const url = await client.getAvatar()
    expect(typeof url).toBe('string')
  })

  test('Throws error if user does not exist', async () => {
    const client = new Client()

    await expect(
      client.getAvatar('kaid_12345678901234567890')
    ).rejects.toThrowError()
    await expect(client.getAvatar(' ')).rejects.toThrowError()
  })
})
