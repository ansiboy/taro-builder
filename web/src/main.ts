import { start } from "./index";
import path = require("path");

let componentsPhysicalPath = path.join(__dirname, "../../sample/app/src/components");//path.join(__dirname, "static/components");//path.join(__dirname, "../../sampleap/p/.temp/components");
start({
    port: 5216,
    rootPhysicalPath: __dirname,
    componentsPhysicalPath: componentsPhysicalPath,
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
    }
})
