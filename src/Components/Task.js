import React, {useState, useContext} from 'react';
import PopUp from "./PopUp.js";
import {TaskContext} from "./Statusses_Task";

function Task({_id, title, description,handleChangeInput,name}) {



    const [isEdit,setEdit] = useState(false);

    const handleEdit = ()=>{
        setEdit(true);
    }
    const handleEditOff = ()=>{
        setEdit(false);
    }
    return (
        <>
            {!isEdit  ? <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <button onClick={handleEdit}>Edit</button>
            </div> : <PopUp handleEditOff={handleEditOff}
                            name={name}
                            title={title}
                            _id={_id}/>}
        </>

    );
}

export default Task;
