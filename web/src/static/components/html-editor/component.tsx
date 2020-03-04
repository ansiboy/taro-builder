import { component } from "maishu-jueying";
import Taro = require("@tarojs/taro");
import { View } from "@tarojs/components";

@component({ displayName: "编辑器", icon: "icon-list-alt", introduce: "HTML 编辑器，用于编辑 HTML 文本" })
export class HtmlEditor extends Taro.Component {
    render() {
        return <View>HTML Editor</View>
    }
}