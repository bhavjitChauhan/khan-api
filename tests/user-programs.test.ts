import { Program, User } from '../src'
import { KHAN_KAID } from './constants'

describe('user programs', () => {
  test('Fetches user programs', async () => {
    const user = await User.fromIdentifier(KHAN_KAID)
    await user.getAllPrograms()
    const programs = user.programs
    expect(programs).not.toBeUndefined()
    expect(Array.isArray(programs)).toBe(true)
    expect(programs?.length).toBeGreaterThan(0)
    if (programs) {
      programs.forEach((program) => expect(program).toBeInstanceOf(Program))
    }
  })
})
