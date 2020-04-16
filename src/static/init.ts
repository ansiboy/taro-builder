window["h5"] = "weapp";

import { InitArguments } from "maishu-chitu-admin/static";
import { Less } from "maishu-ui-toolkit";
import React = require("react");
import "content/style.scss";


window["react"] = React;
define("react-default", function () {
    return { default: React };
})

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
    define("@tarojs/taro-h5", function () {
    })
    //================================================================================

    Less.renderByRequireJS("devices", {});
    Less.renderByRequireJS("site.less", {});

}