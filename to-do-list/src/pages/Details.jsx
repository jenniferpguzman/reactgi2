import React from "react";
import { useParams } from 'react-router-dom'

function Details({tasks}){
    const { taskId } = useParams();
    const task = tasks.find((task) => task.id === parseInt(taskId));

    if(!task) {
        return <div>Task Not Found</div>
    }
    return (
        <div>
            <h2>Task Details</h2>
            <p>Title:{task.title}</p>
        </div>
    )
}

export default Details