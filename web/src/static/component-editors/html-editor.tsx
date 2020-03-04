import { Component, TextInput, PropEditor, PropEditorState } from "maishu-jueying";
import React = require("react");
import "./html-editor.less";

class HTMLEditor extends PropEditor<PropEditorState<string>, string> {

    private editorElement: HTMLElement;

    constructor(props) {
        super(props);
    }

    onHTMLButtonClick(element: HTMLElement) {
        let dataRole = element.attributes.getNamedItem("data-role");
        let tag = dataRole ? dataRole.value : "";
        switch (tag) {
            case "h1":
            case "h2":
            case "p":
                document.execCommand('formatBlock', false, '<' + tag + '>');
                break;
            default:
                document.execCommand(tag, false, null);
                break;
        }

        this.onContentChanged()

    }

    onContentChanged() {
        this.props.updateComponentProp(this.editorElement.innerHTML);
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return <div className="html-editor content">
            <div className="container-fluid">
                <div id='pad-wrapper'>
                    <div id="editparent">
                        <div className='editControls' style={{ textAlign: "left", padding: "5px" }}>
                            <div className='btn-group'>
                                <a className='btn' data-role='undo' href='javascript:'
                                    onClick={e => this.onHTMLButtonClick(e.currentTarget as HTMLElement)}>
                                    <i className='icon-undo'></i></a>
                                <a className='btn' data-role='redo' href='javascript:'
                                    onClick={e => this.onHTMLButtonClick(e.currentTarget as HTMLElement)}>
                                    <i className='icon-repeat'></i></a>
                            </div>
                            <div className='btn-group'>
                                <a className='btn' data-role='bold' href='javascript:' style={{ fontWeight: "bold" }}
                                    onClick={e => this.onHTMLButtonClick(e.currentTarget as HTMLElement)}>Bold</a>
                                <a className='btn' data-role='italic' href='javascript:' style={{ fontStyle: "italic" }}
                                    onClick={e => this.onHTMLButtonClick(e.currentTarget as HTMLElement)}>Italic</a>
                                <a className='btn' data-role='underline' href='javascript:' style={{ textDecoration: "underline" }}
                                    onClick={e => this.onHTMLButtonClick(e.currentTarget as HTMLElement)}>U</a>
                                <a className='btn' data-role='strikeThrough' href='javascript:' style={{ textDecoration: "line-through" }}
                                    onClick={e => this.onHTMLButtonClick(e.currentTarget as HTMLElement)}>
                                    abc
                            </a>
                            </div>
                            <div className='btn-group'>
                                <a className='btn' data-role='justifyLeft' href='javascript:'
                                    onClick={e => this.onHTMLButtonClick(e.currentTarget as HTMLElement)}><i className='icon-align-left'></i></a>
                                <a className='btn' data-role='justifyCenter' href='javascript:'
                                    onClick={e => this.onHTMLButtonClick(e.currentTarget as HTMLElement)}><i className='icon-align-center'></i></a>
                                <a className='btn' data-role='justifyRight' href='javascript:'
                                    onClick={e => this.onHTMLButtonClick(e.currentTarget as HTMLElement)}><i className='icon-align-right'></i></a>
                                <a className='btn' data-role='justifyFull' href='javascript:'
                                    onClick={e => this.onHTMLButtonClick(e.currentTarget as HTMLElement)}><i className='icon-align-justify'></i></a>
                            </div>
                            <div className='btn-group'>
                                <a className='btn' data-role='indent' href='javascript:'
                                    onClick={e => this.onHTMLButtonClick(e.currentTarget as HTMLElement)}><i className='icon-indent-right'></i></a>
                                <a className='btn' data-role='outdent' href='javascript:'
                                    onClick={e => this.onHTMLButtonClick(e.currentTarget as HTMLElement)}><i className='icon-indent-left'></i></a>
                            </div>
                            <div className='btn-group'>
                                <a className='btn' data-role='insertUnorderedList' href='javascript:'
                                    onClick={e => this.onHTMLButtonClick(e.currentTarget as HTMLElement)}><i className='icon-list-ul'></i></a>
                                <a className='btn' data-role='insertOrderedList' href='javascript:'
                                    onClick={e => this.onHTMLButtonClick(e.currentTarget as HTMLElement)}><i className='icon-list-ol'></i></a>
                            </div>
                            <div className='btn-group'>
                                <a className='btn' data-role='h1' href='javascript:'
                                    onClick={e => this.onHTMLButtonClick(e.currentTarget as HTMLElement)}>h<sup>1</sup></a>
                                <a className='btn' data-role='h2' href='javascript:'
                                    onClick={e => this.onHTMLButtonClick(e.currentTarget as HTMLElement)}>h<sup>2</sup></a>
                                <a className='btn' data-role='p' href='javascript:'
                                    onClick={e => this.onHTMLButtonClick(e.currentTarget as HTMLElement)}>p</a>
                            </div>
                            <div className='btn-group'>
                                <a className='btn' data-role='subscript' href='javascript:'
                                    onClick={e => this.onHTMLButtonClick(e.currentTarget as HTMLElement)}><i className='icon-subscript'></i></a>
                                <a className='btn' data-role='superscript' href='javascript:'
                                    onClick={e => this.onHTMLButtonClick(e.currentTarget as HTMLElement)}><i className='icon-superscript'></i></a>
                            </div>
                        </div>
                        <div className='editor' style={{}} contentEditable={true}
                            dangerouslySetInnerHTML={{ __html: this.props.value }}
                            onInput={e => this.onContentChanged()}
                            ref={e => this.editorElement = e || this.editorElement}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    }
}

Component.setPropEditor({
    displayName: "内容",
    componentType: "HtmlEditor",
    propName: "content",
    editorType: HTMLEditor,
})