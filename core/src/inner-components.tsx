import React = require("react");
import { View } from "@tarojs/components";

export class PageView extends React.Component {
    render() {
        return <View className="page-view">
            <View className="header">

            </View>

            {this.props.children}

            <View className="footer">

            </View>
        </View>
    }
}

export class CompoenntContainer extends React.Component {

}