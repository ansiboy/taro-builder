
import * as React from "react";
import { ComponentFactory, CompoenntTypes } from "maishu-jueying-core";
import { View } from "@tarojs/components";
import { taroComponents } from "./taro-components";

export class TaroComponentFactory extends ComponentFactory {
    constructor(compoenntTypes?: CompoenntTypes) {
        super(Object.assign(taroComponents, compoenntTypes))
    }
    createViewComponent(props, ...children) {
        return React.createElement(View, props, ...children);
    }
    processError(err) {
        return <View>
            <View>Error:</View>
            <View>{err.message}</View>
        </View>
    }
}
