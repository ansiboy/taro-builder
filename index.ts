import { start as startAdmin, Settings as AdminSettings } from "maishu-chitu-admin";
import { ServerContextData } from "./common";
import { errors } from "./errors";
import websiteConfig from "./website-config";
import { ConnectionOptions } from "maishu-node-data";
import * as path from "path";

export type Settings = AdminSettings & {
    db: ConnectionOptions,
    componentStation: string,
};

export function start(settings: Settings) {
    if (!settings.db) {
        throw errors.settingFieldNull("db");
    }

    if (!settings.componentStation) {
        throw errors.settingFieldNull("componentStation");
    }

    settings.db = Object.assign({
        entities: ["./entities.js"],
    } as Settings["db"], settings.db);

    settings.virtualPaths = Object.assign(settings.virtualPaths || {}, {
        "node_modules": path.join(__dirname, "node_modules"),
    });

    settings.proxy = Object.assign(settings.proxy || {}, {
        "/design/(\\S+)": `${settings.componentStation}/$1`,
    });

    let componentInfos = [];
    let serverContextData: ServerContextData = { db: settings.db, componentInfos: componentInfos };
    settings.websiteConfig = websiteConfig;
    settings.serverContextData = serverContextData;
    startAdmin(settings).then(r => {
        let staticDirectory = r.websiteDirectory.findDirectory("static");
        console.assert(staticDirectory != null);
        serverContextData.staticRoot = staticDirectory;
    })
}