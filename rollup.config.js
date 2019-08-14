import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import { eslint } from 'rollup-plugin-eslint'
import postcss from 'rollup-plugin-postcss'
import md from 'rollup-plugin-md'
import svelte from 'rollup-plugin-svelte'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import { uglify } from 'rollup-plugin-uglify'
import copy from 'rollup-plugin-copy'

import pkg from './package.json'

const config = {
  output: {
    file: pkg.main,
    format: 'umd',
    name: 'SvelteRouter',
    exports: 'named'
  },
  context: 'window',
  plugins: [
    eslint({
      include: './src/**/*.js'
    }),
    postcss(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.APP_VERSION': JSON.stringify(pkg.version)
    }),
    resolve({
      extensions: ['.js', '.svelte', '.md']
    }),
    svelte(),
    commonjs(),
    babel({
      externalHelpers: true,
      extensions: ['.js', '.mjs', '.svelte']
    })
  ]
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    uglify()
  )
  if (process.env.APP_ENV === 'js') {
    config.input = './src/index.js'
  } else if (process.env.APP_ENV === 'docs') {
    config.input = './example/main.js'
    config.output = {
      file: 'public/svelte-router.js',
      format: 'iife'
    }
    config.plugins.unshift(
      md(),
      copy({
        targets: [{
          src: './build/index.html',
          dest: './public'
        }]
      })
    )
  }
} else if (process.env.NODE_ENV === 'development') {
  config.input = './example/main.js'
  config.plugins.unshift(
    serve({
      historyApiFallback: true,
      contentBase: ['lib', 'build']
    }),
    livereload('release'),
    md()
  )
}

export default config
