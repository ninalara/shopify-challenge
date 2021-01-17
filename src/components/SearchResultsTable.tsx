/* eslint react/prop-types: 0 */
import React from 'react';
import useMovieResultsService from '../services/useMovieResults.service';
import { Movie, Movies } from '../types/Movie';
import Loader from './Loader';
import SearchResultsRow from './SearchResultsRow';
import defaultPoster from '../template/defaultPoster.png';

interface Props {
    searchedTitle: string;
    nominatedMovies: Movies;
    onAddNominatedMovie: (searchResult: Movie) => void;
}

const SearchResultsTable: React.FC<Props> = ({ searchedTitle, nominatedMovies, onAddNominatedMovie }) => {
    const searchResults = useMovieResultsService(searchedTitle);
    const searchResultRows: JSX.Element[] = [];

    const renderSearchResults = (searchResults: Movies): void => {
        searchResults = searchResults.filter((movie: Movie) => movie.Type === 'movie');
        searchResults.forEach((searchResult: Movie) => {
            const isNominated = undefined !== nominatedMovies.find((movie) => movie.imdbID === searchResult.imdbID);
            searchResult.isNominated = isNominated;

            if (searchResult.Poster === 'N/A') searchResult.Poster = defaultPoster;

            searchResultRows.push(
                <SearchResultsRow
                    key={searchResult.imdbID}
                    searchResult={searchResult}
                    nominatedMovies={nominatedMovies}
                    onAddNominatedMovie={onAddNominatedMovie}
                />,
            );
        });
    };

    if (searchResults.status === 'loaded' && searchResults.payload !== undefined) {
        renderSearchResults(searchResults.payload);
        console.log(searchResults.payload);
    }

    return (
        <>
            {searchResults.status === 'loading' && <Loader />}
            <div className="image-grid-container">
                {searchResults.status === 'loaded' && searchResults.payload !== undefined && searchResultRows}
            </div>
            {searchResults.status === 'loaded' && searchResults.payload === undefined && searchedTitle.length >= 3 && (
                <p>no results found</p>
            )}
            {searchResults.status === 'loaded' && searchedTitle.length < 3 && <p>too many results please specify</p>}
            {searchResults.status === 'error' && (
                <p>Error, something weird happened with the search. {searchResults.error}</p>
            )}
        </>
    );
};

export default SearchResultsTable;
