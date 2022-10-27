import {useState, useEffect} from "react";
import React from 'react';
import Task from "./Task.js"

function StatussesTask({tasks,name,handleEdit,isEdit}) {


    return (
        <div>
            <h1>{name}</h1>
            <div className={"Status"}>
                {tasks.map(i=><Task key={Math.random()} {...i}
                                    handleEdit={handleEdit}
                                    isEdit={isEdit}/>)
                }
            </div>
        </div>
    );
}

export default StatussesTask;