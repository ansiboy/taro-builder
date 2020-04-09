import React = require("react");

export interface PageBoxProps {

}

export class PageBox extends React.Component<PageBoxProps> {
    render() {
        return <div className="marvel-device iphone8 black pull-left">
            <div className="top-bar"></div>
            <div className="sleep"></div>
            <div className="volume"></div>
            <div className="camera"></div>
            <div className="sensor"></div>
            <div className="speaker"></div>

            <div className="screen mobile-page">

            </div>
        </div>
    }
}