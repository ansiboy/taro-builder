import { WebsiteConfig } from "maishu-chitu-admin";
import { pathContact } from "maishu-toolkit";

export type MyWebsiteConfig = {
    componentEditorsPath?: string;
};

export let libVirtualPath = "asset/lib";

let websiteConfig: MyWebsiteConfig & WebsiteConfig = {
    requirejs: {
        // context: "taro-builder",
        paths: {
            "maishu-jueying": "/node_modules/maishu-jueying/dist/index",
            "maishu-jueying-core": "/node_modules/maishu-jueying-core/dist/index",
            "taro-builder-core": "/node_modules/taro-builder-core/dist/index",
            "jquery-ui": "lib/jquery-ui-1.12.1/jquery-ui",
            "devices": "lib/devices.css-1.2/assets/devices.min.css",
            // "taro-bundle": "lib/taro-bundle",
            "taro-ui": "lib/taro-ui",
            "taro-ui/dist": "node_modules/taro-ui/dist",
            // "taro-components": "lib/taro-components",
            "@tarojs/components": `${libVirtualPath}/taro-components`,
            "@tarojs/taro-h5": `${libVirtualPath}/taro-h5`,
            "@tarojs/taro": `${libVirtualPath}/taro-h5`,
            "nervjs": `${libVirtualPath}/nervjs`,
            "tslib": "node_modules/tslib/tslib",
            // "maishu-chitu-admin/static": "node_modules/maishu-chitu-admin/static",
            "htmlparser2": "node_modules/htmlparser2/"
        }
    },
    menuItems: [
        {
            id: "AE3789A2-0CF0-4D81-A7C0-E2C9324A1DDD", name: "页面列表", path: "#page-list",
            children: [
                { id: "3CE34AB9-7814-4FE5-85E2-ABA6AAF9C1FD", name: "页面编辑", path: "#page-edit", hidden: true }
            ]
        }
    ]
}

export default websiteConfig;