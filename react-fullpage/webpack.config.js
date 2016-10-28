console.log(__dirname);
module.exports = {
	cache: true,
	debug: true,
	entry: ['whatwg-fetch',
		__dirname + '/demo.js',
		__dirname + '/License.js'
	],
	publicPath: __dirname,
	output: {
		path: __dirname,
		filename: 'bundlehomepage.js'
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
