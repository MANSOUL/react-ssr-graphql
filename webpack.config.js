const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const browserConfig = {
  entry: './src/step2/browser/index.js',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  mode: 'development',
  module: {
    rules: [{
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'env',
              'react',
              'stage-0'
            ],
            plugins: [
              'transform-object-rest-spread',
              'transform-decorators-legacy',
              'transform-class-properties',
              'transform-async-to-generator'
            ]
          }
        }
      },
      {
        test: /\.(c|le)ss$/,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[local]--[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'less-loader'
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          'svg-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|ttf)$/i,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: true,
      __PROD__: false
    })
  ]
};

const serverConfig = {
  entry: './src/step2/server/index.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: __dirname,
    filename: 'server.js',
    publicPath: '/'
  },
  mode: 'development',
  module: {
    rules: [{
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'react'
            ],
            plugins: [
              'transform-object-rest-spread',
              'transform-decorators-legacy',
              'transform-class-properties'
            ]
          }
        }
      },
      {
        test: /\.(c|le)ss$/,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[local]--[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'less-loader'
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          'svg-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|ttf)$/i,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
            outputPath: 'public',
            publicPath: '/'
          }
        }]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: false,
      __PROD__: false
    })
  ]
}

module.exports = [browserConfig, serverConfig]