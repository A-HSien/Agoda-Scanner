const { CheckerPlugin } = require('awesome-typescript-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { optimize } = require('webpack');
const { join } = require('path');
const prodPlugins = [];
/* if production
  prodPlugins.push(
    new optimize.AggressiveMergingPlugin(),
    new optimize.OccurrenceOrderPlugin()
  );
 */
module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    'contentscript': join(__dirname, 'src/contentscript/main.ts'),
    'background': join(__dirname, 'src/background/main.ts'),
  },
  output: { 
    path: join(__dirname, 'public'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.ts?$/,
        use: 'awesome-typescript-loader?{configFileName: "tsconfig.json"}',
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new CheckerPlugin(),
    ...prodPlugins,
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js'],
  },
};