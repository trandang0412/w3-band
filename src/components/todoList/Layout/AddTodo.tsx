import { useContext, useState, } from 'react';

import CloseBtn from '../ui/CloseBtn';
import { motion } from "framer-motion"

//context
import { SubmitHandler, useForm } from 'react-hook-form';
import { TodoContext } from '../context/TodoContext';




interface Iinput {
    input_todo: string,
    input_date: string,
    input_time: string,
}
// setTodoList
export default function AddTodo() {

    const { handleAddTodo, todoChange, timeChange, dateChange, handleCloseAdd } = useContext(TodoContext)

    const { register, handleSubmit, formState: { errors } } = useForm<Iinput>()

    const handleOnSubmit: SubmitHandler<Iinput> = (data) => {

        if (editTodoId === null) {
            handleAddTodo() // Call handleAddTodo if needed
        } else {
            handleSaveEdit()
        }

        handleCloseAdd(); // Call handleCloseAdd to close the modal
    };



    const { editTodoId, handleSaveEdit, newTitle } = useContext(TodoContext)

    return (
        <div className="flex top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.6)] fixed items-center justify-center">
            <motion.div
                className="bg-blue-200 w-[30%] min-h-[40%] flex flex-col text-center justify-center items-center rounded-3xl"
                initial={{ y: -150 }}
                animate={{ y: 0 }}
                transition={{ duration: '0.5' }}
            >
                <div className="w-full block relative h-[64px]">
                    <CloseBtn onClick={handleCloseAdd} style={{ zIndex: 1 }} />
                    <h1 className='text-[30px] font-bold opacity-50'>{editTodoId !== null ? 'EDIT TODO' : 'CREATE TODO'}</h1>
                </div>

                <form onSubmit={handleSubmit(handleOnSubmit)} className='flex flex-col w-full justify-center items-center'>
                    <input
                        {...register("input_todo", { required: true })}
                        placeholder={"Input to do"} type="input"
                        style={{}}
                        onChange={todoChange}
                        className="p-2 m-2 rounded-full w-[70%] outline-none cursor-pointer"
                        defaultValue={editTodoId !== null ? newTitle : ''}
                    />
                    {errors.input_todo && <span className='mb-3 -m-2 text-red-600'>* Please enter what to do</span>}

                    <input {...register("input_time", { required: true })} placeholder="Deadline" type="time" onChange={timeChange} style={{}} className="p-2 m-2 rounded-full w-[70%] outline-none cursor-pointer" />
                    {errors.input_time && <span className='mb-3 -m-2 text-red-600'>* Please enter timeline</span>}

                    <input {...register("input_date", { required: true })} placeholder="Deadline" type="date" onChange={dateChange} style={{}} className="p-2 m-2 rounded-full w-[70%] outline-none cursor-pointer" />
                    {errors.input_date && <span className='mb-3 -m-2 text-red-600'>* Please enter deadline</span>}

                    <motion.input
                        type="submit"
                        name='submit'
                        value={editTodoId !== null ? 'Update' : 'Submit'}
                        className='bg-blue-700 text-white rounded-full w-[40%] h-[50px] m-6 cursor-pointer'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 1.1 }}
                    />
                </form>
            </motion.div>



        </div>
    );
}

