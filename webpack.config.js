const path = require('path');

module.exports = {
 mode: 'development',
  entry: './src/index.js',
  output: {
	filename: 'main.js',
	path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
	port: 3000,
	open: false,
	hot: true,
	static: ['dist'],
  },
  experiments: {
	  lazyCompilation: true,
  },
};
