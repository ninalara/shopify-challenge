import React from 'react';
import { Movies } from '../types/Movie';
import NominatedMoviesRow from './NominatedMoviesRow';

export interface NominatedMoviesTableProps {
    nominatedMovies: Movies;
}

class NominatedMoviesTable extends React.Component<NominatedMoviesTableProps> {
    private nominatedMovies: Movies;
    constructor(props: NominatedMoviesTableProps) {
        super(props);
        const { nominatedMovies } = this.props;
        this.nominatedMovies = nominatedMovies;
    }

    render() {
        const rows: any = [];

        this.nominatedMovies.forEach((nominatedMovie) => {
            rows.push(<NominatedMoviesRow nominatedMovie={nominatedMovie} />);
        });

        return (
            <table>
                <th>Nominations</th>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

export default NominatedMoviesTable;
