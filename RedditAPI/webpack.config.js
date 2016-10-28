console.log(__dirname);
module.exports = {
	cache: true,
	debug: true,
	entry: ['isomorphic-fetch',
		__dirname + '/index.js'
	],
	output: {
		path: __dirname,
		filename: 'bundle.js'
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
