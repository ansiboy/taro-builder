// import { DataListPage } from "maishu-chitu-admin/static";
import { PageRecord } from "../../entities";
import { dataSources } from "../asset/data-sources";
// import { boundField, dateTimeField } from "maishu-wuzhui-helper";
import * as React from "react";
import { boundField, createGridView, customDataField, dateTimeField } from "maishu-wuzhui-helper";
import ReactDOM = require("react-dom");

// export default class PageList extends DataListPage<PageRecord> {
//     dataSource = dataSources.pageRecords;
//     itemName = "页面";
//     columns = [
//         boundField<PageRecord>({ dataField: "name", headerText: "名称" }),
//         dateTimeField<PageRecord>({ dataField: "createDateTime", headerText: "创建时间" })
//     ] as any;

//     deleteConfirmText = (dataItem: PageRecord) => `确定删除页面'${dataItem.name}'吗`;

//     protected addButton() {
//         return <button key="btnAdd" className="btn btn-primary"
//             onClick={() => this.props.app.redirect("page-edit")}>
//             <i className="icon-plus"></i>
//             <span>添加</span>
//         </button>
//     }

//     protected executeEdit(dataItem: PageRecord) {
//         if (dataItem.editPage) {
//             this.props.app.redirect(dataItem.editPage, { id: dataItem.id });
//             return;
//         }

//         this.props.app.redirect("page-edit", { id: dataItem.id });
//     }
// }

export default class PageListPage extends React.Component {
    tableRef(e: HTMLTableElement) {
        createGridView({
            element: e,
            dataSource: dataSources.pageRecords,
            columns: [
                boundField<PageRecord>({ dataField: "name", headerText: "名称" }),
                dateTimeField<PageRecord>({ dataField: "createDateTime", headerText: "创建时间" }),
                customDataField({
                    headerText: "操作",
                    itemStyle: { textAlign: "center", width: "120px" },
                    render: (dataItem, cellElement) => {
                        ReactDOM.render(<>
                            <button key="btnAdd" className="btn btn-info btn-minier"
                                onClick={() => location.href = "page-edit"}>
                                <i className="fa fa-pencil"></i>
                            </button>
                            <button key="btn-delete" className="btn btn-danger btn-minier"
                                onClick={() => location.href = "page-edit"}>
                                <i className="fa fa-trash"></i>
                            </button>
                        </>, cellElement)
                    }
                })
            ]
        })
    }
    render() {
        return <div>
            <ul className="nav nav-tabs">
                <li className="pull-right">
                    <button key="btnAdd" className="btn btn-primary "
                        onClick={() => location.href = "page-edit"}>
                        <i className="fa fa-plus"></i>
                        <span>添加</span>
                    </button>
                </li>
            </ul>
            <table ref={e => this.tableRef(e)}></table>
        </div>
    }
}