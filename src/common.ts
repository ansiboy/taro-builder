import { createParameterDecorator, ServerContext, VirtualDirectory } from "maishu-node-mvc";
import { getConnectionManager, createConnection, getConnection } from "maishu-node-data";
import { ConnectionOptions } from "maishu-node-data";

export type ServerContextData = {
    db: ConnectionOptions,
    staticRoot?: VirtualDirectory,
}

export let connection = createParameterDecorator((ctx: ServerContext<ServerContextData>) => {
    return new Promise((resolve, reject) => {
        let connectionManager = getConnectionManager();
        let name = ctx.data.db.database as string;
        console.assert(name != null);
        if (!connectionManager.has(name)) {
            let dbOptions = ctx.data.db;
            createConnection(dbOptions)
                .then(o => resolve(o))
                .catch(err => reject(err));
        }
        let connection = getConnection(name);
        return resolve(connection);
    });
});
