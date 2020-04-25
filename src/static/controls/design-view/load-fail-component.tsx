import React = require("react");

export function createComponentLoadFail(error: any) {
    return class ComponentLoadFail extends React.Component {

        static typeName = "ComponentLoadFail"

        render() {
            let msg = typeof error == "string" ? error : error.message;
            return <div>
                <div>组件加载错误</div>
                <div>{msg}</div>
            </div>
        }
    }

}