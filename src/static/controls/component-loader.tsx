import { registerComponent, PageData, componentTypes, ComponentData } from "maishu-jueying-core";

import { errors } from "../errors";
import { LocalService } from "../services";
import * as React from "react";
import { guid } from "maishu-toolkit";
import { Callback } from "maishu-toolkit";

let localRequirejs = require as any as typeof requirejs;

/** 组件描述信息 */
export interface ComponentInfo {
    /** 组件类型名称 */
    type: string;
    /** 组件显示名称 */
    displayName?: string;
    /** 组件图标 */
    icon?: string;
    /** 组件介绍 */
    introduce?: string;
    /** 组件路经 */
    path: string;
    design?: string;
    editor?: string;
    layout?: string;
}


let localService = new LocalService();
export class ComponentLoader {

    loadComponentsComplete = new Callback();
    loadComponentSuccess = new Callback<{ typeName: string, componentInfo: ComponentInfo, pageData: PageData }>();
    loadComponentFail = new Callback<{ typeName: string }>();
    private _pageData: PageData;
    private isDesignMode: boolean;
    private typesToLoad: string[];

    constructor(pageData: PageData, isRuntimeMode?: boolean) {
        this._pageData = pageData;

        isRuntimeMode = isRuntimeMode == null ? false : isRuntimeMode;
        this.isDesignMode = !isRuntimeMode;
        let pageDataComponentTypes: string[] = [];
        let stack: Array<ComponentData> = [...this._pageData.children];

        while (stack.length > 0) {
            let item = stack.pop();

            if (ComponentLoader.isComponentData(item) && pageDataComponentTypes.indexOf(item.type) < 0)
                pageDataComponentTypes.push(item.type);


            if (Array.isArray(item)) {
                item.forEach(c => stack.push(c))
            }
            else {
                for (let key in item) {
                    if (item[key] != null && typeof item[key] == "object")
                        stack.push(item[key]);
                }

            }
        }

        this.typesToLoad = pageDataComponentTypes.filter(o => componentTypes[o] == null);
        for (let i = 0; i < this.typesToLoad.length; i++) {
            let type = this.typesToLoad[i];
            let componentType = componentTypes[type] as any;
            if (componentType == null) {
                registerComponent(type, FakeComponent);
            }
        }
    }

    get pageData() {
        return this._pageData;
    }


    loadComponentTypes() {

        if (this.typesToLoad.length == 0) {
            this.loadComponentsComplete.fire({});
            return;
        }

        let executedCount = 0;
        for (let i = 0; i < this.typesToLoad.length; i++) {
            let type = this.typesToLoad[i];
            // let componentType = componentTypes[type] as any;
            // if (componentType == null) {
            //     registerComponent(type, FakeComponent);
            loadComponentType(type, this.isDesignMode).then(c => {
                registerComponent(type, c.componentType);
                console.assert(c.componentInfo != null);
                this.loadComponentSuccess.fire({
                    typeName: type, componentInfo: c.componentInfo,
                    pageData: this._pageData
                });


            }).catch(err => {
                console.error(err);
                this.loadComponentFail.fire({ typeName: type });

            }).finally(() => {
                executedCount = executedCount + 1;
                if (executedCount >= this.typesToLoad.length) {
                    this.loadComponentsComplete.fire({});
                }
            })
            // }
        }

    }

    static loadComponentEditor(compoenntInfo: ComponentInfo) {
        return loadComponentEditor(compoenntInfo);
    }

    static loadComponentLayout(compoenntInfo: ComponentInfo) {
        return loadComponentLayout(compoenntInfo);
    }

    private static isComponentData(obj: any) {
        let c: ComponentData = obj;
        return typeof c == "object" && c.id != null && c.parentId != null && c.id != null && c.props != null;
    }

}


async function loadComponentType(typeName: string, isDesignMode: boolean) {
    let componentInfos = await localService.componentInfos();
    let componentInfo = componentInfos.filter(o => o.type == typeName)[0];
    if (componentInfo == null) {
        let error = errors.canntFindComponentInfo(typeName);;
        let componentType = CreateInfoComponent(error.message);
        return { componentType, componentInfo };

    }

    let path = isDesignMode ? componentInfo.design || componentInfo.path : componentInfo.path;

    let componentType = await new Promise<React.ComponentClass<any>>((resolve, reject) => {
        localRequirejs([`${path}`], (mod) => {
            let compoenntType: React.ComponentClass<any> = mod[typeName] || mod["default"];
            if (compoenntType == null)
                throw errors.moduleNotExport(path, typeName);

            componentTypes[typeName] = compoenntType;
            resolve(compoenntType);

        }, err => {
            let text = typeof err == "string" ? err : err.message;
            let componentType = CreateInfoComponent(text);
            // return { componentType, componentInfo };
            // reject(err);
            console.error(err);
            resolve(componentType)
        })

    })

    // await editorPromise;
    // await layoutPromise;
    // return componentPromise;

    return { componentType, componentInfo };
}

async function loadComponentEditor(componentInfo: ComponentInfo): Promise<any> {
    if (componentInfo?.editor == null)
        return Promise.resolve();

    return new Promise((resolve, reject) => {
        localRequirejs([`${componentInfo.editor}`], (mod) => {
            resolve(mod);
        }, err => {
            let text = typeof err == "string" ? err : err.message;
            let componentType = CreateInfoComponent(text);
            // reject(err);
            resolve(componentType);
        })

    })
}

async function loadComponentLayout(componentInfo: ComponentInfo): Promise<any> {
    if (componentInfo?.layout == null)
        return Promise.resolve();
    //import { componentRenders } from "../component-renders/index";
    return new Promise((resolve, reject) => {
        (require as any)([`${componentInfo.layout}`, "component-renders/index"], (mod, renderModule) => {
            let func = mod?.default || mod;
            if (typeof func != "function") {
                console.error(`Module ${componentInfo.layout} is not a function.`)
                resolve({});
            }
            renderModule.setComponentRender(componentInfo.type, mod.default || mod);
            resolve(mod);
        }, err => {
            reject(err);
        })

    })
}

export class FakeComponent extends React.Component<any> {
    render() {
        return <div key={this.props.id || guid()} style={{ padding: "50px 0 50px 0", textAlign: "center" }}>
            组件正在加载中...
        </div>
    }
}

export function createComponentLoadFail(error: any, reload: () => void) {
    return class ComponentLoadFail extends React.Component {
        render() {
            let msg = typeof error == "string" ? error : error.message;
            return <div>
                <div onClick={e => reload()}>组件加载错误, 点击重新加载</div>
                <div>{msg}</div>
            </div>
        }
    }

}

export function CreateInfoComponent(text: string) {
    return class InfoComponent extends React.Component {
        render() {
            return <div className="text-center" style={{ paddingTop: 20, paddingBottom: 20 }}>
                {text}
            </div>
        }
    }

}