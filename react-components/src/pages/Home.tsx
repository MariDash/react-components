/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import SearchBar from '../components/SearchBar';

class Home extends React.Component {
    render(): JSX.Element {
        return (
            <>
                <h1>Home page</h1>
                <SearchBar />
            </>
        );
    }
}

export default Home;
