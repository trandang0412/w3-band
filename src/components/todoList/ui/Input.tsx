import React, { CSSProperties, ChangeEvent } from 'react';

type Props = {
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type: "input" | "date" | "time" | "checkbox" | "submit",
    style: CSSProperties,
}
export default function Input({placeholder, onChange, type, style} :Props) {
    return (
        <input
            className="p-2 m-2 rounded-full w-[70%] outline-none cursor-pointer"
            placeholder={placeholder}
            onChange={onChange}
            type={type}
            style={style}
        ></input>
    );
}
