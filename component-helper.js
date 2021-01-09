"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const maishu_node_mvc_1 = require("maishu-node-mvc");
const fs = require("fs");
const ts = require("typescript");
const path = require("path");
const errors_1 = require("./static/asset/errors");
exports.currentAppId = maishu_node_mvc_1.createParameterDecorator((ctx) => __awaiter(void 0, void 0, void 0, function* () {
    let appId = ctx.req.headers["application-id"];
    return appId;
}));
function getClientComponentInfos(componentsDirectory) {
    if (componentsDirectory == null)
        throw errors_1.errors.argumentNull("componentsDirectory");
    let componentInfos = [];
    let files = [];
    let dirs = [componentsDirectory];
    while (dirs.length > 0) {
        let dir = dirs.shift();
        let fileDic = dir.files();
        for (let key in fileDic) {
            files.push({ virtualPath: path.join(dir.virtualPath, key), physicalPath: fileDic[key] });
        }
        let childDirDic = dir.directories();
        for (let key in childDirDic) {
            dirs.unshift(childDirDic[key]);
        }
    }
    files = files.filter(o => o.physicalPath.endsWith(".js")); //o.physicalPath.endsWith(".tsx") ||
    files.forEach(item => {
        let tsSourceFile = ts.createSourceFile(item.physicalPath, fs.readFileSync(item.physicalPath).toString(), ts.ScriptTarget.ES5);
        let componentPath = item.virtualPath;
        componentPath = componentPath.replace(/\\/g, "/");
        let c = getFileComponentInfos(tsSourceFile, componentPath);
        componentInfos.push(...c);
    });
    function getFileComponentInfos(sourceFile, filePath) {
        let componentInfos = [];
        delintNode(sourceFile, filePath);
        return componentInfos;
    }
    function delintNode(node, filePath) {
        switch (node.kind) {
            case ts.SyntaxKind.ClassDeclaration:
                let classDeclaration = node;
                if (classDeclaration.decorators) {
                    var decorator = classDeclaration.decorators.filter(o => o.expression != null && o.expression.expression != null
                        && o.expression.expression.text == "component")[0];
                    if (decorator == null)
                        break;
                    var expr = decorator.expression;
                    let arg0 = expr.arguments[0];
                    if (arg0 == null) {
                        break;
                    }
                    let componentInfo = getObject(arg0);
                    componentInfo.path = filePath;
                    componentInfo.type = componentInfo.type || classDeclaration.name.text;
                    componentInfos.push(componentInfo);
                }
                break;
            case ts.SyntaxKind.CallExpression:
                let callExpression = node;
                if (callExpression.expression.kind == ts.SyntaxKind.Identifier) {
                    if (callExpression.expression.text == "__decorate") {
                        let args = callExpression.arguments;
                        if (args[0] != null && args[0].kind == ts.SyntaxKind.ArrayLiteralExpression &&
                            args[1] != null && args[1].kind == ts.SyntaxKind.Identifier) {
                            let arg0 = callExpression.arguments[0];
                            if (arg0.elements[0].kind == ts.SyntaxKind.CallExpression) {
                                let componentNode = arg0.elements[0];
                                let componentInfo = getComponentInfo(componentNode);
                                if (componentInfo != null) {
                                    componentInfo.type = componentInfo.type || args[1].text;
                                    componentInfo.path = filePath;
                                    componentInfos.push(componentInfo);
                                }
                            }
                        }
                    }
                }
                break;
        }
        ts.forEachChild(node, (node) => delintNode(node, filePath));
    }
    return componentInfos;
}
exports.getClientComponentInfos = getClientComponentInfos;
function getComponentInfo(componentNode) {
    let funcName = null;
    if (componentNode.expression.kind == ts.SyntaxKind.PropertyAccessExpression) {
        let p = componentNode.expression;
        funcName = p.name.text;
    }
    else if (componentNode.expression.kind == ts.SyntaxKind.Identifier) {
        funcName = componentNode.expression.text;
    }
    if (funcName == "component") {
        if (componentNode.arguments[0] != null && componentNode.arguments[0].kind == ts.SyntaxKind.ObjectLiteralExpression) {
            let objNode = componentNode.arguments[0];
            let componentInfo = getObject(objNode);
            return componentInfo;
        }
        return {};
    }
    return null;
}
// function getExpressionName(arg0: ts.Node) {
//     let c = arg0.elements[0] as CallExpression;
//     let p = expr as any as PropertyAccessExpression;
//     if (c.arguments[0] != null && c.arguments[0].kind == ts.SyntaxKind.ObjectLiteralExpression &&
//         p.name.kind == ts.SyntaxKind.Identifier && p.name.text == "component") {
//         let objNode = c.arguments[0] as ObjectLiteralExpression;
//         let componentInfo: ComponentInfo = getObject(objNode);
//         componentInfo.name = (args[1] as StringLiteral).text;
//         componentInfo.path = filePath;
//         componentInfos.push(componentInfo);
//     }
// }
function getObject(objNode) {
    let obj = {};
    let properties = objNode.properties;
    for (let i = 0; i < properties.length; i++) {
        if (properties[i].name == null || properties[i].name.text == null
            || properties[i].initializer == null && properties[i].initializer.text == null) {
            return null;
        }
        obj[properties[i].name.text] = properties[i].initializer.text;
    }
    return obj;
}
