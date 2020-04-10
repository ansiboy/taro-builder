window["h5"] = "weapp";

import { InitArguments } from "maishu-chitu-admin/static";
import { Less } from "maishu-ui-toolkit";

export default async function (args: InitArguments) {

    Less.renderByRequireJS("devices", {});
    Less.renderByRequireJS("site.less", {});

}