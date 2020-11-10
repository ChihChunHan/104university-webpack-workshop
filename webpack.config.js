const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  entry: {
    main: "./src/main.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      // {
      //   test: /\.svg/,
      //   use: {
      //     loader: 'svg-url-loader',
      //     options: {}
      //   }
      // },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 用以限制須轉為 base64 的文件大小 (單位：byte)
              limit: 8192,
              // 超過大小及調用 file-loader
              fallback: require.resolve('file-loader'),
            },
          },
        ],
      },
      // {
      //   test: /\.(png|jpe?g|gif)$/i,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '[name].[ext]',
      //       },
      //     },
      //   ],
      // },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "my-webpack-homework",
      template: "./src/template/index.html",
    }),
    new MiniCssExtractPlugin,
    new CleanWebpackPlugin,
    new BundleAnalyzerPlugin(),
  ],
  devtool:"inline-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    port: 8745,
    // hot module reload
    // hot: true
  },
};
