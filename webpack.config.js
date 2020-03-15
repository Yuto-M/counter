const path = require('path');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
// 1. import default from the plugin module
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
// 2. create a transformer;
// the factory additionally accepts an options object which described below
const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = {
  mode: 'development',
  entry: {
    app: './src/ts/index.tsx',
  },
  output: {
    filename: 'assets/js/[name].bundle.js', // TODO: ここのnameは何で決まる？
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        /**
         * NOTE: ts-loaderでtypescript->ES6に、
         * babel-loaderでES6->ES5に変換
         * https://qiita.com/tmzkysk/items/35ef6be9b5162a6bf2fe
         */
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader',
            options: {
                getCustomTransformers: () => ({ before: [styledComponentsTransformer] }),
            },
          },
        ],
      },
    ],
  },
  devtool: 'inline-source-map',
  plugins: [
    // @see https://webpack.js.org/plugins/copy-webpack-plugin/
    new CopyWebpackPlugin([
      {
        from: 'img',
        to: 'assets/img',
        context: 'src/',
      },
      {
        from: 'html',
        to: '',
        context: 'src/',
      },
    ]),
  ],
};
