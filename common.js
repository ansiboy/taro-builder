"use strict";
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
// const defaultAppId = "00000000-0000-0000-0000-000000000000";
// export let currentAppId = createParameterDecorator(async (req) => {
//     let appId = req.headers["application-id"];
//     return appId || defaultAppId;
// }) as Function;
//req, res, context: ServerContext<ServerContextData>
exports.connection = maishu_node_mvc_1.createParameterDecorator((ctx) => __awaiter(void 0, void 0, void 0, function* () {
    let connectionManager = maishu_node_data_1.getConnectionManager();
    console.assert(ctx.data.db.name != null);
    if (!connectionManager.has(ctx.data.db.name)) {
        let dbOptions = ctx.data.db;
        yield maishu_node_data_1.createConnection(dbOptions);
    }
    let connection = maishu_node_data_1.getConnection(ctx.data.db.name);
    return Promise.resolve(connection);
}));
