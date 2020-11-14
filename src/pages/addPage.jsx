import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html"
import "ace-builds/src-noconflict/theme-vibrant_ink"
import "emmet-core"
import "ace-builds/src-noconflict/ext-emmet"
import "ace-builds/src-noconflict/mode-javascript"
import "ace-builds/src-noconflict/mode-css"


export class AddPage extends React.Component{
    constructor() {
        super();
    }
    handleSave(){
        console.log("Ура")
    }

    render() {
        return <div>
        <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <a className="nav-item nav-link active" id="nav-html-tab" data-toggle="tab" href="#nav-html" role="tab"
                   aria-controls="nav-html" aria-selected="true">HTML</a>
                <a className="nav-item nav-link" id="nav-css-tab" data-toggle="tab" href="#nav-css" role="tab"
                   aria-controls="nav-css" aria-selected="false">CSS</a>
                <a className="nav-item nav-link" id="nav-JS-tab" data-toggle="tab" href="#nav-JS" role="tab"
                   aria-controls="nav-JS" aria-selected="false">JS</a>
                <button onClick={this.handleSave} className="btn btn-light ml-auto">[сохранить]</button>
            </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="nav-html" role="tabpanel"
                 aria-labelledby="nav-html-tab"><AceEditor
                mode="html"
                width="100%"
                theme="vibrant_ink"
                setOptions={{
                    fontSize: 18,
                    enableEmmet:true
                }}
            /></div>
            <div className="tab-pane fade" id="nav-css" role="tabpanel" aria-labelledby="nav-css-tab"><AceEditor
                mode="css"
                width="100%"
                theme="vibrant_ink"
                setOptions={{
                    fontSize: 18,
                    enableEmmet:true
                }}
            /></div>
            <div className="tab-pane fade" id="nav-JS" role="tabpanel" aria-labelledby="nav-JS-tab"><AceEditor
                mode="JS"
                width="100%"
                theme="vibrant_ink"
                setOptions={{
                    fontSize: 18,
                    enableEmmet:true
                }}
            /></div>
        </div>
    </div>
    }
    }