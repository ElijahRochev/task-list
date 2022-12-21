import React from 'react'
import "../style/taskItem.css"

export default function TaskItem(props) {
    
  return (
    <div className='task'>

        <input type="checkbox"/>

        <div>{props.title}</div>

        <button onClick={() => props.remove(props.task)} className='remove'>remove</button>
        
    </div>
  )
}
