# Khan API

⚠️ **This project is currently in beta and breaking changes may be released without warning!**

[![NPM version](https://img.shields.io/npm/v/@bhavjit/khan-api)](https://www.npmjs.com/package/@bhavjit/khan-api?activeTab=versions)
![Platform support](https://img.shields.io/node/v/@bhavjit/khan-api)
[![Try @bhavjit/khan-api on RunKit](https://badge.runkitcdn.com/@bhavjit/khan-api.svg)](https://npm.runkit.com/@bhavjit/khan-api)

A Khan Academy internal API client and wrapper for Node.js and the browser.

<details open>

<summary>Quick links</summary>

- [Documentation](https://khan-api.bhavjit.com)
- [API Reference](https://khan-api.bhavjit.com/reference)

</details>

## Install

### Node.js

#### [Yarn](https://yarn.pm/@bhavjit/khan-api)

```bash
yarn add @bhavjit/khan-api
```

#### [NPM](https://www.npmjs.com/package/@bhavjit/khan-api)

```bash
npm i @bhavjit/khan-api
```

## Usage

### Node.js

#### JavaScript modules

```js
import { Client } from '@bhavjit/khan-api'

const client = new Client()
```

#### CommonJS

```js
const { Client } = require('@bhavjit/khan-api')

const client = new Client()
```

### Web

Remember that Khan Academy's CORS policy will block requests not originating from their website.

#### JavaScript modules

```html
<script type="module">
  import { Client } from 'https://esm.run/@bhavjit/khan-api'

  const client = new Client()
</script>
```

#### Script tag

```html
<script src="https://cdn.jsdelivr.net/npm/@bhavjit/khan-api"></script>
<script>
  const client = new KhanAPI.Client()
</script>
```
