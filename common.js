const { createParameterDecorator } = require("maishu-node-mvc");
const { getConnectionManager, createConnection, getConnection } = require("maishu-node-data");
exports.connection = createParameterDecorator((ctx) => {
    return new Promise((resolve, reject) => {
        let connectionManager = getConnectionManager();
        let name = ctx.data.db.database;
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
