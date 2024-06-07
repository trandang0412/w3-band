import Table from 'react-bootstrap/Table';
import { fetchAllUser } from '../service/userService';
import { useContext } from 'react';
import { userContext } from '../context/userContext';

export default function ListUser() {
    const { getUserData } = useContext(userContext);

    console.log(getUserData);

    return (
            <div className='py-7'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getUserData.length>0 && getUserData.map((item) => {
                            return(
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.first_name}</td>
                                    <td>{item.last_name}</td>
                                    <td>{item.email}</td>
                                </tr>
                            )
                            })}
                    </tbody>
                </Table>
            </div>
    );
}
