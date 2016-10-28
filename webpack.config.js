console.log(__dirname);
module.exports = {
	cache: true,
	debug: true,
	entry: ['whatwg-fetch',
		__dirname + '/react-fullpage/demo.js'
	],
	publicPath: __dirname+ '/static',
	output: {
		path: __dirname+ '/static/js',
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
