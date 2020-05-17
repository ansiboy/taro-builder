import { guid, Errors } from "maishu-toolkit";
import { Settings } from "maishu-chitu-admin";

class MyErrors extends Errors {
    settingFieldNull<T extends Settings>(fieldName: keyof T) {
        let msg = `Field '${fieldName}' of settings is null.`;
        return new Error(msg);
    }
    fileNotExists(filePath: string) {
        let msg = `File '${filePath}' is not exists.`;
        return new Error(msg);
    }
    pageNameCanntEmpty() {
        let msg = `Page name can not be null or empty.`;
        return new Error(msg);
    }
}

export let errors = new MyErrors();
