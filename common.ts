import { createParameterDecorator, ServerContext, VirtualDirectory } from "maishu-node-mvc";
import { createConnection, getConnection, ConnectionOptions, getConnectionManager } from "maishu-node-data";
import path = require("path");
import { ComponentInfo } from "taro-builder-core";

export type ServerContextData = { db: ConnectionOptions, componentInfos: ComponentInfo[], staticRoot?: VirtualDirectory };


// const defaultAppId = "00000000-0000-0000-0000-000000000000";
// export let currentAppId = createParameterDecorator(async (req) => {
//     let appId = req.headers["application-id"];
//     return appId || defaultAppId;
// }) as Function;

//req, res, context: ServerContext<ServerContextData>
export let connection = createParameterDecorator(async (ctx: ServerContext<ServerContextData>) => {
    let connectionManager = getConnectionManager();

    console.assert(ctx.data.db.name != null);
    if (!connectionManager.has(ctx.data.db.name)) {
        let dbOptions: ConnectionOptions = ctx.data.db;
        await createConnection(dbOptions)
    }
    let connection = getConnection(ctx.data.db.name);
    return Promise.resolve(connection);
});

