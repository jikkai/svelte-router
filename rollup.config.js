export default {
  entry: './src/index.js',
  plugins: [
    require('rollup-plugin-svelte')(),
    require('rollup-plugin-babel')({
      exclude: 'node_modules/**'
    }),
    require('rollup-plugin-uglify')(),
    require('rollup-plugin-node-resolve')({
      jsnext: true,
      main: true,
      browser: true
    }),
    require('rollup-plugin-commonjs')(),
    require('rollup-plugin-replace')({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ],
  format: 'umd',
  moduleName: 'SvelteRouter',
  dest: './lib/index.js'
}
