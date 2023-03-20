/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

interface SearchBarState {
    value: string;
}

class SearchBar extends React.Component<never, SearchBarState> {
    constructor(props: never) {
        super(props);

        const inputValue = localStorage.getItem('inputValue') || '';

        this.state = {
            value: inputValue,
        };
    }

    componentWillUnmount() {
        localStorage.setItem('inputValue', this.state.value);
    }

    onChange = (e: React.FormEvent): void => {
        this.setState({ value: (e.currentTarget as HTMLInputElement).value });
    };

    render(): JSX.Element {
        return (
            <input
                type="text"
                className="input"
                placeholder="
        Start typing here..."
                value={this.state.value}
                onChange={this.onChange}
            />
        );
    }
}

export default SearchBar;
