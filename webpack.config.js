let webpack = require('webpack');
let ExtractTextPlugin = require("extract-text-webpack-plugin"); //插件-分离css
let HtmlWebpackPlugin = require("html-webpack-plugin") //插件-动态生成HTML5文件
let moment = require('moment')
const PRODUCTION = process.env.NODE_ENV === 'production' ? true : false; //定义是否为生产环境
// const webpackDevUrl = 'http://192.168.1.143';
// const webpackDevUrl = 'http://192.168.1.120:8080';
const webpackDevUrl = 'http://192.168.1.180/crm_login';
// const webpackDevUrl = 'http://192.168.1.112';

const productionPlugins = [
	new webpack.optimize.UglifyJsPlugin({
		//压缩js文件
		output: {
			comments: false, // 删除注释
		},
		compress: {
			warnings: false
		}
	}),

]

const developmentPlugins = [
	//热更新模块
	new webpack.HotModuleReplacementPlugin(),
]

let plugins = [
	new webpack.DefinePlugin({
		//定义全局变量
		'process.env': {
			'NODE_ENV': PRODUCTION ? JSON.stringify('production') : JSON.stringify('development'),
		},
		'GLOBALSUCCESS': 1000,
		'TOKENNAME': JSON.stringify('eplustoken'),
		'GLOBALURL': JSON.stringify('http://192.168.1.180/crm_login')
	}),
	// new webpack.optimize.AggressiveMergingPlugin(),
	new ExtractTextPlugin({
		//生产环境时提取css到外部
		filename: "[name].css",
		disable: !PRODUCTION
	}),
	new HtmlWebpackPlugin({
		title: 'CRM',
		filename: 'index.html',
		production: PRODUCTION,
		template: './src/template.ejs'
	})
];

if (PRODUCTION) {
	Array.prototype.push.apply(plugins, productionPlugins);
} else {
	Array.prototype.push.apply(plugins, developmentPlugins);
}

//用cdn来代替直接import文件,提取文件
const EXTERNALS = !PRODUCTION ? {} : {
	'react': 'React',
	'react-dom': 'ReactDOM',
	'react-router-dom': 'react-router-dom',
	'redux': 'redux',
	'react-redux': 'react-redux',
	'redux-thunk': 'redux-thunk',
	'superagent': 'superagent',
	'echarts': 'echarts',
};

let webpackconfig = {
	devtool: 'source-map',
	entry: {
		main: './src/app.jsx'
	},
	devtool: 'source-map',
	output: {
		publicPath: '/',
		path: __dirname + '/static',
		filename: "bundle.js"
	},
	module: {

		rules: [{
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				fallback: "style-loader",
				use: "css-loader"
			})
		}, {
			test: /\.less$/,
			use: ExtractTextPlugin.extract({
				use: [{
					loader: "css-loader"
				}, {
					loader: "less-loader"
				}],
				// use style-loader in development
				fallback: "style-loader"
			})
		}, {
			test: /\.jsx?$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['es2015', 'react'],
					plugins: [
						["import", {
							libraryName: 'antd',
							style: 'css'
						}]
					]
				}
			}
		}, {
			test: /\.json$/,
			use: 'json-loader'
		}, {
			test: /.(png|jpg)$/,
			use: 'url-loader?lomit=8192'
		}]
	},
	externals: EXTERNALS,
	plugins: plugins,
	resolve: {
		extensions: ['.jsx', '.js', '.json'],
		alias: {
			"ag-grid-root": __dirname + "/node_modules/ag-grid-enterprise"
		},
	},
	devServer: {
		hot: true,
		// host: '192.168.1.119',
		contentBase: "./static/",
		proxy: {
			"/users": webpackDevUrl,
			"/approvals": webpackDevUrl,
			"/employees": webpackDevUrl,
			"/orders": webpackDevUrl,
			"/code": webpackDevUrl,
			"/areas": webpackDevUrl,
			"/token": webpackDevUrl,
			"/companies": webpackDevUrl,
			"/appliances": webpackDevUrl,
			"/customers": webpackDevUrl,
			"/drugs": webpackDevUrl,
			"/sales": webpackDevUrl,
			"/hospitals": webpackDevUrl,
			"/plans": webpackDevUrl,
			"/reports": webpackDevUrl,
			"/teams": webpackDevUrl,
			"/visits": webpackDevUrl,
			"/policies": webpackDevUrl,
			"/departments": webpackDevUrl,
			"/positions": webpackDevUrl,
			"/permissions": webpackDevUrl,
			"/roles": webpackDevUrl,
			"/positions/selects": webpackDevUrl,
			"/accounts": webpackDevUrl,
			"/process": webpackDevUrl,
			"/drug/agent/": webpackDevUrl,
			"/drug/deliver/": webpackDevUrl,
			"/drug/billing/": webpackDevUrl,
			"/manufacturer": webpackDevUrl,
			"/billing": webpackDevUrl,
			"/deliver": webpackDevUrl,
			"/differentDrug": webpackDevUrl,
			"/manufacturer/contact/": webpackDevUrl,
			"/manufacturer/account/": webpackDevUrl,
			"/differentManufacturer": webpackDevUrl,
			"/payments": webpackDevUrl,
			"/areas/others": webpackDevUrl,
			"/deliver/account/": webpackDevUrl,
			"/deliverContact": webpackDevUrl,
			"/deliver/contact": webpackDevUrl,
			"/differentDeliver": webpackDevUrl,
			"/differentBilling": webpackDevUrl,
			"/hospital": webpackDevUrl,
			"/hospital/type": webpackDevUrl,
			"/differentHospital": webpackDevUrl,
			"/agent":webpackDevUrl
		},
		historyApiFallback: true
	},
};

module.exports = webpackconfig;

