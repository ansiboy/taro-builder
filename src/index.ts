import { start as startAdmin, Settings as AdminSettings } from "maishu-chitu-admin";
import { ServerContextData } from "./common";
import { errors } from "./errors";
import websiteConfig from "./website-config";
import { ConnectionOptions } from "maishu-node-data";
import * as path from "path";
import { VirtualDirectory } from "maishu-node-mvc";

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

    // settings.virtualPaths = Object.assign(settings.virtualPaths || {}, {
    //     "node_modules": path.join(__dirname, "node_modules"),
    //     "static": path.join(__dirname, "../src/static"),
    // });

    settings.proxy = Object.assign(settings.proxy || {}, {
        "/design/(\\S+)": `${settings.componentStation}/$1`,
    });

    let websiteRoot = new VirtualDirectory(__dirname);
    websiteRoot.setPath("static", path.join(__dirname, "../src/static"));
    websiteRoot.findDirectory("static").setPath("node_modules", path.join(__dirname, "../node_modules"));
    let serverContextData: ServerContextData = { db: settings.db };
    settings.websiteConfig = websiteConfig;
    settings.serverContextData = serverContextData;
    settings.rootDirectory = websiteRoot;
    let w = startAdmin(settings).then(r => {
        let staticDirectory = r.websiteDirectory.findDirectory("static");
        console.assert(staticDirectory != null);
        serverContextData.staticRoot = staticDirectory;
    })
}