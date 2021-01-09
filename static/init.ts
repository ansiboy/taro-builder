window["h5"] = "weapp";

import { InitArguments } from "maishu-chitu-admin/static";
import { Less } from "maishu-ui-toolkit";
import * as React from "react";
import "content/style.scss";
// import websiteConfig from "json!websiteConfig";

window["react"] = React;
// define("react-default", function () {
//     return { default: React };
// })

export default async function (args: InitArguments) {

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

    // Less.renderByRequireJS("devices", { contextName: websiteConfig.requirejs.context });
    // Less.renderByRequireJS("site.less", { contextName: websiteConfig.requirejs.context });

}