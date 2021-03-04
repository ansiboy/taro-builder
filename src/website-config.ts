export let libVirtualPath = "lib";
let websiteConfig = {
    //===================================================
    // 组件站点配置
    componentStationConfig: "config.js",
    componentStationPath: "design",
    //===================================================
    requirejs: {
        paths: {

            "css": "node_modules/maishu-requirejs-plugins/src/css",

            "react": "/node_modules/react/umd/react.development",
            "react-dom": "/node_modules/react-dom/umd/react-dom.development",

            "maishu-chitu": "/node_modules/maishu-chitu/dist/index",
            "maishu-chitu-react": "node_modules/maishu-chitu-react/dist/index",
            "maishu-chitu-service": "/node_modules/maishu-chitu-service/dist/index",
            "maishu-dilu-react": "node_modules/maishu-dilu-react/dist/index",

            "maishu-image-components": "node_modules/maishu-image-components/dist/index",
            "maishu-jueying": "node_modules/maishu-jueying/dist/index",
            "maishu-jueying-core": "node_modules/maishu-jueying-core/dist/index",
            "maishu-toolkit": "/node_modules/maishu-toolkit/dist/index",
            "maishu-ui-toolkit": "node_modules/maishu-ui-toolkit/dist/index",
            "maishu-wuzhui-helper": "/node_modules/maishu-wuzhui-helper/dist/index",
            "maishu-dilu": "/node_modules/maishu-dilu/dist/index",

            "devices": `${libVirtualPath}/devices.css-1.2/assets/devices.min.css`,
            "jquery": "node_modules/jquery/dist/jquery",
            "jquery-ui": `${libVirtualPath}/jquery-ui-1.12.1/jquery-ui`,
            "js-md5": "node_modules/js-md5/build/md5.min",
            "taro-builder-core": "/node_modules/taro-builder-core/dist/index",
            "taro-ui": `${libVirtualPath}/taro-ui`,
            "taro-ui/dist": "node_modules/taro-ui/dist",
            "@tarojs/components": `${libVirtualPath}/taro-components`,
            "@tarojs/taro-h5": `${libVirtualPath}/taro-h5`,
            "@tarojs/taro": `${libVirtualPath}/taro-h5`,
            "nervjs": `${libVirtualPath}/nervjs`,
            "tslib": "node_modules/tslib/tslib",
            "htmlparser2": "node_modules/htmlparser2/",

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
        { id: "B3A45E5B-43A8-4A50-8196-5305A820CAA9", name: "商品详情", path: "#pc-page-edit?name=product" },
        { id: "494B35BB-FA79-459E-8F27-45B2DAB8F53D", name: "购物车", path: "#pc-page-edit?name=shopping-cart" },
        { id: "B57D6BE3-56C3-42BF-A784-0CE88B1DD22C", name: "模板页", path: "#pc-page-edit?name=template" },
        { id: "07FC8953-9D4F-417D-B3C9-3861C4327CD5", name: "订单支付", path: "#pc-page-edit?name=checkouts" },
        { id: "53813E5B-A7C4-497A-B010-5455E847FB12", name: "订单列表", path: "#pc-page-edit?name=order-list" },
        { id: "72CBEFAC-5AFB-4E80-9ECD-26DCBC6B9F4B", name: "订单详情", path: "#pc-page-edit?name=order-detail" },
        { id: "B9EB2282-EC49-402C-BFAB-DD4E7F4B8879", name: "登录", path: "#pc-page-edit?name=login" },
        { id: "921B36A9-D464-4657-9F57-16B8214FA7F8", name: "注册", path: "#pc-page-edit?name=register" },
        { id: "E0D3BC32-989E-4C22-9C75-523820C4ED76", name: "忘记密码", path: "#pc-page-edit?name=forget-password" },
        { id: "99CEE6E1-7B84-4012-8828-A550CAD99411", name: "地址列表", path: "#pc-page-edit?name=receipt-list" },
        { id: "52996F0A-C263-41BF-8891-6ED5421DB44F", name: "地址编辑", path: "#pc-page-edit?name=receipt-edit" },
        { id: "8B2305F4-12CE-4F94-9F5B-3A6B87174377", name: "会员首页", path: "#pc-page-edit?name=account" }

    ],
    containers: {}
};
export default websiteConfig;
