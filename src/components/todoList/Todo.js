import React, { useState } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const Todo = (props) => {

    // bật tắt thêm task
    const [add, setAdd] = useState(false);
    const hanldeClick = () => {
        setAdd(true);
    };
    const handleClickOut = () =>{
        setAdd(false)
    }

    // xử lý thêm task và xoá task
    const [todoValue, setTodoValue] = useState('');
    const [todoValues, setTodoValues] = useState([]);

    const handleSubmit = () => {
        setTodoValues(prev => [...prev, todoValue]);
        setTodoValue('')
    }

    const handleDeleteItem = (index) => {
        const newArray = [...todoValues];
        newArray.splice(index, 1);
        setTodoValues(newArray);
      };



    //modify task
   

    //tùy chọn nội dung đã làm hay chưa làm
    const [selectedOption, setSelectedOption] = useState('option1');


    //check công việc đã hoàn thành
    const [isCheck, setIsCheck] = useState(false)


    return (
        <div className="fixed flex flex-col top-0 left-0 right-0 bottom-0 justify-center items-center bg-slate-400">
            <div className="bg-slate-300 w-[70%] min-h-[500px]  flex flex-col justify-center items-center"> 
                <h1 className="text-center text-[40px] font-bold opacity-60 ">TODO LIST</h1>
                <div className="mt-8 w-[70%] ">
                    <div className="flex justify-between ">
                        <button
                            className="bg-blue-500 text-white w-[120px] min-h-[40px] rounded-lg"
                            onClick={hanldeClick}
                        >
                            Add Task
                        </button>
                        <select className="bg-slate-400 w-[150px] p-2 rounded-lg outline-none" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                            <option value="option1">All</option>
                            <option value="option2">Do</option>
                            <option value="option3">Done</option>
                        </select>
                    </div>
                </div>
                <div className="m-16 w-full bg-slate-200 rounded-2xl flex flex-col justify-start items-center">

                {/* all */}
                {selectedOption === 'option1' && <div><TodoList todoValue={todoValue} todoValues={todoValues} handleDelete={handleDeleteItem}  ></TodoList></div>}
                {/* Do */}
                {selectedOption === 'option2' && <div><TodoList todoValue={todoValue} todoValues={todoValues}></TodoList></div>}
                {/* Done */}
                {selectedOption === 'option3' && <div></div>}
                    
                </div>
            </div>

            {add && 
            <AddTodo handleClickOut={handleClickOut} handleSubmit={handleSubmit} todoValue={todoValue} todoValues={todoValues} setTodoValue={setTodoValue}></AddTodo>
            }
        </div>
    );
};
export default Todo;
