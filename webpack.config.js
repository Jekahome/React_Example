//webpack.config.js
//Чтобы не указывать все опции в командной строке, можно создать
//конфигурационный файл webpack.config.js в корне приложения:



//const HtmlWebpackPlugin = require('html-webpack-plugin'); //npm install html-webpack-plugin --save-dev
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');


const number = '33';
module.exports = {
    context: __dirname ,
    devtool: "source-map",
    entry: `./lessons_book/jsxJS/forModules${number}/${number}.jsx`,//что преобразовывать
    output: {
        path: path.resolve(__dirname, `lessons_book/JS/forModules${number}`),//куда преобразовывать
        filename: "bundle.js",
        publicPath: "/lessons_book/",
    },
    module: {
        rules: [
           {
                test: /\.(js|jsx)$/,
                include: [
                    path.resolve(__dirname, `lessons_book/jsxJS/forModules${number}`)
                ],
                exclude: /(node_modules|bower_components)/,
                use:
                    {
                        loader: "babel-loader?cacheDirectory=true",
                        options: {
                            presets: ['env',"es2015",'react', 'stage-2'],
                            //plugins: [require('plugin-proposal-object-rest-spread')]
                        }
                    }
            },
            {
                // npm install --save-dev style-loader css-loader
                test: /\.css$/,
                /*include: [
                    path.resolve(__dirname, `lessons_book/jsxJS/forModules${number}/css`)
                ],*/
                exclude: /(node_modules|bower_components)/,
                use:['style-loader', 'css-loader']
            }
        ]
    }
    ,//для автоперезагрузки свой сервер
    /*devServer: {// $ webpack-dev-server --port 10000 --host 0.0.0.0
        inline: true,
        contentBase:path.join(__dirname, "lessons_book") ,//для index.html
        compress: true,
        port: 10000,
        host: "0.0.0.0",
       // index: 'index.html' не пашет
    },*/
  plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
         new UglifyJSPlugin({parallel: true }),
        new webpack.optimize.OccurrenceOrderPlugin()
        //new HtmlWebpackPlugin({template: './lessons_book/22.html'})
    ]
   /* plugins: process.env.NODE_ENV === 'production' ? [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new UglifyJSPlugin({parallel: true })
    ] : [],*/
};

//Теперь можно запускать вебпак простой командой $webpack -w
