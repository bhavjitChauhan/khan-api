# Interface: TypedResponse\<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- `Response`

  ↳ **`TypedResponse`**

## Properties

### body

• `Readonly` **body**: ``null`` \| `ReadableStream`\<`Uint8Array`\>

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/body)

#### Inherited from

Response.body

#### Defined in

.yarn/cache/typescript-patch-4778c7998b-c93786fcc9.zip/node_modules/typescript/lib/lib.dom.d.ts:3145

___

### bodyUsed

• `Readonly` **bodyUsed**: `boolean`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/bodyUsed)

#### Inherited from

Response.bodyUsed

#### Defined in

.yarn/cache/typescript-patch-4778c7998b-c93786fcc9.zip/node_modules/typescript/lib/lib.dom.d.ts:3147

___

### headers

• `Readonly` **headers**: `Headers`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/headers)

#### Inherited from

Response.headers

#### Defined in

.yarn/cache/typescript-patch-4778c7998b-c93786fcc9.zip/node_modules/typescript/lib/lib.dom.d.ts:18798

___

### ok

• `Readonly` **ok**: `boolean`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/ok)

#### Inherited from

Response.ok

#### Defined in

.yarn/cache/typescript-patch-4778c7998b-c93786fcc9.zip/node_modules/typescript/lib/lib.dom.d.ts:18800

___

### redirected

• `Readonly` **redirected**: `boolean`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/redirected)

#### Inherited from

Response.redirected

#### Defined in

.yarn/cache/typescript-patch-4778c7998b-c93786fcc9.zip/node_modules/typescript/lib/lib.dom.d.ts:18802

___

### status

• `Readonly` **status**: `number`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/status)

#### Inherited from

Response.status

#### Defined in

.yarn/cache/typescript-patch-4778c7998b-c93786fcc9.zip/node_modules/typescript/lib/lib.dom.d.ts:18804

___

### statusText

• `Readonly` **statusText**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/statusText)

#### Inherited from

Response.statusText

#### Defined in

.yarn/cache/typescript-patch-4778c7998b-c93786fcc9.zip/node_modules/typescript/lib/lib.dom.d.ts:18806

___

### type

• `Readonly` **type**: `ResponseType`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/type)

#### Inherited from

Response.type

#### Defined in

.yarn/cache/typescript-patch-4778c7998b-c93786fcc9.zip/node_modules/typescript/lib/lib.dom.d.ts:18808

___

### url

• `Readonly` **url**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/url)

#### Inherited from

Response.url

#### Defined in

.yarn/cache/typescript-patch-4778c7998b-c93786fcc9.zip/node_modules/typescript/lib/lib.dom.d.ts:18810

## Methods

### arrayBuffer

▸ **arrayBuffer**(): `Promise`\<`ArrayBuffer`\>

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/arrayBuffer)

#### Returns

`Promise`\<`ArrayBuffer`\>

#### Inherited from

Response.arrayBuffer

#### Defined in

.yarn/cache/typescript-patch-4778c7998b-c93786fcc9.zip/node_modules/typescript/lib/lib.dom.d.ts:3149

___

### blob

▸ **blob**(): `Promise`\<`Blob`\>

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/blob)

#### Returns

`Promise`\<`Blob`\>

#### Inherited from

Response.blob

#### Defined in

.yarn/cache/typescript-patch-4778c7998b-c93786fcc9.zip/node_modules/typescript/lib/lib.dom.d.ts:3151

___

### clone

▸ **clone**(): `Response`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/clone)

#### Returns

`Response`

#### Inherited from

Response.clone

#### Defined in

.yarn/cache/typescript-patch-4778c7998b-c93786fcc9.zip/node_modules/typescript/lib/lib.dom.d.ts:18812

___

### formData

▸ **formData**(): `Promise`\<`FormData`\>

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/formData)

#### Returns

`Promise`\<`FormData`\>

#### Inherited from

Response.formData

#### Defined in

.yarn/cache/typescript-patch-4778c7998b-c93786fcc9.zip/node_modules/typescript/lib/lib.dom.d.ts:3153

___

### json

▸ **json**(): `Promise`\<`T`\>

#### Returns

`Promise`\<`T`\>

#### Overrides

Response.json

#### Defined in

[src/utils/fetch.ts:6](https://github.com/bhavjitChauhan/khan-api/blob/9bcea3fc/src/utils/fetch.ts#L6)

___

### text

▸ **text**(): `Promise`\<`string`\>

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/text)

#### Returns

`Promise`\<`string`\>

#### Inherited from

Response.text

#### Defined in

.yarn/cache/typescript-patch-4778c7998b-c93786fcc9.zip/node_modules/typescript/lib/lib.dom.d.ts:3157
