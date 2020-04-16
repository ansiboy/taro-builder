import * as ts from "typescript";
import { controller, action, routeData, ServerContext, serverContext, Controller } from "maishu-node-mvc";
import { ServerContextData } from "../common";
import { StatusCode } from "maishu-chitu-service";
import fs = require("fs");
import babel = require("@babel/core")
import sass = require("node-sass");
import path = require("path");
import { errors } from "../errors";

@controller("/")
export class HomeController extends Controller {
    @action("*.tsx.js")
    tsxToJS(@routeData data, @serverContext context: ServerContext<ServerContextData>) {
        let filePath = data["_"];
        let tsxFileVirtualPath = filePath + ".tsx";
        console.assert(context.data.staticRoot != null);
        let filePhysicalPath = context.data.staticRoot.getFile(tsxFileVirtualPath);
        if (filePhysicalPath == null) {
            throw errors.fileNotExists(filePhysicalPath);
        }

        return this.typescriptToJS(filePhysicalPath);
    }

    @action("*.ts.js")
    tsToJS(@routeData data, @serverContext context: ServerContext<ServerContextData>) {
        let filePath = data["_"];
        let tsxFileVirtualPath = filePath + ".ts";

        console.assert(context.data.staticRoot != null);
        let filePhysicalPath = context.data.staticRoot.getFile(tsxFileVirtualPath);

        if (filePhysicalPath == null) {
            throw errors.fileNotExists(filePhysicalPath);
        }

        return this.typescriptToJS(filePhysicalPath);
    }

    private typescriptToJS(filePhysicalPath: string) {
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

            if (source == null) {
                continue;
            }

            if (source.value == "react") {
                source.value = "react-default";
                continue;
            }

            let refFilePath = source.value;
            let arr = refFilePath.split("/");
            let ext: string = null;
            if (arr[arr.length - 1] != null) {
                let tt = arr[arr.length - 1].split(".");
                if (tt.length > 1)
                    ext = tt[tt.length - 1];
            }

            if (ext == null && refFilePath.startsWith("./") || refFilePath.startsWith("../")) {
                let p = path.join(path.dirname(filePhysicalPath), refFilePath);
                if (fs.existsSync(p) && fs.statSync(p).isDirectory()) {
                    p = path.join(p, "index");
                    refFilePath = refFilePath + "/index";
                }

                let tsxPath = `${p}.tsx`;
                let tsPath = `${p}.ts`;
                if (fs.existsSync(tsxPath)) {
                    refFilePath = `${refFilePath}.tsx`;
                }
                else if (fs.existsSync(tsPath)) {
                    refFilePath = `${refFilePath}.ts`;
                }

                source.value = refFilePath;
            }
            else if (ext == "less") {
                refFilePath = `less!${refFilePath}`;
                source.value = refFilePath;
            }
            else if (ext == "scss") {
                refFilePath = `css!${refFilePath}`;
                source.value = refFilePath;
            }
        }

        let r = babel.transformFromAstSync(ast, null, {
            plugins: [
                ["@babel/plugin-transform-typescript", { isTSX: true }],
                ["@babel/plugin-proposal-decorators", { "legacy": true }],
                ["@babel/transform-modules-amd", { noInterop: true }],
                ["@babel/transform-react-jsx", {
                    "pragma": "React.createElement",
                    "pragmaFrag": "React.Fragment"
                }]
            ]
        })

        let code = `/** Taro builder transform tsx file to javascript amd file, source file is ${filePhysicalPath}. */ \r\n` + r.code;
        return code;
    }

    @action("*.scss.css")
    scssToCSS(@routeData data, @serverContext context: ServerContext<ServerContextData>) {
        let filePath = data["_"];
        let scssFileVirtualPath = filePath + ".scss";

        console.assert(context.data.staticRoot != null);
        let filePhysicalPath = context.data.staticRoot.getFile(scssFileVirtualPath);

        if (filePhysicalPath == null) {
            return this.content(`File '${scssFileVirtualPath}' not found.`, StatusCode.NotFound);
        }

        filePhysicalPath = filePhysicalPath.replace(/\\+|\/+/g, "/");
        let r = sass.renderSync({ data: `$hd : 1; @import \"${filePhysicalPath}\"` });
        return this.content(r.css.toString(), "text/css");
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