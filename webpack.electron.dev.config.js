const path = require('path');
const baseConfig = require('./webpack.electron.config');

module.exports = {
  ...baseConfig,
  mode: 'development',
  devtool: 'source-map',
  output: {
    path: path.join(process.cwd(), 'dist', 'angular-electron-sample'),
    // avoid conflicts with the `main.js` file generated from the Angular CLI
    filename: 'shell.js'
  }
};