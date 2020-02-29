
import { ComponentData } from "./component-data";
import React = require("react");
import { View } from "@tarojs/components";

type compoenntTypes = { [name: string]: typeof React.Component|React.ComponentType};


let errors = {
    pathFieldRequired(name: string) {
        let msg = `Path field of '${name}' component config can not be null or empty.`;
        return new Error(msg);
    },
    canntFindModule(name: string, path: string) {
        let msg = `Can not find component '${name}' in the module, module path is: '${path}'.`;
        return new Error(msg);
    },
    componentNotExists(name: string) {
        let msg = `Component '${name}' not exists.`;
        return new Error(msg);
    }
}

export class CompoenntParser {
    private compoenntTypes: compoenntTypes;

    constructor(compoenntTypes: compoenntTypes) {
        this.compoenntTypes = compoenntTypes;
    }

    parse(componentData: ComponentData) {
        try {
            return this.createComponent(componentData);
        }
        catch (e) {
            let err: Error = e;
            return <View>
                <View>Error:</View>
                <View>{err.message}</View>
            </View>
        }
    }

    private createComponent(componentData: ComponentData | string) {

        if (typeof componentData == "string")
            return componentData;

        let children = (componentData.children || []).map(c => this.createComponent(c));

        let props = (componentData.props || {}) as any;
        let name = componentData.typeName;
        let compoenntType = this.compoenntTypes[name];

        if (compoenntType == null) {
            throw errors.componentNotExists(name);
        }

        let r = React.createElement(compoenntType, props, children);
        return r;
    }
}
