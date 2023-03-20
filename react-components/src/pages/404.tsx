/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Link } from 'react-router-dom';

const text = 'Page Not Found :(';

class NotFound extends React.Component {
    render(): JSX.Element {
        return (
            <div>
                <Link to="/">Go home</Link>
                <h1>{text}</h1>
            </div>
        );
    }
}

export default NotFound;
