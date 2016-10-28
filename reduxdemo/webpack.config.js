console.log(__dirname);
module.exports = {
	cache: true,
	debug: true,
	entry: [
		__dirname + '/reduxindex.js'
	],
	
	output: {
		path: __dirname,
		filename: 'reduxdemo.js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel',
			query:{
				presets:['es2015','react']
			}
		}
		]
	}
};
