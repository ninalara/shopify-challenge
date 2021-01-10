import React from 'react';
import { Movie } from '../types/Movie';
import MovieCell from './MovieCell';

export interface SearchResultsRowProps {
    searchResult: Movie;
}

class SearchResultsRow extends React.Component<SearchResultsRowProps> {
    private searchResult: Movie;
    constructor(props: SearchResultsRowProps) {
        super(props);
        const { searchResult } = this.props;
        this.searchResult = searchResult;
    }
    render() {
        const searchResult: Movie = this.searchResult;

        return (
            <tr>
                <td>
                    {' '}
                    <MovieCell movie={searchResult} />{' '}
                </td>
                <td>
                    {' '}
                    <button type="button">Nominate</button>{' '}
                </td>
            </tr>
        );
    }
}

export default SearchResultsRow;
