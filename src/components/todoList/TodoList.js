import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import PropTypes from 'prop-types'
import Modify from './Modify';

export default function Todolist({props, todoValues, todoValue, handleDelete}) {

    // console.log(setArray)
    Todolist.propTypes = {
        todoValues: PropTypes.array,
    }
    
    Todolist.defaultProps = {
        todoValues: []
    }

    

    const [add, setAdd] = useState(false);
    const hanldeClick = () => {
        setAdd(true);
    };
    const handleClickOut = () =>{
        setAdd(false)
    }

    return (

        <div>
            {todoValues.map((todoValue, index) =>(
                <li key={index} className="flex bg-white w-[800px] h-[70px] rounded-xl m-4 items-center justify-between">
                    <div className='flex'>
                        <input type="checkbox" className='w-[30px] h-[30px] m-2'></input>
                        <p>{todoValue}</p>
                    </div>
                
                    <div className='flex m-4'>
                        <div onClick={handleDelete}><FontAwesomeIcon className='bg-slate-200 w-[25px] h-[25px] p-2 mr-4 rounded-md cursor-pointer' icon={faTrash} /></div>
                        <div><FontAwesomeIcon onClick={hanldeClick} className='bg-slate-200 w-[25px] h-[25px] p-2 mr-4 rounded-md cursor-pointer' icon={faPen} /></div>
                    </div>
                </li>
            ))}

            {add && 
               ( <div>
                    <Modify handleClickOut={handleClickOut} />  
                </div>)
            }
        </div>
    );
}
