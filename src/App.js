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






  
function App() {
  const [statuses, setStatus] = useState(defaultState);

  useEffect(() => {
    setStatus(DATA.reduce((current, task) => {
      current[task.status].push(task);
      return current;
    }, defaultState));
  }, []);

  console.log(statuses,"asgsah");

  return (
      <div className="App">
        {defaultState.todo.length && Object.keys(statuses).map((item) => <StatussesTask key={Math.random()}
                                                            name={item}
                                                            tasks={statuses[item]}
        />)}
      </div>
  );
}

export default App;
