import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShopSystem from './map/ui/shopSystem';
import { MapContextProvider } from './map/context/mapContext';

function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <MapContextProvider>
                            <ShopSystem/>
                        </MapContextProvider>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
