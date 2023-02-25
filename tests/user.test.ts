import { Client, User } from '../src'
import { KHAN_KAID, KHAN_USERNAME } from './constants'

describe('user', () => {
  test('Fetches profile given KAID', async () => {
    const client = new Client()

    const user = await client.getUser(KHAN_KAID)
    expect(user).toBeInstanceOf(User)
    expect(user?.rawData).not.toBeNull()
  })

  test('Fetches profile given username', async () => {
    const client = new Client()

    const user = await client.getUser(KHAN_USERNAME)
    expect(user).toBeInstanceOf(User)
    expect(user?.rawData).not.toBeNull()
  })

  test('Fetches profile given email', async () => {
    const client = new Client()

    const user = await client.getUser(process.env.KHAN_EMAIL)
    expect(user).toBeInstanceOf(User)
    expect(user?.rawData).not.toBeNull()
  })

  test('Fetches own profile iff authenticated', async () => {
    const client = new Client()
    await expect(client.getUser()).rejects.toThrowError()

    await client.login(process.env.KHAN_EMAIL, process.env.KHAN_PASSWORD)
    const user = await client.getUser()
    expect(user).toBeInstanceOf(User)
    expect(user?.rawData).not.toBeNull()
    expect(user?.self).toBe(true)
  })

  test('Throws error if user does not exist', async () => {
    const client = new Client()

    await expect(
      client.getUser('kaid_1234567890123456789')
    ).rejects.toThrowError()
  })
})
