import * as ts from "typescript";
import { controller, action, routeData, ServerContext, serverContext, Controller } from "maishu-node-mvc";
import { ServerContextData } from "../common";
import { StatusCode } from "maishu-chitu-service";
import fs = require("fs");

@controller("/")
export class HomeController extends Controller {
    @action("app/*.js")
    tarotsToJS(@routeData data, @serverContext context: ServerContext<ServerContextData>) {
        let filePath = data["_"];
        let tsxFileVirtualPath = filePath + ".tsx";

        console.assert(context.data.staticRoot != null);
        let filePhysicalPath = context.data.staticRoot.getFile(tsxFileVirtualPath);

        if (filePhysicalPath == null) {
            return this.content(`File '${tsxFileVirtualPath}' not found.`, StatusCode.NotFound);
        }

        let buffer = fs.readFileSync(filePhysicalPath);
        let tsCode = buffer.toString();

        let r = tarotsToJS(tsCode);
        return r.outputText;
    }
}

/** 将 taro ts 转换为 js */
export function tarotsToJS(tsCode: string) {
    let result = ts.transpileModule(tsCode, {
        compilerOptions: {
            "jsx": ts.JsxEmit.React,
            "jsxFactory": "Nerv.createElement",
            "module": ts.ModuleKind.AMD,
            "target": ts.ScriptTarget.ES2016,
            "experimentalDecorators": true,
            "emitDecoratorMetadata": true
        }
    });

    return result;

}