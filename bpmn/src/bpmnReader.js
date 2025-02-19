import { useRef } from "react";

function Reader(props) {

    const reader = new FileReader;
    reader.onload = () => {
        props.textSetter(reader.result);
    }

    const inputFile = useRef(null);
    const onButtonClick = () => {
        const selectedFile = document.getElementById("file").files[0];
        reader.readAsText(selectedFile)
    };

    return (
        <div>
            <input type='file' accept=".bpmn" id='file' ref={inputFile} />
            <button onClick={onButtonClick}>Load</button>
        </div>
    );
}

export default Reader;
