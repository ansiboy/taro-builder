import * as React from "react";
import { EditorPanel, PageDesigner, DesignerContext, EditorPanelProps } from "maishu-jueying";
import "jquery-ui"
import { ComponentPanel, commonGroup } from "../component-panel";
import { PageData } from "maishu-jueying-core";
import { DesignPage } from "../design-components/index";
import "../design-components/index";
import { PageHelper } from "../page-helper";
import { ComponentLoader } from "../component-loader";
import { ComponentInfo } from "../../model";
import { guid } from "maishu-toolkit";

interface Props {
    // app: Application,
    pageData: PageData,
    pageName: string,
    componentInfos: ComponentInfo[],
    hideToolbar?: boolean,
    hideEditorPanel?: boolean,
    hidePageSettingPanel?: boolean,
    toolbarButtons?: JSX.Element[],
    customRender?: EditorPanelProps["customRender"],
}

interface State {
    pageData: PageData,
    isReady: boolean,
    group: string,
    pageName: string,
}

let groups: string[] = ["common", "navigation", "others"];
let groupTexts = {
    common: "常用", navigation: "导航", others: "其它"
};

export let DesignPageContext = React.createContext<{ designPage?: DesignView }>({});

export let DesignerViewHeader = React.createContext({});

export class DesignView extends React.Component<Props, State> {

    private componentPanel: ComponentPanel;
    private editorPanel: EditorPanel;
    private pageView: DesignPage;
    private mobileElement: HTMLElement;
    private designer: PageDesigner;

    constructor(props: Props) {
        super(props)

        if (props.toolbarButtons) {
            props.toolbarButtons.reverse();
        }
        let pageData = this.props.pageData;
        this.state = {
            pageData, isReady: false, group: commonGroup,
            pageName: props.pageName
        };
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
        this.setState({ pageData });
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
        this.setState({ pageData });
    }

    private async showBody(pageData: PageData, visible: boolean) {
        let c = PageHelper.findBody(pageData);
        console.assert(c != null);
        c.props.visible = visible;
        this.setState({ pageData });
    }

    private async showHeader(pageData: PageData, visible: boolean) {
        let c = PageHelper.findHeader(pageData, true);
        c.props.visible = visible;
        this.setState({ pageData });
    }

    private async showFooter(pageData: PageData, visible: boolean) {
        let c = PageHelper.findFooter(pageData, true);
        c.props.visible = visible;
        this.setState({ pageData });
    }

    private async onComponentCreated() {
        if (this.componentPanel == null || this.editorPanel == null)
            return;
    }

    private pageViewRef(e) {
        if (this.pageView != null || e == null)
            return;

        this.pageView = this.pageView || e;
        this.onComponentCreated();
    }

    private renderPageData(pageData: PageData, componentPanel: ComponentPanel) {
        // let compoentLoader = new ComponentLoader(pageData);
        // compoentLoader.loadComponentSuccess.add(async args => {
        //     let { componentInfo } = args;
        //     await Promise.all([
        //         ComponentLoader.loadComponentEditor(componentInfo),
        //         ComponentLoader.loadComponentLayout(componentInfo),
        //     ])
        // })

        return <DesignPage pageData={pageData} componentPanel={componentPanel} />
    }

    get element() {
        return this.designer.element;
    }

    componentDidMount() {
        //==========================================================================================
        // 设置组件工具栏
        // let componentDefines = this.props.componentInfos.map(o => Object.assign({
        //     componentData: {
        //         type: o.type,
        //         props: {},
        //     }
        // }, o) as ComponentDefine)
        this.props.componentInfos.forEach(c => {
            c.data = c.data || { id: guid(), type: c.type, props: {} }
        })

        this.componentPanel.setComponets(this.props.componentInfos);
        //==========================================================================================
        this.setState({ isReady: true, });
    }

    render() {
        let { pageData, isReady, group, pageName } = this.state;
        pageData.props.ref = (e) => this.pageViewRef(e);
        let { hidePageSettingPanel, toolbarButtons } = this.props;
        return <PageDesigner pageData={pageData} ref={e => this.designer = e || this.designer}>
            <div className="marvel-device iphone8 black pull-left">
                <div className="top-bar"></div>
                <div className="sleep"></div>
                <div className="volume"></div>
                <div className="camera"></div>
                <div className="sensor"></div>
                <div className="speaker"></div>
                <div className="screen mobile-page" ref={e => this.mobileElement = this.mobileElement || e}>
                    <DesignerContext.Consumer>
                        {() => isReady ? this.renderPageData(pageData, this.componentPanel) : null}
                    </DesignerContext.Consumer>
                </div>

                <div className="home"></div>
                <div className="bottom-bar"></div>
            </div>
            <div style={{ marginLeft: 440 }}>
                <ul className="nav nav-tabs" style={{ height: 32, margin: 0, padding: 0 }}>
                    {groups.map(o => <li key={o} className={o == group ? "active" : null} style={{ marginTop: -2 }}
                        onClick={() => {
                            this.setState({ group: o });
                            this.componentPanel.setState({ group: o })
                        }}>
                        <a>{groupTexts[o]}</a>
                    </li>)}
                    {toolbarButtons.map((o, i) => <li key={i} className="pull-right">{o}</li>)}
                </ul>
                <div>
                    {hidePageSettingPanel ? null : <div className="pull-right" style={{ width: 240 }}>
                        <div className="panel panel-default">
                            <div className="panel-heading">页面设置</div>
                            <ul className="list-group">
                                <li className="list-group-item clearfix">
                                    <div className="pull-left">
                                        页面名称</div>
                                    <div className="pull-right">
                                        <input name="name" className="form-control input-sm" style={{ width: 140 }} value={pageName}
                                            onChange={e => {
                                                pageName = e.target.value;
                                                this.setState({ pageName });
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
                    </div>}
                    <div style={{ marginRight: hidePageSettingPanel ? null : 260 }}>
                        {this.props.hideToolbar ? null : <>
                            <ComponentPanel ref={e => {
                                if (this.componentPanel != null || e == null)
                                    return;

                                this.componentPanel = e;
                                this.onComponentCreated();
                            }} />

                        </>}
                        {this.props.hideEditorPanel ? null :
                            <EditorPanel className="well" customRender={this.props.customRender}
                                ref={e => {
                                    if (this.editorPanel != null || e == null)
                                        return;

                                    this.editorPanel = this.editorPanel || e;
                                    this.onComponentCreated();
                                }} />
                        }
                    </div>
                </div>
            </div>
        </PageDesigner>
    }
}





