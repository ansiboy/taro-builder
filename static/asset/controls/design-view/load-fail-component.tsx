import * as React from "react";

export function createComponentLoadFail(error: any, reload: () => void) {
    return class ComponentLoadFail extends React.Component {
        render() {
            let msg = typeof error == "string" ? error : error.message;
            return <div>
                <div onClick={e => reload()}>组件加载错误, 点击重新加载</div>
                <div>{msg}</div>
            </div>
        }
    }

}