import React from 'react'
import MyButton from './Button/MyButton'
export default function Footer({activeTask, tasks}) {

  return (
    <div>
        <div>{tasks.length} Items Left</div>
        <MyButton title='All'/>
        <MyButton onClick={() => activeTask()} title='Active'  />
        <MyButton title='Completed'/>
        <MyButton/>

    </div>
  )
}
