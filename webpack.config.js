const webpack = require('webpack');
const path = require("path");
let pkg = require("./package.json");

// process.env.TARO_ENV = "h5";
module.exports = {
    entry: {
        "taro-bundle": path.join(__dirname, "lib/taro/taro-bundle.js"),
        "taro-ui": path.join(__dirname, "lib/taro/taro-ui")
    }, 
    output: {
        path: path.join(__dirname, "/lib"), //打包后的文件存放的地方
        filename: "[name].js",             //打包后输出文件的文件名
        libraryTarget: 'amd'
    },
    mode: 'development',
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            "process.env": { TARO_ENV: "h5" }
        })
    ],
    externals: [
    ],
    module: {
        rules: [
            {
                test: /\.less$/i,
                use: 'raw-loader',
            },
            {
                test: /\.css$/,
                use: ['css-loader']
            },
            {
                test: /\.scss$/,
                use: ["sass-loader"]
            },
            {
                test: /\.js$/,
                // exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            ["@babel/plugin-proposal-decorators", { decoratorsBeforeExport: true }],
                            ["@babel/plugin-proposal-class-properties"],
                            ["@babel/transform-react-jsx", {
                                "pragma": "Nerv.createElement",
                                "pragmaFrag": "Nerv.Fragment"
                            }]
                        ]
                    }
                }
            }
        ]
    }
}