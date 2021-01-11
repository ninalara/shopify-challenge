import React from 'react';
import { Movies } from '../types/Movie';
import SearchResultsTable from './SearchResultsTable';
import SearchBar from './SearchBar';
import NominatedTable from './NominatedTable';

export interface MovieNominationTableProps {
    searchResults: Movies;
}
export interface MovieNominationTableState {
    searchedTitle: string;
}

class MovieNominationTable extends React.Component<MovieNominationTableProps, MovieNominationTableState> {
    private searchResults: Movies;
    constructor(props: MovieNominationTableProps) {
        super(props);
        const { searchResults } = this.props;
        this.searchResults = searchResults;
        this.state = {
            searchedTitle: '',
        };
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange(searchedTitle: string): void {
        this.setState({
            searchedTitle: searchedTitle,
        });
    }

    render(): JSX.Element {
        return (
            <div>
                <h2>The Shoppies</h2>
                <SearchBar searchedTitle={this.state.searchedTitle} onFilterTextChange={this.handleFilterTextChange} />
                <tr>
                    <tbody>
                        <SearchResultsTable
                            searchResults={this.searchResults}
                            searchedTitle={this.state.searchedTitle}
                        />
                    </tbody>
                    <th> </th>
                    <tbody>
                        <NominatedTable nominatedMovies={this.searchResults} />
                    </tbody>
                </tr>
            </div>
        );
    }
}

export default MovieNominationTable;
