import React = require("react");
import { EditorPanel, PageDesigner, PropertyEditorInfo, DesignerContext } from "maishu-jueying";
import "jquery-ui"
import { ComponentPanel, ComponentDefine, commonGroup } from "../component-panel";
import { componentRenders } from "../../component-renders/index";
import {
    componentTypes, registerComponent, ComponentData, ComponentInfo, PageData,
} from "taro-builder-core";
import { services } from "../../services/services";
import { errors } from "../../../errors";
import { FakeComponent } from "./fake-component";
import { createComponentLoadFail } from "./load-fail-component";
import { DesignPage } from "../design-components/index";
import "../design-components/index";
import { PageViewHelper } from "../page-view-helper";

interface Props {
    // app: Application,
    pageData: PageData,
    pageName: string,
    componentInfos: ComponentInfo[],
    hideToolbar?: boolean,
    hideEditorPanel?: boolean,
    hidePageSettingPanel?: boolean,
    toolbarButtons?: JSX.Element[],
}

interface State {
    pageData: PageData,
    isReady: boolean,
    group: string,
    pageName: string,
}

let groups: string[] = ["common", "navigation"];
let groupTexts = {
    common: "常用", navigation: "导航"
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

    bodyVisible(pageData: PageData): boolean {
        let r = PageViewHelper.findBody(pageData);
        return r != null && r.props.visible == true;
    }

    headerVisible(pageData: PageData): boolean {
        let r = PageViewHelper.findHeader(pageData);
        return r != null && r.props.visible == true;
    }

    headerHeight(pageData: PageData, value?: number) {
        let r = PageViewHelper.findHeader(pageData, true);
        if (value == null) {
            return r.props.height;
        }
        r.props.height = value;
        this.setState({ pageData });
    }

    footerVisible(pageData: PageData) {
        let r = PageViewHelper.findFooter(pageData);
        return r != null && r.props.visible == true;
    }

    footerHeight(pageData: PageData, value?: number) {
        let r = PageViewHelper.findFooter(pageData, true);
        if (value == null) {
            return r.props.height;
        }

        r.props.height = value;
        this.setState({ pageData });
    }

    private customRender(editComponents: ComponentData[], items: PropertyEditorInfo[]) {
        console.assert(editComponents.length == 1);
        let typename = editComponents[0].type;
        let componentCustomRender = componentRenders[typename];
        if (!componentCustomRender)
            return null;

        return componentCustomRender(items);
    }

    async showBody(pageData: PageData, visible: boolean) {
        let c = PageViewHelper.findBody(pageData);
        console.assert(c != null);
        c.props.visible = visible;
        this.setState({ pageData });
    }

    async showHeader(pageData: PageData, visible: boolean) {
        let c = PageViewHelper.findHeader(pageData, true);
        c.props.visible = visible;
        this.setState({ pageData });
    }

    async showFooter(pageData: PageData, visible: boolean) {
        let c = PageViewHelper.findFooter(pageData, true);
        c.props.visible = visible;
        this.setState({ pageData });
    }

    private loadComponentTypes(pageData: PageData) {
        for (let i = 0; i < pageData.children.length; i++) {
            let item = pageData.children[i];
            let componentType = componentTypes[item.type] as any;
            if (componentType == null) {
                registerComponent(item.type, FakeComponent);
                loadComponentType(item.type).then(c => {
                    registerComponent(item.type, c as any);
                    this.setState({ pageData });
                }).catch(err => {
                    console.error(err);
                    let componentType = createComponentLoadFail(err, () => {
                        delete componentTypes[item.type];
                        this.setState({ pageData })
                    });
                    registerComponent(item.type, componentType);
                    this.setState({ pageData });
                })
            }
        }

    }

    async onComponentCreated() {
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
        this.loadComponentTypes(pageData);
        return <DesignPage pageData={pageData} componentPanel={componentPanel} />
    }

    componentDidMount() {
        //==========================================================================================
        // 设置组件工具栏
        let componentDefines = this.props.componentInfos.map(o => Object.assign({
            componentData: {
                type: o.type,
                props: {},
            }
        }, o) as ComponentDefine)

        this.componentPanel.setComponets(componentDefines);
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
                                        <input className="form-control input-sm" style={{ width: 140 }} value={pageName} />
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
                                        <input className="form-control input-sm" value={this.headerHeight(pageData)}
                                            style={{ width: 60, textAlign: "right", display: this.footerVisible(pageData) ? "" : "none" }}
                                            onChange={e => {
                                                try {
                                                    let value = Number.parseInt(e.target.value);
                                                    this.headerHeight(pageData, value);
                                                }
                                                catch{

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
                                            value={this.footerHeight(pageData)}
                                            onChange={e => {
                                                try {
                                                    let value = Number.parseInt(e.target.value);
                                                    this.footerHeight(pageData, value);
                                                }
                                                catch{

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
                            <EditorPanel className="well" customRender={(a, b) => this.customRender(a as ComponentData[], b)}
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



async function loadComponentType(typeName: string) {
    let componentInfos = await services.local.componentInfos();
    let componentInfo = componentInfos.filter(o => o.type == typeName)[0];
    if (componentInfo == null) {
        throw errors.canntFindComponentInfo(typeName);
    }

    let path = componentInfo.path;
    if (path.endsWith(".jsx")) {
        path = path.substr(0, path.length - 4);
    }
    console.assert(path.startsWith("static/"));
    path = path.substr("static/".length);
    return new Promise((resolve, reject) => {
        requirejs([`${path}`], (mod) => {
            if (mod[typeName] == null)
                throw errors.moduleNotExport(path, typeName);

            componentTypes[typeName] = mod[typeName];
            resolve(mod[typeName]);

        }, err => {
            reject(err);
        })
    })
}



