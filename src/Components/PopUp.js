import React from 'react';

function PopUp({handleEditOff,title,_id,name,handleChangeInputTitle}) {
    return (
        <div className={"popUp"}>
            <input value={`${title}`} onChange={(e)=>handleChangeInputTitle(name,e.target.value)} type={"text"} id="status" placeholder={"title..."} />
            <input list="statuses" name="status" id="status" placeholder={"Choose status"} />
            <datalist id="statuses">
                <option value={"done"}></option>
                <option value="todo"></option>
                <option value="inProgress"></option>
                <option value="blocked"></option>
            </datalist>
            <button onClick={handleEditOff} >Cancel</button>
            <button >Save</button>
        </div>
    );
}

export default PopUp;
