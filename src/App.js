import { useEffect, useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [tasksList, setTasksList] = useState([]);

  useEffect(() => {
    const tasks = [
      {
        id: uuidv4(),
        title: 'Tache 1',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Tache 2',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Tache 3',
        completed: false
      },
    ];

    setTasksList(tasks);
  }, []);

  const addTask = (title) => {
    const newTask = {
      id: uuidv4(),
      title,
      completed: false
    };

    setTasksList([...tasksList, newTask]);
  }

  const deleteTask = (id) => {
    if(!window.confirm('Voulez-vous vraiment supprimer cette tâche ?')) return;
    const newTasksList = tasksList.filter(task => task.id !== id);
    setTasksList(newTasksList);
  }

  const toggleTask = (id) => {
    const newTasksList = tasksList.map(task => {
      if(task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });

    setTasksList(newTasksList);
  }

  return (
    <div className="App">
      <TaskList tasks={tasksList} addTask={addTask} deleteTask={deleteTask} toggleTask={toggleTask} />
    </div>
  );
}

export default App;
