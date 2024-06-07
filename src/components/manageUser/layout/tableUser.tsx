import { Container } from 'react-bootstrap';
import UserContextProvider from '../context/userContext';
import Header from '../ui/Header';
import ListUser from '../ui/listUser';
import Nav from '../ui/Nav';

export default function tableUser() {
    return (
        <div className="p-2">
            <Header></Header>
            <Container>
                <Nav></Nav>
                <ListUser></ListUser>
            </Container>
        </div>
    );
}
