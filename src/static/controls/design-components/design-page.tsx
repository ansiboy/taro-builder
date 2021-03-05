import { Page, PageData, registerComponent } from "maishu-jueying-core";
import { DesignerContext, PageDesigner } from "maishu-jueying";
import * as React from "react";
import { ComponentPanel } from "../component-panel";
import { ComponentLoader } from "../component-loader";
import "css!devices"

type T = { page: DesignPage, designer: PageDesigner, pageData: PageData, componentPanel: ComponentPanel };
export let DesignPageContext = React.createContext<T>({ page: null, designer: null, pageData: null, componentPanel: null });

interface State {
}

export class DesignPage extends React.Component<{ pageData: PageData, componentPanel: ComponentPanel }, State> {
    element: HTMLElement;
    componentLoader: ComponentLoader;

    constructor(props: DesignPage["props"]) {
        super(props);

        this.state = {};
        this.createComponentLoader(this.props.pageData);
    }


    createComponentLoader(pageData: PageData) {
        this.componentLoader = new ComponentLoader(pageData);
        this.componentLoader.loadComponentSuccess.add(args => {
            // let componentInfo = args.componentInfo;
            // Promise.all([
            //     ComponentLoader.loadComponentEditor(componentInfo),
            //     ComponentLoader.loadComponentLayout(componentInfo),
            // ]).then(() => {
            //     this.setState({ pageData });
            // })
        })
        this.componentLoader.loadComponentsComplete.add(() => {
            this.setState({ pageData });
        })

        this.componentLoader.loadComponentFail.add(() => {
        })
    }

    UNSAFE_componentWillReceiveProps(props: DesignPage["props"]) {
        this.createComponentLoader(props.pageData);
    }

    componentDidMount() {
        this.componentLoader.loadComponentTypes();
    }

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
registerComponent(Page.typeName, DesignPage);

