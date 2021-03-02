import { PageProps } from "maishu-chitu-react";
import { guid } from "maishu-toolkit";
import * as React from "react";
import { PageData, Page, PageBody } from "maishu-jueying-core";
import { LocalService } from "../../services";
import { ComponentLoader } from "../../controls/component-loader"
import { PageHelper } from "../../controls/page-helper";

interface State {
    pageData: PageData
}

export default class PageView extends React.Component<PageProps, State> {
    private localService: LocalService;
    constructor(props) {
        super(props);

        this.state = { pageData: this.emptyPageData() };
        this.localService = this.props.createService(LocalService);
        this.localService.getPageRecord(this.props.data.id as string)
            .then(async r => {
                if (!r.templateId) {
                    return r;
                }

                let template = await this.localService.getPageRecord(r.templateId);
                PageHelper.mergeTemplate(r.pageData, template.pageData);
                return r;
            })
            .then(r => {
                (r.pageData as PageData).children.forEach(c => {
                    c.props.data = this.props.data;
                })

                // ComponentLoader.loadComponentTypes(r.pageData, (typeName, isSuccess) => {
                //     this.setState({ pageData: r.pageData })
                // }, true);
                let componentLoader = new ComponentLoader(r.pageData);
                componentLoader.loadComponentsComplete.add(() => {
                    this.setState({ pageData: r.pageData });
                })
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