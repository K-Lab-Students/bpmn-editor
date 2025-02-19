import './App.css';
import ReactBpmn from "./reactBpmnjs.js"
import Reader from './bpmnReader.js';
import { useRef, useState } from "react";

function App() {

  const [diagramXML, setDiagramXML] = useState("");

  function onShown() {
    console.log('diagram shown');
  }

  function onLoading() {
    console.log('diagram loading');
  }

  function onError(err) {
    console.log('failed to show diagram');
  }

  return (
    <div className="App">
      <Reader textSetter={setDiagramXML} />
      <ReactBpmn
        diagramXML={diagramXML}
        onShown={onShown}
        onLoading={onLoading}
        onError={onError}
      />
    </div>
  );
}

export default App;
