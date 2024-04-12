const Task = ({ task, deleteTask, toggleTask }) => {
    
    return(
    <li>
        <span className={task.completed ? 'completed' : '' }>{task.title}</span>
        <div className="action-btns">
            <button className={task.completed ? "done-btn" : "undone-btn"} onClick={() => toggleTask(task.id)}>{ task.completed ? 'terminé' : 'à faire' }</button>
            <button className="delete-btn" onClick={() => deleteTask(task.id)} >Supprimer</button>
        </div>
    </li>
    );
};

export default Task;