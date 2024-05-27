import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Todolist from './TodoList';
import Button from './ui/Button';
import Input from './ui/Input';

export default function AddTodo({props, todoValue, todoValues, setTodoValue, handleSubmit, handleClickOut}) {
    const doubleHandle = () =>{
        handleSubmit();
        handleClickOut();
    };

    

    return (
        <div className="flex top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.6)] fixed items-center justify-center">
            <div className="bg-blue-200 w-[400px] h-[200px] flex flex-col text-center justify-center items-center ">
 
                <Input 
                    placeholder="Input to do"
                    onChange={e => setTodoValue(e.target.value)}
                    value={todoValue} 
                />
                <div className='flex justify-between items-center w-[300px]'>
                    <Button onClick={doubleHandle} type="submit" Name="Submit"></Button>
                    <FontAwesomeIcon onClick={handleClickOut} icon={faCircleXmark} className='m-4 cursor-pointer' size='2xl'/>
                </div>
            </div>
            {/* <ul className='flex flex-col'>
                {todoValues.map((todoValue, index) =>(
                        <li key={index} className=''> <Todolist>{todoValue}</Todolist></li>
                ))
                }
            </ul> */}
        </div>
    );
}
