const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const baseConfig = require('./webpack.electron.config');

module.exports = {
  ...baseConfig,
  "mode": "production",
  "output": {
    "path": path.join(process.cwd(), "dist", "angular-electron-sample"),
    "filename": "main.js"
  },
  "plugins": [
    new CopyWebpackPlugin({
      patterns: [
        {
          context: path.join(process.cwd(), "src", "electron"),
          from: 'package.json'
        }
      ]
    })
  ],
  "externals": [nodeExternals()]
};