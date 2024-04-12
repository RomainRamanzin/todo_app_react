const Task = ({ task, deleteTask, toggleTask }) => {
    
    return(
    <li>
        <div className="task-left">
            <input className="checkbox-task" type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
            <span className={task.completed ? 'completed' : '' }>{task.title}</span>
        </div>
        <div className="action-btns">
            <button className={task.completed ? "done-btn" : "undone-btn"} onClick={() => toggleTask(task.id)}>{ task.completed ? 'terminé' : 'à faire' }</button>
            <button className="delete-btn" onClick={() => deleteTask(task.id)} >Supprimer</button>
        </div>
    </li>
    );
};

export default Task;