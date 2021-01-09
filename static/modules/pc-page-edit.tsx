import * as React from "react";
import { PageProps } from "maishu-chitu-react";
import { PageRecord } from "../../entities";
import { LocalService } from "../asset/services/local-service";
import { ComponentData, ComponentInfo, PageBody, PageData } from "taro-builder-core";
import { PageHelper } from "../asset/controls/page-helper";
import { DesignerContext, EditorPanel, EditorPanelProps, PageDesigner } from "maishu-jueying";
import { ComponentPanel } from "../asset/controls/component-panel";
import { ComponentLoader } from "../asset/controls/component-loader";
import { DesignPage } from "../asset/controls/design-components/index";
import "./pc-page-edit.less";
import { guid } from "maishu-toolkit";

interface State {
    pageRecord?: PageRecord,
    componentInfos?: ComponentInfo[],
    isReady: boolean
}

interface Props extends PageProps {
    pageRecord?: PageRecord,
    customRender?: EditorPanelProps["customRender"],
    data: { id?: string },
}

export default class PCPageEdit extends React.Component<Props, State> {
    componentPanel: ComponentPanel;
    editorPanel: EditorPanel;

    constructor(props) {
        super(props);

        this.state = { pageRecord: this.props.pageRecord, isReady: false };

        let localService = this.props.app.createService(LocalService);
        localService.componentInfos().then(componentInfos => {
            console.assert(componentInfos != null);
            componentInfos = componentInfos.filter(o => o.displayName != null);
            this.setState({ componentInfos });
            this.componentPanel.setComponets(componentInfos.map(o => ({
                type: o.type, path: o.path, group: o.group, icon: o.icon,
                displayName: o.displayName,
                componentData: { type: o.type, props: {} } as ComponentData
            })))
            //==========================================================================================
        });
    }

    private emptyRecord(): Partial<PageRecord> {
        let pageData = this.emptyPageData();
        let record: Partial<PageRecord> = {
            pageData,
            type: "page",
            createDateTime: new Date()
        };
        return record;
    }

    private emptyPageData() {
        let r = PageHelper.emptyPageData();
        r.children.push({
            id: guid(),
            type: "Carousel",
            parentId: PageBody.id,
            props: {}
        })
        return r;
    }

    componentDidMount() {
        let s = this.props.createService(LocalService);
        if (this.state.pageRecord == null) {
            if (this.props.data.id) {
                s.getPageData(this.props.data.id as string).then(d => {
                    this.setState({ pageRecord: d })
                })
            }
            else {
                let r = this.emptyRecord() as PageRecord;
                this.setState({ pageRecord: r });
            }
        }

        this.setState({ isReady: true, });

        // this.createValidator(this.props.source.element);
    }

    private renderPageData(pageData: PageData, componentPanel: ComponentPanel) {
        if (componentPanel == null)
            return;

        ComponentLoader.loadComponentTypes(pageData, () => {
            this.setState({});
        })
        return <DesignPage pageData={pageData} componentPanel={componentPanel} />
    }


    render() {

        let { pageRecord, componentInfos, isReady } = this.state;
        return <>
            <div>
                <ul className="nav nav-tabs">
                    <li className="active" key={1}>
                        <a>常用</a>
                    </li>
                    <li key={2}>
                        <a>导航</a>
                    </li>
                    <li key={3}>
                        <a>其它</a>
                    </li>
                    <li className="pull-right">
                        <button className="btn btn-sm btn-primary">
                            <i className="icon-reply"></i><span>返回</span>
                        </button>
                    </li>
                    <li className="pull-right">
                        <button className="btn btn-sm btn-primary">
                            <i className="icon-save"></i><span>保存</span>
                        </button>
                    </li>
                    <li className="pull-right">
                        <button className="btn btn-sm btn-primary">
                            <i className="icon-eye-open"></i><span>预览</span>
                        </button>
                    </li>

                </ul>
                <div>
                    <ComponentPanel ref={e => this.componentPanel = this.componentPanel || e} />
                </div>
            </div>
            {pageRecord == null || componentInfos == undefined ?
                <div className="empty">
                    数据加载中...
                </div> :
                <PageDesigner pageData={pageRecord.pageData}>
                    <div className="pull-right" style={{ width: 300, marginTop: -90 }}>
                        <div className="panel panel-default">
                            <div className="panel-heading">页面设置</div>
                            <ul className="list-group">
                                <li className="list-group-item clearfix">
                                    <div className="pull-left">
                                        页面名称</div>
                                    <div className="pull-right">
                                        <input name="name" className="form-control input-sm" style={{ width: 180 }} value={""}
                                            onChange={() => {

                                            }} />
                                    </div>
                                </li>
                                <li className="list-group-item clearfix">
                                    <div className="pull-left">
                                        视图尺寸</div>
                                    <div className="pull-right">
                                        <input name="name" className="form-control input-sm" style={{ width: 180 }} value={""}
                                            onChange={() => {

                                            }} />
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <EditorPanel className="well" customRender={this.props.customRender}
                            ref={e => this.editorPanel = this.editorPanel || e} />
                    </div>
                    <DesignerContext.Consumer>
                        {() => isReady ? this.renderPageData(pageRecord.pageData, this.componentPanel) : null}
                    </DesignerContext.Consumer>
                </PageDesigner>
            }
        </>
    }
}