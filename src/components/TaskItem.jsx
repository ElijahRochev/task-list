import React from 'react'
import "../style/taskItem.css"

export default function TaskItem(props) {
    
  return (
    <div className='task'>

        <input type="checkbox" checked={props.checked} onChange={() => props.change(props.task)}/>

        <div>{props.title}</div>

        <button onClick={() => props.remove(props.task)} className='remove'>remove</button>
        
    </div>
  )
}
