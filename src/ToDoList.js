import { useReducer} from 'react';
import CreateTaskForm from './TaskCreateForm';
import TaskCard from './TaskCard';

// The state parameter is the actual when you declared at instantiation time. In this case, "tasks".
function reducer(state, action) {
    if (action.type === "add") {
        // return ["this is what we have now!"]
        return [...state, {name: action.name, done: false}]
    }
    else {
        return state.filter(t => t.name !== action.name);
    }
}

function createInitialTasks() {
    let rv = ["Grade A4", "Finish final project"].map(t => {
        return {
            name: t,
            done: false
        }
    })

    rv.push({name: "Completed Task!", done: true})
    return rv;
}


function ToDoList() {
    const [tasks, dispatch] = useReducer(reducer, createInitialTasks()) 

    return (
        <div>
            <CreateTaskForm dispatcher={dispatch}></CreateTaskForm>
            {tasks.map(t => <TaskCard name={t.name} completed ={t.done} dispatcher={dispatch}></TaskCard> 
        )}
        </div>
    )

}

export default ToDoList;
