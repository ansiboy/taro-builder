import { DesignView } from "../controls/design-view/index";
import * as React from "react";
import { PageProps } from "maishu-chitu-react";
import { buttonOnClick, Less } from "maishu-ui-toolkit";
import { PageRecord } from "../../entities";
import { LocalService } from "../services";
import { FormValidator, rules as r } from "maishu-dilu"
import { dataSources } from "../services";
// import { ComponentInfo } from "taro-builder-core";
import { PageHelper } from "../controls/page-helper";
import { EditorPanelProps } from "maishu-jueying";
import { ComponentInfo } from "../model";

interface State {
    pageRecord?: PageRecord,
    componentInfos?: ComponentInfo[],
}

interface Props extends PageProps {
    pageRecord?: PageRecord,
    customRender?: EditorPanelProps["customRender"],
    data: { id?: string },
}


export default class PageEdit extends React.Component<Props, State> {

    protected validator: FormValidator;
    // private record: PageRecord;
    protected designView: DesignView;

    constructor(props) {
        super(props);

        this.state = { pageRecord: this.props.pageRecord };

        //==========================================================================================
        // 设置组件工具栏
        let localService = this.props.app.createService(LocalService);
        // this.loadLessFiles(localService);

        localService.componentInfos().then(componentInfos => {
            console.assert(componentInfos != null);
            componentInfos = componentInfos.filter(o => o.displayName != null);
            this.setState({ componentInfos });
            //==========================================================================================
        })
    }


    // async loadLessFiles(localService: LocalService) {
    //     let files = await localService.clientFiles();
    //     let editorLessFiles = files.filter(o => o.startsWith("components") && o.endsWith("editor.less"));
    //     editorLessFiles.forEach(path => {
    //         Less.renderByRequireJS(path, {});
    //     })
    // }

    async save(): Promise<any> {
        let { pageName } = this.designView.state;

        if (!this.validator.check())
            return Promise.reject();

        let record = this.state.pageRecord;
        record.name = pageName;
        if (record.id == null) {
            await dataSources.pageRecords.insert(record);
        }
        else {
            await dataSources.pageRecords.update(record);
        }

    }

    private emptyRecord(): Partial<PageRecord> {
        let pageData = this.emptyPageData();
        let record: Partial<PageRecord> = {
            // id: pageData.id,
            pageData,
            type: "page",
            createDateTime: new Date()
        };
        return record;
    }

    protected emptyPageData() {
        return PageHelper.emptyPageData();
    }

    componentDidMount() {
        let s = this.props.createService(LocalService);
        if (this.state.pageRecord == null) {
            if (this.props.data.id) {
                s.getPageRecord(this.props.data.id as string).then(d => {
                    this.setState({ pageRecord: d })
                })
            }
            else {
                let r = this.emptyRecord() as PageRecord;
                this.setState({ pageRecord: r });
            }
        }
        this.createValidator(this.props.source.element);
    }

    createValidator(form: HTMLElement) {
        if (this.validator)
            return;

        this.validator = new FormValidator(form,
            { name: "name", rules: [r.required("请输入页面名称")] }
        );
    }

    preivew() {
        window.open(`preview/index.html#page?id=${this.props.data.id}`, "_new")
    }

    render() {
        let { pageRecord, componentInfos } = this.state;
        if (pageRecord == undefined || componentInfos == undefined)
            return <div className="empty">
                数据加载中...
            </div>
        return <DesignView {...{
            pageData: pageRecord.pageData, pageName: pageRecord.name, componentInfos,
            customRender: this.props.customRender
        }}
            ref={e => this.designView = e || this.designView}
            toolbarButtons={[
                <button className="btn btn-sm btn-primary" onClick={() => this.preivew()}>
                    <i className="fa fa-eye-open"></i><span>预览</span>
                </button>,
                <button className="btn btn-sm btn-primary"
                    ref={e => {
                        if (!e) return;
                        buttonOnClick(e, () => this.save(), { toast: "保存成功!" })
                    }}>
                    <i className="fa fa-save"></i>
                    <span>保存</span></button>,
                <button className="btn btn-sm btn-primary"
                    onClick={() => this.props.app.back()}>
                    <i className="fa fa-reply"></i><span>返回</span>
                </button>
            ]}>
        </DesignView>
    }
}
