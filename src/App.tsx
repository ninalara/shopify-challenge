import React from 'react';
import './App.css';
import MovieNominationTable from './components/MovieNominationTable';
import useMovieResults from './services/useMovieResults.service';

function App(): JSX.Element {
    const searchResults = new useMovieResults();
    return (
        <div className="App">
            <MovieNominationTable searchResults={searchResults.getProducts()} />
        </div>
    );
}

export default App;
