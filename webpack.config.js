const path = require('path');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = {
  entry: './index',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'reverse-bundle.js',
    // There are also additional JS chunk files if you use code splitting.
    chunkFilename: '[name].[chunkhash:6].js',
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.txt$/,
        loader: path.resolve('./reverse_loader/reverseLoader.js'),
        options: {
          createResultFile: true,
          uppercase: true,
        },
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
          name: '[name].[ext]',
        },
      },
      {
        test: /\.css$/,
        exclude: /\/node_modules/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              minimize: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new UglifyJsPlugin({
      test: /\.js($|\?)/i,
      exclude: /\/node_modules/,
      cache: true,
    }),
  ],
}

module.exports = config;
