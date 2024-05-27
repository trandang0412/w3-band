import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import PropTypes from 'prop-types'

export default function Todolist({props, todoValues, todoValue}) {

    // console.log(setArray)
    Todolist.propTypes = {
        todoValues: PropTypes.array,
    }
    
    Todolist.defaultProps = {
        todoValues: []
    }

    console.log(todoValues)

    


    return (

        <div>
            {todoValues.map((todoValue, index) =>(
                <li className="flex bg-white w-[800px] h-[70px] rounded-xl m-4 items-center justify-between">
                    <div className='flex'>
                        <input type="checkbox" className='w-[30px] h-[30px] m-2'></input>
                        <p>{todoValue}</p>
                    </div>
                
                    <div className='flex m-4'>
                        <div><FontAwesomeIcon className='bg-slate-200 w-[25px] h-[25px] p-2 mr-4 rounded-md cursor-pointer' icon={faTrash} /></div>
                        <div><FontAwesomeIcon className='bg-slate-200 w-[25px] h-[25px] p-2 mr-4 rounded-md cursor-pointer' icon={faPen} /></div>
                    </div>
                </li>
            ))}
        </div>
    );
}
