import { User } from '../src'
import { UserStatistics } from '../src/types/user-statistics'
import { KHAN_KAID } from './constants'

describe('user statistics', () => {
  test('Fetches user statistics', async () => {
    const user = User.fromIdentifier(KHAN_KAID)
    await user.getStatistics()
    const statistics = user.statistics
    expect(statistics).not.toBeUndefined()
    for (const key in statistics) {
      expect(statistics[key as keyof UserStatistics]).toBeGreaterThanOrEqual(0)
    }
  })
})
