import { start } from "./index";
import path = require("path");
import websiteConfig from "./website-config";

start({
    port: 5216,
    rootPhysicalPath: __dirname,
    db: {
        host: "127.0.0.1",
        database: "taro-builder",
        user: "root",
        password: "81263",
        port: 3306
    },
    virtualPaths: {
        "node_modules": path.join(__dirname, "node_modules"),
        // "lib": path.join(__dirname, "lib")
    },
    websiteConfig: websiteConfig,
    proxy: {
        "/design/(\\S+)": "http://127.0.0.1:6736/$1"
    }
})
