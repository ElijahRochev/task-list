import React, { useState } from 'react'
import MyInput from './Ipnut/MyInput'

export default function TaskForm({create}) {
  const [title, setTitle] = useState([])

  const addNewTask = (e) => {
    e.preventDefault()
    const newTask = {
      ...title
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
