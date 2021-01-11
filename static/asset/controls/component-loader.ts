import { registerComponent, PageData, componentTypes, ComponentData, ComponentInfo } from "taro-builder-core";
import { errors } from "../errors";
import { FakeComponent } from "./design-view/fake-component";
import { services } from "../services/index";
import { createComponentLoadFail } from "./design-view/load-fail-component";
// import * as websiteConfig from "json!websiteConfig";
// let contextName = websiteConfig.requirejs.context;

export class ComponentLoader {
    static loadComponentTypes(pageData: PageData, loadComponentFinish: (typeName: string, isSuccess: boolean) => void) {
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
                loadComponentType(type).then(c => {
                    registerComponent(type, c as any);
                    loadComponentFinish(type, true);

                }).catch(err => {
                    console.error(err);
                    let componentType = createComponentLoadFail(err, () => {
                        delete componentTypes[type];
                        ComponentLoader.loadComponentTypes(pageData, loadComponentFinish);
                    });
                    registerComponent(type, componentType);
                    loadComponentFinish(type, false);
                })
            }
        }

    }

    private static isComponentData(obj: any) {
        let c: ComponentData = obj;
        return typeof c == "object" && c.id != null && c.parentId != null && c.id != null && c.props != null;
    }
}

async function loadComponentType(typeName: string) {
    let componentInfos = await services.local.componentInfos();
    let componentInfo = componentInfos.filter(o => o.type == typeName)[0];
    if (componentInfo == null) {
        throw errors.canntFindComponentInfo(typeName);
    }

    let path = componentInfo.design || componentInfo.path;

    let editorPromise = loadComponentEditor(componentInfo);
    let componentPromise = new Promise((resolve, reject) => {
        // let req = requirejs({ context: contextName });
        requirejs([`${path}`], (mod) => {
            let compoenntType = mod[typeName] || mod["default"];
            if (compoenntType == null)
                throw errors.moduleNotExport(path, typeName);

            componentTypes[typeName] = compoenntType;
            resolve(compoenntType);

        }, err => {
            reject(err);
        })

    })

    await editorPromise;
    return componentPromise;
}

async function loadComponentEditor(componentInfo: ComponentInfo): Promise<any> {
    if (componentInfo.editor == null)
        return Promise.resolve();

    return new Promise((resolve, reject) => {
        // let req = requirejs({ context: contextName });
        requirejs([`${componentInfo.editor}`], (mod) => {
            resolve(mod);
        }, err => {
            reject(err);
        })

    })
}
