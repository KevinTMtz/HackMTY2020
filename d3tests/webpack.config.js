const path = require('path');

module.exports = (env) => ({
  entry: './src/index.js',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  mode: env?.production ? 'production' : 'development',
  devtool: env?.production ? 'source-map' : 'eval-cheap-module-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    watchContentBase: true,
    compress: true,
    open: true,
    port: 8080,
  },
  stats: {
    modulesSort: 'size',
  },
});
