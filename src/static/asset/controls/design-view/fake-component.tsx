import * as React from "react";
import { guid } from "maishu-toolkit";

export class FakeComponent extends React.Component<any> {
    render() {
        return <div key={this.props.id || guid()} style={{ padding: "50px 0 50px 0", textAlign: "center" }}>
            组件正在加载中...
        </div>
    }
}