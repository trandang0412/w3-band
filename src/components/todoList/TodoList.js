import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modify from './Modify';
import Button from './ui/Button';

export default function Todolist({
    props,
    todoValues,
    todoValue,
    handleDelete,
    handleSaveEdit,
    setEditText,
    showPopup,
    handleConfirm,
    handleCancel,
    isConfirmed,
    togglePopup,
    toogleComplete,
}) {
    // console.log(setArray)
    Todolist.propTypes = {
        todoValues: PropTypes.array,
    };

    Todolist.defaultProps = {
        todoValues: [],
    };

    const [add, setAdd] = useState(false);
    const hanldeClick = () => {
        setAdd(true);
    };
    const handleClickOut = () => {
        setAdd(false);
    };

    return (
        <div>
            {todoValues.map((todoValue, index) => (
                <li key={index} className="flex bg-white w-[95%] h-[70px] rounded-xl m-4 items-center justify-between">
                    <div className="flex">
                        <input
                            onClick={() => toogleComplete(index)}
                            type="checkbox"
                            className="w-[30px] h-[30px] m-2"
                        ></input>
                        <p className={'${task.completed ? "conpleted" : ""}'}>{todoValue}</p>
                    </div>

                    <div>
                        {showPopup && (
                            <div className="flex m-4">
                                <div onClick={() => togglePopup(index)}>
                                    <FontAwesomeIcon
                                        className="bg-slate-200 w-[25px] h-[25px] p-2 mr-4 rounded-md cursor-pointer"
                                        icon={faTrash}
                                    />
                                </div>
                                <div>
                                    <FontAwesomeIcon
                                        onClick={hanldeClick}
                                        className="bg-slate-200 w-[25px] h-[25px] p-2 mr-4 rounded-md cursor-pointer"
                                        icon={faPen}
                                    />
                                </div>
                            </div>
                        )}
                        {!showPopup && (
                            <div className="">
                                <button
                                    className="text-white bg-blue-500 w-[90px] h-[25px] m-4 rounded-2xl"
                                    onClick={handleConfirm}
                                >
                                    Confirm
                                </button>
                                <button
                                    className="text-white bg-red-400 w-[60px] h-[25px] m-4 rounded-2xl"
                                    onClick={isConfirmed}
                                >
                                    Cancle
                                </button>
                            </div>
                        )}
                    </div>
                </li>
            ))}

            {add && (
                <div>
                    <Modify
                        handleClickOut={handleClickOut}
                        handleSaveEditParent={handleSaveEdit}
                        setEditTextParent={setEditText}
                    />
                </div>
            )}
        </div>
    );
}
