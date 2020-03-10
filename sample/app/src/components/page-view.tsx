import * as t from "@tarojs/components";
import React from "react";
import { component } from "maishu-jueying-core/decorators";
import { ComponentData } from "maishu-jueying-core";
import { Callback } from "maishu-toolkit";
import { Carousel } from "./carousel";
import { HTMLView } from "./html-view/component";

let c = { Carousel, HTMLView };

type Components = typeof c;

interface PageViewProps {
    pageData: ComponentData,
}

@component()
export class PageView extends React.Component<PageViewProps> {
    element: HTMLElement;
    wrapper: HTMLElement;
    componentCreated = Callback.create<{ pageView: PageView, element: HTMLElement, data: ComponentData }>();

    componentDidMount() {

    }

    createComponentElement(componentData: ComponentData | string) {

        if (typeof componentData == "string")
            return componentData;

        const Carousel: keyof Components = "Carousel";
        const HTMLView: keyof Components = "HTMLView";
        const View: keyof typeof t = "View";

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

    render() {
        let props: PageViewProps = this.props;
        let children = props.pageData.children as ComponentData[] || [];
        return children.map(o => this.createComponentElement(o));
    }
}
