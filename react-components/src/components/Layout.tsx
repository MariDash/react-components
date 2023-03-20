/* eslint-disable react/prefer-stateless-function */
import { Outlet } from 'react-router-dom';
import React from 'react';
import Header from './Header';
import Footer from './Footer';

class Layout extends React.Component {
    render(): JSX.Element {
        return (
            <>
                <Header />
                <main className="main">
                    <Outlet />
                </main>
                <Footer />
            </>
        );
    }
}

export default Layout;
