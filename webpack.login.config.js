console.log(__dirname);
module.exports = {
  entry: 
    __dirname+'/reactdir/login/index.js',
    
  output: {
    path: __dirname+'/static/js',
    filename: 'cuslogin.js'
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
    }
    ]
  }
};