const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const CSSMinimizerPlugin = require("css-minimizer-webpack-plugin");
const DotEnv = require("dotenv-webpack");
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
      components: path.resolve(__dirname, "../", "src", "components"),
      utils: path.resolve(__dirname, "../", "src", "utils"),
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
          name: "vendors",
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
        },
        components: {
          name: "components",
          test: /[\\/]src[\\/]components[\\/]/,
          chunks: "all",
        },
        utils: {
          name: "utils",
          test: /[\\/]src[\\/]utils[\\/]/,
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
    new DotEnv({
      path: path.resolve(__dirname, "../", ".env.production"),
    }),
  ],
});
