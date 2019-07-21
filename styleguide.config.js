const path = require('path')
module.exports = {
  require: [
    'babel-polyfill',
    path.join(__dirname, './src/style/style.css')
  ],
  contextDependencies: [path.resolve(__dirname, 'src/context')]
}