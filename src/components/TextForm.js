import React, { useState, useRef } from "react"
//import PropTypes from 'prop-types'

export default function TextForm(props) {
  const textareaRef = useRef(null);
  const [text, setText] = useState("");
  //text="hello there"  is wrong. You have to use function
  const upper = () => {
    setText(text.toUpperCase())
    props.showAlert("Converted to uppercase", "success")
  }
  const change = (event) => {
    setText(event.target.value);
  }
  const lower = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase", "success")
  }
  const sentence = () => {
    setText(text.replace(/(^\w|\.\s+\w)/gm, (match) => match.toUpperCase()));
    props.showAlert("Converted to sentence format", "success");
  }
  const clear = () => {
    setText("")
    props.showAlert("Text cleared", "success")
  }
  const copy = () => {
    if (textareaRef.current) {
      textareaRef.current.select()
      document.execCommand('copy')
    }
    props.showAlert("Text copied to clipboard", "success")
  }
  const paste = () => {
    navigator.clipboard.readText().then((clipboardText) => {
      setText(clipboardText);
      props.showAlert("Text pasted from clipboard", "success");
    }).catch((error) => {
      console.error('Failed to read clipboard contents: ', error);
      props.showAlert("Failed to paste text from clipboard", "danger");
    });
  }
  const removeExtraSpaces = () => {
    const newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
    props.showAlert("Extra spaces removed", "success");
  }
  return (
    <>
      <div className={`form-floating text-${props.mode === 'dark' ? 'white' : 'black'}`} >
        <textarea
          value={text}
          onChange={change}
          className={`form-control col-15 text-${props.mode === 'dark' ? 'white' : 'black'}`}
          placeholder="Enter text here"
          style={{ backgroundColor: props.mode === 'dark' ? '#505459' : 'white', height: '250px' }}
          id="floatingTextarea"
          ref={textareaRef}
        ></textarea>
        <div className="button-container" style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button type="button" style={{ width: '180px' }} disabled={text.length === 0} className={`btn btn-${props.mode === 'dark' ? 'dark' : 'primary'} my-3 mx-2`} onClick={upper}>Convert to Uppercase</button>
          <button type="button" style={{ width: '180px' }} disabled={text.length === 0} className={`btn btn-${props.mode === 'dark' ? 'dark' : 'primary'} my-3 mx-2`} onClick={lower}>Convert to Lowercase</button>
          <button type="button" style={{ width: '180px' }} disabled={text.length === 0} className={`btn btn-${props.mode === 'dark' ? 'dark' : 'primary'} my-3 mx-2`} onClick={sentence}>Sentence Format</button>
          <button type="button" style={{ width: '180px' }} disabled={text.length === 0} className={`btn btn-${props.mode === 'dark' ? 'dark' : 'primary'} my-3 mx-2`} onClick={clear}>Clear Text</button>
          <button type="button" style={{ width: '180px' }} disabled={text.length === 0} className={`btn btn-${props.mode === 'dark' ? 'dark' : 'primary'} my-3 mx-2`} onClick={copy}>Copy Text</button>
          <button type="button" style={{ width: '180px' }} disabled={text.length === 0} className={`btn btn-${props.mode === 'dark' ? 'dark' : 'primary'} my-3 mx-2`} onClick={removeExtraSpaces}>Remove Extra Spaces</button>
          <button type="button" style={{ width: '180px', marginLeft: 'auto' }} className={`btn btn-${props.mode === 'dark' ? 'dark' : 'primary'} my-3 mx-2`} onClick={paste}>Paste from Clipboard</button>
        </div>
      </div>
      <div className={`container form-floating text-${props.mode === 'dark' ? 'white' : 'black'}`}>
        <h2>Text Summary</h2>
        <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words, {text.length} characters.</p>
      </div>
    </>
  );
}
