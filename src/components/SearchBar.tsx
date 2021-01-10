import React from 'react';

class SearchBar extends React.Component {
    render() {
        return (
            <>
                <label>Movie Title</label>
                <form>
                    <input type="text" placeholder="Search..." />
                </form>
            </>
        );
    }
}

export default SearchBar;
