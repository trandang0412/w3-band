import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Close(props) {
    return (
        <FontAwesomeIcon
            icon={faCircleXmark}
            className="absolute top-0 right-0 m-4 cursor-pointer"
            size="2xl"
            color="red"
            onClick={props.onClick}
            style={props.style}
        />
    )
}
