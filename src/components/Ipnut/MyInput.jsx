import React from 'react'
import "./input.css"
export default function MyInput(props) {
  return (
    <div>
        <input name="name" {...props}/>
    </div>
    )
}
