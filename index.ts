import { start as startAdmin, Settings as AdminSettings } from "maishu-chitu-admin";
import { ServerContextData } from "./common";
import { errors } from "./errors";
import websiteConfig from "./website-config";
import { ConnectionOptions } from "maishu-node-data";

export type Settings = AdminSettings & {
    // /** Taro app 源码物理路径，例如：D:\projects\taro-builder-demo\app\src */
    // appPhysicalPath: string
    /** 组件编辑器的脚本路径，例如：component-editors/index */
    // editorsPath: string
    // /** 项目根目录 */
    // rootPhysicalPath: string
    db: ConnectionOptions
};

// const AppirectoryName = "app";
export async function start(settings: Settings) {

    if (!settings.db) {
        throw errors.settingFieldNull("db");
    }

    let componentInfos = [];
    let serverContextData: ServerContextData = { db: settings.db, componentInfos: componentInfos };
    settings.websiteConfig = websiteConfig;

    let r = await startAdmin(settings);
    let staticDirectory = r.websiteDirectory.findDirectory("static");
    console.assert(staticDirectory != null);
    serverContextData.staticRoot = staticDirectory;

    return { rootDirectory: r.websiteDirectory };
}