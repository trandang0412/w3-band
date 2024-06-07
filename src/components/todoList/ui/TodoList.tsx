import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

type Props = {
    todo: string;
    time: string;
    date: string;
    todoId: string;
    isCompleted: boolean;
    isEditing: boolean
    deleteId: string;
    editId: string;
}

export default function TodoList({ todo, time, date, isCompleted, todoId, deleteId, editId }: Props) {

    const {handleCompleted, handleDelete, handleEditTodo} = useContext(TodoContext);

   
    
    return (
        <div>
            <li className="flex bg-white h-[70px] min-w-[310px] rounded-xl m-4 items-center justify-between">
                <div className="flex">
                    <div className="w-[25px] h-[25px] m-4">            
                        <input type='checkbox' onClick={() => handleCompleted(todoId)} defaultChecked={isCompleted} className='size-[25px]' />
                    </div>
                    <div className="">
                        <h2  style={{ textDecoration: isCompleted ? 'line-through' : 'none' }} onClick={() => handleCompleted(todoId)} className='cursor-pointer'>{todo}</h2>
                        <div className="flex">
                            <p>{time} ,</p>
                            <p className='ml-1'>{date}</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex m-4">
                        <div>
                            <FontAwesomeIcon
                                className="bg-slate-200 w-[25px] h-[25px] p-2 mr-4 rounded-md cursor-pointer"
                                icon={faTrash}
                                onClick={() => handleDelete(deleteId)}
                            />
                        </div>
                        <div >
                            <FontAwesomeIcon
                                className="bg-slate-200 w-[25px] h-[25px] p-2 mr-4 rounded-md cursor-pointer"
                                icon={faPen}
                                onClick={()=> handleEditTodo(editId, todo)}
                            />
                        </div>
                    </div>
                </div>
            </li>
        </div>
    );
}


