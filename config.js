const m = require("maishu-node-data");

//=============================================================
/** @type m.ConnectionOptions */
let db = {
    type: "mysql", host: "127.0.0.1", username: "root", password: "81263",
    port: 3306, name: "taro-builder", database: "taro-builder", entities: ["./out/entities.js"],
    synchronize: false,
};
let componentStation = "http://192.168.2.118:6736";
let port = 5216;
//=============================================================

module.exports = { port, rootPhysicalPath: __dirname, db, componentStation };