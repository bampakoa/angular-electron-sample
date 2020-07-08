const path = require('path');
const baseConfig = require('./webpack.electron.config');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
  ]
};