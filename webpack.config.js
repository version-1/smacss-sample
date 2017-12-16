var path = require('path')

module.exports = [{
  context: path.join(__dirname),
  entry: {
    style: './js/index.js'
  },
  output: {
    path: __dirname + '/public/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [ '.js', '.css', '.scss'],
    alias: {
        slick: path.resolve(__dirname, 'node_modules/slick-carousel/slick/'),
    },
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ['style-loader', 'css-loader','sass-loader']
      },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  }
}];
