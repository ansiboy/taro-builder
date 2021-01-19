import { registerComponent, PageData, componentTypes, ComponentData } from "maishu-jueying-core";
import { componentRenders } from "../component-renders/index";
import { errors } from "../errors";
import { FakeComponent } from "./design-view/fake-component";
import { createComponentLoadFail } from "./design-view/load-fail-component";
import InfoComponent from "./info-component";

// import { services } from "../services/index";
// import * as websiteConfig from "json!websiteConfig";
// let contextName = websiteConfig.requirejs.context;

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


export class ComponentLoader {
    static loadComponentTypes(pageData: PageData, loadComponentInfos: () => Promise<ComponentInfo[]>, loadComponentFinish: (typeName: string, componentInfo: ComponentInfo) => void) {
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
                loadComponentType(type, loadComponentInfos).then(c => {
                    registerComponent(type, c.componentType);
                    loadComponentFinish(type, c.componentInfo);

                }).catch(err => {
                    console.error(err);
                    let componentType = createComponentLoadFail(err, () => {
                        delete componentTypes[type];
                        ComponentLoader.loadComponentTypes(pageData, loadComponentInfos, loadComponentFinish);
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
}


async function loadComponentType(typeName: string, loadComponentInfos: () => Promise<ComponentInfo[]>) {
    let componentInfos = await loadComponentInfos();//services.local.componentInfos();
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

    let path = componentInfo.design || componentInfo.path;

    // let editorPromise = loadComponentEditor(componentInfo);
    // let layoutPromise = loadComponentLayout(componentInfo);
    // let componentPromise = 
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

    return new Promise((resolve, reject) => {
        requirejs([`${componentInfo.layout}`], (mod) => {
            let func = mod?.default || mod;
            if (typeof func != "function") {
                console.error(`Module ${componentInfo.layout} is not a function.`)
                resolve({});
            }
            componentRenders[componentInfo.type] = mod.default || mod;
            resolve(mod);
        }, err => {
            reject(err);
        })

    })
}
