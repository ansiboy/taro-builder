import { start as startAdmin, Settings as AdminSettings } from "maishu-chitu-admin";
import { ServerContextData } from "./common";
import { errors } from "./static/asset/errors";
import path = require("path");
import { getClientComponentInfos } from "./component-helper";
import websiteConfig, { libVirtualPath } from "./website-config";
import assign from "object-assign-deep";
import { pathContact } from "maishu-toolkit";

export type Settings = AdminSettings & {
    /** Taro app 源码物理路径，例如：D:\projects\taro-builder-demo\app\src */
    appPhysicalPath: string
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
    if (!settings.appPhysicalPath)
        throw errors.settingFieldNull<Settings>("appPhysicalPath");

    let rootPhysicalPaths = [__dirname, path.join(__dirname, "../src")];
    if (settings.rootPhysicalPath)
        rootPhysicalPaths.push(settings.rootPhysicalPath);

    let componentInfos = [];
    let serverContextData = { db: settings.db, componentInfos: componentInfos } as ServerContextData;
    settings = Object.assign(settings, {
        serverContextData,
        rootPhysicalPath: rootPhysicalPaths
    } as Settings);

    // settings.virtualPaths = Object.assign({
    //     lib: path.join(__dirname, "../lib"),
    // } as Settings["virtualPaths"], settings.virtualPaths || {});
    let virtualPaths: Settings["virtualPaths"] = {};
    virtualPaths[libVirtualPath] = path.join(__dirname, "../lib");
    settings.virtualPaths = Object.assign(virtualPaths, settings.virtualPaths || {});


    websiteConfig.componentEditorsPath = settings.editorsPath;
    settings.websiteConfig = assign(websiteConfig, settings.websiteConfig || {});
    settings.commonjsToAmd = settings.commonjsToAmd || [];

    //========================================================================
    // 用于把 路径同一为 / 分隔
    let appPhysicalPath = pathContact(settings.appPhysicalPath, "");
    //========================================================================
    settings.commonjsToAmd.push(appPhysicalPath);

    let r = await startAdmin(settings);
    let staticDirectory = r.rootDirectory.getDirectory("static");
    console.assert(staticDirectory != null);
    serverContextData.staticRoot = staticDirectory;

    let runtimeComponentsDirectory = staticDirectory.addVirtualDirectory(AppirectoryName, settings.appPhysicalPath, "replace");
    let items = getClientComponentInfos(runtimeComponentsDirectory);
    let designtimeComponentsDirectory = staticDirectory.getDirectory("design-components");
    if (designtimeComponentsDirectory) {
        let designtimeItems = getClientComponentInfos(designtimeComponentsDirectory);
        for (let i = 0; i < items.length; i++) {
            let desingtimeItem = designtimeItems.filter(o => o.type == items[i].type)[0];
            if (desingtimeItem) {
                items[i].path = desingtimeItem.path;
            }
        }
    }

    componentInfos.push(...items);
    return { rootDirectory: r.rootDirectory };
}