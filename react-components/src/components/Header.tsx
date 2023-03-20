/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { NavLink } from 'react-router-dom';

function setActive(isActive: boolean) {
    return isActive ? 'active-link' : '';
}

class Header extends React.Component {
    render(): JSX.Element {
        return (
            <header className="wrapper header">
                <NavLink
                    to="/"
                    className={({ isActive }) => setActive(isActive)}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) => setActive(isActive)}
                >
                    About
                </NavLink>
            </header>
        );
    }
}

export default Header;
