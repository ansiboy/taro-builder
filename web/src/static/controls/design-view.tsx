import React = require("react");
import { ComponentData, ComponentDefine, EditorPanel, PageDesigner, ComponentFactory, PropertyEditorInfo, ComponentDataHandler, ComponentInfo } from "maishu-jueying";
import "jquery-ui"
import { ComponentPanel } from "./component-panel";
import { Application } from "maishu-chitu-react";
import { Less } from "maishu-ui-toolkit";
import { LocalService } from "../services/local-service";
import { contextName } from "json!websiteConfig";
import { loadingElement } from "../common";
import * as ui from "maishu-ui-toolkit";
import { TaroComponentFactory } from "../component-factories/taro";
import "../component-editors/carousel";
import "../component-editors/html-editor";
import { componentRenders } from "../component-renders/index";

interface Props {
    app: Application,
    // pageRecord: PageRecord,
    componentDataHandler: ComponentDataHandler,
    hideToolbar?: boolean,
    hideEditorPanel?: boolean,
    hidePageSettingPanel?: boolean,
}

interface State {
    // pageData: ComponentData,
    componentDataHandler: ComponentDataHandler,
    componentLoaded: boolean,
}

export let DesignPageContext = React.createContext<{ designPage?: DesignView }>({});

export class DesignView extends React.Component<Props, State> {

    private componentPanel: ComponentPanel;
    private localService: LocalService;

    private static initComponents = false;

    private editorPanel: EditorPanel;
    private componentFacotry: ComponentFactory;
    private designer: PageDesigner;

    constructor(props: Props) {
        super(props)

        this.state = {
            componentDataHandler: this.props.componentDataHandler, componentLoaded: true
        };

        this.componentFacotry = new TaroComponentFactory();
        this.localService = this.props.app.createService(LocalService as any) as any;
        if (!DesignView.initComponents) {
            DesignView.initComponents = true;
            loadLessFiles(this.localService);
        }

    }

    static getDerivedStateFromProps(nextProps: Props) {
        return { componentDataHandler: nextProps.componentDataHandler } as State;
    }

    preivew() {
        let { componentDataHandler } = this.props;
        let pageData: ComponentData = componentDataHandler.pageData;
        console.assert(pageData != null);

        let hasChanged = false;
        if (hasChanged || !pageData.id) {
            ui.alert({ title: '提示', message: `预览前必须先保存页面, 请点击"保存"按钮保存页面` });
            return;
        }

        let mobilePath = this.localService.url("mobile");
        let url = `${mobilePath}?appKey=${this.localService.applicationId}#page?id=${this.props.app.currentPage.data.id}`;
        open(url, '_blank');
    }

    hasMenu(pageData: ComponentData) {
        let r = pageData.children.filter((o: ComponentData) => o.type == "Menu").length > 0;
        return r;
    }

    hasSettleBar(pageData: ComponentData) {
        let r = pageData.children.filter((o: ComponentData) => o.type == "ShoppingCartBar").length > 0;
        return r;
    }

    private customRender(editComponents: ComponentData[], items: PropertyEditorInfo[]) {
        console.assert(editComponents.length == 1);
        let typename = editComponents[0].type;
        let componentCustomRender = componentRenders[typename];
        if (!componentCustomRender)
            return null;

        return componentCustomRender(items);
    }

    async setMenu() {

    }

    async setSettleBar() {

    }

    async onComponentCreated() {
        if (this.designer == null || this.componentPanel == null || this.editorPanel == null)
            return;

        //==========================================================================================
        // 设置组件工具栏

        let componentInfos: ComponentInfo[] = await this.localService.componentInfos(); //getComponentInfos(this.props.app);
        console.assert(componentInfos != null);
        componentInfos = componentInfos.filter(o => o.displayName != null);
        let components = componentInfos.map(o => ({
            componentData: {
                type: o.type,
                props: {
                    attr: { movable: false, container: false, showHandler: false, resize: false }
                },
            },
            displayName: o.displayName,
            icon: o.icon,
            introduce: o.introduce
        }) as ComponentDefine)
        this.componentPanel.setComponets(components);

        //==========================================================================================

        let pageViewElement = this.designer.element.querySelector(".page-view");
        console.assert(pageViewElement != null);
        this.componentPanel.addDropTarget(pageViewElement);
    }

    render() {
        let { componentDataHandler, componentLoaded } = this.state;
        if (!componentLoaded) {
            return loadingElement;
        }

        let { hidePageSettingPanel } = this.props;
        return <React.Fragment>
            <div className="marvel-device iphone8 black pull-left">
                <div className="top-bar"></div>
                <div className="sleep"></div>
                <div className="volume"></div>
                <div className="camera"></div>
                <div className="sensor"></div>
                <div className="speaker"></div>
                <div className="screen mobile-page">
                    <PageDesigner context={{ app: this.props.app }}
                        componentFactory={this.componentFacotry}
                        componentDataHandler={componentDataHandler}
                        ref={e => {
                            if (this.designer != null || e == null)
                                return;

                            this.designer = e;
                            this.onComponentCreated();
                        }}>

                    </PageDesigner>
                </div>

                <div className="home"></div>
                <div className="bottom-bar"></div>
            </div>
            <div style={{ marginLeft: 440 }}>
                {this.props.children}
                <hr style={{ margin: 0, marginTop: -2 }} />
                <div>
                    {hidePageSettingPanel ? null : <div className="pull-right" style={{ width: 240 }}>
                        <div className="panel panel-default">
                            <div className="panel-heading">页面设置</div>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <div className="pull-left" style={{ width: "calc(100% - 60px)" }}>
                                        显示导航菜单</div>
                                    <label className="switch">
                                        <input type="checkbox" className="ace ace-switch ace-switch-5"
                                            checked={this.hasMenu(componentDataHandler.pageData)}
                                            onChange={() => this.setMenu()} />
                                        <span className="lbl middle"></span>
                                    </label>
                                </li>
                                <li className="list-group-item">
                                    <div className="pull-left" style={{ width: "calc(100% - 60px)" }}>
                                        显示购物车结算栏</div>
                                    <label className="switch">
                                        <input type="checkbox" className="ace ace-switch ace-switch-5"
                                            checked={this.hasSettleBar(componentDataHandler.pageData)}
                                            onChange={() => this.setSettleBar()} />
                                        <span className="lbl middle"></span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>}
                    <div style={{ marginRight: hidePageSettingPanel ? null : 260 }}>
                        {this.props.hideToolbar ? null : <>
                            <h5 style={{ display: "block" }}>页面组件</h5>
                            <ComponentPanel ref={e => {
                                if (this.componentPanel != null || e == null)
                                    return;

                                this.componentPanel = e;
                                this.onComponentCreated();
                            }} />
                        </>}
                        {this.props.hideEditorPanel ? null :
                            <EditorPanel designer={componentDataHandler} className="well" customRender={(a, b) => this.customRender(a, b)}
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
        </React.Fragment>
    }

}


async function loadLessFiles(localService: LocalService) {
    let files = await localService.clientFiles();
    let editorLessFiles = files.filter(o => o.startsWith("components") && o.endsWith("editor.less"));
    editorLessFiles.forEach(path => {
        Less.renderByRequireJS(path, { contextName });
    })
}

