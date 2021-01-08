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


export let connection = createParameterDecorator(async (req, res, context: ServerContext<ServerContextData>) => {
    let connectionManager = getConnectionManager();
    if (!connectionManager.has(context.data.db.database)) {
        let dbOptions: ConnectionOptions = {
            type: "mysql",
            host: context.data.db.host,
            port: context.data.db.port,
            username: context.data.db.user,
            password: context.data.db.password,
            database: context.data.db.database,
            synchronize: true,
            logging: true,
            entities: [path.join(__dirname, "entities.js")],
            name: context.data.db.database,
        }

        await createConnection(dbOptions)
    }
    let connection = getConnection(context.data.db.database);
    return Promise.resolve(connection);
});

