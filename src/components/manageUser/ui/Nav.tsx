import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { userContext } from '../context/userContext';
import AddModal from './AddModal';

export default function Nav() {

    const {handleOpenAdd, isOpenAddModal} = useContext(userContext)
    return (
        <>
            <Button 
            onClick={handleOpenAdd}
            className='float-right my-4'
            >Add new user</Button>

            {isOpenAddModal && (
                <AddModal/>
            )}
        </>
    );
}
