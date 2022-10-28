import React, {useState, useContext} from 'react';

import {FunctionContext} from "../App";



function PopUp({handleEditOff,title,_id,name}) {
    const context = useContext(FunctionContext);

    const [inp,setInp] = useState(title);
    const [statusInput,setStatusInput] = useState("");
    return (
        <div className={"popUp"}>
            <input value={inp}
                   onChange={(e)=>setInp(e.target.value)}
                   type={"text"}
                   id="status"
                   placeholder={"title..."} />
            <input list="statuses"
                   value={`${statusInput}`}
                   onChange={(e)=>{setStatusInput(e.target.value)}}
                   name="status"
                   id="status"
                   placeholder={"Choose status"} />
            <datalist id="statuses">
                <option value={"done"}></option>
                <option value="todo"></option>
                <option value="inProgress"></option>
                <option value="blocked"></option>
            </datalist>
            <button onClick={handleEditOff} >Cancel</button>
            <button onClick={()=>{
                context.handleChangeInput(name,_id,inp,statusInput);
            }}>Save</button>
        </div>
    );
}

export default PopUp;
