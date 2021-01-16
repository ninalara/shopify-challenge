/* eslint react/prop-types: 0 */
import React from 'react';
import useMovieResultsService from '../services/useMovieResults.service';
import { Movie, Movies } from '../types/Movie';
import SearchResultsRow from './SearchResultsRow';

interface Props {
    searchedTitle: string;
    nominatedMovies: Movies;
    onAddNominatedMovie: (searchResult: Movie) => void;
}

const SearchResultsTable: React.FC<Props> = ({ searchedTitle, nominatedMovies, onAddNominatedMovie }) => {
    const searchResults = useMovieResultsService(searchedTitle);
    const searchResultRows: JSX.Element[] = [];
    if (searchResults.status === 'loaded' && searchResults.payload != undefined) {
        searchResults.payload.forEach((searchResult: Movie) => {
            if (searchResult.Type !== 'movie') return;
            if (nominatedMovies.find((movie) => movie.imdbID === searchResult.imdbID)) {
                searchResult.isNominated = true;
            } else {
                searchResult.isNominated = false;
            }
            searchResultRows.push(
                <SearchResultsRow
                    key={searchResult.imdbID}
                    searchResult={searchResult}
                    onAddNominatedMovie={onAddNominatedMovie}
                />,
            );
        });
    }

    return (
        <table>
            <th>Search Results</th>
            <tbody>{searchResultRows}</tbody>
        </table>
    );
};

export default SearchResultsTable;
