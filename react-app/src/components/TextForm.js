import React,{ useState } from "react";

export default function TextForm() {
    const [text, setText] = useState(' ');
    let handleUpclick = ()=>{
        console.log('uppercase button clicked ' + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    let handleOnchange = (event)=>
    {
        console.log('OnChange');
        setText(event.target.value);
    }
  return (
    <div>
      <div className="mb-3">
        <textarea className="form-control" onChange={handleOnchange} value = {text} id="MyBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpclick}>UpperCase</button>
      <div className="container">
        <h2>Text Summary</h2>
        <p>{text.split(' ').length} words ,{text.length} characters</p>
      </div>
    </div>
  );
}
