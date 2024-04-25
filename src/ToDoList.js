import {useReducer, useEffect} from 'react';
import AddTaskForm from './AddTaskForm';
import TaskCard from './TaskCard';


function ToDoList() {
    // const [tasks, setTasks] = useState([])
    const [tasks, dispatch] = useReducer(reducer, [])

    function reducer(state, action) {
        if (action.type === "add") {
            fetchFromServer();
            return state; 
        }
        else if (action.type === "fetch") {
            return action.data;
        }
        else {
            fetchFromServer();
            return state; 
        }

    }

    function fetchFromServer() {
        fetch("http://localhost:8080/todo", {method: "GET"})
            .then(r => r.json())
            .then(d => dispatch({type: "fetch", data: d}))
    }

    useEffect(() => {
        fetchFromServer()
    }, [])
    

    return (
        <div>
            {/* {fetchFromServer()} */}
            <AddTaskForm dispatch={dispatch}></AddTaskForm>
            {tasks.map(t => <TaskCard name={t} dispatch={dispatch}/>)}
        </div>
    )
}

export default ToDoList;
