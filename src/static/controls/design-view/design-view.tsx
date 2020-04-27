import React = require("react");
import { EditorPanel, PageDesigner, PropertyEditorInfo, DesignerContext } from "maishu-jueying";
import "jquery-ui"
import { ComponentPanel, ComponentDefine } from "../component-panel";
import { Application } from "maishu-chitu-react";
import { Less } from "maishu-ui-toolkit";
import { LocalService } from "../../services/local-service";
import { contextName } from "json!websiteConfig";
import { componentRenders } from "../../component-renders/index";
import {
    parseComponentData, componentTypes, registerComponent, Page as PageView,
    ComponentData, ComponentInfo, ComponentTarget, PageHeader as PageViewHeader, PageFooter as PageViewFooter, PageData, PageBody,
} from "taro-builder-core";
import { services } from "../../services/services";
import { errors } from "../../../errors";
import { FakeComponent } from "./fake-component";
import { createComponentLoadFail } from "./load-fail-component";
import { DesignComponentProps, DesignPage } from "../design-components/index";
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
    componentTarget: ComponentTarget,
    pageName: string,
}

let compoenntTargets: ComponentTarget[] = ["body", "header", "footer"];
let compoenntTargetTexts: { [key: string]: string } = {
    body: "主页面", header: "页眉", footer: "页脚"
};

export let DesignPageContext = React.createContext<{ designPage?: DesignView }>({});

export let DesignerViewHeader = React.createContext({});

export class DesignView extends React.Component<Props, State> {

