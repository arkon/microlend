const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: '/',
    publicPath: '/assets',
    filename: 'bundle.js',
    pathinfo: true,
  },
  devtool: 'eval',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
    ],
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'static'),
    stats: { chunkModules: false },
  },
};
