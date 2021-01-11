import React from 'react';
import { Movie } from '../types/Movie';
import MovieCell from './MovieCell';

export interface NominatedRowProps {
    nominatedMovie: Movie;
}

class NominatedRow extends React.Component<NominatedRowProps> {
    private nominatedMovie: Movie;
    constructor(props: NominatedRowProps) {
        super(props);
        const { nominatedMovie } = this.props;
        this.nominatedMovie = nominatedMovie;
    }
    render(): JSX.Element {
        const nominatedMovie: Movie = this.nominatedMovie;

        return (
            <tr>
                <td>
                    <MovieCell movie={nominatedMovie} />
                </td>
                <td>
                    <button type="button">Remove</button>
                </td>
            </tr>
        );
    }
}

export default NominatedRow;
