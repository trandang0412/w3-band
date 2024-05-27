import React from 'react';
import Input from './ui/Input';
import Button from './ui/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

export default function Modify({ props, setEditTextParent, handleClickOut, handleSaveEditParent }) {
    return (
        <div className="flex top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.6)] fixed items-center justify-center">
            <div className="bg-blue-200 w-[30%] h-[40%] flex flex-col text-center justify-center items-center rounded-3xl ">
                <div className="w-full relative h-[70px]">
                    <FontAwesomeIcon
                        onClick={handleClickOut}
                        icon={faCircleXmark}
                        className="absolute top-0 right-0 m-4 cursor-pointer"
                        size="2xl"
                        color="red"
                    />
                </div>
                <div>
                    <Input placeholder="Modify" />
                    <Input placeholder="Modify" type='time' />
                    <Input placeholder="Modify"  type='date' />
                </div>

                <Button Name="Confirm" onClick={handleSaveEditParent} />
                {}
            </div>
        </div>
    );
}

// onChange={(e) => setEditText(e.target.value)}
// onClick={()=> handleSaveEditParent(index)}
