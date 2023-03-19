import { NavLink, Outlet } from 'react-router-dom';

function setActive(isActive: boolean) {
    return isActive ? 'active-link' : '';
}

function Layout() {
    return (
        <>
            <header>
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
            <main className="main">
                <Outlet />
            </main>
            <footer>2023</footer>
        </>
    );
}

export default Layout;
