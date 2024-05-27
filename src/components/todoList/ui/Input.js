import React from 'react';

export default function Input(props) {
    return (
        <input
            className="p-2 m-2 rounded-full w-[70%] outline-none cursor-pointer"
            placeholder={props.placeholder}
            onChange={props.onChange}
            value={props.value}
            type={props.type}
            width={props.with}
        ></input>
    );
}
