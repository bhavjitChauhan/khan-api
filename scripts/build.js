import esbuild from 'esbuild'

const FILE_NAME = 'khan-api'

/**
 * @type {import('esbuild').BuildOptions}
 */
const base = {
  entryPoints: ['./src/index.ts'],
  bundle: true,
  sourcemap: true,
}

/**
 * @type {import('esbuild').BuildOptions}
 */
const esm = {
  ...base,
  platform: 'neutral',
  target: 'node18',
  format: 'esm',
  outfile: `dist/esm/${FILE_NAME}.js`,
}

/**
 * @type {import('esbuild').BuildOptions}
 */
const node = {
  ...base,
  platform: 'node',
  target: 'node18',
  format: 'cjs',
  outfile: `dist/node/${FILE_NAME}.cjs`,
}

/**
 * @type {import('esbuild').BuildOptions}
 */
const browser = {
  ...base,
  platform: 'browser',
  target: 'es2015',
  globalName: 'KhanAPI',
  outfile: `dist/${FILE_NAME}.js`,
}

const configs = [esm, node, browser]
configs.push(...configs.map(config => ({ ...config, minify: true, outfile: config.outfile.replace(/\.(c?js)$/, '.min.$1') })))

for (const config of configs) {
  console.log(`Building ${config.outfile}...`)
  try {
    await esbuild.build(config)
  } catch (e) {
    console.error(`Error building ${config.outfile}: ${e.message}`)
    process.exit(1)
  }
}
