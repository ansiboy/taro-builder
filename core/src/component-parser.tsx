
import * as React from "react";
import { ComponentFactory } from "jueying-core";
import { View } from "@tarojs/components";

export class TaroComponentFactory extends ComponentFactory {
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
