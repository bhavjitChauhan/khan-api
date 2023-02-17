const { Client } = require("@bhavjit/khan-api")

const client = new Client()

// Get info about a user
const user = await client.getUser('bhavjitChauhan')
console.log(user)

// Get info about a program
const program = await client.getProgram(6058668928843776)
console.log(program)
