export let errors = {
    pageRecordNotExists(id: string) {
        let msg = `Page data record with id '${id}' is not exists.`;
        return new Error(msg);
    },
    urlParameterEmpty(name: string) {
        let msg = `Url parameter '${name}' is null or empty.`;
        return new Error(msg);
    }
}