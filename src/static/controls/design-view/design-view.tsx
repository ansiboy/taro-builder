import React = require("react");
import { ComponentData, ComponentDefine, EditorPanel, PageDesigner, PropertyEditorInfo, ComponentInfo, DesignerContext } from "maishu-jueying";
import "jquery-ui"
import { ComponentPanel } from "../component-panel";
import { Application } from "maishu-chitu-react";
import { Less } from "maishu-ui-toolkit";
import { LocalService } from "../../services/local-service";
import { contextName } from "json!websiteConfig";
import * as ui from "maishu-ui-toolkit";
import { componentRenders } from "../../component-renders/index";
import { parseComponentData, componentTypes, registerComponent, PageView } from "taro-builder-core";
import { services } from "../../services/services";
import { errors } from "../../../errors";
import { FakeComponent } from "./fake-component";
import { createComponentLoadFail } from "./load-fail-component";
import { guid } from "maishu-toolkit";
import { component } from "taro-builder-core";

interface Props {
    app: Application,
    pageData: ComponentData,
    hideToolbar?: boolean,
    hideEditorPanel?: boolean,
    hidePageSettingPanel?: boolean,
}

interface State {
    pageData: ComponentData,
}

export let DesignPageContext = React.createContext<{ designPage?: DesignView }>({});

export let DesignerViewHeader = React.createContext({});

export class DesignView extends React.Component<Props, State> {

    private componentPanel: ComponentPanel;
    private localService: LocalService;

    private static initComponents = false;

    private editorPanel: EditorPanel;
    private pageView: PageView;
    private mobileElement: HTMLElement;
    private designer: PageDesigner;

    constructor(props: Props) {
        super(props)

        let pageData = this.props.pageData;
        this.processPageData(pageData);
        this.state = { pageData };

        this.localService = this.props.app.createService(LocalService as any) as any;
        if (!DesignView.initComponents) {
            DesignView.initComponents = true;
            loadLessFiles(this.localService);
        }
    }

    processPageData(pageData: ComponentData) {
        if (!pageData.children) {
            return;
        }

        let body = pageData.children.filter(o => typeof o != "string" && o.type == "section")[0] as ComponentData;
        if (body == null) {
            let bodyChildren = pageData.children.filter(o => typeof o != "string" &&
                o.type != "section" && o.type != "header" && o.type != "footer") as ComponentData[];
            body = { id: guid(), type: "section", props: {}, children: bodyChildren };

            pageData.children = pageData.children.filter(o => typeof o == "string" ||
                o.type == "header" || o.type == "footer" || o.type == "section");
            pageData.children.push(body);
        }

        let stack = [pageData];
        while (stack.length > 0) {
            let item = stack.pop();
            item.children.forEach(c => {
                if (typeof c == "string")
                    return;

                stack.push(c);
            })

            let props: any = item.props;
            props.id = item.id;
        }

    }


