import {useState, useEffect} from "react";
import React from 'react';
import Task from "./Task.js"


function StatussesTask({tasks,name,handleEdit,isEdit,handleChangeInputTitle}) {


    return (
        <div>
            <h1>{name}</h1>
            <div className={"Status"}>
                {tasks.map(i=><Task key={Math.random()} {...i}
                                    handleEdit={handleEdit}
                                    name={name}
                                    handleChangeInputTitle={handleChangeInputTitle}
                                    isEdit={isEdit}/>)
                }
            </div>
        </div>
    );
}

export default (StatussesTask);