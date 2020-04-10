import { DesignView } from "../controls/design-view";
import React = require("react");
import { PageProps } from "maishu-chitu-react";
import { buttonOnClick } from "maishu-ui-toolkit";
import { PageRecord } from "../../entities";
import { LocalService } from "../services/local-service";
import { guid } from "maishu-toolkit";
import { ComponentData, ComponentDataHandler } from "maishu-jueying";

interface State {
}

interface Props extends PageProps {
    data: { id?: string }
}

export default class PageEdit extends React.Component<Props, State> {

    private localService: LocalService;
    private componentDataHandler: ComponentDataHandler;

    constructor(props) {
        super(props);

        this.componentDataHandler = this.emptyComponentDataHandler();
        this.state = {};
        this.localService = this.props.createService(LocalService);
    }

    async save(): Promise<any> {
        let pageData = this.componentDataHandler.pageData;
        let recored = { id: this.props.data.id, pageData, } as PageRecord;
        if (this.props.data.id) {
            await this.localService.updatePageRecord(recored);
        }
        else {
            await this.localService.addPageRecord(recored);
        }
    }

    private emptyComponentDataHandler(): ComponentDataHandler {
        let record: PageRecord = {
            id: guid(),
            pageData: {
                type: "PageView",
                children: [],
                props: { id: guid() }
            } as ComponentData,
            name: "",
            type: "page",
            createDateTime: new Date()
        };

        return new ComponentDataHandler(record.pageData);
    }

    componentDidMount() {
        let s = this.props.createService(LocalService);
        if (this.props.data.id) {
            s.getPageData(this.props.data.id as string).then(d => {
                this.componentDataHandler.pageData = d.pageData;
            })
        }
    }

    preivew() {

    }

    render() {
        return <DesignView {...this.props} componentDataHandler={this.componentDataHandler}>
            <ul style={{ height: 32, margin: 0, padding: 0 }}>
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