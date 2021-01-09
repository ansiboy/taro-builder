export declare let errors: {
    pageRecordNotExists(id: string): Error;
    urlParameterEmpty(name: string): Error;
    canntFindComponentInfo(typeName: string): Error;
    moduleNotExport(modulePath: string, memberName: string): Error;
    pageNameCanntEmpty(): Error;
    settingFieldNull<T extends import("maishu-chitu-admin").Settings<any>>(fieldName: keyof T): Error;
    fileNotExists(filePath: string): Error;
} & import("maishu-toolkit").Errors;
