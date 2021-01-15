import * as React from "react";
import { PageProps } from "maishu-chitu-react";
import { PageRecord } from "../../entities";
import { LocalService } from "../asset/services/local-service";
import { ComponentData, ComponentInfo, PageData, PageHeader } from "taro-builder-core";
import { PageHelper } from "../asset/controls/page-helper";
import { Component, DesignerContext, EditorPanel, EditorPanelProps, PageDesigner, PropEditor, PropertyEditorInfo } from "maishu-jueying";
import { ComponentPanel } from "../asset/controls/component-panel";
import { ComponentLoader } from "../asset/controls/component-loader";
import { DesignPage } from "../asset/controls/design-components/index";
import "./pc-page-edit.less";
import { componentRenders } from "../asset/component-renders/index";
import { dataSources } from "../asset/data-sources";
import { FormValidator, rules as r } from "maishu-dilu";
import * as ui from "maishu-ui-toolkit";

interface State {
    pageRecord?: PageRecord,
    componentInfos?: ComponentInfo[],
    isReady: boolean,
    pageName: string,
}

interface Props extends PageProps {
    pageRecord?: PageRecord,
    customRender?: EditorPanelProps["customRender"],
    data: { id?: string, name?: string },
}

export default class PCPageEdit extends React.Component<Props, State> {
    componentPanel: ComponentPanel;
    editorPanel: EditorPanel;
    localService: LocalService;
    validator: FormValidator;
    pageDesigner: PageDesigner;

