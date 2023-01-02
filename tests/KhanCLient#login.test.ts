import { KhanClient } from '../src/index'

describe('KhanClient#login', () => {
  test('Logs in successfully with valid credentials', async () => {
    const client = new KhanClient()
    await client.login(process.env.KHAN_IDENTIFIER, process.env.KHAN_PASSWORD)

    expect(client.kaid).not.toBeNull()
    expect(client.authenticated).toBe(true)
  })

  test('Throws error with invalid credentials', async () => {
    const client = new KhanClient()
    await expect(client.login('invalid', 'invalid')).rejects.toThrowError()
  })

  test('Throws error with missing credentials', async () => {
    const client = new KhanClient()
    await expect(client.login()).rejects.toThrowError()
  })
})
