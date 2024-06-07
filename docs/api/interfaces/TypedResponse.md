## Extends

- `Response`

## Type parameters

• **T**

## Properties

### body

> `readonly` **body**: `null` \| `ReadableStream`\<`Uint8Array`\>

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/body)

#### Inherited from

`Response.body`

#### Source

node\_modules/typescript/lib/lib.dom.d.ts:3151

***

### bodyUsed

> `readonly` **bodyUsed**: `boolean`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/bodyUsed)

#### Inherited from

`Response.bodyUsed`

#### Source

node\_modules/typescript/lib/lib.dom.d.ts:3153

***

### headers

> `readonly` **headers**: `Headers`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/headers)

#### Inherited from

`Response.headers`

#### Source

node\_modules/typescript/lib/lib.dom.d.ts:18936

***

### ok

> `readonly` **ok**: `boolean`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/ok)

#### Inherited from

`Response.ok`

#### Source

node\_modules/typescript/lib/lib.dom.d.ts:18938

***

### redirected

> `readonly` **redirected**: `boolean`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/redirected)

#### Inherited from

`Response.redirected`

#### Source

node\_modules/typescript/lib/lib.dom.d.ts:18940

***

### status

> `readonly` **status**: `number`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/status)

#### Inherited from

`Response.status`

#### Source

node\_modules/typescript/lib/lib.dom.d.ts:18942

***

### statusText

> `readonly` **statusText**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/statusText)

#### Inherited from

`Response.statusText`

#### Source

node\_modules/typescript/lib/lib.dom.d.ts:18944

***

### type

> `readonly` **type**: `ResponseType`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/type)

#### Inherited from

`Response.type`

#### Source

node\_modules/typescript/lib/lib.dom.d.ts:18946

***

### url

> `readonly` **url**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/url)

#### Inherited from

`Response.url`

#### Source

node\_modules/typescript/lib/lib.dom.d.ts:18948

## Methods

### arrayBuffer()

> **arrayBuffer**(): `Promise`\<`ArrayBuffer`\>

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/arrayBuffer)

#### Returns

`Promise`\<`ArrayBuffer`\>

#### Inherited from

`Response.arrayBuffer`

#### Source

node\_modules/typescript/lib/lib.dom.d.ts:3155

***

### blob()

> **blob**(): `Promise`\<`Blob`\>

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/blob)

#### Returns

`Promise`\<`Blob`\>

#### Inherited from

`Response.blob`

#### Source

node\_modules/typescript/lib/lib.dom.d.ts:3157

***

### clone()

> **clone**(): `Response`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/clone)

#### Returns

`Response`

#### Inherited from

`Response.clone`

#### Source

node\_modules/typescript/lib/lib.dom.d.ts:18950

***

### formData()

> **formData**(): `Promise`\<`FormData`\>

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/formData)

#### Returns

`Promise`\<`FormData`\>

#### Inherited from

`Response.formData`

#### Source

node\_modules/typescript/lib/lib.dom.d.ts:3159

***

### json()

> **json**(): `Promise`\<`T`\>

#### Returns

`Promise`\<`T`\>

#### Overrides

`Response.json`

#### Source

[src/utils/fetch.ts:6](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/utils/fetch.ts#L6)

***

### text()

> **text**(): `Promise`\<`string`\>

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/text)

#### Returns

`Promise`\<`string`\>

#### Inherited from

`Response.text`

#### Source

node\_modules/typescript/lib/lib.dom.d.ts:3163
