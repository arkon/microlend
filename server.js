var express = require('express');
var path = require('path');
var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var app = express();
var config = require('./webpack.config.js');

var static_path = path.join(__dirname, 'public');
var port = process.env.PORT || 80;

var compiler = webpack(config);
var middleware = webpackMiddleware(compiler, {
  publicPath: config.output.publicPath,
  contentBase: 'src',
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false
  }
});

app.use(middleware);
app.use(webpackHotMiddleware(compiler));

app.use(express.static(static_path))
  .get('*', function (req, res) {
    res.sendFile('index.html', {
      root: static_path
    });
  }).listen(port, function (err) {
    if (err) { console.log(err) };
    console.log('Listening at localhost:' + port);
  });
