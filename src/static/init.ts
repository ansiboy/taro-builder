import { InitArguments } from "maishu-chitu-admin/static";
import { Less } from "maishu-ui-toolkit";

export default async function (args: InitArguments) {

    Less.renderByRequireJS("devices", {});
    Less.renderByRequireJS("site.less", {});
    window["h5"] = "weapp";
    requirejs(["taro-bundle", "taro-ui"], function (mod, taroUI) {

        window["Nerv"] = window["Taro"] = mod.nervjs;

        define("taro-ui", function () {
            return taroUI.default;
        })

        define("nervjs", function () {
            let r = { ...mod.nervjs };

            return r;
        });

        define("@tarojs/components", function () {
            let r = { ...mod.tarojs_components };
            return r;
        })

        define("@tarojs/taro", function () {
            let r = {
                ...mod.tarojs_taro_h5,
            };
            return r;
        })

        define("@tarojs/taro-h5", function () {
            let r = {
                ...mod.tarojs_taro_h5,
            };
            return r;
        })


    });


}