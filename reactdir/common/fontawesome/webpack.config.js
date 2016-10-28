console.log(__dirname);
module.exports = {
  entry: 
    'E:/work/src/react-dev/reactdir/common/fontawesome/main.js',
  output: {
    path: 'E:/work/src/react-dev/static/js/fontawesome',
    filename: 'fontawesome.js'
  },
  module: {
    loaders:[{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader',
			query:{
				presets:['es2015','react']
			}
		},{ 
      test: /\.css$/, 
      loader: 'style-loader!css-loader' 
    },{ 
      test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
      loader: 'file-loader'}
    ]
  }
};