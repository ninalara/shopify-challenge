import React from 'react';
import { Movies } from '../types/Movie';
import SearchResultsTable from './SearchResultsTable';
import SearchBar from './SearchBar';
import NominatedTable from './NominatedTable';

export interface MovieNominationTableState {
    searchedTitle: string;
    searchResults: Movies;
}

class MovieNominationTable extends React.Component<Record<string, never>, MovieNominationTableState> {
    private searchResults: Movies;
    constructor() {
        super({});
        const { searchResults } = this.props;
        this.searchResults = searchResults;
        this.state = {
            searchedTitle: '',
            searchResults: [],
        };
        this.handleSearchedTitleChange = this.handleSearchedTitleChange.bind(this);
    }

    handleSearchedTitleChange(searchedTitle: string): void {
        this.setState({
            searchedTitle: searchedTitle,
        });
    }

    handleSearchResultsChange(searchResults: Movies): void {
        this.setState({
            searchResults: searchResults,
        });
    }

    render(): JSX.Element {
        return (
            <div>
                <h2>The Shoppies</h2>
                <SearchBar
                    searchedTitle={this.state.searchedTitle}
                    onSearchedTitleChange={this.handleSearchedTitleChange}
                />
                <tr>
                    <tbody>
                        <SearchResultsTable searchedTitle={this.state.searchedTitle} />
                    </tbody>
                    <th> </th>
                    <tbody>
                        <NominatedTable nominatedMovies={this.state.searchResults} />
                    </tbody>
                </tr>
            </div>
        );
    }
}

export default MovieNominationTable;
