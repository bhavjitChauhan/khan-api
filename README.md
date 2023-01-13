# Khan API

⚠️ **This project is currently in beta and breaking changes may be released without warning!**

![NPM version](https://img.shields.io/npm/v/@bhavjit/khan-api)
![Platform support](https://img.shields.io/node/v/@bhavjit/khan-api)
[![Try @bhavjit/khan-api on RunKit](https://badge.runkitcdn.com/@bhavjit/khan-api.svg)](https://npm.runkit.com/@bhavjit/khan-api)

A Khan Academy internal API client and wrapper for Node.js and the browser.

## Install

### Requirements

Currently, the library uses the native [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) which is only supported on [Node.js versions after 18](https://nodejs.org/dist/latest-v18.x/docs/api/globals.html#fetch) without an experimental flag. Support for older versions is planned for future releases.

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
const user = await client.getUser('bhavjitChauhan')
console.log(user)

// Get info about a program
const program = await client.getProgram(6058668928843776)
console.log(program)
```
