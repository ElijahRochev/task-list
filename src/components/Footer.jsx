import React from 'react'
import MyButton from './Button/MyButton'
export default function Footer({props, tasks}) {

  return (
    <div>
        <div>{tasks.length} Items Left</div>
        <MyButton title='All'/>
        <MyButton onClick={() => {tasks.activeTask(props.task)}} title='Active'  />
        <MyButton title='Completed'/>
        <MyButton/>

    </div>
  )
}
