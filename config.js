const path = require("path");
const m = require("maishu-node-data");

/** @type m.ConnectionOptions */
let db = {
    type: "mysql", host: "127.0.0.1", username: "root", password: "81263",
    port: 3306, name: "taro-builder", entities: ["./entities.js"], database: "taro-builder"
};
module.exports = {
    "port": 5216,
    rootPhysicalPath: __dirname,
    db,
    virtualPaths: {
        "node_modules": path.join(__dirname, "node_modules"),
    },
    proxy: {
        "/design/(\\S+)": "http://127.0.0.1:6736/$1",
    }
}