import Taro from "@tarojs/taro";
import { ShoppingService } from "./shopping-service";

export { ShoppingService } from "./shopping-service";

export let services = {
    shopping: new ShoppingService(errorHandle)
}

function errorHandle(error, sender) {
    let msg = error.message || error.Message;
    Taro.showModal({
        title: "错误",
        content: `${msg}`,
        confirmText: "确认",
        cancelText: "取消"
    })
}