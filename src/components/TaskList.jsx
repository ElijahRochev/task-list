 import React from 'react'
import TaskItem from './TaskItem'

export default function TaskList({tasks}) {

return (
    <div>
        {
            tasks.map((task) =>
                <TaskItem task={task} title={task.title}/>
            )
        }
    </div>
)
}
