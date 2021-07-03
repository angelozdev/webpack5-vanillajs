const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const { SourceMapDevToolPlugin } = require("webpack");

module.exports = /** @type {import('webpack').Configuration} */ ({
  mode: "development",
  entry: path.resolve(__dirname, "../src", "index.ts"),
  output: {
    filename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "../dist"),
  },
  module: {
    rules: [
      {
        test: /\.(j|t)s$/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      src: path.resolve(__dirname, "../", "src"),
      components: path.resolve(__dirname, "../", "src", "components"),
      utils: path.resolve(__dirname, "../", "src", "utils"),
    },
  },
  plugins: [
    new HTMLPlugin({
      template: path.resolve(__dirname, "../public", "index.html"),
    }),
    new SourceMapDevToolPlugin({
      filename: "[file].map",
    }),
  ],
});
