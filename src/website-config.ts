export let libVirtualPath = "asset/lib";
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
            "jquery-ui": `${libVirtualPath}/jquery-ui-1.12.1/jquery-ui`,
            "devices": `${libVirtualPath}/devices.css-1.2/assets/devices.min.css`,
            "taro-ui": `${libVirtualPath}/taro-ui`,
            "taro-ui/dist": "node_modules/taro-ui/dist",
            "@tarojs/components": `${libVirtualPath}/taro-components`,
            "@tarojs/taro-h5": `${libVirtualPath}/taro-h5`,
            "@tarojs/taro": `${libVirtualPath}/taro-h5`,
            "nervjs": `${libVirtualPath}/nervjs`,
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
        // { id: "811A30E2-A04D-44F7-BA18-959698DBCA47", name: "PC 页面", path: "#pc-page-edit" },
        { id: "5F4A69CA-6D36-40C7-9175-EC9D9B5E0EB2", name: "首页", path: "#pc-page-edit?name=home" },
        { id: "B3A45E5B-43A8-4A50-8196-5305A820CAA8", name: "商品列表", path: "#pc-page-edit?name=product-list" },
        { id: "494B35BB-FA79-459E-8F27-45B2DAB8F53D", name: "购物车", path: "#pc-page-edit?name=shopping-cart" },
        { id: "B57D6BE3-56C3-42BF-A784-0CE88B1DD22C", name: "模板页", path: "#pc-page-edit?name=template" },
        { id: "07FC8953-9D4F-417D-B3C9-3861C4327CD5", name: "订单支付", path: "#pc-page-edit?name=checkouts" },

    ]
};
export default websiteConfig;
