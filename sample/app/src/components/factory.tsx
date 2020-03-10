import * as t from "@tarojs/components";
import React from "react";
import { ComponentData } from "maishu-jueying-core";
import { Carousel } from "./carousel";
import { HTMLView } from "./html-view/component";
import { PageView } from "./page-view";

let c = { Carousel, HTMLView, PageView };

type Components = typeof c;
export class TaroComponentFactory {
    createComponentElement(componentData: ComponentData | string) {
        if (typeof componentData == "string")
            return componentData;

        const Carousel: keyof Components = "Carousel";
        const HTMLView: keyof Components = "HTMLView";
        const View: keyof typeof t = "View";
        const PageView: keyof typeof c = "PageView";

        let props: any = componentData.props;
        let children = componentData.children || [];
        let r: JSX.Element;
        switch (componentData.type) {
            case Carousel:
                r = <c.Carousel {...props} />;
                break;
            case HTMLView:
                r = <c.HTMLView {...props} />;
                break;
            case PageView:
                r = <c.PageView {...props} >
                    {children.map(o => this.createComponentElement(o))}
                </c.PageView>;
                break;
            case View:
                r = <t.View {...props}>
                    {children.map(o => this.createComponentElement(o))}
                </t.View>;
                break;
            default:
                r = <t.View>
                    <t.Text>Unspported:</t.Text>
                    <t.View>
                        <t.Text>{JSON.stringify(componentData)}</t.Text>
                    </t.View>
                </t.View>;
        }
        return r;
    }

}