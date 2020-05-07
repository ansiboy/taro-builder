import { start as startAdmin, Settings as AdminSettings } from "maishu-chitu-admin";
import { ServerContextData } from "./common";
import { errors } from "./errors";
import path = require("path");
import { getClientComponentInfos } from "./component-helper";
import websiteConfig from "./website-config";

export type Settings = AdminSettings & {
    /** Taro app 源码物理路径，例如：D:\projects\taro-builder-demo\app\src */
    appSourcePhysicalPath: string
    /** 组件编辑器的脚本路径，例如：component-editors/index */
    editorsPath: string
    /** 项目根目录 */
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
        lib: path.join(__dirname, "../lib"),
    } as Settings["virtualPaths"], settings.virtualPaths || {});

    websiteConfig.componentEditorsPath = settings.editorsPath;
    settings.websiteConfig = Object.assign(websiteConfig, settings.websiteConfig || {});

    let r = await startAdmin(settings);
    let staticDirectory = r.rootDirectory.getDirectory("static");
    console.assert(staticDirectory != null);
    serverContextData.staticRoot = staticDirectory;

    let runtimeComponentsDirectory = staticDirectory.addVirtualDirectory(AppirectoryName, settings.appSourcePhysicalPath, "replace");
    let items = getClientComponentInfos(runtimeComponentsDirectory);
    let designtimeComponentsDirectory = staticDirectory.getDirectory("design-components");
    if (designtimeComponentsDirectory) {
        let designtimeItems = getClientComponentInfos(designtimeComponentsDirectory);
        for (let i = 0; i < items.length; i++) {
            let desingtimeItem = designtimeItems.filter(o => o.type == items[i].type)[0];
            if (desingtimeItem) {
                debugger
                items[i].path = desingtimeItem.path;
            }
        }
    }

    componentInfos.push(...items);
    return { rootDirectory: r.rootDirectory };
}