import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieNominationTable from './components/MovieNominationTable';

function App(): JSX.Element {
    return (
        <div className="App">
            <Header />
            <MovieNominationTable />
        </div>
    );
}

export default App;
