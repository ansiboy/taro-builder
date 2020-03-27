import * as ts from "typescript";
import { controller, action, routeData, ServerContext, serverContext, Controller } from "maishu-node-mvc";
import { ServerContextData } from "../common";
import { StatusCode } from "maishu-chitu-service";
import fs = require("fs");
import babel = require("@babel/core")

@controller("/")
export class HomeController extends Controller {
    @action("*.tarots")
    tarotsToJS(@routeData data, @serverContext context: ServerContext<ServerContextData>) {
        let filePath = data["_"];
        let tsxFileVirtualPath = filePath + ".tsx";
        let tsFileVirtualPath = filePath + ".ts";

        console.assert(context.data.staticRoot != null);
        let filePhysicalPath = context.data.staticRoot.getFile(tsxFileVirtualPath);
        if (filePhysicalPath == null)
            filePhysicalPath = context.data.staticRoot.getFile(tsFileVirtualPath);

        if (filePhysicalPath == null) {
            return this.content(`File '${tsxFileVirtualPath}' or '${tsFileVirtualPath}' not found.`, StatusCode.NotFound);
        }

        let buffer = fs.readFileSync(filePhysicalPath);
        let tsCode = buffer.toString();

        let ast = babel.parseSync(tsCode, {
            plugins: [
                ["@babel/plugin-transform-typescript", { isTSX: true }],
                ["@babel/plugin-proposal-decorators", { "legacy": true }]
            ]
        }) as babel.types.File;

        let program = ast.program;

        for (let i = 0; i < program.body.length; i++) {
            let source: babel.types.StringLiteral = null;
            if (program.body[i].type == "ImportDeclaration") {
                let d = program.body[i] as babel.types.ImportDeclaration;
                source = d.source;
            }
            else if (program.body[i].type == "ExportNamedDeclaration") {
                let d = program.body[i] as babel.types.ExportNamedDeclaration;
                source = d.source;
            }

            if (source != null) {
                let path = source.value;
                let arr = path.split("/");
                let ext: string = null;
                if (arr[arr.length - 1] != null) {
                    let tt = arr[arr.length - 1].split(".");
                    if (tt.length > 1)
                        ext = tt[tt.length - 1];
                }

                if (ext == null && path.startsWith("./") || path.startsWith("../")) {
                    path = `noext!${path}.tarots`;
                    source.value = path;
                }
                else if (ext == "less") {
                    path = `less!${path}`;
                    source.value = path;
                }
            }
        }

        let r = babel.transformFromAstSync(ast, null, {
            plugins: [
                ["@babel/plugin-transform-typescript", { isTSX: true }],
                ["@babel/plugin-proposal-decorators", { "legacy": true }],
                ["@babel/transform-modules-amd", { noInterop: true }],
                ["@babel/transform-react-jsx", {
                    "pragma": "Nerv.createElement",
                    "pragmaFrag": "Nerv.Fragment"
                }]
            ]
        })

        return r.code;
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