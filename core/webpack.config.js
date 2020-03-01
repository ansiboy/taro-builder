const webpack = require('webpack');
const pkg = require("./package.json");
const path = require("path");

let license = `~
 ${pkg.name} v${pkg.version}

 Copyright (c) 2016-2018, mais.shu <ansiboy@163.com>
 Licensed under the MIT License.
`;
module.exports = {
    entry: __dirname + "/out/src/index.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/dist",//打包后的文件存放的地方
        filename: "index.js",//打包后输出文件的文件名
        libraryTarget: 'umd',
        globalObject: 'typeof window === \'undefined\' ? global : window'
    },
    mode: 'development',
    devtool: 'source-map',
    externals: ["@tarojs/components", "taro-ui"],
    plugins: [
        new webpack.BannerPlugin(license),
    ],
    //=========================================
    // 加了这句, 才会加载 jsx 模块
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            "react": path.join(__dirname, "node_modules/react/cjs/react.development.js")
        }
    },
    //=========================================
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [require('@babel/plugin-transform-react-jsx')]
                    }
                },
                exclude: /node_modules/
            }
        ]
    }
}