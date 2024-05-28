import React, { useState } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import PropTypes from 'prop-types'
import Modify from './Modify';
import Header from './ui/Header';
import Button from './ui/Button';
import Selection from './ui/Selection';
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';

const Todo = (props) => {

    const [allTodos, setAllTodos] = useState([]);
    const [notyetTodos, setNotyetTodos] = useState([])
    const [completeTodos, setCompleteTodos] = useState([])
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [deleteIndex, setDeleteIndex] = useState(null); //uuid
    const [currentEdit, setCurrentEdit] = useState("")
    const [selectedOption, setSelectedOption] = useState('option1');



    console.log(allTodos)

    //bật tắt add new list
    const [isAdd, setIsAdd] = useState(false);

    const handleCickOpen = () => {
        setIsAdd(true);
    };

    const handleClose = () => {
        setIsAdd(false);
    };

    //delete todo
    // const hadleDelteTodo = (index) => {
    //     // let reducedTodo = [...allTodos];
    //     // reducedTodo.splice(index);
    //     // localStorage.setItem('todoList',JSON.stringify(reducedTodo))
    //     // setAllTodos(reducedTodo);
    //     const newArray = [...allTodos];
    //     newArray.splice(index, 1);
    //     setAllTodos(newArray);
    // }

    const handleDeleteItem = (index) => {
        // gán index khi ấn vào ô xóa
        setDeleteIndex(index);
        // hiện confirm
        setShowConfirmation(true);
    };

    const handleConfirmDelete = () => {
        const newArray = [...allTodos];
        newArray.splice(deleteIndex, 1);
        setAllTodos(newArray);
        // thực hiện xóa và confirm lại form mới
        setDeleteIndex(null);
        setShowConfirmation(false);

        const newArrayComplete = [...completeTodos];
        newArrayComplete.splice(deleteIndex, 1)
        setCompleteTodos(newArrayComplete);

        setDeleteIndex(null);
        setShowConfirmation(false);
    };

    const handleCancelDelete = () => {
        // thực hiện xóa và confirm lại form mới
        setDeleteIndex(null);
        setShowConfirmation(false);
    };


    //complete
    // const hanldeCompleteChange = (index) =>{
    //     setCompleteTodos(index)
    //     setCompleteTodos(!completeTodos);
    // }


    //complete
    const hanldeComplete = (index) => {
        const completeItems = allTodos[index];
        const updateTodoArr = [...completeTodos, completeItems]
        setCompleteTodos(updateTodoArr)

        const updatedAllTodos = allTodos.filter((item, i) => i !== index);

        const updatedCompleteTodos = [...completeTodos, completeItems];

        // Cập nhật state cho cả hai mảng
        setAllTodos(updatedAllTodos);
        setCompleteTodos(updatedCompleteTodos);
    }



    return (
        <div className="fixed flex flex-col top-0 left-0 right-0 bottom-0 justify-center items-center bg-slate-200 ">
            <div className="bg-white w-[70%] min-h-[500px]  flex flex-col justify-center items-center rounded-3xl">
                <Header Name='Todo List'></Header>
                <div className="mt-8 w-[70%] ">
                    <div className="flex justify-between ">
                        <Button
                            onClick={handleCickOpen}
                            Name='Add Todo'
                            style={{width: '140px', }}
                        />
                        {/* <select
                            className="bg-slate-300 w-[150px] h-[50px] p-2 m-6 rounded-lg outline-none"
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
                        </select> */}

                        <Selection value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                            
                        </Selection>
                    </div>
                </div>

                <div className="m-8  bg-slate-200 rounded-2xl flex flex-col w-[70%] justify-start items-center">
                    {showConfirmation && (
                        <div className="bg-white mt-2 p-2 rounded-2xl">
                            <p className='font-bold'>Are you sure you want to delete this item?</p>

                            <div className='flex justify-between'>
                                <button className='w-[70px] h-[25px] bg-blue-600 rounded-3xl text-white' onClick={handleConfirmDelete}>Yes</button>
                                <button className='w-[70px] h-[25px] bg-red-600 rounded-3xl text-white' onClick={handleCancelDelete}>Cancle</button>
                            </div>
                        </div>
                    )}
                    <div className="w-[99%]">
                        {/* <TodoList allTodos={allTodos}></TodoList> */}
                        <div className="">
                            {selectedOption === 'option1' && allTodos.map((item, index) => {
                                if (currentEdit === index) {
                                    <Modify
                                        onChangeTodo
                                    >
                                    </Modify>
                                } else {
                                    return (
                                        <li key={index} className='list-none'>
                                            <TodoList
                                                Name={item.todo}
                                                Time={item.time} Date={item.date}
                                                onClickDelete={() => handleDeleteItem(index)}
                                                onClickComplete={() => hanldeComplete(index)}
                                            // onChangeComplete={() => hanldeCompleteChange(index)}
                                            // className={completeTodos ? 'listItem completed' : 'listItem'}
                                            >
                                            </TodoList>

                                        </li>
                                    )
                                }
                            })}
                            {selectedOption === 'option2' && allTodos.map((item, index) => (
                                <li key={index} className='list-none'>
                                    <TodoList
                                        Name={item.todo}
                                        Time={item.time} Date={item.date}
                                        onClickDelete={() => handleDeleteItem(index)}
                                        onClickComplete={() => hanldeComplete(index)}
                                    // onChangeComplete={() => hanldeCompleteChange(index)}
                                    // className={completeTodos ? 'listItem completed' : 'listItem'}
                                    >
                                    </TodoList>

                                </li>
                            ))}
                            {selectedOption === 'option3' && completeTodos.map((item, index) => (
                                <li key={index} className='list-none'>
                                    <TodoList
                                        Name={item.todo}
                                        Time={item.time} Date={item.date}
                                        onClickDelete={() => handleDeleteItem(index)}
                                        onChangeComplete={() => hanldeComplete(index)}
                                    // onChangeComplete={() => hanldeCompleteChange(index)}
                                    // className={completeTodos ? 'listItem completed' : 'listItem'}
                                    >
                                    </TodoList>

                                </li>
                            ))}
                            {/* {selectedOption==='option3' && completeTodos.map((item, index) => (
                                <li key={index} className='list-none'>
                                    <TodoList
                                        Name={item.todo}
                                        Time={item.time} Date={item.date}
                                        onClickDelete={() => handleDeleteItem(index)}
                                        onClickComplete={() => hanldeComplete(index)}
                                    // onChangeComplete={() => hanldeCompleteChange(index)}
                                    // className={completeTodos ? 'listItem completed' : 'listItem'}
                                    >
                                    </TodoList>

                                </li>
                            ))} */}
                        </div>
                    </div>
                </div>
            </div>

            {
                isAdd && (
                    <AddTodo
                        handleClose={handleClose}
                        allTodos={allTodos}
                        setAllTodos={setAllTodos}
                    ></AddTodo>
                )
            }

        </div >
    );
};
export default Todo;



{/* {
                isAdd && (
                    <AddTodo
                        handleClose={handleClose}
                        allTodos={allTodos}
                        setAllTodos={setAllTodos}
                    ></AddTodo>
                )
            } */}