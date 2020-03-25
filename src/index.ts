import { start as startAdmin, Settings as AdminSettings } from "maishu-chitu-admin";
import { ServerContextData } from "./common";
import { errors } from "./errors";
import path = require("path");
import { getClientComponentInfos } from "./component-helper";
import { VirtualDirectory } from "maishu-node-mvc";

export type Settings = AdminSettings & {
    appSourcePhysicalPath: string
    rootPhysicalPath: string
};

const AppirectoryName = "app";
export async function start(settings: Settings) {

    if (!settings.db) {
        throw errors.settingFieldNull("db");
    }
    if (!settings.appSourcePhysicalPath)
        throw errors.settingFieldNull<Settings>("appSourcePhysicalPath");

    let rootPhysicalPaths = [__dirname, path.join(__dirname, "../src")];
    if (settings.rootPhysicalPath)
        rootPhysicalPaths.push(settings.rootPhysicalPath);

    let componentInfos = [];
    let serverContextData = { db: settings.db, componentInfos: componentInfos } as ServerContextData;
    settings = Object.assign(settings, {
        serverContextData,
        rootPhysicalPath: rootPhysicalPaths
    } as Settings);

    settings.virtualPaths = Object.assign({
        // node_modules: path.join(__dirname, "../node_modules"),
        lib: path.join(__dirname, "../lib"),
        "text.js": path.join(__dirname, "../node_modules/maishu-requirejs-plugins/lib/text.js"),
    } as Settings["virtualPaths"], settings.virtualPaths || {});

    let r = await startAdmin(settings);
    let staticDirectory = r.rootDirectory.getDirectory("static");
    console.assert(staticDirectory != null);
    serverContextData.staticRoot = staticDirectory;

    let componentsDirectory = staticDirectory.addVirtualDirectory(AppirectoryName, settings.appSourcePhysicalPath, "replace");
    let items = getClientComponentInfos(componentsDirectory);
    componentInfos.push(...items);

    return { rootDirectory: r.rootDirectory };
}