    constructor(props) {
        super(props);

        this.state = {
            pageRecord: this.props.pageRecord, isReady: false,
            pageName: "No Name"
        };

        this.localService = this.props.app.createService(LocalService);
        this.localService.componentInfos().then(componentInfos => {
            console.assert(componentInfos != null);
            componentInfos = componentInfos.filter(o => o.displayName != null);
            this.setState({ componentInfos });
            this.componentPanel.setComponets(componentInfos.map(o => Object.assign(o, {
                componentData: { type: o.type, props: {} } as ComponentData
            })));
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
        // r.children.push({
        //     id: guid(),
        //     type: "Carousel",
        //     parentId: PageBody.id,
        //     props: {}
        // })
        return r;
    }

    componentDidMount() {
        let s = this.props.createService(LocalService);
        if (this.state.pageRecord == null) {
            if (this.props.data.id) {
                s.getPageData(this.props.data.id as string).then(d => {
                    this.setState({ pageRecord: d, pageName: d.name });
                })
            }
            else if (this.props.data.name) {
                s.getPageDataByName(this.props.data.name).then(d => {
                    this.setState({ pageRecord: d, pageName: d.name })
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

        ComponentLoader.loadComponentTypes(pageData, () => this.localService.componentInfos(), () => {
            this.setState({});
        })
        return <DesignPage pageData={pageData} componentPanel={componentPanel} />
    }

    private bodyVisible(pageData: PageData): boolean {
        let r = PageHelper.findBody(pageData);
        return r != null && r.props.visible == true;
    }

    private headerVisible(pageData: PageData): boolean {
        let r = PageHelper.findHeader(pageData);
        return r != null && r.props.visible == true;
    }

    private headerHeight(pageData: PageData, value?: number) {
        if (value == null) {
            let r = PageHelper.findHeader(pageData);
            return r?.props.height;
        }
        let r = PageHelper.findHeader(pageData, true);
        r.props.height = value;

        let pageRecord = this.state.pageRecord;
        pageRecord.pageData = pageData;
        this.setState({ pageRecord });
    }

    private footerVisible(pageData: PageData) {
        let r = PageHelper.findFooter(pageData);
        return r != null && r.props.visible == true;
    }

    private footerHeight(pageData: PageData, value?: number) {
        if (value == null) {
            let r = PageHelper.findFooter(pageData);
            return r?.props.height;
        }

        let r = PageHelper.findFooter(pageData, true);

        r.props.height = value;
        let pageRecord = this.state.pageRecord;
        pageRecord.pageData = pageData;

        this.setState({ pageRecord });
    }

    private async showBody(pageData: PageData, visible: boolean) {
        let c = PageHelper.findBody(pageData);
        console.assert(c != null);
        c.props.visible = visible;

        let pageRecord = this.state.pageRecord;
        pageRecord.pageData = pageData;

        this.setState({ pageRecord });
    }

    private async showHeader(pageData: PageData, visible: boolean) {
        let c = PageHelper.findHeader(pageData, true);
        c.props.visible = visible;
        c.props["style"] = {
            position: "absolute",
        } as React.CSSProperties;

        let pageRecord = this.state.pageRecord;
        pageRecord.pageData = pageData;

        this.setState({ pageRecord });
    }

    private async showFooter(pageData: PageData, visible: boolean) {
        let c = PageHelper.findFooter(pageData, true);
        c.props.visible = visible;
        let pageRecord = this.state.pageRecord;
        pageRecord.pageData = pageData;

        this.setState({ pageRecord });
    }

    async save(): Promise<any> {
        let { pageName } = this.state;

        if (!this.validator.check())
            return Promise.reject();

        let record = this.state.pageRecord;
        record.name = pageName;
        record.editPage = "pc-page-edit";
        if (record.id == null) {
            await dataSources.pageRecords.insert(record);
        }
        else {
            await dataSources.pageRecords.update(record);
        }
    }

    setPageDesigner(e: PageDesigner) {
        if (!e) return;
        this.pageDesigner = this.pageDesigner || e;
        this.validator = new FormValidator(this.pageDesigner.element,
            { name: "name", rules: [r.required("请输入页面名称")] }
        );
    }

    render() {

        let { pageRecord, componentInfos, isReady, pageName } = this.state;
        let pageData = pageRecord?.pageData;
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
                        <button className="btn btn-sm btn-primary"
                            onClick={() => this.props.app.redirect("page-list")}>
                            <i className="icon-reply"></i><span>返回</span>
                        </button>
                    </li>
                    <li className="pull-right">
                        <button className="btn btn-sm btn-primary"
                            ref={e => {
                                if (!e) return;
                                ui.buttonOnClick(e, () => this.save(), { toast: "保存成功" })
                            }}>
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
                <PageDesigner pageData={pageRecord.pageData}
                    ref={e => this.setPageDesigner(e)}>
                    <div className="pull-right" style={{ width: 300, marginTop: -90 }}>
                        <div className="panel panel-default">
                            <div className="panel-heading">页面设置</div>
                            <ul className="list-group">
                                <li className="list-group-item clearfix">
                                    <div className="pull-left">
                                        页面名称</div>
                                    <div className="pull-right">
                                        <input name="name" className="form-control input-sm" style={{ width: 180 }} value={pageName || ""}
                                            onChange={(e) => {
                                                pageName = e.target.value;
                                                this.setState({ pageName });
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
                                <li className="list-group-item clearfix">
                                    <div className="pull-left">
                                        显示主页</div>
                                    <label className="switch pull-right">
                                        <input type="checkbox" className="ace ace-switch ace-switch-5"
                                            checked={this.bodyVisible(pageData)}
                                            onChange={e => this.showBody(pageData, e.target.checked)} />
                                        <span className="lbl middle"></span>
                                    </label>
                                </li>
                                <li className="list-group-item clearfix">
                                    <div className="pull-left">
                                        显示页眉</div>
                                    <label className="switch pull-right">
                                        <input type="checkbox" className="ace ace-switch ace-switch-5"
                                            checked={this.headerVisible(pageData)}
                                            onChange={e => this.showHeader(pageData, e.target.checked)} />
                                        <span className="lbl middle"></span>
                                    </label>
                                </li>
                                <li className="list-group-item clearfix" style={{ display: this.headerVisible(pageData) ? "" : "none" }}>
                                    <div className="pull-left">
                                        页眉高度</div>
                                    <div className="pull-right">
                                        <input className="form-control input-sm" value={this.headerHeight(pageData) || ""}
                                            style={{ width: 60, textAlign: "right", display: this.headerVisible(pageData) ? "" : "none" }}
                                            onChange={e => {
                                                try {
                                                    let value = Number.parseInt(e.target.value);
                                                    this.headerHeight(pageData, value);
                                                }
                                                catch {

                                                }
                                            }} />
                                    </div>
                                </li>
                                <li className="list-group-item clearfix">
                                    <div className="pull-left">
                                        显示页脚</div>
                                    <label className="switch pull-right">
                                        <input type="checkbox" className="ace ace-switch ace-switch-5"
                                            checked={this.footerVisible(pageData)}
                                            onChange={e => this.showFooter(pageData, e.target.checked)} />
                                        <span className="lbl middle"></span>
                                    </label>
                                </li>
                                <li className="list-group-item clearfix" style={{ display: this.footerVisible(pageData) ? "" : "none" }}>
                                    <div className="pull-left">
                                        页脚高度</div>
                                    <div className="pull-right">
                                        <input className="form-control input-sm" style={{ width: 60, textAlign: "right" }}
                                            value={this.footerHeight(pageData) || ""}
                                            onChange={e => {
                                                try {
                                                    let value = Number.parseInt(e.target.value);
                                                    this.footerHeight(pageData, value);
                                                }
                                                catch {

                                                }
                                            }} />
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <EditorPanel className="well" customRender={(editComponents, propEditors) => {
                            let typeName = editComponents[0].type;
                            let componentEditorCustomRender = componentRenders[typeName];
                            if (!componentEditorCustomRender)
                                return null;

                            return componentEditorCustomRender(propEditors);
                        }}
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
