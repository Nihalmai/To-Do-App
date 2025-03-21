import React, { useState } from "react";

function ToDoList() {
    const [tasks, setTasks] = useState(["Eat", "Sleep", "Code"]);
    const [newTask, setNewTask] = useState("");
    function handleInputChange(event) {
        setNewTask(event.target.value);
    }
    function handleAddTask() {
        if(newTask.trim() !== ""){setTasks(t =>[...tasks, newTask]);
        setNewTask("");}
    }
    function handleDeleteTask(index) {
        setTasks(tasks.filter((_, i) => i !== index));
    }
    function handlemoveUp(index) {
        if(index === 0) return;
        const newTasks = [...tasks];
        const temp = newTasks[index];
        newTasks[index] = newTasks[index-1];
        newTasks[index-1] = temp;
        setTasks(newTasks);
    }
    function handlemoveDown(index) {
        if(index === tasks.length - 1) return;
        const newTasks = [...tasks];
        const temp = newTasks[index];
        newTasks[index] = newTasks[index+1];
        newTasks[index+1] = temp;
        setTasks(newTasks);
    }

    return(<div className="To-Do-List">
        <h1>To-Do-List</h1>
        <div>
            <input type="text" placeholder="Enter a task" value={newTask} onChange={handleInputChange}/>
            <button className="add-button" onClick={handleAddTask}>Add</button>
        </div>
        <ol>
            {tasks.map((task, index)=>
            <li key={index}>
                <span className="text">{task}</span>
                <button className="delete-button" onClick={()=>handleDeleteTask(index)}>Delete</button>
                <button className="up-button" onClick={()=>handlemoveUp(index)}>Move Up</button>
                <button className="down-button" onClick={()=>handlemoveDown(index)}>Move Down</button>
            </li>
            )}
        </ol>
    </div>);
}
export default ToDoList