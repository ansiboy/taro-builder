import './index.less';
import React from 'react';
import { ComponentData } from 'jueying-core';
import { View } from '@tarojs/components';
import { factory } from '../../components/factory';

interface State {
  pageData: ComponentData
}

export default class Index extends React.Component<{}, State> {
  constructor(props) {
    super(props)

    this.state = {
      pageData: {
        type: "PageView",
        props: { className: "view1" }, children: [
          { type: "View", props: { key: "view1" }, children: ["Hello World"] },
          { type: "Carousel", props: { key: "carousel1" } },
          { type: "HTMLView", props: { key: "htmlView1", content: "<b>ABC</b>", } }
        ],
      }
    }
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    let pageData = this.state.pageData;

    if (pageData == null)
      return <View style={{ textAlign: "center", padding: "10px 0 15px 0" }}>数据正在加载中...</View>

    return factory.createComponent(pageData);
  }
}
