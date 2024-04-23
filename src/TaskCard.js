function TaskCard({name, completed, dispatcher}) {

    function handleClick() {
        dispatcher({action: "completed", name: name})
    }

    return <div> 
        {completed && <div>{name}</div>} 
        {!completed && <div>{name}<button onClick={handleClick}>Complete</button></div>} 
    </div>


}

export default TaskCard;