import React, { useState } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const Todo = () => {
    const [add, setAdd] = useState(false);

    const hanldeClick = () => {
        setAdd(true);
    };

    const handleClickOut = () =>{
        setAdd(false)
    }

    return (
        <div className="fixed flex flex-col top-0 left-0 right-0 bottom-0 justify-center items-center bg-slate-400">
            <div className="bg-slate-300 w-[70%] min-h-[500px]  flex flex-col justify-center items-center"> 
                <h1 className="text-center text-[40px] font-bold ">TODO LIST</h1>
                <div className="mt-8 w-[70%] ">
                    <div className="flex justify-between ">
                        <button
                            className="bg-blue-500 text-white w-[120px] min-h-[40px] rounded-lg"
                            onClick={hanldeClick}
                        >
                            Add Task
                        </button>
                        <select className="bg-slate-400 w-[150px] p-2 rounded-lg outline-none">
                            <option>All</option>
                            <option>Done</option>
                            <option>Do</option>
                        </select>
                    </div>
                </div>
                <div className="m-16 w-full bg-slate-200 rounded-2xl flex flex-col justify-start items-center">
                    <TodoList></TodoList>
                </div>
            </div>

            {add && 
                <AddTodo value={handleClickOut}></AddTodo>
            }
        </div>
    );
};
export default Todo;
