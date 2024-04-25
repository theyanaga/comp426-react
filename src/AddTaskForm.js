function AddTaskForm({dispatch}) {

    function handleKeyPress(event) {
        if (event.key === "Enter") {
            addTask(event.target.value);
            // dispatch({type: "add", name: event.target.value})
            event.target.value = ""
        }
    }

    async function addTask(name) {
        await fetch("http://localhost:8080/todo", {method: "POST", headers: {
            'Accept':'application/json',
            'Content-Type': 'application/json'  // Specify content type as JSON
          } ,body: JSON.stringify({name: name})})
        .then(() => dispatch({type: "add"}))
    }

    return (
        <div>
            <input type="text" onKeyDown={handleKeyPress}/>
        </div>
    )

}

export default AddTaskForm;