import React, {useState} from 'react';
import PopUp from "./PopUp.js";

function Task({_id, title, description, status, category}) {
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
            </div> : <PopUp handleEditOff={handleEditOff} title={title}/>}
        </>

    );
}

export default Task;
