import { useContext, useState } from 'react';
import Header from '../ui/Header';
import Button from '../ui/Button';
import AddTodo from './AddTodo';
import TodoList from '../ui/TodoList'
import Confirm from './Confirm';
import { TodoContext } from '../context/TodoContext';
import { Link } from 'react-router-dom';


const Todo = () => {


    //open list tododone (riêng component)
    const [selectionOption, setSelectionOntion] = useState('option1')


    //context
    const { isShowConfirmDelete, displayTodo, displayDone, handleOpenAdd, isAdd } = useContext(TodoContext);

    const doneNewArr = Object.values(displayDone); //object.values(name) chuyển object thành array
    const todoNewArr = Object.values(displayTodo)

    //dùng useEffect để lưu dữ liệu vào local storage

    return (
        <div className="fixed flex flex-col top-0 left-0 right-0 bottom-0 justify-center items-center bg-slate-200 ">
            <div className="bg-white w-[70%] min-h-[500px]  flex flex-col justify-center items-center rounded-3xl">
                <Header Name="TODO LIST"></Header>
                <div className="mt-8 w-[70%] ">
                    <div className="flex justify-between ">
                        <Button onClick={handleOpenAdd} type='button' Name="Add Todo" style={{ width: '140px' }} />
                        <select value={selectionOption} onChange={(e) => setSelectionOntion(e.target.value)} className="bg-slate-300 w-[150px] h-[50px] p-2 m-6 rounded-lg outline-none">
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

                <div className="m-8  bg-slate-200 rounded-2xl flex flex-col w-[70%] justify-start items-center  overflow-y-auto">
                    {selectionOption === 'option1' && (
                        <div className="w-[99%] ">
                            {todoNewArr.map((item) => (
                                <TodoList
                                    key={item.id}
                                    todo={item.todo}
                                    time={item.time}
                                    date={item.date}
                                    todoId={item.id}
                                    isCompleted={item.isCompleted}
                                    isEditing={item.isEditing}
                                    deleteId={item.id}
                                    editId={item.id}
                                >
                                </TodoList>
                            ))}
                            {doneNewArr.map((item) => (
                                <TodoList
                                    key={item.id}
                                    todo={item.todo}
                                    time={item.time}
                                    date={item.date}
                                    todoId={item.id}
                                    isCompleted={item.isCompleted}
                                    isEditing={item.isEditing}
                                    deleteId={item.id}
                                    editId={item.id}
                                >
                                </TodoList>
                            ))}

                        </div>
                    )}
                    {selectionOption === 'option2' && (
                        <div className="w-[99%]">
                            {todoNewArr.map((item) => (
                                <TodoList
                                    key={item.id}
                                    todo={item.todo}
                                    time={item.time}
                                    date={item.date}
                                    todoId={item.id}
                                    isCompleted={item.isCompleted}
                                    isEditing={item.isEditing}
                                    deleteId={item.id}
                                    editId={item.id}
                                >
                                </TodoList>
                            ))}
                        </div>
                    )}
                    {selectionOption === 'option3' && (
                        <div className="w-[99%]">
                            {doneNewArr.map((item) => (
                                <TodoList
                                    key={item.id}
                                    todo={item.todo}
                                    time={item.time}
                                    date={item.date}
                                    todoId={item.id}
                                    isCompleted={item.isCompleted}
                                    isEditing={item.isEditing}
                                    deleteId={item.id}
                                    editId={item.id}
                                >
                                </TodoList>
                            ))}
                        </div>
                    )}


                </div>
            </div>

            {/* check open add todo */}
            {isAdd && (
                <AddTodo />
            )}

            {/* confirm delete */}
            {isShowConfirmDelete && (
                <Confirm />
            )}

            <Link
                to="/photo"
                className='text-blue-400 p-5'
            >
                Chuyển sang bài tập useEffect
            </Link>

        </div>
    );
};
export default Todo;


