import React, {useContext} from 'react';
import Task from "./Task.js"



function StatussesTask({tasks,name,handleChangeInput}) {

    return (
            <div>
                <h1>{name}</h1>
                <div className={"Status"}>
                    {tasks.map(i=><Task key={Math.random()}
                                        {...i}
                                        name={name}
                    />)
                    }
                </div>
            </div>

    );
}

export default (StatussesTask);