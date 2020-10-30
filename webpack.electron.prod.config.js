const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const baseConfig = require('./webpack.electron.config');

module.exports = {
  ...baseConfig,
  mode: 'production',
  output: {
    path: path.join(process.cwd(), 'dist', 'angular-electron-sample'),
    filename: 'main.js'
  },
  plugins: [
    // the electron-packager requires a valid `package.json` file along with the Electron code
    new CopyWebpackPlugin({
      patterns: [
        {
          context: path.join(process.cwd(), 'src', 'electron'),
          from: 'package.json'
        }
      ]
    })
  ],
  // Indicate that we do not want to bundle modules from 3rd party libraries automatically, as part of ES6 imports.
  // Instead we must define them in the `dependencies` property of the `package.json` file and will be installed
  // using the `package` npm script
  externals: [nodeExternals()]
};