import { Page, component, parseComponentData, ComponentData, PageData } from "taro-builder-core";
import { DesignerContext } from "maishu-jueying";
import * as React from "react";


@component({ type: Page.typeName })
export class DesignPage extends Page {
    element: HTMLElement;


    render() {
        return <ErrorBoundary><DesignerContext.Consumer>
            {args => {
                let pageData = args.designer.pageData as PageData;
                let children = pageData.children.filter(o => o.parentId == pageData.id) as ComponentData[];
                return <div className={"page-view"} ref={e => this.element = e || this.element}>
                    {children.map(o => <React.Fragment key={o.id}>
                        {parseComponentData(o)}
                    </React.Fragment>)}
                </div>
            }}
        </DesignerContext.Consumer>
        </ErrorBoundary>
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