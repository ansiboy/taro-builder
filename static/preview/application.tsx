import { Application } from "maishu-chitu-react";
import * as React from "react";

window["react"] = React;
window["h5"] = "weapp";
//================================================================================
// 为缺失的 API 提供默认值
window["wx"] = {}
window["getCurrentPages"] = function () { }
window["getApp"] = function () { }
window["requirePlugin"] = function () { }
//================================================================================

class MyApplication extends Application {

}

export let app = new MyApplication();
