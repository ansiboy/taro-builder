import React = require("react");
import { ComponentData, ComponentDefine, EditorPanel, PageDesigner, ComponentFactory, PropertyEditorInfo, ComponentDataHandler, ComponentInfo } from "maishu-jueying";
import "jquery-ui"
import { ComponentPanel } from "./component-panel";
import { Application } from "maishu-chitu-react";
import { Less } from "maishu-ui-toolkit";
import { LocalService } from "../services/local-service";
import { PageRecord } from "../../entities";
import { ComponentLoader } from "./component-loader";
import { errorHandle } from "maishu-chitu-admin/static";
import { contextName } from "json!websiteConfig";
import { loadingElement } from "../common";
import * as ui from "maishu-ui-toolkit";
import { TaroComponentFactory } from "../component-factories/taro";
import "../component-editors/carousel";
import "../component-editors/html-editor";
import { componentRenders } from "../component-renders/index";

// type PartialPageDataRecord = { [P in "id" | "pageData" | "name" | "type"]: WebPage[P] };
interface Props {
    app: Application,
    pageRecord: PageRecord,
    hideToolbar?: boolean,
    hideEditorPanel?: boolean,
    hidePageSettingPanel?: boolean,
}

interface State {
    pageData: ComponentData,
    componentLoaded: boolean,
}

export let DesignPageContext = React.createContext<{ designPage?: DesignView }>({});

export class DesignView extends React.Component<Props, State> {

    private componentPanel: ComponentPanel;
    private localService: LocalService;

    private static initComponents = false;

    // private componentCreated = Callbacks<DesignView>()
    private editorPanel: EditorPanel;
    private componentFacotry: ComponentFactory;
    private designer: PageDesigner;
    private componentDataHandler: ComponentDataHandler;

    constructor(props: Props) {
        super(props)

        this.state = {
            pageData: this.props.pageRecord.pageData, componentLoaded: false
        };

        this.componentDataHandler = new ComponentDataHandler(this.props.pageRecord.pageData);

        ComponentLoader.loadPageCompontents(this.state.pageData).then(() => {
            this.setState({ componentLoaded: true });
        }).catch(err => {
            errorHandle(err);
        });

        this.componentFacotry = new TaroComponentFactory();
        this.localService = this.props.app.createService(LocalService as any) as any;
        if (!DesignView.initComponents) {
            DesignView.initComponents = true;
            // loadEditors(this.localService);
            loadLessFiles(this.localService);
        }


        // this.designerStore.attach(designer => {
        //     if (!designer) return;
        //     //==================================================================================
        //     // 重写 designer 添加组件方法，在添加组件之前，先加载组件
        //     let appendComponent = designer.appendComponent;
        //     designer.appendComponent = async (parentId: string, componentData: ComponentData, componentIndex?: number) => {
        //         await ComponentLoader.loadSingleComponent(componentData);
        //         appendComponent.apply(designer, [parentId, componentData, componentIndex]);
        //     }
        //     //==================================================================================
        //     if (this.editorPanel)
        //         this.editorPanel.designer = designer;
        // })

        // this.componentCreated.add(() => this.onComponentCreated());
    }

    static getDerivedStateFromProps(nextProps: Props, preState: State) {
        return { pageData: nextProps.pageRecord.pageData } as State;
    }

    preivew() {
        let { pageRecord: pageDataRecord } = this.props;
        let pageData: ComponentData = pageDataRecord.pageData;
        console.assert(pageData != null);

        let hasChanged = false;
        if (hasChanged || !pageData.props.id) {
            ui.alert({ title: '提示', message: `预览前必须先保存页面, 请点击"保存"按钮保存页面` });
            return;
        }

        let mobilePath = this.localService.url("mobile");
        let url = `${mobilePath}?appKey=${this.localService.applicationId}#page?id=${pageDataRecord.id}`;
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
        // this.editorPanel.designer = this.designer;
    }



    render() {
        let { pageData, componentLoaded } = this.state;
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
                        pageData={pageData}
                        componentDataHandler={this.componentDataHandler}
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
                                            checked={this.hasMenu(pageData)}
                                            onChange={() => this.setMenu()} />
                                        <span className="lbl middle"></span>
                                    </label>
                                </li>
                                <li className="list-group-item">
                                    <div className="pull-left" style={{ width: "calc(100% - 60px)" }}>
                                        显示购物车结算栏</div>
                                    <label className="switch">
                                        <input type="checkbox" className="ace ace-switch ace-switch-5"
                                            checked={this.hasSettleBar(pageData)}
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
                            <EditorPanel designer={this.componentDataHandler} className="well" customRender={(a, b) => this.customRender(a, b)}
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
        </React.Fragment >
    }

}

async function loadEditors(localService: LocalService) {
    let files = await localService.clientFiles();
    let editorFiles = files.filter(o => o.startsWith("components") && o.endsWith(".js") && o.indexOf("editor") >= 0)
        .map(o => o.substring(0, o.length - ".js".length));

    editorFiles.forEach(path => requirejs({ context: contextName }, [path]));
}

async function loadLessFiles(localService: LocalService) {
    let files = await localService.clientFiles();
    let editorLessFiles = files.filter(o => o.startsWith("components") && o.endsWith("editor.less"));
    editorLessFiles.forEach(path => {
        Less.renderByRequireJS(path, { contextName });
    })
}

