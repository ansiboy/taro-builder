import { View } from "@tarojs/components";
import React from "react";
import { component } from "jueying-core/decorators";

@component()
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