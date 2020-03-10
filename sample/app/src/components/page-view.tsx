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

    render() {
        return <t.View>
            {this.props.children}
        </t.View>
    }
}