    preivew() {
        let { pageData } = this.props;
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

    loadComponentTypes(pageData: ComponentData) {
        let stack: ComponentData[] = [pageData];
        while (stack.length > 0) {
            let item = stack.pop();
            if (!item.children) {
                continue;
            }

            item.children.forEach(c => {
                if (typeof c == "string")
                    return;

                stack.push(c);
            })

            let componentType = componentTypes[item.type] as any;
            if (componentType == null || componentType.typeName == "ComponentLoadFail") {
                registerComponent(item.type, FakeComponent);
                loadComponentType(item.type).then(c => {
                    registerComponent(item.type, c as any);
                    this.setState({ pageData });
                }).catch(err => {
                    let componentType = createComponentLoadFail(err);
                    registerComponent(item.type, componentType);
                    this.setState({ pageData });
                })
            }
        }
        registerComponent("section", PageViewBody);
    }

    async onComponentCreated() {
        if (this.componentPanel == null || this.editorPanel == null || this.pageView == null)
            return;

        //==========================================================================================
        // 设置组件工具栏
        let componentInfos: ComponentInfo[] = await this.localService.componentInfos();
        console.assert(componentInfos != null);
        componentInfos = componentInfos.filter(o => o.displayName != null);
        let components = componentInfos.map(o => ({
            componentData: {
                type: o.type,
                props: {},
            },
            displayName: o.displayName,
            icon: o.icon,
            introduce: o.introduce
        }) as ComponentDefine)
        this.componentPanel.setComponets(components);

        //==========================================================================================
        // this.pageView.setComponentPanel(this.componentPanel);
        let bodyContainer = this.mobileElement.querySelector(".page-view .body ul") as HTMLElement;
        this.componentPanel.addDropTarget(bodyContainer);

        let bodyComponentData = this.state.pageData.children.filter(o => typeof o != "string" && o.type == "section")[0] as ComponentData;
        enableDrapDrop(bodyContainer, bodyComponentData, this.designer);
    }

    pageViewRef(e) {
        if (this.pageView != null || e == null)
            return;

        this.pageView = this.pageView || e;
        this.onComponentCreated();
    }

    render() {
        let { pageData } = this.state;
        pageData.props.ref = (e) => this.pageViewRef(e);

        let { hidePageSettingPanel } = this.props;
        return <>
            <PageDesigner pageData={pageData}>
                <div className="marvel-device iphone8 black pull-left">
                    <div className="top-bar"></div>
                    <div className="sleep"></div>
                    <div className="volume"></div>
                    <div className="camera"></div>
                    <div className="sensor"></div>
                    <div className="speaker"></div>
                    <div className="screen mobile-page" ref={e => this.mobileElement = this.mobileElement || e}>
                        <DesignerContext.Consumer>
                            {args => {
                                this.loadComponentTypes(pageData);
                                let pageView = parseComponentData(pageData);
                                this.designer = args.designer;
                                return pageView;
                            }}
                        </DesignerContext.Consumer>
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
                            {this.props.hideToolbar ? null : <div>
                                <ComponentPanel ref={e => {
                                    if (this.componentPanel != null || e == null)
                                        return;

                                    this.componentPanel = e;
                                    this.onComponentCreated();
                                }} />
                            </div>}
                            {this.props.hideEditorPanel ? null :
                                <EditorPanel className="well" customRender={(a, b) => this.customRender(a, b)}
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
        </>
    }

}


async function loadLessFiles(localService: LocalService) {
    let files = await localService.clientFiles();
    let editorLessFiles = files.filter(o => o.startsWith("components") && o.endsWith("editor.less"));
    editorLessFiles.forEach(path => {
        Less.renderByRequireJS(path, { contextName });
    })
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

function enableDrapDrop(bodyElement: HTMLElement, pageData: ComponentData, designer: PageDesigner) {
    console.assert(bodyElement != null);
    $(bodyElement).sortable({
        axis: "y",
        stop: () => {

            // let pageData = pageView.props.pageData;
            //==============================================================================================
            // 对组件进行排序
            console.assert(pageData.children != null);

            let childComponentDatas: ComponentData[] = [];
            let elements = bodyElement.querySelectorAll("li");
            for (let i = 0; i < elements.length; i++) {

                let childId = elements[i].getAttribute("data-component-id");
                if (!childId)
                    continue;

                console.assert(childId != null);

                let child = pageData.children.filter((o: ComponentData) => o.id == childId)[0] as ComponentData;
                console.assert(child != null);

                childComponentDatas.push(child);
            }

            let childIds = childComponentDatas.map(o => o.id);
            pageData.children = pageData.children.filter((o: ComponentData) => childIds.indexOf(o.id) < 0);

            pageData.children.push(...childComponentDatas);
            //==============================================================================================

        },
        receive: (event, ui) => {
            let componentData: ComponentData = JSON.parse(ui.helper.attr("component-data"));
            console.assert(pageData.id);
            componentData.parentId = pageData.id;
            let elementIndex: number = 0;
            ui.helper.parent().children().each((index, element) => {
                if (element == ui.helper[0]) {
                    elementIndex = index;
                    return false;
                }
            })


            let isFirst = elementIndex == 0;
            let isLatest = elementIndex == ui.helper.parent().children().length - 1;

            if (isFirst) {
                designer.appendComponent(pageData.id, componentData, 0);
            }
            else if (isLatest) {
                designer.appendComponent(pageData.id, componentData);
            }
            else {
                let nextComponentDataId = ui.helper.parent().children()[elementIndex].getAttribute("data-component-id");
                let componentIds = pageData.children.map((o: ComponentData) => o.id);
                let nextComponentDataIndex = componentIds.indexOf(nextComponentDataId);
                console.assert(nextComponentDataId != null);
                designer.appendComponent(pageData.id, componentData, nextComponentDataIndex);
            }


            ui.helper.remove();
        }
    })
}

@component({ type: "section" })
class PageViewBody extends React.Component {
    private className = "body";
    render() {
        let c: JSX.Element;
        if (!this.props.children) {
            c = <li className="text-center" style={{ paddingTop: 100 }}>
                <h4>请拖放组件到此处</h4>
            </li>
        }
        else if (Array.isArray(this.props.children)) {
            c = <>
                {this.props.children.map((c: any) => {
                    let id = c.props?.id || guid();
                    return <li key={id} data-component-id={id}>{c}</li>
                })}
            </>
        }
        else {
            c = <li>{this.props.children}</li>;
        }
        return <section className={this.className}>
            <ul>
                {c}
            </ul>
        </section>
    }
}

