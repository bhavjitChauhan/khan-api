import * as dotenv from 'dotenv'
dotenv.config()
if (
  typeof process.env.KHAN_IDENTIFIER !== 'string' ||
  typeof process.env.KHAN_PASSWORD !== 'string'
)
  throw new Error(
    'Missing KHAN_IDENTIFIER and/or KHAN_PASSWORD environment variables'
  )

import { KhanClient } from '../src/index'

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
