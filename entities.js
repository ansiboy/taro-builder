"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataObject = exports.PageRecord = void 0;
const maishu_node_data_1 = require("maishu-node-data");
let PageRecord = class PageRecord {
};
__decorate([
    maishu_node_data_1.Column({ primary: true, name: "id", type: "char", length: 36 })
], PageRecord.prototype, "id", void 0);
__decorate([
    maishu_node_data_1.Column({ name: "name", type: "varchar", length: 56 })
], PageRecord.prototype, "name", void 0);
__decorate([
    maishu_node_data_1.Column({ name: "page_data", type: "json", })
], PageRecord.prototype, "pageData", void 0);
__decorate([
    maishu_node_data_1.Column({ name: "create_date_time", type: "datetime" })
], PageRecord.prototype, "createDateTime", void 0);
__decorate([
    maishu_node_data_1.Column({ name: "application_id", type: "char", length: 36, nullable: true })
], PageRecord.prototype, "applicationId", void 0);
__decorate([
    maishu_node_data_1.Column({ name: "type", type: "varchar", length: 20 })
], PageRecord.prototype, "type", void 0);
__decorate([
    maishu_node_data_1.Column({ name: "edit_page", type: "varchar" })
], PageRecord.prototype, "editPage", void 0);
PageRecord = __decorate([
    maishu_node_data_1.Entity("page_data_record")
], PageRecord);
exports.PageRecord = PageRecord;
let DataObject = class DataObject {
};
__decorate([
    maishu_node_data_1.Column({ primary: true, name: "id", type: "varchar", length: 100 })
], DataObject.prototype, "id", void 0);
__decorate([
    maishu_node_data_1.Column({ name: "data", type: "json" })
], DataObject.prototype, "data", void 0);
__decorate([
    maishu_node_data_1.Column({ name: "create_date_time", type: "datetime" })
], DataObject.prototype, "createDateTime", void 0);
__decorate([
    maishu_node_data_1.Column({ name: "application_id", type: "char", length: 36, nullable: true })
], DataObject.prototype, "applicationId", void 0);
DataObject = __decorate([
    maishu_node_data_1.Entity("data_object")
], DataObject);
exports.DataObject = DataObject;
