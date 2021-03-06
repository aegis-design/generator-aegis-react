import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
const fileName = '[name].[hash].js';

module.exports = {
  web: {
    entry: {
      web: './src/main',
      core: ['react', 'redux', 'react-dom']
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
        title: 'React Redux Webpack Template',
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
