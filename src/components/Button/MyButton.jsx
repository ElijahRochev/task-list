import React from 'react'

export default function MyButton(props) {
  return (
    <button {...props} >{props.title}</button>
  )
}
