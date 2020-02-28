import React = require("react");
import { View } from "@tarojs/components";

export class PageView extends React.Component {
    render() {
        return <View className="page-view">
            <View className="body">{this.props.children}</View>
        </View>
    }
}