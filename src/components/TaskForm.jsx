import React, { useState } from 'react'
import MyInput from './Ipnut/MyInput'

export default function TaskForm({create}) {
  const [title, setTitle] = useState([])
  let id = Math.random() * (100000 - 1) + 1
  let status = false
  const addNewTask = (e) => {
    e.preventDefault()
    const newTask = {
      ...title,
      id,
      status
    }
    create(newTask)
    setTitle({title: " "})
  }

  return (
    <form onSubmit={addNewTask}>
          <MyInput 
            value={title.title}
            onChange={e => setTitle({...title,  title: e.target.value})}
            type="text" 
            placeholder="Name"
            
          />
        </form>
  )
}
