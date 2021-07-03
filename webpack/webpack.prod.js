const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const CSSMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { SourceMapDevToolPlugin } = require("webpack");

module.exports = /** @type {import('webpack').Configuration} */ ({
  mode: "production",
  entry: path.resolve(__dirname, "../src", "index.ts"),
  output: {
    filename: "src/[name].[chunkhash].js",
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
        use: [MiniCSSExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      src: path.resolve(__dirname, "../", "src"),
    },
  },
  optimization: {
    minimize: true,
    minimizer: [`...`, new CSSMinimizerPlugin()],
    splitChunks: {
      maxSize: 50000,
      minSize: 0,
      cacheGroups: {
        vendor: {
          name: "node_vendors",
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
        },
      },
    },
  },
  plugins: [
    new HTMLPlugin({
      template: path.resolve(__dirname, "../public", "index.html"),
    }),
    new MiniCSSExtractPlugin({
      filename: "styles/[name].[chunkhash].css",
    }),
    new SourceMapDevToolPlugin({
      filename: "[file].map",
    }),
  ],
});
