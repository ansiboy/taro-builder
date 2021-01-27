window["h5"] = "weapp";

import { InitArguments } from "maishu-chitu-admin/static";
import { Less } from "maishu-ui-toolkit";
import * as React from "react";
import "content/style.scss";
import "site.less";
import { pathConcat } from "maishu-toolkit";

window["react"] = React;
export default async function (args: InitArguments) {

    Less.renderByRequireJS("devices",);

    let loadjs = args.app["loadjs"];
    args.app["loadjs"] = function (path) {
        if (path.startsWith("modules//")) {
            let pagePath = path.substr("modules//".length);
            let arr = pagePath.split("/");
            let stationPath = arr.shift();
            path = pathConcat(stationPath, "modules", arr.join("/"));

        }
        return loadjs.apply(this, [path]);
    }
}