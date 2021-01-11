import React from 'react';
import useMovieResults from '../services/useMovieResults.service';
import { Movies } from '../types/Movie';

export interface SearchBarProps {
    searchedTitle: string;
    onSearchedTitleChange: (searchedTitle: string) => void;
}

class SearchBar extends React.Component<SearchBarProps> {
    constructor(props: SearchBarProps) {
        super(props);
        this.handleSearchedTitleChange = this.handleSearchedTitleChange.bind(this);
        const xxx = new useMovieResults();
    }

    handleSearchedTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.props.onSearchedTitleChange(event.target.value);
    }

    render(): JSX.Element {
        return (
            <>
                <label>Movie Title</label>
                <form>
                    <input type="text" value={this.props.searchedTitle} onChange={this.handleSearchedTitleChange} />
                </form>
            </>
        );
    }
}

export default SearchBar;
