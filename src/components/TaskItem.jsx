import React, { useState } from 'react'
import "../style/taskItem.css"

export default function TaskItem({setTasks, statusAllTask, change, task,tasks, title, }) {
    
  const [status, setStatus] = useState(false);

  function handleChange() {
    if (task.status) {
      task.status = false
    }else{
      task.status = true
    }
		setStatus(!status);
	}
  function removeTask(id) {
    let newTaskList = [...tasks].filter(task => task.id !== id)
    setTasks(newTaskList)
  }
  
  return (
    <div className={`task ${status ? 'doneTask' : ' '}`}>

        <input type="checkbox" status={status} onChange={() => {handleChange()}  }/>
        
        <div>{title}</div>

        <button onClick={() => {removeTask(task.id)}} className='remove'>remove</button>
        
    </div>
  )
}
