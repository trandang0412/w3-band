import React from 'react'

export default function Input(props) {
  return (
    <input  
        className="p-2 rounded-full w-[350px] outline-none cursor-pointer"
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}>
    </input>
  )
}
