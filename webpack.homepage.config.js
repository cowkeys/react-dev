console.log(__dirname);
module.exports = {
  entry: __dirname+'/reactdir/homepage/main.js',
  output: {
    path: __dirname+ '/static/js',
    filename: 'cusfullpage.js'
  },
  module: {
    loaders:[{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader',
			query:{
				presets:['es2015','react']
			}
		},
        { test: /\.css$/, loader: 'style-loader!css-loader' },
		{ test: /\.(png|jpg|ico)$/, loader: 'url-loader?limit=8192' }
      
    ]
  }
};