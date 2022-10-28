import {useReducer, useCallback} from "react";
import {reducer} from "./constansts/reducer.js";
import DATA from "./API/API.js"
import './App.css';
import StatussesTask from "./Components/Statusses_Task";
import {ACTIONS} from "./constansts/reducer.js";
import {createContext} from "react";


const data = DATA.reduce((current, task, index) => {
    current[task.status].push(task);
    return current;
}, {
    todo: [],
    inProgress: [],
    blocked: [],
    done: [],
});


const defaultState = {
    names: Object.keys(data),
    statuses: data,
    temporary: null
}

export const FunctionContext = createContext(null);


function App() {
    const [state, dispatch] = useReducer(reducer, defaultState);
    const handleChangeInput = useCallback((name, id, title, value) => {
        const payload = {name, id, title, value};
        if (value || title) {
            dispatch({type: ACTIONS.ACTION_CHANGE, payload});
            dispatch({type: ACTIONS.ACTION_FILTER, payload});
            dispatch({type: ACTIONS.ACTION_ADD, payload});
        }
    }, [])


    return (
        <FunctionContext.Provider value={{handleChangeInput}}>
            <div className="App">
                {state.names.map((status) => <StatussesTask key={Math.random()}
                                                            name={status}
                                                            tasks={state.statuses[status]}
                />)}
            </div>
        </FunctionContext.Provider>

    );
}

export default App;
