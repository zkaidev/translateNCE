const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
	index: './src/app.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
	clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
	  {
		test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
	  },
	  {
		test: /\.(js|jsx)$/i,
		exclude: /node_modules/,
		use: {
		  loader: 'babel-loader',
		}
	  }
    ],
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: ['./dist'],
  },
  plugins: [
    new HtmlWebpackPlugin({
	    template: 'src/index.html',
    })
  ],
};
