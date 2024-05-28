import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

import CloseBtn from './ui/CloseBtn'
import Button from './ui/Button';
import Input from './ui/Input';
import Todo from './Todo';

export default function AddTodo({
    props,
    handleClose,
    allTodos, 
    setAllTodos
}) {
    //xử lý add todo

    const [newTodo, setNewTodo] = useState('');
    const [newTime, setNewTime] = useState('');
    const [newDate, setNewDate] = useState('');
    // const handleAddTodo = () => {
    //     let newTodoItem = {
    //         todo: newTodo,
    //         time: newTime,
    //         date: newDate,
    //     };

    //     let updateTodoArr = [...allTodos];
    //     updateTodoArr.push(newTodoItem);
    //     setAllTodos(updateTodoArr);
    //     localStorage.setItem('todolist', JSON.stringify(updateTodoArr));
    // };
    const handleAddTodo = () => {
        let newTodoItem = {
            todo: newTodo,
            time: newTime,
            date: newDate,
        };

        let updateTodoArr = [...allTodos];
        updateTodoArr.push(newTodoItem);
        setAllTodos(updateTodoArr);
        localStorage.setItem('todolist', JSON.stringify(updateTodoArr));
    };


    const doubleHandle = () => {
        handleClose();
        handleAddTodo();
    };


    return (
        <div className="flex top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.6)] fixed items-center justify-center">
            <div className="bg-blue-200 w-[30%] h-[40%] flex flex-col text-center justify-center items-center rounded-3xl ">
                <div className="w-full block relative h-[64px]">
                    <CloseBtn onClick={handleClose}/>
                </div>

                <div className="">
                    <Input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="Input to do" />
                    <Input
                        value={newTime} onChange={(e) => setNewTime(e.target.value)} placeholder="Deadline" type="time"
                    />
                    <Input
                        value={newDate} onChange={(e) => setNewDate(e.target.value)} placeholder="Deadline" type="date"
                    />
                </div>
                <Button onClick={doubleHandle} type="submit" Name="Submit"></Button>
            </div>


            <div className='hidden'>
                <Todo allTodos={allTodos}></Todo>
            </div>
            {/* <div className="">
                {allTodos.map((item, index) => (
                    <li key={index}>
                        <Todolist Name={item.todo} Time={item.time} Date={item.date}></Todolist>
                    </li>
                ))}
            </div> */}
            {/* <ul className='flex flex-col'>
                {todoValues.map((todoValue, index) =>(
                        <li key={index} className=''> <Todolist>{todoValue}</Todolist></li>
                ))
                }
            </ul> */}
        </div>
    );
}
