import React from 'react';
import { Movies } from '../types/Movie';
import NominatedRow from './NominatedRow';

export interface NominatedTableProps {
    nominatedMovies: Movies;
}

class NominatedTable extends React.Component<NominatedTableProps> {
    private nominatedMovies: Movies;
    constructor(props: NominatedTableProps) {
        super(props);
        const { nominatedMovies } = this.props;
        this.nominatedMovies = nominatedMovies;
    }

    render(): JSX.Element {
        const rows: any = [];

        this.nominatedMovies.forEach((nominatedMovie) => {
            rows.push(<NominatedRow nominatedMovie={nominatedMovie} key={nominatedMovie.imdbID} />);
        });

        return (
            <table>
                <th>Nominations</th>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

export default NominatedTable;
