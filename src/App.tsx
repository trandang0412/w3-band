import Photo from "./components/photo/Photo";
import Todo from "./components/todoList/Layout/Todo";
import TodoContextProvider from "./components/todoList/context/TodoContext";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <Router>
            {/* chúng ta có thể sử dụng link ở bất kỳ đâu trong các file được bọc bởi route */}
            {/* <Link to="/photo"> chuyển qua trang photo </Link> */}
            <Routes>
                <Route path="/" element={
                    <TodoContextProvider>
                        <Todo/>
                    </TodoContextProvider>
                } />
                <Route path="/photo" element={
                   <Photo/>
                }/>
                
            </Routes>
        </Router>
        // <Router>
        //     <Routes>
        //         <Route path="/">
        //             <div className="cover">
        //                 <TodoContextProvider>
        //                     <Todo />
        //                 </TodoContextProvider>
        //             </div>
        //         </Route>
        //     </Routes>
        // </Router>
    );
}

export default App;
