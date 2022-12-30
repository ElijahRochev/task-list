import React from 'react'
import "./input.css"
export default function MyInput(props) {
  return (
    <div className='myInputDiv'>
        <input className='myInput' name="name" {...props}/>
    </div>
    )
}
