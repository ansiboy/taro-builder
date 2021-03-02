import * as React from "react";
import { PageProps } from "maishu-chitu-react";
import { PageRecord } from "../../entities";
import { LocalService } from "../services";
import { ComponentData, PageData } from "maishu-jueying-core";
import { PageHelper } from "../controls/page-helper";
import { DesignerContext, EditorPanel, EditorPanelProps, PageDesigner } from "maishu-jueying";
import { ComponentPanel } from "../controls/component-panel";
import { DesignPage } from "../controls/design-components/index";
import "./pc-page-edit.less";
import { getComponentRender } from "../component-renders/index";
import { dataSources } from "../services";
import { FormValidator, rules as r } from "maishu-dilu";
import * as ui from "maishu-ui-toolkit";
import { ComponentInfo } from "../model";
import { guid } from "maishu-toolkit";
import { ComponentLoader } from "../controls/component-loader";

interface State {
    pageRecord?: PageRecord,
    componentInfos?: ComponentInfo[],
    isReady: boolean,
    // pageName: string,
    templateRecord?: PageRecord,
    templateList?: PageRecord[],
    groups?: { id: string, name: string }[]
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
    // componentLoader: ComponentLoader;

    constructor(props) {
        super(props);

        this.state = {
            pageRecord: this.props.pageRecord, isReady: false,
        };

        this.localService = this.props.app.createService(LocalService);
        this.localService.componentStationConfig().then(c => {
            let componentInfos = c.components;
            console.assert(componentInfos != null);
            componentInfos = componentInfos.filter(o => o.displayName != null);
            this.setState({ componentInfos, groups: c.groups });
            componentInfos.forEach(c => {
                c.data = c.data || { id: guid(), type: c.type, props: {} };
            })
            this.componentPanel.setComponets(componentInfos.map(o => Object.assign(o, {
                componentData: { type: o.type, props: {} } as ComponentData
            })));
            //==========================================================================================
        });

        this.localService.templateList().then(r => {
            this.setState({ templateList: r })
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
        return r;
    }

    async componentDidMount() {
        let pageRecord: PageRecord;
        let templateRecord: PageRecord;
        this.getPageRecord().then(async pageRecord => {
            if (pageRecord?.templateId) {
                templateRecord = await this.localService.getPageRecord(pageRecord.templateId);
            }

            this.getPageRecord().then(async pageRecord => {
                if (pageRecord?.templateId) {
                    templateRecord = await this.localService.getPageRecord(pageRecord.templateId);
                }
                this.setState({ isReady: true, pageRecord, templateRecord });
            })
        })
    }

    private async getPageRecord() {
        let s = this.localService;
        let pageRecord: PageRecord;
        if (this.props.data.id) {
            pageRecord = await s.getPageRecord(this.props.data.id as string);
        }
        else if (this.props.data.name) {
            pageRecord = await s.getPageDataByName(this.props.data.name)
        }
        else {
            pageRecord = this.emptyRecord() as PageRecord;
            pageRecord.name = this.props.data.name;
        }

        if (!pageRecord)
            return null;

        pageRecord.pageData = pageRecord.pageData || this.emptyPageData();
        return pageRecord;
    }

    private renderPageData(pageData: PageData, componentPanel: ComponentPanel, template?: PageData) {
        if (componentPanel == null)
            return;

        if (template) {
            PageHelper.mergeTemplate(pageData, template);
        }

        return <DesignPage pageData={pageData} componentPanel={componentPanel}
            ref={e => {
                if (!e) return;
                e.componentLoader.loadComponentSuccess.add(args => {
                    Promise.all([
                        ComponentLoader.loadComponentEditor(args.componentInfo),
                        ComponentLoader.loadComponentLayout(args.componentInfo),
                    ]).then(() => {
                        this.setState({});
                    })
                })
            }} />
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
        let c = PageHelper.findBody(pageData, true);
        console.assert(c != null);
        c.props.visible = visible;

        let pageRecord = this.state.pageRecord;
        pageRecord.pageData = pageData;

        this.setState({ pageRecord });
    }

    private async showHeader(pageData: PageData, visible: boolean) {
        let c = PageHelper.findHeader(pageData, true);
        c.props.visible = visible;
        c.props["style"] = {} as React.CSSProperties;

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
        let { } = this.state;

        if (!this.validator.check())
            return Promise.reject();

        let pageRecord = this.state.pageRecord;
        let templateRecord = this.state.templateRecord;
        pageRecord.editPage = "pc-page-edit";
        //===============================================
        // 移除掉模板控件
        if (templateRecord) {
            PageHelper.trimTemplate(pageRecord.pageData, templateRecord.pageData);
        }
        //===============================================
        if (pageRecord.id == null) {
            await dataSources.pageRecords.insert(pageRecord);
        }
        else {
            await dataSources.pageRecords.update(pageRecord);
        }
    }

    setPageDesigner(e: PageDesigner) {
        if (!e) return;
        this.pageDesigner = this.pageDesigner || e;
        this.validator = new FormValidator(this.pageDesigner.element,
            { name: "name", rules: [r.required("请输入页面名称")] }
        );
    }

    changeTemplate(templateId: string) {
        let { pageRecord, templateRecord } = this.state;
        pageRecord.templateId = templateId || null;

        if (!templateId) {
            if (templateRecord != null) {
                PageHelper.trimTemplate(pageRecord.pageData, templateRecord.pageData);
            }
            this.setState({ templateRecord: null, pageRecord });
            return;
        }
        this.localService.getPageRecord(templateId).then(r => {
            this.setState({ templateRecord: r });
        });
    }

    render() {
        let { pageRecord, templateList } = this.state;
        // let pageData = pageRecord?.pageData;
        templateList = templateList || [];
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
                            <i className="fa fa-reply"></i><span>返回</span>
                        </button>
                    </li>
                    <li className="pull-right">
                        <button className="btn btn-sm btn-primary"
                            ref={e => {
                                if (!e) return;
                                ui.buttonOnClick(e, () => this.save(), { toast: "保存成功" })
                            }}>
                            <i className="fa fa-save"></i><span>保存</span>
                        </button>
                    </li>
                    <li className="pull-right">
                        <button className="btn btn-sm btn-primary"
                            onClick={() => window.open(`preview.html#page?id=${pageRecord.id}`)}>
                            <i className="fa fa-eye"></i><span>预览</span>
                        </button>
                    </li>

                </ul>
                <div>
                    <ComponentPanel ref={e => this.componentPanel = this.componentPanel || e} />
                </div>
            </div>
            {this.renderMain()}
        </>
    }

    renderMain() {
        let { pageRecord, componentInfos, isReady, templateRecord, templateList } = this.state;
        let pageData = pageRecord?.pageData;
        templateList = templateList || [];

        if (pageRecord === undefined || componentInfos == undefined)
            return <div className="empty">
                数据加载中...
            </div>

        if (pageRecord === null)
            return <div className="empty">加载页面失败</div>

        return <PageDesigner pageData={pageRecord.pageData}
            ref={e => this.setPageDesigner(e)}>
            <div className="pull-right" style={{ width: 300, marginTop: -90 }}>
                <div className="panel panel-default">
                    <div className="panel-heading">页面设置</div>
                    <ul className="list-group">
                        <li className="list-group-item clearfix">
                            <div className="pull-left">
                                页面名称</div>
                            <div className="pull-right">
                                <input name="name" className="form-control input-sm" style={{ width: 180 }} value={pageRecord.name || "No Name"}
                                    onChange={(e) => {
                                        pageRecord.name = e.target.value;
                                        this.setState({ pageRecord });
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
                                页面模板</div>
                            <div className="pull-right">
                                <select className="form-control" value={templateRecord?.id || ""} style={{ width: 180 }}
                                    onChange={e => this.changeTemplate(e.target.value)}>
                                    <option value="">请选择模板</option>
                                    {templateList.map(t => <option value={t.id} key={t.id}>
                                        {t.name}
                                    </option>)}
                                </select>
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
                    let componentEditorCustomRender = getComponentRender(typeName);
                    if (!componentEditorCustomRender)
                        return null;

                    return componentEditorCustomRender(propEditors);
                }}
                    ref={e => this.editorPanel = this.editorPanel || e} />
            </div>
            <DesignerContext.Consumer>
                {() => isReady ? this.renderPageData(pageRecord.pageData, this.componentPanel, templateRecord?.pageData) : null}
            </DesignerContext.Consumer>
        </PageDesigner>
    }
}
