import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { publicRoutes } from './routes';

function App() {
    return (
        <Router>
            <Routes>
                {publicRoutes.map((route) => {
                    const Element = route.element;

                    return <Route key={route.path} path={route.path} element={<Element />} />;
                })}
            </Routes>
        </Router>
    );
}

export default App;
