exports.libVirtualPath = "asset/lib";
let websiteConfig = {
    //===================================================
    // 组件站点配置
    componentStationConfig: "config.json",
    componentStationPath: "design",
    //===================================================
    requirejs: {
        paths: {
            "maishu-jueying": "/node_modules/maishu-jueying/dist/index",
            "maishu-jueying-core": "/node_modules/maishu-jueying-core/dist/index",
            "taro-builder-core": "/node_modules/taro-builder-core/dist/index",
            "jquery-ui": `${exports.libVirtualPath}/jquery-ui-1.12.1/jquery-ui`,
            "devices": `${exports.libVirtualPath}/devices.css-1.2/assets/devices.min.css`,
            "taro-ui": `${exports.libVirtualPath}/taro-ui`,
            "taro-ui/dist": "node_modules/taro-ui/dist",
            "@tarojs/components": `${exports.libVirtualPath}/taro-components`,
            "@tarojs/taro-h5": `${exports.libVirtualPath}/taro-h5`,
            "@tarojs/taro": `${exports.libVirtualPath}/taro-h5`,
            "nervjs": `${exports.libVirtualPath}/nervjs`,
            "tslib": "node_modules/tslib/tslib",
            "htmlparser2": "node_modules/htmlparser2/"
        }
    },
    menuItems: [
        {
            id: "AE3789A2-0CF0-4D81-A7C0-E2C9324A1DDD", name: "页面列表", path: "#page-list",
            children: [
                { id: "3CE34AB9-7814-4FE5-85E2-ABA6AAF9C1FD", name: "页面编辑", path: "#page-edit", hidden: true }
            ]
        },
        {
            id: "811A30E2-A04D-44F7-BA18-959698DBCA47", name: "PC 页面", path: "#pc-page-edit",
        }
    ]
};
exports.default = websiteConfig;
