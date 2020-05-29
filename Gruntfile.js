function modifyVersion() {
    const package = require("./package.json");

    let version = package.version || "1.0.0";
    let arr = version.split(".");
    arr[arr.length - 1] = (Number.parseInt(arr[arr.length - 1]) + 1).toString();
    version = arr.join(".");
    package.version = version;

    const fs = require('fs');
    let data = JSON.stringify(package, null, 4);
    fs.writeFileSync("package.json", data, "utf8");
};
modifyVersion();

const path = require("path");

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    let config = require("./config.json");

    grunt.initConfig({
        shell: {
            src: {
                command: "tsc -p src"
            }
        },
        webpack: {
            static: {
                entry: path.join(__dirname, "out/static/index.js"),
                output: {
                    path: path.join(__dirname, "dist"),
                    filename: "static.js",
                    libraryTarget: "umd"
                },
                mode: 'development',
                devtool: 'source-map',
                externals: ["react", "react-dom"],
                module: {
                    rules: [
                        {
                            test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
                            use: {
                                loader: 'babel-loader', // 加载模块 "babel" 是 "babel-loader" 的缩写
                                options: {
                                    presets: ['@babel/preset-env'],
                                    plugins: [
                                        ["@babel/plugin-proposal-decorators", { decoratorsBeforeExport: true }],
                                        ["@babel/plugin-proposal-class-properties"],
                                        ["@babel/transform-react-jsx", {
                                            "pragma": "React.createElement",
                                            "pragmaFrag": "React.Fragment"
                                        }]
                                    ]
                                }
                            }
                        }
                    ]
                }
            }
        },
        open: {
            browser: {
                path: `http://127.0.0.1:${config.port}/portal/#login`,
                app: 'Google Chrome'
            }
        }
    });

    grunt.registerTask("build", ["shell"]);
    grunt.registerTask("start", ["open"])
}