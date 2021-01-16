/* eslint react/prop-types: 0 */
import React from 'react';
import { Movie, Movies } from '../types/Movie';
import NominatedRow from './NominatedRow';

interface Props {
    nominatedMovies: Movies;
    onRemove: (searchResult: Movie) => void;
}

const NominatedTable: React.FC<Props> = ({ nominatedMovies, onRemove }) => {
    const nominatedMovieRows: JSX.Element[] = [];
    if (nominatedMovies != undefined) {
        nominatedMovies.forEach((nominatedMovie) => {
            nominatedMovieRows.push(
                <NominatedRow key={nominatedMovie.imdbID} nominatedMovie={nominatedMovie} onRemove={onRemove} />,
            );
        });
    }
    return (
        <table>
            <th>Nominations</th>
            <tbody>{nominatedMovieRows}</tbody>
        </table>
    );
};

export default NominatedTable;
