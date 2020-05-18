import { DataListPage } from "maishu-chitu-admin/static";
import { PageRecord } from "../../entities";
import { dataSources } from "../asset/data-sources";
import { boundField, dateTimeField } from "maishu-wuzhui-helper";
import React = require("react");

export default class PageList extends DataListPage<PageRecord> {
    dataSource = dataSources.pageRecords;
    itemName = "页面";
    columns = [
        boundField<PageRecord>({ dataField: "name", headerText: "名称" }),
        dateTimeField<PageRecord>({ dataField: "createDateTime", headerText: "创建时间" })
    ] as any;

    deleteConfirmText = (dataItem: PageRecord) => `确定删除页面'${dataItem.name}'吗`;

    protected addButton() {
        return <button key="btnAdd" className="btn btn-primary"
            onClick={() => this.props.app.redirect("#page-edit")}>
            <i className="icon-plus"></i>
            <span>添加</span>
        </button>
    }

    protected executeEdit(dataItem: PageRecord) {
        this.props.app.redirect("#page-edit", { id: dataItem.id });
    }
}