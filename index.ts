import { start as startAdmin, Settings as AdminSettings } from "maishu-chitu-admin";
import { ServerContextData } from "./common";
import { errors } from "./errors";
import path = require("path");
import websiteConfig, { libVirtualPath } from "./website-config";
import assign from "object-assign-deep";

export type Settings = AdminSettings & {
    // /** Taro app 源码物理路径，例如：D:\projects\taro-builder-demo\app\src */
    // appPhysicalPath: string
    /** 组件编辑器的脚本路径，例如：component-editors/index */
    // editorsPath: string
    // /** 项目根目录 */
    // rootPhysicalPath: string
};

// const AppirectoryName = "app";
export async function start(settings: Settings) {

    if (!settings.db) {
        throw errors.settingFieldNull("db");
    }

    let componentInfos = [];
    let serverContextData = { db: settings.db, componentInfos: componentInfos } as ServerContextData;
    settings = Object.assign(settings, {
        serverContextData,
    } as Settings);

    let virtualPaths: Settings["virtualPaths"] = settings.virtualPaths || {};
    virtualPaths[libVirtualPath] = path.join(__dirname, "lib");
    settings.virtualPaths = Object.assign(virtualPaths, settings.virtualPaths || {});



    settings.websiteConfig = assign(websiteConfig, settings.websiteConfig || {});
    // settings.commonjsToAmd = settings.commonjsToAmd || [];

    //========================================================================
    // 用于把 路径同一为 / 分隔
    // let appPhysicalPath = pathContact(settings.appPhysicalPath, "");
    //========================================================================
    // settings.commonjsToAmd.push(appPhysicalPath);

    let r = await startAdmin(settings);
    let staticDirectory = r.websiteDirectory.findDirectory("static");
    console.assert(staticDirectory != null);
    serverContextData.staticRoot = staticDirectory;

    return { rootDirectory: r.websiteDirectory };
}