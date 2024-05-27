import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Todolist(props, { allTodos }) {
    Todolist.propTypes = {
        allTodos: PropTypes.array,
    };

    Todolist.defaultProps = {
        allTodos: [],
    };

    console.log(allTodos);
    return (
        <div>
            {/* {allTodos.map((item,index)=>(
                <li key={index}></li>
            ))} */}
            <li className="flex bg-white h-[70px] rounded-xl m-4 items-center justify-between">
                <div className="flex">
                    <input type="checkbox" className="w-[25px] h-[25px] m-4"></input>
                    <div className="">
                        <h2 className="text-[20px]">{props.Name}</h2>
                        <div className="flex">
                            <p>{props.Time},</p>
                            <p>{props.Date}</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex m-4">
                        <div>
                            <FontAwesomeIcon
                                className="bg-slate-200 w-[25px] h-[25px] p-2 mr-4 rounded-md cursor-pointer"
                                icon={faTrash}
                            />
                        </div>
                        <div>
                            <FontAwesomeIcon
                                className="bg-slate-200 w-[25px] h-[25px] p-2 mr-4 rounded-md cursor-pointer"
                                icon={faPen}
                            />
                        </div>
                    </div>
                    {/* (
                    <div className="">
                        <button className="text-white bg-blue-500 w-[90px] h-[25px] m-4 rounded-2xl">Confirm</button>
                        <button className="text-white bg-red-400 w-[60px] h-[25px] m-4 rounded-2xl">Cancle</button>
                    </div>
                    ) */}
                </div>
            </li>

            <div>
                {/* <Modify
                   
                /> */}
            </div>
        </div>
    );
}
