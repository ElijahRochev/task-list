import React, { useState } from 'react'

export default function TaskItem({allTask,task,removeTask }) {
  /*   
  const [status, setStatus] = useState(task.status);
 */
  function handleChange() {
    task.status = !task.status
    
	}
/*   function taskFilter(tasks, id) {
    return [...tasks].filter(task => task.id == id).map(task => task.status = !task.status)
  }
  function handleChange(id) {
    setFilteredTasks(taskFilter(filteredTasks, id))
    setTasks(taskFilter(tasks, id))
	} 
 */

  return (
    <div className={`task ${task.status ? 'doneTask' : ' '}`}>

        <input type="checkbox"  checked={task.status} onClick={() => { allTask(); handleChange()}  } />
        
        <div>{task.title}</div>

        <button onClick={() => {removeTask(task.id)}} className='remove'>remove</button>
        
    </div>
  )
}
