import { Page, component, parseComponentData, ComponentData, PageData } from "taro-builder-core";
import { DesignerContext, PageDesigner } from "maishu-jueying";
import * as React from "react";
import { ComponentPanel } from "../component-panel";

type T = { page: DesignPage, designer: PageDesigner, pageData: PageData, componentPanel: ComponentPanel };
export let DesignPageContext = React.createContext<T>({ page: null, designer: null, pageData: null, componentPanel: null });

@component({ type: Page.typeName })
export class DesignPage extends React.Component<{ pageData: PageData, componentPanel: ComponentPanel }> {
    element: HTMLElement;

    render() {
        return <DesignerContext.Consumer>
            {args => {
                let value: T = {
                    page: this, designer: args.designer, pageData: this.props.pageData,
                    componentPanel: this.props.componentPanel
                };
                return <DesignPageContext.Provider value={value}>
                    <Page {...{ pageData: this.props.pageData }} />
                </DesignPageContext.Provider>
            }}
        </DesignerContext.Consumer>
    }
}

DesignPage.contextType = DesignerContext;

