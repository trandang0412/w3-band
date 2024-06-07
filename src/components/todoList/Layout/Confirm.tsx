import { useContext } from 'react';
import { motion } from 'framer-motion'
import { TodoContext } from '../context/TodoContext';

function Confirm() {

    const { handleConfirmDelete, handleCancelDelete } = useContext(TodoContext)


    return (
        <div className='flex justify-center items-center fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.6)]'>
            <motion.div
                className="bg-white mt-2 p-2 rounded-2xl w-[30%] min-h-[10%] flex flex-col justify-center items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: '0.7' }}
            >
                <p className="font-bold">Are you sure you want to delete this item?</p>
                <div className="flex justify-between w-[50%] pt-2">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 1.1 }}
                        className="w-[70px] h-[25px] bg-blue-600 rounded-3xl text-white"
                        onClick={handleConfirmDelete}>Yes</motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 1.1 }}
                        className="w-[70px] h-[25px] bg-red-600 rounded-3xl text-white"
                        onClick={handleCancelDelete}>Cancle</motion.button>
                </div>
            </motion.div>
        </div>
    );
}

export default Confirm;
