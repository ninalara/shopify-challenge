import React from 'react';
import SearchResultsTable from './SearchResultsTable';
import SearchBar from './SearchBar';
import { Movie, Movies } from '../types/Movie';
import NominatedTable from './NominatedTable';

const MovieNominationTable: React.FC = () => {
    const [searchedTitle, setSearchedTitle] = React.useState('');
    const [nominatedMovies, setNominatedMovies] = React.useState<Movies>([]);

    const handleSearchedTitleChange = (newSearch: string): void => {
        setSearchedTitle(newSearch);
    };
    const onAddNominatedMovie = (nominatedMovie: Movie): void => {
        setNominatedMovies([...nominatedMovies, { ...nominatedMovie }]);
    };
    const onRemoveNominatedMovie = (nominatedMovie: Movie): void => {
        setNominatedMovies(nominatedMovies.filter((movie) => movie.imdbID !== nominatedMovie.imdbID));
    };

    return (
        <div>
            <h2>The Shoppies</h2>
            <SearchBar searchedTitle={searchedTitle} onSearchedTitleChange={handleSearchedTitleChange} />
            <tr>
                <tbody>
                    <SearchResultsTable
                        searchedTitle={searchedTitle}
                        nominatedMovies={nominatedMovies}
                        onAddNominatedMovie={onAddNominatedMovie}
                    />
                </tbody>
                <th> </th>
                <tbody>
                    <NominatedTable nominatedMovies={nominatedMovies} onRemove={onRemoveNominatedMovie} />
                </tbody>
            </tr>
        </div>
    );
};

export default MovieNominationTable;
