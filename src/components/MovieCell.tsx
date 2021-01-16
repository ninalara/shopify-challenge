/* eslint react/prop-types: 0 */
import React from 'react';
import { Movie } from '../types/Movie';

interface Props {
    movie: Movie;
}

const MovieCell: React.FC<Props> = ({ movie }) => {
    return (
        <div>
            <img width="100" src={movie.Poster}></img>
            <p>
                {movie.Title} ({movie.Year})
            </p>
        </div>
    );
};

export default MovieCell;
