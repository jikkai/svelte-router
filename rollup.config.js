import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import { eslint } from 'rollup-plugin-eslint'
import svelte from 'rollup-plugin-svelte'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import { uglify } from 'rollup-plugin-uglify'

import pkg from './package.json'

const config = {
  output: {
    file: pkg.main,
    format: 'umd',
    name: 'SvelteRouter'
  },
  context: 'window',
  plugins: [
    eslint({
      include: './src/**/*.js'
    }),
    svelte({
      store: true
    }),
    babel(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.APP_VERSION': JSON.stringify(pkg.version)
    }),
    resolve(),
    commonjs()
  ]
}

if (process.env.NODE_ENV === 'production') {
  config.input = './src/index.js'
  config.plugins.push(
    uglify()
  )
} else if (process.env.NODE_ENV === 'development') {
  config.input = './example/main.js'
  config.plugins.unshift(
    serve({
      contentBase: ['lib', 'build']
    }),
    livereload('release')
  )
}

export default config
