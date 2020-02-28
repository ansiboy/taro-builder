import { Component } from "react";
import { View } from "@tarojs/components";
import React from "react";

export class PageView extends Component {
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