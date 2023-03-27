const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const { dependencies } = require("../package.json");
const domain = process.env.PRODUCTION_DOMAIN;

module.exports = {
  entry: "./src/index",
  mode: "production",
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/remote-app/dist/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "Remote",

      filename: "moduleEntry.js",
      exposes: {
        "./App": "./src/App",
        "./Button": "./src/Button",
      },
      shared: {
        ...dependencies,
        react: {
          singleton: true,
          requiredVersion: dependencies["react"],
        },
        "react-dom": {
          singleton: true,
          requiredVersion: dependencies["react-dom"],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
      manifest: "./public/manifest.json",
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  target: "web",
};