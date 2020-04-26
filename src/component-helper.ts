import { createParameterDecorator, VirtualDirectory } from "maishu-node-mvc";
import fs = require("fs");
import ts = require("typescript");
import { ClassDeclaration, CallExpression, ObjectLiteralExpression, PropertyAssignment, StringLiteral, ArrayLiteralExpression, PropertyAccessExpression } from "typescript";
import path = require("path");
import { errors } from "./errors";
import { ComponentInfo } from "taro-builder-core";

export let currentAppId = createParameterDecorator(async (req) => {
    let appId = req.headers["application-id"];
    return appId;
}) as Function;

export function getClientComponentInfos(componentsDirectory: VirtualDirectory): ComponentInfo[] {
    if (componentsDirectory == null) throw errors.argumentNull("componentsDirectory");

    let componentInfos: ComponentInfo[] = [];

    let files: { virtualPath: string, physicalPath: string }[] = [];
    let dirs: VirtualDirectory[] = [componentsDirectory];
    while (dirs.length > 0) {
        let dir = dirs.shift();
        let fileDic = dir.getChildFiles();
        for (let key in fileDic) {
            files.push({ virtualPath: path.join(dir.getVirtualPath(), key), physicalPath: fileDic[key] });
        }

        let childDirDic = dir.getChildDirectories();
        for (let key in childDirDic) {
            dirs.unshift(childDirDic[key]);
        }
    }

    files = files.filter(o => o.physicalPath.endsWith(".tsx"));//o.physicalPath.endsWith(".js") || o.physicalPath.endsWith(".jsx") ||
    files.forEach(item => {
        let tsSourceFile = ts.createSourceFile(
            item.physicalPath, fs.readFileSync(item.physicalPath).toString(),
            ts.ScriptTarget.ES5
        );

        let componentPath = item.virtualPath;
        componentPath = componentPath.replace(/\\/g, "/");

        let c = getFileComponentInfos(tsSourceFile, componentPath);
        componentInfos.push(...c);
    })

    function getFileComponentInfos(sourceFile: ts.SourceFile, filePath: string): ComponentInfo[] {
        let componentInfos: ComponentInfo[] = [];
        delintNode(sourceFile, filePath);
        return componentInfos;
    }

    function delintNode(node: ts.Node, filePath: string) {
        switch (node.kind) {
            case ts.SyntaxKind.ClassDeclaration:

                const DISPLAY_NAME: keyof ComponentInfo = "displayName";
                const NAME: keyof ComponentInfo = "type";
                const ICON: keyof ComponentInfo = "icon";
                const INTRODUCE: keyof ComponentInfo = "introduce";
                let propNames = [NAME, DISPLAY_NAME, ICON, INTRODUCE];

                let classDeclaration = node as any as ClassDeclaration;
                if (classDeclaration.decorators) {
                    var decorator = classDeclaration.decorators.filter(o => o.expression != null && (o.expression as CallExpression).expression != null
                        && ((o.expression as CallExpression).expression as StringLiteral).text == "component")[0];

                    if (decorator == null)
                        break;

                    let componentInfo = {} as ComponentInfo;

                    componentInfo.type = classDeclaration.name.text;
                    componentInfo.path = filePath;

                    var expr = decorator.expression as CallExpression;
                    let arg0 = expr.arguments[0] as ObjectLiteralExpression;
                    if (arg0 != null) {
                        let properties = arg0.properties.filter(o => o.kind == ts.SyntaxKind.PropertyAssignment) as PropertyAssignment[];
                        for (let i = 0; i < propNames.length; i++) {
                            let propName = propNames[i];
                            let prop = properties.filter(o => o.name.kind == ts.SyntaxKind.Identifier && (<ts.Identifier>o.name).text == propName)[0];
                            if (prop) {
                                componentInfo[propName] = (prop.initializer as ts.StringLiteral).text;
                            }
                        }
                    }
                    componentInfos.push(componentInfo);
                }
                break;
            case ts.SyntaxKind.CallExpression:
                let callExpression = node as CallExpression;
                if (callExpression.expression.kind == ts.SyntaxKind.Identifier) {

                    // __decorate([component({ displayName: "轮播", icon: "icon-list-alt", introduce: "多张图片轮流播放" })], Carousel);
                    // __decorate([
                    //     component_1.component({ displayName: "轮播", icon: "icon-list-alt", introduce: "多张图片轮流播放" })
                    // ], Carousel);
                    if ((callExpression.expression as ts.Identifier).text == "__decorate") {
                        let args = callExpression.arguments;
                        if (args[0] != null && args[0].kind == ts.SyntaxKind.ArrayLiteralExpression &&
                            args[1] != null && args[1].kind == ts.SyntaxKind.Identifier) {
                            let arg0 = callExpression.arguments[0] as ArrayLiteralExpression;

                            // arg0 = [component({ displayName: "轮播", icon: "icon-list-alt", introduce: "多张图片轮流播放" })]
                            // arg0 = [component_1.component({ displayName: "轮播", icon: "icon-list-alt", introduce: "多张图片轮流播放" })]
                            if (arg0.elements[0].kind == ts.SyntaxKind.CallExpression) {
                                let componentNode = arg0.elements[0] as CallExpression;
                                let componentInfo: ComponentInfo = getComponentInfo(componentNode);
                                if (componentInfo != null) {
                                    componentInfo.type = (args[1] as StringLiteral).text;
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

function getComponentInfo(componentNode: CallExpression): ComponentInfo | null {
    let funcName: string | null = null;
    if (componentNode.expression.kind == ts.SyntaxKind.PropertyAccessExpression) {
        let p = componentNode.expression as PropertyAccessExpression;
        funcName = p.name.text;
    }
    else if (componentNode.expression.kind == ts.SyntaxKind.Identifier) {
        funcName = (componentNode.expression as ts.Identifier).text;
    }
    if (funcName == "component") {
        if (componentNode.arguments[0] != null && componentNode.arguments[0].kind == ts.SyntaxKind.ObjectLiteralExpression) {
            let objNode = componentNode.arguments[0] as ObjectLiteralExpression;
            let componentInfo: ComponentInfo = getObject(objNode);
            return componentInfo;
        }
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

function getObject(objNode: ObjectLiteralExpression) {
    let obj = {} as ComponentInfo;
    type Property = { name: ts.Identifier, initializer: StringLiteral };
    let properties = objNode.properties as any as Property[];
    for (let i = 0; i < properties.length; i++) {
        if (properties[i].name == null || properties[i].name.text == null
            || properties[i].initializer == null && properties[i].initializer.text == null) {
            return null;
        }

        obj[properties[i].name.text] = properties[i].initializer.text;
    }

    return obj;
}

