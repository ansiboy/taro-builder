import { errorHandle } from "../../asset/errorHandle";
import { registerComponent, PageData, componentTypes, ComponentData } from "maishu-jueying-core";

import { errors } from "../errors";
import { LocalService } from "../services/local-service";
import InfoComponent from "./info-component";
import * as React from "react";
import { guid } from "maishu-toolkit";

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


let localService = new LocalService(err => errorHandle(err));
export class ComponentLoader {
    static loadComponentTypes(pageData: PageData, loadComponentFinish: (typeName: string, componentInfo: ComponentInfo) => void, isRuntimeMode?: boolean) {
        isRuntimeMode = isRuntimeMode == null ? false : isRuntimeMode;
        let isDesignMode = !isRuntimeMode;
        let pageDataComponentTypes: string[] = [];
        let stack: Array<ComponentData> = [...pageData.children];
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

        for (let i = 0; i < pageDataComponentTypes.length; i++) {
            let type = pageDataComponentTypes[i];
            let componentType = componentTypes[type] as any;
            if (componentType == null) {
                registerComponent(type, FakeComponent);
                loadComponentType(type, isDesignMode).then(c => {
                    registerComponent(type, c.componentType);
                    loadComponentFinish(type, c.componentInfo);

                }).catch(err => {
                    console.error(err);
                    let componentType = createComponentLoadFail(err, () => {
                        delete componentTypes[type];
                        ComponentLoader.loadComponentTypes(pageData, loadComponentFinish);
                    });
                    registerComponent(type, componentType);
                    loadComponentFinish(type, null);
                })
            }
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

    static loadComponentType(compoenntInfo: ComponentInfo) {
        if (!compoenntInfo) throw errors.argumentNull("componentInfo");

        let typeName = compoenntInfo.type;
        let path = compoenntInfo.path;
        return new Promise((resolove, reject) => {
            requirejs([`${compoenntInfo.path}`], (mod) => {
                let compoenntType: React.ComponentClass<any> = mod[typeName] || mod["default"];
                if (compoenntType == null)
                    throw errors.moduleNotExport(path, typeName);

                componentTypes[typeName] = compoenntType;
                resolove(compoenntType);
            }, err => {
                reject(err);
            });

        })
    }
}


async function loadComponentType(typeName: string, isDesignMode: boolean) {
    let componentInfos = await localService.componentInfos();
    let componentInfo = componentInfos.filter(o => o.type == typeName)[0];
    if (componentInfo == null) {
        // throw errors.canntFindComponentInfo(typeName);
        let error = errors.canntFindComponentInfo(typeName);;
        componentInfo = {
            type: InfoComponent.name,
            path: `/info-component.js?text=${error.message}`,
            // props: { text: error.message }
        }

    }

    let path = isDesignMode ? componentInfo.design || componentInfo.path : componentInfo.path;

    let componentType = await new Promise<React.ComponentClass<any>>((resolve, reject) => {
        requirejs([`${path}`], (mod) => {
            let compoenntType: React.ComponentClass<any> = mod[typeName] || mod["default"];
            if (compoenntType == null)
                throw errors.moduleNotExport(path, typeName);

            componentTypes[typeName] = compoenntType;
            resolve(compoenntType);

        }, err => {
            reject(err);
        })

    })

    // await editorPromise;
    // await layoutPromise;
    // return componentPromise;

    return { componentType, componentInfo };
}

async function loadComponentEditor(componentInfo: ComponentInfo): Promise<any> {
    if (componentInfo.editor == null)
        return Promise.resolve();

    return new Promise((resolve, reject) => {
        requirejs([`${componentInfo.editor}`], (mod) => {
            resolve(mod);
        }, err => {
            reject(err);
        })

    })
}

async function loadComponentLayout(componentInfo: ComponentInfo): Promise<any> {
    if (componentInfo.layout == null)
        return Promise.resolve();
    //import { componentRenders } from "../component-renders/index";
    return new Promise((resolve, reject) => {
        requirejs([`${componentInfo.layout}`, "asset/component-renders/index"], (mod, renderModule) => {
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