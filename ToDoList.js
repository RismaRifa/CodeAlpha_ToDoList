import React, { useState } from 'react';

const ToDoList = () =>{
    const [tasks, setTasks] = useState([]);
    const [newTask, setnewTask]= useState('');


    const addTask = () => {
        if (newTask.trim())
        {
            setTasks([...tasks,{text:newTask,completed: false}]);
            setnewTask('');
        }
    };

    const toggleTaskCompletion = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    };

    const removeTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    const handleInputChange = (e) =>
    {
        setnewTask(e.target.value)
    }

    return (
        <div className="container">
            <h1>To-Do List</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <input 
                    type="text" 
                    value={newTask} 
                    onChange={handleInputChange} 
                    placeholder="Add a new task" 
                    required 
                />
                <button type="button" onClick={addTask}>Add Task</button>
            </form>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} className={task.completed ? 'completed' : ''}>
                        <span onClick={() => toggleTaskCompletion(index)}>{task.text}</span>
                        <button onClick={() => removeTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default ToDoList;
