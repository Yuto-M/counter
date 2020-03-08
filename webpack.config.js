const path = require("path");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/ts/index.tsx"
  },
  output: {
    filename: "assets/js/[name].bundle.js", // TODO: ここのnameは何で決まる？
    path: path.resolve(__dirname, "dist")
  },
  // module: {
  //   rules: [
  //     {
  //       enforce: "pre",
  //       test: /\.js$/,
  //       exclude: /node_modules/,
  //       loader: "eslint-loader"
  //     },
  //     {
  //       test: /\.js$/,
  //       exclude: /node_modules/,
  //       use: {
  //         loader: "babel-loader",
  //         options: {
  //           presets: ["@babel/preset-env"]
  //         }
  //       }
  //     },
  //     {
  //       test: /\.scss$/,
  //       use: [
  //         {
  //           loader: MiniCssExtractPlugin.loader,
  //           options: {}
  //         },
  //         {
  //           loader: "css-loader",
  //           options: {
  //             url: false,
  //             sourceMap: true
  //           }
  //         },
  //         {
  //           loader: "sass-loader",
  //           options: {
  //             sourceMap: true
  //           }
  //         }
  //       ]
  //     }
  //   ]
  // },
  // devtool: "inline-source-map",
  plugins: [
    //   new MiniCssExtractPlugin({
    //     filename: "assets/css/[name].css"
    //   }),
    // @see https://webpack.js.org/plugins/copy-webpack-plugin/
    new CopyWebpackPlugin([
      {
        from: "img",
        to: "assets/img",
        context: "src/"
      },
      {
        from: "html",
        to: "",
        context: "src/"
      }
    ])
  ]
};
