import React = require("react");
import { View } from "@tarojs/components";

export class PageView extends React.Component {
    render() {
        return <View className="page-view">
            {this.props.children}
        </View>
    }
}