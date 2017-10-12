import babel from 'rollup-plugin-babel'
import svelte from 'rollup-plugin-svelte'
import resolve from 'rollup-plugin-node-resolve'
import eslint from 'rollup-plugin-eslint'
import commonjs from 'rollup-plugin-commonjs'
import uglify from 'rollup-plugin-uglify'

const pkg = require('./package.json')

export default {
  input: './src/index.js',
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
    svelte(),
    babel({
      exclude: 'node_modules/**'
    }),
    commonjs(),
    resolve(),
    uglify()
  ]
}
