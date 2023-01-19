import { Client } from '../src/index'

describe('login', () => {
  test('Logs in successfully with valid credentials', async () => {
    const client = new Client()
    await client.login(process.env.KHAN_EMAIL, process.env.KHAN_PASSWORD)

    expect(client.kaid).not.toBeNull()
    expect(client.authenticated).toBe(true)
  })

  test('Logs in successfully with KAID and valid credentials', async () => {
    const client = new Client()
    await client.login(process.env.KHAN_KAID, process.env.KHAN_PASSWORD)

    expect(client.kaid).not.toBeNull()
    expect(client.authenticated).toBe(true)
  })

  test('Throws error with invalid credentials', async () => {
    const client = new Client()
    await expect(client.login('invalid', 'invalid')).rejects.toThrowError()
  })

  test('Throws error with missing credentials', async () => {
    const client = new Client()
    await expect(client.login()).rejects.toThrowError()
  })
})
