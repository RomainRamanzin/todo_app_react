import { useState } from "react";
import Task from "./Task"

const TaskList = ({ tasks, addTask, deleteTask, toggleTask }) => {

    const [newTask, setNewTask] = useState('');

    const handleInputChange = (event) => {
        event.preventDefault();
        setNewTask(event.target.value);
    }

    const handleAddTask = (e) => {
        e.preventDefault();
        if(newTask === '') return;
        addTask(newTask);
        setNewTask('');
    }

    return (
        <div className="task-list">
            <div className="add-bar">
                <form onSubmit={handleAddTask}>
                    <input type="text" placeholder="Ajouter une tâche" value={newTask} onChange={handleInputChange} />
                    <button type="submit">Ajouter une tâche</button>
                </form>
            </div>
            <hr />
            <h2>Liste des tâches</h2>
            <ul>
                {tasks.map((task) => (
                    <Task key={task.id} task={task} deleteTask={deleteTask} toggleTask={toggleTask} />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;