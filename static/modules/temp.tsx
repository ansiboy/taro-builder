import * as React from "react";

let req = requirejs.config({ context: "shop3" })
req(["@tarojs/taro-h5"], function (abc) {
    debugger
})

export default class TempPage extends React.Component {
    render() {
        return <div>Temp Page</div>
    }
}