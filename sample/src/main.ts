import { start as startTaroBuilder, } from "taro-builder";
import config from "./config";
import path = require("path");

let componentsPhysicalPath = path.join(__dirname, "../app/src/components");
startTaroBuilder({
    port: config.port,
    rootPhysicalPath: path.join(__dirname),
    componentsPhysicalPath: componentsPhysicalPath,
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