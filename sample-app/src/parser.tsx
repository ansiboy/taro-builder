import TaroBuilderCore from "taro-builder-core";
import React from "react";
import TaroComponents, { View, Text } from "@tarojs/components";
import * as MyComponents from "./components/index";
import { HTMLView } from "./components/html-editor/component";
import { Carousel } from "./components/carousel/component";

type ComponentName = keyof typeof TaroComponents | keyof typeof MyComponents;
const pageView: keyof typeof TaroBuilderCore = "PageView";
const view: ComponentName = "View";
const text: ComponentName = "Text";
const htmlView: ComponentName = "HTMLView";
const carousel: ComponentName = "Carousel";

import { ComponentData } from "taro-builder-core/out/component-data";
import { PageView } from "./components/page-view";

export function createComponent(componentData: ComponentData | string) {

    if (typeof componentData == "string")
        return componentData;


    let props = (componentData.props || {}) as any;

    let r: JSX.Element;
    let children = (componentData.children || []).map(c => createComponent(c));
    switch (componentData.type) {
        case pageView:
            return React.createElement(PageView, props, children);
        case view: {
            r = React.createElement(View, props, children);
            break;
        }
        case text: {
            r = React.createElement(Text, props, children);
            break;
        }
        case htmlView: {
            r = React.createElement(HTMLView, props, children);
            break;
        }
        case carousel: {
            console.log(carousel)
            r = React.createElement(Carousel, props, children);
            break;
        }
        default: {
            r = <View>
                <View>Parse fail:</View>
                <View>{JSON.stringify(componentData)}</View>
            </View>
            break;
        }

    }

    return r;
}