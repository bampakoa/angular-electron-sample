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
  plugins: [
    new ProgressPlugin()
  ],
  // indicates that transpilation code is to be run in the main process
  target: 'electron-main'
};