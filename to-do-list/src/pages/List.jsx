import React, {useState} from 'react'
import { Link } from 'react-router-dom'


function ListTask({tasks, setTasks}){
    const [newTask, setNewTask] = useState('');
    const [editingTaskId, setEditingTaskId] = useState();
    const [editTaskTitle, setEditTaskTitle] = useState('');

    const handleAddTask = () => {
        if(newTask.trim()) {
            const newTaskObj = { id:Date.now(), title: newTask};
            setTasks([...tasks, newTaskObj]);
            setNewTask('');
        }
    };

    const handleDeleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };
    
    const handleEditTask = (task) => {
        setEditingTaskId(task.id);
        setEditTaskTitle(task.title);
    };

    const handleSaveEdit = (id) => {
        if (editTaskTitle.trim()) {
            setTasks(
                tasks.map((task) =>
                task.id === id ? {...task,title: editTaskTitle} : task
                )
            );
            setEditingTaskId(null);
            setEditTaskTitle('');
        }
    }

    return (
        <div>
        <h2 className="header">To Do List</h2>
        <div className="inputs">
        <input type="text" value={newTask} onChange={(e) => setNewTask (e.target.value)} 
        className="holder" placeholder='Enter New Task'/>
        <button onClick={handleAddTask} className='add_task'>Add Task</button>
        </div>
        <ul>
            {tasks.map((task) => (
                <li key={task.id} className="i_dont_know">
                   <Link to={`/details/${task.id}`}>{task.title}</Link>
                    {editingTaskId === task.id ? (
                        <div>
                        <input type="text" value={editTaskTitle} onChange={(e) => setEditTaskTitle(e.target.value)} />
                        <button onClick={() => handleSaveEdit(task.id)}>Save</button>
                        </div>
                    ) : (
                        <div>
                            <label>{task.title}</label>
                            <button onClick={() => handleEditTask(task)}>Edit</button>
                            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                        </div>
                    )}
                </li>
            ))}
        </ul>
        </div>
    )
}

export default ListTask