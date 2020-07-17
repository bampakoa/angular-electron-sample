const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { NoEmitOnErrorsPlugin, ProgressPlugin } = require('webpack');

module.exports = {
  "resolve": {
    "extensions": [
      ".ts",
      ".js"
    ]
  },
  "entry": {
    "main": path.join(process.cwd(), "src", "electron", "main.ts")
  },
  "module": {
    "rules": [
      {
        "test": /\.ts$/,
        "loader": "ts-loader",
        "options": {
          configFile: path.join(process.cwd(), "src", "electron", "tsconfig.json")
        }
      }
    ]
  },
  "plugins": [
    new NoEmitOnErrorsPlugin(),
    new ProgressPlugin()
  ],
  "node": {
    "fs": false,
    "__dirname": false
  },
  "target": "electron-main",
  "externals": [nodeExternals()]
};