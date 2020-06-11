const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  "mode": "development",
  "devtool": "source-map",
  "resolve": {
    "extensions": [
      ".ts"
    ]
  },
  "entry": {
    "main": [
      path.join(process.cwd(), "src", "electron", "main.ts")
    ]
  },
  "output": {
    "path": path.join(process.cwd(), "dist", "angular-electron-sample"),
    "filename": "shell.js",
    "devtoolModuleFilenameTemplate": "[absolute-resource-path]"
  },
  "module": {
    "rules": [
      {
        "test": /\.ts$/,
        "loader": "awesome-typescript-loader",
        "options": {
          configFileName: './tsconfig.electron.json'
        }
      }
    ]
  },
  "node": {
    "fs": "empty",
    "global": true,
    "crypto": "empty",
    "tls": "empty",
    "net": "empty",
    "process": true,
    "module": false,
    "clearImmediate": false,
    "setImmediate": false,
    "__dirname": false
  },
  "target": "electron-main",
  "externals": [nodeExternals()]
};
