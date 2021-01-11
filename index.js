"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const maishu_chitu_admin_1 = require("maishu-chitu-admin");
const errors_1 = require("./errors");
const website_config_1 = require("./website-config");
const path = require("path");
function start(settings) {
    if (!settings.db) {
        throw errors_1.errors.settingFieldNull("db");
    }
    if (!settings.componentStation) {
        throw errors_1.errors.settingFieldNull("componentStation");
    }
    settings.db = Object.assign({
        entities: ["./entities.js"],
    }, settings.db);
    settings.virtualPaths = Object.assign(settings.virtualPaths || {}, {
        "node_modules": path.join(__dirname, "node_modules"),
    });
    settings.proxy = Object.assign(settings.proxy || {}, {
        "/design/(\\S+)": `${settings.componentStation}/$1`,
    });
    let componentInfos = [];
    let serverContextData = { db: settings.db, componentInfos: componentInfos };
    settings.websiteConfig = website_config_1.default;
    settings.serverContextData = serverContextData;
    maishu_chitu_admin_1.start(settings).then(r => {
        let staticDirectory = r.websiteDirectory.findDirectory("static");
        console.assert(staticDirectory != null);
        serverContextData.staticRoot = staticDirectory;
    });
}
exports.start = start;
