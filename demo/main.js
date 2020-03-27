"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../out/index");
const config_1 = require("./config");
const path = require("path");
let componentsPhysicalPath = path.join(__dirname, "./app/.temp");
index_1.start({
    port: config_1.default.port,
    rootPhysicalPath: path.join(__dirname),
    appSourcePhysicalPath: componentsPhysicalPath,
    db: {
        host: "127.0.0.1",
        database: "taro-builder",
        user: "root",
        password: "81263",
        port: 3306
    },
    virtualPaths: {
        "node_modules": path.join(__dirname, "../node_modules")
    }
});
