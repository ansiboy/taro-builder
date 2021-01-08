import { Page, PageData } from "taro-builder-core";
import { services } from "../../services/index";
import { errors } from "../../errors";
import { ComponentLoader } from "../../controls/component-loader";
import React from "react";

interface State {
    pageData?: PageData
}

interface Props {
    data: { [key: string]: string }
}

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

        let r = await services.local.getPageData(id);
        if (r == null)
            throw errors.pageRecordNotExists(id);

        ComponentLoader.loadComponentTypes(r.pageData, () => {
            this.setState({});
        });
        this.setState({ pageData: r.pageData });
    }

    render() {
        let { pageData } = this.state;
        if (pageData == null)
            return <div className="empty">数据正在加载中...</div>

        return <Page pageData={pageData} />
    }
}