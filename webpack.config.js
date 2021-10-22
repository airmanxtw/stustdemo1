const path = require('path');
var WebpackObfuscator = require('webpack-obfuscator');
module.exports = {
  //mode: 'development',
  mode:"production",
  entry: path.join(__dirname, 'src', 'index'),
  //watch: true,
  output: {
    path: path.join(__dirname, 'dist'),
    //publicPath: '/dist/',
    filename: "bundle.js",
    //chunkFilename: '[name].js'
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      include: [
        path.resolve(__dirname, 'src')
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules')
      ],
      loader: 'babel-loader',
      // query: {
      //   presets: [
      //     ["@babel/env", {
      //       "targets": {
      //         "browsers": "last 2 chrome versions"
      //       }
      //     }]
      //   ]
      // }
    }]
  },
  plugins: [
    new WebpackObfuscator ({
        rotateStringArray: true
    }, ['excluded_bundle_name.js'])
  ],
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },
  // devtool: 'source-map',
  // devServer: {
  //   contentBase: path.join(__dirname, '/dist/'),
  //   inline: true,
  //   host: 'localhost',
  //   port: 8080,
  // }
};