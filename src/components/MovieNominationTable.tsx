import React from "react";
import { Movies } from "../types/Movie";
import SearchResultsTable from "./SearchResultsTable";
import SearchBar from "./SearchBar";
import NominatedMoviesTable from "./NominatedMoviesTable";

export interface MovieNominationTableProps {
    searchResults: Movies;
}

class MovieNominationTable extends React.Component<MovieNominationTableProps> {
    private searchResults: Movies;
    constructor(props: MovieNominationTableProps) {    
        super(props);    
        const { searchResults } = this.props;
        this.searchResults = searchResults;
    }

    render() {
      return (
        <div>
          <h2>The Shoppies</h2>
          <SearchBar />
          <tr>
              <tbody><SearchResultsTable searchResults={this.searchResults} /></tbody>
              <th> </th>
              <tbody><NominatedMoviesTable nominatedMovies={this.searchResults} /></tbody>
          </tr>
          
          
        </div>
      );
    }
}

export default MovieNominationTable;