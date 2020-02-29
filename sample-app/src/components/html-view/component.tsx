export interface HTMLViewProps {
    content: string
}

interface HTMLNode {
    name: string,
    attrs?: Object,
    children: Nodes,
    parent?: HTMLNode,
}

interface HTMLText {

    /**
     * 文本节点
     */
    type: 'text';

    /**
     * 文本字符串，支持 entities
     *
     * 默认值：``
     */
    text: string;
    parent?: HTMLNode,
    children?: undefined
}


type Nodes = Array<HTMLText | HTMLNode>;


import React, { Component } from "react";
import { View, RichText } from "@tarojs/components";
import { component } from "taro-builder-core/out/decorators";
import { HTMLParser } from "./htmlparser";

@component({ displayName: "编辑器", icon: "icon-list-alt", introduce: "HTML 编辑器，用于编辑 HTML 文本" })
export class HTMLView extends Component<HTMLViewProps> {

    private defaultHTML = <View style={{ padding: "20px 0 30px 0", textAlign: "center" }}>
        清设置 HTML
    </View>

    private parseHTMLToElement(html: string) {

        let root: HTMLNode = { name: "div", attrs: [], children: [] };
        let parent = root;
        HTMLParser(html, {
            start(name, attrs) {
                let obj = {};
                attrs.forEach(o => obj[o.name] = o.value);
                let item: HTMLNode = { name, attrs: obj, children: [], parent };
                parent.children.push(item);
                parent = item;
            },
            end() {
                if (parent.parent == null) {
                    console.log("parse error");
                    return;
                }

                parent = parent.parent;
            },
            chars(text) {
                console.assert(parent != null);
                parent.children.push({ type: "text", text, parent: parent } as HTMLText);
            }

        });

        let stack = new Array<HTMLNode | HTMLText>();
        stack.push(root);
        while (stack.length > 0) {
            let item = stack.pop();
            if (item == null)
                continue;
                
            delete item.parent;
            if (item.children)
                stack.push(...item.children);
        }

        return <RichText nodes={root.children}>

        </RichText>
    }

    render() {
        return this.props.content ? this.parseHTMLToElement(this.props.content) : this.defaultHTML;
    }
}