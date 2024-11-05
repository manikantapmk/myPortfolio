import React from 'react'
import "./ToggleButton.scss"

const ToggleButton = ({setOpen}) => {
  return (
    <button onClick={()=>setOpen(prev=>!prev)}>
        Button
    </button>
  )
}

export default ToggleButton