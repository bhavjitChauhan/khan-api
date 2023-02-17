import { Answer, Client, Question, Reply, TipsAndThanks } from '../src/index'
import Message from '../src/lib/messages/Message'
import {
  ANSWER_ENCRYPTED_KEY,
  ANSWER_EXPAND_KEY,
  COMMENT_ENCRYPTED_KEY,
  COMMENT_EXPAND_KEY,
  QUESTION_ENCRYPTED_KEY,
  QUESTION_EXPAND_KEY,
  REPLY_ENCRYPTED_KEY,
  REPLY_EXPAND_KEY,
} from './constants'

describe('getMessage', () => {
  test('Fetches arbritary message given expand key', async () => {
    const client = new Client()

    const message = await client.getMessage(COMMENT_EXPAND_KEY)
    expect(message).toBeInstanceOf(Message)
  })

  test('Fetches Tips and Thanks given expand key', async () => {
    const client = new Client()

    const message = await client.getTipsAndThanks(COMMENT_EXPAND_KEY)
    expect(message).toBeInstanceOf(TipsAndThanks)
  })

  test('Fetches question given expand key', async () => {
    const client = new Client()

    const message = await client.getQuestion(QUESTION_EXPAND_KEY)
    expect(message).toBeInstanceOf(Question)
  })

  test('Fetches answer given expand key', async () => {
    const client = new Client()

    const message = await client.getAnswer(ANSWER_EXPAND_KEY)
    expect(message).toBeInstanceOf(Answer)
  })

  test('Fetches reply given expand key', async () => {
    const client = new Client()

    const message = await client.getReply(REPLY_EXPAND_KEY)
    expect(message).toBeInstanceOf(Reply)
  })

  test('Fetches arbritary message given encrypted key', async () => {
    const client = new Client()

    const message = await client.getMessage(COMMENT_ENCRYPTED_KEY)
    expect(message).toBeInstanceOf(Message)
  })

  test('Fetches Tips and Thanks given encrypted key', async () => {
    const client = new Client()

    const message = await client.getTipsAndThanks(COMMENT_ENCRYPTED_KEY)
    expect(message).toBeInstanceOf(TipsAndThanks)
  })

  test('Fetches question given encrypted key', async () => {
    const client = new Client()

    const message = await client.getQuestion(QUESTION_ENCRYPTED_KEY)
    expect(message).toBeInstanceOf(Question)
  })

  test('Fetches answer given encrypted key', async () => {
    const client = new Client()

    const message = await client.getAnswer(ANSWER_ENCRYPTED_KEY)
    expect(message).toBeInstanceOf(Answer)
  })

  test('Fetches reply given encrypted key', async () => {
    const client = new Client()

    const message = await client.getReply(REPLY_ENCRYPTED_KEY)
    expect(message).toBeInstanceOf(Reply)
  })

  test('Throws error if expand key does not exist', async () => {
    const client = new Client()

    await expect(
      client.getMessage(`${COMMENT_EXPAND_KEY}!`)
    ).rejects.toThrowError()
  })

  test('Throws error if encrypted key does not exist', async () => {
    const client = new Client()

    await expect(
      client.getMessage(`${COMMENT_ENCRYPTED_KEY}!`)
    ).rejects.toThrowError()
  })
})
