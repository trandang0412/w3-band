import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Todolist from './TodoList';
import Button from './ui/Button';
import Input from './ui/Input';

export default function AddTodo({
    props,
    newTodo,
    newTime,
    newDate,
    allTodos,
    handleClose,
    setNewTodo,
    setNewTime,
    setNewDate,
    handleAddTodo,
}) {
    const doubleHandle = () => {
        handleClose();
        handleAddTodo();
    };

    return (
        <div className="flex top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.6)] fixed items-center justify-center">
            <div className="bg-blue-200 w-[30%] h-[50%] flex flex-col text-center justify-center items-center rounded-3xl ">
                <div className="w-full relative h-[120px]">
                    <FontAwesomeIcon
                        icon={faCircleXmark}
                        className="absolute top-0 right-0 m-4 cursor-pointer"
                        size="2xl"
                        color="red"
                        onClick={handleClose}
                    />
                </div>

                <div className="">
                    <Input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="Input to do" />
                    <Input
                        value={newDate}
                        onChange={(e) => setNewDate(e.target.value)}
                        placeholder="Deadline"
                        type="time"
                    />
                    <Input
                        value={newTime}
                        onChange={(e) => setNewTime(e.target.value)}
                        placeholder="Deadline"
                        type="date"
                    />
                </div>
                <Button onClick={handleAddTodo} type="submit" Name="Submit"></Button>
            </div>

            <div className="">
                {allTodos.map((item, index) => (
                    <li key={index}>
                        <Todolist Name={item.todo} Time={item.time} Date={item.date}></Todolist>
                    </li>
                ))}
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
