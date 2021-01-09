"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const maishu_node_mvc_1 = require("maishu-node-mvc");
const maishu_node_data_1 = require("maishu-node-data");
const entities_1 = require("../entities");
const errors_1 = require("../static/asset/errors");
const common_1 = require("../common");
const maishu_toolkit_1 = require("maishu-toolkit");
const maishu_chitu_admin_1 = require("maishu-chitu-admin");
let PageDataController = class PageDataController {
    list(conn, { args }) {
        return __awaiter(this, void 0, void 0, function* () {
            let r = yield maishu_node_data_1.DataHelper.list(conn.getRepository(entities_1.PageRecord), { selectArguments: args });
            return r;
        });
    }
    add(conn, { item }, appId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (item == null)
                throw errors_1.errors.routeDataFieldNull("item");
            if (item.pageData == null)
                throw errors_1.errors.argumentFieldNull("pageData", "item");
            if (item.name == null)
                throw errors_1.errors.argumentFieldNull("name", "item");
            if (!appId)
                throw errors_1.errors.argumentNull("appId");
            if (!item.id)
                item.id = maishu_toolkit_1.guid();
            item.applicationId = appId;
            item.createDateTime = new Date(Date.now());
            yield conn.getRepository(entities_1.PageRecord).insert(item);
            let obj = { id: item.id, createDateTime: item.createDateTime };
            return obj;
        });
    }
    update(conn, { item }, appId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (item == null)
                throw errors_1.errors.routeDataFieldNull("item");
            if (item.pageData == null)
                throw errors_1.errors.argumentFieldNull("pageData", "item");
            if (item.id == null)
                throw errors_1.errors.argumentFieldNull("id", "item");
            if (!appId)
                throw errors_1.errors.argumentNull("appId");
            let obj = { pageData: item.pageData };
            if (item.name) {
                obj.name = item.name;
            }
            let r = yield conn.getRepository(entities_1.PageRecord).update({ id: item.id, applicationId: appId }, obj);
            if (r.affected == 0)
                throw new Error(`Update page record fail.`);
            return {};
        });
    }
    remove(conn, { id }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id)
                throw errors_1.errors.argumentNull("id");
            yield conn.getRepository(entities_1.PageRecord).delete(id);
            return {};
        });
    }
    item(conn, { name, id }, appId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (name == null && id == null)
                throw new Error("One of name or id of route data field can not be null.");
            let repository = conn.getRepository(entities_1.PageRecord);
            let item;
            if (name != null) {
                item = yield repository.findOne({ name, applicationId: appId });
            }
            else {
                item = yield repository.findOne(id);
            }
            return item;
        });
    }
    /**
     * 通过 id 获取多个 PageRecord
     */
    items(conn, { ids }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (ids == null)
                throw errors_1.errors.routeDataFieldNull("ids");
            if (ids.length == 0)
                return [];
            let repository = conn.getRepository(entities_1.PageRecord);
            let r = yield repository.findByIds(ids);
            return r;
        });
    }
    /** 获取用户端组件信息 */
    getComponentInfos(c) {
        return c.data.componentInfos;
    }
};
__decorate([
    maishu_node_mvc_1.action(),
    __param(0, common_1.connection), __param(1, maishu_node_mvc_1.routeData)
], PageDataController.prototype, "list", null);
__decorate([
    maishu_node_mvc_1.action(),
    __param(0, common_1.connection), __param(1, maishu_node_mvc_1.routeData), __param(2, maishu_chitu_admin_1.currentAppId)
], PageDataController.prototype, "add", null);
__decorate([
    maishu_node_mvc_1.action(),
    __param(0, common_1.connection), __param(1, maishu_node_mvc_1.routeData), __param(2, maishu_chitu_admin_1.currentAppId)
], PageDataController.prototype, "update", null);
__decorate([
    maishu_node_mvc_1.action(),
    __param(0, common_1.connection), __param(1, maishu_node_mvc_1.routeData)
], PageDataController.prototype, "remove", null);
__decorate([
    maishu_node_mvc_1.action(),
    __param(0, common_1.connection), __param(1, maishu_node_mvc_1.routeData), __param(2, maishu_chitu_admin_1.currentAppId)
], PageDataController.prototype, "item", null);
__decorate([
    maishu_node_mvc_1.action(),
    __param(0, common_1.connection), __param(1, maishu_node_mvc_1.routeData)
], PageDataController.prototype, "items", null);
__decorate([
    maishu_node_mvc_1.action("/user/componentInfos"),
    __param(0, maishu_node_mvc_1.serverContext)
], PageDataController.prototype, "getComponentInfos", null);
PageDataController = __decorate([
    maishu_node_mvc_1.controller("page-data")
], PageDataController);
exports.PageDataController = PageDataController;
