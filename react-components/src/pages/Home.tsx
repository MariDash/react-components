import React from 'react';
import SearchBar from '../components/SearchBar';
import CardsList from '../components/CardsList';

class Home extends React.Component {
    render(): JSX.Element {
        return (
            <>
                <h1>Home page</h1>
                <SearchBar type="text" />
                <CardsList />
            </>
        );
    }
}

export default Home;
