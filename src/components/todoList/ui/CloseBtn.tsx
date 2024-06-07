import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { CSSProperties } from 'react'

type Props ={
    onClick: ()=>void;
    style: CSSProperties,
}

export default function Close({onClick, style}:Props) {
    return (
        <FontAwesomeIcon
            icon={faCircleXmark}
            className="absolute top-0 right-0 m-4 cursor-pointer hover:text-red-900"
            size="2xl"
            color="red"
            onClick={onClick}
            style={style}
        />
    )
}
