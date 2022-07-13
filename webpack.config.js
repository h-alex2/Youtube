const webpack = require('webpack');
const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  name: 'Youtube',
  mode: process.env.NODE_ENV || 'development',
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      "root": path.resolve(__dirname, "/"),
      "src": path.resolve(__dirname, "src"),
      "assets": path.resolve(__dirname, "assets"),
      "home": path.resolve(__dirname, "./src/client/components/home"),
      "components": path.resolve(__dirname, "./src/client/components"),
    }
  },
  entry: {
    app: './src/client/index',
  },
  watchOptions: {
    ignored: /node_modules/,
  },
  module: {
    rules: [
      {
      test: /\.jsx?$/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: { browsers: ['last 2 chrome versions'] },
            debug: true,
            },
          ],
          '@babel/preset-react',
        ],
      },
      exclude: path.join(__dirname, 'node_modules'),
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg/,
        type: 'asset/inline'
      },
    ],
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      hash: true, // 정적 파일을 불러올 때 쿼리문자열에 웹팩 해쉬값을 추가
    }),
    new webpack.DefinePlugin({
			'process.env': JSON.stringify(process.env),
		}),
  ],
  output: {
    filename: '[name].js',
    publicPath: '/dist/',
    path: path.join(__dirname, 'dist'),
  },
  optimization: {
    // splitChunks: {
    //   chunks: 'all',
    // },
    usedExports: true,
  },
  devServer: {
    historyApiFallback: true,
    port: 8080,
    open: true, //서버 띄워지면 창 자동으로 열기
    hot: true,
    // devMiddleware: { publicPath: '/dist' },
    // static: { directory: path.resolve(__dirname) },
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
      },
    },
  }
}
