import { registerComponent, PageData, componentTypes } from "taro-builder-core";
import { errors } from "../../errors";
import { FakeComponent } from "./design-view/fake-component";
import { services } from "../services/index";
import { createComponentLoadFail } from "./design-view/load-fail-component";

export class ComponentLoader {

    static loadComponentTypes(pageData: PageData, loadComponentFinish: (typeName: string, isSuccess: boolean) => void) {
        for (let i = 0; i < pageData.children.length; i++) {
            let item = pageData.children[i];
            let componentType = componentTypes[item.type] as any;
            if (componentType == null) {
                registerComponent(item.type, FakeComponent);
                loadComponentType(item.type).then(c => {
                    registerComponent(item.type, c as any);
                    // this.setState({ pageData });
                    loadComponentFinish(item.type, true);

                }).catch(err => {
                    console.error(err);
                    let componentType = createComponentLoadFail(err, () => {
                        delete componentTypes[item.type];
                        // this.setState({ pageData })
                        // loadComponentFinish(item.type, false);
                        ComponentLoader.loadComponentTypes(pageData, loadComponentFinish);
                    });
                    registerComponent(item.type, componentType);
                    // this.setState({ pageData });
                    loadComponentFinish(item.type, false);
                })
            }
        }
    }

    // /** 加载全部组件 */
    // static async loadAllComponents() {
    //     let componentInfos = await localService.componentInfos();
    //     let r = componentInfos.map(componentInfo => {
    //         return new Promise((resolve, reject) => {
    //             requirejs({ context: contextName }, [componentInfo.path],
    //                 (mod) => {

    //                     console.assert(componentInfo.type != null);
    //                     console.assert(typeof mod[componentInfo.type] == "function");
    //                     registerComponent(componentInfo.type, mod[componentInfo.type]);

    //                     resolve();
    //                 },
    //                 () => {
    //                     reject();
    //                 }
    //             )
    //         })
    //     })

    //     return Promise.all(r);
    // }

    // /** 加载页面的组件 */
    // static async loadPageCompontents(pageData: PageData) {
    //     if (pageData == null) throw errors.argumentNull("pageData");

    //     let componentInfos = await localService.componentInfos();
    //     let componentTypes = (pageData.children || []).map((o: ComponentData) => o.type);
    //     let componentToLoad = componentInfos.filter(o => o.type != null && componentTypes.indexOf(o.type) >= 0)
    //     let r = componentToLoad.map(componentInfo => {
    //         return new Promise((resolve, reject) => {
    //             let componentPath = componentInfo.path;
    //             requirejs({ context: contextName }, [componentPath],
    //                 (mod) => {

    //                     console.assert(componentInfo.type != null);
    //                     console.assert(typeof mod[componentInfo.type] == "function");
    //                     registerComponent(componentInfo.type, mod[componentInfo.type]);

    //                     resolve();
    //                 },
    //                 () => {
    //                     reject();
    //                 }
    //             )
    //         })
    //     })

    //     return Promise.all(r);
    // }

    // /** 加载单个组件 */
    // static async loadSingleComponent(componentData: ComponentData) {
    //     let componentInfos = await localService.componentInfos();
    //     let componentType = componentData.type;
    //     let componentToLoad = componentInfos.filter(o => o.type != null && componentType == o.type)[0];
    //     console.assert(componentToLoad != null);

    //     await new Promise((resolve, reject) => {
    //         let componentPath = componentToLoad.path;
    //         requirejs({ context: contextName }, [componentPath],
    //             (mod) => {

    //                 console.assert(componentToLoad.type != null);
    //                 console.assert(typeof mod[componentToLoad.type] == "function");
    //                 registerComponent(componentToLoad.type, mod[componentToLoad.type]);

    //                 resolve();
    //             },
    //             () => {
    //                 reject();
    //             }
    //         )
    //     })
    // }
}

async function loadComponentType(typeName: string) {
    let componentInfos = await services.local.componentInfos();
    let componentInfo = componentInfos.filter(o => o.type == typeName)[0];
    if (componentInfo == null) {
        throw errors.canntFindComponentInfo(typeName);
    }

    let path = componentInfo.path;
    if (path.endsWith(".jsx")) {
        path = path.substr(0, path.length - 4);
    }
    console.assert(path.startsWith("static/"));
    path = path.substr("static/".length);
    return new Promise((resolve, reject) => {
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
}
