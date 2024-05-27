import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function Todolist(props) {
    return (
        <div className="flex bg-white w-[80%] h-[70px] rounded-xl m-4 items-center justify-between">
            <div>
                <input type="checkbox" className='w-[30px] h-[30px] m-2'></input>
                <div>
                    <p>{props.header}</p>
                </div>
            </div>
            <div className='flex m-4'>
                <div><FontAwesomeIcon className='bg-slate-200 w-[25px] h-[25px] p-2 mr-4 rounded-md cursor-pointer' icon={faTrash} /></div>
                <div><FontAwesomeIcon className='bg-slate-200 w-[25px] h-[25px] p-2 mr-4 rounded-md cursor-pointer' icon={faPen} /></div>
            </div>
        </div>
    );
}
