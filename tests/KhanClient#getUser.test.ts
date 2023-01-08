import { Client } from '../src/index'
import User from '../src/User'

describe('Client#getUser', () => {
  test('Fetches profile given KAID', async () => {
    const client = new Client()

    const user = await client.getUser(process.env.KHAN_KAID)
    expect(user).toBeInstanceOf(User)
    expect(user?.rawData).not.toBeNull()
  })

  test('Fetches profile given username', async () => {
    const client = new Client()

    const user = await client.getUser(process.env.KHAN_USERNAME)
    expect(user).toBeInstanceOf(User)
    expect(user?.rawData).not.toBeNull()
  })

  test('Fetches own profile iff authenticated', async () => {
    const client = new Client()
    await expect(client.getUser()).rejects.toThrowError()

    await client.login(process.env.KHAN_IDENTIFIER, process.env.KHAN_PASSWORD)
    const user = await client.getUser()
    expect(user).toBeInstanceOf(User)
    expect(user?.rawData).not.toBeNull()
    expect(user?.self).toBe(true)
  })
})
