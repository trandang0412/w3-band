import React, { useState } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const Todo = (props) => {
    //hiển thị cửa sổ xác nhận delete
    const [showPopup, setShowPopup] = useState(false);
    const [confirmIndex, setConfirmIndex] = useState(null);

    const togglePopup = (index) => {
        setConfirmIndex(index); // Lưu index cần xác nhận
        setShowPopup(false); // Hiển thị popup
    };

    const handleConfirm = () => {
        const newArray = [...todoValues];
        newArray.splice(confirmIndex, 1);
        setTodoValues(newArray);
        setShowPopup(true);
    };
    const handleCancel = () => {
        setShowPopup(false);
    };

    console.log(handleCancel);

    // bật tắt thêm task
    const [add, setAdd] = useState(false);
    const hanldeClick = () => {
        setAdd(true);
    };
    const handleClickOut = () => {
        setAdd(false);
    };

    // xử lý thêm task và xoá task
    const [todoValue, setTodoValue] = useState('');
    const [todoValues, setTodoValues] = useState([]);
    const [deadline, setDeadline] = useState('');

    const handleSubmit = () => {
        setTodoValues((prev) => [...prev, todoValue]);
        setTodoValue('');
    };

    const handleDeleteItem = (index) => {
        const newArray = [...todoValues];
        newArray.splice(index, 1);
        setTodoValues(newArray);
    };

    //modify task
    const [editText, setEditText] = useState('');
    const handleSaveEdit = (index) => {
        const updatedTodos = todoValues.map((todoValue) => {
            if (todoValue.index === index) {
                return { ...todoValue, text: editText };
            }
            return todoValue;
        });
        setTodoValues(updatedTodos);
        setTodoValue(null);
        setEditText('');
    };

    console.log(handleSaveEdit);

    //tùy chọn nội dung đã làm hay chưa làm
    const [selectedOption, setSelectedOption] = useState('option1');

    //check công việc đã hoàn thành

    return (
        <div className="fixed flex flex-col top-0 left-0 right-0 bottom-0 justify-center items-center bg-slate-200 ">
            <div className="bg-white w-[70%] min-h-[500px]  flex flex-col justify-center items-center rounded-3xl">
                <h1 className="text-center text-[40px] font-bold opacity-60 ">TODO LIST</h1>
                <div className="mt-8 w-[70%] ">
                    <div className="flex justify-between ">
                        <button
                            className="bg-blue-500 text-white w-[120px] min-h-[40px] rounded-lg"
                            onClick={hanldeClick}
                        >
                            Add Task
                        </button>
                        <select
                            className="bg-slate-300 w-[150px] p-2 rounded-lg outline-none"
                            value={selectedOption}
                            onChange={(e) => setSelectedOption(e.target.value)}
                        >
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
                    {/* all */}
                    {selectedOption === 'option1' && (
                        <div className="w-full items-center">
                            <TodoList
                                handleClickOut={handleClickOut}
                                showPopup={showPopup}
                                handleConfirm={handleConfirm}
                                handleCancel={handleCancel}
                                togglePopup={togglePopup}
                                todoValue={todoValue}
                                todoValues={todoValues}
                                handleDelete={handleDeleteItem}
                                handleSaveEdit={handleSaveEdit}
                                setEditText={setEditText}
                            ></TodoList>
                        </div>
                    )}
                    {/* Do */}
                    {selectedOption === 'option2' && (
                        <div className="w-full items-center">
                            <TodoList handleClickOut={handleClickOut}
                                showPopup={showPopup}
                                handleConfirm={handleConfirm}
                                handleCancel={handleCancel}
                                togglePopup={togglePopup}
                                todoValue={todoValue}
                                todoValues={todoValues}
                                handleDelete={handleDeleteItem}
                                handleSaveEdit={handleSaveEdit}
                                setEditText={setEditText}
                            ></TodoList>
                        </div>
                    )}
                    {/* Done */}
                    {selectedOption === 'option3' && <div className="w-full items-center"></div>}
                </div>
            </div>

            {add && (
                <AddTodo
                    handleClickOut={handleClickOut}
                    handleSubmit={handleSubmit}
                    todoValue={todoValue}
                    todoValues={todoValues}
                    setTodoValue={setTodoValue}
                ></AddTodo>
            )}
        </div>
    );
};
export default Todo;
