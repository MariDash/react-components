/* eslint-disable react/prefer-stateless-function */
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import NotFound from './pages/404';
import About from './pages/About';

import Layout from './components/Layout';

class App extends React.Component {
    render(): JSX.Element {
        return (
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        );
    }
}

export default App;
