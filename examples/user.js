const { Client } = require('@bhavjit/khan-api')

const client = new Client()

// Get info about a user
const user = await client.getUser('bhavjitChauhan')
console.log(user)
