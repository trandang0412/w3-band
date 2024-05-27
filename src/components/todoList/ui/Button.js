import React from 'react';

export default function Button(props) {
    return (
        <button
            onClick={props.onClick}
            type={props.type}
            className=" bg-blue-700 rounded-full w-[40%] h-[50px] m-6 cursor-pointer"
        >
            {props.Name}
        </button>
    );
}