    private componentPanel: ComponentPanel;
    // private localService: LocalService;

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
            pageData, isReady: false, componentTarget: "body",
            pageName: props.pageName
        };

        // this.localService = this.props.app.createService(LocalService as any) as any;
        // if (!DesignView.initComponents) {
        //     DesignView.initComponents = true;
        // }
    }

    // processPageData(pageData: PageData) {
    //     if (!pageData.children) {
    //         return;
    //     }

    //     let stack: ComponentData[] = [pageData];
    //     while (stack.length > 0) {
    //         let item = stack.pop();
    //         item.children.forEach(c => {
    //             if (typeof c == "string")
    //                 return;

    //             stack.push(c);
    //         })
    //     }
    // }

    // private preivew() {
    //     let { pageData } = this.props;
    //     console.assert(pageData != null);

    //     let hasChanged = false;
    //     if (hasChanged || !pageData.id) {
    //         ui.alert({ title: '提示', message: `预览前必须先保存页面, 请点击"保存"按钮保存页面` });
    //         return;
    //     }

    //     let mobilePath = this.localService.url("mobile");
    //     let url = `${mobilePath}?appKey=${this.localService.applicationId}#page?id=${this.props.app.currentPage.data.id}`;
    //     open(url, '_blank');
    // }

    headerVisible(pageData: PageData): boolean {
        let r = PageViewHelper.findHeader(pageData);
        return r != null && r.props.visible == true;
    }

    footerVisible(pageData: PageData) {
        let r = PageViewHelper.findFooter(pageData);
        return r != null && r.props.visible == true;
    }

    private customRender(editComponents: ComponentData[], items: PropertyEditorInfo[]) {
        console.assert(editComponents.length == 1);
        let typename = editComponents[0].type;
        let componentCustomRender = componentRenders[typename];
        if (!componentCustomRender)
            return null;

        return componentCustomRender(items);
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

    private renderPageData(pageData: PageData, designer: PageDesigner, componentPanel: ComponentPanel) {
        pageData.props.ref = (pageView: DesignPage) => {
            if (this.pageView != null || pageView == null)
                return;

            this.pageView = pageView;
            let bodyElement = this.pageView.element.querySelector(`.${PageBody.className}`);
            console.assert(bodyElement != null)
            setTimeout(() => {
                this.componentPanel.addDropTarget(bodyElement);
            })
        }
        this.loadComponentTypes(pageData);
        let element = parseComponentData(pageData);
        return element;
    }

    componentDidMount() {
        //==========================================================================================
        // 设置组件工具栏
        let componentDefines = this.props.componentInfos.map(o => ({
            componentData: {
                type: o.type,
                props: {},
            },
            displayName: o.displayName,
            icon: o.icon,
            introduce: o.introduce
        }) as ComponentDefine)

        this.componentPanel.setComponets(componentDefines);
        //==========================================================================================
        // this.designer.findComponetsByTypeName()
        this.setState({ isReady: true, });
    }

    render() {
        let { pageData, isReady, componentTarget } = this.state;
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
                        {args => isReady ? this.renderPageData(pageData, args.designer, this.componentPanel) : null}
                    </DesignerContext.Consumer>
                </div>

                <div className="home"></div>
                <div className="bottom-bar"></div>
            </div>
            <div style={{ marginLeft: 440 }}>
                <ul className="nav nav-tabs" style={{ height: 32, margin: 0, padding: 0 }}>
                    {compoenntTargets.map(o => <li key={o} className={o == componentTarget ? "active" : null} style={{ marginTop: -2 }}
                        onClick={e => {
                            this.setState({ componentTarget: o })
                        }}>
                        <a>{compoenntTargetTexts[o]}</a>
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
                                        <input className="form-control input-sm" style={{ width: 140 }} />
                                    </div>
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

// function enableDrapDrop(bodyElement: HTMLElement, parentData: ComponentData, designer: PageDesigner) {
//     console.assert(bodyElement != null);
//     $(bodyElement).sortable({
//         axis: "y",
//         stop: () => {

//             // let pageData = pageView.props.pageData;
//             //==============================================================================================
//             // 对组件进行排序
//             console.assert(parentData.children != null);

//             let childComponentDatas: ComponentData[] = [];
//             let elements = bodyElement.querySelectorAll("li");
//             for (let i = 0; i < elements.length; i++) {

//                 let childId = elements[i].getAttribute("data-component-id");
//                 if (!childId)
//                     continue;

//                 console.assert(childId != null);

//                 let child = parentData.children.filter((o: ComponentData) => o.id == childId)[0] as ComponentData;
//                 console.assert(child != null);

//                 childComponentDatas.push(child);
//             }

//             let childIds = childComponentDatas.map(o => o.id);
//             parentData.children = parentData.children.filter((o: ComponentData) => childIds.indexOf(o.id) < 0);

//             parentData.children.push(...childComponentDatas);
//             //==============================================================================================

//         },
//         receive: (event, ui) => {
//             let componentData: ComponentData = JSON.parse(ui.helper.attr("component-data"));
//             componentData.id = componentData.id || guid();
//             componentData.parentId = parentData.id;
//             componentData.props = {
//                 id: componentData.id
//             }
//             let elementIndex: number = 0;
//             ui.helper.parent().children().each((index, element) => {
//                 if (element == ui.helper[0]) {
//                     elementIndex = index;
//                     return false;
//                 }
//             })


//             let isFirst = elementIndex == 0;
//             let isLatest = elementIndex == ui.helper.parent().children().length - 1;

//             if (isFirst) {
//                 designer.appendComponent(parentData.id, componentData, 0);
//             }
//             else if (isLatest) {
//                 designer.appendComponent(parentData.id, componentData);
//             }
//             else {
//                 let nextComponentDataId = ui.helper.parent().children()[elementIndex + 1].getAttribute("data-component-id");
//                 let componentIds = parentData.children.map((o: ComponentData) => o.id);
//                 let nextComponentDataIndex = componentIds.indexOf(nextComponentDataId);
//                 console.assert(nextComponentDataId != null);
//                 designer.appendComponent(parentData.id, componentData, nextComponentDataIndex);
//             }


//             ui.helper.remove();
//         }
//     })
// }



