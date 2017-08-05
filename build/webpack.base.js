const path = require('path')

module.exports = {
  entry: {
    client: './src/index.js'
  },
  output: {
    path: path.join(__dirname, '../lib'),
    filename: 'svelte-router.js',
    publicPath: './',
    libraryTarget: 'umd',
    library: 'SvelteRouter'
  },
  resolve: {
    extensions: ['.js', '.html', '.json'],
    alias: {
      '~root': path.join(__dirname, '../src'),
      '~components': path.join(__dirname, '../src/components'),
      '~utils': path.join(__dirname, '../src/utils')
    }
  },
  performance: {},
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /.js$/,
        use: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(html|js)$/,
        use: 'babel-loader',
        include: [/src/, /example/],
        exclude: [/node_modules/]
      },
      {
        test: /\.html$/,
        use: 'svelte-loader',
        include: [/src/, /example/],
        exclude: [/node_modules/]
      }
    ]
  }
}
