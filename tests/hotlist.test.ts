import { Client, Program } from '../src'

describe('hotlist', () => {
  test('Fetches hotlist programs', async () => {
    const client = new Client()
    const programs = (await client.getHotlistPrograms().next()).value
    expect(programs).not.toBeUndefined()
    expect(Array.isArray(programs)).toBe(true)
    expect(programs?.length).toBeGreaterThan(0)
    if (programs) {
      programs.forEach((program) => expect(program).toBeInstanceOf(Program))
    }
  })
})
