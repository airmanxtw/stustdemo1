const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  //mode: 'development',
  mode: "production",
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
      // options: {
      //   presets: [['@babel/preset-env',{
      //     targets:{
      //       "ie":"8"
      //     }
      //   }]]
      // }    
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader'
    },
    {
      test: /\.css$/,
      use: [
        'vue-style-loader',
        'css-loader'
      ]
    }

    ]
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ],
  resolve: {
    extensions: ['.json', '.js', '.jsx'],

  },
  //target: ['web', 'es5']
  // devtool: 'source-map',
  // devServer: {
  //   contentBase: path.join(__dirname, '/dist/'),
  //   inline: true,
  //   host: 'localhost',
  //   port: 8080,
  // }
};