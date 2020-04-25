import { DesignView, DesignerViewHeader } from "../controls/design-view/index";
import React = require("react");
import { PageProps } from "maishu-chitu-react";
import { buttonOnClick } from "maishu-ui-toolkit";
import { PageRecord } from "../../entities";
import { LocalService } from "../services/local-service";
import { guid } from "maishu-toolkit";
import websiteConfig from "json!websiteConfig";
import { FormValidator, rules as r } from "maishu-dilu"
import { dataSources } from "../data-sources";
import { ComponentData } from "maishu-jueying";

requirejs([websiteConfig.componentEditorsPath], function () {
})

interface State {
    pageData: ComponentData | undefined,
    name?: string
}

interface Props extends PageProps {
    data: { id?: string },
}

export default class PageEdit extends React.Component<Props, State> {

    private localService: LocalService;
    private validator: FormValidator;

    constructor(props) {
        super(props);

        this.state = { pageData: undefined };
        this.localService = this.props.createService(LocalService);
    }

    async save(): Promise<any> {
        if (!this.validator.check()) {
            return;
        }
        let pageData = this.state.pageData;
        let recored = { id: this.props.data.id, pageData, name: this.state.name, type: "page" } as PageRecord;
        if (this.props.data.id) {
            await dataSources.pageRecords.update(recored);
        }
        else {
            await dataSources.pageRecords.insert(recored);
        }
    }

    private emptyComponentDataHandler(): PageRecord {
        let pageData: ComponentData = {
            id: guid(),
            type: "PageView",
            children: [],
            props: {}
        };
        let record: PageRecord = {
            id: pageData.id,
            pageData,
            name: "",
            type: "page",
            createDateTime: new Date()
        };
        return record;
    }

    componentDidMount() {
        let s = this.props.createService(LocalService);
        if (this.props.data.id) {
            s.getPageData(this.props.data.id as string).then(d => {
                this.setState({ pageData: d.pageData, name: d.name })
            })
        }
        else {
            let r = this.emptyComponentDataHandler();
            this.setState({ pageData: r.pageData });
        }
    }

    createValidator(form: HTMLElement) {
        if (this.validator)
            return;

        this.validator = new FormValidator(form,
            { name: "name", rules: [r.required("请输入页面名称")] }
        );
    }

    preivew() {

    }

    render() {
        let { pageData, name } = this.state;
        if (pageData == undefined)
            return <div className="empty">
                数据加载中...
            </div>
        return <DesignView {...this.props} pageData={pageData}>
            <ul style={{ height: 32, margin: 0, padding: 0 }}>
                <li className="pull-left" ref={e => e ? this.createValidator(e) : null}>
                    <input name="name" className="form-control" style={{ width: 300, marginTop: -5 }} placeholder="请输入页面名称"
                        value={name || ""}
                        onChange={e => {
                            this.setState({ name: e.target.value })
                        }} />
                </li>
                <li className="pull-right">
                    <button className="btn btn-sm btn-primary">
                        <i className="icon-copy"></i><span>更换模板</span>
                    </button>
                    <div className="btn-group">
                        <button className="btn btn-sm btn-primary dropdown-toggle">
                            <i className="icon-camera"></i>
                            <span>存为快照</span>
                        </button>
                        <button type="button" className="btn btn-sm btn-primary dropdown-toggle"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="icon-caret-down"></i>
                        </button>
                        <ul className="dropdown-menu">
                            <li style={{ padding: "6px 0px" }}>
                                <a className="btn-link">查看快照<span className="badge pull-right">2</span></a>
                            </li>
                        </ul>
                    </div>
                    <button className="btn btn-sm btn-primary" onClick={() => this.preivew()}>
                        <i className="icon-eye-open"></i><span>预览</span>
                    </button>
                    <button className="btn btn-sm btn-primary"
                        ref={e => {
                            if (!e) return;
                            buttonOnClick(e, () => this.save(), { toast: "保存成功!" })
                        }}>
                        <i className="icon-save"></i>
                        <span>保存</span></button>
                    <button className="btn btn-sm btn-primary"
                        onClick={() => this.props.app.back()}>
                        <i className="icon-reply"></i><span>返回</span>
                    </button>
                </li>
                <li className=""></li>
            </ul>
        </DesignView>
    }
}