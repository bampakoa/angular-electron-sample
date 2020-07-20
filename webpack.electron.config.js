const path = require('path');
const { NoEmitOnErrorsPlugin, ProgressPlugin } = require('webpack');

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
    new NoEmitOnErrorsPlugin(),
    new ProgressPlugin()
  ],
  node: {
    fs: false,
    __dirname: false
  },
  target: 'electron-main'
};