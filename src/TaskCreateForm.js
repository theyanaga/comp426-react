import {useState} from 'react'


function CreateTaskForm({dispatcher}) {

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            dispatcher({
                type: "add"
                ,name: event.target.value});
        }
    }

   return (
    <div>
        <input type="text" 
        onKeyDown={handleKeyPress}
        />
    </div>
   );
}

export default CreateTaskForm;