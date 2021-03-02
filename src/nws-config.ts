import { getVirtualPaths } from "maishu-admin-scaffold";
import * as path from "path";

let virtualPaths = getVirtualPaths("/static", path.join(__dirname, "../src/static"));
virtualPaths.static = path.join(__dirname, "../src/static");
virtualPaths["static/node_modules"] = path.join(__dirname, "../node_modules");
let config = require("../config.js");
module.exports = {
    port: 5216,
    virtualPaths,
    proxy: {
        "/design/(\\S+)": `${config.componentStation}/$1`,
    }
}