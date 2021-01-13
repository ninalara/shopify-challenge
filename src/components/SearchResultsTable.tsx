import React from 'react';
import useMovieResults from '../services/useMovieResults.service';
import { Movies } from '../types/Movie';
import SearchResultsRow from './SearchResultsRow';

export interface SearchResultsTableProps {
    searchedTitle: string;
}
class SearchResultsTable extends React.Component<SearchResultsTableProps> {
    private searchResults: Movies;
    // private api = new useMovieResults();
    constructor(props: SearchResultsTableProps) {
        super(props);
        this.searchResults = [];
    }

    render(): JSX.Element {
        const searchedTitle = this.props.searchedTitle;
        // const searchResults = this.api.getProducts(searchedTitle);
        const rows: any = [];

        this.searchResults.forEach((searchResult) => {
            console.log(searchedTitle);
            if (searchResult.Title.indexOf(searchedTitle) === -1) {
                return;
            }
            rows.push(<SearchResultsRow searchResult={searchResult} key={searchResult.imdbID} />);
        });

        return (
            <table>
                <th>Search Results</th>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

export default SearchResultsTable;
