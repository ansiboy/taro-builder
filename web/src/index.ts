import { start as startAdmin, Settings as AdminSettings } from "maishu-chitu-admin";
import { ServerContextData } from "./common";
import { errors } from "./errors";
import path = require("path");
import { getClientComponentInfos } from "./component-helper";
import { VirtualDirectory } from "maishu-node-mvc";

export type Settings = AdminSettings & {
    componentsPhysicalPath: string
    rootPhysicalPath: string
};

const ComponentsDirectoryName = "components";
export async function start(settings: Settings) {

    if (!settings.db) {
        throw errors.settingFieldNull("db");
    }
    if (!settings.componentsPhysicalPath)
        throw errors.settingFieldNull<Settings>("componentsPhysicalPath");

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

    // r.rootDirectory.addVirtualDirectory("static", path.join(__dirname, "static"), "merge");
    // r.rootDirectory.addVirtualDirectory("controllers", path.join(__dirname, "controllers"), "merge");
    // debugger
    let componentsDirectory = staticDirectory.addVirtualDirectory(ComponentsDirectoryName, settings.componentsPhysicalPath, "replace");debugger
    let items = getClientComponentInfos(componentsDirectory);
    componentInfos.push(...items);

    return { rootDirectory: r.rootDirectory };
}