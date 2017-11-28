const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const basePath = __dirname;
const sourceBase = path.join(basePath, "src");

module.exports = {
  context: sourceBase,
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  entry: {
    app: "./index.tsx",
    appStyles: "./css/site.css",
    vendor: [
      "react",
      "react-dom",
      "react-router",
      "redux",
      "react-redux",
      "redux-thunk"
    ],
    vendorStyles: [
      "../node_modules/bootstrap/dist/css/bootstrap.css"
    ]
  },
  output: {
    path: sourceBase,
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "awesome-typescript-loader",
        options: {
          useBabel: true
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      // Loading glyphicons => https://github.com/gowravshekar/bootstrap-webpack
      // Using here url-loader and file-loader
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=application/octet-stream"
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader"
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=image/svg+xml"
      }
    ]
  },
  // For development https://webpack.js.org/configuration/devtool/#for-development
  devtool: "inline-source-map",
  devServer: {
    port: 8080,
    noInfo: true
  },
  plugins: [
    //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: "index.html", //Name of file in ./dist/
      template: "index.html", //Name of template in ./src
      hash: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ["vendor", "manifest"]
    })
  ]
};
