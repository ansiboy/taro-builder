import { createParameterDecorator, ServerContext, VirtualDirectory } from "maishu-node-mvc";
import { getConnectionManager, createConnection, getConnection, Connection } from "maishu-node-data";
import { ConnectionOptions } from "maishu-node-data";
import { db } from "./nws-config";

export type ServerContextData = {
    db: ConnectionOptions,
    staticRoot?: VirtualDirectory,
}
// let config = require("../config.js");
export let connection = createParameterDecorator(() => {
    return new Promise(async (resolve, reject) => {
        let connectionManager = getConnectionManager();
        let name = db.database as string;
        console.assert(name != null);
        let connection: Connection;
        if (!connectionManager.has(name)) {
            let dbOptions = db;
            connection = await createConnection(dbOptions);
        }
        else {
            connection = getConnection(name);

        }
        return resolve(connection);
    });
});
