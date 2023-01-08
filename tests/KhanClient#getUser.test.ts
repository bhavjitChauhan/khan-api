import { KhanClient } from '../src/index'
import User from '../src/User'

describe('KhanClient#getUser', () => {
  test('Fetches profile given KAID', async () => {
    const client = new KhanClient()

    const user = await client.getUser(process.env.KHAN_KAID)
    expect(user).toBeInstanceOf(User)
    expect(user?.rawData).not.toBeNull()
  })

  test('Fetches profile given username', async () => {
    const client = new KhanClient()

    const user = await client.getUser(process.env.KHAN_USERNAME)
    expect(user).toBeInstanceOf(User)
    expect(user?.rawData).not.toBeNull()
  })

  test('Fetches own profile iff authenticated', async () => {
    const client = new KhanClient()
    await expect(client.getUser()).rejects.toThrowError()

    await client.login(process.env.KHAN_IDENTIFIER, process.env.KHAN_PASSWORD)
    const user = await client.getUser()
    expect(user).toBeInstanceOf(User)
    expect(user?.rawData).not.toBeNull()
    expect(user?.self).toBe(true)
  })
})
