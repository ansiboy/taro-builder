import { Page, PageData } from "maishu-jueying-core";
import { services } from "../../asset/services/index";
import { errors } from "../../asset/errors";
import { ComponentLoader } from "../../asset/controls/component-loader";
import * as React from "react";
import { LocalService } from "../../asset/services/local-service";
import { errorHandle } from "../../asset/errorHandle";

interface State {
    pageData?: PageData
}

interface Props {
    data: { [key: string]: string }
}

let localService = new LocalService(err => errorHandle(err))

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

        let r = await services.local.getPageRecord(id);
        if (r == null)
            throw errors.pageRecordNotExists(id);

        ComponentLoader.loadComponentTypes(r.pageData, () => {
            this.setState({});
        }, true);
        this.setState({ pageData: r.pageData });
    }

    render() {
        let { pageData } = this.state;
        if (pageData == null)
            return <div className="empty">数据正在加载中...</div>

        return <Page pageData={pageData} />
    }
}