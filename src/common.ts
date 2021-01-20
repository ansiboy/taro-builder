import { createParameterDecorator, ServerContext, VirtualDirectory } from "maishu-node-mvc";
import { getConnectionManager, createConnection, getConnection, Connection } from "maishu-node-data";
import { ConnectionOptions } from "maishu-node-data";

export type ServerContextData = {
    db: ConnectionOptions,
    staticRoot?: VirtualDirectory,
}

export let connection = createParameterDecorator((ctx: ServerContext<ServerContextData>) => {
    return new Promise(async (resolve, reject) => {
        let connectionManager = getConnectionManager();
        let name = ctx.data.db.database as string;
        console.assert(name != null);
        let connection: Connection;
        if (!connectionManager.has(name)) {
            let dbOptions = ctx.data.db;
            connection = await createConnection(dbOptions);
        }
        else {
            connection = getConnection(name);

        }
        return resolve(connection);
    });
});
