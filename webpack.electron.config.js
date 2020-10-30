const path = require('path');
const { ProgressPlugin } = require('webpack');

const src = path.join(process.cwd(), 'src', 'electron');

module.exports = {
  resolve: {
    extensions: [
      '.ts',
      '.js'
    ]
  },
  entry: {
    main: path.join(src, 'main.ts')
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          configFile: path.join(src, 'tsconfig.json')
        }
      }
    ]
  },
  optimization: {
    noEmitOnErrors: true
  },
  plugins: [
    new ProgressPlugin()
  ],
  // set to false any Node.js globals that we use in the Electron code
  node: {
    fs: false,
    __dirname: false
  },
  // indicates that transpilation code is to be run in the main process
  target: 'electron-main'
};