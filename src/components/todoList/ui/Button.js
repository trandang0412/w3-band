import React from 'react'

export default function Button(props) {
  return (
    <button onClick={props.onClick} type={props.type} className=" bg-blue-700 rounded-full w-[100px] h-[50px] m-2 cursor-pointer">{props.Name}</button>
  )
}
