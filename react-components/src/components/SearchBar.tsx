/* eslint-disable react/destructuring-assignment */
import React from 'react';

interface SearchBarState {
    value: string;
}

interface SearchBarProps {
    type: string;
}

class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
    type: string;

    constructor(props: SearchBarProps) {
        super(props);

        const inputValue = localStorage.getItem('inputValue') || '';
        this.type = props.type;
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
                type={this.type}
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
