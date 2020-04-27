import { DesignView } from "../controls/design-view/index";
import React = require("react");
import { PageProps } from "maishu-chitu-react";
import { buttonOnClick } from "maishu-ui-toolkit";
import { PageRecord } from "../../entities";
import { LocalService } from "../services/local-service";
import websiteConfig from "json!websiteConfig";
import { FormValidator, rules as r } from "maishu-dilu"
import { dataSources } from "../data-sources";
import { ComponentTarget, ComponentInfo, PageData } from "taro-builder-core";
import { PageViewHelper } from "../controls/page-view-helper";
import { Less } from "maishu-ui-toolkit";
import { contextName } from "json!websiteConfig";

requirejs([websiteConfig.componentEditorsPath], function () {
})

interface State {
    pageData: PageData | undefined,
    name?: string,
    componentTarget: ComponentTarget,
    componentInfos?: ComponentInfo[],
}

interface Props extends PageProps {
    data: { id?: string },
}


export default class PageEdit extends React.Component<Props, State> {

    private validator: FormValidator;
    private record: PageRecord;

    constructor(props) {
        super(props);

        this.state = { pageData: undefined, componentTarget: "body" };

        //==========================================================================================
        // 设置组件工具栏
        let localService = this.props.app.createService(LocalService);
        this.loadLessFiles(localService);

        localService.componentInfos().then(componentInfos => {
            console.assert(componentInfos != null);
            componentInfos = componentInfos.filter(o => o.displayName != null);
            this.setState({ componentInfos })
            //==========================================================================================
        })
    }


    async  loadLessFiles(localService: LocalService) {
        let files = await localService.clientFiles();
        let editorLessFiles = files.filter(o => o.startsWith("components") && o.endsWith("editor.less"));
        editorLessFiles.forEach(path => {
            Less.renderByRequireJS(path, { contextName });
        })
    }

    async save(): Promise<any> {
        let { pageData, name } = this.state;
        if (this.record == null) {
            this.record = { pageData, name: "temp", type: "page" } as PageRecord;
            await dataSources.pageRecords.insert(this.record);
        }
        else {
            this.record.pageData = pageData;
            this.record.name = name;
            await dataSources.pageRecords.update(this.record);
        }

    }

    private emptyRecord(): Partial<PageRecord> {
        let pageData = PageViewHelper.emptyPageData();
        let record: Partial<PageRecord> = {
            id: pageData.id,
            pageData,
            type: "page",
            createDateTime: new Date()
        };
        return record;
    }

    componentDidMount() {
        let s = this.props.createService(LocalService);
        if (this.props.data.id) {
            s.getPageData(this.props.data.id as string).then(d => {
                this.record = d;
                this.setState({ pageData: d.pageData, name: d.name })
            })
        }
        else {
            let r = this.emptyRecord();
            this.setState({ pageData: r.pageData });
        }
    }

    createValidator(form: HTMLElement) {
        if (this.validator)
            return;

        this.validator = new FormValidator(form,
            { name: "name", rules: [r.required("请输入页面名称")] }
        );
    }

    preivew() {

    }

    render() {
        let { pageData, name, componentInfos } = this.state;
        if (pageData == undefined || componentInfos == undefined)
            return <div className="empty">
                数据加载中...
            </div>
        return <DesignView {...{ pageData, pageName: name, componentInfos }}
            toolbarButtons={[
                <button className="btn btn-sm btn-primary" onClick={() => this.preivew()}>
                    <i className="icon-eye-open"></i><span>预览</span>
                </button>,
                <button className="btn btn-sm btn-primary"
                    ref={e => {
                        if (!e) return;
                        buttonOnClick(e, () => this.save(), { toast: "保存成功!" })
                    }}>
                    <i className="icon-save"></i>
                    <span>保存</span></button>,
                <button className="btn btn-sm btn-primary"
                    onClick={() => this.props.app.back()}>
                    <i className="icon-reply"></i><span>返回</span>
                </button>
            ]}>
        </DesignView>
    }
}

{/* <input name="name" className="form-control" style={{ width: 300, marginTop: -5 }} placeholder="请输入页面名称"
                        value={name || ""}
                        onChange={e => {
                            this.setState({ name: e.target.value })
                        }} /> */}