import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './style.css'

export default function Todolist(props) {

    return (
        <div>
            {/* {Array.isArray(items) ? (
                allTodos.map((item, index) => (
                    <div key={index}>{item.todo}</div>
                ))
            ) : (
                <div>Không có dữ liệu để hiển thị.</div>
            )} */}
            {/* {allTodos.map((item,index)=>(
                <li key={index}> {item.todo} </li>
            ))} */}

            <li className="flex bg-white h-[70px] rounded-xl m-4 items-center justify-between">
                <div className="flex">
                    <input onChange={props.onChangeComplete} onClick={props.onClickComplete} type="checkbox" className="w-[25px] h-[25px] m-4"></input>
                    <div className="">
                        <h2 className={props.className} >{props.Name}</h2>
                        <div className="flex">
                            <p>{props.Time} ,</p>
                            <p className='ml-1'>{props.Date}</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex m-4">
                        <div>
                            <FontAwesomeIcon
                                className="bg-slate-200 w-[25px] h-[25px] p-2 mr-4 rounded-md cursor-pointer"
                                icon={faTrash}
                                onClick={props.onClickDelete}
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
