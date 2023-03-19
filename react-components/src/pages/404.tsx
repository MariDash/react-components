import { Link } from 'react-router-dom';

function NotFound() {
    const text = 'Page Not Found :(';
    return (
        <div>
            <Link to="/">Go home</Link>
            <h1>{text}</h1>
        </div>
    );
}

export default NotFound;
