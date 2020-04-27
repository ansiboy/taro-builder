import { start } from "./index";
import path = require("path");
import websiteConfig from "./website-config";

let componentsPhysicalPath = "D:/projects/taro-builder-demo/app/src";//path.join(__dirname, "D:/projects/taro-builder-demo/app/src");//path.join(__dirname, "static/components");//path.join(__dirname, "../../sampleap/p/.temp/components");
start({
    port: 5216,
    rootPhysicalPath: __dirname,
    appSourcePhysicalPath: componentsPhysicalPath,
    editorsPath: "",
    db: {
        host: "127.0.0.1",
        database: "taro-builder",
        user: "root",
        password: "81263",
        port: 3306
    },
    virtualPaths: {
        "node_modules": path.join(__dirname, "../node_modules"),
        // "maishu-chitu-admin/static": null
    },
    websiteConfig: websiteConfig
})
