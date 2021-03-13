import { getVirtualPaths } from "maishu-admin-scaffold";
import * as path from "path";
import { ConnectionOptions } from "maishu-node-data";

export let db: ConnectionOptions = {
    type: "mysql", username: "root", password: "81263", name: "taro-builder",
    database: "taro-builder", entities: ["./entities.js"],
    synchronize: false,
    // host: "127.0.0.1", port: 3306,
    host: "192.168.2.94", port: 43306
};


let virtualPaths = getVirtualPaths("/static", path.join(__dirname, "../src/static"));
virtualPaths.static = path.join(__dirname, "../src/static");
virtualPaths["static/node_modules"] = path.join(__dirname, "../node_modules");

let componentStation = "http://127.0.0.1:6736";
let imageHost = "192.168.2.94:2880/image";

export default {
    port: 5216,
    virtualPaths,
    proxy: {
        "/design/(\\S*)": `${componentStation}/$1`,
        // "/preview/modules/(\\S*)": `${componentStation}/modules/$1`,
        "^/ueditor/net/upload/(\\S*)": `http://${imageHost}/Images/upload/$1`,
    }
}