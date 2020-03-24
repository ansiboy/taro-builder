import Taro from "@tarojs/taro";
import { } from "taro-ui";
import { } from "@tarojs/components";
import { Service, AjaxOptions } from "maishu-chitu-service";

export class MyService extends Service {
    ajax<T>(url: string, options: AjaxOptions): Promise<T> {
        let self = this;
        let headers = options.headers || {};
        headers["application-id"] = "7bbfa36c-8115-47ad-8d47-9e52b58e7efd";
        // headers["user-id"] = "0080eb05-6c24-4d2c-89c0-00c7483a47f9";
        headers["token"] = "889df906-40ba-dcaa-dd83-40a41fee6d8d";
        return new Promise<T>((resolve, reject) => {
            Taro.request({
                url, data: options.data,
                method: (options.method as any) || "GET",
                header: options.headers,
                fail(err) {
                    reject(err);
                },
                success(obj) {
                    let textObject;
                    let isJSONContextType = (obj.header['content-type'] || '').indexOf('json') >= 0;
                    if (isJSONContextType) {
                        textObject = typeof obj.data == "string" ? JSON.parse(obj.data) : (obj.data || {});
                    }
                    else {
                        textObject = obj.data;
                    }

                    const CustomError = 400;
                    if (obj.statusCode >= CustomError) {
                        reject(obj);
                        self.error.fire(self, textObject);
                        return;
                    }

                    resolve(obj.data);
                }
            })
        })
    }




}

export function imageUrl(path: string, width?: number, height?: number) {
    // let imageService = new ImageService();
    // return imageService.imageSource(path, width, height);
    return path;
}

export let config = {

}