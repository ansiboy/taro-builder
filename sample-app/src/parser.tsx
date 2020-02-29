import React from "react";
import {
    View, ScrollView, SwiperItem, Text, Swiper, MovableView, CoverView, Icon,
    Progress, RichText, Button, Checkbox,
} from "@tarojs/components";

import { ComponentData } from "taro-builder-core/out/component-data";

type compoenntTypes = { [name: string]: typeof React.Component };
let TaroComponents = {
    // 视图容器
    View, ScrollView, Swiper, SwiperItem, MovableView, CoverView,
    // 基础内容
    Icon, Text, Progress, RichText,
    // 表单组件
    Button, Checkbox,
};

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
        this.compoenntTypes = Object.assign({}, TaroComponents, compoenntTypes);
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
        let name = componentData.type;
        let compoenntType = this.compoenntTypes[name];
        // if (compoenntType == null) {
        //     let componentConfig = this.componentsConfig[name];
        //     if (componentConfig != null) {
        //         let componentPath = componentConfig.path;
        //         if (!componentPath)
        //             throw errors.pathFieldRequired(name);

        //         console.log(1);
        //         console.log(componentPath)
        //         let componentModule = require(componentPath);
        //         console.log(2);
        //         compoenntType = componentModule[name];
        //         if (compoenntType == null) {
        //             console.log(3);
        //             throw errors.canntFindModule(name, componentPath);
        //         }
        //     }
        // }

        if (compoenntType == null) {
            throw errors.componentNotExists(name);
        }

        let r = React.createElement(compoenntType, props, children);
        return r;

        // let r: JSX.Element;
        // let children = (componentData.children || []).map(c => createComponent(c));
        // switch (componentData.type) {
        //     case pageView:
        //         return React.createElement(PageView, props, children);
        //     case view: {
        //         r = React.createElement(View, props, children);
        //         break;
        //     }
        //     case text: {
        //         r = React.createElement(Text, props, children);
        //         break;
        //     }
        //     case htmlView: {
        //         r = React.createElement(HTMLView, props, children);
        //         break;
        //     }
        //     case carousel: {
        //         console.log(carousel)
        //         r = React.createElement(Carousel, props, children);
        //         break;
        //     }
        //     default: {
        //         r = <View>
        //             <View>Parse fail:</View>
        //             <View>{JSON.stringify(componentData)}</View>
        //         </View>
        //         break;
        //     }

        // }

        // return r;
    }
}

// export function createComponent(componentData: ComponentData | string) {

//     if (typeof componentData == "string")
//         return componentData;


//     let props = (componentData.props || {}) as any;

//     let r: JSX.Element;
//     let children = (componentData.children || []).map(c => createComponent(c));
//     switch (componentData.type) {
//         case pageView:
//             return React.createElement(PageView, props, children);
//         case view: {
//             r = React.createElement(View, props, children);
//             break;
//         }
//         case text: {
//             r = React.createElement(Text, props, children);
//             break;
//         }
//         case htmlView: {
//             r = React.createElement(HTMLView, props, children);
//             break;
//         }
//         case carousel: {
//             console.log(carousel)
//             r = React.createElement(Carousel, props, children);
//             break;
//         }
//         default: {
//             r = <View>
//                 <View>Parse fail:</View>
//                 <View>{JSON.stringify(componentData)}</View>
//             </View>
//             break;
//         }

//     }

//     return r;
// }