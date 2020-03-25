import { start as startTaroBuilder, } from "../out/index";
import config from "./config";
import path = require("path");

let componentsPhysicalPath = path.join(__dirname, "./app/src");
startTaroBuilder({
    port: config.port,
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
})