const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "../src", "index.ts"),
  output: {
    filename: "bundle.[chunkhash].js",
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
  },
  plugins: [
    new HTMLPlugin({
      template: path.resolve(__dirname, "../public", "index.html"),
    }),
  ],
};
