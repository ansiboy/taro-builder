import { start as startAdmin, Settings as AdminSettings } from "maishu-chitu-admin";
import { ServerContextData } from "./common";
import { errors } from "./errors";
import websiteConfig from "./website-config";
import { ConnectionOptions } from "maishu-node-data";

export type Settings = AdminSettings & {
    db: ConnectionOptions
};

// const AppirectoryName = "app";
export function start(settings: Settings) {

    if (!settings.db) {
        throw errors.settingFieldNull("db");
    }

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