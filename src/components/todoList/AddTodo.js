import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Todolist from './TodoList';

export default function AddTodo(props) {
    const [todoValue, setTodoValue] = useState('');
    const [todoValues, setTodoValues] = useState([]);

    const handleSubmit = () => {
        setTodoValues(prev => [...prev, todoValue]);
    }

    console.log(todoValues);

    return (
        <div className="flex top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.6)] fixed items-center justify-center">
            <div className="bg-blue-200 w-[400px] h-[200px] flex flex-col text-center justify-center items-center ">
                
                <input
                    className="p-2 rounded-full w-[350px] outline-none cursor-pointer"
                    placeholder="Input to do"
                    onChange={e => setTodoValue(e.target.value)}
                    value={todoValue}
                ></input>
                <div className='flex justify-between items-center w-[300px]'>
                    <button onClick={handleSubmit} type="submit" className=" bg-blue-700 rounded-full w-[100px] h-[50px] m-2 cursor-pointer">
                        Submit
                    </button>
                    <FontAwesomeIcon icon={faCircleXmark} className='m-4 cursor-pointer' size='2xl'/>
                </div>
            </div>
            <Todolist></Todolist>
        </div>
    );
}
