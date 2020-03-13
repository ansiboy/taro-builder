import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtIcon } from "taro-ui";
import { style } from "../config";
import "./empty.less";

interface Props {
    icon: string
    text: string
}

export class Empty extends Component<Props> {
    render() {
        return <View className="empty">
            <View className="icon">
                <AtIcon value={this.props.icon} size={style.emptyIconSize} />
            </View>
            <View className="text">
                {this.props.text}
            </View>
        </View>
    }
}