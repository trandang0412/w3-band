import React, { CSSProperties } from 'react'

interface Props {
    Name: string,
    style: CSSProperties,
    onClick: () => void,
}

function Button({Name, style, onClick }: Props) {
  return (
    <button style={style} onClick={onClick}>{Name}</button>
  )
}

export default Button