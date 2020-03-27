import { WebsiteConfig } from "maishu-chitu-admin";

export type MyWebsiteConfig = {
    contextName: string;
};



let websiteConfig: MyWebsiteConfig & WebsiteConfig = {
    contextName: "taro-builder",
    requirejs: {
        paths: {
            "maishu-jueying": "node_modules/maishu-jueying/dist/index",
            "maishu-jueying-core/decorators": "node_modules/maishu-jueying-core/decorators",
            "jquery-ui": "lib/jquery-ui-1.12.1/jquery-ui",
            "devices": "lib/devices.css-1.2/assets/devices.min.css",
            "taro-bundle": "lib/taro-bundle",
            "taro-ui": "lib/taro-ui",
            "tslib": "node_modules/tslib/tslib",
            "maishu-chitu-admin/static": "node_modules/maishu-chitu-admin/static",
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