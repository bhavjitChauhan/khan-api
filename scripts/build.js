import esbuild from 'esbuild'
import chalk from 'chalk';

const FILE_NAME = 'khan-api'

/** @type {import('esbuild').BuildOptions} */
const base = {
  entryPoints: ['./src/index.ts'],
  bundle: true,
  sourcemap: true,
}

/** @type {import('esbuild').BuildOptions} */
const esm = {
  ...base,
  platform: 'neutral',
  target: 'node18',
  format: 'esm',
  outfile: `esm/${FILE_NAME}.js`,
}

/** @type {import('esbuild').BuildOptions} */
const node = {
  ...base,
  platform: 'node',
  target: 'node18',
  format: 'cjs',
  outfile: `node/${FILE_NAME}.cjs`,
}

/** @type {import('esbuild').BuildOptions} */
const browser = {
  ...base,
  platform: 'browser',
  target: 'es2015',
  globalName: 'KhanAPI',
  outfile: `${FILE_NAME}.js`,
}

const configs = [esm, node, browser]
configs.push(...configs.map(config => ({ ...config, minify: true, outfile: config.outfile.replace(/\.(c?js)$/, '.min.$1') })))

const start = performance.now()

await Promise.allSettled(configs.map(config => {
  return new Promise(async (resolve, reject) => {
    const start = performance.now()
    console.log(chalk.cyan(`Building ${chalk.bold(config.outfile)}...`))
    try {
      await esbuild.build(config)
      console.log(chalk.green(`Built ${chalk.bold(config.outfile)} in ${chalk.bold(Math.ceil(performance.now() - start) + 'ms')}`))
    } catch (err) {
      console.error(chalk.red(`Error building ${chalk.bold(config.outfile)}: ${chalk.bold(err.message)}`))
      reject()
    }
    resolve()
  })
}))

console.log(chalk.white.bgGreen(` Built files in ${chalk.bold(Math.ceil(performance.now() - start) + 'ms')} `) + '\n')
