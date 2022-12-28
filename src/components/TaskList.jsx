 import React from 'react'
import TaskItem from './TaskItem'

export default function TaskList({tasks, change, statusAllTask, setTasks}) {
return (
    <div>
        {
            
            tasks.map((task) =>
                <TaskItem setTasks={setTasks} tasks={tasks} statusAllTask={statusAllTask} change={change} task={task} title={task.title} key={task.id}/>
            )
            
        }
        
    </div>
)
}