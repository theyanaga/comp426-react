function TaskCard({name, dispatch}) {

    function handleClick() {
        deleteCardFromServer(name)
    }

    function deleteCardFromServer(cardName) {
        fetch("http://localhost:8080/todo", {method: "DELETE", headers: {
            'Accept':'application/json',
            'Content-Type': 'application/json'  // Specify content type as JSON
          } ,body: JSON.stringify({name: cardName})})
        .then(r => dispatch({type: "delete"}))
    }

    return (
        <div>
            <p> {name} </p>
            <button onClick={handleClick}>Done</button>
        </div>
    )

}

export default TaskCard;