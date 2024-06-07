import React, { CSSProperties } from 'react';

type Props = {
    onClick: () => void,
    type: "button" | "submit" | "reset",
    style: CSSProperties,
    Name: string,
}

export default function Button({ onClick, type, style, Name }:Props) {
    return (
        <button
            onClick={onClick}
            type={type}
            className={'bg-blue-700 text-white rounded-full w-[40%] h-[50px] m-6 cursor-pointer'}
            style={style}
        >
            {Name}
        </button>
    );
}
