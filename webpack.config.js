const path = require('path')
const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const packageJson = require('./package.json')
const name = 'hm'
const version = packageJson.version

module.exports = {
  mode: 'production',
  entry: {
    'hm': path.resolve(__dirname, 'src/hm'),
    'hm.min': path.resolve(__dirname, 'src/hm'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: 'hm',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      include: /\.min\.js$/,
      extractComments: false,
      terserOptions: {
        format: {
          comments: false,
        },
      }
    })]
  },
  plugins: [
    new ESLintPlugin(),
    new webpack.DefinePlugin({
      __NAME: JSON.stringify(name),
      __VERSION: JSON.stringify(version)
    }),
    new ForkTsCheckerWebpackPlugin()
  ],
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  module: {
    rules: [{
      use: 'babel-loader',
      test: /\.(js|ts)$/,
      exclude: /node_modules/
    }, {
      test: /\.module\.s?css$/,
      use: [
        { loader: 'style-loader' },
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: 'smart-banner__[hash:base64]',
            }
          },
        },
        { loader: 'sass-loader' }
      ]
    }]
  }
}