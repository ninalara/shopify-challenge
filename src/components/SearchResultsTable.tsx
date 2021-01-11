import React from 'react';
import { Movies } from '../types/Movie';
import SearchResultsRow from './SearchResultsRow';

export interface SearchResultsTableProps {
    searchResults: Movies;
    searchedTitle: string;
}
class SearchResultsTable extends React.Component<SearchResultsTableProps> {
    private searchResults: Movies;
    constructor(props: SearchResultsTableProps) {
        super(props);
        const { searchResults } = this.props;
        this.searchResults = searchResults;
    }

    render(): JSX.Element {
        const searchedTitle = this.props.searchedTitle;
        const rows: any = [];

        this.props.searchResults.forEach((searchResult) => {
            console.log(searchedTitle);
            if (searchResult.title.indexOf(searchedTitle) === -1) {
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
