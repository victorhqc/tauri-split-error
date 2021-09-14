const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.join(__dirname);
const SRC_PATH = path.join(ROOT_PATH, 'src');
const BUILD_PATH = path.join(ROOT_PATH, 'build');

const isProduction = process.env.NODE_ENV === 'production';

const devServer = isProduction
  ? undefined
  : {
      hot: true,
      https: false,
      historyApiFallback: true,
      port: 3000,
      static: {
        directory: SRC_PATH,
        watch: true,
      },
    };

module.exports = {
  entry: path.join(SRC_PATH, 'index.tsx'),
  output: {
    path: BUILD_PATH,
    filename: '[name].bundle.js',
  },
  devtool: isProduction ? 'source-map' : 'cheap-module-source-map',
  mode: isProduction ? 'production' : 'development',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.css', '.png', '.jpg', '.svg'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(ROOT_PATH, 'public', 'index.html'),
    }),
  ],
  optimization: {
    minimize: false,
  },
  devServer,
};
