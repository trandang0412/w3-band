import UserContextProvider from './components/manageUser/context/userContext';
import TableUser from './components/manageUser/layout/tableUser';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <UserContextProvider>
                            <TableUser />
                        </UserContextProvider>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
