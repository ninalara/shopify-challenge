/* eslint react/prop-types: 0 */

import React from 'react';
import { Movie } from '../types/Movie';
import MovieCell from './MovieCell';

interface Props {
    searchResult: Movie;
    onAddNominatedMovie: (searchResult: Movie) => void;
}

const SearchResultsRow: React.FC<Props> = ({ searchResult, onAddNominatedMovie }) => {
    const handleClick = (): void => {
        searchResult.isNominated = true;
        onAddNominatedMovie(searchResult);
    };

    return (
        <tr>
            <td>
                <MovieCell movie={searchResult} />
            </td>
            <td>
                <button type="button" onClick={handleClick} disabled={searchResult.isNominated}>
                    Nominate
                </button>
            </td>
        </tr>
    );
};

export default SearchResultsRow;
