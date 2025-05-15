import React, {useState} from "react";

function ToDoList () {

    const [tasks, setTasks] = useState([]);
    const [newTasks, setNewTasks] = useState([]);

function handleInputChange(event) {
    setNewTasks(event.target.value)
}

function addTask() {

    if(newTasks.trim() !==""){
        setTasks(t => [...t, newTasks]);
        setNewTasks("");  
    }


}

function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
}

function moveTaskUp(index) {
    
    if(index > 0) {
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index - 1]] 
        = [updatedTasks[index - 1], updatedTasks[index]];
        setTasks(updatedTasks);
    }
}

function moveTaskDown(index) {
    
    if(index < tasks.length - 1) {
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index + 1]] 
        = [updatedTasks[index + 1], updatedTasks[index]];
        setTasks(updatedTasks);
    }
}

    return (
        <div className="to-do-List">
            <h1>To-Do-List ✍🏻</h1>
                <div>
                    <input 
                        type="text" 
                        placeholder="What is Your Task?"
                        value={newTasks}
                        onChange={handleInputChange}/>
                    <button className="add-btn"
                            onClick={addTask}>
                        Add
                    </button>
                </div>
                
                <ol>
                    {tasks.map((tasks, index) => 
                        <li key={index}>
                            <span className="text">{tasks}</span> 
                            <button className="del-btn"
                                    onClick={() => deleteTask(index)}>
                                Delete
                            </button>
                            <button className="move-button"
                                    onClick={() => moveTaskUp(index)}>
                                ⬆️
                            </button>
                            <button className="move-button"
                                    onClick={() => moveTaskDown(index)}>
                                ⬇️
                            </button>
                        </li>                        
                        
                    )}
                </ol>
        </div>
    ); 
}

export default ToDoList;