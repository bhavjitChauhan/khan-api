import { existsSync, write } from 'fs'
import { mkdir, readFile, readdir, writeFile } from 'fs/promises'
import { config } from 'dotenv'
import { parse, print } from 'graphql'
import { addTypenameToDocument } from 'apollo-utilities'
import { format } from 'prettier'
import { randomUUID } from 'crypto'
import queries from './queries.js'
import mutations from './mutations.js'
import fragments from './fragments.js'

config()

const FETCH_BATCH_SIZE = 100

/**
 * Formats a GraphQL document (query, mutation, etc.) by adding the __typename and formatting according to the GraphQL spec.
 * 
 * @param {string} str The GraphQL document (query, mutation, etc.) to format.
 */
function formatDocument(str) {
    if (typeof str !== 'string') {
        console.warn(`Trying to format non-string ${typeof str} ${str}`)
        return null
    }
    const document = addTypenameToDocument(parse(str))
    return print(document)
}

/**
 * Extracts the operation name from a GraphQL document (query, mutation, etc.).
 * 
 * @param {string} str The GraphQL document (query, mutation, etc.) to extract the operation name from.
 */
function extractOperation(str) {
    if (typeof str !== 'string') {
        console.warn(`Trying to extract operation from non-string ${typeof str} ${str}`)
        return null
    }
    if (!str.startsWith('query') && !str.startsWith('mutation') && !str.startsWith('fragment'))
        console.warn(`Trying to extract operation from non-operation ${str}`)

    return str.match(/^(?:query|mutation|fragment) (\w+)/)?.[1]
}

/**
 * Extracts the fragments as an array from a GraphQL document (query, mutation, etc.).
 * 
 * @param {string} str The GraphQL document (query, mutation, etc.) to extract the fragments from.
 */
function extractFragments(str) {
    if (typeof str !== 'string') {
        console.warn(`Trying to extract fragments from non-string ${typeof str} ${str}`)
        return null
    }

    const parts = str.split('\nfragment '), fragments = parts.slice(1).map(fragment => `fragment ${fragment}`)
    if (parts[0].startsWith('fragment ')) fragments.unshift(parts[0])
    if (fragments.length !== 0) return fragments
}

/**
 * Sorts the fragments in a GraphQL document (query, mutation, etc.) alphabetically.
 * 
 * @param {string} str The GraphQL document (query, mutation, etc.) to sort the fragments of.
 */
function sortDocumentFragments(str) {
    if (!(/\nfragment /).test(str))
        return str

    const parts = str.split('\nfragment '),
        query = parts[0],
        // fragments = parts.slice(1).map(fragment => `fragment ${fragment}`)
        fragments = [...new Set(parts.slice(1).map(fragment => `fragment ${fragment}`))]

    str = `${query.replace(/\n+$/g, '')}\n\n${fragments.sort((fragmentA, fragmentB) => {
        const operationA = fragmentA.match(/^fragment (\w+)/)?.[1],
            operationB = fragmentB.match(/^fragment (\w+)/)?.[1]

        if (!operationA || !operationB) {
            console.warn('Comparing null operation')
            return 0
        }

        if (operationA === operationB) {
            console.warn(`Comparing duplicate operation ${operationA}`)
            return 0
        }

        if (operationA > operationB)
            return 1
        else
            return -1
    }).join('\n')}`

    return str
}

/**
 * Generates the hash from a GraphQL document (query, mutation, etc.).
 * 
 * @description
 * This hash may be used to make Khan API requests GET requests instead of POST requests.
 * 
 * @author [Reginald-Gillespie](https://github.com/Reginald-Gillespie)
 * 
 * @example
 * ```js
 * const hash = hashDocument(GET_FULL_USER_PROFILE_QUERY)
 * const variables = { username: 'sal' }
 * const url = `https://www.khanacademy.org/api/internal/graphql/getFullUserProfile?hash=${hash}&variables=${encodeURIComponent(JSON.stringify(variables))}`
 */
function hashDocument(str) {
    let hash = 5381,
        i = str.length

    while (i) hash = (hash * 33) ^ str.charCodeAt(--i)
    return hash >>> 0
}

const documentTypes = ['query', 'mutation', 'fragment']

let failed = false


