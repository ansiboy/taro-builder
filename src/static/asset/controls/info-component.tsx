import * as React from "react";

interface Props {
    text: string
}

export default class InfoComponent extends React.Component<Props> {
    render() {
        let { text } = this.props;
        return <div className="text-center" style={{ paddingTop: 20, paddingBottom: 20 }}>
            {text}
        </div>
    }
}