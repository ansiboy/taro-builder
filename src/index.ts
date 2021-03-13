import * as path from "path";
import * as fs from "fs";
import { pathConcat } from "maishu-toolkit";

export function filePaths(dir: string): { [key: string]: string } {
    if (path.isAbsolute(dir) == false)
        throw `Path ${dir} is not a physical path.`;

    let r: ReturnType<typeof filePaths> = {};
    let stack = new Array<string>();
    stack.push("");

    while (stack.length > 0) {
        let relativePath = stack.pop();
        let p = path.join(dir, relativePath);
        let names = fs.readdirSync(p);
        for (let i = 0; i < names.length; i++) {
            let childPhysicalPath = path.join(p, names[i]);
            if (fs.statSync(childPhysicalPath).isFile()) {
                r[pathConcat(relativePath, names[i])] = childPhysicalPath;
            }
            else {
                stack.push(pathConcat(relativePath, names[i]));
            }
        }
    }

    return r;
}



