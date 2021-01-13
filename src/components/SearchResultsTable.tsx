import React from 'react';
import { Movie, Movies } from '../types/Movie';
import SearchResultsRow from './SearchResultsRow';

export interface SearchResultsTableProps {
    searchedTitle: string;
}
class SearchResultsTable extends React.Component<SearchResultsTableProps> {
    private searchResults: Movies;
    constructor(props: SearchResultsTableProps) {
        super(props);
        this.searchResults = [];
    }

    render(): JSX.Element {
        const searchedTitle = this.props.searchedTitle;
        // const searchResults = useMovieResults(searchedTitle);
        const rows: any = [];
        // if (searchResults.status === 'loaded') {
        //     searchResults.payload.forEach((searchResult: Movie) => {
        //         rows.push(<SearchResultsRow searchResult={searchResult} key={searchResult.imdbID} />);
        //     });
        // }

        return (
            <table>
                <th>Search Results</th>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

export default SearchResultsTable;
