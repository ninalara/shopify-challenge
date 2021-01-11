import React from 'react';
import { Movie } from '../types/Movie';

export interface MovieCellProps {
    movie: Movie;
}

class MovieCell extends React.Component<MovieCellProps> {
    private movie: Movie;
    constructor(props: MovieCellProps) {
        super(props);
        const { movie } = this.props;
        this.movie = movie;
    }
    render(): JSX.Element {
        const movie: Movie = this.movie;
        return (
            <p>
                {movie.title} ({movie.year})
            </p>
        );
    }
}

export default MovieCell;
