export let errors = {
    pageRecordNotExists(id: string) {
        let msg = `Page data record with id '${id}' is not exists.`;
        return new Error(msg);
    },
    urlParameterEmpty(name: string) {
        let msg = `Url parameter '${name}' is null or empty.`;
        return new Error(msg);
    },
    canntFindComponentInfo(typeName: string) {
        let msg = `Can not find component info for component '${typeName}'.`;
        return new Error(msg);
    },
    moduleNotExport(modulePath: string, memberName: string) {
        let msg = `Module '${modulePath}' has not export member '${memberName}'.`;
        return new Error(msg);
    }
}