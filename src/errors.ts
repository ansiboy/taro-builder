"use strict";
import { Errors } from "maishu-toolkit";
class MyErrors extends Errors {
    pageRecordNotExists(id) {
        let msg = `Page data record with id '${id}' is not exists.`;
        return new Error(msg);
    }
    urlParameterEmpty(name) {
        let msg = `Url parameter '${name}' is null or empty.`;
        return new Error(msg);
    }
    canntFindComponentInfo(typeName) {
        let msg = `Can not find component info for component '${typeName}'.`;
        return new Error(msg);
    }
    moduleNotExport(modulePath, memberName) {
        let msg = `Module '${modulePath}' has not export member '${memberName}'.`;
        return new Error(msg);
    }
    pageNameCanntEmpty() {
        let msg = `Page name can not be null or empty.`;
        return new Error(msg);
    }
    settingFieldNull(fieldName) {
        let msg = `Field '${fieldName}' of settings is null.`;
        return new Error(msg);
    }
    fileNotExists(filePath) {
        let msg = `File '${filePath}' is not exists.`;
        return new Error(msg);
    }
}
export let errors = new MyErrors();
