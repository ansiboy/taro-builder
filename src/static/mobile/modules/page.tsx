import { Page, PageData } from "maishu-jueying-core";
import { errors } from "../../errors";
import { ComponentLoader } from "../../controls/component-loader";
import * as React from "react";
import { LocalService } from "../../services";

interface State {
    pageData?: PageData
}

interface Props {
    data: { [key: string]: string }
}

let localService = new LocalService()

export default class MobilePage extends React.Component<Props, State>{
    constructor(props) {
        super(props);

        this.state = {};
        this.loadPageData();

    }
    async loadPageData() {
        let id = this.props.data["id"];
        if (!id)
            throw errors.urlParameterEmpty("id");

        let r = await localService.getPageRecord(id);
        if (r == null)
            throw errors.pageRecordNotExists(id);

        // ComponentLoader.loadComponentTypes(r.pageData, () => {
        //     this.setState({});
        // }, true);
        let componentLoader = new ComponentLoader(r.pageData);
        componentLoader.loadComponentsComplete.add(() => {
            this.setState({ pageData: r.pageData });
        });
    }

    render() {
        let { pageData } = this.state;
        if (pageData == null)
            return <div className="empty">数据正在加载中...</div>

        return <Page pageData={pageData} />
    }
}