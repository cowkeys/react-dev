module.exports = {
  entry: './main.js',
  output: {
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
    ]
  }
};