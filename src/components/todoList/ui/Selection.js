import React from 'react'

export default function Selection(props) {
    return (
        <select
            className="bg-slate-300 w-[150px] h-[50px] p-2 m-6 rounded-lg outline-none"
            value={props.value}
            onChange={props.onChange}
            style={props.style}
        >
            <option className="" value={props.ValueOption}>
                {props.NameOption}
            </option>
        </select>
    )
}
