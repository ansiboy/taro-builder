const webpack = require('webpack');
const path = require("path");

module.exports = {
    entry: {
        "taro-components": path.join(__dirname, "lib/taro/taro-components.js"),
        // "taro-ui": path.join(__dirname, "lib/taro/taro-ui"),
        "taro-h5": path.join(__dirname, "lib/taro/taro-h5")
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
            "process.env": { TARO_ENV: "h5", FRAMEWORK: "react" }
        })
    ],
    externals: [
        "react", "react-dom", "@tarojs/components", "@tarojs/taro-h5"
    ],
    resolve: {
        alias: {
            "nervjs": path.resolve("node_modules/react/umd/react.development")
        },
    },
    module: {
        rules: [
            {
                test: /\.less$/i,
                use: 'raw-loader',
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },  // 将 JS 字符串生成为 style 节点
                    { loader: "css-loader" },    // 将 CSS 转化成 CommonJS 模块
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: "style-loader" },  // 将 JS 字符串生成为 style 节点
                    { loader: "css-loader" },    // 将 CSS 转化成 CommonJS 模块
                    { loader: "sass-loader" },   // 将 Sass 编译成 CSS
                ]
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