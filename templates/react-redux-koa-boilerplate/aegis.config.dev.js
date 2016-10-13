import webpack from 'webpack';
import AssetsPlugin from 'assets-webpack-plugin';

const fileName = '[name].js?[hash]';

module.exports = {
  web: {
    entry: {
      home: './src/home/main',
      core: ['react', 'redux', 'react-dom', 'react-redux', 'redux-logger', 'redux-thunk']
    },
    output: {
      path: `${__dirname}/build/public`,
      filename: fileName,
      chunkFilename: '[hash].chunk.js'
    },
    plugins: [
      new AssetsPlugin({
        path: `${__dirname}/build`,
        filename: 'assets.js',
        processOutput: x => `module.exports = ${JSON.stringify(x)};`,
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: ['core'],
        filename: fileName,
      })
    ]
  },
  node: {
    entry: './src/server/main',
    output: {
      path: './build',
      filename: 'server.js',
      libraryTarget: 'commonjs2',
    },
    externals: [
      /^\.\/assets$/,
      function filter(context, request, cb) {
        const isExternal =
          request.match(/^[@a-z][a-z\/\.\-0-9]*$/i);
        cb(null, Boolean(isExternal));
      }
    ]
  },
  copy: {
    source: 'src/public',
    target: 'build/public'
  },
  autoprefixer: {
    browsers: [
      'Chrome >= 35',
      'Firefox >= 31',
      'Explorer >= 9',
      'Opera >= 12',
      'Safari >= 7.1'
    ]
  }
};
