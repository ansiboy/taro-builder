import { PageProps } from "maishu-chitu-react";
import { guid } from "maishu-toolkit";
import * as React from "react";
import { PageData, Page, PageBody } from "taro-builder-core";
import { LocalService } from "../services/local-service";
import { ComponentLoader } from "../../asset/controls/component-loader"
//D:\projects\taro-builder\node_modules\@tarojs\components\dist\index.js
interface State {
    pageData: PageData
}

export default class PageView extends React.Component<PageProps, State> {
    private localService: LocalService;
    constructor(props) {
        super(props);

        this.state = { pageData: this.emptyPageData() };
        this.localService = this.props.createService(LocalService);
        this.localService.getPageRecord(this.props.data.id as string).then(r => {
            ComponentLoader.loadComponentTypes(r.pageData, () => this.localService.componentInfos(), (typeName, isSuccess) => {
                this.setState({ pageData: r.pageData })
            });

            // this.setState({ pageData: r.pageData })
        });

    }
    emptyPageData() {
        let pageId = guid();
        let pageData: PageData = {
            id: pageId,
            type: Page.name,
            props: {},
            children: [
            ],
        }

        return pageData;
    }

    render() {
        let { pageData } = this.state;
        return <Page pageData={pageData}>

        </Page>
    }
}