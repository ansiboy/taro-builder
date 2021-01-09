import { createParameterDecorator, ServerContext, VirtualDirectory } from "maishu-node-mvc";
import { ConnectionConfig } from "mysql";
import { createConnection, getConnection, ConnectionOptions, getConnectionManager } from "maishu-node-data";
import path = require("path");
import { ComponentInfo } from "taro-builder-core";

export type ServerContextData = { db: ConnectionConfig, componentInfos: ComponentInfo[], staticRoot?: VirtualDirectory };


// const defaultAppId = "00000000-0000-0000-0000-000000000000";
// export let currentAppId = createParameterDecorator(async (req) => {
//     let appId = req.headers["application-id"];
//     return appId || defaultAppId;
// }) as Function;

//req, res, context: ServerContext<ServerContextData>
export let connection = createParameterDecorator(async (ctx: ServerContext<ServerContextData>) => {
    let connectionManager = getConnectionManager();
    if (!connectionManager.has(ctx.data.db.database)) {
        let dbOptions: ConnectionOptions = {
            type: "mysql",
            host: ctx.data.db.host,
            port: ctx.data.db.port,
            username: ctx.data.db.user,
            password: ctx.data.db.password,
            database: ctx.data.db.database,
            synchronize: true,
            logging: true,
            entities: [path.join(__dirname, "entities.js")],
            name: ctx.data.db.database,
        }

        await createConnection(dbOptions)
    }
    let connection = getConnection(ctx.data.db.database);
    return Promise.resolve(connection);
});

