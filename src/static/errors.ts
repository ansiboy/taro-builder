import { errors as baseErrors } from "maishu-toolkit";
export let errors = Object.assign({
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
    },
    pageNameCanntEmpty() {
        let msg = `Page name can not be null or empty.`;
        return new Error(msg);
    },
    // settingFieldNull<T extends Settings>(fieldName: keyof T) {
    //     let msg = `Field '${fieldName}' of settings is null.`;
    //     return new Error(msg);
    // },
    fileNotExists(filePath: string) {
        let msg = `File '${filePath}' is not exists.`;
        return new Error(msg);
    }
}, baseErrors)

// import { guid, Errors } from "maishu-toolkit";
// import { Settings } from "maishu-chitu-admin";

// class MyErrors extends Errors {
//     settingFieldNull<T extends Settings>(fieldName: keyof T) {
//         let msg = `Field '${fieldName}' of settings is null.`;
//         return new Error(msg);
//     }
//     fileNotExists(filePath: string) {
//         let msg = `File '${filePath}' is not exists.`;
//         return new Error(msg);
//     }
//     pageNameCanntEmpty() {
//         let msg = `Page name can not be null or empty.`;
//         return new Error(msg);
//     }
// }

// export let errors = new MyErrors();
