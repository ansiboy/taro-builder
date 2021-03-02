import * as React from "react";
import { PageData, Page } from "maishu-jueying-core";
import { ComponentLoader } from "./component-loader";
import { LocalService } from "../services";

export interface PageViewProps {
    pageData: PageData
}

export interface PageViewState {
    pageData: PageData
}


export class PageView extends React.Component<PageViewProps, PageViewState> {

    private localService = new LocalService();

    constructor(props: PageViewProps) {
        super(props);

        this.state = { pageData: null };
    }

    UNSAFE_componentWillReceiveProps(props: PageViewProps) {
        this.createComponentLoader(props.pageData);
    }

    componentDidMount() {
        this.createComponentLoader(this.props.pageData);
    }

    createComponentLoader(pageData: PageData) {
        let componentLoader = new ComponentLoader(pageData);
        componentLoader.loadComponentSuccess.add(args => {
        })
        componentLoader.loadComponentsComplete.add(() => {
            this.setState({ pageData: this.props.pageData });
        })

        componentLoader.loadComponentFail.add(() => {
        })

        // componentLoader.loadComponentTypes(this.props.pageData);
    }

    render() {
        let { pageData } = this.state;
        if (pageData == null)
            return <div className="empty">组件正在加载中...</div>

        return <Page pageData={pageData} />
    }
}