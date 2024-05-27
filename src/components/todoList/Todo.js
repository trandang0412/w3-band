import React, { useState } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Button from './ui/Button';

const Todo = (props) => {
    //bật tắt add new list
    const [isAdd, setIsAdd] = useState(false);

    const handleCickOpen = () => {
        setIsAdd(true);
    };

    const handleClose = () => {
        setIsAdd(false);
    };

    //xử lý add todo
    const [allTodos, setAllTodo] = useState([]);

    const [newTodo, setNewTodo] = useState('');
    const [newTime, setNewTime] = useState('');
    const [newDate, setNewDate] = useState('');

    const handleAddTodo = () => {
        let newTodoItem = {
            todo: newTodo,
            time: newTime,
            date: newDate,
        };

        let updateTodoArr = [...allTodos];
        updateTodoArr.push(newTodoItem);
        setAllTodo(updateTodoArr);
        localStorage.setItem('todolist', JSON.stringify(updateTodoArr));
    };

    return (
        <div className="fixed flex flex-col top-0 left-0 right-0 bottom-0 justify-center items-center bg-slate-200 ">
            <div className="bg-white w-[70%] min-h-[500px]  flex flex-col justify-center items-center rounded-3xl">
                <h1 className="text-center text-[40px] font-bold opacity-60 ">TODO LIST</h1>
                <div className="mt-8 w-[70%] ">
                    <div className="flex justify-between ">
                        <button
                            onClick={handleCickOpen}
                            className="bg-blue-700 rounded-full w-[20%] h-[50px] m-6 cursor-pointer"
                        >
                            Add task
                        </button>
                        <select className="bg-slate-300 w-[150px] h-[50px] p-2 m-6 rounded-lg outline-none">
                            <option className="" value="option1">
                                All
                            </option>
                            <option className="" value="option2">
                                Do
                            </option>
                            <option className="" value="option3">
                                Done
                            </option>
                        </select>
                    </div>
                </div>

                <div className="m-8  bg-slate-200 rounded-2xl flex flex-col w-[70%] justify-start items-center">
                    <div className="w-[99%]">
                        <TodoList></TodoList>
                    </div>
                </div>
            </div>

            {isAdd && (
                <AddTodo
                    allTodos={allTodos}
                    newTodo={newTodo}
                    newTime={newTime}
                    newDate={newDate}
                    setNewTodo={setNewTodo}
                    setNewTime={setNewTime}
                    setNewDate={setNewDate}
                    handleAddTodo={handleAddTodo}
                    handleClose={handleClose}
                ></AddTodo>
            )}
        </div>
    );
};
export default Todo;
