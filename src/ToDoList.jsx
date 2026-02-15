import { useState } from "react";
import "./ToDoList.css";

function ToDoList(){
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");

    const handleInputChange =(event)=>{
        setInput(event.target.value);
    }

    function addTask(){
        if(input !== ""){
        setTasks([...tasks, input]);
        setInput("");}
        else{
            alert("Plaese enter a task!")
        }

    }

    function removeTask(indexToDelete){
        const newTaskList = tasks.filter((_, index)=> index!==indexToDelete);
        setTasks(newTaskList);

    }

    return(
    <div className="list-container">
        <h1>To-do-List</h1>
        <div className="user-input">
        <input type="text" value={input} placeholder="Enter a task" onChange={handleInputChange}/> 
        <button onClick={addTask}>Add Task</button>
        </div>
        <div>

            <h3>Task List</h3>
            <ul>
                {tasks.map((task, index)=>(
                <li key={index} className="task-item">
                    <span>{task}</span>
                    <button onClick={()=>removeTask(index)}>Remove</button>
                </li>
                ))}
            </ul>
        </div>
    </div>)
};

export default ToDoList;