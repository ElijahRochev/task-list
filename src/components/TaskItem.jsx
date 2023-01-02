import React, { useState } from 'react'

export default function TaskItem({allTask,task,removeTask }) {
  const [isShown, setIsShown] = useState(false)

  function handleChange() {
    task.status = !task.status
    
	}

  return (
    <div className={`task`}
    onMouseEnter={() => setIsShown(true)}
    onMouseLeave={() => setIsShown(false)}
    >
      <div className='checkboxTitle'>
        <label for="isDone" className='isDone'>
        <input type="checkbox" name="isDone" className='checkbox' checked={task.status} onClick={() => { allTask(); handleChange()}  } />
        <span className="checkedSpan"></span>
        </label>
        <div className={`title ${task.status ? 'doneTask' : ' '}`}>{task.title}</div>
      </div>
        <button onClick={() => {removeTask(task.id)}} className={`remove ${isShown ? "show" : "hide"}`}>×</button>
        
    </div>
  )
}
