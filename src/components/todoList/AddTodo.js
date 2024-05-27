import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Todolist from './TodoList';
import Button from './ui/Button';
import Input from './ui/Input';

export default function AddTodo({ props, todoValue, todoValues, setTodoValue, handleSubmit, handleClickOut }) {
    const doubleHandle = () => {
        handleSubmit();
        handleClickOut();
    };

    return (
        <div className="flex top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.6)] fixed items-center justify-center">
            <div className="bg-blue-200 w-[30%] h-[40%] flex flex-col text-center justify-center items-center rounded-3xl ">
                <div className="w-full relative h-[120px]">
                    <FontAwesomeIcon
                        onClick={handleClickOut}
                        icon={faCircleXmark}
                        className="absolute top-0 right-0 m-4 cursor-pointer"
                        size="2xl"
                        color="red"
                    />
                </div>

                <div className="">
                    <Input placeholder="Input to do" onChange={(e) => setTodoValue(e.target.value)} value={todoValue} />
                    <Input placeholder="Deadline" type="time" />
                    <Input placeholder="Deadline" type="date" />
                </div>
                <Button onClick={doubleHandle} type="submit" Name="Submit"></Button>
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
