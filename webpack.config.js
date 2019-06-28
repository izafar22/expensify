// entry point is
//final bundle file output destination
// console.log(__dirname);
const path = require("path");
// console.log(path.resolve(__dirname, "dist"));
// console.log(path.join("/foo", "bar", "/baz/asdf", "quux", "..", ".."));

module.exports = {
  entry: "./src/playground/redux-expensify.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    //babel-loader
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      },

      //loaders for css  and use provides array of loaders
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: true,
    port: 8000
  }
};
