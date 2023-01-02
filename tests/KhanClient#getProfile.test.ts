import { KhanClient } from '../src/index'

describe('KhanClient#getProfile', () => {
  test('Fetches profile given KAID', async () => {
    const client = new KhanClient()

    const profile = await client.getProfile(process.env.KHAN_KAID)
    expect(profile).not.toBeNull()
  })

  test('Fetches profile given username', async () => {
    const client = new KhanClient()

    const profile = await client.getProfile(process.env.KHAN_USERNAME)
    expect(profile).not.toBeNull()
  })

  test('Fetches own profile iff authenticated', async () => {
    const client = new KhanClient()
    await expect(client.getProfile()).rejects.toThrowError()

    await client.login(process.env.KHAN_IDENTIFIER, process.env.KHAN_PASSWORD)
    const profile = await client.getProfile()
    expect(profile).not.toBeNull()
    expect(profile?.kaid).toBe(client.kaid)
  })
})
