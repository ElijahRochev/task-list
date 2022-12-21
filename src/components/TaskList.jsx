 import React from 'react'
import TaskItem from './TaskItem'

export default function TaskList({tasks, remove}) {

return (
    <div>
        {
            tasks.map((task) =>
                <TaskItem remove={remove} task={task} title={task.title}/>
            )
        }
    </div>
)
}
