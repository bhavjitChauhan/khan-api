/**
 * @file Build script for Khan API
 * 
 * @example
 * ```bash
 * yarn build
 * ```
 * 
 * @example
 * With metafiles:
 * ```bash
 * yarn build --meta
 * ```
 */

import chalk from 'chalk'
import esbuild from 'esbuild'
import minimist from 'minimist'
import { existsSync } from 'fs'
import { mkdir, writeFile } from 'fs/promises'

const argv = minimist(process.argv.slice(2), {
  alias: {
    verbose: 'v',
    meta: 'm',
  },
})

const FILE_NAME = 'khan-api'

/** @type {esbuild.BuildOptions} */
const base = {
  entryPoints: ['./src/index.ts'],
  bundle: true,
  sourcemap: true,
  metafile: argv.meta,
}

/** @type {esbuild.BuildOptions} */
const esm = {
  ...base,
  platform: 'neutral',
  target: 'node18',
  format: 'esm',
  outfile: `esm/${FILE_NAME}.js`,
}

/** @type {esbuild.BuildOptions} */
const node = {
  ...base,
  platform: 'node',
  target: 'node18',
  format: 'cjs',
  outfile: `node/${FILE_NAME}.cjs`,
}

/** @type {esbuild.BuildOptions} */
const browser = {
  ...base,
  platform: 'browser',
  target: 'es2020',
  globalName: 'KhanAPI',
  outfile: `${FILE_NAME}.js`,
}

const configs = [esm, node, browser]
configs.push(...configs.map(config => ({ ...config, minify: true, outfile: config.outfile.replace(/\.(c?js)$/, '.min.$1') })))

let start = performance.now()

/** @type {PromiseSettledResult<esbuild.BuildResult>[]} */
const results = await Promise.allSettled(configs.map(config => {
  return new Promise(async (resolve, reject) => {
    const start = performance.now()
    console.log(chalk.cyan(`Building ${chalk.bold(config.outfile)}...`))
    try {
      const result = await esbuild.build(config)
      console.log(chalk.green(`Built ${chalk.bold(config.outfile)} in ${chalk.bold(Math.ceil(performance.now() - start) + 'ms')}`))
      resolve(result)
    } catch (err) {
      console.error(chalk.red(`Error building ${chalk.bold(config.outfile)}: ${chalk.bold(err.message)}`))
      reject()
    }
  })
}))

console.log(chalk.white.bgGreen(` Built files in ${chalk.bold(Math.ceil(performance.now() - start) + 'ms')} `) + '\n')

if (argv.meta) {
  start = performance.now()
  let total = 0

  console.log(chalk.yellow('Writing metafiles...'))
  for (const result of results) {
    if (result.status === 'fulfilled' && result.value.metafile) {
      const metafile = result.value.metafile
      if (argv.verbose || argv.v) {
        for (const output in metafile.outputs) {
          const { bytes } = metafile.outputs[output]
          total += bytes
          console.log(chalk.gray(`  ${chalk.bold(output)} ${chalk.dim(`(${(bytes / 1000).toFixed(1)} kb)`)}`))
        }
      }
      const outfile = Object.keys(metafile.outputs).filter(file => !file.endsWith('.map'))[0]
      const metafilePath = `./dist/meta/${outfile}.json`
      const dir = metafilePath.slice(0, metafilePath.lastIndexOf('/'))
      if (existsSync(dir) === false)
        await mkdir(dir, { recursive: true })
      writeFile(`./dist/meta/${outfile}.json`, JSON.stringify(metafile, null, 2))
    }
  }
  if (argv.verbose || argv.v)
    console.log(chalk.gray(`  ${chalk.bold('Total')} ${chalk.dim(`(${(total / 1000).toFixed(1)} kb)`)}`))
  console.log(chalk.yellow(`Wrote metafiles in ${chalk.bold(Math.ceil(performance.now() - start) + 'ms')}`))
}
