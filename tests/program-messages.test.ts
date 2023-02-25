import { Program, Question, TipsAndThanks } from '../src'
import { KHAN_PROGRAM_ID } from './constants'

describe('program messages', () => {
  test('Fetches program Tips and Thanks messages', async () => {
    const program = Program.fromIdentifier(KHAN_PROGRAM_ID)
    await program.getAllTipsAndThanks()
    const messages = program.tipsAndThanks
    expect(messages).not.toBeUndefined()
    expect(Array.isArray(messages)).toBe(true)
    expect(messages?.length).toBeGreaterThan(0)
    if (messages)
      messages.forEach((message) =>
        expect(message).toBeInstanceOf(TipsAndThanks)
      )
  })

  test('Fetches program Question messages', async () => {
    const program = Program.fromIdentifier(KHAN_PROGRAM_ID)
    await program.getAllQuestions()
    const messages = program.questions
    expect(messages).not.toBeUndefined()
    expect(Array.isArray(messages)).toBe(true)
    expect(messages?.length).toBeGreaterThan(0)
    if (messages)
      messages.forEach((message) => expect(message).toBeInstanceOf(Question))
  })

  test('Fetches program Help Request messages', async () => {
    const program = Program.fromIdentifier(KHAN_PROGRAM_ID)
    await program.getAllHelpRequests()
    const messages = program.helpRequests
    expect(messages).not.toBeUndefined()
    expect(Array.isArray(messages)).toBe(true)
    expect(messages?.length).toBeGreaterThan(0)
    if (messages)
      messages.forEach((message) => expect(message).toBeInstanceOf(Question))
  })
})
