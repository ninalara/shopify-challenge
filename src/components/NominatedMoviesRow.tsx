import React from 'react';
import { Movie } from '../types/Movie';
import MovieCell from './MovieCell';

export interface NominatedMoviesRowProps {
    nominatedMovie: Movie;
}

class NominatedMoviesRow extends React.Component<NominatedMoviesRowProps> {
    private nominatedMovie: Movie;
    constructor(props: NominatedMoviesRowProps) {
        super(props);
        const { nominatedMovie } = this.props;
        this.nominatedMovie = nominatedMovie;
    }
    render() {
        const nominatedMovie: Movie = this.nominatedMovie;

        return (
            <tr>
                <td>
                    {' '}
                    <MovieCell movie={nominatedMovie} />{' '}
                </td>
                <td>
                    {' '}
                    <button type="button">Remove</button>{' '}
                </td>
            </tr>
        );
    }
}

export default NominatedMoviesRow;
