/* eslint react/prop-types: 0 */

import React from 'react';
import { Movie } from '../types/Movie';
import MovieCell from './MovieCell';

interface Props {
    nominatedMovie: Movie;
    onRemove: (searchResult: Movie) => void;
}

const NominatedRow: React.FC<Props> = ({ nominatedMovie, onRemove }) => {
    const handleClick = (): void => {
        nominatedMovie.isNominated = false;
        onRemove(nominatedMovie);
    };
    return (
        <tr>
            <td>
                <MovieCell movie={nominatedMovie} />
            </td>
            <td>
                <button type="button" onClick={handleClick}>
                    Remove
                </button>
            </td>
        </tr>
    );
};

export default NominatedRow;
