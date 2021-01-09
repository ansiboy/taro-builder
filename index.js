"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const maishu_chitu_admin_1 = require("maishu-chitu-admin");
const errors_1 = require("./errors");
const website_config_1 = require("./website-config");
// const AppirectoryName = "app";
function start(settings) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!settings.db) {
            throw errors_1.errors.settingFieldNull("db");
        }
        let componentInfos = [];
        let serverContextData = { db: settings.db, componentInfos: componentInfos };
        settings.websiteConfig = website_config_1.default;
        let r = yield maishu_chitu_admin_1.start(settings);
        let staticDirectory = r.websiteDirectory.findDirectory("static");
        console.assert(staticDirectory != null);
        serverContextData.staticRoot = staticDirectory;
        return { rootDirectory: r.websiteDirectory };
    });
}
exports.start = start;
