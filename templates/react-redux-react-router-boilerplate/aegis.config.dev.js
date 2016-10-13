import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
const fileName = '[name].js?[hash]';

module.exports = {
  web: {
    entry: {
      web: './src/main',
      core: ['react', 'redux', 'react-dom', 'react-router', 'react-router-redux']
    },
    output: {
      path: 'build',
      filename: fileName,
      chunkFilename: '[hash].chunk.js'
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: ['core'],
        filename: fileName,
      }),
      new HtmlWebpackPlugin({
        inject: 'body',
        filename: 'index.html',
        template: 'index.html'
      })
    ]
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
