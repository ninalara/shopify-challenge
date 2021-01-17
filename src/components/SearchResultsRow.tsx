/* eslint react/prop-types: 0 */

import React from 'react';
import { Movie, Movies } from '../types/Movie';
import MovieCell from './MovieCell';

interface Props {
    searchResult: Movie;
    nominatedMovies: Movies;
    onAddNominatedMovie: (searchResult: Movie) => void;
}

const SearchResultsRow: React.FC<Props> = ({ searchResult, nominatedMovies, onAddNominatedMovie }) => {
    const handleClick = (): void => {
        searchResult.isNominated = true;
        onAddNominatedMovie(searchResult);
    };

    const has5Nominations = nominatedMovies.length === 5;

    // if (has5Nominations) {
    //     alert('You have your 5 nominations!');
    // }

    return (
        <div className="searchResult col">
            <img width="100" src={searchResult.Poster}></img>
            <div className="button">
                <button type="button" onClick={handleClick} disabled={searchResult.isNominated || has5Nominations}>
                    Nominate
                </button>
            </div>
        </div>
        // <tr>
        //     <td>
        //         <MovieCell movie={searchResult} />
        //     </td>
        //     <td>
        //         <button type="button" onClick={handleClick} disabled={searchResult.isNominated || has5Nominations}>
        //             Nominate
        //         </button>
        //     </td>
        // </tr>
    );
};

export default SearchResultsRow;
