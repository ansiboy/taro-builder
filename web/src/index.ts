import { start as startAdmin, Settings as AdminSettings } from "maishu-chitu-admin";
import { ServerContextData } from "./common";
import { errors } from "./errors";
import path = require("path");
import { getClientComponentInfos } from "./component-helper";
import { VirtualDirectory } from "maishu-node-mvc";

type Settings = AdminSettings & {
    componentsPhysicalPath: string
};

const ComponentsDirectoryName = "components";
export async function start(settings: Settings) {

    if (!settings.db) {
        throw errors.settingFieldNull("db");
    }
    if (!settings.componentsPhysicalPath)

        throw errors.settingFieldNull<Settings>("componentsPhysicalPath");

    let componentInfos = [];
    let serverContextData = { db: settings.db, componentInfos: componentInfos } as ServerContextData;
    settings = Object.assign({
        serverContextData,
        virtualPaths: {
            node_modules: path.join(__dirname, "../node_modules"),
            lib: path.join(__dirname, "../lib"),
            "text.js": path.join(__dirname, "../node_modules/maishu-requirejs-plugins/lib/text.js"),
            // "site.less": path.join(__dirname, "../src/static/site.less"),
        } as Settings["virtualPaths"]
    } as Settings, settings);

    let r = await startAdmin(settings);
    let staticDirectory = r.rootDirectory.getDirectory("static");
    console.assert(staticDirectory != null);
    serverContextData.staticRoot = staticDirectory;

    r.rootDirectory.addVirtualDirectory("static", path.join(__dirname, "../src/static"), "merge");

    let componentsDirectory = staticDirectory.addVirtualDirectory(ComponentsDirectoryName, settings.componentsPhysicalPath, "replace");
    let items = getClientComponentInfos(componentsDirectory);
    componentInfos.push(...items);

    return { rootDirectory: r.rootDirectory };
}