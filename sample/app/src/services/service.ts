import Taro from "@tarojs/taro";

export class Service {
    get<T>(url: string, data?: any): Promise<T> {
        data = Object.assign(data || {}, {
            "applicaiton-id": "7bbfa36c-8115-47ad-8d47-9e52b58e7efd"
        })
        url = url + "?" + JSON.stringify(data);
        return new Promise((resolve, reject) => {
            Taro.request({
                url,
                method: "GET",
                header: {
                    "applicaiton-id": "7bbfa36c-8115-47ad-8d47-9e52b58e7efd"
                },
                fail(err) {
                    reject(err);
                },
                success(obj) {
                    resolve(obj.data);
                }
            })
        })
    }

}