/* eslint react/prop-types: 0 */
import React from 'react';
import useMovieResults from '../services/useMovieResults.service';
import { Movie, Movies } from '../types/Movie';
import SearchResultsRow from './SearchResultsRow';

interface Props {
    searchedTitle: string;
}

const SearchResultsTable: React.FC<Props> = ({ searchedTitle }) => {
    const searchResults = useMovieResults(searchedTitle);
    const rows: JSX.Element[] = [];
    if (searchResults.status === 'loaded' && searchResults.payload != undefined) {
        const array: Movies = searchResults.payload;
        console.log(searchResults.payload);
        array.forEach((searchResult: Movie) => {
            rows.push(<SearchResultsRow searchResult={searchResult} key={searchResult.imdbID} />);
        });
    }
    return (
        <table>
            <th>Search Results</th>
            <tbody>{rows}</tbody>
        </table>
    );
};

export default SearchResultsTable;
