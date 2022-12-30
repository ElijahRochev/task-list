 import React from 'react'
import TaskItem from './TaskItem'

export default function TaskList({tasks, setTasks,allTask, removeTask  }) {

return (
    <div>
        {
            tasks.map((task) =>
            <TaskItem allTask={allTask} removeTask={removeTask} task={task}/>
        )
            
        }
        
    </div>
)
}