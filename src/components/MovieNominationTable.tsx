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
        <>
            <SearchBar searchedTitle={searchedTitle} onSearchedTitleChange={handleSearchedTitleChange} />
            <div className="row">
                <div className="col-1"></div>
                <div className="col-6">
                    <SearchResultsTable
                        searchedTitle={searchedTitle}
                        nominatedMovies={nominatedMovies}
                        onAddNominatedMovie={onAddNominatedMovie}
                    />
                </div>
                <div className="col-1"></div>
                <div className="col-3">
                    <NominatedTable nominatedMovies={nominatedMovies} onRemove={onRemoveNominatedMovie} />
                </div>
                <div className="col-1"></div>
            </div>
        </>
    );
};

export default MovieNominationTable;
