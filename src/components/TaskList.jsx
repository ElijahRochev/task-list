 import React from 'react'
import TaskItem from './TaskItem'

export default function TaskList({tasks, remove, change, checked}) {
return (
    <div>
        {
            
            tasks.map((task, index) =>
                <TaskItem checked={checked} change={change} remove={remove} task={task} title={task.title} key={index}/>
            )
        }
        
    </div>
)
}