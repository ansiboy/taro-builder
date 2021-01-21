let node_modules = "node_modules";
requirejs.config({
    shim: {
        fetch: {
            exports: 'fetch'
        },
        controls: {
            deps: ['react-dom', 'react']
        },
        mobileControls: {
            exports: 'controls',
            deps: ['hammer', 'bezier-easing', 'react']
        },
        userServices: {
            exports: 'userServices'
        },
    },
    baseUrl: './',
    paths: {
        json: `${node_modules}/maishu-requirejs-plugins/src/json`,
        "lessjs": `${node_modules}/less/dist/less`,
        "jquery": `${node_modules}/jquery/dist/jquery.min`,
        "js-md5": `${node_modules}/js-md5/src/md5`,
        "react": `${node_modules}/react/umd/react.development`,
        "react-dom": `${node_modules}/react-dom/umd/react-dom.development`,
        "maishu-wuzhui": `${node_modules}/maishu-wuzhui/dist/index`,
        'maishu-chitu': `${node_modules}/maishu-chitu/dist/index`,
        "maishu-dilu": `${node_modules}/maishu-dilu/dist/index`,
        "maishu-chitu-react": `${node_modules}/maishu-chitu-react/dist/index`,
        "maishu-wuzhui-helper": `${node_modules}/maishu-wuzhui-helper/dist/index`,
        "maishu-chitu-service": `${node_modules}/maishu-chitu-service/dist/index`,
        "maishu-jueying": `${node_modules}/maishu-jueying/dist/index`,
        "maishu-toolkit": `${node_modules}/maishu-toolkit/dist/index`,
        "maishu-ui-toolkit": `${node_modules}/maishu-ui-toolkit/dist/index`,
        "maishu-services-sdk": `${node_modules}/maishu-services-sdk/dist/index`,
        "maishu-chitu-admin/static": `${node_modules}/maishu-chitu-admin/dist/index`,
        "modules": "mobile/modules",
        "common/static": "/common/static",
        "maishu-chitu-admin": `${node_modules}/maishu-chitu-admin`

    }
});
