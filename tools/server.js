var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var argv = require('yargs').argv;
var fs = require('fs');
var config = require('./config.json');

var webpackConfig = require('./webpack.config');
var devConfig = webpackConfig.devConfig;

console.log('Starting server...\n');

var server = new WebpackDevServer(webpack(devConfig), { // Start a server
  publicPath: devConfig.output.publicPath,
  hot: argv.disableHot ? false : true, // With hot reloading
  inline: false,
  historyApiFallback: true,
  quiet: true // Without logging
});

server.listen(config.server.port, function (err, result) {
  if (err) {
    console.log(err, result);
  } else {
    console.log('Server started');
    console.log('Listening at localhost:' + config.server.port);
  }
});