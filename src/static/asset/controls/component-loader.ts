import { registerComponent, PageData, componentTypes } from "taro-builder-core";
import { errors } from "../errors";
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
                    loadComponentFinish(item.type, true);

                }).catch(err => {
                    console.error(err);
                    let componentType = createComponentLoadFail(err, () => {
                        delete componentTypes[item.type];
                        ComponentLoader.loadComponentTypes(pageData, loadComponentFinish);
                    });
                    registerComponent(item.type, componentType);
                    loadComponentFinish(item.type, false);
                })
            }
        }
    }
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
