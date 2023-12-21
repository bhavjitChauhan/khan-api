# [Khan API](https://khan-api.bhavjit.com "Khan API website")

[![NPM version](https://img.shields.io/npm/v/@bhavjit/khan-api)](https://www.npmjs.com/package/@bhavjit/khan-api?activeTab=versions)
![Platform support](https://img.shields.io/node/v/@bhavjit/khan-api)
[![Try @bhavjit/khan-api on RunKit](https://badge.runkitcdn.com/@bhavjit/khan-api.svg)](https://npm.runkit.com/@bhavjit/khan-api)

A Khan Academy internal API client and wrapper for Node.js and the browser.

<details open>

<summary>Quick links</summary>

- [Documentation](https://khan-api.bhavjit.com "Khan API library documentation")
- [Reference](https://khan-api.bhavjit.com/reference "Khan internal API reference")
- [Safelist](https://github.com/bhavjitChauhan/khan-api/tree/safelist "Khan Academy safelisted GraphQL queries")
- [Proxy](https://github.com/bhavjitChauhan/khan-api/tree/proxy "Khan Academy API CORS proxy")

</details>

## Install

### Node.js

#### [NPM](https://www.npmjs.com/package/@bhavjit/khan-api)

```bash
npm i @bhavjit/khan-api
```

#### [Yarn](https://yarn.pm/@bhavjit/khan-api)

```bash
yarn add @bhavjit/khan-api
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

See the [examples](examples) directory for more.
