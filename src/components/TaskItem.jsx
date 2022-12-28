import React, { useState } from 'react'
import "../style/taskItem.css"

export default function TaskItem(props) {
    
  const [checked, setChecked] = useState(false);

  function handleChange() {
		setChecked(!checked);
	}
  
  return (
    <div className={`task ${checked ? 'doneTask' : ''}`}>

        <input type="checkbox" checked={checked} onChange={() => {handleChange(props.task)}  }/>
        
        <div>{props.title}</div>

        <button onClick={() => props.remove(props.task)} className='remove'>remove</button>
        
    </div>
  )
}
