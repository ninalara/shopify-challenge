import React from "react";
import { Movies } from "../types/Movie";
import SearchResultsRow from "./SearchResultsRow";

export interface SearchResultsTableProps {
  searchResults: Movies;
}

class SearchResultsTable extends React.Component<SearchResultsTableProps> {
  private searchResults: Movies;
  constructor(props: SearchResultsTableProps) {
    super(props);
    const { searchResults } = this.props;
    this.searchResults = searchResults;
  }

  render() {
    const rows: any = [];

    this.searchResults.forEach((searchResult) => {
      rows.push(<SearchResultsRow searchResult={searchResult} />);
    });

    return (
      <table>
        <th>Search Results</th>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default SearchResultsTable;
