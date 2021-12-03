import React ,{useState} from 'react'

export default function TextForm2() {
    const [letter,setletter] = useState('free');


    let submitted = ()=>{
        console.log('Button clicked');
        
    }
    let onchange= (event)=>{
        console.log();
        setletter(event.target.value);
    }
    return (
        <div>
            
            <div className="mb-3">
            
            <textarea className="form-control" value = {letter} onChange={onchange} rows="3"></textarea>
            </div>
            <button className="btn btn-primary" onClick={submitted}>Submit</button>
            <h2></h2>
        </div>
    )
}
