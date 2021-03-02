import * as React from "react";
import { Page, PageData, componentTypes, registerComponent } from "maishu-jueying-core";
import { PageRecord } from "../../entities";
import { LocalService } from "../services";
import { PageView } from "../controls/page-view";

// let req = requirejs.config({ context: "shop3" })
// req(["@tarojs/taro-h5"], function (abc) {
// })

interface Props {
    pageRecord: PageRecord
}

interface State {
    pageRecord?: PageRecord
}

export default class TempPage extends React.Component<Props, State> {
    private localService = new LocalService();

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        this.localService.getPageDataByName("home").then(r => {
            this.setState({ pageRecord: r });
        })
    }

    render() {
        let { pageRecord } = this.state;
        if (pageRecord === undefined)
            return <div>数据正在加载中...</div>

        if (pageRecord === null)
            return <div>数据加载失败</div>

        return <PageView pageData={pageRecord.pageData} />
    }
}

