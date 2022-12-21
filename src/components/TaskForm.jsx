import React from 'react'
import MyInput from './Ipnut/MyInput'

export default function TaskForm(e) {
/*   const addTask = (e) => {
    e.preventDefault()

  }
  const inputRef = useRef(); */
  return (
    <form>
        <MyInput 
        type="text" 
        placeholder="Name"
        />
    </form>
  )
}
