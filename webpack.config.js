const path = require('path');
const Dotenv = require('dotenv-webpack');
const Stream = require('stream-browserify');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
  mode: 'development',
  entry: './src/app.ts',
  devServer: {
    static: [
      {
        directory: path.join(__dirname),
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins:[
    new Dotenv({
      path: path.resolve(__dirname, '.env'),
      systemvars: true, //Set to true if you would rather load all system variables as well (useful for CI purposes)
    }),
    new HtmlWebpackPlugin({
      template: './index.html', // Path to your HTML template
      filename: 'index.html', // Output filename
      inject: 'body', // Inject scripts into the body of the HTML file
    }),
  ],
  
  resolve: {
    extensions: ['.ts', '.js'],
    fallback: {
      buffer: require.resolve('buffer/'),
      path: require.resolve("path-browserify"),
      os: require.resolve("os-browserify/browser"),
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify") 

  
   
    },
  }
};
