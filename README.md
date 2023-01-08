# Khan API

⚠️ **This project is currently in beta and breaking changes may be released without warning!**

A Khan Academy internal API client and wrapper for Node.js and the browser.

## Install

### ESM

```js
import * as KhanAPI from 'https://cdn.jsdelivr.net/npm/@bhavjit/khan-api/dist/esm/khan-api.min.js'
```

### Node.js

#### Yarn

```bash
yarn add @bhavjit/khan-api
```

#### NPM

```bash
npm i @bhavjit/khan-api
```

### Web

Remember that Khan Academy's CORS policy will block requests not originating from their website.

```html
<script src="https://cdn.jsdelivr.net/npm/@bhavjit/khan-api/dist/khan-api.min.js">
```

## Usage

```js
const client = new Client()

// Get info about a user
const user = await client.getUser('sal')
console.log(user)

// Get info about a program
const program = await client.getProgram(6058668928843776)
console.log(program)
```