console.log('Fetching homepage script...')
const html = await fetch('https://www.khanacademy.org/').then(r => r.text())
const runtimeScriptURL = html.match(/src=(?:"|')(https?:\/\/cdn\.kastatic\.org\/genwebpack\/prod\/en\/runtime\.[\w.]+\.js)(?:"|')/)?.[1]
if (!runtimeScriptURL) {
    console.error('Failed to find runtime script URL')
    process.exit(1)
}
console.log('Fetched homepage script')


console.log('Fetching script URLs...')
const runtimeScript = await fetch(runtimeScriptURL).then(r => r.text())
//let scriptURLs = Object.entries(eval('(' + runtimeScript.match(/(\{[\w",:-]+\})\[\w+\]\+"\.js"/)[1] + ')')).map(([key, value]) => `https://cdn.kastatic.org/genwebpack/prod/en/${key}.${value}.js`)
let scriptURLs = [...runtimeScript.matchAll(/(\d+):"(\w+)"/g)].map(([,key,value]) => `https://cdn.kastatic.org/genwebpack/prod/en/${key}.${value}.js`)
const allHtmlScriptURLs = Array.from(html.matchAll(/src=(?:"|')(https?:\/\/cdn\.kastatic\.org\/.+\.js)(?:"|')/g), match => match[1])
scriptURLs.push(...allHtmlScriptURLs)
scriptURLs = [...new Set(scriptURLs)].filter(url => url)
console.log('Fetched runtime URLs')


console.log(`Fetching ${scriptURLs.length} scripts...`)

let scriptFetchedCount = 0
const scripts = []
for (let i = 0; i < scriptURLs.length; i += FETCH_BATCH_SIZE) {
    const batch = scriptURLs.slice(i, i + FETCH_BATCH_SIZE)
    console.log(`Fetching scripts ${i + 1}-${i + batch.length}...`)
    const batchScripts = (await Promise.all(batch.map(url => fetch(url)
        .then(async (res) => {
            scriptFetchedCount++
            return await res.text()
        })
        .catch(() => null)
    )))
        .filter(script => script)
    scripts.push(...batchScripts)
    console.log(`Fetched ${batchScripts.length} scripts`)
}

console.log(`Fetched ${scriptFetchedCount}/${scriptURLs.length} scripts`)


let documents = scripts
    .map(script => [...script?.matchAll(/`\n\s+((?:query|mutation|fragment)[^`]+)/g)]
        .map(match => match[1]?.trim().replaceAll('${0}', '')))
    .flat()
    .map(document => {
        try {
            return formatDocument(document)
        } catch (err) {
            failed = true
            console.error(err, document)
            return null
        }
    })
    .filter(document => {
        if (!document) {
            failed = true
            console.warn('document is null')
            return false
        }
        return true
    })
    .map(document => [extractOperation(document), document])
    .filter(([operation, document]) => {
        if (!operation) {
            failed = true
            console.warn('operation is null')
            return false
        }
        if (!document) {
            failed = true
            console.warn('document is null')
            return false
        }
        return true
    })

const filteredDocuments = Object.fromEntries(documentTypes.map(type => [type, documents.filter(([, document]) => document.startsWith(type))]))


console.log('Extracting fragments...')

let extractedFragmentCount = 0
for (const type of documentTypes) {
    if (type === 'fragment') continue
    for (let [operation, document] of filteredDocuments[type]) {
        const fragments = extractFragments(document)
        if (fragments?.length > 0) {
            documents.push(...fragments.map(fragment => [extractOperation(fragment), fragment]))
            extractedFragmentCount += fragments.length
            // console.log(`Found ${fragments.length} fragments in ${type} ${operation}`)
        }
    }
}

for (let [operation, document] of filteredDocuments.fragment) {
    const fragments = extractFragments(document)
    if (!fragments || fragments.length === 0) {
        console.warn(`Fragment ${operation} has no fragments`)
        continue
    }
    if (fragments.length > 1) {
        let documentsLengthBefore = documents.length
        documents = documents.filter(([op]) => op !== operation)
        if (documents.length !== documentsLengthBefore - 1) {
            if (documents.length === documentsLengthBefore)
                console.warn(`Fragment ${operation} has no fragments`)
            else
                console.warn(`Fragment ${operation} has ${documentsLengthBefore - documents.length} duplicate fragments`)
        }

        documents.push(...fragments.map(fragment => [extractOperation(fragment), fragment]))
        extractedFragmentCount += fragments.length
        // console.log(`Found ${fragments.length} fragments in fragment ${operation}`)
    }
}

console.log(`Extracted ${extractedFragmentCount} fragments`)


console.log(`Writing ${documents.length} documents...`)

let writtenDocumentCount = 0
for (const type of documentTypes) {
    if (!existsSync(type))
        await mkdir(type)

    for (let [operation, document] of filteredDocuments[type]) {
        if (type === 'query' || type === 'mutation')
            document = formatDocument(sortDocumentFragments(document))
        if (!document) {
            failed = true
            console.warn(`${operation} document is null`)
            continue
        }
        document = document.replace(/\n+$/g, '')
        await writeFile(`${type}/${operation}`, document)
        writtenDocumentCount++
    }
}

console.log(`Wrote ${writtenDocumentCount}/${documents.length} documents`)


console.log(`Inserting missing fragments...`)

const existingDocuments = {
    query: queries,
    mutation: mutations,
    fragment: fragments
}
let totalInsertedFragmentCount = 0
for (const type of documentTypes) {
    if (type === 'fragment') continue

    const files = await readdir(type)
    for (const file of files) {
        let document = await readFile(`${type}/${file}`).then(buffer => buffer.toString())
        const neededFragments = [...document.matchAll(/\.\.\.(\w+)/g)].map(match => match[1]),
            existingFragments = [...document.matchAll(/fragment (\w+)/g)].map(match => match[1])

        if (neededFragments.length === 0) continue

        let insertedFragmentCount = 0
        while (neededFragments.length > 0) {
            const fragmentName = neededFragments.shift()
            if (existingFragments.includes(fragmentName)) continue

            const fragment = documents.find(([operation]) => operation === fragmentName)
            if (!fragment) {
                console.error(`Fragment ${fragmentName} not found`)
                continue
            }

            document += '\n' + fragment[1]
            insertedFragmentCount++
            totalInsertedFragmentCount++

            const newNeededFragments = [...fragment[1].matchAll(/\.\.\.(\w+)/g)].map(match => match[1])
            neededFragments.push(...newNeededFragments)
        }

        const existingDocument = existingDocuments[type][extractOperation(document)]
        if (existingDocument && ((extractFragments(document)?.length ?? 0) < (extractFragments(existingDocument)?.length) ?? 0)) {
            console.warn(`Fragment count mismatch in ${type}/${file}`)
        } else {
            document = formatDocument(sortDocumentFragments(document))
            await writeFile(`${type}/${file}`, document)
        }
        // console.log(`Inserted ${insertedFragmentCount} fragments in ${type}/${file}`)
    }
}

console.log(`Inserted ${totalInsertedFragmentCount} fragments`)


console.log('Generating JSON and JavaScript files')

const fileNames = {
    query: 'queries',
    mutation: 'mutations',
    fragment: 'fragments'
}
for (const type of documentTypes) {
    const files = await readdir(type), documents = existingDocuments[type]
    for (const file of files) {
        const document = await readFile(`${type}/${file}`).then(buffer => buffer.toString())
        if (!document) {
            failed = true
            console.error(`Document ${type}/${file} is null`)
            continue
        }
        documents[extractOperation(document)] = document
    }

    const jsonFormatted = format(JSON.stringify(documents), { parser: 'json' })
    await writeFile(fileNames[type] + '.json', jsonFormatted)

    let javascriptObjStr = '{'
    for (const operation in documents) {
        const document = documents[operation]
        javascriptObjStr += `${operation}: \`${document}\`,`
    }
    javascriptObjStr += '}'

    const esm = format('export default ' + javascriptObjStr, { parser: 'babel', semi: false })
    await writeFile(fileNames[type] + '.js', esm)

    const browser = format(`${fileNames[type]} = ${javascriptObjStr}`, { parser: 'babel', semi: false })
    await writeFile(fileNames[type] + '.browser.js', browser)

    if (type === 'query') {
        const hashes = {}
        for (const operation in documents) {
            const document = documents[operation]
            hashes[operation] = hashDocument(document)
        }
        const hashesFormatted = format(JSON.stringify(hashes), { parser: 'json' })
        await writeFile('hashes.json', hashesFormatted)

        let hashesObjStr = '{'
        for (const operation in hashes) {
            const hash = hashes[operation]
            hashesObjStr += `${operation}: ${hash},`
        }
        hashesObjStr += '}'

        const hashesEsm = format('export default ' + hashesObjStr, { parser: 'babel', semi: false })
        await writeFile('hashes.js', hashesEsm)

        const hashesBrowser = format(`hashes = ${hashesObjStr}`, { parser: 'babel', semi: false })
        await writeFile('hashes.browser.js', hashesBrowser)
    }
}

console.log('Generated JSON and JavaScript files')


console.log('Writing heartbeat file')
await writeFile('heartbeat', "# This file should be updated hourly. It's basically a proof-of-life\n" + randomUUID() + '\n')
console.log('Wrote heartbeat file')


if (!failed && typeof process.env.SAFELIST_HEARTBEAT_URL === 'string') {
    console.log('Sending heartbeat...')
    await fetch(process.env.SAFELIST_HEARTBEAT_URL)
    console.log('Sent heartbeat')
} else process.exit(1)
