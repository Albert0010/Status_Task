import './App.css';
import {useEffect, useState} from "react";
import Task from "./Components/Task.js";
import DATA from "./API/API.js"
import StatussesTask from "./Components/Statusses_Task"


function App() {
  const [statuses,setStatus] = useState({
    todos:[],
    inProgress:[],
    blocked:[],
    done:[],
  });



  useEffect(()=>{
    for (let i = 0; i < DATA.length; i++) {
      if(DATA[i].status === "todo"){
        setStatus((prevState)=>{
          return {...prevState,todos: [...prevState.todos,DATA[i]]}
        })
      }else if(DATA[i].status === "blocked"){
        setStatus((prevState)=>{
         return  {...prevState,blocked: [...prevState.blocked,DATA[i]]}
        })
      }else if(DATA[i].status === "done"){

        setStatus((prevState)=>{
          return {...prevState,done: [...prevState.done,DATA[i]]}
        })
      }else if(DATA[i].status === "inProgres"){
        setStatus((prevState)=>{
          return {...prevState,inProgress: [...prevState.inProgress,DATA[i]]}
        })
      }
    }
  },[]);



  return (
    <div className="App">
      {(statuses.todos.length) && Object.keys(statuses).map((item)=><StatussesTask key={Math.random()}
                                                                                   name={item}
                                                                                   tasks = {statuses[item]}
      />)}
    </div>
  );
}

export default App;
