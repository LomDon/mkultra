import React, {createRef} from "react";
import AceEditor from "react-ace";

class EditPage extends React.Component{
    constructor() {
        super();
        this.cssEditor = createRef();
        this.htmlEditor = createRef();
        this.jsEditor = createRef();
        this.handleSave = this.handleSave.bind(this);
    }
    componentDidMount() {

    }
    handleSave(){

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
                    <a className="nav-link" id="nav-extraHTML-tab" data-toggle="tab" href="#nav-extraHTML" role="tab"
                       aria-controls="nav-extraHTML" aria-selected="false">Параметры</a>
                    <button onClick={this.handleSave} className="btn btn-light ml-auto">[сохранить]</button>
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-html" role="tabpanel"
                     aria-labelledby="nav-html-tab"><AceEditor
                    mode="html"
                    width="100%"
                    theme="vibrant_ink"
                    ref={this.htmlEditor}
                    setOptions={{
                        fontSize: 18,
                        enableEmmet:true
                    }}
                /></div>
                <div className="tab-pane fade" id="nav-css" role="tabpanel" aria-labelledby="nav-css-tab"><AceEditor
                    mode="css"
                    width="100%"
                    theme="vibrant_ink"
                    ref={this.cssEditor}
                    setOptions={{
                        fontSize: 18,
                        enableEmmet:true
                    }}
                /></div>
                <div className="tab-pane fade" id="nav-JS" role="tabpanel" aria-labelledby="nav-JS-tab"><AceEditor
                    mode="JS"
                    width="100%"
                    theme="vibrant_ink"
                    ref={this.jsEditor}
                    setOptions={{
                        fontSize: 18,
                        enableEmmet:true
                    }}
                />
                </div>
                <div className="tab-pane fade" id="nav-extraHTML" role="tabpanel" aria-labelledby="nav-extraHTML-tab">
                    <div className="col-10 mx-auto my-3">
                        <div className="mb-3">
                            <input name="name" onClick={this.handleInputChange} type="text" className="form-control" placeholder="URI страницы"/>
                        </div>
                        <div className="mb-3">
                            <input name="title" onClick={this.handleInputChange} type="text" className="form-control" placeholder="Заголовок страницы"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}