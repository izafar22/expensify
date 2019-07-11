// entry point is
//final bundle file output destination
// console.log(__dirname);
const path = require("path");
const ExtractWebpackPlugin = require("extract-text-webpack-plugin");
// console.log(path.resolve(__dirname, "dist"));
// console.log(path.join("/foo", "bar", "/baz/asdf", "quux", "..", ".."));
module.exports = env => {
  const isProduction = env === "production";
  const CSSExtract = new ExtractWebpackPlugin("styles.css");

  console.log(env);
  return {
    entry: "./src/app.js",
    output: {
      path: path.join(__dirname, "public", "dist"),
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
          //use: ["style-loader", "css-loader", "sass-loader"]
          use: CSSExtract.extract({
            use: [
              {
                loader: "css-loader",
                options: {
                  sourceMap: true
                }
              },
              {
                loader: "sass-loader",
                options: {
                  sourceMap: true
                }
              }
            ]
          })
        }
      ]
    },
    plugins: [CSSExtract],
    devtool: isProduction ? "source-map" : "inline-source-map", //"cheap-module-eval-source-map"
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true,
      port: 8000,
      publicPath: "/dist/"
    }
  };
};

// module.exports = {
//   entry: "./src/app.js",
//   output: {
//     path: path.join(__dirname, "public"),
//     filename: "bundle.js"
//   },
//   module: {
//     //babel-loader
//     rules: [
//       {
//         loader: "babel-loader",
//         test: /\.js$/,
//         exclude: /node_modules/
//       },

//       //loaders for css  and use provides array of loaders
//       {
//         test: /\.s?css$/,
//         use: ["style-loader", "css-loader", "sass-loader"]
//       }
//     ]
//   },
//   devtool: "cheap-module-eval-source-map",
//   devServer: {
//     contentBase: path.join(__dirname, "public"),
//     historyApiFallback: true,
//     port: 8000
//   }
// };
