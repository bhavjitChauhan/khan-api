import { Answer, Client, Question, Reply, TipsAndThanks } from '../src/'
import Message from '../src/lib/messages/Message'
import {
  ANSWER_EXPAND_KEY,
  COMMENT_ENCRYPTED_KEY,
  COMMENT_EXPAND_KEY,
  QUESTION_EXPAND_KEY,
} from './constants'

describe('replies', () => {
  test('Fetches arbritary message replies given expand key', async () => {
    const message = await Message.fromIdentifier(COMMENT_EXPAND_KEY)
    await message.getAllReplies()
    const replies = message.replies
    expect(Array.isArray(replies)).toBe(true)
    expect(replies?.length).toBeGreaterThan(0)
    if (replies) replies.forEach((reply) => expect(reply).toBeInstanceOf(Reply))
  })

  test('Fetches Tips and Thanks replies given expand key', async () => {
    const message = await TipsAndThanks.fromIdentifier(COMMENT_EXPAND_KEY)
    await message.getAllReplies()
    const replies = message.replies
    expect(Array.isArray(replies)).toBe(true)
    expect(replies?.length).toBeGreaterThan(0)
    if (replies) replies.forEach((reply) => expect(reply).toBeInstanceOf(Reply))
  })

  test('Fetches Question replies given expand key', async () => {
    const message = await Question.fromIdentifier(QUESTION_EXPAND_KEY)
    await message.getAllReplies()
    const replies = message.replies
    expect(Array.isArray(replies)).toBe(true)
    expect(replies?.length).toBeGreaterThan(0)
    if (replies) replies.forEach((reply) => expect(reply).toBeInstanceOf(Reply))
  })

  test('Fetches Answer replies given expand key', async () => {
    const message = await Answer.fromIdentifier(ANSWER_EXPAND_KEY)
    await message.getAllReplies()
    const replies = message.replies
    expect(Array.isArray(replies)).toBe(true)
    expect(replies?.length).toBeGreaterThan(0)
    if (replies) replies.forEach((reply) => expect(reply).toBeInstanceOf(Reply))
  })

  test('Throws error if expand key does not exist', async () => {
    const client = new Client()

    await expect(
      client.getAllMessageReplies(`${COMMENT_EXPAND_KEY}!`)
    ).rejects.toThrowError()
  })

  test('Throws error if encrypted key does not exist', async () => {
    const client = new Client()

    await expect(
      client.getAllMessageReplies(`${COMMENT_ENCRYPTED_KEY}!`)
    ).rejects.toThrowError()
  })
})
