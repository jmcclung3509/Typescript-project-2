const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");


module.exports = {
  mode: "production",
  entry: "./src/app.ts",
  devServer: {
    static: [{ directory: path.join(__dirname) }],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  devtool: "eval-source-map",
  plugins: [
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      template: './index.html', // Path to your HTML template
      filename: 'index.html', // Output filename
      inject: 'body', // Inject scripts into the body of the HTML file
    })
  ],
};
