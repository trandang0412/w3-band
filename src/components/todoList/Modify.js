import React from 'react'
import Input from './ui/Input'
import Button from './ui/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

export default function Modify({props, handleClickOut, handleModify}) {
  return (
    <div className="flex top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.6)] fixed items-center justify-center">
        <div className="bg-blue-200 w-[400px] h-[200px] flex flex-col text-center justify-center items-center ">
            <Input placeholder='yeahh'/>
            <div className='flex'>
                <Button Name='Conform' />{}
                <FontAwesomeIcon onClick={handleClickOut} icon={faCircleXmark} className='m-4 cursor-pointer' size='2xl'/>
            </div>
        </div>
    </div>
  )
}

