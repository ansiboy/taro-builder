import { LocalService } from "../services/local-service";
import { errorHandle } from "maishu-chitu-admin/static";
import { contextName } from "json!websiteConfig";
import { ComponentData, registerComponent } from "taro-builder-core";
import { errors } from "../../errors";

let localService = new LocalService(err => errorHandle)
export class ComponentLoader {

    /** 加载全部组件 */
    static async loadAllComponents() {
        let componentInfos = await localService.componentInfos();
        let r = componentInfos.map(componentInfo => {
            return new Promise((resolve, reject) => {
                requirejs({ context: contextName }, [componentInfo.path],
                    (mod) => {

                        console.assert(componentInfo.type != null);
                        console.assert(typeof mod[componentInfo.type] == "function");
                        registerComponent(componentInfo.type, mod[componentInfo.type]);

                        resolve();
                    },
                    () => {
                        reject();
                    }
                )
            })
        })

        return Promise.all(r);
    }

    /** 加载页面的组件 */
    static async loadPageCompontents(pageData: ComponentData) {
        if (pageData == null) throw errors.argumentNull("pageData");

        let componentInfos = await localService.componentInfos();
        let componentTypes = (pageData.children || []).map((o: ComponentData) => o.type);
        let componentToLoad = componentInfos.filter(o => o.type != null && componentTypes.indexOf(o.type) >= 0)
        let r = componentToLoad.map(componentInfo => {
            return new Promise((resolve, reject) => {
                let componentPath = componentInfo.path;
                requirejs({ context: contextName }, [componentPath],
                    (mod) => {

                        console.assert(componentInfo.type != null);
                        console.assert(typeof mod[componentInfo.type] == "function");
                        registerComponent(componentInfo.type, mod[componentInfo.type]);

                        resolve();
                    },
                    () => {
                        reject();
                    }
                )
            })
        })

        return Promise.all(r);
    }

    /** 加载单个组件 */
    static async loadSingleComponent(componentData: ComponentData) {
        let componentInfos = await localService.componentInfos();
        let componentType = componentData.type;
        let componentToLoad = componentInfos.filter(o => o.type != null && componentType == o.type)[0];
        console.assert(componentToLoad != null);

        await new Promise((resolve, reject) => {
            let componentPath = componentToLoad.path;
            requirejs({ context: contextName }, [componentPath],
                (mod) => {

                    console.assert(componentToLoad.type != null);
                    console.assert(typeof mod[componentToLoad.type] == "function");
                    registerComponent(componentToLoad.type, mod[componentToLoad.type]);

                    resolve();
                },
                () => {
                    reject();
                }
            )
        })
    }
}