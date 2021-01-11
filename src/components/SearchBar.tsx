import React from 'react';

export interface SearchBarProps {
    searchedTitle: string;
    onFilterTextChange: any;
}

class SearchBar extends React.Component<SearchBarProps> {
    constructor(props: SearchBarProps) {
        super(props);
        this.handleSearchedTitleChange = this.handleSearchedTitleChange.bind(this);
    }

    handleSearchedTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.props.onFilterTextChange(event.target.value);
    }

    render(): JSX.Element {
        return (
            <>
                <label>Movie Title</label>
                <form>
                    <input type="text" value={this.props.searchedTitle} onChange={this.handleSearchedTitleChange} />
                </form>
            </>
        );
    }
}

export default SearchBar;
