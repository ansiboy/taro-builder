(function () {
    let node_modules = "node_modules";
    let lib = "lib";
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
        baseUrl: '../',
        paths: {

            css: `${lib}/css`,
            text: `${lib}/text`,
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
            "modules": "mobile/modules",
            "common/static": "/common/static",
            "taro-builder-core": "node_modules/taro-builder-core/dist/index",
            "maishu-jueying-core": "node_modules/maishu-jueying-core/dist/index",
            "maishu-chitu-admin/static": `${node_modules}/maishu-chitu-admin/dist/static.min`,
            "@tarojs/components": "lib/taro-components",
            "@tarojs/taro-h5": "lib/taro-h5",
            "@tarojs/taro": "lib/taro-h5",
            "taro-ui": "lib/taro-ui",
            "taro-ui/dist": "node_modules/taro-ui/dist",
        }
    });

    window["h5"] = "weapp";
    requirejs(["react"], function (react) {
        window["react"] = window["React"] = react;

        define("react-default", function () {
            return { default: React };
        })

        //================================================================================
        // 为缺失的 API 提供默认值
        window["wx"] = {

        }
        window["getCurrentPages"] = function () {

        }
        window["getApp"] = function () {

        }
        window["requirePlugin"] = function () {

        }
        //================================================================================

        requirejs(['mobile/user-application'],
            function (appExports) {
                let app = appExports.app;
                app.run();
            }
        );

    })


})();