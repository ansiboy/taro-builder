import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtIcon } from "taro-ui";
import { style } from "../config";
import "./empty.less";
import { ViewProps } from "@tarojs/components/types/View";

export interface EmptyProps {
    icon: string
    text: string,
    onClick?: ViewProps["onClick"]
}

export class Empty extends Component<EmptyProps> {
    render() {
        return <View className="empty" onClick={this.props.onClick}>
            <View className="icon">
                <AtIcon value={this.props.icon} size={style.emptyIconSize} />
            </View>
            <View className="text">
                {this.props.text}
            </View>
        </View>
    }
}