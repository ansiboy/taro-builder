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

class ErrorBoundary extends React.Component<{}, { hasError: boolean }> {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // 更新 state 使下一次渲染能够显示降级后的 UI
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // 你同样可以将错误日志上报给服务器
        // logErrorToMyService(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // 你可以自定义降级后的 UI 并渲染
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}