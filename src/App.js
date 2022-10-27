import './App.css';
import {useEffect, useState} from "react";
import DATA from "./API/API.js"
import StatussesTask from "./Components/Statusses_Task";

const defaultState = {
  todo: [],
  inProgress: [],
  blocked: [],
  done: [],
};

const data = (DATA.reduce((current, task) => {
  current[task.status].push(task);
  return current;
}, defaultState));



function App() {
  const [statuses, setStatus] = useState(defaultState);


  useEffect(() => {
    setStatus(data);
  }, []);


  const handleChangeInputTitle = (id,title)=>{
    setStatus((pr)=>{

      Object.keys(pr).reduce((curr,item)=>{

      },pr)

      return {}
    })
  }

  return (
      <div className="App">
        {Object.keys(statuses).map((item) => <StatussesTask key={Math.random()}
                                                            name={item}
                                                            handleChangeInputTitle={handleChangeInputTitle}
                                                            tasks={statuses[item]}
        />)}
      </div>
  );
}

export default App;
