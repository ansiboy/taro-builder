import React from "react";
import { PageData, Page } from "taro-builder-core";

export interface PageViewProps {
    pageData: PageData
}

export class PageView extends React.Component<PageViewProps> {
    render() {
        return <Page {...{ pageData: this.props.pageData }} />
    }
}