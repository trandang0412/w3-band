import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { userContext } from '../context/userContext'
import { motion } from "framer-motion"


export default function AddModal() {
    const {hanleClodseAdd} = useContext(userContext)

    return (
    <div className='fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.6)] flex justify-center '>
        <div className='w-[40%] h-[20%] mt-12 bg-white'>
            <div className='float-right m-2 text-[#ff0000] hover:text-red-400 cursor-pointer'>
            <FontAwesomeIcon icon={faCircleXmark} size='2xl' onClick={hanleClodseAdd} />
            </div>
        </div>
    </div>
  )
}
