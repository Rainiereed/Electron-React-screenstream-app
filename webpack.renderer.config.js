const rules = require('./webpack.rules');

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
  // Solved the error: Module not found: Error: Can't resolve 'fs' in '/Users/rainnie/Documents/electron-react-app/node_modules/electron',ModuleNotFoundError: Module not found: Error: Can't resolve 'path' in '/Users/rainnie/Documents/electron-react-app/node_modules/electron'
  // npm install path-browserify, then add the below:
  resolve: {
    fallback: { 
      "fs": false,
      "path": require.resolve("path-browserify")
    }
  }

};
