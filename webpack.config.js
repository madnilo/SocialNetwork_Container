const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  context: __dirname,
  entry: {
    app: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "js/[name].js",
    publicPath: "/",
    libraryTarget: "umd",
    umdNamedDefine: true,
    library: "[name]",
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx", ".scss"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
};