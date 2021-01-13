import React from 'react';
import './App.css';
import MovieNominationTable from './components/MovieNominationTable';
import useMovieResults from './services/useMovieResults.service';
import { Movie } from './types/Movie';

function App(): JSX.Element {
    const service = useMovieResults('bad company');
    if (service.status === 'loaded') {
        console.log(service.payload);
        service.payload.map(function (movie: Movie) {
            // printing element
            console.log('key : ', movie.Year);
        });
    }
    return (
        <div className="App">
            {service.status === 'loaded' &&
                service.payload.map((movie: Movie) => <h3 key={movie.imdbID}>{movie.Year}</h3>)}
            {/* <MovieNominationTable /> */}
        </div>
    );
}

export default App;
