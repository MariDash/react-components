import { Route, Routes } from 'react-router';
import { HashRouter } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/404';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

function WrappedApp() {
    return (
        <HashRouter>
            <App />
        </HashRouter>
    );
}

export default WrappedApp;
